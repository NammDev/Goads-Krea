"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  inverted?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  external,
  inverted,
}: NavLinkProps) {
  const pathname = usePathname();
  // Check if current path matches link (exact or starts with for nested routes)
  const isActive = !external && (pathname === href || pathname.startsWith(`${href}/`));

  const baseClasses = cn(
    "rounded-md px-4 py-3 xl:px-5",
    "text-[15px] font-normal leading-[1.5] tracking-[0.01em]",
    // Match header transition timing exactly
    "transition-[color,background-color] duration-200 ease-out",
    // Active state styling
    isActive
      ? inverted
        ? "bg-black/10 font-medium"
        : "bg-white/10 font-medium"
      : inverted
        ? "hover:bg-black/10"
        : "hover:bg-white/10",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  );
}
