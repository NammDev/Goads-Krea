"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronIcon,
  Krea1Logo,
  ImageGenIcon,
  VideoGenIcon,
  ThreeDGenIcon,
  EnhanceIcon,
  VideoEnhanceIcon,
  FinetuneIcon,
  FileIcon,
} from "@/components/icons";
import {
  MediaCard,
  MediaCardHeader,
  MediaCardContent,
  MediaCardPrompt,
} from "@/components/ui/media-card";

/** Feature data matching original Krea layout */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  links: { label: string; href: string }[];
}

interface FeatureCategory {
  title: string;
  items: FeatureItem[];
}

const featureCategories: FeatureCategory[] = [
  {
    title: "Generate",
    items: [
      {
        icon: ImageGenIcon,
        name: "AI Image Generation",
        links: [
          { label: "Text to Image", href: "/image" },
          { label: "Realtime Image Generation", href: "/realtime" },
        ],
      },
      {
        icon: VideoGenIcon,
        name: "AI Video Generation",
        links: [
          { label: "Text to Video", href: "/video" },
          { label: "Motion Transfer", href: "/motion-transfer" },
        ],
      },
      {
        icon: ThreeDGenIcon,
        name: "AI 3D Generation",
        links: [
          { label: "Text to 3D Object", href: "/3d" },
          { label: "Image to 3D Object", href: "/3d" },
        ],
      },
    ],
  },
  {
    title: "Edit",
    items: [
      {
        icon: EnhanceIcon,
        name: "AI Image Enhancements",
        links: [
          { label: "Upscaling", href: "/enhancer" },
          { label: "Generative Image Editing", href: "/edit" },
        ],
      },
      {
        icon: VideoEnhanceIcon,
        name: "AI Video Enhancements",
        links: [
          { label: "Frame Interpolation", href: "/animator" },
          { label: "Video Style Transfer", href: "/video-restyle" },
          { label: "Video Upscaling", href: "/enhancer" },
        ],
      },
    ],
  },
  {
    title: "Customize",
    items: [
      {
        icon: FinetuneIcon,
        name: "AI Finetuning",
        links: [
          { label: "Image LoRa Finetuning", href: "/train" },
          { label: "Video LoRa Finetuning", href: "/train" },
          { label: "LoRa Sharing", href: "/train" },
        ],
      },
      {
        icon: FileIcon,
        name: "File Management",
        links: [{ label: "Krea Asset Manager", href: "/assets" }],
      },
    ],
  },
];

/** Chevron arrow icon for feature links */
function LinkArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height="8"
      className={cn("translate-y-[1px] text-primary-600", className)}
    >
      <path
        d="M9.62988 8.1543C9.62988 8.33008 9.59473 8.49707 9.52441 8.65527C9.45996 8.80762 9.35449 8.9541 9.20801 9.09473L2.44922 15.7129C2.2207 15.9355 1.94238 16.0469 1.61426 16.0469C1.40332 16.0469 1.20703 15.9941 1.02539 15.8887C0.84375 15.7832 0.697266 15.6426 0.585938 15.4668C0.480469 15.291 0.427734 15.0918 0.427734 14.8691C0.427734 14.5469 0.550781 14.2598 0.796875 14.0078L6.81738 8.1543L0.796875 2.30078C0.550781 2.05469 0.427734 1.76758 0.427734 1.43945C0.427734 1.22266 0.480469 1.02637 0.585938 0.850586C0.697266 0.668945 0.84375 0.525391 1.02539 0.419922C1.20703 0.314453 1.40332 0.261719 1.61426 0.261719C1.94238 0.261719 2.2207 0.373047 2.44922 0.595703L9.20801 7.21387C9.34863 7.35449 9.4541 7.50098 9.52441 7.65332C9.59473 7.80566 9.62988 7.97266 9.62988 8.1543Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Reusable feature link component */
function FeatureLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-primary-700 group flex items-center gap-2 text-sm opacity-70 transition-opacity duration-200 hover:opacity-100"
    >
      <span>{label}</span>
      <LinkArrow />
    </Link>
  );
}

/** Reusable feature item component */
function FeatureItemCard({ item }: { item: FeatureItem }) {
  const IconComponent = item.icon;
  return (
    <div className="flex h-[130px] w-full flex-col items-start gap-4.5">
      {/* Icon + Title */}
      <div className="flex items-center gap-2.5">
        <div className="bg-primary-100 flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-sm">
          <IconComponent className="w-[18px] text-black/75" />
        </div>
        <div className="text-primary-700 text-xbase font-medium whitespace-nowrap">
          {item.name}
        </div>
      </div>
      {/* Links */}
      <ul className="flex flex-col gap-2">
        {item.links.map((link) => (
          <li key={link.label}>
            <FeatureLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Promo card with image - right side of dropdown */
function PromoCard() {
  return (
    <div className="hidden h-full xl:block">
      <MediaCard
        imageSrc="https://s.krea.ai/krea-1/skinTexture.webp"
        alt="Cinematic photo of a person in a linen jacket"
        size="promo"
        hoverZoom={false}
        className="rounded-2xl"
      >
        {/* Krea 1 Logo */}
        <MediaCardHeader>
          <Krea1Logo />
        </MediaCardHeader>

        {/* Prompt and CTA */}
        <MediaCardContent>
          <MediaCardPrompt
            text="Cinematic photo of a person in a linen jacket"
            animated={false}
          />
          <div className="pt-4">
            <Link
              href="/image?model=k1"
              className="bg-primary-150 text-primary-1000 text-xsm active-scale-95 flex w-fit items-center justify-center rounded-md px-5 py-3 font-medium leading-[100%] transition-all duration-200 ease-out hover:scale-[1.025]"
            >
              Generate image
            </Link>
          </div>
        </MediaCardContent>
      </MediaCard>
    </div>
  );
}

interface FeaturesTriggerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
}

/** Trigger button for Features dropdown - rendered in nav */
export function FeaturesTrigger({
  isOpen,
  onOpenChange,
  inverted,
}: FeaturesTriggerProps) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1",
        "rounded-lg bg-transparent px-4 py-3 xl:px-5",
        "text-xbase font-normal leading-[1.5] tracking-[0.01em]",
        "transition-colors duration-200",
        inverted ? "hover:bg-black/10" : "hover:bg-white/10",
        isOpen && (inverted ? "bg-black/10" : "bg-white/10")
      )}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={(e) => {
        // Only close if not moving to dropdown panel (check if moving down toward dropdown)
        const rect = e.currentTarget.getBoundingClientRect();
        const isMovingDown = e.clientY >= rect.bottom - 5;
        if (!isMovingDown) {
          onOpenChange(false);
        }
      }}
    >
      Features
      <ChevronIcon direction="down" className="translate-y-[1px]" />
    </button>
  );
}

interface FeaturesDropdownPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Dropdown panel for Features - rendered at header level */
export function FeaturesDropdownPanel({
  isOpen,
  onOpenChange,
}: FeaturesDropdownPanelProps) {
  return (
    <div
      role="menu"
      className={cn(
        "absolute bottom-0 left-1/2 hidden lg:block",
        "bg-primary-0 border-primary-200 rounded-2xl border",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={() => onOpenChange(false)}
      style={{
        // Use GPU-accelerated properties only
        // calc(100% + 10px) adds spacing between header and dropdown
        transform: isOpen
          ? "translate(-50%, calc(100% + 16px)) scale(1)"
          : "translate(-50%, calc(100% + 16px)) scale(0.98) translateY(-4px)",
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        transition:
          "opacity 150ms ease-out, transform 150ms ease-out, visibility 0s linear " +
          (isOpen ? "0s" : "150ms"),
        transformOrigin: "50% top",
        willChange: "transform, opacity",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 20px 39px -20px",
      }}
    >
      {/* Main content container */}
      <div className="flex w-fit max-w-[90vw] gap-11 p-11">
        {/* Feature Categories Grid */}
        <div className="grid auto-cols-max grid-flow-col gap-x-11">
          {featureCategories.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <p className="text-primary-400 text-base">{category.title}</p>
              {/* Category Items */}
              <div className="mt-8 flex flex-col gap-10">
                {category.items.map((item) => (
                  <FeatureItemCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Promo Card */}
        <PromoCard />
      </div>
    </div>
  );
}
