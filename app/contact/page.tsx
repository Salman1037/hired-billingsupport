'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = formData.name && formData.email && formData.message;

  return (
    <>
      <style>{`
        /* ── Design Tokens (light mode, matching your site's ink/paper system) ── */
        .contact-page {
          --ink:         #0A1628;
          --ink-mid:     #1e3a5f;
          --ink-soft:    #344a6e;
          --ink-mute:    #6b7fa3;
          --paper:       #FAF9F7;
          --paper-2:     #F2F0ED;
          --paper-3:     #E8E5E0;
          --signal:      #0a7c52;
          --signal-light:#e6f4ee;
          --signal-border:#b6deca;
          --amber:       #b45309;
          --amber-light: #fef3c7;
          --danger:      #c0392b;
          --accent:      #0A1628;
          --border:      #dde1ea;
          --border-soft: #eceef4;
          --radius:      8px;
          --radius-lg:   14px;
          --mono:        'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
          --serif:       'Georgia', 'Times New Roman', serif;
          --shadow-sm:   0 1px 3px rgba(10,22,40,.07), 0 1px 2px rgba(10,22,40,.05);
          --shadow-md:   0 4px 16px rgba(10,22,40,.08), 0 1px 4px rgba(10,22,40,.05);
          --shadow-lg:   0 8px 32px rgba(10,22,40,.10), 0 2px 8px rgba(10,22,40,.06);

          font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
        }

        /* ── Reveal animations ── */
        @keyframes revealUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-page .reveal { opacity: 0; animation: revealUp 0.52s cubic-bezier(.22,1,.36,1) forwards; }
        .contact-page .reveal-1 { animation-delay: 0.05s; }
        .contact-page .reveal-2 { animation-delay: 0.14s; }
        .contact-page .reveal-3 { animation-delay: 0.24s; }
        .contact-page .reveal-4 { animation-delay: 0.36s; }
        .contact-page .reveal-5 { animation-delay: 0.48s; }

        /* ── Hero ── */
        .contact-hero {
          position: relative;
          overflow: hidden;
          background: var(--ink);
          padding: 96px 24px 84px;
          text-align: center;
        }

        .contact-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .contact-hero-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .contact-hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .contact-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
        }

        /* Eyebrow — mono uppercase like your site */
        .contact-page .eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          display: block;
          margin-bottom: 18px;
        }

        .eyebrow-light { color: #5ec49a; }  /* on dark hero */
        .eyebrow-dark  { color: var(--signal); } /* on light bg */

        /* Display heading */
        .contact-page .display {
          font-family: var(--serif);
          font-size: clamp(34px, 5vw, 58px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0 0 20px;
        }

        .display-light { color: #FAF9F7; }
        .display-dark  { color: var(--ink); }
        .display-light span { color: #5ec49a; }
        .display-dark  span { color: var(--signal); }

        .contact-page .sub {
          font-size: 17px;
          line-height: 1.65;
          max-width: 500px;
          margin: 0 auto;
        }

        .sub-light { color: rgba(250,249,247,0.62); }
        .sub-dark  { color: var(--ink-mute); }

        /* Hero CTA row */
        .hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        /* Buttons — matching your .btn system */
        .contact-page .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          border-radius: var(--radius);
          padding: 11px 22px;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: opacity 0.18s, transform 0.14s, box-shadow 0.18s;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        .contact-page .btn-lg { font-size: 15px; padding: 13px 26px; }

        .contact-page .btn-primary {
          background: var(--ink);
          color: #FAF9F7;
          box-shadow: 0 2px 8px rgba(10,22,40,.18);
        }
        .contact-page .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }

        .contact-page .btn-ghost {
          background: transparent;
          color: #FAF9F7;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .contact-page .btn-ghost:hover {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.06);
        }

        /* Primary on light bg */
        .contact-page .btn-primary-light {
          background: var(--ink);
          color: #FAF9F7;
          box-shadow: var(--shadow-md);
        }
        .contact-page .btn-primary-light:hover { opacity: 0.88; transform: translateY(-1px); }

        .contact-page .btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none;
        }

        /* ── Body layout ── */
        .contact-body {
          max-width: 1160px;
          margin: 0 auto;
          padding: 64px 24px 96px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }

        @media (max-width: 880px) {
          .contact-body {
            grid-template-columns: 1fr;
            padding: 40px 20px 72px;
          }
        }

        /* ── Light card ── */
        .light-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 36px 36px;
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 560px) {
          .light-card { padding: 24px 20px; }
        }

        /* Card mono label */
        .card-mono-label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--ink-mute);
          font-weight: 600;
          margin-bottom: 6px;
        }

        .card-title {
          font-family: var(--serif);
          font-size: 22px;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .card-sub {
          font-size: 13px;
          color: var(--ink-mute);
          margin-bottom: 28px;
          line-height: 1.6;
        }

        /* ── Form fields ── */
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 540px) {
          .form-grid-2 { grid-template-columns: 1fr; }
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 18px;
        }

        .form-group label {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-soft);
          margin-bottom: 7px;
        }

        .form-group label em {
          color: var(--danger);
          font-style: normal;
          margin-left: 2px;
        }

        .form-group input,
        .form-group textarea {
          font-family: inherit;
          font-size: 14px;
          color: var(--ink);
          background: var(--paper);
          border: 1.5px solid var(--border);
          border-radius: var(--radius);
          padding: 11px 14px;
          outline: none;
          transition: border-color 0.18s, background 0.18s, box-shadow 0.18s;
          width: 100%;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--ink-mute);
          opacity: 0.6;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--ink);
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(10,22,40,0.07);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.6;
        }

        /* Submit row */
        .form-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .form-note {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--ink-mute);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* Spinner */
        .spinner {
          width: 15px;
          height: 15px;
          border: 2px solid rgba(250,249,247,0.35);
          border-top-color: #FAF9F7;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Success state ── */
        .success-state {
          text-align: center;
          padding: 52px 16px;
        }

        .success-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--signal-light);
          border: 1px solid var(--signal-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .success-state h3 {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--ink);
          margin-bottom: 10px;
        }

        .success-state p {
          font-size: 14px;
          color: var(--ink-mute);
          line-height: 1.65;
          max-width: 300px;
          margin: 0 auto;
        }

        /* ── Info side ── */
        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Info rows */
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid var(--border-soft);
        }

        .info-row:last-child { border-bottom: none; padding-bottom: 0; }
        .info-row:first-of-type { padding-top: 0; }

        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius);
          background: var(--signal-light);
          border: 1px solid var(--signal-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .info-text strong {
          display: block;
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
          margin-bottom: 3px;
        }

        .info-text span,
        .info-text a {
          font-size: 13px;
          color: var(--ink);
          line-height: 1.55;
          text-decoration: none;
        }

        .info-text a:hover { color: var(--signal); }

        /* Stats row */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-soft);
        }

        .stat-item { text-align: center; }

        .stat-num {
          font-family: var(--serif);
          font-size: 20px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink-mute);
        }

        /* Alert callout */
        .alert-callout {
          background: var(--signal-light);
          border: 1px solid var(--signal-border);
          border-radius: var(--radius);
          padding: 12px 14px;
          margin-top: 16px;
        }

        .alert-callout-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--signal);
          margin-bottom: 4px;
          font-weight: 600;
        }

        .alert-callout-text {
          font-size: 12px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        /* Hours card */
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-soft);
          font-size: 13px;
        }

        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-row:first-of-type { padding-top: 0; }

        .hours-row .day { color: var(--ink-mute); }
        .hours-row .time { color: var(--ink); font-weight: 600; }
        .hours-row .time.closed { color: var(--danger); }

        /* ── Map section ── */
        .map-section {
          background: var(--paper-2);
          border-top: 1px solid var(--border);
          padding: 64px 24px;
        }

        .map-inner {
          max-width: 1160px;
          margin: 0 auto;
        }

        .map-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .map-header h2 {
          font-family: var(--serif);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: var(--ink);
          margin-top: 10px;
          letter-spacing: -0.01em;
        }

        .map-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-lg);
          height: 400px;
        }

        .map-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* ── Section divider ── */
        .section-divider {
          height: 1px;
          background: var(--border);
          margin: 0;
        }

        /* ── Trust strip ── */
        .trust-strip {
          background: #ffffff;
          border-top: 1px solid var(--border);
          padding: 28px 24px;
        }

        .trust-strip-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
        }

        .trust-item svg { color: var(--signal); flex-shrink: 0; }
      `}</style>

      <div className="contact-page">

        {/* ── Hero (dark, matching your site hero) ── */}
        <section className="contact-hero">
          <div className="contact-hero-bg">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="c-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#c-grid)" />
            </svg>
            <div className="contact-hero-grain" />
          </div>
          <div className="contact-hero-inner">
            <span className="eyebrow eyebrow-light reveal reveal-1">— Contact Us</span>
            <h1 className="display display-light reveal reveal-2">
              Let's Talk About Your <span>Billing Needs</span>
            </h1>
            <p className="sub sub-light reveal reveal-3">
              Whether you're a solo practice or a large medical group, our billing
              specialists respond within 1 business day.
            </p>
            <div className="hero-actions reveal reveal-4">
              <a href="#contact-form" className="btn btn-primary btn-lg" style={{ background: '#5ec49a', color: '#0A1628' }}>
                Send a Message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#map-section" className="btn btn-ghost btn-lg">
                Find Our Office
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ── Body: light background ── */}
        <div className="contact-body" id="contact-form">

          {/* ── Form Card ── */}
          <div className="light-card reveal reveal-2">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon-wrap">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Message Received</h3>
                <p>
                  A billing specialist will reach out within 1 business day
                  to schedule your free consultation.
                </p>
              </div>
            ) : (
              <>
                <div className="card-mono-label">— Free Consultation Request</div>
                <div className="card-title">Get in Touch</div>
                <div className="card-sub">Fill out the form and we'll get back to you within 24 hours.</div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name<em>*</em></label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Dr. Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address<em>*</em></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@clinic.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Practice / Company</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Sunrise Medical Group"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>How can we help?<em>*</em></label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your current billing challenges, practice size, or the services you're interested in…"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-actions">
                  <button
                    className="btn btn-primary-light btn-lg"
                    onClick={handleSubmit}
                    disabled={loading || !isValid}
                  >
                    {loading ? (
                      <><div className="spinner" /> Sending…</>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                  <span className="form-note">— Response within 24 hrs</span>
                </div>
              </>
            )}
          </div>

          {/* ── Info Side ── */}
          <div className="info-stack">

            {/* Contact details */}
            <div className="light-card reveal reveal-3">
              <div className="card-mono-label">— Contact Information</div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Phone</strong>
                  <a href="tel:+18005551234">+1 (800) 555-1234</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Email</strong>
                  <a href="mailto:support@hiredbillingsupport.com">support@hiredbillingsupport.com</a>
                </div>
              </div>

              <div className="info-row">
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-text">
                  <strong>Office Address</strong>
                  <span>1234 Healthcare Blvd, Suite 500<br />New York, NY 10001</span>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-num">500+</div>
                  <div className="stat-label">Practices</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num" style={{ color: 'var(--amber)' }}>24hr</div>
                  <div className="stat-label">Response</div>
                </div>
                <div className="stat-item">
                  <div className="stat-num">98%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
              </div>

              <div className="alert-callout">
                <div className="alert-callout-label">— HIPAA Compliant</div>
                <div className="alert-callout-text">
                  All communications and data handling are fully HIPAA-compliant. Your practice information is secure.
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="light-card reveal reveal-4">
              <div className="card-mono-label">— Business Hours</div>
              <div className="hours-row">
                <span className="day">Monday – Friday</span>
                <span className="time">8:00 AM – 6:00 PM EST</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM – 2:00 PM EST</span>
              </div>
              <div className="hours-row">
                <span className="day">Sunday</span>
                <span className="time closed">Closed</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── Map ── */}
        <section className="map-section" id="map-section">
          <div className="map-inner">
            <div className="map-header reveal reveal-2">
              <span className="eyebrow eyebrow-dark">— Our Location</span>
              <h2>Find Us on the Map</h2>
            </div>
            <div className="map-frame reveal reveal-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256765774!2d-73.98731492346988!3d40.75797443440888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30cb1c1%3A0x4b0d2c22c0c18a!2sMidtown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1718200000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <div className="trust-strip">
          <div className="trust-strip-inner">
            {[
              { label: 'HIPAA Compliant',        path: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
              { label: 'Response Within 24 Hrs', path: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { label: 'Free Consultation',       path: <polyline points="20 6 9 17 4 12"/> },
              { label: '500+ Practices Served',   path: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></> },
            ].map((t, i) => (
              <div className="trust-item" key={i}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {t.path}
                </svg>
                {t.label}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}