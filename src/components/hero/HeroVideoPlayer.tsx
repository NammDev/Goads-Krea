"use client";

import { useState, useRef } from "react";

interface HeroVideoPlayerProps {
  /** Optional class name for container */
  className?: string;
}

/**
 * Hero Video Player Component
 * Uses pre-rendered video for production (better performance)
 */
export function HeroVideoPlayer({ className }: HeroVideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className={`border border-white/15 rounded-xl ${className || ""}`}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 1200,
        aspectRatio: "16/9",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        opacity: isLoaded ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay for text readability if needed */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
