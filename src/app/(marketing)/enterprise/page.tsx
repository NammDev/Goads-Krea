import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import {
  EnterpriseAdvantageSection,
  EnterpriseShowcaseSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
} from "@/components/sections";

export const metadata: Metadata = generatePageMetadata({
  title: "Enterprise",
  description:
    "Krea for Enterprise: dedicated support, custom integrations, SSO, and SLA guarantees for large teams.",
});

export default function EnterprisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Enterprise", url: `${siteConfig.url}/enterprise` },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary-1000 pb-20 pt-32">
        <div className="max-w-s2xl mx-auto section-container text-center">
          <h1 className="text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            Krea for Enterprise
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-400">
            Scale your creative workflows with dedicated support and
            enterprise-grade security
          </p>
        </div>
      </section>

      {/* Enterprise Sections */}
      <div className="max-w-s2xl mx-auto">
        <EnterpriseAdvantageSection />
        <EnterpriseShowcaseSection />
        <EnterpriseContactSection />
        <EnterpriseFaqSection />
      </div>
    </>
  );
}
