"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Krea1Logo } from "@/components/icons";
import {
  MediaCard,
  MediaCardHeader,
  MediaCardContent,
  MediaCardPrompt,
} from "@/components/ui/media-card";

interface FeatureCardProps {
  platform?: string;
  imageSrc: string;
  videoSrc?: string;
  prompt?: string;
  promptLabel?: string;
  actionLabel?: string;
  actionHref?: string;
  isUpscaler?: boolean;
  className?: string;
}

/**
 * FeatureCard - GoAds Agency Ad Account Cards
 * Following Krea's feature card design pattern:
 * - Logo (platform icon + name) at top
 * - Background image with hover zoom
 * - Gradient overlay for text readability
 * - Prompt label + text at bottom
 * - CTA button with glass animation
 */
export function FeatureCard({
  // platform prop kept for future custom SVG logos
  platform: _platform = "goads",
  imageSrc,
  videoSrc,
  prompt,
  promptLabel = "FEATURED",
  actionLabel = "Get Account",
  actionHref = "/products",
  isUpscaler = false,
  className,
}: FeatureCardProps) {
  // Determine display prompt
  const displayPrompt = isUpscaler ? "Upscale image 512px → 8K" : prompt;

  return (
    <MediaCard
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      alt={displayPrompt || "Feature card"}
      size="feature"
      hoverZoom={!videoSrc}
      className={className}
    >
      {/* Top: Krea Logo */}
      <MediaCardHeader>
        <Krea1Logo />
      </MediaCardHeader>

      {/* Bottom: Prompt and CTA - same structure for all cards */}
      <MediaCardContent>
        {displayPrompt && (
          <>
            {/* Prompt section - slides up on hover (desktop only) */}
            <MediaCardPrompt label={promptLabel} text={displayPrompt} />

            {/* CTA Button - slides up on hover (desktop only) */}
            <div style={{ willChange: "height" }}>
              <div className="hover-supported:translate-y-[calc(100%+16px)] hover-supported:group-hover:translate-y-0 pt-4 transition-transform duration-500 ease-out">
                <Link
                  href={actionHref}
                  className={cn(
                    "flex items-center justify-center relative",
                    "font-medium leading-[100%] overflow-hidden",
                    "transition-all hover:scale-[1.025] duration-200 ease-out",
                    "rounded-md px-5 py-3 text-xsm",
                    "bg-primary-150 dark:bg-primary-800",
                    "text-primary-1000 dark:text-white",
                    "w-fit active-scale-95"
                  )}
                  style={{ willChange: "transform" }}
                >
                  {/* Button gradient overlay - animated diagonal glass sweep */}
                  <span
                    data-button-gradient=""
                    className="absolute top-0 left-0 z-[-1] block h-full w-[300%] rounded-md button-gradient-secondary dark:hidden"
                    style={{ animation: "translate-x-66 1.25s ease-in-out infinite" }}
                  />
                  {actionLabel}
                </Link>
              </div>
            </div>
          </>
        )}
      </MediaCardContent>
    </MediaCard>
  );
}
