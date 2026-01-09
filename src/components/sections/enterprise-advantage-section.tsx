import { FeatureList, type FeatureItem } from "@/components/ui/feature-list";

/** Advantage card configuration */
interface AdvantageCard {
  title: string;
  features: readonly FeatureItem[];
}

/** Enterprise advantage data */
const ADVANTAGE_CARDS: readonly AdvantageCard[] = [
  {
    title: "Team Organization",
    features: [
      { text: "Unlimited licenses" },
      { text: "Teams with shared compute & workspaces" },
      { text: "Multiple teams", badge: "SOON" },
      { text: "Enhanced RBAC", badge: "SOON" },
    ],
  },
  {
    title: "Administration",
    features: [
      { text: "SSO integration & permissions" },
      { text: "Custom billing" },
      { text: "Usage analytics & reports" },
      { text: "Model & compute controls" },
    ],
  },
  {
    title: "Services",
    features: [
      { text: "Priority support" },
      { text: "Onboarding training" },
      { text: "Security questionnaire support" },
      { text: "MSA legal support" },
    ],
  },
  {
    title: "Platform Features",
    features: [
      { text: "Early access to models" },
      { text: "No throttling (4 concurrent jobs)" },
      { text: "Extended LoRA training" },
      { text: "Team LoRAs & Files", badge: "SOON" },
    ],
  },
] as const;

/** Trust center link URL */
const TRUST_CENTER_URL =
  "https://krea-ai.secureframetrust.com/#compliance-ee96a391-068e-4497-a470-445024aa7adf";

/**
 * EnterpriseAdvantageSection - Enterprise platform advantages grid
 * Displays 4 cards with features highlighting enterprise capabilities
 */
export function EnterpriseAdvantageSection() {
  return (
    <section
      id="advantages"
      aria-labelledby="advantages-title"
      className="section-container pt-24 md:pt-40"
    >
      {/* Header */}
      <h2
        id="advantages-title"
        className="text-primary-900 mb-3 text-center text-2xl font-semibold sm:mb-4 sm:text-3xl md:text-4xl"
      >
        Enterprise Platform Advantages
      </h2>

      {/* Description with trust center link */}
      <p className="text-primary-600 mx-auto mb-8 max-w-4xl text-center text-sm sm:mb-12 sm:text-base">
        Comprehensive enterprise features designed to scale with your
        organization&apos;s creative workflow needs.{" "}
        <br className="hidden sm:block" />
        View our full security and compliance documentation on our{" "}
        <a
          href={TRUST_CENTER_URL}
          className="text-primary-900 hover:text-primary-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          trust center
        </a>
        .
      </p>

      {/* Advantage cards grid - responsive: 1col → 2col → 4col */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {ADVANTAGE_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-primary-200 p-4 sm:p-6"
          >
            <h3 className="text-primary-900 mb-2 text-base font-semibold sm:mb-3 sm:text-lg">
              {card.title}
            </h3>
            <FeatureList
              features={card.features}
              variant="enterprise"
              spacing="none"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
