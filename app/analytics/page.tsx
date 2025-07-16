'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts'
import '../../styles/premium-visual.css'
import { PremiumIcons } from '../../components/PremiumIcons'
import { IntelligenceDashboard } from '../../components/IntelligenceDashboard'

export default function Analytics() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const monthlyData = [
    { month: '1月', candidates: 120, matches: 45 },
    { month: '2月', candidates: 135, matches: 52 },
    { month: '3月', candidates: 148, matches: 58 },
    { month: '4月', candidates: 162, matches: 67 },
    { month: '5月', candidates: 178, matches: 73 },
    { month: '6月', candidates: 195, matches: 78 }
  ]

  const skillsData = [
    { name: 'React', value: 35, color: '#3B82F6' },
    { name: 'Python', value: 25, color: '#10B981' },
    { name: 'Java', value: 20, color: '#F59E0B' },
    { name: 'Node.js', value: 12, color: '#EF4444' },
    { name: 'AWS', value: 8, color: '#8B5CF6' }
  ]

  const regionalData = [
    { region: '東京', candidates: 450, matches: 89 },
    { region: '大阪', candidates: 280, matches: 56 },
    { region: '京都', candidates: 165, matches: 32 },
    { region: '横浜', candidates: 220, matches: 44 },
    { region: '名古屋', candidates: 150, matches: 30 }
  ]

  const matchesData = [
    {
      id: 1,
      candidateName: '田中太郎',
      candidateNameEn: 'Taro Tanaka',
      position: 'シニアReact開発者',
      positionEn: 'Senior React Developer',
      client: 'テックコープ・ジャパン',
      clientEn: 'TechCorp Japan',
      salary: '¥8.5M',
      status: '完了',
      statusEn: 'Completed',
      date: '2025-01-15'
    },
    {
      id: 2,
      candidateName: '佐藤花子',
      candidateNameEn: 'Hanako Sato',
      position: 'データサイエンティスト',
      positionEn: 'Data Scientist',
      client: 'AIソリューションズ',
      clientEn: 'AI Solutions Ltd',
      salary: '¥9.2M',
      status: '進行中',
      statusEn: 'In Progress',
      date: '2025-01-14'
    },
    {
      id: 3,
      candidateName: '鈴木一郎',
      candidateNameEn: 'Ichiro Suzuki',
      position: 'DevOpsエンジニア',
      positionEn: 'DevOps Engineer',
      client: 'クラウドシステムズ',
      clientEn: 'Cloud Systems Inc',
      salary: '¥7.8M',
      status: '完了',
      statusEn: 'Completed',
      date: '2025-01-14'
    },
    {
      id: 4,
      candidateName: '山田美咲',
      candidateNameEn: 'Misaki Yamada',
      position: 'UXデザイナー',
      positionEn: 'UX Designer',
      client: 'デザインスタジオ東京',
      clientEn: 'Design Studio Tokyo',
      salary: '¥6.5M',
      status: '面接中',
      statusEn: 'Interview',
      date: '2025-01-13'
    },
    {
      id: 5,
      candidateName: '高橋健太',
      candidateNameEn: 'Kenta Takahashi',
      position: 'フルスタック開発者',
      positionEn: 'Full Stack Developer',
      client: 'スタートアップハブ',
      clientEn: 'StartupHub',
      salary: '¥7.2M',
      status: '完了',
      statusEn: 'Completed',
      date: '2025-01-13'
    }
  ]

  const filteredMatches = matchesData.filter(match =>
    match.candidateName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.candidateNameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
    match.positionEn.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredMatches.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentMatches = filteredMatches.slice(startIndex, startIndex + itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case '完了': return 'bg-green-100 text-green-800'
      case '進行中': return 'bg-blue-100 text-blue-800'
      case '面接中': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
            マーケットインテリジェンス分析
          </h1>
          <p className="premium-subtitle">
            Advanced Market Intelligence & Cultural Analytics Platform
          </p>
        </div>

        {/* Intelligence Dashboard */}
        <IntelligenceDashboard />
        
        {/* Traditional Analytics Section */}
        <div className="mt-12">
          <div className="flex justify-between items-end mb-8">
            <div className="premium-section-header">
              <h2 className="premium-section-title">詳細分析</h2>
              <p className="premium-section-subtitle">Detailed Analytics & Historical Data</p>
            </div>
            <div className="flex gap-4">
              <button className="premium-btn premium-btn-primary">
                更新<br />
                <span className="text-xs">Refresh</span>
              </button>
              <button className="premium-btn premium-btn-outline">
                エクスポート<br />
                <span className="text-xs">Export</span>
              </button>
            </div>
          </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Candidate & Client Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    アクティブ求職者<br />
                    <span className="text-xs text-gray-500">Active Candidates</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">1,247</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+12.5%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    アクティブ企業<br />
                    <span className="text-xs text-gray-500">Active Clients</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">89</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+8.3%</div>
              </div>
            </div>
          </div>

          {/* Right Column - Performance & Revenue Metrics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    成功マッチング<br />
                    <span className="text-xs text-gray-500">Successful Matches</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">156</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+15.7%</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    売上 (年度累計)<br />
                    <span className="text-xs text-gray-500">Revenue (YTD)</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">¥2.8M</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+22.1%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Monthly Trends */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              月次トレンド<br />
              <span className="text-sm font-medium text-gray-600">Monthly Trends</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="candidates" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="matches" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skills Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              需要の高いスキル<br />
              <span className="text-sm font-medium text-gray-600">Top Skills in Demand</span>
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {skillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: skill.color }}></div>
                  <span className="text-sm text-gray-600">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            地域別パフォーマンス<br />
            <span className="text-sm font-medium text-gray-600">Regional Performance</span>
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={regionalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="candidates" fill="#3B82F6" />
              <Bar dataKey="matches" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                最近のマッチング<br />
                <span className="text-sm font-medium text-gray-600">Recent Matches</span>
              </h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="検索 / Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  フィルター<br />
                  <span className="text-xs">Filter</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    求職者<br />
                    <span className="text-xs normal-case">Candidate</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    職種<br />
                    <span className="text-xs normal-case">Position</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    企業<br />
                    <span className="text-xs normal-case">Client</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    年収<br />
                    <span className="text-xs normal-case">Salary</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ステータス<br />
                    <span className="text-xs normal-case">Status</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    日付<br />
                    <span className="text-xs normal-case">Date</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    アクション<br />
                    <span className="text-xs normal-case">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentMatches.map((match) => (
                  <tr key={match.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {match.candidateName.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{match.candidateName}</div>
                          <div className="text-sm text-gray-500">{match.candidateNameEn}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{match.position}</div>
                      <div className="text-sm text-gray-500">{match.positionEn}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{match.client}</div>
                      <div className="text-sm text-gray-500">{match.clientEn}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {match.salary}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(match.status)}`}>
                        {match.status}<br />
                        <span className="text-xs">{match.statusEn}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {match.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-900">詳細</button>
                        <button className="text-green-600 hover:text-green-900">編集</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-700">
              {filteredMatches.length}件中{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredMatches.length)}件を表示<br />
              <span className="text-xs">Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredMatches.length)} of {filteredMatches.length} results</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                前へ / Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded-md text-sm ${
                    currentPage === page
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次へ / Next
              </button>
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
    </div>
  )
}

