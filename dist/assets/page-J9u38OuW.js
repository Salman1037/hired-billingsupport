import{r as t,j as e}from"./index-6Dhx178x.js";function h(){const[a,l]=t.useState({name:"",email:"",phone:"",company:"",message:""}),[c,d]=t.useState(!1),[n,o]=t.useState(!1),s=r=>{l({...a,[r.target.name]:r.target.value})},p=async r=>{r.preventDefault(),o(!0),await new Promise(i=>setTimeout(i,1200)),o(!1),d(!0)},m=a.name&&a.email&&a.message;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        /* =========================================
           DESIGN TOKENS (EXACT MATCH TO YOUR SYSTEM)
           ========================================= */
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
          --accent: #D4A574;
          --danger: #D64545;
          --radius: 4px;
          --radius-lg: 12px;
          --max: 1280px;
          --gutter: clamp(20px, 4vw, 48px);
          --font-fraunces: 'Fraunces', 'Times New Roman', serif;
          --font-inter-tight: 'Inter Tight', -apple-system, sans-serif;
          --font-jetbrains-mono: 'JetBrains Mono', monospace;
          --serif: var(--font-fraunces);
          --sans: var(--font-inter-tight);
          --mono: var(--font-jetbrains-mono);
          --ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* =========================================
           RESET + BASE
           ========================================= */
        .contact-page {
          font-family: var(--sans);
          background: var(--paper);
          color: var(--ink);
          min-height: 100vh;
        }

        /* =========================================
           ANIMATIONS (MATCH YOUR SCROLL REVEALS)
           ========================================= */
        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .reveal { opacity: 0; transform: translateY(20px); }
        .reveal-1 { animation: reveal 0.9s var(--ease) 0.05s forwards; }
        .reveal-2 { animation: reveal 0.9s var(--ease) 0.15s forwards; }
        .reveal-3 { animation: reveal 0.9s var(--ease) 0.3s forwards; }
        .reveal-4 { animation: reveal 0.9s var(--ease) 0.45s forwards; }
        .reveal-5 { animation: reveal 0.9s var(--ease) 0.6s forwards; }

        /* =========================================
           HERO (MATCH YOUR DARK HERO STYLE)
           ========================================= */
        .contact-hero {
          position: relative;
          overflow: hidden;
          background: var(--ink);
          color: var(--paper);
          padding: 100px var(--gutter) 80px;
          text-align: center;
          margin-top: 60px;
        }
        .contact-hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .contact-hero-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .contact-hero-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          opacity: 0.35;
        }
        .contact-hero-inner {
          position: relative;
          z-index: 2;
          max-width: var(--max);
          margin: 0 auto;
        }

        /* Eyebrow (MATCH YOUR .eyebrow CLASS) */
        .eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--ink-mute);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: currentColor;
        }
        .eyebrow-light { color: rgba(250, 247, 242, 0.55); }

        /* Display Heading (MATCH YOUR .display CLASS) */
        .display {
          font-family: var(--serif);
          font-weight: 400;
          letter-spacing: -0.025em;
          line-height: 0.98;
          font-variation-settings: "opsz" 144;
          font-size: clamp(48px, 7.5vw, 96px);
        }
        .display-light { color: var(--paper); }
        .display-light em { color: var(--signal); }
        .display em {
          font-style: italic;
          font-weight: 300;
        }

        /* Subtext */
        .sub {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 540px;
          margin: 28px auto 40px;
        }
        .sub-light { color: rgba(250, 247, 242, 0.75); }

        /* Hero Actions */
        .hero-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* =========================================
           BUTTONS (EXACT MATCH TO YOUR .btn SYSTEM)
           ========================================= */
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: var(--radius);
          font-family: var(--sans);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          border: none;
          transition: all 0.25s var(--ease);
          white-space: nowrap;
        }
        .btn-primary {
          background: var(--ink);
          color: var(--paper);
        }
        .btn-primary:hover {
          background: var(--ink-soft);
          transform: translateY(-1px);
          box-shadow: 0 12px 28px -12px rgba(10, 22, 40, 0.4);
        }
        .btn-primary .arrow { transition: transform 0.25s var(--ease); }
        .btn-primary:hover .arrow { transform: translateX(3px); }

        .btn-ghost {
          background: transparent;
          color: var(--paper);
          border: 1px solid var(--paper);
        }
        .btn-ghost:hover {
          background: var(--paper);
          color: var(--ink);
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-lg { font-size: 15px; padding: 14px 26px; }

        /* =========================================
           BODY LAYOUT
           ========================================= */
        .contact-body {
          max-width: var(--max);
          margin: 0 auto;
          padding: 80px var(--gutter);
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-body {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        /* =========================================
           LIGHT CARD (MATCH YOUR .service-cell STYLE)
           ========================================= */
        .light-card {
          background: var(--white);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius-lg);
          padding: 36px;
          box-shadow: 0 4px 20px rgba(10, 22, 40, 0.05);
        }
        @media (max-width: 600px) {
          .light-card { padding: 24px; }
        }

        /* Card Labels */
        .card-mono-label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--ink-mute);
          margin-bottom: 16px;
        }
        .card-title {
          font-family: var(--serif);
          font-size: 28px;
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 8px;
        }
        .card-sub {
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-mute);
          margin-bottom: 28px;
        }

        /* =========================================
           FORM STYLES
           ========================================= */
        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 600px) {
          .form-grid-2 { grid-template-columns: 1fr; }
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ink-soft);
          margin-bottom: 8px;
          display: block;
        }
        .form-group label em {
          color: var(--danger);
          font-style: normal;
        }
        .form-group input,
        .form-group textarea {
          font-family: var(--sans);
          font-size: 14px;
          color: var(--ink);
          background: var(--paper);
          border: 1px solid var(--paper-line);
          border-radius: var(--radius);
          padding: 12px 14px;
          width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: var(--ink-mute);
        }
        .form-group input:focus,
        .form-group textarea:focus {
          border-color: var(--ink);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(10, 22, 40, 0.05);
          outline: none;
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
        }
        .form-note {
          font-family: var(--mono);
          font-size: 10px;
          color: var(--ink-mute);
          letter-spacing: 0.08em;
        }

        /* Spinner */
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(250, 247, 242, 0.3);
          border-top-color: var(--paper);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* =========================================
           SUCCESS STATE
           ========================================= */
        .success-state {
          text-align: center;
          padding: 40px 16px;
        }
        .success-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(0, 200, 150, 0.1);
          border: 1px solid rgba(0, 200, 150, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .success-state h3 {
          font-family: var(--serif);
          font-size: 28px;
          color: var(--ink);
          margin-bottom: 10px;
        }
        .success-state p {
          font-size: 15px;
          color: var(--ink-mute);
          line-height: 1.6;
          max-width: 320px;
          margin: 0 auto;
        }

        /* =========================================
           INFO SIDE (MATCH YOUR .service-cell STYLE)
           ========================================= */
        .info-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 0;
          border-bottom: 1px solid var(--paper-line);
        }
        .info-row:last-child { border-bottom: none; padding-bottom: 0; }
        .info-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius);
          background: rgba(0, 200, 150, 0.08);
          border: 1px solid rgba(0, 200, 150, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-icon svg { color: var(--signal); }
        .info-text strong {
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
          margin-bottom: 4px;
          display: block;
        }
        .info-text span,
        .info-text a {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.55;
          text-decoration: none;
        }
        .info-text a:hover { color: var(--signal); }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--paper-line);
        }
        .stat-item { text-align: center; }
        .stat-num {
          font-family: var(--serif);
          font-size: 24px;
          font-weight: 400;
          color: var(--ink);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--ink-mute);
        }

        /* Alert Callout */
        .alert-callout {
          background: rgba(0, 200, 150, 0.05);
          border: 1px solid rgba(0, 200, 150, 0.2);
          border-radius: var(--radius);
          padding: 14px 16px;
          margin-top: 16px;
        }
        .alert-callout-label {
          font-family: var(--mono);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--signal);
          margin-bottom: 6px;
          font-weight: 600;
        }
        .alert-callout-text {
          font-size: 13px;
          color: var(--ink-soft);
          line-height: 1.5;
        }

        /* Hours */
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid var(--paper-line);
          font-size: 13px;
        }
        .hours-row:last-child { border-bottom: none; padding-bottom: 0; }
        .hours-row .day { color: var(--ink-mute); }
        .hours-row .time { font-weight: 500; color: var(--ink); }
        .hours-row .time.closed { color: var(--danger); }

        /* =========================================
           MAP SECTION
           ========================================= */
        .map-section {
          background: var(--paper);
          border-top: 1px solid var(--paper-line);
          padding: 80px var(--gutter);
        }
        .map-inner {
          max-width: var(--max);
          margin: 0 auto;
        }
        .map-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .map-header h2 {
          font-family: var(--serif);
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-top: 12px;
        }
        .map-frame {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--paper-line);
          box-shadow: 0 20px 40px -20px rgba(10, 22, 40, 0.1);
          height: 400px;
        }
        .map-frame iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }

        /* Section Divider */
        .section-divider {
          height: 1px;
          background: var(--paper-line);
          margin: 0;
        }

        /* =========================================
           TRUST STRIP
           ========================================= */
        .trust-strip {
          background: var(--white);
          border-top: 1px solid var(--paper-line);
          padding: 32px var(--gutter);
        }
        .trust-strip-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--ink-mute);
        }
        .trust-item svg { color: var(--signal); }
      `}),e.jsxs("div",{className:"contact-page",children:[e.jsxs("section",{className:"contact-hero",children:[e.jsxs("div",{className:"contact-hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 600",preserveAspectRatio:"xMidYMid slice",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"var(--ink)",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"contact-hero-grain"})]}),e.jsxs("div",{className:"contact-hero-inner",children:[e.jsx("span",{className:"eyebrow eyebrow-light reveal reveal-1",children:"— Contact Us"}),e.jsxs("h1",{className:"display display-light reveal reveal-2",children:["Let's Talk About Your ",e.jsx("em",{children:"Billing Needs"})]}),e.jsx("p",{className:"sub sub-light reveal reveal-3",children:"Whether you're a solo practice or a large medical group, our billing specialists respond within 1 business day."}),e.jsxs("div",{className:"hero-actions reveal reveal-4",children:[e.jsxs("a",{href:"#contact-form",className:"btn btn-primary btn-lg",children:["Send a Message",e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#map-section",className:"btn btn-ghost btn-lg",children:"Find Our Office"})]})]})]}),e.jsx("div",{className:"section-divider"}),e.jsxs("div",{className:"contact-body",id:"contact-form",children:[e.jsx("div",{className:"light-card reveal reveal-2",children:c?e.jsxs("div",{className:"success-state",children:[e.jsx("div",{className:"success-icon-wrap",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"var(--signal)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})}),e.jsx("h3",{children:"Message Received"}),e.jsx("p",{children:"A billing specialist will reach out within 1 business day to schedule your free consultation."})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"card-mono-label",children:"— Free Consultation Request"}),e.jsx("h2",{className:"card-title",children:"Get in Touch"}),e.jsx("p",{className:"card-sub",children:"Fill out the form and we'll get back to you within 24 hours."}),e.jsxs("div",{className:"form-grid-2",children:[e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{children:["Full Name",e.jsx("em",{children:"*"})]}),e.jsx("input",{type:"text",name:"name",placeholder:"Full Name",value:a.name,onChange:s})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{children:["Email Address",e.jsx("em",{children:"*"})]}),e.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:a.email,onChange:s})]})]}),e.jsxs("div",{className:"form-grid-2",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Phone Number"}),e.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:a.phone,onChange:s})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{children:"Practice / Company"}),e.jsx("input",{type:"text",name:"company",placeholder:"Service of Interest",value:a.company,onChange:s})]})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("label",{children:["How can we help?",e.jsx("em",{children:"*"})]}),e.jsx("textarea",{name:"message",placeholder:"Message"})]}),e.jsxs("div",{className:"form-actions",children:[e.jsx("button",{className:"btn btn-primary btn-lg",onClick:p,disabled:n||!m,children:n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"spinner"})," Sending…"]}):e.jsxs(e.Fragment,{children:["Send Message",e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]})}),e.jsx("span",{className:"form-note",children:"— Response within 24 hrs"})]})]})}),e.jsxs("div",{className:"info-stack",children:[e.jsxs("div",{className:"light-card reveal reveal-3",children:[e.jsx("div",{className:"card-mono-label",children:"— Contact Information"}),e.jsxs("div",{className:"info-row",children:[e.jsx("div",{className:"info-icon",children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})})}),e.jsxs("div",{className:"info-text",children:[e.jsx("strong",{children:"Phone"}),e.jsx("a",{href:"tel:+13213211740",children:"+1 (321) 321-1740"})]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("div",{className:"info-icon",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),e.jsx("polyline",{points:"22,6 12,13 2,6"})]})}),e.jsxs("div",{className:"info-text",children:[e.jsx("strong",{children:"Email"}),e.jsx("a",{href:"mailto:hello@hiredbillingsupport.com",children:"hello@hiredbillingsupport.com"})]})]}),e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",children:"500+"}),e.jsx("div",{className:"stat-label",children:"Practices"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",style:{color:"var(--accent)"},children:"24hr"}),e.jsx("div",{className:"stat-label",children:"Response"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"stat-num",children:"98%"}),e.jsx("div",{className:"stat-label",children:"Satisfaction"})]})]}),e.jsxs("div",{className:"alert-callout",children:[e.jsx("div",{className:"alert-callout-label",children:"— HIPAA Compliant"}),e.jsx("div",{className:"alert-callout-text",children:"All communications and data handling are fully HIPAA-compliant."})]})]}),e.jsxs("div",{className:"light-card reveal reveal-4",children:[e.jsx("div",{className:"card-mono-label",children:"— Business Hours"}),e.jsxs("div",{className:"hours-row",children:[e.jsx("span",{className:"day",children:"Monday – Friday"}),e.jsx("span",{className:"time",children:"9:00 AM – 5:00 PM EST"})]}),e.jsxs("div",{className:"hours-row",children:[e.jsx("span",{className:"day",children:"Saturday"}),e.jsx("span",{className:"time closed",children:"Closed"})]}),e.jsxs("div",{className:"hours-row",children:[e.jsx("span",{className:"day",children:"Sunday"}),e.jsx("span",{className:"time closed",children:"Closed"})]})]})]})]}),e.jsx("section",{className:"map-section",id:"map-section",children:e.jsxs("div",{className:"map-inner",children:[e.jsxs("div",{className:"map-header reveal reveal-2",children:[e.jsx("span",{className:"eyebrow eyebrow-dark",children:"— Our Location"}),e.jsx("h2",{children:"Find Us on the Map"})]}),e.jsx("div",{className:"map-frame reveal reveal-3",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256765774!2d-73.98731492346988!3d40.75797443440888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30cb1c1%3A0x4b0d2c22c0c18a!2sMidtown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1718200000000!5m2!1sen!2sus",allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Office Location"})})]})}),e.jsx("div",{className:"trust-strip",children:e.jsx("div",{className:"trust-strip-inner",children:[{label:"HIPAA Compliant",path:e.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})},{label:"24hr Response",path:e.jsxs(e.Fragment,{children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("polyline",{points:"12 6 12 12 16 14"})]})},{label:"Free Consultation",path:e.jsx("polyline",{points:"20 6 9 17 4 12"})},{label:"500+ Practices",path:e.jsxs(e.Fragment,{children:[e.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),e.jsx("circle",{cx:"9",cy:"7",r:"4"}),e.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"})]})}].map((r,i)=>e.jsxs("div",{className:"trust-item",children:[e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r.path}),r.label]},i))})})]})]})}export{h as default};
