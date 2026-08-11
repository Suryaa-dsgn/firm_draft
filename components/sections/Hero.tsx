import dynamic from "next/dynamic";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { LogoSlot } from "@/components/primitives/LogoSlot";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA_LABEL } from "@/lib/config";

const PortfolioMonitor = dynamic(
  () => import("@/components/interactive/PortfolioMonitor"),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            {/* Eyebrow */}
            <Reveal>
              <MonoLabel variant="tag" className="text-ink-faint">
                CIO ADVISORY &amp; AGENTIC SYSTEMS
              </MonoLabel>
            </Reveal>

            {/* Headline */}
            <h1 className="mt-6 text-display-xl font-semibold text-balance">
              <ScrambleText className="text-ink" delay={0.1} duration={820}>
                {"Capital compounds when "}
              </ScrambleText>
              <ScrambleText className="text-accent" delay={0.48} duration={740}>
                {"technology governs itself."}
              </ScrambleText>
            </h1>

            {/* Lede */}
            <Reveal delay={0.18}>
              <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
                We bring CIO-level leadership and agentic systems to portfolios that need
                both. The result is technology that runs with the precision your investors
                expect.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "no-underline")}
                >
                  <ScrambleText trigger="hover" duration={400}>{NAV_CTA_LABEL}</ScrambleText>
                </Link>
                <Link
                  href="/approach"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "no-underline"
                  )}
                >
                  <ScrambleText trigger="hover" duration={360}>{"See the approach"}</ScrambleText>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Portfolio Monitor widget */}
          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-start"
          >
            <div className="w-full max-w-sm lg:max-w-none">
              <PortfolioMonitor />
            </div>
          </Reveal>
        </div>

        {/* Trust logo row */}
        <Reveal delay={0.36}>
          <div className="mt-16 border-t border-hairline pt-10">
            <MonoLabel className="mb-6 text-ink-faint">
              TRUSTED BY TEAMS AT
            </MonoLabel>
            <div className="flex flex-wrap items-center gap-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <LogoSlot key={i} label={`Partner organisation ${i + 1}`} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
