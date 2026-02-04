"use client";

import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

/**
 * Scene 1: The Pain (0-3s / Frame 0-90)
 * Multiple Meta/IG restriction popups on black background
 */
export const PainScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Smooth scale down + blur transition (75-90 frames)
  const exitScale = interpolate(frame, [75, 90], [1, 0.95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitBlur = interpolate(frame, [75, 90], [0, 8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out (80-90 frames)
  const sceneOpacity = interpolate(frame, [80, 90], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Red pulse overlay
  const pulseOpacity = interpolate(Math.sin(frame * 0.15), [-1, 1], [0, 0.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        opacity: sceneOpacity,
        transform: `scale(${exitScale})`,
        filter: `blur(${exitBlur}px)`,
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Red pulse overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(239,68,68,0.15) 0%, transparent 70%)",
          opacity: pulseOpacity,
          pointerEvents: "none",
        }}
      />

      {/* Popup 1: Facebook Account Disabled (center-left) */}
      <FacebookDisabledPopup delay={0} x={-320} y={-120} />

      {/* Popup 2: Instagram Account Disabled (center-right) */}
      <InstagramDisabledPopup delay={10} x={280} y={-80} />

      {/* Popup 3: Business Manager Restricted (top-center) */}
      <BMRestrictedPopup delay={20} x={-50} y={-280} />

      {/* Popup 4: Ad Account Disabled (bottom-left) */}
      <AdAccountDisabledPopup delay={30} x={-380} y={180} />

      {/* Popup 5: Campaign Paused (bottom-center) */}
      <CampaignPausedPopup delay={40} x={50} y={220} />

      {/* Popup 6: Sales Decrease Alert (right) */}
      <SalesDecreasePopup delay={50} x={350} y={150} />
    </div>
  );
};

/**
 * Facebook "We've disabled your account" popup
 */
const FacebookDisabledPopup: React.FC<{ delay: number; x: number; y: number }> = ({
  delay,
  x,
  y,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 420,
        backgroundColor: "#fff",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
        borderLeft: "4px solid #c1372b",
      }}
    >
      <div style={{ padding: "24px 28px" }}>
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#1c1e21",
            marginBottom: 12,
          }}
        >
          We've disabled your account
        </div>
        <p
          style={{
            fontSize: 14,
            color: "#65676b",
            lineHeight: 1.5,
            margin: 0,
            marginBottom: 8,
          }}
        >
          We've reviewed your account and found that it still doesn't follow our Community Standards
          on account integrity.
        </p>
        <p
          style={{
            fontSize: 14,
            color: "#65676b",
            lineHeight: 1.5,
            margin: 0,
            marginBottom: 20,
          }}
        >
          You cannot request another review of this decision.
        </p>

        {/* Button */}
        <div
          style={{
            backgroundColor: "#4f5bd5",
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            padding: "12px 20px",
            borderRadius: 6,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Download Your Information
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#4f5bd5",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Read more about account integrity
        </div>
      </div>
    </div>
  );
};

/**
 * Instagram "We disabled your account" popup (dark theme)
 */
const InstagramDisabledPopup: React.FC<{ delay: number; x: number; y: number }> = ({
  delay,
  x,
  y,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 380,
        backgroundColor: "#000",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        overflow: "hidden",
        border: "1px solid #363636",
      }}
    >
      {/* Instagram Header */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #363636",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontStyle: "italic",
            fontSize: 24,
            fontWeight: 500,
            color: "#fff",
          }}
        >
          Instagram
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ width: 24, height: 2, backgroundColor: "#fff" }} />
          <div style={{ width: 24, height: 2, backgroundColor: "#fff" }} />
          <div style={{ width: 24, height: 2, backgroundColor: "#fff" }} />
        </div>
      </div>

      {/* Profile placeholder */}
      <div style={{ padding: "24px", textAlign: "center" }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c)",
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              backgroundColor: "#262626",
            }}
          />
        </div>

        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#fff",
            marginBottom: 8,
          }}
        >
          We disabled your account
        </div>
        <div
          style={{
            fontSize: 14,
            color: "#a8a8a8",
          }}
        >
          You no longer have access to
        </div>
      </div>

      {/* Why section */}
      <div style={{ padding: "0 24px 24px" }}>
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#fff",
            marginBottom: 8,
          }}
        >
          Why this happened
        </div>
        <p
          style={{
            fontSize: 13,
            color: "#a8a8a8",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          We reviewed your account and found that it still doesn't follow our Community Guidelines.
        </p>
      </div>
    </div>
  );
};

/**
 * Business Manager Restricted popup
 */
const BMRestrictedPopup: React.FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 360,
        backgroundColor: "#fff",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
      }}
    >
      {/* Red warning banner */}
      <div
        style={{
          backgroundColor: "#fef2f2",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderBottom: "1px solid #fecaca",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#dc2626",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700 }}>!</span>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: "#991b1b" }}>
            Business Manager Restricted
          </div>
          <div style={{ fontSize: 13, color: "#b91c1c" }}>Advertising access removed</div>
        </div>
      </div>

      <div style={{ padding: "16px 20px" }}>
        <p style={{ fontSize: 14, color: "#65676b", margin: 0, lineHeight: 1.5 }}>
          Your Business Manager has been restricted due to policy violations. You can no longer
          create or manage ad accounts.
        </p>
      </div>
    </div>
  );
};

/**
 * Ad Account Disabled popup (small card style)
 */
const AdAccountDisabledPopup: React.FC<{ delay: number; x: number; y: number }> = ({
  delay,
  x,
  y,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 320,
        backgroundColor: "#1c1917",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        border: "1px solid #7f1d1d",
        borderLeft: "4px solid #ef4444",
        padding: 20,
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
      }}
    >
      {/* Red padlock icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          backgroundColor: "#7f1d1d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="14" r="6" fill="#ef4444" />
          <path d="M8 10V8a4 4 0 118 0v2" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <line x1="9" y1="17" x2="15" y2="11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#fca5a5", marginBottom: 4 }}>
          Ad Account Disabled
        </div>
        <div style={{ fontSize: 13, color: "#a8a29e", lineHeight: 1.4 }}>
          Your advertising access is restricted. Unable to run campaigns.
        </div>
      </div>
    </div>
  );
};

/**
 * Campaign Paused popup
 */
const CampaignPausedPopup: React.FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 12,
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        overflow: "hidden",
      }}
    >
      {/* Orange header */}
      <div
        style={{
          backgroundColor: "#fef3c7",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #fcd34d",
        }}
      >
        <span style={{ fontSize: 20 }}>⏸️</span>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#92400e" }}>Campaign Paused</span>
      </div>

      <div style={{ padding: "14px 16px" }}>
        <div style={{ fontSize: 13, color: "#65676b", marginBottom: 8 }}>
          3 active campaigns have been paused due to policy review.
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              flex: 1,
              padding: "8px",
              backgroundColor: "#f3f4f6",
              borderRadius: 6,
              textAlign: "center",
              fontSize: 12,
              color: "#6b7280",
            }}
          >
            Appeal
          </div>
          <div
            style={{
              flex: 1,
              padding: "8px",
              backgroundColor: "#1877f2",
              borderRadius: 6,
              textAlign: "center",
              fontSize: 12,
              color: "#fff",
              fontWeight: 500,
            }}
          >
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Sales Decrease Alert popup
 */
const SalesDecreasePopup: React.FC<{ delay: number; x: number; y: number }> = ({ delay, x, y }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - delay;

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${Math.max(0, scale)})`,
        opacity,
        width: 336,
        backgroundColor: "#18181b",
        borderRadius: 14,
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
        border: "1px solid #27272a",
        padding: 24,
      }}
    >
      {/* Chart icon with down arrow */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 12,
            backgroundColor: "#7f1d1d20",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="34" height="34" viewBox="0 0 28 28" fill="none">
            <polyline
              points="4,20 10,14 16,18 24,8"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="18,8 24,8 24,14"
              stroke="#ef4444"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 16, color: "#a1a1aa" }}>Sales This Week</div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#ef4444" }}>-87%</div>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#ef4444", marginTop: 6 }}>
            $43,500 lost
          </div>
        </div>
      </div>

      <div style={{ fontSize: 14, color: "#71717a", lineHeight: 1.4 }}>
        Revenue dropped due to ad account restrictions.
      </div>
    </div>
  );
};
