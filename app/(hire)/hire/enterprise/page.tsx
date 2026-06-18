import Link from 'next/link';

export default function enterprise() {
  return (
<section>
  <section className="hero">
    <div className="hero-bg">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width={48} height={48} patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="hero-grain" />
    </div>
    <div className="hero-inner">
      <div>
        <div className="eyebrow reveal reveal-1">For multi-location groups, medical chains &amp; large practices</div>
        <h1 className="display reveal reveal-2">Eleven locations. Eleven different ways of doing the same thing. <em>That's
            the <span className="ul">real</span> problem.</em></h1>
        <p className="sub reveal reveal-3">Each office runs its own playbook. One location's AR is clean; another's is
          buried. Your reports tell you the what — they can't tell you the why. And your payroll keeps growing while
          your standardization doesn't.</p>
        <p className="lede reveal reveal-3">Hired Billing Support becomes your remote operations department — a
          standardized, accountable layer that runs RCM, AR, prior auth, scheduling, and operations management across
          every site. One playbook. One scoreboard. One team you don't have to recruit.</p>
        <div className="hero-actions reveal reveal-4">
          <a href="#cta" className="btn btn-primary">Book an enterprise discovery call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg></a>
          <a href="#cta" className="btn btn-text">Request a multi-location ops assessment →</a>
        </div>
      </div>
      {/* Command center card */}
      <div className="reveal reveal-4" style={{animationDelay: '.55s'}}>
        <div className="hero-card">
          <h4>— Multi-site command center · Live</h4>
          <div className="site-grid">
            <div className="site-tile">
              <div className="sn">Austin</div>
              <div className="site-row"><span>Collections</span><span className="sv g">96%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv g">22</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv g">98%</span></div>
            </div>
            <div className="site-tile">
              <div className="sn">Dallas</div>
              <div className="site-row"><span>Collections</span><span className="sv g">93%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv g">26</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv g">97%</span></div>
            </div>
            <div className="site-tile problem">
              <div className="sn">Houston ⚠</div>
              <div className="site-row"><span>Collections</span><span className="sv r">71%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv r">58</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv a">89%</span></div>
            </div>
            <div className="site-tile">
              <div className="sn">Phoenix</div>
              <div className="site-row"><span>Collections</span><span className="sv g">94%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv g">24</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv g">97%</span></div>
            </div>
            <div className="site-tile">
              <div className="sn">Denver</div>
              <div className="site-row"><span>Collections</span><span className="sv a">87%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv a">34</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv g">95%</span></div>
            </div>
            <div className="site-tile">
              <div className="sn">Tampa</div>
              <div className="site-row"><span>Collections</span><span className="sv g">92%</span></div>
              <div className="site-row"><span>AR days</span><span className="sv g">27</span></div>
              <div className="site-row"><span>Clean rate</span><span className="sv g">96%</span></div>
            </div>
          </div>
          <div className="card-footer">
            <span className="lbl">Avg group AR days</span>
            <span className="val">31.8 → needs to be 25</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ PAIN ═══════════ */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The growth tax</div>
        <h2 className="display">You've grown. The operational complexity has grown <em>faster.</em></h2>
      </div>
      <div className="monologue fade-in">
        <p>You added the fourth location and it felt fine. The seventh started to strain. By eleven, every operational
          meeting is a tour of which office is broken this week.</p>
        <p>You have an office manager at every site. They're good. But they all manage slightly differently. Your
          highest-collecting location is great because Linda is great — not because the system is great. If Linda
          leaves, the location regresses. You know this because it happened in Phoenix last year.</p>
        <p>You have a billing director at HQ. She's drowning. She's overseeing eleven separate workflows that should be
          one workflow.</p>
        <p>Payroll has grown 40% in two years. Collections growth hasn't kept pace.</p>
        <p><em>You don't need more people. You need a different operating model.</em></p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row">
          <div className="pn">01</div>
          <div className="ptitle">Eleven locations, eleven workflows.</div>
          <div className="pdesc">Standardization decays as you scale. What was once "how we do things" becomes "how each
            office does things." Reporting gaps widen. Quality varies by site.</div>
        </div>
        <div className="pain-row">
          <div className="pn">02</div>
          <div className="ptitle">Performance depends on people, not systems.</div>
          <div className="pdesc">Your best office is best because of a person. When that person leaves, the location moves.
            That's not a business — that's a craft shop.</div>
        </div>
        <div className="pain-row">
          <div className="pn">03</div>
          <div className="ptitle">Payroll is outpacing collections.</div>
          <div className="pdesc">You added three billers, two MAs, and a coordinator last year. Collections grew 6%.
            Operational margin shrank. The math is heading the wrong direction.</div>
        </div>
        <div className="pain-row">
          <div className="pn">04</div>
          <div className="ptitle">Reporting tells you what, not why.</div>
          <div className="pdesc">AR is at 41 days. Houston is at 58. You see it on the dashboard. You don't see why. Or who.
            Or what to do about it.</div>
        </div>
        <div className="pain-row">
          <div className="pn">05</div>
          <div className="ptitle">Standardization is a project nobody finishes.</div>
          <div className="pdesc">Every quarter someone writes a new SOP doc. Three offices adopt it. Two don't. Six adopt
            the parts they like. By next quarter, it's stale.</div>
        </div>
        <div className="pain-row">
          <div className="pn">06</div>
          <div className="ptitle">Talent acquisition is consuming leadership time.</div>
          <div className="pdesc">Your billing director is interviewing instead of optimizing. Your COO is recruiting instead
            of strategizing. You're solving last quarter's hiring problem while next quarter's bottleneck builds.</div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ BEHIND THE SCENES ═══════════ */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What's actually happening behind the scenes</div>
        <h2 className="display">You don't have an execution problem. <em>You have an operating model problem.</em></h2>
      </div>
      <div className="monologue fade-in" style={{maxWidth: 820}}>
        <p style={{fontFamily: 'var(--sans)', fontSize: 17, lineHeight: '1.65', color: 'var(--ink-mute)'}}>Most multi-location
          groups grow the same way: replicate the original office, hire a manager, hope it works. It scales until it
          doesn't — usually somewhere between 5 and 12 locations, where the cost of inconsistency starts to outweigh the
          cost of the next hire.</p>
        <p style={{fontFamily: 'var(--sans)', fontSize: 17, lineHeight: '1.65', color: 'var(--ink-mute)'}}>At that point, the
          answer isn't "hire harder." It's not "buy better software." It's: <strong style={{color: 'var(--ink)'}}>standardize the operational layer across the entire group, and run it from one
            accountable place.</strong></p>
      </div>
      <div style={{marginTop: 48}} className="fade-in">
        <div className="eyebrow" style={{marginBottom: 24}}>What the standardized layer looks like</div>
        <ul className="ops-model-list">
          <li><strong>One billing operation</strong> across all locations, not eleven</li>
          <li><strong>One AR follow-up team</strong> working a single aging report, not eleven</li>
          <li><strong>One prior-auth queue</strong> across all providers, with payer-specialized routing</li>
          <li><strong>One front-desk overflow team</strong> supporting every location during volume spikes</li>
          <li><strong>One operations lead</strong> embedded with your COO, owning KPIs across all sites</li>
          <li><strong>One real-time dashboard</strong> showing performance by site, by provider, by payer</li>
        </ul>
      </div>
      <div className="insight fade-in" style={{marginTop: 40}}>That's the remote operations department. <em>That's what we
          build for groups.</em></div>
    </div>
  </section>
  {/* ═══════════ SOLUTION ═══════════ */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We become your remote <em>operations department.</em></h2>
        <p>Hired Billing Support gives multi-location groups a standardized, embedded operations layer that runs the
          work consistently across every site — at a fraction of the cost of doing it in-house. Same SOPs everywhere.
          Same KPIs. Same accountability.</p>
        <p>You'll have a dedicated operations lead from our side who functions as a department head — reporting into
          your COO, owning the operational scorecard across all sites, and managing the team that executes underneath
          them.</p>
        <p>Your office managers stop fighting fires and start managing patient experience. Your billing director stops
          chasing eleven workflows and starts running one. Your COO stops recruiting and starts strategizing.</p>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginTop: 32, maxWidth: 700}}>
          The chaos doesn't disappear because you wished it away. It disappears because someone is finally running it as
          one operation.</p>
      </div>
    </div>
  </section>
  {/* ═══════════ SERVICES ═══════════ */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What we run for enterprise groups</div>
        <h2 className="display">The full operational <em>stack — standardized.</em></h2>
        <p>Every capability built to run across multiple sites, multiple EHRs, and multiple specialties from a single
          accountable layer.</p>
      </div>
      <div className="svc-grid-2 fade-in">
        <div className="svc-card">
          <h4>Centralized RCM</h4>
          <p>One billing operation across every site. Same SOPs, same QA standards, same KPIs. Site-level reporting,
            group-level dashboard.</p>
        </div>
        <div className="svc-card">
          <h4>Centralized AR Follow-Up</h4>
          <p>One AR team working a single consolidated aging report. Payer-specialized routing. Cleared systematically,
            not opportunistically.</p>
        </div>
        <div className="svc-card">
          <h4>Centralized Prior Authorization</h4>
          <p>Single queue across all providers and specialties. Payer-specialized authorizers. Turnaround tracked at the
            group level.</p>
        </div>
        <div className="svc-card">
          <h4>Insurance Verification at Scale</h4>
          <p>Verifications batched and processed for every site's next-day schedule. Real-time visibility into coverage
            issues before patients arrive.</p>
        </div>
        <div className="svc-card">
          <h4>Front Desk Overflow &amp; Coverage</h4>
          <p>Phone overflow during volume spikes, after-hours coverage, full virtual front desk for new locations during
            ramp.</p>
        </div>
        <div className="svc-card">
          <h4>Operations Management Layer</h4>
          <p>A dedicated ops lead embedded with your leadership, owning standardization, KPIs, vendor management, and
            continuous improvement.</p>
        </div>
        <div className="svc-card">
          <h4>Group-Level Reporting &amp; Analytics</h4>
          <p>Consolidated dashboards showing site comparison, provider comparison, payer comparison — with drill-down to
            root cause.</p>
        </div>
        <div className="svc-card">
          <h4>New Location &amp; M&amp;A Integration</h4>
          <p>When you open or acquire a site, the operational layer is already standardized and ready. Billing and ops
            integrated within 30-60 days.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ HOW WE WORK ═══════════ */}
  <section className="block">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">How we work</div>
        <h2 className="display">We become a department <em>of your organization.</em></h2>
      </div>
      <div className="steps-5 fade-in">
        <div className="step featured">
          <span className="num">— 01</span>
          <h4>Embedded ops leadership.</h4>
          <p>A dedicated ops lead from our side, reporting to your COO or VP of Operations. Weekly sync. Monthly review.
            Quarterly strategy.</p>
        </div>
        <div className="step">
          <span className="num">— 02</span>
          <h4>Standardized SOPs.</h4>
          <p>We work with leadership to define one operational standard, then enforce it consistently. No more "how each
            office does it."</p>
        </div>
        <div className="step">
          <span className="num">— 03</span>
          <h4>One scorecard.</h4>
          <p>Collections by site, AR by site, clean-claim rate, denial rate, prior-auth turnaround. Real-time.
            Drill-down.</p>
        </div>
        <div className="step">
          <span className="num">— 04</span>
          <h4>We work in your systems.</h4>
          <p>Whatever each site uses. If you've consolidated, we work in that. Mid-migration? We work in both.</p>
        </div>
        <div className="step">
          <span className="num">— 05</span>
          <h4>Scale with your growth.</h4>
          <p>New location? Operationally ready before the doors open. Acquisition? Integrated within 60 days. Growth
            doesn't break the operation.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ AI + HUMAN ═══════════ */}
  <section className="block dark">
    <div className="container">
      <div className="ai-section-inner fade-in">
        <div className="eyebrow">AI + human at enterprise scale</div>
        <h2 className="display" style={{marginTop: 20}}>At enterprise scale, AI is the only way <em>the math works.</em>
        </h2>
        <p>A 12-location practice generates the operational volume of a hospital. The only way to run it efficiently is
          to use AI for the repetitive lifting — eligibility checks, claim scrubbing, denial categorization, document
          classification — and put trained humans on the work that requires judgment.</p>
        <p>We've built our enterprise model around that ratio. AI handles the volume. Specialists handle the judgment.
          Leadership handles the strategy.</p>
        <p style={{color: 'var(--paper)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 22, marginTop: 32}}>That's
          the only model that doesn't break at scale.</p>
      </div>
    </div>
  </section>
  {/* ═══════════ RESULTS ═══════════ */}
  <section className="block" id="results">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">By the numbers</div>
        <h2 className="display">What standardization looks like <em>in numbers.</em></h2>
        <p>Drawn from multi-location clients (5–30+ locations) across primary care, dental, behavioral health, urgent
          care, and multi-specialty groups.</p>
      </div>
      <div className="results-row fade-in">
        <div className="result-block">
          <div className="v">+20<span className="unit">%</span></div>
          <div className="d">Group-wide collections lift within the first two quarters.</div>
        </div>
        <div className="result-block">
          <div className="v">45<span className="unit">%</span></div>
          <div className="d">Lower operational cost versus equivalent in-house build.</div>
        </div>
        <div className="result-block">
          <div className="v">28<span className="unit">d</span></div>
          <div className="d">Standardized AR days across all sites within 6 months.</div>
        </div>
      </div>
      <div className="results-row fade-in" style={{borderTop: 'none'}}>
        <div className="result-block">
          <div className="v">97<span className="unit">%+</span></div>
          <div className="d">First-pass clean-claim rate consistently across all sites.</div>
        </div>
        <div className="result-block">
          <div className="v">-60<span className="unit">%</span></div>
          <div className="d">Reduction in site-to-site performance variance.</div>
        </div>
        <div className="result-block">
          <div className="v">-70<span className="unit">%</span></div>
          <div className="d">Leadership time spent recruiting and managing operations.</div>
        </div>
      </div>
      <div className="testi">
        <div className="testi-quote">
          Working with HBS has been a game-changer. The team is professional, responsive, and has streamlined our
          billing operations seamlessly.
        </div>
        <div className="testi-attr">
          <div className="testi-avatar">HM</div>
          <div>
            <div className="testi-name">Herma Thompson PMHNP-BC</div>
            <div className="testi-role">Nurse Practitioner - Psych/Mental Health</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ COMPARE ═══════════ */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The honest comparison</div>
        <h2 className="display">Why not build a centralized billing office <em>in-house?</em></h2>
        <p>It's the right question. Many groups try. Here's the trade-off honestly.</p>
      </div>
      <div className="compare fade-in">
        <div className="compare-row head">
          <div className="col left">Build centralized BO in-house</div>
          <div className="col right">Embed HBS as remote ops dept</div>
        </div>
        <div className="compare-row">
          <div className="col left">12–24 months to stand up</div>
          <div className="col right">30–60 days to live</div>
        </div>
        <div className="compare-row">
          <div className="col left">Real estate, infrastructure, fixed cost</div>
          <div className="col right">Variable cost — scales with you</div>
        </div>
        <div className="compare-row">
          <div className="col left">Hiring 20–40 FTEs</div>
          <div className="col right">We provide the team</div>
        </div>
        <div className="compare-row">
          <div className="col left">25–30% admin overhead on payroll</div>
          <div className="col right">None</div>
        </div>
        <div className="compare-row">
          <div className="col left">You bear attrition risk</div>
          <div className="col right">We absorb it</div>
        </div>
        <div className="compare-row">
          <div className="col left">Capped by your local labor market</div>
          <div className="col right">Trained healthcare specialist pool</div>
        </div>
        <div className="compare-row">
          <div className="col left">One more business to run</div>
          <div className="col right">Operations runs itself. You focus on growth.</div>
        </div>
      </div>
      <div className="insight fade-in">For groups at 5+ locations, the math almost always favors embedding versus building.
        Not because building doesn't work — <em>but because the opportunity cost of leadership time spent building
          operations is higher than the cost of leasing them.</em></div>
    </div>
  </section>
  {/* ═══════════ FINAL CTA ═══════════ */}
  <section className="final-cta" id="cta">
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,.55)'}}>Let's look at the whole operation
      </div>
      <h2 className="display">One call. Every site on the table. <em>Let's find the leaks.</em></h2>
      <p>Give us a 60-minute discovery call. We'll review your operational structure across locations, identify where
        standardization moves the most dollars, and come back within 10 business days with a phased integration plan. If
        we're not the right fit, we'll tell you and recommend an alternative.</p>
      <div className="actions">
        <a href="#" className="btn btn-light">Book an enterprise discovery call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></a>
        <a href="#" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,.3)'}}>Request a
          multi-location ops assessment</a>
      </div>
      <div className="trust-line">Mutual NDA · BAA · SOC 2 aligned · Enterprise references available</div>
    </div>
  </section>
</section>


  );
}
