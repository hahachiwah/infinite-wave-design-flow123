import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroIntroSection from '@/components/HeroIntroSection';
import SectionsOverview from '@/components/SectionsOverview';
import PartnersSection from '@/components/PartnersSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroIntroSection videoSrc="/lovable-uploads/infinite-water_header.mp4" />
      <SectionsOverview />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;