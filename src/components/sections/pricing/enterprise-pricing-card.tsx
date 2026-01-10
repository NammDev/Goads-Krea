import { PricingCardBase } from "./pricing-card-base";
import { PricingButton } from "./pricing-button";
import { FeatureList } from "@/components/ui/feature-list";

const ENTERPRISE_FEATURES = [
  "Priority support with SLA",
  "Advanced security & compliance",
  "Custom integrations",
  "No-train policy",
  "MSA legal support",
  "Onboarding & training",
];

/** Enterprise pricing card with dark theme */
export function EnterprisePricingCard() {
  return (
    <PricingCardBase variant="dark">
      {/* Title */}
      <h3 className="text-2xl font-medium text-white">Enterprise</h3>

      {/* Description */}
      <p className="text-primary-400 mt-2 text-sm">
        For large enterprises and organizations
      </p>

      {/* Price */}
      <div className="mb-5 mt-4">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-white">Custom</span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-5">
        <div className="text-primary-500 mb-4 text-sm font-medium">
          Everything in Business, plus:
        </div>
        <FeatureList
          features={ENTERPRISE_FEATURES}
          variant="dark"
          className="mb-0"
        />
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <PricingButton href="/enterprise">Contact sales</PricingButton>
      </div>
    </PricingCardBase>
  );
}
