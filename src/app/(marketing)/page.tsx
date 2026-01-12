import { HeroSection } from "@/components/hero";
import { FeatureCards } from "@/components/features";
import {
  ProductShowcaseSection,
  BentoSection,
  LogoPartnersSection,
  UseCasesSection,
  PricingSection,
  ProcessSection,
  BigPictureSection,
  ClientShowcaseSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
  CtaBannerSection,
  GuaranteeSection,
  TestimonialsBentoSection,
  MetaAssetsSection,
  CompareSection,
} from "@/components/sections";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/lib/seo";

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

      {/* WHITE BLOCK 3: Trust Building */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl relative z-10 mx-auto">
          {/* <GuaranteeSection /> */}
          <MetaAssetsSection />
          {/* <CompareSection /> */}
          <EnterpriseFaqSection />
        </div>
      </div>

      {/* CTA Banner - Full width dark section */}
      <CtaBannerSection />
    </>
  );
}
