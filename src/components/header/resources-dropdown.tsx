"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronIcon } from "@/components/icons";

/** Resource item */
interface ResourceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
  href: string;
}

/** Partner item */
interface PartnerItem {
  name: string;
  logo: string;
  description: string;
  href: string;
  bgGradient: string;
  accentColor: string;
}

// Resource icons
const DocsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

const FAQIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WarrantyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const resourceItems: ResourceItem[] = [
  {
    icon: <DocsIcon className="w-5 h-5" />,
    name: "Documentation",
    description: "Guides, tutorials, and API docs",
    href: "https://docs.goads.agency",
  },
  {
    icon: <SupportIcon className="w-5 h-5" />,
    name: "Support Center",
    description: "Get help from our team",
    href: "/support",
  },
  {
    icon: <WarrantyIcon className="w-5 h-5" />,
    name: "7-Day Warranty",
    description: "Our replacement guarantee",
    href: "/warranty",
  },
  {
    icon: <FAQIcon className="w-5 h-5" />,
    name: "FAQ",
    description: "Common questions answered",
    href: "/faq",
  },
  {
    icon: <BlogIcon className="w-5 h-5" />,
    name: "Blog",
    description: "Tips, news, and updates",
    href: "/blog",
  },
  {
    icon: <ContactIcon className="w-5 h-5" />,
    name: "Contact Us",
    description: "Reach out directly",
    href: "/contact",
  },
];

const partnerItems: PartnerItem[] = [
  {
    name: "Floxy",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/688bc3d7ba481a32d8b594c5_floxy.svg",
    description: "Ad account solutions",
    href: "https://floxy.io",
    bgGradient: "from-violet-500/20 via-purple-500/15 to-fuchsia-500/20",
    accentColor: "border-violet-300/50",
  },
  {
    name: "Uproas",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668f1c4e5f4a7e5f5f5f5f5f_uproas.svg",
    description: "Leading agency reseller",
    href: "https://uproas.com",
    bgGradient: "from-cyan-500/20 via-blue-500/15 to-indigo-500/20",
    accentColor: "border-cyan-300/50",
  },
  {
    name: "Bulletproof",
    logo: "https://cdn.prod.website-files.com/6685720b48faa89595e9c9d0/668f1c4e5f4a7e5f5f5f5f5f_bulletproof.svg",
    description: "Marketing community",
    href: "https://bulletproofscaling.com",
    bgGradient: "from-amber-500/20 via-orange-500/15 to-rose-500/20",
    accentColor: "border-amber-300/50",
  },
];

/** Resource item card */
function ResourceCard({ item }: { item: ResourceItem }) {
  const isExternal = item.href.startsWith("http");

  const content = (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary-100 transition-colors group">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center text-primary-600 transition-colors">
        {item.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-primary-800 group-hover:text-primary-900">
          {item.name}
        </div>
        <div className="text-xs text-primary-500 mt-0.5">
          {item.description}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={item.href}>{content}</Link>;
}

/** Partner card with image fallback */
function PartnerCard({ partner }: { partner: PartnerItem }) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group p-3 rounded-xl transition-all duration-300",
        "bg-gradient-to-br",
        partner.bgGradient,
        "hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-200/50",
        "border",
        partner.accentColor,
        "hover:border-primary-300"
      )}
    >
      {/* Partner Logo Container */}
      <div className="relative w-full h-12 mb-2 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm p-2.5 shadow-sm">
        {imageError ? (
          <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            {partner.name}
          </span>
        ) : (
          <Image
            src={partner.logo}
            alt={partner.name}
            width={80}
            height={32}
            className="h-full w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      {/* Partner Name */}
      <div className="text-xs font-medium text-primary-700 text-center mb-0.5 group-hover:text-primary-900 transition-colors">
        {partner.name}
      </div>
      {/* Partner Description */}
      <div className="text-[10px] text-primary-500 text-center group-hover:text-primary-600 transition-colors">
        {partner.description}
      </div>
    </a>
  );
}

/** Partners showcase section */
function PartnersSection() {
  return (
    <div className="border-t border-primary-200 pt-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-primary-400 text-sm font-medium">Trusted Partners</p>
        <Link
          href="/partners"
          className="text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {partnerItems.map((partner) => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
}

interface ResourcesTriggerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inverted?: boolean;
}

/** Trigger button for Resources dropdown */
export function ResourcesTrigger({
  isOpen,
  onOpenChange,
  inverted,
}: ResourcesTriggerProps) {
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
        const rect = e.currentTarget.getBoundingClientRect();
        const isMovingDown = e.clientY >= rect.bottom - 5;
        if (!isMovingDown) {
          onOpenChange(false);
        }
      }}
    >
      Resources
      <ChevronIcon direction="down" className="translate-y-[1px]" />
    </button>
  );
}

interface ResourcesDropdownPanelProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Dropdown panel for Resources */
export function ResourcesDropdownPanel({
  isOpen,
  onOpenChange,
}: ResourcesDropdownPanelProps) {
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
      <div className="w-[520px] max-w-[90vw] p-6">
        {/* Resources Grid */}
        <div className="grid grid-cols-2 gap-1">
          {resourceItems.map((item) => (
            <ResourceCard key={item.name} item={item} />
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-6">
          <PartnersSection />
        </div>
      </div>
    </div>
  );
}
