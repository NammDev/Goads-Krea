import { Metadata } from "next";
import { generatePageMetadata, BreadcrumbJsonLd, siteConfig } from "@/lib/seo";
import {
  BigPictureSection,
  ClientShowcaseSection,
  LogoPartnersSection,
} from "@/components/sections";

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

      {/* Hero */}
      <section className="bg-primary-0 pb-12 pt-32">
        <div className="max-w-s2xl mx-auto section-container text-center">
          <h1 className="text-5xl font-semibold leading-tight text-primary-900 md:text-6xl lg:text-7xl">
            About GoAds
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-primary-500">
            Real humans. Real accountability. The team you can trust.
          </p>
        </div>
      </section>

      {/* Company Sections */}
      <div className="max-w-s2xl mx-auto">
        <BigPictureSection />
        <ClientShowcaseSection />
        <LogoPartnersSection />
      </div>
    </>
  );
}
