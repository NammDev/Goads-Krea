"use client";

import { useEffect, useState } from "react";
import { ModelMarquee } from "@/components/ui/model-marquee";

// Rotating words for the 3D cylinder animation - Platform names
const ROTATING_WORDS = ["Meta", "TikTok", "Google", "Snapchat", "Bing"];

/** 3D Rotating Cylinder Text Component */
function RotatingCylinder() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalWords = ROTATING_WORDS.length;
  const anglePerWord = 360 / totalWords;

  // Find the longest word for spacing
  const longestWord = ROTATING_WORDS.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalWords);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalWords]);

  const rotation = currentIndex * anglePerWord;

  return (
    <span className="relative z-0 inline-flex align-bottom whitespace-nowrap">
      <span
        className="relative inline-block"
        style={
          {
            "--cylinder-rotation": `${rotation}deg`,
            "--cylinder-face": "1.5em",
          } as React.CSSProperties
        }
      >
        {/* 3D Container */}
        <span
          className="absolute top-0 z-0 inline-block h-full"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <span
            className="relative z-10 inline-block h-full w-full"
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(calc(var(--cylinder-face) * -1))",
            }}
          >
            {ROTATING_WORDS.map((word, index) => (
              <span
                key={word}
                className="absolute block transition-transform duration-700 ease-in-out"
                style={{
                  transform: `rotateX(calc(${index * anglePerWord}deg - var(--cylinder-rotation))) translateZ(var(--cylinder-face))`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </span>

        {/* Invisible spacer for width */}
        <span className="inline-block">
          <span className="inline-block opacity-0">{longestWord}</span>
        </span>

        {/* Gradient mask for fade effect */}
        <span
          className="absolute top-[50%] left-0 z-50 block translate-y-[-50%] pointer-events-none"
          style={{
            height: "calc(var(--cylinder-face) * 2)",
            background:
              "linear-gradient(180deg, white 20%, rgba(255, 255, 255, 0) 33%, rgba(255, 255, 255, 0) 66%, white 80%)",
          }}
        >
          <span className="opacity-0">{longestWord}</span>
        </span>
      </span>

      {/* "assets." text - fixed position, no dynamic offset */}
      <span className="inline-block ml-3">
        assets.
      </span>
    </span>
  );
}

/** Product Showcase Section with 3D rotating title and marquee */
export function ProductShowcaseSection() {
  return (
    <section className="section-container overflow-hidden pt-24">
      {/* Large heading with 3D rotating cylinder */}
      <h2 className="leading-[1.2em] font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="relative z-20 inline-block">
          We&apos;re the official partner of
        </span>{" "}
        <RotatingCylinder />
        <br />
        <span className="relative z-20 inline-block">leading digital platforms</span>
      </h2>

      {/* Marquee Container */}
      <div className="mt-12">
        <ModelMarquee />
      </div>
    </section>
  );
}
