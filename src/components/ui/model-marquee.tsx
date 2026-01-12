"use client";

import {
  Shield,
  UserCheck,
  FileCheck,
  Clock,
  Headphones,
  BadgeCheck,
  Zap,
} from "lucide-react";

/** Model data for the marquee slider */
export interface ModelItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

/** Default items - GoAds products and features */
export const defaultModels: ModelItem[] = [
  { name: "BM Verified", icon: BadgeCheck },
  { name: "Aged Profiles", icon: UserCheck },
  { name: "Ready Pages", icon: FileCheck },
  { name: "Fast Delivery", icon: Zap },
  { name: "24/7 Support", icon: Headphones },
  { name: "7-Day Warranty", icon: Shield },
  { name: "Instant Setup", icon: Clock },
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
