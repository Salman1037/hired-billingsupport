'use client';

import React from 'react';

interface HeroQualityAssuranceProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroQualityAssurance: React.FC<HeroQualityAssuranceProps> = ({
  eyebrow = 'Quality Assurance',
  title = 'Mistakes in billing are not discovered when they are made.',
  subtitle = 'They are discovered when they cost you something.',
  description = 'A claim gets submitted. A denial comes back weeks later. An audit finds a pattern. A payment is short by 20 percent. In each case, the problem existed long before it surfaced — and a quality layer would have caught it first. Hired Billing Support builds a systematic QA layer across your billing, coding, AR, and revenue cycle operations — catching errors early, standardizing processes, and monitoring performance so problems are found before they become revenue loss.'
}) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#0A1628"
                strokeWidth="0.5"
                opacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-inner">
        <div>
          <div className="eyebrow reveal reveal-1">{eyebrow}</div>
          <h1 className="display reveal reveal-2">
            {title}
            <br />
            <em>{subtitle}</em>
          </h1>
          <p className="sub reveal reveal-3">{description}</p>
          <div className="hero-actions reveal reveal-4">
            <a href="#cta" className="btn btn-primary btn-lg">
              Build a stronger QA layer
              <svg
                className="arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              See what QA catches
            </a>
          </div>
        </div>
        <div className="reveal reveal-4" style={{ animationDelay: '0.55s' }}>
          <div className="hero-card">

<h4>

— QA Performance Scorecard · Monthly

</h4>

<div className="ar-card-row ar-green">

<span className="ar-lbl">

Claim Accuracy

</span>

<div className="ar-bar">

<span style={{ width: '97%' }}></span>

</div>

<span className="ar-val">

97%

</span>

</div>



<div className="ar-card-row ar-green">

<span className="ar-lbl">

Coding QA Pass Rate

</span>

<div className="ar-bar">

<span style={{ width: '95%' }}></span>

</div>

<span className="ar-val">

95%

</span>

</div>



<div className="ar-card-row ar-green">

<span className="ar-lbl">

AR Follow-Up Compliance

</span>

<div className="ar-bar">

<span style={{ width: '98%' }}></span>

</div>

<span className="ar-val">

98%

</span>

</div>



<div className="ar-card-row ar-green">

<span className="ar-lbl">

Denial Work Rate

</span>

<div className="ar-bar">

<span style={{ width: '100%' }}></span>

</div>

<span className="ar-val">

100%

</span>

</div>



<div className="ar-card-row ar-amber">

<span className="ar-lbl">

Process SOP Adherence

</span>

<div className="ar-bar">

<span style={{ width: '91%' }}></span>

</div>

<span className="ar-val">

91%

</span>

</div>



<div
className="gap-callout"
style={{
marginTop:'20px'
}}
>

<div className="gc-lbl">

— This month's finding

</div>

<div className="gc-val">

SOP adherence gap in denial follow-up notes — corrected.

</div>

</div>



<div
style={{
marginTop:'14px',
display:'flex',
gap:'8px',
flexWrap:'wrap'
}}
>

<span className="card-tag before">

12 ERRORS CAUGHT PRE-SUBMIT

</span>

<span className="card-tag after">

3 PROCESS GAPS FOUND

</span>

<span className="card-tag after">

$0 UNREVIEWED DENIALS

</span>

</div>

</div>
        </div>
      </div>
    </section>
  );
};

export default HeroQualityAssurance;
