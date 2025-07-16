'use client'

import { useState } from 'react'
import Link from 'next/link'
import '../../../styles/premium-visual.css'
import '../../../styles/premium-forms.css'
import { PremiumIcons } from '../../../components/PremiumIcons'

export default function CandidateAuth() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    dateOfBirth: '',
    positionTitle: '',
    experienceYears: '',
    currentCompany: '',
    educationLevel: '',
    industry: '',
    salaryRange: '',
    technicalSkills: [] as string[],
    japaneseLevel: '',
    certifications: '',
    resume: null as File | null,
    portfolioUrl: '',
    coverLetter: '',
    address: '',
    city: '',
    postalCode: '',
    workStatus: '',
    availabilityDate: '',
    preferredLocation: ''
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const addSkill = (skill: string) => {
    if (skill && !formData.technicalSkills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        technicalSkills: [...prev.technicalSkills, skill]
      }))
    }
  }

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      technicalSkills: prev.technicalSkills.filter(s => s !== skill)
    }))
  }

  const handleFileUpload = (file: File) => {
    setFormData(prev => ({ ...prev, resume: file }))
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
            候補者登録<br />
            <span className="text-lg font-medium text-gray-600">Candidate Registration</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cultural Intelligence Assessment & Professional Profile Creation
          </p>
        </div>
        
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="step-indicator">
            {[1, 2, 3, 4].map((stepNum) => (
              <div key={stepNum} className="step-item">
                <div className={`step-circle ${
                  step > stepNum 
                    ? 'step-completed' 
                    : step === stepNum
                    ? 'step-current'
                    : 'step-pending'
                }`}>
                  {stepNum}
                </div>
                {stepNum < 4 && (
                  <div className={`step-connector ${
                    step > stepNum ? 'step-connector-completed' : ''
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="step-label">
            <div className="step-label-number">ステップ {step} / 4</div>
            <div className="step-label-text">
              {step === 1 ? '個人情報 / Personal Information' : 
               step === 2 ? '職業情報 / Professional Details' : 
               step === 3 ? 'スキル・言語 / Skills & Languages' : 
               '書類 / Documents'}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="viz-card p-8">
          
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="saas-form-container">
              <div className="form-section-header">
                <h3 className="form-section-title">個人情報</h3>
                <p className="form-section-subtitle">Personal Information</p>
              </div>
              
              <div className="form-grid-responsive">
                <div className="form-field">
                  <label className="form-label form-label-required">
                    名前
                    <span className="form-label-subtitle">First Name</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="太郎"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    姓
                    <span className="form-label-subtitle">Last Name</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="田中"
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
                    placeholder="taro.tanaka@example.com"
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
                    placeholder="+81 90-1234-5678"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    国籍
                    <span className="form-label-subtitle">Nationality</span>
                  </label>
                  <select
                    value={formData.nationality}
                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                    className="form-select"
                  >
                    <option value="">国籍を選択 / Select nationality</option>
                    <option value="japanese">日本 / Japanese</option>
                    <option value="american">アメリカ / American</option>
                    <option value="british">イギリス / British</option>
                    <option value="canadian">カナダ / Canadian</option>
                    <option value="australian">オーストラリア / Australian</option>
                    <option value="other">その他 / Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    生年月日
                    <span className="form-label-subtitle">Date of Birth</span>
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="form-input form-input-date"
                  />
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
                    都市
                    <span className="form-label-subtitle">City</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="東京"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-navigation">
                <button
                  disabled
                  className="form-nav-button form-nav-button-secondary"
                >
                  前へ
                  <span className="text-xs">Previous</span>
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="form-nav-button form-nav-button-primary"
                >
                  次へ
                  <span className="text-xs">Next</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Professional Information */}
          {step === 2 && (
            <div className="saas-form-container">
              <div className="form-section-header">
                <h3 className="form-section-title">職業情報</h3>
                <p className="form-section-subtitle">Professional Information</p>
              </div>
              
              <div className="form-grid-responsive">
                <div className="form-field">
                  <label className="form-label form-label-required">
                    希望職種
                    <span className="form-label-subtitle">Position Title</span>
                  </label>
                  <input
                    type="text"
                    value={formData.positionTitle}
                    onChange={(e) => handleInputChange('positionTitle', e.target.value)}
                    placeholder="例：シニアソフトウェアエンジニア"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    経験年数
                    <span className="form-label-subtitle">Years of Experience</span>
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => handleInputChange('experienceYears', e.target.value)}
                    className="form-select"
                  >
                    <option value="">経験年数を選択</option>
                    <option value="0-1">0-1年 / 0-1 years</option>
                    <option value="2-3">2-3年 / 2-3 years</option>
                    <option value="4-5">4-5年 / 4-5 years</option>
                    <option value="6-10">6-10年 / 6-10 years</option>
                    <option value="10+">10年以上 / 10+ years</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    現在の会社
                    <span className="form-label-subtitle">Current Company</span>
                  </label>
                  <input
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                    placeholder="例：株式会社テクノロジー"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    最終学歴
                    <span className="form-label-subtitle">Education Level</span>
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={(e) => handleInputChange('educationLevel', e.target.value)}
                    className="form-select"
                  >
                    <option value="">学歴を選択</option>
                    <option value="high-school">高校卒業 / High School</option>
                    <option value="associate">短大卒業 / Associate Degree</option>
                    <option value="bachelor">大学卒業 / Bachelor's Degree</option>
                    <option value="master">修士号 / Master's Degree</option>
                    <option value="phd">博士号 / PhD</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
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
                    <option value="other">その他 / Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    希望年収
                    <span className="form-label-subtitle">Salary Range</span>
                  </label>
                  <select
                    value={formData.salaryRange}
                    onChange={(e) => handleInputChange('salaryRange', e.target.value)}
                    className="form-select"
                  >
                    <option value="">年収を選択</option>
                    <option value="3-4m">300-400万円 / ¥3-4M</option>
                    <option value="4-5m">400-500万円 / ¥4-5M</option>
                    <option value="5-6m">500-600万円 / ¥5-6M</option>
                    <option value="6-8m">600-800万円 / ¥6-8M</option>
                    <option value="8-10m">800-1000万円 / ¥8-10M</option>
                    <option value="10m+">1000万円以上 / ¥10M+</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    郵便番号
                    <span className="form-label-subtitle">Postal Code</span>
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    placeholder="150-0001"
                    className="form-input form-input-narrow"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    就労ステータス
                    <span className="form-label-subtitle">Work Status</span>
                  </label>
                  <select
                    value={formData.workStatus}
                    onChange={(e) => handleInputChange('workStatus', e.target.value)}
                    className="form-select"
                  >
                    <option value="">ステータスを選択</option>
                    <option value="employed">在職中 / Currently Employed</option>
                    <option value="unemployed">求職中 / Unemployed</option>
                    <option value="student">学生 / Student</option>
                    <option value="freelance">フリーランス / Freelance</option>
                  </select>
                </div>
              </div>

              <div className="form-navigation">
                <button
                  onClick={() => setStep(1)}
                  className="form-nav-button form-nav-button-secondary"
                >
                  前へ
                  <span className="text-xs">Previous</span>
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="form-nav-button form-nav-button-primary"
                >
                  次へ
                  <span className="text-xs">Next</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Skills & Languages */}
          {step === 3 && (
            <div className="saas-form-container">
              <div className="form-section-header">
                <h3 className="form-section-title">スキル・言語</h3>
                <p className="form-section-subtitle">Skills & Languages</p>
              </div>
              
              <div className="form-grid-responsive">
                <div className="form-field">
                  <label className="form-label form-label-required">
                    技術スキル
                    <span className="form-label-subtitle">Technical Skills</span>
                  </label>
                  <input
                    type="text"
                    placeholder="スキルを入力してEnterキーを押してください"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        addSkill(e.currentTarget.value)
                        e.currentTarget.value = ''
                      }
                    }}
                    className="form-input form-input-wide"
                  />
                  <div className="skill-tags-container">
                    {formData.technicalSkills.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="skill-tag-remove"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label form-label-required">
                    日本語レベル
                    <span className="form-label-subtitle">Japanese Language Level</span>
                  </label>
                  <select
                    value={formData.japaneseLevel}
                    onChange={(e) => handleInputChange('japaneseLevel', e.target.value)}
                    className="form-select"
                  >
                    <option value="">日本語レベルを選択</option>
                    <option value="native">ネイティブ / Native</option>
                    <option value="n1">N1レベル / JLPT N1</option>
                    <option value="n2">N2レベル / JLPT N2</option>
                    <option value="n3">N3レベル / JLPT N3</option>
                    <option value="n4">N4レベル / JLPT N4</option>
                    <option value="n5">N5レベル / JLPT N5</option>
                    <option value="beginner">初級 / Beginner</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    開始可能日
                    <span className="form-label-subtitle">Availability Date</span>
                  </label>
                  <input
                    type="date"
                    value={formData.availabilityDate}
                    onChange={(e) => handleInputChange('availabilityDate', e.target.value)}
                    className="form-input form-input-date"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    希望勤務地
                    <span className="form-label-subtitle">Preferred Location</span>
                  </label>
                  <input
                    type="text"
                    value={formData.preferredLocation}
                    onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
                    placeholder="東京、大阪、リモート"
                    className="form-input form-input-wide"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label">
                  資格・認定
                  <span className="form-label-subtitle">Certifications</span>
                </label>
                <textarea
                  value={formData.certifications}
                  onChange={(e) => handleInputChange('certifications', e.target.value)}
                  placeholder="保有している資格や認定について記載してください"
                  rows={4}
                  className="form-textarea"
                />
              </div>

              <div className="form-navigation">
                <button
                  onClick={() => setStep(2)}
                  className="form-nav-button form-nav-button-secondary"
                >
                  前へ
                  <span className="text-xs">Previous</span>
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="form-nav-button form-nav-button-primary"
                >
                  次へ
                  <span className="text-xs">Next</span>
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Documents */}
          {step === 4 && (
            <div className="saas-form-container">
              <div className="form-section-header">
                <h3 className="form-section-title">書類</h3>
                <p className="form-section-subtitle">Documents</p>
              </div>
              
              <div className="form-grid-responsive">
                <div className="form-field">
                  <label className="form-label form-label-required">
                    履歴書
                    <span className="form-label-subtitle">Resume</span>
                  </label>
                  <div className="form-file-upload">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleFileUpload(file)
                      }}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <div className="text-gray-500">
                        ファイルをドラッグ&ドロップまたはクリックしてアップロード<br />
                        <span className="text-xs">Drag & drop files or click to upload</span><br />
                        <span className="text-xs text-gray-400">PDF, DOC, DOCX (最大5MB)</span>
                      </div>
                    </label>
                    {formData.resume && (
                      <div className="mt-2 text-sm text-green-600">
                        ✓ {formData.resume.name}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">
                    ポートフォリオURL
                    <span className="form-label-subtitle">Portfolio URL</span>
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                    placeholder="https://your-portfolio.com"
                    className="form-input form-input-wide"
                  />
                </div>

                <div className="form-field">
                  <label className="form-label">
                    カバーレター
                    <span className="form-label-subtitle">Cover Letter</span>
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="自己紹介や志望動機について記載してください"
                    rows={6}
                    className="form-textarea"
                  />
                </div>
              </div>

              <div className="form-navigation">
                <button
                  onClick={() => setStep(3)}
                  className="form-nav-button form-nav-button-secondary"
                >
                  前へ
                  <span className="text-xs">Previous</span>
                </button>
                <button
                  onClick={() => {
                    // Handle form submission
                    console.log('Form submitted:', formData)
                  }}
                  className="form-nav-button form-nav-button-primary"
                  style={{background: 'var(--success-green)'}}
                >
                  送信
                  <span className="text-xs">Submit</span>
                </button>
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
    </div>
  )
}

