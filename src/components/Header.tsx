'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Results', href: '#results' },
  { label: 'Enterprise', href: '#enterprise' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top: { backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' },
        scrolled: { backgroundColor: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav
        className="max-w-[1312px] mx-auto flex items-center justify-between px-6 md:px-12 py-4 md:py-5"
        aria-label="Primary Navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="aiKODA homepage" className="flex items-center">
          <AnimatePresence mode="wait" initial={false}>
            {scrolled ? (
              <motion.div
                key="blue-logo"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25 }}
                className="w-28 h-auto relative"
              >
                <Image
                  src="/logos/aikoda_blue_logo.svg"
                  alt="aiKODA blue logo"
                  width={112}
                  height={36}
                  priority
                />
              </motion.div>
            ) : (
              <motion.div
                key="white-logo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="w-28 h-auto relative"
              >
                <Image
                  src="/logos/aikoda_white_logo.svg"
                  alt="aiKODA white logo"
                  width={112}
                  height={36}
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 font-medium text-gray-700 dark:text-gray-100">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative text-lg transition-colors duration-200 hover:text-[#22c55e] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-[#22c55e] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                    scrolled ? 'bg-[#22c55e]' : 'bg-[#22c55e]'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
              scrolled
                ? 'bg-[#22c55e] text-white hover:bg-[#16a34a]'
                : 'bg-[#22c55e] text-white hover:bg-[#16a34a]'
            }`}
            aria-label="Start Cultural Assessment"
          >
            Start Cultural Assessment
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold border-2 border-white transition-colors duration-300 ${
              scrolled
                ? 'text-[#032D60] border-[#032D60] hover:bg-[#032D60] hover:text-white'
                : 'text-white border-white hover:bg-white hover:text-[#032D60]'
            }`}
            aria-label="Schedule Demo"
          >
            Schedule Demo
          </button>
        </div>

        {/* Mobile menu button placeholder */}
        <button
          className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 ${
            scrolled ? 'text-gray-700' : 'text-white'
          }`}
          aria-label="Open mobile menu"
          // onClick={toggleMobileMenu} // To be implemented
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;