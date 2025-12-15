import React, { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      
      // Start progress animation
      const progressTimer = setTimeout(() => {
        setProgress(100);
      }, 100);

      // Hide loader after delay
      const hideTimer = setTimeout(() => {
        onComplete?.();
      }, 1500);

      return () => {
        clearTimeout(progressTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div id="page-loader" className="active">
      <div className="text-center">
        <img 
          src="/assets/logo.jpeg" 
          alt="Loading..." 
          className="loader-logo mx-auto mb-2"
        />
        <p className="text-brand-red font-bold tracking-widest text-xs animate-pulse mb-1">LOADING</p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div 
            id="loader-progress" 
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;