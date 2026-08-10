import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { FIRM, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of this site and our services.",
};

export default function TermsPage() {
  return (
    <div className="pt-16">
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">LEGAL</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-display-l font-semibold text-ink text-balance">
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
              [PLACEHOLDER — REAL TERMS PENDING]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)] max-w-2xl">
          <Reveal>
            <div className="prose-like space-y-8 text-body text-ink-muted">
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Use of this site</h2>
                <p>
                  This website is operated by {FIRM}. By accessing this site you
                  agree not to use it for any unlawful purpose or in any way that
                  could damage, disable, or impair the site.
                </p>
              </div>
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Intellectual property</h2>
                <p>
                  All content on this site — including text, design, and code — is
                  the property of {FIRM} unless otherwise stated. It may not be
                  reproduced without written permission.
                </p>
              </div>
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Limitation of liability</h2>
                <p>
                  Information on this site is provided for general purposes only and
                  does not constitute professional advice. {FIRM} accepts no liability
                  for decisions made on the basis of content published here.
                </p>
              </div>
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Contact</h2>
                <p>
                  Questions about these terms can be directed to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
              <div className="border-t border-hairline pt-8">
                <p className="font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                  {FIRM} — [PLACEHOLDER — FULL TERMS PENDING]
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
