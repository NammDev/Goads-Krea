"use client";

import { useCurrentFrame, interpolate } from "remotion";

/**
 * Scene 2: Empathy (3-5s / Frame 0-60 within sequence)
 * "Tired of starting over?" - acknowledge the struggle
 * SEO Fix: Added visual elements (floating icons, better text size)
 */
export const EmpathyScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Smooth entrance - scale up from center (0-20 frames)
  const entranceScale = interpolate(frame, [0, 20], [1.05, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const entranceBlur = interpolate(frame, [0, 15], [5, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Text fade in (10-30 frames) - starts earlier now
  const textOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [10, 25], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Secondary line: "Every ban = starting from zero" (30-45 frames)
  const secondLineOpacity = interpolate(frame, [30, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene fade out (50-60 frames)
  const sceneOpacity = interpolate(frame, [50, 60], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        opacity: sceneOpacity,
        transform: `scale(${entranceScale})`,
        filter: `blur(${entranceBlur}px)`,
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main question - LARGER TEXT */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontSize: 80,
            fontWeight: 500,
            color: "#888888",
          }}
        >
          Tired of{" "}
        </span>
        <span
          style={{
            fontSize: 80,
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          starting over?
        </span>

        {/* Secondary line - reinforces pain */}
        <div
          style={{
            opacity: secondLineOpacity,
            fontSize: 32,
            color: "#666",
            marginTop: 24,
          }}
        >
          Every ban = starting from zero
        </div>
      </div>

      {/* Subtle red vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 30%, rgba(239,68,68,0.1) 100%)",
          pointerEvents: "none",
          opacity: textOpacity * 0.5,
        }}
      />
    </div>
  );
};
