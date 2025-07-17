'use client'

import React, { useState } from 'react'
import { LanguageToggle } from './LanguageToggle'
import { Navigation } from './Navigation'

interface DashboardLayoutProps {
  children: (language: 'en' | 'ja') => React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ja'>('en')

  return (
    <div className="min-h-screen bg-sap-background">
      <header className="bg-white border-b border-sap-border">
        <div className="sap-container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-sap-brand">iWORKZ Technologies kk</h1>
              <span className="text-sap-text-secondary">Cultural Intelligence Platform</span>
            </div>
            <LanguageToggle onLanguageChange={setCurrentLanguage} />
          </div>
        </div>
      </header>
      
      <Navigation language={currentLanguage} />

      <main className="sap-container sap-section">
        {children(currentLanguage)}
      </main>

      <footer className="bg-white border-t border-sap-border mt-12">
        <div className="sap-container py-6">
          <div className="text-center text-sap-text-muted">
            <p>© 2025 iWORKZ Technologies kk. All rights reserved.</p>
            <p className="mt-1">Enterprise Edition - 47-Dimension Cultural Intelligence Framework</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DashboardLayout