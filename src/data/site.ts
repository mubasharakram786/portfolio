/**
 * Global site configuration.
 *
 * Anything marked `TODO` is a placeholder — replace it with your real details
 * before deploying. Placeholders are flagged on screen in development mode only.
 */

export type SocialKey = "github" | "linkedin" | "upwork";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export const siteConfig = {
  name: "Mubashar Akram",
  initials: "MA",
  role: "Senior Frontend Developer",
  title: "Senior Frontend Developer | React.js Developer",
  yearsOfExperience: "5.5+",
  headline: "I build fast, accessible interfaces that scale with the product.",
  intro:
    "Frontend developer with 5.5+ years of experience turning complex requirements into clean, responsive and maintainable web applications — with React.js, Next.js and TypeScript at the core.",
  description:
    "Mubashar Akram — Frontend Developer with 5.5+ years of experience building responsive, scalable web applications with React.js, Next.js, TypeScript and Tailwind CSS.",
  keywords: [
    "Mubashar Akram",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "MERN Stack",
    "Web Developer Portfolio",
  ],
  /** Set NEXT_PUBLIC_SITE_URL in production so canonical / OG URLs are absolute. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  availability: "Open to full-time roles & freelance projects",

  email: "mubashararkam127@gmail.com",
  location: "Lahore, Pakistan",
  // TODO: optional — add a photo to /public/images and set e.g. "/images/profile.jpg".
  profileImage: null as string | null,
  resumeUrl: "/mubashar-akram-cv.pdf" as string | null,

  // To add Upwork later: { key: "upwork", label: "Upwork", href: "https://www.upwork.com/freelancers/..." }
  socials: [
    { key: "github", label: "GitHub", href: "https://github.com/mubasharakram786" },
    { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/mubashar-akram-fontend-developer" },
  ] satisfies SocialLink[],
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = "home" | (typeof navItems)[number]["id"];

/** True while a value still contains one of the template placeholders above. */
export function isPlaceholder(value: string | null | undefined) {
  if (!value) return false;
  return /example\.com|your-username|your-profile|\[.+\]/i.test(value);
}
