import type { TechKey } from "./tech";

export type CoverVariant = "landing" | "marketplace" | "dashboard";

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: TechKey[];
  /** Public URL — the "View Project" button only renders when this is set. */
  url?: string;
  /** Optional screenshot in /public, e.g. "/images/projects/turnfeat.png" (16:10 works best). */
  image?: string;
  /** Accent colour for the generated cover shown when no image is set. */
  accent: string;
  cover: CoverVariant;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "turnfeat",
    name: "Turnfeat",
    category: "Web Application",
    description:
      "A project and freelancer collaboration platform. I built the project dashboards, project creation, task management, freelancer profiles, project timelines and milestone tracking, plus interactive components for task assignment and progress tracking.",
    tech: ["react", "tailwind"],
    url: "https://turnfeat.ai",
    image: "/turnfeat.png",
    accent: "#0f766e",
    cover: "landing",
    featured: true,
  },
  {
    slug: "seebiz-marketplace",
    name: "SeeBiz Marketplace",
    category: "B2B Marketplace",
    description:
      "Key modules of a B2B marketplace: landing pages, buyer and seller dashboards and the vendor timeline, built from reusable, responsive UI components that keep the experience consistent across marketplace workflows.",
    tech: ["react", "javascript", "html", "css"],
    url: "https://seebiz.com/",
    image: "/marketplace.png",
    accent: "#2563eb",
    cover: "marketplace",
  },
  {
    slug: "inventory-management",
    name: "Inventory Management System",
    category: "Business Dashboard",
    description:
      "Interfaces for dashboards, item and warehouse management, sales, purchasing, invoicing, customer/vendor management and reports, with responsive layouts and reusable components for data-heavy operational screens.",
    tech: ["react", "javascript", "html", "css", "scss"],
    url: "https://inventory.seebiz.com/",
    image: "/inventory.png",
    accent: "#c2410c",
    cover: "dashboard",
  },
  {
    slug: "expense-management",
    name: "Expense Management System",
    category: "Finance Dashboard",
    description:
      "Admin and Employee interfaces covering expense management, trip management, reports and approval workflows, with responsive screens for expense submissions, trip tracking and approvals.",
    tech: ["react", "html", "css", "scss"],
    url: "https://expense.seebiz.com/",
    image: "/expense.png",
    accent: "#7c3aed",
    cover: "dashboard",
  },
  {
    slug: "books-management",
    name: "Books Management System",
    category: "Admin Panel",
    description:
      "A catalogue management system for books with listing, search and CRUD workflows, built on Ant Design's data-dense component library.",
    tech: ["react", "antd"],
    url: "https://books.seebiz.com/",
    image: "/books.png",
    accent: "#1677ff",
    cover: "dashboard",
  },
  {
    slug: "hrm-system",
    name: "HRM System",
    category: "HR Platform",
    description:
      "A human resource management interface for employee records and HR workflows, built with React.js and Material UI for a clean, consistent admin experience.",
    tech: ["react", "mui"],
    url: "https://seeforce.seebiz.cloud/",
    image: "/HRM.png",
    accent: "#0891b2",
    cover: "dashboard",
  },
  {
    slug: "krub",
    name: "Krub",
    category: "Website",
    description:
      "A responsive website built with React.js, hand-crafted HTML and CSS — pixel-faithful layouts that adapt cleanly from mobile to desktop.",
    tech: ["react", "html", "css"],
    url: "https://krub.ai",
    image: "/krub.png",
    accent: "#be185d",
    cover: "landing",
  },
  {
    slug: "klarity-kratom",
    name: "Klarity Kratom",
    category: "E-commerce Website",
    description:
      "An online store for an Oregon-based botanical brand, operating since 2015, that sells all-natural kratom capsules, powders and shots. I built the responsive WordPress storefront with custom HTML and CSS layouts and jQuery-powered interactions across product, catalogue and brand pages.",
    tech: ["html", "css", "jquery", "wordpress"],
    url: "https://klaritykratom.com/",
    image: "/klarity-kratom.png",
    accent: "#15803d",
    cover: "landing",
  },
];
