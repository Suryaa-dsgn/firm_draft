import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agentSystems } from "@/content/agentic";
import { NAV_CTA_LABEL } from "@/lib/config";

const DiligenceTriage = dynamic(
  () => import("@/components/interactive/DiligenceTriage"),
  { ssr: false }
);
const ProjectControls = dynamic(
  () => import("@/components/interactive/ProjectControls"),
  { ssr: false }
);

const VERTICALS = [
  {
    tag: "E&C",
    title: "Engineering & Construction",
    body: "Project controls, schedule and cost variance, bid and proposal support, licensed-trade compliance.",
  },
  {
    tag: "Infra",
    title: "Infrastructure & Industrial Services",
    body: "Multi-entity reporting rollups and back-office automation across frequent add-ons.",
  },
  {
    tag: "Consult",
    title: "Consulting & Professional Services",
    body: "Staffing and utilization optimization, institutional-knowledge agents.",
  },
];

export const metadata: Metadata = {
  title: "Agentic Systems",
  description:
    "Four agentic systems that monitor, analyze, and report on portfolio technology without manual input.",
};

export default function AgenticPage() {
  return (
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
              Governance that runs without being told to.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-body-lg text-on-navy-muted">
              Every portfolio carries invisible operational load: collecting data,
              chasing updates, compiling reports that are out of date before they
              are read. Our agentic systems eliminate that load and return the
              output in a form your team can actually use.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Agent system sections */}
      {agentSystems.map((agent, i) => (
        <section
          key={agent.id}
          id={agent.id}
          className="border-b border-navy-2 py-24"
        >
          <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
            {/* Header row */}
            <Reveal>
              <div className="mb-12 flex items-baseline gap-4">
                <span className="font-mono text-mono-label uppercase tracking-widest text-accent">
                  {agent.tag}
                </span>
                <span className="font-mono text-mono-label uppercase tracking-widest text-on-navy-muted">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-display-m font-semibold text-on-navy">
                {agent.name}
              </h2>
            </Reveal>

            {/* Three columns: watches / does / returns */}
            <div className="mt-12 grid gap-px bg-navy-2 rounded-card overflow-hidden sm:grid-cols-3">
              {(
                [
                  { label: "Watches", value: agent.watches },
                  { label: "Does", value: agent.does },
                  { label: "Returns", value: agent.returns },
                ] as const
              ).map(({ label, value }, j) => (
                <Reveal key={label} delay={0.06 + j * 0.08}>
                  <div className="h-full bg-navy p-8">
                    <MonoLabel className="mb-4 text-on-navy-muted">{label.toUpperCase()}</MonoLabel>
                    <p
                      className={cn(
                        "text-body",
                        label === "Returns" ? "text-on-navy" : "text-on-navy-muted"
                      )}
                    >
                      {value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* W3 + W4 demo widgets */}
      <section className="border-b border-navy-2 py-24">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag" className="text-on-navy-muted">
              LIVE DEMOS
            </MonoLabel>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-2xl text-display-m font-semibold text-on-navy">
              See what the agents actually do.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-body text-on-navy-muted">
              Built on real engagement patterns. Click through each widget to
              see the output the system hands back.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal delay={0.06}>
              <DiligenceTriage />
            </Reveal>
            <Reveal delay={0.1}>
              <ProjectControls />
            </Reveal>
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

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <h2 className="max-w-2xl text-display-m font-semibold text-on-navy text-balance">
              Ready to see what governance looks like when it runs itself?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
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
