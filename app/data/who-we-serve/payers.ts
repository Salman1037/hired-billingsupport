import { SolutionData } from '@/app/data/solutionTypes';

export const payers: SolutionData = {
  title: 'Healthcare Payer Operations Support',
  subtitle: 'Scalable backend operations support for healthcare payers and health plans.',
  description: 'Hired Billing Support provides scalable backend operations support for healthcare payers and health plans — claims queue management, authorization support, provider inquiry handling, enrollment processing, and operational throughput without proportional headcount increases.',

  hero: {
    eyebrow: 'Who We Serve · Other Organizations · Healthcare Payers',
    title: 'Payer operations break down when the processing queue grows faster than the team that manages it.',
    subtitle: 'Claims that need review, authorizations that need follow-up, providers calling for status updates, enrollment documents requiring indexing, eligibility questions building up in the queue — payer backend operations do not fail dramatically. They slow down incrementally, and the cost compounds across every stakeholder who is waiting.',
    description: 'Hired Billing Support acts as your backend processing engine — providing scalable operations support that adapts to your queue volumes, your internal systems, and your workflows — so your core team manages the decisions while we manage the volume.',
  },

  sections: {
    pain: {
      title: 'The queue does not wait for your team to catch up.',
      description: 'It keeps growing while everything else also demands attention.',
      monologue: [
        'A payer operations team manages simultaneous queues — authorizations to review, claims to adjudicate, providers waiting on status updates, enrollment applications requiring document review, eligibility requests, and member inquiries — all on overlapping timelines, across multiple systems and portals, with staff who are already at or near capacity.',
        'When volume increases — a new plan year, a regulatory change, a system migration, a sudden increase in out-of-network claims — the queue grows faster than the team. Work ages. SLAs slip. Providers begin calling for status updates because electronic status is unclear or delayed. Those calls generate more work. The backlog grows because the team is now managing the backlog and the incoming volume simultaneously.',
        '"Healthcare operations break down when the backend queue grows faster than the team that manages it. The solution is not always more permanent staff — it is scalable processing capacity that increases when volume increases and adapts when volume changes."',
        'Most payer organizations add full-time staff when volume peaks — and then carry the overhead when volume normalizes. A scalable backend operations model solves the volume problem without creating a permanent payroll commitment that outlives the need.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Authorization queues build faster than they are cleared during peak periods',
          description: 'Prior authorization volume does not stay constant. New plan year enrollments, seasonal utilization patterns, and regulatory changes create spikes that overwhelm the same team managing normal-volume processing. When queues exceed processing capacity, providers experience delays, patients experience access problems, and internal teams carry the resulting escalations.',
        },
        {
          num: '02',
          title: 'Provider inquiries increase when status visibility is delayed or unclear',
          description: 'When providers cannot get clear status on claims, authorizations, or enrollment applications through electronic channels, they call. Those calls require staff time to research, respond, and document. When backend processing is slow, provider inquiry volume increases in direct proportion — creating a second workload on top of the already-delayed processing queue.',
        },
        {
          num: '03',
          title: 'Enrollment documentation requires indexing and review that falls behind during high-volume periods',
          description: 'Enrollment applications arrive with supporting documentation that requires review, indexing, and routing before processing can begin. When this initial documentation work falls behind, the downstream enrollment workflow is delayed — providers cannot be enrolled on schedule, members cannot access coverage, and the enrollment team spends time managing exceptions instead of processing applications.',
        },
        {
          num: '04',
          title: 'Manual processes create handoff gaps when volume increases',
          description: 'Payer backend operations often rely on manual processes at specific workflow steps — document routing, status updating, exception flagging, provider communication. When volume increases, manual processes create handoff delays that accumulate across the workflow, producing the aging items and SLA violations that leadership sees in reports without always knowing where the specific gap occurred.',
        },
        {
          num: '05',
          title: 'Leadership visibility into queue status and aging items is delayed or incomplete',
          description: 'Operations leaders need current queue visibility — what is in backlog, what is approaching SLA deadlines, which team or process is the current bottleneck. When reporting is delayed or requires manual compilation, leadership manages to historical data rather than current status — making it difficult to direct resources proactively before SLA failures occur.',
        },
        {
          num: '06',
          title: 'Scaling in-house teams adds permanent cost to solve temporary volume problems',
          description: 'Hiring additional permanent staff to manage peak-period volume creates a payroll commitment that continues after the peak passes. Training, onboarding, benefits, and management overhead compound the cost. Scalable backend support that increases with volume and adjusts when volume changes is structurally better suited to a business where processing demand fluctuates.',
        },
      ],
    },

    solution: {
      title: 'A scalable backend processing engine that keeps pace with your queue — not your headcount.',
      description: 'Hired Billing Support provides backend operations support that adapts to your payer organization\'s volume, systems, and workflow structure — processing work, managing queues, supporting communication, and maintaining operational throughput so your internal team focuses on decisions, not volume.',
      process: [
        {
          num: '01',
          title: 'Queue monitoring and backlog clearing',
          description: 'Authorization queues, claims review queues, enrollment documentation queues, and provider inquiry queues monitored daily — backlog items identified, prioritized by SLA proximity, and processed systematically to prevent age accumulation.',
        },
        {
          num: '02',
          title: 'Authorization support queue management',
          description: 'Authorization requests tracked, supporting documentation reviewed for completeness, missing information requested from providers, and queue status maintained so authorization decisions have the information they require without manual chasing.',
        },
        {
          num: '03',
          title: 'Provider inquiry handling and status communication',
          description: 'Provider status inquiries researched and responded to through your established communication channels — reducing the inbound inquiry volume that arrives when electronic status is delayed and giving providers the information they need without burdening your clinical or operations staff.',
        },
        {
          num: '04',
          title: 'Enrollment documentation review and indexing',
          description: 'Enrollment applications and supporting documentation reviewed for completeness, indexed, and routed into your enrollment workflow — so documentation gaps are identified at intake rather than discovered mid-process when they cause delays.',
        },
        {
          num: '05',
          title: 'Provider data maintenance support',
          description: 'Provider directory updates, network status changes, and provider data maintenance tasks processed in your systems — keeping provider data current without requiring your core team to manage routine maintenance tasks alongside higher-judgment operational work.',
        },
        {
          num: '06',
          title: 'Operational reporting and queue visibility',
          description: 'Regular queue status reports delivered to operations leadership — items in processing, items aging toward SLA thresholds, backlog trends, and throughput metrics so leadership sees current operational status, not historical summaries.',
        },
      ],
    },

    services: {
      title: 'Every backend processing function a healthcare payer needs to manage at scale.',
      description: 'Services that fit healthcare payer operations.',
      items: [
        {
          num: '01',
          title: 'Authorization Queue Support',
          description: 'Prior authorization requests processed, documentation reviewed for completeness, missing information requested from providers, and queue status maintained on a defined schedule.',
        },
        {
          num: '02',
          title: 'Claims Processing Support',
          description: 'Claims review queue support — documentation review, information requests, routing assistance, and claims status tracking so processing queues move without manual bottlenecks.',
        },
        {
          num: '03',
          title: 'Provider Inquiry Handling',
          description: 'Provider status inquiries on claims, authorizations, and enrollment researched and responded to through your communication protocols — reducing inbound inquiry burden on core operations staff.',
        },
        {
          num: '04',
          title: 'Member Support Coordination',
          description: 'Member benefit questions, eligibility confirmations, and coordination of benefits support managed through your member service workflows.',
        },
        {
          num: '05',
          title: 'Enrollment Documentation Processing',
          description: 'Enrollment application documentation reviewed for completeness, indexed, and routed — gaps identified at intake so downstream enrollment processing is not delayed by missing documents discovered mid-workflow.',
        },
        {
          num: '06',
          title: 'Eligibility & Benefits Support',
          description: 'Eligibility verification requests, benefits explanation support, and coordination of benefits clarification managed — keeping eligibility queues current and provider/member communication accurate.',
        },
        {
          num: '07',
          title: 'Provider Data Maintenance',
          description: 'Provider directory updates, network participation changes, and provider information maintenance processed in your systems — keeping provider data current without diverting your team from higher-value work.',
        },
        {
          num: '08',
          title: 'Document Review & Indexing',
          description: 'Supporting documentation reviewed, categorized, and indexed into your document management workflow — so processing queues have the information they need in the correct location and format.',
        },
        {
          num: '09',
          title: 'Backlog Cleanup Support',
          description: 'Targeted backlog clearing for authorization, enrollment, claims, and documentation queues — rapid throughput increase during peak periods or after workflow disruptions without permanent headcount additions.',
        },
        {
          num: '10',
          title: 'Queue Monitoring & Operational Reporting',
          description: 'Daily queue status monitoring with operational reports for leadership — current volume, SLA proximity, aging items, and throughput trends delivered on a defined schedule.',
        },
      ],
    },
  },
};
