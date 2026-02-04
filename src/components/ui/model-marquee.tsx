"use client";

import Image from "next/image";

/** Model data for the marquee slider */
export interface ModelItem {
  name: string;
  src: string;
}

/** Default items - Partner platform logos */
export const defaultModels: ModelItem[] = [
  { name: "Meta", src: "/images/partners/meta-logo.svg" },
  { name: "Snapchat", src: "/images/partners/snapchat-logo.svg" },
  { name: "Google", src: "/images/partners/google-logo.svg" },
  { name: "Taboola", src: "/images/partners/taboola-logo.svg" },
  { name: "Bing", src: "/images/partners/bing-logo.svg" },
  { name: "TikTok", src: "/images/partners/tiktok-logo.svg" },
];

/** Single model logo with image */
function ModelLogo({ model }: { model: ModelItem }) {
  return (
    <div className="text-primary-700 flex items-center justify-center gap-2.5 text-xl font-medium opacity-65 select-all md:text-2xl">
      <Image src={model.src} alt={model.name} width={120} height={40} className="h-8 md:h-10 w-auto" />
    </div>
  );
}

interface ModelMarqueeProps {
  models?: ModelItem[];
  duration?: string;
}

/** Reusable marquee slider for model logos */
export function ModelMarquee({
  models = defaultModels,
  duration = "32s",
}: ModelMarqueeProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div
          className="models-marquee flex w-full gap-[var(--gap)] overflow-hidden p-2 select-none"
          style={{ "--duration": duration } as React.CSSProperties}
        >
          {/* First set of logos */}
          <div className="flex shrink-0 flex-row items-center gap-[var(--gap)] animate-marquee-left">
            {models.map((model, idx) => (
              <ModelLogo key={`first-${idx}`} model={model} />
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 flex-row items-center gap-[var(--gap)] animate-marquee-left">
            {models.map((model, idx) => (
              <ModelLogo key={`second-${idx}`} model={model} />
            ))}
          </div>
        </div>

        {/* Left gradient fade */}
        <div
          className="absolute top-0 left-0 h-full w-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />

        {/* Right gradient fade */}
        <div
          className="absolute top-0 right-0 h-full w-12 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
          }}
        />
      </div>
    </div>
  );
}
