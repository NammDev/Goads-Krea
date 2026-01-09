import Link from "next/link";
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
  const baseClasses = cn(
    "rounded-md px-4 py-3 xl:px-5",
    "text-[15px] font-normal leading-[1.5] tracking-[0.01em]",
    "transition-colors duration-200",
    inverted ? "hover:bg-black/10" : "hover:bg-white/10",
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
