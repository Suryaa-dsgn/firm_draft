import type { Metadata } from "next";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { solutions } from "@/content/solutions";
import { NAV_CTA_LABEL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Four integrated capabilities: CIO Advisory, Technology Due Diligence, Portfolio Governance, and Value Creation.",
};

export default function SolutionsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="SOLUTIONS"
        title="Four capabilities. One integrated practice."
        subtext="Each offering is designed to work on its own or as part of a full engagement. The pattern is always the same: install the right leadership, build the measurement layer, and connect technology to returns."
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

      {/* Closing CTA */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <h2 className="max-w-2xl text-display-m font-semibold text-on-navy text-balance">
              Not sure which capability fits? Start with a conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-body-lg text-on-navy-muted">
              Most engagements begin with a single question. We will tell you
              honestly whether we are the right fit.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "no-underline")}
              >
                {NAV_CTA_LABEL}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
