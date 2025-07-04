'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  variant?: 'main' | 'subdomain';
  subdomainTitle?: string;
  showLanguageSelector?: boolean;
}

const Header = ({ 
  variant = 'main', 
  subdomainTitle,
  showLanguageSelector = true 
}: HeaderProps) => {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const mainNavItems = [
    { key: 'platform', href: '#platform', external: false },
    { key: 'solutions', href: '#solutions', external: false },
    { key: 'developers', href: 'https://api.aikoda.dev', external: true },
    { key: 'company', href: 'https://www.aikoda.dev/about', external: true },
  ];

  const enterpriseNavItems = [
    { label: 'Client Portal', href: 'https://client.aikoda.dev', icon: '🏢' },
    { label: 'API Docs', href: 'https://api.aikoda.dev', icon: '⚡' },
    { label: 'System Status', href: 'https://status.aikoda.dev', icon: '📊' },
    { label: 'Support', href: 'https://docs.aikoda.dev', icon: '💬' },
  ];

  const handleLanguageChange = (langCode: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${langCode}`);
    router.push(newPath as any);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link 
              href="/" 
              className="flex items-center space-x-3"
            >
              {/* Logo placeholder - will be replaced with actual logo */}
              <div 
                className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">aK</span>
              </div>
              <span
                className="text-blue-600 font-bold tracking-tight"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                aiKODA
              </span>
            </Link>
            
            {/* Subdomain Title */}
            {variant === 'subdomain' && subdomainTitle && (
              <>
                <span className="text-gray-400 text-lg">/</span>
                <span 
                  className="text-gray-700 font-medium"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  {subdomainTitle}
                </span>
              </>
            )}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Main Navigation */}
            <nav className="flex items-center space-x-6">
              {mainNavItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  target={item.external ? '_blank' : '_self'}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0'
                  }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
            </nav>

            {/* Enterprise Quick Access */}
            <div className="flex items-center space-x-2">
              {enterpriseNavItems.slice(0, 2).map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  style={{
                    fontSize: '12px',
                    fontWeight: 500
                  }}
                >
                  <span>{item.icon}</span>
                  <span className="hidden xl:inline">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Language Selector */}
            {showLanguageSelector && (
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage.flag}</span>
                  <span className="hidden sm:inline">{currentLanguage.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isLanguageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                            language.code === locale ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                          }`}
                          style={{
                            fontSize: '14px',
                            fontWeight: language.code === locale ? 500 : 400
                          }}
                        >
                          <span>{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-lg font-medium"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                padding: '8px 16px'
              }}
            >
              {t('requestDemo')}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              
              {/* Main Navigation */}
              <div className="space-y-2">
                {mainNavItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontSize: '16px',
                      fontWeight: 500
                    }}
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>

              {/* Enterprise Links */}
              <div className="border-t border-gray-200 pt-4">
                <p className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Enterprise Access
                </p>
                <div className="space-y-1">
                  {enterpriseNavItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                      style={{
                        fontSize: '14px',
                        fontWeight: 400
                      }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Language Selector Mobile */}
              {showLanguageSelector && (
                <div className="border-t border-gray-200 pt-4">
                  <p className="px-3 text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Language
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          handleLanguageChange(language.code);
                          setIsMenuOpen(false);
                        }}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                          language.code === locale 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        style={{
                          fontSize: '14px',
                          fontWeight: language.code === locale ? 500 : 400
                        }}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile CTA */}
              <div className="border-t border-gray-200 pt-4">
                <button 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 rounded-lg font-medium py-3"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  {t('requestDemo')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close language dropdown */}
      {isLanguageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;