"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaCardProps {
  children: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
  alt?: string;
  /** Card size preset - "feature" for feature cards, "promo" for promotional cards */
  size?: "feature" | "promo" | "custom";
  /** Enable hover zoom effect on image (desktop only) */
  hoverZoom?: boolean;
  /** Custom gradient overlay - defaults to bottom-to-top dark gradient */
  gradient?: string | null;
  className?: string;
  imageClassName?: string;
}

/** Default gradient overlay - dark at bottom for text readability */
const DEFAULT_GRADIENT =
  "linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 50%)";

/**
 * MediaCard - Reusable media card with background image/video
 *
 * Features:
 * - Background image or video iframe
 * - Optional hover zoom effect (desktop only)
 * - Gradient overlay for text readability
 * - Multiple size presets
 */
export function MediaCard({
  children,
  imageSrc,
  videoSrc,
  alt = "",
  size = "feature",
  hoverZoom = true,
  gradient = DEFAULT_GRADIENT,
  className,
  imageClassName,
}: MediaCardProps) {
  const sizeClasses = {
    feature:
      "h-[375px] max-h-[375px] md:h-[500px] md:max-h-[500px] md:w-auto aspect-[4/5]",
    promo:
      "h-[375px] max-h-[375px] md:h-[500px] md:max-h-[500px] md:w-auto aspect-[4/5]",
    custom: "",
  };

  return (
    <div
      role="figure"
      className={cn(
        // Base card container
        "bg-primary-200 relative flex shrink-0 overflow-hidden",
        "rounded-2xl sm:rounded-4xl",
        "bg-cover bg-center",
        "group",
        sizeClasses[size],
        className
      )}
    >
      {/* Background Media */}
      {videoSrc ? (
        <iframe
          src={videoSrc}
          className="absolute inset-0 z-0 h-full w-full object-cover select-none"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : imageSrc ? (
        <Image
          loading="lazy"
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "z-0 object-cover select-none",
            "transition-[transform,opacity] duration-500",
            hoverZoom && "hover-supported:group-hover:scale-110",
            imageClassName
          )}
          style={{ willChange: "transform" }}
        />
      ) : null}

      {/* Content Overlay with optional Gradient */}
      <div
        className="relative z-20 flex h-full w-full flex-col justify-between p-5 sm:p-6 md:p-7"
        style={{
          backgroundImage: gradient || undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface MediaCardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

/** Header section of MediaCard - positioned at top */
export function MediaCardHeader({ children, className }: MediaCardHeaderProps) {
  return <div className={cn(className)}>{children}</div>;
}

interface MediaCardContentProps {
  children: React.ReactNode;
  className?: string;
}

/** Content section of MediaCard - positioned at bottom */
export function MediaCardContent({
  children,
  className,
}: MediaCardContentProps) {
  return <div className={cn(className)}>{children}</div>;
}

interface MediaCardPromptProps {
  label?: string;
  text: string;
  /** Enable slide-up animation on hover (desktop only) */
  animated?: boolean;
  className?: string;
}

/** Prompt section with label and text - supports hover animation */
export function MediaCardPrompt({
  label = "Prompt",
  text,
  animated = true,
  className,
}: MediaCardPromptProps) {
  return (
    <div
      className={cn(
        animated &&
          "hover-supported:translate-y-[53px] hover-supported:group-hover:translate-y-0 transition-transform duration-500 ease-out",
        className
      )}
    >
      <div className="text-primary-0/60 pb-2 text-xs font-medium tracking-widest uppercase">
        {label}
      </div>
      <p className="tracking-snug text-base leading-tight font-medium text-white md:text-3xl">
        "{text}"
      </p>
    </div>
  );
}
