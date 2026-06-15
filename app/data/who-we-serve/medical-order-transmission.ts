import { SolutionData } from '@/app/data/solutionTypes';

export const medicalOrderTransmission: SolutionData = {
  title: 'Labs & Imaging Center Operations Support',
  subtitle: 'Medical order intake, authorization, eligibility, and workflow management for diagnostic services.',
  description: 'Hired Billing Support helps labs and imaging centers manage medical order transmission, referral intake, eligibility verification, prior authorization, scheduling coordination, provider communication, billing handoffs, and order workflow control.',

  hero: {
    eyebrow: 'Who We Serve · Other Organizations · Labs & Imaging Centers',
    title: 'A diagnostic service begins with an order. Every gap between that order and the completed service is a revenue and access risk.',
    subtitle: 'Incomplete orders. Missing authorizations. Eligibility that was not verified before the patient arrived. Provider offices calling for results or status updates while the intake queue is still backed up from yesterday. Labs and imaging centers operate at the intersection of clinical urgency and administrative complexity — and the margin for workflow error is narrow.',
    description: 'Hired Billing Support helps labs and imaging centers manage the full order-to-service workflow — from referral intake and eligibility verification through authorization management, scheduling coordination, provider communication, and billing handoff — so every order that comes in has the information it needs to become a completed, billable service.',
  },

  sections: {
    pain: {
      title: 'The order is the beginning, not the end.',
      description: 'Everything that happens between the order and the result determines whether the service gets paid.',
      monologue: [
        'An order arrives by fax, portal, or phone. It may have all the required information. It may not. The referring provider\'s office may have included the diagnosis code, the ICD-10 that supports medical necessity, the patient\'s current insurance, and the authorization number. Or it may have included the patient\'s name and a handwritten note. What happens next — how completely and systematically the order is processed — determines whether that patient gets scheduled, whether the service gets authorized, and whether the claim that follows gets paid.',
        'Labs and imaging centers often operate with intake processes that work adequately under normal volume but start producing errors under higher volume or staffing pressure. Incomplete orders accumulate. Authorization requests sit waiting for documentation that nobody followed up to collect. Patients arrive for scheduled services without confirmed coverage. Billing teams receive handoff records that are missing the authorization number or the diagnosis code that supports the claim.',
        '"Every delayed order creates a second problem — a follow-up call to the referring office, a patient who cannot be scheduled, a service that was delivered without confirmed authorization, or a claim that arrives at billing with a documentation gap that was created three steps earlier."',
        'The revenue impact of poor order intake is not visible in the intake function. It appears in denial rates, in authorization failures, and in billing exceptions — weeks after the gap that created them. By then, the order that started the problem is long finished and the connection is no longer obvious.',
      ],
      ledger: [
        {
          num: '01',
          title: 'Orders arrive incomplete and the follow-up process is inconsistent',
          description: 'Referring providers submit orders with missing diagnosis codes, outdated insurance information, or insufficient clinical documentation for authorization. Without a systematic follow-up process, these incomplete orders sit — sometimes scheduled without the required information, sometimes delayed without the provider\'s office being informed — creating problems at every downstream step.',
        },
        {
          num: '02',
          title: 'Authorization delays prevent scheduling and create patient access problems',
          description: 'Many imaging and diagnostic services require prior authorization before the patient can be scheduled. When authorization management is reactive — submitted after the order arrives rather than tracked proactively — authorization delays build a backlog of unscheduled orders while the patient waits and the referring provider\'s office begins calling for updates.',
        },
        {
          num: '03',
          title: 'Eligibility is not confirmed before the appointment',
          description: 'A patient who arrives for a diagnostic service without confirmed insurance coverage creates a problem that cannot be resolved in the moment. When eligibility verification happens at check-in rather than at scheduling, the service is already in progress before the coverage gap is discovered — and the billing impact follows regardless of what happens clinically.',
        },
        {
          num: '04',
          title: 'Provider offices call repeatedly for order status and results updates',
          description: 'Referring provider offices contact the lab or imaging center for order status, authorization updates, scheduling confirmations, and results availability. When this communication is not managed proactively — with status updates sent before offices call — the inbound volume consumes staff time that should be managing the order workflow.',
        },
        {
          num: '05',
          title: 'Documentation gaps at intake create billing denials weeks later',
          description: 'An order processed without confirmed authorization, a claim submitted without the medical necessity documentation, or a service billed without the correct diagnosis code — each originates in an intake or authorization step that was not completed correctly. The billing team discovers the gap when the denial arrives, not when the order was received.',
        },
        {
          num: '06',
          title: 'Front desk and intake teams manage too many simultaneous workflow demands',
          description: 'Labs and imaging intake teams handle phones, walk-in scheduling, order review, insurance verification, authorization requests, provider communication, and patient coordination simultaneously — with the same staff, across the same working hours. When volume increases, the tasks with the most immediate urgency get attention, and the systematic documentation work gets deferred.',
        },
      ],
    },

    solution: {
      title: 'Order-to-service workflow management that protects patient access and downstream revenue simultaneously.',
      description: 'Hired Billing Support manages the full order intake and coordination workflow — reviewing orders at receipt, following up on missing documentation, managing authorization requests, confirming eligibility before scheduling, coordinating provider communication, and handing off complete billing records — so every service that is delivered has the documentation it needs to be paid.',
      process: [
        {
          num: '01',
          title: 'Order intake review at receipt',
          description: 'Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance information, clinical documentation, and ordering provider information checked against the requirements for authorization and billing before the order moves forward in the workflow.',
        },
        {
          num: '02',
          title: 'Missing documentation follow-up with referring providers',
          description: 'Incomplete orders followed up with the referring provider\'s office on a defined schedule — specific documentation requirements communicated, follow-up tracked, and order held for scheduling until the required information is received rather than proceeding with gaps that will create problems downstream.',
        },
        {
          num: '03',
          title: 'Prior authorization management',
          description: 'Authorization requests submitted to payers immediately after order completeness is confirmed — tracking, payer follow-up, and status communication managed so authorizations are obtained before scheduling rather than after the patient has already been seen.',
        },
        {
          num: '04',
          title: 'Eligibility verification before scheduling',
          description: 'Patient insurance verified against the specific service type before the appointment is confirmed — coverage limitations, cost-sharing amounts, and authorization requirements checked so the scheduling process produces appointments with confirmed coverage.',
        },
        {
          num: '05',
          title: 'Proactive provider office communication',
          description: 'Authorization approvals, scheduling confirmations, and results availability communicated to referring provider offices proactively — before they call for updates — reducing inbound inquiry volume and maintaining the provider relationship quality that drives referral volume.',
        },
        {
          num: '06',
          title: 'Clean billing handoff',
          description: 'Completed service records handed off to billing with all required documentation — authorization number, confirmed eligibility, correct diagnosis codes, and medical necessity documentation — so billing processes the claim without the documentation gaps that produce denials.',
        },
      ],
    },

    services: {
      title: 'Every step between order receipt and clean billing handoff.',
      description: 'Services that fit labs and imaging centers.',
      items: [
        {
          num: '01',
          title: 'Medical Order Intake Review',
          description: 'Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance, clinical documentation, and ordering provider information checked before the order advances in the workflow.',
        },
        {
          num: '02',
          title: 'Order Transmission Coordination',
          description: 'Orders transmitted to the correct internal workflow with complete information — routing, status tracking, and queue management so orders do not age without a current status.',
        },
        {
          num: '03',
          title: 'Referral Documentation Follow-Up',
          description: 'Incomplete referrals followed up with referring offices on a defined schedule — specific requirements communicated and tracked until complete documentation is received.',
        },
        {
          num: '04',
          title: 'Eligibility & Benefits Verification',
          description: 'Patient coverage verified before scheduling — service-specific benefits, cost-sharing, authorization requirements, and coverage limitations confirmed before the appointment is confirmed.',
        },
        {
          num: '05',
          title: 'Prior Authorization Support',
          description: 'Authorization requests submitted promptly, tracked through payer processing, and followed up so authorizations are confirmed before service dates rather than retroactively requested after.',
        },
        {
          num: '06',
          title: 'Patient Scheduling Coordination',
          description: 'Scheduling supported once authorization and eligibility are confirmed — appointment coordination with confirmed coverage and complete order documentation.',
        },
        {
          num: '07',
          title: 'Provider Office Communication',
          description: 'Proactive status communication to referring offices — authorization approvals, scheduling confirmations, and results availability communicated before offices call for updates.',
        },
        {
          num: '08',
          title: 'Status Tracking & Reporting',
          description: 'Order pipeline tracked from receipt through completion — order volume, authorization status, scheduling confirmation, and incomplete order counts reported to management on a defined schedule.',
        },
        {
          num: '09',
          title: 'Billing Handoff Support',
          description: 'Completed service records assembled with all required billing documentation — authorization number, eligibility confirmation, diagnosis codes, and medical necessity documentation — before billing handoff.',
        },
        {
          num: '10',
          title: 'Denial & AR Coordination Support',
          description: 'Denial and AR issues traced back to the intake or authorization step that created them — workflow corrections implemented so the same documentation gaps stop producing the same billing failures.',
        },
      ],
    },
  },
};
