'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Building2, 
  Users, 
  BarChart3, 
  Shield, 
  Globe, 
  CheckCircle, 
  TrendingUp,
  Target,
  ArrowRight,
  Play,
  ChevronDown,
  Star
} from 'lucide-react';
import Footer from '@/components/common/Footer';

const LandingPageMastery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotating metrics for hero section
  const heroMetrics = [
    { value: "95%", label: "Cultural Accuracy", color: "text-[#B1D8FC]" },
    { value: "10s", label: "Assessment Time", color: "text-[#22c55e]" },
    { value: "50+", label: "Countries", color: "text-[#B1D8FC]" },
    { value: "24/7", label: "AI Processing", color: "text-[#22c55e]" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % heroMetrics.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans overflow-hidden">
      {/* Navigation - Enterprise Authority */}
      <nav className={`fixed top-0 w-full backdrop-blur-lg border-b z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 border-gray-200 shadow-xl' : 'bg-white/90 border-gray-100'
      }`}>
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Cultural Intelligence Badge */}
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#032D60] to-[#22c55e] rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#032D60]">aiKODA</div>
                <div className="text-xs text-gray-500 -mt-1">Cultural Intelligence</div>
              </div>
            </motion.div>

            {/* Navigation Links - Palace Spacing */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#platform" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Platform</a>
              <a href="#intelligence" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Intelligence</a>
              <a href="#results" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Results</a>
              <a href="#enterprise" className="text-gray-600 hover:text-[#032D60] transition-colors duration-300 font-medium">Enterprise</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-medium flex items-center space-x-2"
                style={{ borderRadius: '200px' }}
              >
                <Play className="w-4 h-4" />
                <span>Live Demo</span>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Imperial Scale */}
      <section className="relative pt-48 pb-32 bg-gradient-to-br from-[#032D60] via-[#1a365d] to-[#1B1B1B]">
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 0h40v2L40 2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1312px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Authority Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              {/* Authority Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8"
              >
                <Star className="w-4 h-4 text-[#22c55e]" />
                <span className="text-sm font-medium">Trusted by Fortune 500 Companies</span>
              </motion.div>

              {/* Main Headlines */}
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-[0.95]">
                <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  We Solve What
                </div>
                <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                  Others Can't
                </div>
              </h1>

              <h2 className="text-3xl md:text-4xl mb-8 text-gray-200 font-light">
                47-Dimensional Cultural Intelligence
              </h2>

              <p className="text-xl text-gray-300 mb-12 max-w-lg leading-relaxed">
                The first AI platform built specifically for Japanese business culture - now scaling globally with enterprise precision.
              </p>

              {/* Imperial CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#22c55e] text-white px-12 py-5 text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
                  style={{ borderRadius: '200px' }}
                >
                  <Target className="w-5 h-5" />
                  <span>Cultural Assessment</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-12 py-5 text-lg font-semibold hover:bg-white hover:text-[#032D60] transition-all duration-300 flex items-center justify-center space-x-3"
                  style={{ borderRadius: '200px' }}
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right: Dynamic Metrics Display */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating Metrics Cards */}
              <div className="relative h-96">
                {heroMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: activeMetric === index ? 1 : 0.3,
                      scale: activeMetric === index ? 1 : 0.9,
                      x: activeMetric === index ? 0 : (index - activeMetric) * 20,
                      y: activeMetric === index ? 0 : (index - activeMetric) * 10
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20"
                  >
                    <div className="text-center">
                      <div className={`text-5xl font-bold mb-4 ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-lg text-gray-300">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cultural Intelligence Visualization */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-[#22c55e]/20 to-[#B1D8FC]/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 text-center"
            >
              <div className="text-sm mb-2">Discover the Platform</div>
              <ChevronDown className="w-6 h-6 mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Intelligence Section - Palace Architecture */}
      <section id="platform" className="py-32 bg-gradient-to-b from-[#FFFBF4] to-white">
        <div className="max-w-[1312px] mx-auto px-12">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-2 bg-[#032D60]/5 rounded-full px-6 py-3 mb-8">
              <Brain className="w-5 h-5 text-[#032D60]" />
              <span className="text-[#032D60] font-medium">47-Dimensional Intelligence</span>
            </div>
            
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Beyond Traditional Assessment
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Four integrated systems that solve what others can't
            </p>
          </motion.div>

          {/* Intelligence Grid - Imperial Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cultural Intelligence Engine */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#032D60] to-[#B1D8FC] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                47-Dimensional Engine
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                AI that understands Japanese business culture with scientific precision. 47 cultural dimensions analyzed in 10 seconds.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-[#032D60]">95%</div>
                <div className="text-sm text-gray-500">Cultural accuracy across 50+ countries</div>
              </div>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-[#032D60] font-semibold hover:text-[#22c55e] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Explore Intelligence</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* White-Label Partner Platform */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#22c55e] to-[#10b981] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Partner Ecosystem
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Deploy our cultural intelligence under your brand. Complete solution for agencies expanding into global markets.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-[#22c55e]">200+</div>
                <div className="text-sm text-gray-500">Active partner agencies worldwide</div>
              </div>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-[#22c55e] font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* AI Recruiter Agents */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Autonomous AI Agents
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                24/7 agents that source, screen, and match candidates with cultural precision no human recruiter can achieve.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-500">Continuous intelligent sourcing</div>
              </div>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-purple-600 font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>See Agents Work</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Enterprise Analytics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Predictive Analytics
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Real-time dashboards with cultural insights, predictive retention analytics, and ROI optimization.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl font-bold text-orange-500">87%</div>
                <div className="text-sm text-gray-500">Prediction accuracy for cultural fit</div>
              </div>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-orange-500 font-semibold hover:text-[#032D60] transition-colors duration-300 flex items-center space-x-2"
              >
                <span>View Analytics</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Platform CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(3, 45, 96, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#032D60] text-white px-12 py-5 text-lg font-semibold hover:shadow-2xl transition-all duration-300 mr-8"
              style={{ borderRadius: '200px' }}
            >
              Explore Complete Platform
            </motion.button>
            
            <motion.button 
              whileHover={{ x: 5 }}
              className="text-[#032D60] font-semibold hover:text-[#22c55e] transition-colors duration-300 text-lg inline-flex items-center space-x-2"
            >
              <span>API Documentation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Results Section - Imperial Success Stories */}
      <section id="results" className="py-32 bg-white">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-2 bg-[#22c55e]/5 rounded-full px-6 py-3 mb-8">
              <TrendingUp className="w-5 h-5 text-[#22c55e]" />
              <span className="text-[#22c55e] font-medium">Proven Results</span>
            </div>
            
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Enterprise Transformation
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cultural intelligence that transforms international hiring at scale
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            {/* Global EPC Leader */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#032D60] to-[#1B1B1B] text-white p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Building2 className="w-8 h-8 text-[#B1D8FC]" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Global EPC Leader</h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Reduced specialized engineer hiring time from 127 to 31 days while improving cultural fit to 94%.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-[#22c55e]">76%</div>
                  <div className="text-blue-200">Faster hiring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#B1D8FC]">94%</div>
                  <div className="text-blue-200">Cultural fit score</div>
                </div>
              </div>
            </motion.div>

            {/* Healthcare Network */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-purple-100" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Healthcare Network</h3>
              <p className="text-purple-100 mb-8 leading-relaxed">
                Improved nurse retention by 62% through cultural matching and team optimization.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-white">62%</div>
                  <div className="text-purple-200">Better retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-200">91%</div>
                  <div className="text-purple-200">Team satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* Staffing Partner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#22c55e] to-emerald-600 text-white p-12 rounded-3xl"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-green-100" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Staffing Partner</h3>
              <p className="text-green-100 mb-8 leading-relaxed">
                Scaled from 0 to 50,000+ monthly assessments with 91% cultural alignment success.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-white">50K+</div>
                  <div className="text-green-200">Monthly assessments</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-200">91%</div>
                  <div className="text-green-200">Cultural alignment</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="enterprise" className="py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Enterprise Grade</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Built for Global Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Security, compliance, and performance that Fortune 500 companies trust
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: Shield, title: "SOC 2 Type II", desc: "Audited security" },
              { icon: Globe, title: "Global Compliance", desc: "GDPR, CCPA ready" },
              { icon: CheckCircle, title: "99.9% Uptime", desc: "Enterprise SLA" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Cultural insights" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Palace Grandeur */}
      <section className="py-32 bg-gradient-to-r from-[#032D60] via-[#1a365d] to-[#22c55e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">
              Ready to Transform Global Hiring?
            </h2>
            <p className="text-2xl mb-16 opacity-90 leading-relaxed max-w-2xl mx-auto">
              Join us as partners, not just clients. Let's solve what others can't.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#032D60] px-12 py-5 text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
                style={{ borderRadius: '200px' }}
              >
                <Target className="w-5 h-5" />
                <span>Start Cultural Assessment</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-5 text-lg font-bold hover:bg-white hover:text-[#032D60] transition-all duration-300 flex items-center space-x-3"
                style={{ borderRadius: '200px' }}
              >
                <Play className="w-5 h-5" />
                <span>Schedule Demo</span>
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

export default LandingPageMastery;