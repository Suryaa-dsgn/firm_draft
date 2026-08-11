"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Flag = "red" | "amber" | "clear";
type RunState = "idle" | "running" | "done";

const FILES: {
  name: string;
  type: string;
  flag: Flag;
  finding: string;
  detail: string;
}[] = [
  {
    name: "MSA_Cardinal_2023.pdf",
    type: "PDF",
    flag: "red",
    finding: "Auto-renew clause, 36-month lock-in",
    detail:
      "The MSA auto-renews annually with no exit window. Breaking mid-term carries a $180K penalty clause.",
  },
  {
    name: "Rev_Recognition_Q3.xlsx",
    type: "XLSX",
    flag: "red",
    finding: "Revenue concentration, top client 41%",
    detail:
      "Single client represents 41% of trailing-twelve-month revenue. Loss would materially reduce EBITDA.",
  },
  {
    name: "Vendor_Contracts.zip",
    type: "ZIP",
    flag: "red",
    finding: "Three contracts without termination rights",
    detail:
      "Two SaaS vendors and one logistics provider have no T4C clause. Locked spend: $620K/yr.",
  },
  {
    name: "IT_Asset_Inventory.csv",
    type: "CSV",
    flag: "amber",
    finding: "Unsupported ERP version, end of life Q2 2025",
    detail:
      "Current ERP reaches end-of-support in Q2 2025. Migration estimated at $280K and 4 months.",
  },
  {
    name: "HR_Headcount_2024.xlsx",
    type: "XLSX",
    flag: "amber",
    finding: "Key-person dependency, 2 critical roles",
    detail:
      "CTO and Head of Delivery hold no retention agreements and have had recent competitor approaches.",
  },
  {
    name: "Security_Audit_2023.pdf",
    type: "PDF",
    flag: "amber",
    finding: "SOC 2 lapsed, last report 18 months ago",
    detail:
      "Enterprise contracts require annual SOC 2. The lapse is a blocker on 3 pending customer renewals.",
  },
  {
    name: "Lease_Agreements.pdf",
    type: "PDF",
    flag: "amber",
    finding: "Above-market lease, 4 years remaining",
    detail:
      "HQ lease sits $18/sqft above current market. Early exit requires 6-month notice plus $95K.",
  },
  { name: "Financial_Model_v3.xlsx",  type: "XLSX", flag: "clear", finding: "", detail: "" },
  { name: "Corp_Structure_Docs.pdf",  type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Board_Minutes_2024.pdf",   type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "IP_Registry.pdf",          type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Insurance_Certs.pdf",      type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Tax_Returns_2022-23.pdf",  type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Employment_Contracts.pdf", type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Bank_Statements_Q3.pdf",   type: "PDF",  flag: "clear", finding: "", detail: "" },
  { name: "Permits_Licenses.pdf",     type: "PDF",  flag: "clear", finding: "", detail: "" },
];

const BADGE: Record<Flag, string> = {
  red:   "text-red-400 border-red-400/25 bg-red-400/8",
  amber: "text-amber-400 border-amber-400/25 bg-amber-400/8",
  clear: "text-green-400 border-green-400/25 bg-green-400/8",
};
const LABEL: Record<Flag, string> = { red: "RED", amber: "AMBER", clear: "CLEAR" };

const REDS   = FILES.filter((f) => f.flag === "red").length;
const AMBERS = FILES.filter((f) => f.flag === "amber").length;
const CLEARS = FILES.filter((f) => f.flag === "clear").length;

export default function DiligenceTriage() {
  const [runState, setRunState] = useState<RunState>("idle");
  const [progress, setProgress]   = useState(0);
  const [shown, setShown]         = useState(0);
  const [expanded, setExpanded]   = useState<string | null>(null);

  function runReview() {
    setRunState("running");
    setProgress(0);
    setShown(0);
    setExpanded(null);

    setTimeout(() => setProgress(1), 30);

    setTimeout(() => {
      setRunState("done");
      FILES.forEach((_, i) =>
        setTimeout(() => setShown(i + 1), i * 52)
      );
    }, 1350);
  }

  const isDone = runState === "done";

  return (
    <div className="flex flex-col h-[380px] rounded-card border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-5 py-4">
        <div className="min-w-0">
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-on-navy-muted">
            Diligence Triage
          </span>
          <span className="ml-2 font-mono text-[9px] text-on-navy-muted">
            Cardinal Engineering
          </span>
        </div>
        <button
          onClick={runReview}
          disabled={runState === "running"}
          className="ml-4 shrink-0 rounded border border-accent/35 bg-accent/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-widest text-accent transition-opacity hover:bg-accent/18 disabled:opacity-40"
        >
          {runState === "running"
            ? "Reviewing..."
            : runState === "done"
            ? "Run again"
            : "Run review"}
        </button>
      </div>

      {/* Progress bar */}
      <div className="h-px bg-[rgba(255,255,255,0.06)]">
        <div
          className="h-full bg-accent transition-[width] duration-[1300ms] ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* File list */}
      <div className="flex-1 overflow-y-auto px-4 py-2.5 space-y-0 [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20">
        {FILES.map((file, i) => {
          const flagVisible = isDone && i < shown;
          const isFlagged   = file.flag !== "clear";
          const isExpanded  = expanded === file.name;

          return (
            <div key={file.name}>
              <div
                className={cn(
                  "flex items-center justify-between rounded px-2 py-1.5 transition-colors duration-100",
                  isFlagged && isDone
                    ? "cursor-pointer hover:bg-[rgba(255,255,255,0.04)]"
                    : ""
                )}
                onClick={() => {
                  if (isFlagged && isDone)
                    setExpanded(isExpanded ? null : file.name);
                }}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {/* File type badge */}
                  <span className="w-7 shrink-0 font-mono text-[8px] uppercase tracking-widest text-on-navy-muted">
                    {file.type}
                  </span>
                  {/* File name */}
                  <span className="font-mono text-[10px] text-on-navy truncate">
                    {file.name}
                  </span>
                </div>

                <div className="ml-3 shrink-0 w-14 text-right">
                  {runState === "idle" && (
                    <span className="font-mono text-[8px] text-on-navy-muted">—</span>
                  )}
                  {runState === "running" && (
                    <span className="font-mono text-[8px] text-on-navy-muted">
                      scanning
                    </span>
                  )}
                  {flagVisible && (
                    <motion.span
                      className={cn(
                        "inline-block rounded border px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-widest",
                        BADGE[file.flag]
                      )}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={spring.snappy}
                    >
                      {LABEL[file.flag]}
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Finding */}
              {flagVisible && file.finding && (
                <motion.div
                  className="px-2 pb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.08 }}
                >
                  <p className="font-mono text-[8.5px] text-on-navy-muted pl-9 leading-relaxed">
                    {file.finding}
                    {isFlagged && (
                      <span className="ml-1.5 text-accent/60">
                        {isExpanded ? "▴" : "▾"}
                      </span>
                    )}
                  </p>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={spring.snappy}
                      >
                        <div className="mt-1.5 ml-9 rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5">
                          <p className="font-mono text-[8.5px] leading-relaxed text-on-navy-muted">
                            {file.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary footer */}
      <AnimatePresence>
        {isDone && shown >= FILES.length && (
          <motion.div
            className="flex flex-wrap items-center gap-3 border-t border-[rgba(255,255,255,0.08)] px-5 py-3.5"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={spring.snappy}
          >
            <span className="font-mono text-[8px] uppercase tracking-widest text-on-navy-muted">
              Review complete
            </span>
            <span className="ml-auto flex items-center gap-2">
              <span className="font-mono text-[9px] text-red-400">{REDS} red</span>
              <span className="font-mono text-[8px] text-on-navy-muted/70">·</span>
              <span className="font-mono text-[9px] text-amber-400">{AMBERS} amber</span>
              <span className="font-mono text-[8px] text-on-navy-muted/70">·</span>
              <span className="font-mono text-[9px] text-green-400">{CLEARS} clear</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
