import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppPreview } from "./app-preview";
import { ArrowRight, Tag } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Spacer to push content down - matches original h-[69px] div */}
      <div className="relative z-10 h-[69px]">
        <div className="absolute inset-0 origin-bottom scale-[5] bg-black" />
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
            aria-label="Stop Losing Accounts. Start Scaling with GoAds."
            className={cn(
              "text-4xl sm:text-5xl md:text-7xl",
              "font-semibold leading-[1.05]",
              "text-balance text-white header-fancy"
            )}
          >
            Stop Losing Accounts.
            <br />
            Start Scaling.
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

          {/* App Preview - zoom in animation */}
          <div className="animate-zoom-in" style={{ animationDelay: "500ms" }}>
            <AppPreview />
          </div>
        </div>
      </section>
    </>
  );
}
