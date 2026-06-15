import { getSolution, getSolutionSlugs } from '@/app/data/who-we-serve';
import WhoWeServeLayout from '@/app/layouts/WhoWeServeLayout';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: 'Page Not Found',
      description: 'This page does not exist.',
    };
  }

  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function WhoWeServePage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return (
      <div style={{ padding: '120px 20px', textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>This solution does not exist.</p>
      </div>
    );
  }

  return <WhoWeServeLayout solution={solution} slug={slug} />;
}
