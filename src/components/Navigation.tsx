'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Platform', href: '/platform' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Enterprise', href: '/enterprise' },
    { label: 'Results', href: '/results' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-blue-600 tracking-tight"
            >
              aiKODA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  // @ts-ignore
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-6 py-2 rounded-lg text-sm font-medium"
              >
                Get Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                // @ts-ignore
                href={item.href}
                className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button 
              className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 px-4 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;