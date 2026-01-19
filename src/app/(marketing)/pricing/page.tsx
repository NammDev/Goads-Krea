import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { PricingSection, EnterpriseFaqSection } from "@/components/sections";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = generatePageMetadata({
  title: "Pricing",
  description:
    "Choose the right Krea plan for you. Free tier available. Individual, Business, and Enterprise plans for teams of all sizes.",
});

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Pricing", url: `${siteConfig.url}/pricing` },
        ]}
      />

      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="Start free, scale as you grow. No hidden fees."
        variant="light"
        paddingBottom="sm"
      />

      {/* Pricing Cards */}
      <PricingSection />

      {/* FAQ Section */}
      <div className="max-w-s2xl mx-auto">
        <EnterpriseFaqSection />
      </div>
    </>
  );
}
