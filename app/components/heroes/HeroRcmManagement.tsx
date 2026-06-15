'use client';

import React from 'react';

interface HeroRcmManagementProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const HeroRcmManagement: React.FC<HeroRcmManagementProps> = ({
  eyebrow = 'Revenue cycle management',
  title = 'Your revenue cycle has more leaks than your billing team can see.',
  subtitle = 'Claims go out. Payments come in. But somewhere between eligibility and final deposit, revenue is being lost — quietly, consistently, and in ways no single person on your team has the bandwidth to track.',
  description = 'Hired Billing Support becomes your embedded RCM team — working inside your EHR, managing every step from eligibility to payment posting, and taking ownership of the revenue cycle so you do not have to.'
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
              Review my revenue cycle
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
            <h4>— Revenue Cycle Health · 30-day view</h4>
            <div className="dash-row">
              <span className="dash-label">MTD Billed Charges</span>
              <span className="dash-value green">$212,400</span>
            </div>
            <div className="dash-row">
              <span className="dash-label">Clean Claim Rate</span>
              <span className="dash-value">
                341 claims &nbsp;
                <span className="dash-pill pill-green">98.2%</span>
              </span>
            </div>
            <div className="dash-row">
              <span className="dash-label">Pending Adjudication</span>
              <span className="dash-value amber">$44,820</span>
            </div>
            <div className="dash-row">
              <span className="dash-label">Denial Rate (30-day)</span>
              <span className="dash-value">
                <span className="dash-pill pill-green">3.1% ↓</span>
              </span>
            </div>
            <div className="dash-row">
              <span className="dash-label">AR Over 90 Days</span>
              <span className="dash-value red">$11,340</span>
            </div>
            <div className="dash-row">
              <span className="dash-label">Unworked Denials</span>
              <span className="dash-value green">0</span>
            </div>
            <div className="dash-divider"></div>
            <div className="dash-stats">
              <div className="dash-stat">
                <span className="dash-stat-num">22</span>
                <span className="dash-stat-label">Days in AR</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num">94%</span>
                <span className="dash-stat-label">Collection Rate</span>
              </div>
              <div className="dash-stat">
                <span className="dash-stat-num" style={{ color: 'var(--signal-deep)' }}>
                  $0
                </span>
                <span className="dash-stat-label">Missed Tasks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRcmManagement;
