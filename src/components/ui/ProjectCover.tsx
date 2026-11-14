import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Small deterministic PRNG so every project gets its own stable "data". */
function seeded(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const tint = (pct: number) => `color-mix(in oklab, var(--accent-c) ${pct}%, transparent)`;
const line = "rounded-full bg-foreground/10";

function LandingMock() {
  return (
    <div className="flex h-full flex-col gap-[6%] p-[6%]">
      <div className="flex items-center justify-between">
        <div className="h-2 w-[18%] rounded-full" style={{ background: tint(70) }} />
        <div className="flex w-[40%] justify-end gap-[8%]">
          <div className={cn(line, "h-1.5 w-full")} />
          <div className={cn(line, "h-1.5 w-full")} />
          <div className={cn(line, "h-1.5 w-full")} />
        </div>
      </div>
      <div className="flex flex-1 items-center gap-[6%]">
        <div className="flex w-1/2 flex-col gap-[0.5em] text-[clamp(6px,1.4vw,10px)]">
          <div className="h-[1.1em] w-[95%] rounded-sm bg-foreground/20" />
          <div className="h-[1.1em] w-[75%] rounded-sm bg-foreground/20" />
          <div className={cn(line, "mt-[0.6em] h-[0.5em] w-[85%]")} />
          <div className={cn(line, "h-[0.5em] w-[65%]")} />
          <div className="mt-[0.8em] h-[1.6em] w-[38%] rounded-full" style={{ background: "var(--accent-c)" }} />
        </div>
        <div
          className="aspect-square w-[42%] rounded-[18%]"
          style={{ background: `linear-gradient(135deg, ${tint(55)}, ${tint(12)})` }}
        />
      </div>
      <div className="grid grid-cols-3 gap-[4%]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-6 rounded-md border border-foreground/5 bg-foreground/[0.04]" />
        ))}
      </div>
    </div>
  );
}

function MarketplaceMock({ rand }: { rand: () => number }) {
  return (
    <div className="flex h-full flex-col gap-[5%] p-[5%]">
      <div className="flex items-center gap-[4%]">
        <div className="h-2 w-[14%] rounded-full" style={{ background: tint(70) }} />
        <div className="h-4 flex-1 rounded-full border border-foreground/10 bg-foreground/[0.03]" />
        <div className="size-4 rounded-full" style={{ background: tint(40) }} />
      </div>
      <div className="flex flex-1 gap-[4%] overflow-hidden">
        <div className="flex w-[22%] flex-col gap-2">
          {[70, 90, 55, 80, 60].map((w, i) => (
            <div key={i} className={cn(line, "h-1.5")} style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-[5%]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-1 rounded-md border border-foreground/5 bg-foreground/[0.03] p-[8%]">
              <div className="flex-1 rounded-sm" style={{ background: tint(12 + Math.round(rand() * 30)) }} />
              <div className={cn(line, "h-1 w-[80%]")} />
              <div className="h-1 w-[40%] rounded-full" style={{ background: tint(60) }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMock({ rand }: { rand: () => number }) {
  const bars = Array.from({ length: 9 }, () => 25 + Math.round(rand() * 70));
  return (
    <div className="flex h-full">
      <div className="flex w-[18%] flex-col gap-2 border-r border-foreground/5 bg-foreground/[0.025] p-[4%]">
        <div className="mb-2 h-2 w-[70%] rounded-full" style={{ background: tint(70) }} />
        {[80, 60, 70, 50, 65].map((w, i) => (
          <div
            key={i}
            className="h-1.5 rounded-full"
            style={{ width: `${w}%`, background: i === 1 ? tint(55) : "color-mix(in oklab, var(--foreground) 10%, transparent)" }}
          />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-[5%] p-[5%]">
        <div className="grid grid-cols-3 gap-[5%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-1 rounded-md border border-foreground/5 bg-foreground/[0.03] p-[8%]">
              <div className={cn(line, "h-1 w-1/2")} />
              <div className="h-2 w-[70%] rounded-sm" style={{ background: i === 0 ? tint(65) : "color-mix(in oklab, var(--foreground) 22%, transparent)" }} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-[3%] rounded-md border border-foreground/5 bg-foreground/[0.02] p-[4%]">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[2px]" style={{ height: `${h}%`, background: tint(i === 6 ? 85 : 30) }} />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-[6%]">
              <div className={cn(line, "h-1 w-[30%]")} />
              <div className={cn(line, "h-1 w-[20%]")} />
              <div className="h-1 w-[12%] rounded-full" style={{ background: tint(50) }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ProjectCoverProps {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Project thumbnail. Uses the real screenshot when `project.image` is set,
 * otherwise renders a lightweight, on-brand UI mockup (no network cost).
 */
export function ProjectCover({ project, className, priority, sizes }: ProjectCoverProps) {
  const rand = seeded(project.slug);

  return (
    <div
      className={cn("relative overflow-hidden bg-surface-2", className)}
      style={{ "--accent-c": project.accent } as CSSProperties}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div aria-hidden className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(120% 90% at 100% 0%, ${tint(28)}, transparent 60%), radial-gradient(80% 70% at 0% 100%, ${tint(14)}, transparent 70%)`,
            }}
          />
          <div className="bg-grid absolute inset-0 opacity-60 [mask-image:none]" />
          <div className="absolute top-[13%] left-[8%] h-[100%] w-[96%] overflow-hidden rounded-tl-xl border border-foreground/10 bg-surface shadow-lift transition-transform duration-700 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1.5">
            <div className="flex h-6 items-center gap-1.5 border-b border-foreground/5 px-3">
              <span className="size-1.5 rounded-full bg-foreground/15" />
              <span className="size-1.5 rounded-full bg-foreground/15" />
              <span className="size-1.5 rounded-full bg-foreground/15" />
              <span className="ml-3 h-2 w-1/3 rounded-full bg-foreground/[0.06]" />
            </div>
            <div className="h-[calc(87%-1.5rem)]">
              {project.cover === "landing" && <LandingMock />}
              {project.cover === "marketplace" && <MarketplaceMock rand={rand} />}
              {project.cover === "dashboard" && <DashboardMock rand={rand} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
