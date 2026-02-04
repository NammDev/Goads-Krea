import { useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";

interface TextRevealProps {
  text: string;
  /** Delay before animation starts (in frames) */
  delay?: number;
  /** Font size in pixels */
  fontSize?: number;
  /** Font weight */
  fontWeight?: number;
  /** Text color */
  color?: string;
  /** Optional gradient colors for text */
  gradientColors?: string[];
  /** Stagger delay between characters (in frames) */
  charStagger?: number;
}

/**
 * Text Reveal Component
 * Animates text character by character with optional gradient
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  fontSize = 72,
  fontWeight = 600,
  color = "#000000",
  gradientColors,
  charStagger = 2,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const characters = text.split("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {characters.map((char, index) => {
        const charDelay = delay + index * charStagger;

        // Spring animation for each character
        const springProgress = spring({
          frame: frame - charDelay,
          fps,
          config: {
            damping: 15,
            stiffness: 120,
          },
        });

        // Y position (slide up)
        const y = interpolate(springProgress, [0, 1], [40, 0]);

        // Opacity
        const opacity = interpolate(springProgress, [0, 0.5, 1], [0, 0.8, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        // Rotation (slight wobble)
        const rotation = interpolate(springProgress, [0, 0.5, 1], [-5, 2, 0]);

        // Determine text style
        const textStyle: React.CSSProperties = {
          fontSize,
          fontWeight,
          fontFamily: "Inter, system-ui, sans-serif",
          display: "inline-block",
          transform: `translateY(${y}px) rotate(${rotation}deg)`,
          opacity,
          whiteSpace: "pre",
        };

        // Apply gradient if specified
        if (gradientColors && gradientColors.length >= 2) {
          textStyle.background = `linear-gradient(135deg, ${gradientColors.join(", ")})`;
          textStyle.backgroundClip = "text";
          textStyle.WebkitBackgroundClip = "text";
          textStyle.WebkitTextFillColor = "transparent";
        } else {
          textStyle.color = color;
        }

        return (
          <span key={`${char}-${index}`} style={textStyle}>
            {char}
          </span>
        );
      })}
    </div>
  );
};
