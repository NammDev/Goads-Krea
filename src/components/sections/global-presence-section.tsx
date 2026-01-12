import { SectionHeader } from "@/components/ui/section-header";
import { CTAButtonGroup } from "@/components/ui/cta-button-group";
import { Globe, Users, Languages, Clock } from "lucide-react";

/** Stat item configuration */
interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

/** Global presence statistics */
const STATS: readonly StatItem[] = [
  {
    value: "50+",
    label: "Countries Served",
    icon: <Globe className="size-6" />,
  },
  {
    value: "500+",
    label: "Active Clients",
    icon: <Users className="size-6" />,
  },
  {
    value: "3",
    label: "Support Languages",
    icon: <Languages className="size-6" />,
  },
  {
    value: "24/7",
    label: "Always Available",
    icon: <Clock className="size-6" />,
  },
] as const;

/**
 * Global Presence Section
 * Repurposed from InvestorShowcaseSection - shows world reach + stats
 */
export function GlobalPresenceSection() {
  return (
    <section className="section-container py-24 md:py-40">
      <SectionHeader
        subtitle="Global Reach"
        title="Serving Advertisers Worldwide"
        darkSubtitle
        className="max-w-4xl"
      />

      {/* Stats Grid */}
      <div className="mt-16 md:mt-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="text-primary-600 mb-3">{stat.icon}</div>
              <div className="text-primary-900 text-4xl font-bold md:text-5xl">
                {stat.value}
              </div>
              <div className="text-primary-600 mt-2 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Support languages detail */}
        <p className="text-primary-500 mt-8 text-center text-sm">
          English • Vietnamese • Chinese
        </p>
      </div>

      <CTAButtonGroup
        primaryText="Get Started"
        primaryHref="/products"
        secondaryText="Contact Sales"
        secondaryHref="/contact"
        spacing="lg"
      />
    </section>
  );
}
