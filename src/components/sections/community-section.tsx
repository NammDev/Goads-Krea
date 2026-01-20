import Image from "next/image";
import { GradientButton } from "@/components/ui/gradient-button";

/**
 * CommunitySection - GoAds community showcase
 * Features: Skewed background image, stats columns, CTA button
 */
export function CommunitySection() {
  return (
    <div className="section-container max-w-s2xl relative flex w-full justify-center">
      <div
        className="relative flex min-w-full flex-col gap-16 overflow-hidden rounded-3xl bg-[#f2f2f2] p-8 md:flex-row md:p-12 lg:gap-16 lg:p-16"
        style={{ perspective: "1000px" }}
      >
        {/* Skewed background image */}
        <div
          className="absolute right-[-1000px] bottom-[-650px] z-0 -rotate-z-30 skew-x-25 overflow-hidden md:right-[-1000px] md:bottom-[-600px] lg:right-[-900px] lg:bottom-[-600px] xl:right-[-800px] xl:bottom-[-600px]"
          style={{ height: "1065.5px", width: "1074px" }}
        >
          <div className="relative h-full w-full">
            <Image
              src="https://s.krea.ai/image-page/curated-styles.webp"
              alt="GoAds community members and advertisers"
              loading="lazy"
              fill
              sizes="1074px"
              className="z-10 object-cover opacity-100 transition-opacity duration-400 ease-out"
            />
          </div>
        </div>

        {/* Stats columns */}
        <div className="z-1 flex w-full flex-col gap-8 md:w-2/3 md:flex-row md:items-center">
          {/* Telegram members */}
          <div className="flex flex-col justify-start">
            <p className="text-2xl font-medium md:text-xl lg:text-2xl">
              Telegram Members
            </p>
            <p className="text-[40px] font-medium md:text-3xl lg:text-[40px]">
              200+
            </p>
          </div>

          {/* Divider - mobile horizontal */}
          <hr className="border-primary-1000/5 md:hidden" />
          {/* Divider - desktop vertical */}
          <hr className="border-primary-1000/5 hidden md:block md:h-full md:w-px md:border-t-0 md:border-l" />

          {/* Active advertisers */}
          <div className="flex flex-col justify-start">
            <p className="text-2xl font-medium md:text-xl lg:text-2xl">
              Active Advertisers
            </p>
            <p className="text-[40px] font-medium tracking-[0.4px] md:text-3xl lg:text-[40px]">
              500+
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex w-full items-center justify-start pt-12 md:w-1/3 md:justify-end md:pt-0">
          <GradientButton
            as="link"
            href="/products"
            variant="tertiary"
            className="h-[44px] w-full max-w-[340px] px-6 text-sm font-medium sm:min-w-fit"
          >
            Join Our Telegram
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
