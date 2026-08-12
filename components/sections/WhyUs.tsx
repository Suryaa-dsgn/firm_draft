import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const DIFFERENTIATORS = [
  { label: "Operator mindset", detail: "Built by operators, not analysts." },
  { label: "Technology and execution", detail: "We build the systems, not just the slide." },
  { label: "AI in real operating environments", detail: "Deployed in portfolio companies, not demos." },
  { label: "Reusable across the portfolio", detail: "Playbooks and agents that compound." },
  { label: "Sponsor-level visibility", detail: "Reporting built for the fund, not just the company." },
  { label: "Aligned to value creation", detail: "Every engagement maps back to EBITDA." },
] as const;

export function WhyUs() {
  return (
    <SectionShell id="why-us" className="border-t border-hairline bg-surface-sunk">
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={640}>
                {"Built for the way private equity operates."}
              </ScrambleText>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DIFFERENTIATORS.map((d, i) => (
          <Reveal key={d.label} delay={0.06 + i * 0.06}>
            <div className="rounded-card border border-hairline bg-canvas px-5 py-4">
              <p className="text-small font-semibold text-ink">{d.label}</p>
              <p className="mt-1 text-small text-ink-faint">{d.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
