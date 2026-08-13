export interface ProcessStep {
  index: number;
  title: string;
  body: string;
}

export const processSteps: ProcessStep[] = [
  {
    index: 1,
    title: "No-Integration Deployment",
    body: "Agents sit alongside existing ERP, PM, and finance systems. No rip-and-replace, no core-system integration project required. We deploy into the workflow that is already running.",
  },
  {
    index: 2,
    title: "Usage-Based Pricing",
    body: "PMPM and per-transaction pricing model: cost scales with activity, not with a fixed consulting headcount. You pay for what runs, and nothing for what does not.",
  },
  {
    index: 3,
    title: "100-Day Rollout Window",
    body: "First agents live inside a portfolio company's typical post-close operating window, aligned to the value-creation plan. No lengthy setup phase before value appears.",
  },
  {
    index: 4,
    title: "Reusable Across the Platform",
    body: "Once built for one portfolio company, agentic components redeploy faster into the next add-on. The second deployment is cheaper than the first. The platform compounds.",
  },
];
