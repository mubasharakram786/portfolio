import type { TechKey } from "./tech";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  summary: string;
  responsibilities: string[];
  tech: TechKey[];
  /** Flags the entry as template content (shown as a dev-only notice). Remove once edited. */
  placeholder?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "SeeBiz (Pvt.) Ltd.",
    period: "Mar 2021 — Present",
    location: "Lahore, Pakistan",
    type: "Full-time",
    summary:
      "Building frontend features across SeeBiz's B2B marketplace and its suite of business applications — inventory, expense management, CRM, HRM and AI products such as Krub AI and Turnfeat AI.",
    responsibilities: [
      "Develop and maintain frontend features for a B2B marketplace using React.js, JavaScript, HTML5 and CSS3.",
      "Build responsive, reusable UI components for buyer and seller dashboards, landing pages and vendor timelines.",
      "Contribute to an Inventory Management System, implementing item, warehouse, sales, purchasing, invoicing, customer/vendor and reporting workflows.",
      "Translate UI/UX designs and business requirements into consistent, accessible and user-friendly interfaces.",
      "Integrate RESTful APIs to support application workflows, data presentation and frontend–backend communication.",
      "Develop interfaces for Expense Management, Marketplace CRM, HRM and AI products including Krub AI and Turnfeat AI.",
      "Collaborate with cross-functional teams to deliver features, troubleshoot UI issues and improve usability.",
    ],
    tech: ["react", "javascript", "html", "css", "scss", "tailwind"],
  },
  {
    role: "Associate Software Engineer",
    company: "Zomerce",
    period: "Feb 2020 — Aug 2020",
    location: "Lahore, Pakistan",
    type: "Full-time",
    summary: "Built responsive web interfaces and prepared visual assets for the web.",
    responsibilities: [
      "Developed responsive web interfaces using HTML5, CSS3 and JavaScript.",
      "Converted design concepts into functional web pages while keeping layouts consistent across screen sizes.",
      "Prepared and optimized visual assets in Adobe Photoshop for web interfaces.",
    ],
    tech: ["html", "css", "javascript"],
  },
];
