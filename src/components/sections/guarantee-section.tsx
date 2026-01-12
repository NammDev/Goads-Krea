import { FeatureList, type FeatureItem } from "@/components/ui/feature-list";

/** Guarantee card configuration */
interface GuaranteeCard {
  title: string;
  features: readonly FeatureItem[];
}

/** GoAds guarantee cards data */
const GUARANTEE_CARDS: readonly GuaranteeCard[] = [
  {
    title: "7-Day Replacement",
    features: [
      { text: "1:1 replacement for issues" },
      { text: "No questions asked within policy" },
      { text: "Fast turnaround" },
      { text: "Clear eligibility criteria" },
    ],
  },
  {
    title: "Quality Assurance",
    features: [
      { text: "Pre-tested before delivery" },
      { text: "Verified documentation" },
      { text: "Aged and stable assets" },
      { text: "Proper structure and setup" },
    ],
  },
  {
    title: "Support Promise",
    features: [
      { text: "Real humans, not bots" },
      { text: "24/7 availability" },
      { text: "Multi-channel support" },
      { text: "Direct access to team" },
    ],
  },
  {
    title: "Professional Setup",
    features: [
      { text: "Clear delivery process" },
      { text: "Setup guidance included" },
      { text: "Best practices documentation" },
      { text: "Onboarding support" },
    ],
  },
] as const;

/**
 * GuaranteeSection - GoAds guarantee cards grid
 * Repurposed from EnterpriseAdvantageSection
 * Displays 4 cards with guarantee features
 */
export function GuaranteeSection() {
  return (
    <section
      id="guarantee"
      aria-labelledby="guarantee-title"
      className="section-container pt-24"
    >
      {/* Header */}
      <h2
        id="guarantee-title"
        className="text-primary-900 mb-3 text-center text-2xl font-semibold sm:mb-4 sm:text-3xl md:text-4xl"
      >
        Our Guarantee to You
      </h2>

      {/* Description */}
      <p className="text-primary-600 mx-auto mb-8 max-w-4xl text-center text-sm sm:mb-12 sm:text-base">
        Professional standards, no compromises. We stand behind every product we
        sell with clear policies and real accountability.
      </p>

      {/* Guarantee cards grid - responsive: 1col → 2col → 4col */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
        {GUARANTEE_CARDS.map((card) => (
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
