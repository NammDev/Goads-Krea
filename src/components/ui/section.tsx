import { cn } from "@/lib/utils";

type SpacingVariant = "standard" | "compact" | "large" | "pricing" | "none";
type BackgroundVariant = "transparent" | "primary-100" | "white";

interface SectionProps {
  children?: React.ReactNode;
  className?: string;
  /** Padding preset: standard (pt-24 md:pt-40), compact (py-24), large (py-24 md:py-48), pricing (pt-40 pb-20 md:pb-32), none */
  spacing?: SpacingVariant;
  /** Background color variant */
  background?: BackgroundVariant;
  /** Whether to use section-container padding (px-5 md:px-16) */
  container?: boolean;
  /** ID for anchor links */
  id?: string;
}

const spacingClasses: Record<SpacingVariant, string> = {
  standard: "pt-24 md:pt-40",
  compact: "py-24",
  large: "py-24 md:py-48",
  pricing: "pt-40 pb-20 md:pb-32",
  none: "",
};

const backgroundClasses: Record<BackgroundVariant, string> = {
  transparent: "",
  "primary-100": "bg-primary-100",
  white: "bg-white",
};

/**
 * Section - Reusable section wrapper with consistent spacing and styling
 *
 * Usage:
 * ```tsx
 * <Section spacing="standard" container>
 *   Content here
 * </Section>
 * ```
 */
export function Section({
  children,
  className,
  spacing = "standard",
  background = "transparent",
  container = true,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        container && "section-container",
        className
      )}
    >
      {children}
    </section>
  );
}
