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
  eyeMacro: "https://s.krea.ai/eye-macro.webp",
  krea1Example: "https://s.krea.ai/krea1-example.webp",
  minimalistBase: "https://s.krea.ai/minimalistBase.webp",
  assetManager: "https://s.krea.ai/asset-manager.webp",
  styles: "https://s.krea.ai/isometricPromptStyles.webp",
  editor: "https://s.krea.ai/isometricEditExample.webp",
  realtimeBase: "https://s.krea.ai/realtimeBase.webp",
  realtimeOverlay:
    "https://www.krea.ai/_app/10eb4479b955cfa2/immutable/assets/realtimeOverlay.Dw-O4V0Z.png",
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
  const getAnimationStyle = (index: number) => getStaggerAnimationStyle(isVisible, index);

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

        {/* Structured Process Card - index 3 */}
        <div
          className="bg-primary-300 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "fourk", ...getAnimationStyle(3) }}
        >
          <Image
            src={BENTO_IMAGES.eyeMacro}
            className="z-0 object-cover"
            alt="Eye macro"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span className="relative z-10 text-5xl leading-none font-bold tracking-tight xl:text-7xl">
            Clear
          </span>
          <span className="relative z-10 text-center text-base leading-none font-medium xl:text-lg">
            Structured Process
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
            Agency
          </span>
          <span className="absolute bottom-5 z-10 text-base leading-none font-medium md:text-lg">
            Tested by professionals
          </span>
        </div>

        {/* Verified BMs Card - index 5 */}
        <div
          className="bg-primary-1000 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "minimalist", ...getAnimationStyle(5) }}
        >
          <Image
            src={BENTO_IMAGES.minimalistBase}
            className="z-0 object-cover"
            alt="Verified BMs"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="tracking-snug relative text-center text-3xl leading-none font-semibold">
            Verified BMs
            {/* Reflection effect */}
            <div
              className="tracking-snug absolute -bottom-full -scale-y-100 text-3xl font-semibold opacity-50 blur-[2px]"
              aria-hidden="true"
              style={{
                background: "linear-gradient(to top, white 0%, transparent 80%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Verified BMs
            </div>
          </div>
        </div>

        {/* Scaling Ready Card - index 6 */}
        <div
          className="bg-primary-100 relative overflow-hidden bg-cover p-4 text-white"
          style={{ gridArea: "assetmanager", ...getAnimationStyle(6) }}
        >
          <Image
            src={BENTO_IMAGES.assetManager}
            className="z-0 object-cover"
            alt="Scaling ready"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
            }}
          />
          <div className="relative z-10 text-xl leading-tight font-semibold">
            Built for growth, not just launch
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

        {/* 1:1 Replacement Card - index 10 */}
        <div
          className="bg-primary-100 relative overflow-hidden bg-cover bg-center p-4 text-white"
          style={{ gridArea: "styles", ...getAnimationStyle(10) }}
        >
          <Image
            src={BENTO_IMAGES.styles}
            className="z-0 object-cover"
            alt="Replacement"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="relative z-10 text-lg leading-tight font-semibold md:text-2xl">
            1:1 Replacement
          </div>
        </div>

        {/* Real Humans Card - index 11 */}
        <div
          className="bg-primary-100 text-primary-1000 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ gridArea: "editor", ...getAnimationStyle(11) }}
        >
          <Image
            src={BENTO_IMAGES.editor}
            className="z-0 scale-220 object-cover object-center"
            alt="Real humans"
            loading="lazy"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
            }}
          />
          <span className="tracking-snug relative z-10 text-center text-3xl font-semibold text-white md:text-4xl md:leading-12">
            Real <br /> Humans
          </span>
        </div>

        {/* Multi-Channel Support Card - index 12 */}
        <div
          className="flex flex-col justify-between gap-2"
          style={{ gridArea: "threed", ...getAnimationStyle(12) }}
        >
          {/* Telegram */}
          <div className="relative h-[45%] overflow-hidden rounded-3xl bg-black bg-cover bg-center pt-4 text-white">
            <Image
              src={BENTO_IMAGES.realtimeBase}
              className="z-0 object-cover"
              alt="Multi-channel support"
              loading="lazy"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="tracking-snug relative z-10 mx-auto text-center text-2xl font-semibold">
              Multi-Channel
            </div>
            <Image
              className="z-10 object-cover"
              alt="Support overlay"
              loading="lazy"
              src={BENTO_IMAGES.realtimeOverlay}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Fast Response */}
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
            No Questions Asked
          </div>
          <LipsyncWave />
        </div>
      </div>
    </section>
  );
}
