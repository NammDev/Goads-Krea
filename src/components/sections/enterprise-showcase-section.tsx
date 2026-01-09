"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

/** Category tab data */
interface CategoryTab {
  id: string;
  label: string;
  title: string;
  description: string;
  features: readonly string[];
  beforeImage: string;
  afterImage: string;
}

/** Category tabs configuration */
const CATEGORY_TABS: readonly CategoryTab[] = [
  {
    id: "image",
    label: "Image",
    title: "Edit, Transform and Generate Images",
    description:
      "Perfect for product placement, image enhancement, editing, and more.",
    features: ["Product Placement", "Enhance", "Realtime"],
    beforeImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-before.ChmX39Ew.webp",
    afterImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-after.cxlg4tC1.webp",
  },
  {
    id: "video",
    label: "Video",
    title: "Create and Edit Stunning Videos",
    description:
      "Generate, transform, and enhance videos with AI-powered tools.",
    features: ["Generation", "Lip Sync", "Effects"],
    beforeImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-before.ChmX39Ew.webp",
    afterImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-after.cxlg4tC1.webp",
  },
  {
    id: "nextgen",
    label: "Next Gen",
    title: "Explore Cutting-Edge AI Models",
    description:
      "Access the latest experimental models for 3D, audio, and more.",
    features: ["3D Generation", "Audio", "Experimental"],
    beforeImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-before.ChmX39Ew.webp",
    afterImage:
      "https://www.krea.ai/_app/b94edb9695cfef9c/immutable/assets/hold-product-after.cxlg4tC1.webp",
  },
] as const;

/** Pill button for tabs and features */
function PillButton({
  children,
  isActive,
  onClick,
  role,
  ariaSelected,
  className,
}: {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  role?: "tab";
  ariaSelected?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      role={role}
      aria-selected={ariaSelected}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
        isActive
          ? "bg-primary-900 text-white"
          : "bg-primary-100 text-primary-900 hover:bg-primary-200",
        className
      )}
    >
      {children}
    </button>
  );
}

/** Feature tag pill (non-interactive, first is highlighted) */
function FeatureTag({
  children,
  isFirst,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-xs font-medium sm:text-sm",
        isFirst
          ? "bg-primary-900 text-white"
          : "bg-primary-100 text-primary-900"
      )}
    >
      {children}
    </span>
  );
}

/**
 * EnterpriseShowcaseSection - AI models showcase with category tabs
 * Displays before/after comparisons for different AI capabilities
 */
export function EnterpriseShowcaseSection() {
  const [activeTabId, setActiveTabId] = useState(CATEGORY_TABS[0].id);

  const activeTab =
    CATEGORY_TABS.find((tab) => tab.id === activeTabId) ?? CATEGORY_TABS[0];

  return (
    <section
      aria-labelledby="showcase-title"
      className="section-container pt-24 md:pt-40"
    >
      {/* Header */}
      <h2
        id="showcase-title"
        className="text-primary-900 mb-2 text-center text-2xl font-semibold sm:text-3xl md:text-4xl"
      >
        All the best models in one interface.
      </h2>
      <p className="text-primary-600 mx-auto mb-6 max-w-3xl text-center text-sm sm:mb-10 sm:text-base">
        Get complete creative control with access to over 50 AI models across
        image, video, and 3D.
      </p>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="AI model categories"
        className="mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-center gap-2"
      >
        {CATEGORY_TABS.map((tab) => (
          <PillButton
            key={tab.id}
            role="tab"
            ariaSelected={tab.id === activeTabId}
            isActive={tab.id === activeTabId}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </PillButton>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left: Text content */}
        <div className="order-2 lg:order-1">
          <h3 className="text-primary-900 mb-3 text-xl font-semibold sm:mb-4 sm:text-2xl">
            {activeTab.title}
          </h3>
          <p className="text-primary-600 mb-4 text-sm sm:mb-6 sm:text-base">
            {activeTab.description}
          </p>

          {/* Feature tags (informational, first highlighted) */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {activeTab.features.map((feature, index) => (
              <FeatureTag key={feature} isFirst={index === 0}>
                {feature}
              </FeatureTag>
            ))}
          </div>
        </div>

        {/* Right: Before/After slider */}
        <div className="order-1 lg:order-2">
          <BeforeAfterSlider
            beforeImage={activeTab.beforeImage}
            afterImage={activeTab.afterImage}
            beforeAlt={`${activeTab.title} - Before`}
            afterAlt={`${activeTab.title} - After`}
          />
        </div>
      </div>
    </section>
  );
}
