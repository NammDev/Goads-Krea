"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

/** Highlight component for emphasized text */
function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-primary-100 px-1 py-0.5 font-semibold text-primary-900",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Testimonial data structure */
interface Testimonial {
  name: string;
  role: string;
  img: string;
  description: React.ReactNode;
}

/** GoAds testimonials data */
const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "Agency Owner at ScaleMedia",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    description: (
      <p>
        We completely moved from Proads to GoAds.{" "}
        <Highlight>
          Better service, faster support, accounts that actually stay alive.
        </Highlight>{" "}
        It&apos;s a no-brainer for any serious media buyer.
      </p>
    ),
  },
  {
    name: "Sarah Kim",
    role: "Performance Lead at ClickFlow Agency",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Fast and reliable support. Haven&apos;t used anyone else since we
        switched.{" "}
        <Highlight>
          The 7-day warranty gives us complete peace of mind.
        </Highlight>{" "}
        Highly recommend for any e-commerce advertiser.
      </p>
    ),
  },
  {
    name: "David Rodriguez",
    role: "Media Buyer at GrowthHackers",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        Support is way better than Proads. They actually respond within hours,
        not days. <Highlight>Game changer for our campaigns.</Highlight> Finally
        found a provider we can trust.
      </p>
    ),
  },
  {
    name: "Emma Thompson",
    role: "Dropshipper & Brand Owner",
    img: "https://randomuser.me/api/portraits/women/83.jpg",
    description: (
      <p>
        Very good experience with GoAds. Fast delivery, reliable accounts.{" "}
        <Highlight>The team knows what they&apos;re doing.</Highlight> Essential
        for scaling my stores.
      </p>
    ),
  },
  {
    name: "Alex Patel",
    role: "Scaling Director at AdVenture Agency",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    description: (
      <p>
        BM5s are rock solid.{" "}
        <Highlight>No issues in 6 months of heavy spend.</Highlight> Finally
        found a provider that delivers on promises. Worth every dollar.
      </p>
    ),
  },
  {
    name: "Jessica Liu",
    role: "E-commerce Brand Manager",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    description: (
      <p>
        Warranty claim handled in under 2 hours.{" "}
        <Highlight>Impressed with the professionalism and speed.</Highlight>{" "}
        That&apos;s exactly how it should be done.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Performance Marketer at DataDriven",
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    description: (
      <p>
        Finally, a provider that operates like a real business.{" "}
        <Highlight>Professional, reliable, and actually delivers.</Highlight>{" "}
        Recommended to all my media buyer friends.
      </p>
    ),
  },
  {
    name: "Rachel Green",
    role: "E-commerce Manager at TrendSetters",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    description: (
      <p>
        Switched from 3 different vendors. GoAds is the one that sticks.{" "}
        <Highlight>Quality accounts, fair prices, real support.</Highlight>{" "}
        Couldn&apos;t be happier with the decision.
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Founder at ScaleUp Studios",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
    description: (
      <p>
        Spent $50k+ monthly through GoAds accounts.{" "}
        <Highlight>Zero bans, zero issues, zero downtime.</Highlight> This is
        what premium service looks like.
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "CEO at Digital Nomad Agency",
    img: "https://randomuser.me/api/portraits/women/73.jpg",
    description: (
      <p>
        Their agency accounts are truly enterprise-grade.{" "}
        <Highlight>Consistent performance across all our clients.</Highlight>{" "}
        GoAds understands what agencies need.
      </p>
    ),
  },
  {
    name: "Jake Morrison",
    role: "Head of Growth at ConvertCo",
    img: "https://randomuser.me/api/portraits/men/25.jpg",
    description: (
      <p>
        The quality difference is night and day.{" "}
        <Highlight>Our ROAS improved 40% after switching to GoAds.</Highlight>{" "}
        The accounts just perform better.
      </p>
    ),
  },
  {
    name: "Nadia Ali",
    role: "COO at MediaMax Agency",
    img: "https://randomuser.me/api/portraits/women/78.jpg",
    description: (
      <p>
        We manage 50+ client accounts through GoAds.{" "}
        <Highlight>Their bulk pricing and VIP support is unmatched.</Highlight>{" "}
        True partnership, not just a vendor.
      </p>
    ),
  },
];

/** Single testimonial card component - matches original design */
function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
}: Testimonial & { className?: string }) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col justify-between gap-4 rounded-xl p-4",
        "border border-primary-200 bg-white",
        className
      )}
    >
      {/* Quote text - first */}
      <div className="select-none text-sm font-normal text-primary-700 leading-relaxed">
        {description}
      </div>

      {/* Star rating - after quote */}
      <div className="flex flex-row gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>

      {/* User info - at bottom */}
      <div className="flex w-full select-none items-center justify-start gap-3">
        <Image
          width={40}
          height={40}
          src={img}
          alt={name}
          className="h-10 w-10 rounded-full ring-1 ring-primary-200 ring-offset-4"
        />
        <div>
          <p className="font-medium text-primary-500">{name}</p>
          <p className="text-xs font-normal text-primary-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Testimonials Bento Section
 * Vertical marquee columns with animated testimonial cards
 * Design: 4-column layout matching original Admiral design
 */
export function TestimonialsBentoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split testimonials into 4 columns (3 per column for 12 testimonials)
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6, 9);
  const column4 = testimonials.slice(9, 12);

  return (
    <section
      ref={sectionRef}
      className="section-container pt-24 md:pt-40"
      aria-labelledby="testimonials-title"
    >
      {/* Header */}
      <div className="mb-10 text-center">
        <p className="text-primary-500 mb-2 text-sm font-medium uppercase tracking-wider">
          Real feedback from active advertisers
        </p>
        <h2
          id="testimonials-title"
          className="text-primary-900 text-3xl font-semibold md:text-4xl"
        >
          What Our Clients Say
        </h2>
      </div>

      {/* Testimonials Marquee Grid - 4 columns like original */}
      <div
        className={cn(
          "relative max-h-screen overflow-hidden transition-opacity duration-500",
          isVisible ? "opacity-100" : "opacity-0"
        )}
      >
        {/* 4-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Column 1 */}
          <Marquee vertical pauseOnHover className="[--duration:40s]">
            {column1.map((card, idx) => (
              <TestimonialCard key={idx} {...card} />
            ))}
          </Marquee>

          {/* Column 2 */}
          <Marquee vertical pauseOnHover className="[--duration:60s]">
            {column2.map((card, idx) => (
              <TestimonialCard key={idx} {...card} />
            ))}
          </Marquee>

          {/* Column 3 */}
          <Marquee vertical pauseOnHover className="[--duration:35s]">
            {column3.map((card, idx) => (
              <TestimonialCard key={idx} {...card} />
            ))}
          </Marquee>

          {/* Column 4 */}
          <Marquee vertical pauseOnHover className="[--duration:55s]">
            {column4.map((card, idx) => (
              <TestimonialCard key={idx} {...card} />
            ))}
          </Marquee>
        </div>

        {/* Top gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-primary-0 from-20%" />
        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-primary-0 from-20%" />
      </div>
    </section>
  );
}
