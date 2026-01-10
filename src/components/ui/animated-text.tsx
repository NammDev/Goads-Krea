"use client";

import { useRef, useState, useEffect } from "react";

interface AnimatedTextProps {
  /** Text to animate letter by letter */
  text: string;
  /** Base delay in ms before starting animation (default: 0) */
  baseDelay?: number;
  /** Delay between each letter in ms (default: 20) */
  letterDelay?: number;
  /** Animation duration per letter in ms (default: 400) */
  duration?: number;
}

/**
 * AnimatedText - Letter-by-letter reveal animation
 * Splits text into words, each word into letters
 * Animation: blur(4px) + translateY(8px) + opacity(0) → clear state
 * Triggered on scroll into viewport
 */
export function AnimatedText({
  text,
  baseDelay = 0,
  letterDelay = 20,
  duration = 400,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Split text into words
  const words = text.split(" ");
  let globalLetterIndex = 0;

  return (
    <div ref={containerRef} aria-hidden="true" className="inline">
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          aria-hidden="true"
          className="relative inline-block"
        >
          {word.split("").map((letter) => {
            const currentIndex = globalLetterIndex++;
            const delay = baseDelay + currentIndex * letterDelay;

            return (
              <div
                key={currentIndex}
                aria-hidden="true"
                className="relative inline-block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  filter: isVisible ? "blur(0px)" : "blur(4px)",
                  transform: isVisible
                    ? "translate(0px, 0px)"
                    : "translate(0px, 8px)",
                  transition: `opacity ${duration}ms ease-out ${delay}ms, filter ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
                  willChange: "opacity, filter, transform",
                }}
              >
                {letter}
              </div>
            );
          })}
          {/* Add space after word (except last word) */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </div>
      ))}
    </div>
  );
}
