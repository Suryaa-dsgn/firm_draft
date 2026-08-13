"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { processSteps } from "@/content/approach";

export function Approach() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reduced = useReducedMotion();
  const active = isInView || !!reduced;

  return (
    <SectionShell id="approach" className="bg-surface-sunk border-t border-hairline">
      {/* Header */}
      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.06}>
            <h2 className="text-display-m font-semibold text-ink">
              <ScrambleText duration={700}>{"An engagement model built for portfolio speed."}</ScrambleText>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:col-start-7 lg:pt-2">
          <Reveal delay={0.12}>
            <p className="text-body text-ink-muted">
              No lengthy IT integration project. Pricing that scales with usage
              instead of headcount.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Desktop: animated timeline + step columns */}
      <div ref={ref} className="hidden lg:block">

        {/* Row 1: timeline bar with dot markers */}
        <div className="relative mb-12 h-[14px]">
          <motion.div
            className="absolute inset-x-0 h-px bg-hairline-strong"
            style={{ top: "7px", originX: 0 }}
            initial={{ scaleX: reduced ? 1 : 0 }}
            animate={{ scaleX: active ? 1 : 0 }}
            transition={reduced ? { duration: 0 } : { ...spring.default, duration: 1 }}
          />
          <div className="grid grid-cols-4 gap-8 lg:gap-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.index}
                className="flex items-center gap-2 h-[14px]"
                initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.5 }}
                animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.5 }}
                transition={reduced ? { duration: 0 } : { ...spring.default, delay: 0.5 + i * 0.12 }}
              >
                <span className="size-[6px] shrink-0 rounded-full bg-accent" />
                <span className="font-mono text-mono-label uppercase tracking-widest text-ink-faint">
                  {String(step.index).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 2: step content */}
        <div className="grid grid-cols-4 gap-8 lg:gap-16">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.index}
              className="relative isolate"
              initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: active ? 1 : 0, y: active ? 0 : 12 }}
              transition={reduced ? { duration: 0 } : { ...spring.default, delay: 0.7 + i * 0.08 }}
            >
              {/* Faint background number */}
              <div
                className="pointer-events-none select-none absolute -top-2 right-0 font-semibold leading-none tracking-tight text-hairline -z-10"
                style={{ fontSize: "clamp(4.5rem, 7vw, 7rem)" }}
                aria-hidden="true"
              >
                {String(step.index).padStart(2, "0")}
              </div>

              <h3 className="relative text-display-m font-semibold text-ink">
                <ScrambleText duration={480}>{step.title}</ScrambleText>
              </h3>

              <p className="mt-4 text-small text-ink-muted">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical connected timeline */}
      <Reveal delay={0.1}>
        <div className="space-y-4 lg:hidden">
          {processSteps.map((step, i) => (
            <div key={step.index} className="relative">
              {i < processSteps.length - 1 && (
                <div className="absolute left-3 top-12 h-full w-px bg-hairline" />
              )}
              <div className="flex gap-5">
                <div className="flex shrink-0 flex-col items-center">
                  <span className="flex size-7 items-center justify-center rounded-full border border-hairline text-mono-label font-mono text-ink-faint bg-surface z-10">
                    {step.index}
                  </span>
                </div>
                <div className="pb-8">
                  <h3 className="text-title font-semibold text-ink">
                    <ScrambleText duration={480}>{step.title}</ScrambleText>
                  </h3>
                  <p className="mt-1.5 text-small text-ink-muted">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}
