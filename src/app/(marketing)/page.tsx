import { HeroSection } from "@/components/hero";
import { FeatureCards } from "@/components/features";
import {
  ModelShowcaseSection,
  BentoSection,
  LogoPartnersSection,
  UseCasesSection,
  PricingSection,
  AppShowcaseSection,
  BigPictureSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
  CtaBannerSection,
  GuaranteeSection,
  TestimonialsBentoSection,
  MetaAssetsSection,
  CompareSection,
  InvestorShowcaseSection,
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

            {/* Model Showcase Slider Section */}
            <ModelShowcaseSection />

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

      {/* App Layout Showcase - GREY BREAK #1: How It Works */}
      <AppShowcaseSection />

      {/* WHITE BLOCK 2: Social Proof */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl relative z-10 mx-auto">
          <BigPictureSection />
          <InvestorShowcaseSection />
          <TestimonialsBentoSection />
        </div>
      </div>

      {/* WHITE BLOCK 3: Trust Building */}
      <div className="bg-primary-0">
        <div className="max-w-s2xl relative z-10 mx-auto">
          {/* <GuaranteeSection /> */}
          <MetaAssetsSection />
          <CompareSection />
          <EnterpriseContactSection />
          <EnterpriseFaqSection />
        </div>
      </div>

      {/* CTA Banner - Full width dark section */}
      <CtaBannerSection />
    </>
  );
}
