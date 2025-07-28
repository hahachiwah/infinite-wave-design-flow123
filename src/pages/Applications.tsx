import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import ServicesSection from '@/components/ServicesSection';

const Applications = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title="Water Treatment Applications"
          subtitle="Comprehensive solutions for every water challenge"
          description="From municipal water systems to specialized industrial applications, our advanced technologies deliver reliable, efficient, and sustainable water treatment solutions."
          videoSrc="/lovable-uploads/infinite-water_header.mp4"
        />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Applications;