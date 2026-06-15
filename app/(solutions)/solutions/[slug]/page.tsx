// app/(solutions)/solutions/[slug]/page.tsx

import { getSolution, getSolutionSlugs } from '@/app/data/solutions';
import SolutionLayout from '@/app/layouts/SolutionLayout';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;

  // Get solution from data
  const solution = getSolution(slug);

  // If solution not found, show 404
  if (!solution) {
    notFound();
  }

  return <SolutionLayout solution={solution} slug={slug} />;
}

export async function generateStaticParams() {
  const slugs = getSolutionSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}