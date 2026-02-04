import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  /** Delay before animation starts (in frames) */
  delay?: number;
  /** Starting X position (pixels from final position) */
  fromX?: number;
  /** Starting Y position (pixels from final position) */
  fromY?: number;
  /** Float amplitude (pixels) */
  floatAmplitude?: number;
  /** Float speed multiplier */
  floatSpeed?: number;
}

/**
 * Floating Card Component
 * Slides in and then gently floats with a sine wave pattern
 */
export const FloatingCard: React.FC<FloatingCardProps> = ({
  children,
  delay = 0,
  fromX = 100,
  fromY = 50,
  floatAmplitude = 8,
  floatSpeed = 0.5,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Spring animation for slide-in
  const springProgress = spring({
    frame: frame - delay,
    fps,
    config: {
      damping: 20,
      stiffness: 80,
    },
  });

  // Calculate slide-in position
  const slideX = interpolate(springProgress, [0, 1], [fromX, 0]);
  const slideY = interpolate(springProgress, [0, 1], [fromY, 0]);

  // Floating animation (sine wave) - only starts after slide-in
  const floatFrame = Math.max(0, frame - delay - 30);
  const floatY = Math.sin(floatFrame * floatSpeed * 0.1) * floatAmplitude;
  const floatX = Math.cos(floatFrame * floatSpeed * 0.08) * (floatAmplitude * 0.5);

  // Opacity
  const opacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale
  const scale = interpolate(springProgress, [0, 1], [0.9, 1]);

  return (
    <div
      style={{
        transform: `translate(${slideX + floatX}px, ${slideY + floatY}px) scale(${scale})`,
        opacity,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};
