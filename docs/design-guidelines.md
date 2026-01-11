# Krea.ai Design Guidelines

Design system for pixel-perfect krea.ai recreation. **Source of truth for all implementations.**

> **See also:**
> - [Design System](./design-system.md) - Tokens, colors, typography reference
> - [Component API](./component-api.md) - Component usage reference
> - [Architecture](./architecture.md) - Routing and SEO structure

---

## CSS Variables & Theme Configuration

### Tailwind CSS v4 Theme (globals.css)

```css
@theme inline {
  /* Colors - Primary Scale (Gray tones) */
  --color-primary-0: #ffffff;
  --color-primary-50: #f9fafb;
  --color-primary-100: #f5f5f5;
  --color-primary-150: #ebebeb;
  --color-primary-200: #e5e5e5;
  --color-primary-300: #d4d4d4;
  --color-primary-400: #a3a3a3;
  --color-primary-500: #737373;
  --color-primary-600: #525252;
  --color-primary-700: #404040;
  --color-primary-800: #262626;
  --color-primary-850: #1f1f1f;
  --color-primary-900: #171717;
  --color-primary-950: #0a0a0a;
  --color-primary-1000: #000000;

  /* Accent Colors */
  --color-accent-600: #2563eb;
  --color-accent-700: #1d4ed8;

  /* Typography */
  --font-sans: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  /* Container Sizes (px-based for screen widths) */
  --container-ssm: 640px;
  --container-smd: 768px;
  --container-slg: 1024px;
  --container-sxl: 1280px;
  --container-s2xl: 1536px;
  --container-s3xl: 1792px;
}
```

### Custom Utility Classes

#### Container & Layout Utilities
```css
/* Max-width utilities (pixel-based screen widths) */
.max-w-ssm { max-width: 640px; }    /* Mobile large */
.max-w-smd { max-width: 768px; }    /* Tablet */
.max-w-slg { max-width: 1024px; }   /* Large tablet */
.max-w-sxl { max-width: 1280px; }   /* Desktop */
.max-w-s2xl { max-width: 1536px; }  /* Large desktop (PRIMARY) */
.max-w-s3xl { max-width: 1792px; }  /* Extra large */

/* Section container - responsive horizontal padding */
.section-container {
  padding-left: var(--space-section-mobile, 1.25rem);   /* 20px mobile */
  padding-right: var(--space-section-mobile, 1.25rem);
}
@media (min-width: 768px) {
  .section-container {
    padding-left: var(--space-section-desktop, 4rem);   /* 64px desktop */
    padding-right: var(--space-section-desktop, 4rem);
  }
}
```

#### Border Radius Utilities
```css
.rounded-3xl { border-radius: 1.5rem; }    /* 24px */
.rounded-4xl { border-radius: 2rem; }      /* 32px */
```

#### Visual Effect Utilities
```css
/* Scrollbar hide - horizontal scrolling containers */
.scrollbar-hide {
  scrollbar-width: none;           /* Firefox */
  -ms-overflow-style: none;        /* IE/Edge */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;                   /* Webkit browsers */
}

/* Text gradient - white to gray fade */
.text-gradient {
  background: linear-gradient(180deg, #ffffff 0%, #737373 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Shadow utilities */
.app-window-shadow {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
.dropdown-shadow {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

#### 3D Transform Utilities
```css
/* 3D perspective container */
.perspective-10 {
  perspective: 10px;
}

/* Preserve 3D for child transforms */
.transform-style-3d {
  transform-style: preserve-3d;
}
```

---

## Typography

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero Title | 72px | 600 | 1.05 | -0.02em |
| Hero Subtitle | 20px | 400 | 1.4 | normal |
| Nav Link | 15px | 400 | 1.5 | 0.01em |
| Button | 14px | 500 | 1 | normal |
| Small Text | 13px | 500 | 1 | normal |
| Label | 11px | 600 | 1 | 0.15em (uppercase) |
| Card Prompt | 20px (xl) | 500 | snug | normal |

### Text Gradient
```css
.text-gradient {
  background: linear-gradient(180deg, #ffffff 0%, #737373 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Header

| Property | Value |
|----------|-------|
| Position | `fixed` top left right |
| Height | `68px` |
| Z-index | `100` |
| Background | `bg-black` (always) |
| Border | `0.5px solid rgba(255, 255, 255, 0.15)` |

### Nav Links
```css
padding: 12px 20px;
font-size: 15px;
border-radius: 8px;
hover: background-color: rgba(255, 255, 255, 0.1);
```

---

## Features Dropdown

| Property | Value |
|----------|-------|
| Position | `fixed`, `top: 68px` |
| Padding Top | `16px` (invisible bridge for hover) |
| Grid | `repeat(3, 200px) 320px`, gap: `40px` |
| Padding | `40px 48px` |
| Background | `#ffffff` |
| Border Radius | `16px` |
| Shadow | `0 25px 50px -12px rgba(0,0,0,0.25)` |

---

## Hero Section

| Property | Value |
|----------|-------|
| Min Height | `100vh` |
| Padding Top | `calc(68px + 40px)` |
| Background | `#000000` (primary-1000) |

---

## App Preview

| Property | Value | Tailwind |
|----------|-------|----------|
| Aspect Ratio | `160/95` | `aspect-[160/95]` |
| Background | `#171717` | `bg-primary-950` |
| Border | `1px solid rgba(255,255,255,0.15)` | `border border-white/15` |
| Border Radius | `8px` | `rounded-md` |
| Shadow | `0 25px 50px -12px rgba(0,0,0,0.5)` | `shadow-2xl` |
| Grid | `100px sidebar + 1fr content` | `grid-cols-[100px_1fr]` |
| Header Row | `56px` | `grid-rows-[56px_1fr]` |

---

## Feature Cards Section

### Section Container

| Property | Value | Tailwind |
|----------|-------|----------|
| Background | `#ffffff` | `bg-white` |
| Padding Y | `64px / 96px` | `py-16 lg:py-24` |
| Max Width | `1536px` | `max-w-s2xl` |
| Centering | auto margins | `mx-auto` |

### Cards Container

| Property | Value | Tailwind |
|----------|-------|----------|
| Display | flex horizontal | `flex` |
| Gap | `24px / 40px` | `gap-6 md:gap-10` |
| Overflow | horizontal scroll | `overflow-x-auto` |
| Scrollbar | hidden | `scrollbar-hide` |
| Margin X | `20px / 64px` | `mx-5 md:mx-16` |

### Feature Card Dimensions

| Property | Mobile | Desktop | Tailwind |
|----------|--------|---------|----------|
| Width | `300px` | `400px` | `w-[300px] md:w-[400px]` |
| Height | `375px` | `500px` | `h-[375px] md:h-[500px]` |
| Aspect Ratio | `4:5` | `4:5` | implicit |
| Border Radius | `16px` | `32px` | `rounded-2xl sm:rounded-[2rem]` |
| Cards Visible | ~1.5 | ~3.5 | calculated |

### Card Badge

| Property | Value | Tailwind |
|----------|-------|----------|
| Position | absolute top-left | `absolute top-4 left-4` |
| Padding | `8px 12px` | `px-3 py-2` |
| Background | `rgba(0,0,0,0.8)` | `bg-black/80` |
| Backdrop | blur | `backdrop-blur-sm` |
| Border Radius | `8px` | `rounded-lg` |
| Text | white, 14px, semibold | `text-white text-sm font-semibold` |
| Icon Gap | `8px` | `gap-2` |

### Card Content (Bottom)

| Property | Value | Tailwind |
|----------|-------|----------|
| Position | absolute bottom | `absolute bottom-0 left-0 right-0` |
| Padding | `20px` | `p-5` |
| Gradient Overlay | black 70% → transparent | `bg-gradient-to-t from-black/70 via-black/10 to-transparent` |

### Prompt Label

| Property | Value | Tailwind |
|----------|-------|----------|
| Font Size | `11px` | `text-[11px]` |
| Weight | medium | `font-medium` |
| Transform | uppercase | `uppercase` |
| Letter Spacing | `0.15em` | `tracking-[0.15em]` |
| Color | neutral-400 | `text-neutral-400` |
| Margin Bottom | `8px` | `mb-2` |

### Card Action Button

| Property | Value | Tailwind |
|----------|-------|----------|
| Padding | `10px 20px` | `px-5 py-2.5` |
| Background | white | `bg-white` |
| Text | black, 14px, medium | `text-black text-sm font-medium` |
| Border Radius | `8px` | `rounded-lg` |
| Hover | neutral-100 | `hover:bg-neutral-100` |

---

## Carousel Navigation Buttons

| Property | Value | Details |
|----------|-------|---------|
| Container | `mt-10 flex justify-end px-5 md:px-16` | Right-aligned, responsive padding |
| Button | `h-12 w-12 rounded-full bg-primary-200` | 48px circle button |
| Arrow | `10px × 17px SVG, currentColor` | Directional icons |
| Hover | opacity 75-85%, transition 300ms | Fade effect |

---

## Scroll Behavior

| Property | Value |
|----------|-------|
| Scroll Amount | `43%` of container width |
| Behavior | `smooth` |
| Clicks to End | 2 clicks (5 cards, 3.5 visible) |

---

## Shadows & Transitions

| Type | Value | Usage |
|------|-------|-------|
| **Shadows:** | | |
| Button | `0 1px 2px rgba(0, 0, 0, 0.05)` | Light shadow |
| Card | `0 4px 6px -1px rgba(0, 0, 0, 0.1)` | Subtle depth |
| App Window | `0 25px 50px -12px rgba(0, 0, 0, 0.5)` | Heavy depth |
| Dropdown | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` | Medium depth |
| **Transitions:** | | |
| Fast | `0.1s ease-out` | Rapid feedback |
| Base | `0.2s ease-out` | Standard animation |
| Slow | `0.3s ease-out` | Emphasis effect |
| Button Opacity | `opacity 0.3s ease-in-out` | Gradient visibility |
| Image Hover | `transform 0.7s` | Zoom effect |

---

## Responsive Breakpoints

| Breakpoint | Width | Container Padding |
|------------|-------|-------------------|
| Mobile | < 768px | `mx-5` (20px) |
| Desktop | ≥ 768px | `mx-16` (64px) |
| Large | ≥ 1024px | `max-w-s2xl` (1536px) |

---


## Page Layout & Section Pattern

**Section Component Pattern:**
```tsx
export function SectionName() {
  return (
    <section className="bg-primary-0 py-16 lg:py-24">
      <div className="max-w-s2xl mx-auto section-container">
        {/* Content */}
      </div>
    </section>
  );
}
```

**Padding Strategy:**
- Mobile (`< 768px`): 20px horizontal
- Desktop (`≥ 768px`): 64px horizontal
- Max Width: 1536px (`max-w-s2xl`)

**Background Zones:**
| Zone | Background | Purpose |
|------|-----------|---------|
| Hero | `primary-1000` (black) | High contrast |
| Content | `primary-0` (white) | Standard area |
| Showcase | `primary-100` (light gray) | Emphasis zone |
| Footer | `primary-100` | Closing section |

**Z-Index Stack:** Header (100) → Sticky (30) → Content (10) → Default (auto)

---

## Bento Grid Section

### Desktop Layout (16 columns × 14 rows)

| Property | Value | Details |
|----------|-------|---------|
| Grid Columns | 16 | `repeat(16, 1fr)` |
| Grid Rows | 14 | `repeat(14, minmax(50px, auto))` |
| Gap | 14px | `gap-3.5` |
| Border Radius | 24px | `rounded-3xl` on all cards |

### Grid Area Mapping (Desktop)

```
Row 1-4:   Speed (7 cols) | Upscaling (3 cols) | Train (6 cols)
Row 5-6:   4K (4 cols) | K1 (9 cols, spans 6 rows) | DoNotTrain (3 cols)
Row 7-10:  4K continues | K1 continues | Models (3 cols)
Row 7-10:  Minimalist (4 cols) | K1 continues | Models continues
Row 11-14: AssetManager (3) | BleedingEdge (3) | Styles (2) | Editor (3) | Lipsync (2) | 3D (3)
```

### CSS Grid Template Areas (Desktop)
```css
grid-template-areas:
  "speed speed speed speed speed speed speed upscaling upscaling upscaling train train train train train train"
  "speed speed speed speed speed speed speed upscaling upscaling upscaling train train train train train train"
  "speed speed speed speed speed speed speed upscaling upscaling upscaling train train train train train train"
  "speed speed speed speed speed speed speed upscaling upscaling upscaling train train train train train train"
  "fourk fourk fourk fourk k1 k1 k1 k1 k1 k1 k1 k1 k1 donottrain donottrain donottrain"
  "fourk fourk fourk fourk k1 k1 k1 k1 k1 k1 k1 k1 k1 donottrain donottrain donottrain"
  "fourk fourk fourk fourk k1 k1 k1 k1 k1 k1 k1 k1 k1 models models models"
  "minimalist minimalist minimalist minimalist k1 k1 k1 k1 k1 k1 k1 k1 k1 models models models"
  "minimalist minimalist minimalist minimalist k1 k1 k1 k1 k1 k1 k1 k1 k1 models models models"
  "minimalist minimalist minimalist minimalist k1 k1 k1 k1 k1 k1 k1 k1 k1 models models models"
  "assetmanager assetmanager assetmanager bleedingedge bleedingedge bleedingedge styles styles editor editor editor lipsync lipsync threed threed threed"
  "assetmanager assetmanager assetmanager bleedingedge bleedingedge bleedingedge styles styles editor editor editor lipsync lipsync threed threed threed"
  "assetmanager assetmanager assetmanager bleedingedge bleedingedge bleedingedge styles styles editor editor editor lipsync lipsync threed threed threed"
  "assetmanager assetmanager assetmanager bleedingedge bleedingedge bleedingedge styles styles editor editor editor lipsync lipsync threed threed threed";
```

**Mobile/Tablet:** `grid-cols-4 grid-rows-21`

**Card Specs:** Speed (image, white text) | Upscaling (primary-100, gradient) | Train (primary-100) | 4K (image) | Krea 1 (radial gradient) | Minimalist (dark) | Models (gradient) | Asset Manager (top gradient) | Bleeding Edge (clock) | 1000+ Styles (image) | Editor (centered) | Lipsync (wave) | 3D (nested)

### Gradient Header (Bento Text)
```css
.gradient-header {
  background: linear-gradient(200deg, #646464, #000);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Lipsync Wave Animation
```css
#waveContainer .wave-bar {
  animation: audio-wave 1s ease-in-out infinite;
  --height: var(--total-height);
}

/* Staggered delays for wave effect */
.bar-1 { animation-delay: 0.1s; }
.bar-2 { animation-delay: 0.2s; }
.bar-3 { animation-delay: 0.3s; }
.bar-4 { animation-delay: 0.4s; }
.bar-5 { animation-delay: 0.5s; }
.bar-6 { animation-delay: 0.6s; }

@keyframes audio-wave {
  0%, 100% { height: calc(var(--height) * 0.5); }
  50% { height: calc(var(--height) * 1); }
}
```

**BleedingEdgeClock:** ViewBox `0 0 200 200`, 140px size, 60 ticks, CSS animations, 1000ms update

---

## Reusable UI Components

### SectionHeader Component

**File:** `section-header.tsx` | **Props:** subtitle, title, size ("default"/"large"), darkSubtitle

**Used in:** LogoPartnersSection, BigPictureSection, UseCasesSection, InvestorShowcaseSection

---

### GradientButton Component

**File:** `src/components/ui/gradient-button.tsx` (99 lines)

**Purpose:** Reusable CTA button with gradient animation effect, works as both button and anchor elements.

**Props:**
```tsx
type GradientButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";  // Button style variant
  children: React.ReactNode;                        // Button text
  className?: string;                               // Additional classes
  as?: "button" | "a";                              // HTML element type
  href?: string;                                    // Link href (required if as="a")
}
```

**Variants:**
- `primary`: Dark background (#000), white text, gradient animation (120.49deg black→gray→black)
- `secondary`: Light background (#ebebeb), dark text, subtle gradient (transparent→dark→transparent)
- `tertiary`: Rounded-full white background, gradient animation (minimal 90deg black→transparent)

**Gradient Implementation:**
- Uses `data-button-gradient` attribute for gradient span
- Gradient hidden by default (opacity: 0)
- Visible on parent hover (`.button-gradient-transition:hover`)
- Animates with `translate-x-66` keyframe (1.25s, infinite)

**Styling:**
| Property | Value | Notes |
|----------|-------|-------|
| Padding | px-5 py-3 | 20px × 12px |
| Font Size | 13px | Medium weight |
| Border Radius | rounded-md | 8px, tertiary uses rounded-full |
| Hover | scale-[1.025] | 2.5% growth, 200ms |
| Animation | 1.25s gradient sweep | Infinite loop, 120.49deg diagonal |
| Gradient Span | `data-button-gradient` | Child element with gradient effect |

**HTML Structure:**
```tsx
<button class="button-gradient-transition">
  <span data-button-gradient class="button-gradient-primary"></span>
  Button Text
</button>
```

**Used in:** LogoPartnersSection, InvestorShowcaseSection, CTAButtonGroup

---

### CTAButtonGroup Component

**File:** `src/components/ui/cta-button-group.tsx` (65 lines)

**Purpose:** Reusable pair of CTA buttons (primary + secondary) with consistent spacing.

**Props:**
```tsx
interface CTAButtonGroupProps {
  primaryText: string;              // Primary button label
  primaryHref: string;              // Primary button link
  secondaryText: string;            // Secondary button label
  secondaryHref: string;            // Secondary button link
  secondaryNewTab?: boolean;        // Open secondary in new tab
  spacing?: "sm" | "md" | "lg";     // Vertical spacing variant
  className?: string;               // Additional classes
}
```

**Spacing Variants:**
- `sm`: `mt-8` (32px)
- `md`: `mt-12` (48px) - default
- `lg`: `mt-16 md:mt-20` (64px / 80px responsive)

**Layout:**
- Flex row with `gap-2.5` (10px spacing)
- Center-aligned buttons
- Primary (left) + Secondary (right)

**Used in:** LogoPartnersSection, InvestorShowcaseSection

---

### FeatureList Component

**File:** `src/components/ui/feature-list.tsx` (74 lines)

**Purpose:** Reusable list of features with check icons for pricing cards and feature sections.

**Props:**
```tsx
interface FeatureListProps {
  features: readonly string[];       // Array of feature strings
  variant?: "default" | "dark";      // Visual variant
  spacing?: "sm" | "md";             // Bottom margin spacing
  className?: string;                // Additional classes
}
```

**Variants:**
- `default`: Gray text/icons (light cards)
- `dark`: White text with gray icons (dark cards like Enterprise)

**Styling:**
| Property | Value | Details |
|----------|-------|---------|
| Icon Size | h-4 w-4 | 16px checkmark |
| Gap | gap-3 | Icon to text spacing |
| Font Size | text-sm | 14px |
| Colors (default) | primary-500 text & icons | Gray tone |
| Colors (dark) | White text, primary-400 icons | Dark theme |
| Spacing (sm) | mb-5 | 20px bottom margin |
| Spacing (md) | mb-8 | 32px bottom margin |

**Used in:** FreePricingCard, IndividualPricingCard, BusinessPricingCard, EnterprisePricingCard

---

## ModelShowcaseSection & LogoPartnersSection

**Rotating Cylinder:** 2000ms rotation (6 words: Generative, Image, Video, 3D, Creative, AI), 700ms transition, 1000px perspective

**ModelMarquee:** 7 platforms, 32s duration, 48px fade, seamless loop, 28px icons, primary-700 65% opacity text

**LogoPartnersSection:** Two-button CTA (dark primary + light secondary), responsive pt-24 to pt-40, gap-2.5 spacing

---

## Pricing Section

### Layout & Structure

| Property | Value | Tailwind | Details |
|----------|-------|----------|---------|
| Container | responsive grid | `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4` | 1 col mobile, 2 tablet, 4 desktop |
| Gap | 20px | `gap-5` | Consistent spacing between cards |
| Padding Y | `160px / 128px` | `pt-40 pb-20 md:pb-32` | Responsive vertical spacing |

### Pricing Cards (Base)

| Property | Value | Tailwind | Details |
|----------|-------|----------|---------|
| Min Height | `580px` | `min-h-[580px]` | Consistent card height |
| Padding | `32px` | `p-8` | Internal content spacing |
| Border Radius | `16px` | `rounded-2xl` | Consistent corner radius |
| Hover Scale | `1.015` (1.5%) | `hover:scale-[1.015]` | Subtle interactive feedback |
| Transition | 200ms | `duration-200 ease-out` | Smooth scale animation |

### Card Variants

#### Light Variant (Free, Individual, Business)
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | white | `bg-white` |
| Border | `#e5e5e5` | `border-primary-200` |
| Text | dark gray/black | `text-primary-900` |

#### Dark Variant (Enterprise)
| Property | Value | Tailwind |
|----------|-------|----------|
| Background | black | `bg-black` |
| Border | `#404040` | `border-primary-800` |
| Text | white/light gray | `text-white` / `text-primary-400` |

### Card Content Structure

| Element | Font Size | Weight | Color | Details |
|---------|-----------|--------|-------|---------|
| Title | 24px | 500 (medium) | primary-900 / white | Plan name |
| Description | 14px | 400 | primary-500 / primary-400 | Subtitle text |
| Price | 36px | 600 (semibold) | primary-900 / white | Main price number |
| Price Unit | 14px | 500 | primary-500 | "/month" or compute units |
| Compute Label | 16px | 500 | primary-600 / primary-500 | "K/M compute units" |
| Feature List | 14px | 400 | primary-500 / white | Bullet points |

### Pricing Button

| Property | Value | Tailwind | CSS Details |
|----------|-------|----------|------------|
| Height | `40px` | `h-10` | Fixed button height |
| Width | 100% | `w-full` | Full card width |
| Border Radius | `8px` | `rounded-lg` | Slight rounding |
| Font | 14px, 600 | `text-sm font-semibold` | Bold, compact text |
| Hover Scale | `1.025` (2.5%) | `hover:scale-[1.025]` | Interactive feedback |
| Transition | 200ms | `duration-200 ease-out` | Smooth animation |

#### Primary Variant (Free, Individual, Business)
| Property | Value |
|----------|-------|
| Background | black |
| Text | white |
| Gradient Animation | Yes (see below) |

#### White Variant (Enterprise)
| Property | Value |
|----------|-------|
| Background | white |
| Text | black |
| Gradient Animation | No |

### Button Gradient Animation

**Primary Gradient** (Dark buttons with shine effect):
```css
.button-gradient-primary {
  background: linear-gradient(
    120.49deg,
    #000 41.45%,
    #b2b2b2e6 50%,
    #000 60.74%
  );
}
```

**Secondary Gradient** (Light buttons with subtle effect):
```css
.button-gradient-secondary {
  background: linear-gradient(
    120.49deg,
    transparent 41.45%,
    rgba(0, 0, 0, 0.12) 50%,
    transparent 60.74%
  );
}
```

**Tertiary Gradient** (Minimal dark shade):
```css
.button-gradient-tertiary {
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.06) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}
```

**Animation Keyframes:**
```css
@keyframes translate-x-66 {
  0% { transform: translateX(-66.666%); }
  100% { transform: translateX(0%); }
}
```

**Visibility Control (Hover-only):**
```css
[data-button-gradient] {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.button-gradient-transition:hover [data-button-gradient] {
  opacity: 1;
}

.button-gradient-transition {
  transition: all 0.2s ease-out;
}
```

**Animation:** `animate-[translate-x-66_1.25s_ease-in-out_infinite]`
- Angle: 120.49deg (diagonal sweep)
- Effect: Black → gray → black shine that sweeps right-to-left
- Duration: 1.25s, ease-in-out, infinite loop
- Visibility: Hidden by default, visible on hover via opacity transition

### Plan Slider (Interactive)

| Property | Value | Tailwind | Details |
|----------|-------|----------|---------|
| Track Height | 6px | `h-1.5` | Thin slider rail |
| Track Background | `#e5e5e5` | `bg-primary-200` | Light gray |
| Active Range | black | `bg-primary-900` | Filled portion |
| Thumb Size | 16px | `h-4 w-4` | Circular handle |
| Thumb Border | 1px black | `border-primary-900` | Visible border |
| Thumb Background | white | `bg-white` | Contrast with track |
| Label Font | 12px, 600 | `text-xs font-semibold` | Small, bold |
| Label Spacing | gap-0 (stretched) | `justify-between` | Distributed across width |

**Accessibility:**
- Keyboard control: Arrow Left/Right to adjust
- ARIA labels: `role="slider"`, `aria-valuemin/max/now/text`
- Focus ring: 4px ring on focus, primary-900 color
- Hover state: 4px ring on hover for visibility

### Pricing Card Variants

| Card | Tiers | Price Range | Features | CTA |
|------|-------|-------------|----------|-----|
| Free | 1 | $0/month | 4 (pay-as-you-go, daily free) | Get started free |
| Individual | 6 | $9-$96/month | 4 (premium, commercial) | Choose Individual |
| Business | 10 | $50-$2500 | 6 (team, priority) | Choose Business |
| Enterprise | 1 | Custom | 6 (SLA, security) | Contact sales |

### Pricing Heading

| Property | Value | Tailwind | Details |
|----------|-------|----------|---------|
| Font Sizes | 36px / 40px / 48px / 56px | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` | Responsive scaling |
| Weight | 600 (semibold) | `font-semibold` | Medium-bold weight |
| Line Height | 1.05 | `leading-[1.05]` | Tight spacing |
| Letter Spacing | normal | `tracking-tight` | Compressed tracking |
| Color | black | `text-primary-900` | Dark text |
| Gap | 24px | `gap-6` | Space between heading lines |
| Text Lines | 3 lines | Flex column | Stacked layout |

---

*Updated: 2026-01-10 12:57 | Source: krea.ai pixel-perfect recreation*

**See Also:** [Icon System Reference](./icon-system.md) - Consolidated 35-icon reference guide

**Recent Updates:**
- Fixed button gradient to diagonal 120.49deg sweep (black → #b2b2b2e6 gray → black)
- Added tertiary button gradient variant (minimal 90deg black shade)
- Added hover-only gradient visibility (opacity transition, data-button-gradient attribute)
- Updated GradientButton component docs with gradient implementation details
- Added button gradient animation CSS specifications
- Added Pricing Section with 4-card layout (Free, Individual, Business, Enterprise)
- Added interactive PlanSlider component specifications with accessibility
- Added Bento Grid Section with 16-column desktop layout
- Added Lipsync wave animation CSS specifications
- Added BleedingEdgeClock component hydration-safe implementation
- Updated gradient-header to match original Krea diagonal gradient
