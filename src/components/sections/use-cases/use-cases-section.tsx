"use client";

import { useState } from "react";
import Image from "next/image";
import { UseCaseItem } from "./use-case-item";
import { SectionHeader } from "@/components/ui/section-header";

/** Benefit data structure */
interface Benefit {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageSrc: string;
}

/** Benefits data - GoAds advantages */
const BENEFITS: Benefit[] = [
  {
    id: "multi-platform",
    title: "Run Ads For Any Vertical",
    description:
      "Run almost any kind of ads on any advertising platform, doesn't matter which vertical you're in. We have a solution for everyone and for every advertising platform.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-multi-platform.png",
  },
  {
    id: "no-bans",
    title: "No Bans or Restrictions",
    description:
      "Stop losing days to restrictions. Run ads with whitelisted accounts that have unlimited spend, instant replacements, and dedicated support from Meta reps.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-no-bans.png",
  },
  {
    id: "unlimited-scale",
    title: "Scale Without Limits",
    description:
      "We offer unlimited ad spend potential on various advertising platforms, helping you reach new heights without hitting budget restrictions or account caps.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-unlimited-scale.png",
  },
  {
    id: "instant-replacement",
    title: "Keep Your Ads Running",
    description:
      "If your ad account gets disabled, we'll instantly replace it for you, so your campaigns continue running without interruption.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-instant-replacement.png",
  },
  {
    id: "pixel-data",
    title: "Never Lose Your Pixel Data",
    description:
      "We will help you set up a bulletproof account structure so you can run ads without worrying about losing your pixel or analytics data forever.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-pixel-data.png",
  },
  {
    id: "lower-costs",
    title: "Lower CPA's & CPM's",
    description:
      "Our whitelisted agency ad accounts have built up a strong reputation over the years, allowing us to get up to 50% lower CPA's and CPM's.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-lower-costs.png",
  },
  {
    id: "support",
    title: "24/7 Customer Support",
    description:
      "Our team is there to help 24/7, ready to answer any of your burning questions.",
    ctaText: "Get Started",
    ctaHref: "/products",
    imageSrc: "/images/benefits/benefit-support.png",
  },
];

/** Benefits Section - Feature showcase with image preview */
export function UseCasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-container pt-24 md:pt-40">
      <SectionHeader
        subtitle="Why GoAds"
        title="The GoAds Advantage"
        className="max-w-3xl"
      />

      {/* Content Area */}
      <div className="mt-11 flex w-full flex-col-reverse items-end gap-8 lg:flex-row">
        {/* Benefits List */}
        <div className="relative z-0 flex-1">
          <ul className="no-scrollbar space-y-3 lg:max-h-[40rem] lg:overflow-y-scroll">
            {BENEFITS.map((benefit, index) => (
              <UseCaseItem
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                ctaText={benefit.ctaText}
                ctaHref={benefit.ctaHref}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </ul>
        </div>

        {/* Image Preview */}
        <div className="sticky top-17 z-1 mb-auto w-full flex-1 sm:static lg:w-auto">
          <div className="bg-primary-900 relative aspect-video overflow-hidden rounded-lg shadow-sm">
            {/* Top gradient overlay */}
            <div
              className="absolute top-0 left-0 z-10 h-[25%] w-full"
              style={{
                background:
                  "linear-gradient(rgba(50, 50, 50, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
              }}
            />

            {/* Image */}
            <Image
              src={BENEFITS[activeIndex].imageSrc}
              alt={BENEFITS[activeIndex].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={activeIndex === 0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
