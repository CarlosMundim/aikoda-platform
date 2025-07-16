'use client';

import { useState, useEffect } from 'react';

interface AnalyticsViewProps {
  currentScene: number;
  isPlaying: boolean;
}

export default function AnalyticsView({ currentScene, isPlaying }: AnalyticsViewProps) {
  const [analyticsData, setAnalyticsData] = useState({
    candidateGrowth: [
      { month: '1月/Jan', value: 1200 },
      { month: '2月/Feb', value: 1890 },
      { month: '3月/Mar', value: 2350 },
      { month: '4月/Apr', value: 3200 },
      { month: '5月/May', value: 4100 },
      { month: '6月/Jun', value: 5300 }
    ],
    culturalDimensions: [
      { dimension: 'コミュニケーション/Communication', score: 87.5 },
      { dimension: '階層/Hierarchy', score: 92.1 },
      { dimension: '意思決定/Decision Making', score: 78.3 },
      { dimension: '関係性/Relationship', score: 89.7 },
      { dimension: '時間感覚/Time Orientation', score: 84.2 },
      { dimension: '作業スタイル/Work Style', score: 91.4 },
      { dimension: '紛争解決/Conflict Resolution', score: 76.8 },
      { dimension: 'リーダーシップ/Leadership', score: 88.9 },
      { dimension: '革新性/Innovation', score: 82.6 },
      { dimension: '社会動力学/Social Dynamics', score: 90.2 }
    ],
    topCountries: [
      { country: 'インドネシア/Indonesia', candidates: 4250, percentage: 33.1 },
      { country: '日本/Japan', candidates: 2890, percentage: 22.5 },
      { country: 'ベトナム/Vietnam', candidates: 1750, percentage: 13.6 },
      { country: 'フィリピン/Philippines', candidates: 1240, percentage: 9.7 },
      { country: 'タイ/Thailand', candidates: 980, percentage: 7.6 }
    ],
    skillsDistribution: [
      { skill: 'JavaScript', count: 1247, trend: '+15%' },
      { skill: 'Python', count: 892, trend: '+22%' },
      { skill: 'Java', count: 756, trend: '+8%' },
      { skill: 'React', count: 634, trend: '+18%' },
      { skill: 'Node.js', count: 567, trend: '+12%' }
    ]
  });

  return (
    <div className="p-6">
      {/* Analytics Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <div>分析ダッシュボード</div>
          <div className="text-xl text-gray-300">Analytics Dashboard</div>
        </h1>
        <p className="text-gray-400">
          47次元文化的知能分析とインサイト
          <br />
          47-Dimensional Cultural Intelligence Analysis & Insights
        </p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          {
            japanese: '文化的適合率',
            english: 'Cultural Match Rate',
            value: '89.7%',
            change: '+5.2%',
            icon: '🎯'
          },
          {
            japanese: '平均処理時間',
            english: 'Avg Processing Time',
            value: '8.7秒',
            change: '-2.1秒',
            icon: '⚡'
          },
          {
            japanese: '予測精度',
            english: 'Prediction Accuracy',
            value: '95.8%',
            change: '+1.3%',
            icon: '🎲'
          },
          {
            japanese: 'ROI向上',
            english: 'ROI Improvement',
            value: '340%',
            change: '+89%',
            icon: '📈'
          }
        ].map((kpi, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl">{kpi.icon}</div>
              {isPlaying && (
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              )}
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-300">{kpi.japanese}</div>
              <div className="text-xs text-gray-500">{kpi.english}</div>
              <div className="text-2xl font-bold text-white">{kpi.value}</div>
              <div className="text-xs text-green-400 font-medium">{kpi.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Candidate Growth Chart */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            <div>候補者成長トレンド</div>
            <div className="text-sm text-gray-400">Candidate Growth Trend</div>
          </h3>
          
          <div className="space-y-3">
            {analyticsData.candidateGrowth.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-300">{item.month}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-32 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(item.value / 5300) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-white w-16 text-right">
                    {item.value.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Dimensions Radar */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            <div>47次元文化分析</div>
            <div className="text-sm text-gray-400">47-Dimensional Cultural Analysis</div>
          </h3>
          
          <div className="space-y-2">
            {analyticsData.culturalDimensions.slice(0, 6).map((dim, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-300">{dim.dimension}</span>
                  <span className="text-white font-medium">{dim.score}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${dim.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geographic and Skills Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Countries */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            <div>上位国別分布</div>
            <div className="text-sm text-gray-400">Top Countries Distribution</div>
          </h3>
          
          <div className="space-y-4">
            {analyticsData.topCountries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    index === 0 ? 'bg-blue-500' :
                    index === 1 ? 'bg-green-500' :
                    index === 2 ? 'bg-purple-500' :
                    index === 3 ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`}></div>
                  <div>
                    <div className="text-sm font-medium text-white">{country.country}</div>
                    <div className="text-xs text-gray-400">{country.percentage}%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-white">
                    {country.candidates.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500">候補者/Candidates</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Distribution */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">
            <div>スキル分布</div>
            <div className="text-sm text-gray-400">Skills Distribution</div>
          </h3>
          
          <div className="space-y-4">
            {analyticsData.skillsDistribution.map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-white">{skill.skill}</span>
                    <span className="text-xs text-green-400 font-medium">{skill.trend}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(skill.count / 1247) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {skill.count.toLocaleString()} 候補者/candidates
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="mt-6 bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border border-purple-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
          <span>🤖</span>
          <div>
            <div>AI インサイト</div>
            <div className="text-sm text-purple-200">AI-Generated Insights</div>
          </div>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              japanese: '予測トレンド',
              english: 'Predicted Trend',
              insight: 'インドネシア候補者の需要は今後6ヶ月で45%増加予測 / Indonesian candidate demand predicted to increase 45% in next 6 months'
            },
            {
              japanese: '最適化提案',
              english: 'Optimization Suggestion', 
              insight: 'JavaScript・Reactスキルの候補者マッチング精度向上可能 / JavaScript & React candidate matching accuracy can be improved'
            },
            {
              japanese: 'リスク警告',
              english: 'Risk Alert',
              insight: '紛争解決スキルの低い候補者に追加研修推奨 / Additional training recommended for candidates with low conflict resolution scores'
            }
          ].map((insight, index) => (
            <div key={index} className="bg-black bg-opacity-30 rounded-lg p-4">
              <div className="text-sm font-medium text-purple-200 mb-2">
                {insight.japanese}
              </div>
              <div className="text-xs text-purple-300 mb-2">
                {insight.english}
              </div>
              <div className="text-xs text-gray-300 leading-relaxed">
                {insight.insight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}