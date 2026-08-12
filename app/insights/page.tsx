import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on technology leadership, agentic systems, and PE portfolio operations.",
};

const PLACEHOLDER_CARDS = [
  {
    tag: "TECHNOLOGY DILIGENCE",
    title: "What a technology diligence actually finds",
    teaser:
      "Most assessments surface architecture diagrams and a vendor list. The useful ones find the $280K ERP migration nobody priced in, the three contracts with no termination rights, and the CTO who is the single point of failure.",
  },
  {
    tag: "PORTFOLIO GOVERNANCE",
    title: "Governing technology across a portfolio without micromanaging",
    teaser:
      "Operating partners cannot review every IT decision across twelve holdings. The question is which signals matter enough to surface at the fund level, and how to get them without a manual data collection exercise every quarter.",
  },
  {
    tag: "VALUE CREATION",
    title: "Attributing technology spend to EBITDA",
    teaser:
      "Technology investment is easy to approve and hard to justify. Building the attribution model is less about new tools and more about defining the right operational metrics before the spend goes out the door.",
  },
] as const;

export default function InsightsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="INSIGHTS"
        title="Perspectives on technology leadership."
        subtext="Writing on CIO strategy, agentic systems, and how PE portfolio operators can turn technology into a measurable advantage."
        titleMaxWidth="max-w-2xl"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLACEHOLDER_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={0.06 + i * 0.08}>
                <div className="flex h-full flex-col rounded-card border border-hairline bg-surface p-8">
                  <MonoLabel className="text-ink-faint">{card.tag}</MonoLabel>
                  <h2 className="mt-4 text-title font-semibold text-ink leading-snug">
                    {card.title}
                  </h2>
                  <p className="mt-3 flex-1 text-small text-ink-muted leading-relaxed">
                    {card.teaser}
                  </p>
                  <div className="mt-6 border-t border-hairline pt-4">
                    <span className="font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                      Upcoming
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
