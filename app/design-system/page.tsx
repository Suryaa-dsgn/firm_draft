import { Button } from "@/components/ui/button";
import { MonoLabel } from "@/components/primitives/MonoLabel";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Reveal } from "@/components/primitives/Reveal";
import { StatBlock } from "@/components/primitives/StatBlock";
import { LogoSlot } from "@/components/primitives/LogoSlot";

const COLOR_TOKENS = [
  { name: "canvas",        hex: "#FAFAF8", var: "--canvas" },
  { name: "surface",       hex: "#FFFFFF", var: "--surface" },
  { name: "surface-sunk",  hex: "#F3F3EF", var: "--surface-sunk" },
  { name: "ink",           hex: "#0E0E0F", var: "--ink" },
  { name: "ink-muted",     hex: "#6B6B70", var: "--ink-muted" },
  { name: "ink-faint",     hex: "#9A9AA0", var: "--ink-faint" },
  { name: "hairline",      hex: "#E6E6E2", var: "--hairline" },
  { name: "hairline-strong","hex": "#D6D6D0", var: "--hairline-strong" },
  { name: "accent",        hex: "#2450E6", var: "--accent" },
  { name: "accent-hover",  hex: "#1B41C7", var: "--accent-hover" },
  { name: "accent-tint",   hex: "#EAEEFF", var: "--accent-tint" },
  { name: "navy",          hex: "#0A1633", var: "--navy" },
  { name: "navy-2",        hex: "#0F1E44", var: "--navy-2" },
  { name: "on-navy",       hex: "#EAEEF7", var: "--on-navy" },
  { name: "on-navy-muted", hex: "#9AA6C4", var: "--on-navy-muted" },
  { name: "data-base",     hex: "#C9CCD6", var: "--data-base" },
  { name: "data-signal",   hex: "#2450E6", var: "--data-signal" },
];

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-canvas py-16">
      <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)] space-y-20">

        <header className="border-b border-hairline pb-8">
          <MonoLabel variant="tag">Design system</MonoLabel>
          <h1 className="mt-3 text-display-l font-semibold text-ink">
            Token gallery
          </h1>
          <p className="mt-2 text-body-lg text-ink-muted">
            Verification page — remove before launch.
          </p>
        </header>

        {/* Color swatches */}
        <section>
          <MonoLabel variant="index">[ 1.01 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">Colours</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {COLOR_TOKENS.map((t) => (
              <div key={t.var} className="space-y-2">
                <div
                  className="h-14 w-full rounded-card border border-hairline shadow-card"
                  style={{ background: `var(${t.var})` }}
                />
                <p className="text-small font-mono text-ink-muted">{t.name}</p>
                <p className="text-mono-label font-mono text-ink-faint">{t.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Type scale */}
        <section>
          <MonoLabel variant="index">[ 1.02 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">
            Type scale
          </h2>
          <div className="space-y-6 border-l-2 border-hairline pl-6">
            <div>
              <MonoLabel className="mb-2">display-xl</MonoLabel>
              <p className="text-display-xl font-semibold text-ink leading-none">
                Governance at scale
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">display-l</MonoLabel>
              <p className="text-display-l font-semibold text-ink">
                Agentic transformation
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">display-m</MonoLabel>
              <p className="text-display-m font-semibold text-ink">
                Technology leadership
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">title</MonoLabel>
              <p className="text-title font-medium text-ink">
                CIO Advisory & Fractional Leadership
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">body-lg</MonoLabel>
              <p className="text-body-lg text-ink-muted">
                Capital needs technology to perform. Technology now needs AI to scale
                governance and execution.
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">body</MonoLabel>
              <p className="text-body text-ink-muted">
                We sit at the intersection of operator and technologist, installing the
                systems that make portfolios compound faster.
              </p>
            </div>
            <div>
              <MonoLabel className="mb-2">mono-label (Geist Mono)</MonoLabel>
              <MonoLabel variant="index">[ N.01 / 07 ]</MonoLabel>
              <span className="ml-4" />
              <MonoLabel variant="tag">GOVERNANCE</MonoLabel>
            </div>
          </div>
        </section>

        {/* MonoLabel variants */}
        <section>
          <MonoLabel variant="index">[ 1.03 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">MonoLabel</h2>
          <div className="flex flex-wrap gap-6">
            <div className="space-y-2">
              <p className="text-small text-ink-muted">variant=&quot;index&quot;</p>
              <MonoLabel variant="index">[ N.01 / 07 ]</MonoLabel>
            </div>
            <div className="space-y-2">
              <p className="text-small text-ink-muted">variant=&quot;tag&quot;</p>
              <MonoLabel variant="tag">CIO ADVISORY</MonoLabel>
            </div>
          </div>
        </section>

        {/* SectionShell variants */}
        <section>
          <MonoLabel variant="index">[ 1.04 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">
            SectionShell
          </h2>
          <div className="space-y-4">
            <SectionShell variant="light" className="rounded-card border border-hairline">
              <MonoLabel variant="tag">Light variant</MonoLabel>
              <p className="mt-2 text-body text-ink-muted">bg-canvas, text-ink</p>
            </SectionShell>
            <SectionShell variant="navy" className="rounded-card">
              <MonoLabel variant="tag">Navy variant</MonoLabel>
              <p className="mt-2 text-body text-on-navy-muted">bg-navy, text-on-navy</p>
            </SectionShell>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <MonoLabel variant="index">[ 1.05 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Book a conversation</Button>
            <Button variant="outline">Learn more</Button>
            <Button variant="ghost">View all</Button>
            <Button variant="link">See the approach</Button>
            <Button variant="default" size="lg">Large CTA</Button>
            <Button variant="default" size="sm">Small</Button>
          </div>
        </section>

        {/* Reveal + StatBlock + LogoSlot */}
        <section>
          <MonoLabel variant="index">[ 1.06 / 06 ]</MonoLabel>
          <h2 className="mt-3 mb-8 text-display-m font-semibold text-ink">
            Reveal / StatBlock / LogoSlot
          </h2>
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-small text-ink-muted">Reveal (scroll down to trigger)</p>
              <Reveal>
                <div className="rounded-card border border-hairline bg-surface p-6">
                  <p className="text-body text-ink">This content reveals on scroll.</p>
                </div>
              </Reveal>
            </div>
            <div>
              <p className="mb-3 text-small text-ink-muted">StatBlock — real value</p>
              <div className="flex gap-12 flex-wrap">
                <StatBlock value="43%" caption="Average IRR improvement" />
                <StatBlock value="[METRIC]" caption="Placeholder metric" />
                <StatBlock value="2.3x" caption="Portfolio value multiple" />
              </div>
            </div>
            <div>
              <p className="mb-3 text-small text-ink-muted">LogoSlot row</p>
              <div className="flex gap-6 flex-wrap items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <LogoSlot key={i} label={`Company ${i + 1} logo`} />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
