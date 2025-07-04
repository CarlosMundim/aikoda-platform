'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function CandidatePortalPage() {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedCulture, setSelectedCulture] = useState('');

  const assessmentSteps = [
    {
      step: 1,
      title: 'Personal Information',
      description: 'Basic details and background',
      icon: 'User',
      completed: false
    },
    {
      step: 2,
      title: 'Cultural Assessment',
      description: 'AI-powered cultural intelligence evaluation',
      icon: 'Platform',
      completed: false
    },
    {
      step: 3,
      title: 'Skills Evaluation',
      description: 'Technical and soft skills assessment',
      icon: 'Analytics',
      completed: false
    },
    {
      step: 4,
      title: 'Results & Recommendations',
      description: 'Your cultural fit analysis and next steps',
      icon: 'Award',
      completed: false
    }
  ];

  const culturalTargets = [
    {
      culture: 'Japanese Business',
      description: 'Traditional Japanese corporate culture with emphasis on wa (harmony), hierarchy, and consensus',
      companies: '2,847 companies',
      successRate: '95%',
      icon: '🏯',
      popular: true
    },
    {
      culture: 'American Startup',
      description: 'Fast-paced, innovation-driven culture with flat hierarchy and direct communication',
      companies: '1,234 companies', 
      successRate: '92%',
      icon: '🚀',
      popular: true
    },
    {
      culture: 'European Corporate',
      description: 'Structured European business culture with work-life balance and collaboration focus',
      companies: '987 companies',
      successRate: '89%',
      icon: '🏛️',
      popular: false
    },
    {
      culture: 'Chinese Enterprise',
      description: 'Relationship-based culture with respect for seniority and long-term thinking',
      companies: '756 companies',
      successRate: '91%',
      icon: '🏮',
      popular: false
    }
  ];

  const sampleQuestions = [
    {
      category: 'Communication Style',
      question: 'In a team meeting, when you disagree with a senior colleague, you would most likely:',
      options: [
        'Express your disagreement directly and explain your reasoning',
        'Wait for a private moment to discuss your concerns one-on-one',
        'Ask clarifying questions to understand their perspective better',
        'Support the decision publicly and discuss privately later'
      ]
    },
    {
      category: 'Decision Making',
      question: 'When facing a complex problem with tight deadlines, you prefer to:',
      options: [
        'Make quick decisions based on available information',
        'Consult with team members before deciding',
        'Escalate to senior management for guidance',
        'Analyze all possible outcomes before acting'
      ]
    }
  ];

  const features = [
    {
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze over 200 cultural dimensions',
      icon: 'Platform',
      stats: '200+ dimensions'
    },
    {
      title: 'Real-time Processing',
      description: 'Get your complete cultural intelligence report in under 10 seconds',
      icon: 'Activity',
      stats: '<10 seconds'
    },
    {
      title: 'Global Database',
      description: 'Compared against 50,000+ successful cultural integrations worldwide',
      icon: 'Global',
      stats: '50K+ profiles'
    },
    {
      title: 'Personalized Recommendations',
      description: 'Receive specific guidance for improving cultural adaptation',
      icon: 'Target',
      stats: 'Custom guidance'
    }
  ];

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Candidate Portal"
      pageTitle="Cultural Intelligence Assessment"
      pageSubtitle="Discover your cultural fit with leading global organizations through AI-powered evaluation"
      heroBackground="gradient"
    >
      {/* Assessment Features */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">
              Next-Generation Cultural Assessment
            </h2>
            <p className="enterprise-subheading">
              Powered by the same AI technology trusted by Fortune 500 companies
            </p>
          </motion.div>

          <div className="enterprise-grid-4">
            {features.map((feature, index) => {
              const IconComponent = CorporateIcons[feature.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="enterprise-card text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="enterprise-icon-primary" />
                  </div>
                  <h3 className="enterprise-card-title">
                    {feature.title}
                  </h3>
                  <p className="enterprise-card-description">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="enterprise-stat-number text-2xl">
                      {feature.stats}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cultural Targets Selection */}
      <section className="enterprise-section-medium bg-gray-50">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">
              Choose Your Target Culture
            </h2>
            <p className="enterprise-subheading">
              Select the cultural environment you want to be evaluated against
            </p>
          </motion.div>

          <div className="enterprise-grid-2">
            {culturalTargets.map((target, index) => (
              <motion.div
                key={target.culture}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCulture(target.culture)}
                className={`enterprise-card cursor-pointer transition-all ${
                  selectedCulture === target.culture 
                    ? 'ring-2 ring-blue-500 shadow-lg' 
                    : 'hover:shadow-md'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{target.icon}</span>
                    <div>
                      <h3 className="enterprise-card-title text-lg">
                        {target.culture}
                      </h3>
                      {target.popular && (
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  {selectedCulture === target.culture && (
                    <CorporateIcons.Success size={24} className="text-blue-600" />
                  )}
                </div>
                
                <p className="enterprise-card-description mb-4">
                  {target.description}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="flex items-center">
                    <CorporateIcons.Enterprise size={16} className="mr-1" />
                    {target.companies}
                  </span>
                  <span className="flex items-center text-green-600 font-medium">
                    <CorporateIcons.Success size={16} className="mr-1" />
                    {target.successRate} success rate
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Steps */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">
              Assessment Process
            </h2>
            <p className="enterprise-subheading">
              Complete your cultural intelligence evaluation in four simple steps
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              {assessmentSteps.map((step, index) => {
                const IconComponent = CorporateIcons[step.icon as keyof typeof CorporateIcons];
                const isActive = activeStep === step.step;
                const isCompleted = step.completed;
                
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center max-w-xs"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : isCompleted 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isCompleted ? (
                        <CorporateIcons.Success size={24} />
                      ) : (
                        <IconComponent size={24} />
                      )}
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isActive ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                    
                    {index < assessmentSteps.length - 1 && (
                      <div className="hidden md:block w-24 h-px bg-gray-300 mt-8 absolute" 
                           style={{ left: '100%', transform: 'translateX(50%)' }} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions Preview */}
      <section className="enterprise-section-medium bg-blue-50">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">
              Sample Assessment Questions
            </h2>
            <p className="enterprise-subheading">
              Preview the type of questions you'll encounter in the full assessment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {sampleQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                    {question.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {question.question}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name={`question-${index}`}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Start Assessment CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Assessment?
              </h3>
              <p className="text-gray-600 mb-6">
                Complete your cultural intelligence evaluation and receive personalized 
                recommendations for your career development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="enterprise-btn-primary"
                  disabled={!selectedCulture}
                  onClick={() => window.open('/api/demo', '_blank')}
                >
                  Begin Assessment
                </button>
                <button 
                  className="enterprise-btn-secondary"
                  onClick={() => window.open('/api/health', '_blank')}
                >
                  Check System Status
                </button>
              </div>
              
              {!selectedCulture && (
                <p className="text-sm text-gray-500 mt-3">
                  Please select a target culture above to begin
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </EnterprisePageLayout>
  );
}