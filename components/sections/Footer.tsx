import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { FIRM, FIRM_TAGLINE, CONTACT_EMAIL, NAV_LINKS } from "@/lib/config";

const LEGAL_YEAR = new Date().getFullYear();

const TICKER_ITEMS = [
  "[#AGENTIC AI]",
  "[#PRIVATE EQUITY]",
  "[#CIO ADVISORY]",
  "[#PORTFOLIO OPERATIONS]",
  "[#VALUE CREATION]",
  "[#DILIGENCE ACCELERATION]",
  "[#100-DAY PLAN]",
  "[#PROJECT CONTROLS]",
];

const SECONDARY_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/* Inline SVG brand marks — avoids lucide-react version gaps */
function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function IconX({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.245 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconGithub({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", Icon: IconLinkedin },
  { label: "X (Twitter)", href: "#", Icon: IconX },
  { label: "GitHub", href: "#", Icon: IconGithub },
];

const NAV_PAGE_LINKS = NAV_LINKS.map((l) => ({ label: l.label, href: l.href }));

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">

      {/* Ticker */}
      <div className="overflow-hidden border-b border-hairline py-3">
        <div
          className="inline-flex"
          style={{ animation: "ticker 32s linear infinite", willChange: "transform" }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-mono text-mono-label uppercase tracking-widest text-ink-faint px-6"
            >
              {item}&nbsp;&nbsp;{"//"}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
        <div className="grid gap-10 py-8 lg:grid-cols-[1.8fr_2fr_1fr] lg:gap-20 lg:py-16">

          {/* Col 1 — Newsletter + wordmark */}
          <div className="flex flex-col gap-10 lg:justify-between lg:gap-16">
            <div>
              <h3 className="text-title font-semibold text-ink leading-snug">
                Stay ahead of the portfolio.
              </h3>
              <p className="mt-3 max-w-xs text-small text-ink-muted leading-relaxed">
                Perspectives on technology governance, agentic systems, and portfolio operations, delivered directly.
              </p>
              <form
                className="mt-8 flex overflow-hidden rounded-input border border-hairline"
                action="#"
                method="POST"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-small text-ink placeholder:text-ink-faint outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-ink px-6 py-3.5 font-mono text-mono-label uppercase tracking-widest text-canvas transition-opacity hover:opacity-75"
                >
                  JOIN
                </button>
              </form>
            </div>

            {/* Wordmark */}
            <div>
              <span className="font-mono text-mono-label font-semibold uppercase tracking-widest text-ink">
                {FIRM}
              </span>
              <p className="mt-1.5 font-mono text-mono-label text-ink-faint">
                &copy; {LEGAL_YEAR}
              </p>
            </div>
          </div>

          {/* Col 2 — Pages + Get in touch stacked */}
          <div className="flex flex-col gap-0">

            {/* Pages */}
            <div>
              <MonoLabel className="text-ink-faint">PAGES</MonoLabel>
              <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-5">
                {NAV_PAGE_LINKS.map(({ label, href }) => (
                  <Link
                    key={`nav-${href}`}
                    href={href}
                    className="text-small text-ink-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                ))}
                {SECONDARY_LINKS.map(({ label, href }) => (
                  <Link
                    key={`sec-${href}`}
                    href={href}
                    className="text-small text-ink-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 border-t border-hairline" />

            {/* Get in touch */}
            <div>
              <MonoLabel className="text-ink-faint">GET IN TOUCH</MonoLabel>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-small text-ink-muted transition-colors hover:text-ink"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="text-small text-ink-muted">[phone — insert]</li>
                {/* <li className="text-small text-ink-muted">Suwanee, Georgia</li> */}
              </ul>
            </div>
          </div>

          {/* Col 3 — Follow us */}
          <div>
            <MonoLabel className="text-ink-faint">FOLLOW US</MonoLabel>
            <ul className="mt-6 space-y-5">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-3 text-small text-ink-muted transition-colors hover:text-ink"
                  >
                    <Icon className="shrink-0 transition-colors text-ink-faint group-hover:text-ink" />
                    {/* Dotted connector line */}
                    <span
                      className="flex-1 transition-colors"
                      style={{
                        borderBottom: "1px dashed var(--hairline-strong)",
                        marginBottom: "1px",
                      }}
                    />
                    <span className="font-mono text-mono-label uppercase tracking-widest">
                      {label}
                    </span>
                    <span className="font-mono text-mono-label opacity-0 transition-opacity group-hover:opacity-100">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)] py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-mono-label text-ink-faint">
            {FIRM} &copy; {LEGAL_YEAR} · {FIRM_TAGLINE}
          </p>
          <div className="flex items-center gap-5">
            {SECONDARY_LINKS.map(({ label, href }, i) => (
              <span key={`bar-${href}`} className="flex items-center gap-5">
                {i > 0 && <span className="text-hairline-strong">/</span>}
                <Link
                  href={href}
                  className="font-mono text-mono-label text-ink-faint transition-colors hover:text-ink"
                >
                  {label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
