import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UnifiedHeroSection from '@/components/UnifiedHeroSection';
import ExpertSlideshow from '@/components/ExpertSlideshow';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Expert } from '@/types/expert';
import { ExpertPageConfig } from '@/data/expertPageConfig';

interface ExpertPageTemplateProps {
  config: ExpertPageConfig;
  experts: Expert[];
}

const ExpertPageTemplate: React.FC<ExpertPageTemplateProps> = ({ config, experts }) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <UnifiedHeroSection 
          title={config.title}
          subtitle={config.subtitle}
          description={config.description}
          videoSrc={config.videoSrc}
        />
        
        {/* Back Link Section */}
        <section className="py-12 bg-gradient-to-br from-background to-muted/20 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <Link to={config.backLinkPath} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {config.backLinkText}
              </Link>
            </div>
          </div>
        </section>

        {/* Expert Slideshow */}
        <ExpertSlideshow
          experts={experts}
          title={config.slideshowConfig.title}
          showContactButton={config.slideshowConfig.showContactButton}
          showLearnMoreButton={config.slideshowConfig.showLearnMoreButton}
          showExpertiseSection={config.slideshowConfig.showExpertiseSection}
          containerHeight={config.slideshowConfig.containerHeight}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertPageTemplate;