'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle,
  Users, Target, Heart, Zap, Award, BarChart3, 
  Sparkles, Activity, TrendingUp, User, Clock,
  Star, Globe, Shield, Lightbulb, MessageSquare, Briefcase
} from 'lucide-react';

const PsychologicalTest = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [candidateInfo, setCandidateInfo] = useState({
    name: '',
    email: '',
    position: '',
    experience: ''
  });

  // Comprehensive psychological assessment questions
  const questionCategories = [
    {
      category: 'personality',
      title: 'Personality Assessment',
      description: 'Understanding core personality traits and work preferences'
    },
    {
      category: 'motivation',
      title: 'Motivation Analysis', 
      description: 'Identifying key drivers and career motivations'
    },
    {
      category: 'stress',
      title: 'Stress Management',
      description: 'Evaluating resilience and coping mechanisms'
    },
    {
      category: 'teamwork',
      title: 'Team Dynamics',
      description: 'Assessing collaboration and communication style'
    },
    {
      category: 'leadership',
      title: 'Leadership Potential',
      description: 'Measuring leadership qualities and management style'
    }
  ];

  const questions = [
    // Personality Questions
    {
      id: 1,
      category: 'personality',
      question: 'When facing a complex problem at work, what is your natural approach?',
      type: 'multiple_choice',
      options: [
        { text: 'Break it down into smaller, manageable parts', value: 'analytical', traits: ['detail_oriented', 'systematic'] },
        { text: 'Brainstorm creative solutions with colleagues', value: 'collaborative', traits: ['social', 'innovative'] },
        { text: 'Research thoroughly before taking action', value: 'cautious', traits: ['careful', 'thorough'] },
        { text: 'Jump in and figure it out as I go', value: 'action_oriented', traits: ['decisive', 'adaptable'] }
      ]
    },
    {
      id: 2,
      category: 'personality',
      question: 'In social situations at work, you typically:',
      type: 'multiple_choice',
      options: [
        { text: 'Enjoy being the center of attention and leading conversations', value: 'extroverted', traits: ['outgoing', 'confident'] },
        { text: 'Participate actively but prefer smaller group discussions', value: 'balanced', traits: ['social', 'selective'] },
        { text: 'Listen more than you speak and contribute thoughtfully', value: 'introverted', traits: ['reflective', 'thoughtful'] },
        { text: 'Focus on work tasks and minimize social interaction', value: 'task_focused', traits: ['focused', 'independent'] }
      ]
    },
    
    // Motivation Questions
    {
      id: 3,
      category: 'motivation',
      question: 'What motivates you most in your career?',
      type: 'ranking',
      options: [
        { text: 'Financial rewards and security', value: 'financial', traits: ['security_oriented', 'practical'] },
        { text: 'Recognition and advancement opportunities', value: 'achievement', traits: ['ambitious', 'competitive'] },
        { text: 'Learning new skills and personal growth', value: 'growth', traits: ['curious', 'adaptive'] },
        { text: 'Making a positive impact on others', value: 'purpose', traits: ['altruistic', 'meaningful'] },
        { text: 'Creative expression and innovation', value: 'creativity', traits: ['innovative', 'artistic'] }
      ]
    },
    {
      id: 4,
      category: 'motivation',
      question: 'When you accomplish a goal, what gives you the most satisfaction?',
      type: 'multiple_choice',
      options: [
        { text: 'The recognition from superiors and peers', value: 'external_validation', traits: ['recognition_seeking', 'social'] },
        { text: 'The personal sense of achievement', value: 'internal_satisfaction', traits: ['self_motivated', 'independent'] },
        { text: 'The positive impact on team or organization', value: 'collective_benefit', traits: ['team_oriented', 'altruistic'] },
        { text: 'The learning and skills gained in the process', value: 'learning_focused', traits: ['growth_minded', 'curious'] }
      ]
    },

    // Stress Management Questions
    {
      id: 5,
      category: 'stress',
      question: 'When facing a tight deadline with multiple competing priorities, you:',
      type: 'multiple_choice',
      options: [
        { text: 'Create a detailed plan and stick to it methodically', value: 'structured', traits: ['organized', 'systematic'] },
        { text: 'Focus on the most important task first', value: 'prioritized', traits: ['strategic', 'focused'] },
        { text: 'Ask for help or delegate where possible', value: 'collaborative', traits: ['resourceful', 'social'] },
        { text: 'Work longer hours to get everything done', value: 'persistence', traits: ['dedicated', 'hardworking'] }
      ]
    },
    {
      id: 6,
      category: 'stress',
      question: 'How do you typically handle criticism or negative feedback?',
      type: 'multiple_choice',
      options: [
        { text: 'Use it as motivation to improve and prove myself', value: 'growth_oriented', traits: ['resilient', 'ambitious'] },
        { text: 'Analyze it objectively to find valid points', value: 'analytical', traits: ['logical', 'self_aware'] },
        { text: 'Discuss it with others to get different perspectives', value: 'social_processing', traits: ['open', 'communicative'] },
        { text: 'Initially feel hurt but then work on improvement', value: 'emotional_then_rational', traits: ['sensitive', 'adaptive'] }
      ]
    },

    // Teamwork Questions
    {
      id: 7,
      category: 'teamwork',
      question: 'In team meetings, you most often:',
      type: 'multiple_choice',
      options: [
        { text: 'Take charge and guide the discussion', value: 'leader', traits: ['leadership', 'assertive'] },
        { text: 'Contribute ideas and build on others\' suggestions', value: 'collaborator', traits: ['cooperative', 'creative'] },
        { text: 'Listen carefully and ask clarifying questions', value: 'facilitator', traits: ['supportive', 'analytical'] },
        { text: 'Focus on practical implementation details', value: 'implementer', traits: ['practical', 'detail_oriented'] }
      ]
    },
    {
      id: 8,
      category: 'teamwork',
      question: 'When there\'s conflict in your team, you prefer to:',
      type: 'multiple_choice',
      options: [
        { text: 'Address it directly and work toward resolution', value: 'direct_confrontation', traits: ['assertive', 'problem_solver'] },
        { text: 'Mediate between conflicting parties', value: 'mediator', traits: ['diplomatic', 'empathetic'] },
        { text: 'Focus on areas of agreement and common goals', value: 'consensus_builder', traits: ['harmonious', 'strategic'] },
        { text: 'Suggest taking time to cool down before discussing', value: 'conflict_avoider', traits: ['cautious', 'peaceful'] }
      ]
    },

    // Leadership Questions
    {
      id: 9,
      category: 'leadership',
      question: 'Your ideal management style would be:',
      type: 'multiple_choice',
      options: [
        { text: 'Set clear expectations and monitor progress closely', value: 'directive', traits: ['structured', 'controlling'] },
        { text: 'Provide guidance but allow team members autonomy', value: 'coaching', traits: ['supportive', 'trusting'] },
        { text: 'Encourage collaboration and shared decision-making', value: 'democratic', traits: ['inclusive', 'collaborative'] },
        { text: 'Give minimal oversight and let people self-manage', value: 'delegative', traits: ['hands_off', 'trusting'] }
      ]
    },
    {
      id: 10,
      category: 'leadership',
      question: 'When making important decisions, you tend to:',
      type: 'multiple_choice',
      options: [
        { text: 'Gather extensive data and analyze all options', value: 'analytical_decision', traits: ['thorough', 'logical'] },
        { text: 'Consult with key stakeholders and build consensus', value: 'consultative_decision', traits: ['inclusive', 'diplomatic'] },
        { text: 'Trust your intuition and past experience', value: 'intuitive_decision', traits: ['confident', 'experienced'] },
        { text: 'Make quick decisions and adjust as needed', value: 'agile_decision', traits: ['decisive', 'adaptable'] }
      ]
    }
  ];

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const analyzeResults = async () => {
    setIsAnalyzing(true);
    
    // Simulate comprehensive AI analysis
    setTimeout(() => {
      // Calculate personality traits based on answers
      const traitCounts: any = {};
      const categoryScores: any = {};
      
      questions.forEach(q => {
        const answer = answers[q.id];
        if (answer) {
          const selectedOption = q.options.find(opt => opt.value === answer);
          if (selectedOption?.traits) {
            selectedOption.traits.forEach(trait => {
              traitCounts[trait] = (traitCounts[trait] || 0) + 1;
            });
          }
          
          // Category-specific scoring
          if (!categoryScores[q.category]) {
            categoryScores[q.category] = { total: 0, count: 0 };
          }
          categoryScores[q.category].total += Math.random() * 20 + 80; // 80-100 range
          categoryScores[q.category].count += 1;
        }
      });

      // Generate comprehensive results
      const mockResults = {
        overallScore: 91,
        personalityType: 'Analytical Collaborator',
        confidence: 94,
        
        categoryScores: {
          personality: Math.round(categoryScores.personality?.total / categoryScores.personality?.count || 85),
          motivation: Math.round(categoryScores.motivation?.total / categoryScores.motivation?.count || 88),
          stress: Math.round(categoryScores.stress?.total / categoryScores.stress?.count || 82),
          teamwork: Math.round(categoryScores.teamwork?.total / categoryScores.teamwork?.count || 93),
          leadership: Math.round(categoryScores.leadership?.total / categoryScores.leadership?.count || 87)
        },

        topTraits: [
          { trait: 'Analytical Thinking', score: 95, description: 'Excels at breaking down complex problems systematically' },
          { trait: 'Team Collaboration', score: 92, description: 'Works exceptionally well in team environments' },
          { trait: 'Adaptability', score: 89, description: 'Adjusts well to changing circumstances and requirements' },
          { trait: 'Communication', score: 87, description: 'Clear and effective in both written and verbal communication' },
          { trait: 'Problem Solving', score: 91, description: 'Creative and logical approach to challenges' }
        ],

        workStyle: {
          primary: 'Collaborative Analyst',
          characteristics: [
            'Prefers structured approach to complex problems',
            'Values team input and diverse perspectives', 
            'Motivated by learning and professional growth',
            'Handles stress through systematic planning',
            'Natural inclination toward coaching leadership style'
          ]
        },

        careerFit: {
          idealRoles: [
            'Senior Software Engineer - Technical Lead',
            'Project Manager - Cross-functional Teams',
            'Business Analyst - Strategic Planning',
            'Product Manager - User Experience Focus',
            'Consultant - Process Improvement'
          ],
          workEnvironment: 'Collaborative team setting with autonomy and growth opportunities',
          managementStyle: 'Coaching-oriented leadership with clear expectations'
        },

        culturalAlignment: {
          japaneseWorkplace: 92,
          dimensions: {
            wa: 90, // Harmony - strong team collaboration
            kaizen: 88, // Continuous improvement - growth oriented
            omotenashi: 85, // Service mindset - helpful nature
            hierarchy: 82, // Respect for structure - balanced approach
            consensus: 89 // Group decision making - consultative style
          }
        },

        developmentAreas: [
          {
            area: 'Assertiveness in Leadership',
            current: 72,
            target: 85,
            recommendations: [
              'Practice taking initiative in team meetings',
              'Volunteer for leadership roles in projects',
              'Develop confidence in decision-making without consensus'
            ]
          },
          {
            area: 'Stress Resilience',
            current: 78,
            target: 88,
            recommendations: [
              'Learn mindfulness and stress management techniques',
              'Practice time management and prioritization',
              'Build support networks for challenging situations'
            ]
          }
        ],

        interviewInsights: {
          strengths: [
            'Will excel in collaborative environments',
            'Strong analytical skills for technical challenges',
            'Natural growth mindset aligns with Japanese kaizen',
            'Balanced approach to leadership and teamwork'
          ],
          considerations: [
            'May need encouragement to take bold leadership positions',
            'Could benefit from stress management training',
            'Might overthink decisions in fast-paced environments'
          ],
          idealInterviewFormat: 'Panel interview with technical problem-solving and team scenario discussions'
        },

        aiRecommendations: [
          'Excellent fit for technical leadership roles in Japanese companies',
          'Strong cultural alignment with Japanese workplace values',
          'Would benefit from mentorship program for leadership development',
          'Ideal candidate for roles requiring both technical expertise and team coordination'
        ]
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 3500);
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-6 h-6 text-green-500" />
              <span className="text-lg font-semibold text-gray-900">Psychological Assessment Complete</span>
            </div>
          </div>

          {/* Results Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Psychological Intelligence Report</h1>
                <p className="text-purple-100">Comprehensive personality and career fit analysis</p>
                <p className="text-purple-200 mt-1">Candidate: {candidateInfo.name || 'Demo Candidate'}</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold">{results.overallScore}%</div>
                <div className="text-purple-100">Overall Fit Score</div>
                <div className="text-sm text-purple-200 mt-1">{results.confidence}% confidence</div>
              </div>
            </div>
          </div>

          {/* Main Results Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Personality Profile */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personality Type */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="w-6 h-6 mr-2 text-purple-600" />
                  Personality Type: {results.personalityType}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {Object.entries(results.categoryScores).map(([category, score]: [string, any]) => (
                    <div key={category} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 relative">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            strokeDasharray={`${score}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-gray-900">{score}%</span>
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-gray-700 capitalize">{category}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Traits */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-600" />
                  Core Personality Traits
                </h3>
                <div className="space-y-4">
                  {results.topTraits.map((trait: any, idx: number) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{trait.trait}</span>
                        <span className="text-sm font-bold text-purple-600">{trait.score}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${trait.score}%` }}
                        />
                      </div>
                      <p className="text-sm text-gray-600">{trait.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Style */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Work Style: {results.workStyle.primary}
                </h3>
                <ul className="space-y-3">
                  {results.workStyle.characteristics.map((char: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Areas */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-orange-600" />
                  Development Opportunities
                </h3>
                <div className="space-y-6">
                  {results.developmentAreas.map((area: any, idx: number) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{area.area}</h4>
                        <div className="text-sm text-gray-600">
                          {area.current}% → {area.target}%
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                        <div className="flex h-full">
                          <div 
                            className="bg-orange-400 rounded-full"
                            style={{ width: `${area.current}%` }}
                          />
                          <div 
                            className="bg-green-400 rounded-full ml-1"
                            style={{ width: `${area.target - area.current}%` }}
                          />
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {area.recommendations.map((rec: string, recIdx: number) => (
                          <li key={recIdx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Insights & Recommendations */}
            <div className="lg:col-span-1 space-y-6">
              {/* Cultural Alignment */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-600" />
                  Japanese Cultural Fit
                </h3>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{results.culturalAlignment.japaneseWorkplace}%</div>
                  <div className="text-sm text-gray-600">Cultural Alignment</div>
                </div>
                <div className="space-y-3">
                  {Object.entries(results.culturalAlignment.dimensions).map(([dim, score]: [string, any]) => (
                    <div key={dim}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700 capitalize">{dim}</span>
                        <span className="text-gray-900">{score}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full"
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Fit */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Ideal Career Roles
                </h3>
                <div className="space-y-3">
                  {results.careerFit.idealRoles.map((role: string, idx: number) => (
                    <div key={idx} className="bg-green-50 rounded-lg p-3">
                      <div className="font-medium text-gray-900 text-sm">{role}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Environment:</strong> {results.careerFit.workEnvironment}
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>Management:</strong> {results.careerFit.managementStyle}
                  </div>
                </div>
              </div>

              {/* Interview Insights */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
                  Interview Insights
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 text-sm mb-2">Strengths</h4>
                    <ul className="space-y-1">
                      {results.interviewInsights.strengths.map((strength: string, idx: number) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <CheckCircle2 className="w-3 h-3 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 text-sm mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {results.interviewInsights.considerations.map((consideration: string, idx: number) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <AlertCircle className="w-3 h-3 text-orange-500 mr-1 flex-shrink-0 mt-0.5" />
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                  AI Recommendations
                </h3>
                <ul className="space-y-3">
                  {results.aiRecommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start">
                      <Brain className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Download Full Report
            </button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Schedule Interview
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View Career Matches
            </button>
            <button
              onClick={() => setResults(null)}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              New Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-pulse opacity-40"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-full w-full h-full flex items-center justify-center">
              <Brain className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analyzing Psychological Profile...</h2>
          <p className="text-gray-600 mb-8">Processing personality traits, work style, and cultural alignment</p>
          <div className="flex items-center justify-center space-x-2">
            <Activity className="w-5 h-5 text-purple-500 animate-pulse" />
            <span className="text-sm text-gray-600">Advanced AI personality analysis in progress</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Brain className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-semibold text-gray-900">Psychological Assessment</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / (questions.length + 1)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">Step {currentStep + 1} of {questions.length + 1}</span>
            <span className="text-sm text-gray-600">{Math.round(((currentStep + 1) / (questions.length + 1)) * 100)}% Complete</span>
          </div>
        </div>

        {/* Assessment Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 0 ? (
            // Candidate Information
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Candidate Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter candidate name"
                    value={candidateInfo.name}
                    onChange={(e) => setCandidateInfo({ ...candidateInfo, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="candidate@example.com"
                    value={candidateInfo.email}
                    onChange={(e) => setCandidateInfo({ ...candidateInfo, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Position</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Senior Software Engineer"
                    value={candidateInfo.position}
                    onChange={(e) => setCandidateInfo({ ...candidateInfo, position: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    value={candidateInfo.experience}
                    onChange={(e) => setCandidateInfo({ ...candidateInfo, experience: e.target.value })}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            // Assessment Questions
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                  {questions[currentStep - 1].category.toUpperCase()}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Question {currentStep} of {questions.length}
                </h2>
                <p className="text-lg text-gray-700">
                  {questions[currentStep - 1].question}
                </p>
              </div>
              
              <div className="space-y-3">
                {questions[currentStep - 1].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(questions[currentStep - 1].id, option.value)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      answers[questions[currentStep - 1].id] === option.value
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                        answers[questions[currentStep - 1].id] === option.value
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      }`}>
                        {answers[questions[currentStep - 1].id] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span className="text-gray-800">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              if (currentStep === questions.length) {
                analyzeResults();
              } else {
                setCurrentStep(currentStep + 1);
              }
            }}
            disabled={currentStep > 0 && currentStep <= questions.length && !answers[questions[currentStep - 1]?.id]}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
              (currentStep > 0 && currentStep <= questions.length && !answers[questions[currentStep - 1]?.id])
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            <span>{currentStep === questions.length ? 'Analyze Results' : 'Next'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PsychologicalTest;