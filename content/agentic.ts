export interface AgentSystem {
  id: string;
  number: string;
  name: string;
  tag: string;
  targets: string;
  body: string;
  /* Legacy fields — kept so existing AgentShowcase / AgenticLayer components compile */
  watches: string;
  does: string;
  returns: string;
}

export const agentSystems: AgentSystem[] = [
  {
    id: "agent-diligence",
    number: "01",
    name: "Diligence & QoE Prep",
    tag: "CYCLE TIME",
    targets: "Cycle time",
    body: "Agents ingest data-room documents and produce first-pass financial, contract, and compliance red-flag summaries.",
    watches: "Data-room documents, financial statements, contracts, and compliance records uploaded during diligence.",
    does: "Ingests documents, flags financial anomalies, summarises contract risk, and produces a structured red-flag report.",
    returns: "A first-pass diligence summary that cuts manual review time and surfaces the issues that matter.",
  },
  {
    id: "agent-project-controls",
    number: "02",
    name: "Project Controls",
    tag: "COST OVERRUN",
    targets: "Cost overrun exposure",
    body: "Schedule-to-cost variance agents surface early warnings across Primavera/EcoSys before slippage compounds.",
    watches: "Project schedules, cost reports, and milestone tracking across Primavera, EcoSys, and connected project management systems.",
    does: "Monitors schedule-to-cost variance, flags early warnings, and routes exceptions for project manager review.",
    returns: "A real-time project health feed that replaces the manual variance report cycle.",
  },
  {
    id: "agent-ap-ar",
    number: "03",
    name: "AP / AR Automation",
    tag: "BACK-OFFICE HEADCOUNT",
    targets: "Back-office headcount",
    body: "Invoice matching, collections follow-up, and reconciliation run continuously across ERP systems.",
    watches: "Invoice queues, payment status, collections aging, and reconciliation discrepancies across ERP systems.",
    does: "Matches invoices, triggers collections follow-up, reconciles accounts, and flags exceptions for human review.",
    returns: "Continuous back-office throughput that reduces manual processing headcount and improves cash cycle.",
  },
  {
    id: "agent-license-compliance",
    number: "04",
    name: "License & Compliance Monitoring",
    tag: "REGULATORY RISK",
    targets: "Regulatory risk",
    body: "Continuous tracking of professional licenses, certifications, and renewal deadlines across a distributed workforce.",
    watches: "Professional licenses, certifications, and renewal deadlines across a distributed workforce.",
    does: "Tracks expiry dates, triggers renewal workflows, and flags compliance gaps before they create regulatory exposure.",
    returns: "A continuous compliance feed that replaces the manual spreadsheet tracking process.",
  },
  {
    id: "agent-portfolio-reporting",
    number: "05",
    name: "Portfolio Reporting Rollups",
    tag: "REPORTING LABOR",
    targets: "Reporting labor",
    body: "Multi-entity KPI and financial consolidation replaces manual spreadsheet aggregation across portfolio companies.",
    watches: "Technology health metrics, KPI data, and financial results across all portfolio companies.",
    does: "Aggregates cross-company data into a single intelligence layer, identifies patterns, and surfaces outliers.",
    returns: "A unified portfolio view that cuts reporting cycle time from weeks to hours.",
  },
  {
    id: "agent-bid-proposal",
    number: "06",
    name: "Bid & Proposal Agents",
    tag: "WIN RATE & RESPONSE TIME",
    targets: "Win rate & response time",
    body: "Historical win-rate analysis and draft generation shorten the RFP response cycle for E&C portfolio companies.",
    watches: "Historical bid data, win/loss records, RFP documents, and project specifications.",
    does: "Analyses win-rate patterns, generates draft proposal sections, and surfaces relevant past project analogues.",
    returns: "Shorter RFP response cycles and data-driven bid positioning for E&C portfolio companies.",
  },
];
