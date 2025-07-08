'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  showLiveIndicator?: boolean;
  companyName?: string;
}

const DashboardLayout = ({ 
  children, 
  title = "aiKODA Intelligence Platform",
  showLiveIndicator = true,
  companyName = "Demo Mode"
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Main Header with Logo */}
      <Header />
      
      {/* Dashboard Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32 py-8">
          <div className="flex items-center justify-between">
            {/* Title and Live Indicator */}
            <div className="flex items-center space-x-6">
              <motion.h1 
                className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h1>
              {showLiveIndicator && (
                <motion.span 
                  className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>LIVE DEMO</span>
                  </div>
                </motion.span>
              )}
            </div>
            
            {/* Status and Company Info */}
            <div className="flex items-center space-x-8">
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-slate-600 font-medium">System Active</span>
              </motion.div>
              <motion.div 
                className="text-sm text-slate-500 font-light"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {companyName}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashboardLayout;