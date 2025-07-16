'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../../components/LanguageProvider';
import { LanguageToggle } from '../../../components/LanguageToggle';

// Japanese industries commonly used in job portals
const JAPANESE_INDUSTRIES = [
  { value: 'it', label: 'IT・通信', labelEn: 'IT & Communications' },
  { value: 'manufacturing', label: '製造業', labelEn: 'Manufacturing' },
  { value: 'finance', label: '金融・保険', labelEn: 'Finance & Insurance' },
  { value: 'retail', label: '小売・卸売', labelEn: 'Retail & Wholesale' },
  { value: 'consulting', label: 'コンサルティング', labelEn: 'Consulting' },
  { value: 'healthcare', label: '医療・福祉', labelEn: 'Healthcare & Welfare' },
  { value: 'education', label: '教育・研究', labelEn: 'Education & Research' },
  { value: 'hospitality', label: 'サービス・接客', labelEn: 'Service & Hospitality' },
  { value: 'construction', label: '建設・不動産', labelEn: 'Construction & Real Estate' },
  { value: 'media', label: 'メディア・広告', labelEn: 'Media & Advertising' },
  { value: 'logistics', label: '物流・運輸', labelEn: 'Logistics & Transportation' },
  { value: 'government', label: '官公庁・公共', labelEn: 'Government & Public' },
  { value: 'agriculture', label: '農林水産', labelEn: 'Agriculture & Fishery' },
  { value: 'energy', label: 'エネルギー', labelEn: 'Energy' },
  { value: 'other', label: 'その他', labelEn: 'Other' }
];

export default function CandidateRegistration() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    position: '',
    experience: '',
    education: '',
    industry: '',
    location: '',
    salary: '',
    workType: '',
    startDate: '',
    cv: null as File | null
  });

  useEffect(() => {
    // Get saved data from auth page
    const savedName = localStorage.getItem('candidateName') || '';
    const savedEmail = localStorage.getItem('candidateEmail') || '';
    setFormData(prev => ({ ...prev, name: savedName, email: savedEmail }));
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
      if (allowedTypes.includes(file.type)) {
        setFormData({ ...formData, cv: file });
      } else {
        alert('Please upload PDF, Word, or Text file only');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save form data and proceed to skills page
    localStorage.setItem('candidateData', JSON.stringify(formData));
    router.push('/candidate/skills');
  };

  return (
    <div className="container min-h-screen bg-gray-50">
      {/* HOME Button - Top */}
      <div className="mb-6">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.back()}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              ← Back
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {language === 'ja' ? '候補者登録' : 'Candidate Registration'}
            </h1>
          </div>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {language === 'ja' ? '個人情報' : 'Personal Information'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? '名前' : 'Name'}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  readOnly
                  className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? 'メール' : 'Email'}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  readOnly
                  className="w-full px-4 py-4 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? '電話' : 'Phone'}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={language === 'ja' ? '090-1234-5678' : '+81 90-1234-5678'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'ja' ? '国籍' : 'Nationality'}
                </label>
                <input
                  type="text"
                  value={formData.nationality}
                  onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                  className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={language === 'ja' ? '日本' : 'Japan'}
                />
              </div>
            </div>

            {/* Professional Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ja' ? '職歴' : 'Professional'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '職位' : 'Position'}
                  </label>
                  <input
                    type="text"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'ja' ? 'ソフトウェアエンジニア' : 'Software Engineer'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '経験' : 'Experience'}
                  </label>
                  <input
                    type="text"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'ja' ? '5年' : '5 years'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '学歴' : 'Education'}
                  </label>
                  <input
                    type="text"
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'ja' ? '東京大学 工学部' : 'Tokyo University, Engineering'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '業界' : 'Industry'}
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">
                      {language === 'ja' ? '選択してください' : 'Please select'}
                    </option>
                    {JAPANESE_INDUSTRIES.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {language === 'ja' ? industry.label : industry.labelEn}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {language === 'ja' ? '希望条件' : 'Preferences'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '勤務地' : 'Location'}
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'ja' ? '東京' : 'Tokyo'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '年収' : 'Salary'}
                  </label>
                  <input
                    type="text"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={language === 'ja' ? '600万円〜800万円' : '6M-8M JPY'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '勤務形態' : 'Work Type'}
                  </label>
                  <select
                    value={formData.workType}
                    onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">{language === 'ja' ? '選択してください' : 'Please select'}</option>
                    <option value="fulltime">{language === 'ja' ? '正社員' : 'Full-time'}</option>
                    <option value="contract">{language === 'ja' ? '契約社員' : 'Contract'}</option>
                    <option value="parttime">{language === 'ja' ? 'パート・アルバイト' : 'Part-time'}</option>
                    <option value="freelance">{language === 'ja' ? 'フリーランス' : 'Freelance'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ja' ? '開始日' : 'Start Date'}
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CV Upload (PDF/WORD/TXT)
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="cv-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="cv-upload"
                        name="cv-upload"
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx,.txt"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PDF, DOC, DOCX, TXT up to 10MB</p>
                  {formData.cv && (
                    <p className="text-sm text-green-600 mt-2">
                      Selected: {formData.cv.name}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                {language === 'ja' ? '次へ: スキル' : 'Next: Skills'}
              </button>
            </div>
          </form>
        </div>
      </main>
      
      {/* HOME Button - Bottom */}
      <div className="mt-8 text-center">
        <Link href="/" className="btn btn-outline">
          ホーム<br />
          <span className="text-xs">HOME</span>
        </Link>
      </div>
    </div>
  );
}