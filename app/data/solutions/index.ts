// app/data/solutions/index.ts

import { SolutionData } from '../solutionTypes';
import { arDenialFixation } from './ar-denial-fixation';
import { arManagement } from './ar-management';
import { complianceReporting } from './compliance-reporting';
import { medicalAuditing } from './medical-auditing';
import { medicalCoding } from './medical-coding';
import { qualityAssurance } from './quality-assurance';
import { rcmManagement } from './rcm-management';
import { medicalBillingRcm } from './medical-billing-rcm';
import { oldAgingAr } from './old-aging-ar';
import { providerCredential } from './provider-credential';
import { payerInsurerEnrollment } from './payer-insurer-enrollment';
import { practiceLaunch } from './practice-launch';
import { operationsManagement } from './operations-management';
import { marketingPatientEngagement } from './marketing-patient-engagement';
import { virtualHealthcareSolutions } from './virtual-healthcare-solutions';
import { analyticsReporting } from './analytics-reporting';

// Import other solutions here as you create them
// import { rcmManagement } from './rcm-management';
// import { medicalBillingRcm } from './medical-billing-rcm';
// etc.

export const allSolutions: Record<string, SolutionData> = {
  'ar-denial-fixation': arDenialFixation,
  'ar-management': arManagement,
  'compliance-reporting': complianceReporting,
  'medical-auditing': medicalAuditing,
  'medical-coding': medicalCoding,
  'quality-assurance': qualityAssurance,
  'rcm-management': rcmManagement,
  'medical-billing-rcm': medicalBillingRcm,
  'old-aging-ar': oldAgingAr,
  'provider-credential': providerCredential,
  'payer-insurer-enrollment': payerInsurerEnrollment,
  'practice-launch': practiceLaunch,
  'operations-management': operationsManagement,
  'marketing-patient-engagement': marketingPatientEngagement,
  'virtual-healthcare-solutions': virtualHealthcareSolutions,
  'analytics-reporting': analyticsReporting,
  // Add other solutions as you create them
  // 'rcm-management': rcmManagement,
  // 'medical-billing-rcm': medicalBillingRcm,
  // 'old-aging-ar': oldAgingAr,
  // 'medical-coding': medicalCoding,
  // 'medical-auditing': medicalAuditing,
  // 'compliance-reporting': complianceReporting,
  // 'quality-assurance': qualityAssurance,
  // 'provider-credential': providerCredential,
  // 'payer-insurer-enrollment': payerInsurerEnrollment,
  // 'practice-launch': practiceLaunch,
  // 'operations-management': operationsManagement,
  // 'marketing-patient-engagement': marketingPatientEngagement,
  // 'virtual-healthcare-solutions': virtualHealthcareSolutions,
  // 'analytics-reporting': analyticsReporting,
};

export function getSolution(slug: string): SolutionData | null {
  return allSolutions[slug] || null;
}

export function getSolutionSlugs(): string[] {
  return Object.keys(allSolutions);
}
