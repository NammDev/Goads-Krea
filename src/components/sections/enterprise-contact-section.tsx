"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";

/** Company size options */
const COMPANY_SIZE_OPTIONS = [
  { value: "", label: "Select company size" },
  { value: "1-10", label: "1-10" },
  { value: "11-50", label: "11-50" },
  { value: "51-200", label: "51-200" },
  { value: "201-500", label: "201-500" },
  { value: "501-1000", label: "501-1000" },
  { value: "1000+", label: "1000+" },
] as const;

/** Use case options */
const USE_CASE_OPTIONS = [
  { value: "", label: "Select use case" },
  {
    value: "I want to collaborate with my team",
    label: "I want to collaborate with my team",
  },
  { value: "I want API access", label: "I want API access" },
  { value: "I want to train a model", label: "I want to train a model" },
  {
    value: "I want to deploy Krea on my own servers",
    label: "I want to deploy Krea on my own servers",
  },
  {
    value: "I need an exclusive license for the content I create",
    label: "I need an exclusive license for the content I create",
  },
  { value: "I need more compute units", label: "I need more compute units" },
  {
    value: "I have certain security requirements",
    label: "I have certain security requirements",
  },
  {
    value: "I want to integrate Krea with my existing systems",
    label: "I want to integrate Krea with my existing systems",
  },
  {
    value: "I have a complicated custom use case",
    label: "I have a complicated custom use case",
  },
  { value: "I want affordable pricing", label: "I want affordable pricing" },
  { value: "Other", label: "Other" },
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
          <img
            src={HERO_IMAGE_URL}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
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
                Talk to our sales team
              </h2>
              <p className="text-base opacity-90 sm:text-lg md:text-xl lg:text-2xl">
                If you&apos;re interested in learning more about Krea&apos;s
                enterprise solutions, we can help.
              </p>
            </div>
          </div>

          {/* Right: Contact form - fills to edge on desktop */}
          <div className="bg-primary-50 p-4 sm:p-6 md:p-8 rounded-2xl">
            <h3 className="text-primary-900 mb-1.5 text-lg font-semibold sm:mb-2 sm:text-xl md:text-2xl">
              Contact sales for a free team trial
            </h3>
            <p className="text-primary-600 mb-4 text-sm sm:mb-6 sm:text-base">
              We&apos;ll need a few details first.
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

              {/* Company */}
              <FormField label="Company" htmlFor="company" required>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="Pied Piper"
                  className={inputStyles}
                />
              </FormField>

              {/* Company Size */}
              <FormField label="Company Size" htmlFor="companySize" required>
                <select
                  id="companySize"
                  name="companySize"
                  required
                  className={inputStyles}
                  defaultValue=""
                >
                  {COMPANY_SIZE_OPTIONS.map((option) => (
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

              {/* Use case */}
              <FormField label="Use case" htmlFor="useCase" required>
                <select
                  id="useCase"
                  name="useCase"
                  required
                  className={inputStyles}
                  defaultValue=""
                >
                  {USE_CASE_OPTIONS.map((option) => (
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
                  placeholder="Tell us about your team size, current workflow, and specific requirements..."
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
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
