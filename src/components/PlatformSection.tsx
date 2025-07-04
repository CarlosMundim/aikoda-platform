'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Brain, Users, BarChart3, Puzzle } from 'lucide-react';

const PlatformSection = () => {
  const t = useTranslations('platform');

  const platformCards = [
    {
      key: 'whiteLabel',
      icon: Brain,
      gradient: 'from-blue-50 to-cyan-50',
    },
    {
      key: 'aiRecruiter',
      icon: Users,
      gradient: 'from-purple-50 to-pink-50',
    },
    {
      key: 'analytics',
      icon: BarChart3,
      gradient: 'from-green-50 to-emerald-50',
    },
    {
      key: 'integrations',
      icon: Puzzle,
      gradient: 'from-orange-50 to-red-50',
    },
  ];

  return (
    <section 
      id="platform" 
      className="bg-white"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px'
      }}
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginBottom: '64px' }}
        >
          <h2
            className="text-gray-900 mb-6"
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              marginBottom: '24px'
            }}
          >
            {t('title')}
          </h2>
          <p
            className="text-gray-600 max-w-3xl mx-auto"
            style={{
              fontSize: '20px',
              fontWeight: 400,
              lineHeight: '1.5',
              letterSpacing: '0'
            }}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '32px' }}
        >
          {platformCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`bg-gradient-to-br ${card.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                style={{
                  padding: '32px',
                  borderRadius: '16px'
                }}
              >
                {/* Icon */}
                <div
                  className="bg-blue-100 rounded-xl flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    marginBottom: '24px',
                    borderRadius: '12px'
                  }}
                >
                  <Icon 
                    className="text-primary-600" 
                    style={{ width: '32px', height: '32px' }} 
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-gray-900"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                    letterSpacing: '0',
                    marginBottom: '12px'
                  }}
                >
                  {t(`cards.${card.key}.title`)}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '1.5',
                    letterSpacing: '0',
                    marginBottom: '16px'
                  }}
                >
                  {t(`cards.${card.key}.description`)}
                </p>

                {/* Metrics */}
                <div
                  className="text-primary-600 font-medium"
                  style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.025em'
                  }}
                >
                  {t(`cards.${card.key}.metrics`)}
                </div>

                {/* Learn More Link */}
                <motion.button
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    marginTop: '16px'
                  }}
                  whileHover={{ x: 4 }}
                >
                  Learn More →
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: '64px' }}
        >
          <div 
            className="flex flex-col sm:flex-row justify-center items-center"
            style={{ gap: '16px' }}
          >
            <motion.button
              className="bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
              style={{
                fontSize: '16px',
                fontWeight: 500,
                padding: '12px 32px',
                borderRadius: '8px'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Complete Platform
            </motion.button>
            <motion.a
              href="#developers"
              className="text-primary-600 hover:text-primary-700 font-medium"
              style={{
                fontSize: '16px',
                fontWeight: 500
              }}
              whileHover={{ x: 4 }}
            >
              View API Documentation →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;