import { PricingCardBase } from "./pricing-card-base";
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureList } from "@/components/ui/feature-list";

const ELITE_FEATURES = [
  "BM5 Verified $250 DSL (Running Campaign)",
  "BM5 Verified $250 DSL (Pixel Bank)",
  "Premium Aged Reinstated Profiles (6x)",
  "+2 more products",
  "7-Day Warranty",
  "Priority Support",
];

/** Elite Bulletproof Setup pricing card with dark theme */
export function EnterprisePricingCard() {
  return (
    <PricingCardBase variant="dark">
      {/* Title */}
      <h3 className="text-2xl font-medium text-white">Elite Bulletproof</h3>

      {/* Description */}
      <p className="text-primary-400 mt-2 text-sm">
        Enterprise-grade setup
      </p>

      {/* Price */}
      <div className="mb-5 mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-white">$890</span>
          <span className="text-primary-400 text-sm font-medium">one-time</span>
        </div>
        <div className="text-primary-500 mt-1 text-base font-medium">
          $1,100+ value
        </div>
      </div>

      {/* Features */}
      <div className="mb-5">
        <FeatureList
          features={ELITE_FEATURES}
          variant="dark"
          className="mb-0"
        />
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <GradientButton as="link" href="/products/elite-bulletproof">View Pack</GradientButton>
      </div>
    </PricingCardBase>
  );
}
