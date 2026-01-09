"use client";

import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface BeforeAfterSliderProps {
  /** Before image URL */
  beforeImage: string;
  /** After image URL */
  afterImage: string;
  /** Alt text for before image */
  beforeAlt?: string;
  /** Alt text for after image */
  afterAlt?: string;
  /** Additional className for container */
  className?: string;
}

/** Keyboard step increment (percentage) */
const STEP = 5;

/**
 * BeforeAfterSlider - Interactive image comparison slider
 * Displays before/after images with draggable divider
 * Supports: mouse drag, touch, keyboard (Arrow keys, Home/End)
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) {
        handleMove(e.clientX);
      }
    },
    [handleMove]
  );

  const handleTouchStart = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging.current) {
        handleMove(e.touches[0].clientX);
      }
    },
    [handleMove]
  );

  /** Keyboard navigation for accessibility */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        setSliderPosition((prev) => Math.max(0, prev - STEP));
        break;
      case "ArrowRight":
        e.preventDefault();
        setSliderPosition((prev) => Math.min(100, prev + STEP));
        break;
      case "Home":
        e.preventDefault();
        setSliderPosition(0);
        break;
      case "End":
        e.preventDefault();
        setSliderPosition(100);
        break;
    }
  }, []);

  return (
    <div className={cn("rounded-2xl bg-black/5 p-1.5 sm:p-2", className)}>
      <div
        ref={containerRef}
        role="slider"
        aria-label="Image comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuetext={`${Math.round(sliderPosition)}% before image visible`}
        tabIndex={0}
        className="relative h-[280px] w-full cursor-ew-resize select-none overflow-hidden rounded-xl text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 sm:h-[360px] md:h-[420px] lg:h-[480px]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onKeyDown={handleKeyDown}
      >
        {/* After image (background) */}
        <div className="relative h-full w-full">
          <img
            className="h-full w-full object-contain object-center"
            draggable={false}
            src={afterImage}
            alt={afterAlt}
          />
        </div>

        {/* Before image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden transition-[clip-path] duration-100 ease-out"
          style={{
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            className="h-full w-full object-contain object-center"
            draggable={false}
            src={beforeImage}
            alt={beforeAlt}
          />
        </div>

        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 h-full w-4 transition-[left] duration-100 ease-out"
          style={{ left: `calc(${sliderPosition}% - 8px)` }}
        >
          <div className="absolute left-1/2 h-full w-[2px] -translate-x-1/2 bg-white shadow-sm" />
          {/* Slider handle */}
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="pointer-events-none absolute top-3 left-3 rounded-md bg-black/40 px-2 py-1 text-xs font-medium backdrop-blur-lg sm:rounded-lg">
          Before
        </div>
        <div className="pointer-events-none absolute top-3 right-3 rounded-md bg-black/40 px-2 py-1 text-xs font-medium backdrop-blur-lg sm:rounded-lg">
          After
        </div>
      </div>
    </div>
  );
}
