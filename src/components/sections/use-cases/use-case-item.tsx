"use client";

interface UseCaseItemProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  isActive: boolean;
  onClick: () => void;
}

/** Reusable use case list item with expand/collapse animation */
export function UseCaseItem({
  title,
  description,
  ctaText,
  ctaHref,
  isActive,
  onClick,
}: UseCaseItemProps) {
  return (
    <li className="scroll-m-12">
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
        className={`group flex w-full cursor-pointer select-none flex-col gap-2.5 rounded-xl p-5 text-left transition duration-300 ease-out active:scale-[0.98] ${
          isActive
            ? "bg-primary-100 text-primary-600"
            : "text-primary-400 sm:hover:text-primary-600"
        }`}
      >
        {/* Title */}
        <h3
          className={`text-primary-1000 text-2xl font-semibold transition-opacity duration-300 ease-out ${
            isActive ? "opacity-100" : "opacity-35 group-hover:opacity-100"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm font-normal leading-[1.4em]">{description}</p>

        {/* CTA Button - Animated visibility */}
        <div
          className={`mt-3 w-fit transition-all duration-300 ease-out ${
            isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          style={{ maxHeight: isActive ? "60px" : "0px" }}
        >
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-1000 text-primary-0 hover:scale-[1.025] flex items-center justify-center rounded-md px-5 py-3 text-[11px] font-medium leading-none transition-all duration-200 ease-out"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </li>
  );
}
