'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BarChart3, ArrowLeft, Download, Share, Eye, Calendar,
  TrendingUp, Users, Globe, Building2, Target, Award,
  Activity, Sparkles, Brain, FileText, Filter, Search,
  ChevronDown, Clock, CheckCircle2, AlertTriangle, Star
} from 'lucide-react';

const AIReports = () => {
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReport, setGeneratedReport] = useState<any>(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Available report templates
  const reportTemplates = [
    {
      id: 1,
      name: 'Cultural Intelligence Overview',
      description: 'Comprehensive analysis of workforce cultural compatibility',
      category: 'cultural',
      icon: Globe,
      color: 'blue',
      estimatedTime: '45 seconds',
      dataPoints: 47,
      insights: ['Cultural fit analysis', 'Team harmony prediction', 'Integration recommendations']
    },
    {
      id: 2,
      name: 'Talent Pipeline Analytics',
      description: 'Deep dive into recruitment funnel and candidate quality',
      category: 'recruitment',
      icon: Users,
      color: 'green',
      estimatedTime: '35 seconds',
      dataPoints: 34,
      insights: ['Source effectiveness', 'Quality metrics', 'Time-to-hire optimization']
    },
    {
      id: 3,
      name: 'Performance Prediction Report',
      description: 'AI-powered performance forecasting and risk assessment',
      category: 'performance',
      icon: TrendingUp,
      color: 'purple',
      estimatedTime: '60 seconds',
      dataPoints: 52,
      insights: ['Performance predictions', 'Risk factors', 'Success probability']
    },
    {
      id: 4,
      name: 'Market Intelligence Summary',
      description: 'Competitive landscape and market positioning analysis',
      category: 'market',
      icon: Target,
      color: 'orange',
      estimatedTime: '55 seconds',
      dataPoints: 28,
      insights: ['Competitor analysis', 'Market trends', 'Strategic recommendations']
    },
    {
      id: 5,
      name: 'Visa Processing Analytics',
      description: 'Immigration status, processing times, and success rates',
      category: 'visa',
      icon: FileText,
      color: 'indigo',
      estimatedTime: '30 seconds',
      dataPoints: 19,
      insights: ['Processing efficiency', 'Success rates', 'Bottleneck identification']
    },
    {
      id: 6,
      name: 'Enterprise ROI Dashboard',
      description: 'Financial impact and return on investment analysis',
      category: 'financial',
      icon: Building2,
      color: 'emerald',
      estimatedTime: '40 seconds',
      dataPoints: 23,
      insights: ['Cost savings', 'Revenue impact', 'Efficiency gains']
    }
  ];

  // Generated reports history
  const [reportHistory] = useState([
    {
      id: 1,
      name: 'Q4 2024 Cultural Intelligence Report',
      type: 'Cultural Intelligence Overview',
      generated: '2024-12-15',
      size: '2.3 MB',
      status: 'completed',
      company: 'Sankyo Corporation'
    },
    {
      id: 2,
      name: 'November Talent Pipeline Analysis',
      type: 'Talent Pipeline Analytics',
      generated: '2024-11-30',
      size: '1.8 MB',
      status: 'completed',
      company: 'Mitsubishi Heavy Industries'
    },
    {
      id: 3,
      name: 'Engineering Team Performance Forecast',
      type: 'Performance Prediction Report',
      generated: '2024-11-28',
      size: '3.1 MB',
      status: 'completed',
      company: 'NTT Data'
    }
  ]);

  const generateReport = (template: any) => {
    setSelectedReport(template);
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockReport = {
        id: Date.now(),
        template: template,
        generatedAt: new Date().toISOString(),
        company: 'Sankyo Corporation',
        period: 'Q4 2024',
        
        executiveSummary: {
          overallScore: 92,
          keyInsights: [
            'Cultural alignment has improved by 23% over the past quarter',
            'Engineering talent pipeline shows 94% success rate for Japanese integration',
            'AI-powered matching reduced time-to-hire by 45%',
            'Psychological assessments predict 91% retention rate for new hires'
          ],
          recommendations: [
            'Expand Vietnam sourcing program - highest cultural compatibility',
            'Implement advanced Japanese language training for top candidates',
            'Focus recruitment on universities with existing partnership programs'
          ]
        },

        metrics: {
          totalCandidates: 2847,
          culturalFitScore: 94,
          averageProcessingTime: '32 days',
          successRate: 96,
          costPerHire: '¥420,000',
          timeToHire: '28 days'
        },

        chartData: {
          culturalDimensions: [
            { dimension: 'Wa (Harmony)', score: 92, trend: '+8%' },
            { dimension: 'Kaizen (Improvement)', score: 88, trend: '+12%' },
            { dimension: 'Omotenashi (Service)', score: 85, trend: '+5%' },
            { dimension: 'Hierarchy Respect', score: 90, trend: '+3%' },
            { dimension: 'Consensus Building', score: 87, trend: '+15%' }
          ],
          monthlyTrends: [
            { month: 'Sep', candidates: 234, success: 89 },
            { month: 'Oct', candidates: 267, success: 92 },
            { month: 'Nov', candidates: 298, success: 94 },
            { month: 'Dec', candidates: 312, success: 96 }
          ],
          sourceEffectiveness: [
            { source: 'University Partnerships', candidates: 45, success: 98 },
            { source: 'AI Referral Network', candidates: 38, success: 94 },
            { source: 'Global Talent Pool', candidates: 32, success: 91 },
            { source: 'Partner Agencies', candidates: 28, success: 88 }
          ]
        },

        detailedAnalysis: {
          strengths: [
            'Exceptional cultural assessment accuracy (94% prediction rate)',
            'Strong Japanese language preparation program results',
            'Effective visa processing with 96% approval rate',
            'High candidate satisfaction scores (4.8/5.0)'
          ],
          challenges: [
            'Limited pipeline for senior executive roles',
            'Extended processing times for certain visa categories',
            'Regional variations in cultural preparation effectiveness'
          ],
          opportunities: [
            'Expand into Southeast Asian markets with similar cultural values',
            'Develop AI-powered mentorship matching system',
            'Create industry-specific cultural training modules'
          ]
        },

        aiInsights: [
          {
            category: 'Cultural Prediction',
            insight: 'Candidates from Vietnam show 97% cultural alignment with Japanese workplace values',
            confidence: 94,
            impact: 'high'
          },
          {
            category: 'Performance Optimization',
            insight: 'Pre-arrival language training increases first-year performance by 34%',
            confidence: 89,
            impact: 'high'
          },
          {
            category: 'Risk Assessment',
            insight: 'Candidates with engineering backgrounds adapt 23% faster to Japanese corporate culture',
            confidence: 91,
            impact: 'medium'
          }
        ]
      };
      
      setGeneratedReport(mockReport);
      setIsGenerating(false);
    }, 3000);
  };

  const filteredTemplates = reportTemplates.filter(template => {
    const matchesFilter = filter === 'all' || template.category === filter;
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse opacity-40"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-full w-full h-full flex items-center justify-center">
              <BarChart3 className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Generating AI Report...</h2>
          <p className="text-gray-600 mb-8">Analyzing {selectedReport?.dataPoints} data points with advanced AI</p>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-sm text-gray-600">Processing: {selectedReport?.name}</span>
          </div>
          <div className="text-xs text-gray-500">Estimated time: {selectedReport?.estimatedTime}</div>
        </div>
      </div>
    );
  }

  if (generatedReport) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setGeneratedReport(null)}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Reports</span>
              </button>
              <div className="h-6 w-px bg-gray-300" />
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="text-lg font-semibold text-gray-900">Report Generated</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Report Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{generatedReport.template.name}</h1>
                <p className="text-blue-100 mb-2">{generatedReport.company} • {generatedReport.period}</p>
                <p className="text-blue-200 text-sm">
                  Generated on {new Date(generatedReport.generatedAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold">{generatedReport.executiveSummary.overallScore}%</div>
                <div className="text-blue-100">Overall Performance</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-blue-600" />
              Executive Summary
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  {generatedReport.executiveSummary.keyInsights.map((insight: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Strategic Recommendations</h3>
                <ul className="space-y-3">
                  {generatedReport.executiveSummary.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <Target className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
              Key Performance Metrics
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(generatedReport.metrics).map(([key, value]: [string, any]) => (
                <div key={key} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
                  <div className="text-sm text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural Dimensions Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Globe className="w-6 h-6 mr-2 text-purple-600" />
              Cultural Intelligence Analysis
            </h2>
            
            <div className="space-y-4">
              {generatedReport.chartData.culturalDimensions.map((item: any, idx: number) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{item.dimension}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{item.score}%</span>
                      <span className="text-sm text-green-600 font-semibold">{item.trend}</span>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                Monthly Performance Trends
              </h3>
              <div className="space-y-4">
                {generatedReport.chartData.monthlyTrends.map((month: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-semibold text-gray-900">{month.month} 2024</div>
                      <div className="text-sm text-gray-600">{month.candidates} candidates</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{month.success}%</div>
                      <div className="text-xs text-gray-500">success rate</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                Source Effectiveness
              </h3>
              <div className="space-y-4">
                {generatedReport.chartData.sourceEffectiveness.map((source: any, idx: number) => (
                  <div key={idx} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{source.source}</span>
                      <span className="text-sm font-bold text-gray-700">{source.success}%</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{source.candidates} candidates</div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${source.success}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-600" />
              AI-Generated Insights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {generatedReport.aiInsights.map((insight: any, idx: number) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">{insight.category}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        insight.impact === 'high' ? 'bg-red-100 text-red-800' :
                        insight.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {insight.impact} impact
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{insight.insight}</p>
                  <div className="text-sm text-gray-600">
                    Confidence: <span className="font-semibold">{insight.confidence}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2 text-orange-600" />
              Detailed Analysis
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {generatedReport.detailedAnalysis.strengths.map((strength: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-700 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {generatedReport.detailedAnalysis.challenges.map((challenge: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Opportunities
                </h3>
                <ul className="space-y-2">
                  {generatedReport.detailedAnalysis.opportunities.map((opportunity: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">AI Reports Generator</span>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="relative">
                <select 
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  <option value="cultural">Cultural</option>
                  <option value="recruitment">Recruitment</option>
                  <option value="performance">Performance</option>
                  <option value="market">Market</option>
                  <option value="visa">Visa</option>
                  <option value="financial">Financial</option>
                </select>
                <ChevronDown className="w-5 h-5 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div className="text-sm text-gray-600">
              {filteredTemplates.length} report templates available
            </div>
          </div>
        </div>

        {/* Report Templates */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Generate New Report</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => {
              const IconComponent = template.icon;
              return (
                <div 
                  key={template.id} 
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-blue-200"
                  onClick={() => generateReport(template)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${template.color}-100 group-hover:bg-${template.color}-200 transition-colors`}>
                      <IconComponent className={`w-6 h-6 text-${template.color}-600`} />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full bg-${template.color}-100 text-${template.color}-800 font-medium`}>
                      {template.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Data Points:</span>
                      <span className="font-semibold text-gray-700">{template.dataPoints}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Est. Time:</span>
                      <span className="font-semibold text-gray-700">{template.estimatedTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-700 mb-2">Key Insights:</div>
                    <div className="flex flex-wrap gap-1">
                      {template.insights.slice(0, 2).map((insight, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {insight}
                        </span>
                      ))}
                      {template.insights.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{template.insights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className={`w-full bg-${template.color}-600 text-white py-3 rounded-lg font-semibold hover:bg-${template.color}-700 transition-colors group-hover:shadow-lg flex items-center justify-center space-x-2`}>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Report</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Reports */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Reports</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Report Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Generated</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Size</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reportHistory.map(report => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{report.name}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.company}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.generated}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{report.size}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                            <Download className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                            <Share className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIReports;