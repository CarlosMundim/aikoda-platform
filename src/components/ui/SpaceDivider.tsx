import React from 'react';

export const SpaceDivider = ({ size = 'md', pattern = false }: { size?: 'sm' | 'md' | 'lg' | 'xl'; pattern?: boolean }) => {
  const sizes = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32',
    xl: 'h-48'
  };

  return (
    <div className={`relative ${sizes[size]} w-full`}>
      {pattern && (
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <pattern id="divider-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#B1D8FC" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#divider-pattern)" />
          </svg>
        </div>
      )}
    </div>
  );
};

export const SectionDivider = () => {
  return (
    <div className="relative h-px w-full max-w-4xl mx-auto my-24">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  );
};