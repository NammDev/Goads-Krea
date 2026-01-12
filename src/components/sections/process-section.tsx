import { cn } from "@/lib/utils";

/** Icon components for prompt card buttons */
function AspectRatioIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function StyleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="9" r="7" />
      <circle cx="15" cy="15" r="7" />
    </svg>
  );
}

function ImagePromptIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5", className)}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3zm-4.7 6H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8.3c-.6-.2-1.3-.3-2-.3c-1.1 0-2.2.3-3.1.9L14.5 12L11 16.5l-2.5-3L5 18h8.1c-.1.3-.1.7-.1 1c0 .7.1 1.4.3 2"
      />
    </svg>
  );
}

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto size-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

/** Pill button for prompt card options */
function PromptPillButton({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={cn(
        "bg-primary-0 relative flex min-w-8 cursor-pointer items-center gap-1 rounded-full",
        "px-2 py-1.5 text-center text-xs font-medium",
        "shadow-[0_0_0_2px_rgba(255,255,255,0)] transition-[box-shadow,scale,background-color]",
        "duration-400 ease-[cubic-bezier(0,1.2,.68,1)]",
        "hover:shadow-[0_0_0_2px_rgba(0,0,0,0.1)] active:scale-95"
      )}
    >
      {icon}
      <span className="grow">{children}</span>
    </button>
  );
}

/** Prompt input card with action buttons */
function PromptCard() {
  return (
    <div className="bg-primary-200 ring-primary-0 mt-10 flex max-w-2xl gap-3 rounded-[30px] p-3.5 ring-2 ring-inset">
      <div className="flex grow flex-col justify-between gap-4">
        <p className="text-primary-500 min-h-22 grow px-2 py-1 leading-snug">
          Describe any visual you want to create. Krea will generate an image
          for free. You can write in any langauge.
        </p>
        <div className="flex flex-wrap items-center gap-1">
          <PromptPillButton icon={<AspectRatioIcon />}>3:4</PromptPillButton>
          <PromptPillButton icon={<StyleIcon />}>Style</PromptPillButton>
          <PromptPillButton>1K</PromptPillButton>
          <PromptPillButton icon={<ImagePromptIcon />}>
            Image prompt
          </PromptPillButton>
        </div>
      </div>
      <button
        type="button"
        className={cn(
          "relative flex shrink-0 items-center justify-center gap-1.5 self-end",
          "rounded-xl bg-white p-3 text-sm font-semibold tracking-tight text-black",
          "transition-[box-shadow,background-color,scale] duration-400 ease-[cubic-bezier(0,1.2,.68,1)]",
          "shadow-sm hover:scale-[1.025] hover:shadow-md active:scale-95 active:shadow-sm",
          "md:p-4"
        )}
      >
        <SparkleIcon />
        <span className="hidden sm:inline">Generate</span>
      </button>
    </div>
  );
}

/** Sidebar panel with image placeholders */
function SidebarPanel() {
  return (
    <div className="top-1/2 left-0 px-5 lg:absolute lg:px-0 lg:pl-4">
      <div
        className={cn(
          "bg-primary-200 ring-primary-0 flex gap-2 rounded-2xl p-2.5 ring-2 ring-inset",
          "shadow-[-2px_-2px_12px_rgba(0,0,0,0.1),-10px_-10px_32px_rgba(0,0,0,0.1)]",
          "lg:-translate-y-1/2 lg:flex-col"
        )}
      >
        {/* Add button */}
        <button
          type="button"
          className="bg-primary-0 text-primary-1000 aspect-square w-10 shrink-0 rounded-md p-2 shadow-[0_1px_6px_rgba(0,0,0,0.1)] lg:w-12"
        >
          <PlusIcon />
        </button>

        {/* Image placeholder buttons */}
        <div className="flex flex-1 gap-2 lg:flex-col">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`image ${i}`}
              className="bg-primary-400 aspect-square w-10 shrink-0 rounded-md shadow-[0_1px_6px_rgba(0,0,0,0.1)] lg:h-auto lg:w-12"
            />
          ))}
          {/* Extra buttons visible on sm+ screens */}
          {[7, 8].map((i) => (
            <button
              key={i}
              type="button"
              aria-label={`image ${i}`}
              className="bg-primary-400 aspect-square hidden w-10 shrink-0 rounded-md shadow-[0_1px_6px_rgba(0,0,0,0.1)] sm:block lg:h-auto lg:w-12"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * ProcessSection - Full screen section showcasing the GoAds process
 * Features: Title, subtitle, prompt card with actions, sidebar panel
 */
export function ProcessSection() {
  return (
    <section className="bg-primary-100 relative z-10">
      <div className="flex flex-col items-center gap-12 py-24 md:py-48">
        {/* Main content */}
        <div className="mx-auto flex flex-col items-center justify-center px-5 md:px-16">
          <h2
            className="text-center text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            aria-label="Simple. Fast. Reliable. Get started in 3 steps."
          >
            Simple. Fast. Reliable
            <br />
            Get started in 3 steps
          </h2>
          <p className="text-primary-700 mx-auto mt-6 max-w-2xl text-center text-base leading-tight sm:text-xl">
            No complicated onboarding. No lengthy verification. Choose your
            assets, complete payment, and receive delivery within 24 hours. Our
            team is available 24/7 to help you get started.
          </p>
          <PromptCard />
        </div>

        {/* Sidebar panel - positioned left on lg screens */}
        <SidebarPanel />
      </div>
    </section>
  );
}
