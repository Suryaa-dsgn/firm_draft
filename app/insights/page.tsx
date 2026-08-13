import type { Metadata } from "next";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { Reveal } from "@/components/primitives/Reveal";
import { PageHeader } from "@/components/primitives/PageHeader";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on CIO strategy, agentic systems, and PE portfolio operations.",
};

export default function InsightsPage() {
  return (
    <div className="pt-16">
      <PageHeader
        tag="INSIGHTS"
        title="Perspectives on technology leadership."
        subtext="Writing on CIO strategy, agentic systems, and PE portfolio operations."
        titleMaxWidth="max-w-2xl"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
          <Reveal>
            <div className="mx-auto max-w-lg text-center">
              <MonoLabel variant="tag" className="text-ink-faint">COMING SOON</MonoLabel>
              <h2 className="mt-6 text-display-m font-semibold text-ink text-balance">
                First pieces coming soon.
              </h2>
              <p className="mt-4 text-body text-ink-muted">
                Writing on CIO strategy, agentic systems, and PE portfolio operations.
                First pieces coming soon.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
