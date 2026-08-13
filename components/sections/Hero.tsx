import dynamic from "next/dynamic";
import Link from "next/link";
import { MonoLabel } from "@/components/primitives/MonoLabel";
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
    <section className="relative pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            {/* Eyebrow */}
            <Reveal>
              <MonoLabel variant="tag" className="text-ink-faint text-[10px] tracking-[0.06em]">
                AGENTIC AI &amp; ENGINEERING SERVICES FOR PRIVATE EQUITY
              </MonoLabel>
            </Reveal>

            {/* Headline */}
            <h1 className="mt-6 text-display-xl font-semibold text-balance">
              <ScrambleText className="text-ink" delay={0.1} duration={820}>
                {"Turning portfolio operations into "}
              </ScrambleText>
              <ScrambleText className="text-accent" delay={0.48} duration={740}>
                {"a competitive advantage."}
              </ScrambleText>
            </h1>

            {/* Lede */}
            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl text-body-lg text-ink-muted">
                Reusable AI agents that cut cost, accelerate diligence, and standardize
                execution across the platform, deployed inside the operating partner&apos;s
                own workflow and inside individual portfolio companies.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.32}>
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
                  <ScrambleText trigger="hover" duration={360}>{"See how we engage"}</ScrambleText>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Portfolio Monitor widget */}
          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-6 lg:col-start-7 flex items-center"
          >
            <div className="w-full max-w-sm lg:max-w-none">
              <PortfolioMonitor />
            </div>
          </Reveal>
        </div>

        {/* Trust logo row — hidden until client logos are ready */}
      </div>
    </section>
  );
}
