"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

/** Props for PricingButton component */
export interface PricingButtonProps {
  /** Target URL for the button */
  href: string;
  /** Button label */
  children: React.ReactNode;
  /** Visual variant - primary (black) or white */
  variant?: "primary" | "white";
}

/**
 * CTA button for pricing cards with gradient animation
 * Matches Krea.ai pricing button design exactly
 */
export function PricingButton({
  href,
  children,
  variant = "primary",
}: PricingButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-lg",
        "text-sm font-semibold leading-[100%]",
        "transition-all duration-200 ease-out hover:scale-[1.025]",
        variant === "primary"
          ? "bg-primary-1000 text-primary-0"
          : "bg-white text-black"
      )}
    >
      {/* Gradient animation background */}
      <span
        className={cn(
          "absolute left-0 top-0 z-[-1] block h-full w-[300%] rounded-lg",
          "animate-[translate-x-66_1.25s_ease-in-out_infinite]",
          variant === "primary" && "button-gradient-primary"
        )}
      />
      {children}
    </Link>
  );
}
