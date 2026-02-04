"use client";

import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

/**
 * Scene 6: CTA (17-20s / Frame 0-90 within sequence)
 * EXTENDED: Final call to action with GoAds branding
 * SEO Fix: Extended from 1s to 3s for better conversion
 */
export const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo + tagline fade in (0-15 frames)
  const contentOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  const contentY = interpolate(frame, [0, 15], [-20, 0], {
    extrapolateRight: "clamp",
  });

  // Button entrance (10-25 frames)
  const buttonScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const buttonOpacity = interpolate(frame, [10, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gradient rotation for button border - continuous rotation
  const borderRotation = (frame * 3) % 360;

  // Subtle pulse on button
  const pulseScale = 1 + Math.sin(frame * 0.15) * 0.02;

  // Warranty badge fade in (15-25 frames) - earlier for impact
  const urgencyOpacity = interpolate(frame, [15, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Stats fade in (55-70 frames)
  const statsOpacity = interpolate(frame, [55, 70], [0, 1], {
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
        fontFamily: "Inter, system-ui, sans-serif",
        position: "relative",
      }}
    >
      {/* GoAds Logo */}
      <div
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentY}px)`,
          marginBottom: 24,
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 700,
            background:
              "linear-gradient(135deg, #FF6B6B 0%, #feca57 50%, #ff9ff3 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GoAds
        </span>
      </div>

      {/* Tagline */}
      <div
        style={{
          opacity: contentOpacity,
          fontSize: 52,
          fontWeight: 600,
          color: "#ffffff",
          marginBottom: 40,
        }}
      >
        Stop Losing Accounts.
      </div>

      {/* CTA Button - Clean design, no glow */}
      <div
        style={{
          opacity: buttonOpacity,
          transform: `scale(${Math.max(0, buttonScale) * pulseScale})`,
          position: "relative",
          marginBottom: 30,
        }}
      >
        {/* Button with gradient border */}
        <div
          style={{
            padding: 3,
            borderRadius: 50,
            background: `linear-gradient(${borderRotation}deg, #FF6B6B, #feca57, #ff9ff3, #FF6B6B)`,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "22px 56px",
              backgroundColor: "#000000",
              borderRadius: 50,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Get Your BM Now
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#FF6B6B",
              }}
            >
              →
            </span>
          </div>
        </div>
      </div>

      {/* Warranty Badge - Primary Trust Signal */}
      <div
        style={{
          opacity: urgencyOpacity,
          fontSize: 22,
          color: "#22c55e",
          fontWeight: 600,
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 24 }}>✓</span>
        7-Day Warranty • 1:1 Replacement • No Questions
      </div>

      {/* Quick stats row */}
      <div
        style={{
          opacity: statsOpacity,
          display: "flex",
          gap: 48,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>3,200+</div>
          <div style={{ fontSize: 14, color: "#888" }}>BMs Delivered</div>
        </div>
        <div style={{ width: 1, backgroundColor: "#333" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>500+</div>
          <div style={{ fontSize: 14, color: "#888" }}>Happy Clients</div>
        </div>
        <div style={{ width: 1, backgroundColor: "#333" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#22c55e" }}>7-Day</div>
          <div style={{ fontSize: 14, color: "#888" }}>Warranty</div>
        </div>
      </div>
    </div>
  );
};
