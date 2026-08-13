import { CTASection } from "@/components/sections/CTASection";

const BLUE_PHRASES = [
  "Move Your Portfolio.",
  "Create Operating Leverage.",
  "Accelerate Diligence.",
];

export function CTA() {
  return (
    <CTASection
      id="cta"
      heading="Let's Find the Agents That"
      animatedPhrases={BLUE_PHRASES}
      description="We start with a focused review of one portfolio company's operating workflows and identify the two or three agents with the fastest path to measurable impact."
    />
  );
}
