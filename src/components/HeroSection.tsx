'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: '95% Cultural Accuracy', value: '95%', color: '#22d3ee' },
    { label: '10s Assessment Speed', value: '10s', color: '#22d3ee' },
    { label: '50+ Countries', value: '50+', color: '#22d3ee' },
    { label: '24/7 Processing', value: '24/7', color: '#22d3ee' },
  ];

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Solve What
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                Others Can't
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-600 font-light mb-8">
              47-Dimensional Cultural Intelligence
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-lg">
              The first AI platform built specifically for Japanese business culture - now scaling globally with enterprise precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                Start Cultural Assessment
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                <div className="text-center text-blue-600">
                  <div className="text-4xl font-bold mb-2">🏢</div>
                  <div className="text-lg font-medium">Enterprise AI</div>
                  <div className="text-sm">Cultural Intelligence</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;