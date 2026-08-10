import { cn } from "@/lib/utils";

interface LogoSlotProps {
  label?: string;
  className?: string;
}

export function LogoSlot({ label = "Partner logo", className }: LogoSlotProps) {
  return (
    <div
      aria-label={label}
      role="img"
      className={cn(
        "h-7 w-24 rounded bg-hairline-strong opacity-50",
        className
      )}
    />
  );
}
