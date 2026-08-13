"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA_LABEL } from "@/lib/config";

interface CTASectionProps {
  id?: string;
  heading: string;
  /** If provided, renders a second animated line below the heading that cycles through these phrases. */
  animatedPhrases?: string[];
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

function AnimatedPhrase({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      const t = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(t);
    }, 3000);
    return () => clearInterval(id);
  }, [phrases]);

  return (
    <span
      className="block text-accent transition-[opacity,transform] duration-300 ease-in-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
      }}
    >
      {phrases[index]}
    </span>
  );
}

export function CTASection({
  id = "cta",
  heading,
  animatedPhrases,
  description,
  ctaLabel = NAV_CTA_LABEL,
  ctaHref = "/contact",
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="py-14 md:py-20"
      style={{
        backgroundColor: "var(--navy)",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        {/* White card */}
        <div className="relative bg-white px-8 py-10 sm:px-14 sm:py-16 md:px-20 md:py-20">
          {/* Corner markers */}
          <span className="pointer-events-none absolute left-0 top-0 size-3 bg-[#0E0E0F]" />
          <span className="pointer-events-none absolute right-0 top-0 size-3 bg-[#0E0E0F]" />
          <span className="pointer-events-none absolute bottom-0 left-0 size-3 bg-[#0E0E0F]" />
          <span className="pointer-events-none absolute bottom-0 right-0 size-3 bg-[#0E0E0F]" />

          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-l font-semibold">
              {animatedPhrases ? (
                <>
                  <span className="block text-ink">{heading}</span>
                  <AnimatedPhrase phrases={animatedPhrases} />
                </>
              ) : (
                <span className="text-ink">{heading}</span>
              )}
            </h2>

            {description && (
              <Reveal delay={0.16}>
                <p className="mx-auto mt-6 max-w-md text-body-lg text-ink-muted">
                  {description}
                </p>
              </Reveal>
            )}

            <Reveal delay={description ? 0.24 : 0.16}>
              <div className="mt-10">
                <Link
                  href={ctaHref}
                  className={cn(buttonVariants({ size: "lg" }), "no-underline")}
                >
                  <ScrambleText trigger="hover" duration={400}>{ctaLabel}</ScrambleText>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
