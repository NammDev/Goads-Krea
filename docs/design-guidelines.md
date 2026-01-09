# Krea.ai Design Guidelines

Design system for pixel-perfect krea.ai recreation. **Source of truth for all implementations.**

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

### Container

| Property | Value | Tailwind |
|----------|-------|----------|
| Margin Top | `40px` | `mt-10` |
| Alignment | right | `flex justify-end` |
| Padding X | `20px / 64px` | `px-5 md:px-16` |
| Button Gap | `12px` | `gap-3` |

### Navigation Button

| Property | Value | Tailwind |
|----------|-------|----------|
| Size | `48px × 48px` | `h-12 w-12` |
| Shape | circle | `rounded-full` |
| Background | `#e5e5e5` | `bg-primary-200` |
| Text Color | black | `text-black` |
| Cursor | pointer | `cursor-pointer` |
| Transition | opacity 300ms ease-in-out | `transition-opacity duration-300 ease-in-out` |
| Hover (Left) | opacity 85% | `hover:opacity-85` |
| Hover (Right) | opacity 75% | `hover:opacity-75` |

### Arrow Icons (SVG)

| Property | Value |
|----------|-------|
| ViewBox | `0 0 10 17` |
| Size | `10px × 17px` |
| Fill | `currentColor` |
| Left Arrow Offset | `-translate-x-px` |
| Right Arrow Offset | `translate-x-px` |

#### Left Arrow SVG Path
```svg
<path d="M0.370118 8.8457C0.370118 8.66992 0.405274 8.50293 0.475587 8.34473C0.54004 8.19238 0.645509 8.0459 0.791993 7.90527L7.55078 1.28711C7.7793 1.06445 8.05762 0.953125 8.38574 0.953125C8.59668 0.953125 8.79297 1.00586 8.97461 1.11133C9.15625 1.2168 9.30274 1.35742 9.41406 1.5332C9.51953 1.70898 9.57227 1.9082 9.57227 2.13086C9.57227 2.45312 9.44922 2.74023 9.20313 2.99219L3.18262 8.8457L9.20313 14.6992C9.44922 14.9453 9.57227 15.2324 9.57227 15.5605C9.57227 15.7773 9.51953 15.9736 9.41406 16.1494C9.30273 16.3311 9.15625 16.4746 8.97461 16.5801C8.79297 16.6855 8.59668 16.7383 8.38574 16.7383C8.05762 16.7383 7.7793 16.627 7.55078 16.4043L0.791993 9.78613C0.651368 9.64551 0.545899 9.49902 0.475587 9.34668C0.405274 9.19433 0.370118 9.02734 0.370118 8.8457Z" fill="currentColor"/>
```

#### Right Arrow SVG Path
```svg
<path d="M9.62988 8.1543C9.62988 8.33008 9.59473 8.49707 9.52441 8.65527C9.45996 8.80762 9.35449 8.9541 9.20801 9.09473L2.44922 15.7129C2.2207 15.9355 1.94238 16.0469 1.61426 16.0469C1.40332 16.0469 1.20703 15.9941 1.02539 15.8887C0.84375 15.7832 0.697266 15.6426 0.585938 15.4668C0.480469 15.291 0.427734 15.0918 0.427734 14.8691C0.427734 14.5469 0.550781 14.2598 0.796875 14.0078L6.81738 8.1543L0.796875 2.30078C0.550781 2.05469 0.427734 1.76758 0.427734 1.43945C0.427734 1.22266 0.480469 1.02637 0.585938 0.850586C0.697266 0.668945 0.84375 0.525391 1.02539 0.419922C1.20703 0.314453 1.40332 0.261719 1.61426 0.261719C1.94238 0.261719 2.2207 0.373047 2.44922 0.595703L9.20801 7.21387C9.34863 7.35449 9.4541 7.50098 9.52441 7.65332C9.59473 7.80566 9.62988 7.97266 9.62988 8.1543Z" fill="currentColor"/>
```

---

## Scroll Behavior

| Property | Value |
|----------|-------|
| Scroll Amount | `43%` of container width |
| Behavior | `smooth` |
| Clicks to End | 2 clicks (5 cards, 3.5 visible) |

---

## Shadows

| Usage | Value |
|-------|-------|
| Button | `0 1px 2px rgba(0, 0, 0, 0.05)` |
| Card | `0 4px 6px -1px rgba(0, 0, 0, 0.1)` |
| App Window | `0 25px 50px -12px rgba(0, 0, 0, 0.5)` |
| Dropdown | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` |

---

## Transitions

| Type | Value |
|------|-------|
| Fast | `0.1s ease-out` |
| Base | `0.2s ease-out` |
| Slow | `0.3s ease-out` |
| Button Opacity | `opacity 0.3s ease-in-out` |
| Image Hover | `transform 0.7s` |

---

## Responsive Breakpoints

| Breakpoint | Width | Container Padding |
|------------|-------|-------------------|
| Mobile | < 768px | `mx-5` (20px) |
| Desktop | ≥ 768px | `mx-16` (64px) |
| Large | ≥ 1024px | `max-w-s2xl` (1536px) |

---

## File Structure

```
src/
├── app/
│   └── globals.css          # Theme + utilities
├── components/
│   ├── features/
│   │   ├── feature-card.tsx   # Individual card
│   │   └── feature-cards.tsx  # Carousel section
│   ├── header/
│   │   ├── header.tsx
│   │   ├── features-dropdown.tsx
│   │   └── nav-link.tsx
│   └── hero/
│       ├── hero-section.tsx
│       └── app-preview.tsx
└── lib/
    └── utils.ts              # cn() helper
```

---

## Page Layout Structure

### Main Container (page.tsx)
```
<main perspective="10px" overflowY="auto">
  ├─ Sticky Header Container (h-0, z-30)
  │  ├─ Header (fixed, z-100)
  │  └─ Mobile Menu (overlay, z-30)
  │
  ├─ Content Wrapper (transform-style: preserve-3d)
  │  │
  │  ├─ Hero Section (transform-style: preserve-3d)
  │  │  └─ Min-height: 100vh, background: black, 3D depth
  │  │
  │  └─ White Background Container (bg-primary-0)
  │     └─ Max-width: 1536px (max-w-s2xl), centered (mx-auto)
  │        ├─ Feature Cards Section
  │        ├─ Model Showcase Section
  │        ├─ Bento Section
  │        ├─ Logo Partners Section
  │        ├─ Use Cases Section
  │        └─ Pricing Section
  │
  ├─ App Showcase Section (bg-primary-100, full-width)
  │  └─ Full viewport width, no max-width constraint
  │
  ├─ Big Picture + Investor Sections (max-w-s2xl, mx-auto)
  │  ├─ BigPictureSection
  │  └─ InvestorShowcaseSection
  │
  └─ Footer (bg-primary-100, full-width)
     └─ Light gray background, full viewport width
```

### Section Component Pattern
All section components follow this structure:
```tsx
export function SectionName() {
  return (
    <section className="bg-primary-0 py-16 lg:py-24">
      <div className="max-w-s2xl mx-auto">
        <div className="section-container">
          {/* Section content */}
        </div>
      </div>
    </section>
  );
}
```

### Responsive Padding Strategy
- **Mobile** (`< 768px`): `section-container` → 20px horizontal padding
- **Desktop** (`≥ 768px`): `section-container` → 64px horizontal padding
- **Max Width**: 1536px (`max-w-s2xl`) - Krea standard content width

### Background Color Zones
| Zone | Background | Purpose |
|------|-----------|---------|
| Hero | Black (`primary-1000`) | High contrast, immersive |
| Content Sections | White (`primary-0`) | Standard content area |
| App Showcase | Light Gray (`primary-100`) | Distinct zone emphasis |
| Footer | Light Gray (`primary-100`) | Closing section |

### Z-Index Stacking
| Layer | Z-Index | Component | Usage |
|-------|---------|-----------|-------|
| Header | 100 | Header (fixed) | Always visible, topmost |
| Sticky | 30 | Sticky header container | Supports sticky behavior |
| Content | 10 | Main wrapper, sections | Standard content flow |
| Default | auto | Footer, sections | Normal document flow |

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

### Mobile/Tablet Layout (4 columns × 21 rows)
```css
@media (max-width: 1024px) {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(21, minmax(80px, auto));
}
```

### Bento Card Specifications

| Card | Grid Area | Background | Content Style |
|------|-----------|------------|---------------|
| Speed | `speed` | Image + dark overlay | White text, centered |
| 22K Upscaling | `upscaling` | `primary-100` | GradientText + label |
| Train | `train` | `primary-100` | GradientText + label |
| 4K | `fourk` | Image background | White text overlay |
| Krea 1 | `k1` | Image + radial gradient | Large title + subtitle |
| Minimalist UI | `minimalist` | Image (`primary-1000`) | White text + reflection |
| Do Not Train | `donottrain` | `primary-100` | GradientText + description |
| 64+ Models | `models` | `primary-100` | GradientText + label |
| Asset Manager | `assetmanager` | Image + top gradient | White text, top-left |
| Bleeding Edge | `bleedingedge` | `primary-100` | Clock component + text |
| 1000+ Styles | `styles` | Image background | White text, top-left |
| Image Editor | `editor` | Image + gradient | White text, centered |
| Lipsync | `lipsync` | `primary-100` | Title + wave animation |
| Realtime + 3D | `threed` | Split card | Two nested cards |

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

### BleedingEdgeClock Component
| Property | Value | Details |
|----------|-------|---------|
| SVG ViewBox | `0 0 200 200` | Fixed coordinate system |
| Default Size | `140px` | Configurable via prop |
| Tick Marks | 60 total | Every 5th skipped for numbers |
| Hour Numbers | Pre-computed | Fixed precision strings |
| Animations | CSS transforms | Hour/minute/second hands |
| Update Interval | 1000ms | Client-side only |

---

## Reusable UI Components

### SectionHeader Component

**File:** `src/components/ui/section-header.tsx` (60 lines)

**Purpose:** Reusable section header with optional subtitle and title for consistent styling across sections.

**Props:**
```tsx
interface SectionHeaderProps {
  subtitle?: string;           // Smaller text above the title
  title: string;               // Main heading text
  ariaLabel?: string;          // Accessibility label (defaults to title)
  size?: "default" | "large";  // Size variant
  className?: string;          // Additional classes
  darkSubtitle?: boolean;      // Dark mode subtitle variant
}
```

**Size Variants:**
- `default`: `text-2xl sm:text-3xl`
- `large`: `text-2xl sm:text-3xl md:text-5xl` (for hero-like sections)

**Used in:** LogoPartnersSection, BigPictureSection, UseCasesSection, InvestorShowcaseSection

**Example:**
```tsx
<SectionHeader
  subtitle="A tool suite for pros and beginners alike"
  title="Krea powers millions of creatives worldwide"
  size="default"
/>
```

---

### GradientButton Component

**File:** `src/components/ui/gradient-button.tsx` (99 lines)

**Purpose:** Reusable CTA button with gradient animation effect, works as both button and anchor elements.

**Props:**
```tsx
type GradientButtonProps = {
  variant?: "primary" | "secondary";  // Button style variant
  children: React.ReactNode;          // Button text
  className?: string;                 // Additional classes
  as?: "button" | "a";                // HTML element type
  href?: string;                      // Link href (required if as="a")
}
```

**Variants:**
- `primary`: Dark background (#000), white text, gradient animation
- `secondary`: Light background (#ebebeb), dark text, subtle gradient

**Styling:**
| Property | Value | Notes |
|----------|-------|-------|
| Padding | px-5 py-3 | 20px × 12px |
| Font Size | 13px | Medium weight |
| Border Radius | rounded-md | 8px |
| Hover | scale-[1.025] | 2.5% growth, 200ms |
| Animation | 1.25s gradient sweep | Infinite loop |

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

## ModelShowcaseSection & LogoPartnersSection Components

### Rotating Cylinder (3D Text Animation)
**Used in:** ModelShowcaseSection title

| Property | Value | Details |
|----------|-------|---------|
| Rotation Interval | 2000ms | Auto-cycle through 6 words |
| Words | Generative, Image, Video, 3D, Creative, AI | Cycling text |
| Transform Transition | 700ms, ease-in-out | Smooth rotation effect |
| 3D Perspective | 1000px | Cylinder depth |
| Spacing Calculation | Dynamic (vw-based) | Responsive to font size |

### ModelMarquee Component
**Reusable marquee slider with model logos & fade effects**

| Property | Value | Details |
|----------|-------|---------|
| Models | 7 AI platforms | Krea, Veo, Ideogram, Runway, Luma, Flux, Gemini |
| Animation Duration | 32s (default) | Configurable via props |
| Gap Between Items | `--gap` CSS var | Consistent spacing |
| Fade Gradients | 48px (L/R) | White to transparent |
| Loop Type | Seamless | Duplicated row for continuous scroll |
| Icon Size | size-7 (28px) | Responsive via Tailwind |
| Text Color | primary-700 at 65% opacity | Gray tone, semi-transparent |

### LogoPartnersSection Layout
| Element | Style | Details |
|---------|-------|---------|
| Subtitle | text-base/primary-400 | "A tool suite for pros..." |
| Heading | text-2xl/primary-1000 | "Krea powers millions..." |
| Top Padding | pt-24 (mobile), pt-40 (desktop) | Responsive spacing |
| CTA Buttons | Two-button row | Sign up (dark), Contact Sales (light) |
| Button Spacing | gap-2.5 | Close together alignment |

### Button Variants (ModelMarquee sections)
| Button | Background | Text | Hover Effect |
|--------|-----------|------|--------------|
| Primary (Sign up) | primary-1000 (black) | primary-0 (white) | scale-[1.025] 200ms |
| Secondary (Contact) | primary-150 (light gray) | primary-1000 (black) | scale-[1.025] 200ms |

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

```css
.button-gradient-primary {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0) 100%
  );
}

@keyframes translate-x-66 {
  0% { transform: translateX(-66.666%); }
  100% { transform: translateX(0%); }
}
```

**Animation:** `animate-[translate-x-66_1.25s_ease-in-out_infinite]`
- Duration: 1.25s
- Timing: ease-in-out
- Loop: infinite
- Effect: Sweeping white gradient across button

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

#### Free Card
- **Icon:** None
- **Plans:** Single tier only
- **Price:** $0/month
- **Features:** 4 features (Pay-as-you-go, Free daily generations, Basic models, 4 concurrent jobs)
- **CTA:** "Get started free" → `/login`

#### Individual Basic Card
- **Icon:** 24px image from Krea CDN (https://s.krea.ai/pricing_basic.png)
- **Plans:** 6 tiers (Basic $9 → Max 4 $96) with PlanSlider
- **Price Display:** Dynamic price + compute units (5K-75K)
- **Features:** 4 features (Premium models, 8 concurrent jobs, Commercial license, Credit rollovers)
- **CTA:** "Choose Individual" → `/pricing`
- **State:** Slider for tier selection, price updates on selection

#### Business Card
- **Icon:** None
- **Plans:** 10 tiers (20K $50 → 1.5M $2500) with compute unit slider
- **Visible Labels:** Only indices 0, 5, 9 shown (20k, 400k, 1.5M)
- **All Tiers:** Clickable but labels hidden (invisible)
- **Price Display:** Dynamic price + compute units (20K-1.5M)
- **Features:** 6 features (Up to 100 members, 16 concurrent jobs, Credit rollovers, Usage limits, Priority support, Volume discounts)
- **CTA:** "Choose Business" → `/pricing`
- **State:** Slider with selective label visibility

#### Enterprise Card
- **Theme:** Dark (black background, white/gray text)
- **Plans:** Single "Custom" tier (no slider)
- **Price Display:** "Custom" (no pricing shown)
- **Header:** "Everything in Business, plus:"
- **Features:** 6 enterprise-specific features (Priority SLA support, Advanced security, Custom integrations, No-train policy, MSA legal, Onboarding & training)
- **CTA:** "Contact sales" (white variant) → `/enterprise`

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

*Updated: 2026-01-08 16:27 | Source: krea.ai pixel-perfect recreation*

**See Also:** [Icon System Reference](./icon-system.md) - Consolidated 35-icon reference guide

**Recent Updates:**
- Added Pricing Section with 4-card layout (Free, Individual, Business, Enterprise)
- Added interactive PlanSlider component specifications with accessibility
- Added button gradient animation CSS specifications
- Added Bento Grid Section with 16-column desktop layout
- Added Lipsync wave animation CSS specifications
- Added BleedingEdgeClock component hydration-safe implementation
- Updated gradient-header to match original Krea diagonal gradient
