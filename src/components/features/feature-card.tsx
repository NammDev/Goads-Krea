"use client";

import { cn } from "@/lib/utils";
import { getBadgeIcon, type BadgeIconType } from "@/components/icons";

interface FeatureCardProps {
  badge: string;
  badgeIcon?: BadgeIconType;
  imageSrc: string;
  videoSrc?: string;
  prompt?: string;
  promptLabel?: string;
  actionLabel?: string;
  isUpscaler?: boolean;
  isVideo?: boolean;
  className?: string;
}

export function FeatureCard({
  badge,
  badgeIcon = "krea",
  imageSrc,
  videoSrc,
  prompt,
  promptLabel = "PROMPT",
  actionLabel,
  isUpscaler = false,
  isVideo = false,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0",
        // Fixed size matching Krea's exact dimensions: 400px × 500px
        "w-[300px] h-[375px] md:w-[400px] md:h-[500px]",
        "rounded-2xl sm:rounded-[2rem] overflow-hidden",
        "group cursor-pointer",
        className
      )}
    >
      {/* Background Image or Video */}
      {videoSrc ? (
        <iframe
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <img
          src={imageSrc}
          alt={prompt || badge}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Badge - Top Left */}
      <div
        className={cn(
          "absolute top-4 left-4",
          "flex items-center gap-2",
          "px-3 py-2",
          "bg-black/80 backdrop-blur-sm rounded-lg",
          "text-white text-sm font-semibold"
        )}
      >
        {getBadgeIcon(badgeIcon)}
        {badge}
      </div>

      {/* Content - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {isUpscaler ? (
          // Upscaler card content
          <div>
            <p className="text-2xl font-medium text-white leading-tight">
              Upscale image
            </p>
            <p className="text-2xl font-medium text-white leading-tight">
              512px → 8K
            </p>
          </div>
        ) : prompt ? (
          // Regular card with prompt
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400 mb-2">
              {promptLabel}
            </p>
            <p className="text-xl font-medium text-white leading-snug mb-4">
              "{prompt}"
            </p>
            {actionLabel && (
              <button className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors">
                {actionLabel}
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
