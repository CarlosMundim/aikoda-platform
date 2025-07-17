'use client'

import React, { useState } from 'react'
import { SAPCard } from './SAPCard'
import { SAPButton } from './SAPButton'

interface MarketIntelligenceProps {
  language: 'en' | 'ja'
}

export function MarketIntelligence({ language }: MarketIntelligenceProps) {
  const [selectedRegion, setSelectedRegion] = useState('japan')

  const labels = {
    en: {
      title: "Market Intelligence Dashboard",
      subtitle: "Real-time Talent Market Analytics",
      regions: {
        japan: "Japan",
        indonesia: "Indonesia",
        asia: "Asia-Pacific"
      },
      metrics: {
        avgSalary: "Average Salary",
        demandGrowth: "Demand Growth",
        supplyGap: "Supply Gap",
        timeToHire: "Time to Hire"
      },
      trends: "Market Trends",
      topSkills: "Top In-Demand Skills",
      salaryBenchmark: "Salary Benchmarks",
      culturalInsights: "Cultural Integration Insights"
    },
    ja: {
      title: "市場インテリジェンスダッシュボード",
      subtitle: "リアルタイム人材市場分析",
      regions: {
        japan: "日本",
        indonesia: "インドネシア",
        asia: "アジア太平洋"
      },
      metrics: {
        avgSalary: "平均給与",
        demandGrowth: "需要成長率",
        supplyGap: "供給ギャップ",
        timeToHire: "採用期間"
      },
      trends: "市場トレンド",
      topSkills: "需要の高いスキル",
      salaryBenchmark: "給与ベンチマーク",
      culturalInsights: "文化統合インサイト"
    }
  }

  const currentLabels = labels[language]

  const marketData = {
    japan: {
      avgSalary: "¥8.5M",
      demandGrowth: "+12.3%",
      supplyGap: "45,000",
      timeToHire: "28 days",
      topSkills: ["AI/ML", "Cloud", "DevOps", "React", "Python"],
      culturalFactors: {
        "Language Barrier": 85,
        "Work Culture Adaptation": 72,
        "Business Etiquette": 68,
        "Team Integration": 79
      }
    },
    indonesia: {
      avgSalary: "$35,000",
      demandGrowth: "+18.7%",
      supplyGap: "28,000",
      timeToHire: "21 days",
      topSkills: ["Java", "React", "Node.js", "AWS", "Mobile"],
      culturalFactors: {
        "Communication Style": 82,
        "Hierarchical Understanding": 75,
        "Time Management": 70,
        "Collaboration": 88
      }
    }
  }

  const currentData = marketData[selectedRegion as keyof typeof marketData] || marketData.japan

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="sap-title">{currentLabels.title}</h1>
        <p className="sap-caption mt-2">{currentLabels.subtitle}</p>
      </div>

      {/* Region Selector */}
      <div className="flex justify-center space-x-4">
        {Object.entries(currentLabels.regions).map(([key, label]) => (
          <SAPButton
            key={key}
            variant={selectedRegion === key ? "primary" : "secondary"}
            onClick={() => setSelectedRegion(key)}
          >
            {label}
          </SAPButton>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="sap-grid sap-grid-4">
        <SAPCard title={currentLabels.metrics.avgSalary}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sap-brand">
              {currentData.avgSalary}
            </div>
            <p className="text-sap-text-secondary text-sm mt-1">
              {language === 'en' ? 'per year' : '年間'}
            </p>
          </div>
        </SAPCard>
        <SAPCard title={currentLabels.metrics.demandGrowth}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sap-success">
              {currentData.demandGrowth}
            </div>
            <p className="text-sap-text-secondary text-sm mt-1">
              {language === 'en' ? 'YoY growth' : '前年比'}
            </p>
          </div>
        </SAPCard>
        <SAPCard title={currentLabels.metrics.supplyGap}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sap-warning">
              {currentData.supplyGap}
            </div>
            <p className="text-sap-text-secondary text-sm mt-1">
              {language === 'en' ? 'positions' : 'ポジション'}
            </p>
          </div>
        </SAPCard>
        <SAPCard title={currentLabels.metrics.timeToHire}>
          <div className="text-center">
            <div className="text-3xl font-bold text-sap-brand">
              {currentData.timeToHire}
            </div>
            <p className="text-sap-text-secondary text-sm mt-1">
              {language === 'en' ? 'average' : '平均'}
            </p>
          </div>
        </SAPCard>
      </div>

      <div className="sap-grid sap-grid-2">
        {/* Top Skills */}
        <SAPCard title={currentLabels.topSkills}>
          <div className="space-y-3">
            {currentData.topSkills.map((skill, index) => (
              <div key={skill} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-sap-text-muted">
                    {index + 1}
                  </span>
                  <span className="font-medium">{skill}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-sap-border rounded-full h-2">
                    <div
                      className="bg-sap-brand h-2 rounded-full"
                      style={{ width: `${100 - index * 15}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SAPCard>

        {/* Cultural Insights */}
        <SAPCard title={currentLabels.culturalInsights}>
          <div className="space-y-3">
            {Object.entries(currentData.culturalFactors).map(([factor, score]) => (
              <div key={factor}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{factor}</span>
                  <span className="text-sm font-bold">{score}%</span>
                </div>
                <div className="w-full bg-sap-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      score >= 80 ? 'bg-sap-success' : 
                      score >= 70 ? 'bg-sap-warning' : 'bg-sap-error'
                    }`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SAPCard>
      </div>

      {/* Trends Chart Placeholder */}
      <SAPCard title={currentLabels.trends}>
        <div className="h-64 flex items-center justify-center bg-sap-hover rounded">
          <p className="text-sap-text-muted">
            {language === 'en' ? 'Trend visualization coming soon' : 'トレンド可視化は近日公開'}
          </p>
        </div>
      </SAPCard>
    </div>
  )
}

export default MarketIntelligence