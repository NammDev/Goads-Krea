import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AppPreview } from "./app-preview";
import { UserPlus, LogIn } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className={cn(
        "relative min-h-screen w-full",
        "bg-black",
        "flex flex-col items-center justify-center",
        "pt-[132px] pb-16 px-8 lg:px-16"
      )}
    >
      {/* Background gradient overlay - black to dark grey at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#1a1a1a] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1536px] mx-auto text-center">
        {/* Hero Title */}
        <h1
          className={cn(
            "text-5xl md:text-6xl lg:text-7xl xl:text-[72px]",
            "font-semibold leading-[1.05] tracking-[-0.02em]",
            "text-white mb-4"
          )}
        >
          The most{" "}
          <span className="text-gradient">powerful</span> AI
          <br />
          suite for{" "}
          <span className="text-gradient">Creatives.</span>
        </h1>

        {/* Hero Subtitle */}
        <p
          className={cn(
            "text-lg md:text-xl",
            "font-normal leading-[1.4]",
            "text-gray-400",
            "max-w-[600px] mx-auto mb-8"
          )}
        >
          Generate, enhance, and edit images, videos, or 3D meshes for free with AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-3 mb-12">
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
  );
}
