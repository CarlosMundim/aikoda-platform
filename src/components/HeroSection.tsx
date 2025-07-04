'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const t = useTranslations('hero');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { key: 'accuracy', color: '#22d3ee' },
    { key: 'speed', color: '#22d3ee' },
    { key: 'growth', color: '#22d3ee' },
    { key: 'roi', color: '#22d3ee' },
  ];

  if (!mounted) return null;

  return (
    <section 
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
        paddingTop: '120px',
        paddingBottom: '80px'
      }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          className="w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradLines" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g stroke="url(#gradLines)" strokeWidth="0.5">
            <motion.path
              d="M0 0 L100% 100%"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.path
              d="M100% 0 L0 100%"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.path
              d="M50% 0 L50% 100%"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.9 }}
            />
            <motion.path
              d="M0 50% L100% 50%"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.1 }}
            />
          </g>
        </svg>
      </div>

      <div 
        className="relative max-w-6xl mx-auto text-center"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-24"
          style={{ marginBottom: '24px' }}
        >
          <motion.span
            className="block"
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              marginBottom: '8px'
            }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {t('title.line1')}
          </motion.span>
          <motion.span
            className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '1.1',
              letterSpacing: '-0.01em'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('title.line2')}
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 max-w-3xl mx-auto"
          style={{
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '1.5',
            letterSpacing: '0',
            marginBottom: '40px'
          }}
        >
          {t('subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ marginBottom: '60px' }}
        >
          <motion.button
            className="bg-green-500 text-white transition-all duration-300"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              padding: '16px 40px',
              borderRadius: '8px',
              letterSpacing: '0'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.primary')}
          </motion.button>
          <motion.button
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
            style={{
              fontSize: '18px',
              fontWeight: 500,
              padding: '14px 38px',
              borderRadius: '8px',
              letterSpacing: '0'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(255, 255, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.secondary')}
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-grid grid-cols-2 md:grid-cols-4"
          style={{
            gap: '24px'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <motion.div
                className="mb-1"
                style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: stat.color,
                  letterSpacing: '0'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
              >
                {t(`stats.${stat.key}.value`)}
              </motion.div>
              <div
                className="text-gray-400"
                style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  letterSpacing: '0.025em'
                }}
              >
                {t(`stats.${stat.key}.label`)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;