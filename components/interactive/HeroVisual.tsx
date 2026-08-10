"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";

const SIGNALS = [
  {
    id: "gov",
    label: "GOV",
    color: "var(--accent)",
    strokeWidth: 1.5,
    opacity: 1,
    d: "M 0 185 C 50 180 90 168 130 152 S 200 124 250 108 S 330 78 380 58",
    dots: [
      { cx: 0, cy: 185 },
      { cx: 130, cy: 152 },
      { cx: 250, cy: 108 },
      { cx: 380, cy: 58 },
    ],
    delay: 0.1,
    labelY: 61,
  },
  {
    id: "roi",
    label: "ROI",
    color: "var(--accent)",
    strokeWidth: 1,
    opacity: 0.4,
    d: "M 0 218 C 60 212 110 202 160 190 S 240 170 290 156 S 355 136 380 126",
    dots: [
      { cx: 0, cy: 218 },
      { cx: 290, cy: 156 },
      { cx: 380, cy: 126 },
    ],
    delay: 0.28,
    labelY: 129,
  },
  {
    id: "tch",
    label: "TCH",
    color: "var(--ink-faint)",
    strokeWidth: 1,
    opacity: 0.4,
    d: "M 0 235 C 70 230 130 222 180 214 S 270 200 320 192 S 365 184 380 180",
    dots: [],
    delay: 0.44,
    labelY: 183,
  },
];

const GRID_H = [65, 115, 165, 215];
const GRID_V = [95, 190, 285];

const STATUS = [
  { label: "MONITORED", value: "12" },
  { label: "ALERTS", value: "0" },
  { label: "UPDATED", value: "4m ago" },
];

export default function HeroVisual() {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="w-full overflow-hidden rounded-card border border-hairline bg-surface"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <span
          className="font-mono uppercase tracking-widest text-ink-faint"
          style={{ fontSize: "9px" }}
        >
          Portfolio Monitor
        </span>
        <span
          className="flex items-center gap-1.5 font-mono uppercase tracking-widest text-accent"
          style={{ fontSize: "9px" }}
        >
          <motion.span
            className="inline-block size-1.5 rounded-full bg-accent"
            animate={reduced ? {} : { opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Live
        </span>
      </div>

      {/* Chart */}
      <svg viewBox="-16 0 436 260" fill="none" className="w-full h-auto">
        {/* Grid */}
        {GRID_H.map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="400"
            y2={y}
            stroke="var(--hairline-strong)"
            strokeWidth="0.5"
          />
        ))}
        {GRID_V.map((x) => (
          <line
            key={x}
            x1={x}
            y1="40"
            x2={x}
            y2="245"
            stroke="var(--hairline-strong)"
            strokeWidth="0.5"
          />
        ))}

        {/* Baseline */}
        <line
          x1="0"
          y1="245"
          x2="400"
          y2="245"
          stroke="var(--hairline-strong)"
          strokeWidth="1"
        />

        {/* Y-axis labels */}
        <text
          x="4"
          y="70"
          fontSize="7"
          fill="var(--ink-faint)"
          fontFamily="var(--font-geist-mono)"
        >
          HIGH
        </text>
        <text
          x="4"
          y="220"
          fontSize="7"
          fill="var(--ink-faint)"
          fontFamily="var(--font-geist-mono)"
        >
          BASE
        </text>

        {/* Signal lines + dots */}
        {SIGNALS.map((sig) => (
          <g key={sig.id}>
            <motion.path
              d={sig.d}
              stroke={sig.color}
              strokeWidth={sig.strokeWidth}
              strokeOpacity={sig.opacity}
              strokeLinecap="round"
              initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={
                reduced
                  ? { duration: 0 }
                  : {
                      pathLength: { ...spring.default, duration: 1.3, delay: sig.delay },
                      opacity: { duration: 0.01, delay: sig.delay },
                    }
              }
            />
            {sig.dots.map((dot, j) => (
              <motion.circle
                key={j}
                cx={dot.cx}
                cy={dot.cy}
                r="2.5"
                fill="var(--surface)"
                stroke={sig.color}
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
                transition={
                  reduced
                    ? { duration: 0 }
                    : { ...spring.snappy, delay: sig.delay + 0.85 + j * 0.08 }
                }
              />
            ))}
          </g>
        ))}

        {/* Signal labels at line ends */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? { duration: 0 } : { delay: 1.5, duration: 0.35 }}
        >
          {SIGNALS.map((sig) => (
            <text
              key={sig.id}
              x="403"
              y={sig.labelY}
              fontSize="7"
              fill={sig.color}
              fillOpacity={sig.opacity}
              fontFamily="var(--font-geist-mono)"
            >
              {sig.label}
            </text>
          ))}
        </motion.g>

        {/* Pulse on latest governance point */}
        {!reduced && (
          <motion.circle
            cx={380}
            cy={58}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            initial={{ r: 3, opacity: 0.6 }}
            animate={{ r: 11, opacity: 0 }}
            transition={{
              delay: 1.9,
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeOut",
            }}
          />
        )}
      </svg>

      {/* Status footer */}
      <div className="grid grid-cols-3 divide-x divide-hairline border-t border-hairline">
        {STATUS.map(({ label, value }) => (
          <div key={label} className="px-3 py-2.5">
            <p
              className="font-mono uppercase tracking-widest text-ink-faint leading-none"
              style={{ fontSize: "8px" }}
            >
              {label}
            </p>
            <motion.p
              className="mt-1 font-mono font-semibold text-ink"
              style={{ fontSize: "11px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={
                reduced ? { duration: 0 } : { delay: 1.7, duration: 0.4 }
              }
            >
              {value}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
