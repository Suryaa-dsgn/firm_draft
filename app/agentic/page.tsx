import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { agentSystems } from "@/content/agentic";
import { CTASection } from "@/components/sections/CTASection";

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
];

export const metadata: Metadata = {
  title: "Agentic Systems",
  description:
    "Six AI agents that target specific operating costs and cycle-time levers across PE portfolio companies.",
};

export default function AgenticPage() {
  return (
    <>
    <div className="bg-navy pt-16">
      {/* Page header */}
      <section className="border-b border-navy-2 py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag" className="text-on-navy-muted">
              AGENTIC SYSTEMS
            </MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-3xl text-display-l font-semibold text-on-navy text-balance">
              Where Agents Create Measurable Efficiency.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-body-lg text-on-navy-muted">
              Each agent targets a specific operating cost or cycle-time lever, designed
              to show up directly in EBITDA, not just in a dashboard.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6-card agent grid */}
      <section className="border-b border-navy-2 py-24">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {agentSystems.map((agent, i) => (
              <Reveal key={agent.id} delay={0.06 + i * 0.07}>
                <div className="flex h-full flex-col rounded-card border border-navy-2 bg-[rgba(255,255,255,0.03)] p-7">
                  <MonoLabel className="text-on-navy-muted">{`// ${agent.number}`}</MonoLabel>
                  <h2 className="mt-4 text-title font-semibold text-on-navy">{agent.name}</h2>
                  <div className="mt-3">
                    <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-mono-label uppercase tracking-widest text-accent">
                      {agent.targets}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-small text-on-navy-muted leading-relaxed">
                    {agent.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals strip */}
      <section className="border-b border-navy-2 py-16">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <p className="font-mono text-mono-label uppercase tracking-widest text-on-navy-muted">
              Built for operationally intensive, project-driven businesses
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.tag} delay={0.06 + i * 0.07}>
                <div className="rounded-card border border-navy-2 bg-[rgba(255,255,255,0.02)] px-5 py-5">
                  <MonoLabel className="text-accent">{v.tag}</MonoLabel>
                  <h3 className="mt-2 text-title font-semibold text-on-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-small text-on-navy-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
    <CTASection
      heading="Ready to see the two or three agents with the fastest path to impact for your portfolio?"
      wide
    />
    </>
  );
}
