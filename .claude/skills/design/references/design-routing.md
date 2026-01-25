# Design Routing Guide

When to use each design sub-skill.

## Skill Overview

| Skill | Purpose | Key Files |
|-------|---------|-----------|
| brand-guidelines | Brand identity, voice, assets | SKILL.md + 10 references + 3 scripts |
| design-system | Token architecture, specs | SKILL.md + 7 references + 2 scripts |
| ui-styling | Component implementation | SKILL.md + 7 references + 2 scripts |

## Routing by Task Type

### Brand Identity Tasks
**→ brand-guidelines**

- Define brand colors and typography
- Create logo usage guidelines
- Establish brand voice and tone
- Organize and validate assets
- Create messaging frameworks
- Audit brand consistency

### Token System Tasks
**→ design-system**

- Create design tokens JSON
- Generate CSS variables
- Define component specifications
- Map tokens to Tailwind config
- Validate token usage in code
- Document state and variants

### Implementation Tasks
**→ ui-styling**

- Add shadcn/ui components
- Style with Tailwind classes
- Implement dark mode
- Create responsive layouts
- Build accessible components

## Routing by Question Type

| Question | Skill |
|----------|-------|
| "What color should this be?" | brand-guidelines |
| "How do I create a token for X?" | design-system |
| "How do I build a button component?" | ui-styling |
| "Is this on-brand?" | brand-guidelines |
| "Should I use a CSS variable here?" | design-system |
| "How do I add dark mode?" | ui-styling |

## Multi-Skill Workflows

### New Project Setup

```
1. brand-guidelines → Define identity
   - Colors, typography, voice

2. design-system → Create tokens
   - Primitive, semantic, component

3. ui-styling → Implement
   - Configure Tailwind, add components
```

### Design System Migration

```
1. brand-guidelines → Audit existing
   - Extract brand colors, fonts

2. design-system → Formalize tokens
   - Create three-layer architecture

3. ui-styling → Update code
   - Replace hardcoded values
```

### Component Creation

```
1. design-system → Reference specs
   - Button states, sizes, variants

2. ui-styling → Implement
   - Build with shadcn/ui + Tailwind
```

## Skill Dependencies

```
brand-guidelines
    ↓ (colors, typography)
design-system
    ↓ (tokens, specs)
ui-styling
    ↓ (components)
Application Code
```

## Quick Commands

**Brand:**
```bash
node .claude/skills/brand-guidelines/scripts/inject-brand-context.cjs
node .claude/skills/brand-guidelines/scripts/validate-asset.cjs <path>
```

**Tokens:**
```bash
node .claude/skills/design-system/scripts/generate-tokens.cjs -c tokens.json
node .claude/skills/design-system/scripts/validate-tokens.cjs -d src/
```

**Components:**
```bash
npx shadcn@latest add button card input
```

## When to Use Multiple Skills

Use **all three** when:
- Starting a new project from scratch
- Major rebrand requiring full system update
- Design system audit and remediation

Use **brand-guidelines + design-system** when:
- Defining design language without implementation
- Creating design documentation

Use **design-system + ui-styling** when:
- Implementing existing brand in code
- Building component library
