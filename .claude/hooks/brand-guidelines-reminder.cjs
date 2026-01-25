#!/usr/bin/env node
/**
 * Brand Guidelines Reminder Hook - Injects brand context into content workflows
 *
 * Fires: Before content-creator, copywriter, social-media-manager agents
 * Purpose: Ensure brand consistency by injecting guidelines into agent context
 *
 * Exit Codes:
 *   0 - Success (non-blocking)
 */

const fs = require('fs');
const path = require('path');

// Brand guidelines file locations (checked in order)
const BRAND_GUIDELINES_PATHS = [
  'docs/brand-guidelines.md',
  'content/brand/guidelines.md',
  '.claude/brand-guidelines.md'
];

// Agents that should receive brand guidelines
const CONTENT_AGENTS = [
  'content-creator',
  'copywriter',
  'social-media-manager',
  'email-wizard',
  'sale-enabler'
];

/**
 * Find brand guidelines file from possible locations
 * @returns {string|null} Path to brand guidelines or null
 */
function findBrandGuidelines() {
  for (const guidePath of BRAND_GUIDELINES_PATHS) {
    if (fs.existsSync(guidePath)) {
      return guidePath;
    }
  }
  return null;
}

/**
 * Extract key brand elements from guidelines (summary for context injection)
 * @param {string} content - Full guidelines content
 * @returns {string} Summarized brand elements
 */
function extractBrandSummary(content) {
  const lines = content.split('\n');
  const summaryLines = [];
  let inSection = false;
  let sectionDepth = 0;

  // Extract key sections: Voice, Tone, Colors, Typography
  const keySections = ['voice', 'tone', 'persona', 'values', 'messaging', 'style'];

  for (const line of lines) {
    // Detect section headers
    if (line.startsWith('#')) {
      const headerLevel = line.match(/^#+/)[0].length;
      const headerText = line.replace(/^#+\s*/, '').toLowerCase();

      if (keySections.some(section => headerText.includes(section))) {
        inSection = true;
        sectionDepth = headerLevel;
        summaryLines.push(line);
      } else if (inSection && headerLevel <= sectionDepth) {
        inSection = false;
      }
    } else if (inSection && line.trim()) {
      summaryLines.push(line);
    }
  }

  // If no key sections found, return first 50 lines
  if (summaryLines.length === 0) {
    return lines.slice(0, 50).join('\n');
  }

  return summaryLines.join('\n');
}

/**
 * Main hook execution
 */
async function main() {
  try {
    const stdin = fs.readFileSync(0, 'utf-8').trim();
    if (!stdin) process.exit(0);

    const payload = JSON.parse(stdin);
    const agentType = payload.agent_type || 'unknown';

    // Only inject for content-related agents
    if (!CONTENT_AGENTS.includes(agentType)) {
      process.exit(0);
    }

    // Find brand guidelines
    const guidelinesPath = findBrandGuidelines();
    if (!guidelinesPath) {
      // No guidelines found, exit silently
      process.exit(0);
    }

    // Read guidelines
    const guidelinesContent = fs.readFileSync(guidelinesPath, 'utf8');
    const brandSummary = extractBrandSummary(guidelinesContent);

    // Build context injection
    const contextLines = [
      `## Brand Guidelines Reminder`,
      ``,
      `**Source:** ${guidelinesPath}`,
      ``,
      `### Key Brand Elements`,
      ``,
      brandSummary,
      ``,
      `### Requirements`,
      `- Apply brand voice and tone consistently`,
      `- Follow messaging guidelines`,
      `- Use approved terminology`,
      `- Maintain brand personality in all content`
    ];

    // Output for SubagentStart hook format
    const output = {
      hookSpecificOutput: {
        hookEventName: 'SubagentStart',
        additionalContext: contextLines.join('\n')
      }
    };

    console.log(JSON.stringify(output));
    process.exit(0);
  } catch (error) {
    // Fail silently - don't block agent execution
    process.exit(0);
  }
}

main();
