"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

const HOLDINGS = [
  { name: "Cardinal Engineering",      vertical: "E&C",    health: 78, flags: 2 },
  { name: "Northwind Infrastructure",  vertical: "Infra",  health: 86, flags: 0 },
  { name: "Meridian Advisory",         vertical: "Consult",health: 82, flags: 1 },
  { name: "Atlas Industrial Services", vertical: "Infra",  health: 71, flags: 3 },
  { name: "Vantage Controls",          vertical: "E&C",    health: 80, flags: 1 },
];

// Portfolio health index rising over 24-month hold
const TREND_PTS = [73, 75, 77, 79, 81, 83, 85];

function statusDot(flags: number) {
  if (flags === 0) return "bg-green-500";
  if (flags <= 2)  return "bg-amber-400";
  return "bg-red-400";
}

function healthColor(health: number) {
  if (health >= 84) return "text-green-600";
  if (health >= 76) return "text-ink";
  return "text-amber-600";
}

const SVG_W = 300;
const SVG_H = 80;
const MIN_V  = Math.min(...TREND_PTS);
const MAX_V  = Math.max(...TREND_PTS);
const RANGE  = MAX_V - MIN_V;

const pts = TREND_PTS.map((v, i) => ({
  x: (i / (TREND_PTS.length - 1)) * SVG_W,
  y: SVG_H - 8 - ((v - MIN_V) / RANGE) * (SVG_H - 20),
}));

const linePath = pts
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
  .join(" ");

// Nearest trend-point index for a given holding row
const trendIdx = (hi: number) =>
  Math.round((hi / (HOLDINGS.length - 1)) * (TREND_PTS.length - 1));

export default function PortfolioMonitor() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const reduced  = useReducedMotion();
  const active   = isInView || !!reduced;

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className="w-full rounded-card border border-hairline bg-canvas shadow-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-hairline px-5 py-3.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ink-faint">
          Portfolio Monitor
        </span>
        <span className="flex items-center gap-1.5">
          <motion.span
            className="block size-1.5 rounded-full bg-accent"
            animate={active ? { opacity: [1, 0.2, 1] } : {}}
            transition={{ duration: 2, repeat: 2, repeatDelay: 20 }}
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
            Live
          </span>
        </span>
      </div>

      {/* Holdings list */}
      <div className="px-5 py-3">
        {HOLDINGS.map((h, i) => (
          <motion.div
            key={h.name}
            className={cn(
              "flex cursor-default items-center justify-between rounded px-2 py-2 transition-colors duration-150",
              hoveredIdx === i ? "bg-surface-sunk" : "hover:bg-surface"
            )}
            initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 4 }}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 4 }}
            transition={{ ...spring.default, delay: reduced ? 0 : 0.15 + i * 0.06 }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={cn(
                  "size-[6px] shrink-0 rounded-full transition-transform duration-150",
                  statusDot(h.flags),
                  hoveredIdx === i && "scale-125"
                )}
              />
              <span className="font-mono text-[10px] text-ink-muted truncate">
                {h.name}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-ink-faint shrink-0">
                {h.vertical}
              </span>
            </div>
            <span className={cn("font-mono text-[11px] font-medium shrink-0 ml-3", healthColor(h.health))}>
              {h.health}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Trend sparkline */}
      <div className="border-t border-hairline px-5 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[8px] uppercase tracking-widest text-ink-faint">
            Health index
          </span>
          <span className="font-mono text-[8px] text-ink-faint">
            24-month hold
          </span>
        </div>
        <div className="h-[80px]">
          <svg
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            fill="none"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            {/* Subtle grid lines */}
            {[0.25, 0.55, 0.82].map((t) => (
              <line
                key={t}
                x1={0} y1={SVG_H * t} x2={SVG_W} y2={SVG_H * t}
                stroke="var(--hairline)"
                strokeWidth={1}
              />
            ))}
            {/* Animated trend line */}
            <motion.path
              d={linePath}
              stroke="var(--accent)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: reduced ? 1 : 0 }}
              animate={{ pathLength: active ? 1 : 0 }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { ...spring.default, duration: 1.4, delay: 0.1 }
              }
            />
            {/* Data dots */}
            {pts.map((p, i) => {
              const isHighlighted =
                hoveredIdx !== null && i === trendIdx(hoveredIdx);
              return (
                <motion.circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={isHighlighted ? 4 : 2.5}
                  fill="var(--canvas)"
                  stroke="var(--accent)"
                  strokeWidth={1.5}
                  className="transition-all duration-150"
                  initial={{ opacity: reduced ? 1 : 0 }}
                  animate={{ opacity: active ? 1 : 0 }}
                  transition={{
                    ...spring.default,
                    delay: reduced ? 0 : 0.6 + i * 0.07,
                  }}
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Mini stats */}
      <div className="grid grid-cols-3 divide-x divide-hairline border-t border-hairline">
        {[
          { label: "Monitoring", value: "12"     },
          { label: "Alerts",     value: "8"      },
          { label: "Updated",    value: "4s ago" },
        ].map(({ label, value }, i) => (
          <motion.div
            key={label}
            className="px-4 py-3.5"
            initial={{ opacity: reduced ? 1 : 0 }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ ...spring.default, delay: reduced ? 0 : 0.65 + i * 0.08 }}
          >
            <div className="font-mono text-[11px] font-semibold text-ink">
              {value}
            </div>
            <div className="mt-0.5 font-mono text-[8px] uppercase tracking-widest text-ink-faint">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
