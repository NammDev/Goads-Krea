import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import {
  BigPictureSection,
  ClientShowcaseSection,
  LogoPartnersSection,
} from "@/components/sections";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Learn about GoAds - the trusted provider of Meta, TikTok, and Google ad accounts. Real humans, real accountability.",
});

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ]}
      />

      <PageHero
        title="About GoAds"
        subtitle="Real humans. Real accountability. The team you can trust."
        variant="light"
        paddingBottom="sm"
      />

      {/* Company Sections */}
      <div className="max-w-s2xl mx-auto">
        <BigPictureSection />
        <ClientShowcaseSection />
        <LogoPartnersSection />
      </div>
    </>
  );
}
