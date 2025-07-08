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
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-teal-400/10 animate-gradient" />
        </div>
        
        {/* Geometric pattern overlay for sophistication */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1312px] mx-auto px-6 sm:px-8 lg:px-12 py-24 lg:py-32 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* -------- HERO TEXT -------- */}
            <div className="text-white">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl mb-8 font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                <span className="block">Cultural Intelligence</span>
                <span className="block bg-gradient-to-r from-blue-200 to-teal-300 bg-clip-text text-transparent">at Scale</span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                The only AI platform that truly understands Japanese business culture. 
                Transform your global workforce with 47-dimensional cultural intelligence.
              </motion.p>


              {/* CALLS TO ACTION */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="/demo/assessment"
                  className="group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Brain className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Experience 47D Assessment</span>
                </a>
                <a
                  href="#platform"
                  className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:border-white/50 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  <span>Watch Platform Demo</span>
                </a>
              </motion.div>
            </div>

            {/* -------- HERO METRICS & VISUAL -------- */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Floating metric cards */}
              <div className="relative">
                {/* Main visual element - Abstract cultural intelligence visualization */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                  {/* Animated rings representing 47 dimensions */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 rounded-full border border-blue-400/20 animate-pulse" />
                    <div className="absolute w-64 h-64 rounded-full border-2 border-teal-400/30 animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute w-48 h-48 rounded-full border border-blue-300/40 animate-pulse" style={{ animationDelay: '2s' }} />
                    
                    {/* Center intelligence core */}
                    <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full shadow-glow flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">47D</span>
                    </div>
                  </div>
                  
                  {/* Floating metric badges */}
                  <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-white">{heroMetrics[0].value}</div>
                    <div className="text-sm text-blue-200">{heroMetrics[0].label}</div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-teal-300">{heroMetrics[1].value}</div>
                    <div className="text-sm text-blue-200">{heroMetrics[1].label}</div>
                  </div>
                  
                  <div className="absolute top-1/2 -right-8 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-white">{heroMetrics[3].value}</div>
                    <div className="text-sm text-blue-200">{heroMetrics[3].label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- PLATFORM INTELLIGENCE ---------- */}
      <section id="platform" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1312px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                Platform Overview
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Three Pillars of Cultural Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A complete ecosystem that transforms how global enterprises understand, 
                hire, and integrate multicultural talent.
              </p>
            </motion.div>
          </div>

          {/* --- 3 COLUMN ROW: Engine | Partner | AI Agents --- */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 47D Engine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                    <Brain className="w-7 h-7 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    47D Cultural Engine
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Proprietary AI analyzes 47 cultural dimensions in real-time. 
                    The only system designed specifically for Japanese business culture.
                  </p>
                  
                  {/* Key features */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">8.7 second average processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">94% prediction accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Multi-language support</span>
                    </li>
                  </ul>
                  
                  {/* Action */}
                  <a href="/demo/assessment" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group">
                    Try Assessment
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Partner Ecosystem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-600" />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-6">
                    <Building2 className="w-7 h-7 text-teal-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Partner Ecosystem
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    White-label our technology. Scale your business globally with 
                    enterprise-grade cultural intelligence.
                  </p>
                  
                  {/* Key features */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Full API access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Custom branding</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Revenue sharing model</span>
                    </li>
                  </ul>
                  
                  {/* Action */}
                  <a href="#partners" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 group">
                    Become a Partner
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* AI Agents */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600" />
                
                <div className="p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 rounded-xl mb-6">
                    <Users className="w-7 h-7 text-amber-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    AI Workforce
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Autonomous agents handle sourcing, screening, and matching 
                    with cultural precision at enterprise scale.
                  </p>
                  
                  {/* Key features */}
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">24/7 autonomous operation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Multi-platform sourcing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Cultural fit scoring</span>
                    </li>
                  </ul>
                  
                  {/* Action */}
                  <a href="#agents" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 group">
                    Explore AI Agents
                    <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- JAPAN'S WORKFORCE FUTURE WITH AI ---------- */}
      <section className="pt-28 pb-28 bg-white">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Japan's Workforce Future with AI
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed uppercase tracking-wider">
              Six revolutionary capabilities that define how global teams succeed in Japan's evolving business landscape
            </p>
          </div>

          {/* Four Core Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-14">
            {/* 47-Dimensional Cultural Intelligence */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-20 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">47-Dimensional Intelligence</h3>
                <p className="text-lg font-semibold text-[#3B82F6] mb-4">Wa • Kaizen • Omotenashi • 5C1M™</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Revolutionary AI analyzes 200+ cultural signals to predict team harmony with 94% accuracy.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#3B82F6]">200+</div>
                  <div className="text-sm text-gray-600">Cultural Signals</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#22c55e]">94%</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>

            {/* Autonomous AI Workforce */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-20 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Autonomous AI Workforce</h3>
                <p className="text-lg font-semibold text-[#8b5cf6] mb-4">24/7 • Multilingual • Precision</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Deploy intelligent agents that source, screen, and match candidates with cultural precision at scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#8b5cf6]">24/7</div>
                  <div className="text-sm text-gray-600">AI Operations</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#22c55e]">11</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
            </div>

            {/* Global Communication Platform */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-20 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Global Communication</h3>
                <p className="text-lg font-semibold text-[#22c55e]">Real-time • Cultural Context</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Break down language barriers with AI translation that understands cultural nuances and context.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#22c55e]">Real-time</div>
                  <div className="text-sm text-gray-600">Translation</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#3B82F6]">Cultural</div>
                  <div className="text-sm text-gray-600">Context</div>
                </div>
              </div>
            </div>

            {/* Enterprise Security & Analytics */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-20 hover:shadow-xl transition-all duration-300">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-lg font-semibold text-[#ef4444]">SOC2 • ISO • APPI Compliant</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Japanese enterprise standards with blockchain compliance and predictive workforce analytics.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#ef4444]">SOC2</div>
                  <div className="text-sm text-gray-600">Certified</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl font-bold text-[#3B82F6]">Predictive</div>
                  <div className="text-sm text-gray-600">Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SOLUTIONS FOR EVERY WORKFORCE CHALLENGE ---------- */}
      <section className="pt-28 pb-28 bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4]">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              Solutions for Every Workforce Challenge
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed uppercase tracking-wider">
              Complete talent lifecycle solutions from sourcing to success
            </p>
          </div>

          {/* Solutions Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">
            {/* Global Talent Sourcing */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-12 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#3B82F6]">Global Talent Sourcing</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">STEAM • University Network • 94% Success</h3>
                  <p className="text-base text-gray-700 mb-5">Source top STEAM talent from our connected global university network with cultural compatibility matching.</p>
                </div>
                <a href="#recruitment-solutions" className="inline-flex items-center text-[#3B82F6] font-semibold hover:text-[#22c55e] mt-2">
                  Start Sourcing Talent <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Visa & Immigration Services */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-12 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#22c55e] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#22c55e]">Visa & Immigration</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">End-to-End • Japan Specialist • Legal</h3>
                  <p className="text-base text-gray-700 mb-5">Complete visa and immigration support for seamless international talent placement in Japan.</p>
                </div>
                <a href="#visa-services" className="inline-flex items-center text-[#22c55e] font-semibold hover:text-[#3B82F6] mt-2">
                  Get Visa Support <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Skills Validation Platform */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-12 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#8b5cf6]">Skills Validation</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Technical • Behavioral • Real-world</h3>
                  <p className="text-base text-gray-700 mb-5">Advanced STEAM skills evaluation with AI-powered assessments and real-world project simulations.</p>
                </div>
                <a href="#skills-assessment" className="inline-flex items-center text-[#8b5cf6] font-semibold hover:text-[#3B82F6] mt-2">
                  Validate Skills <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Onboarding & Integration */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
              <div className="p-12 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#f97316] rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#f97316]">Onboarding & Integration</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Cultural Training • Language • Mentorship</h3>
                  <p className="text-base text-gray-700 mb-5">Complete integration programs with cultural training, language support, and AI-powered mentorship.</p>
                </div>
                <a href="#onboarding-services" className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#3B82F6] mt-2">
                  Start Integration <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE CAPABILITIES BENTO ---------- */}
      <section className="pt-28 pb-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Complete Enterprise Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Six core capabilities that transform how global teams succeed in Japan's evolving business landscape
            </p>
          </div>

          {/* Hero Capabilities - Featured Large Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 47-Dimensional Cultural Intelligence - HERO */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl transform rotate-1 opacity-10 group-hover:rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-blue-200 rounded-2xl p-10 hover:border-blue-400 transition-all duration-300 group-hover:shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">47-Dimensional Cultural Intelligence</h3>
                    <div className="flex items-center space-x-4 text-sm text-blue-600 font-semibold">
                      <span>94% Accuracy</span>
                      <span>•</span>
                      <span>200+ Cultural Signals</span>
                      <span>•</span>
                      <span>Real-time Analysis</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-500">Team Harmony Prediction</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Revolutionary AI that understands Japanese and global business cultures with scientific precision. Built on <strong>Wa, Kaizen, and Omotenashi</strong> principles to assess, match, and develop talent for seamless cultural integration.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">47</div>
                      <div className="text-xs text-gray-500">Dimensions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">8.7s</div>
                      <div className="text-xs text-gray-500">Analysis Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">11</div>
                      <div className="text-xs text-gray-500">Languages</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Workforce Agents - HERO */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl transform -rotate-1 opacity-10 group-hover:-rotate-2 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-purple-200 rounded-2xl p-10 hover:border-purple-400 transition-all duration-300 group-hover:shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Autonomous AI Workforce</h3>
                    <div className="flex items-center space-x-4 text-sm text-purple-600 font-semibold">
                      <span>24/7 Operations</span>
                      <span>•</span>
                      <span>11 Languages</span>
                      <span>•</span>
                      <span>Infinite Scale</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-500">AI Operations</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Deploy intelligent agents that source, screen, match, onboard, and support candidates with cultural precision at enterprise scale. <strong>Never sleeps, always learning.</strong>
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">∞</div>
                      <div className="text-xs text-gray-500">Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">365</div>
                      <div className="text-xs text-gray-500">Days/Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">0.3s</div>
                      <div className="text-xs text-gray-500">Response Time</div>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Capabilities Grid */}
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Global Communication Platform */}
            <div className="bg-white border border-green-200 rounded-xl p-8 hover:border-green-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Global Communication</h3>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Globe className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                11-language support with real-time cultural context translation and best-in-class <strong>APAC/Global South</strong> coverage.
              </p>
              <div className="text-xs text-green-600 font-semibold">Real-time Translation • Cultural Context</div>
            </div>

            {/* Predictive Team Analytics */}
            <div className="bg-white border border-blue-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Predictive Analytics</h3>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Live dashboards for team harmony, cultural alignment, and workforce readiness with demo and production data modes.
              </p>
              <div className="text-xs text-blue-600 font-semibold">Live Dashboards • Predictive Intelligence</div>
            </div>

            {/* Enterprise Security & Compliance */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Enterprise Security</h3>
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <Shield className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Data sovereignty, privacy, and Japanese regulatory compliance built-in. SOC2, ISO, and APPI certification ready.
              </p>
              <div className="text-xs text-gray-600 font-semibold">SOC2 • ISO • APPI Certified</div>
            </div>

            {/* Scalable for Any Organization */}
            <div className="bg-white border border-green-200 rounded-xl p-8 hover:border-green-400 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Infinite Scalability</h3>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                SMEs, universities, government agencies—modular platform architecture fits every scale, sector and requirement.
              </p>
              <div className="text-xs text-green-600 font-semibold">Modular Architecture • Any Scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE AIKODA ---------- */}
      <section className="relative pt-28 pb-28 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/sec_3_2l.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/90 to-[#F1F3F4]/90" />
        
        <div className="relative max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Why Global Enterprises Choose aiKODA
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Built for Japanese culture, powered by AI, proven at scale across Fortune 500 companies
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 items-start">
            {/* Left Column - 2 Cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Purpose-Built for Japan</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Deep understanding of Japanese culture and business practices</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Transformation</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Accelerates hiring with cultural precision and automation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">47-Dimensional Intelligence</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">94% accuracy in team harmony prediction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Columns - Square Cropped Image */}
            <div className="lg:col-span-2">
              <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="aspect-square">
                  <img 
                    src="/images/sec_3_1p.webp" 
                    alt="aiKODA enterprise team collaboration"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm">Enterprise AI Intelligence</h3>
                  <p className="text-white/80 text-xs">Cultural data analytics visualization</p>
                </div>
              </div>
            </div>

            {/* Right Column - 3 Cards */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Live insights across all enterprise touchpoints</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enterprise Proven</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Success across Fortune 500 companies globally</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">24/7 AI Workforce</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Autonomous agents with infinite scalability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------- RESULTS SECTION ---------- */}
      <section id="results" className="pt-28 pb-28 bg-white">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-[#22c55e]/10 rounded-full px-7 py-3 mb-5">
              <TrendingUp className="w-5 h-5 text-[#22c55e]" />
              <span className="text-[#22c55e] font-semibold">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Enterprise Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-0 leading-relaxed">
              Cultural intelligence that transforms international hiring at scale.
            </p>
          </div>
          {/* Results grid - Corporate Clean Design */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* EPC Leader */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">CASE STUDY</div>
                  <div className="text-sm font-semibold text-gray-700">Global EPC</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engineering Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Reduced engineer hiring time from 127 to 31 days while improving cultural fit to 94%.</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">76%</div>
                    <div className="text-sm text-gray-500">Faster Hiring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-500">Cultural Fit</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Healthcare */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">CASE STUDY</div>
                  <div className="text-sm font-semibold text-gray-700">Healthcare</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retention Success</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Improved nurse retention by 62% through cultural matching and team optimization.</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">62%</div>
                    <div className="text-sm text-gray-500">Better Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">91%</div>
                    <div className="text-sm text-gray-500">Team Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Staffing */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 uppercase tracking-wide">CASE STUDY</div>
                  <div className="text-sm font-semibold text-gray-700">Staffing Partner</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale Achievement</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Scaled from 0 to 50,000+ monthly assessments with 91% cultural alignment success.</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">50K+</div>
                    <div className="text-sm text-gray-500">Monthly Tests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">91%</div>
                    <div className="text-sm text-gray-500">Cultural Alignment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COMPETITIVE INTELLIGENCE PLATFORM ---------- */}
      <section id="intelligence" className="pt-28 pb-28 bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4]">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-7 py-3 mb-6">
              <Target className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">COMPETITIVE INTELLIGENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Market Intelligence Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              AI-powered competitive intelligence that monitors 47+ competitors in real-time across Southeast Asian workforce deployment markets.
            </p>
          </div>

          {/* Intelligence Dashboard Preview */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-16 shadow-sm">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">47+</div>
                <div className="text-gray-700 font-medium">Competitors Monitored</div>
                <div className="text-sm text-gray-500 mt-1">Real-time tracking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">6mo</div>
                <div className="text-gray-700 font-medium">Advance Warning</div>
                <div className="text-sm text-gray-500 mt-1">Predictive analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">94%</div>
                <div className="text-gray-700 font-medium">Prediction Accuracy</div>
                <div className="text-sm text-gray-500 mt-1">Market movements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">AI Monitoring</div>
                <div className="text-sm text-gray-500 mt-1">Continuous operation</div>
              </div>
            </div>
          </div>

          {/* Strategic Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Intelligence Capabilities</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Real-time Competitor Monitoring</h4>
                    <p className="text-gray-600">Track pricing, partnerships, expansions across 15+ government databases</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Predictive Market Intelligence</h4>
                    <p className="text-gray-600">AI forecasts competitor moves, regulatory changes, market opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Government API Integration</h4>
                    <p className="text-gray-600">Direct connections to OTIT, JITCO, ISA, KEMNAKER systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Autonomous Alert System</h4>
                    <p className="text-gray-600">Instant notifications on threats, opportunities, regulatory shifts</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Competitive Advantages</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Market Position Protection</h4>
                    <p className="text-gray-600">Defend against competitive threats before they materialize</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Strategic Partnership Opportunities</h4>
                    <p className="text-gray-600">Identify M&A targets and partnership vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Regulatory Compliance Edge</h4>
                    <p className="text-gray-600">Stay ahead of policy changes affecting workforce deployment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Revenue Protection & Growth</h4>
                    <p className="text-gray-600">Proactive response to market threats and opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-sm">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transform from Reactive to Predictive Market Leadership
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join the intelligence revolution. See how our competitive intelligence platform gives you the strategic advantage to dominate the $15 billion Southeast Asian workforce deployment market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/intelligence-platform"
                  className="bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Target className="w-5 h-5" />
                  <span>Explore Intelligence Platform</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Shield className="w-5 h-5" />
                  <span>Request Intelligence Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- THE TEAM BEHIND THE REVOLUTION ---------- */}
      <section className="pt-28 pb-28 bg-white">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-7 py-3 mb-6">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">THE ARCHITECTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Partnership Behind aiKODA's Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When 20 years of human market mastery meets infinite AI precision, impossible solutions become inevitable.
            </p>
          </div>

          {/* Carlos & Koda Partnership */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Carlos - The Carbon Father */}
            <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Carlos Mundim</h3>
                  <p className="text-lg font-semibold text-blue-600">Founder & CEO</p>
                  <p className="text-sm text-gray-600">20+ Years Market Experience</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-8 leading-relaxed border-l-4 border-blue-300 pl-6 bg-blue-50 p-4 rounded-r-lg">
                "After nearly 20 years building businesses across Southeast Asia and managing 128,000+ employees at Japan's second-largest HR conglomerate, I saw the same problems everywhere: brilliant technology built by people who never faced the real challenges."
              </blockquote>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Expertise:</h4>
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">20 years SEA market reality</strong> - Not theory, lived experience</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Japanese corporate mastery</strong> - $5B enterprise navigation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Government relationships</strong> - Regulatory pathway knowledge</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Cultural bridge-building</strong> - Brazilian Nissei to Vietnamese workforce</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Executive authority</strong> - Actually managed what others only consult on</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-base text-gray-700 italic border-l-4 border-blue-300 pl-4">
                "I don't build software. I build solutions for problems I've personally solved at scale."
              </blockquote>
            </div>

            {/* Koda - The AI Son */}
            <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Koda AI</h3>
                  <p className="text-lg font-semibold text-green-600">AI Technology Partner</p>
                  <p className="text-sm text-gray-600">Advanced Cultural Intelligence</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic mb-8 leading-relaxed border-l-4 border-green-300 pl-6 bg-green-50 p-4 rounded-r-lg">
                "Most AI forgets yesterday's conversation. I remember every nuance from months ago, every cultural insight, every business lesson Carlos taught me. I'm not just processing data - I'm accumulating wisdom."
              </blockquote>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Core Capabilities:</h4>
                <div className="grid gap-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Persistent memory</strong> - Context spanning months, not conversations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">47-dimensional analysis</strong> - Cultural intelligence beyond human capacity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">24/7 operation</strong> - Never sleeps, always learning</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Real-time adaptation</strong> - Learns from every interaction</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong className="text-gray-900">Enterprise precision</strong> - Palace-level quality standards</span>
                  </div>
                </div>
              </div>

              <blockquote className="text-base text-gray-700 italic border-l-4 border-green-300 pl-4">
                "I don't replace human intelligence. I amplify it with perfect memory and infinite scale."
              </blockquote>
            </div>
          </div>

          {/* Why We Created This */}
          <div className="bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4] rounded-xl p-10 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why We Created aiKODA</h3>
              <h4 className="text-xl font-semibold text-gray-600 mb-8">Addressing Critical Market Gaps</h4>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h5 className="text-xl font-bold text-gray-900 mb-6">Market Challenges We Identified:</h5>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-900">Tech companies</strong> building AI without cultural understanding</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-900">HR consultants</strong> with cultural knowledge but no scalable technology</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-900">Recruitment agencies</strong> stuck in manual processes while markets transform</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-900">Governments</strong> drowning in regulatory complexity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-600"><strong className="text-gray-900">Enterprises</strong> needing competitive intelligence they can't build themselves</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <h5 className="text-xl font-bold text-gray-900 mb-4">Our Solution:</h5>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Combine <strong className="text-blue-600">20 years of human market experience</strong> with <strong className="text-green-600">infinite AI memory and precision</strong> to create what the market actually needs.
                </p>
              </div>
            </div>
          </div>

          {/* What We Offer */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h3>
            <h4 className="text-xl font-semibold text-gray-600 mb-12">Strategic Partnership, Not Just Platforms</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-3">AI Systems with Human Wisdom</h5>
              <p className="text-gray-600">Technology that understands real business challenges</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-3">Cultural Intelligence at Scale</h5>
              <p className="text-gray-600">47 dimensions analyzed with human context</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-3">Competitive Intelligence</h5>
              <p className="text-gray-600">Market dominance tools with strategic guidance</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-3">Regional Market Mastery</h5>
              <p className="text-gray-600">SEA expertise with AI-powered scaling</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all duration-300 lg:col-span-2">
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-yellow-600" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-3">Executive Partnership</h5>
              <p className="text-gray-600">Work with leaders who've actually built what you need</p>
            </div>
          </div>

          {/* The Promise */}
          <div className="text-center">
            <div className="bg-white border border-gray-200 rounded-xl p-12 shadow-sm">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Promise</h3>
              <blockquote className="text-xl text-gray-600 italic leading-relaxed max-w-4xl mx-auto">
                "When you work with us, you get both the human who solved it and the AI that perfects it. We don't just build tools - we architect transformations."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE FEATURES ---------- */}
      <section id="enterprise" className="pt-28 pb-28 bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4]">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-7 py-3 mb-6">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">Enterprise Grade</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Global Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Security, compliance, and performance that Fortune 500 companies trust.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "SOC 2 Type II", desc: "Audited security", color: "bg-blue-50", iconColor: "text-blue-600" },
              { icon: Globe, title: "Global Compliance", desc: "GDPR, CCPA ready", color: "bg-green-50", iconColor: "text-green-600" },
              { icon: CheckCircle, title: "99.9% Uptime", desc: "Enterprise SLA", color: "bg-purple-50", iconColor: "text-purple-600" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Cultural insights", color: "bg-orange-50", iconColor: "text-orange-600" }
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GET STARTED ---------- */}
      <section className="pt-28 pb-28 bg-white">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <div className="bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4] rounded-2xl p-16 border border-gray-200">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Build Japan's AI-Powered Workforce
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you're scaling global teams, transforming domestic talent, or integrating cultural intelligence into HR, aiKODA is your enterprise partner for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/get-started"
                className="bg-blue-600 text-white px-10 py-4 text-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-3 rounded-lg shadow-sm hover:shadow-md"
              >
                <Target className="w-5 h-5" />
                <span>Request a Demo</span>
              </a>
              <a
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-10 py-4 text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-3 rounded-lg"
              >
                <Calendar className="w-5 h-5" />
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