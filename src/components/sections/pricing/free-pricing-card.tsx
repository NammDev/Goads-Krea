import { PricingCardBase } from "./pricing-card-base";
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureList } from "@/components/ui/feature-list";

const BASIC_FEATURES = [
  "Business Manager (Unverified)",
  "Asia Profile (Admin Account)",
  "Optimized Advertising Page",
  "7-Day Warranty",
];

/** Basic Pack pricing card */
export function FreePricingCard() {
  return (
    <PricingCardBase>
      {/* Title */}
      <h3 className="text-primary-900 text-2xl font-medium">Basic Pack</h3>

      {/* Tagline */}
      <p className="text-primary-500 mt-2 text-sm">Start advertising today</p>

      {/* Price */}
      <div className="mb-5 mt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-primary-900 text-4xl font-semibold">$90</span>
          <span className="text-primary-500 text-sm font-medium">one-time</span>
        </div>
      </div>

      {/* Features */}
      <FeatureList features={BASIC_FEATURES} spacing="sm" />

      {/* CTA */}
      <div className="mt-auto">
        <GradientButton as="link" href="/products/basic-pack">View Pack</GradientButton>
      </div>
    </PricingCardBase>
  );
}
