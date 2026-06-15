// app/data/solutionTypes.ts

export interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  hero?: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
  };
  sections?: {
    pain?: {
      title: string;
      description: string;
      monologue: string[];
      ledger: { num: string; title: string; description: string }[];
    };
    solution?: {
      title: string;
      description: string;
      process: { num: string; title: string; description: string }[];
    };
    services?: {
      title: string;
      description: string;
      items: { num: string; title: string; description: string }[];
    };
    aiHuman?: {
      title: string;
      description: string;
      machine: string[];
      human: string[];
    };
    results?: {
      title: string;
      description: string;
      outcomes: { icon: string; title: string; description: string }[];
    };
    compare?: {
      title: string;
      description: string;
      rows: { label: string; hbs: string; other: string }[];
    };
  };
}
