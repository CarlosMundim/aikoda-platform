'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/premium-visual.css'
import '../../../styles/premium-forms.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function ClientAuth() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyNameEn: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    companySize: '',
    address: '',
    website: '',
    description: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
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
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            企業登録<br />
            <span className="text-lg font-medium text-gray-600">Company Registration</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with Top Japanese Talent Through Cultural Intelligence Matching
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="viz-card p-8">
            <div className="saas-form-container">
              <div className="form-section-header">
                <h3 className="form-section-title">企業情報</h3>
                <p className="form-section-subtitle">Company Information</p>
              </div>
              
              <div className="form-grid-responsive">
                <div className="form-field">
                  <label className="form-label form-label-required">
                    会社名
                    <span className="form-label-subtitle">Company Name</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    placeholder="株式会社テクノロジー"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    会社名（英語）
                    <span className="form-label-subtitle">Company Name (English)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyNameEn}
                    onChange={(e) => handleInputChange('companyNameEn', e.target.value)}
                    placeholder="Technology Corp"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    担当者名
                    <span className="form-label-subtitle">Contact Person</span>
                  </label>
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                    placeholder="田中太郎"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    メールアドレス
                    <span className="form-label-subtitle">Email Address</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="contact@company.com"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    電話番号
                    <span className="form-label-subtitle">Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+81 3-1234-5678"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    業界
                    <span className="form-label-subtitle">Industry</span>
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="form-select"
                  >
                    <option value="">業界を選択</option>
                    <option value="it">IT・ソフトウェア / IT & Software</option>
                    <option value="finance">金融 / Finance</option>
                    <option value="manufacturing">製造業 / Manufacturing</option>
                    <option value="consulting">コンサルティング / Consulting</option>
                    <option value="healthcare">医療・ヘルスケア / Healthcare</option>
                    <option value="education">教育 / Education</option>
                    <option value="retail">小売 / Retail</option>
                    <option value="other">その他 / Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    従業員数
                    <span className="form-label-subtitle">Company Size</span>
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => handleInputChange('companySize', e.target.value)}
                    className="form-select"
                  >
                    <option value="">従業員数を選択</option>
                    <option value="1-10">1-10名 / 1-10 employees</option>
                    <option value="11-50">11-50名 / 11-50 employees</option>
                    <option value="51-200">51-200名 / 51-200 employees</option>
                    <option value="201-1000">201-1000名 / 201-1000 employees</option>
                    <option value="1000+">1000名以上 / 1000+ employees</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    ウェブサイト
                    <span className="form-label-subtitle">Website</span>
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://company.com"
                    className="form-input form-input-wide"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">
                  住所
                  <span className="form-label-subtitle">Address</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="東京都渋谷区..."
                  className="form-input form-input-wide"
                />
              </div>

              <div className="form-field">
                <label className="form-label">
                  会社概要
                  <span className="form-label-subtitle">Company Description</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="会社の事業内容や特徴について記載してください"
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <div className="form-navigation">
                <button
                  onClick={() => {
                    console.log('Client form submitted:', formData)
                  }}
                  className="form-nav-button form-nav-button-primary"
                  style={{background: 'var(--success-green)', width: 'auto', margin: '0 auto'}}
                >
                  登録
                  <span className="text-xs">Register</span>
                </button>
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

