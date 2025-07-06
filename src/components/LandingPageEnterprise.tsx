'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Brain, Building2, Users, BarChart3, Shield, Globe,
  CheckCircle, TrendingUp, Target, ArrowRight, Play,
} from 'lucide-react';
import Footer from './Footer';

// ---------- ENTERPRISE HEADER (With logo swap) ----------
const EnterpriseHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white border-b border-gray-200 shadow-sm' : 'bg-transparent'}
      `}
      style={{ minHeight: '68px' }}
    >
      <div className="max-w-[1312px] mx-auto flex items-center justify-between px-10 md:px-14 py-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src={scrolled ? '/logos/aikoda_blue_logo.svg' : '/logos/aikoda_white_logo.svg'}
            alt="aiKODA Logo"
            className="h-8 w-auto transition-all duration-300"
            style={{ filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px #fff7)' }}
          />
          <span className={`text-xl font-extrabold transition-colors duration-300 ${scrolled ? 'text-[#032D60]' : 'text-white'}`}>
            aiKODA
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="#platform" className={`font-medium transition-colors duration-200 ${scrolled ? 'text-[#032D60] hover:text-[#22c55e]' : 'text-white hover:text-blue-200'}`}>Platform</Link>
          <Link href="#intelligence" className={`font-medium transition-colors duration-200 ${scrolled ? 'text-[#032D60] hover:text-[#22c55e]' : 'text-white hover:text-blue-200'}`}>Intelligence</Link>
          <Link href="#results" className={`font-medium transition-colors duration-200 ${scrolled ? 'text-[#032D60] hover:text-[#22c55e]' : 'text-white hover:text-blue-200'}`}>Results</Link>
          <Link href="#enterprise" className={`font-medium transition-colors duration-200 ${scrolled ? 'text-[#032D60] hover:text-[#22c55e]' : 'text-white hover:text-blue-200'}`}>Enterprise</Link>
        </nav>
        <a
          href="#demo"
          className={`ml-6 px-6 py-2 rounded-full font-semibold flex items-center space-x-2 transition-all duration-200 
            ${scrolled ? 'bg-[#032D60] text-white hover:bg-[#22c55e] hover:text-[#032D60]' : 'bg-[#22c55e] text-white hover:bg-white hover:text-[#032D60]'}
          `}
        >
          <Play className="w-4 h-4 mr-1" /> <span>Live Demo</span>
        </a>
      </div>
    </header>
  );
};

// ---------- MAIN LANDING PAGE ----------
const LandingPageEnterprise: React.FC = () => {
  // --- Hero section animation (metrics carousel) ---
  const [activeMetric, setActiveMetric] = useState(0);
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
    <div className="bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ---------- HEADER ---------- */}
      <EnterpriseHeader />

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)'
        }}
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 0h40v2L40 2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-[1312px] mx-auto px-8 py-40 z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-20 items-center">
            {/* -------- HERO TEXT -------- */}
            <div className="text-white lg:col-span-3">
              <motion.h1
                className="text-5xl md:text-6xl mb-8 font-semibold leading-[0.95]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div>We Solve What</div>
                <div>Others Can't</div>
              </motion.h1>
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-100 font-light">
                47-Dimensional Cultural Intelligence
              </h2>
              <p className="text-lg text-blue-100 mb-10 max-w-lg leading-relaxed">
                The first AI platform built specifically for Japanese business culture – now scaling globally with enterprise precision.
              </p>

              {/* HERO METRICS */}
              <div className="flex space-x-10 mb-16">
                {heroMetrics.map((m, idx) => (
                  <div key={m.label} className={`flex flex-col items-start transition-all duration-500 ${activeMetric === idx ? 'opacity-100 scale-110' : 'opacity-50 scale-95'}`}>
                    <div className={`text-3xl font-bold ${m.color}`}>{m.value}</div>
                    <div className="text-sm text-white opacity-80 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CALLS TO ACTION */}
              <div className="flex flex-col sm:flex-row gap-7">
                <a
                  href="#assessment"
                  className="group bg-[#22c55e] text-white px-7 py-3 text-base font-semibold rounded-full hover:bg-[#16a34a] shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Target className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Cultural Assessment</span>
                </a>
                <a
                  href="#demo"
                  className="group border border-white text-white px-7 py-3 text-base font-semibold rounded-full hover:bg-white hover:text-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </a>
              </div>
            </div>

            {/* -------- HERO IMAGE -------- */}
            <div className="relative lg:col-span-2 flex flex-col items-end">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                style={{
                  filter: `drop-shadow(0 35px 60px rgba(37, 99, 235, 0.23)) drop-shadow(0 20px 40px rgba(59, 130, 246, 0.17)) drop-shadow(0 8px 25px rgba(96, 165, 250, 0.13))`,
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.10))',
                  border: '1.5px solid rgba(147, 197, 253, 0.22)'
                }}
              >
                <img
                  src="/images/hero_lp.webp"
                  alt="Professional diverse team collaborating with cultural intelligence"
                  className="w-full h-full object-cover aspect-square"
                  style={{
                    filter: 'brightness(1.09) contrast(1.12) saturate(1.16)'
                  }}
                />
              </div>
              {/* Image prompt: "Professional diverse business team collaborating, Tokyo skyline, SaaS UI overlay, modern blue and green gradient lighting, enterprise software aesthetic" */}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PLATFORM INTELLIGENCE ---------- */}
      <section id="platform" className="bg-gradient-to-b from-[#F8F9FA] to-[#F1F3F4] pt-28 pb-28">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-5">
              Beyond Traditional Assessment
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed uppercase tracking-wider">
              Four Integrated Systems That Solve What Others Can't
            </p>
          </div>

          {/* --- 3 COLUMN ROW: Engine | Partner | AI Agents --- */}
          <div className="grid md:grid-cols-3 gap-14">
            {/* 47D Engine */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <img
                src="/images/section_1_fp.webp"
                alt="Cultural Intelligence Engine"
                className="w-full h-48 object-cover"
              />
              {/* prompt: "Modern AI SaaS dashboard, digital cultural map, blue/cyan, enterprise UX" */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#3B82F6] rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#3B82F6]">47D Engine</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">47-Dimensional Cultural AI</h3>
                  <p className="text-base text-gray-700 mb-5">AI that understands Japanese and global business cultures with scientific precision. 47 dimensions analysed in seconds.</p>
                </div>
                <a href="#intelligence" className="inline-flex items-center text-[#3B82F6] font-semibold hover:text-[#22c55e] mt-2">
                  Explore Intelligence <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Partner Ecosystem */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <img
                src="/images/int_talent.webp"
                alt="Partner Ecosystem"
                className="w-full h-48 object-cover"
              />
              {/* prompt: "Global network, agency partners, handshake, SaaS UI, green accents" */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#22c55e] rounded-full flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#22c55e]">Partner Network</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Partner Ecosystem</h3>
                  <p className="text-base text-gray-700 mb-5">Deploy our cultural intelligence under your brand. Agencies scale globally with our white-label SaaS.</p>
                </div>
                <a href="#partners" className="inline-flex items-center text-[#22c55e] font-semibold hover:text-[#3B82F6] mt-2">
                  Partner With Us <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
            {/* AI Agents */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <img
                src="/images/ai_assist.webp"
                alt="Autonomous AI Agents"
                className="w-full h-48 object-cover"
              />
              {/* prompt: "Futuristic AI agents, candidate screening, SaaS purple/blue" */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-[#8b5cf6]">AI Agents</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Autonomous AI Workforce</h3>
                  <p className="text-base text-gray-700 mb-5">24/7 AI agents source, screen, and match candidates for you, with cultural precision at scale.</p>
                </div>
                <a href="#agents" className="inline-flex items-center text-[#8b5cf6] font-semibold hover:text-[#3B82F6] mt-2">
                  See Agents <ArrowRight className="ml-1 w-4 h-4" />
                </a>
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
          {/* Results grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* EPC Leader */}
            <div className="bg-gradient-to-br from-[#032D60] to-[#1B1B1B] text-white p-10 rounded-3xl flex flex-col">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-7">
                <Building2 className="w-7 h-7 text-[#B1D8FC]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Global EPC Leader</h3>
              <p className="text-blue-100 mb-6">Reduced engineer hiring time from 127 to 31 days while improving cultural fit to 94%.</p>
              <div className="flex space-x-10">
                <div>
                  <div className="text-4xl font-bold text-[#22c55e]">76%</div>
                  <div className="text-blue-200 text-lg">Faster hiring</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#B1D8FC]">94%</div>
                  <div className="text-blue-200 text-lg">Cultural fit score</div>
                </div>
              </div>
            </div>
            {/* Healthcare */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-10 rounded-3xl flex flex-col">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-7">
                <Users className="w-7 h-7 text-purple-100" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Healthcare Network</h3>
              <p className="text-purple-100 mb-6">Improved nurse retention by 62% through cultural matching and team optimisation.</p>
              <div className="flex space-x-10">
                <div>
                  <div className="text-4xl font-bold text-white">62%</div>
                  <div className="text-purple-200 text-lg">Better retention</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-200">91%</div>
                  <div className="text-purple-200 text-lg">Team satisfaction</div>
                </div>
              </div>
            </div>
            {/* Staffing */}
            <div className="bg-gradient-to-br from-[#22c55e] to-emerald-600 text-white p-10 rounded-3xl flex flex-col">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-7">
                <Target className="w-7 h-7 text-green-100" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Staffing Partner</h3>
              <p className="text-green-100 mb-6">Scaled from 0 to 50,000+ monthly assessments with 91% cultural alignment success.</p>
              <div className="flex space-x-10">
                <div>
                  <div className="text-4xl font-bold text-white">50K+</div>
                  <div className="text-green-200 text-lg">Monthly assessments</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-200">91%</div>
                  <div className="text-green-200 text-lg">Cultural alignment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ENTERPRISE FEATURES ---------- */}
      <section id="enterprise" className="pt-28 pb-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1312px] mx-auto px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-7 py-3 mb-5">
              <Shield className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Enterprise Grade</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5">
              Built for Global Scale
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-0 leading-relaxed">
              Security, compliance, and performance that Fortune 500 companies trust.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-10 mb-4">
            {[
              { icon: Shield, title: "SOC 2 Type II", desc: "Audited security", color: "bg-blue-500/10" },
              { icon: Globe, title: "Global Compliance", desc: "GDPR, CCPA ready", color: "bg-green-500/10" },
              { icon: CheckCircle, title: "99.9% Uptime", desc: "Enterprise SLA", color: "bg-purple-500/10" },
              { icon: BarChart3, title: "Real-time Analytics", desc: "Cultural insights", color: "bg-orange-500/10" }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${feature.color} backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="pt-28 pb-28 bg-gradient-to-r from-[#032D60] via-[#1a365d] to-[#22c55e] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative max-w-4xl mx-auto px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-7">
            Ready to Transform Global Hiring?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed max-w-2xl mx-auto mb-10">
            Join us as partners, not just clients. Let's solve what others can't.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#assessment"
              className="bg-white text-[#032D60] px-10 py-4 text-lg font-bold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 rounded-full"
            >
              <Target className="w-5 h-5" />
              <span>Start Cultural Assessment</span>
            </a>
            <a
              href="#demo"
              className="border-2 border-white text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-[#032D60] transition-all duration-300 flex items-center space-x-3 rounded-full"
            >
              <Play className="w-5 h-5" />
              <span>Schedule Demo</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <Footer />
    </div>
  );
};

export default LandingPageEnterprise;