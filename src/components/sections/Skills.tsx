import type { CSSProperties } from "react";
import { Boxes, Code, Database, Layers, Palette, Wrench, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { tech } from "@/data/tech";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  "Frontend Development": Code,
  "Frameworks & Libraries": Layers,
  "UI & Styling": Palette,
  "State Management": Boxes,
  "Backend Development": Database,
  "Development Tools": Wrench,
};

export function Skills() {
  return (
    <Section id="skills" className="bg-surface-2/40">
      <SectionHeading
        id="skills"
        index="02"
        eyebrow="skills & technologies"
        title="A focused toolkit for modern frontend work."
        description="The languages, frameworks and tools I use to design, build and ship production web applications."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {skillCategories.map((category, i) => {
          const Icon = categoryIcons[category.title] ?? Code;
          return (
            <StaggerItem
              key={category.title}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
              )}
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="grid size-10 place-items-center rounded-xl border border-border bg-surface-2 text-accent">
                  <Icon className="size-[1.1rem]" aria-hidden />
                </span>
                <span className="font-mono text-[0.68rem] text-subtle">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{category.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                {category.items.map((key) => {
                  const { label, icon: TechIcon, color } = tech[key];
                  return (
                    <li
                      key={key}
                      style={{ "--brand": color ?? "var(--foreground)" } as CSSProperties}
                      className="group/skill flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-sm text-foreground/85 transition-colors duration-200 hover:border-[color-mix(in_oklab,var(--brand)_45%,transparent)]"
                    >
                      <TechIcon
                        aria-hidden
                        className="size-4 text-[var(--brand)] transition-transform duration-200 group-hover/skill:scale-110"
                      />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
