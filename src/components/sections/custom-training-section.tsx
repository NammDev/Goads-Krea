import { GradientButton } from "@/components/ui/gradient-button";

/**
 * ArrowIcon - Stylized arrow between cards
 * Source: Krea design system
 */
function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="67"
      viewBox="0 0 99 67"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_di_arrow)">
        <path
          d="M56.8931 40.8799L8 48.5336V24.7668L53.9359 18.1201L51.3729 4L91 24.7668L59.2589 55L56.8931 40.8799Z"
          fill="white"
          stroke="rgba(0,0,0,0.025)"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_arrow"
          x="0"
          y="0"
          width="99"
          height="67"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

/** Sample images for the stacked cards */
const SAMPLE_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=160&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=160&fit=crop",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=128&h=160&fit=crop",
];

/** Output image */
const OUTPUT_IMAGE =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=512&h=680&fit=crop";

/**
 * CustomTrainingSection - Train custom styles feature showcase
 * Design: Krea-inspired with stacked image cards and arrow transformation
 */
export function CustomTrainingSection() {
  return (
    <div className="section-container mx-auto flex w-full max-w-2xl flex-col items-center gap-8 py-16 text-center md:py-24">
      {/* Heading */}
      <p className="max-w-sm text-2xl font-medium leading-[130%] tracking-[-0.02em] text-pretty">
        Or train custom styles and characters with your own images
      </p>

      {/* Cards Container */}
      <div className="relative flex w-full flex-col items-center gap-4 md:flex-row">
        {/* Input Card - Stacked Images */}
        <div className="border-primary-1000/5 z-[3] flex min-h-[340px] w-full max-w-[304px] flex-col items-center justify-center gap-4 rounded-3xl border bg-[#fafafa] p-11 sm:w-1/2">
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-28 w-20">
              {/* Back card - left */}
              <div className="absolute top-0 h-28 w-20 -translate-x-14 -translate-y-3 -rotate-12 rounded-2xl border-4 border-white bg-black/25 shadow-xl backdrop-blur-md transition-transform duration-500 ease-out">
                <div
                  className="h-full w-full rounded-xl bg-cover bg-center opacity-100 duration-300"
                  style={{ backgroundImage: `url('${SAMPLE_IMAGES[0]}')` }}
                />
              </div>
              {/* Back card - right */}
              <div className="absolute top-0 h-28 w-20 -translate-y-2 translate-x-16 rotate-12 rounded-2xl border-4 border-white bg-black/25 shadow-xl backdrop-blur-md transition-transform duration-500 ease-out">
                <div
                  className="h-full w-full rounded-xl bg-cover bg-center opacity-100 duration-300"
                  style={{ backgroundImage: `url('${SAMPLE_IMAGES[1]}')` }}
                />
              </div>
              {/* Front card - center */}
              <div className="absolute top-0 h-28 w-20 rounded-2xl border-4 border-white bg-black/25 shadow-xl backdrop-blur-md transition-transform duration-500 ease-out">
                <div
                  className="h-full w-full rounded-xl bg-cover bg-center opacity-100 duration-300"
                  style={{ backgroundImage: `url('${SAMPLE_IMAGES[2]}')` }}
                />
              </div>
            </div>
          </div>
          <p className="pt-4 text-sm font-medium leading-4 text-pretty">
            Just with 4-5 selfies you can have a model that can put you in any
            environment or situation
          </p>
        </div>

        {/* Arrow between cards */}
        <ArrowIcon className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-[calc(50%-12px)] rotate-90 drop-shadow-xl md:-translate-x-[calc(50%-12px)] md:-translate-y-1/2 md:rotate-0" />

        {/* Output Card - Result Image */}
        <div className="relative z-[1] min-h-[340px] w-full max-w-[304px] overflow-hidden rounded-3xl border-transparent bg-[#fafafa] sm:w-1/2">
          <div className="absolute inset-0">
            <div className="relative h-full w-full object-contain">
              <div className="bg-primary-100 absolute inset-0 -z-10 h-full w-full animate-pulse opacity-0 transition-opacity duration-300 ease-out" />
              <img
                src={OUTPUT_IMAGE}
                alt="AI generated result"
                loading="lazy"
                decoding="async"
                className="z-10 h-full w-full object-cover opacity-100 transition-opacity duration-400 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <GradientButton
        as="link"
        href="/products"
        variant="primary"
        className="h-[44px] rounded-full px-6"
      >
        Train your own style
      </GradientButton>
    </div>
  );
}
