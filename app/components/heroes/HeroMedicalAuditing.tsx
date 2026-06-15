// app/components/heroes/HeroMedicalAuditing.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroMedicalAuditing({ solution }: HeroProps) {
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
                  Request a billing audit
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#services" className="btn btn-ghost btn-lg">
                  See what audits uncover
                </a>
              </div>
            </>
          )}
        </div>
        {solution.hero && (
          <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
            <div className="hero-card">
              <h4>— Audit Findings Summary · Last Review</h4>
              
              {/* Metric 1: Claims Audited */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Claims Audited</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>248 claims</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "100%", backgroundColor: "#06b6d4" }}></div>
                </div>
              </div>

              {/* Metric 2: Coding Errors Found */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Coding Errors Found</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>31 | <span style={{ fontSize: "12px", color: "var(--ink-mute)" }}>12.5%</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "12%", backgroundColor: "#f59e0b" }}></div>
                </div>
              </div>

              {/* Metric 3: Documentation Gaps */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Documentation Gaps</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>18 claims</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "7%", backgroundColor: "#ec4899" }}></div>
                </div>
              </div>

              {/* Metric 4: Underpayments Identified */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Underpayments Identified</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>$9,840</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "44%", backgroundColor: "#8b5cf6" }}></div>
                </div>
              </div>

              {/* Metric 5: Revenue Leakage Estimate */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Revenue Leakage Estimate</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>$22,600</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "100%", backgroundColor: "#10b981" }}></div>
                </div>
              </div>

              {/* Metric 6: Compliance Flags */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Compliance Flags</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>4 patterns</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "6%", backgroundColor: "#f59e0b" }}></div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(16,185,129,0.1)", color: "#047857" }}>$22K Found</span>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.05)", color: "var(--ink-mute)" }}>3 Root Causes</span>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.05)", color: "var(--ink-mute)" }}>100% Documented</span>
              </div>

              <div className="gap-callout">
                <div className="gc-lbl">— Action taken</div>
                <div className="gc-val">All findings corrected. Two workflow changes recommended.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
