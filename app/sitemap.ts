import { MetadataRoute } from 'next';
import { getSolutionSlugs, getSolutionUrl } from './data/solutions';
import { getSolutionSlugs as getWhoWeServeSlugs, getWhoWeServeUrl } from './data/who-we-serve';

const baseUrl = 'https://www.hiredbillingsupport.com';

const staticRoutes = [
  { path: '/', changeFrequency: 'weekly' as const, priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/find-service', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/explore-partnership', changeFrequency: 'monthly' as const, priority: 0.9 },
  { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.6 },
  { path: '/article-28-facilities', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/case-study', changeFrequency: 'weekly' as const, priority: 0.8 },
  { path: '/CostROIcalculator', changeFrequency: 'monthly' as const, priority: 0.8 },
];

const solutionRoutes = getSolutionSlugs().map((slug) => ({
  url: getSolutionUrl(slug),
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}));

const audienceRoutes = getWhoWeServeSlugs().map((slug) => ({
  url: getWhoWeServeUrl(slug),
  changeFrequency: 'weekly' as const,
  priority: 0.9,
}));

const hireRoutes = ['medical', 'dental', 'enterprise', 'mso'].map((slug) => ({
  path: `/hire/${slug}`,
  changeFrequency: 'monthly' as const,
  priority: 0.8,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...solutionRoutes, ...audienceRoutes, ...hireRoutes].map((route) => ({
    url: route.url ?? `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
