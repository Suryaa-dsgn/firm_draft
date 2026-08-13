import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const ENGAGEMENTS = [
  {
    stage: "SIGNED CLIENT",
    client: "Aveanna Healthcare",
    detail: "Multi-state home-health and hospice provider. Franchise compliance and licensing monitoring agent deployed across 220+ locations, tracking credentialing status, license renewals, and regulatory deadlines in real time.",
  },
  {
    stage: "ACTIVE ENGAGEMENT",
    client: "PRGX Global",
    detail: "Accounts-payable audit and analytics firm. Agent-assisted contract-comparison and overpayment-recovery pipeline; reducing analyst review time per claim.",
  },
  {
    stage: "ENTERPRISE PURSUIT",
    client: "Burns & McDonnell",
    detail: "100% employee-owned E&C firm. Six-agent suite scoped: project controls, bid/proposal drafting, license-compliance monitoring, subcontractor management, and portfolio-level KPI rollup.",
  },
] as const;

export function Proof() {
  return (
    <SectionShell
      id="proof"
      className="border-t border-hairline"
    >
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={680}>{"Outcomes that show up in the operating model."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              Our agentic components carry a track record from live commercial engagements
              and enterprise pursuits before we bring them to a portfolio company.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stage-based proof cards */}
      <div className="grid gap-5 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {ENGAGEMENTS.map((engagement, i) => (
          <Reveal key={engagement.client} delay={0.08 + i * 0.08}>
            <div className="flex flex-col rounded-card border border-hairline bg-surface p-7 h-full">
              <MonoLabel variant="tag" className="text-accent">
                {engagement.stage}
              </MonoLabel>
              <h3 className="mt-4 text-title font-semibold text-ink">
                {engagement.client}
              </h3>
              <p className="mt-3 text-small text-ink-muted leading-relaxed">
                {engagement.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
