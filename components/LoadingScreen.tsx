'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing AIKODA Platform...');

  const loadingSteps = [
    'Initializing AIKODA Platform...',
    'Loading Market Intelligence Engine...',
    'Connecting to BREXA Analytics...',
    'Preparing Presentation Data...',
    'Optimizing Visualization Components...',
    'Ready for Demonstration'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 2;
        
        // Update loading text based on progress
        const stepIndex = Math.floor((next / 100) * loadingSteps.length);
        if (stepIndex < loadingSteps.length) {
          setLoadingText(loadingSteps[stepIndex]);
        }
        
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center">
      <div className="text-center max-w-md">
        {/* AIKODA Logo/Title */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white mb-2">
            AI<span className="text-blue-400">KODA</span>
          </h1>
          <p className="text-xl text-gray-300">Intelligence Platform</p>
          <p className="text-sm text-gray-400 mt-2">Market Intelligence Presentation System</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto mb-4">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
              {/* Animated ring */}
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 animate-spin"
                style={{ animationDuration: '1s' }}
              ></div>
              {/* Inner ring */}
              <div 
                className="absolute inset-2 rounded-full border-2 border-transparent border-t-blue-300 animate-spin"
                style={{ animationDuration: '0.7s', animationDirection: 'reverse' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>0%</span>
            <span className="font-medium">{progress}%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-300 text-sm">
          {loadingText}
        </div>

        {/* System Info */}
        <div className="mt-8 text-xs text-gray-500 space-y-1">
          <div>Powered by GPT-4 + Claude Sonnet 4</div>
          <div>Enterprise Market Intelligence</div>
          <div>Version 2.1.0 - Production Ready</div>
        </div>
      </div>
    </div>
  );
}