---
description: Create a Claude Code command
argument-hint: [name] [prompt]
---

Think harder.
Activate `claude-code` skill.
Activate `docs-seeker` skill to search for documentation if needed.

## Arguments
- $NAME = `name`: The name of the new command
- $PROMPT = `prompt`: The prompt or instructions for the command

## Your mission
Create a new Claude Code command in `.claude/commands/` with the name: $NAME.

## User prompt
<user-prompt>$PROMPT</user-prompt>

## Rules of Command Creation:

First, generate commands and skills catalogs and analyze them to understand the available capabilities.
Utilize the current commands, skills & agents in the command workflow if needed.

Based on the user's prompt:
- If you're given nothing, use `AskUserQuestion` tool for clarifications and `researcher` subagent with `research` skill to research about the topic.
- If you're given an URL, it's documentation page, use `Explore` subagent to explore every internal link and report back to main agent, don't skip any link.
- If you receive a lot of URLs, use multiple `Explore` subagents to explore them in parallel, then report back to main agent.
- If you receive a lot of files, use multiple `Explore` subagents to explore them in parallel, then report back to main agent.
- If you're given a Github URL, use [`repomix`](https://repomix.com/guide/usage) command to summarize ([install it](https://repomix.com/guide/installation) if needed) and spawn multiple `Explore` subagents to explore it in parallel, then report back to main agent.

## Output Requirements
- Must be in valid Markdown format
- Keep the content concise and focused
- Use clear, actionable language
- File size: Under 100 lines
- Context engineering is a king concept for efficient command design
- Progressive disclosure principles for better context management
- Error handling and edge case considerations
- Utilize the current commands, skills & agents in the command workflow if needed.

**COMMAND OUTPUT FORMAT:**
- YAML header with command metadata (follow Claude Code conventions)
- Place 💡 (min:1, max:5) to visualize the possiple amount of tokens used after this command execution
- Short description of the command's purpose
- Your mission
- Workflows
- Important notes
- Token efficiency considerations
