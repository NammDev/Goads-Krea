"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  GradientText,
  BleedingEdgeClock,
  Text3DCube,
  LipsyncWave,
} from "@/components/ui/bento";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animation style generator
  const getAnimationStyle = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 300ms ease-out ${index * 60}ms, transform 300ms ease-out ${index * 60}ms`,
    willChange: "opacity, transform",
    transformOrigin: "bottom",
  });

  return (
    <section ref={sectionRef} className="section-container pt-24 md:pt-40">
      <div className="bento gap-3.5 *:rounded-3xl">
        {/* Speed Card - index 0 */}
        <div
          className="bg-primary-800 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "speed", ...getAnimationStyle(0) }}
        >
          <img
            src={BENTO_IMAGES.lightStreak}
            className="absolute z-0 h-full w-full object-cover"
            loading="lazy"
            alt="Light streak background"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            }}
          />
          <span className="relative z-10 text-center text-3xl leading-none font-semibold md:text-4xl">
            Industry-leading
            <br />
            inference speed
          </span>
        </div>

        {/* Upscaling Card - index 1 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "upscaling", ...getAnimationStyle(1) }}
        >
          <GradientText className="text-5xl xl:text-7xl">22K</GradientText>
          <span className="text-base leading-none font-semibold xl:text-lg">
            Pixels upscaling
          </span>
        </div>

        {/* Train Card - index 2 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "train", ...getAnimationStyle(2) }}
        >
          <GradientText className="text-5xl xl:text-7xl">Train</GradientText>
          <span className="text-base leading-none font-semibold xl:text-lg">
            Fine-tune models with your own data
          </span>
        </div>

        {/* 4K Card - index 3 */}
        <div
          className="bg-primary-300 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "fourk", ...getAnimationStyle(3) }}
        >
          <img
            src={BENTO_IMAGES.eyeMacro}
            className="absolute z-0 h-full w-full object-cover"
            alt="Eye macro"
            loading="lazy"
          />
          <span className="relative z-10 text-5xl leading-none font-bold tracking-tight xl:text-7xl">
            4K
          </span>
          <span className="relative z-10 text-center text-base leading-none font-medium xl:text-lg">
            Native image generation
          </span>
        </div>

        {/* Krea 1 Card (Large) - index 4 */}
        <div
          className="bg-primary-800 relative flex flex-col items-center justify-center overflow-hidden bg-cover text-white"
          style={{ gridArea: "k1", ...getAnimationStyle(4) }}
        >
          <img
            src={BENTO_IMAGES.krea1Example}
            className="absolute z-0 h-full w-full object-cover"
            alt="Krea 1 example"
            loading="lazy"
          />
          <div
            className="absolute inset-0 top-0 left-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(at 50% 0%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
            }}
          />
          <span className="tracking-snug relative z-10 text-6xl leading-none font-semibold xl:text-8xl">
            Krea 1
          </span>
          <span className="absolute bottom-5 z-10 text-base leading-none font-medium md:text-lg">
            Ultra-realistic flagship model
          </span>
        </div>

        {/* Minimalist UI Card - index 5 */}
        <div
          className="bg-primary-1000 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center text-white"
          style={{ gridArea: "minimalist", ...getAnimationStyle(5) }}
        >
          <img
            src={BENTO_IMAGES.minimalistBase}
            className="absolute z-0 h-full w-full object-cover"
            alt="Minimalist UI"
            loading="lazy"
          />
          <div className="tracking-snug relative text-center text-3xl leading-none font-semibold">
            Minimalist UI
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
              Minimalist UI
            </div>
          </div>
        </div>

        {/* Asset Manager Card - index 6 */}
        <div
          className="bg-primary-100 relative overflow-hidden bg-cover p-4 text-white"
          style={{ gridArea: "assetmanager", ...getAnimationStyle(6) }}
        >
          <img
            src={BENTO_IMAGES.assetManager}
            className="absolute top-0 left-0 z-0 h-full w-full object-cover"
            alt="Asset manager"
            loading="lazy"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
            }}
          />
          <div className="relative z-10 text-xl leading-tight font-semibold">
            Full-fledged asset manager
          </div>
        </div>

        {/* Bleeding Edge Card - index 7 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-start gap-2 p-4"
          style={{ gridArea: "bleedingedge", ...getAnimationStyle(7) }}
        >
          <div className="tracking-snug w-full text-center text-xl leading-tight font-semibold">
            Bleeding Edge
          </div>
          <BleedingEdgeClock size={140} />
          <div className="text-center text-sm leading-tight font-medium">
            Access the latest models directly on release day
          </div>
        </div>

        {/* Models Card - index 8 */}
        <div
          className="bg-primary-100 flex flex-col items-center justify-center"
          style={{ gridArea: "models", ...getAnimationStyle(8) }}
        >
          <GradientText as="div" className="text-5xl font-semibold xl:text-7xl">
            64+
          </GradientText>
          <div className="text-base leading-none font-semibold xl:text-2xl">
            Models
          </div>
        </div>

        {/* Do Not Train Card - index 9 */}
        <div
          className="bg-primary-100 text-primary-1000 flex flex-col items-center justify-center"
          style={{ gridArea: "donottrain", ...getAnimationStyle(9) }}
        >
          <GradientText
            as="div"
            className="tracking-snug text-center text-2xl leading-none font-semibold xl:text-3xl"
          >
            Do not train
          </GradientText>
          <div className="mt-1 text-center text-sm leading-[1.2em] font-medium">
            Safely generate proprietary data
          </div>
        </div>

        {/* Styles Card - index 10 */}
        <div
          className="bg-primary-100 relative overflow-hidden bg-cover bg-center p-4 text-white"
          style={{ gridArea: "styles", ...getAnimationStyle(10) }}
        >
          <img
            src={BENTO_IMAGES.styles}
            className="absolute top-0 left-0 z-0 h-full w-full object-cover"
            alt="Styles"
            loading="lazy"
          />
          <div className="relative z-10 text-lg leading-tight font-semibold md:text-2xl">
            1000+ styles
          </div>
        </div>

        {/* Editor Card - index 11 */}
        <div
          className="bg-primary-100 text-primary-1000 relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
          style={{ gridArea: "editor", ...getAnimationStyle(11) }}
        >
          <img
            src={BENTO_IMAGES.editor}
            className="absolute top-0 left-0 z-0 h-full w-full scale-220 object-cover object-center"
            alt="Image editor"
            loading="lazy"
          />
          <div
            className="absolute top-0 left-0 z-0 h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
            }}
          />
          <span className="tracking-snug relative z-10 text-center text-3xl font-semibold text-white md:text-4xl md:leading-12">
            Image <br /> Editor
          </span>
        </div>

        {/* 3D Section (Contains Realtime Canvas + Text to 3D) - index 12 */}
        <div
          className="flex flex-col justify-between gap-2"
          style={{ gridArea: "threed", ...getAnimationStyle(12) }}
        >
          {/* Realtime Canvas */}
          <div className="relative h-[45%] overflow-hidden rounded-3xl bg-black bg-cover bg-center pt-4 text-white">
            <img
              src={BENTO_IMAGES.realtimeBase}
              className="absolute top-0 left-0 z-0 h-full w-full object-cover"
              alt="Realtime Canvas"
              loading="lazy"
            />
            <div className="tracking-snug relative z-10 mx-auto text-center text-2xl font-semibold">
              Realtime Canvas
            </div>
            <img
              className="absolute top-0 left-0 z-10 h-full w-full object-cover"
              alt="Realtime overlay"
              loading="lazy"
              src={BENTO_IMAGES.realtimeOverlay}
            />
          </div>

          {/* Text to 3D */}
          <div className="bg-primary-100 relative flex h-[55%] flex-col items-center justify-center overflow-hidden rounded-3xl">
            <GradientText
              as="div"
              className="tracking-snug mx-auto text-center text-2xl font-semibold"
            >
              Text to 3D
            </GradientText>
            <Text3DCube size="2.5rem" />
          </div>
        </div>

        {/* Lipsync Card - index 13 */}
        <div
          className="bg-primary-100 flex flex-col gap-6 p-5 md:gap-8"
          style={{ gridArea: "lipsync", ...getAnimationStyle(13) }}
        >
          <div className="text-base leading-tight font-semibold md:text-xl">
            Lipsync
          </div>
          <LipsyncWave />
        </div>
      </div>
    </section>
  );
}
