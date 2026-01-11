import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";

/**
 * GradientButton variants using CVA for type-safe variant management
 * Preserves exact Krea CTA button styling with gradient animation
 */
const gradientButtonVariants = cva(
  // Base styles - preserved exactly from original
  [
    "button-gradient-transition relative flex items-center justify-center overflow-hidden",
    "px-5 py-3 text-[13px] font-medium leading-[100%]",
    "transition-all duration-200 ease-out hover:scale-[1.025]",
  ],
  {
    variants: {
      variant: {
        // Primary variant (dark) - rounded-md
        primary: [
          "rounded-md bg-primary-1000 text-primary-0",
          "dark:bg-white dark:text-black",
        ],
        // Secondary variant (light) - rounded-md
        secondary: [
          "rounded-md bg-primary-150 text-primary-1000",
          "dark:bg-primary-800 dark:text-white",
        ],
        // Tertiary variant (white on dark) - rounded-full
        tertiary: [
          "rounded-full bg-primary-0 text-primary-1000",
          "dark:bg-primary-900 dark:text-white",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BaseProps = VariantProps<typeof gradientButtonVariants> & {
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

type ButtonAsLink = BaseProps & {
  as: "link";
  href: string;
};

export type GradientButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

/**
 * GradientButton - Reusable CTA button with gradient animation
 * Used in: LogoPartnersSection, InvestorShowcaseSection, CtaBannerSection, PricingCards
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
  const styles = cn(gradientButtonVariants({ variant }), className);

  // Gradient span for animation effect
  const gradientSpan = (
    <span
      data-button-gradient=""
      className={cn(
        "absolute top-0 left-0 z-[-1] block h-full w-[300%] dark:hidden",
        variant === "primary" && "rounded-md button-gradient-primary",
        variant === "secondary" && "rounded-md button-gradient-secondary",
        variant === "tertiary" && "rounded-full button-gradient-tertiary"
      )}
      style={{
        animation: "translate-x-66 1.25s ease-in-out infinite",
      }}
    />
  );

  // Render as Next.js Link if `as="link"`
  if (props.as === "link") {
    const { as, href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={styles}
        style={{ willChange: "transform" }}
        {...linkProps}
      >
        {gradientSpan}
        {children}
      </Link>
    );
  }

  // Render as anchor if `as="a"`
  if (props.as === "a") {
    const { as, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={styles}
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
      className={styles}
      style={{ willChange: "transform" }}
      {...buttonProps}
    >
      {gradientSpan}
      {children}
    </button>
  );
});

GradientButton.displayName = "GradientButton";

export { GradientButton, gradientButtonVariants };
