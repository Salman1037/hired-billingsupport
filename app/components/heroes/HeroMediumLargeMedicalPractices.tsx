'use client';

import { useEffect } from 'react';

interface HeroProps {
  solution?: any;
}

export default function HeroMediumLargeMedicalPractices({ solution }: HeroProps) {
  useEffect(() => {
    // Add staggered animation delays to KPI rows
    const rows = document.querySelectorAll('[data-animated="kpi-row"]');
    rows.forEach((row, index) => {
      (row as HTMLElement).style.setProperty('--reveal-delay', `${0.1 + index * 0.14}s`);
    });
  }, []);

  const styles = `
    .who-hero {
      background: var(--paper);
      padding: 40px 0 100px;
      position: relative;
      overflow: hidden;
    }

    .who-hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .who-hero-bg svg {
      width: 100%;
      height: 100%;
    }

    .who-hero-grain {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: .4;
    }

    .who-hero-inner {
      position: relative;
      z-index: 1;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 clamp(20px, 4vw, 48px);
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 64px;
      align-items: center;
    }

    .who-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .16em;
      color: #00876B;
      background: rgba(0, 200, 150, .08);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .who-hero-title {
      font-family: 'Fraunces', serif;
      font-size: clamp(2.6rem, 5.5vw, 4.2rem);
      font-weight: 400;
      letter-spacing: -.025em;
      line-height: 1.02;
      color: #0A1628;
      margin-bottom: 24px;
      font-variation-settings: "opsz" 144;
    }

    .who-hero-title em {
      font-style: italic;
      font-weight: 300;
      color: #475569;
    }

    .who-hero-subtitle {
      font-size: 17px;
      line-height: 1.7;
      color: #1B2942;
      margin-bottom: 14px;
      max-width: 560px;
    }

    .who-hero-lede {
      font-size: 15px;
      line-height: 1.75;
      color: #475569;
      max-width: 540px;
      margin-bottom: 40px;
    }

    .who-hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: 4px;
      font-family: 'Inter Tight', sans-serif;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background .2s, color .2s, transform .15s;
      white-space: nowrap;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn-primary {
      background: #0A1628;
      color: #FAF7F2;
    }

    .btn-primary:hover {
      background: #1B2942;
    }

    .btn-ghost {
      background: transparent;
      color: #0A1628;
      border-color: #E8E2D5;
    }

    .btn-ghost:hover {
      background: #F2EDE3;
      border-color: #475569;
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 15px;
    }

    .btn .arrow {
      transition: transform .2s;
      flex-shrink: 0;
    }

    .btn:hover .arrow {
      transform: translateX(3px);
    }

    .who-hero-visual {
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    .organization-dashboard {
      background: #0A1628;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, .08), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .org-dash-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: .18em;
      color: #FAF7F2;
      margin-bottom: 20px;
    }

    .kpi-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .kpi-row:last-of-type {
      border-bottom: none;
    }

    .kpi-lbl {
      font-size: 11px;
      color: #FAF7F2;
      min-width: 140px;
    }

    .kpi-bar {
      flex: 1;
      height: 6px;
      background: #E8E2D5;
      border-radius: 3px;
      overflow: hidden;
    }

    .kpi-fill {
      height: 100%;
      border-radius: 3px;
    }

    .kpi-fill.hi {
      background: #00C896;
    }

    .kpi-fill.mi {
      background: #F59E0B;
    }

    .kpi-fill.lo {
      background: #D64545;
    }

    .kpi-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      min-width: 52px;
      text-align: right;
    }

    .kpi-val.hi {
      color: #00876B;
    }

    .kpi-val.mi {
      color: #B45309;
    }

    .kpi-val.lo {
      color: #D64545;
    }

    .dash-divider {
      height: 1px;
      background: #E8E2D5;
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: #F2EDE3;
      border-radius: 4px;
      padding: 10px 8px;
      text-align: center;
    }

    .dash-stat-num {
      font-family: 'Fraunces', serif;
      font-size: 1.25rem;
      color: #00876B;
      display: block;
      line-height: 1;
      margin-bottom: 4px;
    }

    .dash-stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: .1em;
    }

    .gap-callout {
      margin-top: 16px;
      padding: 12px 14px;
      background: rgba(0, 200, 150, 0.08);
      border-left: 2px solid #00C896;
      border-radius: 0 4px 4px 0;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .15em;
      text-transform: uppercase;
      color: #FAF7F2;
      margin-bottom: 4px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 14px;
      color: #FAF7F2;
    }

    .reveal {
      opacity: 0;
      transform: translateY(20px);
    }

    .reveal-1 {
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) .10s forwards;
    }

    .reveal-2 {
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) .22s forwards;
    }

    .reveal-3 {
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) .36s forwards;
    }

    .reveal-4 {
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) .50s forwards;
    }

    @keyframes rv {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media(max-width:1024px) {
      .who-hero-inner {
        grid-template-columns: 1fr;
      }

      .who-hero-visual {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <section className="who-hero">
        <div className="who-hero-bg">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="who-hero-grain"></div>
        </div>

        <div className="who-hero-inner">
          <div>
            <div className="eyebrow reveal reveal-1">Who We Serve · Medical Groups</div>
            <h1 className="who-hero-title reveal reveal-2">
              Growth multiplied your clinical capacity. <br />
              <em>It also multiplied every workflow inconsistency you had before.</em>
            </h1>
            <p className="who-hero-subtitle reveal reveal-3">
              Multi-provider and multi-location practices face a different operational challenge than solo practices. As
              clinical capacity expands, administrative processes that worked for one location often break down across
              multiple locations with different providers, billing patterns, and workflows.
            </p>
            <p className="who-hero-lede reveal reveal-3">
              Hired Billing Support helps medical groups standardize backend operations so multi-provider billing,
              credentialing, denial management, and revenue cycle performance work consistently across all locations —
              allowing clinical growth without operational breakdown.
            </p>
            <div className="who-hero-actions reveal reveal-4">
              <a href="#cta" className="btn btn-primary btn-lg">
                Standardize my group operations
                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#pain" className="btn btn-ghost btn-lg">
                See the multi-provider model
              </a>
            </div>
          </div>

          <div className="who-hero-visual">
            <div className="organization-dashboard">
              <div className="org-dash-title">— Medical Group Performance · Multi-Provider</div>
              
              <div className="kpi-row" data-animated="kpi-row">
                <span className="kpi-lbl">Group Collection Rate</span>
                <div className="kpi-bar">
                  <div className="kpi-fill hi" style={{ width: '93%' }}></div>
                </div>
                <span className="kpi-val hi">93.4%</span>
              </div>

              <div className="kpi-row" data-animated="kpi-row">
                <span className="kpi-lbl">Denial Rate (Group)</span>
                <div className="kpi-bar">
                  <div className="kpi-fill mi" style={{ width: '38%' }}></div>
                </div>
                <span className="kpi-val mi">3.8%</span>
              </div>

              <div className="kpi-row" data-animated="kpi-row">
                <span className="kpi-lbl">Process Standardization</span>
                <div className="kpi-bar">
                  <div className="kpi-fill hi" style={{ width: '87%' }}></div>
                </div>
                <span className="kpi-val hi">87%</span>
              </div>

              <div className="kpi-row" data-animated="kpi-row">
                <span className="kpi-lbl">Provider Compliance</span>
                <div className="kpi-bar">
                  <div className="kpi-fill hi" style={{ width: '94%' }}></div>
                </div>
                <span className="kpi-val hi">94%</span>
              </div>

              <div className="kpi-row" data-animated="kpi-row">
                <span className="kpi-lbl">First-pass Claims Paid</span>
                <div className="kpi-bar">
                  <div className="kpi-fill hi" style={{ width: '91%' }}></div>
                </div>
                <span className="kpi-val hi">91%</span>
              </div>

              <div className="dash-divider"></div>

              <div className="dash-stats">
                <div className="dash-stat">
                  <span className="dash-stat-num">9</span>
                  <span className="dash-stat-label">Providers Tracked</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num" style={{ color: '#B45309' }}>2</span>
                  <span className="dash-stat-label">Cred. Pending</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-stat-num" style={{ color: '#00876B' }}>3</span>
                  <span className="dash-stat-label">Locations</span>
                </div>
              </div>

              <div className="gap-callout">
                <div className="gc-lbl">— Top priority</div>
                <div className="gc-val">Denial rate 0.8% above target — Cigna auth pattern identified.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
