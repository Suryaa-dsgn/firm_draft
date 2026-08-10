import Link from "next/link";
import {
  LayoutDashboard,
  Search,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { SolutionPillar } from "@/content/solutions";
import { ScrambleText } from "@/components/primitives/ScrambleText";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  search: Search,
  "shield-check": ShieldCheck,
  "trending-up": TrendingUp,
};

interface SolutionCardProps {
  pillar: SolutionPillar;
  className?: string;
}

export function SolutionCard({ pillar, className }: SolutionCardProps) {
  const Icon = ICON_MAP[pillar.iconKey] ?? LayoutDashboard;

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-card border border-hairline bg-surface p-8 shadow-card transition-all duration-200",
        "hover:-translate-y-1 hover:border-accent/30 hover:shadow-card-hover",
        className
      )}
    >
      {/* Mono index */}
      <span className="font-mono text-mono-label uppercase tracking-widest text-ink-faint transition-colors group-hover:text-accent">
        {"// "}{pillar.id}
      </span>

      {/* Icon */}
      <div className="mt-6 text-ink-faint transition-colors group-hover:text-accent">
        <Icon size={20} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-title font-semibold text-ink">
        <ScrambleText duration={560}>{pillar.title}</ScrambleText>
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 text-body text-ink-muted">{pillar.description}</p>

      {/* Link */}
      <Link
        href={pillar.href}
        className="mt-6 inline-flex items-center gap-2 font-mono text-mono-label uppercase tracking-widest text-ink-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
        aria-label={`Read more about ${pillar.title}`}
      >
        <ScrambleText trigger="hover" duration={320}>{"Read more"}</ScrambleText>
        <ArrowRight size={12} strokeWidth={1.5} />
      </Link>

      {/* Hover accent border — left edge */}
      <div className="absolute inset-y-0 left-0 w-0.5 rounded-l-card bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
    </article>
  );
}
