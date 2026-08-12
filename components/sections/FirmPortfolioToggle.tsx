"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { cn } from "@/lib/utils";

type Level = "firm" | "portfolio";

const LEVELS: Record<Level, { label: string; description: string; chips: string[] }> = {
  firm: {
    label: "Firm level",
    description: "What we deliver to the fund.",
    chips: [
      "Portfolio-wide technology visibility",
      "KPI framework across all holdings",
      "Technology diligence support",
      "Reusable playbooks and governance",
      "Cross-portfolio risk reporting",
      "Standardized technology benchmarks",
    ],
  },
  portfolio: {
    label: "Portfolio company level",
    description: "What we deliver inside each company.",
    chips: [
      "Fractional CIO leadership",
      "100-day technology plan",
      "Cost optimization and vendor management",
      "ERP rationalization",
      "Cybersecurity posture",
      "Automation and workflow agents",
      "M&A integration support",
    ],
  },
};

export function FirmPortfolioToggle() {
  const [level, setLevel] = useState<Level>("firm");
  const current = LEVELS[level];

  return (
    <SectionShell id="levels" className="border-t border-hairline">
      <div className="mb-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={680}>{"Two levels. One technology strategy."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.08}>
            <p className="text-body text-ink-muted">
              We work at both the fund and the portfolio company. Select a level.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.12}>
        {/* Toggle */}
        <div className="mb-10 inline-flex overflow-hidden rounded-card border border-hairline bg-surface-sunk">
          {(["firm", "portfolio"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                "relative px-6 py-3 text-small font-medium transition-colors duration-150",
                level === l ? "text-ink" : "text-ink-muted hover:text-ink"
              )}
            >
              {level === l && (
                <motion.div
                  layoutId="level-pill"
                  className="absolute inset-0 bg-canvas border border-hairline rounded-[calc(var(--radius-card)-1px)]"
                  transition={spring.snappy}
                />
              )}
              <span className="relative z-10">{LEVELS[l].label}</span>
            </button>
          ))}
        </div>

        {/* Chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={level}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={spring.snappy}
          >
            <p className="mb-6 text-small text-ink-faint font-mono uppercase tracking-widest">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {current.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-input border border-hairline px-4 py-2 text-small text-ink-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </SectionShell>
  );
}
