import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on technology leadership, agentic systems, and PE portfolio operations.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16">
      <section className="border-b border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <MonoLabel variant="tag">INSIGHTS</MonoLabel>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-2xl text-display-l font-semibold text-ink text-balance">
              Perspectives on technology leadership.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-body-lg text-ink-muted">
              Writing on CIO strategy, agentic systems, and how PE portfolio
              operators can turn technology into a measurable advantage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <div className="flex items-center gap-4 border border-hairline rounded-card p-10 bg-surface-sunk">
              <div>
                <MonoLabel className="text-ink-faint">COMING SOON</MonoLabel>
                <p className="mt-3 text-body text-ink-muted max-w-md">
                  Insights are being prepared. Check back soon for writing on
                  technology governance, agentic automation, and portfolio value creation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
