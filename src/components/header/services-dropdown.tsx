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

/** Service item - same structure as Products dropdown */
interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  links: { label: string; href: string }[];
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

// Service icons
const BMIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const AdAccountIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const ProfileIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const BadgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const SpyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const serviceCategories: ServiceCategory[] = [
  {
    title: "Unban Services",
    items: [
      {
        icon: <BMIcon className="w-[18px]" />,
        name: "Unban BM",
        links: [
          { label: "With Request Review Button", href: "/services/unban-bm-request-review" },
          { label: "No Request Review Button", href: "/services/unban-bm-no-button" },
        ],
      },
      {
        icon: <AdAccountIcon className="w-[18px]" />,
        name: "Unban Ad Account",
        links: [
          { label: "With Request Review", href: "/services/unban-ad-request-review" },
          { label: "Without Request Review", href: "/services/unban-ad-no-review" },
        ],
      },
      {
        icon: <ProfileIcon className="w-[18px]" />,
        name: "Unban Profile",
        links: [
          { label: "Video Selfie Required", href: "/services/unban-profile-video" },
          { label: "FAQ Method", href: "/services/unban-profile-faq" },
        ],
      },
    ],
  },
  {
    title: "Verification",
    items: [
      {
        icon: <BMIcon className="w-[18px]" />,
        name: "Business Verification",
        links: [
          { label: "BM Verification Service", href: "/services/bm-verification" },
        ],
      },
      {
        icon: <BadgeIcon className="w-[18px]" />,
        name: "Blue Badge",
        links: [
          { label: "Facebook Page", href: "/services/blue-badge-page" },
          { label: "WhatsApp Business", href: "/services/blue-badge-whatsapp" },
          { label: "Instagram", href: "/services/blue-badge-instagram" },
        ],
      },
    ],
  },
  {
    title: "Intelligence",
    items: [
      {
        icon: <SpyIcon className="w-[18px]" />,
        name: "Competitor Spy",
        links: [
          { label: "BM Spy Service", href: "/services/bm-spy" },
          { label: "Google Ads Spy", href: "/services/google-ads-spy" },
          { label: "Shopify Spy", href: "/services/shopify-spy" },
        ],
      },
    ],
  },
];

/** Chevron arrow icon for service links */
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

/** Reusable service link component */
function ServiceLink({ href, label }: { href: string; label: string }) {
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

/** Reusable service item component */
function ServiceItemCard({ item }: { item: ServiceItem }) {
  return (
    <div className="flex min-h-[130px] w-full flex-col items-start gap-4.5">
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
            <ServiceLink href={link.href} label={link.label} />
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
        imageSrc="https://s.krea.ai/landingPageTruckKrea1.webp"
        alt="Professional service showcase"
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
            text="Unlock your accounts with expert recovery services"
            animated={false}
          />
          <div className="pt-4">
            <Link
              href="/services"
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
              View all services
            </Link>
          </div>
        </MediaCardContent>
      </MediaCard>
    </div>
  );
}

interface ServicesTriggerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
}

/** Trigger button for Services dropdown */
export function ServicesTrigger({
  isOpen,
  onOpenChange,
  inverted,
}: ServicesTriggerProps) {
  return (
    <button
      className={cn(
        "flex cursor-pointer items-center gap-1",
        "rounded-lg bg-transparent px-4 py-3 xl:px-5",
        "text-xbase font-normal leading-[1.5] tracking-[0.01em]",
        "transition-[color,background-color] duration-200 ease-out",
        inverted ? "hover:bg-black/10" : "hover:bg-white/10",
        isOpen && (inverted ? "bg-black/10" : "bg-white/10")
      )}
      onMouseEnter={() => onOpenChange(true)}
      onMouseLeave={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const isMovingDown = e.clientY >= rect.bottom - 5;
        if (!isMovingDown) {
          onOpenChange(false);
        }
      }}
    >
      Services
      <ChevronIcon direction="down" className="translate-y-[1px]" />
    </button>
  );
}

interface ServicesDropdownPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Dropdown panel for Services */
export function ServicesDropdownPanel({
  isOpen,
  onOpenChange,
}: ServicesDropdownPanelProps) {
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
        {/* Service Categories Grid - 2 columns */}
        <div className="grid auto-cols-max grid-flow-col gap-x-11">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              {/* Category Title */}
              <p className="text-primary-400 text-base">{category.title}</p>
              {/* Category Items */}
              <div className="mt-8 flex flex-col gap-10">
                {category.items.map((item) => (
                  <ServiceItemCard key={item.name} item={item} />
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
