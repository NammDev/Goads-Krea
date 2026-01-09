import { PricingCardBase } from "./pricing-card-base";
import { PricingButton } from "./pricing-button";
import { FeatureList } from "@/components/ui/feature-list";

const FREE_FEATURES = [
  "Pay-as-you-go compute",
  "Free daily generations",
  "Basic models access",
  "4 concurrent jobs",
];

/** Free tier pricing card */
export function FreePricingCard() {
  return (
    <PricingCardBase>
      {/* Title */}
      <h3 className="text-primary-900 text-2xl font-medium">Free</h3>

      {/* Price */}
      <div className="mb-5 mt-4">
        <div className="flex items-baseline gap-1">
          <span className="text-primary-900 text-4xl font-semibold">$0</span>
          <span className="text-primary-500 text-sm font-medium">/month</span>
        </div>
      </div>

      {/* Features */}
      <FeatureList features={FREE_FEATURES} spacing="sm" />

      {/* CTA */}
      <div className="mt-auto">
        <PricingButton href="/login">Get started free</PricingButton>
      </div>
    </PricingCardBase>
  );
}
