"use client";

import { useState, useMemo } from "react";
import { PricingCardBase } from "./pricing-card-base";
import { GradientButton } from "@/components/ui/gradient-button";
import { PlanSlider } from "./plan-slider";
import { FeatureList } from "@/components/ui/feature-list";

/** Plan tier configuration */
interface PlanTier {
  name: string;
  price: number;
  compute: string;
}

/** Business plans with pricing and compute units */
const BUSINESS_PLANS: readonly PlanTier[] = [
  { name: "20k", price: 50, compute: "20K" },
  { name: "40k", price: 95, compute: "40K" },
  { name: "80k", price: 180, compute: "80K" },
  { name: "160k", price: 340, compute: "160K" },
  { name: "240k", price: 480, compute: "240K" },
  { name: "400k", price: 760, compute: "400K" },
  { name: "500k", price: 925, compute: "500K" },
  { name: "750k", price: 1350, compute: "750K" },
  { name: "1M", price: 1750, compute: "1M" },
  { name: "1.5M", price: 2500, compute: "1.5M" },
] as const;

/** Visible label indices (first, 400k, last) matching original design */
const VISIBLE_LABELS = [0, 5, 9] as const;

const BUSINESS_FEATURES = [
  "Up to 100 workspace members",
  "16 concurrent jobs per member",
  "Credit rollovers",
  "Usage limits per member",
  "Priority email support",
  "Volume discounts at scale",
] as const;

/**
 * Business plan pricing card with compute slider
 * Features: compute unit slider (20K-1.5M), team features
 */
export function BusinessPricingCard() {
  const [selectedPlan, setSelectedPlan] = useState(0);
  const plan = BUSINESS_PLANS[selectedPlan];

  // Memoize labels array to prevent recreation on render
  const planLabels = useMemo(
    () => BUSINESS_PLANS.map((p) => p.name),
    []
  );

  return (
    <PricingCardBase>
      {/* Title */}
      <h3 className="text-primary-900 text-2xl font-medium">Business</h3>

      {/* Description */}
      <p className="text-primary-500 mt-2 text-sm">
        For growing teams and agencies
      </p>

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

      {/* Compute slider */}
      <PlanSlider
        labels={planLabels}
        visibleLabels={VISIBLE_LABELS}
        value={selectedPlan}
        onChange={setSelectedPlan}
        ariaLabel="Select business compute units"
      />

      {/* Features */}
      <FeatureList features={BUSINESS_FEATURES} />

      {/* CTA */}
      <div className="mt-auto">
        <GradientButton as="link" href="/pricing">Choose Business</GradientButton>
      </div>
    </PricingCardBase>
  );
}
