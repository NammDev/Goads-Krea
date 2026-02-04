import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from "remotion";
import {
  PainScene,
  EmpathyScene,
  HopeScene,
  SolutionScene,
  TrustScene,
  CtaScene,
} from "../scenes";

/**
 * GoAds Hero Video Composition - SEO Optimized Version
 *
 * Timeline (24 seconds @ 30fps = 720 frames):
 * - Scene 1 (0-90): Pain - Notifications stack up
 * - Scene 2 (90-150): Empathy - "Tired of starting over?"
 * - Scene 3 (150-240): Hope - "You lack stable infrastructure"
 * - Scene 4 (240-420): Solution - Checkmarks + stats
 * - Scene 5 (420-570): Trust - Testimonials (5s, 3 testimonials)
 * - Scene 6 (570-720): CTA - "Get Started" (5s)
 */
export const HeroVideo: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#050505",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Dynamic Background Layer */}
      <DynamicBackground />
      {/* Scene 1: Pain (0-3s) */}
      <Sequence from={0} durationInFrames={90}>
        <PainScene />
      </Sequence>

      {/* Scene 2: Empathy (3-5s) */}
      <Sequence from={90} durationInFrames={60}>
        <EmpathyScene />
      </Sequence>

      {/* Scene 3: Hope (5-8s) */}
      <Sequence from={150} durationInFrames={90}>
        <HopeScene />
      </Sequence>

      {/* Scene 4: Solution (8-14s) */}
      <Sequence from={240} durationInFrames={180}>
        <SolutionScene />
      </Sequence>

      {/* Scene 5: Trust (14-19s) - 5 seconds, 3 testimonials */}
      <Sequence from={420} durationInFrames={150}>
        <TrustScene />
      </Sequence>

      {/* Scene 6: CTA (19-24s) - 5 seconds */}
      <Sequence from={570} durationInFrames={150}>
        <CtaScene />
      </Sequence>

      {/* Overlay: GoAds Watermark (visible from scene 2 onwards) */}
      <Sequence from={90} durationInFrames={630}>
        <GoAdsWatermark />
      </Sequence>

      {/* Overlay: Captions for accessibility */}
      <CaptionsOverlay />

      {/* Overlay: Progress indicator */}
      <ProgressIndicator />
    </AbsoluteFill>
  );
};

/**
 * GoAds Watermark - Brand visibility throughout video
 */
const GoAdsWatermark: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in during first 15 frames, stay visible
  const opacity = frame < 15 ? frame / 15 * 0.85 : 0.85;

  // Hide during CTA scene (after frame 420 in local time = 510 global)
  const hideInCta = frame > 420 ? 0 : 1;

  // Subtle pulse
  const scale = 1 + Math.sin(frame * 0.05) * 0.02;

  return (
    <div
      style={{
        position: "absolute",
        top: 35,
        right: 45,
        opacity: opacity * hideInCta,
        pointerEvents: "none",
        transform: `scale(${scale})`,
      }}
    >
      <span
        style={{
          fontSize: 28,
          fontWeight: 700,
          background: "linear-gradient(135deg, #FF6B6B, #feca57)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 20px rgba(255,107,107,0.3)",
        }}
      >
        GoAds
      </span>
    </div>
  );
};

/**
 * Captions Overlay - Accessibility + SEO
 */
const CaptionsOverlay: React.FC = () => {
  const frame = useCurrentFrame();

  // Define captions with timing - emotional + value-focused
  const captions = [
    { start: 0, end: 90, text: "Another day. Another account ban. Another $43K lost." },
    { start: 90, end: 150, text: "Tired of starting over?" },
    { start: 150, end: 240, text: "Your skills aren't the problem. Your infrastructure is." },
    { start: 240, end: 420, text: "GoAds Business Managers: Pre-verified. Always stable." },
    { start: 420, end: 570, text: "Real stores. Real results. Real stability." },
    { start: 570, end: 720, text: "Get your verified BM. 7-day warranty included." },
  ];

  const currentCaption = captions.find(c => frame >= c.start && frame < c.end);

  if (!currentCaption) return null;

  // Fade in/out
  const fadeIn = Math.min(1, (frame - currentCaption.start) / 10);
  const fadeOut = Math.min(1, (currentCaption.end - frame) / 10);
  const opacity = Math.min(fadeIn, fadeOut);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 60,
        left: "50%",
        transform: "translateX(-50%)",
        opacity: opacity * 0.95,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "12px 24px",
          borderRadius: 8,
          maxWidth: 800,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.4,
          }}
        >
          {currentCaption.text}
        </span>
      </div>
    </div>
  );
};

/**
 * Progress Indicator - Shows video progress
 */
const ProgressIndicator: React.FC = () => {
  const frame = useCurrentFrame();

  // Scene markers
  const scenes = [
    { start: 0, label: "Pain" },
    { start: 90, label: "Empathy" },
    { start: 150, label: "Hope" },
    { start: 240, label: "Solution" },
    { start: 420, label: "Trust" },
    { start: 510, label: "CTA" },
  ];

  const currentSceneIndex = scenes.findIndex((scene, i) => {
    const nextScene = scenes[i + 1];
    return frame >= scene.start && (!nextScene || frame < nextScene.start);
  });

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: 8,
        opacity: 0.7,
      }}
    >
      {scenes.map((scene, i) => (
        <div
          key={i}
          style={{
            width: i === currentSceneIndex ? 24 : 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: i <= currentSceneIndex ? "#FF6B6B" : "#444",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};

/**
 * Dynamic Background - Animated gradient mesh + particles
 */
const DynamicBackground: React.FC = () => {
  const frame = useCurrentFrame();

  // Determine current mood based on frame
  // Pain (0-90): Red tones
  // Empathy (90-150): Purple tones
  // Hope (150-240): Orange/warm tones
  // Solution (240-420): Green tones
  // Trust (420-510): Blue/green tones
  // CTA (510-600): Brand gradient

  const getMoodColor = () => {
    if (frame < 90) return { primary: "rgba(239,68,68,0.08)", secondary: "rgba(127,29,29,0.05)" };
    if (frame < 150) return { primary: "rgba(139,92,246,0.06)", secondary: "rgba(88,28,135,0.04)" };
    if (frame < 240) return { primary: "rgba(255,107,107,0.08)", secondary: "rgba(254,202,87,0.05)" };
    if (frame < 420) return { primary: "rgba(34,197,94,0.08)", secondary: "rgba(22,101,52,0.05)" };
    if (frame < 510) return { primary: "rgba(59,130,246,0.06)", secondary: "rgba(34,197,94,0.04)" };
    return { primary: "rgba(255,107,107,0.1)", secondary: "rgba(254,202,87,0.06)" };
  };

  const mood = getMoodColor();

  // Animated blob positions
  const blob1X = 30 + Math.sin(frame * 0.02) * 15;
  const blob1Y = 25 + Math.cos(frame * 0.015) * 10;
  const blob2X = 70 + Math.sin(frame * 0.018 + 2) * 12;
  const blob2Y = 70 + Math.cos(frame * 0.022 + 1) * 15;
  const blob3X = 20 + Math.sin(frame * 0.025 + 4) * 10;
  const blob3Y = 75 + Math.cos(frame * 0.02 + 3) * 8;

  // Grid opacity pulse
  const gridOpacity = 0.03 + Math.sin(frame * 0.05) * 0.01;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Base gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(30,30,35,1) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(20,20,25,1) 0%, transparent 40%),
            radial-gradient(ellipse at 0% 100%, rgba(25,25,30,1) 0%, transparent 40%),
            linear-gradient(180deg, #0a0a0c 0%, #080808 50%, #050507 100%)
          `,
        }}
      />

      {/* Animated color blobs */}
      <div
        style={{
          position: "absolute",
          left: `${blob1X}%`,
          top: `${blob1Y}%`,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${mood.primary} 0%, transparent 70%)`,
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${blob2X}%`,
          top: `${blob2Y}%`,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${mood.secondary} 0%, transparent 70%)`,
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `${blob3X}%`,
          top: `${blob3Y}%`,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${mood.primary} 0%, transparent 70%)`,
          filter: "blur(70px)",
          transform: "translate(-50%, -50%)",
          opacity: 0.6,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,${gridOpacity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,${gridOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      {/* Floating particles */}
      <FloatingParticles frame={frame} />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

/**
 * Floating particles animation
 */
const FloatingParticles: React.FC<{ frame: number }> = ({ frame }) => {
  // Generate consistent particle positions
  const particles = [
    { x: 10, y: 20, size: 3, speed: 0.8, delay: 0 },
    { x: 25, y: 60, size: 2, speed: 1.2, delay: 100 },
    { x: 40, y: 30, size: 4, speed: 0.6, delay: 200 },
    { x: 55, y: 80, size: 2, speed: 1.0, delay: 50 },
    { x: 70, y: 15, size: 3, speed: 0.9, delay: 150 },
    { x: 85, y: 50, size: 2, speed: 1.1, delay: 80 },
    { x: 15, y: 85, size: 3, speed: 0.7, delay: 120 },
    { x: 90, y: 75, size: 2, speed: 1.3, delay: 30 },
    { x: 5, y: 45, size: 2, speed: 0.85, delay: 180 },
    { x: 60, y: 5, size: 3, speed: 0.95, delay: 70 },
    { x: 35, y: 95, size: 2, speed: 1.15, delay: 140 },
    { x: 80, y: 35, size: 3, speed: 0.75, delay: 90 },
  ];

  return (
    <>
      {particles.map((p, i) => {
        const animatedY = (p.y + ((frame + p.delay) * p.speed * 0.3)) % 110 - 5;
        const opacity = interpolate(
          animatedY,
          [0, 20, 80, 100],
          [0, 0.4, 0.4, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${animatedY}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.6)",
              opacity,
              boxShadow: "0 0 6px rgba(255,255,255,0.3)",
            }}
          />
        );
      })}
    </>
  );
};
