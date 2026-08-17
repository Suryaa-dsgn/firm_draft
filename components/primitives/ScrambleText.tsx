"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/* Subtle glyphs — punctuation + digits only, no letters, so resolved chars
   never look like "words". Width variation during scramble is masked because
   the real character always occupies the layout slot. */
const GLYPHS = "!#$%?/+=:|~&-0123456789@;.";

function pick(): string {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "?";
}

interface ScrambleTextProps {
  children: string;
  className?: string;
  /** Seconds before scramble begins — only applies to trigger="inView" */
  delay?: number;
  /** Milliseconds for all characters to lock. Scales with length implicitly. */
  duration?: number;
  /** "inView" fires once on scroll into view (default). "hover" fires on each mouse enter. "none" disables auto-triggers — use externalTrigger instead. */
  trigger?: "inView" | "hover" | "none";
  /** Increment this number to fire the scramble programmatically (e.g. from a parent container's onMouseEnter). */
  externalTrigger?: number;
}

export function ScrambleText({
  children,
  className,
  delay = 0,
  duration = 900,
  trigger = "inView",
  externalTrigger,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();
  const rafRef = useRef<number | null>(null);
  const mountedRef = useRef(false);

  /* null = server / pre-mount — renders plain text for SSR + first paint */
  const [glyphs, setGlyphs] = useState<string[] | null>(null);
  const [locked, setLocked] = useState<boolean[]>([]);

  const chars = children.split("");

  /* After mount: show resolved text, mark ready. Cleanup cancels any in-flight
     RAF when component unmounts — covers both trigger modes. */
  useEffect(() => {
    setGlyphs(chars.map((c) => c));
    setLocked(chars.map(() => true));
    mountedRef.current = true;
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startScramble() {
    if (reduced || !mountedRef.current) return;
    /* Cancel previous in-flight animation before starting a new one */
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    let startTime: number | null = null;
    let lastUpdate = 0;
    const INTERVAL = 48; /* ~20 fps for glyph cycling */

    /* Kick off fully scrambled */
    setGlyphs(chars.map((c) => (c === " " ? " " : pick())));
    setLocked(chars.map((c) => c === " "));

    function tick(ts: number) {
      if (startTime === null) startTime = ts + delay * 1000;
      const elapsed = ts - startTime;

      if (elapsed < 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      if (ts - lastUpdate < INTERVAL) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastUpdate = ts;

      const n = chars.length;
      let allDone = true;
      const nextGlyphs: string[] = [];
      const nextLocked: boolean[] = [];

      for (let i = 0; i < n; i++) {
        const c = chars[i] ?? "";
        if (c === " ") {
          nextGlyphs.push(" ");
          nextLocked.push(true);
          continue;
        }
        const lockAt = (i / Math.max(n - 1, 1)) * duration;
        if (elapsed >= lockAt) {
          nextGlyphs.push(c);
          nextLocked.push(true);
        } else {
          nextGlyphs.push(pick());
          nextLocked.push(false);
          allDone = false;
        }
      }

      setGlyphs(nextGlyphs);
      setLocked(nextLocked);
      if (!allDone) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
  }

  /* inView trigger — fires once when scrolled into view */
  useEffect(() => {
    if (trigger !== "inView" || !inView || reduced) return;
    startScramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  /* External trigger — fires whenever the parent increments this number */
  useEffect(() => {
    if (!externalTrigger) return;
    startScramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [externalTrigger]);

  /* SSR / pre-mount / reduced-motion: plain text, no spans */
  if (glyphs === null || reduced) {
    return (
      <span ref={ref} className={className}>
        {children}
      </span>
    );
  }

  /* Group chars into word tokens so line breaks only happen at spaces,
     never mid-character. Each word is wrapped in whitespace-nowrap. */
  type Token = { kind: "space"; index: number } | { kind: "word"; indices: number[] };
  const tokens: Token[] = [];
  let wordIndices: number[] = [];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === " ") {
      if (wordIndices.length) { tokens.push({ kind: "word", indices: wordIndices }); wordIndices = []; }
      tokens.push({ kind: "space", index: i });
    } else {
      wordIndices.push(i);
    }
  }
  if (wordIndices.length) tokens.push({ kind: "word", indices: wordIndices });

  return (
    <span
      ref={ref}
      className={cn("inline", className)}
      aria-label={children}
      onMouseEnter={trigger === "hover" ? startScramble : undefined}
    >
      {/* aria-hidden wrapper so screen readers use aria-label, not char spans */}
      <span aria-hidden="true">
        {tokens.map((token, ti) => {
          if (token.kind === "space") return <span key={`s-${ti}`}>&nbsp;</span>;
          return (
            /* whitespace-nowrap keeps the whole word on one line */
            <span key={`w-${ti}`} className="inline-block whitespace-nowrap">
              {token.indices.map((i) => {
                const ch = chars[i];
                const isLocked = locked[i] ?? true;
                return (
                  <span key={i} className="relative inline-block">
                    <span className={isLocked ? undefined : "invisible"}>{ch}</span>
                    {!isLocked && (
                      <span
                        className="pointer-events-none absolute inset-0 flex items-center justify-center"
                        style={{ opacity: 0.22 }}
                      >
                        {glyphs[i]}
                      </span>
                    )}
                  </span>
                );
              })}
            </span>
          );
        })}
      </span>
    </span>
  );
}
