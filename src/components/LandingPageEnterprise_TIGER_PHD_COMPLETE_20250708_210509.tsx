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

      {/* ---------- TIGER PhD HERO SECTION - GRID SYSTEM & CORPORATE ELEGANCE ---------- */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Enterprise geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h80v80H0V0zm40 40h40v40H40V40zM0 40h40v40H0V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Tiger PhD Grid System Canvas */}
        <div className="relative max-w-[1400px] mx-auto px-24 lg:px-32 py-48 lg:py-64 z-10 w-full">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* -------- HERO CONTENT - CENTERED ENTERPRISE GRID -------- */}
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 text-center">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-24 font-light tracking-tight leading-[0.85]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="text-white">We Solve What<br />Others Can't</span>
              </motion.h1>
              
              <motion.div 
                className="mb-32 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <p className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light leading-relaxed tracking-wide mb-12">
                  Where Top Talent and Japanese Excellence Meet — <span className="text-emerald-400 font-medium">Powered by Advanced AI</span>
                </p>
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed tracking-wide">
                  The first AI platform built specifically for Japanese business culture. Complete ecosystem for precision hiring, onboarding, and workforce support — now scaling globally.
                </p>
              </motion.div>

              {/* Enterprise CTA Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                <a
                  href="/demo/assessment"
                  className="group relative px-12 py-6 bg-white text-slate-900 font-semibold text-lg rounded-none hover:bg-slate-50 transition-all duration-700 inline-flex items-center justify-center shadow-xl hover:shadow-2xl border-l-4 border-emerald-500"
                >
                  <span className="relative z-10 tracking-wide">See How We Work</span>
                </a>
                <a
                  href="/contact"
                  className="group px-12 py-6 border-2 border-white/20 text-white font-semibold text-lg rounded-none hover:border-white/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-700 inline-flex items-center justify-center"
                >
                  <span className="tracking-wide">Schedule Conversation</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- REVOLUTIONARY CAPABILITIES - TIGER PhD GRID SYSTEM ---------- */}
      <section id="platform" className="py-48 lg:py-64 bg-white">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
                Revolutionary<br />
                <span className="text-slate-600">Capabilities</span>
              </h2>
              <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed tracking-wide">
                A complete ecosystem that transforms how global enterprises understand, 
                hire, and integrate multicultural talent.
              </p>
            </motion.div>
          </div>

          {/* Tiger PhD Grid System - Equal Square Canvas */}
          <div className="grid lg:grid-cols-3 gap-24 lg:gap-32">
            {/* 47D Engine - PhD Card Template */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group"
            >
              <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-12 lg:p-16">
                {/* Tiger PhD Accent System */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
                <div className="w-1 h-16 bg-slate-300 mb-12" />
                
                {/* Content Grid */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                      47D Cultural<br />
                      <span className="text-blue-600">Engine</span>
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      Proprietary AI analyzes 47 cultural dimensions in real-time. 
                      The only system designed specifically for Japanese business culture.
                    </p>
                  </div>
                  
                  {/* Enterprise Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-blue-600 mb-2">8.7s</div>
                      <div className="text-sm text-slate-600 tracking-wide">Processing</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-blue-600 mb-2">94%</div>
                      <div className="text-sm text-slate-600 tracking-wide">Accuracy</div>
                    </div>
                  </div>
                  
                  {/* Enterprise Action */}
                  <div className="pt-4 border-t border-slate-200">
                    <a href="/demo/assessment" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 tracking-wide">
                      Try Assessment
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Partner Ecosystem - PhD Card Template */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-12 lg:p-16">
                {/* Tiger PhD Accent System */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                <div className="w-1 h-16 bg-slate-300 mb-12" />
                
                {/* Content Grid */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                      Partner<br />
                      <span className="text-emerald-600">Ecosystem</span>
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      White-label our technology. Scale your business globally with 
                      enterprise-grade cultural intelligence.
                    </p>
                  </div>
                  
                  {/* Enterprise Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-emerald-600 mb-2">API</div>
                      <div className="text-sm text-slate-600 tracking-wide">Full Access</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-emerald-600 mb-2">Rev</div>
                      <div className="text-sm text-slate-600 tracking-wide">Sharing</div>
                    </div>
                  </div>
                  
                  {/* Enterprise Action */}
                  <div className="pt-4 border-t border-slate-200">
                    <a href="#partners" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 tracking-wide">
                      Become Partner
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* AI Workforce - PhD Card Template */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white border border-slate-200 hover:border-amber-300 transition-all duration-700 p-12 lg:p-16">
                {/* Tiger PhD Accent System */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500" />
                <div className="w-1 h-16 bg-slate-300 mb-12" />
                
                {/* Content Grid */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                      AI<br />
                      <span className="text-amber-600">Workforce</span>
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                      Autonomous agents handle sourcing, screening, and matching 
                      with cultural precision at enterprise scale.
                    </p>
                  </div>
                  
                  {/* Enterprise Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-amber-600 mb-2">24/7</div>
                      <div className="text-sm text-slate-600 tracking-wide">Operations</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 border border-slate-200">
                      <div className="text-2xl font-light text-amber-600 mb-2">11+</div>
                      <div className="text-sm text-slate-600 tracking-wide">Languages</div>
                    </div>
                  </div>
                  
                  {/* Enterprise Action */}
                  <div className="pt-4 border-t border-slate-200">
                    <a href="#agents" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300 tracking-wide">
                      Explore AI Agents
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- JAPAN'S WORKFORCE FUTURE - TIGER PhD GRID SYSTEM ---------- */}
      <section className="py-48 lg:py-64 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Japan's Workforce<br />
              <span className="text-slate-600">Future</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Six revolutionary capabilities that define how global teams succeed in Japan's evolving business landscape
            </p>
          </div>

          {/* Tiger PhD Grid System - Equal Square Canvas */}
          <div className="grid md:grid-cols-2 gap-24 lg:gap-32">
            {/* 47-Dimensional Intelligence - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    47-Dimensional<br />
                    <span className="text-blue-600">Intelligence</span>
                  </h3>
                  <p className="text-lg text-blue-600 font-medium tracking-wide">
                    Wa • Kaizen • Omotenashi • 5C1M™
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Revolutionary AI analyzes 200+ cultural signals to predict team harmony with 94% accuracy.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-blue-600 mb-2">200+</div>
                    <div className="text-sm text-slate-600 tracking-wide">Cultural Signals</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">94%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Autonomous AI Workforce - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Autonomous AI<br />
                    <span className="text-purple-600">Workforce</span>
                  </h3>
                  <p className="text-lg text-purple-600 font-medium tracking-wide">
                    24/7 • Multilingual • Precision
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Deploy intelligent agents that source, screen, and match candidates with cultural precision at scale.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-purple-600 mb-2">24/7</div>
                    <div className="text-sm text-slate-600 tracking-wide">AI Operations</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">11</div>
                    <div className="text-sm text-slate-600 tracking-wide">Languages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Communication - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Global<br />
                    <span className="text-emerald-600">Communication</span>
                  </h3>
                  <p className="text-lg text-emerald-600 font-medium tracking-wide">
                    Real-time • Cultural Context
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Break down language barriers with AI translation that understands cultural nuances and context.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">Real-time</div>
                    <div className="text-sm text-slate-600 tracking-wide">Translation</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-blue-600 mb-2">Cultural</div>
                    <div className="text-sm text-slate-600 tracking-wide">Context</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Security - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-red-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Enterprise<br />
                    <span className="text-red-600">Security</span>
                  </h3>
                  <p className="text-lg text-red-600 font-medium tracking-wide">
                    SOC2 • ISO • APPI Compliant
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Japanese enterprise standards with blockchain compliance and predictive workforce analytics.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-red-600 mb-2">SOC2</div>
                    <div className="text-sm text-slate-600 tracking-wide">Certified</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-blue-600 mb-2">Predictive</div>
                    <div className="text-sm text-slate-600 tracking-wide">Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SOLUTIONS FOR EVERY WORKFORCE CHALLENGE - TIGER PhD FINAL SECTION ---------- */}
      <section className="py-48 lg:py-64 bg-white">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Solutions for Every<br />
              <span className="text-slate-600">Workforce Challenge</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Complete talent lifecycle solutions from sourcing to success
            </p>
          </div>

          {/* Tiger PhD Grid System - Equal Square Canvas */}
          <div className="grid md:grid-cols-2 gap-24 lg:gap-32">
            {/* Global Talent Sourcing - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Global Talent<br />
                    <span className="text-blue-600">Sourcing</span>
                  </h3>
                  <p className="text-lg text-blue-600 font-medium tracking-wide">
                    STEAM • University Network • 94% Success
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Source top STEAM talent from our connected global university network with cultural compatibility matching.
                  </p>
                </div>
                
                {/* Enterprise Action */}
                <div className="pt-6 border-t border-slate-200">
                  <a href="#recruitment-solutions" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300 tracking-wide">
                    Start Sourcing Talent
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visa & Immigration - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Visa &<br />
                    <span className="text-emerald-600">Immigration</span>
                  </h3>
                  <p className="text-lg text-emerald-600 font-medium tracking-wide">
                    End-to-End • Japan Specialist • Legal
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Complete visa and immigration support for seamless international talent placement in Japan.
                  </p>
                </div>
                
                {/* Enterprise Action */}
                <div className="pt-6 border-t border-slate-200">
                  <a href="#visa-services" className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700 transition-colors duration-300 tracking-wide">
                    Get Visa Support
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Validation - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Skills<br />
                    <span className="text-purple-600">Validation</span>
                  </h3>
                  <p className="text-lg text-purple-600 font-medium tracking-wide">
                    Technical • Behavioral • Real-world
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Advanced STEAM skills evaluation with AI-powered assessments and real-world project simulations.
                  </p>
                </div>
                
                {/* Enterprise Action */}
                <div className="pt-6 border-t border-slate-200">
                  <a href="#skills-assessment" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-300 tracking-wide">
                    Validate Skills
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Onboarding & Integration - PhD Card Template */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-red-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12 h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Onboarding &<br />
                    <span className="text-red-600">Integration</span>
                  </h3>
                  <p className="text-lg text-red-600 font-medium tracking-wide">
                    Cultural • Language • Mentorship
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Complete integration programs with cultural training, language support, and AI-powered mentorship.
                  </p>
                </div>
                
                {/* Enterprise Action */}
                <div className="pt-6 border-t border-slate-200">
                  <a href="#onboarding-services" className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300 tracking-wide">
                    Start Integration
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE CAPABILITIES BENTO - TIGER PhD DESIGN ---------- */}
      <section className="py-48 lg:py-64 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Complete Enterprise<br />
              <span className="text-slate-600">Ecosystem</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Six core capabilities that transform how global teams succeed in Japan's evolving business landscape
            </p>
          </div>

          {/* Hero Capabilities - Featured Large Cards */}
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 mb-24">
            {/* 47-Dimensional Cultural Intelligence - HERO */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    47-Dimensional Cultural<br />
                    <span className="text-blue-600">Intelligence</span>
                  </h3>
                  <div className="text-lg text-blue-600 font-medium tracking-wide">
                    94% Accuracy • 200+ Cultural Signals • Real-time Analysis
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Revolutionary AI that understands Japanese and global business cultures with scientific precision. Built on <strong>Wa, Kaizen, and Omotenashi</strong> principles.
                </p>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-blue-600 mb-2">47</div>
                    <div className="text-sm text-slate-600 tracking-wide">Dimensions</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-blue-600 mb-2">8.7s</div>
                    <div className="text-sm text-slate-600 tracking-wide">Analysis</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-blue-600 mb-2">11</div>
                    <div className="text-sm text-slate-600 tracking-wide">Languages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Workforce Agents - HERO */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Autonomous AI<br />
                    <span className="text-purple-600">Workforce</span>
                  </h3>
                  <div className="text-lg text-purple-600 font-medium tracking-wide">
                    24/7 Operations • 11 Languages • Infinite Scale
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Deploy intelligent agents that source, screen, match, onboard, and support candidates with cultural precision at enterprise scale. <strong>Never sleeps, always learning.</strong>
                </p>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-purple-600 mb-2">∞</div>
                    <div className="text-sm text-slate-600 tracking-wide">Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-purple-600 mb-2">365</div>
                    <div className="text-sm text-slate-600 tracking-wide">Days/Year</div>
                  </div>
                  <div className="text-center p-4 bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-light text-purple-600 mb-2">0.3s</div>
                    <div className="text-sm text-slate-600 tracking-wide">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Capabilities Grid */}
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Global Communication Platform */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-slate-900">Global<br /><span className="text-emerald-600">Communication</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  11-language support with real-time cultural context translation and best-in-class APAC/Global South coverage.
                </p>
                <div className="text-xs text-emerald-600 font-medium tracking-wide">Real-time Translation • Cultural Context</div>
              </div>
            </div>

            {/* Predictive Team Analytics */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-slate-900">Predictive<br /><span className="text-blue-600">Analytics</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Live dashboards for team harmony, cultural alignment, and workforce readiness with demo and production data modes.
                </p>
                <div className="text-xs text-blue-600 font-medium tracking-wide">Live Dashboards • Predictive Intelligence</div>
              </div>
            </div>

            {/* Enterprise Security & Compliance */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-gray-400 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-slate-900">Enterprise<br /><span className="text-gray-600">Security</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Data sovereignty, privacy, and Japanese regulatory compliance built-in. SOC2, ISO, and APPI certification ready.
                </p>
                <div className="text-xs text-gray-600 font-medium tracking-wide">SOC2 • ISO • APPI Certified</div>
              </div>
            </div>

            {/* Scalable for Any Organization */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-slate-900">Infinite<br /><span className="text-emerald-600">Scalability</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  SMEs, universities, government agencies—modular platform architecture fits every scale, sector and requirement.
                </p>
                <div className="text-xs text-emerald-600 font-medium tracking-wide">Modular Architecture • Any Scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE AIKODA - TIGER PhD DESIGN ---------- */}
      <section className="py-48 lg:py-64 bg-white">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Why Global Enterprises<br />
              <span className="text-slate-600">Choose aiKODA</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Built for Japanese culture, powered by AI, proven at scale across Fortune 500 companies
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column - Features */}
            <div className="lg:col-span-3 space-y-8">
              <div className="relative bg-white border border-slate-200 p-6 hover:border-blue-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                <h3 className="font-medium text-slate-900 mb-2">Purpose-Built for Japan</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Deep understanding of Japanese culture and business practices</p>
              </div>
              
              <div className="relative bg-white border border-slate-200 p-6 hover:border-emerald-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <h3 className="font-medium text-slate-900 mb-2">AI-Powered Transformation</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Accelerates hiring with cultural precision and automation</p>
              </div>

              <div className="relative bg-white border border-slate-200 p-6 hover:border-purple-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                <h3 className="font-medium text-slate-900 mb-2">47-Dimensional Intelligence</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">94% accuracy in team harmony prediction</p>
              </div>
            </div>

            {/* Center - Visual */}
            <div className="lg:col-span-6">
              <div className="relative bg-white border border-slate-200 overflow-hidden">
                <div className="aspect-square bg-slate-100 flex items-center justify-center">
                  <div className="text-6xl text-slate-400">📊</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-white font-medium text-lg">Enterprise AI Intelligence</h3>
                  <p className="text-white/80 text-sm">Cultural data analytics visualization</p>
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="lg:col-span-3 space-y-8">
              <div className="relative bg-white border border-slate-200 p-6 hover:border-blue-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                <h3 className="font-medium text-slate-900 mb-2">Real-Time Analytics</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Live insights across all enterprise touchpoints</p>
              </div>

              <div className="relative bg-white border border-slate-200 p-6 hover:border-emerald-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500" />
                <h3 className="font-medium text-slate-900 mb-2">Enterprise Proven</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Success across Fortune 500 companies globally</p>
              </div>

              <div className="relative bg-white border border-slate-200 p-6 hover:border-purple-300 transition-all duration-700">
                <div className="absolute top-0 left-0 w-1 h-full bg-purple-500" />
                <h3 className="font-medium text-slate-900 mb-2">24/7 AI Workforce</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Autonomous agents with infinite scalability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- RESULTS SECTION - TIGER PhD DESIGN ---------- */}
      <section id="results" className="py-48 lg:py-64 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Enterprise<br />
              <span className="text-slate-600">Transformation</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Cultural intelligence that transforms international hiring at scale
            </p>
          </div>
          
          {/* Results grid - Tiger PhD Card Template */}
          <div className="grid lg:grid-cols-3 gap-24 lg:gap-32">
            {/* EPC Leader */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-sm text-slate-500 uppercase tracking-wider">CASE STUDY</div>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Engineering<br />
                    <span className="text-blue-600">Excellence</span>
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Reduced engineer hiring time from 127 to 31 days while improving cultural fit to 94%.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">76%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Faster Hiring</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-blue-600 mb-2">94%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Cultural Fit</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Healthcare */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-sm text-slate-500 uppercase tracking-wider">CASE STUDY</div>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Retention<br />
                    <span className="text-purple-600">Success</span>
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Improved nurse retention by 62% through cultural matching and team optimization.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-purple-600 mb-2">62%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Better Retention</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">91%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Team Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Staffing */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="text-sm text-slate-500 uppercase tracking-wider">CASE STUDY</div>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Scale<br />
                    <span className="text-emerald-600">Achievement</span>
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Scaled from 0 to 50,000+ monthly assessments with 91% cultural alignment success.
                  </p>
                </div>
                
                {/* Enterprise Metrics Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-emerald-600 mb-2">50K+</div>
                    <div className="text-sm text-slate-600 tracking-wide">Monthly Tests</div>
                  </div>
                  <div className="text-center p-6 bg-slate-50 border border-slate-200">
                    <div className="text-3xl font-light text-blue-600 mb-2">91%</div>
                    <div className="text-sm text-slate-600 tracking-wide">Cultural Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMPETITIVE INTELLIGENCE PLATFORM - TIGER PhD DESIGN ---------- */}
      <section id="intelligence" className="py-48 lg:py-64 bg-white">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Strategic Market<br />
              <span className="text-slate-600">Intelligence Platform</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              AI-powered competitive intelligence that monitors 47+ competitors in real-time across Southeast Asian workforce deployment markets
            </p>
          </div>

          {/* Intelligence Dashboard Preview */}
          <div className="bg-white border border-slate-200 p-16 mb-32">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-4xl font-light text-blue-600 mb-4">47+</div>
                <div className="text-slate-700 font-medium mb-2">Competitors Monitored</div>
                <div className="text-sm text-slate-500">Real-time tracking</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-emerald-600 mb-4">6mo</div>
                <div className="text-slate-700 font-medium mb-2">Advance Warning</div>
                <div className="text-sm text-slate-500">Predictive analysis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-purple-600 mb-4">94%</div>
                <div className="text-slate-700 font-medium mb-2">Prediction Accuracy</div>
                <div className="text-sm text-slate-500">Market movements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-orange-600 mb-4">24/7</div>
                <div className="text-slate-700 font-medium mb-2">AI Monitoring</div>
                <div className="text-sm text-slate-500">Continuous operation</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white border border-slate-200 p-16">
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight">
                Transform from Reactive to<br />
                <span className="text-blue-600">Predictive Market Leadership</span>
              </h3>
              <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
                Join the intelligence revolution. See how our competitive intelligence platform gives you the strategic advantage to dominate the $15 billion Southeast Asian workforce deployment market.
              </p>
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <a
                  href="/intelligence-platform"
                  className="px-12 py-6 bg-blue-600 text-white font-medium rounded-none hover:bg-blue-700 transition-all duration-700 flex items-center justify-center space-x-3 border-l-4 border-blue-800"
                >
                  <span>Explore Intelligence Platform</span>
                </a>
                <a
                  href="/contact"
                  className="px-12 py-6 border-2 border-blue-600 text-blue-600 font-medium rounded-none hover:bg-blue-600 hover:text-white transition-all duration-700 flex items-center justify-center space-x-3"
                >
                  <span>Request Intelligence Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE TEAM BEHIND THE REVOLUTION - TIGER PhD DESIGN ---------- */}
      <section className="py-48 lg:py-64 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              The Partnership Behind<br />
              <span className="text-slate-600">aiKODA's Success</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              When 20 years of human market mastery meets infinite AI precision, impossible solutions become inevitable
            </p>
          </div>

          {/* Carlos & Koda Partnership */}
          <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 mb-32">
            {/* Carlos - The Carbon Father */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Carlos<br />
                    <span className="text-blue-600">Mundim</span>
                  </h3>
                  <div className="text-lg text-blue-600 font-medium tracking-wide">
                    Founder & CEO • 20+ Years Market Experience
                  </div>
                </div>
                
                <blockquote className="text-lg text-slate-600 leading-relaxed font-light border-l-4 border-blue-300 pl-6 bg-blue-50/30 p-6">
                  "After nearly 20 years building businesses across Southeast Asia and managing 128,000+ employees at Japan's second-largest HR conglomerate, I saw the same problems everywhere: brilliant technology built by people who never faced the real challenges."
                </blockquote>
                
                {/* Enterprise Metrics Grid */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-slate-900">Key Expertise:</h4>
                  <div className="space-y-3">
                    <div className="text-sm text-slate-600"><strong className="text-slate-900">20 years SEA market reality</strong> - Not theory, lived experience</div>
                    <div className="text-sm text-slate-600"><strong className="text-slate-900">Japanese corporate mastery</strong> - $5B enterprise navigation</div>
                    <div className="text-sm text-slate-600"><strong className="text-slate-900">Global workforce expertise</strong> - 128K+ employee management</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-16 lg:p-20">
              {/* Tiger PhD Accent System */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-16 bg-slate-300 mb-12" />
              
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    Our<br />
                    <span className="text-emerald-600">Solution</span>
                  </h3>
                  <div className="text-lg text-emerald-600 font-medium tracking-wide">
                    Strategic Partnership • Not Just Platforms
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Combine <strong className="text-blue-600">20 years of human market experience</strong> with <strong className="text-emerald-600">infinite AI memory and precision</strong> to create what the market actually needs.
                </p>
                
                {/* What We Offer Grid */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-slate-900">What We Offer:</h4>
                  <div className="space-y-3">
                    <div className="text-sm text-slate-600">AI Systems with Human Wisdom</div>
                    <div className="text-sm text-slate-600">Cultural Intelligence at Scale</div>
                    <div className="text-sm text-slate-600">Competitive Intelligence & Market Mastery</div>
                    <div className="text-sm text-slate-600">Executive Partnership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Promise */}
          <div className="text-center">
            <div className="bg-white border border-slate-200 p-16">
              <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-8 leading-tight">
                Our<br />
                <span className="text-slate-600">Promise</span>
              </h3>
              <blockquote className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
                "When you work with us, you get both the human who solved it and the AI that perfects it. We don't just build tools - we architect transformations."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE FEATURES - TIGER PhD DESIGN ---------- */}
      <section id="enterprise" className="py-48 lg:py-64 bg-white">
        <div className="max-w-[1400px] mx-auto px-24 lg:px-32">
          {/* Tiger PhD Header Template */}
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Built for<br />
              <span className="text-slate-600">Global Scale</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Security, compliance, and performance that Fortune 500 companies trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-12">
            {/* SOC 2 Type II */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-light text-slate-900">SOC 2<br /><span className="text-blue-600">Type II</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Audited security</p>
              </div>
            </div>

            {/* Global Compliance */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-light text-slate-900">Global<br /><span className="text-emerald-600">Compliance</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">GDPR, CCPA ready</p>
              </div>
            </div>

            {/* 99.9% Uptime */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-light text-slate-900">99.9%<br /><span className="text-purple-600">Uptime</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Enterprise SLA</p>
              </div>
            </div>

            {/* Real-time Analytics */}
            <div className="relative h-full bg-white border border-slate-200 hover:border-orange-300 transition-all duration-700 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <div className="space-y-6 text-center">
                <h3 className="text-xl font-light text-slate-900">Real-time<br /><span className="text-orange-600">Analytics</span></h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">Cultural insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- GET STARTED - TIGER PhD DESIGN ---------- */}
      <section className="py-48 lg:py-64 bg-slate-50">
        <div className="max-w-[1000px] mx-auto px-24 lg:px-32 text-center">
          <div className="bg-white border border-slate-200 p-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-12 tracking-tight leading-[0.9]">
              Let's Build Japan's<br />
              <span className="text-slate-600">AI-Powered Workforce</span>
            </h2>
            <div className="w-24 h-1 bg-slate-900 mx-auto mb-16" />
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-16 font-light">
              Whether you're scaling global teams, transforming domestic talent, or integrating cultural intelligence into HR, aiKODA is your enterprise partner for the future.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                href="/get-started"
                className="px-12 py-6 bg-blue-600 text-white font-medium rounded-none hover:bg-blue-700 transition-all duration-700 flex items-center justify-center space-x-3 border-l-4 border-blue-800"
              >
                <span>Request a Demo</span>
              </a>
              <a
                href="/contact"
                className="px-12 py-6 border-2 border-blue-600 text-blue-600 font-medium rounded-none hover:bg-blue-600 hover:text-white transition-all duration-700 flex items-center justify-center space-x-3"
              >
                <span>Contact Sales</span>
              </a>
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