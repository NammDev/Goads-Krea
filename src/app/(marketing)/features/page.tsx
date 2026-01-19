import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { FeatureCards } from "@/components/features";
import { ProductShowcaseSection, BentoSection } from "@/components/sections";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = generatePageMetadata({
  title: "Features",
  description:
    "Explore Krea's powerful AI features: image generation, video creation, 3D modeling, and real-time editing tools.",
});

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Features", url: `${siteConfig.url}/features` },
        ]}
      />

      <PageHero
        title="Powerful AI Features"
        subtitle="Everything you need to create stunning images, videos, and 3D assets"
        variant="dark"
      />

      {/* Feature Cards */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl mx-auto">
          <section className="bg-primary-0 mx-auto overflow-hidden pt-24">
            <FeatureCards />
          </section>

          {/* Product Showcase */}
          <ProductShowcaseSection />

          {/* Bento Grid */}
          <BentoSection />
        </div>
      </div>
    </>
  );
}
