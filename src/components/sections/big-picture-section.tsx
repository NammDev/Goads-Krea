"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

/** Slide data for the carousel */
interface SlideData {
  image: string;
  title: string;
}

/** Carousel slides configuration */
const SLIDES: readonly SlideData[] = [
  {
    image: "https://s.krea.ai/krea-1/skinTexture.webp",
    title: "Photorealistic skin textures and color science",
  },
  {
    image: "https://s.krea.ai/krea-1/cameraAngles.webp",
    title: "Dynamic camera angles and perspectives",
  },
  {
    image: "https://s.krea.ai/krea-1/expressiveStyles.webp",
    title: "Expressive artistic styles and aesthetics",
  },
  {
    image: "https://s.krea.ai/krea-1/carCloseup.webp",
    title: "Discover new perspectives with extreme camera angles",
  },
  {
    image: "https://s.krea.ai/krea-1/swordBloom.webp",
    title: "Perfect imperfection. Grain, bloom, blur",
  },
  {
    image: "https://s.krea.ai/krea-1/catSf.webp",
    title: "Engineered for high visual complexity",
  },
  {
    image: "https://s.krea.ai/krea-1/guitarPlayer.webp",
    title: "Dreamy, vivid, weird. Artistic and expressive rendering",
  },
  {
    image: "https://s.krea.ai/krea-1/catSleeping.webp",
    title: "Dali paintings or cat memes. Ultra realistic surrealism",
  },
  {
    image: "https://s.krea.ai/krea-1/carIllu.webp",
    title: "Simple prompts, strong visuals",
  },
] as const;

/** Arrow icon for navigation buttons */
function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  if (direction === "left") {
    return (
      <svg
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="17"
        className="translate-x-[-1px]"
      >
        <path
          d="M0.370118 8.8457C0.370118 8.66992 0.405274 8.50293 0.475587 8.34473C0.54004 8.19238 0.645509 8.0459 0.791993 7.90527L7.55078 1.28711C7.7793 1.06445 8.05762 0.953125 8.38574 0.953125C8.59668 0.953125 8.79297 1.00586 8.97461 1.11133C9.15625 1.2168 9.30274 1.35742 9.41406 1.5332C9.51953 1.70898 9.57227 1.9082 9.57227 2.13086C9.57227 2.45312 9.44922 2.74023 9.20313 2.99219L3.18262 8.8457L9.20313 14.6992C9.44922 14.9453 9.57227 15.2324 9.57227 15.5605C9.57227 15.7773 9.51953 15.9736 9.41406 16.1494C9.30273 16.3311 9.15625 16.4746 8.97461 16.5801C8.79297 16.6855 8.59668 16.7383 8.38574 16.7383C8.05762 16.7383 7.7793 16.627 7.55078 16.4043L0.791993 9.78613C0.651368 9.64551 0.545899 9.49902 0.475587 9.34668C0.405274 9.19433 0.370118 9.02734 0.370118 8.8457Z"
          fill="black"
        />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="17"
      className="translate-x-[1px]"
    >
      <path
        d="M9.62988 8.1543C9.62988 8.33008 9.59473 8.49707 9.52441 8.65527C9.45996 8.80762 9.35449 8.9541 9.20801 9.09473L2.44922 15.7129C2.2207 15.9355 1.94238 16.0469 1.61426 16.0469C1.40332 16.0469 1.20703 15.9941 1.02539 15.8887C0.84375 15.7832 0.697266 15.6426 0.585938 15.4668C0.480469 15.291 0.427734 15.0918 0.427734 14.8691C0.427734 14.5469 0.550781 14.2598 0.796875 14.0078L6.81738 8.1543L0.796875 2.30078C0.550781 2.05469 0.427734 1.76758 0.427734 1.43945C0.427734 1.22266 0.480469 1.02637 0.585938 0.850586C0.697266 0.668945 0.84375 0.525391 1.02539 0.419922C1.20703 0.314453 1.40332 0.261719 1.61426 0.261719C1.94238 0.261719 2.2207 0.373047 2.44922 0.595703L9.20801 7.21387C9.34863 7.35449 9.4541 7.50098 9.52441 7.65332C9.59473 7.80566 9.62988 7.97266 9.62988 8.1543Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Big Picture Section - Krea 1 model showcase
 * Features: Embla carousel with progress bar and navigation
 */
export function BigPictureSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update selected index and progress on scroll
  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Calculate progress for the vertical bar (based on selected slide)
  const progressPercent = (selectedIndex + 1) / SLIDES.length;

  return (
    <section className="section-container flex flex-col gap-12 md:gap-16">
      {/* Header */}
      <div className="flex w-full flex-col gap-8 pt-24 md:gap-12 md:pt-40 lg:flex-row lg:items-end lg:gap-10">
        <SectionHeader
          subtitle="Powerful proprietary models"
          title="Krea 1 - Our ultra-realistic image model"
          size="large"
          darkSubtitle
        />
        <p className="text-primary-500 max-w-2xl text-lg font-normal md:text-xl lg:text-end">
          Krea 1 is our proprietary image model. Unlike traditional models, it offers accurate skin
          textures, dynamic camera angles, and expressive styles. Discover an exceptionally artistic
          latent space.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="embla bg-primary-200 relative h-[30rem] w-full overflow-hidden rounded-3xl">
        {/* Embla Viewport */}
        <div className="embla__viewport absolute z-0 h-full w-full" ref={emblaRef}>
          <div className="embla__container relative h-full w-full">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.image}
                className={cn(
                  "embla__slide absolute top-0 left-0 h-full w-full transition-opacity duration-300",
                  index === selectedIndex
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                )}
                style={{
                  transform: `translateX(${(index - selectedIndex) * 100}%)`,
                }}
              >
                {/* Slide Image */}
                <img
                  className="embla__slide__img relative z-0 h-full w-full object-cover"
                  alt={slide.title}
                  loading="lazy"
                  src={slide.image}
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute bottom-0 left-0 h-[50%] w-full"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
                  }}
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 z-10 flex w-full p-5 md:p-12">
                  <p className="text-primary-0 -tracking-snug max-w-sm text-2xl font-semibold md:text-3xl">
                    {slide.title}
                  </p>
                  <div className="block w-32 shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute top-0 left-0 z-20 flex h-full w-full flex-col p-5 md:p-12">
          {/* Progress Bar */}
          <div className="flex flex-1 flex-col md:justify-center">
            <div className="embla__progress bg-primary-500 relative h-24 w-1.5 overflow-hidden rounded-full">
              <div
                className="embla__progress__bar bg-primary-0 absolute bottom-0 left-0 h-full w-full origin-bottom transition-transform duration-300"
                style={{ transform: `scaleY(${progressPercent})` }}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <div />
            <div className="flex gap-3">
              <button
                name="Show previous slide"
                onClick={scrollPrev}
                className="bg-primary-200 hover-supported:hover:opacity-85 flex h-12 w-12 items-center justify-center rounded-full transition-opacity duration-300 ease-in-out"
                aria-label="Previous slide"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                name="Show next slide"
                onClick={scrollNext}
                className="bg-primary-200 hover-supported:hover:opacity-75 flex h-12 w-12 items-center justify-center rounded-full transition-opacity duration-300 ease-in-out"
                aria-label="Next slide"
              >
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
