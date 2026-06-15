// app/layouts/SolutionLayout.tsx

import { SolutionData } from '@/app/data/solutionTypes';
import { getHeroComponent } from '@/app/utils/getHeroComponent';

interface SolutionLayoutProps {
  solution: SolutionData;
  slug: string;
}

export default function SolutionLayout({ solution, slug }: SolutionLayoutProps) {
  const HeroComponent = getHeroComponent(slug);

  return (
    <>
      <HeroComponent solution={solution} />

      {/* PAIN — MONOLOGUE */}
      {solution.sections?.pain && (
        <section className="block" id="pain">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">{solution.sections.pain.title}</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.pain.description }} />
            </div>
            <div className="monologue fade-in">
              {solution.sections.pain.monologue.map((paragraph, index) => (
                <p key={index} className={paragraph.startsWith('"') ? "highlight" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PAIN LEDGER */}
      {solution.sections?.pain && (
        <section className="block block--warm" id="pain-details">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">Why denials keep repeating</div>
              <h2 className="display">
                Denials are symptoms. The root cause is always <em>somewhere upstream.</em>
              </h2>
            </div>
            <div className="pain-ledger fade-in">
              {solution.sections.pain.ledger.map((item) => (
                <div className="pain-item" key={item.num}>
                  <div className="pain-num">{item.num}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SOLUTION */}
      {solution.sections?.solution && (
        <section className="block block--ink" id="solution">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">Denial fixation — what we do</div>
              <h2 className="display display--light" dangerouslySetInnerHTML={{ __html: solution.sections.solution.title }} />
              <p>{solution.sections.solution.description}</p>
            </div>
            <div className="two-col fade-in">
              <div className="process-list">
                {solution.sections.solution.process.slice(0, 3).map((item) => (
                  <div className="process-item" key={item.num}>
                    <div className="process-num">{item.num}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="process-list">
                {solution.sections.solution.process.slice(3).map((item) => (
                  <div className="process-item" key={item.num}>
                    <div className="process-num">{item.num}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SERVICES */}
      {solution.sections?.services && (
        <section className="block" id="services">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">Denial fixation services</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.services.title }} />
            </div>
            <div className="services-grid fade-in">
              {solution.sections.services.items.map((item) => (
                <div className="service-item" key={item.num}>
                  <span className="service-num">{item.num}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AI + HUMAN */}
      {solution.sections?.aiHuman && (
        <section className="block block--warm">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">AI + human advantage</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.aiHuman.description }} />
            </div>
            <div className="ai-split fade-in">
              <div className="ai-col ai-col--machine">
                <div className="ai-col-label">AI-assisted denial workflows</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.machine.map((item, index) => (
                    <div className="ai-item" key={index}>
                      <div className="ai-item-dot"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ai-col ai-col--human">
                <div className="ai-col-label">Denial specialists handle</div>
                <div className="ai-items">
                  {solution.sections.aiHuman.human.map((item, index) => (
                    <div className="ai-item" key={index}>
                      <div className="ai-item-dot"></div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RESULTS */}
      {solution.sections?.results && (
        <section className="block" id="results">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">What changes</div>
              <h2 className="display" dangerouslySetInnerHTML={{ __html: solution.sections.results.title }} />
            </div>
            <div className="outcomes-grid fade-in">
              {solution.sections.results.outcomes.map((item, index) => (
                <div className="outcome-card" key={index}>
                  <div className="outcome-num">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPARE */}
      {solution.sections?.compare && (
        <section className="block block--ink-soft">
          <div className="container">
            <div className="block-head fade-in">
              <div className="eyebrow">Why denials cannot be ignored</div>
              <h2 className="display display--light" dangerouslySetInnerHTML={{ __html: solution.sections.compare.title }} />
              <p>{solution.sections.compare.description}</p>
            </div>
            <div className="compare-wrap fade-in">
              <div className="compare-header">
                <span></span>
                <span className="hbs-col">With HBS Denial Fixation</span>
                <span>Without Structured Management</span>
              </div>
              {solution.sections.compare.rows.map((row, index) => (
                <div className="compare-row" key={index}>
                  <span className="c-label">{row.label}</span>
                  <span className="c-hbs">{row.hbs}</span>
                  <span className="c-other">{row.other}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="final-cta" id="cta">
        <div className="final-cta-glow"></div>
        <div className="cta-inner">
          <div className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
            Start with a denial analysis
          </div>
          <h2 className="display display--light">
            If the same denial reasons keep showing up, that is a pattern. <em>And we can break it.</em>
          </h2>
          <p>
            We start with a review of your last 60 to 90 days of denials — showing you which reasons are repeating, which
            payers are the source, and what upstream fix would stop the pattern. No commitment required to see what we
            find.
          </p>
          <div className="actions">
            <a href="#" className="btn btn-light btn-lg">
              Review my denials
              <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="btn btn-ghost btn-lg" style={{ color: "var(--paper)", borderColor: "rgba(250,247,242,.25)" }}>
              Talk to our denial team
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="final-cta" style={{ background: "var(--ink)", paddingBottom: "60px" }}>
        <div className="cta-inner">
          <div className="trust-line">HIPAA · BAA on every engagement · No long-term contract required</div>
        </div>
      </section>
    </>
  );
}
