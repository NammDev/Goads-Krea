# Krea.ai Layout Recreation - Codebase Summary

**Project:** Krea.ai SEO-ready multi-page website
**Status:** Multi-page architecture complete with SEO infrastructure
**Updated:** 2026-01-11

---

## Project Overview

This project implements the full page layout structure of krea.ai, a cutting-edge image generation platform. The implementation uses Next.js 15 with TypeScript, Tailwind CSS v4, and React components following modern best practices.

**Tech Stack:**

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS v4 + CSS variables
- **UI Components:** React 19+, shadcn/ui
- **State Management:** React Hooks (context where needed)
- **Build:** npm/yarn

**Component Library:**

- 7 reusable UI components (Button, SectionHeader, GradientButton, CTAButtonGroup, FeatureList, ModelMarquee, Section)
- 4 Bento grid special components (GradientText, Text3DCube, BleedingEdgeClock, LipsyncWave)
- 8 section components (ModelShowcase, Bento, LogoPartners, UseCases, Pricing, AppShowcase, BigPicture, InvestorShowcase)
- 35 SVG icons organized by category

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
│   └── navigation.ts           # Navigation configuration (NEW)
│
└── lib/
    ├── utils.ts                # Utilities (cn())
    └── seo/                    # SEO utilities (NEW)
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

## Implementation Status (Updated: 2026-01-11)

### Completed

**Phase 1: Component Consolidation**
- ✅ Button component with CVA variants
- ✅ GradientButton polymorphic (`as="link"` support)
- ✅ PricingButton deleted (uses GradientButton)
- ✅ All pricing cards use unified GradientButton

**Phase 2: Layout Architecture**
- ✅ PageLayout component (Header + Footer encapsulation)
- ✅ Route groups: `(marketing)`, `(blog)`, `(docs)`
- ✅ Navigation config centralized (`src/config/navigation.ts`)

**Phase 3: SEO Infrastructure**
- ✅ SEO lib (`src/lib/seo/`) with siteConfig, metadata, JSON-LD
- ✅ sitemap.ts auto-generates `/sitemap.xml`
- ✅ robots.ts generates `/robots.txt`
- ✅ JSON-LD on homepage (Organization, SoftwareApplication)
- ✅ Root metadata with title template

**Phase 4: Multi-Page Setup**
- ✅ `/features` page with FeatureCards, ModelShowcase, Bento
- ✅ `/pricing` page with PricingSection, FAQ
- ✅ `/enterprise` page with enterprise sections
- ✅ `/about` page with BigPicture, Investors, Partners
- ✅ NavLink active state with `usePathname`
- ✅ BreadcrumbJsonLd on all pages

**Phase 5: Documentation**
- ✅ architecture.md - Routing, SEO, layouts
- ✅ design-system.md - Tokens, colors, typography
- ✅ component-api.md - UI component reference
- ✅ codebase-summary.md - Updated structure
- ✅ README.md - Navigation index

### Existing (Pre-refactor)
- ✅ 13 section components
- ✅ 35 SVG icons consolidated
- ✅ CSS theme system (Tailwind v4)
- ✅ 3D perspective layout
- ✅ Feature cards carousel
- ✅ Responsive design system

### Deferred

- 🔲 GenericPricingCard abstraction (card structures differ)
- 🔲 Section wrapper adoption (visual preservation priority)
- 🔲 Dark mode toggle
- 🔲 Blog/Docs MDX content (future phases)

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

### Utilities

- `src/lib/utils.ts` - Helper functions

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

## References

- **Design Inspiration:** `design-inspiration/` folder contains original Krea HTML/CSS
- **Content:** `content/` folder has website content structure
- **Design Guidelines:** `/docs/design-guidelines.md` - Detailed design specs

---

_This codebase is a pixel-perfect recreation of the Krea.ai website layout. All dimensions, spacing, and colors are derived from the original design and specifications in design-guidelines.md._
