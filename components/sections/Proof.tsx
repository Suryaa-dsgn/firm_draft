import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const OUTCOMES = [
  {
    title: "Lower technology cost",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" /><polyline points="16 17 22 17 22 11" />
      </svg>
    ),
  },
  {
    title: "Faster decisions",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Reduced risk at every stage",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Higher operating productivity",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
  },
  {
    title: "Faster integration post-close",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" x2="6" y1="9" y2="21" />
      </svg>
    ),
  },
  {
    title: "Stronger exit readiness",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
] as const;

export function Proof() {
  return (
    <SectionShell
      id="proof"
      className="border-t border-hairline"
      data-placeholder="proof-section"
    >
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Reveal>
            <MonoLabel variant="index">[ N.06 / 07 ]</MonoLabel>
          </Reveal>
        </div>
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
              Measured by what changes in the business. Real numbers replace these
              placeholders as engagements mature.
            </p>
            <p className="mt-2 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
              [PLACEHOLDERS - REAL DATA PENDING]
            </p>
          </Reveal>
        </div>
      </div>

      {/* Outcome tiles */}
      <div className="grid gap-4 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-3">
        {OUTCOMES.map((outcome, i) => (
          <Reveal key={outcome.title} delay={0.06 + i * 0.07}>
            <div className="flex items-center gap-4 rounded-card border border-hairline bg-surface px-5 py-4">
              {outcome.icon}
              <span className="text-small font-semibold text-ink">{outcome.title}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Case study placeholder */}
      <Reveal delay={0.3}>
        <div
          className="mt-10 rounded-card border border-hairline bg-surface-sunk p-8"
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
          <p className="mt-4 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
            [PLACEHOLDER - REAL STORY PENDING]
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}
