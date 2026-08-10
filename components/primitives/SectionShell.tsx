import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  variant?: "light" | "navy";
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

export function SectionShell({
  id,
  variant = "light",
  className,
  innerClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section",
        variant === "navy" && "bg-navy text-on-navy dot-grid",
        variant === "light" && "bg-canvas text-ink",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-content px-[clamp(20px,5vw,64px)]",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
