"use client";

import { ModelMarquee } from "@/components/ui/model-marquee";
import { SectionHeader } from "@/components/ui/section-header";
import { CTAButtonGroup } from "@/components/ui/cta-button-group";

/** Logo Partner Showcase Section with marquee slider and CTA buttons */
export function LogoPartnersSection() {
  return (
    <section className="section-container pt-24 md:pt-40">
      <SectionHeader
        subtitle="Professional Meta infrastructure"
        title="The Industry's Best Agency Ad Account Provider"
      />

      {/* Marquee Container */}
      <div className="mt-12">
        <ModelMarquee />
      </div>

      <CTAButtonGroup
        primaryText="Get Started"
        primaryHref="/products"
        secondaryText="Contact Sales"
        secondaryHref="/contact"
        secondaryNewTab
      />
    </section>
  );
}
