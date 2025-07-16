'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/premium-visual.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function CandidatePipelineManagement() {
  const [candidates] = useState([
    {
      id: 1,
      name: '田中太郎',
      nameEn: 'Taro Tanaka',
      position: 'シニアエンジニア',
      stage: 'interview',
      score: 85,
      appliedDate: '2024-01-15',
      lastActivity: '2024-01-20',
      email: 'tanaka@email.com',
      phone: '+81-90-1234-5678',
      experience: '5年',
      skills: ['React', 'Node.js', 'AWS'],
      status: 'active'
    },
    {
      id: 2,
      name: '佐藤花子',
      nameEn: 'Hanako Sato',
      position: 'プロダクトマネージャー',
      stage: 'offer',
      score: 92,
      appliedDate: '2024-01-10',
      lastActivity: '2024-01-22',
      email: 'sato@email.com',
      phone: '+81-90-2345-6789',
      experience: '7年',
      skills: ['Product Management', 'Agile', 'Analytics'],
      status: 'active'
    },
    {
      id: 3,
      name: '鈴木一郎',
      nameEn: 'Ichiro Suzuki',
      position: 'データサイエンティスト',
      stage: 'screening',
      score: 78,
      appliedDate: '2024-01-18',
      lastActivity: '2024-01-18',
      email: 'suzuki@email.com',
      phone: '+81-90-3456-7890',
      experience: '3年',
      skills: ['Python', 'ML', 'TensorFlow'],
      status: 'active'
    }
  ])

  const [filters, setFilters] = useState({
    stage: '',
    position: '',
    status: ''
  })

  const [selectedCandidates, setSelectedCandidates] = useState<number[]>([])

  const stages = [
    { value: 'applied', label: '応募済み', labelEn: 'Applied', color: '#3b82f6', count: 0 },
    { value: 'screening', label: '書類選考', labelEn: 'Screening', color: '#f59e0b', count: 1 },
    { value: 'interview', label: '面接', labelEn: 'Interview', color: '#8b5cf6', count: 1 },
    { value: 'offer', label: '内定', labelEn: 'Offer', color: '#10b981', count: 1 },
    { value: 'hired', label: '採用', labelEn: 'Hired', color: '#059669', count: 0 },
    { value: 'rejected', label: '不採用', labelEn: 'Rejected', color: '#ef4444', count: 0 }
  ]

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const handleCandidateSelect = (candidateId: number) => {
    setSelectedCandidates(prev => 
      prev.includes(candidateId) 
        ? prev.filter(id => id !== candidateId)
        : [...prev, candidateId]
    )
  }

  const getStageColor = (stage: string) => {
    const stageObj = stages.find(s => s.value === stage)
    return stageObj?.color || '#6b7280'
  }

  const getStageInfo = (stage: string) => {
    return stages.find(s => s.value === stage)
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
            候補者パイプライン管理
          </h1>
          <p className="premium-subtitle">
            Candidate Pipeline Management & Tracking System
          </p>
        </div>

        {/* Pipeline Overview - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Pipeline Stages */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              パイプライン概要<br />
              <span className="text-sm font-medium text-gray-600">Pipeline Overview</span>
            </h3>
            <div className="space-y-3">
              {stages.map((stage) => {
                const count = candidates.filter(c => c.stage === stage.value).length
                const percentage = candidates.length > 0 ? Math.round((count / candidates.length) * 100) : 0
                return (
                  <div key={stage.value} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: stage.color }}
                      />
                      <div>
                        <div className="font-medium text-gray-900">{stage.label}</div>
                        <div className="text-sm text-gray-600">{stage.labelEn}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">{count}</div>
                      <div className="text-xs text-gray-600">{percentage}%</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Quick Analytics */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    総候補者数<br />
                    <span className="text-xs text-gray-500">Total Candidates</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{candidates.length}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+2 今週</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    平均スコア<br />
                    <span className="text-xs text-gray-500">Average Score</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {Math.round(candidates.reduce((sum, c) => sum + c.score, 0) / candidates.length)}
                  </p>
                </div>
                <div className="text-green-600 text-sm font-medium">+4.2</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    面接中<br />
                    <span className="text-xs text-gray-500">In Interview</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">
                    {candidates.filter(c => c.stage === 'interview').length}
                  </p>
                </div>
                <div className="text-blue-600 text-sm font-medium">Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            フィルター & 操作<br />
            <span className="text-sm font-medium text-gray-600">Filters & Actions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ステージ</label>
              <select
                name="stage"
                value={filters.stage}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">全ステージ</option>
                {stages.map(stage => (
                  <option key={stage.value} value={stage.value}>{stage.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">職種</label>
              <select
                name="position"
                value={filters.position}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">全職種</option>
                <option value="engineer">エンジニア</option>
                <option value="manager">マネージャー</option>
                <option value="designer">デザイナー</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">ステータス</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">全ステータス</option>
                <option value="active">アクティブ</option>
                <option value="on-hold">保留</option>
                <option value="withdrawn">辞退</option>
              </select>
            </div>
          </div>
          
          {selectedCandidates.length > 0 && (
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <span className="text-sm font-medium text-blue-900">
                {selectedCandidates.length}名選択中
              </span>
              <button className="premium-btn premium-btn-primary">
                一括操作
              </button>
            </div>
          )}
        </div>

        {/* Candidates Table */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                候補者一覧<br />
                <span className="text-sm font-medium text-gray-600">Candidates List</span>
              </h3>
              <div className="flex gap-3">
                <button className="premium-btn premium-btn-outline">
                  エクスポート<br />
                  <span className="text-xs">Export</span>
                </button>
                <button className="premium-btn premium-btn-primary">
                  候補者追加<br />
                  <span className="text-xs">Add Candidate</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCandidates(candidates.map(c => c.id))
                        } else {
                          setSelectedCandidates([])
                        }
                      }}
                      checked={selectedCandidates.length === candidates.length}
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    候補者<br />
                    <span className="text-xs normal-case">Candidate</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    職種<br />
                    <span className="text-xs normal-case">Position</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ステージ<br />
                    <span className="text-xs normal-case">Stage</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    スコア<br />
                    <span className="text-xs normal-case">Score</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    スキル<br />
                    <span className="text-xs normal-case">Skills</span>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作<br />
                    <span className="text-xs normal-case">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {candidates.map((candidate) => (
                  <tr key={candidate.id} className={`hover:bg-gray-50 ${selectedCandidates.includes(candidate.id) ? 'bg-blue-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedCandidates.includes(candidate.id)}
                        onChange={() => handleCandidateSelect(candidate.id)}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          {candidate.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                          <div className="text-sm text-gray-500">{candidate.nameEn}</div>
                          <div className="text-xs text-gray-400">{candidate.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{candidate.position}</div>
                      <div className="text-sm text-gray-500">{candidate.experience}経験</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span 
                        className="inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white"
                        style={{ backgroundColor: getStageColor(candidate.stage) }}
                      >
                        {getStageInfo(candidate.stage)?.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900 mr-2">{candidate.score}</div>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${candidate.score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {candidate.skills.slice(0, 2).map((skill, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                            {skill}
                          </span>
                        ))}
                        {candidate.skills.length > 2 && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-200 text-gray-600 rounded">
                            +{candidate.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-900">詳細</button>
                        <button className="text-green-600 hover:text-green-900">編集</button>
                        <button className="text-purple-600 hover:text-purple-900">連絡</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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