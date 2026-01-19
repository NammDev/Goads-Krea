import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import {
  EnterpriseAdvantageSection,
  EnterpriseShowcaseSection,
  EnterpriseContactSection,
  EnterpriseFaqSection,
} from "@/components/sections";
import { PageHero } from "@/components/ui";

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

      <PageHero
        title="Krea for Enterprise"
        subtitle="Scale your creative workflows with dedicated support and enterprise-grade security"
        variant="dark"
      />

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
