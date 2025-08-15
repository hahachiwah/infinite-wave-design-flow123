// Iframe detection and compatibility utilities
const IFRAME_CONFIG = {
  CONSOLE_LOG_PREFIX: '🖼️ [IframeDetection]',
  DETECTION_TIMEOUT_MS: 100,
} as const;

/**
 * Detects if the app is running inside an iframe
 */
export const isInIframe = (): boolean => {
  try {
    const inIframe = window.self !== window.top;
    console.log(`${IFRAME_CONFIG.CONSOLE_LOG_PREFIX} ${inIframe ? '✅' : '❌'} Running in iframe: ${inIframe}`);
    return inIframe;
  } catch (e) {
    console.log(`${IFRAME_CONFIG.CONSOLE_LOG_PREFIX} ✅ Running in iframe (detected via exception)`);
    return true;
  }
};

/**
 * Gets iframe-safe asset loading strategy
 */
export const getAssetLoadingStrategy = () => {
  const inIframe = isInIframe();
  
  const strategy = {
    useLocalAssets: inIframe,
    enableRetry: true,
    maxRetries: inIframe ? 2 : 1,
    timeout: inIframe ? 3000 : 5000,
    useFallbacks: true,
  };
  
  console.log(`${IFRAME_CONFIG.CONSOLE_LOG_PREFIX} 📋 Asset loading strategy:`, strategy);
  return strategy;
};

/**
 * Safe asset path resolver for iframe environments
 */
export const getSafeAssetPath = (path: string): string => {
  if (!path) {
    console.warn(`${IFRAME_CONFIG.CONSOLE_LOG_PREFIX} ⚠️ Empty asset path provided`);
    return '';
  }
  
  const inIframe = isInIframe();
  
  // In iframe, ensure absolute paths for assets
  if (inIframe && !path.startsWith('http') && !path.startsWith('/')) {
    const safePath = `/${path}`;
    console.log(`${IFRAME_CONFIG.CONSOLE_LOG_PREFIX} 🔧 Converted relative path "${path}" to "${safePath}"`);
    return safePath;
  }
  
  return path;
};