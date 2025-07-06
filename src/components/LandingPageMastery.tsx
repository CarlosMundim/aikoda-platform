'use client';

import React, { useState, useEffect } from 'react';
import '../styles/palace-spacing.css';
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
import Header from './Header';
import Footer from './Footer';

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
      {/* Header Component */}
      <Header />

      {/* Hero Section - Solid Blue Gradient */}
      <section 
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)'
        }}
      >
        {/* Sophisticated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 0h40v2L40 2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1312px] mx-auto px-8 py-40">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Left: Authority Content - 65% */}
            <div className="text-white lg:col-span-3">
              {/* Main Headlines - Consistent Weight */}
              <h1 className="text-5xl md:text-6xl mb-6 leading-[0.95]">
                <div className="text-white font-medium mb-2">
                  We Solve What
                </div>
                <div className="text-white font-medium">
                  Others Can't
                </div>
              </h1>

              <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 font-light">
                47-Dimensional Cultural Intelligence
              </h2>

              <p className="text-lg text-gray-300 mb-32 max-w-lg leading-relaxed">
                The first AI platform built specifically for Japanese business culture - now scaling globally with enterprise precision.
              </p>

              {/* Aesthetic Perfection CTAs */}
              <div className="flex flex-col sm:flex-row gap-24">
                <button 
                  className="group bg-[#22c55e] text-white px-6 py-2 text-sm font-medium border border-[#22c55e] rounded-md hover:bg-[#16a34a] hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Target className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Cultural Assessment</span>
                </button>
                
                <button 
                  className="group border border-white text-white px-6 py-2 text-sm font-medium rounded-md hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Right: Matrix-Style Floating Image - 35% */}
            <div className="relative lg:col-span-2">
              {/* Versailles Floating Image */}
              <div 
                className="relative rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                style={{
                  filter: `
                    drop-shadow(0 35px 60px rgba(37, 99, 235, 0.4)) 
                    drop-shadow(0 20px 40px rgba(59, 130, 246, 0.3))
                    drop-shadow(0 8px 25px rgba(96, 165, 250, 0.2))
                  `,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(147, 197, 253, 0.2)'
                }}
              >
                <div className="aspect-square">
                  <img 
                    src="/images/hero_lp.webp" 
                    alt="Professional diverse team collaborating with cultural intelligence"
                    className="w-full h-full object-cover"
                    style={{
                      filter: 'brightness(1.15) contrast(1.1) saturate(1.25)'
                    }}
                  />
                </div>
              </div>

              {/* Versailles Blue Ambient Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/25 via-blue-400/30 to-blue-600/25 rounded-3xl blur-2xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/40 rounded-full blur-3xl"></div>
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-blue-400/35 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-600/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Intelligence Section - Palace Architecture */}
      <section id="platform" className="bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4] pt-16 pb-16">
        <div className="max-w-[1312px] mx-auto px-12">
          {/* Section Header - Enterprise Spacing */}
          <div className="text-center">
            <h2 className="mt-12 mb-5 text-4xl md:text-5xl font-medium text-gray-900 leading-tight">
              Beyond Traditional Assessment
            </h2>
            <p className="mt-4 mb-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed uppercase tracking-wide">
              FOUR INTEGRATED SYSTEMS THAT SOLVE WHAT OTHERS CAN'T
            </p>
          </div>
          
          <div className="my-20"></div>

          {/* First Row - Image Left, Card Right */}
          <div className="grid grid-cols-2 gap-10">
            {/* Left: Corporate Monalisa Image */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden h-full min-h-[500px]">
                <img 
                  src="/images/section_1_fp.webp" 
                  alt="aiKODA corporate team collaboration in Tokyo office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Right: 47D Engine Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div style={{ padding: '32px' }}>
                <div className="flex flex-col justify-between h-full min-h-[500px]">
                  {/* Content Section */}
                  <div>
                    {/* Icon + Badge */}
                    <div className="flex items-center space-x-3 mb-9">
                      <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#3B82F6]">aiKODA</div>
                        <div className="text-xs text-gray-500 -mt-1">Cultural Intelligence</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#3B82F6] mb-4 leading-tight">
                      47-Dimensional Engine
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      AI that understands Japanese business culture with scientific precision. 47 cultural dimensions analyzed in 10 seconds.
                    </p>
                    
                    {/* Stats */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#3B82F6] mb-1">95%</div>
                      <div className="text-lg font-medium text-gray-700">Cultural Accuracy</div>
                      <div className="text-base text-gray-500 mt-1">Across 50+ countries worldwide</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <button className="text-[#3B82F6] font-semibold text-lg hover:text-[#22c55e] transition-colors duration-300 flex items-center space-x-2 group">
                      <span>Explore Intelligence</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row - Two Cards 50/50 Bento */}
          <div className="grid grid-cols-2 gap-10 mt-10">
            {/* Left Card - Partner Ecosystem */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div style={{ padding: '32px' }}>
                <div className="flex flex-col justify-between h-full min-h-[400px]">
                  {/* Content Section */}
                  <div>
                    {/* Icon + Badge */}
                    <div className="flex items-center space-x-3 mb-9">
                      <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#22c55e]">aiKODA</div>
                        <div className="text-xs text-gray-500 -mt-1">Partner Network</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#22c55e] mb-4 leading-tight">
                      Partner Ecosystem
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Deploy our cultural intelligence under your brand. Complete solution for agencies expanding into global markets.
                    </p>
                    
                    {/* Stats */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#22c55e] mb-1">200+</div>
                      <div className="text-lg font-medium text-gray-700">Active Partners</div>
                      <div className="text-base text-gray-500 mt-1">Worldwide agencies</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <button className="text-[#22c55e] font-semibold text-lg hover:text-[#3B82F6] transition-colors duration-300 flex items-center space-x-2 group">
                      <span>Partner With Us</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card - AI Agents */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div style={{ padding: '32px' }}>
                <div className="flex flex-col justify-between h-full min-h-[400px]">
                  {/* Content Section */}
                  <div>
                    {/* Icon + Badge */}
                    <div className="flex items-center space-x-3 mb-9">
                      <div className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#8b5cf6]">aiKODA</div>
                        <div className="text-xs text-gray-500 -mt-1">AI Workforce</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#8b5cf6] mb-4 leading-tight">
                      Autonomous AI Agents
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      24/7 agents that source, screen, and match candidates with cultural precision.
                    </p>
                    
                    {/* Stats */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#8b5cf6] mb-1">24/7</div>
                      <div className="text-lg font-medium text-gray-700">Always Active</div>
                      <div className="text-base text-gray-500 mt-1">Continuous processing</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <button className="text-[#8b5cf6] font-semibold text-lg hover:text-[#3B82F6] transition-colors duration-300 flex items-center space-x-2 group">
                      <span>See Agents</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Row - Analytics Card Left, Visual Placeholder Right */}
          <div className="grid grid-cols-2 gap-10 mt-10">
            {/* Left Card - Predictive Analytics */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div style={{ padding: '32px' }}>
                <div className="flex flex-col justify-between h-full min-h-[400px]">
                  {/* Content Section */}
                  <div>
                    {/* Icon + Badge */}
                    <div className="flex items-center space-x-3 mb-9">
                      <div className="w-10 h-10 bg-[#f97316] rounded-full flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#f97316]">aiKODA</div>
                        <div className="text-xs text-gray-500 -mt-1">Analytics Engine</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#f97316] mb-4 leading-tight">
                      Predictive Analytics
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Real-time dashboards with cultural insights, predictive retention analytics, and ROI optimization.
                    </p>
                    
                    {/* Stats */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-[#f97316] mb-1">87%</div>
                      <div className="text-lg font-medium text-gray-700">Prediction Accuracy</div>
                      <div className="text-base text-gray-500 mt-1">Cultural fit predictions</div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="mt-auto">
                    <button className="text-[#f97316] font-semibold text-lg hover:text-[#3B82F6] transition-colors duration-300 flex items-center space-x-2 group">
                      <span>View Analytics</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Dashboard Visualization Placeholder */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 border border-gray-100 overflow-hidden">
              <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-[#f97316] mb-2">Analytics Dashboard</h4>
                  <p className="text-sm text-gray-600 max-w-xs">
                    <strong>Image Prompt:</strong> "Modern analytics dashboard showing cultural intelligence metrics, diversity charts, real-time data visualizations, clean UI with blue and orange accents, professional SaaS interface"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Prompts Guide */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">🎨 Image Prompts for Missing Visuals:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="font-bold text-[#22c55e] mb-2">💚 Partner Ecosystem Visual</h4>
                <p className="text-sm text-gray-600">"Global network visualization showing connected nodes across world map, partnership handshakes, agency collaboration, clean modern design with green accents, professional SaaS style"</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h4 className="font-bold text-[#8b5cf6] mb-2">💜 AI Agents Visualization</h4>
                <p className="text-sm text-gray-600">"Futuristic AI robots working 24/7, candidate screening interface, automation in action, purple neon accents, sci-fi professional aesthetic, digital workforce"</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-orange-200">
                <h4 className="font-bold text-[#f97316] mb-2">🧡 Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">"Modern analytics dashboard showing cultural intelligence metrics, diversity charts, real-time data visualizations, clean UI with blue and orange accents, professional SaaS interface"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Imperial Success Stories */}
      <section id="results" className="pt-16 pb-16 bg-white">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-[#22c55e]/5 rounded-full px-6 py-3 mb-4">
              <TrendingUp className="w-5 h-5 text-[#22c55e]" />
              <span className="text-[#22c55e] font-medium">Proven Results</span>
            </div>
            
            <h2 className="mt-12 mb-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Enterprise Transformation
            </h2>
            <p className="mt-4 mb-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cultural intelligence that transforms international hiring at scale
            </p>
          </div>
          
          <div className="my-20"></div>

          {/* Results Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Global EPC Leader */}
            <div className="bg-gradient-to-br from-[#032D60] to-[#1B1B1B] text-white p-10 rounded-3xl">
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
            </div>

            {/* Healthcare Network */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-10 rounded-3xl">
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
            </div>

            {/* Staffing Partner */}
            <div className="bg-gradient-to-br from-[#22c55e] to-emerald-600 text-white p-10 rounded-3xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section id="enterprise" className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 mb-4">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Enterprise Grade</span>
            </div>
            
            <h2 className="mt-12 mb-5 text-4xl md:text-5xl font-bold leading-tight">
              Built for Global Scale
            </h2>
            <p className="mt-4 mb-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Security, compliance, and performance that Fortune 500 companies trust
            </p>
          </div>
          
          <div className="my-20"></div>

          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Shield, title: "SOC 2 Type II", desc: "Audited security", color: "bg-blue-500/10" },
              { icon: Globe, title: "Global Compliance", desc: "GDPR, CCPA ready", color: "bg-green-500/10" },
              { icon: CheckCircle, title: "99.9% Uptime", desc: "Enterprise SLA", color: "bg-purple-500/10" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Cultural insights", color: "bg-orange-500/10" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${feature.color} backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Palace Grandeur */}
      <section className="pt-16 pb-16 bg-gradient-to-r from-[#032D60] via-[#1a365d] to-[#22c55e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-12 text-center">
          <h2 className="mt-12 mb-5 text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Global Hiring?
          </h2>
          <p className="mt-4 mb-6 text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
            Join us as partners, not just clients. Let's solve what others can't.
          </p>
          
          <div className="my-8"></div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-white text-[#032D60] px-10 py-4 text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 rounded-full"
            >
              <Target className="w-5 h-5" />
              <span>Start Cultural Assessment</span>
            </button>
            
            <button 
              className="border-2 border-white text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-[#032D60] transition-all duration-300 flex items-center space-x-3 rounded-full"
            >
              <Play className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPageMastery;