'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  language: 'en' | 'ja'
}

export function Navigation({ language }: NavigationProps) {
  const pathname = usePathname()

  const navItems = {
    en: [
      { href: '/', label: 'Enterprise Cockpit', icon: '📊' },
      { href: '/candidate-analyzer', label: 'Candidate Analyzer', icon: '🎯' },
      { href: '/market-intelligence', label: 'Market Intelligence', icon: '🌏' },
      { href: '/cultural-reports', label: 'Cultural Reports', icon: '📈' },
      { href: '/talent-pipeline', label: 'Talent Pipeline', icon: '🚀' },
      { href: '/job-matching', label: 'Job Matching', icon: '🤝' },
    ],
    ja: [
      { href: '/', label: 'エンタープライズ コックピット', icon: '📊' },
      { href: '/candidate-analyzer', label: '候補者分析', icon: '🎯' },
      { href: '/market-intelligence', label: '市場インテリジェンス', icon: '🌏' },
      { href: '/cultural-reports', label: '文化レポート', icon: '📈' },
      { href: '/talent-pipeline', label: 'タレントパイプライン', icon: '🚀' },
      { href: '/job-matching', label: 'ジョブマッチング', icon: '🤝' },
    ]
  }

  const items = navItems[language]

  return (
    <nav className="bg-white border-b border-sap-border shadow-sm">
      <div className="sap-container">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-sap-brand text-white'
                    : 'text-sap-text-secondary hover:bg-sap-hover hover:text-sap-text-primary'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation