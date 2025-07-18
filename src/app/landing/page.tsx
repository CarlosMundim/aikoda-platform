'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MobileHeader, MobileNavigation } from '../../components/Mobile/MobileNavigation'

export default function LandingPage() {
  const [language, setLanguage] = useState<'dual' | 'ja' | 'en'>('dual')
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">iW</span>
              </div>
              <span className="text-xl font-bold text-indigo-800">iWORKZ</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#platform" className="text-gray-700 hover:text-indigo-800 transition-colors">Platform</a>
              <a href="#cq47" className="text-gray-700 hover:text-indigo-800 transition-colors">CQ47</a>
              <a href="#success" className="text-gray-700 hover:text-indigo-800 transition-colors">Success Stories</a>
              <a href="#founders" className="text-gray-700 hover:text-indigo-800 transition-colors">Leadership</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('ja')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'ja' ? 'bg-indigo-800 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  日本語
                </button>
                <button
                  onClick={() => setLanguage('dual')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'dual' ? 'bg-indigo-800 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  両言語
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                    language === 'en' ? 'bg-indigo-800 text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
              </div>
              <button className="bg-indigo-800 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                {language === 'ja' ? 'デモを予約' : 'Book Demo'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dual Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-800 rounded-full opacity-10 animate-bounce"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Japanese Hero (60% emphasis) */}
            <div className={`${language === 'en' ? 'hidden' : 'block'} space-y-8 transform transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center bg-red-200/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-indigo-800 font-bold">
                    日本初の文化インテリジェンス・プラットフォーム
                  </span>
                </div>
                
                <h1 className="text-6xl font-bold text-gray-900 leading-tight" style={{fontFamily: 'Noto Sans JP, sans-serif'}}>
                  国境を越えた働き方。<br />
                  <span className="text-indigo-800">誤解のない調和</span>を実現
                </h1>
                
                <p className="text-2xl text-gray-600 leading-relaxed" style={{fontFamily: 'Noto Sans JP, sans-serif'}}>
                  外国人労働者の早期離職を30-50%削減する、日本初の文化インテリジェンス・プラットフォーム。
                  CQ47フレームワークとAIエージェントによる、チーム内の文化的摩擦を科学的に予測・防止。
                  建設・介護・製造業界で実証済みの87%予測精度。
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/client-registration" className="bg-indigo-800 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all hover:shadow-lg flex items-center justify-center transform hover:-translate-y-1">
                    <span className="font-medium" style={{fontFamily: 'Noto Sans JP, sans-serif'}}>無料デモを体験</span>
                    <span className="ml-2">→</span>
                  </Link>
                  <Link href="/market-intelligence" className="border-2 border-indigo-800 text-indigo-800 px-8 py-4 rounded-lg hover:bg-indigo-800 hover:text-white transition-all">
                    <span className="font-medium" style={{fontFamily: 'Noto Sans JP, sans-serif'}}>導入事例を見る</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* English Hero (40% emphasis) */}
            <div className={`${language === 'ja' ? 'hidden' : 'block'} space-y-8 transform transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center bg-yellow-300/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-indigo-800">
                    World's First Cultural Intelligence Platform
                  </span>
                </div>
                
                <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
                  Work without borders.<br />
                  <span className="text-indigo-800">Harmony without</span> misunderstanding.
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Japan's first cultural intelligence platform that reduces foreign worker attrition by 30-50%. 
                  Our CQ47 framework and AI agents scientifically predict and prevent cultural friction before it happens.
                  Proven 87% accuracy across construction, elder care, and manufacturing sectors.
                </p>
                
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-800">87%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-800">30-50%</div>
                    <div className="text-sm text-gray-600">Attrition Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-800">47</div>
                    <div className="text-sm text-gray-600">Cultural Dimensions</div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Link href="/candidate-registration" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-md hover:shadow-lg">
                    Start Free Assessment
                  </Link>
                  <Link href="/job-posting" className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-medium">
                    Explore Platform
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CQ47 Framework Section */}
      <section id="cq47" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ja' ? 'CQ47フレームワーク' : 'CQ47 Framework'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ja' 
                ? '47次元の文化分析により、組織内の文化的摩擦を予防し、調和を実現' 
                : 'Prevent cultural friction and achieve harmony through our 47-dimension cultural analysis'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Demo */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {language === 'ja' ? '文化適合性分析中...' : 'Cultural Compatibility Analysis...'}
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-indigo-800 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-indigo-800 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-indigo-800 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-semibold text-lg mb-3 text-gray-900">
                    {demoScenarios[currentDemo][language === 'ja' ? 'ja' : 'en'].title}
                  </h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {demoScenarios[currentDemo][language === 'ja' ? 'ja' : 'en'].score}
                    </span>
                    <div className="w-24 h-2 bg-gray-200 rounded-full">
                      <div className="w-20 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    {demoScenarios[currentDemo][language === 'ja' ? 'ja' : 'en'].description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-800">47</div>
                    <div className="text-sm text-gray-600">
                      {language === 'ja' ? '次元分析' : 'Dimensions'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-600">
                      {language === 'ja' ? '精度' : 'Accuracy'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">2.3s</div>
                    <div className="text-sm text-gray-600">
                      {language === 'ja' ? '分析時間' : 'Analysis'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {language === 'ja' ? '科学的文化評価システム' : 'Scientific Cultural Assessment'}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {language === 'ja' 
                    ? '従来の評価方法を超越した47次元の文化知能分析。AI駆動でチーム成功を高精度予測。'
                    : 'Revolutionary 47-dimension cultural intelligence analysis that goes beyond traditional methods. AI-driven predictions for team success.'
                  }
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "✓",
                    title: language === 'ja' ? '実時間分析' : 'Real-time Analysis', 
                    desc: language === 'ja' ? '瞬時に文化適合性を評価' : 'Instant cultural compatibility assessment'
                  },
                  {
                    icon: "⚡",
                    title: language === 'ja' ? '予測的洞察' : 'Predictive Insights',
                    desc: language === 'ja' ? 'チーム成功の94%精度予測' : '94% accuracy in team success prediction'
                  },
                  {
                    icon: "🎯", 
                    title: language === 'ja' ? 'カスタマイズ可能' : 'Customizable Framework',
                    desc: language === 'ja' ? '企業文化に合わせた調整' : 'Tailored to your company culture'
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-indigo-800 rounded-lg flex items-center justify-center text-white text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ja' ? '企業成功事例' : 'Enterprise Success Stories'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ja' 
                ? '大手企業がiWORKZで達成した測定可能な成果' 
                : 'Measurable results achieved by leading enterprises with iWORKZ'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'ja' ? story.ja.company : story.company}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'ja' ? story.ja.industry : story.industry}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {language === 'ja' ? story.ja.improvement : story.improvement}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'ja' ? story.ja.metric : story.metric}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-800">
                    <div className="text-lg font-semibold text-indigo-800 mb-1">
                      {language === 'ja' ? story.ja.timeReduction : story.timeReduction}
                    </div>
                    <div className="text-sm text-gray-600">
                      {language === 'ja' ? '統合時間短縮' : 'Integration time reduction'}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-sm font-medium">
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
              className="inline-flex items-center px-8 py-4 bg-indigo-800 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {language === 'ja' ? 'より多くの成功事例を見る' : 'View More Success Stories'}
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ja' ? '12週間実装ロードマップ' : '12-Week Implementation Roadmap'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <div key={index} className="flex items-center space-x-6 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {phase.week}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {phase.title[language === 'ja' ? 'ja' : 'en']}
                  </h3>
                  <p className="text-gray-600">
                    {phase.description[language === 'ja' ? 'ja' : 'en']}
                  </p>
                </div>
                <div className="text-green-600">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Founders Section */}
      <section id="founders" className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ja' ? '企業リーダーシップ' : 'Enterprise Leadership'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ja' 
                ? 'グローバル人材業界のエキスパートによる、実証済みの経験と専門知識。企業・AI・学術権威の唯一無二の組み合わせ。'
                : 'Proven expertise from global talent industry veterans. The only platform founded by the intersection of enterprise HR mastery, AI innovation, and linguistic science.'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kenji Yoshidome',
                title: language === 'ja' ? '共同創設者・事業責任者' : 'Co-founder & Business Lead',
                background: language === 'ja' ? 
                  '株式会社アウトソーシング（売上5,000億円）にて17年間、グローバルM&A戦略を統括。アジア太平洋、欧州、中南米における国際人材モデルとポストマージャー統合戦略を設計。' :
                  '17 years overseeing global M&A strategy at Outsourcing Inc. ($5B revenue). Architected international workforce models and post-merger integration strategies across Asia-Pacific, Europe, and Latin America.',
                expertise: language === 'ja' ? 
                  'WBB（Work Beyond Borders）構想の立案者。日本・ASEAN・欧州の労働法制と人材流動化スキームに精通。30%のコスト削減を実現した欧州・東南アジア統合の責任者。' :
                  'Architect of WBB (Work Beyond Borders) initiative. Expert in Japanese, ASEAN, and European labor laws. Led European and Southeast Asian integrations achieving 30% cost savings.',
                icon: '🏢'
              },
              {
                name: 'Carlos Mundim',
                title: language === 'ja' ? '共同創設者・最高戦略責任者' : 'Co-founder & Chief Strategist',
                background: language === 'ja' ? 
                  'Lightpath Systems K.K.創設者。非人間知能（NHI）オーケストレーション、量子認知フレームワーク、次世代HRエコシステムの専門家。アウトソーシング社にて市場横断型HR戦略を主導。' :
                  'Founder of Lightpath Systems K.K. Corporate strategist and AI technologist specializing in non-human intelligence (NHI) orchestration, quantum cognition frameworks, and next-gen HR ecosystems.',
                expertise: language === 'ja' ? 
                  'CQ47フレームワーク、aiKODAオーケストレーション・フレームワーク、LibreChattieの開発者。文化的感受性、言語的知能、グローバル適応性を備えたスケーラブルAIエージェントシステムの構築に注力。' :
                  'Creator of CQ47 Framework, aiKODA orchestration framework, and LibreChattie. Focused on developing scalable AI agents that are culturally sensitive, linguistically intelligent, and globally adaptable.',
                icon: '🧠'
              },
              {
                name: 'Jeanette Dennisson',
                title: language === 'ja' ? '文化インテリジェンス・アーキテクト' : 'Cultural Intelligence Architect',
                background: language === 'ja' ? 
                  '聖マリアンナ医科大学言語学教授。医療・STEM教育における応用言語学、AI強化言語モデリング、EMI/CLIL カリキュラム設計、多文化コミュニケーション用音声テキスト変換システムの専門家。' :
                  'Professor of Linguistics at St. Marianna University School of Medicine. Expert in applied linguistics for medical and STEM education, AI-enhanced language modeling, EMI/CLIL curriculum design.',
                expertise: language === 'ja' ? 
                  '多言語学習システムと AI 駆動文化コミュニケーションツールの国際的権威。認知言語学とリアルタイム相互作用設計の橋渡し役として認識。20年以上にわたり日本の国レベルDEI・言語訓練フレームワークを変革。' :
                  'International authority on multilingual learning systems and AI-driven cultural communication tools. Recognized for bridging cognitive linguistics and real-time interaction design. Transformed national-level DEI frameworks in Japan for 20+ years.',
                icon: '🌐'
              }
            ].map((founder, index) => (
              <div key={index} className="bg-white/95 backdrop-blur p-8 rounded-2xl border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-indigo-800/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{founder.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{founder.name}</h3>
                  <p className="text-indigo-800 font-medium">{founder.title}</p>
                </div>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>{founder.background}</p>
                  <p className="font-medium text-gray-800">{founder.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-800 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
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
              className="px-10 py-4 bg-white text-indigo-800 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {language === 'ja' ? '無料評価を開始' : 'Start Free Assessment'}
            </Link>
            <Link 
              href="/candidate-registration"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-indigo-800 transition-colors font-semibold text-lg"
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