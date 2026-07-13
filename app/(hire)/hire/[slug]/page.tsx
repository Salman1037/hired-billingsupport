// Example Hire Page Template
// Each hire page may have a different layout - customize as needed

interface PageProps {
  params: Promise<{ slug: string }>;
}

const hirePages: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
}> = {
  'medical': {
    title: 'Medical Staffing',
    subtitle: 'Clinical Assistants, Scribes, Reception',
    description: 'Find experienced medical staffing support for clinical assistants, scribes, reception, and patient coordination roles.',
    roles: ['Medical Assistants', 'Clinical Scribes', 'Front Desk Specialists', 'Patient Coordinators'],
  },
  'dental': {
    title: 'Dental Staffing',
    subtitle: 'Assistants & Coordinators',
    description: 'Hire trained dental support professionals for assistants, hygiene coordination, front office, and operations roles.',
    roles: ['Dental Assistants', 'Hygiene Coordinators', 'Front Desk', 'Office Managers'],
  },
  'enterprise': {
    title: 'Enterprise & Billing',
    subtitle: 'Billing Specialists & Operations',
    description: 'Support enterprise billing and revenue operations with experienced specialists in AR, billing, compliance, and management.',
    roles: ['Billing Specialists', 'AR Specialists', 'Operations Managers', 'Compliance Officers'],
  },
  'mso': {
    title: 'MSO & Payer Partners',
    subtitle: 'Staffing for Medical Groups',
    description: 'Scale healthcare operations with staffing support for MSOs, payer partnerships, and medical group back-office teams.',
    roles: ['RCM Specialists', 'Claims Processors', 'Eligibility Specialists', 'Prior Auth Teams'],
  },
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = hirePages[slug] || {
    title: 'Staffing Not Found',
    subtitle: '',
    description: 'The requested staffing page could not be found.',
    roles: [],
  };

  return {
    title: `${page.title} | Hired Billing Support`,
    description: page.description,
  };
}

export default async function HirePage({ params }: PageProps) {
  const { slug } = await params;

  const page = hirePages[slug] || {
    title: 'Staffing Not Found',
    subtitle: '',
    description: 'The requested staffing page could not be found.',
    roles: [],
  };

  return (
    <section style={{ padding: '120px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: '72px' }}>
          <div className="eyebrow">Hire Talent</div>
          <h1 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', marginTop: '20px' }}>
            {page.title}
          </h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: 'var(--ink-mute)', marginTop: '24px' }}>
            {page.subtitle}
          </p>
        </div>

        {page.roles.length > 0 && (
          <div style={{ marginTop: '56px', borderTop: '1px solid var(--paper-line)' }}>
            <div style={{ columnCount: 2, columnGap: '48px' }}>
              {page.roles.map((role, idx) => (
                <div key={idx} style={{ paddingTop: '24px', marginBottom: '24px', breakInside: 'avoid' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '8px', fontFamily: 'var(--serif)' }}>
                    {role}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--ink-mute)', lineHeight: '1.6' }}>
                    Pre-vetted, trained, and ready to join your team.
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '48px' }}>
          <a href="#cta" className="btn btn-primary">
            Contact Our Hiring Team
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
