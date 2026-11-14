export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  description?: string;
  /** Flags the entry as template content (shown as a dev-only notice). Remove once edited. */
  placeholder?: boolean;
}

export const education: EducationItem[] = [
  {
    degree: "BS (Hons.) Information Technology",
    institution: "University of Education",
    period: "2014 — 2018",
    location: "Township, Lahore",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Government College of Science",
    period: "2012 — 2014",
    location: "Lahore",
  },
];
