import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" index="05" eyebrow="education" title="Academic background." />

      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal key={`${item.institution}-${i}`} delay={i * 0.08}>
            <article className="flex h-full gap-5 rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft sm:p-7">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                <GraduationCap className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                {item.placeholder ? <PlaceholderNote file="src/data/education.ts" className="mb-3" /> : null}
                <h3 className="text-lg font-semibold tracking-tight text-balance">{item.degree}</h3>
                <p className="mt-1 text-foreground/80">{item.institution}</p>
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" aria-hidden />
                    {item.period}
                  </span>
                  {item.location ? (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden />
                      {item.location}
                    </span>
                  ) : null}
                </p>
                {item.description ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.12}>
          <aside className="flex h-full flex-col justify-center rounded-[var(--radius-card)] border border-dashed border-border-strong p-6 sm:p-7">
            <p className="font-mono text-xs text-accent">{"// always learning"}</p>
            <p className="mt-3 leading-relaxed text-muted">
              Frontend moves fast. Alongside formal education, I keep my skills current through
              hands-on project work, official documentation and the wider developer community.
            </p>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
