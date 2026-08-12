import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { LifecycleDiagram } from "@/components/sections/LifecycleDiagram";
import { ThreeOfferings } from "@/components/sections/ThreeOfferings";
import { FirmPortfolioToggle } from "@/components/sections/FirmPortfolioToggle";
import { AgenticLayer } from "@/components/sections/AgenticLayer";
import { Approach } from "@/components/sections/Approach";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { Proof } from "@/components/sections/Proof";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <LifecycleDiagram />
      <ThreeOfferings />
      <FirmPortfolioToggle />
      <AgenticLayer />
      <Approach />
      <IndustriesPreview />
      <Proof />
      <WhyUs />
      <CTA />
    </>
  );
}
