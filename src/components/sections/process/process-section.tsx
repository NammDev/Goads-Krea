import { cn } from "@/lib/utils";
import Link from "next/link";
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

/** Model pills for center display */
const MODEL_PILLS = [
  { name: "Flux", logo: <FluxLogo className="h-4 w-4" /> },
  { name: "Krea", logo: <KreaLogo className="h-4 w-4" /> },
  { name: "Imagen", logo: <ImagenLogo className="h-4 w-4" /> },
  { name: "Nano Banana", logo: <ImagenLogo className="h-4 w-4" /> },
  { name: "ChatGPT", logo: <ChatGPTLogo className="h-4 w-4" /> },
  { name: "Wan", logo: <WanLogo className="h-4 w-4" /> },
];

/**
 * ProcessSection - Pixel-perfect recreation of Krea milestone design
 * Features: Cross pattern bg, floating image cards, badge, heading, model pills, CTA
 */
export function ProcessSection() {
  return (
    <section
      className="cross-pattern-light relative flex justify-center overflow-hidden py-24 md:py-48"
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
              Get access to new models on the day they&apos;re released
            </p>

            {/* Heading */}
            <h2
              id="process-title"
              className="flex flex-col gap-0 text-center text-4xl font-medium tracking-[-1.12px] md:text-[56px]"
            >
              <span className="text-primary-1000 text-pretty">
                The world&apos;s best AI image generators
              </span>
              <span className="text-action">All in one tool</span>
            </h2>
          </div>

          {/* Model pills - hidden on mobile */}
          <div
            className="hidden flex-wrap items-center justify-center gap-3 md:flex"
            role="list"
            aria-label="Supported AI models"
          >
            {MODEL_PILLS.map((pill) => (
              <ModelPill key={pill.name} name={pill.name} logo={pill.logo} />
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/products"
              className={cn(
                "flex items-center justify-center",
                "relative overflow-hidden",
                "rounded-full px-6 py-3 h-[44px]",
                "bg-primary-1000 text-primary-0",
                "text-sm font-medium leading-none",
                "transition-all duration-200 ease-out",
                "hover:scale-[1.025]"
              )}
            >
              Start generating
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
