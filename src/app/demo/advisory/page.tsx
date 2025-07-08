'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  MessageSquare, ArrowLeft, Send, Bot, User, Target, 
  TrendingUp, Award, Brain, Globe, Calendar, Clock,
  CheckCircle2, AlertCircle, Star, Lightbulb, Heart,
  Briefcase, GraduationCap, Languages, MapPin, Phone
} from 'lucide-react';

const AdvisorySystem = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');

  // Demo candidates with advisory needs
  const candidates = [
    {
      id: 1,
      name: 'Maria Santos',
      country: 'Brazil',
      position: 'Software Engineer',
      experience: '5 years',
      japaneseLevel: 'N3',
      culturalScore: 88,
      avatar: '👩🏽‍💻',
      status: 'preparing',
      nextInterview: '2024-01-15',
      challenges: ['Japanese Business Etiquette', 'Technical Interview Prep', 'Visa Documentation'],
      strengths: ['Strong Technical Skills', 'Adaptability', 'Team Collaboration'],
      progress: {
        culturalPrep: 75,
        languageStudy: 60,
        technicalReady: 90,
        documentationComplete: 45
      }
    },
    {
      id: 2,
      name: 'Kumar Patel',
      country: 'India',
      position: 'Project Manager',
      experience: '8 years',
      japaneseLevel: 'N2',
      culturalScore: 92,
      avatar: '👨🏽‍💼',
      status: 'interviewing',
      nextInterview: '2024-01-12',
      challenges: ['Leadership Communication', 'Salary Negotiation', 'Cultural Integration'],
      strengths: ['Leadership Experience', 'Cross-cultural Expertise', 'Problem Solving'],
      progress: {
        culturalPrep: 85,
        languageStudy: 80,
        technicalReady: 88,
        documentationComplete: 100
      }
    },
    {
      id: 3,
      name: 'Nguyen Van Duc',
      country: 'Vietnam',
      position: 'Data Scientist',
      experience: '4 years',
      japaneseLevel: 'N4',
      culturalScore: 82,
      avatar: '👨🏻‍🔬',
      status: 'onboarding',
      nextInterview: 'Completed',
      challenges: ['Language Improvement', 'Team Integration', 'Career Planning'],
      strengths: ['Analytical Thinking', 'Quick Learning', 'Technical Innovation'],
      progress: {
        culturalPrep: 70,
        languageStudy: 45,
        technicalReady: 95,
        documentationComplete: 100
      }
    }
  ];

  // AI Advisory responses based on candidate context
  const generateAIResponse = (message: string, candidate: any) => {
    const responses = {
      greeting: [
        `Hello ${candidate.name}! I'm your AI career advisor. I've reviewed your profile and I'm here to help you succeed in your Japanese career journey. What would you like to work on today?`,
        `Hi there! I see you're ${candidate.status === 'preparing' ? 'preparing for your upcoming interview' : candidate.status === 'interviewing' ? 'in the interview process' : 'starting your onboarding journey'}. I'm here to provide personalized guidance. How can I assist you?`
      ],
      
      interview: [
        `Great question about interview preparation! Based on your profile as a ${candidate.position} with ${candidate.experience} experience, here are my top recommendations:\n\n🎯 **Technical Focus**: Your technical skills are strong at ${candidate.progress.technicalReady}%, but I recommend practicing system design questions in Japanese context.\n\n🏮 **Cultural Preparation**: Work on understanding "nemawashi" (consensus building) - it's crucial for ${candidate.position} roles in Japan.\n\n💬 **Communication Style**: Practice indirect communication patterns. Japanese interviewers value humility and team-first mentality.`,
        
        `For your ${candidate.position} interview, focus on these key areas:\n\n📋 **STAR Method in Japanese Context**: Structure your answers using Situation-Task-Action-Result, but emphasize team contributions over individual achievements.\n\n🤝 **Questions to Ask**: Show interest in company culture, team dynamics, and learning opportunities rather than just salary and benefits.\n\n⏰ **Timing**: Arrive 10 minutes early, bring multiple copies of your resume, and prepare thoughtful questions about the team you'll be joining.`
      ],
      
      cultural: [
        `Excellent question about Japanese workplace culture! With your cultural score of ${candidate.culturalScore}%, you're on a great track. Here's what to focus on:\n\n🌸 **Wa (Harmony)**: Your strength in collaboration will serve you well. In meetings, listen actively and build on others' ideas rather than immediately presenting your own.\n\n🔄 **Kaizen Mindset**: Continuously suggest small improvements. This aligns perfectly with your ${candidate.strengths.includes('Problem Solving') ? 'problem-solving skills' : 'adaptability'}.\n\n🙏 **Respect & Hierarchy**: Address colleagues by their title + san (e.g., Tanaka-san for managers). Wait for introductions and exchange business cards with both hands.`,
        
        `Your ${candidate.country} background gives you unique advantages in Japanese culture:\n\n✅ **Natural Alignment**: Your cultural score of ${candidate.culturalScore}% shows strong compatibility\n\n🎌 **Language Integration**: At ${candidate.japaneseLevel} level, focus on keigo (honorific language) for workplace communication\n\n🤝 **Team Building**: Join nomikai (drinking parties) and company events - they're crucial for relationship building\n\n💡 **Pro Tip**: Study your target company's specific culture. Each Japanese company has unique traditions and values.`
      ],
      
      language: [
        `Great focus on language improvement! At ${candidate.japaneseLevel} level, here's your personalized study plan:\n\n📚 **Business Japanese**: Focus on email etiquette, meeting language, and presentation skills\n\n🗣️ **Speaking Practice**: Use apps like HelloTalk to practice with native speakers daily\n\n✍️ **Writing Skills**: Learn business email formats - they're very structured in Japanese companies\n\n🎯 **Target**: Aim for ${candidate.japaneseLevel === 'N4' ? 'N3' : candidate.japaneseLevel === 'N3' ? 'N2' : 'N1'} level within 6 months with focused study (1 hour/day)`,
        
        `Your language journey from ${candidate.japaneseLevel} to fluency:\n\n🏢 **Workplace Vocabulary**: Learn industry-specific terms for ${candidate.position}\n\n📧 **Email Mastery**: Japanese business emails follow strict patterns - I can teach you the templates\n\n🎤 **Presentation Skills**: Practice giving short presentations in Japanese about your work\n\n💬 **Daily Conversation**: Focus on small talk topics: weather, food, weekend plans - essential for office relationships`
      ],
      
      career: [
        `Excellent career planning question! For a ${candidate.position} with your background, here's your growth path in Japan:\n\n📈 **Short-term (6 months)**: Excel in your current role, build strong relationships with team members, improve Japanese to business level\n\n🎯 **Medium-term (1-2 years)**: Take on leadership projects, mentor junior members, consider specialization in emerging technologies\n\n🌟 **Long-term (3-5 years)**: Move into senior technical leadership, possibly team management, or specialized consulting roles\n\n💰 **Salary Growth**: With strong performance, expect 10-15% annual increases plus bonuses`,
        
        `Your career trajectory looks promising! Based on successful candidates from ${candidate.country}:\n\n🚀 **Fast Track**: Your ${candidate.experience} experience puts you ahead - Japanese companies value international expertise\n\n📊 **Skills Development**: Focus on project management, cross-cultural communication, and Japanese business practices\n\n🌏 **Global Opportunities**: Many Japanese companies are expanding globally - your background makes you valuable for international projects\n\n🎓 **Continuous Learning**: Consider pursuing certifications relevant to your field while in Japan`
      ]
    };

    // Simple keyword matching for demo
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('start')) {
      return responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
    } else if (lowerMessage.includes('interview') || lowerMessage.includes('preparation')) {
      return responses.interview[Math.floor(Math.random() * responses.interview.length)];
    } else if (lowerMessage.includes('culture') || lowerMessage.includes('cultural') || lowerMessage.includes('japanese')) {
      return responses.cultural[Math.floor(Math.random() * responses.cultural.length)];
    } else if (lowerMessage.includes('language') || lowerMessage.includes('japanese') || lowerMessage.includes('jlpt')) {
      return responses.language[Math.floor(Math.random() * responses.language.length)];
    } else if (lowerMessage.includes('career') || lowerMessage.includes('future') || lowerMessage.includes('growth')) {
      return responses.career[Math.floor(Math.random() * responses.career.length)];
    } else {
      return `I understand you're asking about "${message}". Based on your profile as a ${candidate.position} from ${candidate.country}, I'd recommend focusing on these key areas: cultural preparation, language skills, and technical interview prep. What specific aspect would you like to explore deeper?`;
    }
  };

  const sendMessage = () => {
    if (!inputMessage.trim() || !selectedCandidate) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: generateAIResponse(inputMessage, selectedCandidate),
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const initializeChat = (candidate: any) => {
    setSelectedCandidate(candidate);
    setChatMessages([
      {
        id: 1,
        type: 'ai',
        content: `Hello ${candidate.name}! I'm your personal AI career advisor for your journey in Japan. I've analyzed your profile and I'm here to help you succeed.\n\n🎯 **Your Status**: ${candidate.status.charAt(0).toUpperCase() + candidate.status.slice(1)}\n📅 **Next Milestone**: ${candidate.nextInterview}\n🌟 **Cultural Score**: ${candidate.culturalScore}%\n\nI can help you with:\n• Interview preparation\n• Cultural adaptation\n• Language improvement\n• Career planning\n• Daily workplace guidance\n\nWhat would you like to work on today?`,
        timestamp: new Date()
      }
    ]);
  };

  const quickActions = [
    { text: 'Help me prepare for my interview', icon: Target },
    { text: 'I need cultural guidance', icon: Globe },
    { text: 'How can I improve my Japanese?', icon: Languages },
    { text: 'What\'s my career path in Japan?', icon: TrendingUp }
  ];

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    setTimeout(() => sendMessage(), 100);
  };

  if (!selectedCandidate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-green-600" />
              <span className="text-lg font-semibold text-gray-900">AI Career Advisory</span>
            </div>
          </div>

          {/* Intro Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl font-bold mb-4">Personalized AI Career Guidance</h1>
              <p className="text-green-100 text-lg leading-relaxed">
                Get personalized coaching for your Japanese career journey. Our AI advisor provides real-time guidance on interviews, cultural adaptation, language learning, and career development.
              </p>
            </div>
          </div>

          {/* Candidate Selection */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Candidate for Advisory Session</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {candidates.map(candidate => (
                <div 
                  key={candidate.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-green-200"
                  onClick={() => initializeChat(candidate)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{candidate.avatar}</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                          {candidate.name}
                        </h3>
                        <p className="text-gray-600 flex items-center">
                          <MapPin className="w-3 h-3 mr-1" />
                          {candidate.country}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      candidate.status === 'preparing' ? 'bg-orange-100 text-orange-800' :
                      candidate.status === 'interviewing' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {candidate.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Position:</span>
                      <span className="font-semibold text-gray-900">{candidate.position}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold text-gray-900">{candidate.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Japanese Level:</span>
                      <span className="font-semibold text-gray-900">{candidate.japaneseLevel}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Cultural Score:</span>
                      <span className="font-semibold text-green-600">{candidate.culturalScore}%</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Current Challenges:</div>
                    <div className="flex flex-wrap gap-1">
                      {candidate.challenges.slice(0, 2).map((challenge, idx) => (
                        <span key={idx} className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                          {challenge}
                        </span>
                      ))}
                      {candidate.challenges.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{candidate.challenges.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Next Milestone:</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-3 h-3 mr-1" />
                      {candidate.nextInterview}
                    </div>
                  </div>

                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors group-hover:shadow-lg flex items-center justify-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Start Advisory Session</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedCandidate(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Candidates</span>
            </button>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{selectedCandidate.avatar}</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{selectedCandidate.name}</h1>
                <p className="text-gray-600 text-sm">{selectedCandidate.position} from {selectedCandidate.country}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Candidate Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Overview</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Cultural Alignment</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${selectedCandidate.culturalScore}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-green-600">{selectedCandidate.culturalScore}%</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600 mb-2">Progress Tracking</div>
                  <div className="space-y-2">
                    {Object.entries(selectedCandidate.progress).map(([key, value]: [string, any]) => (
                      <div key={key}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-gray-900">{value}%</span>
                        </div>
                        <div className="h-1 bg-gray-200 rounded-full">
                          <div 
                            className="h-1 bg-blue-500 rounded-full" 
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Current Focus Areas</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-red-700 mb-2">Challenges</h4>
                  <div className="space-y-1">
                    {selectedCandidate.challenges.map((challenge: string, idx: number) => (
                      <div key={idx} className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-green-700 mb-2">Strengths</h4>
                  <div className="space-y-1">
                    {selectedCandidate.strengths.map((strength: string, idx: number) => (
                      <div key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                        {strength}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI Career Advisor</h3>
                    <p className="text-sm text-gray-600">Personal guidance for your Japan journey</p>
                  </div>
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-600">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map(message => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Bot className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        
                        <div className={`rounded-2xl px-4 py-3 ${
                          message.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <div className="whitespace-pre-wrap leading-relaxed">{message.content}</div>
                          <div className={`text-xs mt-2 ${
                            message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="bg-gray-100 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              {chatMessages.length === 1 && (
                <div className="border-t border-gray-200 p-4">
                  <div className="text-sm text-gray-600 mb-3">Quick actions to get started:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, idx) => {
                      const IconComponent = action.icon;
                      return (
                        <button
                          key={idx}
                          onClick={() => handleQuickAction(action.text)}
                          className="flex items-center space-x-2 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <IconComponent className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-700">{action.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Message Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything about your career in Japan..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim()}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorySystem;