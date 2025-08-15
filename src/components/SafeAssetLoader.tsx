import React, { useState, useEffect, useRef } from 'react';
import { AlertCircle, Image as ImageIcon } from 'lucide-react';
import { getSafeAssetPath, getAssetLoadingStrategy } from '@/utils/iframeDetection';

interface SafeAssetLoaderProps {
  src: string;
  alt?: string;
  className?: string;
  type?: 'image' | 'video';
  fallbackComponent?: React.ReactNode;
  onLoadSuccess?: () => void;
  onLoadError?: (error: string) => void;
}

// Asset loader constants - Uncle Bob: No Magic Numbers
const ASSET_LOADER_CONFIG = {
  CONSOLE_LOG_PREFIX: '🎯 [SafeAssetLoader]',
  DEFAULT_RETRY_DELAY_MS: 1000,
  FALLBACK_TIMEOUT_MS: 5000,
} as const;

const SafeAssetLoader: React.FC<SafeAssetLoaderProps> = ({
  src,
  alt = '',
  className = '',
  type = 'image',
  fallbackComponent,
  onLoadSuccess,
  onLoadError,
}) => {
  const [loadState, setLoadState] = useState<'loading' | 'success' | 'error'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const elementRef = useRef<HTMLImageElement | HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const strategy = getAssetLoadingStrategy();
  const safeSrc = getSafeAssetPath(src);

  useEffect(() => {
    if (!safeSrc) {
      console.error(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} ❌ No valid source provided`);
      setLoadState('error');
      onLoadError?.('No valid source provided');
      return;
    }

    console.log(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} 🚀 Loading ${type}: ${safeSrc} (attempt ${retryCount + 1})`);
    
    const element = elementRef.current;
    if (!element) return;

    // Set timeout for loading
    timeoutRef.current = setTimeout(() => {
      console.warn(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} ⏰ Timeout loading ${type}: ${safeSrc}`);
      setLoadState('error');
      onLoadError?.(`Timeout loading ${type}`);
    }, strategy.timeout);

    const handleLoad = () => {
      console.log(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} ✅ Successfully loaded ${type}: ${safeSrc}`);
      clearTimeout(timeoutRef.current);
      setLoadState('success');
      onLoadSuccess?.();
    };

    const handleError = (error: Event) => {
      console.error(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} ❌ Failed to load ${type}: ${safeSrc}`, error);
      clearTimeout(timeoutRef.current);
      
      if (strategy.enableRetry && retryCount < strategy.maxRetries) {
        console.log(`${ASSET_LOADER_CONFIG.CONSOLE_LOG_PREFIX} 🔄 Retrying ${type} load in ${ASSET_LOADER_CONFIG.DEFAULT_RETRY_DELAY_MS}ms`);
        setTimeout(() => {
          setRetryCount(prev => prev + 1);
          setLoadState('loading');
        }, ASSET_LOADER_CONFIG.DEFAULT_RETRY_DELAY_MS);
      } else {
        setLoadState('error');
        onLoadError?.(`Failed to load ${type} after ${retryCount + 1} attempts`);
      }
    };

    element.addEventListener('load', handleLoad);
    element.addEventListener('error', handleError);
    
    if (type === 'video') {
      element.addEventListener('loadeddata', handleLoad);
    }

    // Set the source to trigger loading
    element.src = safeSrc;

    return () => {
      clearTimeout(timeoutRef.current);
      element.removeEventListener('load', handleLoad);
      element.removeEventListener('error', handleError);
      if (type === 'video') {
        element.removeEventListener('loadeddata', handleLoad);
      }
    };
  }, [safeSrc, retryCount, strategy, type, onLoadSuccess, onLoadError]);

  if (loadState === 'error') {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>;
    }
    
    return (
      <div className={`flex items-center justify-center bg-muted rounded-md p-4 ${className}`}>
        <div className="text-center text-muted-foreground">
          <AlertCircle className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm">Failed to load {type}</p>
        </div>
      </div>
    );
  }

  if (loadState === 'loading') {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-md p-4 animate-pulse ${className}`}>
        <div className="text-center text-muted-foreground">
          <ImageIcon className="h-8 w-8 mx-auto mb-2" />
          <p className="text-sm">Loading {type}...</p>
        </div>
      </div>
    );
  }

  if (type === 'video') {
    return (
      <video
        ref={elementRef as React.RefObject<HTMLVideoElement>}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        style={{ display: loadState === 'success' ? 'block' : 'none' }}
      />
    );
  }

  return (
    <img
      ref={elementRef as React.RefObject<HTMLImageElement>}
      alt={alt}
      className={className}
      style={{ display: loadState === 'success' ? 'block' : 'none' }}
    />
  );
};

export default SafeAssetLoader;