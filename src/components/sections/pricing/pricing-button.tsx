"use client";

import Link from "next/link";

/** Props for PricingButton component */
export interface PricingButtonProps {
  /** Target URL for the button */
  href: string;
  /** Button label */
  children: React.ReactNode;
}

/**
 * CTA button for pricing cards with gradient animation
 * Matches Krea.ai pricing button design exactly
 */
export function PricingButton({ href, children }: PricingButtonProps) {
  return (
    <Link
      href={href}
      style={{ willChange: "transform" }}
      className="button-gradient-transition relative flex items-center justify-center overflow-hidden rounded-md px-5 py-3 text-xsm font-medium leading-[100%] transition-all duration-200 ease-out hover:scale-[1.025] bg-primary-1000 text-primary-0 dark:bg-white dark:text-black"
    >
      {/* Gradient animation background - diagonal glass sweep effect */}
      <span
        data-button-gradient=""
        className="absolute left-0 top-0 z-[-1] block h-full w-[300%] rounded-md button-gradient-primary dark:hidden"
        style={{
          animation: "translate-x-66 1.25s ease-in-out infinite",
        }}
      />
      {children}
    </Link>
  );
}
