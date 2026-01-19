"use client";

import { useRef, useState, useEffect, type RefObject } from "react";

interface UseScrollTriggerOptions {
  /** Intersection threshold (0-1). Default: 0.1 */
  threshold?: number;
  /** Root margin for observer. Default: "0px 0px -50px 0px" */
  rootMargin?: string;
  /** Only trigger once. Default: true */
  triggerOnce?: boolean;
}

interface UseScrollTriggerReturn<T extends HTMLElement> {
  ref: RefObject<T | null>;
  isVisible: boolean;
}

/**
 * Hook for scroll-triggered animations using IntersectionObserver
 * Eliminates duplicate IntersectionObserver logic across components
 *
 * @param options - Configuration options
 * @returns ref to attach to element and visibility state
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useScrollTrigger<HTMLElement>();
 * return <section ref={ref} style={{ opacity: isVisible ? 1 : 0 }}>...</section>
 * ```
 */
export function useScrollTrigger<T extends HTMLElement = HTMLElement>(
  options: UseScrollTriggerOptions = {}
): UseScrollTriggerReturn<T> {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
