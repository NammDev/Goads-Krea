"use client";

import { useState } from "react";
import Image from "next/image";

/** Style data for selector buttons */
interface StyleOption {
  id: string;
  name: string;
  logo: string;
  images: string[];
}

/** GoAds blog categories configuration */
const STYLES: StyleOption[] = [
  {
    id: "getting-started-1",
    name: "Getting Started",
    logo: "https://s.krea.ai/image-page/styles/v2/long-exposure-logo.webp",
    images: [
      "https://s.krea.ai/image-page/styles/v2/long-exposure-cat.webp",
      "https://s.krea.ai/image-page/styles/v2/long-exposure-castle.webp",
      "https://s.krea.ai/image-page/styles/v2/long-exposure-face.webp",
      "https://s.krea.ai/image-page/styles/v2/long-exposure-plane.webp",
    ],
  },
  {
    id: "bm-guides-2",
    name: "BM Guides",
    logo: "https://s.krea.ai/image-page/styles/v2/anime-logo.webp",
    images: [
      "https://s.krea.ai/image-page/styles/v2/anime-cat.webp",
      "https://s.krea.ai/image-page/styles/v2/anime-castle.webp",
      "https://s.krea.ai/image-page/styles/v2/anime-face.webp",
      "https://s.krea.ai/image-page/styles/v2/anime-plane.webp",
    ],
  },
  {
    id: "scaling-tips-3",
    name: "Scaling Tips",
    logo: "https://s.krea.ai/image-page/styles/v2/abstract-sketch-logo.webp",
    images: [
      "https://s.krea.ai/image-page/styles/v2/abstract-sketch-cat.webp",
      "https://s.krea.ai/image-page/styles/v2/abstract-sketch-castle.webp",
      "https://s.krea.ai/image-page/styles/v2/abstract-sketch-face.webp",
      "https://s.krea.ai/image-page/styles/v2/abstract-sketch-plane.webp",
    ],
  },
  {
    id: "policy-updates-4",
    name: "Policy Updates",
    logo: "https://s.krea.ai/image-page/styles/v2/surrealism-logo.webp",
    images: [
      "https://s.krea.ai/image-page/styles/v2/surrealism-cat.webp",
      "https://s.krea.ai/image-page/styles/v2/surrealism-castle.webp",
      "https://s.krea.ai/image-page/styles/v2/surrealism-face.webp",
      "https://s.krea.ai/image-page/styles/v2/surrealism-plane.webp",
    ],
  },
  {
    id: "case-studies-5",
    name: "Case Studies",
    logo: "https://s.krea.ai/image-page/styles/v2/cosmic-splat-logo.webp",
    images: [
      "https://s.krea.ai/image-page/styles/v2/cosmic-splat-cat.webp",
      "https://s.krea.ai/image-page/styles/v2/cosmic-splat-castle.webp",
      "https://s.krea.ai/image-page/styles/v2/cosmic-splat-face.webp",
      "https://s.krea.ai/image-page/styles/v2/cosmic-splat-plane.webp",
    ],
  },
];

/** Image alt texts for accessibility and tooltips */
const IMAGE_ALTS = [
  "BM1 vs BM5: Which Business Manager Do You Need?",
  "5 Signs Your Asset Setup is Wrong",
  "Agency Account Setup Guide (2026)",
  "Meta Policy Updates You Should Know",
];

/** Style image card with tooltip */
function StyleImageCard({
  src,
  alt,
  loading,
}: {
  src: string;
  alt: string;
  loading: "eager" | "lazy";
}) {
  return (
    <div className="relative flex h-[240px] w-full overflow-hidden rounded-lg sm:h-[280px] md:h-[260px] md:w-[160px] lg:h-[338px] lg:w-[226px]">
      <div className="absolute inset-0">
        <div className="relative z-0 h-full w-full object-cover">
          <div className="bg-primary-100 absolute inset-0 -z-10 h-full w-full animate-pulse opacity-0 transition-opacity duration-300 ease-out" />
          <Image
            src={src}
            alt={alt}
            loading={loading}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 160px, 226px"
            className="z-10 object-cover opacity-100 transition-opacity duration-400 ease-out"
          />
        </div>
      </div>
      {/* Info button with tooltip */}
      <div className="group absolute bottom-2.5 left-2.5">
        <button
          type="button"
          data-slot="tooltip-trigger"
          aria-label="Show image description"
          className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black/30 text-sm font-medium text-white backdrop-blur-xs"
        >
          i
        </button>
        {/* Tooltip - Krea pixel-perfect design */}
        <div
          data-slot="tooltip-content"
          className="pointer-events-none absolute bottom-full left-0 z-50 mb-2 min-w-[200px] max-w-sm rounded-xl border border-primary-0/8 bg-[rgba(44,44,44,0.65)] px-4 py-3 text-left text-sm font-medium leading-normal text-primary-0/75 text-balance opacity-0 shadow-[0_-4px_41px_0_rgba(0,0,0,0.25)] backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        >
          {alt}
          {/* Arrow */}
          <div className="absolute top-full left-3 size-2.5 -translate-y-1/2 rotate-45 rounded-[2px] bg-[rgba(44,44,44,0.65)]" />
        </div>
      </div>
    </div>
  );
}

/**
 * BlogsPreviewSection - GoAds blog categories showcase
 * Features: 4-column image grid, category selector buttons, tooltips
 */
export function BlogsPreviewSection() {
  const [activeStyle, setActiveStyle] = useState(STYLES[0].id);
  const currentStyle = STYLES.find((s) => s.id === activeStyle) || STYLES[0];
  const images =
    currentStyle.images.length > 0 ? currentStyle.images : STYLES[0].images;

  return (
    <>
      <div className="max-w-s2xl section-container">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          {/* Header */}
          <h2 className="text-5xl font-medium tracking-[-0.48px] md:text-4xl md:tracking-[-1.12px] lg:text-[56px]">
            Learn to Scale
          </h2>
          <p className="text-2xl font-medium leading-[112%] tracking-[-0.48px] text-pretty">
            Guides from active advertisers.
            <br className="hidden md:block" />
            Tips to grow your campaigns with confidence
          </p>

          {/* Image Grid */}
          <div className="my-8 w-full justify-center sm:w-3/4 md:w-full">
            <div className="grid grid-cols-2 gap-2.5 self-center overflow-hidden md:grid-cols-4">
              {images.map((img, idx) => (
                <StyleImageCard
                  key={idx}
                  src={img}
                  alt={IMAGE_ALTS[idx] || `Style image ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>

          {/* Style Selector Buttons */}
          <div className="hidden w-full max-w-lg justify-between self-center md:flex">
            {STYLES.map((style) => (
              <button
                key={style.id}
                data-style-id={style.id}
                onClick={() => setActiveStyle(style.id)}
                className={`transition-scale flex cursor-pointer flex-col items-center gap-3 p-1 duration-150 ease-out focus-visible:outline-offset-4 active:scale-98 ${
                  activeStyle === style.id ? "opacity-100" : "opacity-50"
                }`}
              >
                <div
                  className={`relative h-[62px] w-[62px] overflow-hidden rounded-[9px] border-2 transition-transform duration-150 ease-out ${
                    activeStyle === style.id
                      ? "border-action -rotate-3"
                      : "rotate-0 border-transparent"
                  }`}
                >
                  <Image
                    className="object-cover"
                    src={style.logo}
                    alt={style.name}
                    fill
                    sizes="62px"
                  />
                </div>
                <p className="text-sm font-medium">{style.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Style Selector - horizontal scroll */}
      <div className="relative flex min-h-32 w-full justify-center md:hidden">
        <div className="scrollbar-hide h-full w-full max-w-xl self-center overflow-x-scroll">
          <div className="flex h-full min-w-[540px] flex-row justify-between gap-3 bg-transparent px-6">
            {STYLES.map((style) => (
              <button
                key={style.id}
                data-style-id={style.id}
                onClick={() => setActiveStyle(style.id)}
                className={`transition-scale flex cursor-pointer flex-col items-center gap-3 p-1 duration-150 ease-out focus-visible:outline-offset-4 active:scale-98 ${
                  activeStyle === style.id ? "opacity-100" : "opacity-50"
                }`}
              >
                <div
                  className={`relative h-[62px] w-[62px] overflow-hidden rounded-[9px] border-2 transition-transform duration-150 ease-out ${
                    activeStyle === style.id
                      ? "border-action -rotate-3"
                      : "rotate-0 border-transparent"
                  }`}
                >
                  <Image
                    className="object-cover"
                    src={style.logo}
                    alt={style.name}
                    fill
                    sizes="62px"
                  />
                </div>
                <p className="text-sm font-medium">{style.name}</p>
              </button>
            ))}
          </div>
        </div>
        {/* Left gradient overlay */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent" />
        {/* Right gradient overlay */}
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
}
