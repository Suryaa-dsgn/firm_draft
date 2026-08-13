import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start with a focused review of one portfolio company's operating workflows and find the agents with the fastest path to measurable impact.",
};

const WHAT_TO_EXPECT = [
  {
    step: "01",
    title: "No pitch",
    body: "We start with a focused review of one portfolio company's operating workflows and identify the two or three agents with the fastest path to measurable impact.",
  },
  {
    step: "02",
    title: "Honest fit assessment",
    body: "If we are not the right fit, we will tell you. We only take engagements where we are confident we can move the needle.",
  },
  {
    step: "03",
    title: "A clear next step",
    body: "Every first call ends with a specific recommendation: which agent, which portfolio company, and what the first 30 days would look like.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="CONTACT"
        title="Let's Find the Agents That Move Your Portfolio"
        subtext="We start with a focused review of one portfolio company's operating workflows and identify the two or three agents with the fastest path to measurable impact."
        titleMaxWidth="max-w-2xl"
      />

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

              {/* Contact details */}
              <Reveal delay={0.32}>
                <div className="mt-12 border-t border-hairline pt-8">
                  <MonoLabel className="text-ink-faint">CONTACT DETAILS</MonoLabel>
                  <div className="mt-4 space-y-3 text-small text-ink-muted">
                    <p className="font-medium text-ink">Shudhanshu</p>
                    <p>Founder &amp; Managing Principal</p>
                    <p>Quickflows.AI LLC · Suwanee, Georgia</p>
                    <p className="text-ink-faint">
                      Agentic AI for portfolio operations, diligence, and value creation
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="block text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <p>[phone — insert]</p>
                  </div>
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
