import Link from 'next/link';

export default function dental() {
  return (
 <section>
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
        <div className="eyebrow reveal reveal-1">For dental practices, DSOs &amp; cosmetic dentists</div>
        <h1 className="display reveal reveal-2">
          You produced $180,000 last month. You collected $128,000.
          <em>That <span className="underline">gap</span> is the problem.</em>
        </h1>
        <p className="sub reveal reveal-3" style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--ink-mute)", marginTop: "24px" }}>
          Treatment is happening. Patients are saying yes. Production looks great on the report.
          But somewhere between the chair and the bank, your collections are leaking — and your front desk is too buried
          to chase it.
        </p>
        <p className="lede reveal reveal-3" style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--ink-mute)", marginTop: "16px" }}>
          Hired Billing Support is the remote dental operations team that closes that gap. Insurance verification,
          claims, AR follow-up, write-off recovery, front desk relief — all inside your PMS, working like your in-house
          team. So your office can focus on patients, not on chasing payers.
        </p>
        <div className="hero-actions reveal reveal-4">
          <a href="/contact" className="btn btn-primary">Contact Us 
            <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          {/* <a href="#audit" className="btn btn-text">Get a free production-to-collection audit →</a> */}
        </div>
      </div>
      {/* Side card: production vs collection */}
      <div className="reveal reveal-4" style={{animationDelay: '0.55s'}}>
        <div className="hero-card">
          <h4>— Production vs. Collection · 90-day view</h4>
          <div className="bar-set">
            <div className="bar-row">
              <span className="lbl">PRODUCTION</span>
              <div className="bar production"><span /></div>
              <span className="val">$180k</span>
            </div>
            <div className="bar-row">
              <span className="lbl">BEFORE HBS</span>
              <div className="bar collection-before"><span /></div>
              <span className="val">$128k</span>
            </div>
            <div className="bar-row">
              <span className="lbl">WITH HBS</span>
              <div className="bar collection-after"><span /></div>
              <span className="val">$172k</span>
            </div>
          </div>
          <div className="card-tags">
            <span className="card-tag before">71% COLLECTION RATE</span>
            <span className="card-tag after">96% COLLECTION RATE</span>
          </div>
          <div className="gap-callout">
            <div className="gc-lbl">— RECOVERED MONTHLY</div>
            <div className="gc-val">$44,000 — the gap, closed.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* MONOLOGUE / PAIN */}
  <section className="block" id="pain">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The Tuesday morning everyone in dental knows</div>
        <h2 className="display">You already know how this <em>goes.</em></h2>
      </div>
      <div className="monologue fade-in">
        <p>It's Tuesday. The schedule is packed. You're three minutes behind on every patient.</p>
        <p>
          Your front desk is on hold with Delta Dental — again — trying to verify a benefit for a patient who walked in
          fifteen minutes ago. The new hygiene patient is sitting in the waiting room with a clipboard nobody has time
          to review. The phone keeps ringing because somebody else is also trying to confirm coverage.
        </p>
        <p>
          Meanwhile, last month's claims? Still sitting. The PPO write-offs from January are confusing. The aging report
          has buckets in 90+ that nobody's touched since the office manager went on maternity leave. Your last hygiene
          block had two openings that didn't get filled because nobody had time to work the recall list.
        </p>
        <p>You produced great numbers last month. You know you did.</p>
        <p className="emphasis"><em>So why does the bank account not reflect it?</em></p>
      </div>
      <div className="pain-ledger fade-in">
        <div className="pain-row">
          <div className="pn">01</div>
          <div className="ptitle">Production looks good. Collection doesn't.</div>
          <div className="pdesc">You're producing $X and collecting 70-80% of it. Industry benchmark is 98%. That gap is
            somebody's salary — maybe two.</div>
          <div className="pstat">20pt gap = $$$</div>
        </div>
        <div className="pain-row">
          <div className="pn">02</div>
          <div className="ptitle">Insurance verification is killing your front desk.</div>
          <div className="pdesc">Average call to a payer is 12-18 minutes. Multiply by 30 patients a day. They're on the
            phone more than with patients.</div>
          <div className="pstat">~6 hrs/day lost</div>
        </div>
        <div className="pain-row">
          <div className="pn">03</div>
          <div className="ptitle">PPO write-offs are quietly bleeding you.</div>
          <div className="pdesc">You're writing off contracted amounts you should be appealing. Nobody has the bandwidth to
            dig into it.</div>
          <div className="pstat">$4-11k/month</div>
        </div>
        <div className="pain-row">
          <div className="pn">04</div>
          <div className="ptitle">AR is aging in silence.</div>
          <div className="pdesc">Claims past 60 days have a 30% lower collection rate. Yours are sitting in 90+ and nobody's
            working them.</div>
          <div className="pstat">30% recovery loss</div>
        </div>
        <div className="pain-row">
          <div className="pn">05</div>
          <div className="ptitle">Treatment plans are getting delayed by paperwork.</div>
          <div className="pdesc">Same-day acceptance is shrinking because patients don't have clarity on coverage. Estimates
            are guesses.</div>
          <div className="pstat">-12% acceptance</div>
        </div>
        <div className="pain-row">
          <div className="pn">06</div>
          <div className="ptitle">Hygiene recall is a leaky bucket.</div>
          <div className="pdesc">Every unfilled hygiene block is ~$200 in lost production. You have unfilled blocks every
            week. Do the math.</div>
          <div className="pstat">~$3-5k/month</div>
        </div>
        <div className="pain-row">
          <div className="pn">07</div>
          <div className="ptitle">You keep hiring. They keep leaving.</div>
          <div className="pdesc">You trained the last biller for six months. She left for a $4/hour raise. You're back to
            square one.</div>
          <div className="pstat">$22k / hire</div>
        </div>
      </div>
    </div>
  </section>
  {/* BEHIND THE SCENES */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What's actually happening behind the scenes</div>
        <h2 className="display">You don't have a marketing problem. <em>You have an operational throughput problem.</em>
        </h2>
      </div>
      <div className="bts-data fade-in">
        <div className="lhs">
          <p>You think you have a marketing problem. You think you have a hygiene problem. You think you have a front
            desk problem.</p>
          <p>You don't. <strong>You have an operational throughput problem.</strong></p>
          <p>Your practice is producing more than your back office can clean up. And the more you grow, the wider the
            gap gets. Here's what it looks like in real numbers, in a typical 3-doctor dental practice:</p>
        </div>
        <ul className="bts-list">
          <li><span>Claims submitted with at least one error</span><span className="stat">25-30%</span></li>
          <li><span>Recoverable AR sitting past 90 days</span><span className="stat">$8-15k</span></li>
          <li><span>Monthly production lost to unfilled hygiene</span><span className="stat">$3-5k</span></li>
          <li><span>Front desk time spent on verification calls</span><span className="stat">15-25 hrs/wk</span></li>
          <li><span>Treatment plans lost to coverage confusion</span><span className="stat">12-18%</span></li>
        </ul>
      </div>
      <div className="insight fade-in" style={{marginTop: 48}}>
        That's not a staffing problem you fix by posting on Indeed. <em>That's an operational layer your practice is
          missing.</em>
      </div>
    </div>
  </section>
  {/* SOLUTION */}
  <section className="block" id="solution">
    <div className="container">
      <div className="solution-card fade-in">
        <div className="solution-glow" />
        <div className="eyebrow" style={{color: 'var(--signal)'}}>— Our model</div>
        <h2 className="display" style={{marginTop: 20}}>We don't replace your team. <em>We're the back office your team has
            been begging for.</em></h2>
        <p>Hired Billing Support gives you a dental-trained remote operations team that lives inside your practice
          management software. Same usernames. Same workflows. Same SOPs. They show up Monday morning ready to verify,
          bill, follow up, and close claims — and they don't take PTO during your busiest week.</p>
        <p>You'll have specific people assigned to your account. They'll learn your codes, your PPO contracts, your
          providers, your patients' names. They'll feel like staff — because operationally, they are.</p>
        <p style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--paper)', marginTop: 32, maxWidth: 680}}>
          The difference: you didn't have to hire them, train them for six months, or watch them leave for $4 more an
          hour.
        </p>
      </div>
    </div>
  </section>
  {/* SERVICES */}
  <section className="block" >
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">What we run for your practice</div>
        <h2 className="display">The full dental operational <em>stack.</em></h2>
        <p>Pick the layers you need. Run one service, or hand us the entire back office.</p>
      </div>
      <table className="svc-table fade-in">
        <tbody>
          <tr>
            <td>Insurance verification</td>
            <td>Full breakdown of benefits 48 hours before the appointment. Maximums, deductibles, frequency limits,
              downgrades, missing tooth clauses, waiting periods — all documented in the chart before they sit down.
            </td>
          </tr>
          <tr>
            <td>Eligibility &amp; estimates</td>
            <td>Real, accurate treatment estimates at presentation. No more "we'll call you" — patients accept treatment
              the same day.</td>
          </tr>
          <tr>
            <td>Dental billing &amp; claims</td>
            <td>CDT-coded, X-ray-attached, narrative-included claims submitted within 24 hours of the procedure.
              Clean-claim rate above 98%.</td>
          </tr>
          <tr>
            <td>PPO write-off recovery</td>
            <td>We audit your fee schedules against actual EOBs. We find write-offs that shouldn't have been written
              off. We re-submit and appeal.</td>
          </tr>
          <tr>
            <td>AR follow-up</td>
            <td>We work every aging bucket — 30, 60, 90, 120+. Payer calls, re-submissions, narrative appeals. Most
              clients see AR days drop below 25 within 90 days.</td>
          </tr>
          <tr>
            <td>Denial management</td>
            <td>Every denial is categorized, prioritized, and appealed by a specialist who knows the payer playbook. Not
              your office manager Googling "downgrade appeal letter."</td>
          </tr>
          <tr>
            <td>Payment posting</td>
            <td>EOBs posted accurately and reconciled daily. No more end-of-month surprises.</td>
          </tr>
          <tr>
            <td>Patient billing</td>
            <td>Statements sent on schedule. Patient calls answered with empathy and clarity. Balances followed up
              without making patients feel hounded.</td>
          </tr>
          <tr>
            <td>Front desk relief</td>
            <td>Phones, scheduling, recall, hygiene reactivation, new patient intake. Either virtual coverage or full
              takeover — your call.</td>
          </tr>
          <tr>
            <td>Hygiene recall</td>
            <td>We work your recall list. Inactive patients get reactivated. Unfilled blocks get filled. Production goes
              up without you adding a chair.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  {/* HOW WE WORK */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">How we work</div>
        <h2 className="display">We don't sit outside your practice. <em>We sit inside it.</em></h2>
      </div>
      <div className="steps fade-in">
        <div className="step">
          <span className="num">— 01</span>
          <h4>We log into your software.</h4>
          <p>Open Dental. Dentrix. Eaglesoft. Curve. Denticon. CareStack. We work where you work. No exports, no
            portals, no "email us the file."</p>
        </div>
        <div className="step">
          <span className="num">— 02</span>
          <h4>We follow your workflow.</h4>
          <p>We learn your SOPs, fee schedules, appointment types, provider notes, write-off rules. We plug into how you
            already run.</p>
        </div>
        <div className="step">
          <span className="num">— 03</span>
          <h4>We report to your office manager.</h4>
          <p>Daily Slack, Teams, or email. Weekly KPI review. Monthly working session. We function as a department, not
            a vendor.</p>
        </div>
        <div className="step">
          <span className="num">— 04</span>
          <h4>We use your communication tools.</h4>
          <p>Our team is on your channels. They join huddles if you want. They email patients from your domain. To
            everyone outside, they are your practice.</p>
        </div>
      </div>
    </div>
  </section>
  {/* AI + HUMAN */}
  <section className="block dark">
    <div className="container">
      <div className="aihum fade-in">
        <div>
          <div className="eyebrow">The AI + human advantage</div>
          <h2 className="display" style={{marginTop: 20}}>AI does the lifting. <em>Humans do the thinking.</em></h2>
          <p>Insurance verification calls that used to take 18 minutes? Automated eligibility checks pull most of it in
            under 30 seconds. The 20% that needs a real human voice on the line — we make that call.</p>
          <p>Claim scrubbing? Every claim validated against payer rules before it goes out. First-pass clean rate above
            98%.</p>
          <p>Denials? Categorized and routed to the right specialist queue within minutes — not weeks of sitting in
            someone's "to-do" pile.</p>
          <p style={{color: 'var(--paper)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: 20, marginTop: 24}}>
            You don't want a chatbot calling Delta Dental. You don't want AI explaining a $1,200 balance to a confused
            patient. Neither do we.</p>
        </div>
        <div className="ledger">
          <div className="ledger-row head">
            <div className="ai">— AI handles</div>
            <div className="hu">— Humans handle</div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Eligibility checks <span>30 seconds, automated</span></div>
            <div className="item hu">Peer-to-peer calls <span>complex, judgment-driven</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Claim scrubbing <span>payer-rule validated</span></div>
            <div className="item hu">Narrative appeals <span>specialty-trained</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Denial categorization <span>routed in minutes</span></div>
            <div className="item hu">Patient conversations <span>tone, empathy, clarity</span></div>
          </div>
          <div className="ledger-row">
            <div className="item ai">Document classification <span>indexed automatically</span></div>
            <div className="item hu">PPO contract analysis <span>recover write-offs</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* RESULTS */}
  <section className="block" id="results">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">By the numbers</div>
        <h2 className="display">What changes in the <em>first 90 days.</em></h2>
        <p>Pulled from active dental clients across general, ortho, perio, and cosmetic practices.</p>
      </div>
      <div className="results-row fade-in">
        <div className="result-block">
          <div className="v">+24<span className="unit">%</span></div>
          <div className="d">Average monthly collections lift across active dental clients.</div>
        </div>
        <div className="result-block">
          <div className="v">25<span className="unit">d</span></div>
          <div className="d">AR days dropped from a 47-day baseline within 90 days.</div>
        </div>
        <div className="result-block">
          <div className="v">98<span className="unit">%</span></div>
          <div className="d">First-pass clean-claim rate on submitted dental claims.</div>
        </div>
        <div className="result-block">
          <div className="v">$7.5<span className="unit">k</span></div>
          <div className="d">Average PPO write-off recovery in the first 60 days.</div>
        </div>
      </div>
      <div className="testi fade-in">
        <div className="testi-quote">
          Remote staffing solution by HBS has freed the resources of the HBS, enabling us to spend more time at the
          bedside and enhance the efficiency of the whole process.
        </div>
        <div className="testi-attr">
          <div className="testi-avatar">AF</div>
          <div>
            <div className="testi-name">Dr Afreen Sheikh</div>
            <div className="testi-role">Internal Medicine</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* WHY NOT HIRE IN-HOUSE */}
  <section className="block warm">
    <div className="container">
      <div className="block-head fade-in">
        <div className="eyebrow">The honest comparison</div>
        <h2 className="display">Why not just hire an <em>in-house biller?</em></h2>
        <p>You already tried. That's why you're reading this. Let's do the math out loud.</p>
      </div>
      <div className="compare fade-in">
        <div className="compare-row head">
          <div className="col left">In-house biller</div>
          <div className="col right">Embedded HBS team</div>
        </div>
        <div className="compare-row">
          <div className="col left">$48,000-$68,000 salary</div>
          <div className="col right">Percentage of collections — we earn it back</div>
        </div>
        <div className="compare-row">
          <div className="col left">+ benefits, PTO, training, payroll tax</div>
          <div className="col right">No overhead, no benefits, no taxes</div>
        </div>
        <div className="compare-row">
          <div className="col left">6-month learning curve</div>
          <div className="col right">Live in 10-14 business days</div>
        </div>
        <div className="compare-row">
          <div className="col left">Out sick = work stops</div>
          <div className="col right">Cross-covered every day</div>
        </div>
        <div className="compare-row">
          <div className="col left">One person, one perspective</div>
          <div className="col right">Specialist team — billing, AR, verification, appeals</div>
        </div>
        <div className="compare-row">
          <div className="col left">14-month average tenure</div>
          <div className="col right">Embedded long-term, no turnover risk</div>
        </div>
        <div className="compare-row">
          <div className="col left">You manage them</div>
          <div className="col right">They report to you. We manage them.</div>
        </div>
      </div>
      <div className="insight fade-in">
        And the part nobody talks about: when your one in-house biller leaves, <em>all the institutional knowledge
          leaves with them.</em> With an embedded team, the SOPs are documented, the system runs, and the work continues
        regardless.
      </div>
    </div>
  </section>
  {/* FINAL CTA */}
  <section className="final-cta" id="cta">
    <div className="final-cta-glow" />
    <div className="cta-inner">
      <div className="eyebrow" style={{justifyContent: 'center', color: 'rgba(250,247,242,0.55)'}}>Let's look at your numbers
      </div>
      <h2 className="display">Send us last month's report. <em>We'll show you the leak.</em></h2>
      <p>Send your production summary and aging report. Within 5 business days, we'll come back with a free audit
        showing exactly where the gap is — and what we'd do about it. No pitch. No pressure. If the audit shows you
        don't need us, we'll tell you.</p>
      <div className="actions">
        <a href="#" className="btn btn-light">Book a discovery call
          <svg className="arrow" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#" className="btn btn-ghost" style={{color: 'var(--paper)', borderColor: 'rgba(250,247,242,0.3)'}} id="audit">Request a free dental audit</a>
      </div>
      <div className="trust-line">HIPAA · BAA on every engagement · No long-term contract</div>
    </div>
  </section>
</div>

</section>

  );
}
