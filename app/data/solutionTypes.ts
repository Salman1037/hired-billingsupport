// export interface SolutionData {
//   title: string;
//   subtitle: string;
//   description: string;
//   hero?: {
//     eyebrow: string;
//     title: string;
//     subtitle: string;
//     description: string;
//   };
//   sections?: {
//     pain?: {
//       title: string;
//       description: string;
//       monologue: string[];
//       ledger: { num: string; title: string; description: string }[];
//       ledgerEyebrow?: string;   // NEW: eyebrow for ledger section
//       ledgerHeading?: string;   // NEW: heading for ledger section
//     };
//     solution?: {
//       title: string;
//       description: string;
//       process: { num: string; title: string; description: string }[];
//       eyebrow?: string;         // NEW
//     };
//     services?: {
//       title: string;
//       description: string;
//       items: { num: string; title: string; description: string }[];
//       eyebrow?: string;         // NEW
//     };
//     aiHuman?: {
//       title: string;
//       description: string;
//       machine: string[];
//       human: string[];
//       eyebrow?: string;         // NEW
//     };
//     results?: {
//       title: string;
//       description: string;
//       outcomes: { icon: string; title: string; description: string }[];
//       eyebrow?: string;         // NEW
//     };
//     compare?: {
//       title: string;
//       description: string;
//       rows: { label: string; hbs: string; other: string }[];
//       eyebrow?: string;         // NEW
//     };
//   };
// }
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
    // Add RCM-specific hero data
    card?: {
      title: string;
      stats: Array<{ label: string; value: string; class?: string }>;
      dividerStats: Array<{ num: string; label: string }>;
    };
  };
  sections?: {
    pain?: {
      title: string;
      description: string;
      monologue: string[];
      ledgerEyebrow?: string;
      ledgerHeading?: string;
      ledger: Array<{ num: string; title: string; description: string }>;
    };
    // NEW: Behind the scenes section
    behindTheScenes?: {
      eyebrow: string;
      title: string;
      description: string;
      // Uses same ledger data as pain section
    };
    // NEW: RCM Lifecycle Timeline
    lifecycle?: {
      eyebrow: string;
      items: Array<{ num: string; label: string; sublabel: string; dotClass: string }>;
    };
    solution?: {
      title: string;
      description: string;
      process: Array<{ num: string; title: string; description: string }>;
      eyebrow?: string;
    };
    services?: {
      title: string;
      description: string;
      items: Array<{ num: string; title: string; description: string }>;
      eyebrow?: string;
    };
    // NEW: How We Work section
    howWeWork?: {
      eyebrow: string;
      title: string;
      description: string;
      process: Array<{ num: string; title: string; description: string }>;
    };
    aiHuman?: {
      title: string;
      description: string;
      machine: string[];
      human: string[];
      eyebrow?: string;
      pullQuote?: string;
    };
    results?: {
      title: string;
      description: string;
      outcomes: Array<{ icon: string; title: string; description: string }>;
      eyebrow?: string;
    };
    compare?: {
      title: string;
      description: string;
      rows: Array<{ label: string; hbs: string; other: string }>;
      eyebrow?: string;
    };
    // NEW: Who This Is For section
    targetAudience?: {
      eyebrow: string;
      title: string;
      description: string;
      practiceTypes: Array<{ type: string; description: string }>;
    };
    // NEW: Final CTA section
    finalCta?: {
      eyebrow: string;
      title: string;
      description: string;
      buttons: Array<{ text: string; variant: string }>;
      trustLine: string;
    };
  };
}