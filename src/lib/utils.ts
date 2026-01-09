import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes
 * to prevent conflicts (e.g., `p-2 p-4` becomes `p-4`)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
