"use client";

import { AnimatedText } from "@/components/ui/animated-text";
import { FreePricingCard } from "./free-pricing-card";
import { IndividualPricingCard } from "./individual-pricing-card";
import { BusinessPricingCard } from "./business-pricing-card";
import { EnterprisePricingCard } from "./enterprise-pricing-card";

/** Heading lines for the pricing section with cumulative letter counts for stagger */
const HEADING_LINES = [
  { text: "Simple, Transparent Pricing", baseDelay: 0 },
  { text: "One-time purchase,", baseDelay: 540 },
  { text: "ongoing support.", baseDelay: 920 },
] as const;

/**
 * Pricing section heading with letter-by-letter reveal animation
 * Each line staggers from the previous line's end
 */
function PricingHeading() {
  return (
    <h2
      className="flex flex-col gap-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      aria-label={HEADING_LINES.map((l) => l.text).join(" ")}
    >
      {HEADING_LINES.map((line) => (
        <span key={line.text} className="block">
          <AnimatedText text={line.text} baseDelay={line.baseDelay} />
        </span>
      ))}
    </h2>
  );
}

/**
 * Pricing Section - Complete pricing page layout
 * 4-column responsive grid with Free, Individual, Business, Enterprise cards
 */
export function PricingSection() {
  return (
    <section className="section-container w-full pb-20 pt-40 md:pb-32">
      {/* Heading */}
      <PricingHeading />

      {/* Pricing Cards Grid - 4 columns on xl, 2 on md, 1 on mobile */}
      <div className="mt-12 grid grid-cols-1 gap-5 md:mt-19 md:grid-cols-2 xl:grid-cols-4">
        <FreePricingCard />
        <IndividualPricingCard />
        <BusinessPricingCard />
        <EnterprisePricingCard />
      </div>
    </section>
  );
}
