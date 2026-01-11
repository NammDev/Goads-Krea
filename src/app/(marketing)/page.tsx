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
  InvestorShowcaseSection,
  EnterpriseAdvantageSection,
  EnterpriseShowcaseSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
  CtaBannerSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      {/* Hero Section & Other Sections with 3D transform */}
      <div
        className="relative z-10"
        style={{ transformStyle: "preserve-3d" }}
      >
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

      {/* App Layout Showcase - Full screen section */}
      <AppShowcaseSection />

      {/* Big Picture and Investor Sections */}
      <div className="max-w-s2xl relative z-10 mx-auto">
        <BigPictureSection />
        <InvestorShowcaseSection />
      </div>

      {/* App Layout Showcase - Full screen section */}
      <AppShowcaseSection />

      {/* Enterprise Section */}
      <div className="max-w-s2xl relative z-10 mx-auto">
        <EnterpriseAdvantageSection />
        <EnterpriseShowcaseSection />
        <EnterpriseContactSection />
        <EnterpriseFaqSection />
      </div>

      {/* CTA Banner - Full width dark section */}
      <CtaBannerSection />
    </>
  );
}
