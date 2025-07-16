'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium border rounded transition-colors ${
          language === 'en'
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-3 py-1 text-sm font-medium border rounded transition-colors ${
          language === 'ja'
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
        }`}
      >
        日本語
      </button>
    </div>
  );
};