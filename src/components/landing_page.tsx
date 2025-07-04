import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [counters, setCounters] = useState({
    accuracy: 0,
    time: 0,
    reduction: 0
  });

  useEffect(() => {
    const targets = { accuracy: 95, time: 10, reduction: 73 };
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    const timers = Object.keys(targets).map(key => {
      const increment = targets[key as keyof typeof targets] / steps;
      let current = 0;
      return setInterval(() => {
        current += increment;
        if (current >= targets[key as keyof typeof targets]) {
          current = targets[key as keyof typeof targets];
          clearInterval(timers[Object.keys(targets).indexOf(key)]);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-stone-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex items-center justify-between h-20">
            <div className="text-3xl font-bold text-blue-600 tracking-tight">aiKODA</div>
            <div className="hidden md:flex space-x-12">
              <a href="#platform" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium">Platform</a>
              <a href="#solutions" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium">Solutions</a>
              <a href="#developers" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium">Developers</a>
              <a href="#company" className="text-gray-500 hover:text-blue-600 transition-colors duration-300 font-medium">Company</a>
              <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-300 font-medium">Request Demo</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-40 pb-32" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)'
      }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full animate-pulse" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{animationDuration: '3s'}}>
            <defs>
              <linearGradient id="gradLines" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <g stroke="url(#gradLines)" strokeWidth="0.5">
              <path d="M0 0 L100% 100%" />
              <path d="M100% 0 L0 100%" />
              <path d="M50% 0 L50% 100%" />
              <path d="M0 50% L100% 50%" />
            </g>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-12 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="font-bold mb-12 leading-tight">
              <div className="text-6xl md:text-8xl">We Solve What Others Can't:</div>
              <div className="text-5xl md:text-7xl mt-4">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Cultural Intelligence at Scale
                </span>
              </div>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Our AI understands culture like humans do - but processes 1000x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
              <button className="bg-stone-50 text-blue-600 px-12 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                See It Work - Live Demo
              </button>
              <button className="border-2 border-white text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 group">
                Cultural Assessment
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-24">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-4 transition-all duration-300 hover:scale-110">{counters.accuracy}%</div>
              <div className="text-gray-300 text-lg">Cultural Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-4 transition-all duration-300 hover:scale-110">{counters.time}s</div>
              <div className="text-gray-300 text-lg">Assessment Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-4 transition-all duration-300 hover:scale-110">{counters.reduction}%</div>
              <div className="text-gray-300 text-lg">Time Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Complete AI Platform for Enterprise Intelligence
            </h2>
            <p className="text-2xl text-gray-500 max-w-4xl mx-auto font-light">
              Four core pillars that transform your business operations
            </p>
          </div>

          {/* Zen-inspired Bento Box Layout */}
          <div className="grid grid-cols-2 gap-8 mb-20">
            {/* Platform Card 1 - White-Label Mobility (Top Left) */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12">
                <div className="w-16 h-16 bg-transparent border border-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  White-Label Mobility Engine
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Deploy AI-powered workforce mobility solutions with your branding. Complete cultural intelligence, candidate matching, and team optimization.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    95% accuracy
                  </span>
                  <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    10s assessment
                  </span>
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group flex items-center text-lg">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Platform Card 2 - AI Recruiter Agents (Top Right) */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12">
                <div className="w-16 h-16 bg-transparent border border-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  AI Recruiter Agents
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Autonomous recruiting agents that source, screen, and match candidates 24/7 with human-level cultural intelligence and bias-free evaluation.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    73% time reduction
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    2.4x success rate
                  </span>
                </div>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300 group flex items-center text-lg">
                  See Demo
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Platform Card 3 - Enterprise Analytics (Bottom Left) */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12">
                <div className="w-16 h-16 bg-transparent border border-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.25l1.41-1.41L16.75 14 15.34 15.41l-1.59-1.59L12.34 15 17 19.66l4.25-4.25zM3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">
                  Enterprise Analytics
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Real-time dashboards with predictive analytics, performance monitoring, and SLA tracking across all AI operations.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    99.9% uptime
                  </span>
                  <span className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    &lt;500ms response
                  </span>
                </div>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-300 group flex items-center text-lg">
                  View Dashboards
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Platform Card 4 - API + Integrations (Bottom Right) */}
            <div className="group relative bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-12">
                <div className="w-16 h-16 bg-transparent border border-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-orange-600 transition-colors duration-300">
                  API + Integrations
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Complete developer toolkit with RESTful APIs, GraphQL endpoints, and 200+ pre-built enterprise connectors.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Hours to deploy
                  </span>
                  <span className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                    200+ connectors
                  </span>
                </div>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 group flex items-center text-lg">
                  Developer Docs
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Clean Text Features - Single Row, 3 Columns */}
          <div className="grid grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h4>
              <p className="text-gray-600 text-lg leading-relaxed">SOC 2 Type II certified with end-to-end encryption</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Sub-second response times with global CDN</p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Global Scale</h4>
              <p className="text-gray-600 text-lg leading-relaxed">Available in 50+ countries with local compliance</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 hover:shadow-lg transition-all duration-300 mr-8">
              Explore Complete Platform
            </button>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 text-xl group">
              View API Documentation
              <svg className="w-5 h-5 ml-1 inline-block group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-40 bg-stone-50">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Industry-Specific AI Solutions That Drive Results
            </h2>
            <p className="text-2xl text-gray-500 max-w-4xl mx-auto font-light">
              From back office automation to sovereign cloud deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Solution 1 */}
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">AI Back Office Automation</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Intelligent automation for HR, Finance, Operations, and Compliance. Deploy pre-trained AI agents that understand your business context.</p>
              <p className="text-blue-600 font-semibold mb-6 text-xl">80% reduction in manual tasks</p>
              <p className="text-base text-gray-500 mb-8">All sectors</p>
              <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 text-lg">Explore Automation →</button>
            </div>

            {/* Solution 2 */}
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Custom AI Agents</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Bespoke AI solutions designed for your unique business requirements. From customer service to data analysis - built for your industry.</p>
              <p className="text-purple-600 font-semibold mb-6 text-xl">Tailored to your workflow</p>
              <p className="text-base text-gray-500 mb-8">Industry-specific</p>
              <button className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 text-lg">Build Custom Solution →</button>
            </div>

            {/* Solution 3 */}
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-2xl">☁️</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Sovereign Cloud & On-Premise</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Deploy AI systems on your infrastructure with complete data sovereignty. High-performance computing optimized for AI workloads.</p>
              <p className="text-green-600 font-semibold mb-6 text-xl">Complete data control</p>
              <p className="text-base text-gray-500 mb-8">Government, Finance, Healthcare</p>
              <button className="text-green-600 font-semibold hover:text-green-800 transition-colors duration-300 text-lg">Explore Deployment →</button>
            </div>

            {/* Solution 4 */}
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-6">
                  <span className="text-2xl">🏭</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Industry-Specific Packs</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">Pre-configured solutions for EPC, Healthcare, Fintech, Retail, and BPO with industry compliance and best practices built-in.</p>
              <p className="text-orange-600 font-semibold mb-6 text-xl">Ready-to-deploy industry expertise</p>
              <p className="text-base text-gray-500 mb-8">EPC, Healthcare, Fintech, Retail, BPO</p>
              <button className="text-orange-600 font-semibold hover:text-orange-800 transition-colors duration-300 text-lg">View Industries →</button>
            </div>
          </div>

          <div className="text-center mt-20">
            <button className="bg-blue-600 text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-blue-700 transition-colors duration-300 mr-8">
              View All Solutions
            </button>
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 text-xl">
              Schedule Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-5xl mx-auto px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Enterprise Operations?
          </h2>
          <p className="text-2xl mb-12 opacity-90 font-light">
            Join global leaders using AI to build better, more efficient organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
              📞 Book Enterprise Demo
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-xl text-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              📄 Download Solution Brief
            </button>
          </div>
          <p className="mt-8 text-cyan-100 text-lg">30-day pilot program available</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;