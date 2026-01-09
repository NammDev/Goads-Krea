# Icon System Reference

Complete reference for the consolidated 35-icon system in krea-v4.

---

## Overview

All icons use `currentColor` for color inheritance and are exported from `src/components/icons/index.ts`.

**Icon Inventory:**
- 1 Krea Logo (brand)
- 1 Chevron icon (navigation)
- 6 Feature icons (navigation)
- 4 Badge icons (model cards)
- 2 Arrow icons (carousel)
- 7 Feature category icons (dropdown)
- 7 Model logo icons (marquee/showcase)

---

## Badge Icons

**File:** `src/components/icons/badge-icons.tsx`

Model/feature badges with type-safe selection and optional sizing.

| Icon | Size Options | Usage | Color |
|------|--------------|-------|-------|
| **KreaIcon** | sm (16px), md (20px), lg (24px) | Krea brand badge | Inherits (white) |
| **VeoIcon** | sm, md, lg | Google Veo badge | Fixed green (#22c55e) |
| **TopazIcon** | sm, md, lg | Claude Topaz badge | Fixed purple (#8b5cf6) |
| **HailuoIcon** | sm, md, lg | Hailuo badge | Inherits (white) |

### Badge Props
```tsx
interface IconProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}
```

### Helper Function
```tsx
getBadgeIcon(type: BadgeIconType, className?: string): JSX.Element
```
- Auto-applies default styling (white text for Krea/Hailuo)
- Accepts optional className for styling overrides
- Type-safe: requires "krea" | "veo" | "topaz" | "hailuo"

### Badge Usage Examples
```tsx
import { KreaIcon, getBadgeIcon } from "@/components/icons";

// Direct component
<KreaIcon size="md" className="text-white" />

// Using helper
<div className="flex gap-2">
  {getBadgeIcon("veo")}
  {getBadgeIcon("topaz", "text-lg")}
</div>

// Map lookup
import { BadgeIcons } from "@/components/icons";
const Icon = BadgeIcons["krea"];
<Icon size="lg" />
```

---

## Arrow Icons

**File:** `src/components/icons/arrow-icons.tsx`

Carousel navigation arrows (exact Krea design).

| Icon | Size | Viewbox | Offset | Usage |
|------|------|---------|--------|-------|
| **ArrowLeftIcon** | 10×17px | 0 0 10 17 | -translate-x-px | Left carousel |
| **ArrowRightIcon** | 10×17px | 0 0 10 17 | translate-x-px | Right carousel |

### Arrow Props
```tsx
interface ArrowIconProps {
  className?: string;
}
```

### Arrow Usage
```tsx
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

<button className="h-12 w-12 bg-primary-200 rounded-full hover:opacity-85">
  <ArrowLeftIcon className="text-black" />
</button>
```

---

## Feature Category Icons

**File:** `src/components/icons/feature-category-icons.tsx`

Dropdown menu category icons (24×24px, all inherit currentColor).

| Icon | Purpose | Component Name |
|------|---------|---|
| Image frame with mountain | AI Image Generation | ImageGenIcon |
| Video camera | AI Video Generation | VideoGenIcon |
| Layered cube | AI 3D Generation | ThreeDGenIcon |
| Star burst | Image Enhancement | EnhanceIcon |
| Video with play | Video Enhancement | VideoEnhanceIcon |
| Settings gear + rays | Model Finetuning | FinetuneIcon |
| Document | File Management | FileIcon |

### Category Icon Props
```tsx
interface IconProps {
  className?: string;
}
```

### Category Icon Usage
```tsx
import {
  ImageGenIcon,
  VideoGenIcon,
  EnhanceIcon,
  FinetuneIcon
} from "@/components/icons";

// In dropdown menu
<div className="grid grid-cols-3 gap-8 p-10">
  <div className="flex flex-col items-center gap-2">
    <ImageGenIcon className="text-primary-500 w-8 h-8" />
    <span>AI Image Generation</span>
  </div>
  <div className="flex flex-col items-center gap-2">
    <VideoGenIcon className="text-primary-500 w-8 h-8" />
    <span>AI Video Generation</span>
  </div>
</div>
```

---

## Model Logo Icons

**File:** `src/components/icons/model-logo-icons.tsx`

AI/ML platform logos for marquee displays and model showcases.

| Icon | Platform | SVG Path | Usage |
|------|----------|----------|-------|
| **KreaModelIcon** | Krea | 4-path geometric logo | Model showcase marquee |
| **VeoModelIcon** | DeepMind Veo | Interlocking circles | Model showcase marquee |
| **IdeogramModelIcon** | Ideogram | Platform logo | Model showcase marquee |
| **RunwayModelIcon** | Runway ML | Brand logo | Model showcase marquee |
| **LumaModelIcon** | Luma AI | Platform logo | Model showcase marquee |
| **FluxModelIcon** | Flux | Brand logo | Model showcase marquee |
| **GeminiModelIcon** | Google Gemini | Platform logo | Model showcase marquee |

### Model Logo Props
```tsx
interface IconProps {
  className?: string;
}
```

All model logo icons accept a `className` prop for sizing and styling.

### Model Logo Usage Examples
```tsx
import {
  KreaModelIcon,
  VeoModelIcon,
  IdeogramModelIcon,
  RunwayModelIcon,
  LumaModelIcon,
  FluxModelIcon,
  GeminiModelIcon
} from "@/components/icons";

// Individual icons
<KreaModelIcon className="size-8" /> {/* 32px square */}
<VeoModelIcon className="w-6 h-6" />  {/* 24px square */}

// In ModelMarquee component
const modelList = [
  { name: "Krea 1", icon: KreaModelIcon },
  { name: "Veo 3.1", icon: VeoModelIcon },
  { name: "Ideogram", icon: IdeogramModelIcon },
];
```

### Integration with ModelMarquee
The `ModelMarquee` component from `src/components/ui/model-marquee.tsx` uses these icons:

```tsx
import { ModelMarquee } from "@/components/ui/model-marquee";

// Renders all 7 model logos in a seamless scrolling marquee
<ModelMarquee />

// Or customize with different models
<ModelMarquee models={customModels} duration="20s" />
```

---

## Other Icons

**File:** `src/components/icons/feature-icons.tsx`

| Icon | Purpose |
|------|---------|
| ImageIcon | Feature navigation |
| VideoIcon | Feature navigation |
| ThreeDIcon | Feature navigation |
| EditIcon | Feature navigation |
| UpscaleIcon | Feature navigation |
| HamburgerIcon | Mobile menu toggle |

**File:** `src/components/icons/chevron-icon.tsx`

| Icon | Purpose |
|------|---------|
| ChevronIcon | Dropdown toggle |

**File:** `src/components/icons/krea-logo.tsx`

| Icon | Purpose |
|------|---------|
| KreaLogo | Header/brand logo |

---

## Import Patterns

### Specific Imports (Recommended)
```tsx
import {
  KreaIcon,
  VeoIcon,
  ArrowLeftIcon,
  ImageGenIcon,
  VideoEnhanceIcon
} from "@/components/icons";
```

### Helper/Map Imports
```tsx
import { getBadgeIcon, BadgeIcons } from "@/components/icons";
import type { BadgeIconType } from "@/components/icons";
```

### All Icons (Not Recommended)
```tsx
// Avoid barrel import for tree-shaking
import * as Icons from "@/components/icons";
```

---

## Styling & Customization

### Color Inheritance
All icons use `currentColor`, so colors inherit from parent text color:
```tsx
<div className="text-white">
  <KreaIcon /> {/* Will be white */}
</div>

<div className="text-primary-500">
  <ImageGenIcon /> {/* Will be primary-500 */}
</div>
```

### Size Variants
Badge icons support named sizes:
```tsx
<KreaIcon size="sm" /> {/* 16px */}
<KreaIcon size="md" /> {/* 20px (default) */}
<KreaIcon size="lg" /> {/* 24px */}
```

### Opacity & Transforms
Apply via Tailwind className:
```tsx
<ArrowLeftIcon className="opacity-50 hover:opacity-100" />
<ImageGenIcon className="w-8 h-8 rotate-90" />
<VeoIcon className="scale-150" size="md" />
```

### Override Default Colors
Badge icons have sensible defaults; override when needed:
```tsx
import { getBadgeIcon } from "@/components/icons";

// Default (white text)
{getBadgeIcon("krea")}

// Override
{getBadgeIcon("krea", "text-black")}
```

---

## Best Practices

1. **Use Specific Imports:** Import only needed icons for better tree-shaking
2. **Leverage Type Safety:** Use `BadgeIconType` for badge selection
3. **Respect Default Styling:** Badge icons auto-style for Krea/Hailuo; let it work
4. **Compose with className:** Avoid prop drilling; use Tailwind classes
5. **Consistent Sizing:** Use named sizes (sm/md/lg) for badges, px-based for others
6. **Color Inheritance:** Rely on currentColor; minimize hardcoded colors

---

## Migration Guide

If refactoring code to use consolidated icons:

**Before:** Inline SVG or scattered icon components
```tsx
// Old way - scattered components
import { OldFeatureIcon } from "./old-icons/feature";
import { OldArrowLeft } from "./old-icons/arrows";
```

**After:** Consolidated import
```tsx
// New way - organized by category
import { ImageGenIcon, ArrowLeftIcon } from "@/components/icons";
```

All 35 icons are now centralized and properly categorized in the icons directory.

**New:** 7 Model logo icons added in `src/components/icons/model-logo-icons.tsx` for use in ModelMarquee and showcase sections.

---

*Updated: 2026-01-08*
