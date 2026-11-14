import type { CSSProperties } from "react";
import { tech, type TechKey } from "@/data/tech";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: TechKey;
  size?: "sm" | "md";
  className?: string;
}

/** Technology chip with brand icon; the icon picks up its brand colour on hover. */
export function TechBadge({ name, size = "sm", className }: TechBadgeProps) {
  const { label, icon: Icon, color } = tech[name];

  return (
    <span
      style={{ "--brand": color ?? "currentColor" } as CSSProperties}
      className={cn(
        "group/tech inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2/60 font-mono text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground",
        size === "sm" ? "px-2.5 py-1 text-[0.7rem]" : "px-3 py-1.5 text-xs",
        className,
      )}
    >
      <Icon
        aria-hidden
        className={cn(
          "shrink-0 transition-colors duration-200 group-hover/tech:text-[var(--brand)]",
          size === "sm" ? "size-3" : "size-3.5",
        )}
      />
      {label}
    </span>
  );
}
