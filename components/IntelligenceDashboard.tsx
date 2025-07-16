/**
 * Intelligence Dashboard Component
 * Stunning visual data presentation for Japanese executives
 */

'use client';

import React from 'react';
import { PremiumIcons } from './PremiumIcons';

interface MetricCard {
  title: string;
  japaneseTitle: string;
  value: string;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: 'blue' | 'green' | 'purple' | 'amber';
}

const EXECUTIVE_METRICS: MetricCard[] = [
  {
    title: 'Cultural Fit Score',
    japaneseTitle: '文化適合度',
    value: '94.2%',
    change: +12.5,
    icon: PremiumIcons.Culture,
    color: 'blue'
  },
  {
    title: 'Placement Success',
    japaneseTitle: '配置成功率',
    value: '87.8%',
    change: +8.3,
    icon: PremiumIcons.Success,
    color: 'green'
  },
  {
    title: 'Assessment Accuracy',
    japaneseTitle: '評価精度',
    value: '96.7%',
    change: +15.2,
    icon: PremiumIcons.Assessment,
    color: 'purple'
  },
  {
    title: 'Client Satisfaction',
    japaneseTitle: '顧客満足度',
    value: '92.1%',
    change: +6.7,
    icon: PremiumIcons.Trending,
    color: 'amber'
  }
];

const CULTURAL_DIMENSIONS = [
  { name: 'Wa (Harmony)', value: 89, color: '#2563eb' },
  { name: 'Kaizen', value: 94, color: '#10b981' },
  { name: 'Omotenashi', value: 87, color: '#8b5cf6' },
  { name: 'Bushido', value: 92, color: '#f59e0b' },
  { name: 'Nemawashi', value: 85, color: '#ef4444' },
  { name: 'Keigo', value: 91, color: '#06b6d4' }
];

export const IntelligenceDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Executive KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXECUTIVE_METRICS.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Cultural Intelligence Radar */}
      <div className="viz-card">
        <div className="viz-header">
          <div>
            <h3 className="viz-title">文化的インテリジェンス分析</h3>
            <p className="text-sm text-gray-600">Cultural Intelligence Analysis</p>
          </div>
          <div className="status-indicator status-success">
            <PremiumIcons.Success className="w-4 h-4" />
            Active
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {CULTURAL_DIMENSIONS.map((dimension, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">{dimension.name}</span>
                <span className="text-sm font-semibold" style={{ color: dimension.color }}>
                  {dimension.value}%
                </span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${dimension.value}%`,
                    background: `linear-gradient(90deg, ${dimension.color}, ${dimension.color}dd)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assessment Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="viz-card">
          <div className="viz-header">
            <h3 className="viz-title">評価パイプライン</h3>
            <p className="text-sm text-gray-600">Assessment Pipeline</p>
          </div>
          
          <div className="space-y-4">
            <PipelineStage 
              title="Cultural Assessment"
              subtitle="47次元分析"
              progress={94}
              count="1,247"
              color="#2563eb"
            />
            <PipelineStage 
              title="Psychological Profiling"
              subtitle="心理的プロファイリング"
              progress={87}
              count="1,098"
              color="#10b981"
            />
            <PipelineStage 
              title="Skills Validation"
              subtitle="スキル検証"
              progress={92}
              count="1,156"
              color="#8b5cf6"
            />
            <PipelineStage 
              title="Final Matching"
              subtitle="最終マッチング"
              progress={89}
              count="1,034"
              color="#f59e0b"
            />
          </div>
        </div>

        <div className="viz-card">
          <div className="viz-header">
            <h3 className="viz-title">マーケットインテリジェンス</h3>
            <p className="text-sm text-gray-600">Market Intelligence Insights</p>
          </div>
          
          <div className="space-y-6">
            <InsightCard 
              icon={PremiumIcons.Analytics}
              title="Demand Prediction"
              subtitle="需要予測"
              value="+23.7%"
              description="IT professionals with cultural adaptability"
              trend="up"
            />
            <InsightCard 
              icon={PremiumIcons.Culture}
              title="Cultural Gaps"
              subtitle="文化的ギャップ"
              value="12 areas"
              description="Key development opportunities identified"
              trend="neutral"
            />
            <InsightCard 
              icon={PremiumIcons.Trending}
              title="Success Rate"
              subtitle="成功率"
              value="94.2%"
              description="Above industry average (67%)"
              trend="up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ metric: MetricCard }> = ({ metric }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    amber: 'from-amber-500 to-amber-600'
  };

  return (
    <div className="viz-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[metric.color]}`}>
          <metric.icon className="w-6 h-6 text-white" />
        </div>
        <div className={`text-sm font-semibold ${
          metric.change > 0 ? 'text-green-600' : 'text-red-600'
        }`}>
          {metric.change > 0 ? '+' : ''}{metric.change}%
        </div>
      </div>
      
      <div className="space-y-1">
        <h4 className="text-lg font-bold text-gray-900">{metric.japaneseTitle}</h4>
        <p className="text-sm text-gray-600">{metric.title}</p>
        <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
      </div>
    </div>
  );
};

const PipelineStage: React.FC<{
  title: string;
  subtitle: string;
  progress: number;
  count: string;
  color: string;
}> = ({ title, subtitle, progress, count, color }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{subtitle}</h4>
        <p className="text-sm text-gray-600">{title}</p>
        <div className="progress-bar mt-2">
          <div 
            className="progress-fill"
            style={{ 
              width: `${progress}%`,
              background: color
            }}
          />
        </div>
      </div>
      <div className="ml-4 text-right">
        <div className="text-lg font-bold" style={{ color }}>{count}</div>
        <div className="text-sm text-gray-600">{progress}%</div>
      </div>
    </div>
  );
};

const InsightCard: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  value: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
}> = ({ icon: Icon, title, subtitle, value, description, trend }) => {
  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600'
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900">{subtitle}</h4>
        <p className="text-sm text-gray-600">{title}</p>
        <div className={`text-lg font-bold ${trendColors[trend]}`}>{value}</div>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};