import Link from "next/link";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_CTA_LABEL } from "@/lib/config";

export function CTA() {
  return (
    <SectionShell id="cta" variant="navy">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-display-l font-semibold text-balance">
            <ScrambleText className="text-on-navy" delay={0.08} duration={780}>
              {"Let’s Find the Agents That "}
            </ScrambleText>
            <ScrambleText className="text-accent" delay={0.42} duration={640}>
              {"Move Your Portfolio."}
            </ScrambleText>
          </h2>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-body-lg text-on-navy-muted">
              We start with a focused review of one portfolio company&apos;s operating workflows
              and identify the two or three agents with the fastest path to measurable impact.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "no-underline")}
              >
                <ScrambleText trigger="hover" duration={400}>{NAV_CTA_LABEL}</ScrambleText>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
