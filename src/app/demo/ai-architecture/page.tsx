'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Users, Bot, Shield, Activity, Database,
  Cpu, Network, Zap, Lock, Globe, BarChart3,
  FileCheck, MessageSquare, Eye, Settings, 
  CheckCircle2, AlertTriangle, RefreshCw, Sparkles
} from 'lucide-react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

const AIArchitectureDashboard = () => {
  const [activeAgent, setActiveAgent] = useState(null);
  const [systemStatus, setSystemStatus] = useState('operational');
  
  // AI Agent Army - 40+ specialized agents
  const aiAgents = {
    sourcing: [
      { id: 'SA1', name: 'Talent Scout Alpha', role: 'LinkedIn Mining', status: 'active', efficiency: 98 },
      { id: 'SA2', name: 'Talent Scout Beta', role: 'GitHub Analysis', status: 'active', efficiency: 96 },
      { id: 'SA3', name: 'Talent Scout Gamma', role: 'Job Board Scanning', status: 'active', efficiency: 94 },
      { id: 'SA4', name: 'Talent Scout Delta', role: 'University Networks', status: 'active', efficiency: 92 },
      { id: 'SA5', name: 'Talent Scout Epsilon', role: 'Professional Networks', status: 'active', efficiency: 95 }
    ],
    screening: [
      { id: 'SC1', name: 'Resume Analyzer Prime', role: 'CV Parsing & Analysis', status: 'active', efficiency: 99 },
      { id: 'SC2', name: 'Skill Matcher Alpha', role: 'Technical Skills Validation', status: 'active', efficiency: 97 },
      { id: 'SC3', name: 'Experience Validator', role: 'Work History Verification', status: 'active', efficiency: 95 },
      { id: 'SC4', name: 'Education Verifier', role: 'Credential Authentication', status: 'active', efficiency: 98 },
      { id: 'SC5', name: 'Language Assessor', role: 'Communication Skills', status: 'active', efficiency: 93 }
    ],
    assessment: [
      { id: 'AS1', name: 'Culture Analyzer 47D', role: '47D Cultural Assessment', status: 'active', efficiency: 99 },
      { id: 'AS2', name: 'Psych Evaluator Alpha', role: 'Psychological Profiling', status: 'active', efficiency: 96 },
      { id: 'AS3', name: 'Behavior Predictor', role: 'Behavioral Analysis', status: 'active', efficiency: 94 },
      { id: 'AS4', name: 'Team Fit Calculator', role: 'Team Compatibility', status: 'active', efficiency: 97 },
      { id: 'AS5', name: 'Performance Predictor', role: 'Success Probability', status: 'active', efficiency: 95 }
    ],
    interview: [
      { id: 'IN1', name: 'Interview Bot Prime', role: 'Initial Screening Calls', status: 'active', efficiency: 98 },
      { id: 'IN2', name: 'Technical Interviewer', role: 'Technical Assessments', status: 'active', efficiency: 96 },
      { id: 'IN3', name: 'Cultural Interviewer', role: 'Cultural Fit Interviews', status: 'active', efficiency: 97 },
      { id: 'IN4', name: 'Executive Interviewer', role: 'Leadership Assessment', status: 'active', efficiency: 94 },
      { id: 'IN5', name: 'Video Analyzer', role: 'Non-verbal Analysis', status: 'active', efficiency: 92 }
    ],
    processing: [
      { id: 'PR1', name: 'Document Processor Alpha', role: 'Document Verification', status: 'active', efficiency: 99 },
      { id: 'PR2', name: 'Visa Bot Prime', role: 'Visa Application Processing', status: 'active', efficiency: 97 },
      { id: 'PR3', name: 'Immigration Tracker', role: 'Immigration Status Monitor', status: 'active', efficiency: 98 },
      { id: 'PR4', name: 'Compliance Checker', role: 'Legal Compliance', status: 'active', efficiency: 99 },
      { id: 'PR5', name: 'Contract Generator', role: 'Employment Contracts', status: 'active', efficiency: 96 }
    ],
    onboarding: [
      { id: 'ON1', name: 'Onboarding Orchestrator', role: 'Onboarding Coordination', status: 'active', efficiency: 97 },
      { id: 'ON2', name: 'Training Designer', role: 'Personalized Training Plans', status: 'active', efficiency: 95 },
      { id: 'ON3', name: 'Mentor Matcher', role: 'Mentor Assignment', status: 'active', efficiency: 93 },
      { id: 'ON4', name: 'Culture Coach', role: 'Cultural Integration', status: 'active', efficiency: 96 },
      { id: 'ON5', name: 'Progress Tracker', role: 'Performance Monitoring', status: 'active', efficiency: 98 }
    ],
    intelligence: [
      { id: 'IT1', name: 'Market Intel Alpha', role: 'Market Analysis', status: 'active', efficiency: 98 },
      { id: 'IT2', name: 'Competitor Analyzer', role: 'Competitive Intelligence', status: 'active', efficiency: 96 },
      { id: 'IT3', name: 'Trend Predictor', role: 'Trend Forecasting', status: 'active', efficiency: 94 },
      { id: 'IT4', name: 'Salary Benchmarker', role: 'Compensation Analysis', status: 'active', efficiency: 97 },
      { id: 'IT5', name: 'Risk Assessor', role: 'Risk Management', status: 'active', efficiency: 95 }
    ],
    supervisory: [
      { id: 'SU1', name: 'Master Controller', role: 'System Orchestration', status: 'active', efficiency: 100 },
      { id: 'SU2', name: 'Quality Guardian', role: 'Quality Assurance', status: 'active', efficiency: 99 },
      { id: 'SU3', name: 'Redundancy Manager', role: 'Failover Systems', status: 'active', efficiency: 100 },
      { id: 'SU4', name: 'Security Sentinel', role: 'Security Monitoring', status: 'active', efficiency: 100 },
      { id: 'SU5', name: 'Performance Optimizer', role: 'System Optimization', status: 'active', efficiency: 98 }
    ]
  };

  // Assembly of Experts configuration
  const aoeConfiguration = [
    { name: 'Claude Opus 4', role: 'Strategic Analysis & Complex Reasoning', apis: ['Anthropic API'], strength: 98 },
    { name: 'GPT-4 Turbo', role: 'Natural Language Processing', apis: ['OpenAI API'], strength: 96 },
    { name: 'Gemini Ultra', role: 'Multimodal Analysis', apis: ['Google AI API'], strength: 94 },
    { name: 'Llama 3.1', role: 'Open Source Integration', apis: ['Meta API'], strength: 92 },
    { name: 'Mistral Large', role: 'European Compliance', apis: ['Mistral API'], strength: 90 },
    { name: 'aiKODA NHI Core', role: 'Cultural Intelligence Engine', apis: ['Proprietary'], strength: 100 }
  ];

  // Real-time metrics
  const [metrics, setMetrics] = useState({
    activeAgents: 40,
    tasksProcessed: 128456,
    successRate: 99.7,
    avgResponseTime: 0.3
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        activeAgents: 40,
        tasksProcessed: prev.tasksProcessed + Math.floor(Math.random() * 10),
        successRate: (99.5 + Math.random() * 0.4).toFixed(1),
        avgResponseTime: (0.2 + Math.random() * 0.2).toFixed(2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <DashboardLayout 
      title="AI Architecture & Assembly of Experts"
      companyName="Technical Documentation"
    >
      <div className="max-w-[1600px] mx-auto px-24 lg:px-32 py-16">
        
        {/* Executive Summary */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 text-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500" />
            <div className="w-1 h-16 bg-white/30 mb-8" />
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-6 leading-[0.9]">
                  Autonomous AI Armada<br />
                  <span className="text-emerald-400">40+ Specialized Agents</span>
                </h1>
                <p className="text-lg text-slate-300 font-light leading-relaxed mb-6">
                  Our revolutionary platform operates through an army of AI/NHI agents that have 
                  autonomously built and now run the entire recruitment ecosystem. Each agent is 
                  specialized, redundant, and orchestrated through our Assembly of Experts framework.
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span>Fully Operational</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Triple Redundancy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="w-4 h-4 text-purple-400" />
                    <span>Human Supervision Only</span>
                  </div>
                </div>
              </div>
              
              {/* Live System Metrics */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Bot className="w-8 h-8 text-emerald-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{metrics.activeAgents}</div>
                  <div className="text-sm text-slate-300">Active AI Agents</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Activity className="w-8 h-8 text-blue-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{metrics.tasksProcessed.toLocaleString()}</div>
                  <div className="text-sm text-slate-300">Tasks Processed</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <CheckCircle2 className="w-8 h-8 text-purple-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{metrics.successRate}%</div>
                  <div className="text-sm text-slate-300">Success Rate</div>
                </motion.div>
                <motion.div 
                  className="bg-white/10 backdrop-blur border border-white/20 p-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                  <div className="text-3xl font-light mb-1">{metrics.avgResponseTime}s</div>
                  <div className="text-sm text-slate-300">Avg Response Time</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Assembly of Experts Framework */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white border border-slate-200 p-12">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="w-1 h-12 bg-slate-300 mb-8" />
            
            <h2 className="text-3xl font-light text-slate-900 mb-8 leading-tight">
              Assembly of Experts<br />
              <span className="text-slate-600">Multi-LLM Orchestration</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {aoeConfiguration.map((expert, index) => (
                <motion.div 
                  key={expert.name}
                  className="border border-slate-200 p-6 hover:border-purple-400 transition-all duration-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Brain className="w-8 h-8 text-purple-600" />
                    <span className="text-2xl font-light text-purple-600">{expert.strength}%</span>
                  </div>
                  <h3 className="font-medium text-slate-900 mb-2">{expert.name}</h3>
                  <p className="text-sm text-slate-600 mb-3">{expert.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.apis.map((api, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {api}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 border border-purple-200">
              <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                <Network className="w-5 h-5 text-purple-600 mr-2" />
                How Assembly of Experts Works
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                Our proprietary AoE framework orchestrates multiple state-of-the-art LLMs, combining their 
                strengths while mitigating individual weaknesses. Each expert contributes its specialized 
                capabilities, with aiKODA\'s NHI Core providing cultural intelligence oversight. The system 
                operates with full redundancy - if one expert fails, others seamlessly take over, ensuring 
                99.9% uptime and consistent performance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* AI Agent Army Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
            Complete AI Agent Ecosystem
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {Object.entries(aiAgents).map(([category, agents], categoryIndex) => (
              <motion.div 
                key={category}
                className="bg-white border border-slate-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
                <h3 className="text-lg font-medium text-slate-900 mb-4 capitalize">
                  {category} Agents
                </h3>
                <div className="space-y-3">
                  {agents.map((agent, index) => (
                    <motion.div 
                      key={agent.id}
                      className="border border-slate-200 p-3 hover:border-blue-400 transition-all duration-300 cursor-pointer"
                      onClick={() => setActiveAgent(agent)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-slate-900">{agent.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-xs text-emerald-600">{agent.efficiency}%</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">{agent.role}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Autonomous Capabilities */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 p-12">
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
              End-to-End Autonomous Capabilities
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Autonomous Sourcing</h4>
                <p className="text-sm text-slate-600">
                  AI agents continuously scan 200+ platforms, identifying and engaging 
                  potential candidates 24/7 without human intervention.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">AI-Driven Interviews</h4>
                <p className="text-sm text-slate-600">
                  Conduct full interviews in 120+ languages, analyzing verbal and 
                  non-verbal cues with 96% accuracy.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Psychological Analysis</h4>
                <p className="text-sm text-slate-600">
                  Deep psychological profiling using advanced NLP and behavioral 
                  analysis across 47 cultural dimensions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Document Processing</h4>
                <p className="text-sm text-slate-600">
                  Automatic verification, translation, and processing of all documents 
                  with blockchain-backed authenticity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Visa Automation</h4>
                <p className="text-sm text-slate-600">
                  Complete visa application handling with real-time status tracking 
                  and automatic follow-ups with immigration authorities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">Smart Onboarding</h4>
                <p className="text-sm text-slate-600">
                  Personalized onboarding paths with AI mentors, cultural training, 
                  and continuous performance optimization.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Redundancy & Control Systems */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="bg-white border border-slate-200 p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
            <h3 className="text-2xl font-light text-slate-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 text-red-500 mr-3" />
              Triple Redundancy System
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Primary-Secondary-Tertiary Architecture</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Each agent has 2 backup instances ready to take over within 0.1 seconds
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Cross-Regional Distribution</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Agents distributed across 5 geographic regions for disaster recovery
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Automatic Failover</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Seamless transition with zero data loss and continued operation
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Self-Healing Systems</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Agents automatically diagnose and repair issues without human intervention
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white border border-slate-200 p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
            <h3 className="text-2xl font-light text-slate-900 mb-6 flex items-center">
              <Eye className="w-6 h-6 text-blue-500 mr-3" />
              Human Supervision Layer
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Exception Handling Only</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Humans intervene only for edge cases flagged by AI (< 0.3% of tasks)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Settings className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Strategic Oversight</p>
                  <p className="text-sm text-slate-600 mt-1">
                    High-level strategy and policy decisions remain under human control
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-5 h-5 text-purple-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Performance Monitoring</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Real-time dashboards for human supervisors to monitor AI performance
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Lock className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-900">Emergency Override</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Instant human takeover capability for critical situations
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Technical Integration */}
        <motion.div 
          className="bg-slate-900 text-white p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl font-light mb-8 text-center">
            Out-of-the-Shelf Integration
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Cpu className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="font-medium mb-2">Standard APIs</h4>
              <p className="text-sm text-slate-300">
                RESTful APIs, GraphQL, and WebSocket connections for seamless integration
              </p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="font-medium mb-2">Any Database</h4>
              <p className="text-sm text-slate-300">
                Compatible with PostgreSQL, MySQL, MongoDB, Oracle, and more
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="font-medium mb-2">Cloud Agnostic</h4>
              <p className="text-sm text-slate-300">
                Deploy on AWS, Azure, GCP, or on-premise infrastructure
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur border border-white/20 p-6 text-center">
            <p className="text-lg font-light">
              <span className="text-emerald-400 font-medium">Zero Development Required:</span> Our AI army 
              handles all implementation, configuration, and optimization. Simply connect your existing 
              systems and watch the magic happen.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-light text-slate-900 mb-4">
            Ready to Deploy Your AI Army?
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            Join the future of autonomous recruitment with aiKODA\'s revolutionary AI platform
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download Technical Specs
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default AIArchitectureDashboard;