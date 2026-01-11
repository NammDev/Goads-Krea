import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import { PricingSection, EnterpriseFaqSection } from "@/components/sections";

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

      {/* Hero */}
      <section className="bg-primary-0 pb-12 pt-32">
        <div className="max-w-s2xl mx-auto section-container text-center">
          <h1 className="text-5xl font-semibold leading-tight text-primary-900 md:text-6xl lg:text-7xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-500">
            Start free, scale as you grow. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection />

      {/* FAQ Section */}
      <div className="max-w-s2xl mx-auto">
        <EnterpriseFaqSection />
      </div>
    </>
  );
}
