import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { FeatureCards } from "@/components/features";
import { ProductShowcaseSection, BentoSection } from "@/components/sections";

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

      {/* Hero */}
      <section className="bg-primary-1000 pt-32 pb-20">
        <div className="max-w-s2xl mx-auto section-container text-center">
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            Powerful AI Features
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-400">
            Everything you need to create stunning images, videos, and 3D assets
          </p>
        </div>
      </section>

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
