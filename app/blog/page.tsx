<<<<<<< HEAD
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
=======
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  getAllArticles,
  getCategories,
  getFeaturedArticle,
  getLatestArticles,
  getPopularArticles,
} from '@/lib/blog';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

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
  const categories = useMemo(() => ['All', ...getCategories()].slice(0, 6), []);

  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const searchText = `${article.title} ${article.excerpt} ${article.category} ${article.tags.join(' ')}`.toLowerCase();
      const matchesQuery = query.trim() === '' || searchText.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [allArticles, query, selectedCategory]);

  const categoryCounts = useMemo(() => {
    return allArticles.reduce<Record<string, number>>((acc, article) => {
      acc[article.category] = (acc[article.category] ?? 0) + 1;
      return acc;
    }, {});
  }, [allArticles]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / pageSize));
  const currentPageIndex = Math.min(Math.max(currentPage, 1), totalPages);
  const visibleArticles = filteredArticles.slice((currentPageIndex - 1) * pageSize, currentPageIndex * pageSize);
  const hasMore = currentPageIndex < totalPages;

  return (
    <div className="blog-page">
     

      <section className="blog-shell">
        <div className="container">
          <div className="featured-card">
            <div className="featured-image-wrapper">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="featured-image"
                sizes="(max-width: 960px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="featured-content">
              <div className="meta-row">
                <span className="badge">Featured</span>
                <span>{featuredArticle.category}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <h2>{featuredArticle.title}</h2>
              <p className="card-description">{featuredArticle.excerpt}</p>
              <div className="author-row">
                <span>{featuredArticle.author}</span>
                <span>{featuredArticle.publishDate}</span>
              </div>
              <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary">Read article</Link>
            </div>
          </div>

          <div className="toolbar">
            <div className="toolbar-top">
              <div className="search-field">
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search articles"
                  className="search-input"
                  aria-label="Search articles"
                />
              </div>
            </div>
            <div className="filter-groups">
              <div className="filter-group">
                <div className="filter-label">Categories</div>
                <div className="filter-pills">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`filter-pill ${selectedCategory === category ? 'is-active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      aria-pressed={selectedCategory === category}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section-head" >
            <div className="section-head__copy">
              <div className="eyebrow">Latest articles</div>
              <h3 className="display">Recent posts from the operations desk.</h3>
            </div>
            <p className="section-head__text">Curated insights for leaders navigating growth, compliance, and revenue performance.</p>
          </div>
          <div className="posts-grid">
            {visibleArticles.map((article) => (
              <article key={article.slug} className="post-card">
                <Link href={`/blog/${article.slug}`} className="post-image-link" aria-label={`Read ${article.title}`}>
                  <div className="post-image-wrapper">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="post-image"
                      sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw"
                    />
                  </div>
                </Link>
                <div className="post-body">
                  <div className="post-meta">
                    <span className="badge">{article.category}</span>
                    <span>{article.publishDate}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h4>
                    <Link href={`/blog/${article.slug}`} className="post-title-link">{article.title}</Link>
                  </h4>
                  <p className="card-description">{article.excerpt}</p>
                  <div className="card-footer">
                    <span className="author-name">{article.author}</span>
                    <Link href={`/blog/${article.slug}`} className="btn btn-text">Read article</Link>
                  </div>
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

          {totalPages > 1 && (
            <div className="cta-row">
              <button
                type="button"
                className="pagination-arrow"
                onClick={() => setCurrentPage((value) => Math.max(1, value - 1))}
                disabled={currentPageIndex <= 1}
                aria-label="Previous page"
              >
                ←
              </button>
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = pageNumber === currentPageIndex;
                return (
                  <button
                    key={pageNumber}
                    type="button"
                    className={`pagination-number ${isActive ? 'is-active' : ''}`}
                    onClick={() => setCurrentPage(pageNumber)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {pageNumber}
                  </button>
                );
              })}
              <button
                type="button"
                className="pagination-arrow"
                onClick={() => setCurrentPage((value) => Math.min(totalPages, value + 1))}
                disabled={currentPageIndex >= totalPages}
                aria-label="Next page"
              >
                →
              </button>
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
        .blog-page {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #0A1628 0%, #1B2942 50%, #0F1F2F 100%);
        }
        .blog-hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #081624 0%, #10263d 100%);
          color: var(--paper);
          padding: 112px 0 104px;
        }
        .blog-hero-bg, .blog-hero-grain { position: absolute; inset: 0; pointer-events: none; }
        .blog-hero-bg svg { width: 100%; height: 100%; display: block; }
        .blog-hero-grain { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); mix-blend-mode: multiply; opacity: 0.35; }
        .blog-hero-inner {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(270px, 0.45fr);
          gap: 36px;
          align-items: end;
          max-width: var(--max);
          margin: 0 auto;
          padding: 0 var(--gutter);
        }
        .hero-copy { max-width: 860px; }
        .eyebrow-light { color: rgba(250, 247, 242, 0.6); }
        .display-light { color: var(--paper); font-size: clamp(42px, 5.6vw, 74px); max-width: 920px; margin-top: 18px; line-height: 0.95; }
        .hero-subtitle { font-size: 18px; line-height: 1.75; color: rgba(250, 247, 242, 0.82); max-width: 760px; margin-top: 24px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .hero-highlights { display: grid; gap: 14px; }
        .hero-highlight-card {
          padding: 18px 20px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 18px;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(8px);
        }
        .hero-highlight-card strong { display: block; font-size: 24px; color: var(--paper); margin-bottom: 4px; }
        .hero-highlight-card span { font-size: 13px; color: rgba(250, 247, 242, 0.74); letter-spacing: 0.04em; text-transform: uppercase; }
        .blog-shell { padding: 96px 0 86px; background: transparent; color: #FAF7F2; }
        .featured-card {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 28px;
          align-items: center;
          padding: 28px;
          border: 1px solid rgba(0, 200, 150, 0.2);
          border-radius: 24px;
          background: rgba(27, 41, 66, 0.5);
          box-shadow: 0 16px 48px rgba(0,0,0,0.3);
          margin-bottom: 32px;
        }
        .featured-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0, 200, 150, 0.15), rgba(27, 41, 66, 0.6));
          box-shadow: inset 0 0 0 1px rgba(0, 200, 150, 0.15);
        }
        .featured-image { object-fit: cover; object-position: center; }
        .featured-content { display: flex; flex-direction: column; gap: 16px; }
        .meta-row, .post-meta, .author-row { display: flex; flex-wrap: wrap; gap: 8px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: #475569; }
        .badge { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; background: rgba(0, 200, 150, 0.2); color: #00C896; border: 1px solid #00C896; }
        .featured-content h2 { font-family: var(--serif); font-size: clamp(24px, 2.6vw, 34px); line-height: 1.15; color: #FAF7F2; font-weight: 400; margin: 0; }
        .featured-content p, .post-card p { font-size: 15px; line-height: 1.7; color: rgba(250, 247, 242, 0.85); margin: 0; }
        .card-description {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 4.8em;
        }
        .featured-content .btn.btn-primary,
        .card-footer .btn.btn-text {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 11px 18px;
          border: 1px solid #00C896;
          border-radius: 999px;
          background: #00C896;
          color: #0A1628;
          font-weight: 600;
          letter-spacing: 0.02em;
          overflow: hidden;
          isolation: isolate;
          transition: transform 0.25s var(--ease), box-shadow 0.25s var(--ease), color 0.25s var(--ease);
        }
        .featured-content .btn.btn-primary::before,
        .card-footer .btn.btn-text::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255,255,255,0.14), rgba(0, 200, 150, 0.2));
          transform: translateX(-100%);
          transition: transform 0.35s var(--ease);
          z-index: -1;
        }
        .featured-content .btn.btn-primary:hover,
        .card-footer .btn.btn-text:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(10, 22, 40, 0.14);
          color: var(--paper);
        }
        .featured-content .btn.btn-primary:hover::before,
        .card-footer .btn.btn-text:hover::before {
          transform: translateX(0);
        }
        .toolbar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px 22px;
          border: 1px solid rgba(0, 200, 150, 0.15);
          border-radius: 22px;
          background: rgba(27, 41, 66, 0.4);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          margin: 12px 0 36px;
        }
        .toolbar-top { display: flex; justify-content: flex-start; }
        .search-field { width: min(100%, 360px); }
        .search-input {
          width: 100%;
          border: 1px solid rgba(0, 200, 150, 0.15);
          border-radius: 999px;
          padding: 13px 16px;
          background: rgba(10, 22, 40, 0.5);
          color: #FAF7F2;
          font: inherit;
          min-height: 46px;
          box-sizing: border-box;
        }
        .filter-groups { display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .filter-group { display: flex; flex-direction: column; gap: 10px; }
        .filter-label { font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #475569; }
        .filter-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .filter-pill {
          border: 1px solid rgba(0, 200, 150, 0.15);
          border-radius: 999px;
          padding: 9px 14px;
          background: rgba(27, 41, 66, 0.4);
          color: rgba(250, 247, 242, 0.8);
          font: inherit;
          cursor: pointer;
          transition: all 0.2s var(--ease);
        }
        .filter-pill:hover { border-color: #00C896; color: #FAF7F2; background: rgba(27, 41, 66, 0.6); }
        .filter-pill.is-active {
          border-color: #00C896;
          background: #00C896;
          color: #0A1628;
          box-shadow: 0 8px 22px rgba(0, 200, 150, 0.25);
        }
        .section-head {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin: 24px 0 20px;
        }
        .section-head__copy { max-width: 760px; color: #FAF7F2; }
        .section-head__text { max-width: 360px; margin: 0; font-size: 15px; line-height: 1.7; color: rgba(250, 247, 242, 0.75); }
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        .post-card {
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
          min-height: 100%;
          padding: 20px;
          border: 1px solid rgba(0, 200, 150, 0.15);
          border-radius: 22px;
          background: rgba(27, 41, 66, 0.4);
          box-shadow: 0 12px 34px rgba(0,0,0,0.2);
          transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
        }
        .post-card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(10,22,40,0.08); }
        .post-image-link { display: block; }
        .post-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0, 200, 150, 0.15), rgba(27, 41, 66, 0.6));
        }
        .post-image { object-fit: cover; object-position: center; }
        .post-body {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          justify-content: flex-start;
        }
        .post-card h4 {
          font-family: var(--serif);
          font-size: 20px;
          line-height: 1.24;
          color: #FAF7F2;
          font-weight: 400;
          margin: 0;
          min-height: 50px;
        }
        .post-title-link { color: inherit; text-decoration: none; }
        .post-title-link:hover { color: #00C896; }
        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          padding-top: 6px;
          border-top: 1px solid rgba(0, 200, 150, 0.1);
        }
        .author-name { color: rgba(250, 247, 242, 0.75); font-size: 14px; }
        .empty-state { border: 1px dashed rgba(0, 200, 150, 0.15); border-radius: var(--radius-lg); padding: 24px; text-align: center; margin-top: 24px; background: rgba(10, 22, 40, 0.3); color: #FAF7F2; }
        .cta-row { display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 28px; }
        .pagination-arrow,
        .pagination-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 42px;
          height: 42px;
          border: 1px solid rgba(0, 200, 150, 0.15);
          border-radius: 999px;
          background: rgba(27, 41, 66, 0.4);
          color: #FAF7F2;
          font: inherit;
          cursor: pointer;
          transition: all 0.2s var(--ease);
        }
        .pagination-arrow:disabled { opacity: 0.45; cursor: not-allowed; }
        .pagination-arrow:hover:not(:disabled),
        .pagination-number:hover { border-color: #00C896; transform: translateY(-1px); }
        .pagination-number.is-active {
          background: #00C896;
          border-color: #00C896;
          color: #0A1628;
          box-shadow: 0 8px 20px rgba(0, 200, 150, 0.25);
        }
        @media (max-width: 960px) {
          .blog-hero-inner { grid-template-columns: 1fr; gap: 28px; }
          .hero-highlights { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .featured-card { grid-template-columns: 1fr; }
          .posts-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 720px) {
          .blog-hero { padding: 92px 0 84px; }
          .hero-subtitle { font-size: 16px; }
          .hero-highlights { grid-template-columns: 1fr; }
          .toolbar { padding: 18px; }
          .toolbar-top { justify-content: stretch; }
          .search-field { width: 100%; }
          .section-head { flex-direction: column; align-items: start; }
          .section-head__text { max-width: none; }
          .posts-grid { grid-template-columns: 1fr; }
          .card-footer { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
>>>>>>> ceab0e2 (all have done)
