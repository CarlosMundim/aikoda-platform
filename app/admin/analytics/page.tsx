'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import '../../../styles/premium-visual.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function SystemAnalytics() {
  const [systemStats] = useState({
    totalUsers: 1247,
    activeJobs: 89,
    totalApplications: 3456,
    systemUptime: '99.9%',
    responseTime: '1.2s',
    successRate: '98.7%'
  })

  const systemUsageData = [
    { time: '00:00', users: 45, requests: 234 },
    { time: '04:00', users: 23, requests: 124 },
    { time: '08:00', users: 156, requests: 845 },
    { time: '12:00', users: 289, requests: 1234 },
    { time: '16:00', users: 345, requests: 1567 },
    { time: '20:00', users: 234, requests: 1123 }
  ]

  const performanceData = [
    { metric: 'CPU使用率', value: 45, max: 100 },
    { metric: 'メモリ使用率', value: 67, max: 100 },
    { metric: 'ディスク使用率', value: 23, max: 100 },
    { metric: 'ネットワーク', value: 34, max: 100 }
  ]

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
            システム分析
          </h1>
          <p className="premium-subtitle">
            System Analytics & Performance Monitoring
          </p>
        </div>

        {/* KPI Cards - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - System Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    総ユーザー数<br />
                    <span className="text-xs text-gray-500">Total Users</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.totalUsers}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+5.2%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    アクティブ求人<br />
                    <span className="text-xs text-gray-500">Active Jobs</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.activeJobs}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+12.3%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    総応募数<br />
                    <span className="text-xs text-gray-500">Total Applications</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.totalApplications.toLocaleString()}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+8.7%</div>
              </div>
            </div>
          </div>

          {/* Right Column - Performance Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    システム稼働率<br />
                    <span className="text-xs text-gray-500">System Uptime</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.systemUptime}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">Excellent</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    応答時間<br />
                    <span className="text-xs text-gray-500">Response Time</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.responseTime}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">-15%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    成功率<br />
                    <span className="text-xs text-gray-500">Success Rate</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{systemStats.successRate}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+2.1%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* System Usage Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              システム使用状況<br />
              <span className="text-sm font-medium text-gray-600">System Usage Analytics</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={systemUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="requests" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics Chart */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              システムパフォーマンス<br />
              <span className="text-sm font-medium text-gray-600">System Performance Metrics</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="metric" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Status Grid */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            システムステータス<br />
            <span className="text-sm font-medium text-gray-600">System Status & Health Monitoring</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <PremiumIcons.Success className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">データベース</h4>
                <p className="text-sm text-green-600">正常稼働中</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <PremiumIcons.Success className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">API サーバー</h4>
                <p className="text-sm text-green-600">正常稼働中</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <div className="p-2 bg-green-100 rounded-lg">
                <PremiumIcons.Success className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">認証システム</h4>
                <p className="text-sm text-green-600">正常稼働中</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <PremiumIcons.Analytics className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">キャッシュ</h4>
                <p className="text-sm text-yellow-600">最適化中</p>
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
