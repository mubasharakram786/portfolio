import { cn } from "@/lib/utils";

/**
 * Development-only reminder that a block still contains template content.
 * Renders nothing in production builds.
 */
export function PlaceholderNote({ file, className }: { file: string; className?: string }) {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-dashed border-amber-500/50 bg-amber-500/10 px-2.5 py-1 font-mono text-[0.68rem] text-amber-700 dark:text-amber-300",
        className,
      )}
    >
      placeholder — edit {file}
    </p>
  );
}
