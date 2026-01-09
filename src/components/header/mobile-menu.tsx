"use client";

import { cn } from "@/lib/utils";

interface MobileMenuProps {
  /** Controls visibility of mobile menu overlay */
  isOpen?: boolean;
  /** Callback when menu should close (e.g., backdrop click, close button) */
  onClose?: () => void;
}

/**
 * Mobile Menu - Full screen overlay for mobile navigation
 *
 * @placeholder This is a structural placeholder matching Krea's layout.
 * Content and interactivity will be implemented when mobile navigation is built.
 *
 * Usage: Control via Header component state when hamburger menu is clicked.
 */
export function MobileMenu({ isOpen = false, onClose }: MobileMenuProps) {
  // Placeholder: Menu hidden by default until Header integration
  if (!isOpen) return null;

  return (
    <header
      className={cn(
        "mobile-menu no-scrollbar",
        "absolute top-0 left-0 z-30",
        "block h-[100dvh] w-full",
        "overflow-y-scroll backdrop-blur-xl",
        "lg:hidden",
        "mobile-menu-inverted"
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      {/* Mobile menu content placeholder - awaiting implementation */}
    </header>
  );
}
