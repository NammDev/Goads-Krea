"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { KreaLogo, HamburgerIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { NavLink } from "./nav-link";
import { FeaturesTrigger, FeaturesDropdownPanel } from "./features-dropdown";

export function Header() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  // Detect scroll position to invert header colors over white sections
  const handleScroll = useCallback(() => {
    const mainElement = document.getElementById("main-content");
    if (!mainElement) return;

    const scrollTop = mainElement.scrollTop;
    // Hero section is approximately viewport height, invert when scrolled past it
    const heroHeight = window.innerHeight - 100;
    setIsInverted(scrollTop > heroHeight);
  }, []);

  useEffect(() => {
    const mainElement = document.getElementById("main-content");
    if (!mainElement) return;

    mainElement.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
          {/* Logo */}
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
                  "flex items-center gap-0 2xl:gap-2 transition-colors duration-300",
                  isInverted ? "text-black" : "text-white"
                )}
              >
                <NavLink href="/app" inverted={isInverted}>
                  App
                </NavLink>
                <FeaturesTrigger
                  isOpen={isFeaturesOpen}
                  onOpenChange={setIsFeaturesOpen}
                  inverted={isInverted}
                />
                <NavLink
                  href="/features/ai-image-generator"
                  inverted={isInverted}
                >
                  Image
                </NavLink>
                <NavLink
                  href="/features/ai-video-generator"
                  inverted={isInverted}
                >
                  Video
                </NavLink>
                <NavLink href="/features/ai-upscaler" inverted={isInverted}>
                  Upscaler
                </NavLink>
                <NavLink
                  href="https://docs.krea.ai"
                  external
                  inverted={isInverted}
                >
                  API
                </NavLink>
                <NavLink href="/pricing" inverted={isInverted}>
                  Pricing
                </NavLink>
                <NavLink href="/enterprise" inverted={isInverted}>
                  Enterprise
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
                Sign up for free
              </Button>
              <Button variant={isInverted ? "light" : "dark"} size="sm">
                Log in
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

      {/* Dropdown panel - positioned from header bottom */}
      <FeaturesDropdownPanel
        isOpen={isFeaturesOpen}
        onOpenChange={setIsFeaturesOpen}
      />
    </header>
  );
}
