/**
 * SAP Fiori Enterprise Cockpit Dashboard
 * Main control center for aiKODA Cultural Intelligence Platform
 * Real-time KPIs, cultural analytics, and market intelligence
 */

'use client'

import React, { useState, useEffect } from 'react'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'

interface DashboardKPIs {
  total_candidates: number
  active_jobs: number
  cultural_match_avg: number
  placement_success_rate: number
  time_to_fill_days: number
  pipeline_value: number
}

interface CulturalTrend {
  dimension: string
  score: number
  trend: number
  improvement: string
}

interface RecentMatch {
  candidateId: string
  candidateName: string
  position: string
  company: string
  matchScore: number
  culturalFit: number
  status: 'pending' | 'interview' | 'offer' | 'placed'
  timestamp: string
}

interface AlertNotification {
  id: string
  type: 'info' | 'warning' | 'error' | 'success'
  title: string
  message: string
  timestamp: string
}

export default function EnterpriseCockpit() {
  const [kpis, setKpis] = useState<DashboardKPIs>({
    total_candidates: 0,
    active_jobs: 0,
    cultural_match_avg: 0,
    placement_success_rate: 0,
    time_to_fill_days: 0,
    pipeline_value: 0
  })

  const [culturalTrends, setCulturalTrends] = useState<CulturalTrend[]>([])
  const [recentMatches, setRecentMatches] = useState<RecentMatch[]>([])
  const [alerts, setAlerts] = useState<AlertNotification[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading real-time data
    setTimeout(() => {
      setKpis({
        total_candidates: 2847,
        active_jobs: 156,
        cultural_match_avg: 84.2,
        placement_success_rate: 76.8,
        time_to_fill_days: 18.5,
        pipeline_value: 847000000
      })

      setCulturalTrends([
        { dimension: 'Wa (Harmony)', score: 88.5, trend: 2.3, improvement: 'Increasing' },
        { dimension: 'Kaizen', score: 85.2, trend: 1.8, improvement: 'Stable' },
        { dimension: 'Omotenashi', score: 92.1, trend: 3.1, improvement: 'Strong Growth' },
        { dimension: 'Teamwork', score: 79.6, trend: -0.5, improvement: 'Needs Focus' },
        { dimension: 'Innovation', score: 86.8, trend: 4.2, improvement: 'Excellent' }
      ])

      setRecentMatches([
        { candidateId: 'CAND001', candidateName: 'Tanaka Hiroshi', position: 'Senior AI Engineer', company: 'Tokyo Tech Solutions', matchScore: 94, culturalFit: 96, status: 'offer', timestamp: '2025-01-17T09:30:00' },
        { candidateId: 'CAND002', candidateName: 'Sarah Chen', position: 'Product Manager', company: 'Osaka Digital Corp', matchScore: 87, culturalFit: 82, status: 'interview', timestamp: '2025-01-17T08:15:00' },
        { candidateId: 'CAND003', candidateName: 'Kumar Pradeep', position: 'Data Scientist', company: 'Kyoto Analytics', matchScore: 91, culturalFit: 89, status: 'pending', timestamp: '2025-01-17T07:45:00' }
      ])

      setAlerts([
        { id: 'ALERT001', type: 'success', title: 'High Match Found', message: 'Candidate Tanaka Hiroshi shows 96% cultural fit for Tokyo Tech Solutions', timestamp: '2025-01-17T09:30:00' },
        { id: 'ALERT002', type: 'warning', title: 'Skills Gap Identified', message: 'Increasing demand for AI/ML skills in Osaka market', timestamp: '2025-01-17T08:45:00' },
        { id: 'ALERT003', type: 'info', title: 'Market Update', message: 'New salary benchmarks available for Software Engineering roles', timestamp: '2025-01-17T08:00:00' }
      ])

      setIsLoading(false)
    }, 1500)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'placed': return '#30914C'
      case 'offer': return '#0070F2'
      case 'interview': return '#E76500'
      case 'pending': return '#6A6D70'
      default: return '#6A6D70'
    }
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success': return '✓'
      case 'warning': return '⚠'
      case 'error': return '✕'
      case 'info': return 'ℹ'
      default: return 'ℹ'
    }
  }

  if (isLoading) {
    return (
      <div className="sap-cockpit-loading">
        <div className="sap-spinner"></div>
        <p>Loading Enterprise Cockpit...</p>
      </div>
    )
  }

  return (
    <div className="sap-cockpit">
      <div className="sap-cockpit-header">
        <h1 className="sap-title">aiKODA Enterprise Cockpit</h1>
        <p className="sap-subtitle">Cultural Intelligence & Talent Management Dashboard</p>
      </div>

      {/* KPI Cards */}
      <div className="sap-kpi-grid">
        <div className="sap-kpi-card primary">
          <div className="sap-kpi-icon">👥</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{kpis.total_candidates.toLocaleString()}</div>
            <div className="sap-kpi-label">Total Candidates</div>
            <div className="sap-kpi-trend positive">+12% this month</div>
          </div>
        </div>

        <div className="sap-kpi-card secondary">
          <div className="sap-kpi-icon">💼</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{kpis.active_jobs}</div>
            <div className="sap-kpi-label">Active Positions</div>
            <div className="sap-kpi-trend positive">+8 new today</div>
          </div>
        </div>

        <div className="sap-kpi-card success">
          <div className="sap-kpi-icon">🎯</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{kpis.cultural_match_avg}%</div>
            <div className="sap-kpi-label">Avg Cultural Match</div>
            <div className="sap-kpi-trend positive">+2.3% vs last quarter</div>
          </div>
        </div>

        <div className="sap-kpi-card warning">
          <div className="sap-kpi-icon">⏱</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{kpis.time_to_fill_days}</div>
            <div className="sap-kpi-label">Avg Days to Fill</div>
            <div className="sap-kpi-trend negative">+1.2 days</div>
          </div>
        </div>

        <div className="sap-kpi-card info">
          <div className="sap-kpi-icon">📈</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{kpis.placement_success_rate}%</div>
            <div className="sap-kpi-label">Success Rate</div>
            <div className="sap-kpi-trend positive">+5.2% YoY</div>
          </div>
        </div>

        <div className="sap-kpi-card accent">
          <div className="sap-kpi-icon">💰</div>
          <div className="sap-kpi-content">
            <div className="sap-kpi-value">{formatCurrency(kpis.pipeline_value)}</div>
            <div className="sap-kpi-label">Pipeline Value</div>
            <div className="sap-kpi-trend positive">+18% growth</div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="sap-cockpit-grid">
        {/* Cultural Intelligence Chart */}
        <div className="sap-card cultural-radar">
          <div className="sap-card-header">
            <h3>Cultural Intelligence Overview</h3>
            <span className="sap-badge">47 Dimensions</span>
          </div>
          <div className="sap-card-content">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={culturalTrends}>
                <PolarGrid />
                <PolarAngleAxis dataKey="dimension" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Cultural Score" dataKey="score" stroke="#0070F2" fill="#0070F2" fillOpacity={0.3} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Matches */}
        <div className="sap-card recent-matches">
          <div className="sap-card-header">
            <h3>Recent High Matches</h3>
            <span className="sap-badge success">Live Updates</span>
          </div>
          <div className="sap-card-content">
            <div className="sap-match-list">
              {recentMatches.map((match, index) => (
                <div key={match.candidateId} className="sap-match-item">
                  <div className="sap-match-info">
                    <div className="sap-match-name">{match.candidateName}</div>
                    <div className="sap-match-position">{match.position} at {match.company}</div>
                    <div className="sap-match-time">{new Date(match.timestamp).toLocaleTimeString('ja-JP')}</div>
                  </div>
                  <div className="sap-match-scores">
                    <div className="sap-score-badge overall">{match.matchScore}%</div>
                    <div className="sap-score-badge cultural">{match.culturalFit}%</div>
                    <div className={`sap-status-badge ${match.status}`}>
                      {match.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="sap-card performance-trends">
          <div className="sap-card-header">
            <h3>Placement Performance Trends</h3>
            <div className="sap-time-filter">
              <button className="sap-filter-btn active">7D</button>
              <button className="sap-filter-btn">30D</button>
              <button className="sap-filter-btn">90D</button>
            </div>
          </div>
          <div className="sap-card-content">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={[
                { day: 'Mon', placements: 12, cultural_avg: 85 },
                { day: 'Tue', placements: 18, cultural_avg: 87 },
                { day: 'Wed', placements: 15, cultural_avg: 83 },
                { day: 'Thu', placements: 22, cultural_avg: 89 },
                { day: 'Fri', placements: 28, cultural_avg: 91 },
                { day: 'Sat', placements: 8, cultural_avg: 86 },
                { day: 'Sun', placements: 5, cultural_avg: 84 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="placements" stroke="#0070F2" strokeWidth={2} />
                <Line type="monotone" dataKey="cultural_avg" stroke="#30914C" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alert Panel */}
        <div className="sap-card alert-panel">
          <div className="sap-card-header">
            <h3>System Alerts</h3>
            <span className="sap-badge warning">{alerts.length} Active</span>
          </div>
          <div className="sap-card-content">
            <div className="sap-alert-list">
              {alerts.map((alert) => (
                <div key={alert.id} className={`sap-alert-item ${alert.type}`}>
                  <div className="sap-alert-icon">{getAlertIcon(alert.type)}</div>
                  <div className="sap-alert-content">
                    <div className="sap-alert-title">{alert.title}</div>
                    <div className="sap-alert-message">{alert.message}</div>
                    <div className="sap-alert-time">{new Date(alert.timestamp).toLocaleTimeString('ja-JP')}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sap-cockpit {
          padding: 2rem;
          background: #FAFAFA;
          min-height: 100vh;
          font-family: "72", Helvetica, Arial, sans-serif;
        }

        .sap-cockpit-header {
          margin-bottom: 2rem;
        }

        .sap-title {
          font-size: 2rem;
          font-weight: 400;
          color: #32363A;
          margin: 0 0 0.5rem 0;
        }

        .sap-subtitle {
          font-size: 1.125rem;
          color: #6A6D70;
          margin: 0;
        }

        .sap-cockpit-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 50vh;
          color: #6A6D70;
        }

        .sap-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid #D5DAE0;
          border-top: 3px solid #0070F2;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .sap-kpi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .sap-kpi-card {
          background: #FFFFFF;
          border: 1px solid #D5DAE0;
          border-radius: 4px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          transition: box-shadow 0.2s ease;
        }

        .sap-kpi-card:hover {
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .sap-kpi-card.primary { border-left: 4px solid #0070F2; }
        .sap-kpi-card.secondary { border-left: 4px solid #354A5F; }
        .sap-kpi-card.success { border-left: 4px solid #30914C; }
        .sap-kpi-card.warning { border-left: 4px solid #E76500; }
        .sap-kpi-card.info { border-left: 4px solid #0070F2; }
        .sap-kpi-card.accent { border-left: 4px solid #BB0000; }

        .sap-kpi-icon {
          font-size: 2rem;
          margin-right: 1rem;
        }

        .sap-kpi-content {
          flex: 1;
        }

        .sap-kpi-value {
          font-size: 1.875rem;
          font-weight: 600;
          color: #32363A;
          line-height: 1;
        }

        .sap-kpi-label {
          font-size: 0.875rem;
          color: #6A6D70;
          margin: 0.25rem 0;
        }

        .sap-kpi-trend {
          font-size: 0.75rem;
          font-weight: 500;
        }

        .sap-kpi-trend.positive { color: #30914C; }
        .sap-kpi-trend.negative { color: #BB0000; }

        .sap-cockpit-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 1.5rem;
        }

        .sap-card {
          background: #FFFFFF;
          border: 1px solid #D5DAE0;
          border-radius: 4px;
          overflow: hidden;
        }

        .sap-card-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #D5DAE0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #FAFAFA;
        }

        .sap-card-header h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: #32363A;
        }

        .sap-card-content {
          padding: 1.5rem;
        }

        .sap-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 500;
          background: #0070F2;
          color: white;
        }

        .sap-badge.success { background: #30914C; }
        .sap-badge.warning { background: #E76500; }

        .sap-match-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sap-match-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: #FAFAFA;
          border-radius: 4px;
        }

        .sap-match-info {
          flex: 1;
        }

        .sap-match-name {
          font-weight: 600;
          color: #32363A;
          margin-bottom: 0.25rem;
        }

        .sap-match-position {
          font-size: 0.875rem;
          color: #6A6D70;
          margin-bottom: 0.25rem;
        }

        .sap-match-time {
          font-size: 0.75rem;
          color: #6A6D70;
        }

        .sap-match-scores {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .sap-score-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .sap-score-badge.overall {
          background: #0070F2;
          color: white;
        }

        .sap-score-badge.cultural {
          background: #30914C;
          color: white;
        }

        .sap-status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .sap-status-badge.placed { background: #30914C; color: white; }
        .sap-status-badge.offer { background: #0070F2; color: white; }
        .sap-status-badge.interview { background: #E76500; color: white; }
        .sap-status-badge.pending { background: #6A6D70; color: white; }

        .sap-time-filter {
          display: flex;
          gap: 0.5rem;
        }

        .sap-filter-btn {
          padding: 0.25rem 0.75rem;
          border: 1px solid #D5DAE0;
          background: white;
          border-radius: 4px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .sap-filter-btn:hover {
          background: #FAFAFA;
        }

        .sap-filter-btn.active {
          background: #0070F2;
          color: white;
          border-color: #0070F2;
        }

        .sap-alert-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .sap-alert-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 4px;
          border-left: 4px solid;
        }

        .sap-alert-item.success {
          background: #F1F8F3;
          border-left-color: #30914C;
        }

        .sap-alert-item.warning {
          background: #FEF7F0;
          border-left-color: #E76500;
        }

        .sap-alert-item.error {
          background: #FDF2F2;
          border-left-color: #BB0000;
        }

        .sap-alert-item.info {
          background: #F0F7FF;
          border-left-color: #0070F2;
        }

        .sap-alert-icon {
          font-weight: bold;
          font-size: 1rem;
        }

        .sap-alert-content {
          flex: 1;
        }

        .sap-alert-title {
          font-weight: 600;
          color: #32363A;
          margin-bottom: 0.25rem;
        }

        .sap-alert-message {
          font-size: 0.875rem;
          color: #6A6D70;
          margin-bottom: 0.25rem;
        }

        .sap-alert-time {
          font-size: 0.75rem;
          color: #6A6D70;
        }

        @media (max-width: 768px) {
          .sap-cockpit {
            padding: 1rem;
          }

          .sap-kpi-grid {
            grid-template-columns: 1fr;
          }

          .sap-cockpit-grid {
            grid-template-columns: 1fr;
          }

          .sap-match-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .sap-match-scores {
            align-self: stretch;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  )
}