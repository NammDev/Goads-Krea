# Krea.ai Documentation

Technical documentation for the Krea website (Next.js 16.1.1, React 19.2.3, TypeScript 5, Tailwind CSS v4).

**Updated:** 2026-01-20

---

## Quick Links

| Document | Description |
|----------|-------------|
| [Architecture](./architecture.md) | Routing, layouts, SEO infrastructure |
| [Design System](./design-system.md) | Color tokens, typography, animations |
| [Component API](./component-api.md) | UI component reference with examples |
| [Design Guidelines](./design-guidelines.md) | Visual specs, CSS utilities, section patterns |
| [Codebase Summary](./codebase-summary.md) | Directory structure, components, hooks |

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

- **Framework:** Next.js 16.1.1 (App Router, Turbopack)
- **React:** 19.2.3 with Server Components
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript 5.x
- **Patterns:** Custom hooks, compound components, animation config

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

## Documentation Files (6 total)

| File | Lines | Purpose |
|------|-------|---------|
| `README.md` | ~100 | Navigation index |
| `architecture.md` | ~200 | Routing, SEO, layouts, Turbopack |
| `design-system.md` | ~200 | Tokens, animations, typography |
| `component-api.md` | ~250 | Component reference + hooks |
| `design-guidelines.md` | ~600 | Visual specs, section patterns |
| `codebase-summary.md` | ~700 | Structure, hooks, content pipeline |

---

## Common Tasks

| Task | Steps |
|------|-------|
| Add a page | Create `src/app/(marketing)/name/page.tsx`, use PageHero component |
| Add a component | Create in `src/components/ui/`, export from index.ts |
| Add animated section | Use `useScrollTrigger` hook + animation config |
| Use scroll animations | Import `getStaggerAnimationStyle` from `@/lib/animation-config` |
| Add SEO | Use `generatePageMetadata` from `@/lib/seo` |

---

*Krea.ai Technical Documentation | Updated: 2026-01-20*
