import Image from "next/image";
import { PricingCardBase } from "./pricing-card-base";
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureList } from "@/components/ui/feature-list";

const ADVANCED_FEATURES = [
  "BM1 Verified (Running Campaign & Create Pixel)",
  "Premium Aged Reinstated Profiles (2x)",
  "Aged Reinstated Pages (2x)",
  "7-Day Warranty",
] as const;

/** Advanced plan icon URL */
const ADVANCED_ICON_URL = "https://s.krea.ai/pricing_basic.png";

/**
 * Advanced Setup pricing card - Recommended
 */
export function IndividualPricingCard() {
  return (
    <PricingCardBase>
      {/* Header with icon */}
      <div className="flex items-center gap-2">
        <Image
          alt="Advanced plan icon"
          className="h-6 w-6"
          src={ADVANCED_ICON_URL}
          width={24}
          height={24}
        />
        <h3 className="text-primary-900 text-2xl font-medium">
          Advanced Setup
        </h3>
      </div>

      {/* Description */}
      <p className="text-primary-500 mt-2 text-sm">Ready to scale</p>

      {/* Price display */}
      <div className="mb-5 mt-4">
        <div className="text-primary-900 text-4xl font-semibold">
          $180
          <span className="ml-[0.125em] text-[0.4em] font-medium opacity-60">one-time</span>
        </div>
        <div className="text-primary-600 mt-1 text-base font-medium">
          $230 value
        </div>
      </div>

      {/* Features */}
      <FeatureList features={ADVANCED_FEATURES} />

      {/* CTA */}
      <div className="mt-auto">
        <GradientButton as="link" href="/products/advanced-setup">View Pack</GradientButton>
      </div>
    </PricingCardBase>
  );
}
