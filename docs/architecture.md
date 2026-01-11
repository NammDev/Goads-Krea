# Architecture

## Routing Structure

### Route Groups

```
src/app/
├── layout.tsx              # Root layout (html, body, fonts)
├── sitemap.ts              # Auto-generated sitemap
├── robots.ts               # Robots.txt config
├── (marketing)/            # Marketing pages
│   ├── layout.tsx          # PageLayout (Header + Footer)
│   ├── page.tsx            # / (homepage)
│   ├── features/page.tsx   # /features
│   ├── pricing/page.tsx    # /pricing
│   ├── enterprise/page.tsx # /enterprise
│   └── about/page.tsx      # /about
├── (blog)/                 # Blog route group
│   ├── layout.tsx          # Blog layout
│   └── blog/page.tsx       # /blog
└── (docs)/                 # Docs route group
    ├── layout.tsx          # Docs layout with sidebar
    └── docs/page.tsx       # /docs
```

### Route Groups Explained

Route groups (parentheses folders) organize routes without affecting URL:
- `(marketing)` - Marketing pages with standard Header/Footer
- `(blog)` - Blog with simplified layout
- `(docs)` - Documentation with sidebar navigation

## Layout Architecture

### PageLayout Component

```tsx
import { PageLayout } from "@/components/layouts";

// Usage in route group layout
export default function MarketingLayout({ children }) {
  return <PageLayout>{children}</PageLayout>;
}
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| showHeader | boolean | true | Show Header + MobileMenu |
| showFooter | boolean | true | Show Footer (inside main) |
| mainClassName | string | - | Additional main classes |
| enablePerspective | boolean | true | 3D perspective for hero effects |

### Layout Hierarchy

```
RootLayout (html, body, fonts)
└── MarketingLayout (PageLayout wrapper)
    ├── Header (fixed position)
    ├── MobileMenu
    └── main (scrollable, perspective)
        ├── Page content
        └── Footer
```

## SEO Infrastructure

### Metadata System

**Root metadata** (`app/layout.tsx`):
- Sets `metadataBase` for relative URLs
- Defines title template: `%s | Krea`
- Default OG/Twitter images
- Robot directives

**Page metadata** (per page):
```tsx
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Pricing",
  description: "Choose the right Krea plan for you.",
});
```

### JSON-LD Structured Data

| Schema | Location | Component |
|--------|----------|-----------|
| Organization | Homepage | `<OrganizationJsonLd />` |
| SoftwareApplication | Homepage | `<SoftwareApplicationJsonLd />` |
| Breadcrumb | All pages | `<BreadcrumbJsonLd />` |
| BlogPosting | Blog posts | `<BlogPostJsonLd />` |

### SEO Files

```
src/lib/seo/
├── site-config.ts    # Site configuration (name, url, socials)
├── metadata.ts       # generatePageMetadata, generateBlogMetadata
├── json-ld.tsx       # JSON-LD components
└── index.ts          # Barrel export
```

## Navigation Configuration

```tsx
// src/config/navigation.ts
export const MAIN_NAV = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
];

export const FOOTER_NAV = {
  products: [...],
  resources: [...],
  company: [...],
  legal: [...],
};
```

## Build & Deploy

### Sitemap Generation

`/sitemap.xml` auto-generates at build time from `src/app/sitemap.ts`.

Currently includes:
- Static marketing pages (/, /features, /pricing, /enterprise, /about)
- Blog index (/blog)
- Docs index (/docs)

### Robots.txt

`/robots.txt` generates from `src/app/robots.ts`:
- Allows all crawlers on `/`
- Blocks `/admin`, `/api`, `/_next`, `/private`
- References sitemap location
