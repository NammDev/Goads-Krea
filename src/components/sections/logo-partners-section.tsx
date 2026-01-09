"use client";

import { ModelMarquee } from "@/components/ui/model-marquee";
import { SectionHeader } from "@/components/ui/section-header";
import { CTAButtonGroup } from "@/components/ui/cta-button-group";

/** Logo Partner Showcase Section with marquee slider and CTA buttons */
export function LogoPartnersSection() {
  return (
    <section className="section-container pt-24 md:pt-40">
      <SectionHeader
        subtitle="A tool suite for pros and beginners alike"
        title="Krea powers millions of creatives, enterprises, and everyday people."
      />

      {/* Marquee Container */}
      <div className="mt-12">
        <ModelMarquee />
      </div>

      <CTAButtonGroup
        primaryText="Sign up for free"
        primaryHref="/login"
        secondaryText="Contact Sales"
        secondaryHref="/enterprise"
        secondaryNewTab
      />
    </section>
  );
}
