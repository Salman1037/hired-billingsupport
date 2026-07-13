"use strict";exports.id=390,exports.ids=[390],exports.modules={5130:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Command Panel Card */
    .cp-card {
      background: #FFF;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 32px rgba(10, 22, 40, .10), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .cp-header {
      background: #0A1628;
      padding: 22px 24px 18px;
    }

    .cp-header-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, .38);
      margin-bottom: 12px;
    }

    .cp-main-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .cp-big {
      font-family: 'Fraunces', serif;
      font-size: 2.6rem;
      color: #00C896;
      line-height: 1;
      font-variation-settings: "opsz" 144;
    }

    .cp-unit {
      font-size: 11px;
      color: rgba(250, 247, 242, .45);
      padding-bottom: 4px;
      margin-left: 4px;
    }

    .cp-trend {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
      background: rgba(0, 200, 150, .12);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 3px 10px;
      border-radius: 100px;
    }

    .cp-trend-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-header-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .35);
      letter-spacing: .08em;
      margin-top: 6px;
    }

    .cp-body {
      background: #111f35;
      padding: 16px 20px;
    }

    .cp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .cp-metric {
      padding: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .06);
      border-right: 1px solid rgba(255, 255, 255, .06);
    }

    .cp-metric:nth-child(2n) {
      border-right: none;
    }

    .cp-metric:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .cp-m-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: rgba(250, 247, 242, .32);
      margin-bottom: 5px;
    }

    .cp-m-value {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      color: rgba(250, 247, 242, .8);
    }

    .cp-m-value.sig {
      color: #00C896;
    }

    .cp-m-value.amb {
      color: #F59E0B;
    }

    .cp-m-value.lite {
      color: rgba(250, 247, 242, .8);
    }

    .cp-spark {
      height: 3px;
      border-radius: 2px;
      background: rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .cp-spark-fill {
      height: 100%;
      border-radius: 2px;
    }

    .spark-sig {
      background: #00C896;
    }

    .spark-amb {
      background: #F59E0B;
    }

    .spark-lite {
      background: rgba(250, 247, 242, .35);
    }

    .cp-queue {
      background: #FFF;
      padding: 16px 20px;
    }

    .cp-queue-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: #475569;
      margin-bottom: 10px;
    }

    .cp-queue-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .cp-queue-row:last-of-type {
      border-bottom: none;
    }

    .cp-q-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cp-q-lbl {
      font-size: 11px;
      color: #1B2942;
      flex: 1;
      line-height: 1.3;
    }

    .cp-q-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: .08em;
      padding: 2px 9px;
      border-radius: 100px;
      white-space: nowrap;
    }

    .badge-ok {
      background: rgba(0, 200, 150, .1);
      color: #00876B;
    }

    .badge-warn {
      background: rgba(245, 158, 11, .12);
      color: #B45309;
    }

    .cp-footer {
      background: #0A1628;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cp-footer-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
    }

    .cp-footer-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-footer-right {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .3);
      letter-spacing: .08em;
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"cp-card",children:[(0,r.jsxs)("div",{className:"cp-header",children:[(0,r.jsx)("div",{className:"cp-header-label",children:"— Healthcare Workflow Context \xb7 Developer Intelligence"}),(0,r.jsxs)("div",{className:"cp-main-row",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[(0,r.jsx)("span",{className:"cp-big",children:"47"}),(0,r.jsx)("span",{className:"cp-unit",children:"workflow touchpoints mapped"})]}),(0,r.jsxs)("span",{className:"cp-trend",children:[(0,r.jsx)("span",{className:"cp-trend-dot"}),"RCM-to-EHR integration"]})]}),(0,r.jsx)("div",{className:"cp-header-sub",children:"Sample: Billing workflow architecture \xb7 Primary Care"})]}),(0,r.jsx)("div",{className:"cp-body",children:(0,r.jsxs)("div",{className:"cp-grid",children:[(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Payer Rules Tracked"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"200+"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"90%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Denial Categories"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"38 mapped"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"75%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Auth Workflow Steps"}),(0,r.jsx)("div",{className:"cp-m-value amb",children:"12 per payer"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-amb",style:{width:"60%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"EHR Integration Points"}),(0,r.jsx)("div",{className:"cp-m-value lite",children:"24 mapped"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-lite",style:{width:"55%"}})})]})]})}),(0,r.jsxs)("div",{className:"cp-queue",children:[(0,r.jsx)("div",{className:"cp-queue-title",children:"Workflow Context Areas \xb7 Available"}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"RCM process mapping — end-to-end"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Payer-specific workflow rules library"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Denial root cause taxonomy"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Auth + eligibility workflow models"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Available"})]})]}),(0,r.jsxs)("div",{className:"cp-footer",children:[(0,r.jsxs)("span",{className:"cp-footer-pill",children:[(0,r.jsx)("span",{className:"cp-footer-pulse"}),"Real-world workflow context — not textbook specs"]}),(0,r.jsx)("span",{className:"cp-footer-right",children:"Dev partnership"})]})]})})]})]})]})}},6715:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Care Coordination Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

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

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .status-row:last-of-type {
      border-bottom: none;
    }

    .s-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-g {
      background: #00C896;
    }

    .dot-a {
      background: #F59E0B;
    }

    .dot-r {
      background: #D64545;
    }

    .s-label {
      font-size: 12px;
      color: #FAF7F2;
      flex: 1;
    }

    .s-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
    }

    .s-val.done {
      color: #00876B;
    }

    .s-val.pend {
      color: #B45309;
    }

    .s-val.block {
      color: #D64545;
    }

    .s-val.wait {
      color: #475569;
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

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— Care Coordination Dashboard \xb7 Daily"}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Active Member Outreach Queue"}),(0,r.jsx)("span",{className:"s-val done",children:"34 members — all contacted"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Referral Tracking"}),(0,r.jsx)("span",{className:"s-val done",children:"18 active — all with status"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Prior Auth — Pending"}),(0,r.jsx)("span",{className:"s-val pend",children:"6 requests — 2 expiring this week"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Eligibility Verifications"}),(0,r.jsx)("span",{className:"s-val done",children:"All this week's appts verified"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Documentation Tasks"}),(0,r.jsx)("span",{className:"s-val pend",children:"4 items pending provider review"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Member Follow-Up Queue"}),(0,r.jsx)("span",{className:"s-val done",children:"Post-visit — 28 of 28 done"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"34"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Members Reached"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Auth Actions"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Lost to Follow-Up"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Member continuity"}),(0,r.jsx)("div",{className:"gc-val",children:"Zero members fell through today. That is the goal every day."})]})]})})]})]})]})}s(43210)},13866:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Small Practice Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

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

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .status-row:last-of-type {
      border-bottom: none;
    }

    .s-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-g {
      background: #00C896;
    }

    .dot-a {
      background: #F59E0B;
    }

    .s-label {
      font-size: 12px;
      color: #FAF7F2;
      flex: 1;
    }

    .s-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
    }

    .s-val.done {
      color: #00876B;
    }

    .s-val.pend {
      color: #B45309;
    }

    .s-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      padding: 2px 8px;
      border-radius: 100px;
      display: inline-block;
      margin-left: 8px;
    }

    .pill-g {
      background: rgba(0, 200, 150, .12);
      color: #00876B;
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

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— Small Practice Operations \xb7 Daily Status"}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Prior Auth Queue"}),(0,r.jsx)("span",{className:"s-val pend",children:"4 pending — 2 expiring soon"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Tomorrow's Eligibility Checks"}),(0,r.jsx)("span",{className:"s-val done",children:"All verified"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Unworked Denials"}),(0,r.jsx)("span",{className:"s-val pend",children:"7 claims — 3 over 20 days"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"AR Over 90 Days"}),(0,r.jsx)("span",{className:"s-val pend",children:"$14,200 — needs follow-up"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Claim Submission Queue"}),(0,r.jsx)("span",{className:"s-val done",children:"Clear — submitted same day"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"7"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Unworked Denials"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"4"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Auth Pending"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"$0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Missed Submissions"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Revenue at risk"}),(0,r.jsx)("div",{className:"gc-val",children:"7 unworked denials + $14.2K aging AR = $21K+ at risk."})]})]})})]})]})]})}s(43210)},25114:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    .who-hero {
      background: #FAF7F2;
       padding: 110px 0 72px;
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
      grid-template-columns: 1fr 440px;
      gap: 64px;
      align-items: center;
    }

    .who-hero-content {
      flex: 1;
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
      text-decoration: none;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn .arrow {
      transition: transform .2s;
      flex-shrink: 0;
    }

    .btn:hover .arrow {
      transform: translateX(3px);
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

    /* [HeroPayers] Dashboard Card */
    .cp-card {
      background: #FFF;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 32px rgba(10, 22, 40, .10), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .cp-header {
      background: #0A1628;
      padding: 22px 24px 18px;
    }

    .cp-header-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, .38);
      margin-bottom: 12px;
    }

    .cp-main-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .cp-big {
      font-family: 'Fraunces', serif;
      font-size: 2.6rem;
      color: #00C896;
      line-height: 1;
      font-variation-settings: "opsz" 144;
    }

    .cp-unit {
      font-size: 11px;
      color: rgba(250, 247, 242, .45);
      padding-bottom: 4px;
      margin-left: 4px;
    }

    .cp-trend {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
      background: rgba(0, 200, 150, .12);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 3px 10px;
      border-radius: 100px;
    }

    .cp-trend-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-header-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .35);
      letter-spacing: .08em;
      margin-top: 6px;
    }

    .cp-body {
      background: #111f35;
      padding: 16px 20px;
    }

    .cp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .cp-metric {
      padding: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .06);
      border-right: 1px solid rgba(255, 255, 255, .06);
    }

    .cp-metric:nth-child(2n) {
      border-right: none;
    }

    .cp-metric:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .cp-m-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: rgba(250, 247, 242, .32);
      margin-bottom: 5px;
    }

    .cp-m-value {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      color: rgba(250, 247, 242, .8);
    }

    .cp-m-value.sig {
      color: #00C896;
    }

    .cp-m-value.amb {
      color: #F59E0B;
    }

    .cp-m-value.lite {
      color: rgba(250, 247, 242, .8);
    }

    .cp-spark {
      height: 3px;
      border-radius: 2px;
      background: rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .cp-spark-fill {
      height: 100%;
      border-radius: 2px;
    }

    .spark-sig {
      background: #00C896;
    }

    .spark-amb {
      background: #F59E0B;
    }

    .spark-lite {
      background: rgba(250, 247, 242, .35);
    }

    .cp-queue {
      background: #FFF;
      padding: 16px 20px;
    }

    .cp-queue-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: #475569;
      margin-bottom: 10px;
    }

    .cp-queue-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .cp-queue-row:last-of-type {
      border-bottom: none;
    }

    .cp-q-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cp-q-lbl {
      font-size: 11px;
      color: #1B2942;
      flex: 1;
      line-height: 1.3;
    }

    .cp-q-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: .08em;
      padding: 2px 9px;
      border-radius: 100px;
      white-space: nowrap;
    }

    .badge-ok {
      background: rgba(0, 200, 150, .1);
      color: #00876B;
    }

    .badge-warn {
      background: rgba(245, 158, 11, .12);
      color: #B45309;
    }

    .badge-risk {
      background: rgba(214, 69, 69, .09);
      color: #D64545;
    }

    .cp-footer {
      background: #0A1628;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cp-footer-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
    }

    .cp-footer-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-footer-right {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .3);
      letter-spacing: .08em;
    }

    .reveal {
      opacity: 0;
      transform: translateY(20px);
    }

    .reveal-1 {
      animation: reveal 0.9s var(--ease) .05s forwards;
    }

    .reveal-2 {
      animation: reveal 0.9s var(--ease) .15s forwards;
    }

    .reveal-3 {
      animation: reveal 0.9s var(--ease) .30s forwards;
    }

    .reveal-4 {
      animation: reveal 0.9s var(--ease) .45s forwards;
    }

    @media(max-width:1024px) {
      .hero-inner {
        grid-template-columns: 1fr;
      }

      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsx)("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"cp-card",children:[(0,r.jsxs)("div",{className:"cp-header",children:[(0,r.jsx)("div",{className:"cp-header-label",children:"— Payer Operations Center \xb7 Daily Queue"}),(0,r.jsxs)("div",{className:"cp-main-row",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[(0,r.jsx)("span",{className:"cp-big",children:"94.7%"}),(0,r.jsx)("span",{className:"cp-unit",children:"same-day processing rate"})]}),(0,r.jsxs)("span",{className:"cp-trend",children:[(0,r.jsx)("span",{className:"cp-trend-dot"}),"↑ 3.2% vs last week"]})]}),(0,r.jsx)("div",{className:"cp-header-sub",children:"Updated today \xb7 Operational Dashboard"})]}),(0,r.jsx)("div",{className:"cp-body",children:(0,r.jsxs)("div",{className:"cp-grid",children:[(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Auth Queue"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"312 items"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"82%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Avg Resolution"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"4.2 hrs"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"78%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Backlog Items"}),(0,r.jsx)("div",{className:"cp-m-value amb",children:"47 items"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-amb",style:{width:"35%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Provider Inquiries"}),(0,r.jsx)("div",{className:"cp-m-value lite",children:"28 open"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-lite",style:{width:"45%"}})})]})]})}),(0,r.jsxs)("div",{className:"cp-queue",children:[(0,r.jsx)("div",{className:"cp-queue-title",children:"Queue Priority View \xb7 Active"}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Claims review — standard processing"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"On track"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Authorization exceptions — escalated"}),(0,r.jsx)("span",{className:"cp-q-badge badge-warn",children:"18 pending"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Enrollment documentation — indexed"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Current"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#D64545"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Provider data — aged items flagged"}),(0,r.jsx)("span",{className:"cp-q-badge badge-risk",children:"6 over SLA"})]})]}),(0,r.jsxs)("div",{className:"cp-footer",children:[(0,r.jsxs)("span",{className:"cp-footer-pill",children:[(0,r.jsx)("span",{className:"cp-footer-pulse"}),"6 items exceed SLA — priority escalation active"]}),(0,r.jsx)("span",{className:"cp-footer-right",children:"Live \xb7 Secured"})]})]})})]})]})]})}},26203:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Practice Launch Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

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

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: rv 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .check-row:last-of-type {
      border-bottom: none;
    }

    .ck {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      flex-shrink: 0;
      margin-top: 1px;
    }

    .ck-done {
      background: #00C896;
      color: #fff;
    }

    .ck-pend {
      background: rgba(245, 158, 11, 0.08);
      border: 1px solid #F59E0B;
      color: #B45309;
    }

    .ck-open {
      background: #F2EDE3;
      border: 1px solid #E8E2D5;
      color: transparent;
    }

    .ck-label {
      font-size: 11px;
      color: #FAF7F2;
      line-height: 1.4;
    }

    .ck-label.done {
      color: #FAF7F2;
      text-decoration: line-through;
    }

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— Practice Launch Readiness \xb7 Pre-Open"}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-done",children:"✓"}),(0,r.jsx)("span",{className:"ck-label done",children:"Entity formed \xb7 EIN obtained \xb7 NPI registered"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-done",children:"✓"}),(0,r.jsx)("span",{className:"ck-label done",children:"CAQH profile built and attested"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-pend",children:"!"}),(0,r.jsx)("span",{className:"ck-label",children:"Medicare PECOS submitted — Day 26 of ~45"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-pend",children:"!"}),(0,r.jsx)("span",{className:"ck-label",children:"Commercial payer apps — 4 submitted, 2 pending"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-open"}),(0,r.jsx)("span",{className:"ck-label",children:"EHR billing module configuration"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-open"}),(0,r.jsx)("span",{className:"ck-label",children:"Eligibility verification workflow setup"})]}),(0,r.jsxs)("div",{className:"check-row","data-animated":"check-row",children:[(0,r.jsx)("div",{className:"ck ck-open"}),(0,r.jsx)("span",{className:"ck-label",children:"Patient intake and scheduling SOPs"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Complete"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"In Progress"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#475569"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Not Started"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Time to billing-ready"}),(0,r.jsx)("div",{className:"gc-val",children:"6–8 weeks with structure. 4+ months without."})]})]})})]})]})]})}s(43210)},30312:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* FQHC Status Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
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

    .status-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .status-row:last-of-type {
      border-bottom: none;
    }

    .s-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-g {
      background: #00C896;
    }

    .dot-a {
      background: #F59E0B;
    }

    .s-label {
      font-size: 12px;
      color: #FAF7F2;
      flex: 1;
    }

    .s-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
    }

    .s-val.done {
      color: #00876B;
    }

    .s-val.pend {
      color: #B45309;
    }

    .s-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      padding: 2px 8px;
      border-radius: 100px;
      display: inline-block;
      margin-left: 8px;
    }

    .pill-g {
      background: rgba(0, 200, 150, .12);
      color: #00876B;
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

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— FQHC Operations Dashboard \xb7 Monthly"}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Medicaid Claims — Clean Rate"}),(0,r.jsxs)("span",{className:"s-val done",children:["96.4% ",(0,r.jsx)("span",{className:"s-pill pill-g",children:"On target"})]})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Medicare Billing"}),(0,r.jsx)("span",{className:"s-val pend",children:"Denial rate 4.1% — auth-related"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"Sliding Fee Workflow"}),(0,r.jsx)("span",{className:"s-val done",children:"Process documented"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-a"}),(0,r.jsx)("span",{className:"s-label",children:"Eligibility — Daily Queue"}),(0,r.jsx)("span",{className:"s-val pend",children:"3 fails yesterday — reviewed"})]}),(0,r.jsxs)("div",{className:"status-row","data-animated":"status-row",children:[(0,r.jsx)("div",{className:"s-dot dot-g"}),(0,r.jsx)("span",{className:"s-label",children:"AR Over 90 Days"}),(0,r.jsx)("span",{className:"s-val done",children:"6.8% — below benchmark"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"93%"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Collection Rate"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"4.1%"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Denial Rate"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Payers In Focus"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Mission protection"}),(0,r.jsx)("div",{className:"gc-val",children:"Revenue recovered = services the community continues to receive."})]})]})})]})]})]})}s(43210)},46055:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var r=s(31658);let i=async e=>[{type:"image/x-icon",sizes:"256x256",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},55997:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Medical Group Dashboard Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

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
      animation: reveal 0.9s var(--ease) forwards;
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

    .kpi-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid #E8E2D5;
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— Medical Group Performance \xb7 Multi-Provider"}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Group Collection Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"93%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"93.4%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Denial Rate (Group)"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill mi",style:{width:"38%"}})}),(0,r.jsx)("span",{className:"kpi-val mi",children:"3.8%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Process Standardization"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"87%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"87%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Provider Compliance"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"94%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"94%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"First-pass Claims Paid"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"91%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"91%"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"9"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Providers Tracked"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Cred. Pending"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Locations"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Top priority"}),(0,r.jsx)("div",{className:"gc-val",children:"Denial rate 0.8% above target — Cigna auth pattern identified."})]})]})})]})]})]})}s(43210)},66017:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Organization Dashboard Card */
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
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .kpi-row:last-of-type {
      border-bottom: none;
    }

    .kpi-lbl {
      font-size: 11px;
      color: #FAF7F2;
      min-width: 110px;
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
      min-width: 44px;
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

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"organization-dashboard",children:[(0,r.jsx)("div",{className:"org-dash-title",children:"— Enterprise Operations \xb7 Executive Dashboard"}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Enterprise Collection Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"91%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"91.8%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Group Denial Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill mi",style:{width:"42%"}})}),(0,r.jsx)("span",{className:"kpi-val mi",children:"4.2%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"AR Over 120 Days"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill mi",style:{width:"29%"}})}),(0,r.jsx)("span",{className:"kpi-val mi",children:"7.8%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Credentialing Active"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"89%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"89% of roster"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Clean Claim Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill hi",style:{width:"95%"}})}),(0,r.jsx)("span",{className:"kpi-val hi",children:"95.3%"})]}),(0,r.jsxs)("div",{className:"kpi-row","data-animated":"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Revenue vs. Budget"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill mi",style:{width:"52%"}})}),(0,r.jsx)("span",{className:"kpi-val mi",children:"-1.4%"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"24+"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Locations"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Priority Flags"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"Weekly"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Exec Reporting"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— This quarter's priority"}),(0,r.jsx)("div",{className:"gc-val",children:"Denial rate 1.2% above benchmark — root cause analysis in progress."})]})]})})]})]})]})}s(43210)},78135:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Order Intake Command Panel Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

    .cp-card {
      background: #FFF;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 32px rgba(10, 22, 40, .10), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .cp-header {
      background: #0A1628;
      padding: 22px 24px 18px;
    }

    .cp-header-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, .38);
      margin-bottom: 12px;
    }

    .cp-main-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .cp-big {
      font-family: 'Fraunces', serif;
      font-size: 2.6rem;
      color: #00C896;
      line-height: 1;
      font-variation-settings: "opsz" 144;
    }

    .cp-unit {
      font-size: 11px;
      color: rgba(250, 247, 242, .45);
      padding-bottom: 4px;
      margin-left: 4px;
    }

    .cp-trend {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
      background: rgba(0, 200, 150, .12);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 3px 10px;
      border-radius: 100px;
    }

    .cp-trend-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-header-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .35);
      letter-spacing: .08em;
      margin-top: 6px;
    }

    .cp-body {
      background: #111f35;
      padding: 16px 20px;
    }

    .cp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .cp-metric {
      padding: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .06);
      border-right: 1px solid rgba(255, 255, 255, .06);
    }

    .cp-metric:nth-child(2n) {
      border-right: none;
    }

    .cp-metric:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .cp-m-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: rgba(250, 247, 242, .32);
      margin-bottom: 5px;
    }

    .cp-m-value {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      color: rgba(250, 247, 242, .8);
    }

    .cp-m-value.sig {
      color: #00C896;
    }

    .cp-m-value.amb {
      color: #F59E0B;
    }

    .cp-m-value.lite {
      color: rgba(250, 247, 242, .8);
    }

    .cp-spark {
      height: 3px;
      border-radius: 2px;
      background: rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .cp-spark-fill {
      height: 100%;
      border-radius: 2px;
    }

    .spark-sig {
      background: #00C896;
    }

    .spark-amb {
      background: #F59E0B;
    }

    .spark-lite {
      background: rgba(250, 247, 242, .35);
    }

    .cp-queue {
      background: #FFF;
      padding: 16px 20px;
    }

    .cp-queue-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: #475569;
      margin-bottom: 10px;
    }

    .cp-queue-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .cp-queue-row:last-of-type {
      border-bottom: none;
    }

    .cp-q-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cp-q-lbl {
      font-size: 11px;
      color: #1B2942;
      flex: 1;
      line-height: 1.3;
    }

    .cp-q-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: .08em;
      padding: 2px 9px;
      border-radius: 100px;
      white-space: nowrap;
    }

    .badge-ok {
      background: rgba(0, 200, 150, .1);
      color: #00876B;
    }

    .badge-warn {
      background: rgba(245, 158, 11, .12);
      color: #B45309;
    }

    .badge-risk {
      background: rgba(214, 69, 69, .09);
      color: #D64545;
    }

    .cp-footer {
      background: #0A1628;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cp-footer-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
    }

    .cp-footer-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-footer-right {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .3);
      letter-spacing: .08em;
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"cp-card",children:[(0,r.jsxs)("div",{className:"cp-header",children:[(0,r.jsx)("div",{className:"cp-header-label",children:"— Order Intake Dashboard \xb7 Daily Status"}),(0,r.jsxs)("div",{className:"cp-main-row",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[(0,r.jsx)("span",{className:"cp-big",children:"98.2%"}),(0,r.jsx)("span",{className:"cp-unit",children:"orders complete at intake"})]}),(0,r.jsxs)("span",{className:"cp-trend",children:[(0,r.jsx)("span",{className:"cp-trend-dot"}),"↑ 4.1% vs last month"]})]}),(0,r.jsx)("div",{className:"cp-header-sub",children:"Updated today \xb7 Lab & Imaging Operations"})]}),(0,r.jsx)("div",{className:"cp-body",children:(0,r.jsxs)("div",{className:"cp-grid",children:[(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Auth Approval Rate"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"96.4%"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"96%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Avg Auth Turnaround"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"1.8 days"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"82%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Incomplete Orders"}),(0,r.jsx)("div",{className:"cp-m-value amb",children:"3 today"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-amb",style:{width:"18%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Billing Handoff Rate"}),(0,r.jsx)("div",{className:"cp-m-value lite",children:"99.1%"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-lite",style:{width:"99%"}})})]})]})}),(0,r.jsxs)("div",{className:"cp-queue",children:[(0,r.jsx)("div",{className:"cp-queue-title",children:"Order Status Queue \xb7 Active"}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"MRI orders — authorized & scheduled"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"14 confirmed"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"CT orders — awaiting payer auth"}),(0,r.jsx)("span",{className:"cp-q-badge badge-warn",children:"6 pending"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Lab panels — eligibility confirmed"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"22 ready"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#D64545"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Incomplete referrals — follow-up sent"}),(0,r.jsx)("span",{className:"cp-q-badge badge-risk",children:"3 incomplete"})]})]}),(0,r.jsxs)("div",{className:"cp-footer",children:[(0,r.jsxs)("span",{className:"cp-footer-pill",children:[(0,r.jsx)("span",{className:"cp-footer-pulse"}),"3 orders need document follow-up today"]}),(0,r.jsx)("span",{className:"cp-footer-right",children:"HIPAA \xb7 Secured"})]})]})})]})]})]})}},96821:(e,a,s)=>{s.d(a,{default:()=>i});var r=s(60687);function i({solution:e}){let a=`
    /* Command Panel Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */

    .cp-card {
      background: #FFF;
      border: 1px solid #E8E2D5;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 32px rgba(10, 22, 40, .10), 0 1px 4px rgba(10, 22, 40, .05);
    }

    .cp-header {
      background: #0A1628;
      padding: 22px 24px 18px;
    }

    .cp-header-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, .38);
      margin-bottom: 12px;
    }

    .cp-main-row {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 6px;
    }

    .cp-big {
      font-family: 'Fraunces', serif;
      font-size: 2.6rem;
      color: #00C896;
      line-height: 1;
      font-variation-settings: "opsz" 144;
    }

    .cp-unit {
      font-size: 11px;
      color: rgba(250, 247, 242, .45);
      padding-bottom: 4px;
      margin-left: 4px;
    }

    .cp-trend {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
      background: rgba(0, 200, 150, .12);
      border: 1px solid rgba(0, 200, 150, .2);
      padding: 3px 10px;
      border-radius: 100px;
    }

    .cp-trend-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-header-sub {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .35);
      letter-spacing: .08em;
      margin-top: 6px;
    }

    .cp-body {
      background: #111f35;
      padding: 16px 20px;
    }

    .cp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }

    .cp-metric {
      padding: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, .06);
      border-right: 1px solid rgba(255, 255, 255, .06);
    }

    .cp-metric:nth-child(2n) {
      border-right: none;
    }

    .cp-metric:nth-last-child(-n+2) {
      border-bottom: none;
    }

    .cp-m-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .12em;
      color: rgba(250, 247, 242, .32);
      margin-bottom: 5px;
    }

    .cp-m-value {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      color: rgba(250, 247, 242, .8);
    }

    .cp-m-value.sig {
      color: #00C896;
    }

    .cp-m-value.amb {
      color: #F59E0B;
    }

    .cp-m-value.lite {
      color: rgba(250, 247, 242, .8);
    }

    .cp-spark {
      height: 3px;
      border-radius: 2px;
      background: rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .cp-spark-fill {
      height: 100%;
      border-radius: 2px;
    }

    .spark-sig {
      background: #00C896;
    }

    .spark-amb {
      background: #F59E0B;
    }

    .spark-lite {
      background: rgba(250, 247, 242, .35);
    }

    .cp-queue {
      background: #FFF;
      padding: 16px 20px;
    }

    .cp-queue-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      text-transform: uppercase;
      letter-spacing: .14em;
      color: #475569;
      margin-bottom: 10px;
    }

    .cp-queue-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid #E8E2D5;
    }

    .cp-queue-row:last-of-type {
      border-bottom: none;
    }

    .cp-q-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .cp-q-lbl {
      font-size: 11px;
      color: #1B2942;
      flex: 1;
      line-height: 1.3;
    }

    .cp-q-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      letter-spacing: .08em;
      padding: 2px 9px;
      border-radius: 100px;
      white-space: nowrap;
    }

    .badge-ok {
      background: rgba(0, 200, 150, .1);
      color: #00876B;
    }

    .badge-warn {
      background: rgba(245, 158, 11, .12);
      color: #B45309;
    }

    .cp-footer {
      background: #0A1628;
      padding: 12px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cp-footer-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: .1em;
      color: #00C896;
    }

    .cp-footer-pulse {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #00C896;
    }

    .cp-footer-right {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: rgba(250, 247, 242, .3);
      letter-spacing: .08em;
    }

    .hero-visual {
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: 0.55s;
      opacity: 0;
      transform: translateY(20px);
    }

    @media(max-width:1024px) {
      .hero-visual {
        display: none;
      }
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:a}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"cp-card",children:[(0,r.jsxs)("div",{className:"cp-header",children:[(0,r.jsx)("div",{className:"cp-header-label",children:"— Partner Delivery Dashboard \xb7 Active Clients"}),(0,r.jsxs)("div",{className:"cp-main-row",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[(0,r.jsx)("span",{className:"cp-big",children:"12"}),(0,r.jsx)("span",{className:"cp-unit",children:"partner clients supported"})]}),(0,r.jsxs)("span",{className:"cp-trend",children:[(0,r.jsx)("span",{className:"cp-trend-dot"}),"↑ 4 new this quarter"]})]}),(0,r.jsx)("div",{className:"cp-header-sub",children:"Updated today \xb7 Marketplace Partner View"})]}),(0,r.jsx)("div",{className:"cp-body",children:(0,r.jsxs)("div",{className:"cp-grid",children:[(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Client Retention"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"97.3%"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"97%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Avg Collection Rate"}),(0,r.jsx)("div",{className:"cp-m-value sig",children:"94.1%"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-sig",style:{width:"94%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Onboarding Time"}),(0,r.jsx)("div",{className:"cp-m-value amb",children:"~14 days"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-amb",style:{width:"60%"}})})]}),(0,r.jsxs)("div",{className:"cp-metric",children:[(0,r.jsx)("div",{className:"cp-m-label",children:"Clients in Ramp"}),(0,r.jsx)("div",{className:"cp-m-value lite",children:"3 active"}),(0,r.jsx)("div",{className:"cp-spark",children:(0,r.jsx)("div",{className:"cp-spark-fill spark-lite",style:{width:"25%"}})})]})]})}),(0,r.jsxs)("div",{className:"cp-queue",children:[(0,r.jsx)("div",{className:"cp-queue-title",children:"Partner Client Service Coverage"}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Billing & RCM — all partner clients"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Active"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Credentialing — 8 providers in process"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"On track"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"3 new client onboardings in progress"}),(0,r.jsx)("span",{className:"cp-q-badge badge-warn",children:"Week 2 of 3"})]}),(0,r.jsxs)("div",{className:"cp-queue-row",children:[(0,r.jsx)("div",{className:"cp-q-dot",style:{background:"#00C896"}}),(0,r.jsx)("span",{className:"cp-q-lbl",children:"Monthly partner reporting — delivered"}),(0,r.jsx)("span",{className:"cp-q-badge badge-ok",children:"Current"})]})]}),(0,r.jsxs)("div",{className:"cp-footer",children:[(0,r.jsxs)("span",{className:"cp-footer-pill",children:[(0,r.jsx)("span",{className:"cp-footer-pulse"}),"All 12 partner clients actively supported"]}),(0,r.jsx)("span",{className:"cp-footer-right",children:"White-label available"})]})]})})]})]})]})}}};