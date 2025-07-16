'use client';

import { useState } from 'react';

export default function IntelligenceView() {
  const [selectedRegion, setSelectedRegion] = useState('indonesia');

  const intelligenceData = {
    marketTrends: [
      {
        japanese: 'インドネシア労働力需要急増',
        english: 'Indonesia Workforce Demand Surge',
        impact: 'HIGH',
        trend: '+156%',
        source: 'KEMNAKER API'
      },
      {
        japanese: '日本企業リモートワーク拡大',
        english: 'Japanese Companies Remote Work Expansion',
        impact: 'MEDIUM',
        trend: '+89%',
        source: 'MHLW Reports'
      },
      {
        japanese: 'AI技術者不足深刻化',
        english: 'AI Engineer Shortage Intensifies',
        impact: 'CRITICAL',
        trend: '+234%',
        source: 'Industry Analysis'
      }
    ],
    competitorActivity: [
      {
        company: 'LinkedInJapan',
        activity: '東南アジア拡張戦略発表 / Southeast Asia expansion announced',
        threat: 'MEDIUM',
        time: '2時間前 / 2 hours ago'
      },
      {
        company: 'RecruitHoldings',
        activity: 'AI採用プラットフォーム投資 / AI recruitment platform investment',
        threat: 'HIGH',
        time: '6時間前 / 6 hours ago'
      }
    ]
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <div>市場インテリジェンス</div>
          <div className="text-xl text-gray-300">Market Intelligence</div>
        </h1>
        <p className="text-gray-400">
          リアルタイム競合分析・市場動向監視
          <br />
          Real-time Competitive Analysis & Market Monitoring
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {intelligenceData.marketTrends.map((trend, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{trend.japanese}</h3>
                  <p className="text-gray-400 text-sm">{trend.english}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trend.impact === 'CRITICAL' ? 'bg-red-900 text-red-300' :
                  trend.impact === 'HIGH' ? 'bg-orange-900 text-orange-300' :
                  'bg-yellow-900 text-yellow-300'
                }`}>
                  {trend.impact}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-medium">{trend.trend}</span>
                <span className="text-gray-500 text-sm">{trend.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              <div>競合活動</div>
              <div className="text-sm text-gray-400">Competitor Activity</div>
            </h3>
            {intelligenceData.competitorActivity.map((activity, index) => (
              <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
                <div className="font-medium text-white">{activity.company}</div>
                <div className="text-sm text-gray-300 my-2">{activity.activity}</div>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded text-xs ${
                    activity.threat === 'HIGH' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
                  }`}>
                    {activity.threat}
                  </span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}