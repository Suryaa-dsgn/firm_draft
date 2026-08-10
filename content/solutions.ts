export interface SolutionPillar {
  id: "001" | "002" | "003" | "004";
  title: string;
  description: string;
  detail: string;
  iconKey: string;
  href: string;
  agenticNote: string;
  outcomes: string[];
}

export const solutions: SolutionPillar[] = [
  {
    id: "001",
    title: "CIO Advisory & Fractional Leadership",
    description:
      "Operator-aligned technology leadership without the full-time overhead.",
    detail:
      "We step into the CIO function when portfolio companies need direction, not just advice. That means setting the technology agenda, managing vendor relationships, and building an internal capability that compounds over the hold period.",
    iconKey: "layout-dashboard",
    href: "/solutions#cio-advisory",
    agenticNote:
      "Governance agents monitor technology spend and vendor SLAs continuously, surfacing issues before they become board items.",
    outcomes: [
      "Technology roadmap aligned to value creation thesis",
      "Vendor consolidation and contract leverage",
      "Internal capability built before exit",
    ],
  },
  {
    id: "002",
    title: "Technology Due Diligence",
    description:
      "A clear-eyed read on what you are actually acquiring.",
    detail:
      "We conduct technical assessments that go beyond surface-level architecture reviews. Our diligence identifies true technical debt, integration risk, and the cost to modernize. Specific numbers, not directional summaries.",
    iconKey: "search",
    href: "/solutions#tech-diligence",
    agenticNote:
      "Post-acquisition, deployment analysis agents track integration progress and flag divergence from the integration plan.",
    outcomes: [
      "Risk-adjusted technology valuation inputs",
      "Identified integration dependencies before close",
      "100-day technology plan ready at signing",
    ],
  },
  {
    id: "003",
    title: "Portfolio Technology Governance",
    description:
      "Visibility across the portfolio, not just inside individual companies.",
    detail:
      "We build the governance layer that lets you manage technology risk at the fund level: shared standards, consolidated reporting, and early warning when something is off track.",
    iconKey: "shield-check",
    href: "/solutions#governance",
    agenticNote:
      "Portfolio intelligence agents aggregate technology health metrics across companies, delivering a weekly governance digest without manual data collection.",
    outcomes: [
      "Single technology risk view across all holdings",
      "Standardized KPIs that boards can read",
      "Faster problem identification at the portfolio level",
    ],
  },
  {
    id: "004",
    title: "Value Creation & Capital ROI",
    description:
      "Connecting technology investment to the returns that matter.",
    detail:
      "We build the measurement layer between technology spending and financial outcomes. That means defining the right KPIs, tracking them, and attributing ROI so that technology spend can be defended, or cut, with data.",
    iconKey: "trending-up",
    href: "/solutions#value-creation",
    agenticNote:
      "ROI attribution agents map technology investment to operational outcomes in near real time, replacing quarterly manual reports.",
    outcomes: [
      "Technology investment tied to EBITDA impact",
      "Defensible ROI attribution at portfolio review",
      "Spend optimized to the initiatives that actually move the needle",
    ],
  },
];
