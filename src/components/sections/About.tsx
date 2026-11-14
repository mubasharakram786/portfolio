import { Check } from "lucide-react";
import { aboutParagraphs, highlights } from "@/data/about";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

const techCount = new Set(skillCategories.flatMap((c) => c.items)).size;

const stats = [
  { value: siteConfig.yearsOfExperience, label: "Years of experience" },
  { value: `${projects.length}+`, label: "Featured projects" },
  { value: `${techCount}+`, label: "Technologies & tools" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about"
        index="01"
        eyebrow="about"
        title={
          <>
            Building interfaces that are{" "}
            <span className="text-accent">clear, fast and built to last.</span>
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="space-y-6">
          {aboutParagraphs.map((text, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-pretty text-muted md:text-lg first:text-foreground">
                {text}
              </p>
            </Reveal>
          ))}

          <Stagger as="ul" className="grid grid-cols-3 gap-3 pt-6">
            {stats.map((stat) => (
              <StaggerItem
                as="li"
                key={stat.label}
                className="rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-soft sm:p-5"
              >
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <Reveal>
            <h3 className="mb-6 font-mono text-xs tracking-wide text-subtle uppercase">Highlights</h3>
          </Reveal>
          <Stagger as="ul" className="divide-y divide-border border-y border-border">
            {highlights.map((item) => (
              <StaggerItem as="li" key={item.title} className="flex gap-4 py-5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Check className="size-3.5" aria-hidden />
                </span>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
