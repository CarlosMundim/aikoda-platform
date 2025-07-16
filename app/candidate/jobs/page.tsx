'use client'
import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/globals.css'

export default function JobSearchApplications() {
  const [jobs] = useState([
    { id: 1, title: 'シニアエンジニア', company: 'テック株式会社', salary: '600-800万円', location: '東京', status: 'applied' },
    { id: 2, title: 'プロダクトマネージャー', company: 'スタートアップ', salary: '700-900万円', location: '大阪', status: 'interview' }
  ])

  return (
    <div className="container">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      
      <div className="job-search-container">
      <div className="search-header">
        <Link href="/" className="back-link">← ホームに戻る / Back to Home</Link>
        <h1 className="page-title">求人検索・応募 / Job Search & Applications</h1>
      </div>
      <div className="jobs-grid">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.salary}</p>
            <p>{job.location}</p>
            <span className={`status ${job.status}`}>{job.status}</span>
          </div>
        ))}
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

