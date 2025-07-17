'use client'

import React, { useState } from 'react'

interface LanguageToggleProps {
  onLanguageChange?: (language: 'en' | 'ja') => void
}

export function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  const [currentLang, setCurrentLang] = useState<'en' | 'ja'>('en')

  const handleLanguageChange = (lang: 'en' | 'ja') => {
    setCurrentLang(lang)
    if (onLanguageChange) {
      onLanguageChange(lang)
    }
    // Update document lang attribute
    document.documentElement.lang = lang
  }

  return (
    <div className="sap-language-toggle">
      <button
        className={`toggle-btn ${currentLang === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        English
      </button>
      <button
        className={`toggle-btn ${currentLang === 'ja' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('ja')}
      >
        日本語
      </button>
    </div>
  )
}

export default LanguageToggle