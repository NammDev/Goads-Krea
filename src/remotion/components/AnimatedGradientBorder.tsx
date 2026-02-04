import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ReactNode } from "react";

interface AnimatedGradientBorderProps {
  children: ReactNode;
  /** Delay before animation starts (in frames) */
  delay?: number;
  /** Border radius in pixels */
  borderRadius?: number;
  /** Border width in pixels */
  borderWidth?: number;
  /** Gradient colors */
  colors?: string[];
}

/**
 * Animated Gradient Border Component
 * Creates a rotating conic gradient border effect (like Zocket)
 */
export const AnimatedGradientBorder: React.FC<AnimatedGradientBorderProps> = ({
  children,
  delay = 0,
  borderRadius = 24,
  borderWidth = 3,
  colors = ["#ff6b6b", "#feca57", "#ff9ff3", "#a29bfe", "#ff6b6b"],
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animate rotation continuously
  const rotation = interpolate(
    frame - delay,
    [0, fps * 4], // Full rotation every 4 seconds
    [0, 360],
    { extrapolateRight: "extend" }
  );

  // Scale in animation
  const scale = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 15,
      stiffness: 100,
    },
  });

  // Opacity fade in
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Generate gradient string from colors
  const gradientColors = colors.join(", ");

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        padding: borderWidth,
        borderRadius: borderRadius + borderWidth,
        background: `conic-gradient(from ${rotation}deg, ${gradientColors})`,
        boxShadow: `0 0 40px rgba(255, 107, 107, 0.3), 0 0 80px rgba(254, 202, 87, 0.2)`,
      }}
    >
      <div
        style={{
          borderRadius,
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
};
