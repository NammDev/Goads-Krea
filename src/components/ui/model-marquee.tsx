"use client";

import {
  KreaModelIcon,
  VeoModelIcon,
  IdeogramModelIcon,
  RunwayModelIcon,
  LumaModelIcon,
  FluxModelIcon,
  GeminiModelIcon,
} from "@/components/icons";

/** Model data for the marquee slider */
export interface ModelItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

/** Default models list used across showcase sections */
export const defaultModels: ModelItem[] = [
  { name: "Veo 3.1", icon: VeoModelIcon },
  { name: "Ideogram", icon: IdeogramModelIcon },
  { name: "Runway", icon: RunwayModelIcon },
  { name: "Luma", icon: LumaModelIcon },
  { name: "Flux", icon: FluxModelIcon },
  { name: "Gemini", icon: GeminiModelIcon },
  { name: "Krea 1", icon: KreaModelIcon },
];

/** Single model logo with icon and name */
function ModelLogo({ model }: { model: ModelItem }) {
  const Icon = model.icon;
  return (
    <div className="text-primary-700 flex items-center justify-center gap-2.5 text-xl font-medium opacity-65 select-all md:text-2xl">
      <Icon className="size-7" />
      <span>{model.name}</span>
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
