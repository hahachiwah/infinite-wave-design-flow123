import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  fallbackIcon?: boolean;
  onError?: (error: string) => void;
}

// Safe Image constants - Uncle Bob: No Magic Numbers
const SAFE_IMAGE_CONFIG = {
  LOAD_TIMEOUT_MS: 10000,
  CONSOLE_LOG_PREFIX: '🖼️ [SafeImage]',
} as const;

const SafeImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon = true,
  onError 
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!!src);

  useEffect(() => {
    if (!src) {
      console.warn(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} ⚠️ No src provided for image: ${alt}`);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    console.log(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} 📥 Loading image: ${src}`);
    setHasError(false);
    setIsLoading(true);

    // Create a timeout for image loading
    const timeout = setTimeout(() => {
      console.error(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} ⏰ Image load timeout: ${src}`);
      setHasError(true);
      setIsLoading(false);
      onError?.(`Image load timeout: ${src}`);
    }, SAFE_IMAGE_CONFIG.LOAD_TIMEOUT_MS);

    // Test if image can load
    const img = new Image();
    
    img.onload = () => {
      console.log(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} ✅ Image loaded successfully: ${src}`);
      clearTimeout(timeout);
      setIsLoading(false);
      setHasError(false);
    };
    
    img.onerror = () => {
      console.error(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} ❌ Image failed to load: ${src}`);
      clearTimeout(timeout);
      setIsLoading(false);
      setHasError(true);
      onError?.(`Failed to load image: ${src}`);
    };
    
    img.src = src;

    return () => {
      clearTimeout(timeout);
    };
  }, [src, alt, onError]);

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
      onError={() => {
        console.error(`${SAFE_IMAGE_CONFIG.CONSOLE_LOG_PREFIX} ❌ Image error in render: ${src}`);
        setHasError(true);
        onError?.(`Render error for image: ${src}`);
      }}
    />
  );
};

export default SafeImage;