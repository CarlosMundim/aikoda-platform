'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MobileHeader, MobileNavigation } from '../../components/Mobile/MobileNavigation'

export default function LandingPage() {
  const [language, setLanguage] = useState<'en' | 'ja'>('ja')
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const demoScenarios = [
    {
      en: { title: "Cultural Integration Assessment", score: "94% Match", description: "AI-powered prediction for team success" },
      ja: { title: "文化統合評価", score: "94% マッチ", description: "チーム成功のAI予測" }
    },
    {
      en: { title: "Communication Style Analysis", score: "87% Harmony", description: "Optimal team communication patterns" },
      ja: { title: "コミュニケーションスタイル分析", score: "87% 調和", description: "最適なチームコミュニケーション" }
    },
    {
      en: { title: "Work Style Compatibility", score: "91% Kaizen", description: "Continuous improvement mindset alignment" },
      ja: { title: "ワークスタイル適合性", score: "91% 改善", description: "継続的改善マインドセット" }
    }
  ]

  const successStories = [
    {
      company: "Toyota Motor Corp",
      industry: "Automotive",
      improvement: "340%",
      metric: "Cross-cultural team performance",
      timeReduction: "180 days → 45 days",
      ja: {
        company: "トヨタ自動車株式会社",
        industry: "自動車産業",
        improvement: "340%",
        metric: "異文化チームパフォーマンス",
        timeReduction: "180日 → 45日"
      }
    },
    {
      company: "Mitsubishi Electric",
      industry: "Technology",
      improvement: "275%",
      metric: "Employee cultural integration",
      timeReduction: "120 days → 30 days",
      ja: {
        company: "三菱電機株式会社",
        industry: "テクノロジー",
        improvement: "275%",
        metric: "従業員文化統合",
        timeReduction: "120日 → 30日"
      }
    },
    {
      company: "SoftBank Group",
      industry: "Telecommunications",
      improvement: "420%",
      metric: "Global team efficiency",
      timeReduction: "200 days → 35 days",
      ja: {
        company: "ソフトバンクグループ株式会社",
        industry: "通信",
        improvement: "420%",
        metric: "グローバルチーム効率性",
        timeReduction: "200日 → 35日"
      }
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoScenarios.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sap-background via-white to-sap-hover-background">
      {/* Mobile Header */}
      <MobileHeader
        title="iWORKZ Technologies kk"
        language={language}
        onLanguageChange={setLanguage}
      />

      {/* Dual Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-sap-brand/5 to-sap-success/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            
            {/* Japanese Hero (60%) */}
            <div className={`lg:col-span-3 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-sap-text-primary mb-6 leading-tight">
                  47次元
                  <span className="block text-sap-brand">文化知能プラットフォーム</span>
                  <span className="block text-2xl lg:text-3xl text-sap-text-secondary mt-4">
                    日本企業のグローバル統合
                  </span>
                </h1>
                <p className="text-xl text-sap-text-secondary mb-8 max-w-2xl">
                  AI駆動の文化適合性評価により、グローバル人材の統合を75%短縮し、チーム成功率を94%予測します。
                  日本の企業文化と国際的な才能を科学的に融合させる革新的なソリューションです。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/client-registration"
                    className="px-8 py-4 bg-sap-brand text-white rounded-lg hover:bg-sap-brand-dark transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    無料評価を開始 →
                  </Link>
                  <Link 
                    href="/market-intelligence"
                    className="px-8 py-4 border-2 border-sap-brand text-sap-brand rounded-lg hover:bg-sap-brand hover:text-white transition-colors font-semibold text-lg"
                  >
                    プラットフォームを体験
                  </Link>
                </div>
              </div>
            </div>

            {/* English Hero (40%) */}
            <div className={`lg:col-span-2 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-4xl font-bold text-sap-text-primary mb-4 leading-tight">
                  Cultural Intelligence
                  <span className="block text-sap-brand">for Global Talent</span>
                </h2>
                <p className="text-lg text-sap-text-secondary mb-6 max-w-xl">
                  Reduce cultural integration time by 75% and predict team success with 94% accuracy using our AI-powered 47-dimension cultural assessment.
                </p>
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/candidate-registration"
                    className="px-6 py-3 bg-sap-success text-white rounded-lg hover:bg-sap-success-dark transition-colors font-medium shadow-md hover:shadow-lg"
                  >
                    Start Free Assessment
                  </Link>
                  <Link 
                    href="/job-posting"
                    className="px-6 py-3 border border-sap-success text-sap-success rounded-lg hover:bg-sap-success hover:text-white transition-colors font-medium"
                  >
                    Explore Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Cultural Intelligence Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sap-text-primary mb-4">
              {language === 'ja' ? 'AI駆動文化知能デモンストレーション' : 'AI-Powered Cultural Intelligence Demo'}
            </h2>
            <p className="text-xl text-sap-text-secondary max-w-3xl mx-auto">
              {language === 'ja' 
                ? '47次元の文化分析フレームワークによる実時間評価をご体験ください' 
                : 'Experience real-time assessment with our 47-dimension cultural analysis framework'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-sap-background to-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-sap-text-primary">
                    {language === 'ja' ? '文化適合性スキャン中...' : 'Cultural Compatibility Scanning...'}
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-sap-brand rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-sap-brand rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-sap-brand rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-sap-border-color">
                  <h4 className="font-semibold text-lg mb-3 text-sap-text-primary">
                    {demoScenarios[currentDemo][language].title}
                  </h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-sap-success">
                      {demoScenarios[currentDemo][language].score}
                    </span>
                    <div className="w-24 h-2 bg-sap-background rounded-full">
                      <div className="w-20 h-2 bg-sap-success rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-sap-text-secondary">
                    {demoScenarios[currentDemo][language].description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-sap-hover-background rounded-lg">
                    <div className="text-2xl font-bold text-sap-brand">47</div>
                    <div className="text-sm text-sap-text-secondary">
                      {language === 'ja' ? '次元分析' : 'Dimensions'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-sap-hover-background rounded-lg">
                    <div className="text-2xl font-bold text-sap-success">94%</div>
                    <div className="text-sm text-sap-text-secondary">
                      {language === 'ja' ? '精度' : 'Accuracy'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-sap-hover-background rounded-lg">
                    <div className="text-2xl font-bold text-sap-warning">2.3s</div>
                    <div className="text-sm text-sap-text-secondary">
                      {language === 'ja' ? '分析時間' : 'Analysis'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-sap-text-primary mb-4">
                  {language === 'ja' ? '科学的文化評価システム' : 'Scientific Cultural Assessment System'}
                </h3>
                <p className="text-lg text-sap-text-secondary mb-6">
                  {language === 'ja' 
                    ? '47次元の文化知能フレームワークにより、従来の評価方法を超えた深い洞察を提供します。AI駆動の分析により、チームの成功を高精度で予測します。'
                    : 'Our 47-dimension cultural intelligence framework provides deep insights beyond traditional assessment methods. AI-driven analysis predicts team success with high accuracy.'
                  }
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-sap-hover-background rounded-lg">
                  <div className="w-12 h-12 bg-sap-brand rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sap-text-primary">
                      {language === 'ja' ? '実時間分析' : 'Real-time Analysis'}
                    </h4>
                    <p className="text-sap-text-secondary">
                      {language === 'ja' ? '瞬時に文化適合性を評価' : 'Instant cultural compatibility assessment'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-sap-hover-background rounded-lg">
                  <div className="w-12 h-12 bg-sap-success rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sap-text-primary">
                      {language === 'ja' ? '予測的洞察' : 'Predictive Insights'}
                    </h4>
                    <p className="text-sap-text-secondary">
                      {language === 'ja' ? 'チーム成功の94%精度予測' : '94% accuracy in team success prediction'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-sap-hover-background rounded-lg">
                  <div className="w-12 h-12 bg-sap-warning rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                      <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sap-text-primary">
                      {language === 'ja' ? 'カスタマイズ可能' : 'Customizable Framework'}
                    </h4>
                    <p className="text-sap-text-secondary">
                      {language === 'ja' ? '企業文化に合わせた調整' : 'Tailored to your company culture'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Cultural Success Stories */}
      <section className="py-20 bg-gradient-to-br from-sap-background to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sap-text-primary mb-4">
              {language === 'ja' ? '文化統合成功事例' : 'Cultural Integration Success Stories'}
            </h2>
            <p className="text-xl text-sap-text-secondary max-w-3xl mx-auto">
              {language === 'ja' 
                ? '大手企業がiWORKZプラットフォームで達成した具体的な成果をご覧ください' 
                : 'See measurable results achieved by leading enterprises using the iWORKZ platform'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-sap-text-primary mb-2">
                    {language === 'ja' ? story.ja.company : story.company}
                  </h3>
                  <p className="text-sap-text-secondary">
                    {language === 'ja' ? story.ja.industry : story.industry}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-sap-success/10 rounded-lg">
                    <div className="text-3xl font-bold text-sap-success mb-1">
                      {language === 'ja' ? story.ja.improvement : story.improvement}
                    </div>
                    <div className="text-sm text-sap-text-secondary">
                      {language === 'ja' ? story.ja.metric : story.metric}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-sap-brand/10 rounded-lg">
                    <div className="text-lg font-semibold text-sap-brand mb-1">
                      {language === 'ja' ? story.ja.timeReduction : story.timeReduction}
                    </div>
                    <div className="text-sm text-sap-text-secondary">
                      {language === 'ja' ? '統合時間短縮' : 'Integration time reduction'}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-sap-border-color">
                  <div className="flex items-center justify-center space-x-2 text-sap-text-secondary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="text-sm">
                      {language === 'ja' ? '実証済み成果' : 'Verified Results'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/market-intelligence"
              className="inline-flex items-center px-8 py-4 bg-sap-brand text-white rounded-lg hover:bg-sap-brand-dark transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {language === 'ja' ? 'より多くの成功事例を見る' : 'View More Success Stories'}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sap-text-primary mb-4">
              {language === 'ja' ? '12週間実装ロードマップ' : '12-Week Implementation Roadmap'}
            </h2>
            <p className="text-xl text-sap-text-secondary max-w-3xl mx-auto">
              {language === 'ja' 
                ? '段階的導入により、確実な成功を保証します' 
                : 'Phased implementation ensures guaranteed success'
              }
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                week: '1-4',
                title: { ja: '基盤設定フェーズ', en: 'Foundation Phase' },
                description: { ja: 'プラットフォーム設定、初期評価、チーム構築', en: 'Platform setup, initial assessment, team building' }
              },
              {
                week: '5-8',
                title: { ja: '統合フェーズ', en: 'Integration Phase' },
                description: { ja: '文化評価の実装、データ分析、プロセス最適化', en: 'Cultural assessment implementation, data analysis, process optimization' }
              },
              {
                week: '9-12',
                title: { ja: '最適化フェーズ', en: 'Optimization Phase' },
                description: { ja: 'パフォーマンス向上、スケール準備、継続改善', en: 'Performance enhancement, scale preparation, continuous improvement' }
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-sap-hover-background rounded-xl">
                <div className="w-16 h-16 bg-sap-brand rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {phase.week}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-sap-text-primary mb-2">
                    {phase.title[language]}
                  </h3>
                  <p className="text-sap-text-secondary">
                    {phase.description[language]}
                  </p>
                </div>
                <div className="text-sap-success">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sap-brand to-sap-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {language === 'ja' 
              ? '今すぐ文化知能の力を体験してください' 
              : 'Experience the Power of Cultural Intelligence Today'
            }
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {language === 'ja' 
              ? '無料評価から始めて、グローバル人材の真の可能性を解き放ちましょう'
              : 'Start with a free assessment and unlock the true potential of your global talent'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/client-registration"
              className="px-10 py-4 bg-white text-sap-brand rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {language === 'ja' ? '無料評価を開始' : 'Start Free Assessment'}
            </Link>
            <Link 
              href="/candidate-registration"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-sap-brand transition-colors font-semibold text-lg"
            >
              {language === 'ja' ? 'プラットフォームデモ' : 'Platform Demo'}
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm">
              {language === 'ja' 
                ? '© 2025 iWORKZ Technologies kk. 文化知能プラットフォームのリーダー'
                : '© 2025 iWORKZ Technologies kk. Leader in Cultural Intelligence Platforms'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <MobileNavigation language={language} />
    </div>
  )
}