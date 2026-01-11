/** Site-wide SEO configuration */
export const siteConfig = {
  name: "Krea",
  url: "https://www.krea.ai",
  description: "AI Creative Suite for Images, Video & 3D",
  ogImage: "https://s.krea.ai/opengraph.webp",
  logo: "https://www.krea.ai/logo.png",
  twitter: {
    handle: "@krea_ai",
    site: "@krea_ai",
    cardType: "summary_large_image" as const,
  },
  author: "Krea",
  keywords: [
    "AI",
    "image generation",
    "video generation",
    "3D generation",
    "creative AI",
    "Krea",
    "generative AI",
    "AI art",
  ],
  socialLinks: {
    twitter: "https://twitter.com/krea_ai",
    linkedin: "https://www.linkedin.com/company/krea-ai",
  },
} as const;

export type SiteConfig = typeof siteConfig;
