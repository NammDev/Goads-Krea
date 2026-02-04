"use client";

import { Player, type PlayerRef } from "@remotion/player";
import { HeroVideo } from "@/remotion/compositions/HeroVideo";
import { useCallback, useState, useRef, useEffect } from "react";

interface HeroVideoPlayerProps {
  /** Optional class name for container */
  className?: string;
}

/**
 * Hero Video Player Component
 * Embeds the Remotion HeroVideo composition with autoplay and loop
 */
export function HeroVideoPlayer({ className }: HeroVideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    const handlePlay = () => setIsLoaded(true);
    player.addEventListener("play", handlePlay);

    // Also mark as loaded after a short delay as fallback
    const timeout = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      player.removeEventListener("play", handlePlay);
      clearTimeout(timeout);
    };
  }, []);

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
      <Player
        ref={playerRef}
        component={HeroVideo}
        durationInFrames={720}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        autoPlay
        loop
        style={{
          width: "100%",
          height: "100%",
        }}
        // Controls can be enabled for debugging
        // controls
        // Show poster/loading state
        renderLoading={() => (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #fff5f0 0%, #fff 100%)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                border: "3px solid #f0f0f0",
                borderTopColor: "#ff6b6b",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
          </div>
        )}
      />

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
