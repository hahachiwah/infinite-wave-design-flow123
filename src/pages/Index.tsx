import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import SectionsOverview from '@/components/SectionsOverview';
import PartnersSection from '@/components/PartnersSection';
import ErrorBoundary from '@/components/ErrorBoundary';

// Index page constants - Uncle Bob: No Magic Numbers
const INDEX_CONFIG = {
  CONSOLE_LOG_PREFIX: '🏠 [Index]',
  VIDEO_PATH: '/lovable-uploads/infinite-water_header.mp4',
} as const;

const Index = () => {
  console.log(`${INDEX_CONFIG.CONSOLE_LOG_PREFIX} 🎯 Rendering homepage`);
  
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <ErrorBoundary fallback={<div className="h-16 bg-background border-b" />}>
          <Navigation />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="min-h-screen bg-gradient-hero flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">🌊 Infinite Water</h1>
            <p className="text-xl">Revolutionary water treatment technology</p>
          </div>
        </div>}>
          <UnifiedHeroSection 
            title="Infinite Water"
            subtitle="Revolutionizing water treatment with proprietary technology"
            description="Our patented solutions remove the world's most challenging contaminants, delivering safe, clean water for drinking, industrial, and environmental applications."
            videoSrc={INDEX_CONFIG.VIDEO_PATH}
          />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <SectionsOverview />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <PartnersSection />
        </ErrorBoundary>
        
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default Index;