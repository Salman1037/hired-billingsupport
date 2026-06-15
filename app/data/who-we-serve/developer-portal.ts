import { SolutionData } from '../solutionTypes';

export const developerPortal: SolutionData = {
  title: 'Developer Partners',
  subtitle: 'Healthcare workflow integration and operational context for healthcare software teams',
  description: 'Hired Billing Support partners with healthcare software developers, EHR vendors, billing platforms, and healthtech teams to bridge the gap between technical systems and real-world practice operations — providing workflow intelligence, implementation support, and operational context that makes healthcare products work in practice.',
  hero: {
    eyebrow: 'Partners · Developers',
    title: 'Healthcare software works in demos. It has to work in the practice\'s actual billing system, payer portal, EHR workflow, and denial queue.',
    subtitle: 'Technical execution and operational execution are different disciplines. You build the system. We understand how the system needs to behave inside a real healthcare practice — with the payer rules, documentation requirements, coding standards, authorization workflows, and AR management processes that clinical software has to navigate every day.',
    description: 'Hired Billing Support partners with healthcare developers, SaaS teams, and healthtech builders to bridge the gap between what technology is designed to do and what healthcare operations actually require — providing workflow intelligence, implementation support, and operational context that makes your product work in the field, not just in the sandbox.',
  },
  sections: {
    pain: {
      title: 'The healthcare technology execution gap',
      description: 'Healthcare software that does not match the actual workflow creates more work for the people it was built to help.',
      monologue: [
        'A billing automation platform is built to streamline claim submission. In a live healthcare practice, claim submission depends on eligibility verification that happened two days earlier, prior authorization documentation that lives in a separate portal, a coding review that has payer-specific rules no two practices apply the same way, and a charge entry process that feeds from an EHR that was configured by a different vendor six years ago. The automation works perfectly in the test environment. In production, it works 70 percent of the time — and the other 30 percent creates exceptions that take longer to resolve than the manual process the software was meant to replace.',
        'Healthcare software fails operationally not because of bad engineering. It fails because healthcare operations are contextually complex in ways that are difficult to fully understand without working inside them. Payer rules that change quarterly. Authorization processes that vary by payer and specialty. Documentation requirements that differ by visit type. Denial reasons that require human judgment to interpret correctly.',
        '"Automation only works when the underlying process is clearly understood. And the underlying process in healthcare — the real one, as it operates inside a specific specialty, with specific payers, in a specific EHR — is almost always more complex than the documented version that technical specs are built from."',
        'This is not a technology problem. It is an operational context problem. And the solution is a partnership with a team that works inside healthcare operations every day and can translate that operational reality into the workflow intelligence, implementation guidance, and product feedback that helps technical teams build products that work in the field.',
      ],
      ledger: [
        {
          num: '01',
          title: 'EHR and billing workflows are messier in production than in documentation',
          description: 'Healthcare APIs and integrations are designed against documented workflows. Real healthcare workflows have exceptions, workarounds, payer-specific variations, and practice-specific configurations that documented workflows do not capture. Products built against the documented version create friction in the actual-use version — and that friction lands on the clinical and administrative staff who are already at capacity.',
        },
        {
          num: '02',
          title: 'Automation built on incorrect process assumptions creates more work, not less',
          description: 'A claim submission automation that does not account for payer-specific prior authorization documentation requirements will automate the failure alongside the success — creating a denial queue alongside the successfully processed claims. Understanding the process well enough to automate it correctly requires operational context that engineering teams do not always have and cannot always obtain from documentation alone.',
        },
        {
          num: '03',
          title: 'Implementation support for healthcare products requires both technical and operational knowledge',
          description: 'Onboarding a healthcare practice onto a new billing platform or EHR requires technical configuration and operational workflow alignment simultaneously. When implementation teams are technically competent but operationally unfamiliar with healthcare billing — payer enrollment status, existing credentialing setup, AR aging, denial history — the technical implementation works and the operational disruption creates a difficult client relationship.',
        },
        {
          num: '04',
          title: 'Product feedback from technical users misses the operational reality',
          description: 'Technical users can describe what the software does and does not do. They cannot always describe whether what it does aligns with what healthcare operations actually require. Operational partners who work inside healthcare workflows daily can provide the practice-side feedback that shapes products from a user experience perspective, not just a technical integration perspective.',
        },
        {
          num: '05',
          title: 'Healthcare clients need operational support during and after technical implementation',
          description: 'A practice that adopts a new billing platform still needs its claims to submit correctly, its AR to be followed up on, and its denials to be managed — during the transition, when the previous workflow has been disrupted and the new workflow is not yet running at full capacity. Implementation support that covers only the technical migration leaves clients operationally exposed at the highest-risk moment of the transition.',
        },
      ],
    },
    solution: {
      title: 'The healthcare operations layer that bridges your technical system and real-world practice workflow.',
      description: 'Hired Billing Support partners with healthcare technology teams to provide the operational context, workflow intelligence, implementation support, and client operations coverage that makes healthcare software products work in the field — not just in the integration environment.',
      process: [
        {
          num: '01',
          title: 'Healthcare workflow consulting and process mapping',
          description: 'Revenue cycle workflows, billing process maps, authorization workflows, denial taxonomies, payer-specific rule libraries, and EHR integration touchpoint documentation — operational context built from working inside healthcare practices, not from reading specifications.',
        },
        {
          num: '02',
          title: 'Operational implementation support',
          description: 'Technical implementation paired with operational workflow alignment — credential verification, billing system configuration review, payer enrollment status assessment, and workflow mapping that ensures the technical deployment matches the practice\'s actual operational requirements.',
        },
        {
          num: '03',
          title: 'Healthcare client operations support during transitions',
          description: 'When practices are transitioning to new platforms or onboarding new systems, operational support — billing continuity, AR management, denial handling — maintained through the transition so clients do not experience operational disruption alongside technical change.',
        },
        {
          num: '04',
          title: 'Product workflow feedback from operational experience',
          description: 'Real-world operational feedback on how your product performs inside healthcare workflows — where the friction is, where the automation assumptions do not match practice behavior, and where workflow redesign would reduce user effort rather than increasing it.',
        },
        {
          num: '05',
          title: 'Automation opportunity identification',
          description: 'Healthcare operations workflows assessed for genuine automation opportunities — steps where the process is repetitive, rule-based, and clearly defined enough to automate without operational context loss — versus steps where human judgment is irreplaceable and automation creates more exceptions than it eliminates.',
        },
        {
          num: '06',
          title: 'Ongoing operational partnership as your product evolves',
          description: 'As your product roadmap develops, an operational partner who understands the healthcare workflow reality ensures that product decisions are tested against real-world operational constraints — not just technical feasibility.',
        },
      ],
    },
    services: {
      title: 'Developer partnership services',
      description: 'Operational context, implementation support, and workflow intelligence for healthcare technology teams.',
      items: [
        {
          num: '01',
          title: 'RCM Process Mapping',
          description: 'End-to-end revenue cycle workflow documented with decision points, payer-specific variations, and exception paths — the operational architecture behind billing software integration.',
        },
        {
          num: '02',
          title: 'Billing Workflow Architecture Review',
          description: 'Technical billing workflow reviewed against actual payer requirements, coding standards, and documentation rules — identifying gaps between the system\'s assumptions and operational reality.',
        },
        {
          num: '03',
          title: 'Operational Implementation Support',
          description: 'Healthcare client onboarding supported from the operational side — practice billing assessment, workflow mapping, and operational continuity maintained through technical transitions.',
        },
        {
          num: '04',
          title: 'Payer Rule Library',
          description: 'Payer-specific rules, documentation requirements, authorization criteria, and billing variations documented from operational experience — the context that technical specifications rarely capture completely.',
        },
        {
          num: '05',
          title: 'EHR Workflow Integration Support',
          description: 'EHR-to-billing workflow touchpoints mapped and tested against operational requirements — identifying integration friction before it becomes client-facing disruption.',
        },
        {
          num: '06',
          title: 'Denial Taxonomy & Root Cause Mapping',
          description: 'Denial reason code taxonomy built from operational experience — mapping technical denial codes to the specific process failures that produce them, enabling automation that targets root causes, not just symptoms.',
        },
        {
          num: '07',
          title: 'Authorization Workflow Modeling',
          description: 'Prior authorization workflows documented by payer and specialty — the process maps, criteria libraries, and exception paths that authorization automation needs to handle correctly in production.',
        },
        {
          num: '08',
          title: 'Automation Opportunity Assessment',
          description: 'Healthcare workflows assessed for genuine automation opportunities — where automation reduces friction versus where it creates exceptions that require more human intervention than the manual process did.',
        },
        {
          num: '09',
          title: 'Product Workflow Feedback',
          description: 'Operational experience with your product in real healthcare environments translated into structured product feedback — friction points, workflow misalignments, and improvement opportunities from the practice operations perspective.',
        },
        {
          num: '10',
          title: 'Healthcare Operations QA',
          description: 'Operational quality assurance for healthcare product releases — testing against real workflow scenarios, payer-specific edge cases, and documentation requirements that purely technical QA processes do not always cover.',
        },
      ],
    },
    aiHuman: {
      title: 'The AI + human advantage',
      description: 'Automation handles the scale. Specialists handle the execution.',
      machine: [
        'Workflow pattern detection across healthcare billing environments',
        'Payer rule change tracking and operational impact assessment',
        'Denial root cause pattern identification across payers and specialties',
        'Authorization requirement monitoring by payer and procedure type',
        'Automation opportunity scoring for healthcare workflow steps',
        'Operational QA test case generation from real-world exception patterns',
      ],
      human: [
        'Workflow consulting and operational process documentation',
        'Payer-specific rule interpretation and exception judgment',
        'Healthcare client implementation support and operational continuity',
        'Product workflow feedback from operational experience',
        'Automation boundary assessment — where human judgment is irreplaceable',
        'Developer communication translating operational context into technical requirements',
      ],
    },
    results: {
      title: 'Healthcare software that works in the practice — not just in the integration test.',
      description: 'What changes for your product and clients',
      outcomes: [
        {
          icon: '◎',
          title: 'Product friction reduced in real-world deployment',
          description: 'Workflow gaps between technical design and operational reality identified before they reach production — fewer exceptions, fewer workarounds, less user friction.',
        },
        {
          icon: '✓',
          title: 'Automation built on accurate process assumptions',
          description: 'Automation targets the actual workflow steps that are genuinely repetitive and rule-based — not the documented version that real practice deviates from daily.',
        },
        {
          icon: '$',
          title: 'Healthcare client implementations protected operationally',
          description: 'Technical transitions supported operationally — clients maintain billing continuity, AR management, and denial handling while the technical migration proceeds.',
        },
        {
          icon: '→',
          title: 'Product roadmap informed by operational reality',
          description: 'Structured product feedback from an operations team working inside real healthcare workflows — not just technical user reports but operational context that shapes the right product decisions.',
        },
        {
          icon: '⚡',
          title: 'Faster time to operational effectiveness for new clients',
          description: 'Healthcare clients onboarded with operational support alongside technical implementation — reaching full operational effectiveness faster than technical-only deployments allow.',
        },
        {
          icon: '↓',
          title: 'Implementation support burden reduced',
          description: 'Operational context provided to implementation teams before deployment — fewer surprises in production, fewer support escalations, and less time spent debugging workflow issues that were predictable from the operational side.',
        },
      ],
    },
    compare: {
      title: 'Technical excellence without operational context produces excellent software that does not work the way it should in practice.',
      description: 'Why healthcare technology needs operational context',
      rows: [
        {
          label: 'Workflow documentation quality',
          hbs: 'Operational reality — exceptions included',
          other: 'Formal specification — idealized',
        },
        {
          label: 'Implementation support',
          hbs: 'Technical + operational simultaneously',
          other: 'Technical only — operational gap remains',
        },
        {
          label: 'Automation accuracy',
          hbs: 'Built on actual workflow behavior',
          other: 'Built on documented workflow assumptions',
        },
        {
          label: 'Product feedback source',
          hbs: 'Operational experience in production',
          other: 'Technical user reports only',
        },
        {
          label: 'Client transition risk',
          hbs: 'Operational continuity maintained',
          other: 'Technical migration + operational disruption',
        },
        {
          label: 'Payer rule coverage',
          hbs: '200+ payer variations documented',
          other: 'Standard rules only',
        },
      ],
    },
  },
};
