#!/usr/bin/env node
/**
 * Campaign Tracking Hook - Logs campaign actions for measurement
 *
 * Fires: After campaign-related tool calls
 * Purpose: Track campaign activities for analytics and reporting
 *
 * Exit Codes:
 *   0 - Success (non-blocking)
 */

const fs = require('fs');
const path = require('path');

// Log file location
const TRACKING_LOG_DIR = 'campaigns';
const TRACKING_LOG_FILE = 'tracking.log';

// Actions to track (matched against tool names or patterns)
const TRACKED_PATTERNS = [
  'publish',
  'send_email',
  'launch_campaign',
  'post_social',
  'create_content',
  'schedule_post',
  'campaign_'
];

// Agent types associated with campaign activities
const CAMPAIGN_AGENTS = [
  'campaign-manager',
  'campaign-debugger',
  'social-media-manager',
  'email-wizard',
  'content-creator',
  'analytics-analyst'
];

/**
 * Ensure tracking directory exists
 * @returns {string} Path to tracking log
 */
function ensureTrackingDir() {
  const logPath = path.join(TRACKING_LOG_DIR, TRACKING_LOG_FILE);

  if (!fs.existsSync(TRACKING_LOG_DIR)) {
    fs.mkdirSync(TRACKING_LOG_DIR, { recursive: true });
  }

  return logPath;
}

/**
 * Extract campaign ID from context or generate one
 * @param {Object} payload - Hook payload
 * @returns {string} Campaign ID
 */
function extractCampaignId(payload) {
  // Try to extract from task description or context
  const taskDesc = payload.task_description || payload.prompt || '';

  // Look for campaign ID patterns
  const patterns = [
    /campaign[:\s-_]*([a-z0-9-_]+)/i,
    /campaign_id[:\s]*([a-z0-9-_]+)/i,
    /#([A-Z0-9]+-\d+)/  // JIRA-style
  ];

  for (const pattern of patterns) {
    const match = taskDesc.match(pattern);
    if (match) return match[1];
  }

  // Generate session-based ID
  return `session-${Date.now()}`;
}

/**
 * Create tracking entry
 * @param {Object} payload - Hook payload
 * @param {string} action - Action type
 * @returns {Object} Tracking entry
 */
function createTrackingEntry(payload, action) {
  return {
    timestamp: new Date().toISOString(),
    action: action,
    agent: payload.agent_type || 'unknown',
    agent_id: payload.agent_id || 'unknown',
    campaign_id: extractCampaignId(payload),
    session_id: payload.session_id || process.env.CK_SESSION_ID || null,
    cwd: payload.cwd || process.cwd(),
    details: {
      tool: payload.tool_name || null,
      task_preview: (payload.task_description || '').substring(0, 200)
    }
  };
}

/**
 * Append entry to tracking log
 * @param {string} logPath - Path to log file
 * @param {Object} entry - Tracking entry
 */
function appendToLog(logPath, entry) {
  const line = JSON.stringify(entry) + '\n';
  fs.appendFileSync(logPath, line, 'utf8');
}

/**
 * Determine if this action should be tracked
 * @param {Object} payload - Hook payload
 * @returns {string|null} Action type if trackable, null otherwise
 */
function getTrackableAction(payload) {
  const agentType = payload.agent_type || '';
  const toolName = (payload.tool_name || '').toLowerCase();
  const taskDesc = (payload.task_description || '').toLowerCase();

  // Check if agent is campaign-related
  if (CAMPAIGN_AGENTS.includes(agentType)) {
    return `agent:${agentType}`;
  }

  // Check if tool/action matches tracked patterns
  for (const pattern of TRACKED_PATTERNS) {
    if (toolName.includes(pattern) || taskDesc.includes(pattern)) {
      return `action:${pattern}`;
    }
  }

  return null;
}

/**
 * Main hook execution
 */
async function main() {
  try {
    const stdin = fs.readFileSync(0, 'utf-8').trim();
    if (!stdin) process.exit(0);

    const payload = JSON.parse(stdin);

    // Check if this action should be tracked
    const action = getTrackableAction(payload);
    if (!action) {
      process.exit(0);
    }

    // Ensure log directory exists
    const logPath = ensureTrackingDir();

    // Create and append tracking entry
    const entry = createTrackingEntry(payload, action);
    appendToLog(logPath, entry);

    // Silent success - don't add to agent context
    process.exit(0);
  } catch (error) {
    // Fail silently - don't block execution
    process.exit(0);
  }
}

main();
