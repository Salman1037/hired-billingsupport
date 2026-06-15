'use client';

import React from 'react';

interface HeroMedicalBillingRcmProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroMedicalBillingRcm: React.FC<HeroMedicalBillingRcmProps> = ({
  eyebrow = 'For medical practices & specialty clinics',
  title = 'Your production looks fine on paper. Your collections tell a different story.',
  subtitle = 'You are seeing patients. Charges are being entered. Claims are going out. And yet the money in the bank never quite matches the work you did this month. That gap is not accidental — and it is not unfixable.',
  description = 'Hired Billing Support becomes your embedded medical billing and RCM team — working inside your EHR, following your workflow, and taking ownership of every step between eligibility and final payment.'
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
          </h1>
          <p className="sub reveal reveal-3">{subtitle}</p>
          <p className="lede reveal reveal-3">{description}</p>
          <div className="hero-actions reveal reveal-4">
            <a href="#cta" className="btn btn-primary btn-lg">
              Review my billing workflow
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
            <a href="#pain" className="btn btn-ghost btn-lg">
              See where revenue leaks
            </a>
          </div>
        </div>
        <div className="reveal reveal-4" style={{ animationDelay: '0.55s' }}>
          <div className="hero-card">
            <h4>— Practice Revenue Snapshot · 30-day</h4>
            <div className="bar-set">
              <div className="bar-row">
                <span className="lbl">BILLED</span>
                <div className="bar production">
                  <span></span>
                </div>
                <span className="val">$198k</span>
              </div>
              <div className="bar-row">
                <span className="lbl">BEFORE HBS</span>
                <div className="bar collection-before">
                  <span></span>
                </div>
                <span className="val">$141k</span>
              </div>
              <div className="bar-row">
                <span className="lbl">WITH HBS</span>
                <div className="bar collection-after">
                  <span></span>
                </div>
                <span className="val">$189k</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="card-tag before">71% COLLECTION RATE</span>
              <span className="card-tag after">95% COLLECTION RATE</span>
            </div>
            <div className="gap-callout">
              <div className="gc-lbl">— Revenue recovered monthly</div>
              <div className="gc-val">$48,000 — the production-to-collection gap, closed.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMedicalBillingRcm;
