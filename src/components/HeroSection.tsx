// This component is replaced by UnifiedHeroSection - keeping for reference only
// Can be removed if not needed

import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-water.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Water treatment technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Sustainable Water
            <span className="block gradient-hero bg-clip-text text-transparent">
              Treatment Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We develop the most efficient and sustainable water and wastewater treatment solutions through cutting-edge technology and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="group shadow-large">
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;