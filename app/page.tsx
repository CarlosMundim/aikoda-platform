'use client'

import Link from 'next/link'
import '../styles/globals.css'
import '../styles/landing.css'
import '../styles/premium-visual.css'

export default function Home() {
  return (
    <div className="zen-container zen-spacing">
      <div className="premium-dashboard-header">
        <h1 className="premium-title">
          人材管理プラットフォーム
        </h1>
        <p className="premium-subtitle">
          Advanced Market Intelligence Platform
        </p>
      </div>
        
      {/* Main Registration Portals */}
      <div className="premium-section-header">
        <h2 className="premium-section-title">メインポータル</h2>
        <p className="premium-section-subtitle">Executive Access Portals</p>
      </div>
      <div className="premium-portal-grid">
        <Link href="/candidate/auth" className="executive-portal-card candidate">
          <div className="premium-icon">
            <span style={{ fontSize: '1.5rem' }}>👥</span>
          </div>
          <h3 className="executive-card-title">求職者ポータル</h3>
          <p className="executive-card-subtitle">Candidate Intelligence Portal</p>
        </Link>

        <Link href="/client/auth" className="executive-portal-card client">
          <div className="premium-icon client">
            <span style={{ fontSize: '1.5rem' }}>🏢</span>
          </div>
          <h3 className="executive-card-title">企業ポータル</h3>
          <p className="executive-card-subtitle">Enterprise Intelligence Portal</p>
        </Link>
      </div>

      {/* Intelligence & Analytics */}
      <div className="premium-section-header">
        <h2 className="premium-section-title">インテリジェンス分析</h2>
        <p className="premium-section-subtitle">Advanced Market Intelligence & Cultural Analytics</p>
      </div>
      <div className="premium-tools-grid">
        <Link href="/dashboard/market-intelligence" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🤖</span>
          </div>
          <h4 className="premium-tool-title">市場インテリジェンス</h4>
          <p className="premium-tool-desc">AI-Powered Market Intelligence Dashboard</p>
        </Link>

        <Link href="/analytics" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>📊</span>
          </div>
          <h4 className="premium-tool-title">総合分析</h4>
          <p className="premium-tool-desc">Platform Intelligence Dashboard</p>
        </Link>

        <Link href="/candidate/analytics" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🎯</span>
          </div>
          <h4 className="premium-tool-title">候補者分析</h4>
          <p className="premium-tool-desc">47-Dimension Cultural Assessment</p>
        </Link>

        <Link href="/admin/analytics" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🔧</span>
          </div>
          <h4 className="premium-tool-title">システム分析</h4>
          <p className="premium-tool-desc">Executive System Analytics</p>
        </Link>
      </div>

      {/* Talent Management */}
      <div className="premium-section-header">
        <h2 className="premium-section-title">人材管理</h2>
        <p className="premium-section-subtitle">Comprehensive Talent Lifecycle Management</p>
      </div>
      <div className="premium-tools-grid">
        <Link href="/client/jobs" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>💼</span>
          </div>
          <h4 className="premium-tool-title">求人投稿</h4>
          <p className="premium-tool-desc">Intelligent Job Posting</p>
        </Link>

        <Link href="/client/pipeline" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🔄</span>
          </div>
          <h4 className="premium-tool-title">パイプライン管理</h4>
          <p className="premium-tool-desc">Advanced Pipeline Analytics</p>
        </Link>

        <Link href="/candidate/jobs" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🔍</span>
          </div>
          <h4 className="premium-tool-title">求人検索</h4>
          <p className="premium-tool-desc">AI-Powered Job Matching</p>
        </Link>
      </div>

      {/* Cultural Intelligence */}
      <div className="premium-section-header">
        <h2 className="premium-section-title">文化的知能</h2>
        <p className="premium-section-subtitle">Japanese Workplace Cultural Intelligence Engine</p>
      </div>
      <div className="premium-tools-grid">
        <Link href="/candidate/registration" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>📝</span>
          </div>
          <h4 className="premium-tool-title">候補者登録</h4>
          <p className="premium-tool-desc">Cultural Fit Registration</p>
        </Link>

        <Link href="/candidate/profile" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>👤</span>
          </div>
          <h4 className="premium-tool-title">候補者プロフィール</h4>
          <p className="premium-tool-desc">Psychological Profiling</p>
        </Link>

        <Link href="/client/profile" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>🌸</span>
          </div>
          <h4 className="premium-tool-title">企業プロフィール</h4>
          <p className="premium-tool-desc">Corporate Culture Analysis</p>
        </Link>

        <Link href="/candidate/skills" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>⚡</span>
          </div>
          <h4 className="premium-tool-title">スキル評価</h4>
          <p className="premium-tool-desc">Advanced Skills & Cultural Assessment</p>
        </Link>
      </div>

      {/* System Administration */}
      <div className="premium-section-header">
        <h2 className="premium-section-title">システム管理</h2>
        <p className="premium-section-subtitle">Enterprise System Management</p>
      </div>
      <div className="premium-tools-grid">
        <Link href="/admin/users" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>👥</span>
          </div>
          <h4 className="premium-tool-title">ユーザー管理</h4>
          <p className="premium-tool-desc">Executive User Management</p>
        </Link>

        <Link href="/admin/config" className="premium-tool-card">
          <div className="premium-tool-icon">
            <span style={{ fontSize: '1.25rem' }}>⚙️</span>
          </div>
          <h4 className="premium-tool-title">システム設定</h4>
          <p className="premium-tool-desc">Platform Configuration</p>
        </Link>
      </div>
    </div>
  )
}