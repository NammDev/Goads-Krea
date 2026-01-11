# Design System

## Color Tokens

### Primary Scale (Grayscale)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-0` | #ffffff | Backgrounds, light surfaces |
| `primary-50` | #fafafa | Light backgrounds |
| `primary-100` | #f5f5f5 | Section backgrounds |
| `primary-150` | #ededed | Subtle backgrounds |
| `primary-200` | #e5e5e5 | Borders, dividers |
| `primary-300` | #d4d4d4 | Muted borders |
| `primary-400` | #a3a3a3 | Muted text, placeholders |
| `primary-500` | #737373 | Secondary text |
| `primary-600` | #525252 | Body text |
| `primary-700` | #404040 | Dark text |
| `primary-800` | #262626 | Dark backgrounds |
| `primary-850` | #1a1a1a | Darker backgrounds |
| `primary-900` | #171717 | Dark text, backgrounds |
| `primary-950` | #0a0a0a | Near black |
| `primary-1000` | #000000 | Black (hero, header) |

### Usage

```tsx
<div className="bg-primary-100 text-primary-900">Content</div>
<p className="text-primary-500">Muted text</p>
<div className="border-primary-200">Bordered element</div>
```

## Typography

### Font Stack

```css
--font-sans: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
```

### Scale

| Size | Class | Usage |
|------|-------|-------|
| 11px | `text-[11px]` | Labels, uppercase text |
| 13px | `text-[13px]` | Buttons, small UI |
| 14px | `text-sm` | Body small |
| 15px | `text-xbase` | Nav links |
| 16px | `text-base` | Body text |
| 18px | `text-lg` | Subheadings |
| 20px | `text-xl` | Card prompts |
| 24px | `text-2xl` | Section titles |
| 48px | `text-5xl` | Page headings |
| 72px | `text-7xl` | Hero titles |

### Font Weights

- `font-normal` (400) - Body text
- `font-medium` (500) - Buttons, labels
- `font-semibold` (600) - Headings

## Spacing

### Section Padding

```css
.section-container {
  padding-left: 20px;   /* mobile */
  padding-right: 20px;
}
@media (min-width: 768px) {
  padding-left: 64px;   /* desktop */
  padding-right: 64px;
}
```

### Container Max Widths

| Class | Width | Usage |
|-------|-------|-------|
| `max-w-sxl` | 1280px | Narrow content |
| `max-w-s2xl` | 1536px | Standard sections |
| `max-w-s3xl` | 1792px | Wide content |

### Common Spacing Patterns

- `pt-24` / `pt-32` - Section top padding
- `pb-20` / `pb-24` - Section bottom padding
- `gap-4` / `gap-6` - Card grids
- `mt-6` - Paragraph after heading

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 6px | Small elements |
| `rounded-md` | 8px | Buttons, inputs |
| `rounded-lg` | 12px | Cards |
| `rounded-xl` | 16px | Large cards |
| `rounded-2xl` | 24px | Feature cards |
| `rounded-4xl` | 32px | Hero elements |

## Shadows

```css
.thin-border {
  box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.1);
}
.shadow-xs {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
```

## Transitions

### Standard Durations

- `duration-200` - Quick interactions (hover)
- `duration-300` - Standard transitions
- `duration-400` - Smooth animations

### Easing

- `ease-out` - Standard easing
- `ease-in-out` - Two-way transitions

### Common Patterns

```tsx
// Button hover
className="transition-[opacity,scale,transform,background-color] duration-400 ease-out"

// Color transition
className="transition-colors duration-200"

// Header scroll
className="transition-[background-color,color] duration-200 ease-out"
```

## 3D Effects

### Hero Perspective

```tsx
<main style={{ perspective: "10px" }}>
  <div style={{ transformStyle: "preserve-3d" }}>
    <HeroSection />
  </div>
</main>
```

### Gradient Animation

`.button-gradient-transition` - Animated gradient background for CTAs.

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Wide screens |
