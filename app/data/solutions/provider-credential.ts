import { SolutionData } from '../solutionTypes';

export const providerCredential: SolutionData = {
  title: 'Provider Credentialing',
  subtitle: 'Manage provider credentialing from document collection to payer activation',
  description: 'Every day a provider is not credentialed is a day your practice is not getting paid for their work. Hired Billing Support manages the full credentialing workflow — from collecting provider documents and setting up CAQH to submitting payer applications, following up on status, and maintaining credentialing files so providers stay billing-ready.',
  hero: {
    eyebrow: 'Practice Management · Provider Credentialing',
    title: 'Every day a provider is not credentialed is a day your practice is not getting paid for their work.',
    subtitle: 'Credentialing delays are not paperwork problems. They are revenue problems. Every week a provider sits outside the payer network is a week of patient visits that cannot generate a billable claim.',
    description: 'Hired Billing Support manages the full credentialing workflow — from collecting provider documents and setting up CAQH to submitting payer applications, following up on status, and maintaining credentialing files so providers stay billing-ready.',
  },
  sections: {
    pain: {
      title: 'Credentialing looks like an administrative task.',
      description: 'It behaves like a revenue bottleneck.',
      monologue: [
        'You hired a new provider. They start seeing patients next month. You assumed credentialing was being handled. But three months later, claims are still being denied, the provider is still out of network with half your payers, and your billing team is spending more time explaining the situation than fixing it.',
        'Nobody made a single serious mistake. Documents were collected — mostly. Applications were submitted — eventually. Follow-up happened — sometimes. But credentialing without a systematic, dedicated process almost always produces the same outcome: delays that cost more than anyone budgeted for.',
        '"Credentialing delays do not just slow paperwork. They delay revenue, limit patient access, reduce provider productivity, and force billing teams to work around problems that should have been prevented before the provider\'s first appointment."',
        'The credentialing process has too many moving parts — provider documents, payer-specific requirements, CAQH maintenance, license verifications, malpractice tracking, application follow-up — to be managed casually alongside everything else a busy practice is running.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Provider cannot bill because credentialing is incomplete',
          description: 'The provider is seeing patients. The documentation is there — mostly. But one payer application is stalled, two others have not been started, and the billing team is holding claims because the provider is not yet active in those networks.',
        },
        {
          num: '02',
          title: 'Documents are scattered, missing, or expired',
          description: 'Provider documents — medical school diploma, DEA certificate, malpractice policy, state licenses, board certifications — live in different folders, email threads, and personal devices. When a payer requests something specific, finding it takes longer than it should.',
        },
        {
          num: '03',
          title: 'CAQH profile is outdated or incomplete',
          description: 'CAQH is the foundation most payer applications build on. When it is incomplete, inconsistent, or not updated after a license renewal or address change, applications stall or come back with corrections required.',
        },
        {
          num: '04',
          title: 'Applications are submitted but not tracked',
          description: 'Someone submits a credentialing application. There is no follow-up system, no status tracking, no escalation trigger when a payer goes silent. Weeks pass. The application sits in a queue nobody is checking.',
        },
        {
          num: '05',
          title: 'Recredentialing dates are missed',
          description: 'Most payer contracts require recredentialing every two to three years. Without a systematic tracking system, those dates slip past — sometimes quietly, sometimes with a billing disruption that takes weeks to recover from.',
        },
        {
          num: '06',
          title: 'Nobody has a clear view of credentialing status',
          description: 'The practice owner does not know which providers are fully credentialed, which are pending, which have expiring documents, and which have applications stalled at a specific payer. Without a centralized status view, credentialing management is reactive rather than systematic.',
        },
      ],
    },
    solution: {
      title: 'An embedded credentialing team',
      description: 'that treats provider readiness as a revenue priority.',
      process: [
        {
          num: '01',
          title: 'Provider document collection and organization',
          description: 'We collect, organize, and maintain a complete credentialing file for every provider — licenses, DEA, malpractice, board certifications, NPI, CV, and payer-specific requirements — in one accessible, structured location.',
        },
        {
          num: '02',
          title: 'CAQH setup and ongoing maintenance',
          description: 'We build or update CAQH profiles completely and accurately — and maintain them after license renewals, address changes, or practice updates so payer applications have a clean foundation to build on.',
        },
        {
          num: '03',
          title: 'Payer application preparation and submission',
          description: 'Applications prepared and submitted to each target payer with the correct documentation, payer-specific supplemental forms, and accurate provider information — reducing completion errors that cause delays.',
        },
        {
          num: '04',
          title: 'Application status tracking and follow-up',
          description: 'Every application tracked from submission to approval. Payers contacted for status updates on a defined schedule. Escalations made when responses go beyond normal processing timelines.',
        },
        {
          num: '05',
          title: 'Credentialing status reporting to leadership',
          description: 'Clear, current credentialing status for every provider — active, pending, blocked, and upcoming expirations — reported to practice leadership on a regular schedule so nothing is a surprise.',
        },
        {
          num: '06',
          title: 'Recredentialing and expiration management',
          description: 'License expirations, malpractice renewals, and payer recredentialing cycles tracked proactively — renewals initiated before deadlines, not after something lapses and creates a billing gap.',
        },
      ],
    },
    services: {
      title: 'Every step of provider credentialing.',
      description: 'Managed and tracked.',
      items: [
        {
          num: '01',
          title: 'Provider Document Collection',
          description: 'Medical degree, state licenses, DEA certificate, malpractice insurance, board certifications, NPI and taxonomy — collected, verified, and organized for every provider.',
        },
        {
          num: '02',
          title: 'CAQH Profile Setup & Maintenance',
          description: 'CAQH built completely and accurately from initial setup through ongoing updates — kept current after every renewal, address change, and practice modification.',
        },
        {
          num: '03',
          title: 'NPI & Taxonomy Review',
          description: 'NPI registration verified, taxonomy codes confirmed to match payer and specialty requirements, and NPPES profile reviewed for accuracy before application submission.',
        },
        {
          num: '04',
          title: 'Commercial Payer Applications',
          description: 'Applications prepared and submitted to commercial payers with payer-specific documentation, supplemental forms, and accurate provider information.',
        },
        {
          num: '05',
          title: 'Medicare & Medicaid Enrollment',
          description: 'Medicare Part B and Medicaid enrollment applications managed through PECOS and state-specific portals — with complete documentation and tracking through approval.',
        },
        {
          num: '06',
          title: 'Hospital & Facility Credentialing Support',
          description: 'Facility and hospital credentialing file preparation supported — privilege applications, medical staff documentation, and peer reference coordination.',
        },
        {
          num: '07',
          title: 'Application Status Follow-Up',
          description: 'Every application tracked with defined follow-up intervals. Payers contacted for status updates. Escalations made when applications stall without explanation.',
        },
        {
          num: '08',
          title: 'License & Certificate Expiration Tracking',
          description: 'State licenses, DEA certificates, malpractice policies, and board certifications tracked for expiration — renewals initiated proactively before gaps create billing disruptions.',
        },
        {
          num: '09',
          title: 'Recredentialing Support',
          description: 'Payer recredentialing cycles managed proactively — applications prepared, submitted, and followed up before the contract renewal window closes.',
        },
        {
          num: '10',
          title: 'Credentialing Status Reporting',
          description: 'Clear, current credentialing status report for all providers — active, pending, blocked, and upcoming expirations — delivered to leadership on a regular schedule.',
        },
      ],
    },
    aiHuman: {
      title: 'Technology handles the tracking.',
      description: 'People handle the follow-through.',
      machine: [
        'Provider document expiration tracking and renewal alerts',
        'CAQH profile completeness checking and update reminders',
        'Application submission status tracking and follow-up scheduling',
        'Payer response monitoring and escalation trigger generation',
        'Recredentialing cycle tracking by payer and provider',
        'Credentialing status dashboard maintenance and reporting',
      ],
      human: [
        'Provider document review and completeness verification',
        'CAQH profile building, accuracy review, and attestation coordination',
        'Payer application preparation with payer-specific requirements',
        'Payer portal follow-up calls and correction responses',
        'Escalation decisions when applications stall beyond normal timelines',
        'Leadership communication on credentialing status and decisions',
      ],
    },
    results: {
      title: 'Providers who are billing-ready.',
      description: 'Not billing-delayed.',
      outcomes: [
        {
          icon: '⚡',
          title: 'Faster time to first billable claim',
          description: 'Organized documents, complete CAQH, and submitted applications from day one mean providers reach active status weeks faster than unmanaged processes allow.',
        },
        {
          icon: '◎',
          title: 'Credentialing status always visible',
          description: 'Practice leadership always knows which providers are active, pending, blocked, and approaching renewal — without chasing anyone for an update.',
        },
        {
          icon: '✓',
          title: 'No expiration surprises',
          description: 'Licenses, malpractice policies, DEA certificates, and payer recredentialing cycles tracked proactively — renewals managed before anything lapses.',
        },
        {
          icon: '→',
          title: 'Applications that do not stall',
          description: 'Follow-up happens on a defined schedule. Payer requests responded to promptly. Nothing sits in an inbox waiting for someone to notice it.',
        },
        {
          icon: '$',
          title: 'Revenue that starts when it should',
          description: 'Every credentialing delay is a revenue delay. When credentialing is managed properly, providers start generating billable claims on schedule.',
        },
        {
          icon: '↓',
          title: 'Administrative burden on internal staff reduced',
          description: 'Credentialing coordination removed from the daily responsibilities of billing managers, administrators, and front desk staff who have other priorities.',
        },
      ],
    },
    compare: {
      title: 'Managed credentialing prevents delays',
      description: 'that unmanaged credentialing makes inevitable.',
      rows: [
        {
          label: 'Time to billing-active status',
          hbs: 'Faster — structured process',
          other: 'Longer — inconsistent follow-up',
        },
        {
          label: 'Document organization',
          hbs: 'Centralized and current',
          other: 'Scattered across folders and email',
        },
        {
          label: 'CAQH accuracy',
          hbs: 'Maintained and attested',
          other: 'Outdated until someone checks',
        },
        {
          label: 'Application follow-up',
          hbs: 'Defined schedule — proactive',
          other: 'When someone remembers',
        },
        {
          label: 'Expiration management',
          hbs: 'Tracked and renewed early',
          other: 'Discovered after it lapses',
        },
        {
          label: 'Status visibility',
          hbs: 'Clear and current always',
          other: 'Unclear until a problem surfaces',
        },
      ],
    },
  },
};
