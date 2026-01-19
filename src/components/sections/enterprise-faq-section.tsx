"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** FAQ item data structure */
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** GoAds FAQ data */
const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "agency-ad-account",
    question: "What is an agency ad account?",
    answer:
      "Agency accounts are pre-established advertising accounts with higher trust scores from the platform. They typically have fewer restrictions, faster approvals, and better stability than new personal accounts.",
  },
  {
    id: "asset-banned",
    question: "What happens if my asset gets banned?",
    answer:
      "We offer 7-day warranty with 1:1 replacement. If something goes wrong within the warranty period (and it's not due to policy violation on your end), we replace it free.",
  },
  {
    id: "goads-different",
    question: "How is GoAds different from other providers?",
    answer:
      "We operate as a professional agency, not an MMO-style vendor. That means structured processes, clear communication, real support, and accountability. Agencies trust us as their supplier — that's our quality standard.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept Stripe, PayPal, bank transfer (Wise, IBAN), and cryptocurrency (Bitcoin, USDT).",
  },
  {
    id: "delivery-speed",
    question: "How fast is delivery?",
    answer:
      "Most orders are delivered within 24 hours. Complex setups may take up to 48 hours.",
  },
  {
    id: "support-after-purchase",
    question: "What support do you offer after purchase?",
    answer:
      "Fast response via Telegram, WhatsApp, or Discord. We're a small team, so you get real humans who know your order — not ticket numbers.",
  },
  {
    id: "bm5-expensive",
    question: "Why are BM5 accounts more expensive?",
    answer:
      "BM5 accounts have already run campaigns successfully, giving them higher trust with Meta. BM1 accounts are verified but haven't been 'proven' yet. More trust = more stability = higher price.",
  },
] as const;

/** Chevron icon component for accordion */
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "h-4 w-4 shrink-0 transition-transform duration-200",
        isOpen && "rotate-180"
      )}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** Single FAQ accordion item */
function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-primary-200">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between py-4 text-left transition-opacity duration-200 hover:opacity-60"
        aria-expanded={isOpen}
        aria-controls={`content-${item.id}`}
      >
        <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
          {item.question}
        </div>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        id={`content-${item.id}`}
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-primary-500 pb-4 sm:pb-5 lg:pb-6 lg:text-lg">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * EnterpriseFaqSection - Frequently Asked Questions accordion
 * Displays common questions about Krea's Enterprise solutions
 */
export function EnterpriseFaqSection() {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-container pb-24 md:pb-36"
    >
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
        <h2
          id="faq-title"
          className="text-primary-900 mb-3 text-2xl font-medium leading-tight lg:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-primary-500 lg:text-lg">
          Find answers to common questions about GoAds products and services.
          Can&apos;t find what you&apos;re looking for? Contact our support
          team.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="mx-auto mt-16 w-full max-w-3xl">
        {FAQ_ITEMS.map((item) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </div>
    </section>
  );
}
