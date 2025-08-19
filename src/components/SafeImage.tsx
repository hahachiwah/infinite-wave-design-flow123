import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: boolean;
}

const SafeImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon = true
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!!src);

  useEffect(() => {
    if (!src) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setHasError(false);
    setIsLoading(true);

    // Test if image can load
    const img = new Image();
    
    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
    
    img.src = src;
  }, [src, alt]);

  // Loading state
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-muted animate-pulse ${className}`}>
        <div className="text-muted-foreground text-xs">🔄 Loading...</div>
      </div>
    );
  }

  // Error state
  if (hasError || !src) {
    if (!fallbackIcon) {
      return null;
    }
    
    return (
      <div className={`flex items-center justify-center bg-muted/50 ${className}`}>
        <div className="flex flex-col items-center justify-center text-muted-foreground p-2">
          <ImageOff className="h-6 w-6 mb-1" />
          <span className="text-xs">📷 Image unavailable</span>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default SafeImage;