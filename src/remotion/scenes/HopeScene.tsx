"use client";

import { useCurrentFrame, interpolate } from "remotion";

/**
 * Scene 3: Hope (5-8s / Frame 0-90 within sequence)
 * Light breaks through darkness - reframe the problem
 * SEO Fix: Enhanced visuals, larger text, added icons
 */
export const HopeScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Light break effect (0-30 frames)
  const lightOpacity = interpolate(frame, [0, 30], [0, 0.4], {
    extrapolateRight: "clamp",
  });

  const lightScale = interpolate(frame, [0, 30], [0.5, 1.8], {
    extrapolateRight: "clamp",
  });

  // First line: "You don't lack skills." (20-50 frames)
  const line1Opacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line1X = interpolate(frame, [20, 40], [-50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Second line: "You lack stable infrastructure." (40-70 frames)
  const line2Opacity = interpolate(frame, [40, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line2X = interpolate(frame, [40, 60], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Third line: "That's what GoAds delivers." (55-75 frames)
  const line3Opacity = interpolate(frame, [55, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const line3Y = interpolate(frame, [55, 70], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scene fade out (80-90 frames)
  const sceneOpacity = interpolate(frame, [80, 90], [1, 0], {
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
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light break effect - Enhanced */}
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,107,107,0.3) 0%, rgba(254,202,87,0.15) 40%, transparent 70%)",
          opacity: lightOpacity,
          transform: `scale(${lightScale})`,
          pointerEvents: "none",
        }}
      />

      {/* Secondary light rays */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%)",
          opacity: lightOpacity * 0.8,
          transform: `scale(${lightScale * 0.8})`,
          pointerEvents: "none",
        }}
      />

      {/* Text content - LARGER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          zIndex: 1,
        }}
      >
        <div
          style={{
            opacity: line1Opacity,
            transform: `translateX(${line1X}px)`,
            fontSize: 72,
            fontWeight: 500,
            color: "#888888",
          }}
        >
          You don't lack skills.
        </div>
        <div
          style={{
            opacity: line2Opacity,
            transform: `translateX(${line2X}px)`,
            fontSize: 68,
            fontWeight: 600,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          You lack{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #feca57)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            stable infrastructure
          </span>
          {" "}to scale.
        </div>

        {/* Third line: Outcome promise */}
        <div
          style={{
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            fontSize: 48,
            fontWeight: 500,
            color: "#888888",
            marginTop: 16,
          }}
        >
          That's what{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #feca57)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
          >
            GoAds delivers
          </span>
          .
        </div>
      </div>

    </div>
  );
};
