"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronIcon, Krea1Logo } from "@/components/icons";
import {
  MediaCard,
  MediaCardHeader,
  MediaCardContent,
  MediaCardPrompt,
} from "@/components/ui/media-card";

/** Feature data matching original Krea layout - adapted for GoAds */
interface FeatureItem {
  icon: React.ReactNode;
  name: string;
  links: { label: string; href: string }[];
}

interface FeatureCategory {
  title: string;
  items: FeatureItem[];
}

// GoAds product icons as inline SVGs
const MetaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 008.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const ProfileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BMIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const PageIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const featureCategories: FeatureCategory[] = [
  {
    title: "Agency Accounts",
    items: [
      {
        icon: <MetaIcon className="w-[18px]" />,
        name: "Meta Agency Accounts",
        links: [
          { label: "Agency BM2500 DSL $250", href: "/products/meta-agency-dsl-250" },
          { label: "Agency BM2500 DSL NLM", href: "/products/meta-agency-dsl-nlm" },
        ],
      },
      {
        icon: <TikTokIcon className="w-[18px]" />,
        name: "TikTok Agency Accounts",
        links: [
          { label: "TikTok Business Center", href: "/products/tiktok" },
          { label: "TikTok Ad Accounts", href: "/products/tiktok-ads" },
        ],
      },
      {
        icon: <GoogleIcon className="w-[18px]" />,
        name: "Google Agency Accounts",
        links: [
          { label: "Google Ads MCC", href: "/products/google-mcc" },
          { label: "Google Ad Accounts", href: "/products/google-ads" },
        ],
      },
    ],
  },
  {
    title: "Meta Assets",
    items: [
      {
        icon: <ProfileIcon className="w-[18px]" />,
        name: "Advertising Profiles",
        links: [
          { label: "Verified Profiles", href: "/products/profiles-verified" },
          { label: "Aged Profiles", href: "/products/profiles-aged" },
        ],
      },
      {
        icon: <BMIcon className="w-[18px]" />,
        name: "Business Managers",
        links: [
          { label: "Verified BMs", href: "/products/bm-verified" },
          { label: "Unverified BMs", href: "/products/bm-standard" },
        ],
      },
    ],
  },
  {
    title: "Add-ons",
    items: [
      {
        icon: <PageIcon className="w-[18px]" />,
        name: "Pages & Pixels",
        links: [
          { label: "Facebook Pages", href: "/products/pages" },
          { label: "Pixels Setup", href: "/products/pixels" },
        ],
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
  return (
    <div className="flex h-[130px] w-full flex-col items-start gap-4.5">
      {/* Icon + Title */}
      <div className="flex items-center gap-2.5">
        <div className="bg-primary-100 flex aspect-square h-9 w-9 shrink-0 items-center justify-center rounded-sm text-black/75">
          {item.icon}
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

/** Promo card with image - right side of dropdown (100% Krea design) */
function PromoCard() {
  return (
    <div className="hidden h-full xl:block">
      <MediaCard
        imageSrc="/images/facebook-ads-playbook.png"
        alt="Facebook Ads Playbook - Master Meta advertising"
        size="promo"
        hoverZoom={false}
        className="rounded-2xl"
      >
        {/* Krea 1 Logo - Keep original */}
        <MediaCardHeader>
          <Krea1Logo />
        </MediaCardHeader>

        {/* Prompt and CTA - Keep original structure */}
        <MediaCardContent>
          <MediaCardPrompt
            text="Free Facebook Ads Playbook — Master Meta advertising"
            animated={false}
          />
          <div className="pt-4">
            <Link
              href="/playbook"
              className={cn(
                "inline-flex shrink-0 items-center justify-center gap-2",
                "text-sm font-medium whitespace-nowrap",
                "rounded-md outline-none cursor-pointer",
                "transition-[opacity,scale,transform,background-color] duration-400 ease-out",
                "active-scale-95 thin-border shadow-xs",
                "bg-white text-black hover:bg-gray-100",
                "h-9 px-5 py-2"
              )}
            >
              Get Free Playbook
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

/** Trigger button for Products dropdown - rendered in nav */
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
        // Match header transition timing exactly
        "transition-[color,background-color] duration-200 ease-out",
        inverted ? "hover:bg-black/10" : "hover:bg-white/10",
        isOpen && (inverted ? "bg-black/10" : "bg-white/10")
      )}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={(e) => {
        // Only close if not moving to dropdown panel
        const rect = e.currentTarget.getBoundingClientRect();
        const isMovingDown = e.clientY >= rect.bottom - 5;
        if (!isMovingDown) {
          onOpenChange(false);
        }
      }}
    >
      Products
      <ChevronIcon direction="down" className="translate-y-[1px]" />
    </button>
  );
}

interface FeaturesDropdownPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Dropdown panel for Products - rendered at header level */
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
        {/* Promo Card - Same position as Krea */}
        <PromoCard />
      </div>
    </div>
  );
}
