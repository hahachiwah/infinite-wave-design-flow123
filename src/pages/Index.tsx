import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroIntroSection from '@/components/HeroIntroSection';
import SectionsOverview from '@/components/SectionsOverview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroIntroSection />
      <SectionsOverview />
      <Footer />
    </div>
  );
};

export default Index;