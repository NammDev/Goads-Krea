---
description: Brainstorm a solution collaboratively
argument-hint: [question or topic]
---

Activate `brainstorming` skill and follow its instructions exactly.

## Topic
<topic>$ARGUMENTS</topic>

## Important Reminders

1. **This is a brainstorming session ONLY** - Do NOT implement anything
2. Follow the 5-phase process in the skill
3. Ask one question at a time using `AskUserQuestion` tool
4. Present 2-3 alternatives with trade-offs
5. Create summary report when consensus reached

## Session End

After brainstorming concludes, suggest next actions:
- `/plan` - Create detailed implementation plan
- `/cook` - Start implementation immediately
- `/fix` - Address specific issues identified

**Wait for user confirmation before proceeding with any action.**
