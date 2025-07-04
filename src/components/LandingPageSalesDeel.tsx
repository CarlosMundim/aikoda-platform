'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '@/components/common/Footer';

const LandingPageSalesDeel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navigation - Salesforce Enterprise Style + Deel Polish */}
      <nav className={`fixed top-0 w-full backdrop-blur-lg border-b z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 border-gray-200 shadow-lg' : 'bg-white/80 border-gray-100'
      }`}>
        <div className="max-w-[1312px] mx-auto px-8 lg:px-24">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-[#032D60]">aiKODA</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Platform</a>
              <a href="#solutions" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Solutions</a>
              <a href="#results" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Results</a>
              <a href="#enterprise" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Enterprise</a>
              <button className="bg-[#22c55e] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - PALACE SPACING */}
      <section className="relative overflow-hidden pt-48 pb-32" style={{
        background: 'linear-gradient(135deg, #032D60 0%, #1B1B1B 100%)'
      }}>
        {/* Subtle animated background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-[1312px] mx-auto px-6 lg:px-16 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headlines with Deel's Typography Scale */}
            <h1 className="font-bold mb-6 leading-[1.05]">
              <div className="text-5xl md:text-[56px]">We Solve What Others Can't</div>
            </h1>
            <h2 className="text-3xl md:text-[40px] mt-4 mb-8">
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#06b6d4] bg-clip-text text-transparent">
                Cultural Intelligence at Scale
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-[1.8] font-light">
              The first AI platform built specifically for Japanese business culture - now scaling globally
            </p>
            
            {/* CTAs with Deel's Signature Button Style */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-32">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-10 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: '200px' }}
              >
                See It Work - Live Demo
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-[#032D60] transition-all duration-300"
                style={{ borderRadius: '200px' }}
              >
                Cultural Assessment →
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Section - IMPERIAL METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#B1D8FC] mb-2">95%</div>
              <div className="text-sm text-gray-400">Cultural Accuracy</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#B1D8FC] mb-2">10s</div>
              <div className="text-sm text-gray-400">Assessment Time</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#B1D8FC] mb-2">50+</div>
              <div className="text-sm text-gray-400">Countries</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#B1D8FC] mb-2">24/7</div>
              <div className="text-sm text-gray-400">AI Processing</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Section - IMPERIAL PALACE SPACING */}
      <section id="platform" className="py-32 bg-[#FFFBF4]">
        <div className="max-w-[1312px] mx-auto px-8 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Complete Cultural Intelligence Platform
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Four core capabilities that solve what others can't
            </p>
          </motion.div>

          {/* Feature Grid - SPACIOUS PALACE CARDS */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Cultural Intelligence Engine */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-[#B1D8FC]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#032D60]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Cultural Intelligence Engine
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-[1.8]">
                AI that understands Japanese business culture deeply. Built from 20+ years of market expertise, not generic algorithms.
              </p>
              <button className="text-[#032D60] font-semibold hover:text-[#22c55e] transition-colors duration-300 flex items-center">
                Learn More 
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* White-Label Partner Platform */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#22c55e]/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#22c55e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                White-Label Partner Platform
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-[1.8]">
                Deploy our cultural intelligence under your brand. Complete solution for staffing agencies expanding into Japan.
              </p>
              <button className="text-[#22c55e] font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center">
                Partner With Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* AI Recruiter Agents */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                AI Recruiter Agents
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-[1.8]">
                24/7 autonomous agents that source, screen, and match candidates with cultural precision no human can achieve.
              </p>
              <button className="text-purple-600 font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center">
                See Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Enterprise Analytics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Enterprise Analytics
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-[1.8]">
                Real-time dashboards showing cultural composition, team dynamics, and predictive retention analytics.
              </p>
              <button className="text-orange-600 font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center">
                View Dashboards
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* Platform CTA - SPACIOUS */}
          <div className="text-center mt-24">
            <button className="bg-[#032D60] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1B1B1B] hover:shadow-xl transition-all duration-300 mr-6"
                    style={{ borderRadius: '200px' }}>
              Explore Complete Platform
            </button>
            <button className="text-[#032D60] font-medium hover:text-[#22c55e] transition-colors duration-300 text-lg">
              API Documentation →
            </button>
          </div>
        </div>
      </section>

      {/* Results Section - PALACE WORTHY */}
      <section id="results" className="py-32 bg-white">
        <div className="max-w-[1312px] mx-auto px-8 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Real Results from Real Partners
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cultural intelligence that transforms international hiring
            </p>
          </motion.div>

          {/* Case Study Cards - PALACE CARDS */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#032D60] to-[#1B1B1B] text-white p-12 rounded-3xl"
            >
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-bold mb-3">Global EPC Leader</h3>
              <p className="text-blue-100 mb-6 text-sm">
                Reduced specialized engineer hiring time from 127 to 31 days while improving cultural fit to 94%.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold">76%</div>
                  <div className="text-blue-200 text-sm">Faster hiring</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-3xl"
            >
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3">Healthcare Network</h3>
              <p className="text-purple-100 mb-6 text-sm">
                Improved nurse retention by 62% through cultural matching and team optimization.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold">62%</div>
                  <div className="text-purple-200 text-sm">Better retention</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#22c55e] to-emerald-600 text-white p-8 rounded-3xl"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Staffing Partner</h3>
              <p className="text-green-100 mb-6 text-sm">
                Scaled from 0 to 50,000+ monthly assessments with 91% cultural alignment success.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="text-3xl font-bold">91%</div>
                  <div className="text-green-200 text-sm">Cultural alignment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Features - IMPERIAL LEVEL */}
      <section id="enterprise" className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1312px] mx-auto px-8 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Enterprise-Grade from Day One
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for security, compliance, and scale
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8 mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-gray-400 text-sm">Audited security</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-lg font-bold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-400 text-sm">AES-256 standard</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Global Compliance</h3>
              <p className="text-gray-400 text-sm">GDPR, CCPA ready</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-2">99.9% Uptime</h3>
              <p className="text-gray-400 text-sm">Enterprise SLA</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - GRAND FINALE */}
      <section className="py-32 bg-gradient-to-r from-[#032D60] to-[#22c55e] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-10">
              Ready to Build Your Cultural Intelligence Empire?
            </h2>
            <p className="text-2xl mb-16 opacity-90 leading-relaxed">
              Join us as partners, not just clients. Let's transform global hiring together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#032D60] px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300"
                style={{ borderRadius: '200px' }}
              >
                Schedule Partnership Discussion
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-[#032D60] transition-all duration-300"
                style={{ borderRadius: '200px' }}
              >
                Download Partnership Brief
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPageSalesDeel;