'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface EnterprisePageLayoutProps {
  children: ReactNode;
  variant?: 'main' | 'subdomain';
  subdomainTitle?: string;
  showLanguageSelector?: boolean;
  pageTitle?: string;
  pageSubtitle?: string;
  heroBackground?: 'gradient' | 'white' | 'light-gray';
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{ label: string; href: string }>;
}

const EnterprisePageLayout = ({
  children,
  variant = 'main',
  subdomainTitle,
  showLanguageSelector = true,
  pageTitle,
  pageSubtitle,
  heroBackground = 'white',
  showBreadcrumb = false,
  breadcrumbItems = []
}: EnterprisePageLayoutProps) => {

  const getHeroBgClass = () => {
    switch (heroBackground) {
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50 to-cyan-50';
      case 'light-gray':
        return 'bg-gray-50';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        variant={variant}
        subdomainTitle={subdomainTitle}
        showLanguageSelector={showLanguageSelector}
      />
      
      {/* Page Header - Following Context Engineering */}
      {(pageTitle || pageSubtitle || showBreadcrumb) && (
        <section className={`${getHeroBgClass()} border-b border-gray-200`}>
          <div 
            className="max-w-7xl mx-auto px-6"
            style={{
              paddingTop: variant === 'main' ? '140px' : '96px',
              paddingBottom: '80px'
            }}
          >
            {/* Breadcrumb */}
            {showBreadcrumb && breadcrumbItems.length > 0 && (
              <motion.nav
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
              >
                <ol className="flex items-center space-x-2 text-sm">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-2 text-gray-400">/</span>
                      )}
                      <a
                        href={item.href}
                        className="text-gray-600 hover:text-blue-600 transition-colors"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </motion.nav>
            )}

            {/* Page Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center max-w-4xl mx-auto"
            >
              {pageTitle && (
                <h1
                  className="text-gray-900 font-bold mb-6 leading-tight"
                  style={{
                    fontSize: clamp('32px', '4vw', '48px'),
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2'
                  }}
                >
                  {pageTitle}
                </h1>
              )}
              
              {pageSubtitle && (
                <p
                  className="text-gray-600 max-w-3xl mx-auto"
                  style={{
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    letterSpacing: '0'
                  }}
                >
                  {pageSubtitle}
                </p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content with proper spacing */}
      <main className="flex-1">
        {children}
      </main>

      <Footer variant={variant} showLanguageSelector={showLanguageSelector} />
    </div>
  );
};

// Utility function for responsive font sizing
const clamp = (min: string, preferred: string, max: string) => {
  return `clamp(${min}, ${preferred}, ${max})`;
};

export default EnterprisePageLayout;