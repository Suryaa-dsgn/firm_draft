export interface ProcessStep {
  index: number;
  phase: string;
  duration: string;
  description: string;
  activities: string[];
}

export const processSteps: ProcessStep[] = [
  {
    index: 1,
    phase: "Diagnose",
    duration: "Weeks 1-3",
    description:
      "Map the current technology landscape against the value creation thesis. Identify what is working, what is drag, and where the highest-leverage opportunities sit.",
    activities: [
      "Technology stack and architecture review",
      "Vendor and contract analysis",
      "Team capability assessment",
      "Investment-to-outcome mapping",
    ],
  },
  {
    index: 2,
    phase: "Govern",
    duration: "Weeks 4-6",
    description:
      "Install the governance layer. Define the standards, reporting structures, and decision rights that let technology be managed at the portfolio level without micromanagement.",
    activities: [
      "KPI framework and reporting cadence",
      "Governance policy and exception process",
      "Agentic monitoring configuration",
      "Board reporting template",
    ],
  },
  {
    index: 3,
    phase: "Deploy",
    duration: "Weeks 7-12",
    description:
      "Execute against the roadmap. Whether that means leading a migration, renegotiating a vendor contract, or standing up an agentic system, we operate. Not just advise.",
    activities: [
      "Priority initiative execution",
      "Vendor negotiation and transition management",
      "Integration and deployment oversight",
      "Team enablement",
    ],
  },
  {
    index: 4,
    phase: "Measure",
    duration: "Ongoing",
    description:
      "Close the loop between technology activity and financial outcomes. Build the attribution model, refine it as data accumulates, and use it to make the next allocation decision faster.",
    activities: [
      "ROI attribution model",
      "Ongoing portfolio intelligence",
      "Quarterly review and roadmap update",
      "Exit preparation",
    ],
  },
];
