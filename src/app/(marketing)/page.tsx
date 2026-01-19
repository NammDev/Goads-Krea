import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero/hero-section";
import { FeatureCards } from "@/components/features/feature-cards";
// Direct imports for smaller sections (better tree-shaking)
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { LogoPartnersSection } from "@/components/sections/logo-partners-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessSection } from "@/components/sections/process";
import { BigPictureSection } from "@/components/sections/big-picture-section";
import { ClientShowcaseSection } from "@/components/sections/client-showcase-section";
import { EnterpriseContactSection } from "@/components/sections/enterprise-contact-section";
import { EnterpriseFaqSection } from "@/components/sections/enterprise-faq-section";
import { CtaBannerSection } from "@/components/sections/cta-banner-section";
import { CustomTrainingSection } from "@/components/sections/custom-training-section";
import { BlogsPreviewSection } from "@/components/sections/blogs-preview-section";
import { CommunitySection } from "@/components/sections/community-section";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/lib/seo";

// Dynamic imports for large sections (>300 LOC) - reduces initial bundle
const BentoSection = dynamic(
  () =>
    import("@/components/sections/bento-section").then(
      (mod) => mod.BentoSection
    ),
  { ssr: true }
);

const TestimonialsBentoSection = dynamic(
  () =>
    import("@/components/sections/testimonials-bento-section").then(
      (mod) => mod.TestimonialsBentoSection
    ),
  { ssr: true }
);

const MetaAssetsSection = dynamic(
  () =>
    import("@/components/sections/meta-assets-section").then(
      (mod) => mod.MetaAssetsSection
    ),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <OrganizationJsonLd />
      <SoftwareApplicationJsonLd />

      {/* Hero Section & Other Sections with 3D transform */}
      <div className="relative z-10" style={{ transformStyle: "preserve-3d" }}>
        {/* Hero Section */}
        <div style={{ transformStyle: "preserve-3d" }}>
          <HeroSection />
        </div>

        {/* Other Sections - White background container */}
        <div className="bg-primary-0">
          <div className="max-w-s2xl mx-auto">
            {/* Features Section */}
            <section className="bg-primary-0 mx-auto overflow-hidden pt-24">
              <FeatureCards />
            </section>

            {/* Product Showcase Slider Section */}
            <ProductShowcaseSection />

            {/* Bento Section */}
            <BentoSection />

            {/* Logo Partner Showcase Slider Section */}
            <LogoPartnersSection />

            {/* Use Case Section */}
            <UseCasesSection />

            {/* Pricing Section */}
            <PricingSection />
          </div>
        </div>
      </div>

      {/* Process Section - GREY BREAK #1: How It Works */}
      <ProcessSection />

      {/* WHITE BLOCK 2: Social Proof */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl relative z-10 mx-auto">
          <BigPictureSection />
          <ClientShowcaseSection />
          <EnterpriseContactSection />
          <TestimonialsBentoSection />
        </div>
      </div>

      {/* GREY BREAK #2: Meta Assets - Full width */}
      <MetaAssetsSection />

      <section className="flex flex-col justify-center py-16 md:py-24">
        <BlogsPreviewSection />
        <CustomTrainingSection />
        <CommunitySection />
      </section>

      {/* WHITE BLOCK 3: Additional Features */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl relative z-10 mx-auto">
          <EnterpriseFaqSection />
        </div>
      </div>

      {/* CTA Banner - Full width dark section */}
      <CtaBannerSection />
    </>
  );
}
