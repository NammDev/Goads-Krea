# Component API Reference

## UI Components

### Button

```tsx
import { Button, buttonVariants } from "@/components/ui";

interface ButtonProps {
  variant?: "primary" | "secondary" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}
```

**Examples:**
```tsx
<Button>Default (primary)</Button>
<Button variant="secondary" size="lg">Large secondary</Button>
<Button variant="light">Light button</Button>
<Button variant="dark" size="sm">Small dark</Button>
```

### GradientButton

```tsx
import { GradientButton, gradientButtonVariants } from "@/components/ui";

interface GradientButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  as?: "button" | "link";
  href?: string;  // Required when as="link"
  className?: string;
  children: React.ReactNode;
}
```

**Examples:**
```tsx
<GradientButton>CTA Button</GradientButton>
<GradientButton variant="secondary">Secondary</GradientButton>
<GradientButton as="link" href="/pricing">Link Button</GradientButton>
```

### Section

```tsx
import { Section } from "@/components/ui";

interface SectionProps {
  spacing?: "compact" | "standard" | "large" | "pricing";
  container?: boolean;
  background?: "transparent" | "primary-0" | "primary-100";
  className?: string;
  children: React.ReactNode;
}
```

**Spacing values:**
- `compact`: py-12
- `standard`: py-16 lg:py-24
- `large`: py-24 lg:py-32
- `pricing`: pt-40 pb-20

### FeatureList

```tsx
import { FeatureList } from "@/components/ui";

interface FeatureListProps {
  features: readonly string[];
  variant?: "default" | "dark";
  spacing?: "sm" | "md";
  className?: string;
}
```

**Example:**
```tsx
<FeatureList
  features={["Feature 1", "Feature 2", "Feature 3"]}
  variant="default"
/>
```

### MediaCard

```tsx
import { MediaCard, MediaCardHeader, MediaCardContent, MediaCardPrompt } from "@/components/ui";
```

Compound component for media showcase cards.

## Layout Components

### PageLayout

```tsx
import { PageLayout } from "@/components/layouts";

interface PageLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;      // default: true
  showFooter?: boolean;      // default: true
  mainClassName?: string;
  enablePerspective?: boolean; // default: true
}
```

**Example:**
```tsx
export default function MarketingLayout({ children }) {
  return <PageLayout>{children}</PageLayout>;
}
```

## Navigation Components

### NavLink

```tsx
import { NavLink } from "@/components/header";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  inverted?: boolean;
}
```

Active state automatically applied using `usePathname`.

## SEO Components

### generatePageMetadata

```tsx
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Page Title",
  description: "Page description",
  image: "https://example.com/og.png",  // optional
  noIndex: false,  // optional
});
```

### JSON-LD Components

```tsx
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
  BreadcrumbJsonLd,
  BlogPostJsonLd,
} from "@/lib/seo";
```

**BreadcrumbJsonLd:**
```tsx
<BreadcrumbJsonLd
  items={[
    { name: "Home", url: "https://krea.ai" },
    { name: "Pricing", url: "https://krea.ai/pricing" },
  ]}
/>
```

**OrganizationJsonLd:**
```tsx
<OrganizationJsonLd />  // No props needed
```

## Section Components

### Pricing Cards

```tsx
import {
  FreePricingCard,
  IndividualPricingCard,
  BusinessPricingCard,
  EnterprisePricingCard,
} from "@/components/sections/pricing";
```

All pricing cards are self-contained with built-in state for sliders.

### Other Sections

```tsx
import {
  ModelShowcaseSection,
  BentoSection,
  LogoPartnersSection,
  UseCasesSection,
  PricingSection,
  AppShowcaseSection,
  BigPictureSection,
  InvestorShowcaseSection,
  EnterpriseAdvantageSection,
  EnterpriseShowcaseSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
  CtaBannerSection,
} from "@/components/sections";
```

All sections are standalone - no props required.

## Icon Components

See [Icon System](./icon-system.md) for full icon reference.

```tsx
import { KreaLogo, HamburgerIcon, CheckIcon } from "@/components/icons";

<KreaLogo width={22} height={22} />
<CheckIcon className="text-green-500" />
```
