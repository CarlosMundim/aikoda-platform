'use client';

import { useState, useEffect } from 'react';

interface NavigationHandlerProps {
  onViewChange: (view: string) => void;
  currentView: string;
}

export default function NavigationHandler({ onViewChange, currentView }: NavigationHandlerProps) {
  const [isJapanese, setIsJapanese] = useState(true);

  const navigationItems = [
    {
      id: 'dashboard',
      japanese: 'ダッシュボード',
      english: 'Dashboard',
      icon: '📊'
    },
    {
      id: 'analytics',
      japanese: '分析',
      english: 'Analytics', 
      icon: '📈'
    },
    {
      id: 'intelligence',
      japanese: 'インテリジェンス',
      english: 'Intelligence',
      icon: '🧠'
    },
    {
      id: 'reports',
      japanese: 'レポート',
      english: 'Reports',
      icon: '📋'
    }
  ];

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onViewChange(item.id)}
          className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
            currentView === item.id
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg">{item.icon}</span>
            <div className="text-center">
              <div className="text-sm font-medium leading-tight">
                {item.japanese}
              </div>
              <div className="text-xs opacity-80 leading-tight">
                {item.english}
              </div>
            </div>
          </div>
        </button>
      ))}
      
      {/* Language Toggle */}
      <button
        onClick={() => setIsJapanese(!isJapanese)}
        className="ml-4 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-xs font-medium transition-colors"
      >
        {isJapanese ? '🇯🇵 JP' : '🇺🇸 EN'}
      </button>
    </nav>
  );
}