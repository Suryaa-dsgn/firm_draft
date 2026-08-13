import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const PROBLEMS = [
  {
    line: "Diligence takes too long",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-faint">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    line: "Fragmented back offices",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-faint">
        <rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
      </svg>
    ),
  },
  {
    line: "Blind spots in operations",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-faint">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" />
      </svg>
    ),
  },
  {
    line: "Consulting doesn't scale",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink-faint">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
];

export function Positioning() {
  return (
    <SectionShell
      id="positioning"
      className="border-t border-hairline"
      innerClassName="!px-[clamp(20px,5vw,64px)]"
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Statement */}
        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={0.06}>
            <h2 className="text-display-l font-semibold text-ink text-balance">
              <ScrambleText duration={1100}>
                {"The pressure on value creation has changed."}
              </ScrambleText>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-body text-ink-muted max-w-2xl">
              EBITDA growth can no longer rely on multiple expansion alone. Operating partners
              are being asked to find margin inside portfolio companies, faster than a
              traditional consulting engagement can deliver it.
            </p>
          </Reveal>
        </div>

        {/* Problem tiles */}
        <div className="col-span-12 mt-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((problem, i) => (
              <Reveal key={problem.line} delay={0.12 + i * 0.06}>
                <div className="flex items-center gap-3 rounded-card border border-hairline bg-surface px-4 py-3.5">
                  {problem.icon}
                  <span className="text-small font-medium text-ink">{problem.line}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
