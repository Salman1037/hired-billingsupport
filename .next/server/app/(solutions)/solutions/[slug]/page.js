(()=>{var e={};e.id=267,e.ids=[267],e.modules={163:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"unstable_rethrow",{enumerable:!0,get:function(){return r}});let r=a(71042).unstable_rethrow;("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},1330:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);function i({solution:e}){let s=`
    /* Patient Engagement Journey Card */
    /* All hero layout classes (.hero, .hero-inner, .display, .lede, .sub, .hero-actions, .reveal, etc.) are in globals.css */
.marketing-engagement-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .marketing-engagement-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .journey-card {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      opacity: 0;
      transform: translateY(20px);
      animation: reveal 0.9s var(--ease) forwards;
      animation-delay: var(--reveal-delay, 0s);
    }

    .journey-card:last-of-type {
      border-bottom: none;
    }

    .journey-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .jdot-done {
      background: #00C896;
    }

    .jdot-active {
      background: #F59E0B;
    }

    .jdot-pending {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .journey-text {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.85);
      line-height: 1.45;
      flex: 1;
    }

    .journey-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      flex-shrink: 0;
    }

    .jtag-done {
      color: #00876B;
    }

    .jtag-active {
      color: #B45309;
    }

    .jtag-pending {
      color: #475569;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

.gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
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
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"hero-visual",children:(0,r.jsxs)("div",{className:"marketing-engagement-hero-card",children:[(0,r.jsx)("h4",{children:"— Patient Engagement Snapshot \xb7 30-day"}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Website inquiry received — same-day response"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Done"})]}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Follow-up call — appointment offered same call"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Done"})]}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Appointment confirmation + intake forms sent"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Done"})]}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Insurance verified pre-visit — no surprises"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Done"})]}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-active"}),(0,r.jsx)("span",{className:"journey-text",children:"Post-visit recall — 6-week follow-up scheduled"}),(0,r.jsx)("span",{className:"journey-tag jtag-active",children:"In progress"})]}),(0,r.jsxs)("div",{className:"journey-card","data-animated":"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-pending"}),(0,r.jsx)("span",{className:"journey-text",children:"Review request — post-visit satisfaction follow-up"}),(0,r.jsx)("span",{className:"journey-tag jtag-pending",children:"Queued"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"94%"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Inquiry Response Rate"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"78%"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Inquiry-to-Apt Rate"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"4.8★"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Avg Review Score"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Engagement gap closed"}),(0,r.jsx)("div",{className:"gc-val",children:"Avg response time: 4 hrs → 38 min. Conversion up 22%."})]})]})})]})]})]})}a(43210)},1630:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroFqhc.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroFqhc.tsx","default")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4218:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .practice-launch-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .practice-launch-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .checklist-card {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .checklist-card:last-of-type {
      border-bottom: none;
    }

    .check-icon {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 1px;
      font-size: 8px;
      font-weight: 600;
    }

    .check-done {
      background: #00C896;
      color: #fff;
    }

    .check-pending {
      background: rgba(212, 165, 116, 0.12);
      border: 1px solid rgba(212, 165, 116, 0.3);
      color: #D4A574;
    }

    .check-open {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: transparent;
    }

    .checklist-text {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.75);
      line-height: 1.4;
    }

    .checklist-text.done {
      color: rgba(250, 247, 242, 0.65);
      text-decoration: line-through;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
      line-height: 1.4;
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"practice-launch-hero-card",children:[(0,r.jsx)("h4",{children:"— Practice Launch Readiness \xb7 Pre-Open Checklist"}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-done",children:"✓"}),(0,r.jsx)("span",{className:"checklist-text done",children:"Entity formation & tax ID obtained"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-done",children:"✓"}),(0,r.jsx)("span",{className:"checklist-text done",children:"NPI — Individual & Group registered"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-done",children:"✓"}),(0,r.jsx)("span",{className:"checklist-text done",children:"CAQH profile built and attested"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-pending",children:"!"}),(0,r.jsx)("span",{className:"checklist-text",children:"Medicare PECOS submitted — Day 28"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-pending",children:"!"}),(0,r.jsx)("span",{className:"checklist-text",children:"Commercial payer apps — 3 submitted, 2 pending"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-open"}),(0,r.jsx)("span",{className:"checklist-text",children:"EHR billing module configured"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-open"}),(0,r.jsx)("span",{className:"checklist-text",children:"Eligibility verification workflow set up"})]}),(0,r.jsxs)("div",{className:"checklist-card",children:[(0,r.jsx)("div",{className:"check-icon check-open"}),(0,r.jsx)("span",{className:"checklist-text",children:"Patient intake forms finalized"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Complete"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#D4A574"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"In Progress"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#475569"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Not Started"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Estimated to billing-ready"}),(0,r.jsx)("div",{className:"gc-val",children:"6–8 weeks if started today. 4+ months if delayed."})]})]})]})]})]})}},5060:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMarketingPatientEngagement.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMarketingPatientEngagement.tsx","default")},5237:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .payer-enroll-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .payer-enroll-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card:last-of-type {
      border-bottom: none;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-green {
      background: #00C896;
    }

    .dot-amber {
      background: #D4A574;
    }

    .dot-red {
      background: #FF8585;
    }

    .dot-grey {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .status-label {
      font-size: 12px;
      color: var(--paper);
      flex: 1;
    }

    .status-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-value.done {
      color: #00C896;
    }

    .status-value.pending {
      color: #D4A574;
    }

    .status-value.blocked {
      color: #FF8585;
    }

    .status-value.waiting {
      color: #475569;
    }

    .status-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      border-radius: 100px;
    }

    .pill-green {
      background: rgba(0, 200, 150, 0.12);
      color: #00876B;
    }

    .pill-amber {
      background: rgba(212, 165, 116, 0.12);
      color: #D4A574;
    }

    .pill-red {
      background: rgba(255, 133, 133, 0.1);
      color: #FF8585;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"payer-enroll-hero-card",children:[(0,r.jsx)("h4",{children:"— Payer Enrollment Tracker \xb7 Active Applications"}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Blue Cross Blue Shield"}),(0,r.jsx)("span",{className:"status-value done",children:"Active — EFT confirmed"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Aetna Commercial"}),(0,r.jsx)("span",{className:"status-value done",children:"Active — ERA set up"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"UnitedHealthcare"}),(0,r.jsxs)("span",{className:"status-value pending",children:["Pending ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"Day 34 of ~45"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"Medicare Part B"}),(0,r.jsxs)("span",{className:"status-value pending",children:["PECOS submitted ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"Under review"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-red"}),(0,r.jsx)("span",{className:"status-label",children:"Medicaid — State"}),(0,r.jsxs)("span",{className:"status-value blocked",children:["Blocked ",(0,r.jsx)("span",{className:"status-pill pill-red",children:"Missing W-9"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-grey"}),(0,r.jsx)("span",{className:"status-label",children:"Cigna Behavioral Health"}),(0,r.jsx)("span",{className:"status-value waiting",children:"Application prep in progress"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"6"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Payers Tracked"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Active & Billing"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#D4A574"},children:"1"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Needs Action"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Estimated revenue unlock"}),(0,r.jsx)("div",{className:"gc-val",children:"UHC approval adds ~$14K/month in billable access."})]})]})]})]})]})}},9932:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .provider-cred-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .provider-cred-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card:last-of-type {
      border-bottom: none;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-green {
      background: #00C896;
    }

    .dot-amber {
      background: #D4A574;
    }

    .dot-red {
      background: #FF8585;
    }

    .dot-grey {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .status-label {
      font-size: 12px;
      color: var(--paper);
      flex: 1;
    }

    .status-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-value.done {
      color: #00C896;
    }

    .status-value.pending {
      color: #D4A574;
    }

    .status-value.blocked {
      color: #FF8585;
    }

    .status-value.waiting {
      color: #475569;
    }

    .status-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      border-radius: 100px;
    }

    .pill-green {
      background: rgba(0, 200, 150, 0.12);
      color: #00876B;
    }

    .pill-amber {
      background: rgba(212, 165, 116, 0.12);
      color: #D4A574;
    }

    .pill-red {
      background: rgba(255, 133, 133, 0.1);
      color: #FF8585;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"provider-cred-hero-card",children:[(0,r.jsx)("h4",{children:"— Credentialing Status Board \xb7 Active Providers"}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Dr. Reyes — Primary Care"}),(0,r.jsx)("span",{className:"status-value done",children:"Active \xb7 All payers"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"Dr. Okafor — Cardiology"}),(0,r.jsxs)("span",{className:"status-value pending",children:["In progress ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"3 payers pending"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"Dr. Kim — Behavioral Health"}),(0,r.jsxs)("span",{className:"status-value pending",children:["CAQH submitted ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"Awaiting review"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-red"}),(0,r.jsx)("span",{className:"status-label",children:"Dr. Patel — Orthopedics"}),(0,r.jsxs)("span",{className:"status-value blocked",children:["Blocked ",(0,r.jsx)("span",{className:"status-pill pill-red",children:"Missing DEA"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-grey"}),(0,r.jsx)("span",{className:"status-label",children:"NP Torres — Urgent Care"}),(0,r.jsx)("span",{className:"status-value waiting",children:"Not started \xb7 Onboarding Q3"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"5"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Providers Tracked"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#D4A574"},children:"1"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Blocked — Action"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Expired Docs"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Next milestone"}),(0,r.jsx)("div",{className:"gc-val",children:"Dr. Okafor — Aetna approval expected within 18 days."})]})]})]})]})]})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14860:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroQualityAssurance.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroQualityAssurance.tsx","default")},18606:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroProviderCredential.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroProviderCredential.tsx","default")},19048:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroPayers.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroPayers.tsx","default")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},21788:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .virtual-healthcare-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .virtual-healthcare-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .journey-card {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .journey-card:last-of-type {
      border-bottom: none;
    }

    .journey-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 4px;
    }

    .jdot-done {
      background: #00C896;
    }

    .jdot-active {
      background: #F59E0B;
    }

    .jdot-pending {
      background: #E8E2D5;
      border: 1px solid #475569;
    }

    .journey-text {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.85);
      line-height: 1.45;
      flex: 1;
    }

    .journey-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      flex-shrink: 0;
    }

    .jtag-done {
      color: #00876B;
    }

    .jtag-active {
      color: #B45309;
    }

    .jtag-pending {
      color: #475569;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"virtual-healthcare-hero-card",children:[(0,r.jsx)("h4",{children:"— Virtual Care Operations \xb7 Daily Queue"}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Tomorrow's telehealth patients — eligibility verified"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Complete"})]}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Visit links sent — 24hr and 1hr reminders scheduled"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Complete"})]}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-done"}),(0,r.jsx)("span",{className:"journey-text",children:"Intake forms completed — 8 of 9 patients"}),(0,r.jsx)("span",{className:"journey-tag jtag-done",children:"Complete"})]}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-active"}),(0,r.jsx)("span",{className:"journey-text",children:"Prior auth — 2 visits requiring review before noon"}),(0,r.jsx)("span",{className:"journey-tag jtag-active",children:"In progress"})]}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-active"}),(0,r.jsx)("span",{className:"journey-text",children:"Provider EHR tasks — 3 items pending review"}),(0,r.jsx)("span",{className:"journey-tag jtag-active",children:"In progress"})]}),(0,r.jsxs)("div",{className:"journey-card",children:[(0,r.jsx)("div",{className:"journey-dot jdot-pending"}),(0,r.jsx)("span",{className:"journey-text",children:"Post-visit follow-up — yesterday's patients queued"}),(0,r.jsx)("span",{className:"journey-tag jtag-pending",children:"Queued"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"9"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Visits Prepped"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Missing Eligibility"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Auth Actions Needed"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Provider time saved daily"}),(0,r.jsx)("div",{className:"gc-val",children:"Estimated 2.4 hrs of admin tasks handled before first visit."})]})]})]})]})]})}},28501:(e,s,a)=>{Promise.resolve().then(a.bind(a,74978)),Promise.resolve().then(a.bind(a,5130)),Promise.resolve().then(a.bind(a,66017)),Promise.resolve().then(a.bind(a,30312)),Promise.resolve().then(a.bind(a,1330)),Promise.resolve().then(a.bind(a,96821)),Promise.resolve().then(a.bind(a,46130)),Promise.resolve().then(a.bind(a,78135)),Promise.resolve().then(a.bind(a,55997)),Promise.resolve().then(a.bind(a,6715)),Promise.resolve().then(a.bind(a,83432)),Promise.resolve().then(a.bind(a,41523)),Promise.resolve().then(a.bind(a,5237)),Promise.resolve().then(a.bind(a,25114)),Promise.resolve().then(a.bind(a,4218)),Promise.resolve().then(a.bind(a,9932)),Promise.resolve().then(a.bind(a,38770)),Promise.resolve().then(a.bind(a,90829)),Promise.resolve().then(a.bind(a,13866)),Promise.resolve().then(a.bind(a,26203)),Promise.resolve().then(a.bind(a,21788))},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},29297:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMedicalOrderTransmission.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMedicalOrderTransmission.tsx","default")},30614:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>l.a,__next_app__:()=>h,pages:()=>c,routeModule:()=>p,tree:()=>d});var r=a(65239),i=a(48088),t=a(88170),l=a.n(t),n=a(30893),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(s,o);let d={children:["",{children:["(solutions)",{children:["solutions",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,72648)),"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\(solutions)\\solutions\\[slug]\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(a.t.bind(a,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,58014)),"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,57398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(a.t.bind(a,89999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(a.t.bind(a,65284,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,c=["C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\(solutions)\\solutions\\[slug]\\page.tsx"],h={require:a,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/(solutions)/solutions/[slug]/page",pathname:"/solutions/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},31776:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroDeveloperPortal.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroDeveloperPortal.tsx","default")},31874:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroOldAgingAr.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroOldAgingAr.tsx","default")},33873:e=>{"use strict";e.exports=require("path")},35692:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroSmallMedicalPractices.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroSmallMedicalPractices.tsx","default")},38770:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);function i({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— QA Performance Scorecard \xb7 Monthly"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Claim Accuracy"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"97%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"97%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Coding QA Pass Rate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"95%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"95%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"AR Follow-Up Compliance"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"98%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"98%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Denial Work Rate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"100%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"100%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Process SOP Adherence"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"91%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"91%"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— This month's finding"}),(0,r.jsx)("div",{className:"gc-val",children:"SOP adherence gap in denial follow-up notes — corrected."})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"12 ERRORS CAUGHT PRE-SUBMIT"}),(0,r.jsx)("span",{className:"card-tag after",children:"3 PROCESS GAPS FOUND"}),(0,r.jsx)("span",{className:"card-tag after",children:"$0 UNREVIEWED DENIALS"})]})]})})]})]})}a(43210)},39916:(e,s,a)=>{"use strict";var r=a(97576);a.o(r,"notFound")&&a.d(s,{notFound:function(){return r.notFound}})},41523:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .ops-management-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .ops-management-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 9px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .status-card:last-of-type {
      border-bottom: none;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .dot-green {
      background: #00C896;
    }

    .dot-amber {
      background: #D4A574;
    }

    .dot-red {
      background: #FF8585;
    }

    .status-label {
      font-size: 12px;
      color: var(--paper);
      flex: 1;
    }

    .status-value {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-value.done {
      color: #00C896;
    }

    .status-value.pending {
      color: #D4A574;
    }

    .status-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      letter-spacing: 0.1em;
      padding: 2px 8px;
      border-radius: 100px;
    }

    .pill-amber {
      background: rgba(212, 165, 116, 0.12);
      color: #D4A574;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"ops-management-hero-card",children:[(0,r.jsx)("h4",{children:"— Operations Dashboard \xb7 Daily Status"}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Prior Auth Queue"}),(0,r.jsx)("span",{className:"status-value done",children:"12 managed — 0 expired"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Eligibility Verifications"}),(0,r.jsx)("span",{className:"status-value done",children:"All tomorrow's appts verified"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"Scheduling Gaps"}),(0,r.jsxs)("span",{className:"status-value pending",children:["3 unfilled slots ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"follow-up sent"})]})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Patient Callbacks"}),(0,r.jsx)("span",{className:"status-value done",children:"All returned same-day"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-green"}),(0,r.jsx)("span",{className:"status-label",children:"Claim Submission Queue"}),(0,r.jsx)("span",{className:"status-value done",children:"0 claims pending >24hrs"})]}),(0,r.jsxs)("div",{className:"status-card",children:[(0,r.jsx)("div",{className:"status-dot dot-amber"}),(0,r.jsx)("span",{className:"status-label",children:"Provider Task Queue"}),(0,r.jsxs)("span",{className:"status-value pending",children:["2 items ",(0,r.jsx)("span",{className:"status-pill pill-amber",children:"need action"})]})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"4"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Green — On Track"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#D4A574"},children:"2"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"In Progress"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Critical Issues"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Today's priority"}),(0,r.jsx)("div",{className:"gc-val",children:"3 schedule gaps — patient outreach in progress."})]})]})]})]})]})}},46130:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);function i({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Practice Revenue Snapshot \xb7 30-day"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Billed"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"100%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$198K"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Before HBS"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"71%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$141K"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"With HBS"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"95%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$189K"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Revenue recovered monthly"}),(0,r.jsx)("div",{className:"gc-val",children:"$48,000 — the production-to-collection gap, closed."})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"71% COLLECTION RATE"}),(0,r.jsx)("span",{className:"card-tag after",children:"95% COLLECTION RATE"})]})]})})]})]})}a(43210)},48976:(e,s,a)=>{"use strict";function r(){throw Object.defineProperty(Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E488",enumerable:!1,configurable:!0})}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"forbidden",{enumerable:!0,get:function(){return r}}),a(8704).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},52905:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroStartupPractices.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroStartupPractices.tsx","default")},61560:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroAnalyticsReporting.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroAnalyticsReporting.tsx","default")},62765:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"notFound",{enumerable:!0,get:function(){return i}});let r=""+a(8704).HTTP_ERROR_FALLBACK_ERROR_CODE+";404";function i(){let e=Object.defineProperty(Error(r),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});throw e.digest=r,e}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},65499:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroEnterprisemedicaloperation.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroEnterprisemedicaloperation.tsx","default")},69876:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMedicalBillingRcm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMedicalBillingRcm.tsx","default")},70899:(e,s,a)=>{"use strict";function r(){throw Object.defineProperty(Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."),"__NEXT_ERROR_CODE",{value:"E411",enumerable:!1,configurable:!0})}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"unauthorized",{enumerable:!0,get:function(){return r}}),a(8704).HTTP_ERROR_FALLBACK_ERROR_CODE,("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},71042:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"unstable_rethrow",{enumerable:!0,get:function(){return function e(s){if((0,l.isNextRouterError)(s)||(0,t.isBailoutToCSRError)(s)||(0,o.isDynamicServerError)(s)||(0,n.isDynamicPostpone)(s)||(0,i.isPostpone)(s)||(0,r.isHangingPromiseRejectionError)(s))throw s;s instanceof Error&&"cause"in s&&e(s.cause)}}});let r=a(68388),i=a(52637),t=a(51846),l=a(31162),n=a(84971),o=a(98479);("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},72648:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y,generateMetadata:()=>N,generateStaticParams:()=>w});var r=a(37413),i=a(28785);function t({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Denial Trend Dashboard \xb7 30-day"}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Total denials received"}),(0,r.jsx)("span",{className:"denial-val warn",children:"47 claims"})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Worked and resolved"}),(0,r.jsxs)("span",{className:"denial-val good",children:["39 ",(0,r.jsx)("span",{className:"denial-pill pill-good",children:"83%"})]})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"In appeal"}),(0,r.jsxs)("span",{className:"denial-val",children:["6 ",(0,r.jsx)("span",{className:"denial-pill pill-warn",children:"Active"})]})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Unworked denials"}),(0,r.jsx)("span",{className:"denial-val good",children:"0"})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Top cause — Missing auth"}),(0,r.jsx)("span",{className:"denial-val warn",children:"18 claims"})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Denial rate vs. last month"}),(0,r.jsx)("span",{className:"denial-val good",children:"↓ 2.1%"})]}),(0,r.jsxs)("div",{className:"denial-row",children:[(0,r.jsx)("span",{className:"denial-lbl",children:"Appeal reversal rate"}),(0,r.jsxs)("span",{className:"denial-val good",children:["76% ",(0,r.jsx)("span",{className:"denial-pill pill-good",children:"Strong"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Root cause addressed this month"}),(0,r.jsx)("div",{className:"gc-val",children:"Auth workflow updated — same denial won't repeat."})]})]})})]})]})}var l=a(14860),n=a(96979),o=a(69876),d=a(31874),c=a(18606),h=a(91831),p=a(83804),m=a(90233),x=a(5060),v=a(78526),u=a(61560);a(35692),a(52905),a(84621),a(97667),a(65499),a(1630),a(19048),a(29297),a(89128);var g=a(31776);let j={"ar-denial-fixation":t,"ar-management":function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— AR Aging Snapshot \xb7 Current"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"0–30 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"80%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$68,400"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"31–60 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"55%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$34,120"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-orange",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"61–90 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"35%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$21,880"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"91–120 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"20%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$13,340"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"120+ days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"12%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$8,700"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Recoverable (60+ days)"}),(0,r.jsx)("div",{className:"gc-val",children:"$43,920 \xb7 actively being worked by HBS team"})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"$43,920 RECOVERABLE"}),(0,r.jsx)("span",{className:"card-tag after",children:"ACTIVE FOLLOW-UP"})]})]})]})]})},"compliance-reporting":function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— RCM Performance Dashboard \xb7 Monthly"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Collection Rate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"94%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"94.2%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Clean Claim Rate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"97%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"97.8%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Denial Rate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"34%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"3.4%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-orange",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Days in AR"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"48%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"24 Days"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"AR Over 90 Days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"16%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"8.2%"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Compliance Flags"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"0%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"0"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— This month's priority"}),(0,r.jsx)("div",{className:"gc-val",children:"Denial rate above target — root cause in progress."})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"MONTHLY"}),(0,r.jsx)("span",{className:"card-tag after",children:"REPORT CADENCE"}),(0,r.jsx)("span",{className:"card-tag after",children:"6 KPIs TRACKED"}),(0,r.jsx)("span",{className:"card-tag after",children:"LEADERSHIP READY"})]})]})})]})]})},"medical-auditing":function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Audit Findings Summary"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Claims Audited"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"100%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"248 Claims"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Coding Errors Found"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"12%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"31"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-orange",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Documentation Gaps"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"7%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"18 Claims"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Underpayments Identified"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"44%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$9,840"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Revenue Leakage Estimate"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"100%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$22,600"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"Compliance Flags"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"6%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"4 Patterns"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Action taken"}),(0,r.jsx)("div",{className:"gc-val",children:"All findings corrected. Two workflow changes recommended."})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"$22K FOUND"}),(0,r.jsx)("span",{className:"card-tag after",children:"3 ROOT CAUSES"}),(0,r.jsx)("span",{className:"card-tag after",children:"100% DOCUMENTED"})]})]})})]})]})},"medical-coding":function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Coding Accuracy \xb7 30-day view"}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"ICD-10 Accuracy"}),(0,r.jsx)("span",{className:"dash-value green",children:"96%"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"CPT Accuracy"}),(0,r.jsx)("span",{className:"dash-value green",children:"94%"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Modifier Accuracy"}),(0,r.jsx)("span",{className:"dash-value amber",children:"88%"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Doc–Code Alignment"}),(0,r.jsx)("span",{className:"dash-value green",children:"97%"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Coding Denial Rate"}),(0,r.jsx)("span",{className:"dash-value",children:(0,r.jsx)("span",{className:"dash-pill pill-green",children:"2.1% ↓"})})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Errors Caught Pre-Submit"}),(0,r.jsx)("span",{className:"dash-value green",children:"14"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"341"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Claims Reviewed"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Unbilled Visits"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num green",children:"$18.4K"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Revenue Protected"})]})]})]})})})]})]})},"quality-assurance":l.default,"rcm-management":n.default,"medical-billing-rcm":o.default,"old-aging-ar":d.default,"provider-credential":c.default,"payer-insurer-enrollment":h.default,"practice-launch":p.default,"operations-management":m.default,"marketing-patient-engagement":x.default,"virtual-healthcare-solutions":v.default,"analytics-reporting":u.default,"developer-portal":g.default,psychiatry:function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— Behavioral Health Billing \xb7 Active Queue"}),[{label:"Aetna — Therapy Sessions (60 allowed)",status:"Active \xb7 34 used",type:"approved"},{label:"BCBS — Medication Management",status:"Active \xb7 No limit",type:"approved"},{label:"UHC — Intensive Outpatient Auth",status:"Pending Day 9",type:"pending"},{label:"Cigna — Telehealth Benefit Check",status:"Verifying parity rules",type:"pending"},{label:"Medicaid — Crisis Services Auth",status:"Submission due today",type:"needed"}].map((e,s)=>(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:s<4?"1px solid var(--paper-line)":"none"},children:[(0,r.jsx)("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:e.label}),(0,r.jsx)("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:"approved"===e.type?"var(--signal-deep)":"pending"===e.type?"var(--amber-deep)":"var(--danger)",background:"approved"===e.type?"rgba(0,200,150,.1)":"pending"===e.type?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:e.status})]},s)),(0,r.jsx)("div",{style:{borderTop:"1px solid var(--paper-line)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Auths Tracked"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Limits",color:"var(--signal-deep)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"var(--paper)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Session limit alert"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Aetna patient at 34/60 sessions. Extension auth needed at visit 50."})]})]})})]})]})},orthopedic:function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"rgba(250, 247, 242, 0.5)",marginBottom:"16px",fontWeight:"600"},children:"— Orthopedic Revenue \xb7 High-Value Claims Tracker"}),[{label:"Surgical Claim Rate",value:"96.2%",width:96,type:"hi"},{label:"Auth Approval Rate",value:"94.8%",width:94,type:"hi"},{label:"Denial Rate (High-Value)",value:"2.8%",width:28,type:"mi"},{label:"AR Over 60 Days",value:"8.4%",width:33,type:"mi"},{label:"Collection Rate",value:"95.1%",width:95,type:"hi"}].map((e,s)=>(0,r.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[(0,r.jsx)("span",{style:{fontSize:"12px",color:"var(--paper)",fontWeight:"500"},children:e.label}),(0,r.jsx)("span",{style:{fontSize:"13px",fontWeight:"600",color:"hi"===e.type?"var(--signal-deep)":"var(--amber-deep)"},children:e.value})]}),(0,r.jsx)("div",{style:{background:"rgba(255, 255, 255, 0.08)",height:"6px",borderRadius:"2px",overflow:"hidden"},children:(0,r.jsx)("div",{style:{background:"hi"===e.type?"var(--signal)":"var(--amber)",height:"100%",width:`${e.width}%`,transition:"width 0.3s ease"}})})]},s)),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"3",label:"Auths Expiring",color:"var(--amber-deep)"},{num:"$42K",label:"AR 60+ Days",color:"var(--danger)"},{num:"0",label:"Missed Auths",color:"var(--signal-deep)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color,lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"var(--paper)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Revenue at stake"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"3 surgical auths expiring this week — renewals initiated."})]})]})})]})]})},cardiology:function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"rgba(250, 247, 242, 0.5)",marginBottom:"16px",fontWeight:"600"},children:"— Cardiology Revenue \xb7 Active Claims Dashboard"}),[{label:"Echocardiogram — BCBS (Routine)",status:"Approved",type:"approved"},{label:"Nuclear Stress Test — Aetna",status:"Pending Day 7",type:"pending"},{label:"Cardiac Catheterization — UHC",status:"Approved — 30 days",type:"approved"},{label:"ILR Implant — Medicare",status:"Approved",type:"approved"},{label:"Holter Monitor — Cigna",status:"Auth review needed",type:"needed"}].map((e,s)=>(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:s<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[(0,r.jsx)("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:e.label}),(0,r.jsx)("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:"approved"===e.type?"var(--signal-deep)":"pending"===e.type?"var(--amber-deep)":"var(--danger)",background:"approved"===e.type?"rgba(0,200,150,.1)":"pending"===e.type?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:e.status})]},s)),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Auths Active"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Medical necessity note"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Nuclear stress test — clinical documentation ready for Aetna review."})]})]})})]})]})},obgyn:function({solution:e}){let s=[{dot:"g",label:"Prenatal Global Package — Patient A (32 wks)",status:"Tracking correctly",type:"ok"},{dot:"a",label:"Eligibility Change — Patient B (insurance switched)",status:"Verification needed",type:"warn"},{dot:"g",label:"GYN Procedure Auth — Hysteroscopy",status:"Approved",type:"pill"},{dot:"a",label:"Ultrasound Series — Insurance Review",status:"2 claims pending",type:"warn"},{dot:"r",label:"Global Period — Delivery Claim",status:"Denied — coding review",type:"risk"}];return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— OBGYN Billing Queue \xb7 Active Patients"}),s.map((e,a)=>{let i="g"===e.dot?"var(--signal)":"a"===e.dot?"var(--amber)":"var(--danger)";return(0,r.jsxs)("div",{style:{marginBottom:"12px"},children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"10px",paddingBottom:"8px"},children:[(0,r.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:i,flexShrink:0}}),(0,r.jsx)("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:e.label}),"pill"===e.type?(0,r.jsx)("span",{style:{fontFamily:"var(--mono)",fontSize:"9px",fontWeight:"600",color:"var(--signal-deep)",background:"rgba(0,200,150,.1)",padding:"3px 8px",borderRadius:"100px",whiteSpace:"nowrap"},children:e.status}):(0,r.jsx)("span",{style:{fontSize:"11px",color:"ok"===e.type?"var(--signal-deep)":"warn"===e.type?"var(--amber-deep)":"var(--danger)",fontWeight:"500"},children:e.status})]}),a<s.length-1&&(0,r.jsx)("div",{style:{height:"1px",background:"rgba(255, 255, 255, 0.08)"}})]},a)}),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"8",label:"Active Globals"},{num:"3",label:"Eligibility Flags",color:"var(--amber-deep)"},{num:"1",label:"Delivery Denial",color:"var(--danger)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Global billing note"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Patient B insurance change may affect global package — review before next prenatal visit."})]})]})})]})]})},endocrinology:function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— Endocrinology Revenue \xb7 Active Care Authorization Dashboard"}),[{label:"CGM Authorization — Type 1 Diabetes Patient A",status:"Active — renews in 60 days",type:"approved"},{label:"Insulin Pump Authorization — Patient B",status:"Renewal due in 12 days",type:"pending"},{label:"Thyroid Panel Lab Claims — Multiple Patients",status:"3 claims pending review",type:"pending"},{label:"GLP-1 Therapy Prior Authorization — Patient C",status:"Payer review — Day 11",type:"needed"},{label:"A1C Follow-Up Care Queue",status:"8 patients scheduled",type:"approved"}].map((e,s)=>(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:s<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[(0,r.jsx)("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:e.label}),(0,r.jsx)("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:"approved"===e.type?"var(--signal-deep)":"pending"===e.type?"var(--amber-deep)":"var(--danger)",background:"approved"===e.type?"rgba(0,200,150,.1)":"pending"===e.type?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:e.status})]},s)),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Active Auths"},{num:"2",label:"Renew Soon",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Care continuity alert"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Insulin pump authorization expires in 12 days — renewal request submitted for payer review."})]})]})})]})]})},neurology:function({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--ink-mute)",marginBottom:"16px",fontWeight:"600"},children:"— Neurology Billing \xb7 Authorization & Claims Dashboard"}),[{label:"MRI Brain — BCBS (Headache workup)",status:"Approved",type:"approved"},{label:"IVIG Infusion — UHC (CIDP)",status:"Pending — medical necessity review",type:"pending"},{label:"Botox for Migraine — Aetna",status:"Approved \xb7 quarterly cycle",type:"approved"},{label:"EEG — Epilepsy Monitoring",status:"Approved",type:"approved"},{label:"MS Disease-Modifying Therapy",status:"Step therapy documentation required",type:"needed"}].map((e,s)=>(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:s<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[(0,r.jsx)("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:e.label}),(0,r.jsx)("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:"approved"===e.type?"var(--signal-deep)":"pending"===e.type?"var(--amber-deep)":"var(--danger)",background:"approved"===e.type?"rgba(0,200,150,.1)":"pending"===e.type?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:e.status})]},s)),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),(0,r.jsx)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Active Auths"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((e,s)=>(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:e.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:e.num}),(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:e.label})]},s))}),(0,r.jsxs)("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[(0,r.jsx)("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Documentation priority"}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"MS therapy step therapy documentation due before next infusion date."})]})]})})]})]})}};function b({solution:e,slug:s}){let a=j[s]||t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{solution:e}),e.sections?.pain&&(0,r.jsx)("section",{className:"block",id:"pain",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.pain.eyebrow||"The problem"}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.pain.title}})]}),(0,r.jsx)("div",{className:"monologue fade-in",children:e.sections.pain.monologue.map((e,s)=>(0,r.jsx)("p",{className:e.startsWith('"')?"highlight":"",children:e},s))})]})}),e.sections?.pain&&(0,r.jsx)("section",{className:"block block--warm",id:"pain-details",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.pain.ledgerEyebrow||"The underlying issues"}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.pain.ledgerHeading||"Why this problem <em>keeps repeating.</em>"}})]}),(0,r.jsx)("div",{className:"pain-ledger fade-in",children:e.sections.pain.ledger.map(e=>(0,r.jsxs)("div",{className:"pain-item",children:[(0,r.jsx)("div",{className:"pain-num",children:e.num}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.num))})]})}),e.sections?.lifecycle&&(0,r.jsx)("section",{className:"block ",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("div",{className:"eyebrow fade-in",style:{marginBottom:24},children:e.sections.lifecycle.eyebrow}),(0,r.jsx)("div",{className:"rcm-timeline fade-in",children:e.sections.lifecycle.items.map(e=>(0,r.jsxs)("div",{className:"rcm-node",children:[(0,r.jsx)("div",{className:`rcm-dot ${e.dotClass}`,children:e.num}),(0,r.jsx)("div",{className:"rcm-node-label",children:e.label}),(0,r.jsx)("div",{className:"rcm-node-sub",children:e.sublabel})]},e.num))})]})}),e.sections?.solution&&(0,r.jsx)("section",{className:"block block--ink",id:"solution",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.solution.eyebrow}),(0,r.jsx)("h2",{className:"display display--light",dangerouslySetInnerHTML:{__html:e.sections.solution.title}}),(0,r.jsx)("p",{children:e.sections.solution.description})]}),(0,r.jsxs)("div",{className:"two-col fade-in",children:[(0,r.jsx)("div",{className:"process-list",children:e.sections.solution.process.slice(0,3).map(e=>(0,r.jsxs)("div",{className:"process-item",children:[(0,r.jsx)("div",{className:"process-num",children:e.num}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.num))}),(0,r.jsx)("div",{className:"process-list",children:e.sections.solution.process.slice(3).map(e=>(0,r.jsxs)("div",{className:"process-item",children:[(0,r.jsx)("div",{className:"process-num",children:e.num}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.num))})]})]})}),e.sections?.services&&(0,r.jsx)("section",{className:"block",id:"services",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.services.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.services.title}}),(0,r.jsx)("p",{children:e.sections.services.description})]}),(0,r.jsx)("div",{className:"services-grid fade-in",children:e.sections.services.items.map(e=>(0,r.jsxs)("div",{className:"service-item",children:[(0,r.jsx)("span",{className:"service-num",children:e.num}),(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]},e.num))})]})}),e.sections?.workflow&&(0,r.jsx)("section",{className:"block ",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.workflow.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.workflow.title}}),(0,r.jsx)("p",{children:e.sections.workflow.description})]}),(0,r.jsx)("div",{className:"workflow-dashboard fade-in",children:e.sections.workflow.items.map((e,s)=>(0,r.jsxs)("div",{className:"wf-node",children:[(0,r.jsx)("div",{className:"wf-dot wf-dot--signal",children:e.num}),(0,r.jsx)("div",{className:"wf-node-label",children:e.label}),(0,r.jsx)("div",{className:"wf-node-sub",children:e.sublabel})]},s))})]})}),e.sections?.prioritization&&(0,r.jsx)("section",{className:"block block--warm",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.prioritization.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.prioritization.title}}),(0,r.jsx)("p",{children:e.sections.prioritization.description})]}),(0,r.jsx)("div",{className:"pain-ledger fade-in",children:e.sections.prioritization.categories.map(e=>(0,r.jsxs)("div",{className:"pain-item",children:[(0,r.jsx)("div",{className:"pain-num",children:e.num}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.num))})]})}),e.sections?.howWeWork&&(0,r.jsx)("section",{className:"block block--warm",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.howWeWork.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.howWeWork.title}}),(0,r.jsx)("p",{children:e.sections.howWeWork.description})]}),(0,r.jsx)("div",{className:"process-list fade-in",style:{maxWidth:780},children:e.sections.howWeWork.process.map(e=>(0,r.jsxs)("div",{className:"process-item",children:[(0,r.jsx)("div",{className:"process-num",children:e.num}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]})]},e.num))})]})}),e.sections?.aiHuman&&(0,r.jsx)("section",{className:"block",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.aiHuman.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.aiHuman.title}}),(0,r.jsx)("p",{children:e.sections.aiHuman.description})]}),(0,r.jsxs)("div",{className:"ai-split fade-in",children:[(0,r.jsxs)("div",{className:"ai-col ai-col--machine",children:[(0,r.jsx)("div",{className:"ai-col-label",children:e.sections.aiHuman.machineLabel||"AI-assisted RCM workflows"}),(0,r.jsx)("div",{className:"ai-items",children:e.sections.aiHuman.machine.map((e,s)=>(0,r.jsxs)("div",{className:"ai-item",children:[(0,r.jsx)("div",{className:"ai-item-dot"}),(0,r.jsx)("p",{children:e})]},s))})]}),(0,r.jsxs)("div",{className:"ai-col ai-col--human",children:[(0,r.jsx)("div",{className:"ai-col-label",children:e.sections.aiHuman.humanLabel||"Human RCM specialists"}),(0,r.jsx)("div",{className:"ai-items",children:e.sections.aiHuman.human.map((e,s)=>(0,r.jsxs)("div",{className:"ai-item",children:[(0,r.jsx)("div",{className:"ai-item-dot"}),(0,r.jsx)("p",{children:e})]},s))})]})]}),e.sections.aiHuman.pullQuote&&(0,r.jsx)("div",{className:"pull-quote fade-in",children:e.sections.aiHuman.pullQuote})]})}),e.sections?.results&&(0,r.jsx)("section",{className:"block block--warm",id:"results",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.results.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.results.title}}),(0,r.jsx)("p",{children:e.sections.results.description})]}),(0,r.jsx)("div",{className:"outcomes-grid fade-in",children:e.sections.results.outcomes.map((e,s)=>(0,r.jsxs)("div",{className:"outcome-card",children:[(0,r.jsx)("div",{className:"outcome-num",children:e.icon}),(0,r.jsx)("h4",{children:e.title}),(0,r.jsx)("p",{children:e.description})]},s))})]})}),e.sections?.compare&&(0,r.jsx)("section",{className:"block block--ink-soft",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.compare.eyebrow}),(0,r.jsx)("h2",{className:"display display--light",dangerouslySetInnerHTML:{__html:e.sections.compare.title}}),(0,r.jsx)("p",{children:e.sections.compare.description})]}),(0,r.jsxs)("div",{className:"solution-compare-wrap fade-in",children:[(0,r.jsxs)("div",{className:"solution-compare-header",children:[(0,r.jsx)("span",{children:" Time Since Service"}),(0,r.jsx)("span",{className:"solution-compare-hbs-col",children:"Hired Billing Support"}),(0,r.jsx)("span",{children:"In-House Hire"})]}),e.sections.compare.rows.map((e,s)=>(0,r.jsxs)("div",{className:"solution-compare-row",children:[(0,r.jsx)("span",{className:"solution-compare-label",children:e.label}),(0,r.jsx)("span",{className:"solution-compare-hbs",children:e.hbs}),(0,r.jsx)("span",{className:"solution-compare-other",children:e.other})]},s))]})]})}),e.sections?.targetAudience&&(0,r.jsx)("section",{className:"block",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"block-head fade-in",children:[(0,r.jsx)("div",{className:"eyebrow",children:e.sections.targetAudience.eyebrow}),(0,r.jsx)("h2",{className:"display",dangerouslySetInnerHTML:{__html:e.sections.targetAudience.title}}),(0,r.jsx)("p",{children:e.sections.targetAudience.description})]}),(0,r.jsx)("div",{className:"who-grid fade-in",children:e.sections.targetAudience.practiceTypes.map((e,s)=>(0,r.jsxs)("div",{className:"who-item",children:[(0,r.jsx)("span",{className:"who-tag",children:"Practice type"}),(0,r.jsx)("h4",{children:e.type}),(0,r.jsx)("p",{children:e.description})]},s))})]})}),e.sections?.finalCta&&(0,r.jsxs)("section",{className:"final-cta",id:"cta",children:[(0,r.jsx)("div",{className:"final-cta-glow"}),(0,r.jsxs)("div",{className:"cta-inner",children:[(0,r.jsx)("div",{className:"eyebrow eyebrow--light",style:{justifyContent:"center"},children:e.sections.finalCta.eyebrow}),(0,r.jsx)("h2",{className:"display display--light",dangerouslySetInnerHTML:{__html:e.sections.finalCta.title}}),(0,r.jsx)("p",{children:e.sections.finalCta.description}),(0,r.jsx)("div",{className:"actions",children:e.sections.finalCta.buttons.map((e,s)=>(0,r.jsxs)("a",{href:"#",className:`btn btn-${e.variant} btn-lg`,style:"ghost"===e.variant?{color:"var(--paper)",borderColor:"rgba(250,247,242,.25)"}:{},children:[e.text,"light"===e.variant&&(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]},s))}),(0,r.jsx)("div",{className:"trust-line",children:e.sections.finalCta.trustLine})]})]})]})}var f=a(39916);async function N({params:e}){let{slug:s}=await e,a=(0,i.A5)(s);if(!a)return{title:"Page Not Found",description:"This page does not exist."};let r=(0,i.po)(s);return{title:a.title,description:a.description,alternates:{canonical:r},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-image-preview":"large","max-snippet":-1}},openGraph:{title:a.title,description:a.description,url:r,type:"website"},twitter:{card:"summary_large_image",title:a.title,description:a.description}}}async function y({params:e}){let{slug:s}=await e,a=(0,i.A5)(s);return a||(0,f.notFound)(),(0,r.jsx)(b,{solution:a,slug:s})}async function w(){return(0,i.q0)().map(e=>({slug:e}))}},74978:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>{let s=`
    .analytics-hero-card {
      background: var(--ink);
      color: var(--paper);
      border-radius: 12px;
      padding: 28px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .analytics-hero-card h4 {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: rgba(250, 247, 242, 0.5);
      margin-bottom: 20px;
      padding-bottom: 18px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .kpi-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .kpi-row:last-of-type {
      border-bottom: none;
    }

    .kpi-lbl {
      font-size: 11px;
      color: rgba(250, 247, 242, 0.7);
      min-width: 110px;
      flex-shrink: 0;
    }

    .kpi-bar {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .kpi-fill {
      height: 100%;
      border-radius: 3px;
    }

    .kpi-fill-high {
      background: #00C896;
    }

    .kpi-fill-mid {
      background: #F59E0B;
    }

    .kpi-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      font-weight: 500;
      min-width: 50px;
      text-align: right;
      flex-shrink: 0;
    }

    .kpi-val-high {
      color: #00C896;
    }

    .kpi-val-mid {
      color: #F59E0B;
    }

    .dash-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.08);
      margin: 14px 0;
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .dash-stat {
      background: rgba(255, 255, 255, 0.05);
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
      color: rgba(250, 247, 242, 0.5);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 18px;
      padding: 14px 16px;
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      border-radius: 8px;
    }

    .gc-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 0.1em;
      color: #00C896;
      margin-bottom: 6px;
    }

    .gc-val {
      font-family: 'Fraunces', serif;
      font-size: 22px;
      font-weight: 500;
      color: var(--paper);
    }
  `;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsxs)("div",{className:"analytics-hero-card",children:[(0,r.jsx)("h4",{children:"— Practice Analytics Dashboard \xb7 Monthly"}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Collection Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-high",style:{width:"94%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-high",children:"94.2%"})]}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Clean Claim Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-high",style:{width:"98%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-high",children:"97.8%"})]}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Denial Rate"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-mid",style:{width:"34%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-mid",children:"3.4%"})]}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Days in AR"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-high",style:{width:"76%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-high",children:"24 days"})]}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"AR > 90 Days"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-mid",style:{width:"28%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-mid",children:"8.2%"})]}),(0,r.jsxs)("div",{className:"kpi-row",children:[(0,r.jsx)("span",{className:"kpi-lbl",children:"Revenue vs. Budget"}),(0,r.jsx)("div",{className:"kpi-bar",children:(0,r.jsx)("div",{className:"kpi-fill kpi-fill-high",style:{width:"91%"}})}),(0,r.jsx)("span",{className:"kpi-val kpi-val-high",children:"+2.1%"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"Monthly"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Report Cadence"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"8"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"KPIs Tracked"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"3"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Actions Generated"})]})]}),(0,r.jsxs)("div",{className:"gap-callout",children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— This month's finding"}),(0,r.jsx)("div",{className:"gc-val",children:"Denial rate above target — Cigna auth-related. Fix in progress."})]})]})]})]})]})}},78526:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroVirtualHealthcareSolutions.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroVirtualHealthcareSolutions.tsx","default")},79551:e=>{"use strict";e.exports=require("url")},83432:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);let i=({solution:e})=>(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"currentColor",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display",dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Aging AR Recovery Snapshot"}),(0,r.jsxs)("div",{className:"ar-card-row ar-green",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"0–60 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"85%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$82,400"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-amber",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"61–90 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"58%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$48,200"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-orange",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"91–120 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"38%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$32,700"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"121–180 days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"24%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$21,350"})]}),(0,r.jsxs)("div",{className:"ar-card-row ar-red",children:[(0,r.jsx)("span",{className:"ar-lbl",children:"180+ days"}),(0,r.jsx)("div",{className:"ar-bar",children:(0,r.jsx)("span",{style:{width:"14%"}})}),(0,r.jsx)("span",{className:"ar-val",children:"$14,800"})]}),(0,r.jsxs)("div",{className:"gap-callout",style:{marginTop:"20px"},children:[(0,r.jsx)("div",{className:"gc-lbl",children:"— Estimated collectible (90+ days)"}),(0,r.jsx)("div",{className:"gc-val",children:"$47,200 \xb7 recoverable with systematic follow-up"})]}),(0,r.jsxs)("div",{style:{marginTop:"14px",display:"flex",gap:"8px",flexWrap:"wrap"},children:[(0,r.jsx)("span",{className:"card-tag before",children:"$68,850 OVER 90 DAYS"}),(0,r.jsx)("span",{className:"card-tag after",children:"68% COLLECTIBLE EST."})]})]})]})]})},83804:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroPracticeLaunch.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroPracticeLaunch.tsx","default")},84621:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMemberCentricCare.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMemberCentricCare.tsx","default")},86645:(e,s,a)=>{Promise.resolve().then(a.bind(a,61560)),Promise.resolve().then(a.bind(a,31776)),Promise.resolve().then(a.bind(a,65499)),Promise.resolve().then(a.bind(a,1630)),Promise.resolve().then(a.bind(a,5060)),Promise.resolve().then(a.bind(a,89128)),Promise.resolve().then(a.bind(a,69876)),Promise.resolve().then(a.bind(a,29297)),Promise.resolve().then(a.bind(a,97667)),Promise.resolve().then(a.bind(a,84621)),Promise.resolve().then(a.bind(a,31874)),Promise.resolve().then(a.bind(a,90233)),Promise.resolve().then(a.bind(a,91831)),Promise.resolve().then(a.bind(a,19048)),Promise.resolve().then(a.bind(a,83804)),Promise.resolve().then(a.bind(a,18606)),Promise.resolve().then(a.bind(a,14860)),Promise.resolve().then(a.bind(a,96979)),Promise.resolve().then(a.bind(a,35692)),Promise.resolve().then(a.bind(a,52905)),Promise.resolve().then(a.bind(a,78526))},86897:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),!function(e,s){for(var a in s)Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}(s,{getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return h},getRedirectTypeFromError:function(){return c},getURLFromRedirectError:function(){return d},permanentRedirect:function(){return o},redirect:function(){return n}});let r=a(52836),i=a(49026),t=a(19121).actionAsyncStorage;function l(e,s,a){void 0===a&&(a=r.RedirectStatusCode.TemporaryRedirect);let t=Object.defineProperty(Error(i.REDIRECT_ERROR_CODE),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t.digest=i.REDIRECT_ERROR_CODE+";"+s+";"+e+";"+a+";",t}function n(e,s){var a;throw null!=s||(s=(null==t||null==(a=t.getStore())?void 0:a.isAction)?i.RedirectType.push:i.RedirectType.replace),l(e,s,r.RedirectStatusCode.TemporaryRedirect)}function o(e,s){throw void 0===s&&(s=i.RedirectType.replace),l(e,s,r.RedirectStatusCode.PermanentRedirect)}function d(e){return(0,i.isRedirectError)(e)?e.digest.split(";").slice(2,-2).join(";"):null}function c(e){if(!(0,i.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return e.digest.split(";",2)[1]}function h(e){if(!(0,i.isRedirectError)(e))throw Object.defineProperty(Error("Not a redirect error"),"__NEXT_ERROR_CODE",{value:"E260",enumerable:!1,configurable:!0});return Number(e.digest.split(";").at(-2))}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},89128:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMarketplacePartners.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMarketplacePartners.tsx","default")},90233:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroOperationsManagement.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroOperationsManagement.tsx","default")},90829:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var r=a(60687);function i({solution:e}){return(0,r.jsxs)("section",{className:"hero",children:[(0,r.jsxs)("div",{className:"hero-bg",children:[(0,r.jsxs)("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:(0,r.jsx)("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),(0,r.jsx)("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),(0,r.jsx)("div",{className:"hero-grain"})]}),(0,r.jsxs)("div",{className:"hero-inner",children:[(0,r.jsx)("div",{children:e.hero&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"eyebrow reveal reveal-1",children:e.hero.eyebrow}),(0,r.jsx)("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:e.hero.title}}),(0,r.jsx)("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:e.hero.subtitle}),(0,r.jsx)("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:e.hero.description}),(0,r.jsxs)("div",{className:"hero-actions reveal reveal-4",children:[(0,r.jsxs)("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",(0,r.jsx)("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:(0,r.jsx)("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),(0,r.jsx)("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.hero&&(0,r.jsx)("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:(0,r.jsxs)("div",{className:"hero-card",children:[(0,r.jsx)("h4",{children:"— Revenue Cycle Health \xb7 30-day view"}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"MTD Billed Charges"}),(0,r.jsx)("span",{className:"dash-value green",children:"$212,400"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Clean Claim Rate"}),(0,r.jsxs)("span",{className:"dash-value",children:["341 claims \xa0",(0,r.jsx)("span",{className:"dash-pill pill-green",children:"98.2%"})]})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Pending Adjudication"}),(0,r.jsx)("span",{className:"dash-value amber",children:"$44,820"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Denial Rate (30-day)"}),(0,r.jsx)("span",{className:"dash-value",children:(0,r.jsx)("span",{className:"dash-pill pill-green",children:"3.1% ↓"})})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"AR Over 90 Days"}),(0,r.jsx)("span",{className:"dash-value red",children:"$11,340"})]}),(0,r.jsxs)("div",{className:"dash-row",children:[(0,r.jsx)("span",{className:"dash-label",children:"Unworked Denials"}),(0,r.jsx)("span",{className:"dash-value green",children:"0"})]}),(0,r.jsxs)("div",{className:"dash-stats",children:[(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"22"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Days in AR"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",children:"94%"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Collection Rate"})]}),(0,r.jsxs)("div",{className:"dash-stat",children:[(0,r.jsx)("span",{className:"dash-stat-num",style:{color:"var(--signal-deep)"},children:"$0"}),(0,r.jsx)("span",{className:"dash-stat-label",children:"Missed Tasks"})]})]})]})})]})]})}},91831:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroPayerInsurerEnrollment.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroPayerInsurerEnrollment.tsx","default")},96979:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroRcmManagement.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroRcmManagement.tsx","default")},97576:(e,s,a)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),!function(e,s){for(var a in s)Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}(s,{ReadonlyURLSearchParams:function(){return c},RedirectType:function(){return i.RedirectType},forbidden:function(){return l.forbidden},notFound:function(){return t.notFound},permanentRedirect:function(){return r.permanentRedirect},redirect:function(){return r.redirect},unauthorized:function(){return n.unauthorized},unstable_rethrow:function(){return o.unstable_rethrow}});let r=a(86897),i=a(49026),t=a(62765),l=a(48976),n=a(70899),o=a(163);class d extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class c extends URLSearchParams{append(){throw new d}delete(){throw new d}set(){throw new d}sort(){throw new d}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},97667:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});let r=(0,a(12907).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\PC\\\\Pictures\\\\demo-nextjs\\\\app\\\\components\\\\heroes\\\\HeroMediumLargeMedicalPractices.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\PC\\Pictures\\demo-nextjs\\app\\components\\heroes\\HeroMediumLargeMedicalPractices.tsx","default")}};var s=require("../../../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[447,653,658,782,785,390],()=>a(30614));module.exports=r})();