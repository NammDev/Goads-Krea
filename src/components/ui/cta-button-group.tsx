import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";

export interface CTAButtonGroupProps {
  /** Primary button text */
  primaryText: string;
  /** Primary button href */
  primaryHref: string;
  /** Secondary button text */
  secondaryText: string;
  /** Secondary button href */
  secondaryHref: string;
  /** Open secondary link in new tab */
  secondaryNewTab?: boolean;
  /** Spacing from top (mt-X class) */
  spacing?: "sm" | "md" | "lg";
  /** Additional className for the container */
  className?: string;
}

/**
 * CTAButtonGroup - Reusable CTA button pair
 * Used in: LogoPartnersSection, InvestorShowcaseSection
 *
 * Spacing variants:
 * - sm: mt-8
 * - md: mt-12
 * - lg: mt-16 md:mt-20
 */
export function CTAButtonGroup({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  secondaryNewTab = false,
  spacing = "md",
  className,
}: CTAButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-2.5",
        spacing === "sm" && "mt-8",
        spacing === "md" && "mt-12",
        spacing === "lg" && "mt-16 md:mt-20",
        className
      )}
    >
      <GradientButton as="a" href={primaryHref} variant="primary">
        {primaryText}
      </GradientButton>
      <GradientButton
        as="a"
        href={secondaryHref}
        variant="secondary"
        {...(secondaryNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {secondaryText}
      </GradientButton>
    </div>
  );
}
