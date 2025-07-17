'use client'
import React, { useState, useEffect } from 'react'
import { SAPCard, SAPButton, SAPSelect } from '@/components/SAP'

interface JobPortalData {
  portalName: 'Indeed' | 'LinkedIn' | 'Glassdoor' | 'CareerCross' | 'Bizreach' | 'Rikunabi'
  totalJobs: number
  newJobsThisWeek: number
  averageSalary: number
  topLocations: Array<{
    city: string
    jobCount: number
    averageSalary: number
  }>
  topSkills: Array<{
    skill: string
    demandScore: number
    salaryPremium: number
  }>
  topCompanies: Array<{
    company: string
    openPositions: number
    averageSalary: number
    culturalOpenness: number
  }>
}

interface LocationAnalytics {
  location: string
  totalJobs: number
  averageSalary: number
  costOfLiving: number
  culturalDiversity: number
  foreignerFriendliness: number
  transportationScore: number
  qualityOfLife: number
}

interface IndustryTrend {
  industry: string
  growthRate: number
  demandScore: number
  averageSalary: number
  culturalChallenges: string[]
  topSkillsNeeded: string[]
}

interface SalaryBenchmark {
  position: string
  location: string
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive'
  currency: string
  percentiles: {
    p25: number
    p50: number
    p75: number
    p90: number
  }
  culturalFitPremium: number
  benefits: string[]
}

interface EnhancedMarketIntelligenceProps {
  language: 'en' | 'ja'
}

export default function EnhancedMarketIntelligence({ language }: EnhancedMarketIntelligenceProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'quarter' | 'year'>('month')
  const [selectedLocation, setSelectedLocation] = useState<string>('Tokyo')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('technology')

  // Mock data for job portals
  const [jobPortalData] = useState<JobPortalData[]>([
    {
      portalName: 'Indeed',
      totalJobs: 45230,
      newJobsThisWeek: 2340,
      averageSalary: 6800000,
      topLocations: [
        { city: 'Tokyo', jobCount: 18500, averageSalary: 7200000 },
        { city: 'Osaka', jobCount: 8900, averageSalary: 6500000 },
        { city: 'Yokohama', jobCount: 5600, averageSalary: 6800000 }
      ],
      topSkills: [
        { skill: 'React', demandScore: 95, salaryPremium: 15 },
        { skill: 'Python', demandScore: 88, salaryPremium: 12 },
        { skill: 'AWS', demandScore: 82, salaryPremium: 18 }
      ],
      topCompanies: [
        { company: 'SoftBank', openPositions: 450, averageSalary: 8500000, culturalOpenness: 75 },
        { company: 'Rakuten', openPositions: 380, averageSalary: 7800000, culturalOpenness: 85 },
        { company: 'Mercari', openPositions: 220, averageSalary: 7200000, culturalOpenness: 90 }
      ]
    },
    {
      portalName: 'LinkedIn',
      totalJobs: 32100,
      newJobsThisWeek: 1890,
      averageSalary: 7200000,
      topLocations: [
        { city: 'Tokyo', jobCount: 15200, averageSalary: 7800000 },
        { city: 'Osaka', jobCount: 6800, averageSalary: 6900000 },
        { city: 'Nagoya', jobCount: 4100, averageSalary: 6400000 }
      ],
      topSkills: [
        { skill: 'Machine Learning', demandScore: 92, salaryPremium: 25 },
        { skill: 'Node.js', demandScore: 85, salaryPremium: 14 },
        { skill: 'Docker', demandScore: 78, salaryPremium: 16 }
      ],
      topCompanies: [
        { company: 'Google Japan', openPositions: 180, averageSalary: 12000000, culturalOpenness: 95 },
        { company: 'Microsoft Japan', openPositions: 160, averageSalary: 11500000, culturalOpenness: 88 },
        { company: 'Amazon Japan', openPositions: 340, averageSalary: 9800000, culturalOpenness: 82 }
      ]
    }
  ])

  // Mock location analytics
  const [locationAnalytics] = useState<LocationAnalytics[]>([
    {
      location: 'Tokyo',
      totalJobs: 53500,
      averageSalary: 8200000,
      costOfLiving: 85,
      culturalDiversity: 78,
      foreignerFriendliness: 72,
      transportationScore: 95,
      qualityOfLife: 82
    },
    {
      location: 'Osaka',
      totalJobs: 21200,
      averageSalary: 7100000,
      costOfLiving: 72,
      culturalDiversity: 65,
      foreignerFriendliness: 68,
      transportationScore: 88,
      qualityOfLife: 85
    }
  ])

  const labels = {
    en: {
      title: "Enhanced Market Intelligence",
      subtitle: "Real-time Job Market Analytics with Portal Scraping",
      jobPortalAnalytics: "Job Portal Analytics",
      locationAnalytics: "Location Analytics",
      industryTrends: "Industry Trends",
      salaryBenchmarks: "Salary Benchmarks",
      realTimeMonitoring: "Real-Time Job Market Monitoring",
      competitiveAnalysis: "Competitive Analysis",
      totalJobs: "Total Jobs",
      newJobsThisWeek: "New Jobs This Week",
      averageSalary: "Average Salary",
      topLocations: "Top Locations",
      topSkills: "Top Skills",
      topCompanies: "Top Companies",
      demandScore: "Demand Score",
      salaryPremium: "Salary Premium",
      culturalOpenness: "Cultural Openness",
      costOfLiving: "Cost of Living",
      culturalDiversity: "Cultural Diversity",
      foreignerFriendliness: "Foreigner Friendliness",
      transportationScore: "Transportation Score",
      qualityOfLife: "Quality of Life",
      timeframe: "Timeframe",
      location: "Location",
      industry: "Industry",
      refreshData: "Refresh Data",
      exportReport: "Export Report"
    },
    ja: {
      title: "拡張市場インテリジェンス",
      subtitle: "ポータルスクレイピング付きリアルタイム求人市場分析",
      jobPortalAnalytics: "求人ポータル分析",
      locationAnalytics: "地域分析",
      industryTrends: "業界トレンド",
      salaryBenchmarks: "給与ベンチマーク",
      realTimeMonitoring: "リアルタイム求人市場監視",
      competitiveAnalysis: "競合分析",
      totalJobs: "総求人数",
      newJobsThisWeek: "今週の新規求人",
      averageSalary: "平均給与",
      topLocations: "主要地域",
      topSkills: "主要スキル",
      topCompanies: "主要企業",
      demandScore: "需要スコア",
      salaryPremium: "給与プレミアム",
      culturalOpenness: "文化的開放性",
      costOfLiving: "生活費",
      culturalDiversity: "文化的多様性",
      foreignerFriendliness: "外国人親和性",
      transportationScore: "交通スコア",
      qualityOfLife: "生活の質",
      timeframe: "期間",
      location: "地域",
      industry: "業界",
      refreshData: "データ更新",
      exportReport: "レポートエクスポート"
    }
  }

  const currentLabels = labels[language]

  const formatSalary = (salary: number, currency: string = 'JPY') => {
    if (currency === 'JPY') {
      return `¥${(salary / 1000000).toFixed(1)}M`
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(salary)
  }

  const renderJobPortalAnalytics = () => (
    <div className="space-y-6">
      <h3 className="sap-heading">{currentLabels.jobPortalAnalytics}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobPortalData.map((portal) => (
          <SAPCard key={portal.portalName}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-900">{portal.portalName}</h4>
                <div className="text-sm text-gray-500">Live Data</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{portal.totalJobs.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{currentLabels.totalJobs}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{portal.newJobsThisWeek.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{currentLabels.newJobsThisWeek}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{formatSalary(portal.averageSalary)}</div>
                  <div className="text-sm text-gray-600">{currentLabels.averageSalary}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{portal.topSkills.length}</div>
                  <div className="text-sm text-gray-600">{currentLabels.topSkills}</div>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-900 mb-2">{currentLabels.topLocations}</h5>
                <div className="space-y-1">
                  {portal.topLocations.slice(0, 3).map((location) => (
                    <div key={location.city} className="flex justify-between text-sm">
                      <span>{location.city}</span>
                      <span className="text-gray-600">{location.jobCount.toLocaleString()} jobs</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-900 mb-2">{currentLabels.topSkills}</h5>
                <div className="flex flex-wrap gap-2">
                  {portal.topSkills.slice(0, 3).map((skill) => (
                    <span
                      key={skill.skill}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill.skill} ({skill.demandScore}%)
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SAPCard>
        ))}
      </div>
    </div>
  )

  const renderLocationAnalytics = () => (
    <div className="space-y-6">
      <h3 className="sap-heading">{currentLabels.locationAnalytics}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {locationAnalytics.map((location) => (
          <SAPCard key={location.location}>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold text-gray-900">{location.location}</h4>
                <div className="text-sm text-gray-500">
                  {formatSalary(location.averageSalary)} avg
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{currentLabels.costOfLiving}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${location.costOfLiving}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{location.costOfLiving}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{currentLabels.culturalDiversity}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${location.culturalDiversity}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{location.culturalDiversity}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{currentLabels.foreignerFriendliness}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${location.foreignerFriendliness}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{location.foreignerFriendliness}%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{currentLabels.qualityOfLife}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-600 h-2 rounded-full" 
                        style={{ width: `${location.qualityOfLife}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">{location.qualityOfLife}%</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-2 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">{location.totalJobs.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{currentLabels.totalJobs}</div>
                </div>
              </div>
            </div>
          </SAPCard>
        ))}
      </div>
    </div>
  )

  const renderRealTimeMonitoring = () => (
    <SAPCard>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="sap-heading">{currentLabels.realTimeMonitoring}</h3>
          <div className="flex space-x-2">
            <SAPButton variant="secondary" size="sm">
              {currentLabels.refreshData}
            </SAPButton>
            <SAPButton variant="primary" size="sm">
              {currentLabels.exportReport}
            </SAPButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentLabels.timeframe}
            </label>
            <SAPSelect
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value as any)}
              options={[
                { value: 'week', label: 'This Week' },
                { value: 'month', label: 'This Month' },
                { value: 'quarter', label: 'This Quarter' },
                { value: 'year', label: 'This Year' }
              ]}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentLabels.location}
            </label>
            <SAPSelect
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              options={[
                { value: 'Tokyo', label: 'Tokyo' },
                { value: 'Osaka', label: 'Osaka' },
                { value: 'Yokohama', label: 'Yokohama' },
                { value: 'Kyoto', label: 'Kyoto' }
              ]}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {currentLabels.industry}
            </label>
            <SAPSelect
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              options={[
                { value: 'technology', label: 'Technology' },
                { value: 'finance', label: 'Finance' },
                { value: 'healthcare', label: 'Healthcare' },
                { value: 'manufacturing', label: 'Manufacturing' }
              ]}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">127,340</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">+8,230</div>
            <div className="text-sm text-gray-600">New This Week</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">¥7.8M</div>
            <div className="text-sm text-gray-600">Avg Salary</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">23 days</div>
            <div className="text-sm text-gray-600">Avg Time to Hire</div>
          </div>
        </div>
      </div>
    </SAPCard>
  )

  return (
    <div className="sap-container">
      <div className="mb-8">
        <h2 className="sap-title">{currentLabels.title}</h2>
        <p className="sap-body text-gray-600">{currentLabels.subtitle}</p>
      </div>

      <div className="space-y-8">
        {renderRealTimeMonitoring()}
        {renderJobPortalAnalytics()}
        {renderLocationAnalytics()}
      </div>
    </div>
  )
}