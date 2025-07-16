'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
import '../../../styles/premium-visual.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function CandidateAnalytics() {
  const [analytics] = useState({
    profileViews: 156,
    applications: 12,
    interviews: 5,
    offers: 2,
    responseRate: 68,
    matchingScore: 85
  })

  const monthlyData = [
    { month: '1月', views: 45, applications: 8 },
    { month: '2月', views: 52, applications: 10 },
    { month: '3月', views: 38, applications: 6 },
    { month: '4月', views: 67, applications: 15 },
    { month: '5月', views: 73, applications: 12 },
    { month: '6月', views: 89, applications: 18 }
  ]

  const skillsAnalytics = [
    { skill: 'React', demand: 85, proficiency: 90 },
    { skill: 'Node.js', demand: 78, proficiency: 85 },
    { skill: 'AWS', demand: 92, proficiency: 75 },
    { skill: 'Python', demand: 65, proficiency: 70 },
    { skill: 'TypeScript', demand: 88, proficiency: 82 }
  ]

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6']

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="zen-container zen-spacing">
        {/* HOME Button - Top */}
        <div className="mb-8">
          <Link href="/" className="premium-btn premium-btn-outline">
            <PremiumIcons.Home className="w-5 h-5" />
            ホーム<br />
            <span className="text-xs">HOME</span>
          </Link>
        </div>
        
        {/* Premium Header */}
        <div className="premium-dashboard-header mb-12">
          <h1 className="premium-title">
            候補者分析
          </h1>
          <p className="premium-subtitle">
            Candidate Analytics & Personal Performance Insights
          </p>
        </div>

        {/* KPI Cards - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Activity Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    プロフィール閲覧数<br />
                    <span className="text-xs text-gray-500">Profile Views</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{analytics.profileViews}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+12%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    応募数<br />
                    <span className="text-xs text-gray-500">Applications</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{analytics.applications}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+25%</div>
              </div>
            </div>
          </div>

          {/* Right Column - Success Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    面接数<br />
                    <span className="text-xs text-gray-500">Interviews</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{analytics.interviews}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+67%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    オファー数<br />
                    <span className="text-xs text-gray-500">Job Offers</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{analytics.offers}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Activity Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              月別活動<br />
              <span className="text-sm font-medium text-gray-600">Monthly Activity</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="views" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="applications" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Analysis Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              スキル分析<br />
              <span className="text-sm font-medium text-gray-600">Skills Analysis</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsAnalytics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="skill" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="demand" fill="#3B82F6" />
                <Bar dataKey="proficiency" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            キーインサイト<br />
            <span className="text-sm font-medium text-gray-600">Key Insights & Recommendations</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <PremiumIcons.Assessment className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">プロフィール最適化</h4>
                <p className="text-sm text-gray-600">AWS関連のスキルを強調することで、マッチング率が向上する可能性があります。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <PremiumIcons.Trending className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">応募戦略</h4>
                <p className="text-sm text-gray-600">月末に応募数が増加する傾向があります。タイミングを調整しましょう。</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <PremiumIcons.Culture className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">スキル開発</h4>
                <p className="text-sm text-gray-600">TypeScriptの需要が高まっています。学習を検討してください。</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* HOME Button - Bottom */}
        <div className="mt-8 text-center">
          <Link href="/" className="btn btn-outline">
            ホーム<br />
            <span className="text-xs">HOME</span>
          </Link>
        </div>
      </div>
    </div>
  )
}