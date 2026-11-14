import type { ComponentType } from "react";
import { CodeXml, Workflow } from "lucide-react";
import {
  SiAngular,
  SiAntdesign,
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export interface Tech {
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  /** Brand colour, revealed on hover. Omit for monochrome logos (uses text colour). */
  color?: string;
}

/**
 * Single registry of technologies. Skills, projects and experience entries
 * reference these keys so labels, icons and colours stay consistent.
 */
const registry = {
  html: { label: "HTML5", icon: SiHtml5, color: "#E34F26" },
  css: { label: "CSS3", icon: SiCss, color: "#663399" },
  scss: { label: "SCSS", icon: SiSass, color: "#CC6699" },
  javascript: { label: "JavaScript (ES6+)", icon: SiJavascript, color: "#E8C900" },
  typescript: { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  jquery: { label: "jQuery", icon: SiJquery, color: "#0769AD" },
  wordpress: { label: "WordPress", icon: SiWordpress, color: "#21759B" },
  react: { label: "React.js", icon: SiReact, color: "#22B8DB" },
  nextjs: { label: "Next.js", icon: SiNextdotjs },
  angular: { label: "Angular", icon: SiAngular, color: "#DD0031" },
  tailwind: { label: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  bootstrap: { label: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  mui: { label: "Material UI", icon: SiMui, color: "#007FFF" },
  antd: { label: "Ant Design", icon: SiAntdesign, color: "#1677FF" },
  redux: { label: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  context: { label: "Context API", icon: Workflow, color: "#22B8DB" },
  node: { label: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  express: { label: "Express.js", icon: SiExpress },
  mongodb: { label: "MongoDB", icon: SiMongodb, color: "#47A248" },
  git: { label: "Git", icon: SiGit, color: "#F05032" },
  github: { label: "GitHub", icon: SiGithub },
  npm: { label: "npm", icon: SiNpm, color: "#CB3837" },
  vscode: { label: "VS Code", icon: CodeXml, color: "#007ACC" },
  postman: { label: "Postman", icon: SiPostman, color: "#FF6C37" },
  figma: { label: "Figma", icon: SiFigma, color: "#F24E1E" },
} satisfies Record<string, Tech>;

export type TechKey = keyof typeof registry;

export const tech: Record<TechKey, Tech> = registry;
