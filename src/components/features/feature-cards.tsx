"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { FeatureCard } from "./feature-card";

// Feature cards data matching Krea's landing page - 5 cards total
const features = [
  {
    badge: "Krea 1",
    badgeIcon: "krea" as const,
    imageSrc: "https://s.krea.ai/landingPhotorealExamplePortrait.webp",
    prompt: "Cinematic photo of a person in a linen jacket",
  },
  {
    badge: "Veo 3",
    badgeIcon: "veo" as const,
    imageSrc: "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/96c1ff6b6334070fdd26fc37f8a5d1d6/thumbnails/thumbnail.jpg?time=&height=600",
    videoSrc: "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/96c1ff6b6334070fdd26fc37f8a5d1d6/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fz5oh80x9qirexi3.cloudflarestream.com%2F96c1ff6b6334070fdd26fc37f8a5d1d6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    prompt: "An animated capybara talking about Krea.ai",
    actionLabel: "Generate video",
    isVideo: true,
  },
  {
    badge: "Topaz Upscaler",
    badgeIcon: "topaz" as const,
    imageSrc: "https://s.krea.ai/landingEnhancerExampleSwordBloomCentered.webp",
    isUpscaler: true,
  },
  {
    badge: "Hailuo",
    badgeIcon: "hailuo" as const,
    imageSrc: "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/25ea2f5507c04b1f4d5f1fa6dda573b6/thumbnails/thumbnail.jpg?time=&height=600",
    videoSrc: "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/25ea2f5507c04b1f4d5f1fa6dda573b6/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fz5oh80x9qirexi3.cloudflarestream.com%2F25ea2f5507c04b1f4d5f1fa6dda573b6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    prompt: "Advertising sandwich with exploding layers",
    isVideo: true,
  },
  {
    badge: "Krea 1",
    badgeIcon: "krea" as const,
    imageSrc: "https://s.krea.ai/landingPageTruckKrea1.webp",
    prompt: "Pick up truck with sunset",
  },
];

export function FeatureCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    // Calculate scroll amount: roughly half the visible area (1.5 cards worth)
    // This ensures 2 clicks to go from start to end with 5 cards showing 3.5
    const scrollAmount = container.clientWidth * 0.43;
    const newScrollLeft =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);
    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-white">
      {/* Outer container: max-w-7xl mx-auto provides ~132px margin at 1440px */}
      <div className="max-w-s2xl mx-auto">
        {/* Inner container: mx-5 md:mx-16 adds additional 20px/64px margin */}
        {/* Total margin at 1440px desktop: 132px + 64px = 196px from edge */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex gap-6 md:gap-10 overflow-x-auto",
            "scroll-smooth",
            "no-scrollbar",
            "mx-5 md:mx-16"
          )}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              badge={feature.badge}
              badgeIcon={feature.badgeIcon}
              imageSrc={feature.imageSrc}
              videoSrc={feature.videoSrc}
              prompt={feature.prompt}
              actionLabel={feature.actionLabel}
              isUpscaler={feature.isUpscaler}
              isVideo={feature.isVideo}
            />
          ))}
        </div>

        {/* Navigation Arrows - Pixel-perfect matching Krea's design */}
        <div className="mt-10 flex justify-end px-5 md:px-16">
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              name="Move carousel to the left"
              className={cn(
                "bg-primary-200 flex h-12 w-12 items-center justify-center rounded-full",
                "transition-opacity duration-300 ease-in-out",
                "hover:opacity-85 text-black cursor-pointer"
              )}
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={() => scroll("right")}
              name="Move carousel to the right"
              className={cn(
                "bg-primary-200 flex h-12 w-12 items-center justify-center rounded-full",
                "transition-opacity duration-300 ease-in-out",
                "hover:opacity-75 text-black cursor-pointer"
              )}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
