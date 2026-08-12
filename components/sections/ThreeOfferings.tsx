import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const OFFERINGS = [
  {
    tag: "001",
    title: "CIO Advisory",
    description: "Technology leadership when the portfolio needs it.",
    detail: "Operator-aligned CIO function, from strategy to execution, without the full-time overhead.",
    href: "/solutions#cio-advisory",
  },
  {
    tag: "002",
    title: "Technology Due Diligence",
    description: "Know what you are acquiring, and what it takes to create value.",
    detail: "Clear-eyed assessments that surface real risk, real cost, and a 100-day plan before close.",
    href: "/solutions#tech-diligence",
  },
  {
    tag: "003",
    title: "Agentic Systems",
    description: "Intelligent systems that execute the work, not just analyze it.",
    detail: "Reusable agents for governance, intelligence, deployment, and ROI attribution across the portfolio.",
    href: "/agentic",
  },
] as const;

export function ThreeOfferings() {
  return (
    <SectionShell id="offerings" className="border-t border-hairline bg-surface-sunk">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Reveal>
            <MonoLabel variant="index">[ N.03 / 07 ]</MonoLabel>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={620}>{"Three ways in."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              Each offering operates on its own or as part of a full engagement.
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
