# Content, Demo & Visual Plan — [FIRM] site

> This layers content, interactive demo widgets, and visuals onto the site that is **already built**. It does not change page or section structure. Where the current copy is already good, it says "keep." Where something needs to change, it says exactly what.
>
> Guardrails, repeated because they matter: keep it simple, do not overengineer, nothing may look AI generated or sloppy. Reuse the existing shadcn components, the Apple motion system, and GSAP already in the project.

---

## 0. The one thing this site has to do

The client wants a viewer to leave with three feelings, in this order:

1. **"These people understand my problem."** The viewer recognizes their own pain in the copy before we ever talk about ourselves.
2. **"This is a real team I would want to talk to."** Human, direct, not a faceless SaaS. The site should make someone want to book the conversation, not just read features.
3. **"They clearly deliver, not just advise."** Seen as a team that installs working systems and hands them over, backed by things that actually run.

Every content and design decision below serves one of those three. If something serves none of them, cut it.

---

## 1. Voice and language rules

**Tone:** plain, confident, human. Short sentences. Say the specific thing. Sound like an operator who has done the work, not a brochure. The existing copy mostly nails this already.

**Lead with the reader's pain, in their words.** Name the recognizable problem first (the data-room slog, schedule slip found too late, back-office headcount creep, no cross-portfolio view, tech debt surfacing at exit). Relatability is the trust mechanism.

**Never say "private equity" or "PE."** Speak to the audience in their vocabulary without the label. This is a hard rule.

- Approved words that signal the audience without naming it: portfolio, holdings, operating companies, the hold period, value creation, returns, at exit, operators, operating teams, boards, diligence, add-ons, carve-outs, EBITDA, technology debt, investors.
- Banned: "private equity," "PE," "PE firm," "LP" / "limited partner."

**No em dashes. Anywhere.** Use commas, periods, or colons.

**Banned AI-slop words:** unlock, seamless, elevate, revolutionize, empower, supercharge, harness, leverage (as a hype verb), cutting-edge, game-changing, "in today's fast-paced world," "excited to announce," "at the intersection of." Run all final copy through the `humanizer` skill.

**No fake proof.** No invented client names, no fabricated testimonials, no metric asserted as verified when it is a placeholder. Placeholders are fine when they are honestly labelled and look intentional.

---

## 2. Corrections to the current build (do these first, they are quick)

These are live rule-breaks visible in the current screenshots:

1. **Footer newsletter line** currently reads "...agentic systems, and PE portfolio operations — delivered directly." Change to: "Perspectives on technology governance, agentic systems, and portfolio operations, delivered directly." (removes "PE" and the em dash).
2. **Footer ticker** contains `[#PE OPERATIONS]`. Change to `[#PORTFOLIO OPERATIONS]`.
3. **Grep the whole codebase** for "private equity", "PE ", "—", and "LP" and clear every hit against the rules in section 1.
4. **Outcomes section (N.06)** currently says the placeholder metrics are "independently verified." Do not assert verification of numbers that are not real yet. Change the caption to: "Illustrative figures. Real engagement metrics will replace these as data matures." Keep the `[PLACEHOLDER, REAL DATA PENDING]` marker.

---

## 3. Verticals to foreground (no new structure)

Foreground the three best-fit verticals from the source material. Do this through the demo widget data and one compact content strip, not a new page or section.

- **Engineering & Construction:** project controls, schedule and cost variance, bid and proposal support, licensed-trade compliance.
- **Infrastructure & Industrial Services:** multi-entity reporting rollups and back-office automation across frequent add-ons.
- **Consulting & Professional Services:** staffing and utilization optimization, institutional-knowledge agents.

**Where they appear:**
- Every demo widget uses vertical-flavored fake data (see the shared dataset in section 5), so the verticals show up naturally in the product, not as a claim.
- One content strip, "Built for operationally intensive, project-driven businesses," with the three items above as one line each. Place it on the **Agentic Systems** page below the demos. Optionally mirror it as a compact three-item row on Home between N.05 and N.06. This is content inside existing sections, not a structural change.

---

## 4. Page by page content direction

For each section: what the viewer should feel, the copy direction, and the visual or widget. Motion is covered once in section 7.

### Home

**Hero.** Keep the headline ("Capital compounds when technology governs itself") and the sub-copy. Both are on-voice, no PE, no em dash. Visual: **Widget W1, Portfolio Monitor** (section 5). This is the site's first trust signal, so it has to feel real and calm.

**N.02 Positioning.** Keep. It is pain-first and human. The four tags stay. This is the "they understand my problem" beat.

**N.03 Consulting solutions.** Keep the four cards and copy. They route to the Solutions page.

**N.04 Agentic (dark).** Keep the framing. Visual: **Widget W2, Agentic console** (section 5). This is the "they deliver working systems" beat, so the demo carries it.

**N.05 Approach, four phases.** Keep Diagnose, Govern, Deploy, Measure and the copy. Human, structured, no hype.

**N.06 Outcomes.** Apply the caption fix from section 2. Keep dummy numbers but make them relatable and internally consistent. Suggested set, tied to the verticals: `4.1x` average lift in technology ROI attribution, `73%` less time on governance reporting, `19%` technology cost reduction in the first 90 days, `88%` of engagements reach exit with technology debt resolved. The `[CASE STUDY TITLE]` block stays a labelled placeholder, styled to look intentional, not broken.

**N.07 Closing CTA.** Keep. "No pitch, no deck. Just a direct discussion about what you are trying to solve" is exactly the human, low-pressure vibe the client asked for. This is the "I want to talk to these people" beat.

**Footer.** Apply the two fixes from section 2. Everything else keeps.

### Solutions page

Keep the four capability blocks, the "WHAT YOU GET" lists, and the "AGENTIC LAYER" callouts. The current copy is strong and specific.

Do **not** turn the AGENTIC LAYER callouts into full widgets. Keep them as the current quiet callout boxes, with at most a single subtle status dot. Full demos live on the Agentic Systems page. This keeps the page calm and avoids clutter.

### Agentic Systems page

This is the home of the meatier demos. Keep the existing structure and add, at most, the two P2 widgets from section 5 (**W3 Diligence triage** and **W4 Project-controls variance**), plus the verticals content strip from section 3. Each agent gets one clear paragraph in plain language: the pain it removes, what it does, what it hands back. No "autonomous magic" language.

### Approach page

Keep the four-phase model expanded. Add one human element to serve the "talk to real people" goal: a short **"Who you will actually work with"** block with a placeholder name, role, and a photo slot. Use a real photograph later. Do not use an AI-generated face, ever, it is a trust-killer. Until there is a real photo, use a clean monogram or initials placeholder, not a stock headshot.

### Insights page

Keep it simple and honest. If there are no articles yet, show three placeholder cards with real, plausible working titles drawn from the positioning (for example: "What a technology diligence actually finds," "Governing technology across a portfolio without micromanaging," "Attributing technology spend to EBITDA"). Mark them clearly as upcoming. Do not generate full fake articles.

### Contact page

Warm, direct, low-friction. The action is "book a conversation," framed as talking to a person, not filling a lead form. Short shadcn form (name, company, one line on what they are trying to solve), or a scheduling embed if one exists. One human sentence above it, for example: "Tell us what you are dealing with. We will tell you honestly whether we are the right fit."

---

## 5. Interactive demo widgets (the core of this task)

### Principles for every widget

- **Fake data must be real-feeling and consistent.** Numbers add up, statuses make sense, the same holdings appear across widgets. No lorem, no random noise.
- **Simple beats clever.** One idea per widget, one idea per tab. If a widget needs a legend to be understood, it is too complex.
- **Motion is restrained.** Data animates in once on view. At most one "live" pulse on the whole page. No looping glows, no everything-pulsing. Apple spring feel, GSAP for scroll-triggered reveals and the drag slider.
- **Craft.** Aligned, generously spaced, legible, reuses the existing type and token system. No neon, no gratuitous gradients.
- **Interaction follows Apple rules.** Respond on pointer-down, track 1:1, stay interruptible. Every widget has a `prefers-reduced-motion` static fallback.

### Shared fake dataset (use these everywhere for consistency)

Holdings (dummy, clearly not real, vertical-flavored):

| Holding | Vertical | Tech health | KPIs | Flags |
|---|---|---|---|---|
| Cardinal Engineering | E&C | 78 | 14 | 2 |
| Northwind Infrastructure | Infra / Industrial | 86 | 11 | 0 |
| Meridian Advisory | Consulting | 82 | 9 | 1 |
| Atlas Industrial Services | Infra / Industrial | 71 | 12 | 3 |
| Vantage Controls | E&C | 80 | 10 | 1 |

### Widget set (priority ranked, do not build more than this)

**P1, build these two, they carry the site:**

**W1 — Portfolio Monitor (Home hero)**
- Purpose: instant "this team watches your whole portfolio's technology, live" signal.
- Content: a compact card. Mono label "PORTFOLIO MONITOR" with one small live dot. Three or four holding rows from the dataset, each with a health score and a green/amber status dot. One trend line, a portfolio technology-health index rising across the hold period. Three mini stats: Monitoring 12, Alerts 8, Updated 4s ago.
- Interaction: hover a holding row highlights it and emphasizes its point on the line. Nothing more.
- Motion: on view, the line draws left to right, rows fade and rise with a 60ms stagger, stats count up, the live dot pulses once then rests.
- Build: shadcn Card and Badge; hand-rolled SVG for the line (no chart library needed). Reduced-motion shows the final state.

**W2 — Agentic console (Home N.04, refine what exists)**
- Part A, Manual vs Agentic comparison slider. Left "Manual governance" with the current pain bullets, muted. Right "Agentic governance" with the resolved versions: continuous data collection, risk flagged in real time, reporting in hours, cross-portfolio visibility, exceptions caught before the board. Drag reveals right over left, 1:1, spring release.
- Part B, four tabs, each showing exactly one clean output, not a dashboard:
  - GOVERNANCE: a standards checklist across holdings (SOC 2 readiness, vendor SLA adherence) with status marks.
  - INTELLIGENCE: the holdings KPI and flags table, an "aggregating" state that resolves to one insight line, for example "Atlas Industrial: 3 flags, cost variance trending up."
  - DEPLOYMENT: a post-close integration tracker, a few steps marked done or in progress against the 100-day window.
  - ATTRIBUTION: a small two-line mapping, technology spend against EBITDA impact, the ROI attribution idea in one glance.
- Interaction: tab switch crossfades; slider drags. Each panel holds one idea.
- Build: shadcn Tabs, Card, Table, Badge, Progress. Reduced-motion static.

**P2, build if reasonable, on the Agentic Systems page:**

**W3 — Diligence red-flag triage**
- Purpose: make diligence acceleration tangible and hit the data-room-slog pain.
- Content: a "data room" file list (MSA_Cardinal_2023.pdf, Rev_Recognition_Q3.xlsx, IT_Asset_Inventory.csv, Vendor_Contracts.zip, and a few more). A "Run review" button. On run, files process briefly, then red / amber / green flags appear per file with a one-line finding, for example "Auto-renew clause, 36-month lock-in," "Revenue concentration, top client 41%," "Unsupported ERP version, end of life 2025." A summary count: "3 red, 4 amber, 9 clear."
- Interaction: click Run review, flags stagger in; re-runnable; click a flag to expand its detail.
- Build: shadcn Card, Button, Badge, Collapsible, Progress. Reduced-motion appears instantly.

**W4 — Project-controls variance (E&C vertical)**
- Purpose: foreground E&C, show schedule and cost variance caught early.
- Content: one project (Cardinal Engineering) with a planned-versus-actual cost line and a schedule bar. A toggle between "before" and "with agent." In the "with agent" state an early-warning flag appears: "Schedule slip, +12 days on structural steel. Projected cost variance, +$340K."
- Interaction: the before / with-agent toggle. Keep it to one project.
- Build: shadcn Card, Toggle or Tabs, Badge; hand-rolled SVG for the two lines. Reduced-motion static.

**Not now:** portfolio KPI rollup and consulting utilization widgets. Note them as future, do not build them in this pass. Two strong demos beat four weak ones.

---

## 6. Imagery and visuals

- **No stock photos and no AI-generated photos.** No business-people-shaking-hands, no abstract tech swirls, no generated faces. They read as AI-slop and quietly undercut the trust the client is asking for. The demo widgets and the existing type-and-hairline system are the visuals.
- The only human image on the site is the real principal photo on the Approach page, added later. Placeholder is a monogram, never a generated face.
- If a section feels empty, the fix is whitespace, a mono label, or a restrained SVG data motif that matches the widgets, not a decorative image.
- On the "create images from AI" question: skip it for this site. If a specific spot ever needs one, tell me the spot and I will write a precise prompt, but the current design does not need generated imagery and is stronger without it.

---

## 7. Motion

Reuse the motion system already in the build. In short: Apple springs, critically damped by default, a small bounce only on the slider release. GSAP ScrollTrigger for the widget reveals and the drag slider. Keep the total motion budget low, roughly a fifth of what a "look at my animations" site does. One orchestrated hero reveal, disciplined scroll reveals, crisp micro-interactions, the demos animating once on view. Every motion respects `prefers-reduced-motion`. If a motion does not aid understanding or earn a small moment of delight, cut it.

---

## 8. Build order

1. **Corrections** from section 2 (PE mentions, em dashes, the outcomes caption). Fast, do first.
2. **W1 Portfolio Monitor** in the hero.
3. **W2 Agentic console** refinement in N.04.
4. Copy pass across all pages against section 1, run through `humanizer`.
5. **W3** and **W4** on the Agentic Systems page, plus the verticals strip.
6. **Who you will work with** placeholder on Approach, Insights placeholders, Contact copy.
7. Reduced-motion and responsive check on every new widget.

Stop after step 4 for a review before building the P2 widgets.

---

## 9. Done checklist

- No "private equity", "PE", "LP", or em dash anywhere in the site.
- No fabricated client names, testimonials, or metrics presented as real. Placeholders look intentional.
- Every widget uses the shared dataset, reads clearly at a glance, and has a reduced-motion fallback.
- No stock or AI-generated imagery. No generated faces.
- Nothing loops or glows. Motion is calm and purposeful.
- A viewer recognizes their own problem, believes the team delivers, and wants to book the conversation.
