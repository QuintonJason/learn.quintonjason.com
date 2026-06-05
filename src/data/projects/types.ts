export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  considerations: string[];
  milestones: Array<{
    title: string;
    description: string;
  }>;
  requirements: Array<{
    title: string;
    items: string[];
  }>;
  submission: string[];
  grading: string[];
  rubric: Array<{
    category: string;
    strong: string;
    meets: string;
    needsWork: string;
  }>;
  models?: Array<{
    title: string;
    label: string;
    description: string;
    structure: string[];
    notes: string[];
  }>;
  examples?: Array<{
    title: string;
    items: string[];
  }>;
  starterKit: {
    description: string;
    files: Array<{
      label: string;
      href: string;
    }>;
  };
  supportingLessons: Array<{
    title: string;
    href: string;
  }>;
};
