"use client";

import { useCurrentFrame, interpolate, Easing } from "remotion";

/**
 * Scene 5: Trust - Fullscreen Social Proof Wall
 * Shows many users/testimonials popping up dynamically with animations
 * Duration: 150 frames (5 seconds) - Single immersive frame with staggered animations
 */

// User data for the popup notifications
const users = [
  { name: "David C.", location: "San Francisco", result: "$50K/mo", avatar: "👨‍💼", delay: 0 },
  { name: "Alex R.", location: "Miami", result: "0 bans", avatar: "🧑‍💻", delay: 5 },
  { name: "Marcus J.", location: "New York", result: "15 stores", avatar: "👨‍🦱", delay: 10 },
  { name: "Sarah M.", location: "London", result: "$32K/mo", avatar: "👩‍💼", delay: 15 },
  { name: "James L.", location: "Toronto", result: "8 stores", avatar: "🧔", delay: 20 },
  { name: "Emily W.", location: "Sydney", result: "$28K/mo", avatar: "👩‍🦰", delay: 25 },
  { name: "Michael T.", location: "Berlin", result: "12 stores", avatar: "👨", delay: 30 },
  { name: "Lisa K.", location: "Paris", result: "$45K/mo", avatar: "👩", delay: 35 },
  { name: "Robert H.", location: "Singapore", result: "6 stores", avatar: "🧑", delay: 40 },
  { name: "Jennifer P.", location: "Dubai", result: "$67K/mo", avatar: "👩‍🦱", delay: 45 },
  { name: "Chris B.", location: "Amsterdam", result: "20 stores", avatar: "👨‍🦲", delay: 50 },
  { name: "Amanda S.", location: "Tokyo", result: "$38K/mo", avatar: "👧", delay: 55 },
  { name: "Daniel F.", location: "Seoul", result: "9 stores", avatar: "🧒", delay: 60 },
  { name: "Michelle R.", location: "Hong Kong", result: "$55K/mo", avatar: "👱‍♀️", delay: 65 },
  { name: "Kevin N.", location: "Melbourne", result: "11 stores", avatar: "👴", delay: 70 },
  { name: "Jessica T.", location: "Chicago", result: "$41K/mo", avatar: "👵", delay: 75 },
];

// Positions for the popup cards - distributed across fullscreen
const positions = [
  { x: 5, y: 8 }, { x: 75, y: 5 }, { x: 40, y: 3 },
  { x: 15, y: 25 }, { x: 60, y: 20 }, { x: 85, y: 28 },
  { x: 8, y: 45 }, { x: 35, y: 38 }, { x: 70, y: 42 },
  { x: 25, y: 60 }, { x: 55, y: 55 }, { x: 80, y: 62 },
  { x: 10, y: 78 }, { x: 45, y: 72 }, { x: 72, y: 80 },
  { x: 30, y: 88 },
];

// Floating avatar positions for background ambiance
const floatingAvatars = [
  { emoji: "🎯", x: 92, y: 15, size: 40, speed: 0.8 },
  { emoji: "💰", x: 3, y: 35, size: 36, speed: 1.2 },
  { emoji: "🚀", x: 88, y: 55, size: 44, speed: 0.9 },
  { emoji: "⭐", x: 5, y: 70, size: 32, speed: 1.1 },
  { emoji: "💎", x: 94, y: 85, size: 38, speed: 0.7 },
  { emoji: "🔥", x: 2, y: 92, size: 42, speed: 1.0 },
];

export const TrustScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Main title animation
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [-30, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });

  // Counter animation
  const counterValue = interpolate(frame, [15, 80], [0, 2847], { extrapolateRight: "clamp" });

  // Pulse animation for the stats
  const pulse = 1 + Math.sin(frame * 0.15) * 0.03;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Gradient overlay for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 80%, rgba(34, 197, 94, 0.06) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 107, 107, 0.06) 0%, transparent 40%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Floating background emojis */}
      {floatingAvatars.map((item, i) => {
        const yOffset = Math.sin((frame + i * 20) * 0.05 * item.speed) * 15;
        const xOffset = Math.cos((frame + i * 30) * 0.03 * item.speed) * 8;
        const floatOpacity = interpolate(frame, [i * 5, i * 5 + 20], [0, 0.3], {
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={`float-${i}`}
            style={{
              position: "absolute",
              left: `${item.x + xOffset}%`,
              top: `${item.y + yOffset}%`,
              fontSize: item.size,
              opacity: floatOpacity,
              filter: "blur(1px)",
              pointerEvents: "none",
              transform: `rotate(${frame * 0.5 + i * 45}deg)`,
            }}
          >
            {item.emoji}
          </div>
        );
      })}

      {/* Center content - Main headline */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translateY(${titleY}px)`,
          opacity: titleOpacity,
          textAlign: "center",
          zIndex: 100,
          pointerEvents: "none",
        }}
      >
        {/* Main title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: 16,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            letterSpacing: "-2px",
          }}
        >
          Trusted by Thousands
        </div>

        {/* Animated counter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              background: "linear-gradient(135deg, #22c55e, #10b981)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: `scale(${pulse})`,
              textShadow: "0 0 40px rgba(34, 197, 94, 0.4)",
            }}
          >
            {Math.floor(counterValue).toLocaleString()}+
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#9ca3af",
              fontWeight: 500,
            }}
          >
            Active Users
          </div>
        </div>

        {/* Trust badges */}
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
          }}
        >
          <TrustBadge frame={frame} delay={30} icon="✓" text="Verified BMs" />
          <TrustBadge frame={frame} delay={40} icon="🛡️" text="7-Day Warranty" />
          <TrustBadge frame={frame} delay={50} icon="⚡" text="Instant Setup" />
        </div>
      </div>

      {/* Popup notification cards */}
      {users.map((user, i) => (
        <PopupCard
          key={i}
          user={user}
          position={positions[i]}
          frame={frame}
          index={i}
        />
      ))}

      {/* Connecting lines animation */}
      <ConnectingLines frame={frame} />
    </div>
  );
};

/**
 * Trust badge component with staggered animation
 */
const TrustBadge: React.FC<{
  frame: number;
  delay: number;
  icon: string;
  text: string;
}> = ({ frame, delay, icon, text }) => {
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [delay, delay + 15], [0.8, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2)),
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        padding: "12px 24px",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        gap: 10,
        backdropFilter: "blur(10px)",
      }}
    >
      <span style={{ fontSize: 20 }}>{icon}</span>
      <span style={{ fontSize: 16, fontWeight: 600, color: "#ffffff" }}>{text}</span>
    </div>
  );
};

/**
 * Popup card component - animated user notification
 */
const PopupCard: React.FC<{
  user: (typeof users)[0];
  position: { x: number; y: number };
  frame: number;
  index: number;
}> = ({ user, position, frame, index }) => {
  const delay = user.delay;

  // Pop in animation
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const scale = interpolate(frame, [delay, delay + 12], [0.5, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(2.5)),
  });
  const y = interpolate(frame, [delay, delay + 12], [20, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  // Subtle floating animation after appearing
  const floatY = frame > delay + 12 ? Math.sin((frame - delay) * 0.08) * 4 : 0;

  // Glow pulse
  const glowIntensity = interpolate(
    Math.sin((frame + index * 10) * 0.1),
    [-1, 1],
    [0.3, 0.6]
  );

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity,
        transform: `scale(${scale}) translateY(${y + floatY}px)`,
        transformOrigin: "center center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 20px",
          backgroundColor: "rgba(20, 20, 25, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 16,
          boxShadow: `
            0 4px 20px rgba(0, 0, 0, 0.4),
            0 0 30px rgba(34, 197, 94, ${glowIntensity * 0.3}),
            inset 0 1px 0 rgba(255, 255, 255, 0.05)
          `,
          backdropFilter: "blur(20px)",
          minWidth: 200,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22c55e, #16a34a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            boxShadow: "0 2px 10px rgba(34, 197, 94, 0.3)",
          }}
        >
          {user.avatar}
        </div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: 2,
            }}
          >
            {user.name}
          </div>
          <div
            style={{
              fontSize: 12,
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span>📍</span>
            {user.location}
          </div>
        </div>

        {/* Result badge */}
        <div
          style={{
            padding: "6px 12px",
            backgroundColor: "rgba(34, 197, 94, 0.15)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            borderRadius: 20,
            fontSize: 13,
            fontWeight: 700,
            color: "#22c55e",
          }}
        >
          {user.result}
        </div>
      </div>
    </div>
  );
};

/**
 * Animated connecting lines between popup cards
 */
const ConnectingLines: React.FC<{ frame: number }> = ({ frame }) => {
  const lines = [
    { x1: 15, y1: 30, x2: 35, y2: 42, delay: 35 },
    { x1: 65, y1: 25, x2: 55, y2: 58, delay: 45 },
    { x1: 30, y1: 65, x2: 50, y2: 55, delay: 55 },
    { x1: 75, y1: 45, x2: 80, y2: 65, delay: 65 },
  ];

  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 107, 107, 0.5)" />
        </linearGradient>
      </defs>
      {lines.map((line, i) => {
        const progress = interpolate(frame, [line.delay, line.delay + 30], [0, 1], {
          extrapolateRight: "clamp",
        });
        const opacity = interpolate(frame, [line.delay, line.delay + 15], [0, 0.4], {
          extrapolateRight: "clamp",
        });

        // Calculate the actual line endpoint based on progress
        const currentX2 = line.x1 + (line.x2 - line.x1) * progress;
        const currentY2 = line.y1 + (line.y2 - line.y1) * progress;

        return (
          <line
            key={i}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${currentX2}%`}
            y2={`${currentY2}%`}
            stroke="url(#lineGradient)"
            strokeWidth={2}
            strokeDasharray="6 4"
            opacity={opacity}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};
