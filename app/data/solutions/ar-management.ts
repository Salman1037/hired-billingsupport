// app/data/solutions/ar-management.ts

import { SolutionData } from '../solutionTypes';

export const arManagement: SolutionData = {
  title: "AR Management & Cash Flow Optimization",
  subtitle: "The money is in your AR. The problem is nobody has time to go get it.",
  description:
    "Hired Billing Support manages your accounts receivable as an active, assigned team — following up on every unpaid claim, tracking payer status, identifying underpayments, and converting outstanding receivables into predictable cash flow.",
  hero: {
    eyebrow: "AR management & cash flow",
    title: "The money is in your AR.<br><em>The problem is nobody has time to go get it.</em>",
    subtitle:
      "Your outstanding accounts receivable is not a write-off. It is revenue you already earned, sitting in claims your team has not had the uninterrupted time to follow through on.",
    description:
      "Hired Billing Support works your AR as an active, assigned team — following up on every unpaid claim, communicating with payers daily, and turning a growing aging report into predictable monthly cash flow.",
  },
  sections: {
    pain: {
      title: "What AR neglect actually looks like",
      description: "You already know the feeling of seeing <em>production on paper but not cash in the bank.</em>",
      monologue: [
        "It is the end of the month. The production number looks reasonable. The schedule was full. Your providers worked hard. And yet the deposit does not match what should have come in.",
        "You pull the AR report. There is a 90-day bucket that has been growing for three months. There are claims from payers your team has been meaning to follow up with. There are payments that came in at the wrong amount that nobody has had time to dispute.",
        `"Uncollected AR is not a sign your team is doing nothing. It is a sign your team is doing everything — and AR follow-up is always the task that loses to the more urgent thing in front of it."`,
        "Every week that passes without active follow-up, the claims in your aging buckets become harder to collect. Some will cross a timely filing threshold. Some will go to voicemail indefinitely. And some will quietly become write-offs nobody consciously chose to make.",
      ],
       ledgerEyebrow: "The reality every practice already knows",
      ledgerHeading: "You can see the production number. <em>You cannot figure out where the money is going.</em>",
      ledger: [
        {
          num: "01",
          title: "No one is assigned to specific aging buckets",
          description:
            "When every claim is everyone's responsibility, every claim is also nobody's priority. Without assigned ownership, follow-up happens when time allows — which is never systematic enough to move the needle on aging accounts.",
        },
        {
          num: "02",
          title: "Payer portals are not checked on a consistent schedule",
          description:
            "Checking claim status across five different payer portals takes more time than the team has on any given day. So status checks happen when someone gets to it — not on a schedule that keeps claims from aging.",
        },
        {
          num: "03",
          title: "Follow-up notes are vague and impossible to act on",
          description:
            "Someone calls a payer and writes \"called — waiting.\" Three weeks later, nobody knows what was discussed, what was promised, or whether the next step ever happened. Vague notes produce vague follow-up.",
        },
        {
          num: "04",
          title: "Underpayments are posted and silently accepted",
          description:
            "A payer posts $184 on a claim with a contracted rate of $248. Someone applies it and moves on. Nobody flags the difference. Over months, those small underpayments add up to a significant sum the practice never consciously agreed to write off.",
        },
        {
          num: "05",
          title: "Difficult payers are deprioritized in favor of easier ones",
          description:
            "Certain payers are harder to reach, slower to respond, and more complicated to escalate with. Without deliberate prioritization, claims from those payers naturally drift to the back of the queue — and stay there.",
        },
        {
          num: "06",
          title: "Write-offs are applied based on age, not actual collectibility",
          description:
            "When a claim reaches 150 or 180 days, the default is to write it off. But age alone is not a collectibility indicator. Many old claims are still fully recoverable. Without a review, those write-offs are premature.",
        },
        {
          num: "07",
          title: "Cash flow visibility comes too late to act",
          description:
            "By the time leadership sees an AR aging report that shows 90-day balances growing, the ideal follow-up window on many of those claims has already started closing. Reactive visibility produces reactive decisions — usually too late.",
        },
      ],
    },
    solution: {
      title: "We treat your AR as the revenue it already is. <em>And then we go get it.</em>",
      description:
        "Hired Billing Support becomes your dedicated AR management team — assigned to your claims, working in your system, communicating with payers every day, and turning outstanding receivables into actual deposits.",
      process: [
        {
          num: "01",
          title: "We assign ownership to every aging bucket",
          description:
            "Every claim is assigned to a specific team member with defined follow-up intervals and escalation triggers. Nothing ages without someone watching it and taking the next action.",
        },
        {
          num: "02",
          title: "We work payers proactively — before claims get old",
          description:
            "Status is checked on a systematic schedule. Payers are called before the silence becomes a delay. Every interaction is documented with the rep's name, date, and what was committed to.",
        },
        {
          num: "03",
          title: "We escalate when standard follow-up is not moving the claim",
          description:
            "Stuck claims do not just sit. We follow payer-specific escalation paths — supervisor requests, formal reconsiderations, and state-level dispute processes when the situation warrants it.",
        },
        {
          num: "04",
          title: "We flag underpayments before they become write-offs",
          description:
            "Every payment reviewed against contracted rates. Underpayments identified, documented, and pursued through the correct payer process — not silently applied and forgotten.",
        },
        {
          num: "05",
          title: "We review write-off eligibility — every time",
          description:
            "No balance written off without a documented collectibility review. We evaluate whether the claim is recoverable, attempt recovery, and document the rationale before a write-off is ever applied.",
        },
        {
          num: "06",
          title: "We report on movement, not just balances",
          description:
            "Your leadership sees what changed — which claims moved, which were collected, which were escalated. Not just a snapshot. A story of what happened to your revenue this month.",
        },
      ],
    },
    services: {
      title: "Every piece of the AR workflow. <em>Assigned, tracked, and worked.</em>",
      description: "",
      items: [
        {
          num: "01",
          title: "Claim Status Tracking",
          description:
            "Regular status checks across payer portals and clearinghouses — on a defined schedule, not when someone finds a spare moment.",
        },
        {
          num: "02",
          title: "Aging Bucket Management",
          description:
            "Claims organized by age, payer, and dollar value — with assigned ownership and defined follow-up intervals for each bucket.",
        },
        {
          num: "03",
          title: "Payer Follow-Up Calls",
          description:
            "We call payers. We document every conversation with the rep name, date, and stated outcome. We escalate when responses are slow or vague.",
        },
        {
          num: "04",
          title: "Escalation Management",
          description:
            "Stuck claims escalated through payer-specific channels — supervisor requests, complaint filings, or state insurance contacts when warranted.",
        },
        {
          num: "05",
          title: "Underpayment Identification",
          description:
            "Every payment reviewed against contracted fee schedules. Underpayments flagged, documented, and disputed through the correct payer process.",
        },
        {
          num: "06",
          title: "Corrected Claim Resubmission",
          description:
            "When a claim needs correction to resolve an AR issue, we correct it, resubmit, and track the resubmission through to final adjudication.",
        },
        {
          num: "07",
          title: "Write-Off Review & Documentation",
          description:
            "No balance written off without a documented collectibility review. Write-off logs maintained with specific rationale for every account closed.",
        },
        {
          num: "08",
          title: "Cash Flow Reporting",
          description:
            "Regular reports on AR aging movement, collection rates by payer, days in AR, and outstanding balance trends — reviewed with leadership on schedule.",
        },
      ],
    },
    aiHuman: {
      title: "AI + human execution",
      description: "Systematic tracking by machine. <em>Judgment and communication by people.</em>",
      machine: [
        "Claim status monitoring and aging alert generation",
        "Follow-up task scheduling and queue prioritization",
        "Underpayment flagging against contracted rate tables",
        "ERA auto-matching and payment reconciliation",
        "Payer response pattern tracking by claim type",
        "AR trend reporting and collection rate tracking",
      ],
      human: [
        "Payer calls, portal follow-up, and escalation conversations",
        "Underpayment dispute resolution and payer negotiation",
        "Write-off eligibility review and documentation",
        "Complex claim histories with multiple adjustments",
        "Documentation of every follow-up interaction",
        "Prioritization decisions for limited-window claims",
      ],
    },
    results: {
      title: "When AR is actively managed, <em>cash flow becomes predictable.</em>",
      description: "What changes",
      outcomes: [
        {
          icon: "✓",
          title: "Claims stop aging without action",
          description:
            "Every bucket assigned, every claim touched on schedule. Nothing ages quietly into write-off territory.",
        },
        {
          icon: "$",
          title: "Collections become consistent",
          description:
            "Systematic follow-up produces predictable monthly collections — less dependent on payer timing, more dependent on your team's follow-through.",
        },
        {
          icon: "↑",
          title: "Underpayments stop disappearing",
          description:
            "Payments are checked against contracts. Differences are pursued. Payers are held to what they owe.",
        },
        {
          icon: "◎",
          title: "Write-offs have documented rationale",
          description:
            "No balance written off without a specific reason — not based on age alone. The bar for write-off gets higher.",
        },
        {
          icon: "⚡",
          title: "Payer communication has a paper trail",
          description:
            "Every call, portal check, and escalation documented with the detail needed if a dispute goes further.",
        },
        {
          icon: "↓",
          title: "Leadership sees what is actually happening",
          description:
            "AR reporting with movement context — not just a balance sheet. Your team understands the story, not just the numbers.",
        },
      ],
    },
    compare: {
      title: "It is not a capacity problem. <em>It is a structure problem.</em>",
      description: "Why internal teams fall behind on AR",
      rows: [
        { label: "AR follow-up frequency", hbs: "Defined daily schedule", other: "When time allows" },
        { label: "Aging bucket ownership", hbs: "Assigned per specialist", other: "Shared, often unclear" },
        { label: "Underpayment review", hbs: "Every payment checked", other: "Skipped under volume" },
        { label: "Payer escalations", hbs: "Systematic and documented", other: "Irregular and inconsistent" },
        { label: "Write-off review", hbs: "Structured review required", other: "Based on age alone" },
        { label: "Cash flow visibility", hbs: "Regular reporting with trends", other: "Reactive and after-the-fact" },
      ],
    },
  },
};
