import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Solutions } from "@/components/sections/Solutions";
import { AgenticLayer } from "@/components/sections/AgenticLayer";
import { Approach } from "@/components/sections/Approach";
import { Proof } from "@/components/sections/Proof";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Solutions />
      <AgenticLayer />
      <Approach />
      <Proof />
      <CTA />
    </>
  );
}
