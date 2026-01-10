import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex shrink-0 items-center justify-center gap-2",
          "text-sm font-medium whitespace-nowrap",
          "rounded-md outline-none cursor-pointer",
          // Krea's exact transition
          "transition-[opacity,scale,transform,background-color] duration-400 ease-out",
          // Active scale with smooth 150ms transition
          "active-scale-95",
          // Thin border styling
          "thin-border shadow-xs",
          // Accessibility - focus states
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:ring-inset",
          // Accessibility - invalid states
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          // Accessibility - disabled states
          "disabled:pointer-events-none disabled:opacity-50",
          "aria-disabled:pointer-events-none aria-disabled:opacity-50",
          // SVG handling
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

          // Size variants
          size === "sm" && "h-9 px-4 py-2",
          size === "md" && "h-10 px-6 has-[>svg]:px-4",
          size === "lg" && "h-11 px-8",

          // Color variants - matching Krea's exact colors
          variant === "primary" &&
            "bg-blue-600 text-white hover:bg-blue-700",
          variant === "secondary" &&
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          variant === "light" &&
            "bg-white text-black hover:bg-gray-100",
          variant === "dark" &&
            "bg-primary-800 text-white hover:bg-primary-850",

          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
