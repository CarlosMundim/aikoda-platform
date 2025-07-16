'use client';

import { useState } from 'react';

export default function CulturalIntelligenceView() {
  const [currentAssessment, setCurrentAssessment] = useState<any>(null);
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [culturalProfile, setCulturalProfile] = useState<any>(null);

  const assessmentTypes = [
    {
      id: 'personal',
      japanese: '個人文化分析',
      english: 'Personal Cultural Analysis',
      description: '個人の文化的背景と価値観を47次元で分析します / Analyze personal cultural background and values across 47 dimensions',
      icon: '👤',
      duration: '15-20分 / 15-20 minutes',
      questions: 20
    },
    {
      id: 'team',
      japanese: 'チーム適合性',
      english: 'Team Compatibility',
      description: 'チーム内での文化的適合性を評価します / Evaluate cultural compatibility within teams',
      icon: '👥',
      duration: '10-15分 / 10-15 minutes',
      questions: 15
    },
    {
      id: 'leadership',
      japanese: 'リーダーシップスタイル',
      english: 'Leadership Style',
      description: 'リーダーシップスタイルの文化的特性を分析します / Analyze cultural characteristics of leadership style',
      icon: '👑',
      duration: '12-18分 / 12-18 minutes',
      questions: 18
    },
    {
      id: 'workplace',
      japanese: '職場文化適応',
      english: 'Workplace Cultural Adaptation',
      description: '新しい職場環境への文化的適応能力を測定します / Measure cultural adaptation ability to new workplace environments',
      icon: '🏢',
      duration: '15-25分 / 15-25 minutes',
      questions: 22
    }
  ];

  const culturalDimensions = [
    {
      category: 'Communication Patterns',
      japanese: 'コミュニケーションパターン',
      dimensions: [
        { id: 'directness', japanese: '直接性', english: 'Directness' },
        { id: 'context_dependency', japanese: '文脈依存性', english: 'Context Dependency' },
        { id: 'formality', japanese: '形式性', english: 'Formality' },
        { id: 'emotional_expression', japanese: '感情表現', english: 'Emotional Expression' },
        { id: 'silence_comfort', japanese: '沈黙の快適さ', english: 'Silence Comfort' }
      ]
    },
    {
      category: 'Power & Authority',
      japanese: '権力・権威',
      dimensions: [
        { id: 'hierarchy_respect', japanese: '階層尊重', english: 'Hierarchy Respect' },
        { id: 'authority_questioning', japanese: '権威への疑問', english: 'Authority Questioning' },
        { id: 'status_consciousness', japanese: '地位意識', english: 'Status Consciousness' },
        { id: 'power_distribution', japanese: '権力分散', english: 'Power Distribution' }
      ]
    },
    {
      category: 'Social Relationships',
      japanese: '社会的関係',
      dimensions: [
        { id: 'individualism', japanese: '個人主義', english: 'Individualism' },
        { id: 'collectivism', japanese: '集団主義', english: 'Collectivism' },
        { id: 'relationship_building', japanese: '関係構築', english: 'Relationship Building' },
        { id: 'trust_development', japanese: '信頼構築', english: 'Trust Development' },
        { id: 'loyalty_expectations', japanese: '忠誠心期待', english: 'Loyalty Expectations' }
      ]
    },
    {
      category: 'Work Style',
      japanese: '作業スタイル',
      dimensions: [
        { id: 'time_orientation', japanese: '時間志向', english: 'Time Orientation' },
        { id: 'deadline_flexibility', japanese: '締切柔軟性', english: 'Deadline Flexibility' },
        { id: 'multitasking', japanese: 'マルチタスク', english: 'Multitasking' },
        { id: 'detail_focus', japanese: '詳細重視', english: 'Detail Focus' },
        { id: 'process_vs_outcome', japanese: 'プロセス対結果', english: 'Process vs Outcome' }
      ]
    },
    {
      category: 'Decision Making',
      japanese: '意思決定',
      dimensions: [
        { id: 'consensus_seeking', japanese: '合意形成', english: 'Consensus Seeking' },
        { id: 'risk_tolerance', japanese: 'リスク許容度', english: 'Risk Tolerance' },
        { id: 'information_gathering', japanese: '情報収集', english: 'Information Gathering' },
        { id: 'decision_speed', japanese: '決定速度', english: 'Decision Speed' },
        { id: 'stakeholder_inclusion', japanese: '利害関係者包含', english: 'Stakeholder Inclusion' }
      ]
    },
    {
      category: 'Conflict Resolution',
      japanese: '紛争解決',
      dimensions: [
        { id: 'conflict_avoidance', japanese: '紛争回避', english: 'Conflict Avoidance' },
        { id: 'direct_confrontation', japanese: '直接対立', english: 'Direct Confrontation' },
        { id: 'mediation_preference', japanese: '調停選好', english: 'Mediation Preference' },
        { id: 'face_saving', japanese: '面子保持', english: 'Face Saving' }
      ]
    },
    {
      category: 'Learning & Development',
      japanese: '学習・開発',
      dimensions: [
        { id: 'formal_training', japanese: '正式研修', english: 'Formal Training' },
        { id: 'experiential_learning', japanese: '体験学習', english: 'Experiential Learning' },
        { id: 'mentorship_value', japanese: 'メンタリング価値', english: 'Mentorship Value' },
        { id: 'feedback_openness', japanese: 'フィードバック開放性', english: 'Feedback Openness' }
      ]
    },
    {
      category: 'Innovation & Change',
      japanese: '革新・変化',
      dimensions: [
        { id: 'change_adaptation', japanese: '変化適応', english: 'Change Adaptation' },
        { id: 'innovation_encouragement', japanese: '革新奨励', english: 'Innovation Encouragement' },
        { id: 'tradition_respect', japanese: '伝統尊重', english: 'Tradition Respect' },
        { id: 'experimentation', japanese: '実験性', english: 'Experimentation' }
      ]
    },
    {
      category: 'Work-Life Integration',
      japanese: 'ワークライフ統合',
      dimensions: [
        { id: 'work_life_balance', japanese: 'ワークライフバランス', english: 'Work-Life Balance' },
        { id: 'overtime_acceptance', japanese: '残業受容', english: 'Overtime Acceptance' },
        { id: 'personal_time_respect', japanese: '個人時間尊重', english: 'Personal Time Respect' },
        { id: 'family_priority', japanese: '家族優先', english: 'Family Priority' }
      ]
    },
    {
      category: 'Achievement Motivation',
      japanese: '達成動機',
      dimensions: [
        { id: 'competition_drive', japanese: '競争意欲', english: 'Competition Drive' },
        { id: 'collaboration_preference', japanese: '協力選好', english: 'Collaboration Preference' },
        { id: 'recognition_seeking', japanese: '承認欲求', english: 'Recognition Seeking' },
        { id: 'intrinsic_motivation', japanese: '内発的動機', english: 'Intrinsic Motivation' }
      ]
    }
  ];

  const sampleQuestions = [
    {
      id: 'q1',
      category: 'Communication',
      japanese: 'チームミーティングで意見が対立した時、あなたはどのように対応しますか？',
      english: 'When opinions clash in a team meeting, how do you typically respond?',
      options: [
        { value: 'direct', japanese: '直接的に自分の意見を述べる', english: 'Express my opinion directly' },
        { value: 'diplomatic', japanese: '外交的にアプローチする', english: 'Take a diplomatic approach' },
        { value: 'listen', japanese: 'まず他の人の意見を聞く', english: 'Listen to others first' },
        { value: 'mediate', japanese: '仲裁役を務める', english: 'Act as a mediator' }
      ]
    },
    {
      id: 'q2',
      category: 'Authority',
      japanese: '上司からの指示に疑問を感じた場合、どうしますか？',
      english: 'If you have doubts about instructions from your supervisor, what do you do?',
      options: [
        { value: 'question', japanese: 'すぐに質問する', english: 'Question immediately' },
        { value: 'private', japanese: '個人的に相談する', english: 'Discuss privately' },
        { value: 'follow', japanese: '指示に従う', english: 'Follow the instructions' },
        { value: 'seek_advice', japanese: '同僚に相談する', english: 'Seek advice from colleagues' }
      ]
    },
    {
      id: 'q3',
      category: 'Time',
      japanese: 'プロジェクトの締切に対するあなたの考えは？',
      english: 'What is your attitude toward project deadlines?',
      options: [
        { value: 'strict', japanese: '厳格に守るべき', english: 'Must be strictly observed' },
        { value: 'flexible', japanese: '柔軟に対応', english: 'Should be flexible' },
        { value: 'quality', japanese: '品質優先', english: 'Quality comes first' },
        { value: 'communication', japanese: '事前相談が重要', english: 'Prior consultation is key' }
      ]
    }
  ];

  const startAssessment = (assessmentType: any) => {
    setCurrentAssessment(assessmentType);
    setAssessmentStep(1);
    setResponses({});
    setShowResults(false);
  };

  const handleResponse = (questionId: string, answer: string) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const completeAssessment = () => {
    // Simulate cultural profile generation
    const mockProfile = generateMockCulturalProfile();
    setCulturalProfile(mockProfile);
    setShowResults(true);
  };

  const generateMockCulturalProfile = () => {
    return {
      overallScore: 87.3,
      primaryCulture: 'Hybrid Asian-Western',
      secondaryCulture: 'Collaborative Modern',
      topStrengths: [
        'Cross-cultural Communication',
        'Adaptive Leadership',
        'Team Harmony'
      ],
      developmentAreas: [
        'Direct Confrontation',
        'Individual Decision Making'
      ],
      dimensionScores: culturalDimensions.map(category => ({
        category: category.category,
        japanese: category.japanese,
        dimensions: category.dimensions.map(dim => ({
          ...dim,
          score: Math.floor(Math.random() * 40) + 60 // 60-100 range
        }))
      }))
    };
  };

  const renderAssessmentSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          文化的知能評価を選択してください
        </h2>
        <p className="text-gray-300">
          Choose Your Cultural Intelligence Assessment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessmentTypes.map(assessment => (
          <div key={assessment.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">{assessment.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {assessment.japanese}
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                {assessment.english}
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                {assessment.description}
              </p>
              
              <div className="flex justify-between text-xs text-gray-400">
                <span>所要時間 / Duration: {assessment.duration}</span>
                <span>質問数 / Questions: {assessment.questions}</span>
              </div>
            </div>

            <button
              onClick={() => startAssessment(assessment)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
            >
              評価開始 / Start Assessment
            </button>
          </div>
        ))}
      </div>

      <div className="bg-purple-900 bg-opacity-30 rounded-lg p-6 border border-purple-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <span className="mr-2">🧠</span>
          47次元文化的知能分析について
        </h3>
        <p className="text-purple-200 text-sm">
          About 47-Dimensional Cultural Intelligence Analysis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="text-purple-200 font-medium mb-2">分析カテゴリー / Analysis Categories:</h4>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• コミュニケーションパターン / Communication Patterns</li>
              <li>• 権力・権威関係 / Power & Authority Relations</li>
              <li>• 社会的関係性 / Social Relationships</li>
              <li>• 作業スタイル / Work Style Preferences</li>
              <li>• 意思決定プロセス / Decision Making Process</li>
            </ul>
          </div>
          <div>
            <h4 className="text-purple-200 font-medium mb-2">活用用途 / Applications:</h4>
            <ul className="text-purple-300 text-sm space-y-1">
              <li>• チーム配置最適化 / Team Placement Optimization</li>
              <li>• 文化研修カスタマイズ / Cultural Training Customization</li>
              <li>• リーダーシップ開発 / Leadership Development</li>
              <li>• 紛争予防・解決 / Conflict Prevention & Resolution</li>
              <li>• 職場適応支援 / Workplace Adaptation Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAssessmentQuestions = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            {currentAssessment.japanese} / {currentAssessment.english}
          </h2>
          <button
            onClick={() => setCurrentAssessment(null)}
            className="text-gray-400 hover:text-white"
          >
            ✕ 戻る / Back
          </button>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(assessmentStep / currentAssessment.questions) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          質問 {assessmentStep} / {currentAssessment.questions}
        </p>
      </div>

      {/* Sample Questions (in real implementation, these would be dynamic) */}
      {sampleQuestions.map((question, index) => {
        if (index + 1 !== assessmentStep) return null;
        
        return (
          <div key={question.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white mb-2">
                {question.japanese}
              </h3>
              <p className="text-gray-300 text-sm">
                {question.english}
              </p>
            </div>

            <div className="space-y-3">
              {question.options.map((option, optIndex) => (
                <label key={optIndex} className="flex items-start space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.value}
                    checked={responses[question.id] === option.value}
                    onChange={() => handleResponse(question.id, option.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 mt-1"
                  />
                  <div>
                    <div className="text-white text-sm font-medium">{option.japanese}</div>
                    <div className="text-gray-400 text-xs">{option.english}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      })}

      <div className="flex justify-between">
        <button
          onClick={() => setAssessmentStep(Math.max(1, assessmentStep - 1))}
          disabled={assessmentStep === 1}
          className="px-6 py-3 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          前の質問 / Previous
        </button>

        {assessmentStep < currentAssessment.questions ? (
          <button
            onClick={() => setAssessmentStep(assessmentStep + 1)}
            disabled={!responses[sampleQuestions[assessmentStep - 1]?.id]}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            次の質問 / Next
          </button>
        ) : (
          <button
            onClick={completeAssessment}
            disabled={!responses[sampleQuestions[assessmentStep - 1]?.id]}
            className="px-6 py-3 bg-green-600 hover:bg-green-500 disabled:bg-gray-600 text-white rounded-lg font-medium transition-colors"
          >
            評価完了 / Complete Assessment
          </button>
        )}
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          文化的知能分析完了
        </h2>
        <p className="text-gray-300">
          Cultural Intelligence Analysis Complete
        </p>
      </div>

      {/* Overall Score */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-center">
        <h3 className="text-white text-lg font-semibold mb-2">
          総合文化適応スコア / Overall Cultural Adaptation Score
        </h3>
        <div className="text-4xl font-bold text-white mb-2">
          {culturalProfile?.overallScore}%
        </div>
        <div className="text-blue-100 text-sm">
          平均より高い適応能力 / Above Average Adaptation Ability
        </div>
      </div>

      {/* Cultural Profile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-4">
            文化的プロファイル / Cultural Profile
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-gray-400 text-sm">主要文化タイプ / Primary Culture:</span>
              <div className="text-white font-medium">{culturalProfile?.primaryCulture}</div>
            </div>
            <div>
              <span className="text-gray-400 text-sm">副次文化タイプ / Secondary Culture:</span>
              <div className="text-white font-medium">{culturalProfile?.secondaryCulture}</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-white font-semibold mb-4">
            主な強み / Key Strengths
          </h3>
          <ul className="space-y-2">
            {culturalProfile?.topStrengths.map((strength: string, index: number) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-gray-300 text-sm">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dimensional Analysis */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-white font-semibold mb-6">
          47次元詳細分析 / 47-Dimensional Detailed Analysis
        </h3>
        
        <div className="space-y-6">
          {culturalProfile?.dimensionScores.slice(0, 3).map((category: any, catIndex: number) => (
            <div key={catIndex}>
              <h4 className="text-white font-medium mb-3">
                {category.japanese} / {category.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.dimensions.map((dimension: any, dimIndex: number) => (
                  <div key={dimIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{dimension.japanese}</span>
                      <span className="text-white font-medium">{dimension.score}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${dimension.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
          完全レポートをダウンロード / Download Full Report
        </button>
      </div>

      {/* Action Items */}
      <div className="bg-yellow-900 bg-opacity-30 rounded-lg p-6 border border-yellow-700">
        <h3 className="text-yellow-200 font-semibold mb-4">
          推奨アクション / Recommended Actions
        </h3>
        <ul className="space-y-2 text-yellow-200 text-sm">
          <li>• 文化的強みを活かせるポジションの検討 / Consider positions that leverage cultural strengths</li>
          <li>• 開発領域に焦点を当てた研修プログラム / Training programs focused on development areas</li>
          <li>• 類似の文化プロファイルを持つチームメンバーとの協働 / Collaborate with team members having similar cultural profiles</li>
          <li>• 定期的な文化適応進捗モニタリング / Regular monitoring of cultural adaptation progress</li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={() => {
            setCurrentAssessment(null);
            setShowResults(false);
            setCulturalProfile(null);
          }}
          className="flex-1 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors"
        >
          新しい評価 / New Assessment
        </button>
        
        <button className="flex-1 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors">
          結果を共有 / Share Results
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <div>文化的知能評価システム</div>
          <div className="text-xl text-gray-300">Cultural Intelligence Assessment System</div>
        </h1>
        <p className="text-gray-400">
          AI駆動型47次元文化分析で深い洞察を獲得しましょう
          <br />
          Gain deep insights with AI-powered 47-dimensional cultural analysis
        </p>
      </div>

      {/* Main Content */}
      {!currentAssessment && !showResults && renderAssessmentSelection()}
      {currentAssessment && !showResults && renderAssessmentQuestions()}
      {showResults && renderResults()}
    </div>
  );
}