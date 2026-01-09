import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  /** Smaller text above the title */
  subtitle?: string;
  /** Main heading text */
  title: string;
  /** Optional aria-label for accessibility (defaults to title) */
  ariaLabel?: string;
  /** Size variant for title */
  size?: "default" | "large";
  /** Additional className for the container */
  className?: string;
  /** Dark mode text color variant */
  darkSubtitle?: boolean;
}

/**
 * SectionHeader - Reusable section header with subtitle and title
 * Used in: LogoPartnersSection, BigPictureSection, UseCasesSection, InvestorShowcaseSection
 *
 * Size variants:
 * - default: text-2xl sm:text-3xl (for standard sections)
 * - large: text-2xl sm:text-3xl md:text-5xl (for hero-like sections)
 */
export function SectionHeader({
  subtitle,
  title,
  ariaLabel,
  size = "default",
  className,
  darkSubtitle = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("", className)}>
      {subtitle && (
        <div
          className={cn(
            "mb-2 text-base font-normal sm:mb-3 sm:text-xl",
            darkSubtitle
              ? "text-primary-400 dark:text-primary-500"
              : "text-primary-400"
          )}
        >
          {subtitle}
        </div>
      )}
      <h2
        className={cn(
          "font-semibold tracking-tight text-primary-1000",
          size === "default" && "text-2xl sm:text-3xl",
          size === "large" && "text-2xl sm:text-3xl md:text-5xl"
        )}
        aria-label={ariaLabel || title}
      >
        {title}
      </h2>
    </div>
  );
}
