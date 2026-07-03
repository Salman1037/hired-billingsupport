'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  getAllArticles,
  getCategories,
  getFeaturedArticle,
  getLatestArticles,
  getPopularArticles,
  getTags,
} from './blogData';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allArticles = useMemo(() => getAllArticles(), []);
  const featuredArticle = useMemo(() => getFeaturedArticle(), []);
  const latestArticles = useMemo(() => getLatestArticles(4), []);
  const popularArticles = useMemo(() => getPopularArticles(4), []);
  const categories = useMemo(() => ['All', ...getCategories()], []);
  const tags = useMemo(() => ['All', ...getTags()], []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const matchesTag = selectedTag === 'All' || article.tags.includes(selectedTag);
      const searchText = `${article.title} ${article.excerpt} ${article.category} ${article.tags.join(' ')}`.toLowerCase();
      const matchesQuery = query.trim() === '' || searchText.includes(query.toLowerCase());
      return matchesCategory && matchesTag && matchesQuery;
    });
  }, [allArticles, query, selectedCategory, selectedTag]);

  const categoryCounts = useMemo(() => {
    return allArticles.reduce<Record<string, number>>((acc, article) => {
      acc[article.category] = (acc[article.category] ?? 0) + 1;
      return acc;
    }, {});
  }, [allArticles]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-bg" aria-hidden="true">
          <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1600" height="900" fill="#0A1628" />
            <path d="M-40 760C180 610 332 530 512 556C726 590 830 760 1020 760C1188 760 1328 642 1640 474V900H-40V760Z" fill="#0F213E" />
            <path d="M0 718C202 630 357 588 547 618C742 650 900 762 1116 752C1270 744 1422 666 1600 560V900H0V718Z" fill="#15354F" />
          </svg>
        </div>
        <div className="blog-hero-grain" aria-hidden="true" />
        <div className="container blog-hero-inner">
          <div className="eyebrow eyebrow-light">Healthcare Insights · Blog</div>
          <h1 className="display display-light">Expert content for healthcare teams building more resilient revenue operations.</h1>
          <p className="hero-subtitle">
            Explore practical articles on billing, credentialing, compliance, patient access, and operational strategy written for modern healthcare organizations.
          </p>
          <div className="hero-actions">
            <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary">
              Read featured article
              <span className="arrow">→</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Talk to a specialist
            </Link>
          </div>
        </div>
      </section>

      <section className="blog-shell">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image-placeholder" aria-label={`Featured placeholder for ${featuredArticle.title}`}>
              <span>Hero image placeholder</span>
              <strong>1400 × 900</strong>
            </div>
            <div className="featured-content">
              <div className="meta-row">
                <span className="badge">Featured</span>
                <span>{featuredArticle.category}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p>{featuredArticle.excerpt}</p>
              <div className="author-row">
                <span>{featuredArticle.author}</span>
                <span>{featuredArticle.publishDate}</span>
              </div>
              <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary">Read article</Link>
            </div>
          </div>

          <div className="toolbar">
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search articles"
              className="search-input"
              aria-label="Search articles"
            />
            <div className="filter-row">
              <select value={selectedCategory} onChange={(event) => { setSelectedCategory(event.target.value); setVisibleCount(6); }} className="filter-select">
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
              <select value={selectedTag} onChange={(event) => { setSelectedTag(event.target.value); setVisibleCount(6); }} className="filter-select">
                {tags.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
              </select>
            </div>
          </div>

          <div className="section-head">
            <div className="eyebrow">Latest articles</div>
            <h3 className="display">Recent posts from the operations desk.</h3>
          </div>
          <div className="posts-grid">
            {visibleArticles.map((article) => (
              <article key={article.slug} className="post-card">
                <div className="post-image-placeholder" aria-label={`Placeholder image for ${article.title}`}>
                  <span>Image placeholder</span>
                  <strong>1200 × 720</strong>
                </div>
                <div className="post-meta">
                  <span className="badge">{article.category}</span>
                  <span>{article.publishDate}</span>
                  <span>{article.readTime}</span>
                </div>
                <h4>{article.title}</h4>
                <p>{article.excerpt}</p>
                <div className="card-footer">
                  <span>{article.author}</span>
                  <Link href={`/blog/${article.slug}`} className="btn btn-text">Read article</Link>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="empty-state">
              <h4>No articles match this search.</h4>
              <p>Try a broader keyword or reset the filters.</p>
            </div>
          )}

          {hasMore && (
            <div className="cta-row">
              <button type="button" className="btn btn-primary" onClick={() => setVisibleCount((value) => value + 6)}>Load more articles</button>
            </div>
          )}

        </div>
      </section>

      <section className="block warm">
        <div className="container">
          <div className="block-head">
            <div className="eyebrow">Stay current</div>
            <h2 className="display">Need a partner that can turn workflow clarity into daily revenue performance?</h2>
            <p>We help healthcare teams bring structure, accountability, and consistency to the parts of the revenue cycle that usually create the most stress.</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">Book a conversation</Link>
            <Link href="/about" className="btn btn-ghost">Learn more about HBS</Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-hero { position: relative; overflow: hidden; background: var(--ink); color: var(--paper); padding: 100px 0 96px; }
        .blog-hero-bg, .blog-hero-grain { position: absolute; inset: 0; pointer-events: none; }
        .blog-hero-bg svg { width: 100%; height: 100%; display: block; }
        .blog-hero-grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode: multiply; opacity: 0.35; }
        .blog-hero-inner { position: relative; max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
        .eyebrow-light { color: rgba(250, 247, 242, 0.55); }
        .display-light { color: var(--paper); font-size: clamp(42px, 5.8vw, 76px); max-width: 900px; margin-top: 20px; }
        .hero-subtitle { font-size: 18px; line-height: 1.7; color: rgba(250, 247, 242, 0.8); max-width: 760px; margin-top: 24px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .blog-shell { padding: 96px 0 80px; background: var(--paper); }
        .featured-card { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: center; padding: 28px; border: 1px solid var(--paper-line); border-radius: var(--radius-lg); background: var(--white); box-shadow: 0 12px 36px rgba(10,22,40,0.05); margin-bottom: 32px; }
        .featured-image-placeholder, .post-image-placeholder { display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 6px; min-height: 220px; border: 1px dashed var(--paper-line); border-radius: var(--radius-lg); background: linear-gradient(135deg, rgba(0,200,150,0.08), rgba(255,255,255,0.6)); color: var(--ink-mute); font-family: var(--mono); font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; text-align: center; }
        .featured-image-placeholder strong, .post-image-placeholder strong { font-family: var(--sans); font-size: 13px; letter-spacing: 0.02em; text-transform: none; color: var(--ink-soft); }
        .featured-content { display: flex; flex-direction: column; gap: 16px; }
        .meta-row, .post-meta, .author-row { display: flex; flex-wrap: wrap; gap: 8px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-mute); }
        .badge { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 100px; background: rgba(0,200,150,0.12); color: var(--signal-deep); }
        .featured-content h2 { font-family: var(--serif); font-size: clamp(24px, 3vw, 34px); line-height: 1.15; color: var(--ink); font-weight: 400; }
        .featured-content p, .post-card p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); }
        .toolbar { display: flex; gap: 12px; flex-wrap: wrap; justify-content: space-between; align-items: center; margin: 12px 0 36px; }
        .search-input, .filter-select { border: 1px solid var(--paper-line); border-radius: var(--radius); padding: 12px 14px; background: var(--white); color: var(--ink); font: inherit; min-width: 220px; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 10px; }
        .section-head { margin: 24px 0 16px; }
        .section-head-space { margin-top: 48px; }
        .section-head-tight { margin: 0 0 18px; }
        .posts-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .post-card { display: flex; flex-direction: column; gap: 16px; padding: 24px; border: 1px solid var(--paper-line); border-radius: var(--radius-lg); background: var(--white); box-shadow: 0 10px 30px rgba(10,22,40,0.04); transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease); }
        .post-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(10,22,40,0.08); }
        .post-card h4 { font-family: var(--serif); font-size: 20px; line-height: 1.2; color: var(--ink); font-weight: 400; }
        .card-footer { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: auto; }
        .empty-state { border: 1px dashed var(--paper-line); border-radius: var(--radius-lg); padding: 24px; text-align: center; margin-top: 24px; }
        .cta-row { display: flex; justify-content: center; margin-top: 28px; }
        @media (max-width: 960px) { .featured-card { grid-template-columns: 1fr; } .posts-grid { grid-template-columns: 1fr; } }
        @media (max-width: 720px) { .blog-hero { padding: 92px 0 84px; } .hero-subtitle { font-size: 16px; } .toolbar { flex-direction: column; align-items: stretch; } .search-input, .filter-select { min-width: 0; width: 100%; } .card-footer { flex-direction: column; align-items: flex-start; } }
      `}</style>
    </>
  );
}
