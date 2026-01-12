"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Building2, User, FileText, Layers, Package } from "lucide-react";

/** Product data structure */
interface Product {
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  href: string;
}

/** Meta Assets products */
const PRODUCTS: Product[] = [
  {
    name: "Business Manager BM1",
    priceRange: "$50-80",
    description: "Verified with running campaign capability",
    features: ["Create Pixel", "Running Campaign", "Basic DSL"],
    icon: <Building2 className="size-6" />,
    href: "/products/bm-verified",
  },
  {
    name: "Business Manager BM5",
    priceRange: "$280-350",
    description: "Enterprise-grade with $250+ DSL",
    features: ["Unlimited Capacity", "High Trust", "Proven Track"],
    icon: <Building2 className="size-6" />,
    href: "/products/bm-verified",
  },
  {
    name: "Premium Aged Profiles",
    priceRange: "$35-50",
    description: "Reinstated, aged accounts for admin roles",
    features: ["2FA Enabled", "3+ Years Old", "Clean History"],
    icon: <User className="size-6" />,
    href: "/products/profiles-aged",
  },
  {
    name: "Advertising Pages",
    priceRange: "$25-40",
    description: "Niche-optimized pages for better ad delivery",
    features: ["Good Feedback", "Aged", "Niche-Aligned"],
    icon: <FileText className="size-6" />,
    href: "/products/pages",
  },
  {
    name: "Pixel Bank BM",
    priceRange: "$50-80",
    description: "Dedicated BM for pixel management",
    features: ["Unlimited Pixels", "Event Tracking", "API Access"],
    icon: <Layers className="size-6" />,
    href: "/products/bm-standard",
  },
  {
    name: "Profile + Page Combo",
    priceRange: "$55-75",
    description: "Complete setup for new ad account",
    features: ["Admin Profile", "Optimized Page", "Ready to Use"],
    icon: <Package className="size-6" />,
    href: "/products",
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

/**
 * Meta Assets Products Section
 * KREA-INSPIRED: Product cards with prices following Krea design system
 * Features: 6 product cards in responsive grid with scroll animations
 */
export function MetaAssetsSection() {
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

  // Stagger animation style generator
  const getAnimationStyle = (index: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(24px)",
    transition: `opacity 300ms ease-out ${index * 60}ms, transform 300ms ease-out ${index * 60}ms`,
    willChange: "opacity, transform",
  });

  return (
    <section
      ref={sectionRef}
      className="section-container pt-24 md:pt-40"
      aria-labelledby="meta-assets-title"
    >
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-primary-500 mb-2 text-sm font-medium uppercase tracking-wider">
          The foundation your ad accounts need
        </p>
        <h2
          id="meta-assets-title"
          className="text-primary-900 text-3xl font-semibold md:text-4xl"
        >
          Professional Meta Assets
        </h2>
      </div>

      {/* Products Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product, index) => (
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
    </section>
  );
}
