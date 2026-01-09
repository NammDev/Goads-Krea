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
          "rounded-md outline-none",
          "transition-all duration-400 ease-out",
          "active-scale-95",
          "disabled:pointer-events-none disabled:opacity-50",
          "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",

          // Size variants
          size === "sm" && "h-9 px-4 py-2",
          size === "md" && "h-10 px-6",
          size === "lg" && "h-11 px-8",

          // Color variants
          variant === "primary" &&
            "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
          variant === "secondary" &&
            "bg-white text-black border-[0.5px] border-black/15 hover:bg-gray-50 shadow-sm",
          variant === "light" &&
            "bg-white text-black border-[0.5px] border-black/20 hover:bg-gray-100 shadow-sm",
          variant === "dark" &&
            "bg-primary-800 text-white hover:bg-primary-850 shadow-sm",

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
