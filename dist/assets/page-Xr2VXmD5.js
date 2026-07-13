import{r as t,j as e}from"./index-6Dhx178x.js";function l(){const n=t.useRef(null);return t.useEffect(()=>{const a=n.current;if(!a)return;const i=()=>{a.classList.toggle("scrolled",window.scrollY>8)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),t.useEffect(()=>{const a=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(r.target.classList.add("in"),a.unobserve(r.target))})},{threshold:.12,rootMargin:"0px 0px -60px 0px"});return document.querySelectorAll(".fade-in").forEach(i=>a.observe(i)),()=>a.disconnect()},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
          --signal-pale: rgba(0,200,150,.08);
          --amber: #F59E0B;
          --amber-deep: #B45309;
          --amber-pale: rgba(245,158,11,.08);
          --danger: #D64545;
          --danger-pale: rgba(214,69,69,.07);
          --radius: 4px;
          --radius-lg: 12px;
          --max: 1280px;
          --gutter: clamp(20px,4vw,48px);
          --serif: 'Fraunces','Times New Roman',serif;
          --sans: 'Inter Tight',-apple-system,sans-serif;
          --mono: 'JetBrains Mono',monospace;
          --ease: cubic-bezier(.22,1,.36,1);
        }

        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:var(--sans);background:var(--paper);color:var(--ink);line-height:1.5;font-size:16px;overflow-x:hidden}
        ::selection{background:var(--ink);color:var(--paper)}
        a{color:inherit;text-decoration:none}
        img{max-width:100%;display:block}

        .container{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
        .two-col{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}

        .eyebrow{font-family:var(--mono);font-size:11px;text-transform:uppercase;letter-spacing:.18em;color:var(--ink-mute);display:inline-flex;align-items:center;gap:10px}
        .eyebrow::before{content:'';width:24px;height:1px;background:currentColor}
        .eyebrow--light{color:rgba(250,247,242,.5)}
        .eyebrow--light::before{background:rgba(250,247,242,.4)}

        nav.top{position:fixed;top:0;left:0;right:0;z-index:100;backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);background:rgba(250,247,242,.82);border-bottom:1px solid transparent;transition:border-color .3s var(--ease)}
        nav.top.scrolled{border-bottom-color:var(--paper-line)}
        .nav-inner{max-width:var(--max);margin:0 auto;padding:18px var(--gutter);display:flex;align-items:center;justify-content:space-between;gap:32px}
        .logo{display:flex;align-items:center;gap:10px;font-family:var(--serif);font-size:20px;font-weight:500;letter-spacing:-.02em;color:var(--ink)}
        .logo-mark{width:28px;height:28px;background:var(--ink);border-radius:50%;position:relative;flex-shrink:0}
        .logo-mark::after{content:'';position:absolute;inset:7px;border-radius:50%;background:var(--signal)}
        .nav-links{display:flex;gap:32px;list-style:none}
        .nav-links a{color:var(--ink-soft);font-size:14px;font-weight:500;transition:color .2s}
        .nav-links a:hover{color:var(--ink)}

        .btn{display:inline-flex;align-items:center;gap:8px;padding:11px 22px;border-radius:var(--radius);font-family:var(--sans);font-size:14px;font-weight:600;cursor:pointer;border:1px solid transparent;transition:background .2s var(--ease),color .2s,transform .15s;white-space:nowrap}
        .btn:hover{transform:translateY(-1px)}
        .btn .arrow{transition:transform .2s;flex-shrink:0}
        .btn:hover .arrow{transform:translateX(3px)}
        .btn-primary{background:var(--ink);color:var(--paper);border-color:var(--ink)}
        .btn-primary:hover{background:var(--ink-soft)}
        .btn-ghost{background:transparent;color:var(--ink);border-color:var(--paper-line)}
        .btn-ghost:hover{background:var(--paper-warm);border-color:var(--ink-mute)}
        .btn-light{background:var(--paper);color:var(--ink);border-color:var(--paper)}
        .btn-light:hover{background:var(--paper-warm)}
        .btn-signal{background:var(--signal);color:var(--ink);border-color:var(--signal)}
        .btn-signal:hover{background:var(--signal-deep);color:var(--paper)}
        .btn-lg{padding:14px 28px;font-size:15px}

        .consultation-hero{background:var(--paper);padding:140px 0 100px;position:relative;overflow:hidden}
        .consultation-hero-bg{position:absolute;inset:0;pointer-events:none}
        .consultation-hero-bg svg{width:100%;height:100%}
        .consultation-hero-grain{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");opacity:.4}
        .consultation-hero-inner{position:relative;z-index:1;max-width:var(--max);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:1fr 440px;gap:64px;align-items:center}
        .consultation-hero-badge{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:var(--signal-deep);background:rgba(0,200,150,.08);border:1px solid rgba(0,200,150,.2);padding:6px 14px;border-radius:100px;margin-bottom:24px}
        .consultation-hero-title{font-family:var(--serif);font-size:clamp(2.6rem,5.5vw,4.2rem);font-weight:400;letter-spacing:-.025em;line-height:1.02;color:var(--ink);margin-bottom:24px;font-variation-settings:"opsz" 144}
        .consultation-hero-title em{font-style:italic;font-weight:300;color:var(--ink-mute)}
        .consultation-hero-subtitle{font-size:17px;line-height:1.7;color:var(--ink-soft);margin-bottom:14px;max-width:560px}
        .consultation-hero-lede{font-size:15px;line-height:1.75;color:var(--ink-mute);max-width:540px;margin-bottom:40px}
        .consultation-hero-actions{display:flex;gap:12px;flex-wrap:wrap}

        .cp-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);overflow:hidden;box-shadow:0 4px 32px rgba(10,22,40,.10),0 1px 4px rgba(10,22,40,.05)}
        .cp-header{background:var(--ink);padding:22px 24px 18px}
        .cp-header-label{font-family:var(--mono);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,247,242,.38);margin-bottom:12px}
        .cp-main-row{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:6px}
        .cp-big{font-family:var(--serif);font-size:2.6rem;color:var(--signal);line-height:1;font-variation-settings:"opsz" 144}
        .cp-unit{font-size:11px;color:rgba(250,247,242,.45);padding-bottom:4px;margin-left:4px}
        .cp-trend{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--signal);background:rgba(0,200,150,.12);border:1px solid rgba(0,200,150,.2);padding:3px 10px;border-radius:100px}
        .cp-trend-dot{width:5px;height:5px;border-radius:50%;background:var(--signal)}
        .cp-header-sub{font-family:var(--mono);font-size:9px;color:rgba(250,247,242,.35);letter-spacing:.08em;margin-top:6px}
        .cp-body{background:#111f35;padding:16px 20px}
        .cp-grid{display:grid;grid-template-columns:1fr 1fr;gap:0}
        .cp-metric{padding:10px;border-bottom:1px solid rgba(255,255,255,.06);border-right:1px solid rgba(255,255,255,.06)}
        .cp-metric:nth-child(2n){border-right:none}
        .cp-metric:nth-last-child(-n+2){border-bottom:none}
        .cp-m-label{font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.12em;color:rgba(250,247,242,.32);margin-bottom:5px}
        .cp-m-value{font-size:14px;font-weight:600;margin-bottom:5px}
        .cp-m-value.sig{color:var(--signal)}
        .cp-m-value.amb{color:var(--amber)}
        .cp-m-value.lite{color:rgba(250,247,242,.8)}
        .cp-spark{height:3px;border-radius:2px;background:rgba(255,255,255,.08);overflow:hidden}
        .cp-spark-fill{height:100%;border-radius:2px}
        .spark-sig{background:var(--signal)}
        .spark-amb{background:var(--amber)}
        .spark-lite{background:rgba(250,247,242,.35)}
        .cp-queue{background:var(--white);padding:16px 20px}
        .cp-queue-title{font-family:var(--mono);font-size:8px;text-transform:uppercase;letter-spacing:.14em;color:var(--ink-mute);margin-bottom:10px}
        .cp-queue-row{display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--paper-line)}
        .cp-queue-row:last-of-type{border-bottom:none}
        .cp-q-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
        .cp-q-lbl{font-size:11px;color:var(--ink-soft);flex:1;line-height:1.3}
        .cp-q-badge{font-family:var(--mono);font-size:8px;letter-spacing:.08em;padding:2px 9px;border-radius:100px;white-space:nowrap}
        .badge-ok{background:rgba(0,200,150,.1);color:var(--signal-deep)}
        .badge-warn{background:rgba(245,158,11,.12);color:var(--amber-deep)}
        .badge-idle{background:var(--paper-warm);color:var(--ink-mute)}
        .badge-info{background:rgba(10,22,40,.07);color:var(--ink-soft)}
        .cp-footer{background:var(--ink);padding:12px 20px;display:flex;align-items:center;justify-content:space-between}
        .cp-footer-pill{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:9px;letter-spacing:.1em;color:var(--signal)}
        .cp-footer-pulse{width:6px;height:6px;border-radius:50%;background:var(--signal)}
        .cp-footer-right{font-family:var(--mono);font-size:9px;color:rgba(250,247,242,.3);letter-spacing:.08em}

        .reveal{opacity:0;transform:translateY(20px)}
        .reveal-1{animation:rv .8s var(--ease) .10s forwards}
        .reveal-2{animation:rv .8s var(--ease) .22s forwards}
        .reveal-3{animation:rv .8s var(--ease) .36s forwards}
        .reveal-4{animation:rv .8s var(--ease) .50s forwards}
        @keyframes rv{to{opacity:1;transform:translateY(0)}}
        .fade-in{opacity:0;transform:translateY(28px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
        .fade-in.in{opacity:1;transform:translateY(0)}

        .consultation-section{padding:100px 0;position:relative}
        .consultation-section--warm{background:var(--paper-warm)}
        .consultation-section--ink{background:var(--ink);color:var(--paper)}
        .consultation-section--ink-soft{background:var(--ink-soft);color:var(--paper)}
        .consultation-section--ink .eyebrow,.consultation-section--ink-soft .eyebrow{color:rgba(250,247,242,.5)}
        .consultation-section--ink .eyebrow::before,.consultation-section--ink-soft .eyebrow::before{background:rgba(250,247,242,.4)}
        .consultation-section--ink p,.consultation-section--ink-soft p{color:rgba(250,247,242,.65)}

        .section-header{margin-bottom:64px}
        .section-title{font-family:var(--serif);font-size:clamp(2rem,3.8vw,3rem);font-weight:400;letter-spacing:-.025em;line-height:1.06;margin-top:16px;max-width:780px;font-variation-settings:"opsz" 144}
        .section-title em{font-style:italic;font-weight:300;color:var(--ink-mute)}
        .section-subtitle{margin-top:18px;font-size:16px;line-height:1.75;color:var(--ink-mute);max-width:560px}
        .consultation-section--ink .section-title,.consultation-section--ink-soft .section-title{color:var(--paper)}
        .consultation-section--ink .section-title em,.consultation-section--ink-soft .section-title em{color:rgba(250,247,242,.5)}
        .consultation-section--ink .section-subtitle,.consultation-section--ink-soft .section-subtitle{color:rgba(250,247,242,.6)}

        .monologue{max-width:780px;border-left:2px solid var(--paper-line);padding-left:32px}
        .monologue p{font-size:16px;line-height:1.85;color:var(--ink-soft);margin-bottom:20px}
        .monologue p:last-child{margin-bottom:0}
        .monologue .highlight{font-family:var(--serif);font-size:19px;font-style:italic;color:var(--ink);line-height:1.5}

        .pathway-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px}
        .pathway-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);padding:28px;transition:border-color .2s,transform .2s}
        .pathway-card:hover{border-color:var(--signal-deep);transform:translateY(-2px)}
        .pathway-card-tag{font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;padding:3px 10px;border-radius:100px;display:inline-block;margin-bottom:14px}
        .ptag-rcm{background:rgba(0,200,150,.1);color:var(--signal-deep)}
        .ptag-ar{background:rgba(245,158,11,.1);color:var(--amber-deep)}
        .ptag-ops{background:rgba(10,22,40,.07);color:var(--ink-soft)}
        .ptag-tech{background:rgba(124,58,237,.07);color:#5B21B6}
        .ptag-cred{background:rgba(214,69,69,.08);color:var(--danger)}
        .ptag-analytics{background:rgba(14,165,233,.1);color:#0369A1}
        .pathway-card h4{font-family:var(--serif);font-size:1.1rem;font-weight:400;color:var(--ink);margin-bottom:8px;line-height:1.3;font-variation-settings:"opsz" 72}
        .pathway-card p{font-size:13px;color:var(--ink-mute);line-height:1.65;margin-bottom:16px}
        .pathway-card-link{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--signal-deep);font-family:var(--mono);letter-spacing:.06em;text-transform:uppercase}
        .pathway-card-link svg{transition:transform .2s}
        .pathway-card:hover .pathway-card-link svg{transform:translateX(3px)}

        .service-match-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2px;background:var(--paper-line);border:1px solid var(--paper-line);border-radius:var(--radius-lg);overflow:hidden;margin-top:48px}
        .service-match-card{background:var(--white);padding:28px 32px;transition:background .2s}
        .service-match-card:hover{background:var(--paper-warm)}
        .smc-if{font-family:var(--mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute);margin-bottom:8px}
        .smc-problem{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:8px;line-height:1.35}
        .smc-arrow{display:flex;align-items:center;gap:8px;margin:10px 0}
        .smc-arrow-line{flex:1;height:1px;background:var(--paper-line)}
        .smc-arrow-icon{font-size:12px;color:var(--signal-deep)}
        .smc-service{display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--signal-deep);text-decoration:none}
        .smc-service:hover{color:var(--signal)}
        .smc-service svg{flex-shrink:0;transition:transform .2s}
        .service-match-card:hover .smc-service svg{transform:translateX(3px)}
        .smc-desc{font-size:12px;color:var(--ink-mute);line-height:1.6;margin-top:6px}

        .decision-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:40px}
        .decision-card{background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg);padding:20px 22px;cursor:pointer;transition:all .2s}
        .decision-card:hover{border-color:var(--signal);background:var(--signal-pale)}
        .dc-icon{font-size:22px;margin-bottom:10px}
        .dc-title{font-size:13px;font-weight:600;color:var(--ink);margin-bottom:4px}
        .dc-sub{font-size:11px;color:var(--ink-mute);line-height:1.5}

        .process-timeline{display:flex;flex-direction:column}
        .process-step{display:grid;grid-template-columns:48px 1fr;gap:0 24px;padding:28px 0;border-bottom:1px solid var(--paper-line);align-items:start}
        .process-step:last-child{border-bottom:none}
        .process-step-num{font-family:var(--mono);font-size:11px;color:var(--signal-deep);letter-spacing:.1em;padding-top:4px}
        .process-step h4{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:6px}
        .process-step p{font-size:14px;color:var(--ink-mute);line-height:1.72}
        .consultation-section--ink .process-step{border-color:rgba(250,247,242,.1)}
        .consultation-section--ink .process-step h4{color:var(--paper)}
        .consultation-section--ink .process-step p{color:rgba(250,247,242,.6)}
        .consultation-section--ink .process-step-num{color:var(--signal)}

        .workflow-dashboard{display:flex;align-items:flex-start;gap:0;margin-top:48px;position:relative;overflow-x:auto;padding-bottom:8px}
        .workflow-dashboard::before{content:'';position:absolute;top:18px;left:24px;right:24px;height:1px;background:var(--paper-line);z-index:0}
        .wf-node{display:flex;flex-direction:column;align-items:center;flex:1;min-width:100px;position:relative;z-index:1;padding:0 6px}
        .wf-dot{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:500;margin-bottom:10px;border:1px solid var(--paper-line);flex-shrink:0;background:var(--white)}
        .wf-dot--signal{background:rgba(0,200,150,.1);color:var(--signal-deep);border-color:rgba(0,200,150,.25)}
        .wf-dot--amber{background:rgba(245,158,11,.1);color:var(--amber-deep);border-color:rgba(245,158,11,.25)}
        .wf-dot--ink{background:var(--ink);color:var(--paper);border-color:var(--ink)}
        .wf-node-label{font-size:11px;font-weight:600;color:var(--ink);text-align:center;line-height:1.3;margin-bottom:3px}
        .wf-node-sub{font-family:var(--mono);font-size:9px;color:var(--ink-mute);text-align:center;letter-spacing:.06em}

        .ai-split{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--paper-line);border-radius:var(--radius-lg);overflow:hidden;margin-top:48px}
        .ai-col{padding:36px}
        .ai-col--machine{background:var(--paper-warm)}
        .ai-col--human{background:var(--white)}
        .ai-col-label{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;margin-bottom:24px;padding-bottom:14px;border-bottom:1px solid var(--paper-line)}
        .ai-col--machine .ai-col-label{color:var(--signal-deep)}
        .ai-col--human .ai-col-label{color:var(--ink-mute)}
        .ai-items{display:flex;flex-direction:column;gap:14px}
        .ai-item{display:flex;gap:12px;align-items:flex-start}
        .ai-item-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;margin-top:6px}
        .ai-col--machine .ai-item-dot{background:var(--signal)}
        .ai-col--human .ai-item-dot{background:var(--ink)}
        .ai-item p{font-size:13px;color:var(--ink-mute);line-height:1.6}

        .outcome-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:48px}
        .outcome-card{padding:28px;background:var(--white);border:1px solid var(--paper-line);border-radius:var(--radius-lg)}
        .outcome-card-num{font-family:var(--serif);font-size:2.4rem;font-weight:400;color:var(--signal);line-height:1;margin-bottom:8px}
        .outcome-card h4{font-size:14px;font-weight:600;color:var(--ink);margin-bottom:6px}
        .outcome-card p{font-size:13px;color:var(--ink-mute);line-height:1.65}
        @media(max-width:1024px){.outcome-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:720px){.outcome-grid{grid-template-columns:1fr}}

        .pull-quote{font-family:var(--serif);font-size:clamp(1.1rem,2.2vw,1.45rem);font-style:italic;color:var(--ink);line-height:1.65;padding:28px 32px;border-left:3px solid var(--signal);background:var(--signal-pale);border-radius:0 var(--radius) var(--radius) 0;margin:40px 0;max-width:860px}

        .signal-band{background:var(--signal-pale);border:1px solid rgba(0,200,150,.2);border-radius:var(--radius-lg);padding:28px 36px;margin-top:48px;display:flex;align-items:flex-start;gap:20px}
        .sb-icon{width:36px;height:36px;background:rgba(0,200,150,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
        .sb-dot{width:10px;height:10px;border-radius:50%;background:var(--signal)}
        .sb-content h4{font-family:var(--serif);font-size:1.05rem;color:var(--ink);margin-bottom:6px;font-variation-settings:"opsz" 72}
        .sb-content p{font-size:14px;color:var(--ink-mute);line-height:1.7}

        .compare-wrap{background:var(--ink);border-radius:var(--radius-lg);overflow:hidden;margin-top:48px}
        .compare-header{display:grid;grid-template-columns:2fr 1fr 1fr;padding:14px 28px;background:rgba(255,255,255,.04)}
        .compare-header span{font-family:var(--mono);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(250,247,242,.35)}
        .compare-header span.hbs-col{color:var(--signal)}
        .compare-row{display:grid;grid-template-columns:2fr 1fr 1fr;padding:14px 28px;border-top:1px solid rgba(255,255,255,.05)}
        .compare-row span{font-size:13px}
        .c-label{color:rgba(250,247,242,.55)}
        .c-hbs{color:var(--signal);font-weight:500}
        .c-other{color:rgba(250,247,242,.3)}

        .cta-section{background:var(--ink);padding:120px var(--gutter);text-align:center;position:relative;overflow:hidden}
        .cta-glow{position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);width:600px;height:400px;background:radial-gradient(ellipse at center,rgba(0,200,150,.2),transparent 70%);pointer-events:none}
        .cta-inner{position:relative;z-index:1;max-width:680px;margin:0 auto}
        .cta-title{font-family:var(--serif);font-size:clamp(2.2rem,4.5vw,3.4rem);font-weight:400;letter-spacing:-.025em;line-height:1.06;color:var(--paper);margin:16px 0 24px;font-variation-settings:"opsz" 144}
        .cta-title em{font-style:italic;font-weight:300;color:rgba(250,247,242,.5)}
        .cta-text{font-size:16px;line-height:1.75;color:rgba(250,247,242,.6);margin-bottom:40px}
        .cta-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .trust-line{margin-top:28px;font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,247,242,.35)}

        footer{background:var(--ink);color:rgba(250,247,242,.6);padding:60px 0 32px;border-top:1px solid rgba(255,255,255,.06)}
        .footer-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;font-size:13px}
        .footer-inner a{color:rgba(250,247,242,.6)}
        .footer-inner a:hover{color:var(--signal)}
        .footer-legal{display:flex;gap:24px}

        .related-strip{background:var(--paper-warm);border-top:1px solid var(--paper-line);padding:28px 0}
        .related-inner{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .related-label{font-family:var(--mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-mute)}
        .related-link{font-size:13px;color:var(--ink-soft);padding:5px 14px;border:1px solid var(--paper-line);border-radius:100px;background:var(--white);transition:border-color .2s,color .2s}
        .related-link:hover{border-color:var(--signal-deep);color:var(--signal-deep)}

        @media(max-width:1024px){
          .consultation-hero-inner{grid-template-columns:1fr}
          .consultation-hero-visual{display:none}
          .two-col{grid-template-columns:1fr;gap:40px}
          .three-col{grid-template-columns:1fr}
          .ai-split{grid-template-columns:1fr}
          .workflow-dashboard::before{display:none}
        }
        @media(max-width:720px){
          .consultation-section{padding:64px 0}
          .consultation-hero{padding:110px 0 72px}
          .cta-section{padding:80px var(--gutter)}
          .section-header{margin-bottom:40px}
          .nav-links{display:none}
          .compare-header,.compare-row{grid-template-columns:1.5fr 1fr 1fr;padding:12px 16px}
          .decision-grid{grid-template-columns:1fr 1fr}
          .pathway-grid{grid-template-columns:1fr}
          .service-match-grid{grid-template-columns:1fr}
          .wf-node{min-width:80px}
        }
      `}),e.jsxs("main",{children:[e.jsxs("section",{className:"consultation-hero",children:[e.jsxs("div",{className:"consultation-hero-bg",children:[e.jsxs("svg",{viewBox:"0 0 1440 900",preserveAspectRatio:"xMidYMid slice",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("pattern",{id:"grid",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:e.jsx("path",{d:"M 48 0 L 0 0 0 48",fill:"none",stroke:"#0A1628",strokeWidth:"0.5",opacity:"0.08"})})}),e.jsx("rect",{width:"100%",height:"100%",fill:"url(#grid)"})]}),e.jsx("div",{className:"consultation-hero-grain"})]}),e.jsxs("div",{className:"consultation-hero-inner",children:[e.jsxs("div",{className:"consultation-hero-content",children:[e.jsx("div",{className:"eyebrow",children:"Consultation · Find Services"}),e.jsxs("h1",{className:"consultation-hero-title reveal reveal-2",children:["You may not need every service.",e.jsx("br",{}),e.jsx("em",{children:"You need the right one first."})]}),e.jsx("p",{className:"consultation-hero-subtitle reveal reveal-3",children:"Most healthcare organizations experiencing revenue or operational pressure already know something is wrong. Fewer know exactly where it starts — whether it is billing, eligibility, coding, authorization, payer follow-up, reporting, credentialing, or a workflow gap upstream of all of them."}),e.jsx("p",{className:"consultation-hero-lede reveal reveal-3",children:"This page helps you match your specific operational problem to the HBS service that addresses it — so the first step you take is the right one, not the most obvious one."}),e.jsxs("div",{className:"consultation-hero-actions reveal reveal-4",children:[e.jsxs("a",{href:"#match",className:"btn btn-primary btn-lg",children:["Find the right service",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#cta",className:"btn btn-ghost btn-lg",children:"Book a service fit call"})]})]}),e.jsx("div",{className:"consultation-hero-visual reveal reveal-4",style:{animationDelay:".55s"},children:e.jsxs("div",{className:"cp-card",children:[e.jsxs("div",{className:"cp-header",children:[e.jsx("div",{className:"cp-header-label",children:"— Service Matching · Operational Pressure Map"}),e.jsxs("div",{className:"cp-main-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"2px"},children:[e.jsx("span",{className:"cp-big",children:"12"}),e.jsx("span",{className:"cp-unit",children:"service pathways available"})]}),e.jsxs("span",{className:"cp-trend",children:[e.jsx("span",{className:"cp-trend-dot"}),"One right first step"]})]}),e.jsx("div",{className:"cp-header-sub",children:"Problem → Service → Outcome · Guided matching"})]}),e.jsx("div",{className:"cp-body",children:e.jsxs("div",{className:"cp-grid",children:[e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Billing & RCM"}),e.jsx("div",{className:"cp-m-value sig",children:"3 pathways"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"100%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"AR & Denials"}),e.jsx("div",{className:"cp-m-value sig",children:"3 pathways"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-sig",style:{width:"100%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Credentialing"}),e.jsx("div",{className:"cp-m-value amb",children:"2 pathways"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-amb",style:{width:"80%"}})})]}),e.jsxs("div",{className:"cp-metric",children:[e.jsx("div",{className:"cp-m-label",children:"Operations+"}),e.jsx("div",{className:"cp-m-value lite",children:"4 pathways"}),e.jsx("div",{className:"cp-spark",children:e.jsx("div",{className:"cp-spark-fill spark-lite",style:{width:"90%"}})})]})]})}),e.jsxs("div",{className:"cp-queue",children:[e.jsx("div",{className:"cp-queue-title",children:"Common Starting Points"}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"var(--danger)"}}),e.jsx("span",{className:"cp-q-lbl",children:"Claims delayed / billing unstable"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"→ Medical Billing & RCM"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"var(--amber)"}}),e.jsx("span",{className:"cp-q-lbl",children:"Unpaid claims building up"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"→ AR Management"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"var(--amber)"}}),e.jsx("span",{className:"cp-q-lbl",children:"Denials repeating every month"}),e.jsx("span",{className:"cp-q-badge badge-warn",children:"→ AR Denial & Fixation"})]}),e.jsxs("div",{className:"cp-queue-row",children:[e.jsx("div",{className:"cp-q-dot",style:{background:"var(--signal)"}}),e.jsx("span",{className:"cp-q-lbl",children:"Not sure where the problem is"}),e.jsx("span",{className:"cp-q-badge badge-ok",children:"→ Start here"})]})]}),e.jsxs("div",{className:"cp-footer",children:[e.jsxs("span",{className:"cp-footer-pill",children:[e.jsx("span",{className:"cp-footer-pulse"}),"Start with the problem. We identify the right service."]}),e.jsx("span",{className:"cp-footer-right",children:"No pressure"})]})]})})]})]}),e.jsx("section",{className:"consultation-section",id:"match",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"Problem-to-service matching"}),e.jsxs("h2",{className:"section-title",children:["Find the service that addresses ",e.jsx("em",{children:"the operational problem you are actually experiencing."})]}),e.jsx("p",{className:"section-subtitle",children:"Match the symptom you are experiencing to the service that addresses its root cause — not just the most visible problem, but the one that is creating the most downstream impact."})]}),e.jsx("div",{className:"service-match-grid fade-in",children:[{problem:"Claims are delayed, submission is inconsistent, or billing workflow feels unstable",service:"Medical Billing & RCM",link:"solutions/medical-billing-rcm",desc:"End-to-end revenue cycle management — charge entry, claim submission, payer follow-up, payment posting, and billing workflow stabilization."},{problem:"Unpaid claims building in the AR, aged accounts accumulating, cash flow tightening",service:"AR Management & Cash Flow",link:"solutions/ar-management",desc:"Systematic AR follow-up — every aging bucket assigned, every claim worked on schedule, and cash flow improvement through organized payer communication."},{problem:"The same denial reasons appearing month after month without resolution",service:"AR Denial & Fixation",link:"solutions/ar-denial-fixation",desc:"Root cause denial analysis — patterns identified, upstream workflow corrections made, and appeal rates tracked so denial rates decline over time."},{problem:"Old claims sitting uncollected — AR from 90, 120, or 180+ days ago that nobody has worked",service:"Old & Aging AR Recovery",link:"solutions/old-aging-ar",desc:"Targeted recovery of aged AR — collectibility assessment, prioritized recovery efforts, and revenue recaptured from accounts that have been overlooked."},{problem:"Coding or documentation problems creating denials, underpayments, or compliance risk",service:"Medical Coding Support",link:"solutions/medical-coding",desc:"ICD-10, CPT, and modifier accuracy reviewed before claim submission — coding errors caught at the source rather than discovered through denials."},{problem:"Concerns about billing accuracy, audit risk, documentation gaps, or coding pattern compliance",service:"Medical Auditing",link:"solutions/medical-audit",desc:"Billing and coding audit — documentation reviewed against billed codes, compliance gaps identified, and corrective recommendations provided."},{problem:"Provider credentialing is delaying billing, recredentialing deadlines being missed, or documents scattered",service:"Provider Credentialing",link:"solutions/provider-credential",desc:"Full credentialing workflow — document collection, CAQH, payer applications, status tracking, and recredentialing management so providers stay billing-active."},{problem:"Payer network gaps limiting patient access or a new provider who cannot bill certain plans",service:"Payer & Insurer Enrollment",link:"solutions/payer-insurer-enrollment",desc:"Payer enrollment from application to approval — commercial, Medicare, Medicaid, and EFT/ERA setup so providers access the payer networks their patients use."},{problem:"Opening a new practice and the backend operational infrastructure is not ready",service:"Practice Launch Support",link:"solutions/practice-launch",desc:"Full launch coordination — credentialing, payer enrollment, billing setup, intake workflow, and RCM structure built before the first patient visit."},{problem:"Daily workflow feels disorganized — tasks falling behind, staff overloaded, operations not scaling with growth",service:"Operations Management",link:"solutions/operations-management",desc:"Daily administrative workflow support — prior auth, eligibility, scheduling coordination, SOP implementation, and operational reporting for growing practices."},{problem:"Reports exist but leadership cannot see where revenue is leaking or what the data actually means",service:"Analytics & Reporting",link:"solutions/analytics-reporting",desc:"Operational analytics with plain-language commentary — KPI tracking, denial trend analysis, AR aging visibility, and reporting that produces decisions, not just data."},{problem:"Patient inquiries not converting, appointment follow-up inconsistent, or retention weaker than it should be",service:"Marketing & Patient Engagement",link:"solutions/marketing-patient-engagement",desc:"Patient engagement workflow — inquiry follow-up, appointment conversion, recall campaigns, review management, and patient communication coordination."}].map((a,i)=>e.jsxs("div",{className:"service-match-card",children:[e.jsx("div",{className:"smc-if",children:"If your practice is experiencing"}),e.jsx("div",{className:"smc-problem",children:a.problem}),e.jsxs("div",{className:"smc-arrow",children:[e.jsx("div",{className:"smc-arrow-line"}),e.jsx("div",{className:"smc-arrow-icon",children:"→"}),e.jsx("div",{className:"smc-arrow-line"})]}),e.jsxs("a",{href:a.link,className:"smc-service",children:[a.service,e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("div",{className:"smc-desc",children:a.desc})]},i))})]})}),e.jsx("section",{className:"consultation-section consultation-section--warm",id:"signs",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"Common signs you need operational support"}),e.jsxs("h2",{className:"section-title",children:["The symptoms are visible. ",e.jsx("em",{children:"The root cause is usually upstream."})]})]}),e.jsxs("div",{className:"monologue fade-in",children:[e.jsx("p",{children:"Healthcare organizations experiencing operational pressure almost always notice the visible symptoms first — slower collections, higher denial rates, staff working longer hours, providers frustrated by administrative delays. What is harder to see is where those symptoms originate."}),e.jsx("p",{children:"A denial rate that keeps climbing is often not a billing problem. It may be an authorization problem, a documentation gap, a coding inconsistency, or a payer-specific rule that was not applied correctly upstream. Addressing the denial directly — without finding the upstream cause — produces a temporary improvement that reverts the following month."}),e.jsx("p",{className:"highlight",children:'"Revenue delays, growing AR, and repeating denials are almost always downstream symptoms of upstream process gaps. Finding the right service means identifying where the process actually breaks — not just where the financial impact appears."'}),e.jsx("p",{children:"The service matching on this page is organized around the problem you are experiencing, not the financial metric that reflects it. Start with the description that most accurately matches your daily operational experience — and the service pathway will point you toward the function where the root cause lives."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"16px",marginTop:"48px"},className:"fade-in",children:[{title:"Revenue signs",color:"var(--danger)",items:["Collections lower than production suggests","Cash flow unpredictable month to month","AR aging report reviewed but not acted on","Payers taking longer to pay than they used to"]},{title:"Billing signs",color:"var(--amber-deep)",items:["Denial rate above 3–4% of submitted claims","Same denial reasons appearing repeatedly","Claims submitted late or inconsistently","Coding or documentation errors generating risk"]},{title:"Operations signs",color:"var(--signal-deep)",items:["Staff always at capacity — growth has stalled","Credentialing delays blocking new provider billing","Reports exist but leadership cannot act on them","Prior auths expiring or missed before services"]}].map((a,i)=>e.jsxs("div",{style:{background:"var(--white)",border:"1px solid var(--paper-line)",borderRadius:"var(--radius-lg)",padding:"24px"},children:[e.jsx("div",{style:{fontFamily:"var(--mono)",fontSize:"9px",letterSpacing:".14em",textTransform:"uppercase",color:a.color,marginBottom:"10px"},children:a.title}),e.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"8px"},children:a.items.map((r,o)=>e.jsxs("li",{style:{fontSize:"13px",color:"var(--ink-mute)",paddingLeft:"16px",position:"relative"},children:[e.jsx("span",{style:{position:"absolute",left:0,color:a.color},children:"·"}),r]},o))})]},i))})]})}),e.jsx("section",{className:"consultation-section",id:"how",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"How HBS identifies the right starting point"}),e.jsxs("h2",{className:"section-title",children:["Not the most obvious service. ",e.jsx("em",{children:"The right one for your actual problem."})]}),e.jsx("p",{className:"section-subtitle",children:"The service fit consultation is a structured operational review — not a sales call, not an intake form. It is designed to identify where your revenue cycle or operations actually break, not where the financial impact happens to appear."})]}),e.jsx("div",{className:"process-timeline fade-in",style:{maxWidth:"780px"},children:[{num:"01",title:"You describe what you are experiencing — in plain language",text:"Cash flow is slower. Denials are up. Staff are overwhelmed. The practice is growing but operations are not keeping pace. AR is building. Whatever it is, you describe it as you experience it — not in billing terminology, not in technical language. That is our starting point."},{num:"02",title:"We trace the experience upstream to find the actual root cause",text:"Billing problems often start before billing. AR problems often start at authorization or eligibility. Denial patterns often reflect documentation or coding gaps, not payer behavior. We follow the chain upstream from the symptom to identify where the process actually breaks."},{num:"03",title:"We identify the highest-impact first step",text:"Not every operational problem needs to be solved simultaneously. The right first step addresses the function that is creating the most downstream impact — the one that, when fixed, makes the most other things better. We prioritize that first step based on the operational review, not a package menu."},{num:"04",title:"We recommend the specific service that addresses it — and explain why",text:"The recommendation is specific: this service, at this scope, inside these systems, addressing this operational gap. You understand what would be done and why before any commitment is made."},{num:"05",title:"You decide whether to proceed — on your terms",text:"The consultation produces a recommendation and a clear first step. You decide whether it fits, whether the timing is right, and whether HBS is the right team to execute it. No pressure, no follow-up campaign if the answer is no."}].map((a,i)=>e.jsxs("div",{className:"process-step",children:[e.jsx("div",{className:"process-step-num",children:a.num}),e.jsxs("div",{children:[e.jsx("h4",{children:a.title}),e.jsx("p",{children:a.text})]})]},i))})]})}),e.jsx("section",{className:"consultation-section consultation-section--warm",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"The AI + human advantage in service matching"}),e.jsxs("h2",{className:"section-title",children:["Pattern recognition at scale. ",e.jsx("em",{children:"Human judgment on every recommendation."})]})]}),e.jsxs("div",{className:"ai-split fade-in",children:[e.jsxs("div",{className:"ai-col ai-col--machine",children:[e.jsx("div",{className:"ai-col-label",children:"AI-assisted service matching"}),e.jsx("div",{className:"ai-items",children:["Operational intake data organization and pattern flagging","Revenue cycle pressure indicators identified from intake responses","Service pathway matching based on symptom and organization profile","Root cause probability scoring from operational descriptions","Similar organization profile comparison and outcome reference","Service recommendation documentation preparation"].map((a,i)=>e.jsxs("div",{className:"ai-item",children:[e.jsx("div",{className:"ai-item-dot"}),e.jsx("p",{children:a})]},i))})]}),e.jsxs("div",{className:"ai-col ai-col--human",children:[e.jsx("div",{className:"ai-col-label",children:"Human operations specialists"}),e.jsx("div",{className:"ai-items",children:["Operational context conversation — the nuances AI flags cannot capture","Healthcare-specific judgment on which upstream gap is creating the symptoms","Payer, specialty, and system-specific service scoping","Honest service fit assessment — including when a different service is needed","First-step sequencing when multiple services could apply","Engagement structure design and onboarding planning"].map((a,i)=>e.jsxs("div",{className:"ai-item",children:[e.jsx("div",{className:"ai-item-dot"}),e.jsx("p",{children:a})]},i))})]})]}),e.jsx("div",{className:"pull-quote fade-in",children:'"You do not have to diagnose the entire backend problem before speaking with us. You describe what you are experiencing. We identify where it is coming from and what would fix it. That is the consultation."'})]})}),e.jsx("section",{className:"consultation-section",id:"results",children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header fade-in",children:[e.jsx("div",{className:"eyebrow",children:"What changes when you start with the right service"}),e.jsxs("h2",{className:"section-title",children:["The right first step creates ",e.jsx("em",{children:"momentum across the entire revenue cycle."})]})]}),e.jsx("div",{className:"outcome-grid fade-in",children:[{num:"◎",title:"The root cause is addressed — not just the symptom",text:"Services that address upstream gaps produce downstream improvements that stick — denial rates declining, AR aging improving, and cash flow stabilizing as the underlying process gets corrected."},{num:"$",title:"Revenue improvement happens at the source",text:"When the right service addresses the right gap, revenue improvement is measurable and sustained — not a temporary spike from aggressive AR follow-up that fades when the upstream gaps remain."},{num:"✓",title:"The team does not manage another vendor relationship",text:"The right service, delivered the right way, reduces your team's administrative burden rather than adding vendor management to it. That is the difference between a service and a partnership."},{num:"→",title:"Leadership has a clear next step — not a list of options",text:"The consultation produces a specific recommendation and a clear action — not a range of services to evaluate, not a multi-option proposal. One right first step with the reasoning behind it."},{num:"⚡",title:"The practice can grow because operations are not the ceiling",text:"When operational support is correctly matched to the right functions, the practice can grow without operational chaos — clinical capacity expands without the backend becoming the constraint."},{num:"↓",title:"Expensive wrong decisions are avoided",text:"Choosing the wrong service first — addressing the symptom rather than the root cause — costs time, money, and internal credibility. The right first step avoids that cost entirely."}].map((a,i)=>e.jsxs("div",{className:"outcome-card",children:[e.jsx("div",{className:"outcome-card-num",children:a.num}),e.jsx("h4",{children:a.title}),e.jsx("p",{children:a.text})]},i))})]})}),e.jsx("section",{className:"consultation-section consultation-section--warm",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"signal-band fade-in",children:[e.jsx("div",{className:"sb-icon",children:e.jsx("div",{className:"sb-dot"})}),e.jsxs("div",{className:"sb-content",children:[e.jsx("h4",{children:"Not sure which service — or which combination of services — fits your organization?"}),e.jsxs("p",{children:["If you need a broader conversation about how HBS would operate inside your organization as an embedded partner — rather than matching a single service to a single problem — the"," ",e.jsx("a",{href:"/explore-partnership",style:{color:"var(--signal-deep)",fontWeight:600},children:"Explore Partnership"})," ","page walks through the different partnership models and what the consultation process looks like for organizations that need a more comprehensive operational support model."]})]})]})})})]}),e.jsxs("section",{className:"cta-section",id:"cta",children:[e.jsx("div",{className:"cta-glow"}),e.jsxs("div",{className:"cta-inner",children:[e.jsx("div",{className:"eyebrow eyebrow--light",style:{justifyContent:"center"},children:"Book a service fit call"}),e.jsxs("h2",{className:"cta-title",children:["Tell us what you are experiencing. ",e.jsx("em",{children:"We will tell you where it starts."})]}),e.jsx("p",{className:"cta-text",children:"A 30-minute operational review. You describe the symptoms. We trace them upstream and identify the service that addresses the root cause. You leave with a specific recommendation and a clear first step — not a sales proposal with five options and a price sheet."}),e.jsxs("div",{className:"cta-actions",children:[e.jsxs("a",{href:"#",className:"btn btn-light btn-lg",children:["Find the right service",e.jsx("svg",{className:"arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M13 5l7 7-7 7"})})]}),e.jsx("a",{href:"#",className:"btn btn-ghost btn-lg",style:{color:"var(--paper)",borderColor:"rgba(250,247,242,.25)"},children:"Start with a workflow review"})]}),e.jsx("div",{className:"trust-line",children:"No commitment required · No sales pressure · Honest fit assessment · HIPAA · BAA available"})]})]})]})}export{l as default};
