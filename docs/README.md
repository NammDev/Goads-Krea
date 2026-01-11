# Krea.ai Documentation

Technical documentation for the Krea website (Next.js 15, TypeScript, Tailwind CSS v4).

**Updated:** 2026-01-11

---

## Quick Links

| Document | Description |
|----------|-------------|
| [Architecture](./architecture.md) | Routing, layouts, SEO infrastructure |
| [Design System](./design-system.md) | Color tokens, typography, spacing |
| [Component API](./component-api.md) | UI component reference with examples |
| [Design Guidelines](./design-guidelines.md) | Visual specs, CSS utilities |
| [Icon System](./icon-system.md) | 35-icon reference guide |
| [Codebase Summary](./codebase-summary.md) | Directory structure, components |

---

## Getting Started

### Development
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm run start
```

---

## Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5.x
- **Components:** CVA variants, compound patterns

---

## Quick Navigation

### By Use Case

| Question | Answer |
|----------|--------|
| How do I add a page? | [Architecture](./architecture.md) → Route Groups |
| How do I add a button? | [Component API](./component-api.md) → Button |
| What are the color tokens? | [Design System](./design-system.md) → Color Tokens |
| What's the SEO setup? | [Architecture](./architecture.md) → SEO Infrastructure |
| Which icons exist? | [Icon System](./icon-system.md) |

### By Role

**Frontend Developer:**
1. [Architecture](./architecture.md) - Understand routing
2. [Component API](./component-api.md) - Use components
3. [Design System](./design-system.md) - Apply tokens

**New Team Member:**
1. [Codebase Summary](./codebase-summary.md) - Project overview
2. [Architecture](./architecture.md) - Layout structure
3. [Design Guidelines](./design-guidelines.md) - Visual specs

---

## Documentation Files (7 total)

| File | Lines | Purpose |
|------|-------|---------|
| `README.md` | ~100 | Navigation index |
| `architecture.md` | ~150 | Routing, SEO, layouts |
| `design-system.md` | ~170 | Tokens, patterns |
| `component-api.md` | ~230 | Component reference |
| `design-guidelines.md` | ~780 | Visual specifications |
| `codebase-summary.md` | ~530 | Structure overview |
| `icon-system.md` | ~350 | Icon reference |

---

## Common Tasks

| Task | Steps |
|------|-------|
| Add a page | Create `src/app/(marketing)/name/page.tsx`, add metadata |
| Add a component | Create in `src/components/ui/`, export from index.ts |
| Add a section | Create in `src/components/sections/`, use Section wrapper |
| Find an icon | Check [icon-system.md](./icon-system.md), import from `@/components/icons` |
| Add SEO | Use `generatePageMetadata` from `@/lib/seo` |

---

*Krea.ai Technical Documentation | Updated: 2026-01-11*
