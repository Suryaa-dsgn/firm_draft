"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  caption: string;
  className?: string;
}

export function StatBlock({ value, caption, className }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  const isPlaceholder = value.includes("[") || value.includes("]");
  const numericTarget = isPlaceholder ? null : parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = isPlaceholder
    ? ""
    : value.replace(/[0-9.]/g, "").trim();

  const [displayed, setDisplayed] = useState(isPlaceholder ? value : "0");

  useEffect(() => {
    if (isPlaceholder || numericTarget === null || reduced) {
      setDisplayed(value);
      return;
    }
    if (!inView) return;

    const start = performance.now();
    const duration = 1200;

    function easeOut(t: number) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = numericTarget! * easeOut(progress);
      setDisplayed(
        `${Number.isInteger(numericTarget!) ? Math.round(current) : current.toFixed(1)}${suffix}`
      );
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, isPlaceholder, numericTarget, reduced, suffix, value]);

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1", className)}
      data-placeholder={isPlaceholder ? value : undefined}
    >
      <span className="text-display-l font-semibold tracking-tight text-ink">
        {displayed}
      </span>
      <span className="text-small text-ink-muted">{caption}</span>
    </div>
  );
}
