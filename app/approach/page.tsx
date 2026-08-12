import type { Metadata } from "next";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { processSteps } from "@/content/approach";
import { NAV_CTA_LABEL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "A four-phase engagement model: Diagnose, Govern, Deploy, Measure.",
};

const NINETY_DAY_PHASES = [
  {
    label: "Weeks 1-3",
    phase: "Diagnose",
    milestones: [
      "Technology landscape mapped",
      "Vendor and contract risk identified",
      "Draft value creation roadmap",
    ],
  },
  {
    label: "Weeks 4-6",
    phase: "Govern",
    milestones: [
      "KPI framework live",
      "Governance cadence running",
      "Agentic monitoring configured",
    ],
  },
  {
    label: "Weeks 7-12",
    phase: "Deploy",
    milestones: [
      "Priority initiatives executing",
      "Vendor changes actioned",
      "First ROI attribution data",
    ],
  },
];

export default function ApproachPage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">APPROACH</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-display-l font-semibold text-ink text-balance">
              Four phases. One operating model.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
              Every engagement follows the same structure: diagnose first, govern
              next, deploy with precision, then measure continuously. The sequence
              is not arbitrary. Each phase depends on the one before it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Phase sections */}
      {processSteps.map((step, i) => (
        <section
          key={step.index}
          className={cn(
            "border-b border-hairline py-24",
            i % 2 === 1 ? "bg-surface-sunk" : "bg-canvas"
          )}
        >
          <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
            <div className="grid grid-cols-12 gap-6">
              {/* Left — number + phase name */}
              <div className="col-span-12 lg:col-span-4">
                <Reveal>
                  <div
                    className="font-semibold leading-none tracking-tight text-hairline-strong select-none"
                    style={{ fontSize: "clamp(6rem, 12vw, 10rem)" }}
                    aria-hidden="true"
                  >
                    {String(step.index).padStart(2, "0")}
                  </div>
                  <h2 className="mt-2 text-display-m font-semibold text-ink">
                    {step.phase}
                  </h2>
                  <MonoLabel className="mt-3 text-ink-faint">
                    {step.duration.toUpperCase()}
                  </MonoLabel>
                </Reveal>
              </div>

              {/* Right — description + activities */}
              <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:pt-6">
                <Reveal delay={0.1}>
                  <p className="text-body-lg text-ink-muted">{step.description}</p>
                </Reveal>

                <Reveal delay={0.18}>
                  <div className="mt-8">
                    <MonoLabel className="mb-4 text-ink-faint">ACTIVITIES</MonoLabel>
                    <ul className="space-y-3">
                      {step.activities.map((activity, j) => (
                        <li
                          key={activity}
                          className="flex items-start gap-4 text-body text-ink"
                        >
                          <span className="mt-0.5 font-mono text-mono-label text-ink-faint shrink-0">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* First 90 Days section */}
      <section className="border-b border-hairline bg-surface-sunk py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">FIRST 90 DAYS</MonoLabel>
            <h2 className="mt-6 max-w-xl text-display-m font-semibold text-ink text-balance">
              What the first engagement looks like in practice.
            </h2>
            <p className="mt-4 max-w-lg text-body text-ink-muted">
              The first three phases typically complete within 90 days. By week 12
              you have a running governance layer, active agentic monitoring, and
              initial ROI attribution data.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px bg-hairline rounded-card overflow-hidden sm:grid-cols-3">
            {NINETY_DAY_PHASES.map(({ label, phase, milestones }, i) => (
              <Reveal key={phase} delay={0.06 + i * 0.08} className="h-full">
                <div className="h-full bg-surface p-8">
                  <MonoLabel className="text-ink-faint">{label.toUpperCase()}</MonoLabel>
                  <h3 className="mt-3 text-title font-semibold text-ink">{phase}</h3>
                  <ul className="mt-6 space-y-3">
                    {milestones.map((m) => (
                      <li key={m} className="flex items-start gap-3 text-small text-ink-muted">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who you will work with */}
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">WHO YOU WILL WORK WITH</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-xl text-display-m font-semibold text-ink text-balance">
              Senior from day one.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-12 gap-6 lg:gap-12">
            {/* Photo slot */}
            <div className="col-span-12 lg:col-span-4">
              <Reveal delay={0.1}>
                {/* Monogram placeholder — swap for a real photograph when available */}
                <div
                  className="flex size-28 items-center justify-center rounded-card border border-hairline bg-surface-sunk"
                  data-placeholder="principal-photo"
                  aria-label="Principal photo placeholder"
                >
                  <span className="font-mono text-[2rem] font-semibold leading-none text-ink-faint">
                    [P]
                  </span>
                </div>
                <h3 className="mt-6 text-title font-semibold text-ink">
                  [PRINCIPAL NAME]
                </h3>
                <p className="mt-1 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                  Founding Principal
                </p>
                <p className="font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                  CIO Advisory Practice
                </p>
              </Reveal>
            </div>

            {/* Bio */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:pt-1">
              <Reveal delay={0.14}>
                <p className="text-body text-ink-muted">
                  Every engagement is led by a senior practitioner, not handed to a
                  junior team after the kickoff call. The principal who scopes the
                  work runs the work, stays accountable through exit, and gives you
                  a direct line when something needs to move fast.
                </p>
                <p className="mt-4 text-body text-ink-muted">
                  [Placeholder. A real bio and photograph replace this before the
                  site goes live.]
                </p>
                <p className="mt-4 font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                  [PLACEHOLDER - REAL BIO PENDING]
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <h2 className="max-w-xl text-display-m font-semibold text-on-navy text-balance">
              The first conversation takes 30 minutes.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-body-lg text-on-navy-muted">
              We will tell you what phase would be most useful to start with and
              why.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "no-underline")}
              >
                {NAV_CTA_LABEL}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
