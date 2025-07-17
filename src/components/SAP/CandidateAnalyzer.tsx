'use client'

import React, { useState } from 'react'
import { SAPCard } from './SAPCard'
import { SAPButton } from './SAPButton'

interface CandidateAnalyzerProps {
  language: 'en' | 'ja'
}

export function CandidateAnalyzer({ language }: CandidateAnalyzerProps) {
  const [activeStep, setActiveStep] = useState(1)
  const [candidateData, setCandidateData] = useState({
    name: '',
    email: '',
    nationality: '',
    experience: '',
    education: '',
    skills: [] as string[],
  })

  const labels = {
    en: {
      title: "47-Dimension Candidate Analyzer",
      subtitle: "Comprehensive Cultural Intelligence Assessment",
      step1: "Basic Information",
      step2: "Professional Background",
      step3: "Cultural Assessment",
      step4: "Analysis Results",
      name: "Full Name",
      email: "Email Address",
      nationality: "Nationality",
      experience: "Years of Experience",
      education: "Education Level",
      skills: "Key Skills",
      next: "Next Step",
      previous: "Previous",
      analyze: "Analyze Candidate",
      analyzing: "Analyzing...",
      dimensions: {
        waHarmony: "Wa (Harmony)",
        kaizen: "Kaizen (Improvement)",
        omotenashi: "Omotenashi (Service)",
        bushido: "Bushido (Dedication)",
        hierarchy: "Hierarchy Navigation"
      }
    },
    ja: {
      title: "47次元候補者分析",
      subtitle: "包括的な文化的知能評価",
      step1: "基本情報",
      step2: "職歴",
      step3: "文化評価",
      step4: "分析結果",
      name: "氏名",
      email: "メールアドレス",
      nationality: "国籍",
      experience: "経験年数",
      education: "学歴",
      skills: "主要スキル",
      next: "次へ",
      previous: "戻る",
      analyze: "候補者を分析",
      analyzing: "分析中...",
      dimensions: {
        waHarmony: "和（調和）",
        kaizen: "改善",
        omotenashi: "おもてなし",
        bushido: "武士道（献身）",
        hierarchy: "階層ナビゲーション"
      }
    }
  }

  const currentLabels = labels[language]

  const mockResults = {
    overallScore: 87.3,
    culturalFit: 92.1,
    integrationTime: 45,
    dimensions: {
      waHarmony: 85,
      kaizen: 90,
      omotenashi: 88,
      bushido: 82,
      hierarchy: 91.5
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="sap-title">{currentLabels.title}</h1>
        <p className="sap-caption mt-2">{currentLabels.subtitle}</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center">
        <div className="flex space-x-8">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`flex flex-col items-center cursor-pointer ${
                step <= activeStep ? 'text-sap-brand' : 'text-sap-text-muted'
              }`}
              onClick={() => setActiveStep(step)}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step <= activeStep ? 'bg-sap-brand text-white' : 'bg-sap-border'
                }`}
              >
                {step}
              </div>
              <span className="text-xs mt-1">
                {currentLabels[`step${step}` as keyof typeof currentLabels]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      {activeStep === 1 && (
        <SAPCard title={currentLabels.step1}>
          <div className="space-y-4">
            <div>
              <label className="sap-label">{currentLabels.name}</label>
              <input
                type="text"
                className="sap-input"
                value={candidateData.name}
                onChange={(e) => setCandidateData({ ...candidateData, name: e.target.value })}
                placeholder={language === 'en' ? 'John Doe' : '山田太郎'}
              />
            </div>
            <div>
              <label className="sap-label">{currentLabels.email}</label>
              <input
                type="email"
                className="sap-input"
                value={candidateData.email}
                onChange={(e) => setCandidateData({ ...candidateData, email: e.target.value })}
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="sap-label">{currentLabels.nationality}</label>
              <select
                className="sap-select"
                value={candidateData.nationality}
                onChange={(e) => setCandidateData({ ...candidateData, nationality: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="US">United States</option>
                <option value="JP">Japan</option>
                <option value="IN">India</option>
                <option value="CN">China</option>
                <option value="KR">South Korea</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          </div>
        </SAPCard>
      )}

      {activeStep === 4 && (
        <div className="space-y-6">
          {/* Overall Scores */}
          <div className="sap-grid sap-grid-3">
            <SAPCard title={language === 'en' ? 'Overall Score' : '総合スコア'}>
              <div className="text-center">
                <div className="text-5xl font-bold text-sap-brand">
                  {mockResults.overallScore}
                </div>
                <p className="text-sap-text-secondary mt-2">
                  {language === 'en' ? 'out of 100' : '100点満点'}
                </p>
              </div>
            </SAPCard>
            <SAPCard title={language === 'en' ? 'Cultural Fit' : '文化適合度'}>
              <div className="text-center">
                <div className="text-5xl font-bold text-sap-success">
                  {mockResults.culturalFit}%
                </div>
                <p className="text-sap-text-secondary mt-2">
                  {language === 'en' ? 'match rate' : '適合率'}
                </p>
              </div>
            </SAPCard>
            <SAPCard title={language === 'en' ? 'Integration Time' : '統合期間'}>
              <div className="text-center">
                <div className="text-5xl font-bold text-sap-warning">
                  {mockResults.integrationTime}
                </div>
                <p className="text-sap-text-secondary mt-2">
                  {language === 'en' ? 'days estimated' : '日（推定）'}
                </p>
              </div>
            </SAPCard>
          </div>

          {/* Key Dimensions */}
          <SAPCard title={language === 'en' ? 'Key Cultural Dimensions' : '主要文化次元'}>
            <div className="space-y-4">
              {Object.entries(mockResults.dimensions).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">
                      {currentLabels.dimensions[key as keyof typeof currentLabels.dimensions]}
                    </span>
                    <span className="text-sm font-bold">{value}%</span>
                  </div>
                  <div className="w-full bg-sap-border rounded-full h-2">
                    <div
                      className="bg-sap-brand h-2 rounded-full transition-all duration-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SAPCard>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <SAPButton
          variant="secondary"
          onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
          disabled={activeStep === 1}
        >
          {currentLabels.previous}
        </SAPButton>
        {activeStep < 4 ? (
          <SAPButton
            variant="primary"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            {currentLabels.next}
          </SAPButton>
        ) : (
          <SAPButton
            variant="primary"
            onClick={() => {/* Generate PDF report */}}
          >
            {language === 'en' ? 'Download Report' : 'レポートをダウンロード'}
          </SAPButton>
        )}
      </div>
    </div>
  )
}

export default CandidateAnalyzer