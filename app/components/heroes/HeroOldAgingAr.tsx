'use client';

const HeroOldAgingAr = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-inner">
        <div>
          <div className="eyebrow">Old & aging AR recovery</div>
          <h1 className="display">
            You already did the work.<br />
            <em>You just have not been paid for all of it yet.</em>
          </h1>
          <p className="sub">
            Your 60, 90, 120, and 180+ day accounts receivable is not a write-off pile. It is revenue you earned through actual patient care — sitting in claims your team has not had the time or structure to systematically pursue.
          </p>
          <p className="lede">
            Hired Billing Support reviews your entire aging AR, identifies what is still collectible, prioritizes the highest-value recovery targets, and works the backlog down — without overwhelming the team running your daily operations.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary btn-lg">
              Start my AR audit
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#pain" className="btn btn-ghost btn-lg">
              See what we recover
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h4>— Aging AR Recovery Snapshot</h4>
          
          {/* AR Aging Buckets */}
          <div className="ar-card-row ar-green">
            <span className="ar-lbl">0–60 days</span>
            <div className="ar-bar">
              <span style={{ width: '85%' }}></span>
            </div>
            <span className="ar-val">$82,400</span>
          </div>
          
          <div className="ar-card-row ar-amber">
            <span className="ar-lbl">61–90 days</span>
            <div className="ar-bar">
              <span style={{ width: '58%' }}></span>
            </div>
            <span className="ar-val">$48,200</span>
          </div>
          
          <div className="ar-card-row ar-orange">
            <span className="ar-lbl">91–120 days</span>
            <div className="ar-bar">
              <span style={{ width: '38%' }}></span>
            </div>
            <span className="ar-val">$32,700</span>
          </div>
          
          <div className="ar-card-row ar-red">
            <span className="ar-lbl">121–180 days</span>
            <div className="ar-bar">
              <span style={{ width: '24%' }}></span>
            </div>
            <span className="ar-val">$21,350</span>
          </div>
          
          <div className="ar-card-row ar-red">
            <span className="ar-lbl">180+ days</span>
            <div className="ar-bar">
              <span style={{ width: '14%' }}></span>
            </div>
            <span className="ar-val">$14,800</span>
          </div>
          
          {/* Gap Callout */}
          <div className="gap-callout" style={{ marginTop: '20px' }}>
            <div className="gc-lbl">— Estimated collectible (90+ days)</div>
            <div className="gc-val">$47,200 · recoverable with systematic follow-up</div>
          </div>
          
          {/* Tags */}
          <div style={{ marginTop: '14px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span className="card-tag before">$68,850 OVER 90 DAYS</span>
            <span className="card-tag after">68% COLLECTIBLE EST.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOldAgingAr;
