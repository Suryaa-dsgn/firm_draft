"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    id: "pre-investment",
    number: "01",
    label: "Pre-investment",
    tag: "BEFORE CLOSE",
    offerings: [
      "Technology due diligence across architecture, spend, and risk",
      "Acquisition risk and cost-to-remediate estimates",
      "100-day technology plan ready at signing",
    ],
  },
  {
    id: "first-100-days",
    number: "02",
    label: "First 100 days",
    tag: "POST-CLOSE",
    offerings: [
      "CIO Advisory and technology leadership in place",
      "KPI framework and governance cadence running",
      "Agentic monitoring configured and live",
    ],
  },
  {
    id: "hold-period",
    number: "03",
    label: "Hold period",
    tag: "HOLD PERIOD",
    offerings: [
      "Portfolio-wide technology governance",
      "Cost optimization and vendor management",
      "Agentic systems running in production",
      "ERP rationalization and systems consolidation",
    ],
  },
  {
    id: "exit",
    number: "04",
    label: "Exit",
    tag: "EXIT READY",
    offerings: [
      "Exit readiness assessment",
      "Technology debt identified and resolved",
      "Clean data room and documentation",
      "Technology story prepared for buyer diligence",
    ],
  },
] as const;

export function LifecycleDiagram() {
  const [activeStage, setActiveStage] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  const active = STAGES[activeStage] ?? STAGES[0];

  return (
    <SectionShell id="lifecycle" className="border-t border-hairline">
      {/* Header */}
      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={700}>
                {"Value across the investment lifecycle."}
              </ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.08}>
            <p className="text-body text-ink-muted">
              We show up at every stage of the deal. Click a stage to see what we deliver.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop timeline */}
      <Reveal delay={0.1} className="hidden lg:block">
        <div className="relative">
          {/* Connector line */}
          <div
            className="absolute left-0 right-0 h-px bg-hairline-strong"
            style={{ top: "10px" }}
          />

          {/* Stage markers */}
          <div className="grid grid-cols-4 gap-6">
            {STAGES.map((stage, i) => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(i)}
                className="group flex flex-col items-start text-left"
              >
                {/* Dot */}
                <div
                  className={cn(
                    "relative z-10 mb-5 size-5 rounded-full border-2 transition-all duration-200",
                    activeStage === i
                      ? "border-accent bg-accent"
                      : "border-hairline-strong bg-canvas group-hover:border-ink-muted"
                  )}
                />
                {/* Number */}
                <span
                  className={cn(
                    "font-mono text-mono-label transition-colors",
                    activeStage === i ? "text-accent" : "text-ink-faint"
                  )}
                >
                  {stage.number}
                </span>
                {/* Label */}
                <span
                  className={cn(
                    "mt-1.5 text-small font-semibold transition-colors",
                    activeStage === i
                      ? "text-ink"
                      : "text-ink-muted group-hover:text-ink"
                  )}
                >
                  {stage.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Offerings panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            className="mt-10 rounded-card border border-hairline bg-surface-sunk px-8 py-7"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={spring.snappy}
          >
            <MonoLabel className="mb-5 text-accent">{active.tag}</MonoLabel>
            <div className="grid gap-3 sm:grid-cols-2">
              {active.offerings.map((offering) => (
                <div key={offering} className="flex items-start gap-3">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-small text-ink-muted">{offering}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Reveal>

      {/* Mobile: accordion */}
      <div className="lg:hidden space-y-2">
        {STAGES.map((stage, i) => {
          const isOpen = mobileOpen === i;
          return (
            <Reveal key={stage.id} delay={0.06 + i * 0.05}>
              <div className="rounded-card border border-hairline overflow-hidden">
                <button
                  onClick={() => setMobileOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="font-mono text-mono-label text-ink-faint shrink-0">
                    {stage.number}
                  </span>
                  <span className="flex-1 text-small font-semibold text-ink">
                    {stage.label}
                  </span>
                  <span className="text-ink-faint font-mono text-[10px] transition-transform duration-200" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▾
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={spring.snappy}
                    >
                      <div className="border-t border-hairline px-5 pb-5 pt-4 space-y-2.5">
                        <MonoLabel className="mb-3 text-accent">{stage.tag}</MonoLabel>
                        {stage.offerings.map((offering) => (
                          <div key={offering} className="flex items-start gap-3">
                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                            <span className="text-small text-ink-muted">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
