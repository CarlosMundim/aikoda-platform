'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/globals.css'
import '../../../styles/dashboard-pages.css'

export default function CandidateProfileDashboard() {
  const [profile, setProfile] = useState({
    personalInfo: { 
      name: '田中太郎', 
      email: 'tanaka@email.com', 
      phone: '+81-90-1234-5678',
      address: '東京都渋谷区1-1-1',
      nationality: '日本'
    },
    skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'Python', 'Docker'],
    experience: '5年',
    education: '東京大学 情報工学部',
    certifications: ['AWS認定ソリューションアーキテクト', 'React認定'],
    languages: { japanese: 'ネイティブ', english: 'ビジネス' },
    preferences: { 
      salary: '600-800万円', 
      location: '東京', 
      workStyle: 'ハイブリッド',
      availability: '2024年4月'
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
          <span className="label-japanese">候補者プロフィール</span>
          <span className="label-english">Candidate Profile Dashboard</span>
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
          className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          スキル / Skills
        </button>
        <button 
          className={`tab-button ${activeTab === 'preferences' ? 'active' : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          希望条件 / Preferences
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">個人情報</span>
                <span className="label-english">Personal Information</span>
              </h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>氏名 / Name</label>
                  <span>{profile.personalInfo.name}</span>
                </div>
                <div className="info-item">
                  <label>メール / Email</label>
                  <span>{profile.personalInfo.email}</span>
                </div>
                <div className="info-item">
                  <label>電話 / Phone</label>
                  <span>{profile.personalInfo.phone}</span>
                </div>
                <div className="info-item">
                  <label>住所 / Address</label>
                  <span>{profile.personalInfo.address}</span>
                </div>
                <div className="info-item">
                  <label>国籍 / Nationality</label>
                  <span>{profile.personalInfo.nationality}</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">経歴・学歴</span>
                <span className="label-english">Experience & Education</span>
              </h2>
              <div className="info-grid">
                <div className="info-item">
                  <label>経験年数 / Experience</label>
                  <span>{profile.experience}</span>
                </div>
                <div className="info-item">
                  <label>学歴 / Education</label>
                  <span>{profile.education}</span>
                </div>
                <div className="info-item">
                  <label>言語能力 / Languages</label>
                  <span>日本語: {profile.languages.japanese}, 英語: {profile.languages.english}</span>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">資格・認定</span>
                <span className="label-english">Certifications</span>
              </h2>
              <div className="certifications-list">
                {profile.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <span className="certification-name">{cert}</span>
                    <span className="certification-status">認定済み / Certified</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">技術スキル</span>
                <span className="label-english">Technical Skills</span>
              </h2>
              <div className="skills-container">
                {profile.skills.map((skill, index) => (
                  <div key={index} className="skill-tag-advanced">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-level">
                      <div className="skill-progress" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="profile-sections">
            <div className="profile-section">
              <h2 className="section-title">
                <span className="label-japanese">希望条件</span>
                <span className="label-english">Job Preferences</span>
              </h2>
              <div className="preferences-grid">
                <div className="preference-item">
                  <label>希望年収 / Salary Range</label>
                  <span className="preference-value">{profile.preferences.salary}</span>
                </div>
                <div className="preference-item">
                  <label>希望勤務地 / Location</label>
                  <span className="preference-value">{profile.preferences.location}</span>
                </div>
                <div className="preference-item">
                  <label>勤務形態 / Work Style</label>
                  <span className="preference-value">{profile.preferences.workStyle}</span>
                </div>
                <div className="preference-item">
                  <label>開始可能日 / Availability</label>
                  <span className="preference-value">{profile.preferences.availability}</span>
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