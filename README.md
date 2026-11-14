# Mubashar Akram — Developer Portfolio

A single-page portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** and **Lucide React**.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (fully static)
```

## Editing your content

All content lives in `src/data/` — you shouldn't need to touch components to update it.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, intro, **email**, **social URLs**, location, profile photo, CV link |
| `about.ts` | About paragraphs and highlights |
| `skills.ts` | Skill categories (icons come from `tech.ts`) |
| `tech.ts` | Technology registry — label, brand icon, brand colour |
| `experience.ts` | Work history timeline |
| `projects.ts` | Project cards — add `url` to show **View Project**, `image` to use a real screenshot |
| `education.ts` | Education entries |

### ⚠️ Placeholders to replace before deploying

Per the brief, no personal details were invented. These are clearly marked `TODO`:

- **`site.ts`** — `email`, the three `socials` URLs, and optionally `location`, `profileImage`, `resumeUrl`
- **`experience.ts`** — every `[bracketed]` value; delete `placeholder: true` when done
- **`education.ts`** — every `[bracketed]` value; delete `placeholder: true` when done
- **`projects.ts`** — descriptions are written from name + stack only; refine them and add `url` / `image`

In `npm run dev`, a dashed amber **"placeholder — edit …"** tag appears on any block that still has template content. It never renders in production.

### Images

- Profile photo: put it in `public/images/profile.jpg` and set `profileImage: "/images/profile.jpg"`.
- Project screenshots: `public/images/projects/<slug>.png` (16:10 works best) and set `image` on the project.
  Without an image, each card shows a generated UI-mockup cover in the project's `accent` colour.

## Contact form

The form validates input and opens the visitor's email app with the message pre-filled (`mailto:`), so it works with zero backend setup.
To deliver messages directly, POST the form values to a route handler (e.g. `src/app/api/contact/route.ts` using Resend) or a service such as Formspree — see the note in `src/components/sections/ContactForm.tsx`.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://mubashar.dev`) so canonical URLs, Open Graph images and the sitemap use your real domain. Deploys as-is to Vercel or any static/Node host.

## Structure

```
src/
  app/          layout (SEO metadata, fonts, theme), page, OG image, icon, sitemap, robots
  data/         all editable content
  hooks/        useActiveSection, useScrolledPast, useMounted
  components/
    layout/     Navbar, ThemeToggle, BackToTop, Footer, providers
    sections/   Hero, About, Skills, Experience, Projects, Education, Contact (+ form)
    ui/         Section, SectionHeading, Reveal/Stagger, Button, TechBadge, ProjectCover, SocialLinks
```
