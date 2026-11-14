import { Mail, MapPin } from "lucide-react";
import { isPlaceholder, siteConfig } from "@/data/site";
import { PlaceholderNote } from "@/components/ui/PlaceholderNote";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ContactForm } from "./ContactForm";
import { CopyEmail } from "./CopyEmail";

export function Contact() {
  const hasPlaceholders =
    isPlaceholder(siteConfig.email) || siteConfig.socials.some((s) => isPlaceholder(s.href));

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 -z-10 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      />

      <SectionHeading
        id="contact"
        index="06"
        eyebrow="contact"
        title={
          <>
            Have a project or role in mind? <span className="text-accent">Let&apos;s talk.</span>
          </>
        }
        description="Whether you're hiring for a frontend role or need a reliable developer for your next product, I'd love to hear about it."
      />

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <Reveal className="flex flex-col gap-4">
          {hasPlaceholders ? <PlaceholderNote file="src/data/site.ts (email & socials)" /> : null}

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Mail className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[0.7rem] text-subtle">email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block truncate font-medium transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <CopyEmail email={siteConfig.email} />
          </div>

          {siteConfig.location ? (
            <div className="flex items-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft">
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <MapPin className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[0.7rem] text-subtle">based in</p>
                <p className="font-medium">{siteConfig.location}</p>
              </div>
            </div>
          ) : null}

          <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-soft">
            <p className="font-mono text-[0.7rem] text-subtle">elsewhere</p>
            <p className="mt-1 mb-4 text-sm text-muted">Profiles, code and client reviews.</p>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
