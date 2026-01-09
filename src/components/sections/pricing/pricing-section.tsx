"use client";

import { FreePricingCard } from "./free-pricing-card";
import { IndividualPricingCard } from "./individual-pricing-card";
import { BusinessPricingCard } from "./business-pricing-card";
import { EnterprisePricingCard } from "./enterprise-pricing-card";

/** Heading lines for the pricing section */
const HEADING_LINES = [
  "Trusted by over 30,000,000 users",
  "From 191 countries.",
  "We've got a plan for everybody...",
] as const;

/**
 * Pricing section heading
 * Simple rendering without per-character animation overhead
 */
function PricingHeading() {
  return (
    <h2
      className="flex flex-col gap-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
      aria-label={HEADING_LINES.join(" ")}
    >
      {HEADING_LINES.map((line) => (
        <span key={line} className="block">
          {line}
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
