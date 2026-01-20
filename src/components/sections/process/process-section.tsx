import { GradientButton } from "@/components/ui/gradient-button";
import {
  FluxLogo,
  KreaLogo,
  ImagenLogo,
  ChatGPTLogo,
  WanLogo,
  FlameIcon,
} from "./brand-logos";
import {
  FloatingImageCard,
  ModelPill,
  type FloatingCardData,
} from "./floating-card";
import { CARD_IMAGES, CARD_POSITIONS, BADGE_BG_COLOR } from "./process-config";

/** Build floating cards data from config */
const FLOATING_CARDS: FloatingCardData[] = [
  {
    id: "flux",
    name: "Flux",
    logo: <FluxLogo />,
    image: CARD_IMAGES.flux,
    ...CARD_POSITIONS.flux,
  },
  {
    id: "krea",
    name: "Krea",
    logo: <KreaLogo />,
    image: CARD_IMAGES.krea,
    ...CARD_POSITIONS.krea,
  },
  {
    id: "nano-banana",
    name: "Nano Banana",
    logo: <ImagenLogo />,
    image: CARD_IMAGES.nanoBanana,
    ...CARD_POSITIONS.nanoBanana,
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: <ChatGPTLogo />,
    image: CARD_IMAGES.chatgpt,
    ...CARD_POSITIONS.chatgpt,
  },
  {
    id: "imagen",
    name: "Imagen",
    logo: <ImagenLogo />,
    image: CARD_IMAGES.imagen,
    ...CARD_POSITIONS.imagen,
  },
  {
    id: "wan",
    name: "Wan",
    logo: <WanLogo />,
    image: CARD_IMAGES.wan,
    ...CARD_POSITIONS.wan,
  },
];

/** Stats pills for center display */
const MODEL_PILLS = [
  { name: "3,242+ BM1 Sold", logo: <FluxLogo className="h-5 w-5" /> },
  { name: "1,849+ BM5 Sold", logo: <KreaLogo className="h-5 w-5" /> },
  { name: "4,335+ Profiles", logo: <ImagenLogo className="h-5 w-5" /> },
  { name: "500+ Clients", logo: <ImagenLogo className="h-5 w-5" /> },
  { name: "50+ Countries", logo: <ChatGPTLogo className="h-5 w-5" /> },
  { name: "5+ Years", logo: <WanLogo className="h-5 w-5" /> },
];

/**
 * ProcessSection - GoAds stats showcase section
 * Features: Cross pattern bg, floating image cards, badge, heading, stats pills, CTA
 */
export function ProcessSection() {
  return (
    <section
      className="cross-pattern relative flex justify-center overflow-hidden py-24 md:py-48"
      aria-labelledby="process-title"
    >
      {/* Ellipse gradient overlay */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="ellipse-gradient-light max-w-s2xl absolute top-1/2 left-1/2 h-[100vh] w-[150vw] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Floating cards container - hidden on mobile, visible on lg+ */}
      <div
        className="absolute inset-0 hidden h-full w-full items-center justify-center lg:flex"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 flex h-full min-h-[800px] w-full max-w-[1440px] min-w-[960px] -translate-x-1/2 items-center justify-center md:min-w-[1280px]">
          <div className="absolute top-0 left-0 z-0 h-full w-full">
            {FLOATING_CARDS.map((card) => (
              <FloatingImageCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center justify-between">
        <div className="flex max-w-4xl flex-col items-center justify-center gap-16 md:gap-24">
          <div className="flex flex-col items-center justify-center gap-10">
            {/* Badge */}
            <p
              className="text-action inline-flex items-center gap-2.5 rounded-sm px-3 py-2 text-center text-xs font-medium backdrop-blur-lg"
              style={{ backgroundColor: BADGE_BG_COLOR }}
            >
              <FlameIcon />
              7-Day Warranty on Every Product
            </p>

            {/* Heading - pixel-perfect from milestone.html */}
            <h2
              id="process-title"
              className="flex flex-col text-4xl gap-0 text-center text-[40px] font-medium tracking-[-1.12px] md:text-[56px]"
            >
              <span className="text-primary-1000 text-pretty">
                Trusted by 500+ Advertisers
              </span>
              <span className="text-action">Worldwide</span>
            </h2>
            {/* Stats pills */}
            <div
              className="flex flex-wrap items-center justify-center gap-3 overflow-hidden md:gap-4"
              role="list"
              aria-label="GoAds statistics"
            >
              {MODEL_PILLS.map((pill) => (
                <ModelPill key={pill.name} name={pill.name} logo={pill.logo} />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <GradientButton
              as="link"
              href="/products"
              variant="primary"
              className="rounded-full px-6 h-[44px]"
            >
              Get Started
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
