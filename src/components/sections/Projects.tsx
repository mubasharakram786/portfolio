import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TechBadge } from "@/components/ui/TechBadge";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = project.featured;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-border-strong hover:shadow-lift",
        featured && "lg:grid lg:grid-cols-[1.25fr_1fr]",
      )}
    >
      <ProjectCover
        project={project}
        priority={featured}
        sizes={featured ? "(min-width: 1024px) 640px, 100vw" : undefined}
        className={cn("aspect-[16/10] border-b border-border", featured && "lg:aspect-auto lg:min-h-[22rem] lg:border-r lg:border-b-0")}
      />

      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:justify-center lg:p-10")}>
        <div className="flex items-center justify-between gap-3 font-mono text-[0.7rem]">
          <span className="text-accent">{project.category}</span>
          <span className="text-subtle">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3 className={cn("mt-3 font-semibold tracking-tight", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-pretty text-muted sm:text-[0.95rem]">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Technologies used in ${project.name}`}>
          {project.tech.map((t) => (
            <li key={t}>
              <TechBadge name={t} />
            </li>
          ))}
        </ul>

        {project.url ? (
          <div className="mt-auto pt-7">
            <ButtonLink href={project.url} variant="secondary" size="sm" aria-label={`View ${project.name} (opens in a new tab)`}>
              View Project
              <ArrowUpRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-surface-2/40">
      <SectionHeading
        id="projects"
        index="04"
        eyebrow="selected work"
        title="Projects I've designed, built and shipped."
        description="A selection of marketplaces, dashboards and business applications — each built with a stack chosen to fit the problem."
      />

      <Stagger as="ul" className="grid gap-5 md:grid-cols-2" stagger={0.06}>
        {projects.map((project, i) => (
          <StaggerItem as="li" key={project.slug} className={cn(project.featured && "md:col-span-2")}>
            <TiltCard max={project.featured ? 3 : 5}>
              <ProjectCard project={project} index={i} />
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
