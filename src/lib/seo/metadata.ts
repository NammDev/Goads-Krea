import { Metadata } from "next";
import { siteConfig } from "./site-config";

interface PageMetadataProps {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
}

/**
 * Generate metadata for a static page
 */
export function generatePageMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonicalUrl,
}: PageMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(canonicalUrl && { alternates: { canonical: canonicalUrl } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
  };
}

interface BlogMetadataProps {
  title: string;
  excerpt: string;
  ogImage: string;
  slug: string;
  publishedAt: string;
  author: string;
}

/**
 * Generate metadata for a blog post
 */
export function generateBlogMetadata(post: BlogMetadataProps): Metadata {
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`,
      images: [{ url: post.ogImage }],
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.ogImage],
    },
  };
}
