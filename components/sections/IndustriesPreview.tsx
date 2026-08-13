import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const VERTICALS = [
  {
    tag: "E&C",
    title: "Engineering & Construction",
    body: "Project controls, schedule/cost variance monitoring, bid automation, and licensed-trade compliance tracking.",
  },
  {
    tag: "INFRA",
    title: "Infrastructure & Industrial",
    body: "Multi-entity reporting rollups and back-office automation for roll-up platforms integrating frequent add-ons.",
  },
  {
    tag: "CONSULTING",
    title: "Consulting & Professional Services",
    body: "Institutional knowledge agents and staffing/utilization optimization built on our enterprise consulting pursuits.",
  },
] as const;

export function IndustriesPreview() {
  return (
    <SectionShell id="industries-preview" className="border-t border-hairline">
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={660}>{"Where we fit."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.08}>
            <p className="text-body text-ink-muted">
              Our strongest reference architecture is in operationally intensive,
              project-driven businesses, the profile common across E&C, infrastructure,
              and consulting platforms.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {VERTICALS.map((vertical, i) => (
          <Reveal key={vertical.tag} delay={0.06 + i * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded-card border border-hairline bg-surface-sunk p-7">
              <MonoLabel className="text-ink-faint">{vertical.tag}</MonoLabel>
              <h3 className="mt-4 text-title font-semibold text-ink">{vertical.title}</h3>
              <p className="mt-2 text-small text-ink-muted">{vertical.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
