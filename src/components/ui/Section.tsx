import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Page section wrapper: anchor target, vertical rhythm and centred container. */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("py-24 md:py-32", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}

/** Numbered, code-flavoured section header: `01 / about`. */
export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-14 max-w-2xl md:mb-16", className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-wide text-accent">
        <span>{index}</span>
        <span aria-hidden className="h-px w-8 bg-accent/40" />
        <span className="text-muted">{eyebrow}</span>
      </p>
      <h2
        id={`${id}-title`}
        className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-pretty text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
