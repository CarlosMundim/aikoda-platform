'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Globe, Building2, Users, Target, BarChart3,
  Search, AlertTriangle, Shield, Zap, ArrowUpRight, ArrowDownRight,
  Eye, Database, Brain, Activity, FileText, Download, Map
} from 'lucide-react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

const MarketIntelligenceDashboard = () => {
  const [selectedMarket, setSelectedMarket] = useState('Japan');
  const [analysisInProgress, setAnalysisInProgress] = useState(false);
  
  // Real-time market data simulation
  const [liveMetrics, setLiveMetrics] = useState({
    talentGap: 47892,
    marketGrowth: 23.4,
    competitorActivity: 87,
    opportunityScore: 94
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        talentGap: prev.talentGap + Math.floor(Math.random() * 100 - 50),
        marketGrowth: prev.marketGrowth + (Math.random() * 0.2 - 0.1),
        competitorActivity: Math.min(100, Math.max(0, prev.competitorActivity + Math.floor(Math.random() * 3 - 1))),
        opportunityScore: Math.min(100, Math.max(0, prev.opportunityScore + Math.floor(Math.random() * 2 - 1)))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const marketSegments = [
    { 
      name: 'Engineering & Construction', 
      value: 34567, 
      growth: 18.2, 
      trend: 'up',
      companies: ['Shimada Corp', 'Obayashi', 'Taisei', 'Kajima'],
      talentShortage: 12340
    },
    { 
      name: 'Healthcare & Medical', 
      value: 28934, 
      growth: 24.5, 
      trend: 'up',
      companies: ['Takeda', 'Daiichi Sankyo', 'Astellas', 'Eisai'],
      talentShortage: 8765
    },
    { 
      name: 'IT & Technology', 
      value: 42156, 
      growth: 31.2, 
      trend: 'up',
      companies: ['NTT Data', 'Fujitsu', 'NEC', 'Rakuten'],
      talentShortage: 15678
    },
    { 
      name: 'Manufacturing', 
      value: 38901, 
      growth: -2.3, 
      trend: 'down',
      companies: ['Toyota', 'Sony', 'Panasonic', 'Mitsubishi'],
      talentShortage: 9234
    },
    { 
      name: 'Financial Services', 
      value: 19234, 
      growth: 8.7, 
      trend: 'up',
      companies: ['MUFG', 'Mizuho', 'SMBC', 'Nomura'],
      talentShortage: 4567
    }
  ];

  const competitorAnalysis = [
    { name: 'Robert Half', marketShare: 18, strength: 'Brand Recognition', weakness: 'Cultural Understanding' },
    { name: 'Persol', marketShare: 15, strength: 'Local Network', weakness: 'Global Talent Access' },
    { name: 'Recruit', marketShare: 22, strength: 'Market Position', weakness: 'AI Technology' },
    { name: 'Michael Page', marketShare: 12, strength: 'Executive Search', weakness: 'Volume Hiring' },
    { name: 'aiKODA', marketShare: 8, strength: 'AI + Cultural Intelligence', weakness: 'Market Penetration' }
  ];

  const talentInsights = [
    { country: 'India', available: 234567, avgSalary: '$35,000', culturalFit: 89 },
    { country: 'Vietnam', available: 156789, avgSalary: '$28,000', culturalFit: 92 },
    { country: 'Philippines', available: 189234, avgSalary: '$25,000', culturalFit: 87 },
    { country: 'Indonesia', available: 167890, avgSalary: '$22,000', culturalFit: 85 },
    { country: 'Brazil', available: 98765, avgSalary: '$38,000', culturalFit: 78 }
  ];

  return (
    <DashboardLayout 
      title="Market Intelligence"
      companyName="Strategic Analysis"
    >
      <div className="max-w-[1400px] mx-auto px-24 lg:px-32 py-16">
        
        {/* Tiger PhD Header with Live Metrics */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
            <div className="w-1 h-16 bg-white/30 mb-8" />
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-6 leading-[0.9]">
                  Real-Time Market<br />
                  <span className="text-emerald-400">Intelligence Engine</span>
                </h1>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  AI-powered competitive analysis providing strategic insights for 
                  workforce planning, talent acquisition, and market penetration strategies.
                </p>
              </div>
              
              {/* Live Metrics Grid */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <TrendingUp className="w-8 h-8 text-emerald-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{liveMetrics.talentGap.toLocaleString()}</div>
                  <div className="text-sm text-slate-300">Talent Gap Positions</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Activity className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{liveMetrics.marketGrowth.toFixed(1)}%</div>
                  <div className="text-sm text-slate-300">Market Growth Rate</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Shield className="w-8 h-8 text-orange-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{liveMetrics.competitorActivity}%</div>
                  <div className="text-sm text-slate-300">Competitor Activity</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{liveMetrics.opportunityScore}%</div>
                  <div className="text-sm text-slate-300">Opportunity Score</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Market Segments Analysis */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200 p-12">
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
            <div className="w-1 h-12 bg-slate-300 mb-8" />
            
            <h2 className="text-3xl font-light text-slate-900 mb-8 leading-tight">
              Market Segment<br />
              <span className="text-slate-600">Analysis</span>
            </h2>
            
            <div className="space-y-6">
              {marketSegments.map((segment, index) => (
                <motion.div 
                  key={segment.name}
                  className="border border-slate-200 p-6 hover:border-slate-400 transition-all duration-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-slate-900">{segment.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">
                        Key Players: {segment.companies.join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-2 mb-1">
                        {segment.trend === 'up' ? (
                          <ArrowUpRight className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <ArrowDownRight className="w-5 h-5 text-red-500" />
                        )}
                        <span className={`text-2xl font-light ${
                          segment.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                        }`}>
                          {segment.growth > 0 ? '+' : ''}{segment.growth}%
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">YoY Growth</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Market Size</p>
                      <p className="text-lg font-medium text-slate-900">{segment.value.toLocaleString()} positions</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Talent Shortage</p>
                      <p className="text-lg font-medium text-orange-600">{segment.talentShortage.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Opportunity Score</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-slate-200 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                            style={{ width: `${Math.min(segment.growth * 3 + 50, 100)}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{Math.min(Math.floor(segment.growth * 3 + 50), 100)}%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Competitor Analysis */}
          <div className="lg:col-span-7">
            <motion.div 
              className="bg-white border border-slate-200 p-12"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <h2 className="text-3xl font-light text-slate-900 mb-8 leading-tight">
                Competitive<br />
                <span className="text-slate-600">Landscape</span>
              </h2>
              
              <div className="space-y-4">
                {competitorAnalysis.map((competitor, index) => (
                  <motion.div 
                    key={competitor.name}
                    className="border-l-4 border-purple-500 pl-6 py-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-slate-900 text-lg">{competitor.name}</h4>
                      <span className="text-2xl font-light text-purple-600">{competitor.marketShare}%</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-emerald-600 font-medium">Strength:</span>
                        <span className="text-slate-600 ml-2">{competitor.strength}</span>
                      </div>
                      <div>
                        <span className="text-orange-600 font-medium">Weakness:</span>
                        <span className="text-slate-600 ml-2">{competitor.weakness}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="h-2 bg-slate-200 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600"
                          style={{ width: `${competitor.marketShare}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* aiKODA Advantage */}
              <div className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 p-6 border border-emerald-200">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-emerald-600 mr-2" />
                  aiKODA Competitive Advantage
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">47D Cultural Intelligence unmatched in market</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">AI-powered matching with 94% accuracy rate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">Direct access to 2.8M+ pre-assessed candidates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-slate-700">25+ years Japanese market expertise</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Global Talent Insights */}
          <div className="lg:col-span-5">
            <motion.div 
              className="bg-white border border-slate-200 p-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-12 bg-slate-300 mb-8" />
              
              <h2 className="text-3xl font-light text-slate-900 mb-8 leading-tight">
                Global Talent<br />
                <span className="text-slate-600">Intelligence</span>
              </h2>
              
              <div className="space-y-6">
                {talentInsights.map((country, index) => (
                  <motion.div 
                    key={country.country}
                    className="border border-slate-200 p-4 hover:border-emerald-400 transition-all duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-emerald-600" />
                        <span className="font-medium text-slate-900">{country.country}</span>
                      </div>
                      <span className="text-sm bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                        {country.culturalFit}% fit
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-500">Available Talent</p>
                        <p className="font-medium text-slate-900">{country.available.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-500">Avg Salary</p>
                        <p className="font-medium text-slate-900">{country.avgSalary}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Strategic Recommendation */}
              <div className="mt-8 bg-slate-900 text-white p-6">
                <h4 className="font-medium mb-3 flex items-center">
                  <Brain className="w-5 h-5 text-emerald-400 mr-2" />
                  AI Strategic Recommendation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Focus on Vietnam and India markets for Engineering roles. 
                  High cultural compatibility (92% and 89%) combined with 
                  competitive salary expectations presents optimal ROI for 
                  Japanese enterprises.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Panel */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-light mb-2">Ready to Dominate Your Market?</h3>
              <p className="text-blue-100">Get detailed market analysis and strategic recommendations</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-medium hover:bg-white/10 transition-colors duration-300 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Full Analysis
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default MarketIntelligenceDashboard;