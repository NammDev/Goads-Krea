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
  badge: string;
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
 * FeatureCard - Pixel-perfect match of Krea's feature card design
 *
 * Structure:
 * - Card container with aspect-[4/5], responsive sizing
 * - Background image/video with hover zoom (desktop only)
 * - Gradient overlay for text readability
 * - Top: Krea1 logo (consistent across all cards)
 * - Bottom: Prompt text with hover animation, CTA button
 */
export function FeatureCard({
  badge,
  imageSrc,
  videoSrc,
  prompt,
  promptLabel = "Prompt",
  actionLabel = "Generate image",
  actionHref = "/image",
  isUpscaler = false,
  className,
}: FeatureCardProps) {
  // Determine default prompt for upscaler cards
  const displayPrompt = isUpscaler ? "Upscale image 512px → 8K" : prompt;

  return (
    <MediaCard
      imageSrc={imageSrc}
      videoSrc={videoSrc}
      alt={displayPrompt || badge}
      size="feature"
      hoverZoom={!videoSrc}
      className={className}
    >
      {/* Top: Krea1 Logo - consistent across all cards */}
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
