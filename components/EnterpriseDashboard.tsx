'use client';

import { useState, useEffect } from 'react';
import DashboardView from './DashboardView';
import AnalyticsView from './AnalyticsView';
import IntelligenceView from './IntelligenceView';
import ReportsView from './ReportsView';
import CandidateRegistrationView from './CandidateRegistrationView';
import CompanyRegistrationView from './CompanyRegistrationView';
import CulturalIntelligenceView from './CulturalIntelligenceView';

interface DashboardProps {
  currentScene: number;
  isPlaying: boolean;
}

export default function EnterpriseDashboard({ currentScene, isPlaying }: DashboardProps) {
  const [currentView, setCurrentView] = useState('dashboard');
  const [metrics, setMetrics] = useState({
    totalCandidates: 12847,
    activeAssessments: 234,
    culturalMatches: 89.7,
    marketIntelligence: 156,
    realTimeAlerts: 7
  });

  const sceneData = [
    {
      title: "Market Opportunity Analysis",
      subtitle: "Indonesia-Japan Workforce Deployment",
      primaryMetric: { label: "Market Size", value: "$2.8B", trend: "+24%" },
      keyInsights: [
        "Indonesian talent demand up 156% in Q4",
        "Japanese companies seeking 12,000+ roles",
        "Cultural alignment score: 94.2%",
        "Projected ROI: 340% within 18 months"
      ],
      charts: [
        { type: "growth", value: 156, label: "Demand Growth %" },
        { type: "match", value: 94.2, label: "Cultural Alignment" },
        { type: "roi", value: 340, label: "Projected ROI %" }
      ]
    },
    {
      title: "BREXA Impact Assessment",
      subtitle: "Competitive Intelligence Analysis",
      primaryMetric: { label: "Market Share Impact", value: "+18.3%", trend: "+5.2%" },
      keyInsights: [
        "BREXA platform tracks 200+ media sources",
        "Real-time competitor movement analysis",
        "6-month advance warning system active",
        "Cultural mismatch reduction: 67%"
      ],
      charts: [
        { type: "tracking", value: 200, label: "Sources Monitored" },
        { type: "warning", value: 6, label: "Months Advance Warning" },
        { type: "reduction", value: 67, label: "Mismatch Reduction %" }
      ]
    },
    {
      title: "AI Revolution Demonstration",
      subtitle: "47-Dimensional Cultural Engine",
      primaryMetric: { label: "Assessment Accuracy", value: "95.8%", trend: "+2.1%" },
      keyInsights: [
        "47 cultural dimensions analyzed in real-time",
        "AI-powered candidate-role matching",
        "Automated cultural fit prediction",
        "Processing time: 10 seconds per assessment"
      ],
      charts: [
        { type: "dimensions", value: 47, label: "Cultural Dimensions" },
        { type: "accuracy", value: 95.8, label: "Prediction Accuracy %" },
        { type: "speed", value: 10, label: "Processing Time (sec)" }
      ]
    },
    {
      title: "Southeast Asia Strategy",
      subtitle: "Regional Expansion Analytics",
      primaryMetric: { label: "Regional Coverage", value: "8 Countries", trend: "+3" },
      keyInsights: [
        "Multi-country cultural analysis active",
        "Government API integrations complete",
        "Local partnership network established",
        "Compliance with regional regulations"
      ],
      charts: [
        { type: "countries", value: 8, label: "Countries Covered" },
        { type: "apis", value: 12, label: "Government APIs" },
        { type: "partnerships", value: 45, label: "Local Partners" }
      ]
    },
    {
      title: "Revenue Transformation",
      subtitle: "Financial Impact Projection",
      primaryMetric: { label: "Revenue Increase", value: "$45.2M", trend: "+312%" },
      keyInsights: [
        "Reduced hiring costs by 43%",
        "Improved retention rates by 78%",
        "Faster time-to-productivity: 60% reduction",
        "Cultural training costs down 85%"
      ],
      charts: [
        { type: "cost", value: 43, label: "Cost Reduction %" },
        { type: "retention", value: 78, label: "Retention Improvement %" },
        { type: "productivity", value: 60, label: "Time Reduction %" }
      ]
    },
    {
      title: "Partnership Vision",
      subtitle: "Enterprise Integration Ecosystem",
      primaryMetric: { label: "Integration Points", value: "125+", trend: "+28" },
      keyInsights: [
        "Enterprise ATS system compatibility",
        "Real-time API with 99.9% uptime",
        "White-label platform capabilities",
        "24/7 autonomous operation"
      ],
      charts: [
        { type: "integrations", value: 125, label: "System Integrations" },
        { type: "uptime", value: 99.9, label: "API Uptime %" },
        { type: "response", value: 240, label: "Avg Response Time (ms)" }
      ]
    }
  ];

  const currentData = sceneData[currentScene] || sceneData[0];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setMetrics(prev => ({
          totalCandidates: prev.totalCandidates + Math.floor(Math.random() * 3),
          activeAssessments: prev.activeAssessments + Math.floor(Math.random() * 2 - 1),
          culturalMatches: Math.min(99.9, prev.culturalMatches + (Math.random() * 0.2 - 0.1)),
          marketIntelligence: prev.marketIntelligence + Math.floor(Math.random() * 2),
          realTimeAlerts: Math.max(0, prev.realTimeAlerts + Math.floor(Math.random() * 3 - 1))
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'analytics':
        return <AnalyticsView currentScene={currentScene} isPlaying={isPlaying} />;
      case 'intelligence':
        return <IntelligenceView />;
      case 'reports':
        return <ReportsView />;
      case 'candidate-registration':
        return <CandidateRegistrationView />;
      case 'company-registration':
        return <CompanyRegistrationView />;
      case 'cultural-assessment':
        return <CulturalIntelligenceView />;
      default:
        return <DashboardView currentScene={currentScene} isPlaying={isPlaying} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Navigation Header */}
      <div className="border-b border-gray-700 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <div className="text-white font-semibold">AIKODA</div>
                <div className="text-xs text-gray-400">文化的知能プラットフォーム / Cultural Intelligence Platform</div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'dashboard', japanese: 'ダッシュボード', english: 'Dashboard', icon: '📊' },
                { id: 'analytics', japanese: '分析', english: 'Analytics', icon: '📈' },
                { id: 'intelligence', japanese: 'インテリジェンス', english: 'Intelligence', icon: '🧠' },
                { id: 'reports', japanese: 'レポート', english: 'Reports', icon: '📋' },
                { id: 'candidate-registration', japanese: '候補者登録', english: 'Candidate Registration', icon: '👤' },
                { id: 'company-registration', japanese: '企業登録', english: 'Company Registration', icon: '🏢' },
                { id: 'cultural-assessment', japanese: '文化評価', english: 'Cultural Assessment', icon: '🧠' }
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => setCurrentView(nav.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentView === nav.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{nav.icon}</span>
                    <div className="text-left">
                      <div className="text-xs">{nav.japanese}</div>
                      <div className="text-xs opacity-75">{nav.english}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">
                  ライブデータ / Live Data
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto">
        {renderCurrentView()}
      </div>
    </div>
  );
}