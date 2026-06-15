import { SolutionData } from '../solutionTypes';

export const rcmManagement: SolutionData = {
  title: 'Revenue Cycle Management',
  subtitle: 'Your revenue cycle has more leaks than your billing team can see.',
  description: 'Claims go out. Payments come in. But somewhere between eligibility and final deposit, revenue is being lost — quietly, consistently, and in ways no single person on your team has the bandwidth to track. Hired Billing Support becomes your embedded RCM team — working inside your EHR, managing every step from eligibility to payment posting, and taking ownership of the revenue cycle so you do not have to.',
  hero: {
    eyebrow: 'Revenue cycle management',
    title: 'Your revenue cycle has more leaks than your billing team can see.',
    subtitle: 'Claims go out. Payments come in. But somewhere between eligibility and final deposit, revenue is being lost — quietly, consistently, and in ways no single person on your team has the bandwidth to track.',
    description: 'Hired Billing Support becomes your embedded RCM team — working inside your EHR, managing every step from eligibility to payment posting, and taking ownership of the revenue cycle so you do not have to.'
  },
  sections: {
    pain: {
      title: 'The reality every practice already knows',
      description: 'You can see the production number. <em>You cannot figure out where the money is going.</em>',
      monologue: [
        'The work is happening. Patients are being seen. Charges are being entered. Claims are going out. And yet every month, the collections report shows a number that does not match the work you know you produced.',
        'You pull the AR report. There are claims from 90 days ago that nobody has touched. There are denials sitting in a queue because new claims kept coming in. There are payments posted at amounts nobody compared to the contract. And somewhere in your system there are authorization gaps, eligibility errors, and coding mismatches that nobody had uninterrupted time to find.',
        '"You already know the feeling of seeing production on paper but not seeing cash in the bank. That gap does not close on its own — and it does not close when your billing team is already managing too many things at once."',
        'The problem is not your team. The problem is that revenue cycle management done well requires full ownership of every step — and that is not something a team divided between clinical support, phone calls, and daily billing can consistently deliver without dedicated structure.'
      ],
      ledger: [
        {
          num: '01',
          title: 'Eligibility errors that start before the visit',
          description: 'Coverage verified too early, skipped under schedule pressure, or never updated when a patient changes plans. The claim goes out against inactive or wrong insurance — denied before anyone realizes the problem started at check-in.'
        },
        {
          num: '02',
          title: 'Prior authorizations tracked in too many places',
          description: 'Auth status lives in a spreadsheet, a sticky note, an EHR task, and someone\'s memory simultaneously. When any one breaks down, the visit happens without a valid authorization. The claim gets denied. The appeal eats hours.'
        },
        {
          num: '03',
          title: 'Charge entry delayed or inconsistent',
          description: 'Charges entered days after the visit — with rushed coding, missing modifiers, or incorrect diagnosis linkage — add unnecessary days to the payment cycle and create denial triggers that were entirely preventable.'
        },
        {
          num: '04',
          title: 'Denials not worked within a workable window',
          description: 'When a denial sits for three weeks before anyone reviews it, the appeal window is already shrinking. Denials that should be reversed become write-offs — not because they were wrong, but because follow-up was too slow.'
        },
        {
          num: '05',
          title: 'AR follow-up with no assigned ownership',
          description: 'Nobody assigned to specific aging buckets. Nobody measured on AR resolution. New claims always feel more urgent than old ones. Old claims keep aging until payers close the window — quietly, one claim at a time.'
        },
        {
          num: '06',
          title: 'Underpayments applied without a second look',
          description: 'A payer sends less than the contracted rate. Someone posts it and moves on. Nobody checks it. Over a year, those small underpayments become a five-figure write-off the practice never agreed to give.'
        },
        {
          num: '07',
          title: 'Payer-specific rules not consistently followed',
          description: 'Every payer has its own billing requirements. When those rules are missed on correct claims, the result is a denial that should never have happened — and it takes time the team does not have to reverse.'
        },
        {
          num: '08',
          title: 'No single person owns the full claim arc',
          description: 'Eligibility, coding, submission, follow-up, and payment posting handled by different people with different priorities. Revenue falls in the handoffs. Nobody sees the complete picture of what is being lost.'
        }
      ]
    },
    solution: {
      title: 'We do not just submit your claims. <em>We own the entire revenue cycle.</em>',
      description: 'Hired Billing Support steps in as your embedded RCM team — not as a vendor you send files to, but as a team that operates inside your system, follows your workflow, and takes responsibility for your revenue from eligibility to final payment.',
      process: [
        {
          num: '01',
          title: 'We start with a complete operational review',
          description: 'Before touching a single claim, we understand your EHR setup, payer mix, team structure, and what your current AR and denial picture looks like. We diagnose first, then act.'
        },
        {
          num: '02',
          title: 'We work directly inside your EHR and PM system',
          description: 'We log in to your system. We work your queues. We post payments in your PM. No file exports, no third-party portals — just your existing environment with our team inside it.'
        },
        {
          num: '03',
          title: 'We follow your SOPs — and improve them over time',
          description: 'We adapt to your existing workflows. Where we find gaps, we flag them, document the fix, and help formalize a stronger process so your billing operation becomes more consistent month over month.'
        },
        {
          num: '04',
          title: 'We communicate inside your team\'s channels daily',
          description: 'Slack, Teams, EHR messaging, email — wherever your team communicates, we show up there. Your staff communicates with a teammate, not a vendor with a ticket system.'
        },
        {
          num: '05',
          title: 'We scale without a new hiring cycle',
          description: 'New providers, new locations, seasonal volume — we scale immediately. No four-week job posting, no benefits overhead, no onboarding gaps that cost practices revenue while they wait.'
        },
        {
          num: '06',
          title: 'We report, review, and improve on a regular schedule',
          description: 'Performance reviews, denial trends, AR aging reports — delivered to your leadership on schedule. Not reactive reports after something goes wrong. Proactive visibility before problems compound.'
        }
      ]
    },
    services: {
      title: 'Every step of the revenue cycle. <em>Managed, not just monitored.</em>',
      description: 'We do not specialize in one piece of the billing puzzle. We own the full workflow so nothing falls in the gap between departments, systems, or responsibilities.',
      items: [
        {
          num: '01',
          title: 'Eligibility & Benefits Verification',
          description: 'Confirmed before every visit. Active coverage, deductibles, copays, and network status — verified against the actual payer, not a record from months ago.'
        },
        {
          num: '02',
          title: 'Prior Authorization Support',
          description: 'We track, request, follow up on, and document every authorization so a missing auth is never the reason a claim is denied.'
        },
        {
          num: '03',
          title: 'Charge Entry & Capture',
          description: 'Accurate, same-day or next-day charge entry with attention to modifiers, units, and diagnosis linkage. No delays, no shortcuts.'
        },
        {
          num: '04',
          title: 'Claim Scrubbing & Review',
          description: 'Every claim reviewed for errors, payer-specific rules, and missing data before submission — not after the denial arrives.'
        },
        {
          num: '05',
          title: 'Electronic Claims Submission',
          description: 'Formatted correctly for each payer, submitted promptly, and tracked from the moment it goes out to adjudication.'
        },
        {
          num: '06',
          title: 'Denial Management',
          description: 'Every denial reviewed, categorized, and worked within a defined window. No denial sits idle while the timely filing clock runs down.'
        },
        {
          num: '07',
          title: 'Appeals & Reconsiderations',
          description: 'When a denial is wrong, we build and submit the appeal — with clinical support, documentation, and payer-specific language that gives it the best chance of reversal.'
        },
        {
          num: '08',
          title: 'AR Follow-Up',
          description: 'Aging buckets assigned and worked daily. Not just the easy claims — 90-day and 120-day accounts get the same attention as new submissions.'
        },
        {
          num: '09',
          title: 'Payment Posting',
          description: 'ERA and manual EOB posting reconciled to the correct encounter with accuracy verification and adjustment review every time.'
        },
        {
          num: '10',
          title: 'Underpayment Identification',
          description: 'Every payment checked against contracted rates. When a payer underpays, we identify it, document it, and pursue the balance.'
        },
        {
          num: '11',
          title: 'Patient Balance Support',
          description: 'Patient responsibility balances reviewed and statements coordinated — so your front desk is not fielding billing calls all day.'
        },
        {
          num: '12',
          title: 'Payer Communication',
          description: 'We call payers. We escalate. We document every interaction. Your team should not be spending its day on hold with insurance companies.'
        },
        {
          num: '13',
          title: 'Reporting & Performance Tracking',
          description: 'Regular reports on collection rates, denial trends, AR aging, and clean claim rates — with commentary and context, not just raw numbers.'
        },
        {
          num: '14',
          title: 'Revenue Leakage Analysis',
          description: 'A structured review of where your revenue is being lost — missed charges, expired authorizations, unworked claims, underpayments, and write-off patterns.'
        }
      ]
    },
    aiHuman: {
      title: 'The AI + human advantage',
      description: 'Technology handles what should never require a human. <em>Humans handle what technology cannot.</em>',
      machine: [
        'Eligibility verification queue management and real-time status tracking',
        'Prior auth status monitoring and automated reminder routing',
        'Claim scrubbing against payer-specific rule libraries before submission',
        'ERA auto-matching and payment reconciliation',
        'Denial pattern recognition, reason-code categorization, and trending',
        'AR aging alerts and follow-up task prioritization by bucket',
        'Underpayment flagging against contracted fee schedules',
        'Performance reporting, collection rate tracking, and trend analysis'
      ],
      human: [
        'Denial review, root cause identification, and appeal writing',
        'Payer calls, escalations, and dispute navigation',
        'Complex authorization decisions and peer-to-peer coordination',
        'Underpayment pursuit and contract analysis',
        'Appeal construction with clinical documentation and payer-specific language',
        'Write-off review and adjustment judgment calls',
        'Communication with providers, coders, and front desk staff',
        'AR prioritization based on payer history, claim age, and dollar value'
      ]
    },
    results: {
      title: 'Practical outcomes for practices that take <em>RCM seriously.</em>',
      description: 'What changes',
      outcomes: [
        {
          icon: '↑',
          title: 'Cleaner first-submission claims',
          description: 'Fewer rejections, fewer preventable denials, faster adjudication from payers who receive complete claims the first time.'
        },
        {
          icon: '↓',
          title: 'Denial rates that trend downward',
          description: 'Root cause analysis on every denial category so the same mistakes stop repeating every single month.'
        },
        {
          icon: '✓',
          title: 'AR aging that actually gets worked',
          description: 'Aging buckets assigned, prioritized, and touched regularly — before payers close the follow-up window.'
        },
        {
          icon: '$',
          title: 'Payments that match contracted rates',
          description: 'Underpayments identified, documented, and pursued. Payers cannot quietly underpay indefinitely without being challenged.'
        },
        {
          icon: '⚡',
          title: 'Faster, more predictable cash flow',
          description: 'Cleaner submissions plus faster follow-up equals shorter days in AR and less variation in monthly collections.'
        },
        {
          icon: '◎',
          title: 'Visibility leadership can actually act on',
          description: 'Regular reporting with commentary — not just data exports. Leadership understands what is happening, not just what was billed.'
        },
        {
          icon: '→',
          title: 'A front desk that is not drowning in billing work',
          description: 'When RCM is properly managed at the back end, the interruptions and error corrections that burden your front desk start to shrink.'
        },
        {
          icon: '✗',
          title: 'No revenue hiding inside your own system',
          description: 'Unworked claims, missed charges, expired auths, unposted payments — found, worked, and closed. Nothing sits idle because nobody is watching it.'
        }
      ]
    },
    compare: {
      title: 'Hiring solves headcount. <em>It does not always solve workflow.</em>',
      description: 'The instinct when revenue is slipping is to add more people. But often the problem is not the number of people — it is the structure, the oversight, and the operational system around them.',
      rows: [
        {
          label: 'Time to start working',
          hbs: 'Days, not months',
          other: '4–8 weeks to onboard'
        },
        {
          label: 'Payroll, benefits, taxes',
          hbs: 'None',
          other: '$60K–$90K+ per year'
        },
        {
          label: 'Coverage during absence',
          hbs: 'Always covered by the team',
          other: 'Gaps when staff is out'
        },
        {
          label: 'Scales with practice volume',
          hbs: 'Flexible and immediate',
          other: 'Requires new hiring cycle'
        },
        {
          label: 'Reporting and visibility',
          hbs: 'Built-in, regular, reviewed',
          other: 'Depends on staff initiative'
        },
        {
          label: 'Multi-payer expertise',
          hbs: 'Across payer types',
          other: 'Limited to individual experience'
        },
        {
          label: 'Works inside your EHR',
          hbs: 'From day one',
          other: 'Requires dedicated training time'
        }
      ]
    }
  }
};
