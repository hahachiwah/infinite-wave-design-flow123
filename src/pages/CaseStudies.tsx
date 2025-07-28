import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Case Studies"
          subtitle="Real-world solutions, proven results"
          description="Discover how our advanced water treatment technologies have transformed operations across diverse industries and applications worldwide."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;