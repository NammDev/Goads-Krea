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

/** Use cases data - matching krea.ai */
const USE_CASES: UseCase[] = [
  {
    id: "ai-image-generation",
    title: "AI Image Generation",
    description:
      "Generate images with a simple text description. Control your compositions precisely with over 1000 styles, 20 different models, native 4K, image prompts, and image style transfer through exceptionally simple interfaces. Krea offers the industry's fastest generation speeds at 3s for a 1024px Flux image at FP16.",
    ctaText: "Try AI Image Generation",
    ctaHref: "/apps/image",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "image-upscaling",
    title: "Image Upscaling",
    description:
      "Enhance and upscale images up to a 22K resolution. Make blurry photos razor-sharp, turn simple 3D renders into photo-like architecture visualizations, restore old film scans, or add ultra-fine skin textures to your portraits. A single subscription unlocks 7 different upscaling models, including Topaz Photo and Topaz Gigapixel.",
    ctaText: "Try Image Upscaling",
    ctaHref: "/apps/upscale",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "real-time-rendering",
    title: "Real-time rendering",
    description:
      "Krea is the market leader in realtime image generation for Creatives. Turn easy-to-control primitives into photorealistic images in less than 50ms. Or try out the revolutionary Video Realtime with full frame consistency.",
    ctaText: "Try Real-time Rendering",
    ctaHref: "/apps/realtime",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "ai-video-generation",
    title: "AI Video Generation",
    description:
      "Access all of the most powerful AI video models including Veo 3, Kling, Hailuo, Wan, and Runway. Generate viral videos for social media, animate static images, or add new details to existing videos. Krea offers the world's most intuitive AI video generation interface.",
    ctaText: "Try AI Video Generation",
    ctaHref: "/video",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "image-editing",
    title: "Image Editing",
    description:
      "Edit any image with AI-powered tools. Remove backgrounds, extend images, inpaint objects, or transform styles. Our intuitive editor combines traditional editing tools with cutting-edge AI capabilities for seamless creative workflows.",
    ctaText: "Try Image Editing",
    ctaHref: "/apps/edit",
    videoSrc: "https://s.krea.ai/videoToolDemo_lowBitrate.mp4",
  },
  {
    id: "3d-generation",
    title: "3D Generation",
    description:
      "Generate 3D models from text descriptions or images. Create game assets, product visualizations, or architectural models with state-of-the-art AI. Export in standard formats compatible with all major 3D software.",
    ctaText: "Try 3D Generation",
    ctaHref: "/apps/3d",
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
        title="Generate or edit high quality images, videos, and 3D objects with AI"
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
