"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Monthly ad spend options */
const AD_SPEND_OPTIONS = [
  { value: "", label: "Select monthly ad spend" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
] as const;

/** Interest options for GoAds */
const INTEREST_OPTIONS = [
  { value: "", label: "What are you looking for?" },
  { value: "agency-accounts", label: "Agency Ad Accounts (Meta/Google/TikTok)" },
  { value: "business-managers", label: "Business Managers (BM1-BM5)" },
  { value: "profiles-pages", label: "Profiles & Pages" },
  { value: "bulk-order", label: "Bulk/Wholesale Order" },
  { value: "custom-setup", label: "Custom Setup Package" },
  { value: "reseller", label: "Reseller Partnership" },
  { value: "other", label: "Other" },
] as const;

/** Background image URL */
const HERO_IMAGE_URL = "https://www.krea.ai/series-b-hero.webp";

/** Input field styles */
const inputStyles = cn(
  "w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none sm:px-4 sm:py-3 sm:text-base",
  "border-primary-300 bg-white text-primary-900",
  "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
  "placeholder:text-primary-400"
);

/** Label styles */
const labelStyles =
  "text-primary-700 mb-1.5 block text-xs font-medium sm:mb-2 sm:text-sm";

/** Form field wrapper component */
function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={labelStyles}>
        {label}
        {required && " *"}
      </label>
      {children}
    </div>
  );
}

/**
 * EnterpriseContactSection - Sales contact form with hero image
 * Two-column layout: left side has title/subtitle over background, right side has form
 */
export function EnterpriseContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission logic would go here
    // For now, just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    // Reset form or show success message
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-container pt-24 md:pt-40"
    >
      {/* Inner container with background image */}
      <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE_URL}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content grid */}
        <div className="relative z-10 grid items-stretch gap-0 lg:grid-cols-2">
          {/* Left: Hero text */}
          <div className="flex items-center">
            <div className="p-6 text-white sm:p-8 md:p-10 lg:p-12">
              <h2
                id="contact-title"
                className="mb-3 text-3xl font-semibold leading-tight sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                Need a custom quote?
              </h2>
              <p className="text-base opacity-90 sm:text-lg md:text-xl lg:text-2xl">
                Bulk orders, reseller partnerships, or custom setups — let&apos;s
                talk about what you need.
              </p>
            </div>
          </div>

          {/* Right: Contact form - fills to edge on desktop */}
          <div className="bg-primary-50 p-4 sm:p-6 md:p-8 rounded-2xl">
            <h3 className="text-primary-900 mb-1.5 text-lg font-semibold sm:mb-2 sm:text-xl md:text-2xl">
              Get a custom quote
            </h3>
            <p className="text-primary-600 mb-4 text-sm sm:mb-6 sm:text-base">
              Tell us what you&apos;re looking for and we&apos;ll get back within 24h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* First Name / Last Name row */}
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <FormField label="First Name" htmlFor="firstName" required>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Richard"
                    className={inputStyles}
                  />
                </FormField>

                <FormField label="Last Name" htmlFor="lastName" required>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Hendricks"
                    className={inputStyles}
                  />
                </FormField>
              </div>

              {/* Work Email */}
              <FormField label="Work Email" htmlFor="email" required>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="richard@piedpiper.com"
                  className={inputStyles}
                />
              </FormField>

              {/* Telegram/WhatsApp */}
              <FormField label="Telegram or WhatsApp" htmlFor="contact" required>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  required
                  placeholder="@yourtelegram or +1234567890"
                  className={inputStyles}
                />
              </FormField>

              {/* Monthly Ad Spend */}
              <FormField label="Monthly Ad Spend" htmlFor="adSpend" required>
                <select
                  id="adSpend"
                  name="adSpend"
                  required
                  className={inputStyles}
                  defaultValue=""
                >
                  {AD_SPEND_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Interest */}
              <FormField label="What are you looking for?" htmlFor="interest" required>
                <select
                  id="interest"
                  name="interest"
                  required
                  className={inputStyles}
                  defaultValue=""
                >
                  {INTEREST_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </FormField>

              {/* Message */}
              <FormField
                label="Tell us more about your needs"
                htmlFor="message"
              >
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Quantity needed, preferred platforms, timeline, any special requirements..."
                  className={cn(inputStyles, "resize-none")}
                />
              </FormField>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors sm:px-6 sm:py-4 sm:text-base",
                  "bg-primary-900 text-white hover:bg-primary-800",
                  "disabled:cursor-not-allowed disabled:bg-primary-400"
                )}
              >
                {isSubmitting ? "Sending..." : "Get Custom Quote"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
