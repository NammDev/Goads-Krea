"use client";

import Image from "next/image";
import {
  GradientText,
  BleedingEdgeClock,
  Text3DCube,
  LipsyncWave,
} from "@/components/ui/bento";
import { useScrollTrigger } from "@/hooks";
import { getStaggerAnimationStyle } from "@/lib/animation-config";

/** Image URLs for bento cards */
const BENTO_IMAGES = {
  lightStreak: "https://s.krea.ai/light-streak.webp",
  krea1Example: "https://s.krea.ai/krea1-example.webp",
};

/**
 * Bento Grid Section - Feature showcase in asymmetric grid layout
 * Animation: Scroll-triggered stagger fade-in + slide-up
 * - Each card animates with 60ms stagger delay
 * - Transform: translateY(24px) → translateY(0)
 * - Opacity: 0 → 1
 * - Duration: 300ms, ease-out
 */
export function BentoSection() {
  const { ref: sectionRef, isVisible } = useScrollTrigger<HTMLElement>();

  // Use centralized animation config
  const getAnimationStyle = (index: number) =>
    getStaggerAnimationStyle(isVisible, index);

  return (
    <section ref={sectionRef} className="section-container pt-24 md:pt-40">
      <div className="bento gap-3.5 *:rounded-3xl">
        {/* 7-Day Warranty Card - index 0 */}
        <div
          className="bg-primary-800 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "speed", ...getAnimationStyle(0) }}
        >
          <Image
            src={BENTO_IMAGES.lightStreak}
            className="z-0 object-cover"
            loading="lazy"
            alt="Light streak background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
          />
          <span className="relative z-10 text-center text-3xl leading-none font-semibold md:text-4xl">
            7-Day
            <br />
            Warranty
          </span>
        </div>

        {/* Fast Support Card - index 1 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "upscaling", ...getAnimationStyle(1) }}
        >
          <GradientText className="text-5xl xl:text-7xl">24/7</GradientText>
          <span className="text-base leading-none font-semibold xl:text-lg">
            Fast Support
          </span>
        </div>

        {/* Stable Assets Card - index 2 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "train", ...getAnimationStyle(2) }}
        >
          <GradientText className="text-5xl xl:text-7xl">Stable</GradientText>
          <span className="text-base leading-none font-semibold xl:text-lg">
            Pre-verified, aged, tested assets
          </span>
        </div>

        {/* Pro Card - index 3 */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden text-white"
          style={{ gridArea: "fourk", ...getAnimationStyle(3) }}
        >
          {/* Dark background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
            }}
          />
          {/* Floating metrics around center */}
          <div
            className="absolute top-[15%] left-[20%] z-0 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <div className="text-[9px] text-gray-400">CTR</div>
            <div className="text-xs font-bold text-green-400">4.2%</div>
          </div>
          <div
            className="absolute top-[20%] right-[15%] z-0 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm"
            style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
          >
            <div className="text-[9px] text-gray-400">ROAS</div>
            <div className="text-xs font-bold text-green-400">3.8x</div>
          </div>
          <div
            className="absolute bottom-[20%] left-[15%] z-0 rounded-lg bg-white/10 px-2 py-1 backdrop-blur-sm"
            style={{ animation: "float 4s ease-in-out infinite 1s" }}
          >
            <div className="text-[9px] text-gray-400">CPA</div>
            <div className="text-xs font-bold text-green-400">$2.1</div>
          </div>

          <span className="relative z-10 text-5xl leading-none font-bold tracking-tight xl:text-7xl">
            Pro
          </span>
          <span className="relative z-10 text-center text-base leading-none font-medium xl:text-lg">
            Optimized for Ads
          </span>
        </div>

        {/* Agency-Tested Card (Large) - index 4 */}
        <div
          className="bg-primary-800 relative flex flex-col items-center justify-center overflow-hidden bg-cover text-white"
          style={{ gridArea: "k1", ...getAnimationStyle(4) }}
        >
          <Image
            src={BENTO_IMAGES.krea1Example}
            className="z-0 object-cover"
            alt="Agency tested"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 top-0 left-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(at 50% 0%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
            }}
          />
          <span className="tracking-snug relative z-10 text-6xl leading-none font-semibold xl:text-8xl">
            GOADS
          </span>
          <span className="absolute bottom-5 z-10 text-base leading-none font-medium md:text-lg">
            Trusted by leading agencies
          </span>
        </div>

        {/* Verified BMs Card - index 5 */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden text-white"
          style={{ gridArea: "minimalist", ...getAnimationStyle(5) }}
        >
          <Image
            src="/images/verified-bm-bg.webp"
            className="z-0 object-cover"
            alt="Verified BMs background"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)",
            }}
          />
          <span className="tracking-snug relative z-10 text-center text-3xl leading-none font-semibold">
            Verified BMs
          </span>
        </div>

        {/* Blue Badge Pages Card - index 6 */}
        <div
          className="relative overflow-hidden p-4 text-white"
          style={{ gridArea: "assetmanager", ...getAnimationStyle(6) }}
        >
          {/* Minimal blue background with soft gradient */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: "linear-gradient(160deg, #1e3a5f 0%, #0f172a 100%)",
            }}
          />
          {/* Subtle glow accent */}
          <div
            className="absolute -top-10 -right-10 z-0 h-32 w-32 rounded-full opacity-40 blur-3xl"
            style={{ background: "#3b82f6" }}
          />
          {/* Title at top */}
          <div className="relative z-20 text-xl leading-tight font-semibold">
            Blue Badge Verification Services
          </div>
          {/* Floating page mockups - positioned below text */}
          <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-1.5">
            {/* Card 1 - main */}
            <div
              className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-300 to-blue-400" />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold text-gray-900">
                    Your Page
                  </span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#2563eb" />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[10px] text-gray-500">@yourpage</span>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="flex items-center gap-2 rounded-lg bg-white/95 px-2 py-1.5 shadow-lg"
              style={{ animation: "float 4s ease-in-out infinite 0.4s" }}
            >
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-green-300 to-green-400" />
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-gray-800">
                  Store
                </span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#2563eb" />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="flex items-center gap-2 rounded-lg bg-white/90 px-2 py-1.5 shadow-md"
              style={{ animation: "float 4s ease-in-out infinite 0.8s" }}
            >
              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-300 to-purple-400" />
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-semibold text-gray-800">
                  Brand
                </span>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#2563eb" />
                  <path
                    d="M9 12l2 2 4-4"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Team Card - index 7 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-start gap-2 p-4"
          style={{ gridArea: "bleedingedge", ...getAnimationStyle(7) }}
        >
          <div className="tracking-snug w-full text-center text-xl leading-tight font-semibold">
            Professional Team
          </div>
          <BleedingEdgeClock size={140} />
          <div className="text-center text-sm leading-tight font-medium">
            Small team, big accountability
          </div>
        </div>

        {/* Global Service Card - index 8 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "models", ...getAnimationStyle(8) }}
        >
          <GradientText as="div" className="text-5xl font-semibold xl:text-7xl">
            50+
          </GradientText>
          <div className="text-base leading-none font-semibold xl:text-2xl">
            Countries
          </div>
        </div>

        {/* Peace of Mind Card - index 9 */}
        <div
          className="bg-primary-100 text-primary-1000 flex flex-col items-center justify-center"
          style={{ gridArea: "donottrain", ...getAnimationStyle(9) }}
        >
          <GradientText
            as="div"
            className="tracking-snug text-center text-2xl leading-none font-semibold xl:text-3xl"
          >
            Peace of Mind
          </GradientText>
          <div className="mt-1 text-center text-sm leading-[1.2em] font-medium">
            Focus on ads. We handle infrastructure.
          </div>
        </div>

        {/* Instant Replacement Card - index 10 */}
        <div
          className="relative overflow-hidden p-4 text-white"
          style={{ gridArea: "styles", ...getAnimationStyle(10) }}
        >
          {/* Speed lines gradient - diagonal motion effect */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(135deg, #262626 0%, #404040 50%, #262626 100%)",
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)",
            }}
          />
          <div className="relative z-10 text-lg leading-tight font-semibold md:text-2xl">
            Instant Replacement
          </div>
        </div>

        {/* Multi Platform Card - index 11 */}
        <div
          className="relative flex flex-col items-center justify-center overflow-hidden text-white"
          style={{ gridArea: "editor", ...getAnimationStyle(11) }}
        >
          {/* Dark gradient background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f0f 100%)",
            }}
          />
          {/* Colored glows for platforms */}
          <div
            className="absolute -top-8 -left-8 z-0 h-32 w-32 rounded-full opacity-40 blur-3xl"
            style={{ background: "#ff0050" }}
          />
          <div
            className="absolute -bottom-8 -right-8 z-0 h-32 w-32 rounded-full opacity-40 blur-3xl"
            style={{ background: "#0668E1" }}
          />
          {/* Platform icons floating around */}
          <div
            className="absolute top-[12%] left-[18%] z-10 h-10 w-10 md:h-12 md:w-12"
            style={{ animation: "float 4s ease-in-out infinite" }}
          >
            <Image
              src="/images/platform-tiktok.png"
              alt="TikTok"
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute top-[15%] right-[15%] z-10 h-10 w-10 md:h-12 md:w-12"
            style={{ animation: "float 4s ease-in-out infinite 0.5s" }}
          >
            <Image
              src="/images/platform-meta.png"
              alt="Meta"
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute bottom-[18%] left-[15%] z-10 h-9 w-9 md:h-11 md:w-11"
            style={{ animation: "float 4s ease-in-out infinite 1s" }}
          >
            <Image
              src="/images/platform-shopify.png"
              alt="Shopify"
              fill
              className="object-contain"
            />
          </div>
          <div
            className="absolute bottom-[12%] right-[18%] z-10 h-9 w-9 md:h-11 md:w-11"
            style={{ animation: "float 4s ease-in-out infinite 1.5s" }}
          >
            <Image
              src="/images/platform-snapchat.png"
              alt="Snapchat"
              fill
              className="object-contain"
            />
          </div>
          <span className="tracking-snug relative z-10 text-center text-3xl font-semibold md:text-4xl md:leading-12">
            Multi <br /> Platform
          </span>
        </div>

        {/* Fast Support Card - index 12 */}
        <div
          className="flex flex-col justify-between gap-2"
          style={{ gridArea: "threed", ...getAnimationStyle(12) }}
        >
          {/* Fast Support with image background */}
          <div className="relative h-[45%] overflow-hidden rounded-3xl text-white">
            <Image
              src="/images/fast-support-bg.webp"
              className="z-0 object-cover"
              alt="Fast support background"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div
              className="absolute inset-0 z-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)",
              }}
            />
            <div className="tracking-snug relative z-10 pt-4 text-center text-2xl font-semibold">
              Fast Support
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-primary-100 relative flex h-[55%] flex-col items-center justify-center overflow-hidden rounded-3xl">
            <GradientText
              as="div"
              className="tracking-snug mx-auto text-center text-2xl font-semibold"
            >
              &lt;2h Response
            </GradientText>
            <Text3DCube size="2.5rem" />
          </div>
        </div>

        {/* No Questions Asked Card - index 13 */}
        <div
          className="bg-primary-100 flex flex-col gap-6 p-5 md:gap-8"
          style={{ gridArea: "lipsync", ...getAnimationStyle(13) }}
        >
          <div className="text-base leading-tight font-semibold md:text-xl">
            7-Day Guarantee
          </div>
          <LipsyncWave />
        </div>
      </div>
    </section>
  );
}
