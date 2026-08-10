import dynamic from "next/dynamic";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { agentSystems } from "@/content/agentic";

const ComparisonSlider = dynamic(
  () => import("@/components/interactive/ComparisonSlider"),
  { ssr: false }
);

const AgentShowcase = dynamic(
  () => import("@/components/interactive/AgentShowcase").then((m) => ({ default: m.AgentShowcase })),
  { ssr: false }
);

const BEFORE_ITEMS = [
  "Quarterly manual data collection",
  "Technology risk discovered late",
  "Reporting takes weeks to compile",
  "No cross-portfolio visibility",
  "Exceptions surface at board review",
];

const AFTER_ITEMS = [
  "Continuous monitoring, weekly digest",
  "Risk flagged in real time",
  "Reporting generated automatically",
  "Single view across all holdings",
  "Exceptions routed for human review immediately",
];

export function AgenticLayer() {
  return (
    <SectionShell id="agentic" variant="navy">
      {/* Header */}
      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Reveal>
            <MonoLabel variant="index" className="text-on-navy-muted">
              [ N.04 / 07 ]
            </MonoLabel>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-on-navy">
              <ScrambleText duration={870}>
                {"Governance that runs without being told to."}
              </ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-on-navy-muted">
              Agentic systems that monitor, analyze, and report on your portfolio
              technology, so your team can spend time on decisions, not data collection.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Before / After comparison slider */}
      <Reveal delay={0.08}>
        <ComparisonSlider
          className="mb-16"
          before={
            <div className="h-full bg-navy-2 p-8">
              <MonoLabel className="mb-6 text-on-navy-muted">BEFORE</MonoLabel>
              <h3 className="mb-4 text-title font-semibold text-on-navy">
                Manual governance
              </h3>
              <ul className="space-y-3">
                {BEFORE_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-small text-on-navy-muted"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-data-base" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          }
          after={
            <div className="h-full bg-navy p-8">
              <MonoLabel className="mb-6 text-accent">AFTER</MonoLabel>
              <h3 className="mb-4 text-title font-semibold text-on-navy">
                Agentic governance
              </h3>
              <ul className="space-y-3">
                {AFTER_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-small text-on-navy"
                  >
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </Reveal>

      {/* Agent showcase */}
      <Reveal delay={0.1}>
        <AgentShowcase agents={agentSystems} />
      </Reveal>
    </SectionShell>
  );
}
