'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/premium-visual.css'
import '../../../styles/premium-forms.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function JobPostingManagement() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobId: '',
    department: '',
    jobType: '',
    salaryMin: '',
    salaryMax: '',
    experienceLevel: '',
    remoteWork: '',
    jobDescription: '',
    requirements: ''
  })

  const [activeJobs] = useState([
    {
      id: 1,
      title: 'シニアソフトウェアエンジニア',
      titleEn: 'Senior Software Engineer',
      department: 'エンジニアリング',
      status: '公開中',
      applications: 23,
      datePosted: '2025-01-10'
    },
    {
      id: 2,
      title: 'プロダクトマネージャー',
      titleEn: 'Product Manager',
      department: 'プロダクト',
      status: '公開中',
      applications: 15,
      datePosted: '2025-01-12'
    },
    {
      id: 3,
      title: 'データサイエンティスト',
      titleEn: 'Data Scientist',
      department: 'AI/ML',
      status: '下書き',
      applications: 0,
      datePosted: '2025-01-15'
    }
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const generateJobId = () => {
    const id = 'JOB-' + Date.now().toString().slice(-6)
    setFormData(prev => ({ ...prev, jobId: id }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Job posting data:', formData)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case '公開中': return 'bg-green-100 text-green-800'
      case '下書き': return 'bg-yellow-100 text-yellow-800'
      case '終了': return 'bg-gray-100 text-gray-800'
      default: return 'bg-blue-100 text-blue-800'
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
            求人投稿管理
          </h1>
          <p className="premium-subtitle">
            Job Posting Management & Creation Platform
          </p>
        </div>

        {/* Current Jobs Overview - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Left Column - Active Jobs */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              アクティブ求人<br />
              <span className="text-sm font-medium text-gray-600">Active Job Postings</span>
            </h3>
            <div className="space-y-4">
              {activeJobs.filter(job => job.status === '公開中').map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-gray-900">{job.title}</h4>
                    <p className="text-sm text-gray-600">{job.titleEn}</p>
                    <p className="text-xs text-gray-500">{job.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">{job.applications}</div>
                    <div className="text-xs text-gray-600">応募者</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    公開中求人<br />
                    <span className="text-xs text-gray-500">Active Postings</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{activeJobs.filter(job => job.status === '公開中').length}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+1 今週</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    総応募者数<br />
                    <span className="text-xs text-gray-500">Total Applications</span>
                  </p>
                  <p className="text-3xl font-bold text-gray-900">{activeJobs.reduce((sum, job) => sum + job.applications, 0)}</p>
                </div>
                <div className="text-green-600 text-sm font-medium">+12 今週</div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Creation Form */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            新規求人作成<br />
            <span className="text-sm font-medium text-gray-600">Create New Job Posting</span>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information - 2 Column Layout */}
            <div className="form-grid-responsive">
              <div className="form-field">
                <label className="form-label form-label-required">
                  職種名
                  <span className="form-label-subtitle">Job Title</span>
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="シニアソフトウェアエンジニア"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  求人ID
                  <span className="form-label-subtitle">Job ID</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="jobId"
                    value={formData.jobId}
                    onChange={handleInputChange}
                    placeholder="JOB-123456"
                    className="form-input"
                    readOnly
                  />
                  <button type="button" onClick={generateJobId} className="premium-btn premium-btn-outline">
                    生成
                  </button>
                </div>
              </div>

              <div className="form-field">
                <label className="form-label form-label-required">
                  部署
                  <span className="form-label-subtitle">Department</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">部署を選択</option>
                  <option value="engineering">エンジニアリング</option>
                  <option value="product">プロダクト</option>
                  <option value="design">デザイン</option>
                  <option value="sales">営業</option>
                  <option value="marketing">マーケティング</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label form-label-required">
                  雇用形態
                  <span className="form-label-subtitle">Job Type</span>
                </label>
                <select
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">雇用形態を選択</option>
                  <option value="full-time">正社員</option>
                  <option value="contract">契約社員</option>
                  <option value="part-time">パートタイム</option>
                  <option value="internship">インターンシップ</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">
                  最低給与
                  <span className="form-label-subtitle">Salary Min (年額)</span>
                </label>
                <input
                  type="number"
                  name="salaryMin"
                  value={formData.salaryMin}
                  onChange={handleInputChange}
                  placeholder="5000000"
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  最高給与
                  <span className="form-label-subtitle">Salary Max (年額)</span>
                </label>
                <input
                  type="number"
                  name="salaryMax"
                  value={formData.salaryMax}
                  onChange={handleInputChange}
                  placeholder="8000000"
                  className="form-input"
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  経験レベル
                  <span className="form-label-subtitle">Experience Level</span>
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">経験レベルを選択</option>
                  <option value="entry">新卒・未経験</option>
                  <option value="mid">中級</option>
                  <option value="senior">上級</option>
                  <option value="executive">エグゼクティブ</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label">
                  リモートワーク
                  <span className="form-label-subtitle">Remote Work</span>
                </label>
                <select
                  name="remoteWork"
                  value={formData.remoteWork}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">リモートワークオプション</option>
                  <option value="none">なし</option>
                  <option value="partial">部分的</option>
                  <option value="full">完全リモート</option>
                </select>
              </div>
            </div>

            {/* Job Description */}
            <div className="form-field-full">
              <label className="form-label form-label-required">
                職務内容
                <span className="form-label-subtitle">Job Description</span>
              </label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleInputChange}
                placeholder="この職種の詳細な職務内容を記載してください..."
                className="form-textarea"
                rows={6}
                required
              />
            </div>

            {/* Requirements */}
            <div className="form-field-full">
              <label className="form-label form-label-required">
                応募要件
                <span className="form-label-subtitle">Requirements</span>
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="必要なスキル、経験、資格等を記載してください..."
                className="form-textarea"
                rows={4}
                required
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t">
              <button type="button" className="premium-btn premium-btn-outline">
                下書き保存<br />
                <span className="text-xs">Save Draft</span>
              </button>
              <button type="button" className="premium-btn premium-btn-outline">
                プレビュー<br />
                <span className="text-xs">Preview</span>
              </button>
              <button type="submit" className="premium-btn premium-btn-primary">
                求人投稿<br />
                <span className="text-xs">Post Job</span>
              </button>
            </div>
          </form>
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