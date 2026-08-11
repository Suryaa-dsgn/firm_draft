"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const MONTHS  = ["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10"];
const PLANNED = [240, 480, 720, 960, 1200, 1440, 1680, 1920, 2160, 2400]; // $K
const ACTUAL  = [238, 485, 718, 958, 1202, 1448, 1740, 2065, 2350, 2740]; // $K

const SVG_W = 380;
const SVG_H = 120;
const PAD_L = 44, PAD_R = 14, PAD_T = 12, PAD_B = 24;
const CW = SVG_W - PAD_L - PAD_R;
const CH = SVG_H - PAD_T - PAD_B;

const ALL   = [...PLANNED, ...ACTUAL];
const MIN_V = Math.min(...ALL);
const MAX_V = Math.max(...ALL);

function toXY(value: number, index: number) {
  const x = PAD_L + (index / (MONTHS.length - 1)) * CW;
  const y = PAD_T + (1 - (value - MIN_V) / (MAX_V - MIN_V)) * CH;
  return { x, y };
}

function makePath(pts: { x: number; y: number }[]) {
  return pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
}

const plannedPts = PLANNED.map((v, i) => toXY(v, i));
const actualPts  = ACTUAL.map((v, i) => toXY(v, i));

const WARN_IDX = 6;
const warnPt   = actualPts[WARN_IDX] ?? { x: 0, y: 0 };

export default function ProjectControls() {
  const [mode, setMode] = useState<"before" | "agent">("before");
  const withAgent = mode === "agent";

  return (
    <div className="flex flex-col h-[380px] rounded-card border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-5 py-4">
        <div className="min-w-0">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-on-navy-muted">
            Project Controls
          </span>
          <span className="ml-2 font-mono text-[9px] text-on-navy-muted">
            Cardinal Engineering
          </span>
        </div>
        {/* Toggle */}
        <div className="ml-4 flex shrink-0 overflow-hidden rounded border border-[rgba(255,255,255,0.12)]">
          {(["before", "agent"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest transition-colors duration-150",
                mode === m
                  ? "bg-accent/15 text-accent"
                  : "text-on-navy-muted hover:text-on-navy"
              )}
            >
              {m === "before" ? "Before" : "With agent"}
            </button>
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div className="px-5 pt-5 pb-4">
        {/* Legend */}
        <div className="mb-4 flex items-center gap-5">
          <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-on-navy-muted">
            <span
              className="inline-block h-px w-5 shrink-0"
              style={{ background: "rgba(255,255,255,0.25)", borderTop: "1px dashed rgba(255,255,255,0.35)" }}
            />
            Planned
          </span>
          <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-on-navy-muted">
            <span className="inline-block h-px w-5 shrink-0 bg-accent" />
            Actual
          </span>
        </div>

        {/* SVG chart */}
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          fill="none"
          className="w-full h-auto"
        >
          {/* Grid lines + Y labels */}
          {[0, 0.5, 1].map((t) => {
            const val = MIN_V + t * (MAX_V - MIN_V);
            const y   = PAD_T + (1 - t) * CH;
            return (
              <g key={t}>
                <line
                  x1={PAD_L} y1={y} x2={SVG_W - PAD_R} y2={y}
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth={1}
                />
                <text
                  x={PAD_L - 5}
                  y={y + 3}
                  textAnchor="end"
                  fill="rgba(255,255,255,0.55)"
                  style={{ fontFamily: "monospace", fontSize: "7.5px" }}
                >
                  ${(val / 1000).toFixed(1)}M
                </text>
              </g>
            );
          })}

          {/* X-axis labels (every other month) */}
          {MONTHS.map((m, i) => {
            if (i % 2 !== 0) return null;
            const x = PAD_L + (i / (MONTHS.length - 1)) * CW;
            return (
              <text
                key={m}
                x={x}
                y={SVG_H - 6}
                textAnchor="middle"
                fill="rgba(255,255,255,0.55)"
                style={{ fontFamily: "monospace", fontSize: "7.5px" }}
              >
                {m}
              </text>
            );
          })}

          {/* Planned — dashed */}
          <path
            d={makePath(plannedPts)}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1.5}
            strokeDasharray="4 3"
            strokeLinecap="round"
          />

          {/* Actual — accent, draws in */}
          <motion.path
            d={makePath(actualPts)}
            stroke="var(--accent)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ...spring.default, duration: 1.3 }}
          />

          {/* Divergence marker — agent mode only */}
          <AnimatePresence>
            {withAgent && (
              <g>
                <motion.line
                  x1={warnPt.x} y1={PAD_T}
                  x2={warnPt.x} y2={PAD_T + CH}
                  stroke="rgba(251,146,60,0.55)"
                  strokeWidth={1}
                  strokeDasharray="3 2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={spring.snappy}
                />
                <motion.circle
                  cx={warnPt.x}
                  cy={warnPt.y}
                  r={4.5}
                  fill="none"
                  stroke="rgba(251,146,60,0.9)"
                  strokeWidth={1.5}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ ...spring.momentum, delay: 0.1 }}
                />
              </g>
            )}
          </AnimatePresence>
        </svg>

        {/* Callout area */}
        <div className="mt-4">
          <AnimatePresence mode="wait">
            {withAgent ? (
              <motion.div
                key="agent"
                className="flex items-start gap-3 rounded border border-amber-400/20 bg-amber-400/5 px-4 py-3"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={spring.snappy}
              >
                <span className="mt-px font-mono text-[11px] text-amber-400 shrink-0">⚠</span>
                <div>
                  <p className="font-mono text-[10px] font-medium text-amber-400">
                    Schedule slip detected at Month 7
                  </p>
                  <p className="mt-1 font-mono text-[9px] leading-relaxed text-on-navy-muted">
                    +12 days on structural steel. Projected cost variance +$340K by completion.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="before"
                className="flex items-center rounded border border-[rgba(255,255,255,0.08)] px-4 py-3"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={spring.snappy}
              >
                <p className="font-mono text-[9px] text-on-navy-muted">
                  Cost overrun not yet surfaced. Next manual review in 3 weeks.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
