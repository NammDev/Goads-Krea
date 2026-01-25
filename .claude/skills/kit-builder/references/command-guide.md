# Command Creation Guide

Commands = user-invocable actions via `/command-name`.

## Location

`.claude/commands/{name}.md` or `.claude/commands/{category}/{name}.md`

## Format

```yaml
---
description: Short description
argument-hint: [optional-args]
---
```

## Body Structure

1. **Token indicator** - 💡 (1-5) for token estimate
2. **Skill activation** - Which skills to use
3. **Arguments section** - Parse $ARGUMENTS
4. **Mission** - What to accomplish
5. **Workflow** - Step-by-step process
6. **Output requirements** - Format/quality standards

## Example

```markdown
---
description: Create SEO-optimized blog post
argument-hint: [topic] [keywords]
---

💡💡💡
Activate `content-marketing`, `seo-optimization`, `copywriting` skills.

## Arguments
- $TOPIC = first arg
- $KEYWORDS = remaining args

## Mission
Create SEO-optimized blog post about $TOPIC.

## Workflow
1. Research topic
2. Outline structure
3. Write draft
4. Optimize for SEO
5. Review with content-reviewer agent
```

## Marketing Command Examples

| Command | Purpose |
|---------|---------|
| /write:blog | Create blog post |
| /write:cro | Optimize for conversions |
| /email:sequence | Create email sequence |
| /seo:audit | Run SEO audit |

## Naming Conventions

- Simple: `/name`
- Nested: `/category:action`
- Examples: `/write:blog`, `/design:generate`

## Best Practices

1. **Token efficiency** - Keep <100 lines
2. **Progressive disclosure** - Load skills for details
3. **Clear arguments** - Document expected inputs
4. **Agent delegation** - Use subagents for complex work
5. **Error handling** - Handle missing arguments

## Connecting Skills + Agents

```markdown
Activate `skill-name` skill.
Use `agent-name` subagent for [task].
```

## Token Indicators

| 💡 Count | Tokens | Use Case |
|----------|--------|----------|
| 💡 | <5k | Quick task |
| 💡💡 | 5-15k | Standard task |
| 💡💡💡 | 15-30k | Complex task |
| 💡💡💡💡 | 30-50k | Multi-step |
| 💡💡💡💡💡 | 50k+ | Orchestration |
