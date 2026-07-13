import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../app/components/Navigation';
import Footer from '../app/components/Footer';
import ScrollAnimations from '../app/components/ScrollAnimations';
import ScrollEffects from '../app/components/ScrollEffects';
import ScrollToTop from '../app/components/ScrollToTop';
import HBSChatbot from '../app/components/HBSChatbot';
const HomePage = lazy(() => import('../app/page'));
const AboutPage = lazy(() => import('../app/about/page'));
const ContactPage = lazy(() => import('../app/contact/page'));
const PrivacyPolicyPage = lazy(() => import('../app/privacy-policy/page'));
const Article28FacilitiesPage = lazy(() => import('../app/article-28-facilities/page'));
const CaseStudyPage = lazy(() => import('../app/case-study/page'));
const CaseStudyDetailPage = lazy(() => import('../app/case-study/[slug]/page'));
const CostROICalculatorPage = lazy(() => import('../app/CostROIcalculator/page'));
const ExplorePartnershipPage = lazy(() => import('../app/explore-partnership/page'));
const FindServicePage = lazy(() => import('../app/find-service/page'));
const HireMedicalPage = lazy(() => import('../app/(hire)/hire/medical/page'));
const HireDentalPage = lazy(() => import('../app/(hire)/hire/dental/page'));
const HireEnterprisePage = lazy(() => import('../app/(hire)/hire/enterprise/page'));
const HireMsoPage = lazy(() => import('../app/(hire)/hire/mso/page'));
const HireDynamicPage = lazy(() => import('../app/(hire)/hire/[slug]/page'));
const SolutionDetailPage = lazy(() => import('../app/(solutions)/solutions/[slug]/page'));
const WhoWeServeDetailPage = lazy(() => import('../app/(who-we-serve)/who-we-serve/[slug]/page'));

function NotFoundPage() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <Suspense fallback={<div style={{ padding: '120px 20px', textAlign: 'center' }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/article-28-facilities" element={<Article28FacilitiesPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
            <Route path="/case-study/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/CostROIcalculator" element={<CostROICalculatorPage />} />
            <Route path="/explore-partnership" element={<ExplorePartnershipPage />} />
            <Route path="/find-service" element={<FindServicePage />} />
            <Route path="/hire/medical" element={<HireMedicalPage />} />
            <Route path="/hire/dental" element={<HireDentalPage />} />
            <Route path="/hire/enterprise" element={<HireEnterprisePage />} />
            <Route path="/hire/mso" element={<HireMsoPage />} />
            <Route path="/hire/:slug" element={<HireDynamicPage />} />
            <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="/who-we-serve/:slug" element={<WhoWeServeDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <ScrollAnimations />
      <ScrollEffects />
      <Footer />
      <HBSChatbot />
    </>
  );
}
