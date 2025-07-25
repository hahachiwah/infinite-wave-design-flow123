import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;