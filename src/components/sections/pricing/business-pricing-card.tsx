import { PricingCardBase } from "./pricing-card-base";
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureList } from "@/components/ui/feature-list";

const PREMIUM_FEATURES = [
  "BM5 Verified $250 DSL (Running Campaign)",
  "BM1 Verified (Pixel Bank)",
  "Premium Aged Reinstated Profiles (4x)",
  "+1 more products",
  "7-Day Warranty",
] as const;

/**
 * Premium Bulletproof Setup pricing card
 * Features: Best Value badge
 */
export function BusinessPricingCard() {
  return (
    <PricingCardBase>
      {/* Title */}
      <h3 className="text-primary-900 text-2xl font-medium">Premium Bulletproof</h3>

      {/* Description */}
      <p className="text-primary-500 mt-2 text-sm">
        Professional infrastructure
      </p>

      {/* Price display */}
      <div className="mb-5 mt-4">
        <div className="text-primary-900 text-4xl font-semibold">
          $550
          <span className="ml-[0.125em] text-[0.4em] font-medium opacity-60">one-time</span>
        </div>
        <div className="text-primary-600 mt-1 text-base font-medium">
          $700+ value
        </div>
      </div>

      {/* Features */}
      <FeatureList features={PREMIUM_FEATURES} />

      {/* CTA */}
      <div className="mt-auto">
        <GradientButton as="link" href="/products/premium-bulletproof">View Pack</GradientButton>
      </div>
    </PricingCardBase>
  );
}
