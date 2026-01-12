import { SectionHeader } from "@/components/ui/section-header";
import { CTAButtonGroup } from "@/components/ui/cta-button-group";

/** Client data with logo */
interface Client {
  name: string;
  logo: React.ReactNode;
}

/** Client logo placeholders - replace with actual client logos */
function ScaleMediaLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      ScaleMedia
    </span>
  );
}

function ClickFlowLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      ClickFlow
    </span>
  );
}

function GrowthHackersLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      GrowthHackers
    </span>
  );
}

function AdVentureLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      AdVenture
    </span>
  );
}

function ConvertCoLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      ConvertCo
    </span>
  );
}

function MediaMaxLogo() {
  return (
    <span className="font-semibold text-xl tracking-tight text-primary-800">
      MediaMax
    </span>
  );
}

/** Client configuration - placeholder clients, replace with real ones */
const CLIENTS: readonly Client[] = [
  { name: "ScaleMedia", logo: <ScaleMediaLogo /> },
  { name: "ClickFlow", logo: <ClickFlowLogo /> },
  { name: "GrowthHackers", logo: <GrowthHackersLogo /> },
  { name: "AdVenture", logo: <AdVentureLogo /> },
  { name: "ConvertCo", logo: <ConvertCoLogo /> },
  { name: "MediaMax", logo: <MediaMaxLogo /> },
] as const;

/**
 * Client Showcase Section
 * Design: 100% original Krea InvestorShowcaseSection design
 * Content: Changed from investors to clients for GoAds
 */
export function ClientShowcaseSection() {
  return (
    <section className="section-container pt-24 md:pt-40">
      <SectionHeader
        subtitle="Trusted by agencies worldwide"
        title="Join 1,750+ businesses scaling with GoAds. We&apos;re here to help."
        darkSubtitle
        className="max-w-4xl"
      />

      {/* Client Logos - Desktop (xl+) */}
      <div className="mt-16 md:mt-24">
        <div className="hidden w-full items-center justify-between gap-8 xl:flex">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="transition-transform duration-200 ease-out hover:scale-105"
            >
              {client.logo}
            </div>
          ))}
        </div>

        {/* Client Logos - Mobile/Tablet (< xl) */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:hidden">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center transition-transform duration-200 ease-out hover:scale-105"
            >
              {client.logo}
            </div>
          ))}
        </div>
      </div>

      <CTAButtonGroup
        primaryText="Get Started"
        primaryHref="/products"
        secondaryText="Contact Support"
        secondaryHref="/contact"
        spacing="lg"
      />
    </section>
  );
}
