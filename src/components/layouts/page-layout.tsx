import { Header, MobileMenu } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  /** Show header and mobile menu */
  showHeader?: boolean;
  /** Show footer (rendered inside main for scroll behavior) */
  showFooter?: boolean;
  /** Additional classes for main element */
  mainClassName?: string;
  /** Enable 3D perspective on main (default: true for homepage parity) */
  enablePerspective?: boolean;
}

/**
 * PageLayout - Shared layout wrapper for all pages
 * Preserves exact structure from original page.tsx for visual parity
 */
export function PageLayout({
  children,
  showHeader = true,
  showFooter = true,
  mainClassName,
  enablePerspective = true,
}: PageLayoutProps) {
  return (
    <div className="relative h-dvh">
      {/* Header - Fixed position outside scroll container */}
      {showHeader && (
        <>
          <Header />
          <MobileMenu />
        </>
      )}

      {/* Main scrollable content */}
      <main
        id="main-content"
        className={cn(
          "text-primary-1000 selection:bg-primary-1000 selection:text-primary-0",
          "relative z-10 h-full overflow-x-hidden overflow-y-auto",
          "overscroll-x-contain bg-white",
          mainClassName
        )}
        style={enablePerspective ? { perspective: "10px" } : undefined}
      >
        {children}
        {/* Footer inside main for scroll behavior parity */}
        {showFooter && <Footer />}
      </main>
    </div>
  );
}
