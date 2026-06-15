// app/data/solutions/medical-auditing.ts

import { SolutionData } from '../solutionTypes';

export const medicalAuditing: SolutionData = {
  title: 'Medical Auditing',
  subtitle: 'Proactive billing audits that find what nobody had time to find.',
  description:
    'Hired Billing Support conducts structured medical billing and coding audits — identifying revenue leakage, documentation risk, coding errors, and compliance exposure — and delivering findings your leadership team can actually act on.',
  hero: {
    eyebrow: 'Medical Auditing',
    title: 'Your billing is performing well enough that nobody is looking closely.<br><em>That is exactly when you need someone to look closely.</em>',
    subtitle: 'Revenue leakage, coding errors, documentation gaps, and payer compliance risks do not announce themselves. They build quietly — until a payer audit, a denial pattern, or a reimbursement shortfall makes them impossible to ignore.',
    description:
      'Hired Billing Support conducts proactive medical billing and coding audits — finding the issues your internal team does not have time to find, and delivering the root-cause analysis your leadership needs to act.',
  },
  sections: {
    pain: {
      title: 'Most revenue leakage is invisible <em>until someone is specifically looking for it.</em>',
      description: 'What is actually happening in your billing',
      monologue: [
        'Your billing team submits claims. Payers adjudicate them. Payments come in. Reports show collection rates. Everything looks manageable — until someone runs a detailed audit and finds that 12 percent of claims reviewed had avoidable coding errors, $18,000 in underpayments were accepted without review, and three providers had a documentation pattern that creates compliance risk.',
        'None of that showed up in a report. None of it was visible from the dashboard. It was only visible when someone had uninterrupted time to look through the actual claims, compare codes to documentation, check payments against contracts, and trace denial patterns back to their source.',
        '"Your team is not missing things because they are not paying attention. They are missing things because looking closely takes time — and time is the one resource nobody in a busy billing operation has enough of."',
        'A proactive audit is not about finding fault. It is about finding what nobody had time to find, documenting what needs to change, and giving your leadership the information they need to make those changes before payers or external auditors do it for them.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Revenue leakage the practice does not know about',
          description:
            'Undercoding, missed charges, documentation gaps that prevent full reimbursement, and underpayments accepted without review — these are not visible in summary reports. They are only visible in detailed claim-level analysis.',
        },
        {
          num: '02',
          title: 'Coding errors repeating without being caught',
          description:
            'When the same coder makes the same mistake across 30 claims per month, that error compounds silently until someone reviews the pattern. Without an audit function, there is no systematic review that catches patterns before they accumulate into significant loss.',
        },
        {
          num: '03',
          title: 'Documentation that would not survive an external audit',
          description:
            'The documentation in your charts does not need to be wrong to create audit risk. It needs to be incomplete, inconsistent, or misaligned with the billed code. Providers do not always know where those gaps are — and billing teams do not always have time to find them.',
        },
        {
          num: '04',
          title: 'Underpayments accepted as final without review',
          description:
            'Payers routinely pay less than contracted rates — on individual claims, on specific procedure codes, or systematically across a payer relationship. Without someone comparing payments to contracts, those underpayments become permanent write-offs.',
        },
        {
          num: '05',
          title: 'Denial patterns without root cause analysis',
          description:
            'Reports show denial rates. They rarely show why denial rates are what they are, which providers or code types are driving them, and what upstream workflow change would reduce them. Audits do.',
        },
        {
          num: '06',
          title: 'Payer audit risk building without visibility',
          description:
            'If your practice were selected for a payer audit tomorrow, would you be confident in your documentation, your coding accuracy, and your billing compliance? Most practices are not sure — because nobody has looked at it recently from the auditor\'s perspective.',
        },
      ],
    },
    solution: {
      title: 'We look at your billing the way an auditor would <em>— before they do.</em>',
      description:
        'Hired Billing Support conducts structured medical billing and coding audits — identifying revenue leakage, documentation risk, coding errors, and compliance exposure — and delivering findings your leadership team can actually act on.',
      process: [
        {
          num: '01',
          title: 'Scope definition and audit planning',
          description:
            'We work with your leadership to define the audit scope — which providers, which code types, which payers, which time period. Every audit is planned to answer specific questions about your billing performance.',
        },
        {
          num: '02',
          title: 'Claim-level review against documentation',
          description:
            'We pull claims and compare billed codes, modifiers, and diagnosis linkage against clinical documentation. We are looking for what the payer would see — not just what your team submitted.',
        },
        {
          num: '03',
          title: 'Payment accuracy review',
          description:
            'Payments received compared against contracted rates for the relevant payer and procedure. Underpayments identified, documented, and flagged for recovery or dispute.',
        },
        {
          num: '04',
          title: 'Denial pattern analysis',
          description:
            'Denial history reviewed for patterns — by reason code, by payer, by provider, by code type. Root causes identified and documented so leadership can make targeted corrections, not just address individual claims.',
        },
        {
          num: '05',
          title: 'Compliance risk assessment',
          description:
            'Coding patterns reviewed for upcoding, undercoding, unbundling, and documentation misalignment that creates compliance exposure. Risk documented with severity rating and recommended action.',
        },
        {
          num: '06',
          title: 'Findings report with actionable recommendations',
          description:
            'Audit findings delivered in a clear, structured report — not just a list of errors. Every finding includes the root cause, the revenue impact, and the specific workflow change that would prevent recurrence.',
        },
      ],
    },
    services: {
      title: 'Every layer of billing and coding risk. <em>Reviewed and reported.</em>',
      description:
        'We do not specialize in one piece of the audit puzzle. We own the full workflow so nothing falls in the gap between departments or responsibilities.',
      items: [
        {
          num: '01',
          title: 'Medical Billing Audit',
          description:
            'Claim accuracy, billing process compliance, payer-specific rules, and reimbursement patterns reviewed across a defined claim sample.',
        },
        {
          num: '02',
          title: 'Coding Accuracy Audit',
          description:
            'ICD-10, CPT, HCPCS, and modifier accuracy reviewed against clinical documentation — with error rate calculation and pattern analysis by provider and code type.',
        },
        {
          num: '03',
          title: 'Chart / Documentation Audit',
          description:
            'Clinical documentation reviewed against coding and billing standards to identify gaps that would not survive a payer medical necessity review or external audit.',
        },
        {
          num: '04',
          title: 'E/M Level Audit',
          description:
            'Evaluation and management code levels reviewed against MDM and time documentation criteria to verify appropriate level selection and reduce over- and under-coding risk.',
        },
        {
          num: '05',
          title: 'Underpayment Review',
          description:
            'Payments received compared against contracted fee schedules. Underpayments identified by payer, code, and dollar amount — with dispute documentation prepared.',
        },
        {
          num: '06',
          title: 'Denial Pattern Analysis',
          description:
            'Denial history reviewed for root-cause patterns by reason code, payer, and provider — with specific upstream fixes identified for each denial category.',
        },
        {
          num: '07',
          title: 'Compliance Risk Assessment',
          description:
            'Billing and coding patterns reviewed for upcoding, unbundling, and documentation misalignment — risk rated by severity with recommended corrective action.',
        },
        {
          num: '08',
          title: 'Revenue Leakage Analysis',
          description:
            'Missed charges, undercoding, documentation gaps, underpayments, and write-off patterns reviewed together to quantify total revenue leakage and identify priority recovery opportunities.',
        },
        {
          num: '09',
          title: 'Payer Audit Readiness Review',
          description:
            'Practice documentation and billing reviewed from the perspective of a payer audit — identifying vulnerabilities before an external auditor does.',
        },
        {
          num: '10',
          title: 'Audit Findings Report',
          description:
            'Structured findings report with root cause analysis, revenue impact estimates, risk ratings, and specific, actionable recommendations for each identified issue.',
        },
      ],
    },
    aiHuman: {
      title: 'Technology handles the repetitive. <em>People handle the judgment.</em>',
      description:
        'Audit is not purely manual work. But it is also not something that can be handed entirely to automation. The practices that win are the ones that use both correctly.',
      machine: [
        'Claim sample selection and audit queue organization',
        'Code-to-documentation alignment pattern detection',
        'Payment-to-contract variance flagging across payer EOBs',
        'Denial pattern categorization and frequency analysis',
        'Audit findings compilation and report generation',
        'Revenue leakage quantification and trend tracking',
      ],
      human: [
        'Clinical documentation interpretation and medical necessity review',
        'Compliance risk assessment and severity rating',
        'Root cause analysis for denial patterns and coding errors',
        'Underpayment dispute preparation and payer communication',
        'Findings report writing with actionable recommendations',
        'Leadership communication and audit findings presentation',
      ],
    },
    results: {
      title: 'Clarity on what is actually happening in your billing and revenue cycle.',
      description: 'What audits deliver',
      outcomes: [
        {
          icon: '$',
          title: 'Revenue leakage quantified and recoverable',
          description:
            'Underpayments, undercoding, and missed charges identified with dollar estimates — giving leadership specific recovery targets, not vague impressions.',
        },
        {
          icon: '↓',
          title: 'Denial root causes documented and addressable',
          description:
            'Not just denial rates — the specific reasons, providers, and workflow gaps driving them, with targeted fixes for each.',
        },
        {
          icon: '◎',
          title: 'Compliance risk assessed before it escalates',
          description:
            'Coding patterns that create audit risk identified and rated — so the practice can address them on its own terms, not a payer\'s.',
        },
        {
          icon: '✓',
          title: 'Documentation audit-ready',
          description:
            'Gaps between clinical documentation and billed services identified and corrected before a payer medical review finds them.',
        },
        {
          icon: '→',
          title: 'Actionable findings, not just error lists',
          description:
            'Every finding delivered with root cause, revenue impact, and specific workflow change. Leadership gets a roadmap, not a problem statement.',
        },
        {
          icon: '↑',
          title: 'Billing performance that improves after each audit',
          description:
            'Audits build on each other — each review produces improvements that the next review measures, creating a cycle of documented progress.',
        },
      ],
    },
    compare: {
      title: 'Auditing yourself costs far less <em>than being audited by someone else.</em>',
      description:
        'A payer audit or compliance review is far more expensive — in time, risk, and potential recoupment — than a proactive internal audit that finds and corrects issues first.',
      rows: [
        {
          label: 'When issues are found',
          hbs: 'Before payers see them',
          other: 'During or after payer audit',
        },
        {
          label: 'Cost of correction',
          hbs: 'Workflow change',
          other: 'Recoupment + legal exposure',
        },
        {
          label: 'Revenue leakage visibility',
          hbs: 'Quantified and actionable',
          other: 'Unknown until too late',
        },
        {
          label: 'Underpayment recovery',
          hbs: 'Identified and disputed',
          other: 'Accepted as final',
        },
        {
          label: 'Denial root causes',
          hbs: 'Documented with fixes',
          other: 'Addressed claim by claim',
        },
        {
          label: 'Compliance posture',
          hbs: 'Monitored and improved',
          other: 'Unknown until reviewed externally',
        },
      ],
    },
  },
};
