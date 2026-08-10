export interface AgentSystem {
  id: string;
  name: string;
  tag: string;
  watches: string;
  does: string;
  returns: string;
}

export const agentSystems: AgentSystem[] = [
  {
    id: "agent-governance",
    name: "Governance Monitor",
    tag: "GOVERNANCE",
    watches: "Technology spend, vendor SLAs, security posture, and policy compliance across portfolio companies.",
    does: "Flags deviations from governance standards, generates automated compliance summaries, and routes exceptions for human review.",
    returns: "A weekly governance digest and a real-time exception feed. Replaces the manual collection process.",
  },
  {
    id: "agent-portfolio",
    name: "Portfolio Intelligence",
    tag: "INTELLIGENCE",
    watches: "Technology health metrics, roadmap milestones, and value creation KPIs across all holdings.",
    does: "Aggregates cross-company data into a single intelligence layer, identifies patterns, and surfaces outliers before they escalate.",
    returns: "A unified portfolio view that cuts reporting cycle time from weeks to hours.",
  },
  {
    id: "agent-deployment",
    name: "Deployment Analyzer",
    tag: "DEPLOYMENT",
    watches: "Integration progress, system migration status, and technical debt remediation against the post-acquisition plan.",
    does: "Tracks execution against the integration blueprint, models downstream risk, and alerts when schedule or budget assumptions break.",
    returns: "Confidence that integration is on track, or an early warning when it is not.",
  },
  {
    id: "agent-roi",
    name: "ROI Attribution Engine",
    tag: "ATTRIBUTION",
    watches: "Technology investment, operational metrics, and financial outcomes at the company and fund level.",
    does: "Maps spend to outcomes, builds attribution models, and generates defensible reporting for board and LP review.",
    returns: "A clear line from technology dollar to financial return, replacing quarterly manual exercises.",
  },
];
