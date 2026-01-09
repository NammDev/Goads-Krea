"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div";
}

/** Gradient text component for bento stats - creates dark-to-light vertical gradient effect */
export function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "gradient-header leading-none font-bold tracking-tight",
        className
      )}
    >
      {children}
    </Component>
  );
}
