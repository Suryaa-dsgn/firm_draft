# Build Plan — CIO Advisory & Agentic Transformation (Website)

> Working spec for Claude Code. Phase-gated. Read this top to bottom before writing a single line of code, then build phase by phase and stop at each gate for review.

---

## 0. Read first (non-negotiables)

Before any code, load and follow these skills already present in the environment:

- `apple-design` — motion, feedback, typography, reduced-motion. The motion spec below is derived from it. Do not invent a different motion language.
- `frontend-design` (user) — anti-slop, aesthetic point of view.
- `emil-design-eng` — component polish and the small details.
- `humanizer` — run all copy through this before it ships. No AI fingerprints.

Hard rules that override convenience:

1. **No em dashes anywhere.** Not in copy, not in headings. Use periods, commas, colons, or a spaced en dash only if truly needed.
2. **No fabricated metrics, logos, quotes, or case studies.** Every number, client name, and testimonial is a placeholder token (see §9). If real content is missing, render a labelled placeholder, never an invented figure.
3. **Blue is a scalpel, not a bucket.** See §3. Never a bright-blue full-bleed background.
4. **It must not read as AI-generated.** See §8. That section is a checklist, not a suggestion.
5. **Fonts: Geist Sans and Geist Mono only.** No Inter, no Roboto, no system-ui fallback showing through as the primary face.

---

## 1. What this is

A website for a firm offering **CIO-level advisory and consulting** plus an **agentic (AI) transformation layer**, aimed at people who run and grow portfolios of companies.

The audience is private equity operators, but the site **never says "private equity" or "PE firm" explicitly.** The copy speaks to what that audience actually wants: returns, portfolio value, capital efficiency, governance at scale, operating leverage. It speaks in outcomes, not in labels.

Two things the site has to showcase, woven together, not siloed:

- **Consulting solutions** — the human advisory work (CIO advisory, technology diligence, portfolio governance, value creation, capital and ROI).
- **Agentic solutions** — AI agents that operationalize that advisory continuously across a portfolio (governance monitoring, portfolio intelligence, deployment analysis, ROI attribution).

The narrative spine: *capital needs technology to perform, technology now needs AI to scale governance and execution, and this firm supplies both the judgment and the agentic systems that make it real.*

---

## 2. Tech stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | Next.js 14 (App Router) | RSC by default, client components only where interaction lives |
| Language | TypeScript (strict) | |
| Styling | Tailwind CSS | Tokens as CSS variables, mapped into Tailwind theme |
| Components | shadcn/ui | Install per-component, then restyle to the brand. Do not ship default shadcn look |
| Motion (component) | Framer Motion | Enter/hover/press, spring configs from §6 |
| Motion (scroll) | GSAP + ScrollTrigger | Pinned/scrubbed sequences only (comparison slider, any pinned reveal) |
| Fonts | `geist` package (Sans + Mono) | `next/font` local, `font-display: swap` |
| Icons | Lucide (ships with shadcn) + a few custom line/wireframe marks | Keep icon style consistent, thin stroke |
| Content | Local typed data files (`/content`) or MDX for Insights | No CMS in v1 unless requested |
| Deploy target | Vercel | |

Do **not** add: a component/animation library zoo, three-fiber unless a hero 3D object is explicitly approved, carousels-for-the-sake-of-it, or any analytics/consent bloat before launch.

---

## 3. Brand guidelines

### 3.1 Colour

Design intent: a **neutral, warm, near-paper canvas** carries ~90% of the site. Blue appears only as (a) a single refined accent on small elements and (b) occasional **deep-navy anchor sections** that are dark, not bright, so they never strain the eye. Bright blue is never a large fill.

```css
:root {
  /* Canvas + surface */
  --canvas:        #FAFAF8;  /* warm off-white, main background */
  --surface:       #FFFFFF;  /* cards, raised panels */
  --surface-sunk:  #F3F3EF;  /* insets, code-ish blocks, subtle wells */

  /* Ink */
  --ink:           #0E0E0F;  /* primary text, near-black not pure */
  --ink-muted:     #6B6B70;  /* secondary text */
  --ink-faint:     #9A9AA0;  /* captions, mono labels at rest */

  /* Lines */
  --hairline:      #E6E6E2;  /* default borders, 1px */
  --hairline-strong:#D6D6D0;

  /* Blue accent (use sparingly) */
  --accent:        #2450E6;  /* refined electric blue, links + one CTA + data highlight */
  --accent-hover:  #1B41C7;
  --accent-tint:   #EAEEFF;  /* faint wash behind a single highlighted element, rare */

  /* Navy anchor (dark focus sections) */
  --navy:          #0A1633;  /* deep navy section bg */
  --navy-2:        #0F1E44;  /* layered panels inside navy */
  --on-navy:       #EAEEF7;  /* text on navy */
  --on-navy-muted: #9AA6C4;

  /* Data viz (restrained) */
  --data-base:     #C9CCD6;  /* "before"/baseline bars, muted */
  --data-signal:   #2450E6;  /* "after"/with-agent, the accent */
}
```

Discipline rules:

- On the light canvas, blue covers **no more than ~8%** of any viewport. Links, one primary button style, active nav state, index numbers on hover, data highlights. That is the whole budget.
- **Navy anchor sections**: use for 1 to 2 sections max (the agentic-layer section, optionally the closing CTA). Dark navy reads premium and rests the eye between light sections. It is a rhythm device, not decoration.
- No purple. No blue-on-white gradient meshes (that is the AI-SaaS tell). No glow. If a gradient appears at all, it is a barely-there tonal shift inside a navy section, never rainbow, never neon.
- Green/secondary accents from the reference images: **skip them.** Monochrome + one blue is more disciplined and more premium here.

### 3.2 Typography

Faces: **Geist Sans** (display + body), **Geist Mono** (labels, indices, data, eyebrows). Geist Mono is the "technical/editorial" voice that makes the site feel like a research house instead of a template.

Tracking is **size-specific** per Apple typography guidance: tighten as text grows, leave body near zero.

```css
/* type scale — clamp for fluid, rem so layout scales with text */
--display-xl: clamp(2.75rem, 6vw, 5rem);     /* hero */
--display-l:  clamp(2rem, 4vw, 3.25rem);     /* section heads */
--display-m:  clamp(1.5rem, 2.5vw, 2rem);    /* sub-heads */
--title:      1.375rem;                        /* card titles */
--body-lg:    1.1875rem;                       /* lede paragraphs */
--body:       1.0625rem;                       /* default body */
--small:      0.9375rem;
--mono-label: 0.75rem;                         /* Geist Mono, uppercase */
```

| Role | Face / weight | Size | Line height | Tracking |
| --- | --- | --- | --- | --- |
| Hero display | Geist Sans 500-600 | `--display-xl` | 1.02 | -0.03em |
| Section head | Geist Sans 500 | `--display-l` | 1.05 | -0.02em |
| Card title | Geist Sans 500 | `--title` | 1.15 | -0.01em |
| Lede | Geist Sans 400 | `--body-lg` | 1.5 | 0 |
| Body | Geist Sans 400 | `--body` | 1.6 | 0 |
| Mono label | Geist Mono 500 | `--mono-label` | 1 | +0.08em, uppercase |

Mono label usage (the signature): section indices `[ N.01 / 07 ]`, category tags `> GOVERNANCE`, small data captions, footer meta. Keep them `--ink-faint` at rest, `--ink` or `--accent` on the active/hovered section. Use restraint: they punctuate, they do not wallpaper.

### 3.3 Spacing, grid, radius

- Base unit **8px**. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content max width **1240px**, gutter `clamp(20px, 5vw, 64px)`.
- **12-column editorial grid.** Use asymmetry deliberately: heads at 6-7 cols, offset content, hairline column rules where it earns it. Do not center everything.
- Section vertical rhythm: `clamp(80px, 12vh, 160px)` top/bottom. Generous. Whitespace is the luxury signal.
- Radius: **small and consistent.** `--radius: 10px` for cards/buttons, `6px` for inputs/tags. No pill-everything, no 24px blobby cards. Sharp-ish reads institutional.
- Borders: 1px hairlines do a lot of the work. Shadows are near-invisible (`0 1px 2px rgba(14,14,15,0.04)`), used only to lift a hovered card a hair.

---

## 4. Sitemap

```
/                 Home (flagship long-scroll narrative)
/solutions        Consulting solutions, detailed
/agentic          Agentic systems, detailed
/approach         How the firm engages (methodology / governance model)
/contact          Contact / "let's talk"
/insights         (Phase 2, optional) thought leadership index + MDX articles
```

Nav labels (specific, not vague per Apple wayfinding): `Solutions`, `Agentic Systems`, `Approach`, `Insights`, `Contact`. One CTA button (`Book a conversation` or similar, confirm wording). Logo/firm name is a **placeholder `[FIRM]`** until you provide it.

---

## 5. Layout structure

### 5.1 Homepage (long-scroll, section by section)

Numbered with mono indices on the page itself (`[ N.01 / 07 ]` style) for the editorial feel.

**Nav (sticky, translucent).**
Slim bar. Left: `[FIRM]` wordmark. Center/right: nav links with an active-state underline that draws in. Right: one accent CTA button. Translucent `backdrop-filter` so content scrolls under (Apple materials), solidifies slightly on scroll. Mobile: full-screen sheet, spring-driven, interruptible.

**01 — Hero.**
- Mono eyebrow: `> CIO ADVISORY  &  AGENTIC SYSTEMS`.
- Display headline, one line of it carrying the single blue accent word. Draft direction (replace with final copy): "Turn portfolio technology into measurable return." Keep it outcome-led, no hype verbs.
- One-sentence lede in `--ink-muted`.
- Two actions: primary accent button + a quiet ghost/underline link ("See how it works").
- One restrained visual, pick ONE, do not stack them:
  - (a) a minimal animated **line-graph / arc** that draws on load (echoes image 4's dotted arc, but calmer), or
  - (b) a single slow, subtle canvas object, or
  - (c) nothing but type and a hairline system, which for this audience can be the most premium option.
  Default to (a) unless a hero 3D object is explicitly approved. No chrome blob unless asked.
- Trust row: `Backed by / trusted by` label + logo slots. **All logos are placeholders** (`logo-slot` components), greyscale, low contrast.

**02 — Positioning statement.**
Short, editorial. One strong paragraph (2-3 sentences) that states the thesis. Big type, lots of space, offset in the grid. Optional three mono "capability" tags beneath (`Governance`, `Portfolio intelligence`, `Capital efficiency`).

**03 — Consulting solutions.**
The core "what we do" block. Numbered cards `// 001`, `// 002`, `// 003`, `// 004` (image 3 pattern), each: mono index, thin custom line icon, title, one-line description, quiet "Read more" that routes to `/solutions`. Hover: hairline border shifts to `--accent`, card lifts 4px, index number colours to accent. Proposed pillars (confirm or replace with real offerings, do not treat as final):
- 001 CIO Advisory & Fractional Leadership
- 002 Technology Due Diligence
- 003 Portfolio Technology Governance
- 004 Value Creation & Capital ROI

**04 — The agentic layer (NAVY ANCHOR).**
Full-bleed `--navy`. This is the differentiator and the visual pivot of the page. Introduce the AI/agent systems as the thing that makes advisory continuous instead of point-in-time. Include the **interactive before/after comparison** (image 3): a draggable slider between "Manual governance" (muted baseline bars/state) and "Agentic governance" (accent state). GSAP ScrollTrigger optional pin, Framer Motion / pointer drag for the handle, 1:1 tracking, velocity-aware release (see §6). Reduced-motion: static two-column comparison, no drag.

**05 — Approach / methodology.**
How an engagement runs. A refined process visual: a horizontal stepped timeline OR a restrained radial diagram (image 5), thin lines, one accent node. Steps like Diagnose, Govern, Deploy, Measure (confirm). On scroll, steps reveal in sequence with a short stagger.

**06 — Proof / outcomes.**
Stat band (image 1 pattern) but **every figure is a placeholder** `[METRIC]` with a caption slot. Numbers count up on scroll-into-view (respect reduced-motion). Optional single case-study teaser card that routes to a future case page. Mark the whole section `data-placeholder` so it is obvious what needs real content.

**07 — Closing CTA.**
Quiet, confident. Optionally the second navy section. One line, one button, contact routing. No "excited to" anything. Something like "Let's talk about your portfolio's next quarter." (confirm).

**Footer.**
Minimal, mono meta. Sitemap columns, `[FIRM]` mark, contact line, small legal row. Hairline top border. No newsletter unless requested.

### 5.2 Secondary pages (structure, lighter detail)

- **/solutions** — hero head + intro, then one detailed block per consulting pillar (mono index, extended description, "what you get", how the agentic layer supports it), closing CTA. Reuses section shells from home.
- **/agentic** — the AI systems in depth. One block per agent/system (governance monitoring, portfolio intelligence, deployment analysis, ROI attribution). Each: what it watches, what it does, what it returns. Keep claims concrete and non-hyped; no "autonomous magic" language. Navy accents allowed but still disciplined.
- **/approach** — the engagement model and governance framework expanded from home section 05. Process, cadence, what a first 90 days looks like (confirm real content).
- **/contact** — restrained. Short intro, shadcn form (name, org, what they're solving), no `<form>` posting hacks in artifacts context; wire to a real handler/endpoint for the site. Clear success/error states (Apple feedback: status, completion, error).
- **/insights** — Phase 2. MDX index + article template. Editorial, mono meta, generous type.

### 5.3 Responsive

- Mobile-first. The 12-col editorial grid collapses to a single column with preserved rhythm.
- Nav becomes a spring-driven full-screen sheet.
- Hero type uses the clamps above; never let display type overflow on 360px.
- The comparison slider and any pinned GSAP sequence: **disable pinning on small screens**, fall back to stacked static states.
- Touch targets 44px min. Test at 360, 768, 1024, 1440.

---

## 6. Motion spec

Derived from `apple-design`. The feeling target: calm, precise, immediate. Nothing bouncy, nothing slow, nothing decorative-for-its-own-sake.

### 6.1 Springs (defaults)

Use springs, not fixed-duration keyframes, for anything a user can touch or that can be interrupted.

```ts
// motion tokens — lib/motion.ts
export const spring = {
  default: { type: "spring", bounce: 0,   duration: 0.4 }, // critically damped, no overshoot
  snappy:  { type: "spring", bounce: 0,   duration: 0.28 },
  momentum:{ type: "spring", bounce: 0.18, duration: 0.4 }, // ONLY after a flick/drag release
};
export const ease = {
  standard: [0.22, 0.61, 0.36, 1], // for the rare CSS/keyframe case
};
```

Rule: **critically damped (`bounce: 0`) everywhere by default.** Add the slight bounce only when a gesture carried momentum (the slider handle release). A menu that just faded in must not overshoot.

### 6.2 Feedback and micro-interactions

- **Press feedback on pointer-down, not click.** `button:active { transform: scale(0.98); transition: transform 100ms ease-out; }`. Instant.
- **Card hover:** lift `translateY(-4px)`, hairline border to `--accent`, index number to accent. `spring.snappy`. Nothing more.
- **Link underline:** draws in left-to-right on hover, retracts on leave. Active nav item stays underlined.
- **Mono labels:** subtle colour transition faint to ink/accent as their section becomes active in the viewport.
- **Stat count-up:** on scroll-into-view, once. Reduced-motion shows the final number immediately.
- **Buttons:** one primary (accent fill), one secondary (hairline outline), one ghost (underline). Consistent everywhere.

### 6.3 Scroll reveals

- Entrance: opacity 0 to 1 plus `translateY(14px)` to 0. `spring.default`. **Trigger once** when ~20% in view (Framer `whileInView`, `viewport={{ once: true }}`).
- Stagger grouped items 50-70ms. Do not stagger everything on the page; reserve for grouped sets (the solution cards, the process steps).
- No parallax on backgrounds. No full-viewport moving backgrounds (Apple reduced-motion guidance and eye-strain).

### 6.4 The one gestural moment (comparison slider)

This is the only true drag interaction, so do it properly:

- Pointer Events with `setPointerCapture`, respect the grab offset, track a short position/velocity history.
- Content tracks the pointer **1:1** the whole drag.
- On release, hand off velocity into `spring.momentum` (this is the one place bounce is allowed, and even here keep it small).
- **Interruptible:** grabbing it mid-settle re-targets from the live presentation value, never from the target. No brick-wall reversal.
- Keyboard accessible (arrow keys move the divider), and a static fallback under `prefers-reduced-motion`.

### 6.5 Reduced motion and transparency

Bake these into components, do not bolt on at the end:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
  .reveal { transform: none !important; }          /* cross-fade only */
  .slider { /* render static two-column comparison */ }
}
@media (prefers-reduced-transparency: reduce) {
  .nav-translucent { background: var(--canvas); backdrop-filter: none; }
}
```

### 6.6 Motion budget

Total motion should feel like maybe 20% of what a "look at my animations" site does. One well-orchestrated hero load, disciplined scroll reveals, crisp micro-interactions, one real gesture. That restraint is the premium signal. If a motion does not aid comprehension or delight with intent, cut it.

---

## 7. Component inventory

**From shadcn (install, then restyle to tokens):** `button`, `navigation-menu` or a custom nav, `sheet` (mobile nav), `card` (base, heavily restyled), `input`, `textarea`, `label`, `tabs` (if solutions/agentic use tabbing), `accordion` (approach/FAQ), `separator`, `tooltip`, `badge` (for mono tags). Strip the default shadcn shadows/radii and map to §3.

**Custom (build):**
- `MonoLabel` — the `[ N.01 / 07 ]` / `> TAG` element. Single source of the editorial voice.
- `SectionShell` — consistent max-width, grid, vertical rhythm, optional navy variant.
- `SolutionCard` — numbered card with hover choreography.
- `StatBlock` — placeholder-aware count-up stat.
- `ComparisonSlider` — the gestural before/after.
- `ProcessDiagram` — the approach visual (timeline or radial).
- `HeroVisual` — the single restrained hero animation.
- `LogoSlot` — greyscale placeholder trust logo.
- `Reveal` — wraps children in the standard scroll-reveal.

Everything reads from the token layer. No hardcoded hex in components.

---

## 8. Anti-AI-slop checklist (enforced)

The site fails review if any of these are true:

- [ ] Reads as "hero + 3 feature cards + testimonial + CTA" generic template. (The mono-index editorial system and the navy pivot exist to break this.)
- [ ] Any em dash appears in copy.
- [ ] Blue-on-white gradient mesh, purple anything, glow, or neon.
- [ ] Bright-blue full-bleed background.
- [ ] Inter / Roboto / system font visibly used as primary.
- [ ] Copy contains: `unlock`, `seamless`, `elevate`, `revolutionize`, `empower`, `supercharge`, `harness`, `cutting-edge`, `game-changing`, `in today's fast-paced world`, `excited to announce`, `at the intersection of`, `leverage` (as a hype verb).
- [ ] Any invented metric, client logo, or testimonial presented as real.
- [ ] Everything centered and symmetrical (no editorial asymmetry).
- [ ] Stock-looking chart libraries instead of the custom restrained data viz.
- [ ] Motion is either absent or everywhere. It should be precise and sparse.

Copy voice: institutional, concrete, calm, outcome-led. Short sentences. Say the specific thing. Run every string through the `humanizer` skill before shipping.

---

## 9. Content and placeholders

Since real content is not finalized, everything uncertain ships as a **visible, typed placeholder**, never an invented fact.

- Metrics: `[METRIC]` with a caption. Wrap in a `data-placeholder` attribute.
- Logos: `LogoSlot` greyscale boxes.
- Case studies: one teaser card marked placeholder, no fake company or numbers.
- Firm name: `[FIRM]` token, single source in config so it swaps in one place.
- Copy drafts in this plan (headlines, CTAs) are **directional**. Confirm or replace. Do not treat them as final.

Maintain a `CONTENT_TODO.md` listing every placeholder so the real-content pass is mechanical.

---

## 10. File structure

```
app/
  layout.tsx            # fonts, tokens, nav, footer
  page.tsx              # home
  solutions/page.tsx
  agentic/page.tsx
  approach/page.tsx
  contact/page.tsx
  insights/            # phase 2
components/
  ui/                   # shadcn (restyled)
  sections/             # Hero, Positioning, Solutions, AgenticLayer, Approach, Proof, CTA
  primitives/           # MonoLabel, SectionShell, Reveal, StatBlock, LogoSlot
  interactive/          # ComparisonSlider, ProcessDiagram, HeroVisual
lib/
  motion.ts             # spring/ease tokens
  utils.ts
content/
  solutions.ts          # typed pillar data
  agentic.ts
  approach.ts
styles/
  globals.css           # token :root, base, reduced-motion
tailwind.config.ts      # tokens mapped into theme
CONTENT_TODO.md
```

---

## 11. Build phases (gate at every ▸)

Stop after each phase for review. Do not run ahead.

**Phase 0 — Setup.** Next 14 + TS strict, Tailwind, shadcn init, Geist Sans + Mono via next/font, base ESLint/Prettier. Verify fonts render. ▸ gate

**Phase 1 — Design system.** Token `:root`, Tailwind mapping, type scale, `MonoLabel`, `SectionShell`, `Reveal`, button variants, one demo page proving tokens + type + reduced-motion. Nothing product-specific yet. ▸ gate

**Phase 2 — Shell.** Nav (translucent, active states, mobile sheet) + footer, on every route as an empty shell. ▸ gate

**Phase 3 — Homepage sections.** Build 01 to 07 with placeholder content, static (no scroll motion yet). Get layout, grid, rhythm, and the navy pivot right first. ▸ gate

**Phase 4 — Motion pass.** Apply §6: reveals, micro-interactions, hero visual, the comparison slider, count-ups. Verify reduced-motion and reduced-transparency. Frame-by-frame review the slider. ▸ gate

**Phase 5 — Secondary pages.** Solutions, Agentic, Approach, Contact. Reuse shells. ▸ gate

**Phase 6 — Polish + QA.** Accessibility (focus states, keyboard, contrast, aria), performance (Lighthouse, image handling, font loading), responsive sweep at 360/768/1024/1440, anti-slop checklist §8. ▸ gate

**Phase 7 — Real content.** Swap every placeholder from `CONTENT_TODO.md` once you provide copy, metrics, and logos. Run `humanizer` over all copy. ▸ gate

---

## 12. Definition of done

- Every §8 checkbox is clean.
- Reduced-motion and reduced-transparency paths work.
- Keyboard-navigable, visible focus, AA contrast (blue on canvas passes for text sizes used).
- No placeholder is presented as real content.
- Lighthouse: performance and accessibility both strong on the homepage.
- The site could plausibly belong to a serious advisory firm, not a template marketplace.
