'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'platform', href: '#platform' },
    { key: 'solutions', href: '#solutions' },
    { key: 'developers', href: '#developers' },
    { key: 'company', href: '#company' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className="text-24px font-bold text-primary-600 tracking-tight"
              style={{
                fontSize: '24px',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              aiKODA
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '0'
                  }}
                >
                  {t(item.key)}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '8px 24px',
                  borderRadius: '8px'
                }}
              >
                {t('requestDemo')}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <button className="w-full text-left bg-primary-600 text-white px-3 py-2 rounded-md text-base font-medium">
              {t('requestDemo')}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;