import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/assets/hero-water.jpg';

interface UnifiedHeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
  videoSrc?: string;
  showScrollIndicator?: boolean;
}

const UnifiedHeroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  videoSrc,
  showScrollIndicator = true
}: UnifiedHeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSrc) {
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      const handleError = () => {
        setVideoLoaded(false);
      };
      const handleCanPlay = () => {
        setVideoLoaded(true);
      };

      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('error', handleError);
      
      if (video.readyState >= 2) {
        setVideoLoaded(true);
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, [videoSrc]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Background Video/Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              style={{ display: videoLoaded ? 'block' : 'none' }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {!videoLoaded && (
              <img 
                src={heroImage} 
                alt="Water treatment technology" 
                className="w-full h-full object-cover"
              />
            )}
          </>
        ) : (
          <img 
            src={heroImage} 
            alt="Water treatment technology" 
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in animate-duration-500 animate-delay-1000 ">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in animate-duration-500 animate-delay-2000">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto animate-fade-in animate-duration-500 animate-delay-2500">
              {description}
            </p>
          )}
          
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryButtonText && (
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 shadow-elegant text-lg px-8 py-4"
                  onClick={primaryButtonAction}
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
              {secondaryButtonText && (
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                  onClick={secondaryButtonAction}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UnifiedHeroSection;