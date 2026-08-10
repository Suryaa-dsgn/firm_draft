import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { SolutionCard } from "@/components/primitives/SolutionCard";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { solutions } from "@/content/solutions";

export function Solutions() {
  return (
    <SectionShell id="solutions" className="bg-surface-sunk border-t border-hairline">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <Reveal>
            <MonoLabel variant="index">[ N.03 / 07 ]</MonoLabel>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={620}>{"Consulting solutions"}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              Four integrated capabilities. Each one designed to operate independently
              or as part of a full engagement.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((pillar, i) => (
          <Reveal key={pillar.id} delay={0.06 + i * 0.07} className="h-full">
            <SolutionCard pillar={pillar} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
