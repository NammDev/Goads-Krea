import { cn } from "@/lib/utils";

/** Checkmark icon - Lucide style */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/** Feature item with optional badge */
export interface FeatureItem {
  text: string;
  badge?: string;
}

export interface FeatureListProps {
  /** Array of feature strings or feature objects with badges */
  features: readonly (string | FeatureItem)[];
  /** Visual variant */
  variant?: "default" | "dark" | "enterprise";
  /** Bottom margin spacing */
  spacing?: "sm" | "md" | "none";
  /** Additional className for the container */
  className?: string;
}

/** Helper to normalize feature to object format */
function normalizeFeature(feature: string | FeatureItem): FeatureItem {
  return typeof feature === "string" ? { text: feature } : feature;
}

/**
 * FeatureList - Reusable feature list with check icons
 * Used in: FreePricingCard, IndividualPricingCard, BusinessPricingCard, EnterprisePricingCard, EnterpriseAdvantageSection
 *
 * Variants:
 * - default: Gray text and icons (for light cards)
 * - dark: White text with gray icons (for dark cards like Enterprise)
 * - enterprise: Dark text with green icons (for enterprise advantage cards)
 */
export function FeatureList({
  features,
  variant = "default",
  spacing = "md",
  className,
}: FeatureListProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 text-sm",
        spacing === "sm" && "mb-5",
        spacing === "md" && "mb-8",
        spacing === "none" && "mb-0",
        variant === "default" && "text-primary-500",
        variant === "dark" && "text-white",
        variant === "enterprise" && "text-primary-700",
        className
      )}
    >
      {features.map((feature) => {
        const { text, badge } = normalizeFeature(feature);
        return (
          <div key={text} className="flex items-center gap-3">
            <CheckIcon
              className={cn(
                "h-4 w-4 shrink-0",
                variant === "default" && "text-primary-500",
                variant === "dark" && "text-primary-400",
                variant === "enterprise" && "text-green-500"
              )}
            />
            <span>
              {text}
              {badge && (
                <span className="bg-primary-200 text-primary-700 ml-1.5 inline-block rounded px-1.5 py-0.5 align-middle text-xs">
                  {badge}
                </span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
}
