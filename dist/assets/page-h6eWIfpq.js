import{r as t,j as e,L as i}from"./index-6Dhx178x.js";function s(){return t.useEffect(()=>{const a=document.getElementById("nav"),r=()=>{a&&a.classList.toggle("scrolled",window.scrollY>8)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        :root {
          --ink:#0A1628; --ink-soft:#1B2942; --ink-mute:#475569;
          --paper:#FAF7F2; --paper-warm:#F2EDE3; --paper-line:#E8E2D5;
          --white:#FFFFFF;
          --signal:#00C896; --signal-deep:#00876B; --signal-pale:rgba(0,200,150,.08);
          --amber:#F59E0B; --amber-deep:#B45309;
          --danger:#D64545;
          --radius:4px; --radius-lg:12px;
          --max:1280px; --gutter:clamp(20px,4vw,48px);
          --serif:'Fraunces','Times New Roman',serif;
          --sans:'Inter Tight',-apple-system,sans-serif;
          --mono:'JetBrains Mono',monospace;
          --ease:cubic-bezier(.22,1,.36,1);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
        body { font-family: var(--sans); background: var(--paper); color: var(--ink); line-height: 1.5; font-size: 16px; overflow-x: hidden; }
        ::selection { background: var(--ink); color: var(--paper); }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }

        .container { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }

       
        /* Article Hero */
        .article-hero { background: var(--ink); padding: 120px 0 80px; margin-top: 40px; }
        .article-badge { display: inline-flex; align-items: center; gap: 8px; font-family: var(--mono); font-size: 10px; text-transform: uppercase; letter-spacing: .16em; color: var(--signal-deep); background: rgba(0,200,150,.08); border: 1px solid rgba(0,200,150,.2); padding: 6px 14px; border-radius: 100px; margin-bottom: 24px; }
        .article-title { font-family: var(--serif); font-size: clamp(2.4rem, 5vw, 3.8rem); font-weight: 400; letter-spacing: -.025em; color: var(--paper); margin-bottom: 20px; font-variation-settings: "opsz" 144; line-height: 1.05; }
        .article-subtitle { font-size: 17px; line-height: 1.7; color: rgba(250,247,242,.6); max-width: 700px; }

        /* Article Layout */
        .article-layout { max-width: var(--max); margin: 0 auto; padding: 60px var(--gutter); display: grid; grid-template-columns: 260px 1fr; gap: 64px; align-items: start; background: var(--paper); }
        .article-toc { position: sticky; top: 100px; }
        .article-toc-title { font-family: var(--mono); font-size: 10px; letter-spacing: .16em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--paper-line); }
        .article-toc-list { list-style: none; display: flex; flex-direction: column; gap: 4px; }
        .article-toc-list a { font-size: 13px; color: var(--ink-mute); padding: 5px 10px; border-radius: var(--radius); display: block; transition: all .2s; border-left: 2px solid transparent; }
        .article-toc-list a:hover { color: var(--signal-deep); border-left-color: var(--signal); }
        .article-content { min-width: 0; }
        .article-section { margin-bottom: 56px; }
        .article-section:last-child { margin-bottom: 0; }
        .article-heading { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; color: var(--ink); margin-bottom: 20px; padding-top: 24px; font-variation-settings: "opsz" 72; line-height: 1.15; }
        .article-subheading { font-size: 15px; font-weight: 600; color: var(--ink); margin: 22px 0 12px; }
        .article-text { font-size: 15px; line-height: 1.85; color: var(--ink-soft); margin-bottom: 16px; }
        .article-text:last-child { margin-bottom: 0; }

        /* Info Cards */
        .info-card { background: var(--signal-pale); border: 1px solid rgba(0,200,150,.2); border-radius: var(--radius-lg); padding: 24px 28px; margin: 24px 0; }
        .info-card-label { font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: var(--signal-deep); margin-bottom: 12px; }
        .info-card p { font-size: 14px; color: var(--ink-soft); line-height: 1.75; }
        .info-card p:last-child { margin-bottom: 0; }

        /* Denial Reasons Grid */
        .denial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 32px 0; }
        .denial-card { background: var(--white); border: 1px solid var(--paper-line); border-radius: var(--radius-lg); padding: 24px; transition: transform .2s var(--ease), border-color .2s; }
        .denial-card:hover { transform: translateY(-2px); border-color: rgba(0,200,150,.3); }
        .denial-card-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--signal-pale); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .denial-card-icon svg { width: 18px; height: 18px; stroke: var(--signal-deep); fill: none; stroke-width: 2; }
        .denial-card h4 { font-size: 14px; font-weight: 600; color: var(--ink); margin-bottom: 8px; line-height: 1.35; }
        .denial-card p { font-size: 13px; color: var(--ink-mute); line-height: 1.68; }

        /* Highlight Box */}
        .highlight-box { background: rgba(245,158,11,.08); border: 1px solid rgba(245,158,11,.2); border-radius: var(--radius); padding: 20px 24px; margin: 24px 0; }
        .highlight-box p { font-size: 14px; color: var(--amber-deep); line-height: 1.7; }

        /* Divider */
        .article-divider { height: 1px; background: var(--paper-line); margin: 40px 0; }

        /* CTA Section */
        .article-cta { background: var(--ink); border-radius: var(--radius-lg); padding: 48px; margin: 48px 0 0; position: relative; overflow: hidden; }
        .article-cta::before { content: ''; position: absolute; bottom: -60px; right: -60px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(0,200,150,.15), transparent 70%); pointer-events: none; }
        .article-cta-title { font-family: var(--serif); font-size: 1.8rem; font-weight: 400; color: var(--paper); margin-bottom: 12px; font-variation-settings: "opsz" 72; }
        .article-cta-text { font-size: 15px; line-height: 1.8; color: rgba(250,247,242,.6); max-width: 600px; margin-bottom: 24px; }
        .article-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }

        /* Footer */
        footer { background: var(--ink); color: rgba(250,247,242,.6); padding: 40px 0 28px; border-top: 1px solid rgba(255,255,255,.06); }
        .footer-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 24px; font-size: 13px; }
        .footer-inner a { color: rgba(250,247,242,.6); }
        .footer-inner a:hover { color: var(--signal); }
        .footer-legal { display: flex; gap: 24px; }

        /* Responsive */
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr; }
          .article-toc { position: relative; top: 0; background: var(--paper-warm); border-radius: var(--radius-lg); padding: 20px; }
        }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .article-layout { padding: 40px var(--gutter); }
          .article-hero { padding: 100px 0 60px; }
          .denial-grid { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}),e.jsx("section",{className:"article-hero",children:e.jsx("div",{className:"container",children:e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx("div",{className:"article-badge",children:"Article · Article 28 Facilities"}),e.jsx("h1",{className:"article-title",children:"Article 28 Facilities"}),e.jsx("p",{className:"article-subtitle",children:"Learn how Article 28 accredited healthcare facilities in New York achieve compliance, operational excellence, and maximize reimbursements with expert support from HBS."})]})})}),e.jsxs("div",{className:"article-layout",children:[e.jsxs("aside",{className:"article-toc",children:[e.jsx("div",{className:"article-toc-title",children:"Contents"}),e.jsxs("ul",{className:"article-toc-list",children:[e.jsx("li",{children:e.jsx(i,{to:"#what-is-article-28",children:"What is Article 28?"})}),e.jsx("li",{children:e.jsx(i,{to:"#high-standards",children:"High Standards of Care"})}),e.jsx("li",{children:e.jsx(i,{to:"#hbs-expertise",children:"HBS Expertise"})}),e.jsx("li",{children:e.jsx(i,{to:"#no-fault-law",children:"Understanding No-Fault Law"})}),e.jsx("li",{children:e.jsx(i,{to:"#denials",children:"Common Reimbursement Denials"})})]})]}),e.jsxs("main",{className:"article-content",children:[e.jsxs("div",{className:"article-section",id:"what-is-article-28",children:[e.jsx("h2",{className:"article-heading",children:"Article 28 Facilities No-Fault Collection Provider"}),e.jsx("p",{className:"article-text",children:"Article 28 is a public health law for regulating and recognizing accreditation of public health care facilities so that the facilities are legally licensed and run. Article 28 provides that certain facilities are licensed to perform particular types of procedures which for other reasons might not lawfully be performed."}),e.jsx("p",{className:"article-text",children:"Article 28 does not only relate to hospitals, however; it also covers surgical centres and nursing homes."})]}),e.jsxs("div",{className:"article-section",id:"high-standards",children:[e.jsx("h2",{className:"article-heading",children:"High Standards of Healthcare Services"}),e.jsx("p",{className:"article-text",children:"High standards of health care services for the state of New York is embodied in Article 28. It helps to establish that public healthcare facilities are operative and actual. Thus, accreditation with regards to the Article 28 process implies that a facility works in accordance with the tightest of standards."}),e.jsxs("div",{className:"info-card",children:[e.jsx("div",{className:"info-card-label",children:"Key Insight"}),e.jsx("p",{children:"Coding and billing under Article 28 can be more complicated than even for a medical facility that has not yet met the designation. The regulatory requirements and documentation standards are significantly more stringent."})]})]}),e.jsxs("div",{className:"article-section",id:"hbs-expertise",children:[e.jsx("h2",{className:"article-heading",children:"Expert Support from HBS"}),e.jsx("p",{className:"article-text",children:"The team from Hired Billing Support has years of experience handling cases with such significant claims behind a healthcare provider, so they have the required knowledge and experience to take on these claims when they are filed on behalf of the healthcare facility."}),e.jsx("div",{className:"highlight-box",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Why Choose HBS?"})," Our specialists understand the unique challenges of Article 28 facilities and have successfully navigated the complex reimbursement landscape for numerous New York healthcare providers."]})})]}),e.jsx("div",{className:"article-divider"}),e.jsxs("div",{className:"article-section",id:"no-fault-law",children:[e.jsx("h2",{className:"article-heading",children:"Understanding the No-Fault Insurance Law"}),e.jsx("p",{className:"article-text",children:"However, because the services healthcare professionals who are accredited under Article 28 provide are more expensive, to some degree, this is because they have to be willing to pay the bills to ensure that high standards of care are met."}),e.jsx("p",{className:"article-text",children:"As Article 28 facilities provide a higher cost of care, the carriers are very interested in controlling those costs, so more scrutiny is put on them."})]}),e.jsxs("div",{className:"article-section",id:"denials",children:[e.jsx("h2",{className:"article-heading",children:"Common Reimbursement Denials Under New York's No-Fault Laws"}),e.jsx("p",{className:"article-text",children:"However, in some cases the insurance companies are reluctant to pay out these bills. However, there can be many reasons why they will deny your No-Fault claim and the most common reasons are as follows:"}),e.jsxs("div",{className:"denial-grid",children:[e.jsxs("div",{className:"denial-card",children:[e.jsx("div",{className:"denial-card-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})}),e.jsx("h4",{children:"Lack of Medical Necessity"}),e.jsx("p",{children:'The most common denial is that the insurer simply says the treatment provided by your facility was not "reasonable and necessary" and therefore, it is not covered under the No-Fault law. The insurers will collaborate with an independent physician to generate a peer review-based medical denial claiming the care was unnecessary.'})]}),e.jsxs("div",{className:"denial-card",children:[e.jsx("div",{className:"denial-card-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h4",{children:"Independent Medical Exam Findings"}),e.jsx("p",{children:`An IME (Independent Medical Exam) is another way insurance companies "verify" a patient's condition before paying your claims. The examining physician might rule that the patient's recovery is complete or minimize injuries. Insurance companies will deny claims referring to that opinion.`})]}),e.jsxs("div",{className:"denial-card",children:[e.jsx("div",{className:"denial-card-icon",children:e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})})}),e.jsx("h4",{children:"Missing Documentation"}),e.jsx("p",{children:"To get reimbursed, you must supply the insurance company with detailed documentation of care. Ignoring verification requests, even unjustified ones, can result in permanent claim denial. Always ensure every facility claim includes full supporting documentation."})]})]})]}),e.jsxs("div",{className:"article-cta",children:[e.jsx("h3",{className:"article-cta-title",children:"Need Expert Help with Article 28 Claims?"}),e.jsx("p",{className:"article-cta-text",children:"Our team has the specialized knowledge to navigate New York's complex No-Fault reimbursement landscape. Let us help you maximize your reimbursements and reduce denials."}),e.jsxs("div",{className:"article-cta-actions",children:[e.jsxs(i,{to:"/contact",className:"btn btn-primary",children:["Get a Consultation",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx(i,{to:"/find-service",className:"btn btn-ghost",children:"Explore Services"})]})]})]})]})]})}export{s as default};
