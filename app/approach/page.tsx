import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";
import { cn } from "@/lib/utils";
import { processSteps } from "@/content/approach";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "An engagement model built for portfolio speed: no lengthy IT integration, usage-based pricing, 100-day rollout.",
};

const WHY_QUICKFLOWS = [
  {
    label: "Agents not headcount",
    detail: "We scale without growing the team. AI handles the monitoring, compilation, and analysis your analysts currently do manually.",
  },
  {
    label: "Reusable across the platform",
    detail: "Once an agent is proven for one portfolio company, the same component redeploys to the next one in days, not months.",
  },
  {
    label: "Operator-built not theory-built",
    detail: "Our agents were shaped by real engagement patterns, from live commercial deployments, not academic research or vendor demos.",
  },
  {
    label: "Aligned pricing",
    detail: "PMPM and per-transaction pricing means our cost scales with usage. You don't pay for headcount between engagements.",
  },
] as const;

export default function ApproachPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="APPROACH"
        title="An Engagement Model Built for Portfolio Speed"
        subtext="No lengthy IT integration project, no disruption to systems already in place, and pricing that scales with usage instead of headcount."
      />

      {/* Stacking card deck */}
      <div className="bg-surface-sunk pt-6">
        {processSteps.map((step, i) => (
          <section
            key={step.index}
            className={cn(
              "mx-auto max-w-content",
              "bg-canvas rounded-card border border-hairline shadow-card-hover",
              "px-[clamp(20px,5vw,64px)] py-12",
              i < processSteps.length - 1 && "mb-3",
              "md:sticky",
            )}
            style={{ top: `${64 + i * 80}px`, zIndex: i + 1 }}
          >
            <div className="grid grid-cols-12 gap-6">
              {/* Left col */}
              <div className="col-span-12 lg:col-span-4">
                <Reveal>
                  <div
                    className="font-semibold leading-none tracking-tight text-hairline-strong select-none"
                    style={{ fontSize: "clamp(6rem, 12vw, 10rem)" }}
                    aria-hidden="true"
                  >
                    {String(step.index).padStart(2, "0")}
                  </div>
                  <h2 className="mt-2 text-display-m font-semibold text-ink">{step.title}</h2>
                </Reveal>
              </div>
              {/* Right col */}
              <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:pt-6">
                <Reveal delay={0.1}>
                  <p className="text-body-lg text-ink-muted">{step.body}</p>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Quickflows */}
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">WHY QUICKFLOWS</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-xl text-display-m font-semibold text-ink text-balance">
              Built for the way private equity operates.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {WHY_QUICKFLOWS.map((item, i) => (
              <Reveal key={item.label} delay={0.08 + i * 0.06}>
                <div className="rounded-card border border-hairline bg-canvas px-5 py-4">
                  <p className="text-small font-semibold text-ink">{item.label}</p>
                  <p className="mt-1 text-small text-ink-faint">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Let's find the agents that move your portfolio."
        description="We start with a focused review of one portfolio company's operating workflows and identify the two or three agents with the fastest path to measurable impact."
        wide
      />
    </div>
  );
}
