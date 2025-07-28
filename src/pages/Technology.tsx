import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import TechnologySection from '@/components/TechnologySection';

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Our Technology"
          subtitle="Advanced oxidation solutions"
          description="Revolutionary water treatment technologies that deliver superior performance, efficiency, and environmental sustainability across all applications."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;