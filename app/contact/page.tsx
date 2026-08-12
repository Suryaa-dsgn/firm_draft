import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you are dealing with. We will tell you honestly whether we are the right fit.",
};

const WHAT_TO_EXPECT = [
  {
    step: "01",
    title: "No pitch",
    body: "The first call is a direct conversation about the problem you are trying to solve. No deck, no slides.",
  },
  {
    step: "02",
    title: "Honest fit assessment",
    body: "If we are not the right fit, we will tell you. We only take engagements where we are confident we can move the needle.",
  },
  {
    step: "03",
    title: "A clear next step",
    body: "Every first call ends with a specific recommendation: which service, which phase, and what the first 30 days would look like.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">CONTACT</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-display-l font-semibold text-ink text-balance">
              Tell us what you are dealing with.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-4 max-w-xl text-body-lg text-ink-muted">
              We will tell you honestly whether we are the right fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-16">
            {/* Left — context */}
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <h2 className="text-display-m font-semibold text-ink">
                  What to expect.
                </h2>
                <p className="mt-4 text-body text-ink-muted">
                  A 30-minute call with a senior member of our team. We come
                  prepared. You do not need to brief us in advance.
                </p>
              </Reveal>

              <div className="mt-10 space-y-8">
                {WHAT_TO_EXPECT.map(({ step, title, body }, i) => (
                  <Reveal key={step} delay={0.08 + i * 0.07}>
                    <div className="flex gap-5">
                      <span className="font-mono text-mono-label text-ink-faint shrink-0 pt-0.5">
                        {step}
                      </span>
                      <div>
                        <h3 className="text-title font-semibold text-ink">{title}</h3>
                        <p className="mt-1.5 text-body text-ink-muted">{body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Direct email fallback */}
              <Reveal delay={0.32}>
                <div className="mt-12 border-t border-hairline pt-8">
                  <MonoLabel className="text-ink-faint">PREFER EMAIL</MonoLabel>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 block text-body text-accent underline underline-offset-4 hover:text-accent-hover"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right — form */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.06}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
