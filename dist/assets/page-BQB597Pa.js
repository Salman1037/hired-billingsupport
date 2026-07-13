import{r as l,j as e,R as T,u as F}from"./index-6Dhx178x.js";import{H as W,a as D,b as I,c as O,d as L,e as G,f as Q}from"./HeroNeurology-3ynRUX3R.js";function Y({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="status-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— Small Practice Operations · Daily Status"}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Prior Auth Queue"}),e.jsx("span",{className:"s-val pend",children:"4 pending — 2 expiring soon"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Tomorrow's Eligibility Checks"}),e.jsx("span",{className:"s-val done",children:"All verified"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Unworked Denials"}),e.jsx("span",{className:"s-val pend",children:"7 claims — 3 over 20 days"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"AR Over 90 Days"}),e.jsx("span",{className:"s-val pend",children:"$14,200 — needs follow-up"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Claim Submission Queue"}),e.jsx("span",{className:"s-val done",children:"Clear — submitted same day"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"7"}),e.jsx("span",{className:"dash-stat-label",children:"Unworked Denials"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"4"}),e.jsx("span",{className:"dash-stat-label",children:"Auth Pending"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"$0"}),e.jsx("span",{className:"dash-stat-label",children:"Missed Submissions"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— Revenue at risk"}),e.jsx("div",{className:"gc-val",children:"7 unworked denials + $14.2K aging AR = $21K+ at risk."})]})]})})]})]})]})}function U({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="check-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— Practice Launch Readiness · Pre-Open"}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-done",children:"✓"}),e.jsx("span",{className:"ck-label done",children:"Entity formed · EIN obtained · NPI registered"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-done",children:"✓"}),e.jsx("span",{className:"ck-label done",children:"CAQH profile built and attested"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-pend",children:"!"}),e.jsx("span",{className:"ck-label",children:"Medicare PECOS submitted — Day 26 of ~45"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-pend",children:"!"}),e.jsx("span",{className:"ck-label",children:"Commercial payer apps — 4 submitted, 2 pending"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-open"}),e.jsx("span",{className:"ck-label",children:"EHR billing module configuration"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-open"}),e.jsx("span",{className:"ck-label",children:"Eligibility verification workflow setup"})]}),e.jsxs("div",{className:"check-row","data-animated":"check-row",children:[e.jsx("div",{className:"ck ck-open"}),e.jsx("span",{className:"ck-label",children:"Patient intake and scheduling SOPs"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"2"}),e.jsx("span",{className:"dash-stat-label",children:"Complete"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),e.jsx("span",{className:"dash-stat-label",children:"In Progress"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#475569"},children:"3"}),e.jsx("span",{className:"dash-stat-label",children:"Not Started"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— Time to billing-ready"}),e.jsx("div",{className:"gc-val",children:"6–8 weeks with structure. 4+ months without."})]})]})})]})]})]})}function J({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="status-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— Care Coordination Dashboard · Daily"}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Active Member Outreach Queue"}),e.jsx("span",{className:"s-val done",children:"34 members — all contacted"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Referral Tracking"}),e.jsx("span",{className:"s-val done",children:"18 active — all with status"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Prior Auth — Pending"}),e.jsx("span",{className:"s-val pend",children:"6 requests — 2 expiring this week"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Eligibility Verifications"}),e.jsx("span",{className:"s-val done",children:"All this week's appts verified"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Documentation Tasks"}),e.jsx("span",{className:"s-val pend",children:"4 items pending provider review"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Member Follow-Up Queue"}),e.jsx("span",{className:"s-val done",children:"Post-visit — 28 of 28 done"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"34"}),e.jsx("span",{className:"dash-stat-label",children:"Members Reached"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),e.jsx("span",{className:"dash-stat-label",children:"Auth Actions"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"0"}),e.jsx("span",{className:"dash-stat-label",children:"Lost to Follow-Up"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— Member continuity"}),e.jsx("div",{className:"gc-val",children:"Zero members fell through today. That is the goal every day."})]})]})})]})]})]})}function _({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="kpi-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— Medical Group Performance · Multi-Provider"}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Group Collection Rate"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"93%"}})}),e.jsx("span",{className:"kpi-val hi",children:"93.4%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Denial Rate (Group)"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill mi",style:{width:"38%"}})}),e.jsx("span",{className:"kpi-val mi",children:"3.8%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Process Standardization"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"87%"}})}),e.jsx("span",{className:"kpi-val hi",children:"87%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Provider Compliance"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"94%"}})}),e.jsx("span",{className:"kpi-val hi",children:"94%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"First-pass Claims Paid"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"91%"}})}),e.jsx("span",{className:"kpi-val hi",children:"91%"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"9"}),e.jsx("span",{className:"dash-stat-label",children:"Providers Tracked"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"2"}),e.jsx("span",{className:"dash-stat-label",children:"Cred. Pending"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"3"}),e.jsx("span",{className:"dash-stat-label",children:"Locations"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— Top priority"}),e.jsx("div",{className:"gc-val",children:"Denial rate 0.8% above target — Cigna auth pattern identified."})]})]})})]})]})]})}function V({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="kpi-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— Enterprise Operations · Executive Dashboard"}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Enterprise Collection Rate"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"91%"}})}),e.jsx("span",{className:"kpi-val hi",children:"91.8%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Group Denial Rate"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill mi",style:{width:"42%"}})}),e.jsx("span",{className:"kpi-val mi",children:"4.2%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"AR Over 120 Days"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill mi",style:{width:"29%"}})}),e.jsx("span",{className:"kpi-val mi",children:"7.8%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Credentialing Active"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"89%"}})}),e.jsx("span",{className:"kpi-val hi",children:"89% of roster"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Clean Claim Rate"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill hi",style:{width:"95%"}})}),e.jsx("span",{className:"kpi-val hi",children:"95.3%"})]}),e.jsxs("div",{className:"kpi-row","data-animated":"kpi-row",children:[e.jsx("span",{className:"kpi-lbl",children:"Revenue vs. Budget"}),e.jsx("div",{className:"kpi-bar",children:e.jsx("div",{className:"kpi-fill mi",style:{width:"52%"}})}),e.jsx("span",{className:"kpi-val mi",children:"-1.4%"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"24+"}),e.jsx("span",{className:"dash-stat-label",children:"Locations"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"3"}),e.jsx("span",{className:"dash-stat-label",children:"Priority Flags"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#00876B"},children:"Weekly"}),e.jsx("span",{className:"dash-stat-label",children:"Exec Reporting"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— This quarter's priority"}),e.jsx("div",{className:"gc-val",children:"Denial rate 1.2% above benchmark — root cause analysis in progress."})]})]})})]})]})]})}function $({solution:i}){return l.useEffect(()=>{document.querySelectorAll('[data-animated="status-row"]').forEach((o,s)=>{o.style.setProperty("--reveal-delay",`${.1+s*.14}s`)})},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"organization-dashboard",children:[e.jsx("div",{className:"org-dash-title",children:"— FQHC Operations Dashboard · Monthly"}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Medicaid Claims — Clean Rate"}),e.jsxs("span",{className:"s-val done",children:["96.4% ",e.jsx("span",{className:"s-pill pill-g",children:"On target"})]})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Medicare Billing"}),e.jsx("span",{className:"s-val pend",children:"Denial rate 4.1% — auth-related"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"Sliding Fee Workflow"}),e.jsx("span",{className:"s-val done",children:"Process documented"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-a"}),e.jsx("span",{className:"s-label",children:"Eligibility — Daily Queue"}),e.jsx("span",{className:"s-val pend",children:"3 fails yesterday — reviewed"})]}),e.jsxs("div",{className:"status-row","data-animated":"status-row",children:[e.jsx("div",{className:"s-dot dot-g"}),e.jsx("span",{className:"s-label",children:"AR Over 90 Days"}),e.jsx("span",{className:"s-val done",children:"6.8% — below benchmark"})]}),e.jsx("div",{className:"dash-divider"}),e.jsxs("div",{className:"dash-stats",children:[e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"93%"}),e.jsx("span",{className:"dash-stat-label",children:"Collection Rate"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",style:{color:"#B45309"},children:"4.1%"}),e.jsx("span",{className:"dash-stat-label",children:"Denial Rate"})]}),e.jsxs("div",{className:"dash-stat",children:[e.jsx("span",{className:"dash-stat-num",children:"2"}),e.jsx("span",{className:"dash-stat-label",children:"Payers In Focus"})]})]}),e.jsxs("div",{className:"gap-callout",children:[e.jsx("div",{className:"gc-lbl",children:"— Mission protection"}),e.jsx("div",{className:"gc-val",children:"Revenue recovered = services the community continues to receive."})]})]})})]})]})]})}function K({solution:i}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),e.jsx("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-header",children:[e.jsx("div",{className:"cp-header-label",children:"— Payer Operations Center · Daily Queue"}),e.jsxs("div",{className:"cp-main-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[e.jsx("span",{className:"cp-big",children:"94.7%"}),e.jsx("span",{className:"cp-unit",children:"same-day processing rate"})]}),e.jsxs("span",{className:"cp-trend",children:[e.jsx("span",{className:"cp-trend-dot"}),"↑ 3.2% vs last week"]})]}),e.jsx("div",{className:"cp-header-sub",children:"Updated today · Operational Dashboard"})]}),e.jsx("div",{className:"cp-body",children:e.jsxs("div",{className:"cp-grid",children:[e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Auth Queue"}),e.jsx("div",{className:"cp-m-value sig",children:"312 items"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"82%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Avg Resolution"}),e.jsx("div",{className:"cp-m-value sig",children:"4.2 hrs"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"78%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Backlog Items"}),e.jsx("div",{className:"cp-m-value amb",children:"47 items"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-amb",style:{width:"35%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Provider Inquiries"}),e.jsx("div",{className:"cp-m-value lite",children:"28 open"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-lite",style:{width:"45%"}})})]})]})}),e.jsxs("div",{className:"cp-queue",children:[e.jsx("div",{className:"cp-queue-title",children:"Queue Priority View · Active"}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Claims review — standard processing"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"On track"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),e.jsx("span",{className:"cp-q-lbl",children:"Authorization exceptions — escalated"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"18 pending"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Enrollment documentation — indexed"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Current"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#D64545"}}),e.jsx("span",{className:"cp-q-lbl",children:"Provider data — aged items flagged"}),e.jsx("span",{className:"cp-q-badge badge-risk",children:"6 over SLA"})]})]}),e.jsxs("div",{className:"cp-footer",children:[e.jsxs("span",{className:"cp-footer-pill",children:[e.jsx("span",{className:"cp-footer-pulse"}),"6 items exceed SLA — priority escalation active"]}),e.jsx("span",{className:"cp-footer-right",children:"Live · Secured"})]})]})})]})]})]})}function X({solution:i}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-header",children:[e.jsx("div",{className:"cp-header-label",children:"— Order Intake Dashboard · Daily Status"}),e.jsxs("div",{className:"cp-main-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[e.jsx("span",{className:"cp-big",children:"98.2%"}),e.jsx("span",{className:"cp-unit",children:"orders complete at intake"})]}),e.jsxs("span",{className:"cp-trend",children:[e.jsx("span",{className:"cp-trend-dot"}),"↑ 4.1% vs last month"]})]}),e.jsx("div",{className:"cp-header-sub",children:"Updated today · Lab & Imaging Operations"})]}),e.jsx("div",{className:"cp-body",children:e.jsxs("div",{className:"cp-grid",children:[e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Auth Approval Rate"}),e.jsx("div",{className:"cp-m-value sig",children:"96.4%"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"96%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Avg Auth Turnaround"}),e.jsx("div",{className:"cp-m-value sig",children:"1.8 days"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"82%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Incomplete Orders"}),e.jsx("div",{className:"cp-m-value amb",children:"3 today"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-amb",style:{width:"18%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Billing Handoff Rate"}),e.jsx("div",{className:"cp-m-value lite",children:"99.1%"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-lite",style:{width:"99%"}})})]})]})}),e.jsxs("div",{className:"cp-queue",children:[e.jsx("div",{className:"cp-queue-title",children:"Order Status Queue · Active"}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"MRI orders — authorized & scheduled"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"14 confirmed"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),e.jsx("span",{className:"cp-q-lbl",children:"CT orders — awaiting payer auth"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"6 pending"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Lab panels — eligibility confirmed"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"22 ready"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#D64545"}}),e.jsx("span",{className:"cp-q-lbl",children:"Incomplete referrals — follow-up sent"}),e.jsx("span",{className:"cp-q-badge badge-risk",children:"3 incomplete"})]})]}),e.jsxs("div",{className:"cp-footer",children:[e.jsxs("span",{className:"cp-footer-pill",children:[e.jsx("span",{className:"cp-footer-pulse"}),"3 orders need document follow-up today"]}),e.jsx("span",{className:"cp-footer-right",children:"HIPAA · Secured"})]})]})})]})]})]})}function Z({solution:i}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:i.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:i.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:i.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:i.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),i.hero&&e.jsx("div",{className:"hero-visual",children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-header",children:[e.jsx("div",{className:"cp-header-label",children:"— Partner Delivery Dashboard · Active Clients"}),e.jsxs("div",{className:"cp-main-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[e.jsx("span",{className:"cp-big",children:"12"}),e.jsx("span",{className:"cp-unit",children:"partner clients supported"})]}),e.jsxs("span",{className:"cp-trend",children:[e.jsx("span",{className:"cp-trend-dot"}),"↑ 4 new this quarter"]})]}),e.jsx("div",{className:"cp-header-sub",children:"Updated today · Marketplace Partner View"})]}),e.jsx("div",{className:"cp-body",children:e.jsxs("div",{className:"cp-grid",children:[e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Client Retention"}),e.jsx("div",{className:"cp-m-value sig",children:"97.3%"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"97%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Avg Collection Rate"}),e.jsx("div",{className:"cp-m-value sig",children:"94.1%"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"94%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Onboarding Time"}),e.jsx("div",{className:"cp-m-value amb",children:"~14 days"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-amb",style:{width:"60%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Clients in Ramp"}),e.jsx("div",{className:"cp-m-value lite",children:"3 active"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-lite",style:{width:"25%"}})})]})]})}),e.jsxs("div",{className:"cp-queue",children:[e.jsx("div",{className:"cp-queue-title",children:"Partner Client Service Coverage"}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Billing & RCM — all partner clients"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Active"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Credentialing — 8 providers in process"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"On track"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#F59E0B"}}),e.jsx("span",{className:"cp-q-lbl",children:"3 new client onboardings in progress"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"Week 2 of 3"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Monthly partner reporting — delivered"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Current"})]})]}),e.jsxs("div",{className:"cp-footer",children:[e.jsxs("span",{className:"cp-footer-pill",children:[e.jsx("span",{className:"cp-footer-pulse"}),"All 12 partner clients actively supported"]}),e.jsx("span",{className:"cp-footer-right",children:"White-label available"})]})]})})]})]})]})}const ee={title:"Startup Medical Practice Support",subtitle:"Build the operational foundation before patient pressure makes every delay expensive.",description:"Hired Billing Support helps startup medical practices build the operational foundation they need — credentialing, payer enrollment, billing setup, intake workflow, and RCM launch planning before patient volume begins.",hero:{eyebrow:"Who We Serve · Startup Practices",title:"Your practice is ready to open. Is the <em>billing infrastructure ready too?</em>",subtitle:"Most startup practices focus on clinical readiness and discover billing and credentialing gaps after the first week of seeing patients. HBS builds the revenue foundation before you need it.",description:""},sections:{pain:{eyebrow:"The startup reality every new provider discovers",title:"The clinical part was the preparation. <em>Nobody told you how much the backend would demand.</em>",ledgerEyebrow:"Where the pressure lives",ledgerHeading:"The specific gaps <em>behind the daily grind.</em>",monologue:["You spent years training for clinical excellence. You built a patient care model. You found a space, hired your first staff, and set a launch date. And then the payer applications, CAQH setup, NPI registrations, EHR configuration, billing workflow design, intake process documentation, insurance verification setup, and credentialing timelines all arrived at the same time — while you were also managing clinical work, hiring decisions, and the financial pressure of a practice that is not yet generating revenue.","Nobody is unprepared for clinical care. Almost everyone underestimates the operational infrastructure that must be running before clinical care can generate reliable cash flow.",'"A practice can open on day one and not see its first insurance payment for 60 to 120 days. That window is not inevitable — but it is almost certain when credentialing, payer enrollment, and billing setup are not started early enough and managed systematically."',"The cost of operational delays in a startup practice is not just time. It is cash flow. Every week a provider sees patients without being credentialed with a payer is a week of clinical work that cannot be billed — or will be denied and need to be resubmitted. Those delays compound into the financial foundation the practice needs to sustain itself through its first year."],ledger:[{num:"01",title:"Credentialing and payer enrollment take longer than expected",description:"New providers typically expect credentialing to take four to six weeks. With Medicare, Medicaid, and multiple commercial payers running simultaneously, the realistic timeline is three to five months. Starting this process late — or managing it informally — is the most common and most expensive mistake a startup practice makes."},{num:"02",title:"Billing workflow is not built before patients arrive",description:"EHR billing configuration, clearinghouse enrollment, charge capture workflow, and claim submission setup require dedicated time and technical knowledge. When these are addressed after the practice opens, the first weeks of claims carry errors that create delays and denials that take additional weeks to resolve."},{num:"03",title:"The founder is managing clinical care and business setup simultaneously",description:"A founder-provider splitting attention between patient care, staff hiring, payer applications, EHR setup, and lease negotiations is not positioned to manage any of those things as well as they deserve to be managed. The clinical work suffers. The operational work suffers. And the financial consequences are felt months later."},{num:"04",title:"Front desk and intake workflows are undefined",description:"How does your front desk verify insurance? What happens when eligibility fails? Who handles prior authorization requests? How are co-pays collected? These need documented answers before the first patient — not answers improvised in real time during the first week of operations."},{num:"05",title:"Hiring too early increases cost before revenue starts",description:"Bringing on administrative staff before the practice is generating reliable revenue adds payroll pressure to an already stretched budget. But not having enough support creates operational gaps that slow revenue further. The right answer is scalable support that adapts to the practice's actual launch timeline."}]},solution:{eyebrow:"The solution",title:"We build the backend before patient pressure <em>makes every delay expensive.</em>",description:"Hired Billing Support coordinates all operational launch tracks simultaneously — credentialing, payer enrollment, billing setup, intake workflow, and administrative structure — so the practice opens on a foundation that generates revenue from the first week.",process:[{num:"01",title:"Launch timeline mapping in week one",description:"Every operational task identified, sequenced, and assigned a start date based on your target opening — with long-lead tasks (credentialing, payer enrollment) started immediately regardless of where other preparation stands."},{num:"02",title:"Credentialing and payer enrollment from day one",description:"We start credentialing and payer applications immediately — building CAQH, collecting provider documents, submitting Medicare and commercial applications in parallel — so the three-to-five month timeline starts running as early as possible."},{num:"03",title:"Billing workflow configuration before opening",description:"EHR billing setup, clearinghouse enrollment, charge entry workflow, and claim submission testing — configured and tested before the first patient appointment, not after the first denial."},{num:"04",title:"Front desk and intake SOP documentation",description:"Eligibility verification process, prior authorization workflow, patient intake forms, co-pay collection, and scheduling protocols — documented as step-by-step SOPs your staff can follow from day one."},{num:"05",title:"RCM workflow designed before volume increases",description:"Revenue cycle management structure — charge capture, claim submission, denial follow-up, AR management, and reporting — designed for your payer mix and specialty before patient volume makes workflow gaps expensive to fix."},{num:"06",title:"Post-launch support through operational stabilization",description:"We stay engaged in the weeks after opening — completing pending enrollments, resolving early billing issues, and supporting the team through the operational learning curve every new practice navigates."}]},services:{eyebrow:"Services that fit startup practices",title:"Every operational foundation your practice needs. <em>Built before you need it.</em>",items:[{num:"01",title:"Practice Launch Planning",description:"Complete launch roadmap built around your opening date — every task sequenced and tracked so nothing is missed and nothing starts too late."},{num:"02",title:"Provider Credentialing",description:"CAQH setup, document collection, and payer credentialing applications initiated from day one — not after the practice is already seeing patients."},{num:"03",title:"Payer & Insurer Enrollment",description:"Commercial, Medicare, and Medicaid enrollment applications submitted with follow-up, portal management, and EFT/ERA setup at approval."},{num:"04",title:"Billing System Setup",description:"EHR billing configuration, clearinghouse enrollment, charge capture workflow, and claim submission testing before the first appointment."},{num:"05",title:"Front Desk Workflow Documentation",description:"Eligibility verification, prior authorization, intake, and co-pay collection documented as SOPs your staff can train on before opening day."},{num:"06",title:"RCM Launch Support",description:"Revenue cycle workflow designed for your payer mix and specialty — charge entry, claim submission, AR management, and denial handling structured before volume creates pressure."},{num:"07",title:"Ongoing Billing & AR Support",description:"After launch, we continue managing billing, AR follow-up, denial management, and payment posting so revenue flows consistently as the practice grows."},{num:"08",title:"Operations Management Support",description:"Daily administrative task queue, prior authorization coordination, and patient communication support — operational depth without in-house overhead."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human specialists",machine:["Launch timeline tracking and milestone monitoring","Credentialing and enrollment status tracking across payers","Document expiration alerts and renewal reminders","Billing setup checklist monitoring and readiness alerts","Claim submission queue monitoring post-launch","AR aging and denial trend tracking from first claims"],human:["Launch timeline planning and task sequencing decisions","Credentialing applications and payer portal management","EHR billing configuration coordination with vendor","Workflow SOP documentation and staff training support","Post-launch billing management and denial follow-up","Founder communication and operational guidance"],pullQuote:'"A startup practice that gets operational infrastructure right in the first four months collects more revenue in its first year than one that figures it out reactively. The clinical care is the same. The backend infrastructure determines how much of it gets paid."'},results:{eyebrow:"What changes",title:"A practice that opens billing-ready. <em>Not billing-delayed.</em>",outcomes:[{icon:"⚡",title:"Claims submitting from opening week",description:"Credentialing complete, enrollment active, billing configured — revenue generating from the first patient, not weeks later."},{icon:"$",title:"Revenue gap between opening and first payment minimized",description:"The window when the practice operates but has not yet been paid is shorter — reducing the financial pressure that strains most new practices."},{icon:"◎",title:"Founder focus stays on clinical care",description:"Operational build managed by HBS — so the clinical work gets full attention from the provider who trained for it."},{icon:"✓",title:"Staff start with documented workflows",description:"Eligibility, intake, scheduling, and billing processes documented before training — so staff operate consistently from day one."},{icon:"→",title:"Backend structure that scales with growth",description:"Not just a launch — an operational foundation designed to support a growing practice without requiring proportional staff increases."},{icon:"↓",title:"Early operational problems avoided",description:"Billing errors, credentialing gaps, workflow inconsistencies — caught during setup rather than discovered during patient volume."}]},compare:{eyebrow:"Why early backend setup matters",title:"Practices that build operationally before opening <em>recover revenue months before those that do not.</em>",description:"Every week of credentialing or billing delay in a startup practice is a week of clinical work that either cannot be billed or will be denied. The cost compounds. Building the backend first is not overhead — it is investment in first-year revenue.",rows:[{label:"Credentialing start date",hbs:"4+ months before opening",other:"Close to opening — too late"},{label:"First billable claim",hbs:"Opening week",other:"Weeks to months after open"},{label:"Billing system",hbs:"Configured before patients arrive",other:"Built under patient pressure"},{label:"Staff workflow documentation",hbs:"Ready before training",other:"Built reactively after opening"},{label:"Founder administrative burden",hbs:"Managed by HBS team",other:"Falls on the clinical provider"},{label:"First-year revenue performance",hbs:"Stronger — structured foundation",other:"Weaker — reactive setup"}]},workflow:{eyebrow:"Practice launch roadmap",title:"The right things started at the right time. <em>Not in the order that feels most urgent.</em>",description:"Credentialing takes months. Billing setup takes weeks. Front desk workflows take days. Every track has a different timeline — and the ones with the longest lead time need to start first.",items:[{num:"M-6",label:"Entity & NPI",sublabel:"Tax ID · NPPES"},{num:"M-5",label:"CAQH & Docs",sublabel:"Provider file built"},{num:"M-4",label:"Payer Apps",sublabel:"All submitted"},{num:"M-3",label:"Billing Setup",sublabel:"EHR · Clearinghouse"},{num:"M-2",label:"Workflows",sublabel:"SOPs documented"},{num:"M-1",label:"Readiness Check",sublabel:"All tracks reviewed"},{num:"Open",label:"First Patients",sublabel:"Claims submit Day 1"},{num:"Post",label:"Revenue Active",sublabel:"Billing stabilized"}]},howWeWork:{eyebrow:"How HBS works with your startup team",title:"We take ownership of the backend <em>so you can take ownership of clinical care.</em>",description:"A founder should not have to choose between seeing patients and building billing infrastructure. We manage the operational build so clinical focus remains where it belongs.",process:[{num:"01",title:"We map your full launch timeline in week one",description:"Every task identified, sequenced, and assigned a start date — with long-lead items started immediately so the timeline does not extend because of late starts."},{num:"02",title:"We work inside your EHR and billing systems",description:"No separate portal, no file transfers, no workarounds — we build and operate inside the systems you will run the practice on from day one."},{num:"03",title:"We communicate with you directly — not through a support queue",description:"You talk to a team member. Questions get answered the same day. Decisions that require your input are surfaced clearly — not buried in a ticket system."},{num:"04",title:"We stay through the first 60 to 90 days of operations",description:"The weeks after opening surface the gaps that planning cannot fully anticipate. We stay engaged through stabilization — resolving early billing issues, completing pending enrollments, and refining workflows under real conditions."},{num:"05",title:"We become your ongoing billing and operations partner",description:"After launch, we transition from setup support to ongoing RCM, AR management, credentialing maintenance, and operations support — scaling as the practice grows."}]},finalCta:{eyebrow:"Start with a launch readiness review",title:"If you are opening a practice in the next six months, <em>the operational work needs to start now.</em>",description:"We start with a launch readiness assessment — mapping your timeline, identifying what needs to start immediately, and showing you where the gaps are between your current status and billing-ready. No commitment required.",buttons:[{text:"Build my practice foundation",variant:"light"},{text:"Talk to our startup team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},ie={title:"Small Medical Practice Support",subtitle:"Give your small team the operational depth of a larger organization.",description:"Hired Billing Support gives small medical practices the operational depth of a larger team — billing, AR follow-up, prior authorizations, coding support, and credentialing maintenance — without adding in-house payroll.",hero:{eyebrow:"Small Medical Practices",title:"A small practice deserves the same billing <em>depth as a large one.</em>",subtitle:"Solo providers and small groups often carry the full billing burden on one or two staff members. When that team is stretched, revenue leaks — and it leaks quietly. HBS gives small practices full-cycle RCM support without the overhead of a full-time billing department.",description:""},sections:{pain:{eyebrow:"The small practice reality",title:"Your team is not failing. <em>They are doing too many things at once to do any of them properly.</em>",ledgerEyebrow:"Where the pressure lives",ledgerHeading:"The specific gaps <em>behind the daily grind.</em>",monologue:["On any given morning in a small practice, your front desk is managing check-in, answering phones, handling scheduling questions, verifying insurance, responding to patient portal messages, and processing prior authorization requests. Your biller — if you have one — is entering charges, submitting claims, and managing the denial queue, all while responding to questions from the provider about why a specific claim has not paid.","By afternoon, the prior authorization that needed to be submitted today has been pushed to tomorrow. The denial from three weeks ago is still sitting in the work queue because new claims keep coming in. The AR aging report was reviewed last month, but nothing systematic happened after that.",'"Revenue leaks quietly in a small practice — not through any single catastrophic failure, but through the accumulation of small delays, missed follow-ups, and deferred tasks that each cost a small amount until they collectively cost a significant one."',"The problem is not capability. It is bandwidth. The same team handling patient care logistics simply does not have enough uninterrupted hours to also manage billing, AR, denials, authorizations, and payer follow-up at the level those functions require."],ledger:[{num:"01",title:"Denials sit unworked while new claims come in",description:"There is never a clean moment to work the denial queue. New visits generate new claims. New claims always feel more urgent than last week's denials. So the denials keep aging until some are past appeal deadline — and the revenue is gone."},{num:"02",title:"AR follow-up only happens when cash flow gets tight",description:"The AR aging report exists. Someone looks at it occasionally. But systematic follow-up on aged claims — calling payers, checking portals, escalating stuck accounts — requires time that never becomes available during normal operations."},{num:"03",title:"One staff absence disrupts the entire workflow",description:"When a single person is out, the tasks they carry disappear with them. Billing queues build. Authorizations go unsubmitted. Phones go unanswered longer. A small practice has no operational redundancy — every person is also a single point of failure."},{num:"04",title:"Prior authorizations expire or get missed under schedule pressure",description:"Authorization tracking requires daily attention. In a small practice where every staff member is managing multiple competing priorities, the authorization that needed follow-up gets missed — and the resulting denial arrives after the patient has already been seen."},{num:"05",title:"Hiring another person is expensive and does not always solve the problem",description:"Adding an in-house staff member means recruitment, onboarding, training, benefits, and management — costs that begin immediately and deliver full value only after months. And if the underlying workflows are not organized, more staff produces more of the same inconsistency at higher cost."}]},solution:{eyebrow:"The solution",title:"The operational depth of a larger team. <em>Without the payroll of one.</em>",description:"Hired Billing Support takes ownership of the billing and administrative functions that are currently being managed around the edges of a busy small practice — and manages them consistently, systematically, and with the attention they deserve.",process:[{num:"01",title:"Billing and claims management with daily attention",description:"Charge entry, claim scrubbing, submission, and status tracking handled daily — not when someone finds time between clinical tasks."},{num:"02",title:"AR follow-up on a defined schedule",description:"Every aging bucket assigned, every claim touched on schedule — 30, 60, 90, and 120-day accounts followed up systematically instead of reactively."},{num:"03",title:"Denial management with root cause tracking",description:"Every denial worked within a defined window, every root cause documented, every pattern identified — so the same denial stops happening every month."},{num:"04",title:"Prior authorization coordination",description:"Authorization requests tracked, submitted, followed up on, and documented — so expired or missing auths stop creating denials that were entirely preventable."},{num:"05",title:"Eligibility verification before every visit",description:"Insurance verified against the actual payer before every appointment — not at check-in when it is too late to address coverage problems before the visit."},{num:"06",title:"Regular reporting to the practice owner",description:"Collection rates, denial trends, AR aging — reported regularly with plain-language commentary so the practice owner understands what is happening without needing to interpret raw data."}]},services:{eyebrow:"Services that fit small practices",title:"Operational support sized for how small practices actually work. <em>Not enterprise software. Not a call center.</em>",items:[{num:"01",title:"Medical Billing & Claims",description:"Daily charge entry, claim scrubbing, electronic submission, and status tracking — consistent revenue cycle execution without depending on bandwidth that does not exist."},{num:"02",title:"AR Management",description:"Aging buckets assigned and worked on a defined schedule — payer calls, portal follow-up, and escalation when accounts stall."},{num:"03",title:"Denial Management",description:"Every denial reviewed, corrected, appealed when appropriate, and root cause documented — so denial rates decline over time rather than staying constant."},{num:"04",title:"Prior Authorization Support",description:"Authorization requests tracked, submitted, and followed up on — expiration monitoring included so missed auths stop creating avoidable claim failures."},{num:"05",title:"Eligibility Verification",description:"Insurance verified before every appointment through systematic daily checks — not the morning of the visit when problems cannot be resolved in time."},{num:"06",title:"Coding Support",description:"ICD-10, CPT, and modifier accuracy reviewed before claims submit — coding errors caught pre-submission rather than discovered through denials."},{num:"07",title:"Patient Communication Support",description:"Inquiry response, appointment follow-up, patient balance questions, and insurance communication — so front desk staff focus on the patients in front of them."},{num:"08",title:"Credentialing Maintenance",description:"License expirations, malpractice renewals, and payer recredentialing cycles tracked and managed — so nothing lapses while the team is focused on daily operations."}]},workflow:{eyebrow:"How we fit into your daily workflow",title:"We work inside your existing systems. <em>Not alongside them as another thing to manage.</em>",description:"Support that requires your team to use a separate platform, file uploads, or a new process creates more work, not less. We operate inside the tools you already run.",items:[{num:"AM",label:"Eligibility Check",sublabel:"Next-day patients"},{num:"Daily",label:"Charge Entry",sublabel:"Same-day or next"},{num:"Daily",label:"Claims Submit",sublabel:"Scrubbed first"},{num:"Daily",label:"Auth Queue",sublabel:"Pending tracked"},{num:"Daily",label:"Denial Review",sublabel:"24–48hr response"},{num:"Weekly",label:"AR Follow-Up",sublabel:"All buckets worked"},{num:"Monthly",label:"Owner Report",sublabel:"Collections · Trends"}]},howWeWork:{eyebrow:"How HBS works as your extended team",title:"Not a vendor you report to. <em>A teammate who works in your system.</em>",description:"The distinction between a vendor relationship and a team extension is not just language — it is how work gets done, how communication happens, and whether the practice feels the difference.",process:[{num:"01",title:"We access your EHR and billing system directly",description:"We log in to your system. We work your queues. No file exports, no external portals, no additional steps for your staff."},{num:"02",title:"We follow your workflow — and help improve it",description:"We adapt to how your practice operates, not the other way around. Where we find gaps, we flag them and document the fix."},{num:"03",title:"We communicate where your team communicates",description:"EHR messaging, email, phone — we are reachable through the channels your staff already uses. No support tickets, no waiting for a queue."},{num:"04",title:"We report to you on a regular schedule",description:"Monthly performance reports with plain-language commentary — what the numbers mean, what changed, and what you should consider doing next."},{num:"05",title:"We scale as your practice grows",description:"New providers, new payers, new service lines — the support scales with you without a new hiring cycle or an onboarding delay."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human specialists",machine:["Eligibility verification scheduling and results tracking","Claim submission status monitoring and denial alerts","AR aging bucket prioritization and follow-up scheduling","Prior authorization expiration tracking and reminders","Denial pattern categorization and trend reporting","Monthly performance reporting and KPI tracking"],human:["Payer calls, portal follow-up, and claim escalation","Denial review, correction, and appeal writing","Prior authorization coordination and correction responses","Coding review and documentation alignment","Patient communication and billing question responses","Practice owner reporting and operational recommendations"],pullQuote:'"A small practice does not need less operational support than a large one. In many ways, it needs more — because there is no margin for the errors that a larger organization can absorb. What changes with size is the cost structure of the support, not the need for it."'},results:{eyebrow:"What changes",title:"Your team does their work. <em>We do the billing and AR work.</em>",outcomes:[{icon:"↓",title:"Denial rates decline systematically",description:"Root causes identified and addressed — not just individual claims corrected and the same error repeated next month."},{icon:"✓",title:"AR aging is worked consistently",description:"Every bucket assigned, every claim followed up on schedule — the pile that was growing starts shrinking."},{icon:"$",title:"Revenue leakage stops compounding",description:"Missed authorizations, unworked denials, and aging AR addressed systematically — the small amounts that add up to large losses start being recovered instead."},{icon:"→",title:"Front desk focus returns to patients",description:"Billing questions, denial follow-up, and payer calls removed from front desk responsibilities — staff manage what is in front of them without divided attention."},{icon:"◎",title:"Practice owner has reporting, not just intuition",description:"Monthly performance review with actual numbers, trend direction, and commentary — so decisions about the practice are based on data, not guesswork."},{icon:"⚡",title:"Growth becomes possible without hiring first",description:"Operational depth added without in-house payroll — the practice can serve more patients before adding headcount."}]},compare:{eyebrow:"Why hiring more staff is not always the answer",title:"Adding people to a broken workflow <em>produces more broken output.</em>",description:"The solution to operational overload in a small practice is not always more headcount. Often it is better structure around the people already there — and scalable support for the tasks that consistently fall behind.",rows:[{label:"Denial follow-up",hbs:"Systematic — every denial worked",other:"When someone finds time"},{label:"AR aging attention",hbs:"Defined schedule — all buckets",other:"When cash flow creates urgency"},{label:"Staff absence coverage",hbs:"HBS team covers the workflow",other:"Tasks disappear with the person"},{label:"Prior authorization tracking",hbs:"Proactive — daily monitoring",other:"Reactive — discovered after denial"},{label:"Cost to add capacity",hbs:"No payroll, no benefits, no onboarding",other:"$50K–$70K+ annually per hire"},{label:"Practice owner visibility",hbs:"Monthly reporting with commentary",other:"Intuition and occasional reports"}]},finalCta:{eyebrow:"Start with a practice review",title:"If your small team is already at capacity, <em>the answer is not asking them to do more.</em>",description:"We start with a review of your current billing and operations — showing you where revenue is leaking, what is falling behind, and what a dedicated support model would change. No commitment required.",buttons:[{text:"Relieve my practice team",variant:"light"},{text:"Talk to our small practice team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},te={title:"Medical Group Billing & RCM Services",subtitle:"Standardize billing, AR, credentialing, and operations across all providers and locations.",description:"Hired Billing Support helps medium to large medical groups standardize billing, AR, credentialing tracking, reporting, and operational workflows so leadership can see what is happening across the organization and manage it — not just react to it.",hero:{eyebrow:"Medical Groups",title:"More providers. More complexity. The same revenue cycle<em> pressure multiplied.</em>",subtitle:"Multi-provider groups deal with inconsistent billing across providers, credentialing timelines that never align, and AR management that no single staff member can track across every payer.",description:"HBS standardizes revenue cycle operations across your group so every provider performs consistently."},sections:{pain:{eyebrow:"The medical group growth reality",title:"Growth does not automatically create control. <em>Usually it creates the opposite.</em>",ledgerEyebrow:"Where the pressure lives",ledgerHeading:"The specific gaps <em>behind the daily grind.</em>",monologue:["Your group has grown. New providers added. Maybe a second location. Possibly a new specialty. And what worked operationally at six providers and one location now feels inconsistent at twelve providers and three locations. Different billers have different habits. Different locations follow slightly different intake processes. AR is being worked — but not uniformly across all providers. Denials are being addressed — but the root cause analysis that would prevent them from repeating is not being done systematically.","The clinical care is excellent. The revenue cycle has become harder to manage, not easier, as the group has expanded.",'"Every organization has a different pressure point. A startup needs structure. A small practice needs relief. A growing group needs standardization. Without it, growth compounds operational inconsistency until it becomes a revenue problem that is difficult to diagnose and even harder to fix."',"The challenge with growing medical groups is that operational inconsistency is invisible from the summary level. Collection rates look acceptable. But underneath the averages, there are providers performing significantly below the group mean, payers with above-average denial rates that nobody has isolated, and AR aging in specific locations that is quietly growing while the overall number stays manageable."],ledger:[{num:"01",title:"Different providers or locations follow different billing processes",description:"Without standardized SOPs across all providers and locations, billing quality varies by who is doing the work on a given day. The gap between the best-performing provider's billing outcomes and the worst-performing provider's outcomes is almost always a process gap, not a clinical one."},{num:"02",title:"Leadership cannot easily see where the revenue cycle is breaking",description:"Group-level reports show aggregate performance. They do not show which provider is driving the denial rate, which location has the most aging AR, or which payer relationship is creating the most friction. Without that level of visibility, leadership manages by exception rather than by design."},{num:"03",title:"Credentialing status is difficult to track across multiple providers",description:"A group with ten providers, multiple payers, and multiple locations has dozens of active credentialing relationships to maintain simultaneously. Expiration dates, recredentialing cycles, and application statuses become genuinely difficult to track without a dedicated system and dedicated ownership."},{num:"04",title:"Denial patterns repeat because root causes are not being systematically addressed",description:"Denials are worked at the individual claim level. But nobody is pulling back to identify which denial reasons are increasing, which providers are generating above-average denial rates, and what upstream workflow change would reduce future denials. The same issues repeat every month."},{num:"05",title:"Internal managers spend time chasing updates instead of managing outcomes",description:"Billing managers in growing groups often spend a significant portion of their time gathering status information — from billers, from payer portals, from credentialing teams — rather than making management decisions based on current, organized information. The reporting structure has not kept pace with the organizational size."}]},solution:{eyebrow:"The solution",title:"Standardized operations across all providers and locations. <em>Visibility that makes the group manageable.</em>",description:"Hired Billing Support provides billing, AR management, credentialing coordination, denial management, and reporting infrastructure that works consistently across all providers and locations — giving leadership the standardization and visibility that growth requires.",process:[{num:"01",title:"Standardized billing workflow across all providers",description:"One billing process applied consistently across all providers and locations — same charge entry standards, same claim scrubbing rules, same denial turnaround expectations — so performance differences reflect payer behavior, not workflow inconsistency."},{num:"02",title:"Provider-level AR management and reporting",description:"AR aging tracked and worked by provider — so leadership can see which providers are generating above-average AR aging and address the root cause, not just the aggregate number."},{num:"03",title:"Multi-provider credentialing coordination",description:"Credentialing status tracked across all providers and payers simultaneously — expiration monitoring, recredentialing cycles managed, application status reported to leadership on a regular schedule."},{num:"04",title:"Denial trend analysis by provider, payer, and reason",description:"Denial patterns analyzed across the group — identifying which providers have above-average denial rates, which payers are creating the most friction, and what root cause is behind the group's most common denial categories."},{num:"05",title:"Group-level performance reporting for leadership",description:"Monthly reporting that gives leadership the specific visibility they need — provider-level collection rates, denial trend analysis, AR aging by location, and credentialing status — not just group-level averages."},{num:"06",title:"Scalable support as the group continues to grow",description:"As new providers are onboarded, new locations added, or new specialties integrated, the support scales with the growth — without requiring a new hiring cycle each time the group expands."}]},services:{eyebrow:"Services that fit medium to large groups",title:"Built for the complexity of multi-provider, multi-location operations. <em>Not for a single-provider workflow.</em>",items:[{num:"01",title:"Multi-Provider Billing & RCM",description:"Standardized billing workflow across all providers — same process, same standards, consistent outcomes regardless of which provider or location is being billed."},{num:"02",title:"Group AR Management",description:"AR tracked and worked by provider and location — so aging patterns are visible at the level where they can be addressed, not just in the group aggregate."},{num:"03",title:"Denial Management & Root Cause Analysis",description:"Denials worked and root causes tracked across the group — identifying provider-level and payer-level patterns that require upstream workflow changes."},{num:"04",title:"Multi-Provider Credentialing Coordination",description:"Credentialing status tracked across all providers and payers — expiration monitoring, recredentialing cycles, and application status managed centrally."},{num:"05",title:"Provider Onboarding Support",description:"Credentialing, payer enrollment, billing setup, and workflow integration for new provider additions — managed from the start so new providers become billing-active faster."},{num:"06",title:"Group-Level Reporting & Analytics",description:"Monthly performance reports with provider-level and location-level breakdowns — giving leadership the visibility to manage the organization, not just observe it."},{num:"07",title:"Coding & Quality Assurance",description:"Coding accuracy reviewed across providers — identifying variation in coding patterns that affect reimbursement and create compliance exposure at the group level."},{num:"08",title:"Operational Standardization Support",description:"SOP development and adherence monitoring across the group — so operational quality is a system, not dependent on individual staff habits at each location."}]},workflow:{eyebrow:"Standardization and workflow model",title:"One process across all providers and locations. <em>Visibility at every level of the organization.</em>",description:"The operational structure that allows a large group to perform consistently is not complexity — it is standardization. The same process applied consistently produces predictable outcomes at any scale.",items:[{num:"Intake",label:"Eligibility",sublabel:"All providers"},{num:"Charge",label:"Entry Standards",sublabel:"Standardized"},{num:"Claims",label:"Submission",sublabel:"Same-day rule"},{num:"AR",label:"Follow-Up",sublabel:"By provider · location"},{num:"Denials",label:"Root Cause",sublabel:"Tracked group-wide"},{num:"Cred",label:"Tracking",sublabel:"All providers"},{num:"Report",label:"Leadership View",sublabel:"Provider · location"}]},howWeWork:{eyebrow:"How HBS works across your group",title:"Inside your system. Across all your providers. <em>Not managing one and leaving others unattended.</em>",description:"Multi-provider support only creates value when it is applied consistently across the entire organization — not concentrated on the highest-volume providers while smaller ones receive less attention.",process:[{num:"01",title:"We assess billing performance across all providers and locations",description:"Before recommending anything, we understand the full picture — which providers have above-average denial rates, which locations have growing AR, and where billing workflow inconsistency is creating performance variation."},{num:"02",title:"We standardize the process across all providers",description:"One billing workflow applied consistently — same charge entry timing, same claim scrubbing standards, same denial turnaround expectations — so performance becomes predictable rather than dependent on who is working that day."},{num:"03",title:"We work inside your EHR and PM across all locations",description:"We access your existing systems for every provider and location — no separate workflows, no parallel systems, no additional steps for your team."},{num:"04",title:"We report at the provider and location level — not just the group aggregate",description:"Leadership receives the provider-level and location-level visibility needed to make management decisions — not just group averages that mask variation."},{num:"05",title:"We scale the support as the group continues to grow",description:"New providers and locations added to the support model as the group expands — without a new procurement process or a separate onboarding engagement each time."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human specialists",machine:["Multi-provider billing queue monitoring and status tracking","Provider-level AR aging alerts and follow-up scheduling","Denial pattern categorization across providers and payers","Credentialing expiration tracking across all providers","Group-level reporting and provider performance tracking","SOP adherence monitoring across locations"],human:["Provider-level billing review and coding accuracy judgment","Denial root cause analysis and upstream workflow recommendations","Payer calls and escalation for multi-provider accounts","Credentialing coordination across providers and payers","Leadership reporting with group and provider-level commentary","Operational standardization recommendations and SOP development"],pullQuote:'"A medical group that grows without standardizing its operational backbone eventually reaches a point where growth creates more management work than it creates revenue. The inflection point is earlier than most groups expect — and the fix requires structure, not just more staff."'},results:{eyebrow:"What changes",title:"A group that grows without losing <em>operational control.</em>",outcomes:[{icon:"◎",title:"Provider-level performance visibility",description:"Collection rates, denial rates, and AR aging visible by provider and location — so leadership manages variation, not just aggregates."},{icon:"✓",title:"Consistent billing process across the group",description:"One standard applied across all providers — performance becomes predictable rather than dependent on individual workflows."},{icon:"↓",title:"Denial rates decline group-wide",description:"Root cause analysis identifies group-level patterns — the same denials stop repeating across providers and locations."},{icon:"$",title:"Revenue leakage identified at the provider level",description:"Undercoding, missed charges, and above-average denial rates identified by provider — so targeted interventions recover specific revenue, not general improvements."},{icon:"⚡",title:"New provider onboarding is faster",description:"Credentialing, enrollment, billing setup, and workflow integration for new additions managed from the start — so new providers generate revenue sooner."},{icon:"→",title:"Growth does not create proportional chaos",description:"Standardized processes scale with the group — adding providers and locations adds workload to a structured system, not to an already inconsistent one."}]},compare:{eyebrow:"Why growth requires operational structure",title:"Groups that standardize before they grow <em>manage growth. Groups that do not, react to it.</em>",description:"The operational infrastructure that works for a six-provider group is not the same infrastructure that manages a twelve-provider group across three locations. Scaling without standardizing creates the kind of complexity that is expensive and time-consuming to unwind.",rows:[{label:"Billing process consistency",hbs:"Standardized across all providers",other:"Varies by person and location"},{label:"Performance visibility",hbs:"Provider and location level",other:"Group aggregate only"},{label:"Denial root cause tracking",hbs:"Group-wide analysis monthly",other:"Individual claim corrections"},{label:"Credentialing status",hbs:"All providers tracked centrally",other:"Tracked informally per person"},{label:"New provider onboarding",hbs:"Managed process from day one",other:"Ad hoc — varies by addition"},{label:"Growth operational impact",hbs:"Structure scales with volume",other:"Complexity increases proportionally"}]},finalCta:{eyebrow:"Start with a group operations review",title:"See where the revenue cycle is breaking <em>across all providers and locations.</em>",description:"We assess your group's current billing, AR, credentialing, denial patterns, and reporting structure to identify where standardization would reduce operational complexity and improve revenue outcomes.",buttons:[{text:"Standardize my group operations",variant:"light"},{text:"Talk to group operations team",variant:"ghost"}],trustLine:"No commitment. No software required. Just diagnostic expertise."}}},ae={title:"Member experience is built in the front office.",subtitle:"It is sustained or broken in the backend.",description:"Care coordination, member engagement, and value-based care outcomes depend on the reliability of every administrative workflow behind the clinical interaction.",hero:{eyebrow:"Member-Centric Care",title:"Care coordination only works when the operations <em>behind it do too.</em>",subtitle:"Member-focused care models depend on referral tracking, authorization management, eligibility accuracy, and billing alignment across multiple care team touchpoints — any gap affects both care and revenue.",description:"HBS supports the operational layer that keeps member-centric care models running without administrative breakdown."},sections:{pain:{eyebrow:"The care coordination operations reality",title:"Member-centered care is the vision. <em>Consistent backend execution is what makes it real.</em>",ledgerEyebrow:"Where coordination breaks down",ledgerHeading:"The operational gaps <em>that member experience reveals.</em>",monologue:["A care coordinator has a caseload of 45 members. She is responsible for outreach, scheduling, referral tracking, authorization follow-up, documentation support, and post-visit follow-up — for all of them, simultaneously, with a caseload that keeps growing because the program is expanding. On any given day, some members receive excellent coordination. Others fall through — not because of neglect, but because the day ran out before the task queue did.","Member-centric care models are built on the premise that consistent follow-up, proactive outreach, and coordinated administrative support improve outcomes. That premise is correct. The operational challenge is ensuring that the coordination is actually happening — systematically, for every member, every day — rather than happening for the members who happened to be at the top of the queue when time ran out.",'"The gap between a member who stays engaged with their care and one who falls through is often not clinical. It is operational. A missed outreach call. A referral that was tracked but never followed up. An authorization that expired before someone caught it. Member experience suffers when the backend workflow is inconsistent."',"Reporting compounds the challenge. Organizations operating member-centered care models need to demonstrate performance — member engagement rates, care continuity metrics, authorization turnaround times. Without organized backend operations, producing that reporting requires manual effort that takes time away from the coordination work it is supposed to measure."],ledger:[{num:"01",title:"Members fall through the cracks when coordinator caseloads exceed manageable volume",description:"Care coordination is inherently human — it requires judgment, relationship, and consistent follow-through. When caseloads outpace the time coordinators have to manage them, the members who are least likely to self-advocate fall through first. Administrative support that handles the systematic tasks allows coordinators to focus on the members who need the human attention."},{num:"02",title:"Referral tracking is inconsistent — some are followed up, some are not",description:"A referral submitted without systematic follow-up is not a referral — it is a piece of paperwork. Member-centered care requires that every referral has a status, a timeline, and an owner who follows through until the member receives the referred service or a documented decision is made."},{num:"03",title:"Prior authorization management is reactive rather than proactive",description:"Authorization expiration is discovered when a claim is denied, not before the service is delivered. In member-centric care models, where care continuity is the objective, authorization gaps create clinical gaps — and the member experience reflects that immediately."},{num:"04",title:"Communication is scattered across too many channels without coordination",description:"Phone calls, portal messages, email, and EHR notes all contain relevant member communication — often without a single person who has visibility across all of them for any given member. Important messages are missed. Follow-up is duplicated. Members experience inconsistency that contradicts the organization's member-centered model."},{num:"05",title:"Reporting requires manual effort that takes time away from care coordination",description:"Performance reporting for value-based care contracts, grant requirements, or organizational dashboards requires data that lives in multiple systems. Assembling it manually is time-consuming — time that comes out of the care coordination work the reporting is supposed to measure."}]},solution:{eyebrow:"The solution",title:"Backend coordination support that keeps every member in view. <em>Every day.</em>",description:"Hired Billing Support provides the administrative coordination layer that allows care teams to focus on member relationships — eligibility verification, referral tracking, authorization management, documentation support, communication coordination, and operational reporting handled systematically so no member falls through the gaps.",process:[{num:"01",title:"Member outreach and follow-up coordination",description:"Outreach queues managed systematically — every member contacted on schedule, every follow-up documented, every non-responder escalated appropriately so care coordinators maintain visibility across the full caseload."},{num:"02",title:"Referral tracking from submission to completion",description:"Every referral tracked from initial submission through to completion or documented decision — status updated, follow-up triggered when responses are delayed, and care coordinators notified when member action is needed."},{num:"03",title:"Prior authorization coordination",description:"Authorization requests tracked, submitted, and followed up proactively — expiration monitoring included so authorization gaps do not create clinical care gaps for the members who depend on continued coverage."},{num:"04",title:"Eligibility verification and benefits support",description:"Member eligibility and benefits verified for upcoming services — with particular attention to coverage changes that affect care access and the authorization requirements that managed care plans impose on member-centered services."},{num:"05",title:"Documentation support and task coordination",description:"Documentation requests, care plan updates, and provider task items coordinated — so clinical staff spend their time on clinical decisions rather than administrative follow-up that a support team can manage."},{num:"06",title:"Operational reporting and performance visibility",description:"Member engagement metrics, referral completion rates, authorization turnaround times, and care continuity data organized and reported — so leadership can demonstrate performance and manage the program with current information."}]},services:{eyebrow:"Services that fit member-centric organizations",title:"Every backend coordination function. <em>Managed so care teams can coordinate.</em>",items:[{num:"01",title:"Member Outreach & Follow-Up",description:"Outreach queues managed systematically — every member contacted on schedule, every follow-up documented, every gap escalated before it becomes a care continuity problem."},{num:"02",title:"Referral Tracking & Coordination",description:"Every referral tracked from submission to completion — status maintained, follow-up triggered, care coordinators notified when member action is required."},{num:"03",title:"Prior Authorization Management",description:"Authorization requests managed proactively — submitted, tracked, followed up on, and monitored for expiration so care access is not disrupted by administrative gaps."},{num:"04",title:"Eligibility & Benefits Verification",description:"Member eligibility verified for upcoming services — coverage changes identified and communicated before they affect care access or billing."},{num:"05",title:"Documentation Support",description:"Care plan documentation, clinical note support, and provider task coordination — administrative documentation handled so clinical staff focus on clinical work."},{num:"06",title:"Patient/Member Communication Coordination",description:"Phone, portal, and message coordination — consistent communication responses and documentation across all channels so no member communication falls through."},{num:"07",title:"Scheduling & Appointment Support",description:"Appointment scheduling, reminders, and follow-up coordination — so member scheduling gaps are identified and addressed before they become care continuity gaps."},{num:"08",title:"Operational Reporting & Analytics",description:"Member engagement metrics, referral completion rates, authorization performance, and care continuity data — organized and reported to support program management and performance demonstration."}]},workflow:{eyebrow:"Care coordination workflow model",title:"Every member in view. <em>Every coordination task managed.</em>",description:"Care coordination at scale requires systematic backend support — so the human work that only coordinators can do gets the attention it deserves.",items:[{num:"Member",label:"Eligibility",sublabel:"Coverage verified"},{num:"Outreach",label:"Contact Queue",sublabel:"Systematic"},{num:"Auth",label:"Prior Auth",sublabel:"Proactive"},{num:"Referral",label:"Tracking",sublabel:"To completion"},{num:"Visit",label:"Coordination",sublabel:"Scheduling · Prep"},{num:"Post",label:"Follow-Up",sublabel:"Documentation"},{num:"Report",label:"Performance",sublabel:"Member metrics"}]},howWeWork:{eyebrow:"How HBS works with care teams",title:"Inside your workflow. <em>Aligned with your care model.</em>",description:"Care coordination support only works when it is embedded in the actual workflow — not managed from outside as a separate administrative layer that care teams have to interact with.",process:[{num:"01",title:"We work inside your EHR and care coordination platform",description:"Your clinical and operational systems — we access them directly so the support integrates into the existing workflow rather than creating an additional system for care teams to manage."},{num:"02",title:"We understand the context of member-centered care",description:"Value-based care models, care coordination programs, managed care relationships, and population health goals — understood and respected in every administrative decision and communication."},{num:"03",title:"We communicate through the channels your care team uses",description:"EHR messaging, care coordination platform notifications, email — the support communicates where your team communicates, not through a separate vendor interaction."},{num:"04",title:"We report member and operational metrics on a regular schedule",description:"Member engagement rates, referral completion, authorization performance, and care continuity data — reported to leadership in a format that supports program management and performance demonstration."},{num:"05",title:"We scale as caseloads and member populations grow",description:"New care programs, expanded member populations, additional coordination functions — the support scales with the organization without requiring a new engagement or a separate onboarding process."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted coordination workflows",humanLabel:"Care coordination specialists",machine:["Member outreach queue scheduling and contact status tracking","Referral status monitoring and follow-up trigger generation","Authorization expiration tracking and alert generation","Eligibility verification scheduling and results tracking","Documentation task queue monitoring and routing","Operational metric tracking and reporting generation"],human:["Member communication requiring clinical context and empathy","Referral coordination with payer-specific requirements","Prior authorization follow-up and escalation decisions","Documentation support with clinical context awareness","Care team communication and coordination decisions","Leadership reporting with program performance context"],pullQuote:'"Member experience in care coordination is the sum of every interaction — including the ones that never reach a human. Eligibility that fails silently. A referral that was never followed up. An authorization that expired before anyone caught it. Backend execution is not separate from member experience. It determines it."'},results:{eyebrow:"What changes",title:"Care teams that coordinate. <em>Members who do not fall through.</em>",outcomes:[{icon:"◎",title:"No member falls through the administrative cracks",description:"Systematic outreach queues, referral tracking, and follow-up workflows ensure every member receives consistent coordination — not just those at the top of the queue when time runs out."},{icon:"✓",title:"Referrals are tracked to completion",description:"Every referral has a status, a timeline, and a follow-up trigger — so care coordinators can see exactly where each member stands in their referral pathway."},{icon:"→",title:"Care teams focus on coordination, not administrative tasks",description:"Outreach queues, documentation tasks, authorization follow-up, and scheduling support removed from coordinator responsibilities — so human time goes to human work."},{icon:"↓",title:"Authorization gaps stop creating clinical care gaps",description:"Proactive authorization tracking means expirations are caught before they affect care access — not discovered through a denied claim after the member has already experienced a disruption."},{icon:"$",title:"Revenue protected through eligibility and billing coordination",description:"Eligibility verified, authorizations in place, and billing coordination managed — so the financial infrastructure of the care model performs as well as the clinical model."},{icon:"⚡",title:"Program performance is visible and demonstrable",description:"Member engagement metrics, referral completion rates, and care continuity data organized and reported — so leadership can demonstrate value and manage program performance with current information."}]},compare:{eyebrow:"Why member experience depends on backend execution",title:"The member experience is built clinically. <em>It is sustained or broken operationally.</em>",description:"Clinical quality creates the foundation of member experience. Operational consistency determines whether members actually receive the care they need — or fall through gaps that nobody intended but nobody prevented.",rows:[{label:"Member outreach consistency",hbs:"Systematic — every member reached",other:"Depends on coordinator bandwidth"},{label:"Referral follow-through",hbs:"Tracked to completion — every referral",other:"Followed up when time allows"},{label:"Authorization management",hbs:"Proactive — expiration monitored",other:"Discovered through claim denial"},{label:"Documentation support",hbs:"Coordinated — clinical staff focused",other:"Falls on coordinators and providers"},{label:"Program performance visibility",hbs:"Reported on schedule",other:"Assembled manually — time-consuming"},{label:"Scale with member population growth",hbs:"Adjusts without fixed overhead",other:"Requires proportional coordinator hiring"}]},finalCta:{eyebrow:"Start with a coordination workflow review",title:"If members are falling through administrative gaps, <em>the backend workflow needs to change.</em>",description:"We start with a review of your current care coordination workflow — identifying where members fall through, what outreach and referral tracking gaps exist, and what a systematic backend support model would change. No commitment required.",buttons:[{text:"Strengthen member-care operations",variant:"light"},{text:"Talk to our care coordination team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},ne={title:"Enterprise Healthcare Operations Support",subtitle:"Scalable backend operations support for enterprise healthcare organizations and health systems.",description:"Hired Billing Support supports enterprise healthcare organizations and health systems as a scalable backend operations partner — RCM, AR, credentialing, denial management, compliance, and reporting infrastructure at enterprise scale.",hero:{eyebrow:"Enterprise Healthcare Operations",title:"Enterprise operations need backend infrastructure<em>that scales without chaos.</em>",subtitle:"Health systems and multi-entity organizations face billing complexity, credentialing volume, and operational coordination that outpaces in-house capacity — especially during growth.",description:"HBS provides enterprise-grade backend operations support that scales with your organization's structure."},sections:{pain:{eyebrow:"The enterprise operations reality",title:"Scale creates revenue problems that summary reports cannot see. <em>And operational decisions that data cannot easily support.</em>",ledgerEyebrow:"Where the pressure lives",ledgerHeading:"The specific gaps <em>behind enterprise operations.</em>",monologue:["At the executive level, the organization looks like it is performing. Collection rates are in an acceptable range. AR aging is within historical norms. And then an operational review reveals that a specific service line has had an above-average denial rate for eight months that never appeared in the aggregate because it was masked by strong performance from larger departments.","Enterprise healthcare organizations face a specific operational challenge: the scale that makes them powerful also makes their problems harder to see. Revenue leakage that would be immediately apparent in a small practice accumulates quietly across departments, locations, and service lines — becoming significant before it becomes visible to the people responsible for addressing it.",'"Operational decisions at enterprise scale are reactive when reporting is delayed, fragmented, or not connected to root causes. The organizations that manage their revenue cycle well are not the ones with the most resources. They are the ones with the clearest operational visibility."',"The challenge is not capability — enterprise healthcare organizations have capable teams. The challenge is structure: building the operational infrastructure that allows large organizations to identify problems early, standardize processes across departments, and make decisions based on current data rather than the reports that arrive after the window to act on them has already closed."],ledger:[{num:"01",title:"Operations are spread across departments, locations, and systems that do not share a common view",description:"Billing data is in one system. AR data is in another. Credentialing is tracked separately. Denial analytics require pulling from multiple portals. Without a synthesized operational view, leadership makes decisions based on fragments of the full picture."},{num:"02",title:"Workflow inconsistency creates revenue leakage at scale",description:"When twenty billing teams across twenty locations follow slightly different processes, the aggregate impact of those inconsistencies is significant. A two-percent difference in clean claim rates across a large organization is not a minor variation — it is a material revenue difference."},{num:"03",title:"Backlogs develop quietly across billing, AR, credentialing, and reporting",description:"In a large organization, work that falls behind in one department or location does not immediately register at the executive level. By the time a credentialing lapse or a denial backlog appears in leadership reporting, it has typically been building for weeks or months."},{num:"04",title:"Scaling in-house teams increases payroll and management complexity proportionally",description:"Adding headcount to support operational growth adds salary, benefits, management overhead, and onboarding costs — all of which begin immediately. Scalable support infrastructure that adjusts to operational volume without adding fixed cost is a significant structural advantage."},{num:"05",title:"Operational decisions are reactive because reporting is always behind",description:"When monthly reports arrive three weeks after the period ends, the optimal window to act on what those reports reveal has already passed. Enterprise leadership needs current operational intelligence — not historical documentation of decisions that should have been made a month ago."}]},solution:{eyebrow:"The solution",title:"A scalable backend operations partner <em>that gives enterprise leadership operational control.</em>",description:"Hired Billing Support provides the operational infrastructure that allows enterprise healthcare organizations to standardize execution, improve visibility, and scale support without proportional increases in administrative headcount.",process:[{num:"01",title:"Enterprise RCM execution and standardization",description:"Billing workflow standardized and executed consistently across departments, service lines, and locations — so revenue cycle performance reflects payer behavior, not workflow variation between teams."},{num:"02",title:"Department and service-line level AR management",description:"AR tracked and worked at the department level — so leadership can see where aging is building by service line and location, not just in the enterprise aggregate."},{num:"03",title:"Enterprise credentialing coordination",description:"Credentialing status tracked across the entire provider roster — expiration monitoring, recredentialing cycles, and application status managed centrally and reported to leadership on schedule."},{num:"04",title:"Denial management with enterprise-level pattern analysis",description:"Denials tracked and worked across all departments — with pattern analysis that identifies which service lines, provider types, and payer relationships are generating above-average denial rates and what upstream changes would address them."},{num:"05",title:"Executive reporting and operational intelligence",description:"Weekly operational snapshots and monthly executive reports — with department-level and service-line-level breakdowns, root cause analysis, and specific recommended actions so leadership can manage with current information, not historical reports."},{num:"06",title:"Scalable backend support that adjusts to operational volume",description:"Support infrastructure that scales with organizational volume — departments added, service lines expanded, new locations integrated — without a separate procurement process or a new engagement for each addition."}]},services:{eyebrow:"Services that fit enterprise organizations",title:"Backend operations infrastructure for complex healthcare organizations. <em>Not practice management tools applied at scale.</em>",items:[{num:"01",title:"Enterprise RCM Management",description:"Revenue cycle execution standardized and managed across departments, service lines, and locations — consistent process, consistent performance measurement."},{num:"02",title:"Multi-Department AR Management",description:"AR managed at department and service-line level — so leadership sees aging by organizational unit, not just enterprise aggregate."},{num:"03",title:"Enterprise Denial Management",description:"Denials worked and analyzed enterprise-wide — pattern detection across departments, service lines, and payers with actionable upstream recommendations."},{num:"04",title:"Provider Roster Credentialing",description:"Full-roster credentialing coordination — expiration tracking, recredentialing management, and application status for every provider across the organization."},{num:"05",title:"Compliance & Quality Assurance",description:"Billing compliance monitoring and quality assurance across departments — identifying coding patterns, documentation gaps, and process deviations before they create audit exposure."},{num:"06",title:"Executive Analytics & Reporting",description:"Weekly and monthly executive reporting with department-level breakdowns, root cause analysis, and specific recommended actions — built for decision-making, not documentation."},{num:"07",title:"Operational Workflow Governance",description:"SOP development, adherence monitoring, and process standardization across departments — ensuring operational quality is a system, not dependent on individual team habits."},{num:"08",title:"Scalable Backend Support",description:"Operational support that scales with organizational volume — new departments, locations, and service lines integrated into the support model as the organization grows."}]},workflow:{eyebrow:"Enterprise backend operations model",title:"Standardized. Visible. Scalable. <em>At every level of the organization.</em>",description:"Enterprise operational support requires a model that works consistently at every level — from individual claim decisions to executive performance reporting — without requiring separate engagements for each department or location.",items:[{num:"Dept.",label:"Billing Exec.",sublabel:"Standardized"},{num:"Claim",label:"Quality Layer",sublabel:"Pre-submit"},{num:"AR",label:"Dept-Level",sublabel:"Tracked + worked"},{num:"Denial",label:"Pattern Analysis",sublabel:"Enterprise-wide"},{num:"Cred.",label:"Full Roster",sublabel:"Centrally tracked"},{num:"Compliance",label:"QA Monitoring",sublabel:"All departments"},{num:"Exec.",label:"Dashboard",sublabel:"Weekly · Monthly"}]},howWeWork:{eyebrow:"How HBS integrates with enterprise workflows",title:"Inside your systems. Across your departments. <em>Without the overhead of a separate platform or process.</em>",description:"Enterprise support that requires new systems, new portals, or new process layers for every department creates its own operational burden. We integrate into existing infrastructure.",process:[{num:"01",title:"We assess operational performance across departments and service lines",description:"Before recommending anything, we understand the full enterprise picture — which departments have above-average denial rates, where AR aging is building, and where workflow inconsistency is creating performance variation."},{num:"02",title:"We integrate into your existing systems and workflows",description:"Your EHR, your PM system, your clearinghouse, your reporting infrastructure — we work inside the tools your organization already uses, not alongside them."},{num:"03",title:"We standardize processes across all departments and locations",description:"One billing standard, one AR process, one denial management workflow applied consistently across the organization — so performance variation reflects payer behavior, not process inconsistency."},{num:"04",title:"We deliver executive-level reporting on a defined schedule",description:"Weekly operational snapshots and monthly executive reports — with department-level breakdowns, root cause analysis, and recommended actions — delivered before leadership needs to ask for them."},{num:"05",title:"We scale support as the organization grows",description:"New departments, new locations, new service lines — integrated into the support model as they are added, without a separate engagement or a new procurement process."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human specialists",machine:["Enterprise-wide billing queue monitoring and performance alerts","Department-level AR aging monitoring and threshold alerts","Denial pattern detection across departments and service lines","Full-roster credentialing expiration tracking","Compliance pattern detection and risk flag generation","Executive reporting data aggregation and trend calculation"],human:["Enterprise billing review and standardization decisions","Denial root cause analysis and department-level recommendations","Payer escalations and enterprise contract review coordination","Credentialing coordination across the full provider roster","Executive reporting with commentary and strategic recommendations","Compliance risk assessment and corrective action coordination"],pullQuote:'"At enterprise scale, operational excellence is not achieved by working harder — it is achieved by building systems that make the right process easier to follow than the wrong one, and that surface problems early enough to address them before they compound into significant revenue impact."'},results:{eyebrow:"What changes",title:"An enterprise that manages its revenue cycle. <em>Not one that discovers problems after the fact.</em>",outcomes:[{icon:"◎",title:"Operational visibility at every level",description:"Department-level, service-line-level, and location-level performance — leadership sees the full picture, not just the enterprise average."},{icon:"↓",title:"Enterprise denial rates decline systematically",description:"Pattern analysis across departments identifies which service lines and payers are driving denial rates — and what upstream changes would reduce them."},{icon:"✓",title:"Process consistency across departments and locations",description:"One billing standard applied consistently — performance variation reflects payer behavior, not workflow inconsistency between teams."},{icon:"$",title:"Revenue leakage identified at department and service-line level",description:"Leakage that was hidden in enterprise aggregates surfaces at the department level where it can be addressed specifically."},{icon:"⚡",title:"Executive decisions made with current operational intelligence",description:"Weekly and monthly reporting delivered on schedule — with root cause analysis and recommended actions, not just historical data."},{icon:"→",title:"Scalable support without proportional payroll increases",description:"Operational capacity that adjusts to volume without fixed headcount cost — growth adds capability to a structured system, not complexity to an already stretched one."}]},compare:{eyebrow:"Why enterprise growth needs operational infrastructure",title:"Organizations that manage operations proactively <em>control their revenue. Others react to the results.</em>",description:"The difference between proactive and reactive operational management at enterprise scale is visibility, standardization, and timing. All three require infrastructure — not just intention.",rows:[{label:"Operational visibility",hbs:"Department and service-line level",other:"Enterprise aggregate only"},{label:"Process consistency",hbs:"Standardized across all departments",other:"Varies by team and location"},{label:"Denial pattern detection",hbs:"Enterprise-wide analysis monthly",other:"Discovered after significant impact"},{label:"Executive reporting timing",hbs:"Weekly — actionable",other:"Monthly — retrospective"},{label:"Scale-up cost",hbs:"Adjusts without fixed headcount",other:"Payroll increase per addition"},{label:"Compliance monitoring",hbs:"Ongoing — proactive flagging",other:"Periodic — often reactive"}]},finalCta:{eyebrow:"Start with an enterprise operations review",title:"If your organization is growing but operational visibility is not keeping pace, <em>the infrastructure needs to change.</em>",description:"We start with an enterprise operations assessment — identifying where reporting gaps, workflow inconsistencies, and revenue leakage are occurring across your organization. No commitment required to see the picture.",buttons:[{text:"Scale my backend operations",variant:"light"},{text:"Talk to our enterprise team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},re={title:"FQHC Billing & Operations Support",subtitle:"Specialized billing and revenue cycle support for Federally Qualified Health Centers.",description:"Hired Billing Support helps Federally Qualified Health Centers strengthen billing, AR, eligibility, credentialing, reporting, and operational workflows — supporting the mission-driven work of community health with reliable revenue cycle infrastructure.",hero:{eyebrow:"FQHCs & Community Health Centers",title:"FQHC billing is different. Generic billing support<em> is not enough.</em>",subtitle:"Prospective payment, Medicaid managed care, encounter-based billing, and sliding fee documentation are FQHC-specific requirements that standard billing vendors consistently apply incorrectly.",description:"HBS provides FQHC-aware billing and operations support that understands the rules your funding depends on."},sections:{pain:{eyebrow:"The FQHC operational reality",title:"Mission-driven organizations deserve <em>operational infrastructure that matches their mission.</em>",ledgerEyebrow:"Where the pressure lives",ledgerHeading:"The specific gaps <em>behind enterprise operations.</em>",monologue:["Your clinical team provides complex care to patients who may have Medicaid, Medicare, managed care, sliding fee, or no coverage at all — sometimes in the same session. Your front desk verifies eligibility across multiple payer types. Your billers navigate FQHC-specific billing rules, encounter-based billing requirements, and grant-reporting obligations alongside standard revenue cycle management. Your administrative team manages all of this with a budget that does not allow for the staffing levels that would make every task manageable.","Revenue that leaks through a missed eligibility check, an unworked denial, or an AR account that ages out is not just a financial loss for the organization. It is a direct reduction in the organization's capacity to serve the patients it exists for.",'"An FQHC that cannot protect its revenue cannot protect its mission. The clinical work and the operational infrastructure that sustains it are not separate concerns — they are the same concern."',"The challenge is that FQHC billing is genuinely complex — FQHC-specific billing rules, sliding fee scale considerations, Medicaid and Medicare billing differences, and the reporting obligations that come with federal qualification all require specific knowledge that general billing support does not always have. Generic billing services create as many problems as they solve when applied to community health organizations."],ledger:[{num:"01",title:"High patient volume creates pressure on eligibility, billing, and follow-up simultaneously",description:"An FQHC seeing 80 patients per day generates 80 eligibility checks, 80 charge entries, and the downstream billing, denial management, and AR follow-up for all of them — with a team that is often sized for 50. Something always falls behind under that math."},{num:"02",title:"Medicaid, Medicare, managed care, and sliding fee workflows require careful handling",description:"Each payer type has different billing requirements, different coverage rules, and different follow-up processes. The sliding fee scale adds another layer of complexity. When billing staff are managing all of these simultaneously without adequate support, errors accumulate and denials follow."},{num:"03",title:"Revenue leakage threatens the organization's ability to serve its community",description:"For a safety-net provider, revenue leakage is not an abstraction. Every dollar of uncollected revenue that was legitimately earned is a reduction in the financial foundation that keeps the doors open and the services available. Billing gaps in an FQHC have direct programmatic consequences."},{num:"04",title:"Hiring more administrative staff may not be financially realistic",description:"FQHCs operate with constrained administrative budgets. Adding in-house billing staff — with salary, benefits, training, and management overhead — may not be financially viable even when the operational need is clear. Scalable support that provides billing depth without fixed headcount cost directly addresses this constraint."},{num:"05",title:"Reporting and compliance expectations add to an already heavy administrative load",description:"FQHC reporting obligations — UDS reporting, grant compliance, operational performance tracking — require administrative capacity beyond standard billing operations. Staff who are managing a high billing volume do not have the additional bandwidth to also produce the reporting that federal qualification requires."}]},solution:{eyebrow:"The solution",title:"Billing and operations support that understands <em>the complexity of community health.</em>",description:"Hired Billing Support provides FQHC-aware billing, AR, eligibility, credentialing, and reporting support — managing the revenue cycle functions that allow community health organizations to focus on patient care rather than administrative overload.",process:[{num:"01",title:"FQHC-aware billing and RCM management",description:"Billing managed with knowledge of FQHC-specific requirements — encounter-based billing, FQHC prospective payment system rules, and payer-specific requirements for Medicaid, Medicare, and managed care applied correctly."},{num:"02",title:"Eligibility verification across all payer types",description:"Medicaid, Medicare, managed care, and commercial coverage verified before every visit — reducing the eligibility-related billing failures that create denials and delays in a high-volume FQHC environment."},{num:"03",title:"AR management and payer follow-up",description:"Aging AR worked systematically — payer calls, portal follow-up, and escalation — with attention to the payer mix variations that make FQHC AR management more complex than standard practice AR."},{num:"04",title:"Denial management with FQHC-specific knowledge",description:"Denials reviewed with knowledge of FQHC billing rules — denials that are incorrectly applied to FQHC-specific encounter types identified and appealed with the correct regulatory basis."},{num:"05",title:"Provider credentialing and enrollment support",description:"Credentialing and payer enrollment managed for FQHC providers — including Medicaid and Medicare enrollment processes specific to federally qualified health center providers."},{num:"06",title:"Operational reporting support",description:"Billing and AR performance reporting that supports internal management and can be connected to the operational data that FQHC reporting obligations require."}]},services:{eyebrow:"Services that fit FQHCs and community health centers",title:"Operational support that respects the mission. <em>And protects the revenue that sustains it.</em>",items:[{num:"01",title:"FQHC Billing & RCM",description:"Billing managed with FQHC-specific knowledge — encounter-based billing rules, PPS requirements, and payer-specific requirements applied correctly across Medicaid, Medicare, and managed care."},{num:"02",title:"Multi-Payer Eligibility Verification",description:"Medicaid, Medicare, managed care, and commercial eligibility verified before every visit — reducing billing failures across the complex payer mix that FQHCs manage daily."},{num:"03",title:"AR Management & Payer Follow-Up",description:"Aging AR worked systematically across all payer types — with payer-specific follow-up processes appropriate for Medicaid, Medicare, and managed care relationships."},{num:"04",title:"Denial Management",description:"FQHC-aware denial review — identifying denials that are incorrectly applied to FQHC encounter types and appealing with the correct regulatory and documentation basis."},{num:"05",title:"Provider Credentialing & Enrollment",description:"Credentialing and Medicaid/Medicare enrollment support for FQHC providers — including enrollment processes specific to federally qualified health centers."},{num:"06",title:"Coding Support",description:"FQHC-specific coding review — ensuring coding accuracy across the visit types, service codes, and diagnoses typical in a community health setting."},{num:"07",title:"Billing Compliance Support",description:"Compliance monitoring appropriate to FQHC billing requirements — coding patterns, documentation standards, and billing practices reviewed with FQHC regulatory context."},{num:"08",title:"Operational Reporting",description:"Billing and AR performance reporting — supporting internal management decisions and providing the operational data that connects to FQHC reporting requirements."}]},workflow:{eyebrow:"Community health workflow support model",title:"Operational support that fits how FQHCs actually work. <em>Not how standard practices do.</em>",description:"FQHC operations have specific complexity that generic billing support does not address. Our support is built around the actual workflow of community health — high patient volume, multi-payer complexity, and mission-driven priorities.",items:[{num:"Intake",label:"Eligibility",sublabel:"Multi-payer"},{num:"Auth",label:"Prior Auth",sublabel:"Payer-specific"},{num:"FQHC",label:"Billing Rules",sublabel:"PPS-aware"},{num:"Claims",label:"Submission",sublabel:"Medicaid · Medicare"},{num:"Denials",label:"FQHC Review",sublabel:"Reg-aware"},{num:"AR",label:"Follow-Up",sublabel:"All payer types"},{num:"Report",label:"Operations",sublabel:"Mission-connected"}]},howWeWork:{eyebrow:"How HBS works with your FQHC team",title:"Inside your workflow. Respectful of your mission. <em>Knowledgeable about your specific requirements.</em>",description:"FQHC support that treats a community health center like a standard medical practice creates problems. We understand the specific billing, regulatory, and operational context that community health requires.",process:[{num:"01",title:"We understand FQHC billing requirements before we start",description:"FQHC-specific billing rules, PPS requirements, and payer-specific coverage considerations for Medicaid, Medicare, and managed care — understood and applied from the first claim."},{num:"02",title:"We work inside your EHR and billing system",description:"Your clinical and billing systems — we access them directly so there is no additional workflow step for your team. The support integrates, not interrupts."},{num:"03",title:"We communicate with your team through existing channels",description:"EHR messaging, email, phone — your team communicates with a billing and operations specialist, not a support queue."},{num:"04",title:"We report in a format that supports management and compliance needs",description:"Billing and AR performance reported in a way that informs internal management decisions and connects to the operational data that FQHC reporting requires."},{num:"05",title:"We scale with the organization's needs",description:"New service lines, new providers, expanded locations — the support adapts without a new engagement or a separate onboarding process."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Technology handles the repetitive. <em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human specialists",machine:["Multi-payer eligibility verification queue management","FQHC billing queue monitoring and claim status tracking","AR aging alerts across all payer types","Denial categorization by payer and reason code","Credentialing expiration tracking for provider roster","Operational reporting data aggregation and formatting"],human:["FQHC-specific billing review and coding accuracy judgment","Medicaid and Medicare follow-up with payer-specific protocols","FQHC-aware denial review and appeal construction","Provider credentialing and Medicaid/Medicare enrollment","Compliance review with FQHC regulatory context","Leadership reporting with community health operational context"],pullQuote:'"Community health centers exist to provide access to care for patients who need it most. The revenue cycle that sustains that work is not separate from the mission — it is what makes the mission possible. Protecting it is not administrative overhead. It is care delivery."'},results:{eyebrow:"What changes",title:"An FQHC with stronger revenue infrastructure <em>is an FQHC that can serve more patients.</em>",outcomes:[{icon:"$",title:"Revenue leakage reduced — access protected",description:"Every billing gap closed, every denied claim worked, every unverified eligibility caught — revenue that sustains the mission collected rather than lost."},{icon:"✓",title:"FQHC-specific billing applied correctly",description:"PPS requirements, encounter-based billing rules, and payer-specific considerations applied with specific knowledge — not with a generic billing approach."},{icon:"↓",title:"Denial rates decline — especially Medicaid and Medicare",description:"FQHC-aware denial management catches incorrectly applied denials and appeals with the regulatory basis that produces reversals."},{icon:"◎",title:"Operational reporting supports management and compliance",description:"Billing and AR performance data organized in a format that informs internal management and supports reporting obligations."},{icon:"→",title:"Clinical staff focus stays on patients",description:"Billing complexity removed from clinical staff attention — providers and care teams focus on the work the organization exists to do."},{icon:"⚡",title:"Operational depth without budget-breaking overhead",description:"Billing and operations support scaled to the FQHC's volume without requiring in-house headcount at a cost the budget cannot sustain."}]},compare:{eyebrow:"Why operational support protects patient access",title:"Revenue is what keeps the doors open. <em>Protecting it is part of the mission.</em>",description:"An FQHC that loses revenue through billing gaps, unworked denials, or eligibility failures cannot provide the same level of access. Operational support that strengthens the revenue cycle directly protects the community health mission.",rows:[{label:"FQHC billing knowledge",hbs:"PPS and encounter-aware",other:"Generic billing approach"},{label:"Medicaid/Medicare follow-up",hbs:"Payer-specific protocols",other:"Standard follow-up process"},{label:"Denial management",hbs:"FQHC-aware — regulatory basis",other:"Standard appeal process"},{label:"Cost to the organization",hbs:"No in-house payroll overhead",other:"Full salary + benefits per hire"},{label:"Scalability with patient volume",hbs:"Adjusts without fixed cost",other:"Requires proportional hiring"},{label:"Mission alignment",hbs:"Revenue cycle as mission support",other:"Generic billing service"}]},finalCta:{eyebrow:"Start with an FQHC billing review",title:"If revenue is leaking through your billing workflow, <em>the community you serve is paying for it.</em>",description:"We start with a review of your current billing performance — identifying where eligibility failures, denials, and AR gaps are costing the organization revenue it has legitimately earned. No commitment required.",buttons:[{text:"Strengthen FQHC operations",variant:"light"},{text:"Talk to our community health team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},oe={title:"Healthcare Payer Operations Support",subtitle:"Scalable backend operations support for healthcare payers and health plans.",description:"Hired Billing Support provides scalable backend operations support for healthcare payers and health plans — claims queue management, authorization support, provider inquiry handling, enrollment processing, and operational throughput without proportional headcount increases.",hero:{eyebrow:"Healthcare Payers",title:"Payer operations break down when the queue<em> grows fasterthan the team processing it.</em>",subtitle:"Claims queues, authorization backlogs, provider inquiries, enrollment documentation — payer backend operations do not fail dramatically. They slow down incrementally, and the cost compounds across every stakeholder waiting.",description:"HBS acts as your backend processing engine — scalable, systematic, and adapted to your payer workflow."},sections:{pain:{eyebrow:"The payer operations reality",title:"The queue does not wait for your team to catch up.<br><em>It keeps growing while everything else also demands attention.</em>",description:"",monologue:["A payer operations team manages simultaneous queues — authorizations to review, claims to adjudicate, providers waiting on status updates, enrollment applications requiring document review, eligibility requests, and member inquiries — all on overlapping timelines, across multiple systems and portals, with staff who are already at or near capacity.","When volume increases — a new plan year, a regulatory change, a system migration, a sudden increase in out-of-network claims — the queue grows faster than the team. Work ages. SLAs slip. Providers begin calling for status updates because electronic status is unclear or delayed. Those calls generate more work. The backlog grows because the team is now managing the backlog and the incoming volume simultaneously.",'"Healthcare operations break down when the backend queue grows faster than the team that manages it. The solution is not always more permanent staff — it is scalable processing capacity that increases when volume increases and adapts when volume changes."',"Most payer organizations add full-time staff when volume peaks — and then carry the overhead when volume normalizes. A scalable backend operations model solves the volume problem without creating a permanent payroll commitment that outlives the need."],ledgerEyebrow:"Where operations break down",ledgerHeading:"The specific gaps<br><em>behind the processing pressure.</em>",ledger:[{num:"01",title:"Authorization queues build faster than they are cleared during peak periods",description:"Prior authorization volume does not stay constant. New plan year enrollments, seasonal utilization patterns, and regulatory changes create spikes that overwhelm the same team managing normal-volume processing. When queues exceed processing capacity, providers experience delays, patients experience access problems, and internal teams carry the resulting escalations."},{num:"02",title:"Provider inquiries increase when status visibility is delayed or unclear",description:"When providers cannot get clear status on claims, authorizations, or enrollment applications through electronic channels, they call. Those calls require staff time to research, respond, and document. When backend processing is slow, provider inquiry volume increases in direct proportion — creating a second workload on top of the already-delayed processing queue."},{num:"03",title:"Enrollment documentation requires indexing and review that falls behind during high-volume periods",description:"Enrollment applications arrive with supporting documentation that requires review, indexing, and routing before processing can begin. When this initial documentation work falls behind, the downstream enrollment workflow is delayed — providers cannot be enrolled on schedule, members cannot access coverage, and the enrollment team spends time managing exceptions instead of processing applications."},{num:"04",title:"Manual processes create handoff gaps when volume increases",description:"Payer backend operations often rely on manual processes at specific workflow steps — document routing, status updating, exception flagging, provider communication. When volume increases, manual processes create handoff delays that accumulate across the workflow, producing the aging items and SLA violations that leadership sees in reports without always knowing where the specific gap occurred."},{num:"05",title:"Leadership visibility into queue status and aging items is delayed or incomplete",description:"Operations leaders need current queue visibility — what is in backlog, what is approaching SLA deadlines, which team or process is the current bottleneck. When reporting is delayed or requires manual compilation, leadership manages to historical data rather than current status — making it difficult to direct resources proactively before SLA failures occur."},{num:"06",title:"Scaling in-house teams adds permanent cost to solve temporary volume problems",description:"Hiring additional permanent staff to manage peak-period volume creates a payroll commitment that continues after the peak passes. Training, onboarding, benefits, and management overhead compound the cost. Scalable backend support that increases with volume and adjusts when volume changes is structurally better suited to a business where processing demand fluctuates."}]},solution:{eyebrow:"The solution",title:"A scalable backend processing engine<br><em>that keeps pace with your queue — not your headcount.</em>",description:"Hired Billing Support provides backend operations support that adapts to your payer organization's volume, systems, and workflow structure — processing work, managing queues, supporting communication, and maintaining operational throughput so your internal team focuses on decisions, not volume.",process:[{num:"01",title:"Queue monitoring and backlog clearing",description:"Authorization queues, claims review queues, enrollment documentation queues, and provider inquiry queues monitored daily — backlog items identified, prioritized by SLA proximity, and processed systematically to prevent age accumulation."},{num:"02",title:"Authorization support queue management",description:"Authorization requests tracked, supporting documentation reviewed for completeness, missing information requested from providers, and queue status maintained so authorization decisions have the information they require without manual chasing."},{num:"03",title:"Provider inquiry handling and status communication",description:"Provider status inquiries researched and responded to through your established communication channels — reducing the inbound inquiry volume that arrives when electronic status is delayed and giving providers the information they need without burdening your clinical or operations staff."},{num:"04",title:"Enrollment documentation review and indexing",description:"Enrollment applications and supporting documentation reviewed for completeness, indexed, and routed into your enrollment workflow — so documentation gaps are identified at intake rather than discovered mid-process when they cause delays."},{num:"05",title:"Provider data maintenance support",description:"Provider directory updates, network status changes, and provider data maintenance tasks processed in your systems — keeping provider data current without requiring your core team to manage routine maintenance tasks alongside higher-judgment operational work."},{num:"06",title:"Operational reporting and queue visibility",description:"Regular queue status reports delivered to operations leadership — items in processing, items aging toward SLA thresholds, backlog trends, and throughput metrics so leadership sees current operational status, not historical summaries."}]},services:{eyebrow:"Services that fit healthcare payer operations",title:"Every backend processing function<br><em>a healthcare payer needs to manage at scale.</em>",description:"",items:[{num:"01",title:"Authorization Queue Support",description:"Prior authorization requests processed, documentation reviewed for completeness, missing information requested from providers, and queue status maintained on a defined schedule."},{num:"02",title:"Claims Processing Support",description:"Claims review queue support — documentation review, information requests, routing assistance, and claims status tracking so processing queues move without manual bottlenecks."},{num:"03",title:"Provider Inquiry Handling",description:"Provider status inquiries on claims, authorizations, and enrollment researched and responded to through your communication protocols — reducing inbound inquiry burden on core operations staff."},{num:"04",title:"Member Support Coordination",description:"Member benefit questions, eligibility confirmations, and coordination of benefits support managed through your member service workflows."},{num:"05",title:"Enrollment Documentation Processing",description:"Enrollment application documentation reviewed for completeness, indexed, and routed — gaps identified at intake so downstream enrollment processing is not delayed by missing documents discovered mid-workflow."},{num:"06",title:"Eligibility & Benefits Support",description:"Eligibility verification requests, benefits explanation support, and coordination of benefits clarification managed — keeping eligibility queues current and provider/member communication accurate."},{num:"07",title:"Provider Data Maintenance",description:"Provider directory updates, network participation changes, and provider information maintenance processed in your systems — keeping provider data current without diverting your team from higher-value work."},{num:"08",title:"Document Review & Indexing",description:"Supporting documentation reviewed, categorized, and indexed into your document management workflow — so processing queues have the information they need in the correct location and format."},{num:"09",title:"Backlog Cleanup Support",description:"Targeted backlog clearing for authorization, enrollment, claims, and documentation queues — rapid throughput increase during peak periods or after workflow disruptions without permanent headcount additions."},{num:"10",title:"Queue Monitoring & Operational Reporting",description:"Daily queue status monitoring with operational reports for leadership — current volume, SLA proximity, aging items, and throughput trends delivered on a defined schedule."}]},workflow:{eyebrow:"Backend processing workflow",title:"From queue intake to processed item.<br><em>Every step tracked, every handoff clean.</em>",description:"Payer backend operations require a processing model where every item has a current status, an assigned owner, and a timeline — so nothing ages silently while the team is managing other priorities.",items:[{num:"01",label:"Item Received",sublabel:"Queue entry"},{num:"02",label:"Doc Review",sublabel:"Complete check"},{num:"03",label:"Gap Follow-Up",sublabel:"Missing info"},{num:"04",label:"Indexed & Routed",sublabel:"Correct workflow"},{num:"05",label:"SLA Monitor",sublabel:"Aging alerts"},{num:"06",label:"Provider Comms",sublabel:"Status updates"},{num:"07",label:"Processed",sublabel:"Decision ready"},{num:"08",label:"Reported",sublabel:"Leadership view"}]},howWeWork:{eyebrow:"How HBS works with your payer operations team",title:"Inside your systems. Aligned with your protocols.<br><em>Not alongside them as an external vendor.</em>",description:"Payer operations support only works when it operates inside the same systems, portals, and communication channels your team uses — not through a separate interface that creates its own coordination overhead.",process:[{num:"01",title:"We learn your systems, workflows, and SOPs before we process anything",description:"Before managing a single queue item, we understand how your payer organization operates — which systems hold which information, which protocols govern which exceptions, and which communication standards apply to each stakeholder. We adapt to your process, not the other way around."},{num:"02",title:"We access your portals and systems directly",description:"Your claims system, authorization portal, enrollment platform, document management system — we work inside your tools so every item processed produces a native system record rather than a separate output your team has to reconcile."},{num:"03",title:"We follow your communication standards with every provider and member contact",description:"Every provider inquiry response and member communication follows your organization's communication standards — your protocols, your tone, your templates — so external stakeholders interact with a consistent organizational voice, not a vendor voice."},{num:"04",title:"We report to operations leadership on a defined schedule",description:"Queue status, backlog volume, SLA performance, and throughput metrics delivered to leadership on a schedule that allows proactive resource direction — before SLA violations, not after."},{num:"05",title:"We scale with your volume — up and down",description:"When volume increases — plan year, regulatory change, system migration — we scale processing capacity to match. When volume normalizes, the support adjusts. No permanent headcount commitment, no long onboarding cycle each time capacity needs to change."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation handles the volume.<br><em>People handle the judgment.</em>",machineLabel:"AI-assisted operations",humanLabel:"Human operations specialists",machine:["Queue volume monitoring and SLA threshold alerts","Documentation completeness checking at intake","Item aging tracking and escalation trigger generation","Provider inquiry status tracking and response routing","Enrollment documentation gap detection and follow-up scheduling","Operational throughput reporting and trend analysis"],human:["Exception review and judgment-based processing decisions","Provider communication requiring context and explanation","Authorization documentation review with clinical context","Enrollment exception handling and escalation management","SLA escalation coordination with internal operations teams","Leadership reporting with operational commentary and recommendations"],pullQuote:'"Scaling healthcare payer operations is not just about adding more people. It is about building a processing model where volume increases do not automatically mean SLA violations — where the capacity to process work adjusts as work arrives, with visibility that allows leadership to manage outcomes rather than just respond to them."'},results:{eyebrow:"What changes",title:"Payer operations that process at pace<br><em>with volume — not behind it.</em>",outcomes:[{icon:"◎",title:"Queue visibility before SLA violations",description:"Daily operational reporting gives leadership current queue status — items aging, items at risk, and throughput metrics — before SLA failures occur rather than after."},{icon:"↓",title:"Provider inquiry volume decreases",description:"When processing is timely and status communication is proactive, providers have fewer reasons to call for updates — reducing inbound inquiry volume that consumes operations staff time."},{icon:"⚡",title:"Peak-volume backlogs cleared without permanent hiring",description:"Processing capacity scales with volume spikes — backlogs addressed during plan year changes, regulatory shifts, and high-volume periods without adding permanent headcount."},{icon:"✓",title:"Documentation gaps caught at intake",description:"Enrollment and authorization documentation reviewed at intake — gaps identified before they stall downstream processing and create mid-workflow delays."},{icon:"$",title:"Scalable capacity without proportional payroll",description:"Backend processing capacity that increases when needed and adjusts when volume normalizes — no permanent hiring commitment that outlasts the operational need."},{icon:"→",title:"Internal team focused on decisions, not volume",description:"Your core operations team manages exceptions, decisions, and escalations — the processing volume is handled by HBS so your staff focuses on work that requires their specific expertise and authority."}]},compare:{eyebrow:"Why payer operations need scalable backend support",title:"Processing queues managed reactively<br><em>always produce SLA failures before they produce solutions.</em>",description:"Reactive queue management — adding staff after backlogs develop, responding to provider inquiries after they increase, reporting on SLA failures after they occur — is structurally behind the problem. Proactive processing capacity is structurally ahead of it.",rows:[{label:"Queue visibility",hbs:"Daily reporting — proactive",other:"Reactive — after SLA failures"},{label:"Peak volume response",hbs:"Scales without permanent hiring",other:"Requires new headcount cycle"},{label:"Provider inquiry management",hbs:"Proactive status communication",other:"Reactive — after inbound volume increases"},{label:"Documentation review at intake",hbs:"Gaps caught before processing",other:"Discovered mid-workflow"},{label:"Operations cost structure",hbs:"Adjustable — no fixed overhead",other:"Fixed payroll regardless of volume"},{label:"Internal team focus",hbs:"Decisions and exceptions",other:"Volume processing + decisions"}]},finalCta:{eyebrow:"Start with a payer operations review",title:"If your queues are aging, your SLAs are slipping, or your team is managing volume<br><em>instead of managing outcomes — the processing model needs to change.</em>",description:"We start with a review of your current payer operations — queue volumes, processing timelines, backlog status, and the specific functions where capacity is the constraint. No commitment required to see the picture.",buttons:[{text:"Scale payer backend operations",variant:"light"},{text:"Talk to our payer operations team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},se={title:"Labs & Imaging Center Operations Support",subtitle:"Medical order intake, authorization, eligibility, and workflow management for diagnostic services.",description:"Hired Billing Support helps labs and imaging centers manage medical order transmission, referral intake, eligibility verification, prior authorization, scheduling coordination, provider communication, billing handoffs, and order workflow control.",hero:{eyebrow:"Labs & Imaging Centers",title:"Every order gap is a revenue and <em> access risk.</em>",subtitle:"Incomplete orders, missing authorizations, unverified eligibility — billing problems in labs and imaging almost always start at intake, not at the billing stage where they get discovered.",description:"HBS manages the order-to-service workflow so every completed service has a clean billing handoff."},sections:{pain:{eyebrow:"The lab and imaging operations reality",title:"The order is the beginning, not the end.<br><em>Everything that happens between the order and the result determines whether the service gets paid.</em>",description:"",monologue:["An order arrives by fax, portal, or phone. It may have all the required information. It may not. The referring provider's office may have included the diagnosis code, the ICD-10 that supports medical necessity, the patient's current insurance, and the authorization number. Or it may have included the patient's name and a handwritten note. What happens next — how completely and systematically the order is processed — determines whether that patient gets scheduled, whether the service gets authorized, and whether the claim that follows gets paid.","Labs and imaging centers often operate with intake processes that work adequately under normal volume but start producing errors under higher volume or staffing pressure. Incomplete orders accumulate. Authorization requests sit waiting for documentation that nobody followed up to collect. Patients arrive for scheduled services without confirmed coverage. Billing teams receive handoff records that are missing the authorization number or the diagnosis code that supports the claim.",'"Every delayed order creates a second problem — a follow-up call to the referring office, a patient who cannot be scheduled, a service that was delivered without confirmed authorization, or a claim that arrives at billing with a documentation gap that was created three steps earlier."',"The revenue impact of poor order intake is not visible in the intake function. It appears in denial rates, in authorization failures, and in billing exceptions — weeks after the gap that created them. By then, the order that started the problem is long finished and the connection is no longer obvious."],ledgerEyebrow:"Where the workflow breaks",ledgerHeading:"The specific gaps<br><em>between order received and service delivered.</em>",ledger:[{num:"01",title:"Orders arrive incomplete and the follow-up process is inconsistent",description:"Referring providers submit orders with missing diagnosis codes, outdated insurance information, or insufficient clinical documentation for authorization. Without a systematic follow-up process, these incomplete orders sit — sometimes scheduled without the required information, sometimes delayed without the provider's office being informed — creating problems at every downstream step."},{num:"02",title:"Authorization delays prevent scheduling and create patient access problems",description:"Many imaging and diagnostic services require prior authorization before the patient can be scheduled. When authorization management is reactive — submitted after the order arrives rather than tracked proactively — authorization delays build a backlog of unscheduled orders while the patient waits and the referring provider's office begins calling for updates."},{num:"03",title:"Eligibility is not confirmed before the appointment",description:"A patient who arrives for a diagnostic service without confirmed insurance coverage creates a problem that cannot be resolved in the moment. When eligibility verification happens at check-in rather than at scheduling, the service is already in progress before the coverage gap is discovered — and the billing impact follows regardless of what happens clinically."},{num:"04",title:"Provider offices call repeatedly for order status and results updates",description:"Referring provider offices contact the lab or imaging center for order status, authorization updates, scheduling confirmations, and results availability. When this communication is not managed proactively — with status updates sent before offices call — the inbound volume consumes staff time that should be managing the order workflow."},{num:"05",title:"Documentation gaps at intake create billing denials weeks later",description:"An order processed without confirmed authorization, a claim submitted without the medical necessity documentation, or a service billed without the correct diagnosis code — each originates in an intake or authorization step that was not completed correctly. The billing team discovers the gap when the denial arrives, not when the order was received."},{num:"06",title:"Front desk and intake teams manage too many simultaneous workflow demands",description:"Labs and imaging intake teams handle phones, walk-in scheduling, order review, insurance verification, authorization requests, provider communication, and patient coordination simultaneously — with the same staff, across the same working hours. When volume increases, the tasks with the most immediate urgency get attention, and the systematic documentation work gets deferred."}]},solution:{eyebrow:"The solution",title:"Order-to-service workflow management<br><em>that protects patient access and downstream revenue simultaneously.</em>",description:"Hired Billing Support manages the full order intake and coordination workflow — reviewing orders at receipt, following up on missing documentation, managing authorization requests, confirming eligibility before scheduling, coordinating provider communication, and handing off complete billing records — so every service that is delivered has the documentation it needs to be paid.",process:[{num:"01",title:"Order intake review at receipt",description:"Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance information, clinical documentation, and ordering provider information checked against the requirements for authorization and billing before the order moves forward in the workflow."},{num:"02",title:"Missing documentation follow-up with referring providers",description:"Incomplete orders followed up with the referring provider's office on a defined schedule — specific documentation requirements communicated, follow-up tracked, and order held for scheduling until the required information is received rather than proceeding with gaps that will create problems downstream."},{num:"03",title:"Prior authorization management",description:"Authorization requests submitted to payers immediately after order completeness is confirmed — tracking, payer follow-up, and status communication managed so authorizations are obtained before scheduling rather than after the patient has already been seen."},{num:"04",title:"Eligibility verification before scheduling",description:"Patient insurance verified against the specific service type before the appointment is confirmed — coverage limitations, cost-sharing amounts, and authorization requirements checked so the scheduling process produces appointments with confirmed coverage."},{num:"05",title:"Proactive provider office communication",description:"Authorization approvals, scheduling confirmations, and results availability communicated to referring provider offices proactively — before they call for updates — reducing inbound inquiry volume and maintaining the provider relationship quality that drives referral volume."},{num:"06",title:"Clean billing handoff",description:"Completed service records handed off to billing with all required documentation — authorization number, confirmed eligibility, correct diagnosis codes, and medical necessity documentation — so billing processes the claim without the documentation gaps that produce denials."}]},services:{eyebrow:"Services that fit labs and imaging centers",title:"Every step between order receipt<br><em>and clean billing handoff.</em>",description:"",items:[{num:"01",title:"Medical Order Intake Review",description:"Every incoming order reviewed for completeness at receipt — diagnosis codes, insurance, clinical documentation, and ordering provider information checked before the order advances in the workflow."},{num:"02",title:"Order Transmission Coordination",description:"Orders transmitted to the correct internal workflow with complete information — routing, status tracking, and queue management so orders do not age without a current status."},{num:"03",title:"Referral Documentation Follow-Up",description:"Incomplete referrals followed up with referring offices on a defined schedule — specific requirements communicated and tracked until complete documentation is received."},{num:"04",title:"Eligibility & Benefits Verification",description:"Patient coverage verified before scheduling — service-specific benefits, cost-sharing, authorization requirements, and coverage limitations confirmed before the appointment is confirmed."},{num:"05",title:"Prior Authorization Support",description:"Authorization requests submitted promptly, tracked through payer processing, and followed up so authorizations are confirmed before service dates rather than retroactively requested after."},{num:"06",title:"Patient Scheduling Coordination",description:"Scheduling supported once authorization and eligibility are confirmed — appointment coordination with confirmed coverage and complete order documentation."},{num:"07",title:"Provider Office Communication",description:"Proactive status communication to referring offices — authorization approvals, scheduling confirmations, and results availability communicated before offices call for updates."},{num:"08",title:"Status Tracking & Reporting",description:"Order pipeline tracked from receipt through completion — order volume, authorization status, scheduling confirmation, and incomplete order counts reported to management on a defined schedule."},{num:"09",title:"Billing Handoff Support",description:"Completed service records assembled with all required billing documentation — authorization number, eligibility confirmation, diagnosis codes, and medical necessity documentation — before billing handoff."},{num:"10",title:"Denial & AR Coordination Support",description:"Denial and AR issues traced back to the intake or authorization step that created them — workflow corrections implemented so the same documentation gaps stop producing the same billing failures."}]},workflow:{eyebrow:"Order-to-service workflow",title:"From order received to clean billing handoff.<br><em>Every step documented, every gap addressed before it compounds.</em>",description:"The order intake process is where most lab and imaging billing failures begin. Managing it well — systematically, with documentation requirements enforced at each step — protects both patient access and downstream revenue.",items:[{num:"01",label:"Order Received",sublabel:"Fax · portal · phone"},{num:"02",label:"Intake Review",sublabel:"Completeness check"},{num:"03",label:"Doc Follow-Up",sublabel:"Provider office"},{num:"04",label:"Eligibility",sublabel:"Before scheduling"},{num:"05",label:"Auth Submitted",sublabel:"Payer-specific"},{num:"06",label:"Auth Confirmed",sublabel:"Before appt."},{num:"07",label:"Scheduled",sublabel:"Complete record"},{num:"08",label:"Billing Handoff",sublabel:"Clean record"}]},howWeWork:{eyebrow:"How HBS works with your intake and billing teams",title:"Inside your workflow.<br><em>Not creating a parallel process your team also has to manage.</em>",description:"Order coordination support that requires your intake team to interact with a separate system, process, or communication channel creates its own overhead. We work in your tools, follow your protocols, and coordinate directly with the teams and provider offices your workflow already involves.",process:[{num:"01",title:"We learn your intake workflow and documentation requirements",description:"Before processing a single order, we understand how your facility receives orders, what documentation each service type requires, which payers have specific authorization rules, and how your scheduling and billing teams receive handoffs from intake. We build on your process, not over it."},{num:"02",title:"We access your order management, scheduling, and eligibility systems directly",description:"Your systems, your portals, your documentation management — we work inside them so every action produces a native record that your team can see, audit, and build on."},{num:"03",title:"We communicate with referring provider offices in your voice",description:"Every provider office follow-up — missing documentation requests, scheduling confirmations, status updates — follows your communication standards so provider relationships experience a consistent, professional interaction with your facility rather than a vendor interaction."},{num:"04",title:"We hand off clean records to your billing team",description:"Completed service records assembled with all required billing documentation before handoff — so your billing team processes the claim rather than chasing documentation that should have been collected during intake."},{num:"05",title:"We report order pipeline status to management",description:"Order volume, authorization status, incomplete order counts, and billing handoff quality reported regularly — giving management current operational visibility without requiring manual compilation from multiple systems."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation handles the volume.<br><em>People handle the judgment.</em>",machineLabel:"AI-assisted workflows",humanLabel:"Human operations specialists",machine:["Order completeness checking against documentation requirements","Authorization request tracking and payer follow-up scheduling","Eligibility verification scheduling before appointment dates","Incomplete order queue monitoring and follow-up trigger generation","Order pipeline status tracking and management reporting","Billing handoff completeness verification before record transfer"],human:["Missing documentation follow-up with referring provider offices","Authorization requests with medical necessity documentation","Payer escalations when authorization decisions are delayed","Provider office communication for status, scheduling, and results","Denial root cause tracing to intake or authorization workflow steps","Management reporting with operational commentary and recommendations"],pullQuote:'"Every lab and imaging denial that arrives from billing can be traced to a step in intake or authorization where required information was missing, not followed up on, or not confirmed before the service proceeded. The billing team sees the problem last. The intake team created the opportunity to prevent it first."'},results:{eyebrow:"What changes",title:"Orders that arrive complete.<br><em>Services that are authorized. Claims that are paid.</em>",outcomes:[{icon:"◎",title:"Incomplete orders caught at intake — not at billing",description:"Documentation gaps identified at order receipt and followed up systematically — so billing receives complete records rather than discovering intake failures weeks later through denials."},{icon:"✓",title:"Authorizations confirmed before scheduling",description:"Authorization management starts at order receipt — so services are scheduled with confirmed coverage rather than retroactively discovering that authorization was never obtained."},{icon:"$",title:"Denial rates on auth and documentation denials decline",description:"Authorization failures and documentation denials traced back to intake gaps — and intake workflow corrections produce measurable billing improvement over time."},{icon:"↓",title:"Provider office inbound inquiry volume decreases",description:"Proactive status communication to referring offices — before they call — reduces the inbound inquiry volume that consumes intake staff time."},{icon:"→",title:"Billing team receives clean handoff records",description:"Every completed service record includes authorization number, eligibility confirmation, diagnosis codes, and medical necessity documentation — billing processes the claim rather than managing the documentation gap."},{icon:"⚡",title:"Management has current order pipeline visibility",description:"Order volume, authorization status, incomplete orders, and billing handoff quality reported regularly — operational management based on current data rather than discovered problems."}]},compare:{eyebrow:"Why order accuracy affects revenue",title:"The billing failure begins at intake.<br><em>The billing team just discovers it last.</em>",description:"Authorization denials, medical necessity failures, and missing documentation denials in labs and imaging centers almost always originate in the order intake or authorization workflow. Managing intake correctly is not an administrative function — it is a revenue protection function.",rows:[{label:"Order completeness check",hbs:"At intake — before workflow advances",other:"Discovered at billing through denial"},{label:"Authorization management",hbs:"Proactive — before scheduling",other:"Reactive — after service delivery"},{label:"Eligibility verification timing",hbs:"Before appointment confirmation",other:"At check-in — too late to resolve"},{label:"Provider office communication",hbs:"Proactive — before they call",other:"Reactive — in response to inbound calls"},{label:"Billing handoff record quality",hbs:"Complete documentation included",other:"Gaps discovered during billing"},{label:"Denial root cause management",hbs:"Traced to intake — workflow corrected",other:"Managed at the billing level only"}]},finalCta:{eyebrow:"Start with an order workflow review",title:"If your facility is seeing authorization denials, billing documentation gaps, or provider inquiry overload,<br><em>the root cause is almost always in the order intake process.</em>",description:"We start with a review of your current order workflow — intake documentation requirements, authorization process, eligibility timing, and billing handoff quality — and show you where gaps are creating downstream revenue impact. No commitment required.",buttons:[{text:"Strengthen order workflow",variant:"light"},{text:"Talk to our lab & imaging team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · No long-term contract required"}}},le={title:"Marketplace Partners",subtitle:"Partnership execution support for healthcare marketplaces and platforms",description:"Hired Billing Support acts as the operational engine behind your healthcare partnerships — delivering billing, RCM, credentialing, payer enrollment, coding, compliance, AR management, and practice operations support to your clients while protecting your brand and the relationship you built.",hero:{eyebrow:"Marketplace Partners",title:"You create the opportunity. We deliver  <em>the operations.</em>",subtitle:"Marketplace partners and platforms generate demand well. The gap appears after the client says yes — when the actual billing, credentialing, and operations work has to happen and there is no reliable backend execution layer behind it.",description:"HBS acts as the operational engine behind your healthcare partnerships."},sections:{pain:{eyebrow:"The healthcare partnership execution gap",title:"Generating healthcare demand is one skill.<br><em>Delivering the operations behind it is a completely different capability.</em>",description:"",ledger:[{num:"01",title:"Healthcare clients need execution, not just introductions",description:"A referral to a healthcare billing service is valuable only if that service actually delivers. Providers who have been burned by prior billing vendors are skeptical — they need to see operational execution from week one, not a sales pitch and a promise. Partners who cannot back their referrals with proven operational capacity lose the client and the relationship."},{num:"02",title:"Building an internal healthcare operations team is expensive and slow",description:"Hiring billing managers, credentialing coordinators, coding specialists, payer enrollment experts, and compliance staff — training them, building the processes, and maintaining the team as healthcare regulations and payer rules change — is a full-time business in itself. Most marketplace partners and platforms are not positioned to build that capability internally."},{num:"03",title:"Client onboarding after the sale is the highest-risk moment",description:"The first 30 to 60 days after a healthcare client is onboarded determine whether the relationship continues. If billing setup is delayed, credentialing is not started on time, or payer enrollment falls behind, the client's confidence erodes before the service has had a chance to perform. A structured, reliable onboarding process protects the relationship when it is most vulnerable."},{num:"04",title:"Partner reputation is directly tied to vendor performance",description:"When a marketplace partner refers a client to a billing vendor and the billing vendor underperforms, the partner bears the reputational cost. Clients do not distinguish between the introduction and the execution — they remember who recommended the service and whether that recommendation was worth making. Partners need backend execution they can stand behind without qualification."},{num:"05",title:"Growth creates delivery risk when fulfillment capacity is not scalable",description:"A successful marketplace or platform that generates 20 new healthcare clients in a quarter needs backend operations capacity that scales to support all 20 — not just the first five. When growth outpaces delivery capacity, the newest clients receive the least attention, churn rates increase, and the growth that should strengthen the business begins to damage it instead."}],monologue:["Healthcare marketplaces and partner organizations are built on relationships, trust, and the promise of better outcomes for the providers and practices they serve. That promise holds when the operational delivery behind it is strong. It breaks down — quietly at first, then loudly — when the client is referred or onboarded and then discovers that the actual billing, credentialing, payer enrollment, and AR management support does not match what was described in the sales conversation.","Most marketplace partners do not have a full internal team of billing specialists, credentialing coordinators, payer enrollment experts, coding auditors, and operations managers. They are marketplaces, platforms, or agencies — not healthcare operations companies. But their healthcare clients need all of those functions delivered competently, consistently, and compliantly.",`"Partnership breaks down when the client says yes but the operational support behind the promise is not strong enough to deliver what was sold. The partner's reputation is the casualty — not just the client relationship."`,"The solution is not building an internal healthcare operations department. The solution is a backend operations partner who works under your brand, delivers to your clients, and makes the operational execution strong enough that your clients stay — and refer others."],ledgerEyebrow:"Where marketplace partnerships lose clients",ledgerHeading:"The specific gaps<br><em>that damage partner reputation.</em>"},solution:{eyebrow:"The solution",title:"A backend healthcare operations partner<br><em>that makes your referrals and partnerships deliverable.</em>",description:"Hired Billing Support provides the full operational execution layer behind your healthcare marketplace or partner business — billing, RCM, credentialing, payer enrollment, coding, compliance, AR management, and practice operations delivered to your clients while you maintain the relationship.",process:[{num:"01",title:"Structured client onboarding after referral or sale",description:"New partner clients onboarded on a defined timeline — EHR access obtained, billing workflow mapped, credentialing initiated, payer enrollment started, and initial reporting structure established in the first two to three weeks — so client confidence builds from the first interaction, not after weeks of setup delays."},{num:"02",title:"Full-spectrum healthcare operations delivered to your clients",description:"Billing, RCM, credentialing, payer enrollment, AR management, denial management, coding support, compliance, and practice operations — the complete operational support your healthcare clients need, delivered by a team that specializes in healthcare operations rather than general outsourcing."},{num:"03",title:"White-label or referral partner arrangements available",description:"We can work under your brand, as a referred vendor with your endorsement, or as a quietly embedded backend team — adapting to the partnership structure that fits your business model and the relationship you have with your clients."},{num:"04",title:"Regular reporting to you on client performance",description:"Monthly or quarterly partner reporting on client billing performance, credentialing status, AR aging, and operational KPIs — so you maintain visibility into how your clients are performing and can have informed conversations without asking your clients for status updates."},{num:"05",title:"Scalable capacity as your partner portfolio grows",description:"When you add new healthcare clients to the partnership, the operational capacity scales to support them — no hiring cycle, no training delay, no quality degradation for your existing clients while new ones are being onboarded."},{num:"06",title:"Client retention as a shared outcome",description:"We treat your clients as long-term relationships, not short-term projects. Client retention is the metric that demonstrates whether the operational execution is actually working — and it is the outcome that strengthens the partnership between HBS and the marketplace or platform we support."}]},services:{eyebrow:"Services your healthcare clients receive",title:"The full operational support stack<br><em>your healthcare clients need — delivered behind your partnership.</em>",description:"",items:[{num:"01",title:"Medical Billing & RCM",description:"End-to-end revenue cycle management — charge entry, claim submission, payer follow-up, and payment posting — for every partner client."},{num:"02",title:"AR Management & Recovery",description:"Aging AR worked systematically — payer follow-up, appeal submission, and AR recovery that protects the client revenue your partnership is meant to improve."},{num:"03",title:"Denial Management",description:"Denials reviewed, corrected, appealed, and root-cause addressed so denial rates decline over time rather than remaining as background noise in the revenue cycle."},{num:"04",title:"Provider Credentialing",description:"Full credentialing workflow — document collection, CAQH setup, payer application management, and status tracking — from new provider onboarding through ongoing recredentialing."},{num:"05",title:"Payer Enrollment",description:"Commercial, Medicare, and Medicaid enrollment applications submitted, tracked, and followed up — providers reaching billing-active status on schedule."},{num:"06",title:"Medical Coding Support",description:"ICD-10, CPT, and modifier accuracy reviewed — coding errors caught pre-submission so they do not become denials that damage the client's revenue cycle."},{num:"07",title:"Compliance & Reporting",description:"Compliance-aware billing operations and reporting support — clients operating within regulatory standards with the documentation to demonstrate it."},{num:"08",title:"Practice Operations Support",description:"Prior authorization, eligibility verification, scheduling coordination, and daily administrative workflow support — the operational depth that keeps practices running between billing cycles."},{num:"09",title:"Practice Launch Support",description:"For partners who serve new practice clients — coordinating the full launch sequence: entity setup, NPI, CAQH, payer enrollment, billing system configuration, and workflow documentation before the first patient visit."},{num:"10",title:"Client Onboarding Coordination",description:"Structured onboarding for every new partner referral — systems access, workflow mapping, team introduction, and initial reporting established in the first two to three weeks."}]},workflow:{eyebrow:"Partnership delivery workflow",title:"From referral or sale to actively supported client.<br><em>Every handoff structured, every step accountable.</em>",description:"The moment a healthcare client is referred or onboarded is when the partnership is most at risk. A structured delivery workflow ensures that the client's first operational experience matches the relationship that created it.",items:[{num:"01",label:"Client Referred",sublabel:"Partner intro"},{num:"02",label:"Intake Call",sublabel:"Needs assessed"},{num:"03",label:"Onboarding",sublabel:"Systems · SOPs"},{num:"04",label:"Credentialing",sublabel:"Started day one"},{num:"05",label:"Billing Live",sublabel:"Claims submitting"},{num:"06",label:"AR Managed",sublabel:"Ongoing follow-up"},{num:"07",label:"Partner Report",sublabel:"Monthly KPIs"},{num:"08",label:"Client Retained",sublabel:"Relationship secured"}]},howWeWork:{eyebrow:"How HBS supports your healthcare clients",title:"Behind your brand. Inside their workflows.<br><em>Delivering what the partnership promised.</em>",description:"The most effective partnership arrangements are the ones the client does not have to think about — the operational support works, the results come, and the partner who made the introduction continues to look like the right call.",process:[{num:"01",title:"We structure the handoff with you before the first client",description:"Before onboarding your first referred client, we understand your partnership model — how you position the service, what your clients expect, what information you want reported back, and how you want the relationship managed. We build the delivery model around your business, not a generic template."},{num:"02",title:"We onboard each client with a defined timeline and deliverables",description:"New partner clients onboarded in two to three weeks — EHR access, billing workflow mapping, credentialing initiation, payer enrollment, and initial reporting established in a structured sequence so clients feel operational progress from the first interaction."},{num:"03",title:"We work inside the client's systems under your arrangement",description:"Clients' EHR, billing software, and payer portals — we work inside them so the operational work is embedded in the client's actual workflow, not running parallel to it through an external interface."},{num:"04",title:"We report to you on partner client performance regularly",description:"Monthly or quarterly performance reports on each partner client — billing metrics, credentialing status, AR aging, and operational KPIs — so you can maintain informed conversations with your clients and identify any account that needs attention before the client initiates that conversation."},{num:"05",title:"We scale as your partner portfolio grows",description:"Each new referral onboarded into the same structured model — no degradation in quality for existing clients, no hiring delay for new ones. Your portfolio growth becomes operationally manageable rather than a delivery risk."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation handles the scale.<br><em>Specialists handle the execution.</em>",machineLabel:"AI-assisted partner support",humanLabel:"Human operations specialists",machine:["Client billing queue monitoring and performance tracking","Credentialing status tracking across all partner clients","AR aging alerts and follow-up scheduling per client","Denial pattern categorization and root cause tracking","Onboarding task checklist monitoring per new client","Partner KPI report generation and delivery scheduling"],human:["Client relationship management and communication","Payer calls, denial appeals, and authorization escalations","Credentialing applications and payer enrollment management","Client onboarding coordination and first-30-day stabilization","Partner reporting with operational commentary and recommendations","Compliance-sensitive billing decisions and coding judgment"],pullQuote:'"The partners who scale healthcare client portfolios successfully are not the ones who do the operational work themselves. They are the ones who found an operations partner they trust enough to refer clients to without worrying about what happens after the introduction."'},results:{eyebrow:"What changes for your partnership",title:"Healthcare partnerships that deliver<br><em>what they promise — consistently, at scale.</em>",outcomes:[{icon:"◎",title:"Client retention improves",description:"Clients who receive strong operational support stay — and refer. Client retention is the clearest signal that the operational execution behind the partnership is working."},{icon:"⚡",title:"New clients onboarded on a defined schedule",description:"Structured onboarding means every new referral goes through the same reliable sequence — visible progress in the first two to three weeks rather than a slow start that damages confidence."},{icon:"$",title:"No internal healthcare operations team required",description:"Full billing, RCM, credentialing, payer enrollment, coding, and compliance support delivered without building an internal department — the operational capability exists without the payroll complexity."},{icon:"✓",title:"Partner reputation protected by execution quality",description:"Every client referral backed by operational delivery that reflects well on the partnership — your introduction is validated by results, not just by the relationship that created it."},{icon:"→",title:"Portfolio scales without proportional risk",description:"Growth in partner client volume adds capacity to a structured delivery model — not pressure on an already-strained team that produces quality degradation across all clients."},{icon:"↓",title:"Partner reporting without manual data compilation",description:"Regular performance reports delivered to you on client portfolio metrics — informed conversations with clients without requiring you to chase status information from the backend team."}]},compare:{eyebrow:"Why healthcare partnerships need execution capacity",title:"A healthcare partnership without operational depth<br><em>is a referral arrangement waiting to underdeliver.</em>",description:"The difference between a healthcare marketplace that grows and one that churns is almost always operational execution quality — not demand generation. The partners who retain and expand their healthcare client portfolios are the ones whose operational delivery is strong enough to justify client loyalty.",rows:[{label:"Post-sale client delivery",hbs:"Structured onboarding — 2–3 weeks",other:"Ad hoc — timeline uncertain"},{label:"Operational coverage",hbs:"Full-spectrum: billing, cred, AR, coding",other:"Partial — gaps in specialist functions"},{label:"Client retention risk",hbs:"Reduced through consistent execution",other:"High when delivery quality varies"},{label:"Partner reporting",hbs:"Monthly KPIs delivered automatically",other:"Requires manual compilation"},{label:"Scaling new clients",hbs:"Consistent model — same quality",other:"Quality degrades under volume"},{label:"Internal headcount required",hbs:"None — HBS provides the team",other:"Hiring for each new capability"}]},finalCta:{eyebrow:"Start the partnership conversation",title:"If you have healthcare clients who need operational support<br><em>and you need a backend team you can actually stand behind,</em>",description:"We start with a partnership conversation — your client profile, your referral or white-label arrangement, and what operational delivery would look like behind your partnership. No commitment required to explore the model.",buttons:[{text:"Partner with HBS",variant:"light"},{text:"Talk to our partnership team",variant:"ghost"}],trustLine:"HIPAA · BAA available · White-label & referral arrangements welcome · No long-term contract required"}}},ce={title:"Developer Partners",subtitle:"Healthcare workflow integration and operational context for healthcare software teams",description:"Hired Billing Support partners with healthcare software developers, EHR vendors, billing platforms, and healthtech teams to bridge the gap between technical systems and real-world practice operations — providing workflow intelligence, implementation support, and operational context that makes healthcare products work in practice.",hero:{eyebrow:"Developers Partners  ",title:"Healthcare software works in demos. It has to work in <em>the actual billing workflow too.</em>",subtitle:"Technical execution and operational execution are different disciplines. HBS bridges the gap between what healthcare technology is designed to do and how healthcare operations actually work in practice.",description:"Partner with HBS to build products that work in the field, not just in the sandbox."},sections:{pain:{eyebrow:"The healthcare technology execution gap",title:"Healthcare software that does not match the actual workflow <em>creates more work for the people it was built to help.</em>",description:"",monologue:["A billing automation platform is built to streamline claim submission. In a live healthcare practice, claim submission depends on eligibility verification that happened two days earlier, prior authorization documentation that lives in a separate portal, a coding review that has payer-specific rules no two practices apply the same way, and a charge entry process that feeds from an EHR that was configured by a different vendor six years ago. The automation works perfectly in the test environment. In production, it works 70 percent of the time — and the other 30 percent creates exceptions that take longer to resolve than the manual process the software was meant to replace.","Healthcare software fails operationally not because of bad engineering. It fails because healthcare operations are contextually complex in ways that are difficult to fully understand without working inside them. Payer rules that change quarterly. Authorization processes that vary by payer and specialty. Documentation requirements that differ by visit type. Denial reasons that require human judgment to interpret correctly.",'"Automation only works when the underlying process is clearly understood. And the underlying process in healthcare — the real one, as it operates inside a specific specialty, with specific payers, in a specific EHR — is almost always more complex than the documented version that technical specs are built from."',"This is not a technology problem. It is an operational context problem. And the solution is a partnership with a team that works inside healthcare operations every day and can translate that operational reality into the workflow intelligence, implementation guidance, and product feedback that helps technical teams build products that work in the field."],ledgerEyebrow:"Where healthcare software fails in production",ledgerHeading:"The operational gaps that create product friction <em>between what the software does and what the practice needs.</em>",ledger:[{num:"01",title:"EHR and billing workflows are messier in production than in documentation",description:"Healthcare APIs and integrations are designed against documented workflows. Real healthcare workflows have exceptions, workarounds, payer-specific variations, and practice-specific configurations that documented workflows do not capture. Products built against the documented version create friction in the actual-use version — and that friction lands on the clinical and administrative staff who are already at capacity."},{num:"02",title:"Automation built on incorrect process assumptions creates more work, not less",description:"A claim submission automation that does not account for payer-specific prior authorization documentation requirements will automate the failure alongside the success — creating a denial queue alongside the successfully processed claims. Understanding the process well enough to automate it correctly requires operational context that engineering teams do not always have and cannot always obtain from documentation alone."},{num:"03",title:"Implementation support for healthcare products requires both technical and operational knowledge",description:"Onboarding a healthcare practice onto a new billing platform or EHR requires technical configuration and operational workflow alignment simultaneously. When implementation teams are technically competent but operationally unfamiliar with healthcare billing — payer enrollment status, existing credentialing setup, AR aging, denial history — the technical implementation works and the operational disruption creates a difficult client relationship."},{num:"04",title:"Product feedback from technical users misses the operational reality",description:"Technical users can describe what the software does and does not do. They cannot always describe whether what it does aligns with what healthcare operations actually require. Operational partners who work inside healthcare workflows daily can provide the practice-side feedback that shapes products from a user experience perspective, not just a technical integration perspective."},{num:"05",title:"Healthcare clients need operational support during and after technical implementation",description:"A practice that adopts a new billing platform still needs its claims to submit correctly, its AR to be followed up on, and its denials to be managed — during the transition, when the previous workflow has been disrupted and the new workflow is not yet running at full capacity. Implementation support that covers only the technical migration leaves clients operationally exposed at the highest-risk moment of the transition."}]},solution:{eyebrow:"The solution",title:"The healthcare operations layer <em>that bridges your technical system and real-world practice workflow.</em>",description:"Hired Billing Support partners with healthcare technology teams to provide the operational context, workflow intelligence, implementation support, and client operations coverage that makes healthcare software products work in the field — not just in the integration environment.",process:[{num:"01",title:"Healthcare workflow consulting and process mapping",description:"Revenue cycle workflows, billing process maps, authorization workflows, denial taxonomies, payer-specific rule libraries, and EHR integration touchpoint documentation — operational context built from working inside healthcare practices, not from reading specifications."},{num:"02",title:"Operational implementation support",description:"Technical implementation paired with operational workflow alignment — credential verification, billing system configuration review, payer enrollment status assessment, and workflow mapping that ensures the technical deployment matches the practice's actual operational requirements."},{num:"03",title:"Healthcare client operations support during transitions",description:"When practices are transitioning to new platforms or onboarding new systems, operational support — billing continuity, AR management, denial handling — maintained through the transition so clients do not experience operational disruption alongside technical change."},{num:"04",title:"Product workflow feedback from operational experience",description:"Real-world operational feedback on how your product performs inside healthcare workflows — where the friction is, where the automation assumptions do not match practice behavior, and where workflow redesign would reduce user effort rather than increasing it."},{num:"05",title:"Automation opportunity identification",description:"Healthcare operations workflows assessed for genuine automation opportunities — steps where the process is repetitive, rule-based, and clearly defined enough to automate without operational context loss — versus steps where human judgment is irreplaceable and automation creates more exceptions than it eliminates."},{num:"06",title:"Ongoing operational partnership as your product evolves",description:"As your product roadmap develops, an operational partner who understands the healthcare workflow reality ensures that product decisions are tested against real-world operational constraints — not just technical feasibility."}]},services:{eyebrow:"Developer partnership services",title:"Operational context, implementation support, <em>and workflow intelligence for healthcare technology teams.</em>",description:"",items:[{num:"01",title:"RCM Process Mapping",description:"End-to-end revenue cycle workflow documented with decision points, payer-specific variations, and exception paths — the operational architecture behind billing software integration.",category:"WORKFLOW"},{num:"02",title:"Billing Workflow Architecture Review",description:"Technical billing workflow reviewed against actual payer requirements, coding standards, and documentation rules — identifying gaps between the system's assumptions and operational reality.",category:"TECHNICAL"},{num:"03",title:"Operational Implementation Support",description:"Healthcare client onboarding supported from the operational side — practice billing assessment, workflow mapping, and operational continuity maintained through technical transitions.",category:"IMPLEMENTATION"},{num:"04",title:"Payer Rule Library",description:"Payer-specific rules, documentation requirements, authorization criteria, and billing variations documented from operational experience — the context that technical specifications rarely capture completely.",category:"DATA"},{num:"05",title:"EHR Workflow Integration Support",description:"EHR-to-billing workflow touchpoints mapped and tested against operational requirements — identifying integration friction before it becomes client-facing disruption.",category:"TECHNICAL"},{num:"06",title:"Denial Taxonomy & Root Cause Mapping",description:"Denial reason code taxonomy built from operational experience — mapping technical denial codes to the specific process failures that produce them, enabling automation that targets root causes, not just symptoms.",category:"PROCESS"},{num:"07",title:"Authorization Workflow Modeling",description:"Prior authorization workflows documented by payer and specialty — the process maps, criteria libraries, and exception paths that authorization automation needs to handle correctly in production.",category:"WORKFLOW"},{num:"08",title:"Automation Opportunity Assessment",description:"Healthcare workflows assessed for genuine automation opportunities — where automation reduces friction versus where it creates exceptions that require more human intervention than the manual process did.",category:"INTELLIGENCE"},{num:"09",title:"Product Workflow Feedback",description:"Operational experience with your product in real healthcare environments translated into structured product feedback — friction points, workflow misalignments, and improvement opportunities from the practice operations perspective.",category:"FEEDBACK"},{num:"10",title:"Healthcare Operations QA",description:"Operational quality assurance for healthcare product releases — testing against real workflow scenarios, payer-specific edge cases, and documentation requirements that purely technical QA processes do not always cover.",category:"QA"}]},workflow:{eyebrow:"Integration and workflow support model",title:"From technical specification to operational reality. <em>The context that closes the gap between them.</em>",description:"Healthcare software built without operational context is built for a workflow that exists in documentation but not always in practice. Closing that gap requires operational partnership, not just technical specification.",items:[{num:"01",label:"Technical Spec",sublabel:"API · integration"},{num:"02",label:"Ops Context",sublabel:"Workflow mapping"},{num:"03",label:"Gap Analysis",sublabel:"Spec vs. practice"},{num:"04",label:"Implementation",sublabel:"Ops + technical"},{num:"05",label:"Client Support",sublabel:"Ops continuity"},{num:"06",label:"Product Feedback",sublabel:"Real-world QA"},{num:"07",label:"Automation ID",sublabel:"Real opportunities"},{num:"08",label:"Product Works",sublabel:"In production"}],codeBlock:[{label:"payer_rules",value:"200+ payer-specific variations documented"},{label:"denial_taxonomy",value:"38 root causes mapped to process steps"},{label:"auth_workflows",value:"12 steps per payer — not always documented"},{label:"ehr_integration_points",value:"24 touchpoints — many undocumented"}]},howWeWork:{eyebrow:"How HBS bridges technical systems and healthcare operations",title:"Not a consultant who reviews documentation. <em>An operations team that works inside the actual workflow.</em>",description:"The operational context that healthcare software needs comes from working inside healthcare practices — managing billing, working payer portals, handling denials, coordinating authorizations — not from reading API documentation.",process:[{num:"01",title:"We provide operational context from working inside healthcare daily",description:"Our team manages billing, credentialing, AR, denials, authorizations, and practice operations inside real healthcare workflows — across multiple specialties, EHRs, and payer mixes. The operational intelligence we bring to a developer partnership comes from daily practice, not documentation review."},{num:"02",title:"We map the workflow as it actually operates, not as it is documented",description:"Revenue cycle workflows, authorization processes, EHR-to-billing handoffs, and denial patterns documented from operational observation — capturing the exceptions, variations, and edge cases that formal specifications frequently omit because they are assumed to be handled locally."},{num:"03",title:"We support healthcare client implementations operationally",description:"When a healthcare practice is transitioning to your platform, we maintain their operational continuity — billing processes, AR follow-up, denial management — so the technical implementation does not create an operational disruption that damages the client relationship while the technical team is focused on the migration."},{num:"04",title:"We deliver product feedback from the operational perspective",description:"After working with your product inside real healthcare workflows, we translate the operational experience into structured product feedback — where the friction is, what assumptions did not hold in practice, and what workflow changes would reduce user effort rather than increasing it."},{num:"05",title:"We become the ongoing operational partner as your product scales",description:"As your product grows and your client base expands into new specialties, markets, and payer environments, an operations partner who works inside those environments daily is positioned to keep the product roadmap grounded in operational reality rather than technical assumptions."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation handles the scale. <em>Specialists handle the execution.</em>",machineLabel:"AI-assisted developer support",humanLabel:"Human operations specialists",machine:["Workflow pattern detection across healthcare billing environments","Payer rule change tracking and operational impact assessment","Denial root cause pattern identification across payers and specialties","Authorization requirement monitoring by payer and procedure type","Automation opportunity scoring for healthcare workflow steps","Operational QA test case generation from real-world exception patterns"],human:["Workflow consulting and operational process documentation","Payer-specific rule interpretation and exception judgment","Healthcare client implementation support and operational continuity","Product workflow feedback from operational experience","Automation boundary assessment — where human judgment is irreplaceable","Developer communication translating operational context into technical requirements"],pullQuote:'"The most useful thing an operational partner brings to a healthcare technology team is not the answer to a technical question. It is the operational context that makes the technical question the right one to ask."'},results:{eyebrow:"What changes for your product and clients",title:"Healthcare software that works <em>in the practice — not just in the integration test.</em>",outcomes:[{icon:"◎",title:"Product friction reduced in real-world deployment",description:"Workflow gaps between technical design and operational reality identified before they reach production — fewer exceptions, fewer workarounds, less user friction."},{icon:"✓",title:"Automation built on accurate process assumptions",description:"Automation targets the actual workflow steps that are genuinely repetitive and rule-based — not the documented version that real practice deviates from daily."},{icon:"$",title:"Healthcare client implementations protected operationally",description:"Technical transitions supported operationally — clients maintain billing continuity, AR management, and denial handling while the technical migration proceeds."},{icon:"→",title:"Product roadmap informed by operational reality",description:"Structured product feedback from an operations team working inside real healthcare workflows — not just technical user reports but operational context that shapes the right product decisions."},{icon:"⚡",title:"Faster time to operational effectiveness for new clients",description:"Healthcare clients onboarded with operational support alongside technical implementation — reaching full operational effectiveness faster than technical-only deployments allow."},{icon:"↓",title:"Implementation support burden reduced",description:"Operational context provided to implementation teams before deployment — fewer surprises in production, fewer support escalations, and less time spent debugging workflow issues that were predictable from the operational side."}]},compare:{eyebrow:"Why healthcare technology needs operational context",title:"Technical excellence without operational context <em>produces excellent software that does not work the way it should in practice.</em>",description:"Healthcare workflows are operationally complex in ways that technical documentation does not always capture. The gap between the documented workflow and the actual workflow is where production friction lives — and where an operational partnership makes the difference.",rows:[{label:"Workflow documentation quality",hbs:"Operational reality — exceptions included",other:"Formal specification — idealized"},{label:"Implementation support",hbs:"Technical + operational simultaneously",other:"Technical only — operational gap remains"},{label:"Automation accuracy",hbs:"Built on actual workflow behavior",other:"Built on documented workflow assumptions"},{label:"Product feedback source",hbs:"Operational experience in production",other:"Technical user reports only"},{label:"Client transition risk",hbs:"Operational continuity maintained",other:"Technical migration + operational disruption"},{label:"Payer rule coverage",hbs:"200+ payer variations documented",other:"Standard rules only"}]},finalCta:{eyebrow:"Start the developer partnership conversation",title:"If your healthcare product works in test environments but creates friction in production, <em>the gap is almost always operational context.</em>",description:"We start with a conversation about your product, your deployment environment, and where operational context would make the most difference. No commitment required — and we will tell you honestly if the partnership would add value or if you are solving a different problem.",buttons:[{text:"Build with operations insight",variant:"light"},{text:"Talk to our developer partnership team",variant:"ghost"}],trustLine:"HIPAA · BAA available · Healthcare workflow expertise · No long-term contract required"}}},de={title:"Psychiatry Billing Services",subtitle:"Specialty-aware behavioral health billing with session limit tracking, telehealth support, and parity compliance",description:"Hired Billing Support provides specialty-aware psychiatry and behavioral health billing — prior authorization support, eligibility verification, telehealth billing, session limit tracking, denial management, and AR follow-up.",hero:{eyebrow:"Psychiatry & Behavioral Health",title:"Behavioral health billing has specific rules   <em> most billing vendors get wrong.</em>",subtitle:" Session limits, parity compliance, telehealth modifiers, prior authorization tracking — psychiatry and behavioral health billing requires specialty knowledge that a generic billing team rarely has.",description:"HBS provides behavioral health billing support that understands how your payers actually process your claims."},sections:{pain:{eyebrow:"The psychiatry billing reality",title:"Mental health parity is the law. <em>Payers enforce it inconsistently — and billing errors let them.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["Mental health parity requires that behavioral health benefits be comparable to medical benefits. In practice, payers apply inconsistent eligibility rules, session limits that are not always clearly disclosed, and telehealth coverage variations that change by state and plan year. A psychiatry practice that is not verifying mental health benefits specifically — not just general medical coverage — is billing into gaps it cannot see.","Your providers document carefully. Your team submits claims. And then a denial arrives because the session was the 61st when the plan limits 60, or because the telehealth code was submitted with the wrong modifier for that specific payer, or because the authorization expired three days before the visit and nobody caught the renewal window.",'"Behavioral health billing requires the same level of payer-specific attention that any complex specialty does — and in some ways more, because the administrative failures in mental health care have a direct impact on patient access to ongoing treatment."',"The consequences are not just financial. When a billing gap disrupts coverage, the patient's care continuity is at risk. Psychiatry billing done well protects both the revenue and the relationship."],ledger:[{num:"01",title:"Mental health eligibility requires a different verification than medical coverage",description:"Verifying that a patient has insurance is not the same as verifying their behavioral health benefits. Session limits, outpatient mental health deductibles, telehealth parity application, and separate mental health authorizations all require a specific eligibility check — not a general one."},{num:"02",title:"Session limits expire without warning unless someone is tracking them",description:"A patient with a 60-session annual limit hits visit 60. No one flagged that a request for additional sessions needed to be submitted at visit 50. The practice continues treating. The claims deny. Revenue disappears for visits that were clinically necessary and delivered."},{num:"03",title:"Telehealth billing adds a layer of payer-specific complexity",description:"Psychiatry and telepsychiatry claims require payer-specific place of service codes, modifiers, and documentation — and payer rules for telehealth reimbursement have changed repeatedly. A single incorrect modifier produces a denial that takes weeks to resolve."},{num:"04",title:"Documentation gaps trigger medical necessity denials",description:"Psychiatry documentation must support the session type, duration, diagnosis, and clinical necessity. When documentation is incomplete or does not match the billed code, payers deny on medical necessity grounds — producing denials that require clinical documentation review before they can be appealed."},{num:"05",title:"AR grows quietly in small psychiatry practices",description:"A solo or small group psychiatry practice does not always have dedicated billing staff. Claims sit, payer follow-up falls behind, and AR ages past appeal windows before anyone has time to address it. The revenue was earned — it is just not being collected."}]},solution:{eyebrow:"The solution",title:"Behavioral health billing that understands <em>parity rules, session limits, and telehealth complexity.</em>",description:"Hired Billing Support manages psychiatry and behavioral health billing with the payer-specific knowledge the specialty requires — verifying mental health benefits specifically, tracking session limits proactively, handling telehealth claims correctly, and following up on AR before it ages past recovery.",process:[{num:"01",title:"Mental health eligibility verification",description:"Benefits verified against mental health coverage specifically — session limits, telehealth parity, outpatient mental health deductibles, and prior authorization requirements — before the first claim is submitted."},{num:"02",title:"Session limit tracking and renewal management",description:"Authorization and session limit expiration tracked per patient and payer — renewal requests initiated before limits are reached so treatment continuity is not disrupted by an administrative gap."},{num:"03",title:"Telehealth claim handling with payer-specific codes",description:"Telepsychiatry claims submitted with the correct place of service codes, modifiers, and documentation for each payer — payer-specific telehealth requirements applied consistently rather than assumed."},{num:"04",title:"Documentation-aware billing review",description:"Claims reviewed against documentation before submission — session type, duration, diagnosis code, and billed code aligned so medical necessity denials are caught pre-submission rather than discovered through a denial."},{num:"05",title:"Denial management with behavioral health context",description:"Denials reviewed with knowledge of behavioral health payer rules — parity law violations identified, medical necessity denials appealed with appropriate clinical documentation support, and patterns flagged for upstream correction."},{num:"06",title:"AR follow-up on a defined schedule",description:"Aged claims worked systematically — payer portals checked, parity compliance issues escalated, and appeals submitted before window deadlines — so revenue does not age past recovery."}]},services:{eyebrow:"Services that fit psychiatry practices",title:"Specialty-aware billing for behavioral health. <em>Not general billing applied to a complex specialty.</em>",items:[{num:"01",title:"Behavioral Health Eligibility Verification",description:"Mental health benefits checked specifically — session limits, telehealth parity, outpatient mental health deductibles, and authorization requirements before each visit."},{num:"02",title:"Session Limit & Authorization Tracking",description:"Per-patient, per-payer session tracking with renewal alerts — so authorization gaps never disrupt ongoing treatment or produce avoidable denials."},{num:"03",title:"Telepsychiatry Billing Support",description:"Telehealth claims submitted with payer-specific codes, modifiers, and documentation requirements applied correctly for each plan and state."},{num:"04",title:"Psychiatry Claim Submission",description:"E&M, therapy session, medication management, and psychiatric evaluation claims submitted with correct CPT codes, modifiers, and documentation alignment."},{num:"05",title:"Denial Management",description:"Behavioral health denials reviewed with parity law awareness — parity violations flagged, medical necessity appeals supported, and denial patterns addressed at the root."},{num:"06",title:"AR Follow-Up & Recovery",description:"Aged AR worked on a defined schedule — payer portals, follow-up calls, and appeals submitted before window deadlines so revenue does not age into loss."},{num:"07",title:"Credentialing & Panel Maintenance",description:"Credentialing applications, payer panel additions, and recredentialing cycles managed — keeping providers active with the payers their patients use."},{num:"08",title:"Patient Scheduling & Communication Support",description:"Appointment follow-up, recall outreach, and patient balance communication — so the clinical relationship is supported by consistent administrative follow-through."}]},workflow:{eyebrow:"Behavioral health billing workflow",title:"From eligibility to payment. <em>Every step specialty-aware.</em>",description:"Behavioral health billing has more payer-specific variation than most specialties. Every step in the workflow requires mental health-specific knowledge — not general billing applied to a different code set.",items:[{num:"01",label:"MH Eligibility",sublabel:"Benefits · Parity"},{num:"02",label:"Auth / Session",sublabel:"Limits tracked"},{num:"03",label:"Visit Documented",sublabel:"Code alignment"},{num:"04",label:"Claim Submitted",sublabel:"Correct modifier"},{num:"05",label:"Payer Review",sublabel:"Follow-up scheduled"},{num:"06",label:"Denial Response",sublabel:"Parity-aware"},{num:"07",label:"Payment",sublabel:"Revenue collected"}]},denialPatterns:{eyebrow:"Common psychiatry denial patterns",title:"The denials behavioral health practices <em>see most often — and how we address them.</em>",description:"Psychiatry denials cluster around a small number of predictable causes. Identifying the pattern is the first step to preventing it.",patterns:[{tag:"Authorization",tagClass:"tag-auth",title:"Session Limit Exceeded",description:"Plan benefit exhausted without a renewal request in place. Prevented through proactive session tracking and timely extension submissions."},{tag:"Eligibility",tagClass:"tag-elig",title:"Mental Health Benefit Verification Failure",description:"General coverage confirmed but MH-specific benefits not checked. Prevented through specialty-specific eligibility verification."},{tag:"Documentation",tagClass:"tag-doc",title:"Medical Necessity — Insufficient Documentation",description:"Session documentation does not clearly support clinical necessity for billed service type. Prevented through pre-submission documentation alignment review."},{tag:"Coding",tagClass:"tag-coding",title:"Telehealth Modifier / POS Error",description:"Incorrect place of service or modifier for payer-specific telehealth rules. Prevented through payer-specific telehealth billing standards applied at submission."},{tag:"Payer Rule",tagClass:"tag-payer",title:"Parity Violation — Benefit Applied Differently",description:"Payer applying mental health deductible or cost-sharing differently than medical benefits. Addressed through parity compliance escalation with supporting documentation."},{tag:"Authorization",tagClass:"tag-auth",title:"Service Not Covered Under Plan Auth",description:"Visit type differs from what was authorized. Prevented through authorization matching at claim submission."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Session limit tracking per patient and payer with renewal alerts","Mental health eligibility verification scheduling and results tracking","Claim submission status monitoring and payer response tracking","Denial categorization by reason code and payer pattern","AR aging alerts and follow-up scheduling by payer","Telehealth modifier requirement tracking by payer and state"],human:["Mental health parity compliance assessment and escalation","Session limit renewal requests and authorization negotiations","Medical necessity appeal construction with clinical documentation","Telehealth claim review with payer-specific rule application","Payer portal follow-up and AR escalation decisions","Denial root cause identification and upstream process corrections"],pullQuote:'"Behavioral health billing requires specialty-specific knowledge at every step — from eligibility verification that actually checks mental health benefits to denial appeals that invoke parity law correctly. Generic billing does not produce consistently different results than billing done without specialty knowledge."'},results:{eyebrow:"What changes",title:"Psychiatry revenue that reflects <em>the clinical work being delivered.</em>",outcomes:[{icon:"◎",title:"Session limits tracked proactively",description:"No more surprise denials when a patient hits their annual limit — renewal requests submitted in advance so treatment continuity is protected."},{icon:"✓",title:"Telehealth claims submitted correctly the first time",description:"Payer-specific codes, modifiers, and documentation applied at submission — telehealth denials become preventable rather than expected."},{icon:"$",title:"AR worked before it ages past recovery",description:"Payer follow-up on a defined schedule — aged claims addressed, appeals submitted on time, and revenue recovered that would otherwise be written off."},{icon:"↓",title:"Denial rates decline across payers",description:"Root cause patterns identified and addressed upstream — the same authorization and documentation denials stop repeating every month."},{icon:"→",title:"Providers focus on patients, not paperwork",description:"Billing, authorization, eligibility, and AR work managed by HBS — providers spend their clinical hours on mental healthcare, not administrative follow-up."},{icon:"⚡",title:"Parity violations identified and escalated",description:"Mental health benefits applied incorrectly by payers identified and challenged — ensuring coverage actually reflects the parity rights patients are entitled to."}]},compare:{eyebrow:"Why psychiatry billing needs specialty-aware support",title:"Generic billing applied to behavioral health <em>misses the complexity that creates the denials.</em>",description:"The denial patterns in psychiatry are predictable and preventable — but only when the billing team understands mental health parity rules, session limit mechanics, telehealth coverage variation, and the documentation standards specific to behavioral health.",rows:[{label:"MH eligibility verification",hbs:"Mental health benefits checked specifically",other:"General coverage only"},{label:"Session limit management",hbs:"Proactive — renewals before limits hit",other:"Discovered through denial"},{label:"Telehealth claim accuracy",hbs:"Payer-specific codes and modifiers",other:"Standard submission — frequent errors"},{label:"Denial appeals",hbs:"Parity-aware — regulatory basis included",other:"Generic appeal letters"},{label:"AR follow-up cadence",hbs:"Defined schedule — all buckets",other:"When someone finds time"},{label:"Billing team specialty knowledge",hbs:"Behavioral health trained",other:"General medical billing"}]},finalCta:{eyebrow:"Start with a psychiatry billing review",title:"If your behavioral health practice is seeing denials, aging AR, or telehealth billing errors, <em>specialty-aware support changes the outcome.</em>",description:"We start with a review of your current billing performance — identifying denial patterns, eligibility gaps, session limit exposures, and AR aging issues. No commitment required.",buttons:[{text:"Strengthen psychiatry billing",variant:"light"},{text:"Talk to our behavioral health team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},pe={title:"Orthopedic Billing Services",subtitle:"High-precision surgical billing with authorization control, procedure-level coding review, and high-value AR protection",description:"Hired Billing Support provides specialty-aware orthopedic billing — prior authorization control, surgical claim management, procedure coding accuracy, high-value AR protection, and denial management for orthopedic and musculoskeletal practices.",hero:{eyebrow:"Orthopedic Billing",title:" One missing authorization can turn a $15,000 claim  <em>into a $0 payment.</em>",subtitle:"Orthopedic billing is high-stakes. Surgical authorizations, global period management, and modifier accuracy are not areas where a billing error is a minor inconvenience — it is a major revenue event.",description:"HBS manages orthopedic billing with the specialty precision that high-value claims require."},sections:{pain:{eyebrow:"The orthopedic billing reality",title:"Every authorization gap in orthopedic billing <em>is measured in thousands of dollars, not hundreds.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["An orthopedic surgical claim averages several times the value of a standard medical visit. That means every billing error — every missing authorization, every documentation gap, every underpayment that goes unnoticed — carries proportionally more financial impact. The same denial rate that costs a primary care practice a manageable amount costs an orthopedic practice significantly more per month.","Orthopedic practices also carry unique billing complexity: procedures with DME, imaging, injections, surgical follow-up visits, modifiers for bilateral procedures, co-surgeon billing, and payer-specific global period rules — each requiring specific knowledge and consistent application to avoid denials that stall large payments.",`"One missing authorization on a spine surgery claim does not just delay a payment — it creates weeks of appeal work, requires clinical documentation review, and may involve escalation to the payer's medical director. Prevention is not just more efficient. At orthopedic billing values, it is significantly more profitable."`,"The practices that protect orthopedic revenue most effectively are not the ones that appeal the most aggressively. They are the ones that prevent the denials in the first place — through authorization tracking, pre-submission documentation review, and consistent payer follow-up that does not let claims sit."],ledger:[{num:"01",title:"Missing or expired authorizations on surgical and high-value claims",description:"An authorization for a knee replacement or spine procedure obtained three months ago and expired before the rescheduled surgery date. Nobody caught the renewal gap. The claim submits. The payer denies. The practice now faces an appeal process for a claim worth thousands — for a completely avoidable reason."},{num:"02",title:"Procedure coding complexity requires specialty knowledge",description:"Orthopedic CPT coding involves procedures, modifiers, bilateral rules, co-surgeon billing, DME coordination, and injection coding — each with payer-specific application rules. A single incorrect modifier or missed bundling rule on a high-value claim produces a denial that requires clinical documentation to support the appeal."},{num:"03",title:"Surgical follow-up visits in global periods create billing complexity",description:"Global surgery periods require specific billing rules for follow-up visits — some included in the global, some separately billable, depending on visit type, timing, and payer. Without systematic global period management, the practice either under-bills for separately billable visits or triggers denials by billing for global-included services."},{num:"04",title:"High-value AR aging quickly becomes expensive when follow-up is inconsistent",description:"An orthopedic practice with 50 surgical claims in AR does not have 50 moderate financial exposures — it may have 50 significant ones. When AR follow-up is inconsistent and claims age past appeal deadlines, the financial impact is disproportionately large compared to practices with lower average claim values."},{num:"05",title:"Internal teams are stretched across scheduling, surgery coordination, and billing",description:"Orthopedic administrative teams manage surgical scheduling, insurance verification, coordination of benefits for multi-payer patients, DME authorizations, physical therapy referrals, and billing — simultaneously, for a high-volume practice. Billing and AR follow-up consistently loses to the immediate demands of surgical scheduling."}]},solution:{eyebrow:"The solution",title:"Authorization control and procedure-level billing precision <em>that protects high-value orthopedic revenue.</em>",description:"Hired Billing Support manages orthopedic billing with the specialty knowledge that high-value procedure claims require — authorization tracking, procedure-aware coding review, surgical claim follow-up, and AR management that treats every aged claim with the financial weight it deserves.",process:[{num:"01",title:"Surgical authorization tracking and renewal management",description:"Every surgical and high-value procedure authorization tracked by expiration date — renewals initiated before expiration, surgery scheduling aligned with authorization validity, and gaps identified before claims submit."},{num:"02",title:"Procedure-aware coding and claim review",description:"Orthopedic CPT codes, modifiers, bilateral rules, and bundling requirements reviewed before submission — procedure codes validated against documentation so denials are caught pre-submission rather than post-denial."},{num:"03",title:"Global period management",description:"Global surgery periods tracked per procedure and payer — follow-up visits correctly categorized as global-included or separately billable so the practice captures all legitimate billing without triggering global period denials."},{num:"04",title:"High-value claim priority follow-up",description:"Surgical and high-value claims prioritized in follow-up — payer portals checked, status confirmed, and escalation triggered when high-value claims sit beyond expected payment windows."},{num:"05",title:"Denial management with procedure-level appeals",description:"Orthopedic denials appealed with procedure-specific clinical documentation support — authorization disputes, medical necessity challenges, and bundling conflicts addressed with the clinical and coding knowledge each requires."},{num:"06",title:"AR management with financial-weight prioritization",description:"AR aging worked by claim value as well as aging date — the highest-value claims receive the most aggressive follow-up regardless of where they fall in the aging distribution."}]},services:{eyebrow:"Services that fit orthopedic practices",title:"Procedure-level billing precision for <em>high-value orthopedic claims.</em>",items:[{num:"01",title:"Surgical Authorization Management",description:"Authorization tracking with expiration alerts, renewal initiation, and surgery scheduling alignment — no authorization gaps on high-value procedure claims."},{num:"02",title:"Procedure Coding Review",description:"CPT codes, modifiers, bilateral rules, and bundling requirements reviewed before submission — orthopedic coding accuracy validated at the claim level."},{num:"03",title:"Global Period Management",description:"Surgery global periods tracked — follow-up visits correctly classified so the practice captures all billable services without triggering global period denials."},{num:"04",title:"High-Value Claim Follow-Up",description:"Surgical claims prioritized in follow-up — status confirmed, escalation triggered when high-value claims approach appeal deadlines without resolution."},{num:"05",title:"Denial Management & Appeals",description:"Procedure-specific appeals with clinical documentation support — authorization, medical necessity, and bundling denials addressed with the coding and clinical knowledge each requires."},{num:"06",title:"AR Management by Claim Value",description:"AR worked by financial weight — highest-value claims receive priority follow-up regardless of aging bucket position."},{num:"07",title:"DME & Injection Billing Coordination",description:"DME authorization, injection billing, and ancillary procedure coordination — additional revenue sources billed correctly and followed up systematically."},{num:"08",title:"Credentialing & Enrollment Support",description:"Orthopedic provider credentialing and surgical facility enrollment managed — providers staying active with payers for high-value procedures."}]},workflow:{eyebrow:"Orthopedic revenue workflow",title:"From authorization to payment. <em>Every high-value step protected.</em>",description:"Orthopedic billing protection starts before the procedure — at authorization — and continues through coding review, claim submission, follow-up, and denial resolution. Each step must be executed correctly for high-value claims to pay.",items:[{num:"01",label:"Auth Obtained",sublabel:"Validity confirmed"},{num:"02",label:"Eligibility",sublabel:"Benefits verified"},{num:"03",label:"Procedure Done",sublabel:"Documentation ready"},{num:"04",label:"Coding Review",sublabel:"CPT · modifiers"},{num:"05",label:"Claim Submitted",sublabel:"High-value priority"},{num:"06",label:"Payer Follow-Up",sublabel:"Aggressive schedule"},{num:"07",label:"Denial Response",sublabel:"Procedure-specific"},{num:"08",label:"Payment",sublabel:"Revenue protected"}]},denialPatterns:{eyebrow:"Common orthopedic denial patterns",title:"The denial categories orthopedic practices <em>see most often — and the prevention that stops them.</em>",description:"High-value claims attract more payer scrutiny. The denial patterns in orthopedic billing are predictable — and each one has a prevention strategy that works better than an appeal.",patterns:[{tag:"Authorization",tagClass:"tag-auth",title:"Expired or Missing Surgical Authorization",description:"Authorization obtained but expired before rescheduled surgery. Prevented through authorization expiration tracking aligned with surgery scheduling."},{tag:"Documentation",tagClass:"tag-doc",title:"Medical Necessity — Conservative Treatment",description:"Payer requires documented conservative treatment failure before surgical authorization. Prevented through pre-authorization documentation review."},{tag:"Coding",tagClass:"tag-coding",title:"Bilateral Modifier or Co-Surgeon Error",description:"Bilateral procedure submitted without correct modifier or co-surgeon claim without required supporting documentation. Prevented through procedure-level coding review."},{tag:"Global Period",tagClass:"tag-payer",title:"Post-Surgical Visit in Global Period",description:"Follow-up visit billed separately when included in global surgery package. Prevented through global period tracking and visit classification."},{tag:"Bundling",tagClass:"tag-coding",title:"Procedure Bundled — Separate Lines Denied",description:"Multiple procedure codes submitted that payer bundles under one allowable. Prevented through bundling rules applied at pre-submission review."},{tag:"Eligibility",tagClass:"tag-elig",title:"Benefits Changed Between Authorization and Surgery",description:"Patient insurance changed after authorization was obtained. Prevented through eligibility re-verification immediately before procedure date."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Surgical authorization expiration tracking and renewal alerts","High-value claim status monitoring with priority flagging","Global period tracking per procedure and payer","AR aging by claim value with escalation triggers","Denial pattern categorization across procedures and payers","Pre-surgery eligibility re-verification scheduling"],human:["Surgical authorization requests and payer negotiations","Procedure coding review with modifier and bundling judgment","High-value claim escalation and payer follow-up calls","Medical necessity appeal construction with clinical documentation","Underpayment identification and payer contract review","Leadership reporting on surgical claim performance and AR exposure"],pullQuote:'"In orthopedic billing, the financial stakes of every administrative decision are proportionally higher than most specialties. A missed authorization or a coding error on a surgical claim does not cost the practice a moderate amount — it costs a significant one. The return on operational precision is higher here than almost anywhere else in specialty medicine."'},results:{eyebrow:"What changes",title:"Orthopedic revenue protected <em>at the procedure level.</em>",outcomes:[{icon:"◎",title:"Authorization gaps eliminated before surgery",description:"Surgical authorizations tracked with expiration alerts — renewals initiated before gaps, no more authorization denials on procedures that were fully authorized before they were lost."},{icon:"✓",title:"Procedure coding reviewed before submission",description:"CPT codes, modifiers, and bundling reviewed at claim level — coding errors caught pre-submission rather than discovered through high-value denials."},{icon:"$",title:"High-value AR followed up aggressively",description:"Surgical claims prioritized by financial weight — the highest-value accounts receive the most persistent follow-up regardless of aging position."},{icon:"↓",title:"Denial rates on high-value claims decline",description:"Authorization control, documentation review, and coding accuracy working together — preventable denials on surgical claims drop systematically."},{icon:"→",title:"Surgical team stays focused on procedures",description:"Authorization management, billing follow-up, and AR work handled by HBS — surgical coordinators manage scheduling without the billing burden."},{icon:"⚡",title:"Underpayments identified and challenged",description:"Payer reimbursements compared to contract rates — underpayments on high-value claims identified and appealed before they become accepted as normal."}]},compare:{eyebrow:"Why orthopedic billing needs stronger operational control",title:"High-value claims require high-precision billing. <em>The financial stakes leave no margin for casual execution.</em>",description:"Orthopedic billing managed casually produces orthopedic denials at surgical claim values. The same operational discipline that produces acceptable results in lower-value specialties is not sufficient when every denied claim carries a proportionally larger revenue impact.",rows:[{label:"Authorization tracking",hbs:"Per-claim, with expiration alerts",other:"Manual — frequently missed"},{label:"Pre-submission coding review",hbs:"Procedure-level at every claim",other:"Submitted and corrected after denial"},{label:"High-value AR follow-up",hbs:"Priority by financial weight",other:"Aging date only"},{label:"Global period management",hbs:"Tracked per procedure and payer",other:"Applied inconsistently"},{label:"Underpayment detection",hbs:"Contract rate comparison — systematic",other:"Rarely reviewed"},{label:"Denial financial impact",hbs:"Reduced through prevention",other:"Managed reactively — high cost"}]},finalCta:{eyebrow:"Start with an orthopedic billing review",title:"If your orthopedic practice has authorization gaps, high-value denials, or aging surgical AR, <em>the revenue impact is larger than the numbers suggest.</em>",description:"We start with a review of your current billing performance — identifying authorization exposures, denial patterns, and AR aging risks on your highest-value claims. No commitment required.",buttons:[{text:"Protect orthopedic revenue",variant:"light"},{text:"Talk to our orthopedic billing team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},he={title:"Cardiology Billing Services",subtitle:"High-complexity diagnostic and procedure billing with authorization control, medical necessity documentation review, and aggressive payer follow-up",description:"Hired Billing Support provides specialty-aware cardiology billing — diagnostic authorization support, procedure coding accuracy, medical necessity documentation, high-volume claim management, denial management, and AR follow-up for cardiology practices.",hero:{eyebrow:"Cardiology Billing",title:"Cardiology billing is complex. Your revenue <em>should not suffer for it</em>",subtitle:" Echocardiograms, stress tests, catheterizations, and device implants each require authorization, precise coding, and documented medical necessity. One gap in the process and the claim sits — or denies.",description:"Hired Billing Support manages cardiology billing with the workflow discipline and specialty knowledge this high-complexity specialty demands — authorization control before procedures, coding accuracy at submission, and aggressive follow-up that keeps revenue moving through the cycle."},sections:{pain:{eyebrow:"The cardiology billing reality",title:"Cardiology generates high-value claims with high payer scrutiny. <em>The combination requires billing discipline at every step.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["A cardiology practice runs a full diagnostic schedule — stress tests, echocardiograms, Holter monitors, nuclear imaging, cardiac catheterizations — alongside outpatient consultations, device follow-up visits, and inpatient consults. Each service type has its own authorization pathway, its own medical necessity documentation requirements, and its own payer-specific coverage rules.","When authorization is missing, the claim denies. When documentation does not clearly establish medical necessity for a high-cost diagnostic test, the payer requests additional information or denies outright. When a provider bills two diagnostic tests on the same day without understanding payer-specific bundling rules, one of them comes back denied. And when follow-up is inconsistent, high-value cardiology claims sit in payer review queues longer than they should while revenue accumulates in AR instead of in the practice bank account.",'"Cardiology billing is not difficult because the codes are complicated. It is difficult because the authorization, documentation, and coding requirements all apply simultaneously — and because the financial impact of getting any one of them wrong is proportionally larger than in most primary care billing."',"The cardiology practices that manage their revenue cycle well do not do it by appealing more aggressively. They do it by building a billing process that prevents the denials and follow-up delays that cost time and revenue in the first place."],ledger:[{num:"01",title:"Authorization delays disrupt diagnostic and procedure scheduling",description:"A nuclear stress test that requires 10-14 days for authorization cannot be scheduled the same week the cardiologist orders it. When the authorization team is managing 30 simultaneous requests across multiple payers, delays compound — diagnostic tests are delayed, patient care is deferred, and scheduling efficiency suffers."},{num:"02",title:"Medical necessity documentation must specifically support each test ordered",description:"Payers increasingly require that diagnostic test documentation establishes specific clinical indicators for medical necessity — not just the ordering diagnosis. When documentation is adequate for clinical purposes but not specific enough to satisfy payer medical necessity criteria, the resulting requests for additional information delay payment by weeks."},{num:"03",title:"High diagnostic volume creates billing complexity at scale",description:"A cardiology practice that performs 40 diagnostic procedures per week is generating 40 separate billing events — each requiring eligibility verification, authorization confirmation, coding review, and follow-up — in addition to the consultation and follow-up visit billing that runs simultaneously. The billing workload is proportionally larger than the clinical workload."},{num:"04",title:"Procedure bundling rules vary by payer and are frequently violated",description:"Many payers have specific rules about which cardiac procedures can be billed separately when performed on the same encounter. A cardiology practice that bills two procedures without applying the correct modifier or understanding the payer-specific bundling rule receives a denial that requires coding review before it can be corrected and resubmitted."},{num:"05",title:"AR grows when follow-up is not persistent for high-value claims",description:"A cardiac catheterization claim that pays $4,000 when collected and $0 when it ages past appeal deadline represents exactly the kind of revenue loss that accumulates quietly across a busy cardiology practice when follow-up is inconsistent. The individual claim may seem like a small amount relative to total billing volume — until the total is calculated."}]},solution:{eyebrow:"The solution",title:"Authorization discipline and coding precision <em>that keep cardiology claims moving through the cycle.</em>",description:"Hired Billing Support manages cardiology billing with the authorization management, documentation awareness, and claim follow-up that the specialty requires — preventing the denials that are most common in cardiology and following up aggressively on the ones that occur.",process:[{num:"01",title:"Diagnostic and procedure authorization management",description:"Authorization requests submitted, tracked, and followed up for every diagnostic test and procedure — with scheduling coordination so procedures are not performed before authorization is confirmed."},{num:"02",title:"Documentation-aware billing review",description:"Claims reviewed against documentation before submission — medical necessity indicators confirmed, diagnosis codes aligned with test ordered, and documentation gaps flagged for resolution before claims submit into a denial."},{num:"03",title:"Cardiology coding review with bundling awareness",description:"Procedure codes reviewed with payer-specific bundling rules applied — bilateral modifiers, same-day procedure bundling, and payer-specific cardiac coding exceptions addressed at submission rather than discovered through denial."},{num:"04",title:"High-value claim priority follow-up",description:"Cardiology claims followed up with urgency proportional to value — procedure claims tracked from submission through payment with escalation when high-value claims approach appeal deadlines without resolution."},{num:"05",title:"Denial management with cardiology-specific appeals",description:"Denials appealed with cardiology clinical context — medical necessity denials addressed with specific clinical indicators, authorization disputes escalated with documentation support, and bundling denials corrected with appropriate modifier additions."},{num:"06",title:"Payer trend analysis for cardiology-specific patterns",description:"Denial trends tracked by payer, procedure type, and denial reason — recurring patterns identified and addressed at the billing process level rather than worked individually each month."}]},services:{eyebrow:"Services that fit cardiology practices",title:"Specialty billing for high-complexity, high-volume <em>cardiovascular care.</em>",items:[{num:"01",title:"Diagnostic Authorization Management",description:"Authorization requests and tracking for echocardiograms, stress tests, nuclear imaging, Holter monitors, and cardiac procedures — with scheduling coordination to prevent procedure-before-auth situations."},{num:"02",title:"Medical Necessity Documentation Review",description:"Claims reviewed for medical necessity documentation alignment before submission — clinical indicators confirmed against payer-specific requirements for each diagnostic test."},{num:"03",title:"Cardiology Coding Accuracy",description:"Procedure codes, modifiers, and payer-specific bundling rules applied at submission — cardiac-specific coding accuracy for both diagnostic and interventional services."},{num:"04",title:"High-Volume Claim Submission & Follow-Up",description:"High-volume diagnostic billing managed systematically — claims submitted daily, status tracked, and follow-up triggered on a defined schedule."},{num:"05",title:"Denial Management & Appeals",description:"Cardiology denials appealed with specialty-specific clinical context — medical necessity, authorization, and bundling denials each addressed with the correct documentation and coding basis."},{num:"06",title:"AR Management & Payer Trend Reporting",description:"AR worked by claim value and payer — trends tracked across denial reason and payer relationship to identify systemic issues before they become significant revenue losses."},{num:"07",title:"Eligibility Verification",description:"Cardiology-specific eligibility — cardiology benefit coverage, testing coverage limits, and cardiac procedure deductible status verified before each visit and procedure."},{num:"08",title:"Credentialing & Enrollment",description:"Cardiologist credentialing and payer enrollment — keeping providers active on the plans their patients use for cardiac care coverage."}]},workflow:{eyebrow:"Cardiology revenue workflow",title:"From authorization to payment. <em>No step left unmanaged.</em>",description:"Cardiology billing requires each step to execute correctly — authorization before testing, documentation aligned with necessity, coding at submission, and follow-up that does not let claims sit.",items:[{num:"01",label:"Eligibility",sublabel:"Cardiology benefits"},{num:"02",label:"Auth Submitted",sublabel:"Before scheduling"},{num:"03",label:"Auth Confirmed",sublabel:"Procedure cleared"},{num:"04",label:"Documentation",sublabel:"Necessity aligned"},{num:"05",label:"Coding Review",sublabel:"Bundling checked"},{num:"06",label:"Claim Submitted",sublabel:"Priority by value"},{num:"07",label:"Follow-Up",sublabel:"Persistent schedule"},{num:"08",label:"Payment",sublabel:"Revenue collected"}]},denialPatterns:{eyebrow:"Common cardiology denial patterns",title:"The denial categories cardiology practices <em>face most — and how prevention outperforms appeal.</em>",description:"Cardiology denials cluster around authorization, medical necessity, and bundling — each preventable with the right process applied at the right step.",patterns:[{tag:"Authorization",tagClass:"tag-auth",title:"Diagnostic Test Without Authorization",description:"Test performed before authorization confirmed. Prevented through authorization-before-scheduling protocol and auth status check at appointment prep."},{tag:"Medical Necessity",tagClass:"tag-doc",title:"Insufficient Clinical Indicators Documented",description:"Documentation supports ordering diagnosis but not specific payer necessity criteria for the test ordered. Prevented through pre-submission documentation review."},{tag:"Bundling",tagClass:"tag-coding",title:"Two Procedures Bundled — One Denied",description:"Same-day procedure submitted as separately billable when payer bundles them under one allowable. Prevented through same-day bundling rules applied at coding review."},{tag:"Payer Rule",tagClass:"tag-payer",title:"Frequency Limit — Duplicate Test Denial",description:"Diagnostic test performed within payer-defined frequency period. Prevented through frequency limit tracking per payer and test type."},{tag:"Documentation",tagClass:"tag-doc",title:"Cardiac Procedure — Peer Review Requested",description:"High-cost procedure triggers payer peer review request. Managed through complete documentation response and escalation to avoid denial through non-response."},{tag:"Eligibility",tagClass:"tag-elig",title:"Cardiac Testing Not Covered on Current Plan",description:"Patient benefits do not cover specific diagnostic test type. Prevented through cardiology-specific eligibility verification before scheduling."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Diagnostic authorization tracking with scheduling coordination","Medical necessity documentation checklist monitoring per test type","High-value claim status monitoring with follow-up scheduling","Denial categorization by test type, payer, and reason code","Frequency limit tracking per payer and diagnostic test","AR aging by claim value with escalation triggers"],human:["Authorization requests and payer peer review responses","Medical necessity documentation review and gap identification","Cardiology-specific coding judgment on procedure and modifier selection","High-value claim escalation and payer follow-up calls","Denial appeals with cardiology clinical documentation","Payer trend analysis and leadership reporting"],pullQuote:'"Cardiology billing is most vulnerable at authorization and medical necessity documentation — two steps that occur before the visit and before the claim. Fixing denials after submission is more expensive, slower, and less effective than building the process that prevents them."'},results:{eyebrow:"What changes",title:"Cardiology revenue that moves through the cycle <em>without stalling at authorization or documentation.</em>",outcomes:[{icon:"◎",title:"Diagnostic authorizations confirmed before scheduling",description:"Authorization-before-scheduling protocol — no more procedure-before-auth situations that produce denials on tests that were clinically necessary."},{icon:"✓",title:"Medical necessity documentation aligned at submission",description:"Documentation gaps caught pre-submission — medical necessity denials decline because claims are reviewed before they reach the payer."},{icon:"$",title:"High-value claims followed up aggressively",description:"Cardiology procedure claims tracked with priority — escalation triggered before high-value claims approach appeal deadlines without resolution."},{icon:"↓",title:"Bundling denials eliminated through pre-submission review",description:"Same-day procedure bundling rules applied at coding review — bundling denials become preventable rather than a recurring AR management task."},{icon:"→",title:"Clinical team stays focused on patient care",description:"Authorization management, documentation review, and billing follow-up managed by HBS — cardiologists and staff focus on the diagnostic and clinical work."},{icon:"⚡",title:"Denial trends identified and addressed systemically",description:"Recurring denial patterns by payer and test type tracked — upstream process changes implemented so the same denials stop appearing every month."}]},compare:{eyebrow:"Why cardiology billing requires workflow discipline",title:"Cardiology denials are not random. <em>They follow patterns that a disciplined billing process prevents.</em>",description:"The most expensive cardiology denials — missing authorization, insufficient medical necessity documentation, same-day bundling errors — all occur at predictable steps in the billing workflow. A billing process built around those specific prevention points produces measurably better outcomes than one that manages them reactively.",rows:[{label:"Authorization before scheduling",hbs:"Protocol-enforced",other:"Ad hoc — frequently missed"},{label:"Medical necessity review",hbs:"Pre-submission documentation check",other:"Addressed through denial response"},{label:"Bundling rule application",hbs:"Payer-specific at coding review",other:"Applied inconsistently"},{label:"High-value follow-up",hbs:"Priority by claim value",other:"Aging date only"},{label:"Denial pattern analysis",hbs:"Monthly — root cause tracked",other:"Individual claim corrections"},{label:"Specialty coding knowledge",hbs:"Cardiology-trained",other:"General medical billing"}]},finalCta:{eyebrow:"Start with a cardiology billing review",title:"If your cardiology practice has authorization gaps, medical necessity denials, or aging high-value AR, <em>specialty-aware billing discipline changes the outcome.</em>",description:"We start with a review of your current billing performance — authorization workflow, denial patterns, and AR aging — and show you where the largest revenue risks are. No commitment required.",buttons:[{text:"Improve cardiology revenue flow",variant:"light"},{text:"Talk to our cardiology billing team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},me={title:"OBGYN Billing Services",subtitle:"Women's health billing with global period management, eligibility monitoring during pregnancy, and patient-sensitive billing communication",description:"Hired Billing Support provides specialty-aware OBGYN billing — maternity workflow support, global billing management, eligibility verification, authorization tracking, denial management, and patient-friendly AR coordination for women's health practices.",hero:{eyebrow:"OBGYN & Women's Health",title:"OBGYN billing has gaps that most billing teams do not catch <em>until a claim denies.</em>",subtitle:"Global maternity billing, mid-pregnancy insurance changes, GYN procedure authorizations, and parity compliance create OBGYN-specific billing complexity that generic workflows consistently miss.",description:"HBS provides women's health billing support that manages the specific rules your specialty runs on."},sections:{pain:{eyebrow:"The OBGYN billing reality",title:"Coverage can change three times during a pregnancy. <em>OBGYN billing must change with it.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["A patient enrolls in prenatal care in January with one insurance plan. By her second trimester, her employer changes carriers. By her third trimester, her husband's company offers a different plan and she switches again. Each change requires a new eligibility verification, a review of how the new plan handles the global maternity package, and a determination of how to handle the visits already billed under the previous coverage.","That scenario is not unusual in an OBGYN practice. Insurance changes during pregnancy happen regularly — and each one requires billing adjustments that most practices manage inconsistently because the volume of maternity patients means there is always another prenatal visit to schedule, another ultrasound to order, and another patient who needs attention more immediately than the billing problem that just appeared.",'"OBGYN billing is not complicated because of a single difficult rule. It is complicated because of the number of rules that all apply simultaneously — global periods, eligibility changes, procedure bundling, preventive versus diagnostic billing, and patient balance communication that must be handled with care for a population that may already be navigating significant life stress."',"The administrative team in an OBGYN practice is often managing more simultaneous billing complexities than any other specialty — across a patient population where billing surprises have a uniquely high emotional impact."],ledger:[{num:"01",title:"Insurance changes during pregnancy disrupt global billing management",description:"A patient who switches insurance mid-pregnancy creates a billing situation that requires determining what has been paid, what is owed under the new plan, and how the global package applies across carriers. Without a systematic process for handling mid-pregnancy insurance changes, these situations create billing gaps, patient balance confusion, and revenue loss."},{num:"02",title:"Global period rules are applied inconsistently across payers",description:"Maternity global billing rules — what is included, what is billable separately, and how changes in care affect the global fee — vary by payer. The same delivery managed by two different insurers may have different included services, different follow-up billing rules, and different exceptions for complications. Without payer-specific global billing management, claims are denied or under-coded."},{num:"03",title:"Procedures, ultrasounds, and labs require separate billing that can be missed",description:"GYN procedures, diagnostic ultrasounds beyond the global, lab services, and biopsies all require accurate coding, separate authorization in many cases, and correct billing that distinguishes preventive from diagnostic coverage. When billing is managed informally, these revenue sources are inconsistently captured."},{num:"04",title:"Patient balance communication requires sensitivity",description:"OBGYN patients often receive bills they did not anticipate — an amount owed after delivery that differs from what they were told during pregnancy, a procedure cost that was not fully covered, or a balance from a visit that seemed routine. Patient billing communication in this specialty requires accuracy, clarity, and a tone that acknowledges the context in which patients are receiving it."},{num:"05",title:"Administrative teams managing prenatal volume cannot also manage billing systematically",description:"An OBGYN practice with 15 active prenatal patients, a GYN procedure schedule, and a full appointment book has administrative staff that are consistently at capacity. Billing precision — global period tracking, insurance change monitoring, authorization management — gets less attention than the immediate patient scheduling needs."}]},solution:{eyebrow:"The solution",title:"Women's health billing that understands <em>global periods, eligibility changes, and the full OBGYN workflow.</em>",description:"Hired Billing Support manages OBGYN billing with the specialty knowledge that maternity care, gynecology procedures, and women's health patient communication require — systematically tracking global periods, monitoring eligibility changes, managing authorizations, and following up on AR with the accuracy and sensitivity this specialty demands.",process:[{num:"01",title:"Global period tracking and management",description:"Every maternity patient's global billing period tracked — payer-specific global rules applied, insurance changes during pregnancy managed, and billing adjustments made when coverage changes mid-global."},{num:"02",title:"Eligibility monitoring for prenatal patients",description:"Insurance changes during pregnancy identified and managed — eligibility verified at each trimester touchpoint and coverage changes flagged before the next visit billing rather than after a surprise denial."},{num:"03",title:"Procedure, ultrasound, and lab billing coordination",description:"GYN procedures, diagnostic ultrasounds, lab services, and biopsies billed with correct preventive versus diagnostic coding, appropriate authorization, and accurate bundling management."},{num:"04",title:"Authorization tracking for GYN procedures",description:"Procedure authorizations obtained, tracked, and maintained — so GYN procedures move forward with confirmed coverage rather than discovering post-procedure that authorization was missing."},{num:"05",title:"Denial management with women's health coding context",description:"Denials reviewed with knowledge of global billing rules, preventive versus diagnostic distinctions, and payer-specific women's health coverage requirements — appeals constructed with the specific clinical and coding basis each denial requires."},{num:"06",title:"Patient-sensitive billing communication support",description:"Patient balance communications and billing questions handled with accuracy, clarity, and appropriate sensitivity — acknowledging that OBGYN billing conversations happen during significant life moments."}]},services:{eyebrow:"Services that fit OBGYN practices",title:"Women's health billing support that understands <em>every layer of OBGYN billing complexity.</em>",items:[{num:"01",title:"Global Maternity Billing Management",description:"Global period tracking with payer-specific rules, insurance change management, and billing adjustments — maternity billing done correctly across the full prenatal-to-postpartum period."},{num:"02",title:"Eligibility Monitoring During Pregnancy",description:"Insurance verified at each trimester touchpoint — coverage changes identified before they create billing surprises at delivery."},{num:"03",title:"GYN Procedure Authorization",description:"Prior authorizations obtained and tracked for GYN procedures — authorizations in place before procedures proceed."},{num:"04",title:"Procedure & Ultrasound Billing",description:"Procedures, diagnostic ultrasounds, and lab billing with correct preventive versus diagnostic coding and bundling management."},{num:"05",title:"Denial Management",description:"Denials reviewed with global billing, preventive versus diagnostic, and payer-specific women's health knowledge — appeals built with the specific basis each requires."},{num:"06",title:"AR Follow-Up",description:"Aged claims worked on a defined schedule — maternity and GYN claims followed up with payer-specific knowledge of global billing rules and coverage requirements."},{num:"07",title:"Patient Balance Communication",description:"Patient billing questions and balance communications handled with accuracy and sensitivity — the right tone for a specialty where billing conversations coincide with major life events."},{num:"08",title:"Credentialing & Payer Enrollment",description:"OBGYN provider credentialing and payer enrollment — staying active on maternity and women's health plans so patients' insurance is always accepted."}]},workflow:{eyebrow:"Women's health billing workflow",title:"From prenatal enrollment to postpartum collection. <em>Every global billing step managed.</em>",description:"Maternity billing is the most extended billing workflow in outpatient medicine — spanning months, involving coverage changes, and requiring precise management of what is included in the global and what is separately billable.",items:[{num:"01",label:"New OB Patient",sublabel:"Global registered"},{num:"02",label:"Eligibility",sublabel:"T1 · T2 · T3 checks"},{num:"03",label:"Insurance Change",sublabel:"Flag & adjust"},{num:"04",label:"Prenatal Visits",sublabel:"Global vs. separate"},{num:"05",label:"Delivery",sublabel:"Global claim"},{num:"06",label:"Postpartum",sublabel:"Follow-up billing"},{num:"07",label:"AR & Balance",sublabel:"Sensitive comms"}]},denialPatterns:{eyebrow:"Common OBGYN denial patterns",title:"The billing failures women's health practices <em>see most — and the prevention behind each.</em>",description:"OBGYN denials cluster around a small number of billing categories — global period rules, eligibility changes, preventive versus diagnostic distinctions, and procedure bundling. Each is preventable.",patterns:[{tag:"Global Period",tagClass:"tag-payer",title:"Service Not Covered Under Global Package",description:"Delivery or follow-up billed outside global package parameters. Prevented through payer-specific global billing rules applied at claim submission."},{tag:"Eligibility",tagClass:"tag-elig",title:"Coverage Changed During Pregnancy",description:"Prenatal visits billed to lapsed or changed insurance. Prevented through eligibility monitoring at each trimester touchpoint."},{tag:"Preventive vs. Diagnostic",tagClass:"tag-coding",title:"Preventive Service Billed as Diagnostic",description:"Annual GYN visit coded incorrectly — different cost-sharing applies. Prevented through preventive versus diagnostic classification review."},{tag:"Authorization",tagClass:"tag-auth",title:"GYN Procedure Without Prior Auth",description:"Procedure performed without confirmed authorization. Prevented through authorization tracking before procedure scheduling."},{tag:"Bundling",tagClass:"tag-coding",title:"Ultrasound Bundled with Global Visit",description:"Diagnostic ultrasound beyond global allowable billed but denied as bundled. Prevented through ultrasound type and frequency rules applied at submission."},{tag:"Documentation",tagClass:"tag-doc",title:"Medical Necessity — GYN Procedure Denial",description:"Procedure documentation does not clearly support medical necessity. Prevented through pre-submission documentation alignment check."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Global period registration and tracking per patient","Eligibility monitoring alerts at each trimester checkpoint","Authorization tracking for GYN procedures with expiration alerts","Denial categorization by reason code and claim type","AR aging alerts and follow-up scheduling","Insurance change flags during active maternity global periods"],human:["Global billing management with payer-specific rule application","Mid-pregnancy insurance change billing adjustments","Authorization requests and GYN procedure coverage confirmation","Denial appeals with women's health clinical context","Patient balance communication with appropriate sensitivity","Preventive versus diagnostic coding judgment calls"],pullQuote:'"OBGYN billing requires a level of patient-specific tracking that is unusual in specialty medicine — global periods that span months, eligibility changes mid-pregnancy, and patient communication that must be accurate and sensitive simultaneously. The practices that manage it well protect revenue and patient relationships at the same time."'},results:{eyebrow:"What changes",title:"Women's health billing that reflects <em>the complexity of the specialty.</em>",outcomes:[{icon:"◎",title:"Global periods tracked without gaps",description:"Every maternity global managed with payer-specific rules — coverage changes flagged and addressed before they disrupt billing."},{icon:"✓",title:"Insurance changes caught mid-pregnancy",description:"Eligibility monitored at each trimester touchpoint — no more surprise denials because a plan change during pregnancy went unnoticed."},{icon:"$",title:"All billable procedures captured and collected",description:"GYN procedures, diagnostic ultrasounds, and lab services billed correctly and followed up — revenue from additional services not lost to bundling or missed claims."},{icon:"↓",title:"Denial rates decline across OBGYN claim types",description:"Global period rules, authorization gaps, and preventive versus diagnostic errors caught pre-submission — denial rates decline systematically."},{icon:"→",title:"Patient billing communication is handled with care",description:"Balance communications delivered accurately and with sensitivity — patients receive clear, respectful billing communication at a time when their attention is already divided."},{icon:"⚡",title:"Administrative team focuses on patient scheduling",description:"Global tracking, insurance monitoring, and AR follow-up managed by HBS — OBGYN administrative staff focus on the prenatal care coordination that requires their direct attention."}]},compare:{eyebrow:"Why OBGYN billing needs specialty-aware support",title:"Generic billing applied to OBGYN <em>misses the global billing, eligibility, and coding nuances that drive denials.</em>",description:"OBGYN billing complexity is not visible from the outside. The denial patterns in women's health are preventable — but only when the billing team understands global billing mechanics, mid-pregnancy eligibility management, and the specific coding distinctions that payers apply differently to this specialty.",rows:[{label:"Global period management",hbs:"Payer-specific rules — tracked per patient",other:"Applied generically — frequent errors"},{label:"Mid-pregnancy eligibility",hbs:"Monitored at each touchpoint",other:"Verified at start — not updated"},{label:"Preventive vs. diagnostic coding",hbs:"Reviewed at claim level",other:"Applied inconsistently"},{label:"GYN procedure authorization",hbs:"Tracked before scheduling",other:"Obtained ad hoc"},{label:"Patient balance communication",hbs:"Accurate and sensitivity-aware",other:"Standard billing notice"},{label:"Billing team women's health knowledge",hbs:"OBGYN-trained",other:"General medical billing"}]},finalCta:{eyebrow:"Start with an OBGYN billing review",title:"If your women's health practice has global billing errors, mid-pregnancy eligibility gaps, or aging GYN procedure AR, <em>specialty-aware support changes the outcome.</em>",description:"We start with a review of your current OBGYN billing performance — global period management, eligibility gaps, denial patterns, and AR aging. No commitment required to see the picture.",buttons:[{text:"Strengthen OBGYN billing",variant:"light"},{text:"Talk to our women's health team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},ue={title:"Endocrinology Billing Services",subtitle:"Chronic care billing that tracks the full ongoing patient care relationship",description:"Hired Billing Support provides specialty-aware endocrinology billing — medication and device authorization management, lab claim billing coordination, recurring eligibility verification, denial management, AR follow-up, and patient recall support for diabetes, thyroid, and metabolic care practices.",hero:{eyebrow:"Endocrinology & Chronic Care",title:"Chronic disease billing requires the same consistency  <em>as chronic disease management.</em>",subtitle:"CGM authorizations, insulin pump approvals, GLP-1 step therapy documentation, and frequent lab billing — endocrinology billing creates recurring authorization and coding demands that require structured management.",description:"HBS handles the billing complexity behind chronic care so your team focuses on the clinical complexity."},sections:{pain:{eyebrow:"The endocrinology billing reality",title:"Chronic care billing is not complicated. <em>It is persistent — and the revenue leaks when consistency fails.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["An endocrinology practice does not bill episodic care. It bills ongoing relationships — patients who come back every three months for A1C monitoring, every six months for thyroid management, every year for diabetes device renewals. The billing behind those relationships requires the same recurring attention the clinical care does: authorizations renewed before they expire, lab claims coordinated against coverage, medication prior authorizations resubmitted as plans update their formularies.","The challenge is that chronic care billing failures are quiet. A CGM authorization that expires does not produce an immediate denial — it produces a series of denials over weeks as claims submit against lapsed coverage before anyone notices. A GLP-1 prior authorization that was not renewed because the payer changed its criteria produces denials that require clinical documentation to correct. These are not dramatic billing failures. They are slow revenue leaks that compound over months.","Endocrinology billing requires the same kind of proactive management that good chronic disease care does — staying ahead of renewals, tracking coverage changes, and following up consistently before gaps become problems.","Small endocrinology practices typically do not have staff dedicated to recurring authorization management. When authorization tracking competes with daily clinical operations, it consistently loses — until the denials arrive."],ledger:[{num:"01",title:"Medication and device authorizations expire without systematic renewal management",description:"CGM devices, insulin pumps, GLP-1 medications, and other diabetes therapies require prior authorizations with renewal cycles ranging from 90 days to one year. Without a systematic renewal calendar, authorizations lapse between visits — producing claim denials for treatments patients have been receiving for months."},{num:"02",title:"Lab billing requires coordination with testing coverage and frequency limits",description:"Endocrinology generates frequent lab orders — HbA1c, thyroid panels, metabolic panels, lipid profiles. Each payer has coverage rules for lab frequency, lab site requirements, and diagnosis code alignment. Without coordinated lab billing, claims deny based on frequency violations or diagnosis mismatches that were entirely preventable."},{num:"03",title:"Payer formulary changes affect medication authorization mid-treatment",description:"A patient stable on a GLP-1 medication whose payer changes its formulary at plan renewal may suddenly need a new prior authorization for the same drug — or face a step therapy requirement for a therapy they already tried. When this is not caught proactively, treatment continuity is disrupted and billing gaps follow."},{num:"04",title:"Recurring patients require recurring eligibility verification",description:"A patient who has been seen every three months for two years may have changed insurance twice in that time. Without eligibility verification at each visit, not just at the first enrollment, claims submit to the wrong payer or against lapsed coverage — producing denials that are difficult to correct retroactively."},{num:"05",title:"Small specialty teams manage clinical coordination and billing simultaneously",description:"Endocrinology practices are often small — one or two providers, a small administrative team. The same staff managing patient scheduling, medication prior authorizations, lab orders, and clinical documentation is also expected to manage billing, AR follow-up, and denial management. Something always gets less attention than it deserves."}]},solution:{eyebrow:"The solution",title:"Recurring authorization management and chronic care billing <em>that keeps pace with ongoing patient care.</em>",description:"Hired Billing Support provides endocrinology billing support built around the recurring care model — proactive authorization renewals, lab claim coordination, eligibility verification at each visit, and consistent AR follow-up that does not let chronic care revenue leak quietly between visits.",process:[{num:"01",title:"Recurring authorization management with renewal calendar",description:"Medication, device, and testing authorizations tracked with renewal calendars — renewals initiated before expiration so coverage is continuous and treatment is never disrupted by a billing gap."},{num:"02",title:"Lab claim billing coordination",description:"Lab claims submitted with correct diagnosis alignment, frequency rules applied, and payer-specific lab billing requirements met — lab revenue captured without the frequency and diagnosis denials that informal billing produces."},{num:"03",title:"Recurring eligibility verification",description:"Insurance verified at each visit — not just at initial enrollment — so coverage changes are caught before they produce retroactive billing problems across multiple visits."},{num:"04",title:"Formulary change monitoring",description:"Payer formulary updates tracked for active medications — patients identified when coverage requirements change so new prior authorizations are initiated before treatment is disrupted."},{num:"05",title:"Denial management with chronic care context",description:"Endocrinology denials appealed with chronic disease management context — authorization lapses addressed with continuous need documentation, frequency denials challenged with clinical necessity support."},{num:"06",title:"Patient follow-up and care continuation support",description:"Recall outreach, appointment follow-up, and patient communication support — ensuring patients who need recurring care return on schedule so the ongoing care relationship and its revenue continue."}]},services:{eyebrow:"Services that fit endocrinology practices",title:"Chronic care billing that tracks the full <em>ongoing patient care relationship.</em>",items:[{num:"01",title:"Medication & Device Authorization Management",description:"CGM, insulin pump, GLP-1, and specialty medication authorizations tracked with renewal calendars — no lapsed authorizations on chronic therapies."},{num:"02",title:"Lab Claim Billing Coordination",description:"HbA1c, thyroid panels, metabolic panels — lab claims submitted with correct diagnosis alignment, frequency rules applied, and payer-specific requirements met."},{num:"03",title:"Recurring Eligibility Verification",description:"Insurance verified at each visit — coverage changes caught before they produce retroactive billing problems."},{num:"04",title:"Formulary Change Monitoring",description:"Payer formulary updates tracked for active medications — new authorizations initiated when coverage requirements change."},{num:"05",title:"Chronic Disease Billing & Coding",description:"Diabetes, thyroid, hormonal, and metabolic care billing with correct chronic disease codes, care management codes, and documentation alignment."},{num:"06",title:"Denial Management",description:"Chronic care denials appealed with continuous need documentation — authorization lapses, frequency violations, and formulary denials addressed with the clinical context each requires."},{num:"07",title:"AR Follow-Up",description:"Recurring patient AR tracked systematically — chronic disease claims followed up on a defined schedule so slow leaks do not accumulate into significant revenue loss."},{num:"08",title:"Patient Recall & Follow-Up Support",description:"Recurring appointment outreach for chronic disease patients — ensuring ongoing care relationships continue so both patient care and practice revenue remain consistent."}]},workflow:{eyebrow:"Endocrinology recurring care billing workflow",title:"From initial authorization to long-term billing continuity. <em>Every renewal tracked, every lab claim coordinated.</em>",description:"Chronic care billing is circular — every successful visit leads to a follow-up, every follow-up requires current authorization and eligibility, and every authorization has a renewal date. The workflow needs to track all of them simultaneously.",items:[{num:"01",label:"Eligibility Check",sublabel:"Each visit"},{num:"02",label:"Auth Renewal",sublabel:"Before expiry"},{num:"03",label:"Visit & Labs",sublabel:"Coordinated"},{num:"04",label:"Lab Claims",sublabel:"Diagnosis aligned"},{num:"05",label:"Visit Claim",sublabel:"Chronic codes"},{num:"06",label:"AR Follow-Up",sublabel:"Recurring patients"},{num:"07",label:"Patient Recall",sublabel:"Next visit set"},{num:"08",label:"Revenue Cycle",sublabel:"Continuous"}]},denialPatterns:{eyebrow:"Common endocrinology denial patterns",title:"The denials chronic care practices see most — <em>each one preventable with proactive billing management.</em>",description:"Endocrinology denials cluster around authorization expiration, lab frequency, and diagnosis alignment — all predictable and preventable with systematic tracking.",patterns:[{tag:"Authorization",tagClass:"tag-auth",title:"CGM or Device Authorization Lapsed",description:"Chronic device authorization expired before renewal. Prevented through authorization renewal calendar with alerts before expiration."},{tag:"Authorization",tagClass:"tag-auth",title:"GLP-1 / Specialty Medication Prior Auth Expired",description:"Medication authorization not renewed after payer-defined validity period. Prevented through medication auth tracking with automatic renewal initiation."},{tag:"Lab Frequency",tagClass:"tag-coding",title:"Duplicate Lab Claim — Frequency Limit",description:"Lab test ordered within payer-defined frequency restriction. Prevented through frequency limit tracking per test and payer."},{tag:"Diagnosis",tagClass:"tag-doc",title:"Lab Claim — Diagnosis Code Mismatch",description:"Lab ordered under diagnosis that does not match payer coverage criteria for the test. Prevented through diagnosis-to-test alignment review at submission."},{tag:"Eligibility",tagClass:"tag-elig",title:"Coverage Changed Between Visits",description:"Patient insurance changed since last visit — claim submits to prior payer. Prevented through eligibility verification at each recurring visit."},{tag:"Formulary",tagClass:"tag-payer",title:"Medication Not Covered Under Updated Formulary",description:"Payer formulary changed — previously covered medication now requires step therapy or new auth. Prevented through formulary change monitoring for active patients."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Medication and device authorization renewal calendar tracking","Lab claim frequency limit monitoring per payer and test","Recurring eligibility verification scheduling per patient","Formulary update alerts for active medications","AR aging monitoring for chronic disease patient accounts","Patient recall scheduling for recurring follow-up appointments"],human:["Medication and device authorization submissions and renewals","Formulary change navigation and step therapy documentation","Lab claim diagnosis alignment and frequency exception requests","Chronic care denial appeals with continuous need documentation","Patient follow-up communication and recall coordination","Leadership reporting on recurring care billing performance"],pullQuote:'"Endocrinology billing is fundamentally about continuity — the same patients, the same conditions, the same recurring billing requirements, every quarter. The practices that manage it well build the tracking systems that make renewal and follow-up automatic rather than reactive. The ones that do not accumulate quiet revenue losses that compound over years."'},results:{eyebrow:"What changes",title:"Chronic care billing that keeps pace <em>with the ongoing care it supports.</em>",outcomes:[{icon:"◎",title:"Authorization renewals never expire unexpectedly",description:"Medication and device authorizations tracked with renewal calendars — renewals initiated before expiration so treatment and billing are never disrupted by a preventable lapse."},{icon:"✓",title:"Lab claims submit without frequency or diagnosis errors",description:"Lab billing coordinated with frequency limits and diagnosis alignment — lab revenue captured without the routine denials that informal billing produces."},{icon:"$",title:"Recurring patient AR stays current",description:"Chronic disease patient accounts followed up on a defined schedule — slow revenue leaks caught before they accumulate into significant losses."},{icon:"↓",title:"Formulary change denials eliminated proactively",description:"Coverage changes for active medications identified at plan renewal — new authorizations initiated before patients experience treatment disruption."},{icon:"→",title:"Patient recall ensures ongoing care relationships continue",description:"Systematic recall outreach for chronic disease patients — care relationships and their associated revenue stay intact rather than fading between visits."},{icon:"⚡",title:"Small team relieved of authorization management burden",description:"Recurring authorization tracking and renewal management handled by HBS — staff focus on patient scheduling and clinical coordination rather than authorization queues."}]},compare:{eyebrow:"Why endocrinology needs consistent backend support",title:"Chronic care billing fails consistently <em>when authorization and lab tracking are inconsistent.</em>",description:"The revenue leaks in endocrinology practices are predictable — expired authorizations, missed lab claim rules, eligibility gaps for recurring patients. Each one is preventable. Together, they represent a meaningful portion of revenue that was earned and not collected.",rows:[{label:"Authorization renewal management",hbs:"Calendar-tracked — proactive renewals",other:"Renewed when denials arrive"},{label:"Lab claim billing",hbs:"Frequency and diagnosis rules applied",other:"Submitted and corrected after denial"},{label:"Recurring eligibility",hbs:"Verified at each visit",other:"Checked at initial enrollment only"},{label:"Formulary change response",hbs:"Proactive — before disruption",other:"Discovered through denial"},{label:"Patient recall",hbs:"Systematic outreach",other:"Ad hoc or not done"},{label:"Billing team chronic care knowledge",hbs:"Endocrinology-trained",other:"General medical billing"}]},finalCta:{eyebrow:"Start with an endocrinology billing review",title:"If your practice has recurring authorization lapses, lab claim denials, or aging chronic care AR, <em>consistent backend support changes the outcome.</em>",description:"We start with a review of your current billing performance — authorization renewal gaps, lab billing patterns, and AR aging — and show you where revenue is leaking. No commitment required.",buttons:[{text:"Strengthen endocrinology billing",variant:"light"},{text:"Talk to our chronic care billing team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},ge={title:"Neurology Billing Services",subtitle:"Specialty-aware billing for complex neurological care",description:"Hired Billing Support provides specialty-aware neurology billing — treatment authorization management, documentation-aligned claim workflows, diagnostic and infusion billing, denial management, complex claim follow-up, and AR management for neurology and neurological specialty practices.",hero:{eyebrow:" Neurology Billing",title:"Neurology billing is complex enough without a billing  team<em> that does not understand it.</em>",subtitle:"Infusion therapy authorizations, EEG and nerve conduction billing, step therapy documentation, and high-value device approvals — neurology claims require specialty-specific billing knowledge and consistent prior auth management.",description:"HBS provides neurology billing support with the specialty depth your claims require."},sections:{pain:{eyebrow:"The neurology billing reality",title:"Neurological care involves complex diagnoses, long treatment relationships, <em>and the kind of medical necessity scrutiny that generic billing is not equipped to handle.</em>",ledgerEyebrow:"Where the revenue pressure builds",ledgerHeading:"The specific billing gaps <em>behind the specialty workflow.</em>",monologue:["A neurologist sees a patient with multiple sclerosis who requires quarterly infusion therapy. That therapy needs a prior authorization that must document clinical criteria — diagnosis confirmed, previous therapy trials documented, current disease activity supported. The authorization is approved for six months. Six months later, the same documentation process begins again — every time, for every patient on an ongoing disease-modifying treatment.","Neurology practices manage dozens of these ongoing authorization relationships simultaneously, across multiple disease categories — each with different payer-specific criteria, different documentation requirements, and different renewal timelines. When a small administrative team is managing this alongside nerve conduction study billing, EEG claims, inpatient consult billing, and outpatient visit follow-up, something consistently falls behind.","Neurology billing is not primarily a coding problem. It is a documentation and authorization management problem. The claims that deny in neurology almost always deny because the administrative process failed before the claim was submitted — not because the clinical care was inappropriate.","The practices that manage neurology revenue well do not do it by hiring more administrative staff. They do it by building a process that tracks every authorization, ensures documentation supports every high-scrutiny claim, and follows up persistently on the claims that require it."],ledger:[{num:"01",title:"Authorization management for neurological treatments is ongoing and documentation-intensive",description:"Infusion therapies, disease-modifying treatments, Botox for migraine, and specialty diagnostics all require prior authorizations with payer-specific clinical criteria. Managing these authorizations across a neurology patient population — with renewals, clinical updates, and appeals — requires dedicated attention that most administrative teams cannot provide consistently."},{num:"02",title:"Documentation must clearly support medical necessity for high-scrutiny neurological services",description:"High-cost neurological treatments trigger medical necessity review from payers. When documentation addresses the clinical situation but does not specifically satisfy the payer's criteria language — step therapy requirements, prior treatment failures, specific diagnostic criteria — the authorization or claim is denied and requires additional documentation work to resolve."},{num:"03",title:"Diagnostic billing involves complex coding for nerve conduction studies, EEGs, and imaging",description:"Nerve conduction studies, electromyography, EEGs, and neurological imaging each have specific coding requirements, payer coverage rules, and documentation standards. When diagnostic coding is applied without specialty knowledge, bundling errors, frequency violations, and documentation-code mismatches produce denials that require clinical review to correct."},{num:"04",title:"High-complexity care creates more administrative work between visits",description:"A neurology patient with epilepsy, MS, or a neuromuscular disease generates administrative work — medication refill authorizations, imaging requests, referral coordination, documentation requests, insurance questions — between every visit. When that work falls on clinical staff, provider time is consumed by administrative tasks that could be managed by a dedicated support team."},{num:"05",title:"AR grows when complex claims require detailed follow-up that does not happen consistently",description:"Infusion claims, high-cost neurology procedure claims, and disease-modifying therapy claims often require payer follow-up that goes beyond a portal check — clinical documentation requests, peer-to-peer calls, and escalated appeals. When that level of follow-up is not systematically applied, revenue sits in AR until it ages past recovery."}]},solution:{eyebrow:"The solution",title:"Documentation-aware billing and authorization management <em>that matches the complexity of neurological specialty care.</em>",description:"Hired Billing Support manages neurology billing with the documentation awareness, authorization tracking, and diagnostic coding knowledge that this high-scrutiny specialty requires — preventing the denials that are most common in neurology and following up on the complex claims that require persistent attention.",process:[{num:"01",title:"Neurology treatment authorization management",description:"Infusion therapy, disease-modifying treatment, Botox for migraine, and specialty diagnostic authorizations tracked — criteria documentation prepared, renewals initiated on schedule, and step therapy requirements documented proactively."},{num:"02",title:"Documentation-aligned claim review",description:"Claims reviewed against payer-specific medical necessity criteria before submission — documentation gaps identified and flagged so high-scrutiny neurological services are supported at submission rather than challenged post-denial."},{num:"03",title:"Diagnostic coding with neurology-specific knowledge",description:"Nerve conduction studies, EEGs, neuroimaging, and infusion claims submitted with correct CPT codes, modifiers, and diagnostic documentation — neurology-specific coding accuracy applied consistently."},{num:"04",title:"Complex claim follow-up with clinical escalation support",description:"High-scrutiny neurology claims followed up with the documentation support, peer-to-peer coordination, and escalation that complex claims require — not just portal status checks."},{num:"05",title:"Denial management with neurological clinical context",description:"Neurology denials appealed with specialty-specific clinical documentation — step therapy requirements, medical necessity criteria, and authorization disputes addressed with the neurology-specific clinical basis each requires."},{num:"06",title:"Inter-visit administrative and patient coordination support",description:"Authorization requests, documentation coordination, insurance questions, and patient follow-up managed between visits — provider and clinical staff administrative burden reduced between appointments."}]},services:{eyebrow:"Services that fit neurology practices",title:"Specialty-aware billing for complex <em>neurological care.</em>",items:[{num:"01",title:"Neurology Treatment Authorization Management",description:"Infusion, disease-modifying therapy, Botox, and specialty diagnostic authorizations — criteria documentation, submission, renewal tracking, and escalation all managed."},{num:"02",title:"Documentation-Aligned Claim Review",description:"Pre-submission documentation review for high-scrutiny neurology services — medical necessity gaps identified before claims submit into denial."},{num:"03",title:"Diagnostic Billing — NCS/EMG, EEG, Imaging",description:"Nerve conduction studies, electromyography, EEGs, and neuroimaging billed with specialty-specific coding accuracy and documentation alignment."},{num:"04",title:"Infusion Therapy Billing",description:"IVIG, rituximab, natalizumab, and other neurology infusion therapies billed with drug codes, administration codes, and authorization confirmation at claim submission."},{num:"05",title:"Denial Management & Complex Appeals",description:"Neurology denials appealed with clinical documentation support — medical necessity, step therapy, and authorization disputes addressed with specialty-specific evidence."},{num:"06",title:"High-Scrutiny Claim Follow-Up",description:"Complex neurology claims followed up with documentation support, peer-to-peer coordination assistance, and escalation — not just portal status checks."},{num:"07",title:"AR Management",description:"Neurology AR worked with the persistent follow-up that high-value, high-complexity claims require — financial weight and appeal deadlines both factored into prioritization."},{num:"08",title:"Credentialing & Payer Enrollment",description:"Neurologist credentialing and specialty payer enrollment — staying active on plans covering MS, epilepsy, and neuromuscular disease therapies."}]},workflow:{eyebrow:"Neurology revenue workflow",title:"Documentation and authorization first. <em>Claims and follow-up built on that foundation.</em>",description:"Neurology claims that deny do so because something failed before submission — at authorization, at documentation, or at coding. The billing workflow must address those steps first, then manage the claims that still require persistent follow-up.",items:[{num:"01",label:"Eligibility",sublabel:"Specialty benefits"},{num:"02",label:"Auth Request",sublabel:"Criteria docs ready"},{num:"03",label:"Auth Confirmed",sublabel:"Before service"},{num:"04",label:"Doc Review",sublabel:"Necessity aligned"},{num:"05",label:"Neurology Coding",sublabel:"Specialty-specific"},{num:"06",label:"Claim Submitted",sublabel:"High-scrutiny noted"},{num:"07",label:"Follow-Up",sublabel:"P2P if needed"},{num:"08",label:"Payment",sublabel:"Revenue collected"}]},denialPatterns:{eyebrow:"Common neurology denial patterns",title:"The billing failures that appear most often <em>in neurological specialty practices.</em>",description:"Neurology denials are concentrated in authorization, medical necessity, and diagnostic coding — each preventable with the right process in place before claims submit.",patterns:[{tag:"Authorization",tagClass:"tag-auth",title:"Infusion Therapy — Auth Not Obtained",description:"High-cost infusion proceeded without confirmed authorization. Prevented through authorization-before-scheduling protocol and auth status confirmation at infusion prep."},{tag:"Medical Necessity",tagClass:"tag-doc",title:"Step Therapy Not Documented",description:"Disease-modifying therapy denied because prior therapy failure not documented per payer criteria. Prevented through step therapy documentation checklist at authorization request."},{tag:"Diagnostic Coding",tagClass:"tag-coding",title:"NCS/EMG Bundling Error",description:"Nerve conduction study and EMG submitted with incorrect modifier combination or incorrect number of units. Prevented through neurology-specific diagnostic coding review."},{tag:"Payer Review",tagClass:"tag-payer",title:"High-Cost Therapy — Medical Director Review",description:"Disease-modifying therapy triggers payer medical director review. Managed through complete clinical documentation response and peer-to-peer coordination when needed."},{tag:"Documentation",tagClass:"tag-doc",title:"Neurology Visit — Level of Service Downgrade",description:"Complex neurology visit documentation does not support billed complexity level. Prevented through documentation-to-code alignment review before submission."},{tag:"Authorization",tagClass:"tag-auth",title:"Quarterly Botox Auth Expired Before Treatment",description:"Authorization renewal not initiated before prior auth expired. Prevented through authorization renewal calendar with alerts before quarterly expiration."}]},aiHuman:{eyebrow:"The AI + human advantage",title:"Automation where speed matters. <em>Specialists where judgment does.</em>",machineLabel:"AI-assisted specialty workflows",humanLabel:"Human billing specialists",machine:["Treatment authorization tracking with renewal calendars","Step therapy documentation checklist monitoring per patient","High-scrutiny claim status monitoring with escalation triggers","Diagnostic claim billing pattern tracking by code and payer","AR aging alerts for complex neurology claims","Denial categorization by reason, payer, and service type"],human:["Neurology treatment authorization submissions with criteria documentation","Step therapy documentation preparation and payer escalation","Pre-submission documentation review for high-scrutiny services","Complex claim follow-up with peer-to-peer coordination support","Denial appeals with neurology-specific clinical documentation","Inter-visit patient coordination and administrative support"],pullQuote:'"Neurology billing is demanding not because the codes are exotic but because the documentation and authorization standards are high — and because the consequences of getting them wrong involve clinical treatments that cannot simply be delayed while paperwork is corrected. The billing process must be disciplined enough to match the clinical stakes."'},results:{eyebrow:"What changes",title:"Neurology billing that matches <em>the documentation and authorization standards the specialty requires.</em>",outcomes:[{icon:"◎",title:"Treatment authorizations confirmed before service",description:"Infusion, disease-modifying therapy, and specialty diagnostic authorizations in place before service — no more high-cost treatments delivered without authorization coverage."},{icon:"✓",title:"Step therapy documentation complete at authorization",description:"Prior therapy failure, diagnostic criteria, and clinical indicators documented against payer-specific criteria — step therapy denials become preventable."},{icon:"$",title:"Complex claims followed up with clinical escalation support",description:"High-scrutiny neurology claims followed up beyond portal checks — peer-to-peer coordination, documentation requests, and escalation managed so complex claims resolve."},{icon:"↓",title:"Diagnostic coding errors eliminated through review",description:"NCS/EMG, EEG, and infusion claims reviewed with neurology-specific coding knowledge — bundling errors and modifier mistakes caught pre-submission."},{icon:"→",title:"Providers focus on complex clinical care",description:"Authorization management, documentation coordination, and billing follow-up handled by HBS — neurologists focus on the diagnostic and therapeutic work that requires their expertise."},{icon:"⚡",title:"Inter-visit administrative burden reduced",description:"Authorization requests, documentation coordination, and patient communication managed between visits — staff workload between appointments decreases without reducing care quality."}]},compare:{eyebrow:"Why neurology needs specialty-aware execution",title:"Neurology billing done without specialty knowledge <em>fails at the authorization and documentation steps that matter most.</em>",description:"The most expensive neurology billing failures occur before claims are submitted — at authorization and documentation. Fixing them after denial is slower, more expensive, and produces worse outcomes than preventing them with a specialty-aware billing process.",rows:[{label:"Authorization before treatment",hbs:"Protocol-enforced for all services",other:"Ad hoc — gaps common"},{label:"Step therapy documentation",hbs:"Checklist at authorization request",other:"Addressed through denial response"},{label:"Diagnostic coding review",hbs:"Neurology-specific before submission",other:"Applied without specialty knowledge"},{label:"High-scrutiny claim follow-up",hbs:"Clinical escalation when needed",other:"Portal checks only"},{label:"Medical necessity documentation",hbs:"Reviewed against payer criteria",other:"Submitted without alignment check"},{label:"Billing team neurology knowledge",hbs:"Neurology-trained",other:"General medical billing"}]},finalCta:{eyebrow:"Start with a neurology billing review",title:"If your neurology practice has authorization gaps, step therapy denials, or complex claims aging in AR, <em>specialty-aware billing changes the outcome.</em>",description:"We start with a review of your current billing performance — authorization workflows, documentation gaps, diagnostic coding accuracy, and AR aging on complex claims. No commitment required.",buttons:[{text:"Strengthen neurology billing",variant:"light"},{text:"Talk to our neurology billing team",variant:"ghost"}],trustLine:"HIPAA · BAA on every engagement · Specialty-trained billing team · No long-term contract required"}}},be={"start-ups":ee,"small-medical-practices":ie,"medium-large-medical-practices":te,"member-centric-care":ae,"enterprise-medical-operation":ne,fqhc:re,payers:oe,"medical-order-transmission":se,"hbs-marketing":le,"developer-portal":ce,psychiatry:de,orthopedic:pe,cardiology:he,obgyn:me,endocrinology:ue,neurology:ge};function fe(i){return be[i]||null}const M={"start-ups":U,"small-medical-practices":Y,"member-centric-care":J,"medium-large-medical-practices":_,"enterprise-medical-operation":V,fqhc:$,payers:K,"medical-order-transmission":X,"hbs-marketing":Z,"developer-portal":Q,psychiatry:G,orthopedic:L,cardiology:O,obgyn:I,endocrinology:D,neurology:W},ye=({solution:i,slug:n})=>{var b,f,y,w,v,x,k,j,N,A,z,C,q,P,S;const[r,o]=l.useState({name:"",email:"",phone:"",service:"",message:""}),[s,B]=l.useState(!1),[u,g]=l.useState(!1),E=l.useMemo(()=>{var t,a,c;return((c=(a=(t=i.sections)==null?void 0:t.services)==null?void 0:a.items)==null?void 0:c.map(m=>m.title))??[]},[i.sections]),d=t=>{const{name:a,value:c}=t.target;o(m=>({...m,[a]:c}))},H=async t=>{t.preventDefault(),g(!0),await new Promise(a=>setTimeout(a,900)),g(!1),B(!0)},R=r.name&&r.email&&r.phone&&r.service&&r.message;return l.useEffect(()=>{const t=new IntersectionObserver(p=>{p.forEach(h=>{h.isIntersecting&&(h.target.classList.add("in"),t.unobserve(h.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});document.querySelectorAll(".fade-in").forEach(p=>t.observe(p));const a=document.getElementById("nav"),c=()=>{a&&a.classList.toggle("scrolled",window.scrollY>8)};return window.addEventListener("scroll",c),document.querySelectorAll("[data-animated]").forEach((p,h)=>{p.style.setProperty("--reveal-delay",`${h*80}ms`)}),()=>{window.removeEventListener("scroll",c),t.disconnect()}},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
    :root {
      --ink: #0A1628;
      --ink-soft: #1B2942;
      --ink-mute: #475569;
      --paper: #FAF7F2;
      --paper-warm: #F2EDE3;
      --paper-line: #E8E2D5;
      --white: #FFFFFF;
      --signal: #00C896;
      --signal-deep: #00876B;
      --signal-pale: rgba(0, 200, 150, 0.08);
      --amber: #F59E0B;
      --amber-deep: #B45309;
      --amber-pale: rgba(245, 158, 11, 0.08);
      --danger: #D64545;
      --danger-pale: rgba(214, 69, 69, 0.07);
      --radius: 4px;
      --radius-lg: 12px;
      --max: 1280px;
      --gutter: clamp(20px, 4vw, 48px);
      --serif: 'Fraunces', 'Times New Roman', serif;
      --sans: 'Inter Tight', -apple-system, sans-serif;
      --mono: 'JetBrains Mono', monospace;
      --ease: cubic-bezier(0.22, 1, 0.36, 1);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--sans);
      background: var(--paper);
      color: var(--ink);
      line-height: 1.5;
      font-size: 16px;
      overflow-x: hidden;
    }

    .container {
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 var(--gutter);
    }

    .eyebrow {
      font-family: var(--mono);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--ink-mute);
      display: inline-flex;
      align-items: left;
      gap: 10px;
    }

    .eyebrow::before {
      content: '';
      width: 24px;
      height: 1px;
      background: currentColor;
    }

    .eyebrow--light {
      color: rgba(250, 247, 242, 0.5);
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 22px;
      border-radius: var(--radius);
      font-family: var(--sans);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 0.2s var(--ease), color 0.2s, transform 0.15s;
      white-space: nowrap;
      text-decoration: none;
    }

    .btn:hover {
      transform: translateY(-1px);
    }

    .btn .arrow {
      transition: transform 0.2s;
      flex-shrink: 0;
    }

    .btn:hover .arrow {
      transform: translateX(3px);
    }

    .btn-primary {
      background: var(--ink);
      color: var(--paper);
      border-color: var(--ink);
    }

    .btn-primary:hover {
      background: var(--ink-soft);
    }

    .btn-ghost {
      background: transparent;
      color: var(--ink);
      border-color: var(--paper-line);
    }

    .btn-ghost:hover {
      background: var(--paper-warm);
      border-color: var(--ink-mute);
    }

    .btn-light {
      background: var(--paper);
      color: var(--ink);
      border-color: var(--paper);
    }

    .btn-light:hover {
      background: var(--paper-warm);
    }

    .btn-lg {
      padding: 14px 28px;
      font-size: 15px;
    }

    /* Hero Section */
  

    .who-hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .who-hero-grain {
      position: absolute;
      inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
      opacity: 0.4;
    }

    .who-hero-inner {
      position: relative;
      z-index: 1;
      max-width: var(--max);
      margin: 0 auto;
      padding: 0 var(--gutter);
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 64px;
      align-items: center;
    }

    .who-hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: var(--mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.16em;
      color: var(--signal-deep);
      background: rgba(0, 200, 150, 0.08);
      border: 1px solid rgba(0, 200, 150, 0.2);
      padding: 6px 14px;
      border-radius: 100px;
      margin-bottom: 24px;
    }

    .who-hero-title {
      font-family: var(--serif);
      font-size: clamp(2.6rem, 5.5vw, 4.2rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.02;
      color: var(--ink);
      margin-bottom: 24px;
      font-variation-settings: "opsz" 144;
    }

    .who-hero-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--ink-mute);
    }

    .who-hero-subtitle {
      font-size: 17px;
      line-height: 1.7;
      color: var(--ink-soft);
      margin-bottom: 14px;
      max-width: 560px;
    }

    .who-hero-lede {
      font-size: 15px;
      line-height: 1.75;
      color: var(--ink-mute);
      max-width: 540px;
      margin-bottom: 40px;
    }

    .who-hero-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .who-hero-visual {
      animation-delay: 0.55s;
    }

    .organization-dashboard {
      background: var(--ink);
      border: 1px solid var(--paper-line);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 4px 24px rgba(10, 22, 40, 0.08), 0 1px 4px rgba(10, 22, 40, 0.05);
    }

    .dash-title {
      font-family: var(--mono);
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.18em;
      color: var(--paper);
      margin-bottom: 20px;
    }

    .check-rows {
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 0;
    }

    .check-row {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 7px 0;
      border-bottom: 1px solid var(--paper-line);
      opacity: 0;
      transform: translateY(12px);
      animation: reveal-row 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--reveal-delay, 0ms);
    }

    .check-row:last-child {
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
      background: var(--signal);
      color: #fff;
    }

    .ck-pend {
      background: var(--amber-pale);
      border: 1px solid var(--amber);
      color: var(--amber-deep);
    }

    .ck-open {
      background: var(--paper-warm);
      border: 1px solid var(--paper-line);
      color: transparent;
    }

    .check-label {
      font-size: 11px;
      color: var(--paper);
      line-height: 1.4;
    }

    .check-label.done {
      color: var(--paper);
      text-decoration: line-through;
    }

    @keyframes reveal-row {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dash-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin: 14px 0;
    }

    .stat {
      background: var(--paper-warm);
      border-radius: 4px;
      padding: 10px 8px;
      text-align: center;
    }

    .stat-num {
      font-family: var(--serif);
      font-size: 1.25rem;
      color: var(--signal-deep);
      display: block;
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-label {
      font-family: var(--mono);
      font-size: 8px;
      color: var(--ink-mute);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .gap-callout {
      margin-top: 16px;
      padding: 12px 14px;
      background: var(--signal-pale);
      border-left: 2px solid var(--signal);
      border-radius: 0 4px 4px 0;
    }

    .gap-callout strong {
      font-weight: 600;
      color: var(--signal-deep);
    }

    .gap-callout-label {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--signal-deep);
      margin-bottom: 4px;
      display: block;
    }

    .gap-callout-value {
      font-family: var(--serif);
      font-size: 14px;
      color: var(--signal-deep);
    }

    /* Reveal animations */
    .reveal {
      opacity: 0;
      transform: translateY(20px);
    }

    .reveal-1 {
      animation: rv 0.8s var(--ease) 0.1s forwards;
    }

    .reveal-2 {
      animation: rv 0.8s var(--ease) 0.22s forwards;
    }

    .reveal-3 {
      animation: rv 0.8s var(--ease) 0.36s forwards;
    }

    .reveal-4 {
      animation: rv 0.8s var(--ease) 0.5s forwards;
    }

    @keyframes rv {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Fade-in sections */
    .fade-in {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.9s var(--ease), transform 0.9s var(--ease);
    }

    .fade-in.in {
      opacity: 1;
      transform: translateY(0);
    }

    /* Section base */
    .who-section {
      padding: 100px 0;
      position: relative;
    }

    .who-section--warm {
      background: var(--paper-warm);
    }

    .who-section--ink {
      background: var(--ink);
      color: var(--paper);
    }

    .who-section--ink-soft {
      background: var(--ink-soft);
      color: var(--paper);
    }

    .who-section--ink .display,
    .who-section--ink-soft .display {
      color: var(--paper);
    }

    .who-section--ink .display em,
    .who-section--ink-soft .display em {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .eyebrow,
    .who-section--ink-soft .eyebrow {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .eyebrow::before,
    .who-section--ink-soft .eyebrow::before {
      background: rgba(250, 247, 242, 0.4);
    }

    .who-section--ink p,
    .who-section--ink-soft p {
      color: rgba(250, 247, 242, 0.65);
    }

    /* Section header */
    .section-header {
      margin-bottom: 64px;
    }

    .section-title {
      font-family: var(--serif);
      font-size: clamp(2rem, 3.8vw, 3rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.06;
      margin-top: 16px;
      max-width: 780px;
      font-variation-settings: "opsz" 144;
    }

    .section-title em {
      font-style: italic;
      font-weight: 300;
      color: var(--ink-mute);
    }

    .section-subtitle {
      margin-top: 18px;
      font-size: 16px;
      line-height: 1.75;
      color: var(--ink-mute);
      max-width: 560px;
    }

    .who-section--ink .section-title,
    .who-section--ink-soft .section-title {
      color: var(--paper);
    }

    .who-section--ink .section-title em,
    .who-section--ink-soft .section-title em {
      color: rgba(250, 247, 242, 0.5);
    }

    .who-section--ink .section-subtitle,
    .who-section--ink-soft .section-subtitle {
      color: rgba(250, 247, 242, 0.6);
    }

    /* Monologue */
    .monologue {
      max-width: 780px;
      border-left: 2px solid var(--paper-line);
      padding-left: 32px;
    }

    .monologue p {
      font-size: 16px;
      line-height: 1.85;
      color: var(--ink-soft);
      margin-bottom: 20px;
    }

    .monologue p:last-child {
      margin-bottom: 0;
    }

    .monologue .highlight {
      font-family: var(--serif);
      font-size: 19px;
      font-style: italic;
      color: var(--ink);
      line-height: 1.5;
    }

    /* Pain grid */
    .pain-grid {
      display: flex;
      flex-direction: column;
      margin-top: 48px;
    }

    .pain-card {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 0 24px;
      padding: 28px 0;
      border-bottom: 1px solid var(--paper-line);
      align-items: start;
    }

    .pain-card:last-child {
      border-bottom: none;
    }

    .pain-card-num {
      font-family: var(--serif);
      font-size: 13px;
      color: var(--ink-mute);
      padding-top: 3px;
    }

    .pain-card h4 {
      font-size: 15px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 6px;
      line-height: 1.35;
    }

    .pain-card p {
      font-size: 14px;
      color: var(--ink-mute);
      line-height: 1.72;
    }

    /* Service grid */
    .service-fit-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1px;
      background: var(--paper-line);
      border: 1px solid var(--paper-line);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .service-fit-card {
      background: var(--white);
      padding: 28px;
      transition: background 0.2s;
    }

    .service-fit-card:hover {
      background: var(--paper-warm);
    }

    .service-fit-card-num {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.12em;
      color: var(--signal-deep);
      margin-bottom: 12px;
      display: block;
    }

    .service-fit-card h4 {
      font-size: 14px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 8px;
    }

    .service-fit-card p {
      font-size: 13px;
      color: var(--ink-mute);
      line-height: 1.65;
    }

    .marketplace-form {
      background: rgba(255, 255, 255, 0.95);
      border: 1px solid var(--paper-line);
      border-radius: 16px;
      padding: 38px;
      max-width: 980px;
      margin: 0 auto;
      box-shadow: 0 24px 80px rgba(10, 22, 40, 0.08);
    }

    .marketplace-form form {
      display: grid;
      gap: 22px;
    }

    .marketplace-form label {
      display: block;
      font-size: 13px;
      color: var(--ink-soft);
      line-height: 1.4;
      font-weight: 600;
    }

    .field-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .field-full {
      grid-column: 1 / -1;
    }

    .marketplace-form input,
    .marketplace-form select,
    .marketplace-form textarea {
      width: 100%;
      margin-top: 8px;
      padding: 14px 16px;
      border: 1px solid var(--paper-line);
      border-radius: 12px;
      background: var(--paper);
      color: var(--ink);
      font-family: var(--sans);
      font-size: 15px;
      line-height: 1.4;
      outline: none;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .marketplace-form input:focus,
    .marketplace-form select:focus,
    .marketplace-form textarea:focus {
      border-color: var(--signal);
      box-shadow: 0 0 0 4px rgba(0, 200, 150, 0.12);
    }

    .marketplace-form textarea {
      min-height: 160px;
      resize: vertical;
    }

    .marketplace-form .form-success {
      text-align: center;
    }

    .marketplace-form .form-success h3 {
      font-family: var(--serif);
      font-size: 1.9rem;
      margin-bottom: 14px;
      color: var(--ink);
    }

    .marketplace-form .form-success p {
      color: var(--ink-soft);
      font-size: 15px;
      line-height: 1.7;
    }

    @media (max-width: 860px) {
      .field-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 640px) {
      .marketplace-form {
        padding: 28px;
      }
    }

    /* Process timeline */
    .process-timeline {
      display: flex;
      flex-direction: column;
    }

    .process-step {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 0 24px;
      padding: 28px 0;
      border-bottom: 1px solid var(--paper-line);
      align-items: start;
    }

    .process-step:last-child {
      border-bottom: none;
    }

    .process-step-num {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--signal-deep);
      letter-spacing: 0.1em;
      padding-top: 4px;
    }

    .process-step h4 {
      font-size: 15px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 6px;
    }

    .process-step p {
      font-size: 14px;
      color: var(--ink-mute);
      line-height: 1.72;
    }

    .who-section--ink .process-step {
      border-color: rgba(250, 247, 242, 0.1);
    }

    .who-section--ink .process-step h4 {
      color: var(--paper);
    }

    .who-section--ink .process-step p {
      color: rgba(250, 247, 242, 0.6);
    }

    .who-section--ink .process-step-num {
      color: var(--signal);
    }

    /* Two column layout */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: start;
    }

    /* Workflow dashboard */
    .workflow-dashboard {
      display: flex;
      align-items: flex-start;
      gap: 0;
      margin-top: 48px;
      position: relative;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .workflow-dashboard::before {
      content: '';
      position: absolute;
      top: 18px;
      left: 24px;
      right: 24px;
      height: 1px;
      background: var(--paper-line);
      z-index: 0;
    }

    .wf-node {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      min-width: 110px;
      position: relative;
      z-index: 1;
      padding: 0 6px;
    }

    .wf-dot {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 500;
      margin-bottom: 10px;
      border: 1px solid var(--paper-line);
      flex-shrink: 0;
      background: var(--white);
    }

    .wf-dot--signal {
      background: rgba(0, 200, 150, 0.1);
      color: var(--signal-deep);
      border-color: rgba(0, 200, 150, 0.25);
    }

    .wf-dot--amber {
      background: rgba(245, 158, 11, 0.1);
      color: var(--amber-deep);
      border-color: rgba(245, 158, 11, 0.25);
    }

    .wf-dot--ink {
      background: var(--ink);
      color: var(--paper);
      border-color: var(--ink);
    }

    .wf-node-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--ink);
      text-align: center;
      line-height: 1.3;
      margin-bottom: 3px;
    }

    .wf-node-sub {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--ink);
      text-align: center;
      letter-spacing: 0.06em;
    }

    /* AI + Human split */
    .ai-split {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2px;
      background: var(--paper-line);
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-top: 48px;
    }

    .ai-col {
      padding: 36px;
    }

    .ai-col--machine {
      background: var(--paper-warm);
    }

    .ai-col--human {
      background: var(--white);
    }

    .ai-col-label {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 1px solid var(--paper-line);
    }

    .ai-col--machine .ai-col-label {
      color: var(--signal-deep);
    }

    .ai-col--human .ai-col-label {
      color: var(--ink-mute);
    }

    .ai-items {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .ai-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .ai-item-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
      margin-top: 6px;
    }

    .ai-col--machine .ai-item-dot {
      background: var(--signal);
    }

    .ai-col--human .ai-item-dot {
      background: var(--ink);
    }

    .ai-item p {
      font-size: 13px;
      color: var(--ink-mute);
      line-height: 1.6;
    }

    /* Pull quote */
    .pull-quote {
      font-family: var(--serif);
      font-size: clamp(1.1rem, 2.2vw, 1.45rem);
      font-style: italic;
      color: var(--ink);
      line-height: 1.65;
      padding: 28px 32px;
      border-left: 3px solid var(--signal);
      background: var(--signal-pale);
      border-radius: 0 var(--radius) var(--radius) 0;
      margin: 40px 0;
      max-width: 860px;
    }

    /* Outcome grid */
    .outcome-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .outcome-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .outcome-grid {
    grid-template-columns: 1fr;
  }
}
    /* Compare table */
    .compare-wrap {
      background: var(--ink);
      border-radius: var(--radius-lg);
      overflow: hidden;
      margin-top: 48px;
    }

    .compare-header {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 14px 28px;
      background: rgba(255, 255, 255, 0.04);
    }

    .compare-header span {
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--paper);
    }

    .compare-header span.hbs-col {
      color: var(--signal);
    }

    .compare-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      padding: 14px 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .compare-row span {
      font-size: 13px;
    }

    .c-label {
      color: var(--paper);
    }

    .c-hbs {
      color: var(--signal);
      font-weight: 500;
    }

    .c-other {
      color: var(--paper);
    }

    /* CTA Section */
    .cta-section {
      background: var(--ink);
      padding: 120px var(--gutter);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-glow {
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 400px;
      background: radial-gradient(ellipse at center, rgba(0, 200, 150, 0.2), transparent 70%);
      pointer-events: none;
    }

    .cta-inner {
      position: relative;
      z-index: 1;
      max-width: 680px;
      margin: 0 auto;
    }

    .cta-title {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 2.5vw, 3.4rem);
      font-weight: 400;
      letter-spacing: -0.025em;
      line-height: 1.06;
      color: var(--paper);
      margin: 16px 0 24px;
      font-variation-settings: "opsz" 144;
    }

    .cta-title em {
      font-style: italic;
      font-weight: 300;
      color: rgba(250, 247, 242, 0.5);
    }

    .cta-text {
      font-size: 16px;
      line-height: 1.75;
      color: rgba(250, 247, 242, 0.6);
      margin-bottom: 40px;
    }

    .cta-actions {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .trust-line {
      margin-top: 28px;
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(250, 247, 242, 0.35);
    }

    /* Footer */
    footer {
      background: var(--ink);
      color: rgba(250, 247, 242, 0.6);
      padding: 60px 0 32px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 24px;
      font-size: 13px;
    }

    .footer-inner a {
      color: rgba(250, 247, 242, 0.6);
    }

    .footer-inner a:hover {
      color: var(--signal);
    }

    .footer-legal {
      display: flex;
      gap: 24px;
    }

    @media (max-width: 1024px) {
      .who-hero-inner {
        grid-template-columns: 1fr;
      }

      .who-hero-visual {
        display: none;
      }

      .two-col {
        grid-template-columns: 1fr;
        gap: 40px;
      }

      .ai-split {
        grid-template-columns: 1fr;
      }

      .workflow-dashboard::before {
        display: none;
      }
    }

    @media (max-width: 720px) {
      .who-section {
        padding: 64px 0;
      }

    
      .cta-section {
        padding: 80px var(--gutter);
      }

      .section-header {
        margin-bottom: 40px;
      }
    }
  `}),n&&M[n]?T.createElement(M[n],{solution:i}):e.jsx("section",{className:"who-hero",children:e.jsx("div",{className:"who-hero-inner",children:e.jsxs("div",{children:[((b=i.hero)==null?void 0:b.eyebrow)&&e.jsx("div",{className:"eyebrow reveal reveal-1",children:i.hero.eyebrow}),((f=i.hero)==null?void 0:f.title)&&e.jsxs("h1",{className:"who-hero-title reveal reveal-2",children:[i.hero.title,i.hero.subtitle&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("em",{children:i.hero.subtitle})]})]}),((y=i.hero)==null?void 0:y.description)&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"who-hero-lede reveal reveal-3",children:i.hero.description}),e.jsx("div",{className:"who-hero-actions reveal reveal-4",children:e.jsx("a",{href:"#cta",className:"btn btn-primary btn-lg",children:"Learn More"})})]})]})})}),((w=i.sections)==null?void 0:w.pain)&&e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"who-section",id:"pain",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.pain.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.pain.title}})]}),e.jsx("div",{className:"monologue fade-in",children:i.sections.pain.monologue.map((t,a)=>e.jsx("p",{children:t.startsWith('"')?e.jsx("span",{className:"highlight",children:t}):t},a))})]})}),e.jsx("section",{className:"who-section who-section--warm",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.pain.ledgerEyebrow||"Where the pressure lives"}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.pain.ledgerHeading||"The specific gaps <em>behind the daily grind.</em>"}})]}),e.jsx("div",{className:"pain-grid fade-in",children:i.sections.pain.ledger.map(t=>e.jsxs("div",{className:"pain-card",children:[e.jsx("div",{className:"pain-card-num",children:t.num}),e.jsxs("div",{children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.num))})]})})]}),((v=i.sections)==null?void 0:v.solution)&&e.jsx("section",{className:"who-section who-section--ink",id:"solution",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.solution.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.solution.title}}),e.jsx("p",{className:"section-subtitle",children:i.sections.solution.description})]}),e.jsxs("div",{className:"two-col fade-in",children:[e.jsx("div",{className:"process-timeline",children:i.sections.solution.process.slice(0,3).map(t=>e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-step-num",children:t.num}),e.jsxs("div",{children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.num))}),e.jsx("div",{className:"process-timeline",children:i.sections.solution.process.slice(3).map(t=>e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-step-num",children:t.num}),e.jsxs("div",{children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.num))})]})]})}),((x=i.sections)==null?void 0:x.services)&&e.jsx("section",{className:"who-section",id:"services",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.services.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.services.title}})]}),e.jsx("div",{className:"service-fit-grid fade-in",children:i.sections.services.items.map(t=>{const a={WORKFLOW:"#00C896",TECHNICAL:"#0A1628",IMPLEMENTATION:"#F59E0B",DATA:"#D4A574",PROCESS:"#D64545",INTELLIGENCE:"#F59E0B",FEEDBACK:"#D64545",QA:"#858B93"},c=t.category&&a[t.category]||"#0A1628";return e.jsxs("div",{className:"service-fit-card",children:[t.category&&e.jsx("span",{className:"service-category",style:{color:c,fontFamily:"JetBrains Mono, monospace",fontSize:"9px",letterSpacing:"0.16em",textTransform:"uppercase",marginBottom:"12px",display:"inline-block",fontWeight:500},children:t.category}),e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]},t.num)})})]})}),!((k=i.sections)!=null&&k.workflow)&&e.jsx("section",{className:"who-section who-section--warm",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"Practice launch roadmap"}),e.jsxs("h2",{className:"section-title",children:["The right things started at the right time. ",e.jsx("em",{children:"Not in the order that feels most urgent."})]}),e.jsx("p",{className:"section-subtitle",children:"Credentialing takes months. Billing setup takes weeks. Front desk workflows take days. Every track has a different timeline — and the ones with the longest lead time need to start first."})]}),e.jsx("div",{className:"workflow-dashboard fade-in",children:[{time:"M-4",label:"Entity & NPI",sub:"Tax ID · NPPES",dotClass:"wf-dot--signal"},{time:"M-4",label:"CAQH & Docs",sub:"Provider file built",dotClass:"wf-dot--signal"},{time:"M-4",label:"Payer Apps",sub:"All submitted",dotClass:"wf-dot--signal"},{time:"M-2",label:"Billing Setup",sub:"EHR · Clearinghouse",dotClass:"wf-dot--amber"},{time:"M-2",label:"Workflows",sub:"SOPs documented",dotClass:"wf-dot--amber"},{time:"M-1",label:"Readiness Check",sub:"All tracks reviewed",dotClass:"wf-dot--amber"},{time:"Open",label:"First Patients",sub:"Claims submit Day 1",dotClass:"wf-dot--ink"},{time:"Post",label:"Revenue Active",sub:"Billing stabilized",dotClass:"wf-dot--signal"}].map((t,a)=>e.jsxs("div",{className:"wf-node",children:[e.jsx("div",{className:`wf-dot ${t.dotClass}`,children:t.time}),e.jsx("div",{className:"wf-node-label",children:t.label}),e.jsx("div",{className:"wf-node-sub",children:t.sub})]},a))})]})}),!((j=i.sections)!=null&&j.howWeWork)&&n==="start-ups"&&e.jsx("section",{className:"who-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"How HBS works with your startup team"}),e.jsxs("h2",{className:"section-title",children:["We take ownership of the backend ",e.jsx("em",{children:"so you can take ownership of clinical care."})]}),e.jsx("p",{className:"section-subtitle",children:"A founder should not have to choose between seeing patients and building billing infrastructure. We manage the operational build so clinical focus remains where it belongs."})]}),e.jsx("div",{className:"process-timeline fade-in",style:{maxWidth:"780px"},children:[{num:"01",title:"We map your full launch timeline in week one",description:"Every task identified, sequenced, and assigned a start date — with long-lead items started immediately so the timeline does not extend because of late starts."},{num:"02",title:"We work inside your EHR and billing systems",description:"No separate portal, no file transfers, no workarounds — we build and operate inside the systems you will run the practice on from day one."},{num:"03",title:"We communicate with you directly — not through a support queue",description:"You talk to a team member. Questions get answered the same day. Decisions that require your input are surfaced clearly — not buried in a ticket system."},{num:"04",title:"We stay through the first 60 to 90 days of operations",description:"The weeks after opening surface the gaps that planning cannot fully anticipate. We stay engaged through stabilization — resolving early billing issues, completing pending enrollments, and refining workflows under real conditions."},{num:"05",title:"We become your ongoing billing and operations partner",description:"After launch, we transition from setup support to ongoing RCM, AR management, credentialing maintenance, and operations support — scaling as the practice grows."}].map(t=>e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-step-num",children:t.num}),e.jsxs("div",{children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.num))})]})}),((N=i.sections)==null?void 0:N.workflow)&&e.jsx("section",{className:"who-section who-section--warm",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.workflow.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.workflow.title}}),e.jsx("p",{className:"section-subtitle",children:i.sections.workflow.description})]}),e.jsx("div",{className:"workflow-dashboard fade-in",children:i.sections.workflow.items.map((t,a)=>e.jsxs("div",{className:"wf-node",children:[e.jsx("div",{className:"wf-dot wf-dot--signal",children:t.num}),e.jsx("div",{className:"wf-node-label",children:t.label}),e.jsx("div",{className:"wf-node-sub",children:t.sublabel})]},a))}),i.sections.workflow.codeBlock&&e.jsxs("div",{className:"code-block fade-in",style:{marginTop:"48px",background:"#FAF7F2",border:"1px solid #E8E2D5",borderRadius:"8px",padding:"28px",fontFamily:"JetBrains Mono, monospace",fontSize:"13px",lineHeight:"1.8",color:"#0A1628",overflowX:"auto"},children:[e.jsx("div",{style:{color:"#00876B",marginBottom:"14px"},children:"// Healthcare workflow context — what documentation misses"}),i.sections.workflow.codeBlock.map((t,a)=>e.jsxs("div",{children:[t.label,' = "',t.value,'"']},a)),e.jsx("div",{style:{color:"#00876B",marginTop:"14px"},children:"// HBS provides the operational context your spec does not"})]})]})}),((A=i.sections)==null?void 0:A.denialPatterns)&&e.jsx("section",{className:"who-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.denialPatterns.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.denialPatterns.title}}),e.jsx("p",{className:"section-subtitle",children:i.sections.denialPatterns.description})]}),e.jsx("div",{className:"denial-grid fade-in",children:i.sections.denialPatterns.patterns.map((t,a)=>e.jsxs("div",{className:"denial-card",children:[e.jsx("div",{className:`denial-card-tag ${t.tagClass}`,children:t.tag}),e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]},a))})]})}),((z=i.sections)==null?void 0:z.howWeWork)&&e.jsx("section",{className:"who-section",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.howWeWork.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.howWeWork.title}}),e.jsx("p",{className:"section-subtitle",children:i.sections.howWeWork.description})]}),e.jsx("div",{className:"process-timeline fade-in",style:{maxWidth:"780px"},children:i.sections.howWeWork.process.map(t=>e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-step-num",children:t.num}),e.jsxs("div",{children:[e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]})]},t.num))})]})}),((C=i.sections)==null?void 0:C.aiHuman)&&e.jsx("section",{className:"who-section who-section--warm",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.aiHuman.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.aiHuman.title}})]}),e.jsxs("div",{className:"ai-split fade-in",children:[e.jsxs("div",{className:"ai-col ai-col--machine",children:[e.jsx("div",{className:"ai-col-label",children:"AI-assisted workflows"}),e.jsx("div",{className:"ai-items",children:i.sections.aiHuman.machine.map((t,a)=>e.jsxs("div",{className:"ai-item",children:[e.jsx("div",{className:"ai-item-dot"}),e.jsx("p",{children:t})]},a))})]}),e.jsxs("div",{className:"ai-col ai-col--human",children:[e.jsx("div",{className:"ai-col-label",children:"Human specialists"}),e.jsx("div",{className:"ai-items",children:i.sections.aiHuman.human.map((t,a)=>e.jsxs("div",{className:"ai-item",children:[e.jsx("div",{className:"ai-item-dot"}),e.jsx("p",{children:t})]},a))})]})]}),i.sections.aiHuman.pullQuote&&e.jsx("div",{className:"pull-quote fade-in",children:i.sections.aiHuman.pullQuote})]})}),((q=i.sections)==null?void 0:q.results)&&e.jsx("section",{className:"who-section",id:"results",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.results.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.results.title}})]}),e.jsx("div",{className:"outcome-grid fade-in",children:i.sections.results.outcomes.map((t,a)=>e.jsxs("div",{className:"outcome-card",children:[e.jsx("div",{className:"outcome-card-num",children:t.icon}),e.jsx("h4",{children:t.title}),e.jsx("p",{children:t.description})]},a))})]})}),((P=i.sections)==null?void 0:P.compare)&&e.jsx("section",{className:"who-section who-section--ink-soft",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:i.sections.compare.eyebrow}),e.jsx("h2",{className:"section-title",dangerouslySetInnerHTML:{__html:i.sections.compare.title}}),e.jsx("p",{className:"section-subtitle",children:i.sections.compare.description})]}),e.jsxs("div",{className:"compare-wrap fade-in",children:[e.jsxs("div",{className:"compare-header",children:[e.jsx("span",{children:" Time Since Service"}),e.jsx("span",{className:"hbs-col",children:"With HBS"}),e.jsx("span",{children:"Without It"})]}),i.sections.compare.rows.map((t,a)=>e.jsxs("div",{className:"compare-row",children:[e.jsx("span",{className:"c-label",children:t.label}),e.jsx("span",{className:"c-hbs",children:t.hbs}),e.jsx("span",{className:"c-other",children:t.other})]},a))]})]})}),n==="hbs-marketing"&&e.jsx("section",{className:"who-section who-section--ink-soft",id:"marketplace-form",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"Connect with our marketplace execution team"}),e.jsx("h2",{className:"section-title",children:"Share your needs and we’ll match the right partnership operations support."}),e.jsx("p",{className:"section-subtitle",children:"Fill out the form below and one of our marketplace partner specialists will follow up with a tailored next step."})]}),e.jsx("div",{className:"marketplace-form fade-in",children:s?e.jsxs("div",{className:"form-success",children:[e.jsx("h3",{children:"Thanks for reaching out."}),e.jsx("p",{children:"We’ve received your request and will contact you shortly."})]}):e.jsxs("form",{onSubmit:H,children:[e.jsxs("div",{className:"field-row",children:[e.jsxs("label",{children:["Full Name *",e.jsx("input",{type:"text",name:"name",value:r.name,onChange:d,required:!0})]}),e.jsxs("label",{children:["Email Address *",e.jsx("input",{type:"email",name:"email",value:r.email,onChange:d,required:!0})]})]}),e.jsxs("div",{className:"field-row",children:[e.jsxs("label",{children:["Phone Number *",e.jsx("input",{type:"tel",name:"phone",value:r.phone,onChange:d,required:!0})]}),e.jsxs("label",{children:["Service of Interest *",e.jsxs("select",{name:"service",value:r.service,onChange:d,required:!0,children:[e.jsx("option",{value:"",children:"Select a service"}),E.map(t=>e.jsx("option",{value:t,children:t},t))]})]})]}),e.jsxs("label",{className:"field-full",children:["Message *",e.jsx("textarea",{name:"message",rows:6,value:r.message,onChange:d,required:!0})]}),e.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:!R||u,children:u?"Sending...":"Send Request"})]})})]})}),(S=i.sections)!=null&&S.finalCta?e.jsxs("section",{className:"cta-section",id:"cta",children:[e.jsx("div",{className:"cta-glow"}),e.jsxs("div",{className:"cta-inner",children:[e.jsx("div",{className:"eyebrow eyebrow--light",style:{justifyContent:"center"},children:i.sections.finalCta.eyebrow}),e.jsx("h2",{className:"cta-title",dangerouslySetInnerHTML:{__html:i.sections.finalCta.title}}),e.jsx("p",{className:"cta-text",children:i.sections.finalCta.description}),e.jsx("div",{className:"cta-actions",children:i.sections.finalCta.buttons.map((t,a)=>e.jsxs("a",{href:"#",className:`btn btn-${t.variant} btn-lg`,style:t.variant==="ghost"?{color:"var(--paper)",borderColor:"rgba(250,247,242,.25)"}:{},children:[t.text,e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]},a))}),e.jsx("div",{className:"trust-line",children:i.sections.finalCta.trustLine})]})]}):e.jsxs("section",{className:"cta-section",id:"cta",children:[e.jsx("div",{className:"cta-glow"}),e.jsxs("div",{className:"cta-inner",children:[e.jsx("div",{className:"eyebrow eyebrow--light",style:{justifyContent:"center"},children:"Start with a launch readiness review"}),e.jsxs("h2",{className:"cta-title",children:["If you are opening a practice in the next six months, ",e.jsx("em",{children:"the operational work needs to start now."})]}),e.jsx("p",{className:"cta-text",children:"We start with a launch readiness assessment — mapping your timeline, identifying what needs to start immediately, and showing you where the gaps are between your current status and billing-ready. No commitment required."}),e.jsxs("div",{className:"cta-actions",children:[e.jsxs("a",{href:"#",className:"btn btn-light btn-lg",children:["Build my practice foundation",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#",className:"btn btn-ghost btn-lg",style:{color:"var(--paper)",borderColor:"rgba(250,247,242,.25)"},children:"Talk to our startup team"})]}),e.jsx("div",{className:"trust-line",children:"HIPAA · BAA on every engagement · No long-term contract required"})]})]})]})};function ke(){const{slug:i}=F();if(!i)return e.jsxs("div",{style:{padding:"120px 20px",textAlign:"center"},children:[e.jsx("h1",{children:"Page Not Found"}),e.jsx("p",{children:"This page does not exist."})]});const n=fe(i);return n?e.jsx(ye,{solution:n,slug:i}):e.jsxs("div",{style:{padding:"120px 20px",textAlign:"center"},children:[e.jsx("h1",{children:"Page Not Found"}),e.jsx("p",{children:"This solution does not exist."})]})}export{ke as default};
