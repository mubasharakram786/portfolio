import type { ComponentType } from "react";
import { FaGithub, FaLinkedinIn, FaUpwork } from "react-icons/fa6";
import { isPlaceholder, siteConfig, type SocialKey } from "@/data/site";
import { cn } from "@/lib/utils";

export const socialIcons: Record<SocialKey, ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  upwork: FaUpwork,
};

/** Round icon buttons for each configured social profile (unset placeholder URLs are skipped). */
export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {siteConfig.socials
        .filter(({ href }) => !isPlaceholder(href))
        .map(({ key, label, href }) => {
        const Icon = socialIcons[key];
        return (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${siteConfig.name} on ${label}`}
              title={label}
              className="grid size-10 place-items-center rounded-full border border-border bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              <Icon className="size-4" aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
