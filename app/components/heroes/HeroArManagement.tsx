// app/components/heroes/HeroArManagement.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroArManagement({ solution }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A1628" strokeWidth="0.5" opacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="hero-grain"></div>
      </div>
      <div className="hero-inner">
        <div>
          {solution.hero && (
            <>
              <div className="eyebrow reveal reveal-1">{solution.hero.eyebrow}</div>
              <h1 className="display reveal reveal-2" style={{ fontSize: "clamp(38px, 5vw, 64px)", marginTop: "20px" }} dangerouslySetInnerHTML={{ __html: solution.hero.title }} />
              <p className="sub reveal reveal-3" style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--ink-mute)", marginTop: "24px" }}>
                {solution.subtitle}
              </p>
              <p className="lede reveal reveal-3" style={{ fontSize: "18px", lineHeight: "1.6", color: "var(--ink-mute)", marginTop: "16px" }}>
                {solution.hero.description}
              </p>
              <div className="hero-actions reveal reveal-4" style={{ marginTop: "32px" }}>
                <a href="#cta" className="btn btn-primary btn-lg">
                  Review my AR situation
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#pain" className="btn btn-ghost btn-lg">
                  See what is sitting in AR
                </a>
              </div>
            </>
          )}
        </div>
        {solution.hero && (
          <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
            <div className="hero-card">
              <h4>— AR Aging Snapshot · Current</h4>
              
              {/* 0-30 days */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink-mute)" }}>0–30 days</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>$68,400</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "80%", backgroundColor: "#10b981" }}></div>
                </div>
              </div>

              {/* 31-60 days */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink-mute)" }}>31–60 days</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>$34,120</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "55%", backgroundColor: "#f59e0b" }}></div>
                </div>
              </div>

              {/* 61-90 days */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink-mute)" }}>61–90 days</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>$21,880</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "35%", backgroundColor: "#ff9500" }}></div>
                </div>
              </div>

              {/* 91-120 days */}
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink-mute)" }}>91–120 days</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>$13,340</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "20%", backgroundColor: "#ef4444" }}></div>
                </div>
              </div>

              {/* 120+ days */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", color: "var(--ink-mute)" }}>120+ days</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>$8,700</span>
                </div>
                <div style={{ height: "6px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "12%", backgroundColor: "#dc2626" }}></div>
                </div>
              </div>

              <div className="gap-callout" style={{ marginTop: "20px" }}>
                <div className="gc-lbl">— Recoverable (60+ days)</div>
                <div className="gc-val">$43,920 · actively being worked by HBS team</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
