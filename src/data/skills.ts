import type { TechKey } from "./tech";

export interface SkillCategory {
  title: string;
  description: string;
  items: TechKey[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Semantic, accessible markup and modern, type-safe JavaScript.",
    items: ["html", "css", "scss", "javascript", "typescript"],
  },
  {
    title: "Frameworks & Libraries",
    description: "Component-driven apps, from SPAs to server-rendered sites.",
    items: ["react", "nextjs", "angular"],
  },
  {
    title: "UI & Styling",
    description: "Design systems and utility-first styling that stay consistent.",
    items: ["tailwind", "bootstrap", "mui", "antd"],
  },
  {
    title: "State Management",
    description: "Predictable data flow for complex, data-heavy interfaces.",
    items: ["redux", "context"],
  },
  {
    title: "Backend Development",
    description: "Full MERN stack — REST APIs and data modelling when needed.",
    items: ["node", "express", "mongodb"],
  },
  {
    // TODO: adjust this list to match the tools you actually use day to day.
    title: "Development Tools",
    description: "Version control, debugging and a smooth hand-off with design.",
    items: ["git", "github", "npm", "vscode", "postman", "figma"],
  },
];
