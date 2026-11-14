import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { TechBadge } from "@/components/ui/TechBadge";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        index="03"
        eyebrow="experience"
        title="5.5+ years of building for the web."
        description="Where I've worked, what I was responsible for and the technologies I used along the way."
      />

      <ol className="relative">
        {/* Timeline rail */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-accent/60 via-border-strong to-transparent md:left-[calc(13rem+11px)]"
        />

        {experience.map((job, i) => (
          <li key={`${job.company}-${i}`} className="relative grid gap-4 pb-12 pl-10 last:pb-0 md:grid-cols-[13rem_1fr] md:gap-0 md:pl-0">
            {/* Period — left column on desktop */}
            <Reveal className="md:pt-1 md:pr-10 md:text-right">
              <p className="font-mono text-xs text-accent">{job.period}</p>
              {job.type ? <p className="mt-1 font-mono text-xs text-subtle">{job.type}</p> : null}
            </Reveal>

            {/* Node */}
            <span
              aria-hidden
              className="absolute top-0.5 left-0 grid size-[23px] place-items-center rounded-full border border-border-strong bg-background md:left-[13rem]"
            >
              <span className={i === 0 ? "size-2 rounded-full bg-accent" : "size-1.5 rounded-full bg-subtle"} />
            </span>

            <Reveal delay={0.08} className="md:pl-12">
              <article className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:p-7">
                {job.placeholder ? <PlaceholderNote file="src/data/experience.ts" className="mb-4" /> : null}
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{job.role}</h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="size-3.5" aria-hidden />
                        {job.company}
                      </span>
                      {job.location ? (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-3.5" aria-hidden />
                          {job.location}
                        </span>
                      ) : null}
                    </p>
                  </div>
                </header>

                <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2.5">
                  {job.responsibilities.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {job.tech.map((t) => (
                    <li key={t}>
                      <TechBadge name={t} />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
