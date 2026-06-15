// app/components/Navigation.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect (client-side only)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`top ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img src="/logo.png" alt="Hired Billing Support" style={{ height: '40px', width: 'auto' }} />
        </Link>

        {/* Hire Talent Dropdown */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown('hire')}>
            Hire Talent <span className="chevron">▼</span>
          </button>
          <div className={`dropdown-menu dropdown-grid-4 ${activeDropdown === 'hire' ? 'active' : ''}`}>
            <div className="dropdown-column">
              <div className="column-header">CLINICAL ROLES</div>
              <Link href="/hire/medical">Medical — Assistants, Scribes, Reception</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">DENTAL ROLES</div>
              <Link href="/hire/dental">Dental — Assistants & Coordinators</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">Enterprise & BILLING</div>
              <Link href="/hire/enterprise">Enterprise & Billing Specialists</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">MSO / Payer Partners</div>
              <Link href="/hire/mso">MSO / Payer Partners</Link>
            </div>
          </div>
        </div>

        {/* Solutions Dropdown */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown('solutions')}>
            Solutions <span className="chevron">▼</span>
          </button>
          <div className={`dropdown-menu dropdown-grid-4 ${activeDropdown === 'solutions' ? 'active' : ''}`}>
            <div className="dropdown-column">
              <div className="column-header">BILLING SERVICES</div>
              <Link href="/solutions/rcm-management">Revenue Cycle Management</Link>
              <Link href="/solutions/medical-billing-rcm">Medical Billing & RCM</Link>
              <Link href="/solutions/ar-management">AR Management</Link>
              <Link href="/solutions/ar-denial-fixation">Denial Management & Fixation</Link>
              <Link href="/solutions/old-aging-ar">Old & Aging AR Recovery</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">CODING & COMPLIANCE</div>
              <Link href="/solutions/medical-coding">Medical Coding</Link>
              <Link href="/solutions/medical-auditing">Medical Auditing</Link>
              <Link href="/solutions/compliance-reporting">Compliance & Reporting</Link>
              <Link href="/solutions/quality-assurance">Quality Assurance</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">PRACTICE MANAGEMENT</div>
              <Link href="/solutions/provider-credential">Provider Credential</Link>
              <Link href="/solutions/payer-insurer-enrollment">Payer & Insurer Enrollment</Link>
              <Link href="/solutions/practice-launch">Practice Launch</Link>
              <Link href="/solutions/operations-management">Operations Management</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">ADVANCED SOLUTIONS</div>
              <Link href="/solutions/marketing-patient-engagement">Marketing & Patient Engagement</Link>
              <Link href="/solutions/virtual-healthcare-solutions">Virtual Healthcare Solutions</Link>
              <Link href="/solutions/analytics-reporting">Analytics & Reporting</Link>
            </div>
          </div>
        </div>

        {/* Who We Serve Dropdown */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown('who-we-serve')}>
            Who We Serve <span className="chevron">▼</span>
          </button>
          <div className={`dropdown-menu dropdown-grid-3 ${activeDropdown === 'who-we-serve' ? 'active' : ''}`}>
            <div className="dropdown-column">
              <div className="column-header">Provider Organizations</div>
              <Link href="/who-we-serve/start-ups">Startups Practices</Link>
              <Link href="/who-we-serve/small-medical-practices">Small Medical Practices</Link>
              <Link href="/who-we-serve/medium-large-medical-practices">Medium & Large Medical Groups</Link>
              <Link href="/who-we-serve/enterprise-medical-operation">Enterprise Medical Operation</Link>
              <Link href="/who-we-serve/fqhc">Federally Qualified Health Centers</Link>
              <Link href="/who-we-serve/member-centric-care">Member Centric Care</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">Medical Specialties</div>
              <Link href="/who-we-serve/psychiatry">Psychiatry</Link>
              <Link href="/who-we-serve/orthopedic">Orthopedic</Link>
              <Link href="/who-we-serve/cardiology">Cardiology</Link>
              <Link href="/who-we-serve/obgyn">Obgyn</Link>
              <Link href="/who-we-serve/endocrinology">Endocrinology</Link>
              <Link href="/who-we-serve/neurology">Neurology</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">Organizations & Partners</div>
              <Link href="/who-we-serve/payers">Medical Payers</Link>
              <Link href="/who-we-serve/medical-order-transmission">
                Medical Order Transmission
              </Link>
              <Link href="/who-we-serve/hbs-marketing">Marketing Partners</Link>
              <Link href="/who-we-serve/developer-portal">Developer</Link>
            </div>
          </div>
        </div>

        {/* Resources Dropdown */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown('resources')}>
            Resources <span className="chevron">▼</span>
          </button>
          <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'resources' ? 'active' : ''}`}>
            <div className="dropdown-column">
              <div className="column-header">LEARN</div>
              <Link href="#">Blog & Insights</Link>
              <Link href="#">Case Studies</Link>
              <Link href="#">Healthcare Trends</Link>
              <Link href="#">Webinars</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">SUPPORT</div>
              <Link href="#">Documentation</Link>
              <Link href="#">FAQs</Link>
              <Link href="#">Contact Support</Link>
              <Link href="#">Schedule a Demo</Link>
            </div>
          </div>
        </div>

        {/* Company Dropdown */}
        <div className="nav-dropdown">
          <button className="dropdown-toggle" onClick={() => toggleDropdown('company')}>
            Company <span className="chevron">▼</span>
          </button>
          <div className={`dropdown-menu dropdown-grid-2 ${activeDropdown === 'company' ? 'active' : ''}`}>
            <div className="dropdown-column">
              <div className="column-header">ABOUT</div>
              <Link href="#">Our Story</Link>
              <Link href="#">Team</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
            </div>
            <div className="dropdown-column">
              <div className="column-header">TRUST & SECURITY</div>
              <Link href="#">Security Overview</Link>
              <Link href="#">HIPAA Compliance</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="nav-cta">
          <Link href="#cta" className="btn btn-primary">
            Consultation
            <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}