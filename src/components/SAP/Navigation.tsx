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
      { href: '/', label: 'Enterprise Cockpit' },
      { href: '/candidate-analyzer', label: 'Candidate Analyzer' },
      { href: '/market-intelligence', label: 'Market Intelligence' },
      { href: '/cultural-reports', label: 'Cultural Reports' },
      { href: '/talent-pipeline', label: 'Talent Pipeline' },
      { href: '/job-matching', label: 'Job Matching' },
    ],
    ja: [
      { href: '/', label: 'エンタープライズ コックピット' },
      { href: '/candidate-analyzer', label: '候補者分析' },
      { href: '/market-intelligence', label: '市場インテリジェンス' },
      { href: '/cultural-reports', label: '文化レポート' },
      { href: '/talent-pipeline', label: 'タレントパイプライン' },
      { href: '/job-matching', label: 'ジョブマッチング' },
    ]
  }

  const items = navItems[language]

  return (
    <nav className="bg-white border-b border-sap-border shadow-sm">
      <div className="sap-container">
        <div className="flex space-x-2 overflow-x-auto py-3">
          {items.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`sap-button ${isActive ? 'primary' : 'secondary'} whitespace-nowrap`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navigation