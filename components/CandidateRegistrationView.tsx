'use client';

import { useState } from 'react';

export default function CandidateRegistrationView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    currentLocation: '',
    
    // Professional Information
    currentPosition: '',
    experience: '',
    education: '',
    skills: [] as string[],
    languages: [] as string[],
    
    // Preferences
    preferredLocation: '',
    salaryExpectation: '',
    availabilityDate: '',
    workType: '',
    
    // Cultural Assessment
    culturalAnswers: {} as Record<string, string>
  });

  const [registrationStatus, setRegistrationStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, japanese: '個人情報', english: 'Personal Information' },
    { id: 2, japanese: '職歴・スキル', english: 'Professional Background' },
    { id: 3, japanese: '希望条件', english: 'Preferences' },
    { id: 4, japanese: '文化的適性評価', english: 'Cultural Assessment' },
    { id: 5, japanese: '確認・送信', english: 'Review & Submit' }
  ];

  const countries = [
    'Indonesia', 'Japan', 'Philippines', 'Vietnam', 'Thailand', 'Malaysia', 'Singapore', 'Other'
  ];

  const skillOptions = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes',
    'Machine Learning', 'Data Analysis', 'Project Management', 'UI/UX Design',
    'Digital Marketing', 'Sales', 'Customer Service', 'Manufacturing', 'Quality Control'
  ];

  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ko', name: 'Korean' },
    { code: 'th', name: 'Thai' },
    { code: 'vi', name: 'Vietnamese' }
  ];

  const culturalQuestions = [
    {
      id: 'communication_style',
      japanese: 'コミュニケーションスタイル',
      english: 'Communication Style',
      question_ja: 'あなたのコミュニケーションスタイルを最もよく表しているのはどれですか？',
      question_en: 'Which best describes your communication style?',
      options: [
        { value: 'direct', ja: '直接的・率直', en: 'Direct and straightforward' },
        { value: 'indirect', ja: '間接的・暗示的', en: 'Indirect and subtle' },
        { value: 'contextual', ja: '文脈重視', en: 'Context-dependent' },
        { value: 'diplomatic', ja: '外交的・慎重', en: 'Diplomatic and careful' }
      ]
    },
    {
      id: 'hierarchy_respect',
      japanese: '階層への敬意',
      english: 'Hierarchy Respect',
      question_ja: '職場での階層関係についてどう思いますか？',
      question_en: 'How do you view workplace hierarchy?',
      options: [
        { value: 'strict', ja: '厳格に従うべき', en: 'Should be strictly followed' },
        { value: 'flexible', ja: '柔軟に対応', en: 'Should be flexible' },
        { value: 'minimal', ja: '最小限で良い', en: 'Should be minimal' },
        { value: 'situational', ja: '状況による', en: 'Depends on situation' }
      ]
    },
    {
      id: 'decision_making',
      japanese: '意思決定スタイル',
      english: 'Decision Making Style',
      question_ja: '重要な決定をする時の方法は？',
      question_en: 'How do you make important decisions?',
      options: [
        { value: 'individual', ja: '個人で判断', en: 'Individual judgment' },
        { value: 'group', ja: 'グループで協議', en: 'Group consultation' },
        { value: 'consensus', ja: '全員の合意', en: 'Full consensus' },
        { value: 'authority', ja: '上司の指示', en: 'Authority guidance' }
      ]
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter(l => l !== language)
        : [...prev.languages, language]
    }));
  };

  const handleCulturalAnswer = (questionId: string, answer: string) => {
    setFormData(prev => ({
      ...prev,
      culturalAnswers: {
        ...prev.culturalAnswers,
        [questionId]: answer
      }
    }));
  };

  const submitRegistration = async () => {
    setIsSubmitting(true);
    setRegistrationStatus('processing');

    try {
      // Submit to real database
      const response = await fetch('/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setRegistrationStatus('success');
        // Store the real candidate ID
        sessionStorage.setItem('candidateId', data.candidateId);
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

  const renderPersonalInformation = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-white mb-2">
            名前 / First Name *
          </label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="山田 / Yamada"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            姓 / Last Name *
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="太郎 / Taro"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            メールアドレス / Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="yamada.taro@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            電話番号 / Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="+81-90-1234-5678"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            生年月日 / Date of Birth *
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-white mb-2">
            国籍 / Nationality *
          </label>
          <select
            value={formData.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            required
          >
            <option value="">選択してください / Select</option>
            {countries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-white mb-2">
            現在の居住地 / Current Location *
          </label>
          <input
            type="text"
            value={formData.currentLocation}
            onChange={(e) => handleInputChange('currentLocation', e.target.value)}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="東京都渋谷区 / Shibuya, Tokyo"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderProfessionalBackground = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          現在の職位 / Current Position *
        </label>
        <input
          type="text"
          value={formData.currentPosition}
          onChange={(e) => handleInputChange('currentPosition', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          placeholder="ソフトウェアエンジニア / Software Engineer"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          経験年数 / Years of Experience *
        </label>
        <select
          value={formData.experience}
          onChange={(e) => handleInputChange('experience', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="0-1">0-1年 / 0-1 years</option>
          <option value="2-3">2-3年 / 2-3 years</option>
          <option value="4-5">4-5年 / 4-5 years</option>
          <option value="6-10">6-10年 / 6-10 years</option>
          <option value="10+">10年以上 / 10+ years</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          最終学歴 / Education *
        </label>
        <select
          value={formData.education}
          onChange={(e) => handleInputChange('education', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="high-school">高校卒業 / High School</option>
          <option value="associate">専門学校・短大 / Associate Degree</option>
          <option value="bachelor">大学卒業 / Bachelor's Degree</option>
          <option value="master">修士号 / Master's Degree</option>
          <option value="phd">博士号 / PhD</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          スキル / Skills (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skillOptions.map(skill => (
            <label key={skill} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-4">
          言語能力 / Language Skills (複数選択可 / Multiple selection allowed)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {languageOptions.map(lang => (
            <label key={lang.code} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.languages.includes(lang.code)}
                onChange={() => handleLanguageToggle(lang.code)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-300">{lang.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          希望勤務地 / Preferred Work Location *
        </label>
        <select
          value={formData.preferredLocation}
          onChange={(e) => handleInputChange('preferredLocation', e.target.value)}
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
          希望年収 / Salary Expectation (USD) *
        </label>
        <select
          value={formData.salaryExpectation}
          onChange={(e) => handleInputChange('salaryExpectation', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="20000-30000">$20,000 - $30,000</option>
          <option value="30000-50000">$30,000 - $50,000</option>
          <option value="50000-70000">$50,000 - $70,000</option>
          <option value="70000-100000">$70,000 - $100,000</option>
          <option value="100000+">$100,000+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          勤務開始可能日 / Availability Date *
        </label>
        <input
          type="date"
          value={formData.availabilityDate}
          onChange={(e) => handleInputChange('availabilityDate', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">
          希望勤務形態 / Work Type Preference *
        </label>
        <select
          value={formData.workType}
          onChange={(e) => handleInputChange('workType', e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
          required
        >
          <option value="">選択してください / Select</option>
          <option value="full-time">正社員 / Full-time</option>
          <option value="part-time">パートタイム / Part-time</option>
          <option value="contract">契約社員 / Contract</option>
          <option value="remote">リモートワーク / Remote Work</option>
          <option value="hybrid">ハイブリッド / Hybrid</option>
        </select>
      </div>
    </div>
  );

  const renderCulturalAssessment = () => (
    <div className="space-y-8">
      <div className="bg-blue-900 bg-opacity-30 rounded-lg p-6 border border-blue-700">
        <h3 className="text-lg font-semibold text-white mb-2">
          文化的適性評価について
        </h3>
        <p className="text-sm text-blue-200">
          About Cultural Assessment
        </p>
        <p className="text-gray-300 text-sm mt-2">
          以下の質問は、あなたの文化的背景と価値観を理解し、最適な職場環境をマッチングするためのものです。
          <br />
          The following questions help us understand your cultural background and values to match you with the optimal work environment.
        </p>
      </div>

      {culturalQuestions.map((question, index) => (
        <div key={question.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-medium text-white mb-2">
            {question.japanese}
          </h4>
          <p className="text-sm text-gray-400 mb-4">
            {question.english}
          </p>
          
          <p className="text-white mb-4">
            {question.question_ja}
            <br />
            <span className="text-gray-300 text-sm">{question.question_en}</span>
          </p>

          <div className="space-y-3">
            {question.options.map((option, optIndex) => (
              <label key={optIndex} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={formData.culturalAnswers[question.id] === option.value}
                  onChange={() => handleCulturalAnswer(question.id, option.value)}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 mt-1"
                />
                <div>
                  <div className="text-white text-sm">{option.ja}</div>
                  <div className="text-gray-400 text-xs">{option.en}</div>
                </div>
              </label>
            ))}
          </div>
        </div>
      ))}
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
            Registration Completed Successfully!
          </p>
          <div className="bg-green-900 bg-opacity-30 rounded-lg p-4 border border-green-700">
            <p className="text-green-200 text-sm">
              あなたの候補者IDは: <span className="font-mono">{sessionStorage.getItem('candidateId') || 'Loading...'}</span>
              <br />
              Your candidate ID is: <span className="font-mono">{sessionStorage.getItem('candidateId') || 'Loading...'}</span>
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
                <h4 className="text-white font-medium mb-2">個人情報 / Personal Information</h4>
                <div className="space-y-1 text-gray-300">
                  <p>名前 / Name: {formData.firstName} {formData.lastName}</p>
                  <p>メール / Email: {formData.email}</p>
                  <p>電話 / Phone: {formData.phone}</p>
                  <p>国籍 / Nationality: {formData.nationality}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">職歴 / Professional</h4>
                <div className="space-y-1 text-gray-300">
                  <p>職位 / Position: {formData.currentPosition}</p>
                  <p>経験 / Experience: {formData.experience}</p>
                  <p>学歴 / Education: {formData.education}</p>
                  <p>スキル / Skills: {formData.skills.join(', ')}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">希望条件 / Preferences</h4>
                <div className="space-y-1 text-gray-300">
                  <p>勤務地 / Location: {formData.preferredLocation}</p>
                  <p>年収 / Salary: {formData.salaryExpectation}</p>
                  <p>勤務形態 / Work Type: {formData.workType}</p>
                  <p>開始日 / Start Date: {formData.availabilityDate}</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">文化的評価 / Cultural Assessment</h4>
                <div className="space-y-1 text-gray-300">
                  <p>回答済み質問: {Object.keys(formData.culturalAnswers).length}/3</p>
                  <p>Answered questions: {Object.keys(formData.culturalAnswers).length}/3</p>
                </div>
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
              <span>登録を完了する / Complete Registration</span>
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
          <div>候補者登録</div>
          <div className="text-xl text-gray-300">Candidate Registration</div>
        </h1>
        <p className="text-gray-400">
          AI駆動型文化的適性マッチングシステムで最適な職場を見つけましょう
          <br />
          Find your perfect workplace with AI-powered cultural compatibility matching
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                {step.id}
              </div>
              <div className="ml-2 text-xs">
                <div className="text-white">{step.japanese}</div>
                <div className="text-gray-400">{step.english}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-1 mx-4 ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-700'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
        {currentStep === 1 && renderPersonalInformation()}
        {currentStep === 2 && renderProfessionalBackground()}
        {currentStep === 3 && renderPreferences()}
        {currentStep === 4 && renderCulturalAssessment()}
        {currentStep === 5 && renderReviewSubmit()}
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
            onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
            disabled={currentStep === 5}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            次へ / Next
          </button>
        </div>
      )}
    </div>
  );
}