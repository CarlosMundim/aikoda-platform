'use client';

import { useState } from 'react';

export default function CompanyRegistrationView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    industry: '',
    companySize: '',
    headquarters: '',
    website: '',
    foundedYear: '',
    
    // Contact Information
    contactPerson: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    
    // Business Information
    businessDescription: '',
    targetMarkets: [] as string[],
    currentChallenges: [] as string[],
    hiringNeeds: [] as string[],
    
    // Cultural Requirements
    workCulture: '',
    communicationStyle: '',
    managementStyle: '',
    remoteWorkPolicy: '',
    
    // Requirements & Preferences
    urgentPositions: '',
    budgetRange: '',
    preferredCandidateOrigin: [] as string[],
    specialRequirements: ''
  });

  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, japanese: '会社情報', english: 'Company Information' },
    { id: 2, japanese: '連絡先情報', english: 'Contact Information' },
    { id: 3, japanese: '事業概要', english: 'Business Overview' },
    { id: 4, japanese: '企業文化', english: 'Company Culture' },
    { id: 5, japanese: '採用要件', english: 'Hiring Requirements' },
    { id: 6, japanese: '確認・送信', english: 'Review & Submit' }
  ];

  const industries = [
    'Technology / IT', 'Manufacturing', 'Finance / Banking', 'Healthcare', 'Retail / E-commerce',
    'Education', 'Consulting', 'Real Estate', 'Hospitality', 'Transportation', 'Media / Entertainment',
    'Government', 'Non-profit', 'Agriculture', 'Energy', 'Other'
  ];

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees', '201-500 employees',
    '501-1000 employees', '1000-5000 employees', '5000+ employees'
  ];

  const countries = [
    'Japan', 'Indonesia', 'Philippines', 'Vietnam', 'Thailand', 'Malaysia', 'Singapore',
    'South Korea', 'Taiwan', 'India', 'Australia', 'Other'
  ];

  const targetMarkets = [
    'Domestic Market', 'Southeast Asia', 'East Asia', 'North America', 'Europe',
    'Australia / Oceania', 'Global Market'
  ];

  const businessChallenges = [
    'Talent Shortage', 'Cultural Communication', 'Language Barriers', 'Remote Work Management',
    'Cross-cultural Training', 'Retention Issues', 'Skill Gap', 'Cost Management',
    'Compliance Issues', 'Market Expansion'
  ];

  const hiringNeedsOptions = [
    'Software Engineers', 'Data Scientists', 'Digital Marketing', 'Sales Representatives',
    'Customer Service', 'Project Managers', 'Business Analysts', 'Designers',
    'Quality Assurance', 'Manufacturing Workers', 'Administrative Staff', 'Management Roles'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayToggle = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
        : [...(prev[field as keyof typeof prev] as string[]), value]
    }));
  };

  const submitRegistration = async () => {
    setIsSubmitting(true);
    setRegistrationStatus('processing');

    try {
      // Submit to real database
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setRegistrationStatus('success');
        // Store the real company ID
        sessionStorage.setItem('companyId', data.companyId);
      } else {
        throw new Error(data.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setRegistrationStatus('error');
      alert('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCompanyInformation = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          会社名 / Company Name *
        </label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="Example Corporation Inc."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            業界 / Industry *
          </label>
          <select
            value={formData.industry}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">選択してください / Select</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            会社規模 / Company Size *
          </label>
          <select
            value={formData.companySize}
            onChange={(e) => handleInputChange('companySize', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">選択してください / Select</option>
            {companySizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            本社所在地 / Headquarters Location *
          </label>
          <select
            value={formData.headquarters}
            onChange={(e) => handleInputChange('headquarters', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">選択してください / Select</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            設立年 / Founded Year
          </label>
          <input
            type="number"
            value={formData.foundedYear}
            onChange={(e) => handleInputChange('foundedYear', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="2020"
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          ウェブサイト / Website URL
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="https://www.example-company.com"
        />
      </div>
    </div>
  );

  const renderContactInformation = () => (
    <div className="space-y-6">
      <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-700">
        <p className="text-blue-200 text-sm">
          採用担当者の連絡先情報を入力してください
          <br />
          Please provide contact information for the hiring manager
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            担当者名 / Contact Person Name *
          </label>
          <input
            type="text"
            value={formData.contactPerson}
            onChange={(e) => handleInputChange('contactPerson', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="田中 太郎 / Tanaka Taro"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            役職 / Job Title *
          </label>
          <input
            type="text"
            value={formData.contactTitle}
            onChange={(e) => handleInputChange('contactTitle', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="人事部長 / HR Manager"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            メールアドレス / Email Address *
          </label>
          <input
            type="email"
            value={formData.contactEmail}
            onChange={(e) => handleInputChange('contactEmail', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="hr@example-company.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            電話番号 / Phone Number *
          </label>
          <input
            type="tel"
            value={formData.contactPhone}
            onChange={(e) => handleInputChange('contactPhone', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="+81-3-1234-5678"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderBusinessOverview = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          事業概要 / Business Description *
        </label>
        <textarea
          value={formData.businessDescription}
          onChange={(e) => handleInputChange('businessDescription', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="弊社は革新的な技術ソリューションを提供する企業です... / We are an innovative company providing technology solutions..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          対象市場 / Target Markets (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {targetMarkets.map(market => (
            <label key={market} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.targetMarkets.includes(market)}
                onChange={() => handleArrayToggle('targetMarkets', market)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{market}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          現在の課題 / Current Business Challenges (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {businessChallenges.map(challenge => (
            <label key={challenge} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.currentChallenges.includes(challenge)}
                onChange={() => handleArrayToggle('currentChallenges', challenge)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{challenge}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          採用ニーズ / Hiring Needs (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {hiringNeedsOptions.map(need => (
            <label key={need} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.hiringNeeds.includes(need)}
                onChange={() => handleArrayToggle('hiringNeeds', need)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{need}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompanyCulture = () => (
    <div className="space-y-6">
      <div className="bg-purple-900 bg-opacity-30 rounded-lg p-4 border border-purple-700">
        <p className="text-purple-200 text-sm">
          企業文化に関する情報は、最適な候補者マッチングのために重要です
          <br />
          Company culture information is crucial for optimal candidate matching
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          職場文化 / Work Culture *
        </label>
        <select
          value={formData.workCulture}
          onChange={(e) => handleInputChange('workCulture', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="traditional">伝統的・保守的 / Traditional & Conservative</option>
          <option value="modern">現代的・革新的 / Modern & Innovative</option>
          <option value="startup">スタートアップ文化 / Startup Culture</option>
          <option value="corporate">企業文化重視 / Corporate-focused</option>
          <option value="flexible">柔軟性重視 / Flexibility-focused</option>
          <option value="result-oriented">成果重視 / Result-oriented</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          コミュニケーションスタイル / Communication Style *
        </label>
        <select
          value={formData.communicationStyle}
          onChange={(e) => handleInputChange('communicationStyle', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="direct">直接的・率直 / Direct & Straightforward</option>
          <option value="indirect">間接的・慎重 / Indirect & Careful</option>
          <option value="formal">フォーマル / Formal</option>
          <option value="casual">カジュアル / Casual</option>
          <option value="hierarchical">階層的 / Hierarchical</option>
          <option value="flat">フラット / Flat Structure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          マネジメントスタイル / Management Style *
        </label>
        <select
          value={formData.managementStyle}
          onChange={(e) => handleInputChange('managementStyle', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="micromanagement">細かい管理 / Micromanagement</option>
          <option value="autonomous">自律性重視 / Autonomous</option>
          <option value="collaborative">協働的 / Collaborative</option>
          <option value="directive">指示的 / Directive</option>
          <option value="supportive">支援的 / Supportive</option>
          <option value="results-focused">成果重視 / Results-focused</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          リモートワーク方針 / Remote Work Policy *
        </label>
        <select
          value={formData.remoteWorkPolicy}
          onChange={(e) => handleInputChange('remoteWorkPolicy', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="fully-remote">完全リモート / Fully Remote</option>
          <option value="hybrid">ハイブリッド / Hybrid</option>
          <option value="office-first">オフィス中心 / Office-first</option>
          <option value="flexible">柔軟対応 / Flexible</option>
          <option value="no-remote">リモートなし / No Remote</option>
        </select>
      </div>
    </div>
  );

  const renderHiringRequirements = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          緊急採用ポジション / Urgent Hiring Positions
        </label>
        <textarea
          value={formData.urgentPositions}
          onChange={(e) => handleInputChange('urgentPositions', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="シニアソフトウェアエンジニア3名、プロジェクトマネージャー1名... / 3 Senior Software Engineers, 1 Project Manager..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          予算範囲 / Budget Range (月額/Monthly) *
        </label>
        <select
          value={formData.budgetRange}
          onChange={(e) => handleInputChange('budgetRange', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="under-200k">20万円未満 / Under ¥200K</option>
          <option value="200k-500k">20-50万円 / ¥200K-500K</option>
          <option value="500k-1m">50-100万円 / ¥500K-1M</option>
          <option value="1m-2m">100-200万円 / ¥1M-2M</option>
          <option value="over-2m">200万円以上 / Over ¥2M</option>
          <option value="flexible">柔軟対応 / Flexible</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          希望候補者出身地 / Preferred Candidate Origins (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {countries.map(country => (
            <label key={country} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.preferredCandidateOrigin.includes(country)}
                onChange={() => handleArrayToggle('preferredCandidateOrigin', country)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{country}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          特別な要件 / Special Requirements
        </label>
        <textarea
          value={formData.specialRequirements}
          onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="JLPT N2以上、AWS認定資格保持者優遇... / JLPT N2+ required, AWS certification preferred..."
        />
      </div>
    </div>
  );

  const renderReviewSubmit = () => (
    <div className="space-y-6">
      {registrationStatus === 'success' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            登録完了！
          </h3>
          <p className="text-gray-300 mb-4">
            Company Registration Completed Successfully!
          </p>
          <div className="bg-green-900 bg-opacity-30 rounded-lg p-4 border border-green-700">
            <p className="text-green-200 text-sm">
              御社の企業IDは: <span className="font-mono">{sessionStorage.getItem('companyId') || 'Loading...'}</span>
              <br />
              Your company ID is: <span className="font-mono">{sessionStorage.getItem('companyId') || 'Loading...'}</span>
            </p>
            <p className="text-green-200 text-xs mt-2">
              48時間以内に担当者からご連絡いたします
              <br />
              Our team will contact you within 48 hours
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">
              登録内容確認 / Registration Review
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-white font-medium mb-2">会社情報 / Company Information</h4>
                <div className="space-y-1 text-gray-300">
                  <p>会社名 / Name: {formData.companyName}</p>
                  <p>業界 / Industry: {formData.industry}</p>
                  <p>規模 / Size: {formData.companySize}</p>
                  <p>本社 / HQ: {formData.headquarters}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">連絡先 / Contact</h4>
                <div className="space-y-1 text-gray-300">
                  <p>担当者 / Contact: {formData.contactPerson}</p>
                  <p>役職 / Title: {formData.contactTitle}</p>
                  <p>メール / Email: {formData.contactEmail}</p>
                  <p>電話 / Phone: {formData.contactPhone}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">企業文化 / Culture</h4>
                <div className="space-y-1 text-gray-300">
                  <p>職場文化 / Work Culture: {formData.workCulture}</p>
                  <p>コミュニケーション / Communication: {formData.communicationStyle}</p>
                  <p>マネジメント / Management: {formData.managementStyle}</p>
                  <p>リモートワーク / Remote: {formData.remoteWorkPolicy}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">採用要件 / Requirements</h4>
                <div className="space-y-1 text-gray-300">
                  <p>予算 / Budget: {formData.budgetRange}</p>
                  <p>採用ニーズ / Hiring Needs: {formData.hiringNeeds.length} selected</p>
                  <p>希望出身地 / Origins: {formData.preferredCandidateOrigin.length} selected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4 border border-blue-700">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-blue-200 text-sm">
                  登録後の流れ / Next Steps:
                </p>
                <ul className="text-blue-200 text-xs mt-2 space-y-1">
                  <li>• 24時間以内にアカウント承認 / Account approval within 24 hours</li>
                  <li>• 文化適性分析レポート提供 / Cultural compatibility analysis report</li>
                  <li>• 候補者マッチング開始 / Candidate matching begins</li>
                  <li>• 専属アカウントマネージャー配属 / Dedicated account manager assigned</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={submitRegistration}
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>登録処理中... / Processing Registration...</span>
              </>
            ) : (
              <span>企業登録を完了する / Complete Company Registration</span>
            )}
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <div>企業登録</div>
          <div className="text-xl text-gray-300">Company Registration</div>
        </h1>
        <p className="text-gray-400">
          AI駆動型文化的適性マッチングで最適な人材を見つけましょう
          <br />
          Find the perfect talent with AI-powered cultural compatibility matching
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4 overflow-x-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center min-w-0">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                {step.id}
              </div>
              <div className="ml-2 text-xs min-w-0">
                <div className="text-white truncate">{step.japanese}</div>
                <div className="text-gray-400 truncate">{step.english}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-2 min-w-[20px] ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-700'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        {currentStep === 1 && renderCompanyInformation()}
        {currentStep === 2 && renderContactInformation()}
        {currentStep === 3 && renderBusinessOverview()}
        {currentStep === 4 && renderCompanyCulture()}
        {currentStep === 5 && renderHiringRequirements()}
        {currentStep === 6 && renderReviewSubmit()}
      </div>

      {/* Navigation Buttons */}
      {registrationStatus !== 'success' && (
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg font-medium transition-colors"
          >
            前へ / Previous
          </button>

          <button
            onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
            disabled={currentStep === 6}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            次へ / Next
          </button>
        </div>
      )}
    </div>
  );
}