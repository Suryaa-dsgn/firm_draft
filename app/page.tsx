import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { ThreeOfferings } from "@/components/sections/ThreeOfferings";
import { Proof } from "@/components/sections/Proof";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <ThreeOfferings />
      <Proof />
      <IndustriesPreview />
      <CTA />
    </>
  );
}
