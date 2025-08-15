import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

// Error boundary constants - Uncle Bob: No Magic Numbers
const ERROR_DISPLAY_CONFIG = {
  MAX_ERROR_MESSAGE_LENGTH: 200,
  RELOAD_DELAY_MS: 100,
  CONSOLE_LOG_PREFIX: '🚨 [ErrorBoundary]',
} as const;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    console.error(`${ERROR_DISPLAY_CONFIG.CONSOLE_LOG_PREFIX} Component Error Caught:`, error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details for debugging
    console.error(`${ERROR_DISPLAY_CONFIG.CONSOLE_LOG_PREFIX} Error Details:`, {
      error: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({ error, errorInfo });
  }

  handleRetry = () => {
    console.log(`${ERROR_DISPLAY_CONFIG.CONSOLE_LOG_PREFIX} 🔄 User initiated retry`);
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleReload = () => {
    console.log(`${ERROR_DISPLAY_CONFIG.CONSOLE_LOG_PREFIX} 🔄 Full page reload initiated`);
    setTimeout(() => {
      window.location.reload();
    }, ERROR_DISPLAY_CONFIG.RELOAD_DELAY_MS);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      const errorMessage = this.state.error?.message || 'An unexpected error occurred';
      const truncatedMessage = errorMessage.length > ERROR_DISPLAY_CONFIG.MAX_ERROR_MESSAGE_LENGTH 
        ? `${errorMessage.substring(0, ERROR_DISPLAY_CONFIG.MAX_ERROR_MESSAGE_LENGTH)}...`
        : errorMessage;

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="max-w-md w-full bg-card rounded-lg shadow-medium p-6 text-center">
            <div className="mb-4">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-2" />
              <h1 className="text-xl font-semibold text-foreground mb-2">
                🚨 Something went wrong
              </h1>
              <p className="text-muted-foreground text-sm mb-4">
                {truncatedMessage}
              </p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={this.handleRetry}
                className="w-full"
                variant="default"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                🔄 Try Again
              </Button>
              
              <Button 
                onClick={this.handleReload}
                variant="outline"
                className="w-full"
              >
                🌐 Reload Page
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-muted-foreground">
                  🔍 Debug Details
                </summary>
                <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;