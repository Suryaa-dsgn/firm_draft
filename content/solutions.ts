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
    title: "Technology Due Diligence",
    description:
      "Pre-close IT stack assessment: architecture, licensing, and integration risk flagged before the deal closes.",
    detail:
      "We conduct technical assessments that go beyond surface-level architecture reviews. Our diligence identifies true technical debt, licensing exposure, integration risk, and the cost to modernize, with specific numbers rather than directional summaries.",
    iconKey: "search",
    href: "/solutions#tech-diligence",
    agenticNote:
      "Diligence agents ingest data-room documents and produce first-pass financial, contract, and compliance red-flag summaries, cutting the manual review cycle.",
    outcomes: [
      "Architecture, licensing, and integration risk flagged before close",
      "100-day technology plan ready at signing",
      "Risk-adjusted technology valuation inputs",
    ],
  },
  {
    id: "002",
    title: "Fractional / Interim CIO",
    description:
      "Bridge technology leadership during a transition, carve-out, or search. Accountable for the roadmap, not just advisory hours.",
    detail:
      "We step into the CIO function when portfolio companies need direction, not just advice. That means setting the technology agenda, managing vendor relationships, and building internal capability that compounds over the hold period.",
    iconKey: "layout-dashboard",
    href: "/solutions#cio-advisory",
    agenticNote:
      "Governance agents monitor technology spend and vendor SLAs continuously, surfacing issues before they become board items.",
    outcomes: [
      "Technology roadmap aligned to the value creation thesis",
      "Accountable leadership during transition or carve-out",
      "Internal capability built before exit",
    ],
  },
  {
    id: "003",
    title: "IT Carve-Out, Integration & ERP Rationalization",
    description:
      "Separating or merging systems, data, and vendor contracts for divestitures, add-ons, and platform consolidations.",
    detail:
      "We manage the full separation or integration of systems, data, and vendor contracts, including a post-acquisition roadmap to consolidate overlapping ERP, PM, and finance systems inherited across add-ons. No rip-and-replace required.",
    iconKey: "trending-up",
    href: "/solutions#carve-out",
    agenticNote:
      "Deployment analysis agents track integration progress and flag divergence from the integration plan in real time.",
    outcomes: [
      "Systems separated or merged per acquisition plan",
      "ERP and finance system rationalization roadmap",
      "Vendor contract consolidation across add-ons",
    ],
  },
  {
    id: "004",
    title: "Cybersecurity, Compliance & the 100-Day Plan",
    description:
      "Risk assessment and remediation roadmap: SOC 2 and data-privacy readiness, sized to portfolio-company scale.",
    detail:
      "We deliver a technology roadmap aligned to the deal thesis, handed to the board with clear milestones and owners. Cybersecurity posture, compliance readiness, and the 100-day execution plan are integrated, not separate workstreams.",
    iconKey: "shield-check",
    href: "/solutions#compliance",
    agenticNote:
      "License and compliance monitoring agents track professional licenses, certifications, and renewal deadlines continuously across the workforce.",
    outcomes: [
      "SOC 2 and data-privacy readiness assessment",
      "Risk remediation roadmap sized to portfolio-company scale",
      "Technology roadmap handed to board with milestones and owners",
    ],
  },
];
