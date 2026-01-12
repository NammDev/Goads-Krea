"use client";

import { useState, useRef, useEffect } from "react";
import { UseCaseItem } from "./use-case-item";
import { SectionHeader } from "@/components/ui/section-header";

/** Use case data structure */
interface UseCase {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  videoSrc: string;
}

/** Use cases data - GoAds use cases */
const USE_CASES: UseCase[] = [
  {
    id: "ecommerce-scaling",
    title: "E-commerce Scaling",
    description:
      "From dropshipping to established brands — the Meta infrastructure you need to scale profitably. Stable accounts, verified BMs, and support that understands your urgency.",
    ctaText: "Get Started",
    ctaHref: "/products",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "agency-operations",
    title: "Agency Operations",
    description:
      "Reliable wholesale partner for your client accounts. Consistent quality, volume capacity, and the support your team needs.",
    ctaText: "Get Started",
    ctaHref: "/products",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "affiliate-performance",
    title: "Affiliate & Performance",
    description:
      "The infrastructure that survives aggressive campaigns. Stable assets, fast replacement, and no judgment on your vertical.",
    ctaText: "Get Started",
    ctaHref: "/products",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
];

/** Use Cases Section - Feature showcase with video preview */
export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Handle video time update for progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setVideoProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [activeIndex]);

  // Auto-advance to next use case when video ends
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      setActiveIndex((prev) => (prev + 1) % USE_CASES.length);
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  // Scroll list indicators
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleScroll = () => {
      setShowTopFade(list.scrollTop > 10);
      setShowBottomFade(
        list.scrollTop < list.scrollHeight - list.clientHeight - 10
      );
    };

    list.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => list.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-container pt-24 md:pt-40">
      <SectionHeader
        subtitle="Use cases"
        title="Built for How You Work"
        className="max-w-3xl"
      />

      {/* Content Area */}
      <div className="mt-11 flex w-full flex-col-reverse items-end gap-8 lg:flex-row">
        {/* Use Case List */}
        <div className="relative z-0 flex-1">
          <ul
            ref={listRef}
            className="no-scrollbar space-y-3 lg:max-h-[42rem] lg:overflow-y-scroll"
          >
            {USE_CASES.map((useCase, index) => (
              <UseCaseItem
                key={useCase.id}
                title={useCase.title}
                description={useCase.description}
                ctaText={useCase.ctaText}
                ctaHref={useCase.ctaHref}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </ul>

          {/* Top fade gradient */}
          <div
            className={`from-primary-0 pointer-events-none absolute top-0 right-0 -left-4 z-10 hidden h-14 bg-gradient-to-b to-transparent transition-opacity duration-200 lg:block ${
              showTopFade ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Bottom fade gradient */}
          <div
            className={`from-primary-0 pointer-events-none absolute right-0 bottom-0 -left-4 z-10 hidden h-14 bg-gradient-to-t to-transparent transition-opacity duration-200 lg:block ${
              showBottomFade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Video Preview */}
        <div className="sticky top-17 z-1 mb-auto w-full flex-1 sm:static lg:w-auto">
          <div className="bg-primary-100 relative aspect-video overflow-hidden rounded-lg shadow-sm">
            {/* Top gradient overlay */}
            <div
              className="absolute top-0 left-0 z-10 h-[25%] w-full"
              style={{
                background:
                  "linear-gradient(rgba(50, 50, 50, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            {/* Progress bar */}
            <div className="bg-primary-200/40 absolute top-1.5 right-1.5 left-1.5 z-20 h-1 overflow-hidden rounded-full">
              <div
                className="bg-primary-0 h-full rounded-full transition-[width] ease-linear"
                style={{
                  width: `${videoProgress}%`,
                  transitionDuration: "100ms",
                }}
              />
            </div>

            {/* Video */}
            <video
              ref={videoRef}
              key={USE_CASES[activeIndex].videoSrc}
              autoPlay
              muted
              playsInline
              disablePictureInPicture
              className="relative z-0 h-full w-full"
              preload="metadata"
              src={USE_CASES[activeIndex].videoSrc}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
