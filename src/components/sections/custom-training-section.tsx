"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";

/**
 * ArrowIcon - Stylized arrow between cards
 */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="67"
      viewBox="0 0 99 67"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_di_arrow)">
        <path
          d="M56.8931 40.8799L8 48.5336V24.7668L53.9359 18.1201L51.3729 4L91 24.7668L59.2589 55L56.8931 40.8799Z"
          fill="white"
          stroke="rgba(0,0,0,0.025)"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_arrow"
          x="0"
          y="0"
          width="99"
          height="67"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

/** Sample image sets for the stacked cards - each set produces one output */
const INPUT_IMAGE_SETS = [
  [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=128&h=160&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&h=160&fit=crop",
  ],
  [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=128&h=160&fit=crop",
    "https://images.unsplash.com/photo-1499996860823-5f9f8957a71c?w=128&h=160&fit=crop",
  ],
];

/** Output images - each corresponds to an input set */
const OUTPUT_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=512&h=680&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=512&h=680&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=512&h=680&fit=crop",
];

/** Animation timing (ms) */
const SPREAD_HOLD = 3000; // Hold spread state for 3s
const COLLAPSE_HOLD = 500; // Hold collapsed state for 0.5s

/**
 * CustomTrainingSection - Train custom styles feature showcase
 * Animation: spread (3s) → collapse → hold (0.5s) → spread + image change → loop
 */
export function CustomTrainingSection() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [setIndex, setSetIndex] = useState(0);

  // Current images based on set index
  const currentInputs = INPUT_IMAGE_SETS[setIndex];
  const currentOutput = OUTPUT_IMAGES[setIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const runAnimation = () => {
      // Step 1: Collapse cards
      setIsCollapsed(true);

      // Step 2: After collapse hold, spread out + change ALL images
      timeout = setTimeout(() => {
        setIsCollapsed(false);
        setSetIndex((i) => (i + 1) % INPUT_IMAGE_SETS.length);

        // Step 3: After spread hold, start next cycle
        timeout = setTimeout(runAnimation, SPREAD_HOLD);
      }, COLLAPSE_HOLD);
    };

    // Initial delay before first animation
    timeout = setTimeout(runAnimation, SPREAD_HOLD);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="section-container mx-auto flex w-full max-w-2xl flex-col items-center gap-8 py-16 text-center md:py-24">
      {/* Heading */}
      <p className="max-w-sm text-2xl font-medium leading-[130%] tracking-[-0.02em] text-pretty">
        From banned accounts to scaling campaigns in days
      </p>

      {/* Cards Container */}
      <div className="relative flex w-full flex-col items-center gap-4 md:flex-row">
        {/* Input Card - Animated Stacked Images */}
        <div className="border-primary-1000/5 z-[3] flex min-h-[340px] w-full max-w-[304px] flex-col items-center justify-center gap-4 rounded-3xl border bg-[#fafafa] p-11 sm:w-1/2">
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-28 w-20">
              {/* Back card - left (collapses to center) */}
              <div
                className={`absolute top-0 h-28 w-20 overflow-hidden rounded-2xl border-4 border-white shadow-xl transition-all duration-500 ease-out ${
                  isCollapsed
                    ? "translate-x-0 translate-y-0 rotate-0"
                    : "-translate-x-14 -translate-y-3 -rotate-12"
                }`}
              >
                <div
                  className={`h-full w-full bg-cover bg-center transition-all duration-300 ${
                    isCollapsed ? "blur-sm grayscale" : ""
                  }`}
                  style={{ backgroundImage: `url('${currentInputs[0]}')` }}
                />
              </div>
              {/* Back card - right (collapses to center) */}
              <div
                className={`absolute top-0 h-28 w-20 overflow-hidden rounded-2xl border-4 border-white shadow-xl transition-all duration-500 ease-out ${
                  isCollapsed
                    ? "translate-x-0 translate-y-0 rotate-0"
                    : "translate-x-16 -translate-y-2 rotate-12"
                }`}
              >
                <div
                  className={`h-full w-full bg-cover bg-center transition-all duration-300 ${
                    isCollapsed ? "blur-sm grayscale" : ""
                  }`}
                  style={{ backgroundImage: `url('${currentInputs[1]}')` }}
                />
              </div>
              {/* Front card - center (always visible) */}
              <div className="absolute top-0 h-28 w-20 overflow-hidden rounded-2xl border-4 border-white shadow-xl">
                <div
                  className={`h-full w-full bg-cover bg-center transition-all duration-300 ${
                    isCollapsed ? "blur-sm grayscale" : ""
                  }`}
                  style={{ backgroundImage: `url('${currentInputs[2]}')` }}
                />
              </div>
            </div>
          </div>
          <p className="pt-4 text-sm font-medium leading-4 text-pretty">
            Launch multiple campaigns with our verified ad accounts and watch
            your results grow
          </p>
        </div>

        {/* Arrow between cards */}
        <ArrowIcon className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-[calc(50%-12px)] rotate-90 drop-shadow-xl md:-translate-x-[calc(50%-12px)] md:-translate-y-1/2 md:rotate-0" />

        {/* Output Card - Result Image (changes on collapse) */}
        <div className="relative z-[1] min-h-[340px] w-full max-w-[304px] overflow-hidden rounded-3xl border-transparent bg-[#fafafa] sm:w-1/2">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              {/* Stack all images, crossfade between them */}
              {OUTPUT_IMAGES.map((src, idx) => (
                <Image
                  key={src}
                  src={src}
                  alt="AI generated result"
                  loading={idx === 0 ? "eager" : "lazy"}
                  fill
                  sizes="304px"
                  className={`absolute inset-0 object-cover transition-opacity duration-500 ease-out ${
                    idx === setIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <GradientButton
        as="link"
        href="/products"
        variant="primary"
        className="h-[44px] rounded-full px-6"
      >
        Start Scaling
      </GradientButton>
    </div>
  );
}
