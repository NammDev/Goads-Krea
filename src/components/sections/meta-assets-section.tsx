"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Building2, User, FileText, Layers, Package, Plus } from "lucide-react";

/** Asset category for sidebar navigation */
interface AssetCategory {
  id: string;
  name: string;
  shortName: string;
  icon: React.ReactNode;
}

/** Product data structure */
interface Product {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
  category: string;
}

/** Asset categories for sidebar */
const ASSET_CATEGORIES: AssetCategory[] = [
  {
    id: "bm",
    name: "Business Manager",
    shortName: "BM",
    icon: <Building2 className="size-5" />,
  },
  {
    id: "profiles",
    name: "Profiles",
    shortName: "Profiles",
    icon: <User className="size-5" />,
  },
  {
    id: "pages",
    name: "Pages",
    shortName: "Pages",
    icon: <FileText className="size-5" />,
  },
  {
    id: "pixels",
    name: "Pixels",
    shortName: "Pixels",
    icon: <Layers className="size-5" />,
  },
  {
    id: "combos",
    name: "Combos",
    shortName: "Combos",
    icon: <Package className="size-5" />,
  },
];

/** Meta Assets products */
const PRODUCTS: Product[] = [
  {
    name: "Business Manager BM1",
    priceRange: "$50-80",
    description: "Verified with running campaign capability",
    features: ["Create Pixel", "Running Campaign", "Basic DSL"],
    icon: <Building2 className="size-6" />,
    href: "/products/bm-verified",
    category: "bm",
  },
  {
    name: "Business Manager BM5",
    priceRange: "$280-350",
    description: "Enterprise-grade with $250+ DSL",
    features: ["Unlimited Capacity", "High Trust", "Proven Track"],
    icon: <Building2 className="size-6" />,
    href: "/products/bm-verified",
    category: "bm",
  },
  {
    name: "Premium Aged Profiles",
    priceRange: "$35-50",
    description: "Reinstated, aged accounts for admin roles",
    features: ["2FA Enabled", "3+ Years Old", "Clean History"],
    icon: <User className="size-6" />,
    href: "/products/profiles-aged",
    category: "profiles",
  },
  {
    name: "Advertising Pages",
    priceRange: "$25-40",
    description: "Niche-optimized pages for better ad delivery",
    features: ["Good Feedback", "Aged", "Niche-Aligned"],
    icon: <FileText className="size-6" />,
    href: "/products/pages",
    category: "pages",
  },
  {
    name: "Pixel Bank BM",
    priceRange: "$50-80",
    description: "Dedicated BM for pixel management",
    features: ["Unlimited Pixels", "Event Tracking", "API Access"],
    icon: <Layers className="size-6" />,
    href: "/products/bm-standard",
    category: "pixels",
  },
  {
    name: "Profile + Page Combo",
    priceRange: "$55-75",
    description: "Complete setup for new ad account",
    features: ["Admin Profile", "Optimized Page", "Ready to Use"],
    icon: <Package className="size-6" />,
    href: "/products",
    category: "combos",
  },
];

/** Single product card */
function ProductCard({
  product,
  style,
}: {
  product: Product;
  style?: React.CSSProperties;
}) {
  return (
    <Link
      href={product.href}
      className="group rounded-2xl border border-primary-200 bg-white p-6 transition-all duration-200 hover:border-primary-400 hover:shadow-lg"
      style={style}
    >
      {/* Icon and Price */}
      <div className="flex items-start justify-between">
        <div className="rounded-xl bg-primary-100 p-3 text-primary-700">
          {product.icon}
        </div>
        <span className="text-lg font-bold text-primary-900">
          {product.priceRange}
        </span>
      </div>

      {/* Name and Description */}
      <h3 className="mt-4 text-lg font-semibold text-primary-900 group-hover:text-primary-700">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-primary-600">{product.description}</p>

      {/* Features */}
      <div className="mt-4 flex flex-wrap gap-2">
        {product.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}

/** Sidebar panel for asset type switching */
function AssetSidebarPanel({
  activeCategory,
  onCategoryChange,
}: {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}) {
  return (
    <div className="top-1/2 left-0 px-5 lg:absolute lg:px-0 lg:pl-4">
      <div
        className={cn(
          "bg-primary-200 ring-primary-0 flex gap-2 rounded-2xl p-2.5 ring-2 ring-inset",
          "shadow-[-2px_-2px_12px_rgba(0,0,0,0.1),-10px_-10px_32px_rgba(0,0,0,0.1)]",
          "lg:-translate-y-1/2 lg:flex-col"
        )}
      >
        {/* All products button */}
        <button
          type="button"
          onClick={() => onCategoryChange("all")}
          className={cn(
            "aspect-square w-10 shrink-0 rounded-md p-2 transition-all duration-200 lg:w-12",
            activeCategory === "all"
              ? "bg-primary-900 text-white shadow-md"
              : "bg-primary-0 text-primary-1000 shadow-[0_1px_6px_rgba(0,0,0,0.1)] hover:bg-primary-50"
          )}
          title="All Products"
        >
          <Plus className="mx-auto size-4" />
        </button>

        {/* Category buttons */}
        <div className="flex flex-1 gap-2 lg:flex-col">
          {ASSET_CATEGORIES.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex aspect-square w-10 shrink-0 items-center justify-center rounded-md transition-all duration-200 lg:h-auto lg:w-12",
                activeCategory === category.id
                  ? "bg-primary-900 text-white shadow-md"
                  : "bg-primary-0 text-primary-700 shadow-[0_1px_6px_rgba(0,0,0,0.1)] hover:bg-primary-50"
              )}
              title={category.name}
            >
              {category.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * MetaAssetsSection - Full screen grey break section for Meta Assets
 * KREA-INSPIRED: Grey break styling like ProcessSection with sidebar navigation
 * Features: Sidebar panel for category switching, full-width grey background
 */
export function MetaAssetsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter products by category
  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  // Get active category name for display
  const activeCategoryName =
    activeCategory === "all"
      ? "All Products"
      : ASSET_CATEGORIES.find((c) => c.id === activeCategory)?.name ||
        "Products";

  // Stagger animation style generator
  const getAnimationStyle = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 300ms ease-out ${
      index * 60
    }ms, transform 300ms ease-out ${index * 60}ms`,
    willChange: "opacity, transform",
  });

  return (
    <section
      ref={sectionRef}
      className="bg-primary-100 relative z-10"
      aria-labelledby="meta-assets-title"
    >
      <div className="flex flex-col items-center gap-12 py-24 md:py-40">
        {/* Main content */}
        <div className="mx-auto flex flex-col items-center justify-center px-5 md:px-16">
          <p className="text-primary-500 mb-2 text-sm font-medium uppercase tracking-wider">
            The foundation your ad accounts need
          </p>
          <h2
            id="meta-assets-title"
            className="text-center text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional Meta Assets
            <br />
            <span className="text-primary-600">{activeCategoryName}</span>
          </h2>
          <p className="text-primary-700 mx-auto mt-6 max-w-2xl text-center text-base leading-tight sm:text-xl">
            Premium quality assets verified for advertising. Each product is
            carefully screened to ensure maximum account longevity and ad
            performance.
          </p>

          {/* Products Grid */}
          <div className="mt-12 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                style={getAnimationStyle(index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className={cn(
                "inline-flex items-center justify-center gap-2",
                "rounded-full px-8 py-3",
                "bg-primary-900 text-white",
                "text-sm font-medium",
                "transition-all duration-200",
                "hover:bg-primary-800"
              )}
            >
              View All Products
            </Link>
          </div>
        </div>

        {/* Sidebar panel - positioned left on lg screens */}
        <AssetSidebarPanel
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>
    </section>
  );
}
