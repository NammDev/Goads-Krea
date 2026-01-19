# Krea.ai Layout Recreation - Codebase Summary

**Project:** Krea.ai SEO-ready multi-page website with advanced animations
**Framework:** Next.js 16.1.1 (Turbopack), React 19.2.3, TypeScript 5, Tailwind CSS v4
**Status:** Phase 1 complete - animations, content pipeline, reusable components
**Updated:** 2026-01-20

---

## Project Overview

This project implements the full page layout structure of krea.ai, a cutting-edge image generation platform. The implementation uses Next.js 15 with TypeScript, Tailwind CSS v4, and React components following modern best practices.

**Tech Stack:**

- **Framework:** Next.js 16.1.1 (App Router, Turbopack)
- **React:** 19.2.3 with Server Components
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS v4 + CSS variables
- **State Management:** React Hooks, Server Components
- **Content:** MDX with gray-matter frontmatter parsing
- **Build:** npm (Turbopack bundler)

**Key Features:**

- Reusable animation hooks (useScrollTrigger)
- Centralized animation config (DURATION, STAGGER, EASING)
- PageHero component for consistent page headers
- MDX blog/docs with metadata extraction
- Dynamic sitemap and robots.txt generation
- JSON-LD structured data for SEO

**Component Library:**

- 8 reusable UI components (Button, PageHero, GradientButton, CTAButtonGroup, FeatureList, ModelMarquee, Section, MediaCard)
- 4 Bento grid special components (GradientText, Text3DCube, BleedingEdgeClock, LipsyncWave)
- 13+ section components (ModelShowcase, Bento, LogoPartners, UseCases, Pricing, Process, etc.)
- 35+ SVG icons organized by category

---

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (html, body, fonts)
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt config
│   ├── globals.css             # Theme + utility classes
│   │
│   ├── (marketing)/            # Marketing route group
│   │   ├── layout.tsx          # PageLayout (Header + Footer)
│   │   ├── page.tsx            # / (homepage)
│   │   ├── features/page.tsx   # /features
│   │   ├── pricing/page.tsx    # /pricing
│   │   ├── enterprise/page.tsx # /enterprise
│   │   └── about/page.tsx      # /about
│   │
│   ├── (blog)/                 # Blog route group
│   │   ├── layout.tsx          # Blog layout
│   │   └── blog/page.tsx       # /blog
│   │
│   └── (docs)/                 # Docs route group
│       ├── layout.tsx          # Docs layout
│       └── docs/page.tsx       # /docs
│
├── components/
│   ├── layouts/                # Layout components (NEW)
│   │   ├── page-layout.tsx     # PageLayout with Header/Footer
│   │   └── index.ts
│   │
│   ├── header/                 # Navigation & sticky header
│   │   ├── header.tsx          # Main header (68px, fixed, z-100)
│   │   ├── nav-link.tsx        # Navigation links (with active state)
│   │   ├── features-dropdown.tsx
│   │   ├── mobile-menu.tsx
│   │   └── index.ts
│   │
│   ├── hero/                   # Hero section area
│   │   ├── hero-section.tsx
│   │   ├── app-preview.tsx
│   │   └── index.ts
│   │
│   ├── features/               # Feature cards carousel
│   │   ├── feature-cards.tsx
│   │   ├── feature-card.tsx
│   │   └── index.ts
│   │
│   ├── sections/               # Content sections (13 components)
│   │   ├── model-showcase-section.tsx
│   │   ├── bento-section.tsx
│   │   ├── logo-partners-section.tsx
│   │   ├── use-cases-section.tsx
│   │   ├── pricing/            # Pricing sub-components
│   │   │   ├── pricing-section.tsx
│   │   │   ├── free-pricing-card.tsx
│   │   │   ├── individual-pricing-card.tsx
│   │   │   ├── business-pricing-card.tsx
│   │   │   └── enterprise-pricing-card.tsx
│   │   ├── app-showcase-section.tsx
│   │   ├── big-picture-section.tsx
│   │   ├── investor-showcase-section.tsx
│   │   ├── enterprise-*-section.tsx  # Enterprise sections (4)
│   │   ├── cta-banner-section.tsx
│   │   └── index.ts
│   │
│   ├── footer/
│   │   ├── footer.tsx
│   │   └── index.ts
│   │
│   ├── icons/                  # SVG icons (35 total)
│   │   └── index.ts
│   │
│   └── ui/                     # UI primitives (CVA-based)
│       ├── button.tsx          # Button with CVA variants
│       ├── gradient-button.tsx # Polymorphic CTA (as="link")
│       ├── section.tsx
│       ├── section-header.tsx
│       ├── feature-list.tsx
│       ├── model-marquee.tsx
│       ├── bento/              # Bento grid components
│       └── index.ts
│
├── config/
│   └── navigation.ts           # Navigation configuration
│
├── hooks/                      # Custom React hooks
│   ├── use-scroll-trigger.ts   # IntersectionObserver hook for animations
│   └── index.ts
│
└── lib/
    ├── utils.ts                # Utilities (cn())
    ├── animation-config.ts      # Centralized animation constants
    ├── content/                # Content pipeline
    │   ├── blog.ts             # Blog post loader
    │   ├── docs.ts             # Documentation page loader
    │   └── index.ts
    └── seo/                    # SEO utilities
        ├── site-config.ts      # Site configuration
        ├── metadata.ts         # generatePageMetadata
        ├── json-ld.tsx         # JSON-LD components
        └── index.ts
```

---

## Key Components & Responsibilities

### Header (`components/header/header.tsx`)

- **Height:** 68px fixed at top
- **Background:** Black (#000000)
- **Z-index:** 100 (always visible)
- **Contains:** Logo, nav links, features dropdown, get-started button
- **Mobile:** Hamburger menu with mobile-menu overlay

### Hero Section (`components/hero/hero-section.tsx`)

- **Min-height:** 100vh
- **Padding-top:** calc(68px + 40px)
- **Background:** Black (#000000)
- **Content:** Headline, subheading, CTA buttons, app preview
- **3D Transform:** Uses CSS perspective (10px) for depth effect

### Feature Cards Carousel (`components/features/feature-cards.tsx`)

- **Layout:** Horizontal scroll, 5 cards total
- **Card Size:** 300px (mobile) / 400px (desktop) width, 375/500px height
- **Carousel:** Custom scroll controller with left/right buttons
- **Scroll:** 43% of container width per click
- **Styling:** Cards with gradient overlays, badges, action buttons

### ModelShowcaseSection (`components/sections/model-showcase-section.tsx`)

- **Hero Title:** 3D rotating cylinder text animation with 6 words (Generative, Image, Video, 3D, Creative, AI)
- **Auto-rotate:** 2-second interval, smooth 700ms transitions
- **Marquee:** ModelMarquee component with 7 AI model logos
- **Layout:** Full-width section with responsive padding
- **Font Sizing:** text-4xl (sm), text-5xl (md), text-6xl (lg), text-7xl (xl)

### LogoPartnersSection (`components/sections/logo-partners-section.tsx`)

- **Title:** Subtitle (primary-400) + heading (primary-1000)
- **Marquee:** Same ModelMarquee component for consistent branding
- **CTA Buttons:** Two action buttons (Sign up, Contact Sales) with hover scale effect
- **Spacing:** Responsive top padding (pt-24 mobile, pt-40 desktop)
- **Button Styling:** Dark/light variants with 1.025 hover scale

### Section Components (8 placeholder sections)

All follow consistent structure:

- White background (`bg-primary-0`)
- Max-width container (`max-w-s2xl`)
- Centered padding (`mx-auto`)
- Consistent vertical spacing

**Components:**

1. **ModelShowcaseSection** - Model/version showcase slider
2. **BentoSection** - Bento grid layout showcase
3. **LogoPartnersSection** - Partner logos carousel
4. **UseCasesSection** - Use cases/examples grid
5. **PricingSection** - Pricing tiers/table
6. **AppShowcaseSection** - Full-width app layout demo (bg-primary-100)
7. **BigPictureSection** - Large feature showcase
8. **InvestorShowcaseSection** - Investor/stats showcase

### Footer (`components/footer/footer.tsx`)

- **Background:** Light gray (`bg-primary-100`)
- **Full-width:** No max-width constraint
- **Content:** Links, copyright, social, newsletter signup

---

## Layout Architecture

### Main Container (page.tsx)

```
<main perspective="10px" style={{ height: "100dvh", overflowY: "auto" }}>
  ├─ Sticky Header (h-0, z-30)
  │
  ├─ Content with 3D preserve
  │  ├─ Hero Section (transform-style: preserve-3d)
  │  │
  │  └─ White bg container (bg-primary-0, max-w-s2xl)
  │     ├─ Feature Cards
  │     ├─ Model Showcase
  │     ├─ Bento Section
  │     ├─ Logo Partners
  │     ├─ Use Cases
  │     └─ Pricing
  │
  ├─ App Showcase (bg-primary-100, full-width)
  │
  ├─ Big Picture + Investor (max-w-s2xl, mx-auto)
  │
  └─ Footer (bg-primary-100, full-width)
</main>
```

**3D Perspective System:**

- Main container: `perspective: 10px`
- Content sections: `transform-style: preserve-3d`
- Creates subtle depth effect without parallax distortion

---

## CSS Theme System

### Color Palette (Grayscale)

| Token          | Value   | Usage                            |
| -------------- | ------- | -------------------------------- |
| `primary-0`    | #ffffff | White background, text highlight |
| `primary-50`   | #f9fafb | Light gray background            |
| `primary-100`  | #f5f5f5 | Section background               |
| `primary-200`  | #e5e5e5 | Border, button hover             |
| `primary-500`  | #737373 | Medium gray text                 |
| `primary-900`  | #171717 | Dark gray                        |
| `primary-1000` | #000000 | Black (hero, header)             |

### Typography

- **Font:** Inter + system fallbacks
- **Hero Title:** 72px, 600 weight, 1.05 line-height
- **Nav Link:** 15px, 400 weight, 0.01em letter-spacing
- **Button:** 14px, 500 weight
- **Label:** 11px, 600 weight, uppercase, 0.15em letter-spacing

### Spacing & Containers

- **Header Height:** 68px
- **Section Padding:** 20px (mobile) / 64px (desktop)
- **Max Width:** 1536px (`max-w-s2xl`)
- **Border Radius:** 6px (sm) → 24px (2xl) → 2rem (4xl)

### Utility Classes

```css
/* Section layout */
.section-container       /* Responsive horizontal padding */
/* Responsive horizontal padding */
.max-w-s2xl            /* Max-width 1536px */

/* Visual effects */
.text-gradient         /* White → gray gradient text */
.scrollbar-hide        /* Hide scrollbar (cards) */
.app-window-shadow     /* Large shadow for elevated elements */
.dropdown-shadow       /* Subtle shadow for dropdowns */

/* 3D effects */
.transform-style-3d    /* preserve-3d */
.perspective-10; /* perspective: 10px */
```

---

## UI Component Library

### Core UI Components (7 total)

| Component          | File                   | Lines | Purpose                     | Key Props                                                      |
| ------------------ | ---------------------- | ----- | --------------------------- | -------------------------------------------------------------- |
| **Button**         | `button.tsx`           | ~60   | Basic button component      | `variant`, `size`, `disabled`                                  |
| **Section**        | `section.tsx`          | ~45   | Section layout wrapper      | `children`, `className`                                        |
| **SectionHeader**  | `section-header.tsx`   | 60    | Title + subtitle pattern    | `title`, `subtitle`, `size`                                    |
| **GradientButton** | `gradient-button.tsx`  | 99    | CTA with gradient animation | `variant`, `as`, `href`, `children`                            |
| **CTAButtonGroup** | `cta-button-group.tsx` | 65    | Button pair container       | `primaryText`, `primaryHref`, `secondaryText`, `secondaryHref` |
| **FeatureList**    | `feature-list.tsx`     | 74    | Check icon + feature list   | `features`, `variant`, `spacing`                               |
| **ModelMarquee**   | `model-marquee.tsx`    | 93    | Scrolling model logos       | `models`, `duration`                                           |

**SectionHeader Usage:**

- Subtitle + title pattern with size variants (`default` | `large`)
- Used in: LogoPartnersSection, BigPictureSection, UseCasesSection, InvestorShowcaseSection

**GradientButton Usage:**

- Variants: `primary` (dark), `secondary` (light)
- Renders as `<button>` or `<a>` via `as` prop
- 1.25s gradient sweep animation, 2.5% hover scale

**CTAButtonGroup Usage:**

- Pairs GradientButton for Sign Up / Contact Sales patterns
- Spacing variants: `sm` (mt-8), `md` (mt-12), `lg` (mt-16 md:mt-20)
- Used in: LogoPartnersSection, InvestorShowcaseSection

**FeatureList Usage:**

- Renders array of feature strings with checkmarks
- Variants: `default` (gray), `dark` (white text)
- Used in: All 4 pricing cards (Free, Individual, Business, Enterprise)

### Bento Components

| Component         | Purpose                | Usage                      |
| ----------------- | ---------------------- | -------------------------- |
| GradientText      | Gradient text effect   | Bento card titles          |
| Text3DCube        | 3D cube text animation | Bento grid feature         |
| BleedingEdgeClock | Animated clock display | Bento "Bleeding Edge" card |
| LipsyncWave       | Audio wave animation   | Bento "Lipsync" card       |

---

## Component States & Behaviors

### Header States

- **Desktop:** Full nav visible, features dropdown on hover
- **Mobile:** Hamburger menu toggles overlay menu
- **Sticky:** Always visible at top, z-30 (below floating elements)

### Feature Cards Carousel

- **Scroll behavior:** Smooth horizontal scroll
- **Navigation:** Left/right buttons with opacity transitions
- **Visible cards:** ~1.5 (mobile), ~3.5 (desktop)
- **Cards per click:** 2 clicks to reach end (5 cards total)

### Responsive Breakpoints

| Breakpoint | Width          | Usage                                 |
| ---------- | -------------- | ------------------------------------- |
| Mobile     | < 768px        | Single column, 20px padding           |
| Tablet     | 768px - 1024px | Two columns, 40px padding             |
| Desktop    | ≥ 1024px       | Full layout, 64px padding, max-w-s2xl |

---

## Custom Hooks

### useScrollTrigger

**File:** `src/hooks/use-scroll-trigger.ts`

Reusable IntersectionObserver hook for scroll-triggered animations.

**Purpose:**
- Eliminates duplicate IntersectionObserver logic
- Provides visibility state for animations
- GPU-friendly performance

**Usage:**
```tsx
const { ref, isVisible } = useScrollTrigger<HTMLElement>({
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
  triggerOnce: true,
});

return <section ref={ref} style={{ opacity: isVisible ? 1 : 0 }}>...</section>;
```

**Options:**
| Option | Default | Description |
|--------|---------|-------------|
| threshold | 0.1 | When to trigger (0 = fully out, 1 = fully visible) |
| rootMargin | "0px 0px -50px 0px" | Trigger 50px before element enters viewport |
| triggerOnce | true | Only trigger once or repeatedly |

---

## Animation Configuration

### File: `src/lib/animation-config.ts`

Centralized animation constants for consistent motion design across the app.

**Constants:**

1. **DURATION** - Animation timings (ms)
   - instant: 100
   - fast: 150
   - normal: 200
   - smooth: 300
   - slow: 500
   - slower: 800

2. **STAGGER** - Delay increments for list/grid animations (ms)
   - tight: 30 (dense grids)
   - default: 60 (standard lists)
   - relaxed: 100 (large items)
   - dramatic: 150 (hero sections)

3. **EASING** - Animation curves
   - out: "ease-out"
   - in: "ease-in"
   - inOut: "ease-in-out"
   - expoOut: "cubic-bezier(0.16, 1, 0.3, 1)" (dramatic)
   - spring: "cubic-bezier(0.34, 1.56, 0.64, 1)" (bounce)
   - linear: "linear"

4. **TRANSFORM** - Common transform values
   - slideUpDistance: 24px
   - slideUpHero: 80px
   - scaleHover: 1.05

**Helper Functions:**

| Function | Purpose | Returns |
|----------|---------|---------|
| getStaggerAnimationStyle() | Index-based stagger delays | React.CSSProperties |
| getSlideUpStyle() | GPU-accelerated reveal animation | React.CSSProperties |
| buildTransition() | Create CSS transition strings | string |

**Tailwind Classes (TRANSITION_CLASSES):**
```ts
default: "transition-all duration-200 ease-out"
fast: "transition-all duration-150 ease-out"
smooth: "transition-all duration-300 ease-out"
colors: "transition-colors duration-200 ease-out"
transform: "transition-transform duration-200 ease-out"
opacity: "transition-opacity duration-200 ease-out"
```

---

## Content Pipeline

### Blog Posts

**File:** `src/lib/content/blog.ts`

Loads MDX blog posts from `content/blog/` with gray-matter frontmatter.

**Interface:**
```ts
interface BlogPost {
  slug: string;        // File name without .mdx
  title: string;       // From frontmatter
  description: string; // From frontmatter
  date: string;        // ISO date string
  updatedAt?: string;  // Optional update date
  author: string;      // Default: "GoAds Team"
  image?: string;      // OG image URL
  tags: string[];      // Array of tags
  published: boolean;  // Default: true
}
```

**Functions:**
- getBlogPosts() - Returns all published posts (sorted by date, newest first)
- getBlogSlugs() - Returns all post slugs

**Frontmatter Example:**
```yaml
---
title: "Post Title"
description: "Short description"
date: "2026-01-20"
author: "John Doe"
tags: ["feature", "update"]
published: true
---
```

### Documentation Pages

**File:** `src/lib/content/docs.ts`

Loads MDX documentation from `content/docs/` with gray-matter frontmatter.

**Interface:**
```ts
interface DocPage {
  slug: string;        // File name without .mdx
  title: string;       // From frontmatter
  description: string; // From frontmatter
  category: string;    // For organizing docs
  order?: number;      // Sort order (optional)
  updatedAt?: string;  // Optional update date
  published: boolean;  // Default: true
}
```

**Functions:**
- getDocPages() - Returns all published docs (sorted by order)
- getDocSlugs() - Returns all doc slugs

**Frontmatter Example:**
```yaml
---
title: "Getting Started"
description: "How to get started"
category: "Guide"
order: 1
published: true
---
```

---

## CSS Custom Properties (variables)

Defined in `globals.css` within `@theme inline {}`:

```css
/* Colors */
--color-primary-X: [hex values]
--color-accent-600: #2563eb

/* Typography */
--font-sans: Inter, system fonts
--text-xsm: 11px
--text-xbase: 15px

/* Spacing */
--spacing-header: 68px

/* Containers (px-based) */
--container-ssm: 640px
--container-smd: 768px
--container-slg: 1024px
--container-sxl: 1280px
--container-s2xl: 1536px
--container-s3xl: 1792px
```

---

## Implementation Status (Updated: 2026-01-20)

### Phase 1: Component Consolidation ✅
- ✅ Button component with CVA variants
- ✅ GradientButton polymorphic (`as="link"` support)
- ✅ PageHero component for consistent page headers
- ✅ All pricing cards use unified GradientButton

### Phase 2: Layout Architecture ✅
- ✅ PageLayout component (Header + Footer encapsulation)
- ✅ Route groups: `(marketing)`, `(blog)`, `(docs)`
- ✅ Navigation config centralized (`src/config/navigation.ts`)

### Phase 3: SEO Infrastructure ✅
- ✅ SEO lib (`src/lib/seo/`) with siteConfig, metadata, JSON-LD
- ✅ sitemap.ts auto-generates `/sitemap.xml`
- ✅ robots.ts generates `/robots.txt`
- ✅ JSON-LD on homepage (Organization, SoftwareApplication)
- ✅ Root metadata with title template

### Phase 4: Multi-Page Setup ✅
- ✅ `/features` page with FeatureCards, ModelShowcase, Bento
- ✅ `/pricing` page with PricingSection, FAQ
- ✅ `/enterprise` page with enterprise sections
- ✅ `/about` page with BigPicture, Investors, Partners
- ✅ NavLink active state with `usePathname`
- ✅ BreadcrumbJsonLd on all pages

### Phase 5: Animation & Hooks ✅
- ✅ useScrollTrigger hook for scroll animations
- ✅ Centralized animation-config.ts (DURATION, STAGGER, EASING)
- ✅ Helper functions: getStaggerAnimationStyle(), getSlideUpStyle()
- ✅ GPU-accelerated transform animations
- ✅ TRANSITION_CLASSES for Tailwind patterns

### Phase 6: Content Pipeline ✅
- ✅ Blog post loader with gray-matter frontmatter
- ✅ Documentation page loader
- ✅ BlogPost and DocPage interfaces
- ✅ Automatic publish filtering and sorting

### Phase 7: Documentation ✅
- ✅ architecture.md - Routing, SEO, Turbopack, content pipeline
- ✅ design-system.md - Tokens, animations, typography
- ✅ component-api.md - UI components, hooks, animation utilities
- ✅ codebase-summary.md - Structure, hooks, content pipeline
- ✅ design-guidelines.md - Visual specs, section patterns
- ✅ README.md - Navigation index (updated)

### Foundation (Pre-refactor)
- ✅ 13+ section components
- ✅ 35+ SVG icons consolidated
- ✅ CSS theme system (Tailwind v4)
- ✅ 3D perspective layout
- ✅ Feature cards carousel
- ✅ Responsive design system

### Future Enhancements
- 🔲 Dark mode toggle
- 🔲 Additional animation patterns
- 🔲 Form/input components
- 🔲 Advanced table components

---

## Files by Purpose

### Layout & Structure

- `src/app/page.tsx` - Main page layout
- `src/app/layout.tsx` - Root wrapper

### Styling

- `src/app/globals.css` - Theme, utilities, variables (209 lines)

### Header & Navigation

- `src/components/header/header.tsx`
- `src/components/header/nav-link.tsx`
- `src/components/header/features-dropdown.tsx`
- `src/components/header/mobile-menu.tsx`

### Hero Area

- `src/components/hero/hero-section.tsx`
- `src/components/hero/app-preview.tsx`

### Feature Showcase

- `src/components/features/feature-cards.tsx`
- `src/components/features/feature-card.tsx`

### Sections

- `src/components/sections/model-showcase-section.tsx` (133 lines, 3D rotating title + marquee)
- `src/components/sections/logo-partners-section.tsx` (57 lines, partner showcase + CTA)
- `src/components/sections/` (6 other placeholder components)

### UI & Icons

- `src/components/ui/button.tsx`
- `src/components/ui/model-marquee.tsx` (93 lines, reusable marquee slider)
- `src/components/icons/model-logo-icons.tsx` (147 lines, 7 model logos)
- `src/components/icons/` (other icon components)

### Utilities & Config

- `src/lib/utils.ts` - Helper functions (cn())
- `src/lib/animation-config.ts` - Centralized animation constants
- `src/config/navigation.ts` - Navigation menu configuration

---

## Development Guidelines

### Adding New Sections

1. Create component in `src/components/sections/{name}.tsx`
2. Follow template: white background, max-w-s2xl container
3. Export from `src/components/sections/index.ts`
4. Import and use in `src/app/page.tsx`

### Styling Conventions

- Use Tailwind classes for layout
- Use `primary-X` color tokens for consistency
- Use `section-container` class for padding
- Create `.css` classes for complex effects

### Component Props

Keep props minimal:

- Avoid passing unnecessary state/callbacks
- Use composition over props drilling
- Use context for global state (theme, user, etc.)

### Animation Best Practices

1. **Use useScrollTrigger for scroll animations:**
   ```tsx
   const { ref, isVisible } = useScrollTrigger();
   const style = getStaggerAnimationStyle(isVisible, index);
   return <div ref={ref} style={style}>Item</div>;
   ```

2. **Apply animation-config constants:**
   ```tsx
   import { DURATION, STAGGER, EASING } from "@/lib/animation-config";
   // Use predefined values for consistency
   ```

3. **Prefer GPU-accelerated properties:**
   - Use `transform` instead of `left`/`top`
   - Use `opacity` instead of `display`
   - Use `willChange` for expensive animations

4. **Content Pipeline:**
   - Blog posts: Use `getBlogPosts()` from `@/lib/content`
   - Docs: Use `getDocPages()` from `@/lib/content`
   - Both support YAML frontmatter parsing

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS perspective supported in all modern browsers
- Tailwind CSS v4 compatibility

---

## Performance Considerations

- 3D perspective uses GPU acceleration (GPU rendering)
- Smooth scroll behavior is CSS-based (efficient)
- No JavaScript animations on scroll
- Lazy load sections when implementing content

---

## Key Files Reference

**Animation & Interactions:**
- `src/hooks/use-scroll-trigger.ts` - Scroll animation hook
- `src/lib/animation-config.ts` - Animation constants and helpers
- `src/components/ui/page-hero.tsx` - Reusable page hero

**Content Management:**
- `src/lib/content/blog.ts` - Blog post loader
- `src/lib/content/docs.ts` - Documentation loader
- `content/blog/` - Blog post directory
- `content/docs/` - Documentation directory

**SEO & Metadata:**
- `src/lib/seo/metadata.ts` - Page metadata generator
- `src/lib/seo/json-ld.tsx` - Structured data components
- `src/app/sitemap.ts` - Dynamic sitemap
- `src/app/robots.ts` - Robots.txt

**Navigation & Config:**
- `src/config/navigation.ts` - Navigation menu configuration
- `src/app/(marketing)/layout.tsx` - Marketing layout
- `src/components/layouts/page-layout.tsx` - Page wrapper

---

## Development Checklist

- [ ] Use PageHero for new marketing pages
- [ ] Use useScrollTrigger for animations on scroll
- [ ] Import animation constants from animation-config.ts
- [ ] Use getStaggerAnimationStyle() for list animations
- [ ] Add metadata using generatePageMetadata()
- [ ] Test responsive behavior (mobile < 768px, desktop ≥ 768px)
- [ ] Verify animation performance on lower-end devices

---

_Krea.ai website - Next.js 16 with advanced animations, content pipeline, and modern best practices._
_Framework: Next.js 16.1.1 (Turbopack) | React 19.2.3 | TypeScript 5 | Tailwind CSS v4_
