import Link from 'next/link';

export default function enterprise() {
  return (
<div>
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
        <div className="eyebrow reveal reveal-1">For MSOs, payers &amp; value-based care operators</div>
        <h1 className="display reveal reveal-2">Your model depends on clean data. <em>But your operations are built on <span className="ul">noise</span>.</em></h1>
        <p className="sub reveal reveal-3">When claims aren't clean, quality metrics slip. When prior auths lag, patient
          access suffers. When denials climb, margins drop. Your model doesn't break because of strategy — it breaks
          because of ops.</p>
        <p className="lede reveal reveal-3">Hired Billing Support is the operational layer behind MSOs and payers:
          centralized claims QA, prior auth, risk adjustment support, provider enablement, and network ops — built to
          run across large networks and value-based contracts.</p>
        <div className="hero-actions reveal reveal-4">
          <a href="#cta" className="btn btn-primary">Book a strategy call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg></a>
          <a href="#cta" className="btn btn-text">Request a network ops assessment →</a>
        </div>
      </div>
      {/* Quality dashboard card */}
      <div className="reveal reveal-4" style={{animationDelay: '.55s'}}>
        <div className="hero-card">
          <h4>— Network quality monitor · Live</h4>
          <div className="quality-row"><span>Claim clean rate</span><span className="val bad">86%</span></div>
          <div className="quality-row"><span>Denial rate</span><span className="val bad">14.2%</span></div>
          <div className="quality-row"><span>Prior auth SLA</span><span className="val warn">62%</span></div>
          <div className="quality-row"><span>Risk score recapture</span><span className="val warn">71%</span></div>
          <div className="quality-row"><span>HCC documentation gaps</span><span className="val bad">1,482</span></div>
          <div className="quality-row"><span>Provider compliance audits</span><span className="val good">95%</span></div>
          <div className="card-footer"><span className="lbl">Network margin impact</span><span className="val">-$1.2M /
              quarter</span></div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ PAIN ═══════════ */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The operational drag</div>
        <h2 className="display">Value-based contracts are <em>won in operations.</em></h2>
      </div>
      <div className="monologue fade-in" style={{maxWidth: 760}}>
        <p style={{fontFamily: 'var(--serif)', fontSize: 'clamp(19px,1.8vw,23px)', lineHeight: '1.5', letterSpacing: '-0.01em', marginBottom: 24, color: 'var(--ink)', fontWeight: 400}}>
          Your MSO can negotiate strong contracts. Your payer can design beautiful incentives. None of it matters if the
          operational layer is leaking.</p>
        <p style={{fontFamily: 'var(--serif)', fontSize: 'clamp(19px,1.8vw,23px)', lineHeight: '1.5', letterSpacing: '-0.01em', marginBottom: 24, color: 'var(--ink)', fontWeight: 400}}>
          If coding is inconsistent, risk adjustment collapses. If claims are dirty, the revenue cycle stalls. If prior
          auths are delayed, care gets postponed. If providers aren't trained, compliance fails quietly.</p>
        <p style={{fontFamily: 'var(--serif)', fontSize: 'clamp(19px,1.8vw,23px)', lineHeight: '1.5', letterSpacing: '-0.01em', marginBottom: 24, color: 'var(--ink)', fontWeight: 400}}>
          <em>The model doesn't break at the strategy layer — it breaks at the operations layer.</em>
        </p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row">
          <div className="pn">01</div>
          <div className="ptitle">Claims are inconsistent across sites.</div>
          <div className="pdesc">Multi-site networks submit claims with varying accuracy. The payer sees it as risk. You see
            it as denials, delays, and leakage.</div>
        </div>
        <div className="pain-row">
          <div className="pn">02</div>
          <div className="ptitle">Risk adjustment is leaving dollars on the table.</div>
          <div className="pdesc">HCCs are missed. Documentation gaps linger. Recapture doesn't happen systematically. The
            risk score is lower than reality.</div>
        </div>
        <div className="pain-row">
          <div className="pn">03</div>
          <div className="ptitle">Prior auth bottlenecks delay care.</div>
          <div className="pdesc">Slow or inconsistent prior auths lead to delayed procedures and patient dissatisfaction —
            which shows up in both outcomes and quality scores.</div>
        </div>
        <div className="pain-row">
          <div className="pn">04</div>
          <div className="ptitle">Provider enablement is too slow.</div>
          <div className="pdesc">Policies, SOPs, and contract changes take months to roll out. By the time training reaches
            the field, the contract is already changing again.</div>
        </div>
        <div className="pain-row">
          <div className="pn">05</div>
          <div className="ptitle">Data is noisy, not actionable.</div>
          <div className="pdesc">You have dashboards. You don't have clarity. The data isn't standardized, so the insights
            aren't real. Decisions are based on noise.</div>
        </div>
        <div className="pain-row">
          <div className="pn">06</div>
          <div className="ptitle">Network ops scale breaks down.</div>
          <div className="pdesc">The bigger the network grows, the more operations break. Inconsistency compounds. The model
            can't scale without a centralized ops layer.</div>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ SOLUTION ═══════════ */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We build the centralized ops layer <em>MSOs and payers need.</em>
        </h2>
        <p>Hired Billing Support becomes your operational backbone. A centralized team that ensures claims quality,
          speeds prior auths, closes risk adjustment gaps, and standardizes provider enablement across your network.</p>
        <p>We're not a vendor. We're your operations department — in your systems, following your contracts, reporting
          to your leadership, and moving metrics you care about.</p>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginTop: 32, maxWidth: 700}}>
          You can have the best value-based contract in the market. If your ops are messy, you'll still lose.</p>
      </div>
    </div>
  </section>
  {/* ═══════════ SERVICES ═══════════ */}
  <section className="block warm" >
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What we run for MSOs &amp; payers</div>
        <h2 className="display">Operations that make value-based care <em>actually work.</em></h2>
        <p>Pick the layers you need. We can run a single function or become the centralized operational team behind the
          entire network.</p>
      </div>
      <div className="svc-grid-2 fade-in">
        <div className="svc-card">
          <h4>Centralized Claims QA</h4>
          <p>Pre-submission edits, documentation audits, and payer-specific rules enforced across the entire network.
            Clean claims = better cash flow.</p>
        </div>
        <div className="svc-card">
          <h4>Risk Adjustment Support</h4>
          <p>HCC validation, documentation review, and recapture workflows that improve risk score accuracy and revenue.
          </p>
        </div>
        <div className="svc-card">
          <h4>Prior Authorization Management</h4>
          <p>Automated workflows + human specialists to ensure auths are submitted, tracked, and approved on time.</p>
        </div>
        <div className="svc-card">
          <h4>Provider Enablement</h4>
          <p>Training, SOP rollout, and contract updates deployed at scale — with audit trails and compliance reporting.
          </p>
        </div>
        <div className="svc-card">
          <h4>Claims Clean-up Projects</h4>
          <p>Backlog purge, AR recovery, denial cleanup, and workflow resets to stabilize operations quickly.</p>
        </div>
        <div className="svc-card">
          <h4>Network Operations Management</h4>
          <p>Centralized ops leadership, KPI ownership, cross-site standardization, and reporting tied to contract
            performance.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ HOW WE WORK ═══════════ */}
  <section className="block">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">How we work</div>
        <h2 className="display">We sit between the contract and the clinics. <em>And we make them match.</em></h2>
      </div>
      <div className="steps fade-in">
        <div className="step"><span className="num">— 01</span>
          <h4>We embed into your systems.</h4>
          <p>Your EHRs, your payer portals, your data warehouse. We run inside your stack, not outside of it.</p>
        </div>
        <div className="step"><span className="num">— 02</span>
          <h4>We enforce contract rules.</h4>
          <p>Claims edits, documentation requirements, prior auth rules — standardized across every site so the contract
            actually works.</p>
        </div>
        <div className="step"><span className="num">— 03</span>
          <h4>We report to leadership.</h4>
          <p>Weekly KPIs, monthly scorecard, quarterly strategy. You always know where leakage is occurring.</p>
        </div>
        <div className="step"><span className="num">— 04</span>
          <h4>We scale with the network.</h4>
          <p>New locations, new contracts, new providers. The ops layer expands without breaking the system.</p>
        </div>
      </div>
    </div>
  </section>
  {/* ═══════════ RESULTS ═══════════ */}
  <section className="block" id="results">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">By the numbers</div>
        <h2 className="display">What MSOs and payers see <em>in 90 days.</em></h2>
        <p>Drawn from MSO and payer partners across value-based, risk, and fee-for-service models.</p>
      </div>
      <div className="results-row-three fade-in">
        <div className="result-block">
          <div className="v">+18<span className="unit">%</span></div>
          <div className="d">Lift in risk score capture and recapture accuracy.</div>
        </div>
        <div className="result-block">
          <div className="v">-34<span className="unit">%</span></div>
          <div className="d">Reduction in denial rate from standardized QA.</div>
        </div>
        <div className="result-block">
          <div className="v">3.2<span className="unit">x</span></div>
          <div className="d">Faster prior auth turnaround and fewer delayed procedures.</div>
        </div>
      </div>
      <div className="testi fade-in">
        <div className="testi-quote">With the help of HBS their support and expertise we have achieved a lot more in
          practice.</div>
        <div className="testi-attr">
          <div className="testi-avatar">LH</div>
          <div>
            <div className="testi-name">Dr. Layla Hassan</div>
            <div className="testi-role">Genesis Internal Medicine</div>
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
        <h2 className="display">Why not build this ops layer <em>internally?</em></h2>
        <p>Because it's expensive, slow, and hard to scale across a network. Here's the trade-off.</p>
      </div>
      <div className="compare fade-in">
        <div className="compare-row head">
          <div className="col left">Build in-house</div>
          <div className="col right">Embed HBS</div>
        </div>
        <div className="compare-row">
          <div className="col left">12–18 months to design + hire</div>
          <div className="col right">30–45 days to live</div>
        </div>
        <div className="compare-row">
          <div className="col left">Multiple departments to manage</div>
          <div className="col right">Single accountable ops team</div>
        </div>
        <div className="compare-row">
          <div className="col left">Hiring risk + turnover</div>
          <div className="col right">We staff, train, and retain</div>
        </div>
        <div className="compare-row">
          <div className="col left">SOP drift across locations</div>
          <div className="col right">Standardized workflows enforced</div>
        </div>
        <div className="compare-row">
          <div className="col left">Fixed cost structure</div>
          <div className="col right">Variable cost aligned to network size</div>
        </div>
        <div className="compare-row">
          <div className="col left">Leadership time spent managing ops</div>
          <div className="col right">Leadership time spent on strategy</div>
        </div>
      </div>
      <div className="insight fade-in">If your contract economics depend on operational precision, then operational
        execution can't be a secondary project. <em>It has to be a core function.</em></div>
    </div>
  </section>
  {/* ═══════════ FINAL CTA ═══════════ */}
  <section className="final-cta" id="cta">
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,.55)'}}>Let's look at your network</div>
      <h2 className="display">Send us a claims sample. <em>We'll show you the leakage.</em></h2>
      <p>Share a recent claims export and a list of active contracts. We'll return an operational audit within 10
        business days that highlights the biggest gaps in claims quality, risk adjustment, and auth workflow — and a
        plan to close them.</p>
      <div className="actions">
        <a href="#" className="btn btn-light">Book a strategy call <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg></a>
        <a href="#" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,.3)'}}>Request a
          network ops assessment</a>
      </div>
      <div className="trust-line">NDA available · HIPAA compliant · BAA on every engagement</div>
    </div>
  </section>
</div>




  );
}
