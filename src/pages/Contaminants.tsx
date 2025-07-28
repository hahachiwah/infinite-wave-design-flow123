import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import ContaminantsSection from '@/components/ContaminantsSection';

const Contaminants = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Water Contaminants"
          subtitle="Advanced treatment for every pollutant"
          description="Understanding and treating the various contaminants that affect water quality is crucial for implementing effective solutions. Our advanced oxidation technologies target a comprehensive range of pollutants."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        <ContaminantsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contaminants;