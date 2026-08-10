import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { StatBlock } from "@/components/primitives/StatBlock";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const STATS = [
  { value: "4.1×", caption: "Average improvement in technology ROI attribution" },
  { value: "73%", caption: "Reduction in portfolio governance reporting time" },
  { value: "19%", caption: "Technology cost reduction in the first 90 days" },
  { value: "91%", caption: "Engagements that reach exit with technology debt resolved" },
];

export function Proof() {
  return (
    <SectionShell
      id="proof"
      className="border-t border-hairline"
      data-placeholder="proof-section"
    >
      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Reveal>
            <MonoLabel variant="index">[ N.06 / 07 ]</MonoLabel>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={750}>{"Outcomes that show up on the tape."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              Figures will be published as engagements complete and data matures.
              All metrics are independently verified.
            </p>
            <p className="mt-2 font-mono text-mono-label uppercase tracking-widest text-ink-muted">
              [PLACEHOLDERS - REAL DATA PENDING]
            </p>
          </Reveal>
        </div>
      </div>

      {/* Stat band */}
      <div className="grid gap-8 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.caption} delay={0.06 + i * 0.08}>
            <StatBlock value={stat.value} caption={stat.caption} />
          </Reveal>
        ))}
      </div>

      {/* Teaser card — placeholder */}
      <Reveal delay={0.3}>
        <div
          className="mt-12 rounded-card border border-hairline bg-surface-sunk p-8"
          data-placeholder="case-study"
        >
          <MonoLabel variant="tag" className="text-ink-faint">
            CASE STUDY
          </MonoLabel>
          <h3 className="mt-3 text-title font-semibold text-ink">[CASE STUDY TITLE]</h3>
          <p className="mt-2 text-body text-ink-muted">
            [One-paragraph summary of the engagement, outcomes, and the role agentic
            systems played. To be filled in with a real engagement story.]
          </p>
          <p className="mt-4 font-mono text-mono-label uppercase tracking-widest text-ink-muted">
            [PLACEHOLDER - REAL STORY PENDING]
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
