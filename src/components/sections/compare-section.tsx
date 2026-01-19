"use client";

import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";
import { useScrollTrigger } from "@/hooks";

/** Comparison row data structure */
interface ComparisonRow {
  feature: string;
  goads: string | boolean;
  mmoVendors: string | boolean;
  otherAgencies: string | boolean;
}

/** Comparison table data */
const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "7-Day Warranty",
    goads: true,
    mmoVendors: false,
    otherAgencies: "Sometimes",
  },
  {
    feature: "24/7 Support",
    goads: true,
    mmoVendors: false,
    otherAgencies: true,
  },
  {
    feature: "Response Time",
    goads: "<2 hours",
    mmoVendors: "12-48 hours",
    otherAgencies: "4-8 hours",
  },
  {
    feature: "Pre-Tested Assets",
    goads: true,
    mmoVendors: false,
    otherAgencies: "Sometimes",
  },
  {
    feature: "BM1 to BM5 Options",
    goads: true,
    mmoVendors: "BM1 only",
    otherAgencies: "Limited",
  },
  {
    feature: "Direct Communication",
    goads: true,
    mmoVendors: "Ticket Only",
    otherAgencies: true,
  },
  {
    feature: "Volume Discounts",
    goads: true,
    mmoVendors: false,
    otherAgencies: true,
  },
  {
    feature: "Clear Pricing",
    goads: true,
    mmoVendors: "Hidden fees",
    otherAgencies: true,
  },
  {
    feature: "Setup Guidance",
    goads: true,
    mmoVendors: false,
    otherAgencies: "Sometimes",
  },
  {
    feature: "Professional Invoicing",
    goads: true,
    mmoVendors: false,
    otherAgencies: true,
  },
];

/** Render cell value with appropriate icon/text */
function CellValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-green-100 p-1">
        <Check className="size-4 text-green-600" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-red-100 p-1">
        <X className="size-4 text-red-500" />
      </span>
    );
  }
  if (value === "Sometimes") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-yellow-100 p-1">
        <Minus className="size-4 text-yellow-600" />
      </span>
    );
  }
  return <span className="text-sm text-primary-700">{value}</span>;
}

/**
 * Compare vs Others Section
 * KREA-INSPIRED: Entirely new comparison table component
 * Features: Feature comparison between GoAds, MMO Vendors, and Other Agencies
 */
export function CompareSection() {
  const { ref: sectionRef, isVisible } = useScrollTrigger<HTMLElement>();

  const animationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(24px)",
    transition: "opacity 400ms ease-out, transform 400ms ease-out",
    willChange: "opacity, transform",
  };

  return (
    <section
      ref={sectionRef}
      className="section-container pt-24 md:pt-40"
      aria-labelledby="compare-title"
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-primary-500 mb-2 text-sm font-medium uppercase tracking-wider">
          See the difference
        </p>
        <h2
          id="compare-title"
          className="text-primary-900 text-3xl font-semibold md:text-4xl"
        >
          Why GoAds?
        </h2>
      </div>

      {/* Comparison Table */}
      <div
        className="overflow-hidden rounded-2xl border border-primary-200"
        style={animationStyle}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            {/* Header */}
            <thead>
              <tr className="bg-primary-900 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    GoAds
                    <span className="rounded-full bg-green-500 px-2 py-0.5 text-xs">
                      Best
                    </span>
                  </span>
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  MMO Vendors
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold">
                  Other Agencies
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {COMPARISON_DATA.map((row, index) => (
                <tr
                  key={row.feature}
                  className={cn(
                    "border-t border-primary-100",
                    index % 2 === 0 ? "bg-white" : "bg-primary-50"
                  )}
                >
                  <td className="px-6 py-4 text-sm font-medium text-primary-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.goads} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.mmoVendors} />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CellValue value={row.otherAgencies} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
