"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { FeatureCard } from "./feature-card";

// Feature cards data matching Krea's landing page - 5 cards total
// All cards use Krea1Logo at top for now (badges can be added later)
const features = [
  {
    badge: "Krea 1",
    imageSrc: "https://s.krea.ai/landingPhotorealExamplePortrait.webp",
    prompt: "Cinematic photo of a person in a linen jacket",
  },
  {
    badge: "Veo 3",
    imageSrc:
      "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/96c1ff6b6334070fdd26fc37f8a5d1d6/thumbnails/thumbnail.jpg?time=&height=600",
    videoSrc:
      "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/96c1ff6b6334070fdd26fc37f8a5d1d6/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fz5oh80x9qirexi3.cloudflarestream.com%2F96c1ff6b6334070fdd26fc37f8a5d1d6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    prompt: "An animated capybara talking about Krea.ai",
    actionLabel: "Generate video",
  },
  {
    badge: "Topaz Upscaler",
    imageSrc: "https://s.krea.ai/landingEnhancerExampleSwordBloomCentered.webp",
    isUpscaler: true,
    actionLabel: "Upscale image",
  },
  {
    badge: "Hailuo",
    imageSrc:
      "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/25ea2f5507c04b1f4d5f1fa6dda573b6/thumbnails/thumbnail.jpg?time=&height=600",
    videoSrc:
      "https://customer-fz5oh80x9qirexi3.cloudflarestream.com/25ea2f5507c04b1f4d5f1fa6dda573b6/iframe?muted=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-fz5oh80x9qirexi3.cloudflarestream.com%2F25ea2f5507c04b1f4d5f1fa6dda573b6%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
    prompt: "Advertising sandwich with exploding layers",
    actionLabel: "Generate video",
  },
  {
    badge: "Krea 1",
    imageSrc: "https://s.krea.ai/landingPageTruckKrea1.webp",
    prompt: "Pick up truck with sunset",
  },
];

export function FeatureCards() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when section enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering (animation plays once)
          observer.unobserve(entry.target);
        }
      },
      {
        // Trigger when 10% of section is visible
        threshold: 0.1,
        // Start animation slightly before section enters viewport
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/*
        Carousel layout matching Krea's design:
        - Container: max-w-s2xl (1536px) centered
        - Left margin: 64px - cards start here
        - Cards bleed past right edge - "peek" effect showing 3.5 cards
        - Section has overflow-hidden to prevent horizontal scroll on page
        - Scroll-triggered slide-up animation using translate3d for GPU acceleration
      */}
      <div
        className="max-w-s2xl mx-auto"
        style={{
          // GPU-accelerated transform for smooth animation
          transform: isVisible
            ? "translate3d(0px, 0px, 0px)"
            : "translate3d(0px, 80px, 0px)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out",
          willChange: "transform, opacity",
        }}
      >
        {/* Scroll container with left margin, cards bleed right */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex gap-6 md:gap-10 overflow-x-auto",
            "scroll-smooth",
            "no-scrollbar",
            // Left margin only - right side bleeds
            "ml-5 md:ml-16",
            // Padding right for scroll end spacing
            "pr-5 md:pr-16"
          )}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              badge={feature.badge}
              imageSrc={feature.imageSrc}
              videoSrc={feature.videoSrc}
              prompt={feature.prompt}
              actionLabel={feature.actionLabel}
              isUpscaler={feature.isUpscaler}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
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
