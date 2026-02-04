"use client";

import { useCurrentFrame, useVideoConfig, interpolate, spring, staticFile } from "remotion";

/**
 * Scene 4: Solution (8-14s / Frame 0-180)
 *
 * FLOW:
 * - Phase 1 (0-30): Order Notifications sliding in
 * - Phase 2 (30-60): Counter "47 orders today"
 * - Phase 3 (60-95): Revenue "$12,847" with growth arrow
 * - Phase 4 (95-180): Ads Gallery - multiple ads running
 *
 * TARGET: E-commerce / Shopify store owners
 * STYLE: Clean, minimal, dark background
 */
export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene exit fade (170-180)
  const sceneExitOpacity = interpolate(frame, [170, 180], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        opacity: sceneExitOpacity,
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Phase 1: Order Notifications (0-30) */}
      <OrderNotifications frame={frame} fps={fps} />

      {/* Phase 2: Order Counter (25-60) */}
      <OrderCounter frame={frame} fps={fps} />

      {/* Phase 3: Revenue Display (55-95) */}
      <RevenueDisplay frame={frame} fps={fps} />

      {/* Phase 4: Ads Gallery (90-180) */}
      <AdsGallery frame={frame} fps={fps} />

      {/* GoAds Logo - visible at end */}
      <GoAdsLogo frame={frame} />
    </div>
  );
};

// =============================================================================
// PHASE 1: Order Notifications
// =============================================================================

const OrderNotifications: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const notifications = [
    { amount: 89.99, delay: 0 },
    { amount: 124.50, delay: 4 },
    { amount: 45.00, delay: 8 },
    { amount: 199.99, delay: 12 },
    { amount: 67.50, delay: 16 },
  ];

  const fadeOut = interpolate(frame, [24, 32], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (frame > 35) return null;

  return (
    <div
      style={{
        position: "absolute",
        right: 50,
        top: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        opacity: fadeOut,
      }}
    >
      {notifications.map((notif, i) => {
        const slideProgress = spring({
          frame: frame - notif.delay,
          fps,
          config: { damping: 15, stiffness: 120, mass: 0.7 },
        });

        const translateX = interpolate(slideProgress, [0, 1], [350, 0]);
        const opacity = interpolate(slideProgress, [0, 0.3], [0, 1], { extrapolateRight: "clamp" });

        return (
          <div
            key={i}
            style={{
              transform: `translateX(${translateX}px)`,
              opacity,
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: "12px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              minWidth: 240,
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                backgroundColor: "#f0fdf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
              }}
            >
              🛒
            </div>
            <div>
              <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>New order</div>
              <div style={{ fontSize: 18, color: "#111827", fontWeight: 700 }}>${notif.amount.toFixed(2)}</div>
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                marginLeft: "auto",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

// =============================================================================
// PHASE 2: Order Counter
// =============================================================================

const OrderCounter: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const fadeIn = interpolate(frame, [25, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [52, 60], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = fadeIn * fadeOut;

  const countProgress = spring({ frame: frame - 28, fps, config: { damping: 30, stiffness: 60 } });
  const count = Math.round(47 * Math.max(0, Math.min(1, countProgress)));

  if (frame < 25 || frame > 65) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div style={{ fontSize: 160, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: -4 }}>
        {count}
      </div>
      <div style={{ fontSize: 32, fontWeight: 500, color: "#9ca3af", marginTop: 8 }}>
        orders today
      </div>
    </div>
  );
};

// =============================================================================
// PHASE 3: Revenue Display
// =============================================================================

const RevenueDisplay: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const fadeIn = interpolate(frame, [55, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [88, 98], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const opacity = fadeIn * fadeOut;

  const countProgress = spring({ frame: frame - 58, fps, config: { damping: 30, stiffness: 50 } });
  const revenue = Math.round(12847 * Math.max(0, Math.min(1, countProgress)));

  const arrowOpacity = interpolate(frame, [68, 75], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  if (frame < 55 || frame > 100) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ fontSize: 140, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: -3 }}>
          ${revenue.toLocaleString("en-US")}
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, color: "#22c55e", opacity: arrowOpacity }}>↑</div>
      </div>
      <div style={{ fontSize: 32, fontWeight: 500, color: "#9ca3af", marginTop: 10 }}>
        revenue today
      </div>
    </div>
  );
};

// =============================================================================
// PHASE 4: Ads Gallery
// =============================================================================

const AdsGallery: React.FC<{ frame: number; fps: number }> = ({ frame, fps }) => {
  const phaseFrame = Math.max(0, frame - 90);

  const fadeIn = interpolate(frame, [88, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gradient border rotation
  const borderRotation = (frame * 4) % 360;

  // Center card floating
  const floatY = Math.sin(frame * 0.1) * 5;

  if (frame < 88) return null;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeIn,
      }}
    >
      {/* Blurred surrounding cards */}
      <BlurredAdCards frame={phaseFrame} />

      {/* Center focused card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          transform: `translateY(${floatY}px)`,
        }}
      >
        <FeaturedAdCard borderRotation={borderRotation} frame={phaseFrame} fps={fps} />
      </div>
    </div>
  );
};

/**
 * Featured Ad Card with animated gradient border
 */
const FeaturedAdCard: React.FC<{
  borderRotation: number;
  frame: number;
  fps: number;
}> = ({ borderRotation, frame, fps }) => {
  const scaleProgress = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 80 },
  });

  const scale = interpolate(scaleProgress, [0, 1], [0.85, 1]);

  return (
    <div style={{ transform: `scale(${scale})` }}>
      {/* Animated gradient border */}
      <div
        style={{
          padding: 4,
          borderRadius: 24,
          background: `conic-gradient(from ${borderRotation}deg, #22c55e, #06b6d4, #8b5cf6, #ec4899, #22c55e)`,
          boxShadow: "0 25px 80px rgba(34, 197, 94, 0.2), 0 10px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            width: 360,
            height: 540,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 10,
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #d4a574, #c9956c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              S
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#262626" }}>
                Sunscreen SPF50+
              </div>
              <div style={{ fontSize: 11, color: "#8e8e8e" }}>Sponsored</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: "#22c55e" }}>Live</span>
            </div>
          </div>

          {/* Product Image */}
          <div
            style={{
              flex: 1,
              position: "relative",
              backgroundImage: `url(${staticFile("images/ad-sunscreen.jpg")})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                backgroundColor: "#000",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 5,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              SHOP NOW
            </div>
          </div>

          {/* Footer */}
          <div style={{ padding: "12px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <HeartIcon size={22} />
              <CommentIcon size={22} />
              <ShareIcon size={22} />
              <div style={{ marginLeft: "auto", display: "flex", gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#0095f6" }} />
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#c7c7c7" }} />
                <div style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#c7c7c7" }} />
              </div>
            </div>
            <div style={{ fontSize: 12, color: "#262626", lineHeight: 1.3 }}>
              <span style={{ fontWeight: 600 }}>sunscreen_spf50</span>{" "}
              Premium sun protection. Shop now!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Blurred surrounding ad cards
 */
const BlurredAdCards: React.FC<{ frame: number }> = ({ frame }) => {
  const cards = [
    { x: -440, y: -160, rotate: -8, scale: 0.68, delay: 3 },
    { x: -480, y: 180, rotate: 5, scale: 0.62, delay: 6 },
    { x: 440, y: -180, rotate: 6, scale: 0.66, delay: 4 },
    { x: 490, y: 160, rotate: -5, scale: 0.64, delay: 8 },
    { x: -180, y: -340, rotate: 3, scale: 0.52, delay: 10 },
    { x: 200, y: 360, rotate: -4, scale: 0.54, delay: 12 },
  ];

  const gradients = [
    "linear-gradient(135deg, #f093fb, #f5576c)",
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #4facfe, #00f2fe)",
    "linear-gradient(135deg, #43e97b, #38f9d7)",
    "linear-gradient(135deg, #fa709a, #fee140)",
    "linear-gradient(135deg, #ffecd2, #fcb69f)",
  ];

  return (
    <>
      {cards.map((card, i) => {
        const cardOpacity = interpolate(
          frame,
          [card.delay, card.delay + 8],
          [0, 0.55],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );

        const floatY = Math.sin((frame + i * 15) * 0.08) * 3;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y + floatY}px)) rotate(${card.rotate}deg) scale(${card.scale})`,
              filter: "blur(10px)",
              opacity: cardOpacity,
            }}
          >
            <div
              style={{
                width: 300,
                height: 440,
                backgroundColor: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
            >
              <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: gradients[i] }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#262626" }}>Brand</div>
                  <div style={{ fontSize: 10, color: "#8e8e8e" }}>Sponsored</div>
                </div>
              </div>
              <div style={{ height: 320, background: gradients[i] }} />
              <div style={{ padding: "12px 14px", display: "flex", gap: 12 }}>
                <div style={{ width: 20, height: 20, borderRadius: 3, backgroundColor: "#f0f0f0" }} />
                <div style={{ width: 20, height: 20, borderRadius: 3, backgroundColor: "#f0f0f0" }} />
                <div style={{ width: 20, height: 20, borderRadius: 3, backgroundColor: "#f0f0f0" }} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

// =============================================================================
// GoAds Logo
// =============================================================================

const GoAdsLogo: React.FC<{ frame: number }> = ({ frame }) => {
  const opacity = interpolate(frame, [100, 110], [0, 0.9], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  if (frame < 100) return null;

  return (
    <div style={{ position: "absolute", bottom: 35, right: 45, opacity, zIndex: 20 }}>
      <span
        style={{
          fontSize: 28,
          fontWeight: 700,
          background: "linear-gradient(135deg, #FF6B6B, #feca57)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        GoAds
      </span>
    </div>
  );
};

// =============================================================================
// ICONS
// =============================================================================

const HeartIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 21C12 21 3 15.5 3 9.5C3 6.42 5.42 4 8.5 4C10.24 4 11.91 4.81 12 6C12.09 4.81 13.76 4 15.5 4C18.58 4 21 6.42 21 9.5C21 15.5 12 21 12 21Z"
      stroke="#262626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommentIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 11.5C21 16.19 16.97 20 12 20C10.64 20 9.35 19.72 8.19 19.22L3 21L4.78 15.81C4.28 14.65 4 13.36 4 12C4 7.03 7.81 3 12.5 3C17.19 3 21 6.81 21 11.5Z"
      stroke="#262626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M22 3L15 22L11 13L2 9L22 3Z"
      stroke="#262626"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
