import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppPreview } from "./app-preview";
import { UserPlus, LogIn } from "lucide-react";

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
          "bg-black",
          "flex flex-col items-center overflow-hidden",
          "pt-[10vh] sm:min-h-[calc(100dvh)] sm:justify-center",
          "pb-16 px-8 lg:px-16"
        )}
      >
        {/* Background radial gradient overlay - matches original */}
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
          {/* Hero Title - pixel perfect match with gradient text */}
          <h1
            aria-label="Krea.ai is a powerful AI suite for Creatives."
            className={cn(
              "text-4xl sm:text-5xl md:text-7xl",
              "font-semibold leading-[1.05]",
              "text-balance text-white header-fancy"
            )}
          >
            The most powerful AI
            <br />
            suite for Creatives.
          </h1>

          {/* Hero Subtitle - uses h2 semantics like original */}
          <h2
            className={cn(
              "text-primary-400 font-normal",
              "mt-4 max-w-[80%] mx-auto",
              "text-center text-xl"
            )}
          >
            Generate, enhance, and edit images, videos, or 3D meshes for free
            with AI.
          </h2>

          {/* CTA Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3 mb-12">
            <Button variant="primary" size="md" className="w-36">
              <UserPlus className="w-4 h-4" />
              Sign Up
            </Button>
            <Button variant="secondary" size="md" className="w-42">
              <LogIn className="w-4 h-4" />
              Launch App
            </Button>
          </div>

          {/* App Preview */}
          <AppPreview />
        </div>
      </section>
    </>
  );
}
