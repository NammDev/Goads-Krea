"use client";

import { useState, useMemo } from "react";
import { PricingCardBase } from "./pricing-card-base";
import { PricingButton } from "./pricing-button";
import { PlanSlider } from "./plan-slider";
import { FeatureList } from "@/components/ui/feature-list";

/** Plan tier configuration */
interface PlanTier {
  name: string;
  price: number;
  compute: string;
}

/** Plan tiers with pricing and compute units */
const INDIVIDUAL_PLANS: readonly PlanTier[] = [
  { name: "Basic", price: 9, compute: "5K" },
  { name: "Pro", price: 24, compute: "15K" },
  { name: "Max 1", price: 36, compute: "25K" },
  { name: "Max 2", price: 48, compute: "35K" },
  { name: "Max 3", price: 72, compute: "55K" },
  { name: "Max 4", price: 96, compute: "75K" },
] as const;

const INDIVIDUAL_FEATURES = [
  "Premium models access",
  "8 concurrent jobs",
  "Commercial license",
  "Credit rollovers",
] as const;

/** Individual Basic icon URL */
const BASIC_ICON_URL = "https://s.krea.ai/pricing_basic.png";

/**
 * Individual plan pricing card with tier slider
 * Features: icon header, plan selection slider, dynamic pricing
 */
export function IndividualPricingCard() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const plan = INDIVIDUAL_PLANS[selectedPlan];

  // Memoize labels array to prevent recreation on render
  const planLabels = useMemo(
    () => INDIVIDUAL_PLANS.map((p) => p.name),
    []
  );

  return (
    <PricingCardBase>
      {/* Header with icon */}
      <div className="flex items-center gap-2">
        <img
          alt="Basic plan icon"
          className="h-6 w-6"
          src={BASIC_ICON_URL}
        />
        <h3 className="text-primary-900 text-2xl font-medium">
          Individual Basic
        </h3>
      </div>

      {/* Description */}
      <p className="text-primary-500 mt-2 text-sm">For solo creators</p>

      {/* Price display */}
      <div className="mb-2 mt-4">
        <div className="text-primary-900 text-4xl font-semibold">
          ${plan.price}
          <span className="ml-[0.125em] text-[0.4em] font-medium opacity-60">/month</span>
        </div>
        <div className="text-primary-600 mt-1 text-base font-medium">
          {plan.compute}
          <span className="ml-[0.25em] text-[0.65em] font-medium opacity-80">compute units</span>
        </div>
      </div>

      {/* Plan slider */}
      <PlanSlider
        labels={planLabels}
        value={selectedPlan}
        onChange={setSelectedPlan}
        ariaLabel="Select individual plan tier"
      />

      {/* Features */}
      <FeatureList features={INDIVIDUAL_FEATURES} />

      {/* CTA */}
      <div className="mt-auto">
        <PricingButton href="/pricing">Choose Individual</PricingButton>
      </div>
    </PricingCardBase>
  );
}
