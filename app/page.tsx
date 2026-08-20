import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { ThreeOfferings } from "@/components/sections/ThreeOfferings";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <ThreeOfferings />
      <IndustriesPreview />
      <CTA />
    </>
  );
}
