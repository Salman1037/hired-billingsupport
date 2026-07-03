'use client';

import Link from 'next/link';
import { useEffect, useMemo } from 'react';
import { getAdjacentArticles, getArticleBySlug, getRelatedArticles } from '../blogData';

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = useMemo(() => getArticleBySlug(params.slug), [params.slug]);
  const relatedArticles = useMemo(() => getRelatedArticles(params.slug, 3), [params.slug]);
  const adjacentArticles = useMemo(() => getAdjacentArticles(params.slug), [params.slug]);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <section className="block">
        <div className="container">
          <div className="block-head">
            <div className="eyebrow">Blog</div>
            <h2 className="display">Article not found.</h2>
            <p>Return to the blog index to browse the latest posts.</p>
          </div>
          <Link href="/blog" className="btn btn-primary">Back to blog</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="blog-hero article-hero">
        <div className="blog-hero-bg" aria-hidden="true">
          <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1600" height="900" fill="#0A1628" />
            <path d="M-40 760C180 610 332 530 512 556C726 590 830 760 1020 760C1188 760 1328 642 1640 474V900H-40V760Z" fill="#0F213E" />
            <path d="M0 718C202 630 357 588 547 618C742 650 900 762 1116 752C1270 744 1422 666 1600 560V900H0V718Z" fill="#15354F" />
          </svg>
        </div>
        <div className="blog-hero-grain" aria-hidden="true" />
        <div className="container blog-hero-inner">
          <div className="blog-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>
          <div className="eyebrow eyebrow-light">{article.heroLabel} · Article</div>
          <h1 className="display display-light">{article.title}</h1>
          <p className="hero-subtitle">{article.excerpt}</p>
          <div className="hero-meta">
            <span className="meta-pill">By {article.author}</span>
            <span className="meta-pill">{article.publishDate}</span>
            <span className="meta-pill">{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="article-shell">
        <div className="container article-grid">
          <aside className="article-toc">
            <div className="article-toc-title">Contents</div>
            <ul className="article-toc-list">
              <li><Link href="#overview">Overview</Link></li>
              <li><Link href="#takeaways">Key takeaways</Link></li>
              <li><Link href="#faq">FAQ</Link></li>
              <li><Link href="#next-step">Next step</Link></li>
            </ul>
          </aside>

          <main className="article-content">
            <div className="article-image-placeholder" aria-label={`Placeholder image for ${article.title}`}>
              <span>Image placeholder</span>
              <strong>1400 × 900</strong>
            </div>

            <div className="article-section" id="overview">
              <p className="article-copy">{article.intro}</p>
              {article.paragraphs.map((paragraph) => (
                <p className="article-copy" key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="article-section" id="takeaways">
              <h2 className="article-heading">Key takeaways</h2>
              <ul className="article-list">
                {article.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>

            <div className="article-quote-block">
              <blockquote>“{article.ctaTitle}”</blockquote>
            </div>

            <div className="article-section" id="faq">
              <h2 className="article-heading">Common questions</h2>
              <div className="faq-list">
                {article.faq.map((item) => (
                  <div key={item.question} className="faq-card">
                    <strong>{item.question}</strong>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="article-section" id="next-step">
              <h2 className="article-heading">What this means for a practice</h2>
              <p className="article-copy">{article.ctaText}</p>
              <div className="article-callout">
                <strong>Next step:</strong> If this article resonates with your current workflow, a short conversation can help you identify where the greatest gains are available.
              </div>
            </div>

            <div className="article-nav">
              <Link href="/blog" className="nav-card">
                <span>← Back to blog</span>
                <strong>Browse the latest articles</strong>
              </Link>
              <Link href="/contact" className="nav-card nav-card-right">
                <span>Talk with us →</span>
                <strong>Explore how HBS can support your team</strong>
              </Link>
            </div>

            <div className="related-section">
              <h2 className="article-heading">Related reading</h2>
              <div className="related-grid">
                {relatedArticles.map((item) => (
                  <Link href={`/blog/${item.slug}`} key={item.slug} className="related-card">
                    <span>{item.category}</span>
                    <strong>{item.title}</strong>
                  </Link>
                ))}
              </div>
            </div>

            <div className="article-nav adjacent-nav">
              {adjacentArticles.previous ? (
                <Link href={`/blog/${adjacentArticles.previous.slug}`} className="nav-card">
                  <span>← Previous article</span>
                  <strong>{adjacentArticles.previous.title}</strong>
                </Link>
              ) : (
                <div className="nav-card nav-card-disabled">
                  <span>← Previous article</span>
                  <strong>No earlier article</strong>
                </div>
              )}
              {adjacentArticles.next ? (
                <Link href={`/blog/${adjacentArticles.next.slug}`} className="nav-card nav-card-right">
                  <span>Next article →</span>
                  <strong>{adjacentArticles.next.title}</strong>
                </Link>
              ) : (
                <div className="nav-card nav-card-right nav-card-disabled">
                  <span>Next article →</span>
                  <strong>No later article</strong>
                </div>
              )}
            </div>
          </main>
        </div>
      </section>

      <style jsx>{`
        .blog-hero { position: relative; overflow: hidden; background: var(--ink); color: var(--paper); padding: 100px 0 96px; }
        .blog-hero-bg, .blog-hero-grain { position: absolute; inset: 0; pointer-events: none; }
        .blog-hero-bg svg { width: 100%; height: 100%; display: block; }
        .blog-hero-grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode: multiply; opacity: 0.35; }
        .blog-hero-inner { position: relative; max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
        .blog-breadcrumb { display: flex; flex-wrap: wrap; align-items: center; gap: 10px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 24px; color: rgba(250, 247, 242, 0.55); }
        .blog-breadcrumb a { color: inherit; text-decoration: none; }
        .eyebrow-light { color: rgba(250, 247, 242, 0.55); }
        .display-light { color: var(--paper); font-size: clamp(42px, 5.8vw, 76px); max-width: 900px; margin-top: 20px; }
        .hero-subtitle { font-size: 18px; line-height: 1.7; color: rgba(250, 247, 242, 0.8); max-width: 760px; margin-top: 24px; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .meta-pill { display: inline-flex; padding: 8px 12px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.16); background: rgba(255,255,255,0.04); font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(250, 247, 242, 0.7); }
        .article-shell { padding: 80px 0 110px; background: var(--paper); }
        .article-grid { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 64px; align-items: start; }
        .article-toc { position: sticky; top: 96px; border: 1px solid var(--paper-line); border-radius: var(--radius-lg); padding: 24px; background: var(--white); box-shadow: 0 12px 30px rgba(10, 22, 40, 0.05); }
        .article-toc-title { font-family: var(--mono); font-size: 10px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--ink-mute); margin-bottom: 16px; }
        .article-toc-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
        .article-toc-list a { color: var(--ink-soft); text-decoration: none; font-size: 14px; line-height: 1.6; }
        .article-content { min-width: 0; }
        .article-image-placeholder { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px; min-height: 260px; margin-bottom: 36px; border: 1px dashed var(--paper-line); border-radius: var(--radius-lg); background: linear-gradient(135deg, rgba(0,200,150,0.08), rgba(255,255,255,0.7)); color: var(--ink-mute); font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; text-align: center; }
        .article-image-placeholder strong { font-family: var(--sans); font-size: 14px; letter-spacing: 0.02em; text-transform: none; color: var(--ink-soft); }
        .article-section { margin-bottom: 40px; }
        .article-heading { font-family: var(--serif); font-size: clamp(24px, 2.8vw, 32px); line-height: 1.15; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 18px; font-weight: 400; }
        .article-copy { font-size: 16px; line-height: 1.8; color: var(--ink-soft); margin-bottom: 16px; }
        .article-list { padding-left: 20px; color: var(--ink-soft); line-height: 1.8; }
        .article-list li { margin-bottom: 8px; }
        .article-quote-block { border-left: 2px solid var(--signal); padding-left: 18px; margin: 28px 0 40px; }
        .article-quote-block blockquote { font-family: var(--serif); font-size: 22px; line-height: 1.45; color: var(--ink-soft); }
        .faq-list { display: grid; gap: 14px; }
        .faq-card { border: 1px solid var(--paper-line); border-radius: var(--radius-lg); padding: 18px 20px; background: var(--white); }
        .faq-card strong { display: block; margin-bottom: 8px; color: var(--ink); }
        .faq-card p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); margin: 0; }
        .article-callout { border: 1px solid var(--paper-line); background: var(--paper-warm); border-radius: var(--radius-lg); padding: 20px 22px; color: var(--ink-soft); line-height: 1.75; }
        .article-nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 24px; }
        .nav-card { display: flex; flex-direction: column; gap: 8px; padding: 18px 20px; border: 1px solid var(--paper-line); border-radius: var(--radius-lg); background: var(--white); text-decoration: none; color: var(--ink); }
        .nav-card span { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute); }
        .nav-card strong { font-size: 15px; font-weight: 600; line-height: 1.5; }
        .nav-card-right { text-align: right; }
        .nav-card-disabled { opacity: 0.75; }
        .related-section { margin-top: 42px; }
        .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
        .related-card { display: flex; flex-direction: column; gap: 8px; padding: 18px 20px; border: 1px solid var(--paper-line); border-radius: var(--radius-lg); background: var(--white); text-decoration: none; color: var(--ink); }
        .related-card span { font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute); }
        .related-card strong { font-size: 15px; line-height: 1.5; }
        .adjacent-nav { margin-top: 32px; }
        @media (max-width: 960px) { .article-grid { grid-template-columns: 1fr; gap: 36px; } .article-toc { position: relative; top: 0; } .article-nav, .related-grid { grid-template-columns: 1fr; } }
        @media (max-width: 720px) { .blog-hero { padding: 92px 0 84px; } .hero-subtitle { font-size: 16px; } .nav-card-right { text-align: left; } }
      `}</style>
    </>
  );
}
