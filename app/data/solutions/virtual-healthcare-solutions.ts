import { SolutionData } from '@/types/solutions';

export const virtualHealthcareSolutions: SolutionData = {
  title: 'Virtual Healthcare Solutions',
  subtitle: 'Virtual care operations support that works like an extension of your in-house staff.',
  description: 'Hired Billing Support provides virtual healthcare operations support — telehealth coordination, virtual medical assistants, remote scheduling, eligibility verification, EHR task management, and care coordination inside your existing workflow.',
  
  hero: {
    eyebrow: 'Advanced Solutions · Virtual Healthcare',
    title: 'Virtual care works when the workflow behind it works.',
    subtitle: 'Most of the time, the workflow is the problem.',
    description: 'Telehealth adds clinical access. It also adds scheduling complexity, documentation load, eligibility requirements, patient reminders, technical coordination, and follow-up tasks — all of which require the same operational infrastructure as in-person care, managed remotely. Hired Billing Support provides virtual healthcare operations support that works like an extension of your internal team — inside your EHR, inside your workflow, aligned with your providers\' daily schedule and your patients\' expectations.',
  },

  sections: {
    pain: {
      title: 'Where Virtual Care Workflow Breaks',
      description: 'Adding telehealth to a practice adds operational work, not less.',
      monologue: [
        'The vision of virtual care is seamless. A patient logs in. The provider sees them. Documentation happens. Next patient. In practice, what actually happens is a provider starting a video visit with a patient who never received the link, did not complete intake forms, has unverified insurance, and is on a plan that requires prior authorization for the service being provided.',
        'Virtual care creates more messages, more coordination tasks, more follow-up requirements, and more documentation overhead — not less. And it creates all of that in addition to in-person care, which is still happening, still demanding the same staff bandwidth, and still generating its own administrative load.',
        '"Virtual care only works when the workflow behind it is organized — scheduling, reminders, documentation, eligibility, follow-up, and patient coordination all have to move together. When they do not, the provider carries the coordination burden alone."',
        'The problem is not the technology. Most telehealth platforms work adequately. The problem is the administrative infrastructure around the technology — the human and operational layer that ensures every patient is prepared, every visit is covered, every document is in place, and every follow-up task is handled before the provider has to think about it.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Patients arrive to virtual visits unprepared',
          description: 'No intake forms completed. Insurance never verified. Visit link either not received or not tested before the session. The first five minutes of a 20-minute virtual visit become administrative triage — and the provider absorbs the time cost.',
        },
        {
          num: '02',
          title: 'Eligibility for telehealth visits is handled differently than in-person',
          description: 'Many payers have specific coverage requirements for telehealth — modifiers, place-of-service codes, originating site requirements, and coverage limitations that differ from in-person benefits. When eligibility is verified for in-person and assumed to cover virtual, claims fail for reasons that were entirely preventable.',
        },
        {
          num: '03',
          title: 'Providers lose time between visits managing administrative tasks',
          description: 'In-basket messages. Prior authorization requests. Prescription refill coordination. Documentation questions. Scheduling conflicts. These tasks accumulate between virtual visits and get pushed to end-of-day — extending provider time far beyond the scheduled clinical hours.',
        },
        {
          num: '04',
          title: 'Front desk staff manage in-person and virtual simultaneously without enough support',
          description: 'A single front desk team managing in-person check-in, phone calls, scheduling, and virtual care coordination simultaneously is being asked to do the work of two different operational models at the same time. Something always falls behind — usually the less visible virtual tasks.',
        },
        {
          num: '05',
          title: 'Virtual visit follow-up is inconsistent',
          description: 'After-visit summaries, follow-up care reminders, referral coordination, and prescription confirmations require the same follow-through as in-person visits — but they are easier to defer when the patient was never physically in the building. Virtual follow-up gets less attention than it needs.',
        },
        {
          num: '06',
          title: 'Generic VA services do not understand healthcare workflow',
          description: 'A virtual assistant who does not understand clinical context, payer requirements, prior authorization processes, or HIPAA-compliant communication creates as many problems as they solve. Healthcare virtual support requires healthcare-specific knowledge — not general administrative experience.',
        },
      ],
    },

    solution: {
      title: 'The Solution',
      description: 'A virtual operations team that works like an extension of your in-house staff.',
      process: [
        {
          num: '01',
          title: 'Pre-visit preparation for every telehealth appointment',
          description: 'Intake forms sent, eligibility verified for telehealth-specific coverage, visit links distributed and tested, reminders sent at defined intervals — so every virtual patient arrives prepared and every provider starts on time.',
        },
        {
          num: '02',
          title: 'Prior authorization and insurance coordination',
          description: 'Virtual visit authorization requirements tracked and managed — payer-specific telehealth coverage criteria, authorization requests submitted, and coverage confirmed before the patient logs in.',
        },
        {
          num: '03',
          title: 'Provider EHR task support between visits',
          description: 'In-basket messages triaged, documentation requests coordinated, prescription refill workflows managed, and patient questions routed — so providers spend inter-visit time on clinical decisions, not administrative queue management.',
        },
        {
          num: '04',
          title: 'Remote scheduling and patient coordination',
          description: 'New telehealth appointment scheduling, rescheduling, cancellation management, and waitlist coordination handled remotely — inside your scheduling system with your scheduling protocols.',
        },
        {
          num: '05',
          title: 'Post-visit follow-up and care coordination',
          description: 'After-visit summaries distributed, follow-up care reminders sent, referral coordination initiated, and prescription confirmation tasks managed — so virtual visits have the same follow-through quality as in-person care.',
        },
        {
          num: '06',
          title: 'Billing coordination for virtual visits',
          description: 'Telehealth-specific billing modifiers, place-of-service codes, and documentation requirements coordinated with billing operations — so virtual visit claims submit correctly and do not create a separate denial category.',
        },
      ],
    },

    services: {
      title: 'Virtual Healthcare Services',
      description: 'Every layer of virtual care operations. Handled inside your workflow.',
      items: [
        {
          num: '01',
          title: 'Virtual Medical Assistant Support',
          description: 'Trained healthcare virtual assistants working inside your EHR — clinical context aware, HIPAA compliant, and aligned with your provider\'s workflow and documentation standards.',
        },
        {
          num: '02',
          title: 'Telehealth Scheduling Support',
          description: 'New appointment scheduling, rescheduling, and cancellation management for virtual visits — inside your scheduling system, following your provider availability and booking protocols.',
        },
        {
          num: '03',
          title: 'Pre-Visit Patient Preparation',
          description: 'Intake forms, visit links, insurance information requests, and pre-visit reminders sent on a defined schedule before every telehealth appointment — so visits start on time with prepared patients.',
        },
        {
          num: '04',
          title: 'Telehealth Eligibility Verification',
          description: 'Insurance verification specific to telehealth coverage — payer-specific telehealth benefits, modifiers, and coverage limitations checked before the visit, not after the claim fails.',
        },
        {
          num: '05',
          title: 'Prior Authorization — Virtual Visits',
          description: 'Telehealth prior authorization requirements tracked and managed — authorization requests submitted with payer-specific telehealth documentation and coverage confirmation obtained before service.',
        },
        {
          num: '06',
          title: 'Provider EHR Task Management',
          description: 'In-basket messages, documentation requests, prescription refill coordination, and patient inquiries triaged and managed — reducing the administrative accumulation that extends provider days.',
        },
        {
          num: '07',
          title: 'Virtual Front Desk Support',
          description: 'Patient inquiry response, appointment coordination, and general administrative support managed remotely — supplementing your in-person front desk during high-volume periods or after-hours coverage.',
        },
        {
          num: '08',
          title: 'Post-Visit Follow-Up Coordination',
          description: 'After-visit documentation distribution, follow-up care reminders, referral initiation, and prescription confirmation — ensuring virtual visits generate the same follow-through as in-person encounters.',
        },
        {
          num: '09',
          title: 'Telehealth Billing Coordination',
          description: 'Virtual visit billing modifier requirements, place-of-service codes, and documentation standards coordinated with billing operations to prevent telehealth-specific claim errors.',
        },
        {
          num: '10',
          title: 'Remote Care Coordination',
          description: 'Patient communication, referral tracking, care plan follow-up, and multi-provider coordination managed remotely — inside your EHR with full clinical context.',
        },
      ],
    },

    aiHuman: {
      title: 'The AI + Human Advantage',
      description: 'Automation where repetition adds risk. Humans where context determines the outcome.',
      machine: [
        'Pre-visit checklist monitoring and preparation status alerts',
        'Eligibility verification scheduling and result tracking',
        'Reminder delivery scheduling and delivery confirmation',
        'Provider EHR task queue monitoring and prioritization',
        'Post-visit follow-up routing and scheduling',
        'Virtual care performance reporting and metric tracking',
      ],
      human: [
        'Patient communication requiring clinical context and judgment',
        'Prior authorization coordination with payer-specific requirements',
        'Provider EHR task triage and escalation decisions',
        'Telehealth billing coordination with coding and modifier review',
        'Complex patient coordination requiring care context',
        'Leadership communication on virtual operations performance',
      ],
    },

    results: {
      title: 'What Changes',
      description: 'Virtual care that runs as smoothly as your best in-person days.',
      outcomes: [
        {
          icon: '⚡',
          title: 'Providers start virtual visits with prepared patients',
          description: 'Intake complete, eligibility verified, visit link confirmed — every virtual patient ready before the session begins.',
        },
        {
          icon: '↓',
          title: 'Administrative time between visits decreases',
          description: 'EHR tasks, messages, and coordination work managed during the day — providers end their schedule without a two-hour administrative tail.',
        },
        {
          icon: '◎',
          title: 'Telehealth claims submit correctly the first time',
          description: 'Billing modifiers, place-of-service codes, and documentation requirements coordinated before submission — telehealth-specific denials become preventable rather than expected.',
        },
        {
          icon: '✓',
          title: 'Virtual follow-up has the same quality as in-person',
          description: 'After-visit summaries, referral coordination, and follow-up reminders happen consistently — not only when someone has time to manage them.',
        },
        {
          icon: '$',
          title: 'Virtual visit revenue captures correctly',
          description: 'Eligibility failures, missing authorizations, and billing code errors that were costing revenue on telehealth claims identified and eliminated.',
        },
        {
          icon: '→',
          title: 'Front desk focus returns to in-person patients',
          description: 'Virtual coordination tasks removed from in-person front desk responsibilities — staff manage the patients in front of them without the divided attention that virtual care creates.',
        },
      ],
    },

    compare: {
      title: 'Why Virtual Support Must Be Healthcare-Specific',
      description: 'General virtual assistants create healthcare problems. Healthcare virtual specialists solve them.',
      rows: [
        {
          label: 'EHR access and operation',
          hbs: 'Trained — works inside your system',
          other: 'Limited — often outside system',
        },
        {
          label: 'Clinical context understanding',
          hbs: 'Healthcare-specific training',
          other: 'General administrative knowledge',
        },
        {
          label: 'HIPAA compliance',
          hbs: 'BAA in place — compliant protocols',
          other: 'Variable — not always addressed',
        },
        {
          label: 'Prior auth coordination',
          hbs: 'Payer-specific knowledge',
          other: 'Not typically in scope',
        },
        {
          label: 'Telehealth billing support',
          hbs: 'Modifier and coding coordination',
          other: 'Not in scope',
        },
        {
          label: 'Integration with billing operations',
          hbs: 'Connected — same HBS ecosystem',
          other: 'Disconnected — separate vendor',
        },
      ],
    },
  },
};
