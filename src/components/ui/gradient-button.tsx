import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";

type BaseProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "a";
    href: string;
  };

export type GradientButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * GradientButton - Reusable CTA button with gradient animation
 * Used in: LogoPartnersSection, InvestorShowcaseSection, CtaBannerSection
 *
 * Variants:
 * - primary: Dark bg (black), white text, gradient-primary animation
 * - secondary: Light bg (gray), dark text, gradient-secondary animation
 * - tertiary: White bg, dark text, rounded-full (for dark backgrounds)
 */
const GradientButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  GradientButtonProps
>(({ variant = "primary", className, children, ...props }, ref) => {
  const baseStyles = cn(
    "button-gradient-transition relative flex items-center justify-center overflow-hidden",
    "px-5 py-3 text-[13px] font-medium leading-[100%]",
    "transition-all duration-200 ease-out hover:scale-[1.025]",
    // Primary variant (dark) - rounded-md
    variant === "primary" && [
      "rounded-md bg-primary-1000 text-primary-0",
      "dark:bg-white dark:text-black",
    ],
    // Secondary variant (light) - rounded-md
    variant === "secondary" && [
      "rounded-md bg-primary-150 text-primary-1000",
      "dark:bg-primary-800 dark:text-white",
    ],
    // Tertiary variant (white on dark) - rounded-full
    variant === "tertiary" && [
      "rounded-full bg-primary-0 text-primary-1000",
      "dark:bg-primary-900 dark:text-white",
    ],
    className
  );

  const gradientSpan = (
    <span
      className={cn(
        "absolute top-0 left-0 z-[-1] block h-full w-[300%] dark:hidden",
        variant === "primary" && "rounded-md button-gradient-primary",
        variant === "secondary" && "rounded-md button-gradient-secondary",
        variant === "tertiary" && "rounded-full button-gradient-tertiary"
      )}
      style={{
        animation: "1.25s ease-in-out 0s infinite normal none running translate-x-66",
      }}
    />
  );

  // Render as anchor if `as="a"`
  if (props.as === "a") {
    const { as, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={baseStyles}
        style={{ willChange: "transform" }}
        {...anchorProps}
      >
        {gradientSpan}
        {children}
      </a>
    );
  }

  // Default: render as button
  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseStyles}
      style={{ willChange: "transform" }}
      {...buttonProps}
    >
      {gradientSpan}
      {children}
    </button>
  );
});

GradientButton.displayName = "GradientButton";

export { GradientButton };
