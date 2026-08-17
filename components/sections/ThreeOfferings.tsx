"use client";

import { useState } from "react";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";

const OFFERINGS = [
  {
    tag: "001",
    title: "Agentic Firm Operations",
    description: "We equip PE operating teams with intelligent workflows for screening, diligence, reporting, and portfolio oversight.",
    defaultImage: "/Agentic%20Firm%20Operation_updated_default.webp",
    hoverImage: "/Agentic%20Firm%20Operation_updated_hover.webp",
    href: "/agentic",
  },
  {
    tag: "002",
    title: "Portfolio Transformation",
    description: "We modernize critical workflows across portfolio companies, improving how teams manage projects, finance, and day-to-day operations.",
    defaultImage: "/Portfolio%20transformation_default.webp",
    hoverImage: "/Portfolio%20transformation_hover.webp",
    href: "/agentic",
  },
  {
    tag: "003",
    title: "CIO Advisory",
    description: "Technology leadership for portfolio companies navigating growth, change, and the demands of their first 100 days.",
    defaultImage: "/CIO%20Advisory_default.webp",
    hoverImage: "/CIO%20Advisory_hover.webp",
    href: "/solutions",
  },
] as const;

function OfferingCard({
  offering,
  revealDelay,
}: {
  offering: (typeof OFFERINGS)[number];
  revealDelay: number;
}) {
  const [scrambleTrigger, setScrambleTrigger] = useState(0);

  return (
    <Reveal delay={revealDelay}>
      <Link
        href={offering.href}
        className="group flex flex-col rounded-card border border-hairline bg-canvas px-7 py-7 no-underline transition-[transform,box-shadow,background-color] duration-[250ms] ease-out hover:-translate-y-1 hover:scale-[1.015] hover:bg-surface hover:shadow-[0_8px_24px_rgba(14,14,15,0.10)]"
        onMouseEnter={() => setScrambleTrigger((n) => n + 1)}
      >
        <MonoLabel className="text-ink-faint">{`// ${offering.tag}`}</MonoLabel>
        <h3 className="mt-5 text-title font-semibold text-ink transition-colors duration-200 group-hover:text-accent">
          <ScrambleText trigger="none" duration={400} externalTrigger={scrambleTrigger}>
            {offering.title}
          </ScrambleText>
        </h3>
        <p className="mt-3 text-body text-ink-muted">{offering.description}</p>

        {/* Fixed-height illustration area — layout stable before images load */}
        <div className="relative mt-6 h-44">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={offering.defaultImage}
            alt=""
            aria-hidden="true"
            width={400}
            height={220}
            className="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-[200ms] group-hover:opacity-0"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={offering.hoverImage}
            alt=""
            aria-hidden="true"
            width={400}
            height={220}
            className="absolute inset-0 h-full w-full object-contain object-center opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
          />
        </div>

        <div className="mt-5 flex items-center gap-1.5 font-mono text-mono-label uppercase tracking-widest text-accent">
          <span>Learn more</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ThreeOfferings() {
  return (
    <SectionShell id="offerings" className="border-t border-hairline bg-surface-sunk">
      <div className="mb-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={620}>{"Three ways we engage with a PE platform."}</ScrambleText>
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

      <div className="grid gap-5 py-2 lg:grid-cols-3">
        {OFFERINGS.map((offering, i) => (
          <OfferingCard
            key={offering.tag}
            offering={offering}
            revealDelay={0.06 + i * 0.08}
          />
        ))}
      </div>
    </SectionShell>
  );
}
