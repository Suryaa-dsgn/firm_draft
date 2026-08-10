"use client";

import { useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ComparisonSliderProps {
  before: React.ReactNode;
  after: React.ReactNode;
  className?: string;
}

export default function ComparisonSlider({
  before,
  after,
  className,
}: ComparisonSliderProps) {
  const reduced = useReducedMotion();

  // Static fallback for reduced-motion
  if (reduced) {
    return (
      <div className={cn("grid gap-1 overflow-hidden rounded-card sm:grid-cols-2", className)}>
        {before}
        {after}
      </div>
    );
  }

  return <SliderInteractive before={before} after={after} className={className} />;
}

// Separated so hooks only run when motion is active
function SliderInteractive({
  before,
  after,
  className,
}: ComparisonSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const velocityBuffer = useRef<Array<{ x: number; t: number }>>([]);

  const splitPct = useMotionValue(50);

  // Clip the "after" panel — hides everything left of the split point
  const afterClipPath = useTransform(splitPct, (v) => `inset(0 0 0 ${v}%)`);
  // Position the handle
  const handleLeft = useTransform(splitPct, (v) => `${v}%`);

  // Sync aria-valuenow (one re-render per update, only for a11y attr)
  const [ariaVal, setAriaVal] = useState(50);
  useMotionValueEvent(splitPct, "change", (v) => setAriaVal(Math.round(v)));

  function clamp(v: number) {
    return Math.max(0, Math.min(100, v));
  }

  function toPct(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return 50;
    return clamp(((clientX - rect.left) / rect.width) * 100);
  }

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    containerRef.current?.setPointerCapture(e.pointerId);
    isDragging.current = true;
    velocityBuffer.current = [];
    splitPct.set(toPct(e.clientX));
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current) return;
    const pct = toPct(e.clientX);
    splitPct.set(pct);
    velocityBuffer.current.push({ x: pct, t: e.timeStamp });
    if (velocityBuffer.current.length > 6) velocityBuffer.current.shift();
  }

  function onPointerUp() {
    if (!isDragging.current) return;
    isDragging.current = false;

    const buf = velocityBuffer.current;
    if (buf.length >= 2) {
      const last = buf[buf.length - 1]!;
      const prev = buf[buf.length - 2]!;
      const dt = last.t - prev.t;
      if (dt > 0) {
        // Velocity in %/ms → project ~80ms forward then clamp to [5, 95]
        const vel = (last.x - prev.x) / dt;
        const projected = clamp(splitPct.get() + vel * 80);
        const target = Math.max(5, Math.min(95, projected));
        animate(splitPct, target, spring.momentum);
        return;
      }
    }
    // No velocity data — settle in place with snappy spring
    animate(splitPct, splitPct.get(), spring.snappy);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      animate(splitPct, clamp(splitPct.get() - 5), spring.snappy);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      animate(splitPct, clamp(splitPct.get() + 5), spring.snappy);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-card cursor-col-resize select-none touch-none",
        className
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* Before — sets container height */}
      <div className="w-full">{before}</div>

      {/* After — absolute overlay, clipped from the left */}
      <motion.div
        className="absolute inset-0 w-full"
        style={{ clipPath: afterClipPath }}
        aria-hidden="true"
      >
        {after}
      </motion.div>

      {/* Drag handle */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 z-10 flex w-0 items-center justify-center"
        style={{ left: handleLeft }}
      >
        {/* Vertical divider line */}
        <div className="absolute inset-y-0 w-px bg-white/25" />

        {/* Knob */}
        <div className="pointer-events-auto relative flex size-10 cursor-col-resize items-center justify-center rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
          <button
            role="slider"
            aria-label="Drag to compare before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={ariaVal}
            tabIndex={0}
            className="flex items-center gap-0.5 focus-visible:outline-none"
            onKeyDown={handleKeyDown}
          >
            <ChevronLeft size={10} strokeWidth={2.5} className="text-navy" />
            <ChevronRight size={10} strokeWidth={2.5} className="text-navy" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
