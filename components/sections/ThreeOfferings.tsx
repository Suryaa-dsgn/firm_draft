import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const OFFERINGS = [
  {
    tag: "001",
    title: "Agentic Firm Operations",
    description: "What we deliver to the PE firm's operating team.",
    detail: "Deal screening and thesis-matching agents; diligence acceleration with data-room triage and red-flag summaries; multi-entity portfolio monitoring and KPI rollups; LP reporting, capital calls, and waterfall support.",
    href: "/agentic",
  },
  {
    tag: "002",
    title: "Portfolio Company Transformation",
    description: "What we deploy inside individual portfolio companies.",
    detail: "Project controls automation covering schedule and cost variance; AP/AR and back-office automation across ERPs; bid and proposal drafting with win-rate analysis; license and compliance monitoring for licensed trades.",
    href: "/agentic",
  },
  {
    tag: "003",
    title: "CIO Advisory",
    description: "Technology leadership from pre-close through the first 100 days.",
    detail: "We sit in the CIO/technology-leadership seat where a portfolio company needs one, from pre-close diligence through the first 100 days. Full detail on the Solutions page.",
    href: "/solutions",
  },
] as const;

export function ThreeOfferings() {
  return (
    <SectionShell id="offerings" className="border-t border-hairline bg-surface-sunk">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={620}>{"Two ways we engage with a PE platform."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              We work directly with the firm&apos;s operating team, and inside individual
              portfolio companies, often both on the same platform.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {OFFERINGS.map((offering, i) => (
          <Reveal key={offering.tag} delay={0.06 + i * 0.08}>
            <Link
              href={offering.href}
              className="group block h-full rounded-card border border-hairline bg-canvas p-7 no-underline transition-colors hover:border-ink/20 hover:bg-surface"
            >
              <MonoLabel className="text-ink-faint">{`// ${offering.tag}`}</MonoLabel>
              <h3 className="mt-5 text-title font-semibold text-ink">{offering.title}</h3>
              <p className="mt-2 text-small font-medium text-ink-muted">{offering.description}</p>
              <p className="mt-3 text-small text-ink-faint">{offering.detail}</p>
              <div className="mt-6 flex items-center gap-1.5 font-mono text-mono-label uppercase tracking-widest text-accent">
                <span>Learn more</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
