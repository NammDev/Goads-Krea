"use client";

import { useCallback, useMemo } from "react";
import { cn } from "@/lib/utils";

/** Props for PlanSlider component */
export interface PlanSliderProps {
  /** Labels to display for each plan tier */
  labels: readonly string[];
  /** Indices of labels to display (others hidden but clickable) */
  visibleLabels?: readonly number[];
  /** Current selected index */
  value: number;
  /** Callback when selection changes */
  onChange: (value: number) => void;
  /** Minimum value (default: 0) */
  min?: number;
  /** Maximum value (default: labels.length - 1) */
  max?: number;
  /** Accessible label for screen readers */
  ariaLabel?: string;
}

/**
 * Plan selection slider with labeled ticks
 * Pixel-perfect match to Krea.ai pricing slider
 * Uses creator-plan-slider CSS class for styling
 */
export function PlanSlider({
  labels,
  visibleLabels,
  value,
  onChange,
  min = 0,
  max,
  ariaLabel = "Select plan tier",
}: PlanSliderProps) {
  const maxValue = max ?? labels.length - 1;
  const percentage = ((value - min) / (maxValue - min)) * 100;

  // Memoize to prevent array recreation on every render
  const visibleSet = useMemo(
    () => (visibleLabels ? new Set(visibleLabels) : null),
    [visibleLabels]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight" && value < maxValue) {
        onChange(value + 1);
      } else if (e.key === "ArrowLeft" && value > min) {
        onChange(value - 1);
      }
    },
    [value, maxValue, min, onChange]
  );

  const getValueText = useCallback(
    (val: number) => labels[val] ?? "",
    [labels]
  );

  return (
    <div className="mb-8 mt-2">
      {/* Labels */}
      <div
        className="mb-3 flex items-center justify-between text-xs font-semibold"
        role="group"
        aria-label="Plan tier options"
      >
        {labels.map((label, index) => {
          const isVisible = !visibleSet || visibleSet.has(index);
          const isActive = index === value;
          return (
            <button
              key={`${label}-${index}`}
              type="button"
              onClick={() => onChange(index)}
              aria-pressed={isActive}
              className={cn(
                "cursor-pointer transition-opacity hover:opacity-80",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2",
                "rounded px-0.5",
                isActive ? "text-primary-900" : "text-primary-400",
                !isVisible && "invisible"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Slider track container with creator-plan-slider class for CSS styling */}
      <div className="-mx-2 py-2">
        <span
          className="creator-plan-slider relative flex w-full touch-none select-none items-center"
          style={{ touchAction: "pan-y" }}
          data-slot="slider"
          data-orientation="horizontal"
        >
          {/* Track - styled via .creator-plan-slider [data-slot=slider-track] */}
          <span
            data-slot="slider-track"
            data-orientation="horizontal"
            className="relative w-full grow overflow-hidden rounded-full"
          >
            {/* Active range - styled via .creator-plan-slider [data-slot=slider-range] */}
            <span
              data-slot="slider-range"
              data-orientation="horizontal"
              className="absolute h-full rounded-full"
              style={{ left: "0%", right: `${100 - percentage}%` }}
            />
          </span>

          {/* Thumb - styled via .creator-plan-slider [data-slot=slider-thumb] */}
          {/* Thumb size is 2.5rem (40px), so offset calculation uses 40px */}
          <span
            role="slider"
            tabIndex={0}
            aria-label={ariaLabel}
            aria-valuemin={min}
            aria-valuemax={maxValue}
            aria-valuenow={value}
            aria-valuetext={getValueText(value)}
            aria-disabled="false"
            aria-orientation="horizontal"
            data-slot="slider-thumb"
            data-value={value}
            data-orientation="horizontal"
            className="z-10 block shrink-0"
            style={{
              position: "absolute",
              left: `calc(${percentage}% + ${(0.5 - percentage / 100) * 40}px)`,
              transform: "translateX(-50%)",
            }}
            onKeyDown={handleKeyDown}
          />
        </span>
      </div>
    </div>
  );
}
