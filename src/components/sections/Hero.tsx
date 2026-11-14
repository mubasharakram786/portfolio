import Image from "next/image";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Parallax } from "@/components/ui/Parallax";

/** Syntax-highlighted "developer profile" snippet shown beside the portrait. */
function ProfileCode() {
  const k = "text-[#b4637a] dark:text-[#eb6f92]"; // keyword
  const p = "text-foreground/80"; // property
  const s = "text-[#2a7a6f] dark:text-[#5eead4]"; // string
  const c = "text-subtle"; // punctuation / comments

  return (
    <pre className="overflow-x-auto p-5 font-mono text-[0.72rem] leading-6 sm:text-xs sm:leading-6">
      <code>
        <span className={c}>{"// profile.ts"}</span>
        {"\n"}
        <span className={k}>const</span> <span className={p}>developer</span> <span className={c}>=</span>{" "}
        <span className={c}>{"{"}</span>
        {"\n  "}
        <span className={p}>name</span>
        <span className={c}>:</span> <span className={s}>&quot;{siteConfig.name}&quot;</span>
        <span className={c}>,</span>
        {"\n  "}
        <span className={p}>role</span>
        <span className={c}>:</span> <span className={s}>&quot;{siteConfig.role}&quot;</span>
        <span className={c}>,</span>
        {"\n  "}
        <span className={p}>experience</span>
        <span className={c}>:</span> <span className={s}>&quot;{siteConfig.yearsOfExperience} years&quot;</span>
        <span className={c}>,</span>
        {"\n  "}
        <span className={p}>stack</span>
        <span className={c}>: [</span>
        <span className={s}>&quot;React&quot;</span>
        <span className={c}>, </span>
        <span className={s}>&quot;SCSS&quot;</span>
        <span className={c}>, </span>
        <span className={s}>&quot;Tailwind&quot;</span>
        <span className={c}>],</span>
        {"\n  "}
        <span className={p}>focus</span>
        <span className={c}>:</span> <span className={s}>&quot;clean, scalable UI&quot;</span>
        <span className={c}>,</span>
        {"\n"}
        <span className={c}>{"};"}</span>
      </code>
    </pre>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[19rem] overflow-hidden rounded-[1.75rem] border border-border bg-surface-2 shadow-lift">
      {siteConfig.profileImage ? (
        <Image
          src={siteConfig.profileImage}
          alt={`Portrait of ${siteConfig.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 304px, 70vw"
          className="object-cover"
        />
      ) : (
        // Placeholder portrait — set `profileImage` in src/data/site.ts to replace it.
        <div
          role="img"
          aria-label={`${siteConfig.name} — profile photo placeholder`}
          className="absolute inset-0 grid place-items-center"
          style={{
            background:
              "radial-gradient(90% 70% at 30% 10%, var(--glow), transparent 70%), linear-gradient(160deg, var(--surface-2), var(--surface))",
          }}
        >
          <div className="bg-grid absolute inset-0 opacity-70" />
          <span className="relative font-mono text-7xl font-medium tracking-tighter text-foreground/15">
            {siteConfig.initials}
          </span>
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background: engineering grid + one soft accent glow */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      />

      <div className="container-page grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <Parallax offset={-40} fade>
          <Stagger stagger={0.09}>
            <StaggerItem>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1.5 pr-4 pl-2.5 text-xs text-muted backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {siteConfig.availability}
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-8 font-mono text-sm text-accent">Hi, I&apos;m</p>
              <h1
                id="home-title"
                className="mt-2 text-5xl font-semibold tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl"
              >
                {siteConfig.name}
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-medium text-foreground/80 sm:text-xl">
                <span>Senior Frontend Developer</span>
                <span aria-hidden className="h-5 w-px bg-border-strong" />
                <span>React.js Developer</span>
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">
                {siteConfig.intro}
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#projects" size="lg">
                  View My Work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  <Mail className="size-4" aria-hidden />
                  Contact Me
                </ButtonLink>
                {siteConfig.resumeUrl ? (
                  <ButtonLink href={siteConfig.resumeUrl} variant="ghost" size="lg" download>
                    <Download className="size-4" aria-hidden />
                    Download CV
                  </ButtonLink>
                ) : null}
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-10 flex items-center gap-4">
                <span className="font-mono text-xs text-subtle">find me on</span>
                <span aria-hidden className="h-px w-8 bg-border-strong" />
                <SocialLinks />
              </div>
            </StaggerItem>
          </Stagger>
        </Parallax>

        {/* Visual: portrait + floating code card */}
        <Reveal delay={0.25} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <Parallax offset={90} className="relative pb-24 sm:pb-20 lg:pr-6">
            <Portrait />

            <div className="absolute -bottom-2 left-1/2 w-[min(100%,22rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-lift backdrop-blur-xl lg:left-auto lg:right-0 lg:translate-x-0">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="size-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="size-2.5 rounded-full bg-[#28c840]/80" />
                <span className="ml-2 font-mono text-[0.65rem] text-subtle">profile.ts</span>
              </div>
              <ProfileCode />
            </div>

            <div className="absolute top-6 -left-2 hidden rounded-2xl border border-border bg-surface/90 px-4 py-3 shadow-lift backdrop-blur-xl sm:block lg:-left-6">
              <p className="text-2xl font-semibold tracking-tight">{siteConfig.yearsOfExperience}</p>
              <p className="font-mono text-[0.65rem] text-muted">years shipping UI</p>
            </div>
          </Parallax>
        </Reveal>
      </div>

      <div className="container-page mt-16 hidden md:block">
        <a
          href="#about"
          className="inline-flex items-center gap-2 font-mono text-xs text-subtle transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-3.5 animate-bounce motion-reduce:animate-none" aria-hidden />
          scroll to explore
        </a>
      </div>
    </section>
  );
}
