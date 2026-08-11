"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { AgentSystem } from "@/content/agentic";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

// ─── Governance: terminal feed ──────────────────────────────────────
const GOV_ROWS = [
  { company: "Northwind Infra",  stat: "SLA",    value: "99.9%",  ok: true  },
  { company: "Meridian Advisory",stat: "SPEND",  value: "$1.8M",  ok: true  },
  { company: "Vantage Controls", stat: "COMPL.", value: "97.4%",  ok: true  },
  { company: "Cardinal Eng.",    stat: "RISK",   value: "MEDIUM", ok: true  },
  { company: "Atlas Industrial", stat: "BUDGET", value: "ALERT",  ok: false },
];

function GovernanceViz({ reduced }: { reduced: boolean }) {
  const [rowsShown, setRowsShown] = useState(reduced ? 5 : 0);
  const [routed, setRouted] = useState(reduced);

  useEffect(() => {
    if (reduced) { setRowsShown(5); setRouted(true); return; }
    const ids: ReturnType<typeof setTimeout>[] = [];
    GOV_ROWS.forEach((_, i) => {
      ids.push(setTimeout(() => setRowsShown(i + 1), 350 + i * 240));
    });
    ids.push(setTimeout(() => setRouted(true), 350 + 4 * 240 + 950));
    return () => ids.forEach(clearTimeout);
  }, [reduced]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.07)] pb-2.5 mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-on-navy-muted">
          Governance Monitor
        </span>
        <span className="flex items-center gap-1.5">
          <motion.span
            className="block size-1.5 rounded-full bg-accent"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">Live</span>
        </span>
      </div>
      <div className="space-y-1.5">
        {GOV_ROWS.map((row, i) => {
          const show = i < rowsShown;
          const isAlert = !row.ok;
          const isRouted = isAlert && routed;
          return (
            <div
              key={row.company}
              className={cn(
                "flex items-center justify-between rounded px-2.5 py-2 transition-all duration-300",
                !show && "opacity-0",
                isAlert && !isRouted && "bg-[rgba(36,80,230,0.10)]",
                isRouted && "bg-[rgba(34,197,94,0.06)]",
              )}
            >
              <span className="font-mono text-[10px] text-on-navy-muted">{row.company}</span>
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-widest",
                isRouted         ? "text-green-400" :
                isAlert          ? "text-accent"    :
                                   "text-on-navy"
              )}>
                {isRouted ? "ROUTED ✓" : `${row.stat}: ${row.value}`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Intelligence: aggregation flow ────────────────────────────────
const INTEL_SOURCES = [
  { name: "Cardinal Engineering",      metrics: "14 KPIs · 2 flags" },
  { name: "Northwind Infrastructure",  metrics: "11 KPIs · 0 flags" },
  { name: "Atlas Industrial Services", metrics: "12 KPIs · 3 flags" },
];

function IntelligenceViz({ reduced }: { reduced: boolean }) {
  const [step, setStep] = useState(reduced ? 3 : 0);

  useEffect(() => {
    if (reduced) { setStep(3); return; }
    const t1 = setTimeout(() => setStep(1), 200);
    const t2 = setTimeout(() => setStep(2), 950);
    const t3 = setTimeout(() => setStep(3), 1550);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, [reduced]);

  return (
    <div className="w-full space-y-3">
      {INTEL_SOURCES.map((src, i) => (
        <motion.div
          key={src.name}
          className="flex items-center justify-between rounded border border-[rgba(255,255,255,0.07)] px-3 py-2.5"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -8 }}
          transition={{ ...spring.snappy, delay: i * 0.1 }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-on-navy-muted">
            {src.name}
          </span>
          <span className="font-mono text-[10px] text-on-navy">{src.metrics}</span>
        </motion.div>
      ))}

      <motion.div
        className="flex items-center gap-2 py-0.5"
        animate={{ opacity: step >= 2 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="h-px flex-1 bg-[rgba(255,255,255,0.06)]" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-accent">aggregating</span>
        <span className="h-px flex-1 bg-[rgba(255,255,255,0.06)]" />
      </motion.div>

      <motion.div
        className="rounded border border-accent/20 bg-accent/5 px-3 py-3"
        animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 6 }}
        transition={spring.snappy}
      >
        <div className="font-mono text-[9px] uppercase tracking-widest text-accent mb-1.5">
          Unified Portfolio View
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-on-navy">
            46 KPIs · 7 flags · Cycle: 2h
          </span>
          <span className="text-accent text-xs">↗</span>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Deployment: phase bars ─────────────────────────────────────────
const DEPLOY_PHASES = [
  { label: "Diagnose", pct: 100, done: true  },
  { label: "Govern",   pct: 72,  done: false },
  { label: "Deploy",   pct: 31,  done: false },
  { label: "Measure",  pct: 0,   done: false },
];

function DeploymentViz({ reduced }: { reduced: boolean }) {
  const [go, setGo] = useState(reduced);

  useEffect(() => {
    if (reduced) { setGo(true); return; }
    const t = setTimeout(() => setGo(true), 280);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[9px] uppercase tracking-widest text-on-navy-muted">
          Integration Timeline
        </span>
        <span className="font-mono text-[9px] text-accent">Week 7 / 12</span>
      </div>
      <div className="space-y-4">
        {DEPLOY_PHASES.map((phase, i) => (
          <div key={phase.label} className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-widest",
                phase.done       ? "text-on-navy-muted" :
                phase.pct > 0    ? "text-on-navy"       :
                                   "text-on-navy-muted/40"
              )}>
                {phase.label}
              </span>
              <span className={cn(
                "font-mono text-[10px]",
                phase.done     ? "text-on-navy-muted" :
                phase.pct > 0  ? "text-accent"        :
                                 "text-on-navy-muted/40"
              )}>
                {phase.pct}%
              </span>
            </div>
            <div className="h-1 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
              <motion.div
                className={cn(
                  "h-full rounded-full origin-left",
                  phase.done ? "bg-on-navy-muted/50" : "bg-accent"
                )}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: go ? phase.pct / 100 : 0 }}
                transition={{ ...spring.default, delay: reduced ? 0 : 0.15 + i * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Attribution: spend → tech → returns SVG flow ───────────────────
function AttributionViz({ reduced }: { reduced: boolean }) {
  const [go, setGo] = useState(reduced);

  useEffect(() => {
    if (reduced) { setGo(true); return; }
    const t = setTimeout(() => setGo(true), 200);
    return () => clearTimeout(t);
  }, [reduced]);

  const fade = (delay: number) => ({
    initial: { opacity: 0 },
    animate: { opacity: go ? 1 : 0 },
    transition: { duration: 0.3, delay },
  });
  const path = (delay: number) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: go ? 1 : 0, opacity: go ? 1 : 0 },
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  });

  return (
    <svg viewBox="0 0 360 185" className="w-full" aria-hidden="true">
      {/* SPEND */}
      <rect x="2" y="62" width="72" height="50" rx="6"
        fill="rgba(36,80,230,0.10)" stroke="rgba(36,80,230,0.25)" strokeWidth="1" />
      <text x="38" y="82" textAnchor="middle"
        fill="var(--on-navy-muted)" fillOpacity={0.7} fontFamily="monospace" fontSize="8" letterSpacing="2">
        SPEND
      </text>
      <text x="38" y="100" textAnchor="middle"
        fill="var(--on-navy)" fontFamily="monospace" fontSize="14" fontWeight="700">
        $4.2M
      </text>

      {/* Middle: infrastructure */}
      <motion.g {...fade(0.55)}>
        <rect x="144" y="38" width="72" height="36" rx="5"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="180" y="54" textAnchor="middle"
          fill="var(--on-navy-muted)" fillOpacity={0.6} fontFamily="monospace" fontSize="7.5" letterSpacing="1.5">
          INFRASTRUCTURE
        </text>
        <text x="180" y="67" textAnchor="middle"
          fill="var(--on-navy)" fontFamily="monospace" fontSize="10">
          $2.1M
        </text>
      </motion.g>

      {/* Middle: talent */}
      <motion.g {...fade(0.65)}>
        <rect x="144" y="100" width="72" height="36" rx="5"
          fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="180" y="116" textAnchor="middle"
          fill="var(--on-navy-muted)" fillOpacity={0.6} fontFamily="monospace" fontSize="7.5" letterSpacing="1.5">
          TALENT
        </text>
        <text x="180" y="129" textAnchor="middle"
          fill="var(--on-navy)" fontFamily="monospace" fontSize="10">
          $2.1M
        </text>
      </motion.g>

      {/* RETURNS */}
      <rect x="286" y="62" width="72" height="50" rx="6"
        fill="rgba(36,80,230,0.18)" stroke="rgba(36,80,230,0.45)" strokeWidth="1.5" />
      <text x="322" y="82" textAnchor="middle"
        fill="rgba(36,80,230,0.85)" fontFamily="monospace" fontSize="8" letterSpacing="2">
        RETURNS
      </text>
      <text x="322" y="102" textAnchor="middle"
        fill="#2450E6" fontFamily="monospace" fontSize="16" fontWeight="700">
        4.1×
      </text>

      {/* Paths: spend → middle */}
      <motion.path d="M 74 78 L 144 56"
        stroke="#2450E6" strokeWidth="1" fill="none" strokeDasharray="3 3"
        {...path(0.15)}
      />
      <motion.path d="M 74 98 L 144 118"
        stroke="#2450E6" strokeWidth="1" fill="none" strokeDasharray="3 3"
        {...path(0.3)}
      />

      {/* Paths: middle → returns */}
      <motion.path d="M 216 56 L 286 78"
        stroke="#2450E6" strokeWidth="1.5" fill="none" strokeDasharray="3 3"
        {...path(0.82)}
      />
      <motion.path d="M 216 118 L 286 98"
        stroke="#2450E6" strokeWidth="1.5" fill="none" strokeDasharray="3 3"
        {...path(0.96)}
      />

      {/* Label */}
      <motion.text x="180" y="175" textAnchor="middle"
        fill="var(--on-navy-muted)" fillOpacity={0.4} fontFamily="monospace" fontSize="7.5" letterSpacing="3"
        {...fade(1.2)}
      >
        TECHNOLOGY ATTRIBUTION MODEL
      </motion.text>
    </svg>
  );
}

// ─── Viz router ─────────────────────────────────────────────────────
function AgentViz({ agentId, reduced }: { agentId: string; reduced: boolean }) {
  if (agentId === "agent-governance") return <GovernanceViz reduced={reduced} />;
  if (agentId === "agent-portfolio")  return <IntelligenceViz reduced={reduced} />;
  if (agentId === "agent-deployment") return <DeploymentViz reduced={reduced} />;
  if (agentId === "agent-roi")        return <AttributionViz reduced={reduced} />;
  return null;
}

// ─── Main export ────────────────────────────────────────────────────
export function AgentShowcase({ agents }: { agents: AgentSystem[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion() ?? false;

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % agents.length);
    }, 5000);
    return () => clearInterval(id);
  }, [paused, agents.length]);

  const agent = agents[activeIdx] ?? agents[0];
  if (!agent) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab row */}
      <div className="relative flex overflow-x-auto border-b border-[rgba(255,255,255,0.08)] mb-10">
        {agents.map((a, i) => (
          <button
            key={a.id}
            onClick={() => setActiveIdx(i)}
            className={cn(
              "relative shrink-0 px-5 py-3.5 font-mono text-mono-label uppercase tracking-widest transition-colors",
              i === activeIdx
                ? "text-accent"
                : "text-on-navy-muted hover:text-on-navy"
            )}
          >
            {a.tag}
            {i === activeIdx && (
              <motion.span
                layoutId="agent-tab-bar"
                className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                transition={spring.snappy}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={agent.id}
          initial={reduced ? false : { opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? {} : { opacity: 0, x: -14 }}
          transition={spring.snappy}
          className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16"
        >
          {/* Left: text */}
          <div className="flex flex-col justify-center gap-5 order-2 lg:order-1">
            <span className="font-mono text-mono-label uppercase tracking-widest text-accent">
              {agent.tag}
            </span>
            <h3 className="text-display-m font-semibold text-on-navy leading-tight">
              {agent.name}
            </h3>
            <ul className="space-y-3.5">
              {([agent.watches, agent.does, agent.returns] as const).map((line, li) => (
                <li key={li} className="flex gap-3">
                  <span className="font-mono text-accent mt-0.5 shrink-0 select-none">›</span>
                  <span className={cn(
                    "text-small leading-relaxed",
                    li === 2 ? "text-on-navy" : "text-on-navy-muted"
                  )}>
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: animated viz */}
          <div className="order-1 lg:order-2 rounded-card bg-navy-2/70 p-6 flex items-center justify-center min-h-[260px] border border-[rgba(255,255,255,0.05)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={agent.id + "-viz"}
                className="w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <AgentViz agentId={agent.id} reduced={reduced} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot pagination */}
      <div className="flex items-center gap-2 mt-10">
        {agents.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`View ${_.name}`}
            className={cn(
              "h-px rounded-full transition-all duration-300",
              i === activeIdx
                ? "w-8 bg-accent"
                : "w-3 bg-on-navy-muted/25 hover:bg-on-navy-muted/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
