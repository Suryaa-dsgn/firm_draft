import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { FIRM, CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">LEGAL</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-display-l font-semibold text-ink text-balance">
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
              [PLACEHOLDER — REAL POLICY PENDING]
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)] max-w-2xl">
          <Reveal>
            <div className="prose-like space-y-8 text-body text-ink-muted">
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Information we collect</h2>
                <p>
                  When you use our contact form, we collect your name, organisation,
                  and a description of the problem you are trying to solve. We use
                  this information solely to respond to your enquiry.
                </p>
              </div>
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">How we use it</h2>
                <p>
                  We do not sell, share, or rent your personal information to third
                  parties. Information submitted through our contact form is used only
                  to follow up on your enquiry.
                </p>
              </div>
              <div>
                <h2 className="text-title font-semibold text-ink mb-3">Contact</h2>
                <p>
                  Questions about this policy can be directed to{" "}
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
                  {FIRM} — [PLACEHOLDER — FULL POLICY PENDING]
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
