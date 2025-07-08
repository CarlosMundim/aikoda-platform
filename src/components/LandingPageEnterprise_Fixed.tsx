'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, Building2, Users, BarChart3, Shield, Globe,
  CheckCircle, TrendingUp, Target, ArrowRight, Play, Calendar,
  AlertTriangle,
} from 'lucide-react';
import Footer from './Footer';
import Header from './Header';


// ---------- MAIN LANDING PAGE ----------
const LandingPageEnterprise: React.FC = () => {
  const heroMetrics = [
    { value: "128K+", label: "Employees Managed", color: "text-[#B1D8FC]" },
    { value: "200+", label: "Global Subsidiaries", color: "text-[#22c55e]" },
    { value: "47", label: "Cultural Dimensions", color: "text-[#B1D8FC]" },
    { value: "25+", label: "Years Japan Experience", color: "text-[#22c55e]" }
  ];

  return (
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ---------- HEADER ---------- */}
      <Header />

      {/* ---------- HERO SECTION ---------- */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent opacity-60" />

        <div className="relative max-w-7xl mx-auto px-12 lg:px-24 py-32 lg:py-48 z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-32 lg:gap-48 items-center">
            {/* -------- HERO TEXT -------- */}
            <div className="lg:col-span-12 text-center">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 font-light tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="text-white">We Solve What Others Can't</span>
              </motion.h1>
              <motion.div 
                className="mb-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <p className="text-2xl md:text-3xl text-blue-100 font-light leading-relaxed tracking-wide mb-6">
                  Where Top Talent and Japanese Excellence Meet — <span className="text-emerald-400 font-medium">Powered by Advanced AI</span>
                </p>
                <p className="text-xl text-blue-200 font-light leading-relaxed tracking-wide">
                  The first AI platform built specifically for Japanese business culture. Complete ecosystem for precision hiring, onboarding, and workforce support — now scaling globally.
                </p>
              </motion.div>

              {/* CALLS TO ACTION */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <a
                  href="/demo/assessment"
                  className="group relative px-8 py-4 bg-emerald-500 text-white font-semibold text-lg rounded-lg hover:bg-emerald-600 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">See How We Work</span>
                </a>
                <a
                  href="/contact"
                  className="group px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Schedule Conversation</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </div>
  );
};

export default LandingPageEnterprise;