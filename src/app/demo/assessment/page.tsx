'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, User, Upload, BarChart3, Globe, Target, 
  CheckCircle2, AlertCircle, TrendingUp, Users,
  FileText, Download, RefreshCw, Sparkles
} from 'lucide-react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

const CulturalAssessmentDashboard = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [assessmentInProgress, setAssessmentInProgress] = useState(false);
  
  // Demo candidates
  const demoCandidates = [
    { id: 1, name: 'Tanaka Hiroshi', country: 'Japan', role: 'Senior Engineer', photo: '👨‍💼' },
    { id: 2, name: 'Kumar Patel', country: 'India', role: 'Full Stack Developer', photo: '👨‍💻' },
    { id: 3, name: 'Sarah Johnson', country: 'USA', role: 'Product Manager', photo: '👩‍💼' },
    { id: 4, name: 'Maria Silva', country: 'Brazil', role: 'Data Scientist', photo: '👩‍🔬' },
    { id: 5, name: 'Li Wei', country: 'China', role: 'AI Engineer', photo: '👨‍🔧' },
    { id: 6, name: 'Emma Schmidt', country: 'Germany', role: 'DevOps Lead', photo: '👩‍💻' },
    { id: 7, name: 'Ahmed Hassan', country: 'Egypt', role: 'Security Architect', photo: '👨‍💼' },
    { id: 8, name: 'Yuki Yamamoto', country: 'Japan', role: 'UX Designer', photo: '👩‍🎨' },
    { id: 9, name: 'Carlos Rodriguez', country: 'Mexico', role: 'Backend Developer', photo: '👨‍💻' },
    { id: 10, name: 'Priya Sharma', country: 'India', role: 'ML Engineer', photo: '👩‍🔬' }
  ];

  const culturalDimensions = [
    { name: 'Wa (Harmony)', score: 0, description: 'Team cohesion and group dynamics' },
    { name: 'Kaizen (Improvement)', score: 0, description: 'Continuous learning mindset' },
    { name: 'Omotenashi (Service)', score: 0, description: 'Customer-first orientation' },
    { name: 'Kata (Form)', score: 0, description: 'Process adherence and discipline' },
    { name: 'Nemawashi (Consensus)', score: 0, description: 'Collaborative decision making' },
    { name: 'Genchi Genbutsu (Go See)', score: 0, description: 'Hands-on problem solving' },
    { name: 'Mottainai (No Waste)', score: 0, description: 'Resource efficiency mindset' }
  ];

  const runAssessment = (candidate) => {
    setSelectedCandidate(candidate);
    setAssessmentInProgress(true);
    
    // Simulate assessment processing
    setTimeout(() => {
      setAssessmentInProgress(false);
    }, 3000);
  };

  const getRandomScore = () => Math.floor(Math.random() * 15) + 85;

  return (
    <DashboardLayout 
      title="47D Cultural Assessment"
      companyName="Sankyo Corporation"
    >
      <div className="max-w-[1400px] mx-auto px-24 lg:px-32 py-16">
        
        {/* Tiger PhD Header Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white border border-slate-200 p-12">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
            <div className="w-1 h-16 bg-slate-300 mb-8" />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 leading-[0.9]">
                  Cultural Intelligence<br />
                  <span className="text-slate-600">Assessment Engine</span>
                </h1>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Our proprietary 47-dimensional cultural assessment analyzes behavioral patterns, 
                  communication styles, and workplace values to ensure perfect cultural alignment 
                  with Japanese enterprises.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-slate-50 border border-slate-200 p-6"
                  whileHover={{ y: -2 }}
                >
                  <Brain className="w-8 h-8 text-blue-600 mb-4" />
                  <div className="text-3xl font-light text-slate-900 mb-2">47</div>
                  <div className="text-sm text-slate-600">Cultural Dimensions</div>
                </motion.div>
                <motion.div 
                  className="bg-slate-50 border border-slate-200 p-6"
                  whileHover={{ y: -2 }}
                >
                  <Target className="w-8 h-8 text-emerald-600 mb-4" />
                  <div className="text-3xl font-light text-slate-900 mb-2">94%</div>
                  <div className="text-sm text-slate-600">Avg Match Accuracy</div>
                </motion.div>
                <motion.div 
                  className="bg-slate-50 border border-slate-200 p-6"
                  whileHover={{ y: -2 }}
                >
                  <Globe className="w-8 h-8 text-purple-600 mb-4" />
                  <div className="text-3xl font-light text-slate-900 mb-2">120+</div>
                  <div className="text-sm text-slate-600">Countries Analyzed</div>
                </motion.div>
                <motion.div 
                  className="bg-slate-50 border border-slate-200 p-6"
                  whileHover={{ y: -2 }}
                >
                  <TrendingUp className="w-8 h-8 text-orange-600 mb-4" />
                  <div className="text-3xl font-light text-slate-900 mb-2">8.7s</div>
                  <div className="text-sm text-slate-600">Processing Time</div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Candidate Selection Panel */}
          <div className="lg:col-span-4">
            <motion.div 
              className="bg-white border border-slate-200 p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
              <div className="w-1 h-12 bg-slate-300 mb-6" />
              
              <h2 className="text-2xl font-light text-slate-900 mb-6">
                Load Candidate
              </h2>
              
              {/* Upload Section */}
              <div className="border-2 border-dashed border-slate-300 hover:border-blue-400 transition-colors duration-300 p-6 mb-6 text-center cursor-pointer group">
                <Upload className="w-8 h-8 text-slate-400 group-hover:text-blue-500 mx-auto mb-3" />
                <p className="text-sm text-slate-600 font-light">Drop candidate file or click to browse</p>
                <p className="text-xs text-slate-500 mt-2">CSV, JSON, or Excel supported</p>
              </div>
              
              {/* Demo Candidates */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-slate-700 mb-4">Demo Candidates</h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {demoCandidates.map((candidate) => (
                    <motion.div
                      key={candidate.id}
                      className={`border border-slate-200 p-4 cursor-pointer transition-all duration-300 ${
                        selectedCandidate?.id === candidate.id ? 'border-blue-400 bg-blue-50' : 'hover:border-slate-300'
                      }`}
                      onClick={() => runAssessment(candidate)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{candidate.photo}</span>
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{candidate.name}</p>
                          <p className="text-sm text-slate-600">{candidate.role}</p>
                          <p className="text-xs text-slate-500">{candidate.country}</p>
                        </div>
                        <CheckCircle2 className={`w-5 h-5 ${
                          selectedCandidate?.id === candidate.id ? 'text-blue-500' : 'text-slate-300'
                        }`} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Assessment Results */}
          <div className="lg:col-span-8">
            {!selectedCandidate ? (
              <motion.div 
                className="bg-slate-50 border border-slate-200 p-24 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Brain className="w-16 h-16 text-slate-300 mx-auto mb-6" />
                <h3 className="text-2xl font-light text-slate-600 mb-4">No Candidate Selected</h3>
                <p className="text-slate-500 font-light">Select a candidate to run the 47D cultural assessment</p>
              </motion.div>
            ) : (
              <motion.div 
                className="bg-white border border-slate-200 p-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="w-1 h-16 bg-slate-300 mb-8" />
                
                {/* Candidate Header */}
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center space-x-6">
                    <span className="text-5xl">{selectedCandidate.photo}</span>
                    <div>
                      <h2 className="text-3xl font-light text-slate-900">{selectedCandidate.name}</h2>
                      <p className="text-lg text-slate-600">{selectedCandidate.role} • {selectedCandidate.country}</p>
                    </div>
                  </div>
                  {assessmentInProgress ? (
                    <div className="flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-lg">
                      <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                      <span className="text-blue-800 font-medium">Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3 bg-emerald-50 px-6 py-3 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800 font-medium">Assessment Complete</span>
                    </div>
                  )}
                </div>

                {/* Overall Score */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Sparkles className="w-8 h-8 mb-4" />
                    <div className="text-5xl font-light mb-2">{assessmentInProgress ? '--' : '94'}%</div>
                    <div className="text-lg">Cultural Fit Score</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-slate-900 p-8 text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <BarChart3 className="w-8 h-8 mb-4" />
                    <div className="text-5xl font-light mb-2">{assessmentInProgress ? '--' : 'A+'}</div>
                    <div className="text-lg">Adaptability Rating</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-emerald-500 p-8 text-white"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <Target className="w-8 h-8 mb-4" />
                    <div className="text-5xl font-light mb-2">{assessmentInProgress ? '--' : '12'}</div>
                    <div className="text-lg">Job Matches</div>
                  </motion.div>
                </div>

                {/* Cultural Dimensions */}
                <h3 className="text-2xl font-light text-slate-900 mb-8">Cultural Dimension Analysis</h3>
                <div className="space-y-6">
                  {culturalDimensions.map((dimension, index) => {
                    const score = assessmentInProgress ? 0 : getRandomScore();
                    return (
                      <motion.div 
                        key={dimension.name}
                        className="border-l-4 border-blue-500 pl-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium text-slate-900">{dimension.name}</h4>
                            <p className="text-sm text-slate-600 font-light">{dimension.description}</p>
                          </div>
                          <span className="text-2xl font-light text-slate-900">{score}%</span>
                        </div>
                        <div className="h-3 bg-slate-200 overflow-hidden">
                          <motion.div 
                            className={`h-full ${score >= 90 ? 'bg-emerald-500' : score >= 80 ? 'bg-blue-500' : 'bg-orange-500'}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${score}%` }}
                            transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-12">
                  <button className="px-6 py-3 border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors duration-300 flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Export Report
                  </button>
                  <button className="px-6 py-3 bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    View Full Analysis
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CulturalAssessmentDashboard;