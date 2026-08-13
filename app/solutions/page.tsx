import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";
import { cn } from "@/lib/utils";
import { solutions } from "@/content/solutions";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CIO Advisory and agentic systems for PE portfolio companies: Technology Due Diligence, Fractional CIO, IT Carve-Out, and Cybersecurity.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="SOLUTIONS"
        title="CIO Advisory for PE Portfolios"
        subtext="Beyond agent deployment, we sit in the CIO/technology-leadership seat where a portfolio company needs one, from pre-close diligence through the first 100 days."
      />

      {/* Pillar sections */}
      {solutions.map((pillar, i) => {
        const anchor = pillar.href.split("#")[1] ?? pillar.id;
        return (
          <section
            key={pillar.id}
            id={anchor}
            className={cn(
              "border-b border-hairline py-24",
              i % 2 === 1 ? "bg-surface-sunk" : "bg-canvas"
            )}
          >
            <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
              <div className="grid grid-cols-12 gap-6">
                {/* Left — index + title */}
                <div className="col-span-12 lg:col-span-5">
                  <Reveal>
                    <MonoLabel className="text-ink-faint">{"// "}{pillar.id}</MonoLabel>
                    <h2 className="mt-4 text-display-m font-semibold text-ink text-balance">
                      {pillar.title}
                    </h2>
                    <p className="mt-4 text-body-lg text-ink-muted">{pillar.description}</p>
                  </Reveal>
                </div>

                {/* Right — detail + outcomes */}
                <div className="col-span-12 lg:col-span-6 lg:col-start-7">
                  <Reveal delay={0.1}>
                    <p className="text-body text-ink">{pillar.detail}</p>
                  </Reveal>

                  {/* Outcomes */}
                  <Reveal delay={0.18}>
                    <div className="mt-8">
                      <MonoLabel className="mb-4 text-ink-faint">WHAT YOU GET</MonoLabel>
                      <ul className="space-y-3">
                        {pillar.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-3 text-body text-ink-muted"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  {/* Agentic note */}
                  <Reveal delay={0.24}>
                    <div className="mt-8 rounded-card bg-accent-tint px-5 py-4">
                      <MonoLabel className="mb-2 text-accent">AGENTIC LAYER</MonoLabel>
                      <p className="text-small text-ink-muted">{pillar.agenticNote}</p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        heading="Not sure which capability fits? Start with a conversation."
        description="Most engagements begin with a single question. We will tell you honestly whether we are the right fit."
        wide
      />
    </div>
  );
}
