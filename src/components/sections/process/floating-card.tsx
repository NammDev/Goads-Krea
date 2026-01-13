"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** Floating card data structure */
export interface FloatingCardData {
  id: string;
  name: string;
  logo: React.ReactNode;
  image: string;
  position: string;
  size: "square" | "landscape";
  rotation: string;
}

/** Fallback placeholder for failed images */
function ImageFallback({ name }: { name: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-primary-200">
      <span className="text-sm font-medium text-primary-500">{name}</span>
    </div>
  );
}

/** Single floating image card with error handling */
export function FloatingImageCard({ card }: { card: FloatingCardData }) {
  const [hasError, setHasError] = useState(false);

  const sizeClasses =
    card.size === "square"
      ? "w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]"
      : "w-[220px] h-[140px] sm:w-[250px] sm:h-[160px] md:w-[280px] md:h-[180px]";

  return (
    <div
      className={cn(
        "absolute will-change-transform overflow-hidden rounded-[20px]",
        sizeClasses,
        card.position,
        card.rotation
      )}
    >
      <div className="h-full w-full">
        {/* Gradient overlay with brand label */}
        <div className="parallax-gradient absolute inset-0 z-10 flex items-end justify-center p-4 text-base font-medium text-white">
          <p className="flex items-center gap-2">
            {card.logo}
            {card.name}
          </p>
        </div>
        {/* Image with error fallback */}
        {hasError ? (
          <ImageFallback name={card.name} />
        ) : (
          <img
            className="h-full w-full object-cover"
            src={card.image}
            alt={card.name}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
}

/** Model pill button - pixel-perfect from milestone.html */
export function ModelPill({
  name,
  logo,
}: {
  name: string;
  logo: React.ReactNode;
}) {
  return (
    <span className="text-primary-1000 bg-primary-200 inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-xl font-medium backdrop-blur-sm">
      {logo}
      <span className="grow">{name}</span>
    </span>
  );
}
