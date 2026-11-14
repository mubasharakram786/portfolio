import { navItems, siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-semibold tracking-tight">{siteConfig.name}</p>
          <p className="font-mono text-xs text-muted">
            © <CurrentYear /> · Designed &amp; built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </div>
    </footer>
  );
}
