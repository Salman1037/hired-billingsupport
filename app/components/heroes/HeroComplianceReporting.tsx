// app/components/heroes/HeroComplianceReporting.tsx

import { SolutionData } from '@/app/data/solutionTypes';

interface HeroProps {
  solution: SolutionData;
}

export default function HeroComplianceReporting({ solution }: HeroProps) {
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
                  Improve my RCM visibility
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#services" className="btn btn-ghost btn-lg">
                  See what reporting covers
                </a>
              </div>
            </>
          )}
        </div>
        {solution.hero && (
          <div className="reveal reveal-4" style={{ animationDelay: "0.55s" }}>
            <div className="hero-card">
              <h4>— RCM Performance Dashboard · Monthly</h4>
              
              {/* Metric 1: Collection Rate */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Collection Rate</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>94.2% <span style={{ fontSize: "12px", color: "#10b981" }}>↑ 2.1%</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "94%", backgroundColor: "#10b981" }}></div>
                </div>
              </div>

              {/* Metric 2: Clean Claim Rate */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Clean Claim Rate</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>97.8%</span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "97%", backgroundColor: "#06b6d4" }}></div>
                </div>
              </div>

              {/* Metric 3: Denial Rate */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Denial Rate</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>3.4% <span style={{ fontSize: "12px", color: "var(--ink-mute)" }}>Target &lt;3%</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "34%", backgroundColor: "#f59e0b" }}></div>
                </div>
              </div>

              {/* Metric 4: Days in AR */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Days in AR</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>24 days <span style={{ fontSize: "12px", color: "#10b981" }}>↓ 4</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "48%", backgroundColor: "#8b5cf6" }}></div>
                </div>
              </div>

              {/* Metric 5: AR Over 90 Days */}
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>AR Over 90 Days</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>8.2% <span style={{ fontSize: "12px", color: "var(--ink-mute)" }}>Monitor</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "16%", backgroundColor: "#ec4899" }}></div>
                </div>
              </div>

              {/* Metric 6: Compliance Flags */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--ink-mute)", textTransform: "uppercase", letterSpacing: "0.5px" }}>Compliance Flags</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>0 <span style={{ fontSize: "12px", color: "#10b981" }}>this month</span></span>
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0,0,0,0.05)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: "0%", backgroundColor: "#10b981" }}></div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(16,185,129,0.1)", color: "#047857" }}>Monthly</span>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.05)", color: "var(--ink-mute)" }}>Report Cadence</span>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.05)", color: "var(--ink-mute)" }}>6 KPIs Tracked</span>
                <span style={{ fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "3px", backgroundColor: "rgba(0,0,0,0.05)", color: "var(--ink-mute)" }}>✓ Leadership Ready</span>
              </div>

              <div className="gap-callout">
                <div className="gc-lbl">— This month's priority</div>
                <div className="gc-val">Denial rate above target — root cause in progress.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
