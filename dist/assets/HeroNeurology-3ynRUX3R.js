import{j as e}from"./index-6Dhx178x.js";function n({solution:a}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
  `}),e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"hero-visual reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-header",children:[e.jsx("div",{className:"cp-header-label",children:"— Healthcare Workflow Context · Developer Intelligence"}),e.jsxs("div",{className:"cp-main-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[e.jsx("span",{className:"cp-big",children:"47"}),e.jsx("span",{className:"cp-unit",children:"workflow touchpoints mapped"})]}),e.jsxs("span",{className:"cp-trend",children:[e.jsx("span",{className:"cp-trend-dot"}),"RCM-to-EHR integration"]})]}),e.jsx("div",{className:"cp-header-sub",children:"Sample: Billing workflow architecture · Primary Care"})]}),e.jsx("div",{className:"cp-body",children:e.jsxs("div",{className:"cp-grid",children:[e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Payer Rules Tracked"}),e.jsx("div",{className:"cp-m-value sig",children:"200+"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"90%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Denial Categories"}),e.jsx("div",{className:"cp-m-value sig",children:"38 mapped"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"75%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Auth Workflow Steps"}),e.jsx("div",{className:"cp-m-value amb",children:"12 per payer"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-amb",style:{width:"60%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"EHR Integration Points"}),e.jsx("div",{className:"cp-m-value lite",children:"24 mapped"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-lite",style:{width:"55%"}})})]})]})}),e.jsxs("div",{className:"cp-queue",children:[e.jsx("div",{className:"cp-queue-title",children:"Workflow Context Areas · Available"}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"RCM process mapping — end-to-end"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Payer-specific workflow rules library"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Denial root cause taxonomy"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Available"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"#00C896"}}),e.jsx("span",{className:"cp-q-lbl",children:"Auth + eligibility workflow models"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"Available"})]})]}),e.jsxs("div",{className:"cp-footer",children:[e.jsxs("span",{className:"cp-footer-pill",children:[e.jsx("span",{className:"cp-footer-pulse"}),"Real-world workflow context — not textbook specs"]}),e.jsx("span",{className:"cp-footer-right",children:"Dev partnership"})]})]})})]})]})]})}function o({solution:a}){return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— Behavioral Health Billing · Active Queue"}),[{label:"Aetna — Therapy Sessions (60 allowed)",status:"Active · 34 used",type:"approved"},{label:"BCBS — Medication Management",status:"Active · No limit",type:"approved"},{label:"UHC — Intensive Outpatient Auth",status:"Pending Day 9",type:"pending"},{label:"Cigna — Telehealth Benefit Check",status:"Verifying parity rules",type:"pending"},{label:"Medicaid — Crisis Services Auth",status:"Submission due today",type:"needed"}].map((r,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<4?"1px solid var(--paper-line)":"none"},children:[e.jsx("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:r.label}),e.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:r.type==="approved"?"var(--signal-deep)":r.type==="pending"?"var(--amber-deep)":"var(--danger)",background:r.type==="approved"?"rgba(0,200,150,.1)":r.type==="pending"?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:r.status})]},i)),e.jsx("div",{style:{borderTop:"1px solid var(--paper-line)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Auths Tracked"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Limits",color:"var(--signal-deep)"}].map((r,i)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:r.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:r.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"var(--paper)"},children:r.label})]},i))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Session limit alert"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Aetna patient at 34/60 sessions. Extension auth needed at visit 50."})]})]})})]})]})}function d({solution:a}){const r=[{label:"Surgical Claim Rate",value:"96.2%",width:96,type:"hi"},{label:"Auth Approval Rate",value:"94.8%",width:94,type:"hi"},{label:"Denial Rate (High-Value)",value:"2.8%",width:28,type:"mi"},{label:"AR Over 60 Days",value:"8.4%",width:33,type:"mi"},{label:"Collection Rate",value:"95.1%",width:95,type:"hi"}];return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"rgba(250, 247, 242, 0.5)",marginBottom:"16px",fontWeight:"600"},children:"— Orthopedic Revenue · High-Value Claims Tracker"}),r.map((i,s)=>e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"var(--paper)",fontWeight:"500"},children:i.label}),e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:i.type==="hi"?"var(--signal-deep)":"var(--amber-deep)"},children:i.value})]}),e.jsx("div",{style:{background:"rgba(255, 255, 255, 0.08)",height:"6px",borderRadius:"2px",overflow:"hidden"},children:e.jsx("div",{style:{background:i.type==="hi"?"var(--signal)":"var(--amber)",height:"100%",width:`${i.width}%`,transition:"width 0.3s ease"}})})]},s)),e.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"3",label:"Auths Expiring",color:"var(--amber-deep)"},{num:"$42K",label:"AR 60+ Days",color:"var(--danger)"},{num:"0",label:"Missed Auths",color:"var(--signal-deep)"}].map((i,s)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:i.color,lineHeight:"1",marginBottom:"4px"},children:i.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"var(--paper)"},children:i.label})]},s))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Revenue at stake"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"3 surgical auths expiring this week — renewals initiated."})]})]})})]})]})}function p({solution:a}){return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"rgba(250, 247, 242, 0.5)",marginBottom:"16px",fontWeight:"600"},children:"— Cardiology Revenue · Active Claims Dashboard"}),[{label:"Echocardiogram — BCBS (Routine)",status:"Approved",type:"approved"},{label:"Nuclear Stress Test — Aetna",status:"Pending Day 7",type:"pending"},{label:"Cardiac Catheterization — UHC",status:"Approved — 30 days",type:"approved"},{label:"ILR Implant — Medicare",status:"Approved",type:"approved"},{label:"Holter Monitor — Cigna",status:"Auth review needed",type:"needed"}].map((r,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[e.jsx("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:r.label}),e.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:r.type==="approved"?"var(--signal-deep)":r.type==="pending"?"var(--amber-deep)":"var(--danger)",background:r.type==="approved"?"rgba(0,200,150,.1)":r.type==="pending"?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:r.status})]},i)),e.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Auths Active"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((r,i)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:r.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:r.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:r.label})]},i))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Medical necessity note"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Nuclear stress test — clinical documentation ready for Aetna review."})]})]})})]})]})}function c({solution:a}){const r=[{dot:"g",label:"Prenatal Global Package — Patient A (32 wks)",status:"Tracking correctly",type:"ok"},{dot:"a",label:"Eligibility Change — Patient B (insurance switched)",status:"Verification needed",type:"warn"},{dot:"g",label:"GYN Procedure Auth — Hysteroscopy",status:"Approved",type:"pill"},{dot:"a",label:"Ultrasound Series — Insurance Review",status:"2 claims pending",type:"warn"},{dot:"r",label:"Global Period — Delivery Claim",status:"Denied — coding review",type:"risk"}];return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— OBGYN Billing Queue · Active Patients"}),r.map((i,s)=>{const l=i.dot==="g"?"var(--signal)":i.dot==="a"?"var(--amber)":"var(--danger)";return e.jsxs("div",{style:{marginBottom:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",paddingBottom:"8px"},children:[e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",background:l,flexShrink:0}}),e.jsx("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:i.label}),i.type==="pill"?e.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:"9px",fontWeight:"600",color:"var(--signal-deep)",background:"rgba(0,200,150,.1)",padding:"3px 8px",borderRadius:"100px",whiteSpace:"nowrap"},children:i.status}):e.jsx("span",{style:{fontSize:"11px",color:i.type==="ok"?"var(--signal-deep)":i.type==="warn"?"var(--amber-deep)":"var(--danger)",fontWeight:"500"},children:i.status})]}),s<r.length-1&&e.jsx("div",{style:{height:"1px",background:"rgba(255, 255, 255, 0.08)"}})]},s)}),e.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"8",label:"Active Globals"},{num:"3",label:"Eligibility Flags",color:"var(--amber-deep)"},{num:"1",label:"Delivery Denial",color:"var(--danger)"}].map((i,s)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:i.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:i.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:i.label})]},s))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Global billing note"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Patient B insurance change may affect global package — review before next prenatal visit."})]})]})})]})]})}function x({solution:a}){return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--paper)",marginBottom:"16px",fontWeight:"600"},children:"— Endocrinology Revenue · Active Care Authorization Dashboard"}),[{label:"CGM Authorization — Type 1 Diabetes Patient A",status:"Active — renews in 60 days",type:"approved"},{label:"Insulin Pump Authorization — Patient B",status:"Renewal due in 12 days",type:"pending"},{label:"Thyroid Panel Lab Claims — Multiple Patients",status:"3 claims pending review",type:"pending"},{label:"GLP-1 Therapy Prior Authorization — Patient C",status:"Payer review — Day 11",type:"needed"},{label:"A1C Follow-Up Care Queue",status:"8 patients scheduled",type:"approved"}].map((r,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[e.jsx("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:r.label}),e.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:r.type==="approved"?"var(--signal-deep)":r.type==="pending"?"var(--amber-deep)":"var(--danger)",background:r.type==="approved"?"rgba(0,200,150,.1)":r.type==="pending"?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:r.status})]},i)),e.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Active Auths"},{num:"2",label:"Renew Soon",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((r,i)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:r.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:r.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:r.label})]},i))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Care continuity alert"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"Insulin pump authorization expires in 12 days — renewal request submitted for payer review."})]})]})})]})]})}function h({solution:a}){return e.jsxs("section",{className:"hero",children:[e.jsxs("div",{className:"hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"hero-grain"})]}),e.jsxs("div",{className:"hero-inner",children:[e.jsx("div",{children:a.hero&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eyebrow reveal reveal-1",children:a.hero.eyebrow}),e.jsx("h1",{className:"display reveal reveal-2",style:{fontSize:"clamp(38px, 5vw, 64px)",marginTop:"20px"},dangerouslySetInnerHTML:{__html:a.hero.title}}),e.jsx("p",{className:"sub reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"24px"},children:a.hero.subtitle}),e.jsx("p",{className:"lede reveal reveal-3",style:{fontSize:"18px",lineHeight:"1.6",color:"var(--ink-mute)",marginTop:"16px"},children:a.hero.description}),e.jsxs("div",{className:"hero-actions reveal reveal-4",style:{marginTop:"32px"},children:[e.jsxs("a",{href:"/contact",className:"btn btn-primary btn-lg",children:["Contact us",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#services",className:"btn btn-ghost btn-lg",children:"Services"})]})]})}),a.hero&&e.jsx("div",{className:"reveal reveal-4",style:{animationDelay:"0.55s"},children:e.jsxs("div",{style:{background:"var(--ink)",border:"1px solid rgba(255, 255, 255, 0.08)",borderRadius:"var(--radius-lg)",overflow:"hidden",boxShadow:"0 4px 32px rgba(10,22,40,.10), 0 1px 4px rgba(10,22,40,.05)",padding:"20px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"10px",textTransform:"uppercase",letterSpacing:".16em",color:"var(--ink-mute)",marginBottom:"16px",fontWeight:"600"},children:"— Neurology Billing · Authorization & Claims Dashboard"}),[{label:"MRI Brain — BCBS (Headache workup)",status:"Approved",type:"approved"},{label:"IVIG Infusion — UHC (CIDP)",status:"Pending — medical necessity review",type:"pending"},{label:"Botox for Migraine — Aetna",status:"Approved · quarterly cycle",type:"approved"},{label:"EEG — Epilepsy Monitoring",status:"Approved",type:"approved"},{label:"MS Disease-Modifying Therapy",status:"Step therapy documentation required",type:"needed"}].map((r,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<4?"1px solid rgba(255, 255, 255, 0.08)":"none"},children:[e.jsx("span",{style:{fontSize:"13px",color:"var(--paper)",flex:1},children:r.label}),e.jsx("span",{style:{fontFamily:"var(--mono)",fontSize:"11px",fontWeight:"600",color:r.type==="approved"?"var(--signal-deep)":r.type==="pending"?"var(--amber-deep)":"var(--danger)",background:r.type==="approved"?"rgba(0,200,150,.1)":r.type==="pending"?"rgba(245,158,11,.12)":"rgba(214,69,69,.09)",padding:"4px 12px",borderRadius:"100px",whiteSpace:"nowrap"},children:r.status})]},i)),e.jsx("div",{style:{borderTop:"1px solid rgba(255, 255, 255, 0.08)",margin:"12px 0"}}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px",marginBottom:"12px"},children:[{num:"5",label:"Active Auths"},{num:"2",label:"Action Needed",color:"var(--amber-deep)"},{num:"0",label:"Expired Auths",color:"var(--signal-deep)"}].map((r,i)=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{fontFamily:"var(--serif)",fontSize:"18px",fontWeight:"600",color:r.color||"var(--signal)",lineHeight:"1",marginBottom:"4px"},children:r.num}),e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".08em",color:"rgba(250, 247, 242, 0.5)"},children:r.label})]},i))}),e.jsxs("div",{style:{background:"rgba(245,158,11,.08)",border:"1px solid rgba(245,158,11,.2)",borderRadius:"var(--radius)",padding:"12px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",textTransform:"uppercase",letterSpacing:".1em",color:"var(--amber-deep)",marginBottom:"4px"},children:"— Documentation priority"}),e.jsx("div",{style:{fontSize:"12px",color:"var(--paper)",lineHeight:"1.4"},children:"MS therapy step therapy documentation due before next infusion date."})]})]})})]})]})}export{h as H,x as a,c as b,p as c,d,o as e,n as f};
