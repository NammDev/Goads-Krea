"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/** FAQ item data structure */
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Enterprise FAQ data */
const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "enterprise-plan",
    question: "What is included in the Enterprise plan?",
    answer:
      "The Enterprise plan includes unlimited team licenses, SSO integration, dedicated support, custom billing, usage analytics, model and compute controls, priority access to new features, and enhanced security options.",
  },
  {
    id: "credit-based-model",
    question: "How does the credit-based model work?",
    answer:
      "You purchase credits upfront and they get consumed when your team generates content. Admins control spending with credit caps and tool restrictions. Simple, flexible, and transparent.",
  },
  {
    id: "try-enterprise",
    question: "Can I try Enterprise before committing?",
    answer:
      "Yes, we offer a free team trial so you can explore all Enterprise features with your team before making any commitment. Contact our sales team to get started.",
  },
  {
    id: "personalized-onboarding",
    question: "Do you offer personalized onboarding?",
    answer:
      "Absolutely. Every Enterprise customer receives dedicated onboarding support, including custom training sessions, workflow optimization, and ongoing guidance from our success team.",
  },
  {
    id: "enterprise-vs-teams",
    question: "How is Enterprise different from a Teams plan?",
    answer:
      "Enterprise offers advanced features like SSO, custom contracts, priority support, enhanced security controls, dedicated account management, and flexible billing options not available in Teams.",
  },
  {
    id: "support-included",
    question: "What kind of support is included?",
    answer:
      "Enterprise includes priority support with faster response times, dedicated account management, direct access to our engineering team for technical issues, and regular check-ins.",
  },
  {
    id: "content-rights",
    question: "What rights do we have over the content we create?",
    answer:
      "You retain full ownership and rights to all content created using Krea. Enterprise customers can also request exclusive licensing options for their generated content.",
  },
  {
    id: "train-on-data",
    question: "Does Krea train models on our data?",
    answer:
      "No. Enterprise customers have a strict no-train policy. Your data and generated content are never used to train our models without explicit consent.",
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
        className="flex w-full items-center justify-between py-4 text-left transition-opacity duration-200 hover:opacity-60"
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
      className="section-container py-24 md:py-40"
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
          Find answers to common questions about Krea&apos;s Enterprise
          solutions. Can&apos;t find what you&apos;re looking for? Contact our
          sales team.
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
