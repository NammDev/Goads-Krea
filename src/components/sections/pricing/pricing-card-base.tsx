import { cn } from "@/lib/utils";

/** Props for PricingCardBase component */
export interface PricingCardBaseProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual variant - light (white bg) or dark (black bg) */
  variant?: "light" | "dark";
  /** Additional CSS classes */
  className?: string;
}

/**
 * Base wrapper for all pricing cards with shared styles
 * Provides consistent border, padding, hover effect
 */
export function PricingCardBase({
  children,
  variant = "light",
  className,
}: PricingCardBaseProps) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[580px] flex-col overflow-hidden rounded-2xl border p-8",
        "transition-[transform] duration-200 ease-out will-change-transform",
        "hover:scale-[1.015]",
        variant === "dark"
          ? "border-primary-800 bg-black"
          : "border-primary-200 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}
