import { siteConfig } from "./site-config";

/** Helper to safely render JSON-LD script */
function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Organization schema for homepage */
export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    sameAs: [siteConfig.socialLinks.twitter, siteConfig.socialLinks.linkedin],
  };

  return <JsonLdScript data={schema} />;
}

/** Software application schema */
export function SoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${siteConfig.name} AI`,
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return <JsonLdScript data={schema} />;
}

interface BlogPostJsonLdProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

/** Blog post schema */
export function BlogPostJsonLd({
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: BlogPostJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: url,
  };

  return <JsonLdScript data={schema} />;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Breadcrumb schema */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLdScript data={schema} />;
}

interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
}

/** WebPage schema for general pages */
export function WebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return <JsonLdScript data={schema} />;
}
