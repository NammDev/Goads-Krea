import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";

/**
 * CtaBannerSection - Full-width CTA banner with cross pattern background
 * Dark background with ellipse gradient overlay and floating images
 */
export function CtaBannerSection() {
  return (
    <section className="cross-pattern-dark relative flex justify-center overflow-hidden py-20">
      {/* Floating images background - blurred decoration */}
      <div className="absolute inset-0 flex h-full w-full items-center justify-center opacity-30 blur-sm">
        <div className="max-w-sxl relative h-[500px] w-full min-w-[500px] md:h-[600px]">
          <div className="absolute top-0 left-0 h-full w-full">
            {/* Top left image */}
            <div className="will-change-transform w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] aspect-square absolute top-10 left-20 rotate-12 overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover select-none"
                  draggable={false}
                  loading="lazy"
                  src="https://s.krea.ai/free-access-img1.webp"
                  alt="Professional architectural render showcasing modern design"
                  fill
                  sizes="130px"
                />
              </div>
            </div>
            {/* Top right image */}
            <div className="will-change-transform w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] aspect-square absolute top-10 right-10 -rotate-12 overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover select-none"
                  draggable={false}
                  loading="lazy"
                  src="https://s.krea.ai/free-access-img2.webp"
                  alt="Architectural visualization of building exterior"
                  fill
                  sizes="130px"
                />
              </div>
            </div>
            {/* Bottom left image */}
            <div className="will-change-transform w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px] aspect-square absolute bottom-10 left-10 -rotate-[19deg] overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover select-none"
                  draggable={false}
                  loading="lazy"
                  src="https://s.krea.ai/free-access-img3.webp"
                  alt="Interior architectural rendering with natural light"
                  fill
                  sizes="190px"
                />
              </div>
            </div>
            {/* Bottom right image */}
            <div className="will-change-transform w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px] aspect-square absolute bottom-10 right-10 rotate-[11deg] overflow-hidden rounded-xl shadow-lg">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover select-none"
                  draggable={false}
                  loading="lazy"
                  src="https://s.krea.ai/free-access-img4.webp"
                  alt="Landscape architecture visualization"
                  fill
                  sizes="130px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ellipse gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ellipse-gradient max-w-s2xl absolute top-1/2 left-1/2 h-[100vh] w-[150vw] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="selection:bg-primary-0! selection:text-primary-1000! relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-16">
        <h2 className="text-primary-0 text-[40px] font-medium tracking-[-0.8px]">
          Stop Worrying About Bans.
          <br />
          Start Scaling Today.
        </h2>
        <p className="text-primary-400 mb-10 text-lg leading-normal tracking-[-0.32px] text-pretty">
          7-day warranty. Real support. Agency-tested quality.
        </p>
        <GradientButton as="a" href="/products" variant="tertiary">
          Get Started
        </GradientButton>
      </div>
    </section>
  );
}
