/** Configuration for ProcessSection floating cards and model pills */

/** Krea CDN base URL for images */
const KREA_CDN = "https://s.krea.ai";

/** Image URLs for floating cards */
export const CARD_IMAGES = {
  flux: `${KREA_CDN}/images-page-flux-card.webp`,
  krea: `${KREA_CDN}/images-page-krea-card.webp`,
  nanoBanana: `${KREA_CDN}/images-page-nano-banana-card.webp`,
  chatgpt: `${KREA_CDN}/images-page-chatgpt-card.webp`,
  imagen: `${KREA_CDN}/images-page-imagen-card.webp`,
  wan: `${KREA_CDN}/images-page-wan-card.webp`,
} as const;

/** Badge background color - light blue */
export const BADGE_BG_COLOR = "rgba(231, 239, 249, 1)";

/** Card positioning configurations - pixel-perfect from milestone.html */
export const CARD_POSITIONS = {
  /** Top-left: Flux - square, rotated 15deg */
  flux: {
    position: "top-12 -translate-y-1/2 left-56",
    rotation: "rotate-[15deg]",
    size: "square" as const,
  },
  /** Top-right: Krea - square, rotated -15deg */
  krea: {
    position: "top-12 -translate-y-1/2 right-56",
    rotation: "-rotate-[15deg]",
    size: "square" as const,
  },
  /** Middle-left: Nano Banana - landscape, rotated 1deg */
  nanoBanana: {
    position: "top-1/2 -translate-y-1/2 -left-20",
    rotation: "rotate-1",
    size: "landscape" as const,
  },
  /** Middle-right: ChatGPT - landscape, rotated -1deg */
  chatgpt: {
    position: "top-1/2 -translate-y-1/2 -right-16",
    rotation: "-rotate-1",
    size: "landscape" as const,
  },
  /** Bottom-left: Imagen - square, rotated -15deg */
  imagen: {
    position: "bottom-6 left-56",
    rotation: "-rotate-[15deg]",
    size: "square" as const,
  },
  /** Bottom-right: Wan - square, rotated 16deg */
  wan: {
    position: "bottom-12 right-56",
    rotation: "rotate-[16deg]",
    size: "square" as const,
  },
} as const;
