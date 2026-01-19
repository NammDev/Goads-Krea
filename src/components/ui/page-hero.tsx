import { cn } from "@/lib/utils";

interface PageHeroProps {
  /** Page title */
  title: string;
  /** Subtitle/description */
  subtitle: string;
  /** Background variant */
  variant?: "dark" | "light";
  /** Bottom padding size */
  paddingBottom?: "sm" | "md" | "lg";
  /** Additional className */
  className?: string;
  /** Children (optional extra content below subtitle) */
  children?: React.ReactNode;
}

const VARIANT_STYLES = {
  dark: {
    background: "bg-primary-1000",
    title: "text-white",
    subtitle: "text-primary-400",
  },
  light: {
    background: "bg-primary-0",
    title: "text-primary-900",
    subtitle: "text-primary-500",
  },
} as const;

const PADDING_STYLES = {
  sm: "pb-12",
  md: "pb-20",
  lg: "pb-28",
} as const;

/**
 * Reusable page hero section for marketing pages
 * Eliminates duplicate hero patterns across pages
 *
 * @example
 * ```tsx
 * <PageHero
 *   title="About Us"
 *   subtitle="Learn more about our company"
 *   variant="light"
 *   paddingBottom="sm"
 * />
 * ```
 */
export function PageHero({
  title,
  subtitle,
  variant = "light",
  paddingBottom = "md",
  className,
  children,
}: PageHeroProps) {
  const styles = VARIANT_STYLES[variant];
  const padding = PADDING_STYLES[paddingBottom];

  return (
    <section className={cn(styles.background, "pt-32", padding, className)}>
      <div className="max-w-s2xl mx-auto section-container text-center">
        <h1
          className={cn(
            "text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl",
            styles.title
          )}
        >
          {title}
        </h1>
        <p className={cn("mx-auto mt-6 max-w-2xl text-xl", styles.subtitle)}>
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
