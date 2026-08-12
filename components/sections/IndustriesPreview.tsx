import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const VERTICALS = [
  {
    tag: "E&C",
    title: "Engineering & Construction",
    pain: "Project costs and schedules slip before anyone reviews them.",
    href: "/industries#engineering-construction",
  },
  {
    tag: "INFRA",
    title: "Infrastructure & Industrial",
    pain: "Add-on complexity creates reporting gaps and manual overhead.",
    href: "/industries#infrastructure-industrial",
  },
  {
    tag: "CONSULTING",
    title: "Consulting & Professional Services",
    pain: "Utilization gaps and knowledge in departing staff erode margin.",
    href: "/industries#consulting-services",
  },
] as const;

export function IndustriesPreview() {
  return (
    <SectionShell id="industries-preview" className="border-t border-hairline">
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={660}>{"Where we create the most leverage."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.08}>
            <p className="text-body text-ink-muted">
              Strongest results in operationally intensive businesses with complex
              technology and process environments.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {VERTICALS.map((vertical, i) => (
          <Reveal key={vertical.tag} delay={0.06 + i * 0.08} className="h-full">
            <Link
              href={vertical.href}
              className="group flex h-full flex-col rounded-card border border-hairline bg-surface-sunk p-7 no-underline transition-colors hover:border-ink/20 hover:bg-surface"
            >
              <MonoLabel className="text-ink-faint">{vertical.tag}</MonoLabel>
              <h3 className="mt-4 text-title font-semibold text-ink">{vertical.title}</h3>
              <p className="mt-2 text-small text-ink-muted">{vertical.pain}</p>
              <div className="mt-auto pt-6 flex items-center gap-1.5 font-mono text-mono-label uppercase tracking-widest text-accent">
                <span>See the approach</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
