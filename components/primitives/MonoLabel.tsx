import { cn } from "@/lib/utils";

interface MonoLabelProps {
  variant?: "index" | "tag";
  children: React.ReactNode;
  className?: string;
}

export function MonoLabel({
  variant = "tag",
  children,
  className,
}: MonoLabelProps) {
  return (
    <span
      className={cn(
        "font-mono text-mono-label uppercase tracking-widest text-ink-faint",
        className
      )}
    >
      {variant === "tag" ? `> ${children}` : children}
    </span>
  );
}
