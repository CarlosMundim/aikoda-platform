'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, Users, Briefcase, BarChart3, Globe, Shield, 
  Target, Activity, TrendingUp, UserCheck, FileCheck, 
  Calendar, Award, MessageSquare, AlertCircle, CheckCircle2,
  Building2, MapPin, Clock, Star, Play, Zap, Eye, Database
} from 'lucide-react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';

// Demo data that updates in real-time
const DemoDashboard = () => {
  const [stats, setStats] = useState({
    totalCandidates: 2847,
    activeJobs: 134,
    matchesFound: 1892,
    assessmentsToday: 47,
    culturalFitAvg: 94,
    processingSpeed: 8.7,
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'assessment', user: 'Tanaka Hiroshi', action: 'Completed 47D Assessment', score: 96, time: '2 min ago' },
    { id: 2, type: 'match', company: 'Sankyo Corporation', role: 'Senior Engineer', matches: 12, time: '5 min ago' },
    { id: 3, type: 'visa', user: 'Maria Silva', status: 'Visa Application Approved', time: '8 min ago' },
    { id: 4, type: 'report', company: 'Tech Global', report: 'Cultural Integration Report Generated', time: '15 min ago' },
  ]);

  const [liveMatches, setLiveMatches] = useState([
    { 
      candidate: { name: 'Kumar Patel', country: 'India', score: 98, skills: ['Java', 'React', 'AI/ML'] },
      job: { title: 'Senior Software Engineer', company: 'Sankyo Corporation', location: 'Tokyo' },
      fitScore: 98,
      culturalDimensions: { wa: 95, kaizen: 97, omotenashi: 94 }
    },
    {
      candidate: { name: 'Sarah Johnson', country: 'USA', score: 92, skills: ['Project Management', 'Agile', 'Japanese N2'] },
      job: { title: 'Program Manager', company: 'Mitsubishi Heavy', location: 'Osaka' },
      fitScore: 92,
      culturalDimensions: { wa: 90, kaizen: 88, omotenashi: 96 }
    },
    {
      candidate: { name: 'Priya Sharma', country: 'India', score: 95, skills: ['Product Management', 'Agile', 'User Research'] },
      job: { title: 'Senior Product Manager', company: 'Sony Interactive', location: 'Tokyo' },
      fitScore: 95,
      culturalDimensions: { wa: 93, kaizen: 96, omotenashi: 97 }
    },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        assessmentsToday: prev.assessmentsToday + Math.floor(Math.random() * 3),
        matchesFound: prev.matchesFound + Math.floor(Math.random() * 5),
        totalCandidates: prev.totalCandidates + Math.floor(Math.random() * 2),
      }));

      // Add new activities periodically
      if (Math.random() > 0.7) {
        const newActivities = [
          { id: Date.now(), type: 'assessment', user: 'Takeshi Yamamoto', action: 'Completed Cultural Assessment', score: 89, time: 'Just now' },
          { id: Date.now() + 1, type: 'match', company: 'Toyota Industries', role: 'AI Engineer', matches: 8, time: 'Just now' },
          { id: Date.now() + 2, type: 'report', company: 'Sony Corporation', report: 'Q1 Performance Report Generated', time: 'Just now' },
          { id: Date.now() + 3, type: 'visa', user: 'Ana Rodriguez', status: 'Visa Application Submitted', time: 'Just now' }
        ];
        
        const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
        setRecentActivities(prev => [randomActivity, ...prev.slice(0, 3)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const demoTools = [
    {
      title: '47D Cultural Assessment',
      description: 'Run real-time cultural intelligence evaluation',
      href: '/demo/assessment',
      icon: Brain,
      color: 'blue',
      status: 'LIVE',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverBg: 'hover:bg-blue-100',
      hoverBorder: 'hover:border-blue-400',
      iconColor: 'text-blue-600',
      statusBg: 'bg-blue-100',
      statusText: 'text-blue-800'
    },
    {
      title: 'AI Matching Engine',
      description: 'Match candidates to jobs with cultural precision',
      href: '/demo/matching',
      icon: Target,
      color: 'emerald',
      status: 'READY',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      hoverBg: 'hover:bg-emerald-100',
      hoverBorder: 'hover:border-emerald-400',
      iconColor: 'text-emerald-600',
      statusBg: 'bg-emerald-100',
      statusText: 'text-emerald-800'
    },
    {
      title: 'Visa Processing',
      description: 'Automated visa application tracking',
      href: '/demo/visa',
      icon: FileCheck,
      color: 'purple',
      status: 'AUTO',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverBg: 'hover:bg-purple-100',
      hoverBorder: 'hover:border-purple-400',
      iconColor: 'text-purple-600',
      statusBg: 'bg-purple-100',
      statusText: 'text-purple-800'
    },
    {
      title: 'Enterprise Reports',
      description: 'Generate comprehensive AI-powered insights',
      href: '/demo/reports',
      icon: BarChart3,
      color: 'orange',
      status: 'NEW',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      hoverBg: 'hover:bg-orange-100',
      hoverBorder: 'hover:border-orange-400',
      iconColor: 'text-orange-600',
      statusBg: 'bg-orange-100',
      statusText: 'text-orange-800'
    },
    {
      title: 'Psychological Testing',
      description: 'Advanced psychological assessment module',
      href: '/demo/psych-test',
      icon: Brain,
      color: 'indigo',
      status: 'BETA',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      hoverBg: 'hover:bg-indigo-100',
      hoverBorder: 'hover:border-indigo-400',
      iconColor: 'text-indigo-600',
      statusBg: 'bg-indigo-100',
      statusText: 'text-indigo-800'
    },
    {
      title: 'AI Advisory',
      description: 'Personalized career coaching and guidance',
      href: '/demo/advisory',
      icon: MessageSquare,
      color: 'teal',
      status: 'AI',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      hoverBg: 'hover:bg-teal-100',
      hoverBorder: 'hover:border-teal-400',
      iconColor: 'text-teal-600',
      statusBg: 'bg-teal-100',
      statusText: 'text-teal-800'
    }
  ];

  return (
    <DashboardLayout 
      title="Intelligence Platform"
      companyName="Sankyo Corporation"
    >
      {/* Main Dashboard Content */}
      <div className="max-w-[1400px] mx-auto px-24 lg:px-32 py-16">
        
        {/* Tiger PhD Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Total Candidates */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.totalCandidates.toLocaleString()}</div>
            <div className="text-sm text-slate-600 tracking-wide">Total Candidates</div>
          </motion.div>

          {/* Active Jobs */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Briefcase className="w-8 h-8 text-emerald-600" />
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-lg font-medium">+12 today</span>
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.activeJobs}</div>
            <div className="text-sm text-slate-600 tracking-wide">Active Jobs</div>
          </motion.div>

          {/* AI Matches */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-purple-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-purple-600" />
              <Activity className="w-4 h-4 text-purple-500 animate-pulse" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.matchesFound.toLocaleString()}</div>
            <div className="text-sm text-slate-600 tracking-wide">AI Matches Found</div>
          </motion.div>

          {/* Daily Assessments */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-orange-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-8 h-8 text-orange-600" />
              <span className="text-xs text-orange-600 font-medium animate-pulse">LIVE</span>
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.assessmentsToday}</div>
            <div className="text-sm text-slate-600 tracking-wide">Assessments Today</div>
          </motion.div>

          {/* Cultural Fit Average */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-emerald-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
              <Star className="w-4 h-4 text-yellow-500" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.culturalFitAvg}%</div>
            <div className="text-sm text-slate-600 tracking-wide">Avg Cultural Fit</div>
          </motion.div>

          {/* Processing Speed */}
          <motion.div 
            className="relative bg-white border border-slate-200 hover:border-blue-300 transition-all duration-700 p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500" />
            <div className="w-1 h-12 bg-slate-300 mb-6" />
            <div className="flex items-center justify-between mb-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-light text-slate-900 mb-2">{stats.processingSpeed}s</div>
            <div className="text-sm text-slate-600 tracking-wide">Avg Processing</div>
          </motion.div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Demo Tools Panel */}
          <div className="lg:col-span-4">
            <motion.div 
              className="bg-white border border-slate-200 p-12 mb-12"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-900" />
              <div className="w-1 h-16 bg-slate-300 mb-8" />
              
              <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 leading-tight">
                Demo<br />
                <span className="text-slate-600">Tools</span>
              </h2>
              
              <div className="space-y-6">
                {demoTools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <motion.div
                      key={tool.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                    >
                      <Link href={tool.href}>
                        <div className={`relative border border-slate-200 hover:border-slate-400 transition-all duration-700 p-6 group cursor-pointer ${tool.bgColor} ${tool.hoverBg}`}>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <IconComponent className={`w-6 h-6 ${tool.iconColor}`} />
                              <span className="font-medium text-slate-900">{tool.title}</span>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-lg font-medium ${tool.statusBg} ${tool.statusText}`}>
                              {tool.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600 font-light leading-relaxed">{tool.description}</p>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              className="bg-slate-900 p-12 text-white"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-light mb-8">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 p-4 text-left transition-all duration-700 group">
                  <div className="flex items-center justify-between">
                    <span className="font-light">Add New Candidate</span>
                    <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 p-4 text-left transition-all duration-700 group">
                  <div className="flex items-center justify-between">
                    <span className="font-light">Post New Job</span>
                    <Briefcase className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 p-4 text-left transition-all duration-700 group">
                  <div className="flex items-center justify-between">
                    <span className="font-light">Run Batch Analysis</span>
                    <Brain className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Live Activity Feed */}
          <div className="lg:col-span-8">
            {/* Recent Activities */}
            <motion.div 
              className="bg-white border border-slate-200 p-12 mb-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
              <div className="w-1 h-16 bg-slate-300 mb-8" />
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-slate-900 leading-tight">
                  Live Activity<br />
                  <span className="text-slate-600">Feed</span>
                </h2>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm font-medium border border-emerald-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span>REAL-TIME</span>
                  </div>
                </span>
              </div>
              
              <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                  <motion.div 
                    key={activity.id} 
                    className="border-l-4 border-blue-500 pl-6 py-4 hover:bg-slate-50 transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-medium text-slate-900 mb-1">
                          {activity.type === 'assessment' && activity.user}
                          {activity.type === 'match' && activity.company}
                          {activity.type === 'visa' && activity.user}
                          {activity.type === 'report' && activity.company}
                        </div>
                        <div className="text-sm text-slate-600 font-light">
                          {activity.action || activity.role || activity.status || activity.report}
                          {activity.score && (
                            <span className="ml-2 text-emerald-600 font-medium">Score: {activity.score}%</span>
                          )}
                          {activity.matches && (
                            <span className="ml-2 text-blue-600 font-medium">{activity.matches} matches found</span>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-slate-500 font-light">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Live Matches */}
            <motion.div 
              className="bg-white border border-slate-200 p-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-purple-500" />
              <div className="w-1 h-16 bg-slate-300 mb-8" />
              
              <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 leading-tight">
                Live AI<br />
                <span className="text-slate-600">Matches</span>
              </h2>
              
              <div className="space-y-8">
                {liveMatches.map((match, index) => (
                  <motion.div 
                    key={index} 
                    className="border border-slate-200 hover:border-purple-400 transition-all duration-700 p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-light text-xl">
                          {match.fitScore}%
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 text-lg">{match.candidate.name}</div>
                          <div className="text-sm text-slate-600 font-light flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {match.candidate.country}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-900 text-lg">{match.job.title}</div>
                        <div className="text-sm text-slate-600 font-light">{match.job.company}</div>
                      </div>
                    </div>
                    
                    {/* Cultural Dimensions */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-2 tracking-wide">Wa (Harmony)</div>
                        <div className="h-2 bg-slate-200 overflow-hidden">
                          <div 
                            className="h-full bg-emerald-500 transition-all duration-1000"
                            style={{ width: `${match.culturalDimensions.wa}%` }}
                          />
                        </div>
                        <div className="text-sm font-medium text-slate-700 mt-2">{match.culturalDimensions.wa}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-2 tracking-wide">Kaizen</div>
                        <div className="h-2 bg-slate-200 overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 transition-all duration-1000"
                            style={{ width: `${match.culturalDimensions.kaizen}%` }}
                          />
                        </div>
                        <div className="text-sm font-medium text-slate-700 mt-2">{match.culturalDimensions.kaizen}%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-2 tracking-wide">Omotenashi</div>
                        <div className="h-2 bg-slate-200 overflow-hidden">
                          <div 
                            className="h-full bg-purple-500 transition-all duration-1000"
                            style={{ width: `${match.culturalDimensions.omotenashi}%` }}
                          />
                        </div>
                        <div className="text-sm font-medium text-slate-700 mt-2">{match.culturalDimensions.omotenashi}%</div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-3">
                      {match.candidate.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 font-light tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DemoDashboard;