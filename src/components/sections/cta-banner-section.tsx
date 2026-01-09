import { GradientButton } from "@/components/ui/gradient-button";

/**
 * CtaBannerSection - Full-width CTA banner with cross pattern background
 * Dark background with ellipse gradient overlay and centered content
 */
export function CtaBannerSection() {
  return (
    <section className="cross-pattern bg-primary-1000 relative flex justify-center overflow-hidden py-20">
      {/* Ellipse gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="ellipse-gradient max-w-s2xl absolute top-1/2 left-1/2 h-[100vh] w-[150vw] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="selection:bg-primary-0! selection:text-primary-1000! relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 px-5 text-center md:px-16">
        <h2 className="text-primary-0 text-[40px] font-medium tracking-[-0.8px]">
          Get started for free
        </h2>
        <p className="text-primary-400 mb-10 text-lg leading-normal tracking-[-0.32px] text-pretty">
          Try out Enhancer for your architectural renders
        </p>
        <GradientButton as="a" href="/enhancer" variant="tertiary">
          Start generating
        </GradientButton>
      </div>
    </section>
  );
}
