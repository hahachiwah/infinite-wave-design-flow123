import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import SectionsOverview from '@/components/SectionsOverview';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <UnifiedHeroSection 
        title="Infinite Water"
        subtitle="Revolutionizing water treatment with proprietary technology"
        description="Our patented solutions remove the world's most challenging contaminants, delivering safe, clean water for drinking, industrial, and environmental applications."
        videoSrc="/lovable-uploads/infinite-water_header.mp4"
      />
      <SectionsOverview />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;