'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/globals.css'
import '../../../styles/client-profile.css'
import '../../../styles/dashboard-pages.css'

export default function ClientProfileDashboard() {
  const [profile, setProfile] = useState({
    companyInfo: {
      name: '株式会社テクノロジー',
      nameEn: 'Technology Corporation',
      industry: 'IT・ソフトウェア',
      size: '201-500名',
      established: '2015',
      website: 'https://technology-corp.com',
      description: '最先端の技術ソリューションを提供する企業です。'
    },
    contact: {
      person: '田中一郎',
      email: 'tanaka@technology-corp.com',
      phone: '+81-3-1234-5678',
      address: '東京都渋谷区1-2-3'
    },
    hiring: {
      openPositions: 5,
      activeRecruiting: true,
      preferredSkills: ['React', 'Node.js', 'AWS', 'Python'],
      salaryRange: '400-800万円'
    }
  })

  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="container">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      
      <div className="dashboard-container">
      <div className="dashboard-header">
        <Link href="/" className="back-link">← ホームに戻る / Back to Home</Link>
        <h1 className="dashboard-title">
          <span className="label-japanese">企業プロフィール</span>
          <span className="label-english">Client Profile Dashboard</span>
        </h1>
      </div>

      <div className="dashboard-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          概要 / Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'hiring' ? 'active' : ''}`}
          onClick={() => setActiveTab('hiring')}
        >
          採用情報 / Hiring
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          連絡先 / Contact
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">会社情報</span>
                <span className="label-english">Company Information</span>
              </h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>会社名 / Company Name</label>
                  <span>{profile.companyInfo.name}</span>
                </div>
                <div className="info-item">
                  <label>英語名 / English Name</label>
                  <span>{profile.companyInfo.nameEn}</span>
                </div>
                <div className="info-item">
                  <label>業界 / Industry</label>
                  <span>{profile.companyInfo.industry}</span>
                </div>
                <div className="info-item">
                  <label>従業員数 / Company Size</label>
                  <span>{profile.companyInfo.size}</span>
                </div>
                <div className="info-item">
                  <label>設立年 / Established</label>
                  <span>{profile.companyInfo.established}年</span>
                </div>
                <div className="info-item">
                  <label>ウェブサイト / Website</label>
                  <span>
                    <a href={profile.companyInfo.website} target="_blank" rel="noopener noreferrer">
                      {profile.companyInfo.website}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">会社概要</span>
                <span className="label-english">Company Description</span>
              </h2>
              <div className="company-description">
                <p>{profile.companyInfo.description}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hiring' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">採用情報</span>
                <span className="label-english">Hiring Information</span>
              </h2>
              <div className="hiring-stats">
                <div className="stat-card">
                  <div className="stat-number">{profile.hiring.openPositions}</div>
                  <div className="stat-label">募集中のポジション / Open Positions</div>
                </div>
                <div className="stat-card">
                  <div className="stat-status">
                    {profile.hiring.activeRecruiting ? '採用中' : '採用停止中'}
                  </div>
                  <div className="stat-label">採用状況 / Recruitment Status</div>
                </div>
              </div>
              
              <div className="hiring-preferences">
                <h3 className="subsection-title">
                  <span className="label-japanese">求めるスキル</span>
                  <span className="label-english">Required Skills</span>
                </h3>
                <div className="skills-container">
                  {profile.hiring.preferredSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <h3 className="subsection-title">
                  <span className="label-japanese">給与範囲</span>
                  <span className="label-english">Salary Range</span>
                </h3>
                <div className="salary-range">
                  <span className="salary-value">{profile.hiring.salaryRange}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">連絡先情報</span>
                <span className="label-english">Contact Information</span>
              </h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <label>担当者 / Contact Person</label>
                  <span>{profile.contact.person}</span>
                </div>
                <div className="contact-item">
                  <label>メール / Email</label>
                  <span>
                    <a href={`mailto:${profile.contact.email}`}>
                      {profile.contact.email}
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <label>電話 / Phone</label>
                  <span>
                    <a href={`tel:${profile.contact.phone}`}>
                      {profile.contact.phone}
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <label>住所 / Address</label>
                  <span>{profile.contact.address}</span>
                </div>
              </div>
            </div>
          </div>
        )}
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