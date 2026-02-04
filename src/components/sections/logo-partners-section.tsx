"use client";

import { ModelMarquee, type ModelItem } from "@/components/ui/model-marquee";
import { SectionHeader } from "@/components/ui/section-header";
import { CTAButtonGroup } from "@/components/ui/cta-button-group";

/** Client logos for the marquee */
const clientLogos: ModelItem[] = [
  { name: "Polarwise", src: "/images/clients/polarwise-logo.png" },
  { name: "Amiri", src: "/images/clients/amiri-logo.png" },
  { name: "Naked Wardrobe", src: "/images/clients/naked-wardrobe-logo.png" },
  { name: "Larq", src: "/images/clients/larq-logo.png" },
  { name: "Clearly", src: "/images/clients/clearly-logo.avif" },
  { name: "Omnify", src: "/images/clients/omnify-logo.avif" },
  { name: "Alex", src: "/images/clients/alex-logo.avif" },
  { name: "Onyx", src: "/images/clients/onyx-logo.avif" },
  { name: "L", src: "/images/clients/l-logo.avif" },
];

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
        <ModelMarquee models={clientLogos} />
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
