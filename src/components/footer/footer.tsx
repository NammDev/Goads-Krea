/** Footer link item */
interface FooterLink {
  label: string;
  href: string;
}

/** Footer column with title and links */
interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** Documentation icon */
function DocsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="h-5 w-5"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14" />
        <path strokeLinejoin="round" d="M6 21a2 2 0 1 1 0-4" />
        <path d="M9 7h6" />
      </g>
    </svg>
  );
}

/** X/Twitter icon */
function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="h-4 w-4"
      width="1em"
      height="1em"
      viewBox="0 0 14 14"
    >
      <g fill="none">
        <g clipPath="url(#xIconClip)">
          <path
            fill="currentColor"
            d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
          />
        </g>
        <defs>
          <clipPath id="xIconClip">
            <path fill="#fff" d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

/** LinkedIn icon */
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="h-5 w-5"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
      />
    </svg>
  );
}

/** Instagram icon */
function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      className="h-5 w-5"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
      />
    </svg>
  );
}

/** Footer columns configuration - GoAds */
const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Products",
    links: [
      { label: "Agency Ad Accounts", href: "/products/agency" },
      { label: "Business Managers", href: "/products/bm" },
      { label: "Profiles & Pages", href: "/products/assets" },
      { label: "Packs", href: "/products/packs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Feedback Score Boost", href: "/services/feedback" },
      { label: "Account Health Assessment", href: "/services/health" },
      { label: "Unban Service", href: "/services/unban" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Partners", href: "/partners" },
      { label: "Our Team", href: "/team" },
      { label: "Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/#faq" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
] as const;

/** Common hover styles for footer links */
const LINK_HOVER_STYLES =
  "hover:text-primary-800 dark:hover:text-primary-200 transition-colors";

/** Social links configuration - GoAds */
const SOCIAL_LINKS = [
  {
    name: "Documentation",
    href: "https://docs.goads.agency",
    icon: DocsIcon,
    extraClass: "mr-0.5",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/goads_agency",
    icon: XIcon,
    extraClass: "mr-0.5",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/goads",
    icon: LinkedInIcon,
    extraClass: "",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/goads_agency",
    icon: InstagramIcon,
    extraClass: "",
  },
] as const;

/**
 * Footer component - pixel perfect match to Krea.ai
 * Features: 4-column link grid, copyright, social icons
 */
export function Footer() {
  return (
    <footer className="bg-primary-100 text-primary-400 relative z-10">
      <div className="max-w-s2xl mx-auto pt-28 pb-10">
        <div className="section-container">
          {/* Footer links grid - 2 cols mobile, 4 cols desktop */}
          <div className="mb-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-primary-1000 mb-4 text-sm font-[500]">
                  {column.title}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        className={LINK_HOVER_STYLES}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer bottom bar with border */}
          <div className="text-primary-400 border-primary-200 flex flex-wrap items-center justify-between gap-4 border-t pt-4 text-xs font-medium">
            <p>© 2026 GoAds — All rights reserved</p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${LINK_HOVER_STYLES} ${social.extraClass}`}
                >
                  <social.icon />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
