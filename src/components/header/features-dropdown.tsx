"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronIcon,
  KreaIcon,
  ImageGenIcon,
  VideoGenIcon,
  ThreeDGenIcon,
  EnhanceIcon,
  VideoEnhanceIcon,
  FinetuneIcon,
  FileIcon,
} from "@/components/icons";

// Feature data matching original Krea layout
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
          { label: "Image to 3D Object", href: "/3d-image" },
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
          { label: "Upscaling", href: "/upscaler" },
          { label: "Generative Image Editing", href: "/inpainting" },
        ],
      },
      {
        icon: VideoEnhanceIcon,
        name: "AI Video Enhancements",
        links: [
          { label: "Frame Interpolation", href: "/frame-interpolation" },
          { label: "Video Style Transfer", href: "/video-style" },
          { label: "Video Upscaling", href: "/video-upscaler" },
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
          { label: "Image LoRa Finetuning", href: "/finetuning/image" },
          { label: "Video LoRa Finetuning", href: "/finetuning/video" },
          { label: "LoRa Sharing", href: "/finetuning/sharing" },
        ],
      },
      {
        icon: FileIcon,
        name: "File Management",
        links: [
          { label: "Krea Asset Manager", href: "/assets" },
        ],
      },
    ],
  },
];

interface FeaturesDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
}

export function FeaturesDropdown({ isOpen, onOpenChange, inverted }: FeaturesDropdownProps) {
  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        className={cn(
          "flex cursor-pointer items-center gap-1",
          "rounded-lg bg-transparent px-4 py-3 xl:px-5",
          "text-[15px] font-normal leading-[1.5] tracking-[0.01em]",
          "transition-colors duration-200",
          inverted ? "hover:bg-black/10" : "hover:bg-white/10",
          isOpen && (inverted ? "bg-black/10" : "bg-white/10")
        )}
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
      >
        Features
        <ChevronIcon
          direction="down"
          className={cn(
            "translate-y-[1px] transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu - Fixed positioning with hover bridge */}
      <div
        className={cn(
          "fixed left-0 right-0 top-[52px] z-[100]",
          "flex justify-center pt-4",
          "hidden lg:flex",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        onMouseEnter={() => onOpenChange(true)}
        onMouseLeave={() => onOpenChange(false)}
      >
        <div
          className={cn(
            "transition-all duration-200 ease-out",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          )}
          role="menu"
        >
          {/* Dropdown Content - Matching Krea's exact layout */}
          <div className="rounded-2xl bg-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <div className="flex p-10 pb-12">
              {/* Feature Categories - 3 columns */}
              <div className="flex gap-16">
                {featureCategories.map((category) => (
                  <div key={category.title} className="min-w-[200px]">
                    {/* Category Title */}
                    <p className="mb-8 text-base font-normal text-neutral-400">
                      {category.title}
                    </p>

                    {/* Category Items */}
                    <div className="flex flex-col gap-10">
                      {category.items.map((item) => (
                        <div key={item.name}>
                          {/* Item Header with Icon - No box around icon */}
                          <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <span className="text-[15px] font-medium text-neutral-900">
                              {item.name}
                            </span>
                          </div>

                          {/* Links - No indentation, directly below */}
                          <div className="flex flex-col gap-2">
                            {item.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="group flex items-center gap-1 text-[14px] text-neutral-500 transition-colors duration-150 hover:text-neutral-900"
                              >
                                <span>{link.label}</span>
                                <ChevronIcon
                                  direction="right"
                                  className="h-3 w-3 text-neutral-400 transition-colors group-hover:text-neutral-600"
                                />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Section - Right side with image */}
              <div className="ml-10 w-[380px] overflow-hidden rounded-2xl bg-neutral-900">
                {/* Header */}
                <div className="flex items-center gap-2 p-5 pb-0">
                  <KreaIcon size="md" className="text-white" />
                  <span className="text-base font-semibold text-white">Krea 1</span>
                </div>

                {/* Image */}
                <div className="relative mt-4 aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=face"
                    alt="AI Generated Portrait"
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient overlay for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-400">
                      PROMPT
                    </p>
                    <p className="mb-5 text-xl font-medium leading-tight text-white">
                      "Cinematic photo of a person in a linen jacket"
                    </p>
                    <button className="w-full rounded-lg bg-white py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-100">
                      Generate image
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
