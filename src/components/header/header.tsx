"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { KreaLogo, HamburgerIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { FeaturesTrigger, FeaturesDropdownPanel } from "./features-dropdown";
import { ResourcesTrigger, ResourcesDropdownPanel } from "./resources-dropdown";
import { ServicesTrigger, ServicesDropdownPanel } from "./services-dropdown";

export function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  // Detect scroll position to invert header colors over white sections
  const handleScroll = useCallback(() => {
    const mainElement = document.getElementById("main-content");
    if (!mainElement) return;

    const scrollTop = mainElement.scrollTop;
    // Hero section is full viewport height, invert when scrolled past hero
    // Add 100px buffer to ensure header stays dark until fully past dark section
    const heroHeight = window.innerHeight + 280;
    setIsInverted(scrollTop > heroHeight);
  }, []);

  useEffect(() => {
    const mainElement = document.getElementById("main-content");
    if (!mainElement) return;

    mainElement.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close other dropdowns when one opens
  const handleProductsOpen = (open: boolean) => {
    setIsProductsOpen(open);
    if (open) {
      setIsResourcesOpen(false);
      setIsServicesOpen(false);
    }
  };

  const handleResourcesOpen = (open: boolean) => {
    setIsResourcesOpen(open);
    if (open) {
      setIsProductsOpen(false);
      setIsServicesOpen(false);
    }
  };

  const handleServicesOpen = (open: boolean) => {
    setIsServicesOpen(open);
    if (open) {
      setIsProductsOpen(false);
      setIsResourcesOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100]",
        "h-[68px] border-b-[0.5px]",
        "px-8 lg:px-16",
        "select-none",
        // Entrance animation - slides down from top
        "animate-slide-down",
        // Color transition for scroll inversion
        "transition-[background-color,color] duration-200 ease-out",
        // Default: dark mode (black bg, white text)
        // Inverted: light mode (white/transparent bg, black text)
        isInverted
          ? "border-black/10 bg-white/80 backdrop-blur-xl"
          : "border-white/15 bg-black"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1536px] items-center">
        <div className="grid w-full grid-cols-2 items-center lg:grid-cols-3">
          {/* Logo - Keep Krea Logo */}
          <div className="w-fit">
            <Link
              href="/"
              aria-label="Return to home"
              className={cn(
                "block transition-colors duration-300",
                isInverted ? "text-black" : "text-white"
              )}
            >
              <KreaLogo width={22} height={22} />
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="relative hidden lg:block">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <nav
                className={cn(
                  "flex items-center gap-0 2xl:gap-2",
                  // Match header transition timing exactly
                  "transition-[color] duration-200 ease-out",
                  isInverted ? "text-black" : "text-white"
                )}
              >
                {/* Products Dropdown */}
                <FeaturesTrigger
                  isOpen={isProductsOpen}
                  onOpenChange={handleProductsOpen}
                  inverted={isInverted}
                />
                {/* Services Dropdown */}
                <ServicesTrigger
                  isOpen={isServicesOpen}
                  onOpenChange={handleServicesOpen}
                  inverted={isInverted}
                />
                <NavLink href="/pricing" inverted={isInverted}>
                  Pricing
                </NavLink>
                {/* Resources Dropdown */}
                <ResourcesTrigger
                  isOpen={isResourcesOpen}
                  onOpenChange={handleResourcesOpen}
                  inverted={isInverted}
                />
                <NavLink
                  href="https://docs.goads.agency"
                  external
                  inverted={isInverted}
                >
                  Docs
                </NavLink>
              </nav>
            </div>
          </div>

          {/* Action Buttons - Right */}
          <div className="justify-self-end">
            <div className="flex items-center gap-2">
              <Button
                variant={isInverted ? "dark" : "light"}
                size="sm"
                className="hidden lg:inline-flex"
              >
                Get Started
              </Button>
              <Button variant={isInverted ? "light" : "dark"} size="sm">
                Chat
              </Button>
              {/* Mobile hamburger */}
              <div className="flex items-center justify-center lg:hidden">
                <button
                  className={cn(
                    "block transition-colors duration-300",
                    isInverted ? "text-black" : "text-white"
                  )}
                >
                  <HamburgerIcon
                    className={cn(
                      isInverted ? "[&_rect]:fill-black" : "[&_rect]:fill-white"
                    )}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown panels - positioned from header bottom */}
      <FeaturesDropdownPanel
        isOpen={isProductsOpen}
        onOpenChange={handleProductsOpen}
      />
      <ServicesDropdownPanel
        isOpen={isServicesOpen}
        onOpenChange={handleServicesOpen}
      />
      <ResourcesDropdownPanel
        isOpen={isResourcesOpen}
        onOpenChange={handleResourcesOpen}
      />
    </header>
  );
}
