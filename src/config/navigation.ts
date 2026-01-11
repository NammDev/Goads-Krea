/** Navigation link configuration */
export interface NavLink {
  label: string;
  href: string;
}

/** Main navigation links (header) */
export const MAIN_NAV: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About", href: "/about" },
];

/** Footer navigation configuration */
export const FOOTER_NAV = {
  products: [
    { label: "Image Generation", href: "/features#image" },
    { label: "Video Generation", href: "/features#video" },
    { label: "3D Generation", href: "/features#3d" },
    { label: "Real-time Canvas", href: "/features#canvas" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/docs/api" },
    { label: "Changelog", href: "/blog/changelog" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/about#careers" },
    { label: "Press", href: "/about#press" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
