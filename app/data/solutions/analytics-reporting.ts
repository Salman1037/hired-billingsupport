import { SolutionData } from '../solutionTypes';

export const analyticsReporting: SolutionData = {
  title: 'Healthcare Analytics & Reporting',
  subtitle: 'Turn your healthcare operations data into structured reporting and analytics that give leadership the visibility to make better decisions.',
  description: 'Hired Billing Support turns your billing, AR, denial, operational, and patient engagement data into structured healthcare analytics and reporting — giving leadership the visibility to make better decisions, control revenue, and manage operations with confidence.',
  
  hero: {
    eyebrow: 'Advanced Solutions · Analytics & Reporting',
    title: 'Your practice generates data every day.',
    subtitle: 'Most of it is not being turned into decisions.',
    description: 'Your EHR has reports. Your billing software has dashboards. Your clearinghouse has claim analytics. And yet leadership still cannot answer with confidence: where is revenue leaking, which payer is causing the most problems, and what changed in AR this month compared to last? Hired Billing Support turns scattered healthcare operations data into structured reporting that gives leadership the visibility to manage revenue, control operational risk, and make better decisions — consistently, not just when a crisis makes it necessary.',
  },

  sections: {
    pain: {
      title: 'Where Data Fails to Become Decisions',
      description: 'The analytics reality in most healthcare practices.',
      monologue: [
        'Your practice runs reports every month. Collection rates, AR aging, denial summaries. The numbers are there. But when leadership asks why collections were lower in March, whether the AR situation is improving or getting worse, or which payer is creating the most operational problems — the answer requires someone to manually pull data from three systems, build a comparison, and interpret what it means in the context of everything else that happened that month.',
        'That work almost never happens on schedule. The reports get reviewed. The numbers get noted. And then the meeting moves on to something more urgent, because turning data into decisions requires time that nobody can find between billing queues, patient volume, and operational fires.',
        '"Your team is not ignoring the data. They are buried in daily work and do not have the time, the tools, or the structure to turn scattered reports into clear decisions — and so the data sits unused while problems that the data could identify continue to compound."',
        'Analytics is not a technology problem. Most practices already have the data. The gap is in the interpretation layer — someone who synthesizes data from multiple sources, identifies what it means, connects it to operational root causes, and delivers clear findings with specific recommended actions on a schedule that allows leadership to act before problems get worse.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Data is scattered across disconnected systems',
          description: 'Billing data is in the billing software. Clinical data is in the EHR. AR data is in the PM. Denial data is in the clearinghouse. Patient engagement data is in a separate platform. No single view of operational performance exists — so leadership always has an incomplete picture.',
        },
        {
          num: '02',
          title: 'Reports show numbers but not what to do about them',
          description: 'A denial rate of 4.2 percent does not tell you whether it is trending up, which payers are driving it, what coding issue is behind it, or what the practice should change this month. Numbers without interpretation produce awareness without direction.',
        },
        {
          num: '03',
          title: 'Revenue leakage is invisible until it is significant',
          description: 'Undercoding, missed charges, underpayments, write-offs that should not have happened — these leakage sources are only visible in detailed analysis. In summary reports, they are hidden inside aggregate numbers that look acceptable.',
        },
        {
          num: '04',
          title: 'Payer problems are buried in portal data nobody has time to analyze',
          description: 'A specific payer is denying a specific procedure at twice the expected rate. Nobody has identified it because nobody has run the analysis. The practice is losing revenue on those claims every week while the pattern goes unnoticed.',
        },
        {
          num: '05',
          title: 'Cash flow feels unpredictable because the data that predicts it is not being used',
          description: 'AR aging, claims in process, denial work in queue, and expected payment timelines together create a reasonably predictable cash flow picture. But synthesizing those inputs requires someone doing the analysis — and that rarely happens consistently enough to be useful.',
        },
        {
          num: '06',
          title: 'Decisions are made reactively because reporting is delayed',
          description: 'When the AR aging report comes out three weeks after the period ends, the optimal window to act on the findings in that report has already passed. Reporting cadence that does not match decision timelines produces insight that is always about the past, never about the present.',
        },
      ],
    },

    solution: {
      title: 'Reporting that gives leadership clarity. Analytics that produce action.',
      description: 'The Solution',
      process: [
        {
          num: '01',
          title: 'Multi-source data synthesis',
          description: 'Billing software, EHR, clearinghouse, AR reports, denial queues, and operational metrics pulled together and synthesized into a single coherent view of practice performance — so leadership sees the full picture, not disconnected fragments.',
        },
        {
          num: '02',
          title: 'KPI tracking and trend analysis',
          description: 'Collection rate, denial rate, days in AR, clean claim rate, AR aging distribution, and revenue-versus-budget tracked with trend lines and period-over-period comparison — so changes are visible before they become problems.',
        },
        {
          num: '03',
          title: 'Root cause analysis on performance gaps',
          description: 'When a metric is off target, we do not just report the number — we identify the cause. Which payer is driving the denial rate? Which code type is creating AR aging? What workflow change would move the collection rate? Leadership gets the diagnosis, not just the symptom.',
        },
        {
          num: '04',
          title: 'Revenue leakage identification',
          description: 'Undercoding, missed charges, underpayments, premature write-offs, and billing errors identified in the data and quantified — so the practice knows what is being lost and where the recovery opportunity is.',
        },
        {
          num: '05',
          title: 'Payer-specific analytics',
          description: 'Denial rates, payment timeliness, underpayment frequency, and claim rejection patterns analyzed by payer — revealing which payer relationships are performing and which need attention or escalation.',
        },
        {
          num: '06',
          title: 'Executive reporting delivered on schedule',
          description: 'Weekly operational snapshots. Monthly performance reviews with root cause analysis. Quarterly strategic summaries with trend direction and forward-looking risk assessment — delivered before leadership needs to ask for them.',
        },
      ],
    },

    services: {
      title: 'Analytics and Reporting Services',
      description: 'Every operational metric. Reported, interpreted, and acted on.',
      items: [
        {
          num: '01',
          title: 'RCM Performance Reporting',
          description: 'Full revenue cycle performance — collection rate, clean claim rate, days in AR, denial rate — with trend lines and root cause analysis.',
        },
        {
          num: '02',
          title: 'AR Aging Analytics',
          description: 'AR aging distribution by bucket, payer, and provider — with movement analysis, recovery targets, and collectibility assessment.',
        },
        {
          num: '03',
          title: 'Denial Trend Analysis',
          description: 'Denial volume by reason code, payer, and provider — with root cause identification and specific upstream workflow recommendations.',
        },
        {
          num: '04',
          title: 'Payer Performance Analytics',
          description: 'Denial rates, payment timeliness, underpayment frequency, and claim pattern analysis by payer — identifying which relationships need attention.',
        },
        {
          num: '05',
          title: 'Revenue Leakage Analysis',
          description: 'Undercoding, missed charges, underpayments, and write-off patterns identified and quantified — with specific recovery opportunities documented.',
        },
        {
          num: '06',
          title: 'Cash Flow Visibility Reporting',
          description: 'AR in process, expected payments, and collections trend synthesized into a forward-looking cash flow picture — so surprises are rare rather than monthly.',
        },
        {
          num: '07',
          title: 'Provider Productivity Reporting',
          description: 'Collection rates, coding accuracy, and billing performance by provider — giving leadership visibility into performance variation and improvement opportunities.',
        },
        {
          num: '08',
          title: 'Operational Performance Reporting',
          description: 'Task queue metrics, workflow adherence, scheduling performance, and prior authorization tracking — operational data translated into management-ready insights.',
        },
        {
          num: '09',
          title: 'Patient Engagement Analytics',
          description: 'Inquiry conversion rates, appointment no-show rates, recall success rates, and review scores — patient engagement data connected to revenue and growth outcomes.',
        },
        {
          num: '10',
          title: 'Executive Dashboard & Summary',
          description: 'Monthly leadership report synthesizing all operational, financial, and clinical performance data — with clear findings, trends, and specific recommended actions.',
        },
      ],
    },

    aiHuman: {
      title: 'The AI + Human Advantage',
      description: 'Data processing by machine. Interpretation and judgment by people.',
      machine: [
        'KPI data collection, aggregation, and trend calculation across systems',
        'Denial reason code categorization and frequency tracking',
        'AR aging movement monitoring and threshold alerting',
        'Payer performance benchmarking and variance flagging',
        'Revenue leakage pattern detection and quantification',
        'Report generation, scheduling, and delivery',
      ],
      human: [
        'Report commentary — translating numbers into decisions',
        'Root cause analysis connecting metrics to operational causes',
        'Revenue leakage assessment and recovery prioritization',
        'Payer trend interpretation and escalation recommendations',
        'Leadership communication and findings presentation',
        'Reporting framework updates as practice needs evolve',
      ],
    },

    results: {
      title: 'What Changes',
      description: 'Leadership that makes decisions with data. Not intuition about data.',
      outcomes: [
        {
          icon: '◎',
          title: 'Full performance visibility across the revenue cycle',
          description: 'Every major operational and financial metric tracked, trended, and explained — so leadership always knows where the practice stands and where attention is needed.',
        },
        {
          icon: '$',
          title: 'Revenue leakage identified and quantified',
          description: 'Undercoding, underpayments, missed charges, and premature write-offs found in the data — with specific recovery opportunities and dollar estimates attached.',
        },
        {
          icon: '↓',
          title: 'Denial trends traced to root causes',
          description: 'Not just denial rates — the specific reasons, payers, and workflow gaps driving them, with targeted upstream changes that reduce the rate over time.',
        },
        {
          icon: '⚡',
          title: 'Cash flow becomes more predictable',
          description: 'AR in process, expected collections, and trend data synthesized into a forward-looking cash flow picture — fewer monthly surprises, more confident planning.',
        },
        {
          icon: '→',
          title: 'Findings lead to action, not just documentation',
          description: 'Every identified issue tracked through to a verified resolution — so reports produce change, not recurring documentation of the same problems.',
        },
        {
          icon: '✓',
          title: 'Payer problems are visible before they become significant',
          description: 'Payer performance tracked by denial rate, payment timing, and underpayment frequency — problems surfaced when they are addressable, not after months of silent revenue loss.',
        },
      ],
    },

    compare: {
      title: 'Why Reporting Must Lead to Action',
      description: 'Reporting that does not produce decisions is documentation, not analytics.',
      rows: [
        {
          label: 'Performance visibility',
          hbs: 'Multi-source synthesis with trends',
          other: 'Single-system snapshots',
        },
        {
          label: 'Report commentary',
          hbs: 'Plain-language context and meaning',
          other: 'Numbers without interpretation',
        },
        {
          label: 'Root cause analysis',
          hbs: 'Included — every gap traced upstream',
          other: 'Not provided',
        },
        {
          label: 'Revenue leakage identification',
          hbs: 'Systematic — quantified with recovery targets',
          other: 'Visible only if someone looks',
        },
        {
          label: 'Reporting cadence',
          hbs: 'Defined schedule — weekly and monthly',
          other: 'When someone pulls a report',
        },
        {
          label: 'Finding follow-through',
          hbs: 'Tracked to verified resolution',
          other: 'Noted and not followed up',
        },
      ],
    },
  },
};
