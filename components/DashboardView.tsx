'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageProvider';
import { LanguageToggle } from './LanguageToggle';

interface DashboardViewProps {
  currentScene: number;
  isPlaying: boolean;
}

export default function DashboardView({ currentScene, isPlaying }: DashboardViewProps) {
  const { t } = useLanguage();
  const [metrics, setMetrics] = useState({
    totalCandidates: 0,
    activeAssessments: 0,
    culturalMatches: 0,
    marketIntelligence: 0,
    realTimeAlerts: 0,
    companiesRegistered: 0,
    avgProcessingTime: 0,
    successRate: 0
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Fetch real metrics from database
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/dashboard/metrics');
        if (response.ok) {
          const data = await response.json();
          setMetrics({
            totalCandidates: data.metrics.totalCandidates,
            activeAssessments: data.metrics.activeAssessments,
            culturalMatches: data.metrics.culturalMatches,
            marketIntelligence: data.metrics.marketIntelligence,
            realTimeAlerts: data.metrics.realTimeAlerts,
            companiesRegistered: data.metrics.totalCompanies,
            avgProcessingTime: 8.7, // Static for demo
            successRate: 94.2 // Static for demo
          });
          setLastUpdated(new Date(data.lastUpdated));
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
        // Fallback to demo data if API fails
        setMetrics({
          totalCandidates: 12847,
          activeAssessments: 234,
          culturalMatches: 89.7,
          marketIntelligence: 156,
          realTimeAlerts: 7,
          companiesRegistered: 89,
          avgProcessingTime: 8.7,
          successRate: 94.2
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const dashboardCards = [
    {
      title: 'data.totalCandidates',
      value: metrics.totalCandidates.toLocaleString(),
      trend: '+156',
      trendLabel: '今月 / This Month',
      color: 'bg-blue-600',
      icon: '👥'
    },
    {
      title: 'data.activeAssessments',
      value: metrics.activeAssessments.toString(),
      trend: '+12',
      trendLabel: '今日 / Today',
      color: 'bg-green-600',
      icon: '📋'
    },
    {
      title: 'data.culturalScore',
      value: `${metrics.culturalMatches}%`,
      trend: '+2.1%',
      trendLabel: '平均 / Average',
      color: 'bg-purple-600',
      icon: '🎯'
    },
    {
      title: 'dashboard.marketIntelligence',
      value: metrics.marketIntelligence.toString(),
      trend: '+8',
      trendLabel: 'ソース / Sources',
      color: 'bg-orange-600',
      icon: '📈'
    },
    {
      title: 'dashboard.realTimeAlerts',
      value: metrics.realTimeAlerts.toString(),
      trend: 'アクティブ',
      trendLabel: 'Active',
      color: 'bg-red-600',
      icon: '🚨'
    },
    {
      title: 'data.totalCompanies',
      value: metrics.companiesRegistered.toString(),
      trend: '+23%',
      trendLabel: '成長 / Growth',
      color: 'bg-indigo-600',
      icon: '🏢'
    },
    {
      title: 'data.responseTime',
      value: `${metrics.avgProcessingTime}s`,
      trend: '-1.2s',
      trendLabel: '改善 / Improved',
      color: 'bg-teal-600',
      icon: '⚡'
    },
    {
      title: 'data.satisfaction',
      value: `${metrics.successRate}%`,
      trend: '+1.8%',
      trendLabel: '向上 / Improved',
      color: 'bg-emerald-600',
      icon: '✅'
    }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">データベースから情報を取得中...</p>
          <p className="text-gray-500 text-sm">Loading data from database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t('dashboard.title')}
          </h1>
          <p className="text-gray-600">
            {t('dashboard.subtitle')}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            {t('message.loading')}: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>
        <LanguageToggle />
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center text-2xl text-white`}>
                {card.icon}
              </div>
              {isPlaying && (
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-900">
                {t(card.title)}
              </div>
              
              <div className="text-2xl font-bold text-gray-900">
                {card.value}
              </div>
              
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-green-600 font-medium">{card.trend}</span>
                <span className="text-gray-500">{card.trendLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('dashboard.recentActivity')}
          </h3>
          
          <div className="space-y-3">
            {[
              {
                japanese: '新しい候補者が登録されました',
                english: 'New candidate registered',
                time: '2分前 / 2 min ago',
                icon: '👤'
              },
              {
                japanese: '文化的評価が完了しました',
                english: 'Cultural assessment completed',
                time: '5分前 / 5 min ago', 
                icon: '📋'
              },
              {
                japanese: '市場インテリジェンスアラート',
                english: 'Market intelligence alert',
                time: '12分前 / 12 min ago',
                icon: '📊'
              },
              {
                japanese: '新しい企業が登録されました',
                english: 'New company registered',
                time: '18分前 / 18 min ago',
                icon: '🏢'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-lg">{activity.icon}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {activity.japanese}
                  </div>
                  <div className="text-xs text-gray-600">
                    {activity.english}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t('dashboard.systemStatus')}
          </h3>
          
          <div className="space-y-4">
            {[
              {
                japanese: 'AIエンジン',
                english: 'AI Engine',
                status: 'operational',
                value: '99.9%'
              },
              {
                japanese: 'データベース',
                english: 'Database',
                status: 'operational', 
                value: '100%'
              },
              {
                japanese: 'API応答時間',
                english: 'API Response Time',
                status: 'good',
                value: '240ms'
              },
              {
                japanese: '文化的分析精度',
                english: 'Cultural Analysis Accuracy',
                status: 'excellent',
                value: '95.8%'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">
                    {item.japanese}
                  </div>
                  <div className="text-xs text-gray-600">
                    {item.english}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'operational' ? 'bg-green-400' :
                    item.status === 'good' ? 'bg-blue-400' :
                    item.status === 'excellent' ? 'bg-purple-400' :
                    'bg-yellow-400'
                  }`}></div>
                  <span className="text-sm font-medium text-gray-900">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}