"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamic import for Remotion Player (client-side only)
const HeroVideoPlayer = dynamic(
  () => import("./HeroVideoPlayer").then((mod) => mod.HeroVideoPlayer),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full max-w-[1200px] aspect-video rounded-3xl bg-gradient-to-br from-orange-50 to-white animate-pulse"
        style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      />
    ),
  }
);

export function HeroSection() {
  return (
    <>
      {/* Negative margin pulls hero up into PageLayout's header padding */}
      {/* Black background extends behind transparent fixed header */}
      <div className="-mt-[var(--spacing-header)] relative z-10 h-[69px]">
        <div className="absolute inset-0 scale-[5] bg-black" />
      </div>

      <section
        className={cn(
          "section-container relative w-full",
          "flex flex-col items-center overflow-hidden",
          "pt-[10vh] sm:min-h-[calc(100dvh)] sm:justify-center",
          "px-8 lg:px-16"
        )}
      >
        {/* Background radial gradient overlay */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 origin-top will-change-transform transition-transform delay-[200ms] duration-[1.5s] ease-[cubic-bezier(.22,.61,.36,1)]"
          style={{
            background:
              "radial-gradient(100% 100% at 50% 0%, #000 30%, #000 40%, #222222 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1536px] mx-auto text-center">
          {/* Trust Badge */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-800/50 border border-primary-700 text-[11px] uppercase tracking-wider text-primary-300 font-medium">
              Trusted by +1,750 businesses globally
            </span>
          </div>

          {/* Hero Title */}
          <h1
            aria-label="Stop Losing Accounts Start Scaling with GoAds."
            className={cn(
              "text-4xl sm:text-5xl md:text-7xl",
              "font-semibold leading-[1.15]",
              "text-balance text-white header-fancy pb-1"
            )}
          >
            Stop Losing Accounts
            <br />
            Start Scaling
          </h1>

          {/* Hero Subtitle */}
          <h2
            className={cn(
              "text-primary-400 font-normal",
              "mt-4 max-w-[80%] mx-auto",
              "text-center text-xl"
            )}
          >
            Make sure your ads are compliant and running with our agency ad
            accounts for Meta, TikTok and Google.
          </h2>

          {/* CTA Buttons - animate in from left with stagger */}
          <div className="mt-8 flex items-center justify-center gap-3 mb-12">
            <Button
              variant="primary"
              size="md"
              className="w-36 animate-slide-in-left"
              style={{ animationDelay: "400ms" }}
            >
              <ArrowRight className="w-4 h-4" />
              Get Started
            </Button>
            <Button
              variant="secondary"
              size="md"
              className="w-42 animate-slide-in-left"
              style={{ animationDelay: "500ms" }}
            >
              <Tag className="w-4 h-4" />
              See Pricing
            </Button>
          </div>

          {/* Hero Video Player - Remotion animated video */}
          <div
            className="animate-zoom-in flex flex-col items-center"
            style={{ animationDelay: "500ms" }}
          >
            <HeroVideoPlayer />

            {/* Video Caption */}
            <p className="mt-6 text-sm text-primary-500">
              Professional Meta assets with 7-day warranty and 24/7 support.
            </p>
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-24 sm:h-16 lg:h-24" />
      </section>
    </>
  );
}
