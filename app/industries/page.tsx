import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA_LABEL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Where we create the most leverage: Engineering & Construction, Infrastructure & Industrial Services, and Consulting & Professional Services.",
};

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
    id: "engineering-construction",
    tag: "E&C",
    title: "Engineering & Construction",
    pain: "Project costs and schedules slip before anyone reviews them.",
    description:
      "In E&C, complexity compounds fast. Multiple subcontractors, long timelines, and contract-heavy revenue mean small technology gaps become large financial exposures. We install the governance and automation layer that keeps projects visible and controllable.",
    services: [
      "Technology Due Diligence on ERP and project controls systems",
      "CIO Advisory during post-acquisition integration",
      "Project controls agent monitoring schedule and cost variance",
      "Bid and proposal automation to reduce manual overhead",
      "Compliance and licensing tracking across jurisdictions",
    ],
    demo: "project-controls",
  },
  {
    id: "infrastructure-industrial",
    tag: "INFRA",
    title: "Infrastructure & Industrial Services",
    pain: "Add-on complexity creates reporting gaps and manual overhead.",
    description:
      "Infrastructure and industrial businesses grow through acquisition. Each add-on brings its own systems, processes, and data silos. We build the reporting and governance layer that makes a fragmented portfolio readable at the fund level.",
    services: [
      "Portfolio-wide technology governance across all entities",
      "KPI standardization for multi-entity reporting",
      "ERP rationalization and systems consolidation",
      "Back-office automation across shared service functions",
      "Portfolio intelligence agent for cross-entity visibility",
    ],
    demo: null,
  },
  {
    id: "consulting-services",
    tag: "CONSULTING",
    title: "Consulting & Professional Services",
    pain: "Utilization gaps and knowledge in departing staff erode margin.",
    description:
      "In services businesses, margin lives in utilization and knowledge retention. When a senior person leaves, institutional knowledge walks out with them. We build the systems that capture, surface, and scale what your best people know.",
    services: [
      "CIO Advisory aligned to utilization and delivery metrics",
      "Knowledge agent to surface institutional expertise at scale",
      "Workforce analytics and staffing optimization",
      "Technology Due Diligence on billable system risk",
      "Governance reporting for partner-level visibility",
    ],
    demo: "diligence",
  },
] as const;

export default function IndustriesPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="INDUSTRIES"
        title="Where we create the most leverage."
        subtext="Strongest results in operationally intensive businesses where technology and process complexity create clear value-creation opportunities."
      />

      {/* Vertical sections */}
      {VERTICALS.map((vertical, i) => (
        <section
          key={vertical.id}
          id={vertical.id}
          className={cn(
            "border-b border-hairline py-24",
            i % 2 === 1 ? "bg-surface-sunk" : "bg-canvas"
          )}
        >
          <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
            <div className="grid grid-cols-12 gap-6">
              {/* Left */}
              <div className="col-span-12 lg:col-span-5">
                <Reveal>
                  <MonoLabel className="text-ink-faint">{vertical.tag}</MonoLabel>
                  <h2 className="mt-4 text-display-m font-semibold text-ink text-balance">
                    {vertical.title}
                  </h2>
                  <p className="mt-3 text-body font-medium text-ink-muted">{vertical.pain}</p>
                  <p className="mt-4 text-body text-ink-muted">{vertical.description}</p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="mt-8">
                    <MonoLabel className="mb-4 text-ink-faint">WHAT WE DO HERE</MonoLabel>
                    <ul className="space-y-3">
                      {vertical.services.map((service) => (
                        <li
                          key={service}
                          className="flex items-start gap-3 text-small text-ink-muted"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              {/* Right — demo or visual */}
              <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-2">
                <Reveal delay={0.12}>
                  {vertical.demo === "project-controls" ? (
                    <ProjectControls />
                  ) : vertical.demo === "diligence" ? (
                    <DiligenceTriage />
                  ) : (
                    <div className="flex h-[380px] items-center justify-center rounded-card border border-hairline bg-surface-sunk">
                      <div className="text-center">
                        <MonoLabel className="text-ink-faint">VISUAL</MonoLabel>
                        <p className="mt-3 text-small text-ink-faint">[Portfolio intelligence demo — coming soon]</p>
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Closing line */}
      <section className="border-b border-hairline py-16 bg-surface-sunk">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <p className="text-body text-ink-muted max-w-2xl">
              Our approach extends to other operationally intensive portfolio companies where
              technology and process complexity create value-creation opportunities. If your
              portfolio does not fit neatly into one of these three, start a conversation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <h2 className="max-w-2xl text-display-m font-semibold text-on-navy text-balance">
              Not sure if your portfolio fits? Start with a conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-body-lg text-on-navy-muted">
              We will tell you honestly whether the opportunity is there and what
              it would take to capture it.
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
