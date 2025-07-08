'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Target, Shield, Brain, BarChart3, Globe, AlertTriangle,
  CheckCircle, TrendingUp, Users, Building2, Eye, Zap,
  Clock, Database, Wifi, Lock, ArrowRight, Play
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IntelligencePage: React.FC = () => {
  const intelligenceMetrics = [
    { value: "47+", label: "Competitors Monitored", color: "text-red-400" },
    { value: "6mo", label: "Advance Warning", color: "text-yellow-400" },
    { value: "94%", label: "Prediction Accuracy", color: "text-green-400" },
    { value: "24/7", label: "AI Monitoring", color: "text-blue-400" }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-time Competitor Monitoring",
      description: "Track pricing, partnerships, expansions across 15+ government databases",
      features: ["Price movement alerts", "Partnership notifications", "Market expansion tracking", "Government filing analysis"],
      color: "red"
    },
    {
      icon: Brain,
      title: "Predictive Market Intelligence",
      description: "AI forecasts competitor moves, regulatory changes, market opportunities",
      features: ["Market trend prediction", "Regulatory change forecasting", "Opportunity identification", "Risk assessment"],
      color: "yellow"
    },
    {
      icon: Database,
      title: "Government API Integration",
      description: "Direct connections to OTIT, JITCO, ISA, KEMNAKER systems",
      features: ["OTIT compliance monitoring", "JITCO data integration", "ISA regulatory updates", "KEMNAKER workforce data"],
      color: "green"
    },
    {
      icon: AlertTriangle,
      title: "Autonomous Alert System",
      description: "Instant notifications on threats, opportunities, regulatory shifts",
      features: ["Threat detection", "Opportunity alerts", "Regulatory monitoring", "Custom notification rules"],
      color: "blue"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Market Position Protection",
      description: "Defend against competitive threats before they materialize",
      impact: "85% faster threat response"
    },
    {
      title: "Strategic Partnership Opportunities",
      description: "Identify M&A targets and partnership vulnerabilities",
      impact: "12x more partnership opportunities"
    },
    {
      title: "Regulatory Compliance Edge",
      description: "Stay ahead of policy changes affecting workforce deployment",
      impact: "6-month advance notice"
    },
    {
      title: "Revenue Protection & Growth",
      description: "Proactive response to market threats and opportunities",
      impact: "23% revenue protection"
    }
  ];

  const marketCoverage = [
    { region: "Japan", competitors: "15+", coverage: "Complete", status: "active" },
    { region: "Vietnam", competitors: "12+", coverage: "Growing", status: "expanding" },
    { region: "Philippines", competitors: "8+", coverage: "Healthcare Focus", status: "specialized" },
    { region: "Indonesia", competitors: "10+", coverage: "Emerging", status: "new" },
    { region: "Thailand", competitors: "6+", coverage: "Monitoring", status: "planned" }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-red-900" />
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-red-500/20 aspect-square" />
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">INTELLIGENCE COMMAND CENTER</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              See Everything.<br />
              Know Everything.<br />
              Win Everything.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              AI-powered competitive intelligence that monitors 47+ competitors in real-time across Southeast Asian workforce deployment markets. Know their moves 6 months before they make them.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-1">
                <Play className="w-5 h-5" />
                <span>Live Intelligence Demo</span>
              </button>
              <button className="border-2 border-red-500 text-red-300 px-10 py-4 text-lg font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3">
                <Shield className="w-5 h-5" />
                <span>Enterprise Access</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Metrics Dashboard */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black/40 backdrop-blur-lg border border-red-500/20 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Real-time Intelligence Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {intelligenceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`text-5xl font-bold ${metric.color} mb-3`}>{metric.value}</div>
                  <div className="text-gray-300 text-lg">{metric.label}</div>
                  <div className="text-sm text-gray-400 mt-2">
                    {index === 0 && "Real-time tracking"}
                    {index === 1 && "Predictive analysis"}
                    {index === 2 && "Market movements"}
                    {index === 3 && "Never sleep mode"}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Intelligence Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI systems that provide unprecedented visibility into competitive landscapes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              const colorClasses = {
                red: "bg-red-500/10 border-red-500/20 text-red-400",
                yellow: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
                green: "bg-green-500/10 border-green-500/20 text-green-400",
                blue: "bg-blue-500/10 border-blue-500/20 text-blue-400"
              };
              
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${colorClasses[capability.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Southeast Asia Market Coverage</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive monitoring across all major workforce deployment markets
            </p>
          </div>
          
          <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-5 gap-6">
              {marketCoverage.map((market, index) => (
                <motion.div
                  key={market.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-4 h-4 rounded-full mx-auto mb-4 ${
                    market.status === 'active' ? 'bg-green-400' :
                    market.status === 'expanding' ? 'bg-yellow-400' :
                    market.status === 'specialized' ? 'bg-blue-400' :
                    market.status === 'new' ? 'bg-purple-400' :
                    'bg-gray-400'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{market.region}</h3>
                  <p className="text-gray-300 mb-1">{market.competitors}</p>
                  <p className="text-sm text-gray-400">{market.coverage}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Strategic Advantages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform from reactive to predictive market leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                    <p className="text-gray-300 mb-4">{advantage.description}</p>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 inline-block">
                      <span className="text-green-400 font-semibold">{advantage.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-gray-900/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the intelligence revolution. See how our competitive intelligence platform gives you the strategic advantage to dominate the $15 billion Southeast Asian workforce deployment market.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-1">
                <Target className="w-5 h-5" />
                <span>Request Demo</span>
              </button>
              <button className="border-2 border-red-500 text-red-300 px-10 py-4 text-lg font-bold rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3">
                <ArrowRight className="w-5 h-5" />
                <span>View Pricing</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IntelligencePage;