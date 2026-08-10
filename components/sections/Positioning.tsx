import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const CAPABILITY_TAGS = [
  "TECHNOLOGY DILIGENCE",
  "PORTFOLIO GOVERNANCE",
  "AGENTIC AUTOMATION",
  "CAPITAL ROI",
];

export function Positioning() {
  return (
    <SectionShell
      id="positioning"
      className="border-t border-hairline"
      innerClassName="!px-[clamp(20px,5vw,64px)]"
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Section index */}
        <div className="col-span-12 mb-4">
          <Reveal>
            <MonoLabel variant="index">[ N.02 / 07 ]</MonoLabel>
          </Reveal>
        </div>

        {/* Statement */}
        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={0.06}>
            <h2 className="text-display-l font-semibold text-ink text-balance">
              <ScrambleText duration={1100}>
                {"Technology is the largest unmanaged cost in most portfolios. We fix that."}
              </ScrambleText>
            </h2>
          </Reveal>
        </div>

        {/* Body — right column, starts at col-start-8 so no overlap with col-span-7 heading */}
        <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:self-end">
          <Reveal delay={0.14}>
            <p className="text-body-lg text-ink-muted">
              Most operating companies lack the internal capability to run technology
              as a strategic asset. Spend accumulates, vendors entrench, and the gap
              between what technology costs and what it returns widens through the hold
              period. We install the leadership, systems, and measurement layer to close
              that gap, then hand it to the team, built to run without us.
            </p>
          </Reveal>
        </div>

        {/* Capability tags */}
        <div className="col-span-12 mt-8 flex flex-wrap gap-3">
          {CAPABILITY_TAGS.map((tag, i) => (
            <Reveal key={tag} delay={0.2 + i * 0.05}>
              <span className="rounded-input border border-hairline px-3 py-1.5 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                {tag}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
