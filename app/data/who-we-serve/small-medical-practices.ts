import { SolutionData } from '@/app/data/solutionTypes';

export const smallMedicalPractices: SolutionData = {
  title: 'Small Medical Practice Support',
  subtitle: 'Scale your practice operations without adding proportional overhead.',
  description: 'For small medical practices managing complex workflows, we provide dedicated billing, collections, and operations support.',

  hero: {
    eyebrow: 'Who We Serve · Small Medical Practices',
    title: 'You are seeing more patients than your backend can support.',
    subtitle: 'Every billing and ops hire adds overhead. We add expertise without payroll.',
    description: 'Most small medical practices are stuck between doing everything themselves and hiring staff they do not yet need. Billing work piles up. AR ages. Prior authorizations get missed. Claims are not submitted cleanly. And the cycle continues — clinical work compounds billing delays, which compounds the practice\'s cash flow problem. Hired Billing Support provides dedicated RCM, AR, collections, and operations teams — so you get the expertise of a large practice without the overhead.',
  },

  sections: {
    pain: {
      title: 'The Revenue Leak Every Growing Practice Faces',
      description: 'The operational reality of managing more volume than your infrastructure supports.',
      monologue: [
        'You started seeing more patients. Revenue started growing. And then the infrastructure that worked for 10 patients per week stopped working for 30. Billing backlogs grew. AR aged. Prior authorizations got missed. Insurance payments came slower. And meanwhile, the clinical work kept coming — so you could not even stop to fix the broken billing processes.',
        'Small practices often hire billing staff reactively — after the problem becomes critical. By then, AR is aged, denials are piling up, and the new hire is already playing catch-up instead of getting ahead of problems.',
        '"A small practice losing 10% of its revenue to billing inefficiency is losing more than the cost of a dedicated billing manager — and most practices do not even realize it."',
        'The math is relentless. A 5-provider practice seeing 80 patients per week in multiple payers generates 400+ billing events per week. When charge entry is manual, prior auth is reactive, and AR follow-up happens whenever someone has time, the practice is not losing 10% — it is losing 15-20%. That is the entire profit margin. That is the cash flow that would fund your next hire, your next location, your next investment in clinical care.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Denials are piling up — but nobody has time to follow up',
          description: 'Denials arrive. They get reviewed. Sometimes. And then they sit in a queue because billing staff is already handling charge entry, eligibility verification, and patient payment collections. By the time follow-up happens, the payer deadline has passed or the information is harder to gather. The claim gets written off.',
        },
        {
          num: '02',
          title: 'Revenue cycle processes are undocumented and inconsistent',
          description: 'Each billing staff member does things slightly differently. Some enter charges daily. Some batch them. Prior auth requests get handled differently by different people. The result is workflow gaps, missed deadlines, and payment delays that look like random variation but are actually systematic.',
        },
        {
          num: '03',
          title: 'Prior authorizations are reactive instead of proactive',
          description: 'Your schedulers request prior auths after the patient is already scheduled — or sometimes after they are in the chair. Payers take 5-7 days to respond. Some get denied or require resubmission. The appointment gets cancelled or the claim gets denied. The revenue is lost.',
        },
        {
          num: '04',
          title: 'Collections are not happening because nobody has the information',
          description: 'Patient balance information is scattered across different systems. Statements are not going out consistently. Patients who owe money never get reminded. And staff do not have the information or authority to collect at the point of service anyway. The result is lost revenue that was earned but never collected.',
        },
        {
          num: '05',
          title: 'You are hiring before you understand the real problem',
          description: 'When billing is broken, the instinct is to hire a billing person. But hiring the wrong person — someone who cannot lead process improvement, who does not understand your EHR, who does not have payer management expertise — just adds payroll cost without fixing the underlying problem. Now you are spending $60K per year on someone who is managing symptoms, not solving the disease.',
        },
      ],
    },

    solution: {
      title: 'The Solution',
      description: 'We build the revenue cycle infrastructure small practices need.',
      process: [
        {
          num: '01',
          title: 'We audit and map your current revenue cycle',
          description: 'Complete RCM assessment — claim flow, denial patterns, AR aging, staff workflow, payer mix analysis. We identify the specific gaps costing you the most revenue.',
        },
        {
          num: '02',
          title: 'We establish billing workflows and process standards',
          description: 'Documented charge entry process, prior auth workflow, claim submission standards, denial management protocol. Every billing event follows the same process, so nothing gets lost in individual variation.',
        },
        {
          num: '03',
          title: 'We implement proactive prior authorization management',
          description: 'Prior auths are requested when the appointment is scheduled — or earlier. Payer requirements are understood. Requests are submitted cleanly. Follow-up is systematic. Appointments do not get cancelled because of delayed or denied auth.',
        },
        {
          num: '04',
          title: 'We take ownership of AR management and follow-up',
          description: 'Every claim is tracked. Denials are reviewed within 48 hours. Appeals are submitted. Aged AR is managed systematically. The practice does not have to manage denial follow-up because we are managing it.',
        },
        {
          num: '05',
          title: 'We implement point-of-service collections',
          description: 'Patients are reminded of balances before they leave. Co-pays are collected. Payment plans are offered. Self-pay patients have clear payment terms. The result is higher collection rates and better patient communication.',
        },
        {
          num: '06',
          title: 'We provide weekly billing reporting and transparency',
          description: 'You know exactly how much revenue was earned, how much was billed, how much was collected, what is pending, and where claims are stuck. You can see problems as they emerge, not months after they happened.',
        },
      ],
    },

    services: {
      title: 'Services That Fit Small Practices',
      description: 'Everything your practice needs to optimize revenue cycle without building an in-house team.',
      items: [
        {
          num: '01',
          title: 'Revenue Cycle Audit & Assessment',
          description: 'Complete RCM analysis — claim flow, denial patterns, AR aging, bottlenecks. Identify exactly where revenue is being lost and how to recover it.',
        },
        {
          num: '02',
          title: 'Charge Entry & Claim Submission',
          description: 'Clean, timely charge entry. EHR integration where possible. Claims submitted within 24 hours of service. Denials caught before submission when possible.',
        },
        {
          num: '03',
          title: 'Prior Authorization Management',
          description: 'Proactive prior auth requests. Payer requirement research. Resubmission when requests are denied. Follow-up until approval. Zero delays due to missing auth.',
        },
        {
          num: '04',
          title: 'Denial Management & Appeal',
          description: 'Denial review within 48 hours. Root cause analysis. Appeal submission. Resubmission of corrected claims. Systematic follow-up until resolution.',
        },
        {
          num: '05',
          title: 'Collections & Patient Billing',
          description: 'Point-of-service collection. Patient statements. Aging AR reports. Payment plan management. Proactive patient communication about balances.',
        },
        {
          num: '06',
          title: 'Payer Management & Enrollment',
          description: 'Payer credentialing and maintenance. Fee schedule negotiation support. Appeals and dispute resolution. Enrollment in new payer plans.',
        },
        {
          num: '07',
          title: 'Billing Compliance & Documentation',
          description: 'Charge description reviews. Coding accuracy support. Documentation analysis for billing completeness. Regular compliance audits.',
        },
        {
          num: '08',
          title: 'Weekly RCM Reporting & Business Intelligence',
          description: 'Weekly billing reports. AR aging analysis. Denial trends. Payer mix insights. Revenue optimization recommendations.',
        },
      ],
    },

    aiHuman: {
      title: 'The AI + Human Advantage',
      description: 'Automation handles routine tasks. Judgment handles complex problems.',
      machine: [
        'Charge entry data validation and completeness checking',
        'Prior auth request tracking and reminder system',
        'Denial pattern analysis and trending',
        'AR aging and collections queue management',
        'Claim status monitoring across clearinghouses',
        'Weekly RCM metrics and KPI reporting',
      ],
      human: [
        'Revenue cycle process design and optimization',
        'Denial appeals and complex resubmissions',
        'Payer negotiation and relationship management',
        'Prior auth coordination and problem-solving',
        'Practice communication and strategic planning',
        'Documentation and coding improvement guidance',
      ],
    },

    results: {
      title: 'What Changes',
      description: 'A practice that collects the revenue it earned.',
      outcomes: [
        {
          icon: '↑',
          title: 'Revenue recovery of 5-15%',
          description: 'Most small practices recover $2K-$8K per provider per month in lost revenue through better billing, denial management, and collections.',
        },
        {
          icon: '$',
          title: 'Improved cash flow and AR performance',
          description: 'Claims are submitted cleaner. Denials are fewer. Collections are faster. The result is cash flow that does not depend on staff hiring.',
        },
        {
          icon: '⏱',
          title: 'Reduced administrative burden on staff',
          description: 'Your existing staff is no longer juggling billing work alongside clinical support. They can focus on patient care coordination.',
        },
        {
          icon: '◎',
          title: 'Better visibility into revenue performance',
          description: 'Weekly reporting shows exactly how much revenue you earned, billed, collected. You can see trends and fix problems in real time.',
        },
        {
          icon: '→',
          title: 'Scalable billing infrastructure',
          description: 'As you add providers or volume, the billing operation scales without proportional cost increases. You can grow without being constrained by billing capacity.',
        },
        {
          icon: '✓',
          title: 'Compliance and risk reduction',
          description: 'Systematic billing processes. Regular audits. Documentation reviews. The practice operates with confidence that billing is being done correctly.',
        },
      ],
    },

    compare: {
      title: 'Why Professional RCM Management Matters',
      description: 'Practices that optimize revenue cycle from the start collect significantly more over time.',
      rows: [
        {
          label: 'Denial rate',
          hbs: '3-5% with HBS management',
          other: '8-12% without expertise',
        },
        {
          label: 'Days to cash (average)',
          hbs: '28-35 days with optimization',
          other: '45-60 days with reactive process',
        },
        {
          label: 'Billing staff required',
          hbs: 'Outsourced specialists',
          other: '1-2 full-time billing staff',
        },
        {
          label: 'Prior auth delays',
          hbs: 'Proactive requests pre-appointment',
          other: 'Reactive, often too late',
        },
        {
          label: 'AR visibility',
          hbs: 'Weekly reporting and analysis',
          other: 'Reactive problem discovery',
        },
        {
          label: 'Revenue recovery (first year)',
          hbs: '$24K-$96K per provider',
          other: 'Depends on finding problems yourself',
        },
      ],
    },
  },
};
