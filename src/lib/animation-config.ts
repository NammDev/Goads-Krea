/**
 * Animation Configuration
 * Centralized animation constants for consistent motion design
 */

// ============================================
// DURATION CONSTANTS (in milliseconds)
// ============================================
export const DURATION = {
  /** Ultra fast micro-interactions */
  instant: 100,
  /** Fast transitions (hover, focus) */
  fast: 150,
  /** Standard transitions */
  normal: 200,
  /** Smooth transitions (modal, slide) */
  smooth: 300,
  /** Slower, more dramatic animations */
  slow: 500,
  /** Complex animations, page transitions */
  slower: 800,
} as const;

// ============================================
// STAGGER DELAYS (in milliseconds)
// ============================================
export const STAGGER = {
  /** Tight stagger for dense grids */
  tight: 30,
  /** Default stagger for lists/grids */
  default: 60,
  /** Relaxed stagger for larger items */
  relaxed: 100,
  /** Dramatic stagger for hero sections */
  dramatic: 150,
} as const;

// ============================================
// EASING FUNCTIONS
// ============================================
export const EASING = {
  /** Standard ease out - most common */
  out: "ease-out",
  /** Standard ease in - for exits */
  in: "ease-in",
  /** Symmetric easing */
  inOut: "ease-in-out",
  /** Expo out - dramatic deceleration */
  expoOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  /** Spring-like bounce */
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  /** Linear - for continuous animations */
  linear: "linear",
} as const;

// ============================================
// INTERSECTION OBSERVER CONFIG
// ============================================
export const INTERSECTION = {
  /** Default threshold for scroll animations */
  threshold: 0.1,
  /** Default root margin for early trigger */
  rootMargin: "0px 0px -50px 0px",
} as const;

// ============================================
// TRANSFORM VALUES
// ============================================
export const TRANSFORM = {
  /** Slide up distance for reveal animations */
  slideUpDistance: 24,
  /** Larger slide for hero animations */
  slideUpHero: 80,
  /** Scale for subtle grow effects */
  scaleHover: 1.05,
} as const;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate stagger animation style for indexed items
 * @param isVisible - Whether the element should be visible
 * @param index - Index of the item in the list
 * @param options - Optional customization
 */
export function getStaggerAnimationStyle(
  isVisible: boolean,
  index: number,
  options?: {
    duration?: number;
    stagger?: number;
    distance?: number;
    easing?: string;
  }
): React.CSSProperties {
  const {
    duration = DURATION.smooth,
    stagger = STAGGER.default,
    distance = TRANSFORM.slideUpDistance,
    easing = EASING.out,
  } = options || {};

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : `translateY(${distance}px)`,
    transition: `opacity ${duration}ms ${easing} ${index * stagger}ms, transform ${duration}ms ${easing} ${index * stagger}ms`,
    willChange: "opacity, transform",
  };
}

/**
 * Generate slide-up animation style (GPU-accelerated)
 * @param isVisible - Whether the element should be visible
 * @param options - Optional customization
 */
export function getSlideUpStyle(
  isVisible: boolean,
  options?: {
    duration?: number;
    distance?: number;
    easing?: string;
  }
): React.CSSProperties {
  const {
    duration = DURATION.slower,
    distance = TRANSFORM.slideUpHero,
    easing = EASING.expoOut,
  } = options || {};

  return {
    transform: isVisible
      ? "translate3d(0px, 0px, 0px)"
      : `translate3d(0px, ${distance}px, 0px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}ms ${easing}, opacity ${duration}ms ${EASING.out}`,
    willChange: "transform, opacity",
  };
}

/**
 * CSS transition string builder
 * @param properties - Properties to transition
 * @param duration - Duration in ms
 * @param easing - Easing function
 */
export function buildTransition(
  properties: string[],
  duration: number = DURATION.normal,
  easing: string = EASING.out
): string {
  return properties
    .map((prop) => `${prop} ${duration}ms ${easing}`)
    .join(", ");
}

// ============================================
// TAILWIND CLASS HELPERS (for static classes)
// ============================================
export const TRANSITION_CLASSES = {
  /** Standard transition for interactive elements */
  default: "transition-all duration-200 ease-out",
  /** Fast transition for micro-interactions */
  fast: "transition-all duration-150 ease-out",
  /** Smooth transition for larger elements */
  smooth: "transition-all duration-300 ease-out",
  /** Colors only (optimized) */
  colors: "transition-colors duration-200 ease-out",
  /** Transform only (GPU accelerated) */
  transform: "transition-transform duration-200 ease-out",
  /** Opacity only */
  opacity: "transition-opacity duration-200 ease-out",
} as const;
