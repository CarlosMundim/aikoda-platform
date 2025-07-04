'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

// No-Code Cultural Assessment Builder - Inspired by Dust.tt's agent creation
// Allows HR teams to create custom cultural assessments in minutes

export default function AssessmentBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentConfig, setAssessmentConfig] = useState({
    name: '',
    targetCulture: '',
    position: '',
    department: '',
    questions: [],
    weightings: {},
    customizations: {}
  });

  const builderSteps = [
    {
      step: 1,
      title: 'Assessment Basics',
      description: 'Define your assessment parameters',
      icon: 'Settings'
    },
    {
      step: 2,
      title: 'Target Culture',
      description: 'Select or define cultural framework',
      icon: 'Global'
    },
    {
      step: 3,
      title: 'Question Selection',
      description: 'Choose from 200+ validated questions',
      icon: 'Help'
    },
    {
      step: 4,
      title: 'Customization',
      description: 'Tailor assessment to your needs',
      icon: 'Customize'
    },
    {
      step: 5,
      title: 'Review & Deploy',
      description: 'Test and activate assessment',
      icon: 'Success'
    }
  ];

  const culturalFrameworks = [
    {
      name: 'Japanese Business Culture',
      description: 'Traditional hierarchical structure with emphasis on harmony and consensus',
      dimensions: ['Power Distance', 'Uncertainty Avoidance', 'Long-term Orientation'],
      companies: '2,847 companies',
      accuracy: '95%',
      icon: '🏯',
      popular: true
    },
    {
      name: 'American Startup Culture',
      description: 'Fast-paced, innovation-driven with flat hierarchy and direct communication',
      dimensions: ['Individualism', 'Risk Taking', 'Innovation Focus'],
      companies: '1,234 companies',
      accuracy: '92%',
      icon: '🚀',
      popular: true
    },
    {
      name: 'European Corporate',
      description: 'Structured approach with work-life balance and collaborative decision-making',
      dimensions: ['Work-life Balance', 'Consensus Building', 'Process Orientation'],
      companies: '987 companies',
      accuracy: '89%',
      icon: '🏛️',
      popular: false
    },
    {
      name: 'Chinese Enterprise',
      description: 'Relationship-based culture with respect for authority and long-term thinking',
      dimensions: ['Guanxi Networks', 'Hierarchy Respect', 'Long-term Planning'],
      companies: '756 companies',
      accuracy: '91%',
      icon: '🏮',
      popular: false
    },
    {
      name: 'Custom Framework',
      description: 'Build your own cultural assessment framework from scratch',
      dimensions: ['Fully Customizable'],
      companies: 'Your organization',
      accuracy: 'Variable',
      icon: '⚙️',
      popular: false
    }
  ];

  const questionCategories = [
    {
      category: 'Communication Style',
      description: 'How candidates express ideas and handle feedback',
      questionCount: 24,
      weight: 20,
      examples: [
        'How do you prefer to receive feedback from supervisors?',
        'When disagreeing with a colleague, what approach do you take?'
      ]
    },
    {
      category: 'Decision Making',
      description: 'Individual vs collective decision processes',
      questionCount: 18,
      weight: 18,
      examples: [
        'How do you approach making important work decisions?',
        'When facing uncertainty, what is your typical response?'
      ]
    },
    {
      category: 'Authority & Hierarchy',
      description: 'Comfort with power structures and reporting relationships',
      questionCount: 15,
      weight: 16,
      examples: [
        'How comfortable are you challenging senior management?',
        'Describe your ideal relationship with your supervisor.'
      ]
    },
    {
      category: 'Team Dynamics',
      description: 'Individual contribution vs group harmony preferences',
      questionCount: 21,
      weight: 16,
      examples: [
        'In team meetings, what role do you naturally take?',
        'How do you handle conflicts within your team?'
      ]
    },
    {
      category: 'Work-Life Integration',
      description: 'Balance between personal and professional priorities',
      questionCount: 12,
      weight: 15,
      examples: [
        'How important is work-life balance to your productivity?',
        'What motivates you most in your work environment?'
      ]
    },
    {
      category: 'Innovation & Risk',
      description: 'Attitudes toward change, experimentation, and uncertainty',
      questionCount: 14,
      weight: 15,
      examples: [
        'How do you approach new, untested methodologies?',
        'Describe a time you took a calculated risk at work.'
      ]
    }
  ];

  const prebuiltTemplates = [
    {
      name: 'Tech Leadership Assessment',
      description: 'For senior technical roles requiring cultural leadership',
      targetCulture: 'Japanese Business Culture',
      duration: '15 minutes',
      questions: 25,
      accuracy: '94%',
      usage: '847 assessments'
    },
    {
      name: 'Global Sales Team Integration',
      description: 'For sales professionals joining international teams',
      targetCulture: 'Multi-Cultural Framework',
      duration: '12 minutes',
      questions: 20,
      accuracy: '91%',
      usage: '623 assessments'
    },
    {
      name: 'Remote Team Cultural Fit',
      description: 'For distributed teams with diverse cultural backgrounds',
      targetCulture: 'Remote-First Culture',
      duration: '18 minutes',
      questions: 30,
      accuracy: '89%',
      usage: '1,234 assessments'
    },
    {
      name: 'M&A Integration Assessment',
      description: 'For employees transitioning between company cultures',
      targetCulture: 'Acquisition Integration',
      duration: '22 minutes',
      questions: 35,
      accuracy: '96%',
      usage: '156 assessments'
    }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Assessment Configuration
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Sankyo Engineering Team Assessment"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={assessmentConfig.name}
                    onChange={(e) => setAssessmentConfig({...assessmentConfig, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Position
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Senior Software Engineer"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={assessmentConfig.position}
                    onChange={(e) => setAssessmentConfig({...assessmentConfig, position: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Engineering</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Operations</option>
                    <option>Leadership</option>
                    <option>Customer Success</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Language
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>English</option>
                    <option>Japanese (日本語)</option>
                    <option>Portuguese (Português)</option>
                    <option>Spanish (Español)</option>
                    <option>French (Français)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Start Templates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prebuiltTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{template.questions} questions • {template.duration}</span>
                      <span className="text-green-600 font-medium">{template.accuracy} accuracy</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cultural Framework Selection
              </h3>
              <p className="text-gray-600 mb-6">
                Choose the cultural framework that best matches your target work environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {culturalFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`border rounded-lg p-6 cursor-pointer transition-all ${
                    assessmentConfig.targetCulture === framework.name
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setAssessmentConfig({...assessmentConfig, targetCulture: framework.name})}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{framework.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{framework.name}</h4>
                        {framework.popular && (
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    {assessmentConfig.targetCulture === framework.name && (
                      <CorporateIcons.Success size={24} className="text-blue-600" />
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{framework.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {framework.dimensions.map((dimension, dimIndex) => (
                        <span
                          key={dimIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {dimension}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span className="flex items-center">
                        <CorporateIcons.Enterprise size={16} className="mr-1" />
                        {framework.companies}
                      </span>
                      <span className="flex items-center text-green-600 font-medium">
                        <CorporateIcons.Success size={16} className="mr-1" />
                        {framework.accuracy} accuracy
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Question Categories & Weighting
              </h3>
              <p className="text-gray-600 mb-6">
                Select question categories and adjust their importance for your assessment.
              </p>
            </div>

            <div className="space-y-6">
              {questionCategories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <input
                          type="checkbox"
                          defaultChecked={true}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <h4 className="font-semibold text-gray-900">{category.category}</h4>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {category.questionCount} questions
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    </div>
                    
                    <div className="ml-4">
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Weight ({category.weight}%)
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        defaultValue={category.weight}
                        className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Example Questions:</h5>
                    <ul className="space-y-1">
                      {category.examples.map((example, exIndex) => (
                        <li key={exIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Assessment Customization
              </h3>
              <p className="text-gray-600 mb-6">
                Fine-tune your assessment with advanced options and integrations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Assessment Settings</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-700">Time Limit</label>
                        <p className="text-sm text-gray-600">Set maximum completion time</p>
                      </div>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg">
                        <option>15 minutes</option>
                        <option>20 minutes</option>
                        <option>30 minutes</option>
                        <option>No limit</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-700">Question Randomization</label>
                        <p className="text-sm text-gray-600">Shuffle question order</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-700">AI Proctoring</label>
                        <p className="text-sm text-gray-600">Monitor for authenticity</p>
                      </div>
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-700">Real-time Insights</label>
                        <p className="text-sm text-gray-600">Live cultural analysis during assessment</p>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Scoring Configuration</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Passing Score Threshold</label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="range"
                          min="50"
                          max="95"
                          defaultValue="75"
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <span className="w-12 text-center font-medium text-gray-700">75%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-medium text-gray-700 mb-2">Risk Tolerance</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>Conservative (High cultural fit required)</option>
                        <option>Moderate (Balanced approach)</option>
                        <option>Aggressive (Focus on potential over current fit)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Integration Options</h4>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">ATS Integration</h5>
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      </div>
                      <p className="text-sm text-gray-600">Connect with your Applicant Tracking System</p>
                      <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                        <option>Workday</option>
                        <option>Greenhouse</option>
                        <option>Lever</option>
                        <option>BambooHR</option>
                        <option>Custom API</option>
                      </select>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">Slack Notifications</h5>
                        <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                      </div>
                      <p className="text-sm text-gray-600">Get notified when assessments are completed</p>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">Custom Branding</h5>
                        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      </div>
                      <p className="text-sm text-gray-600">Apply your company logo and colors</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Reporting & Analytics</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                      <span className="text-gray-700">Cultural Intelligence Sparkpages</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-blue-600 rounded" />
                      <span className="text-gray-700">Comparative Analytics Dashboard</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      <span className="text-gray-700">Team Cultural Composition Reports</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
                      <span className="text-gray-700">Predictive Success Modeling</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Assessment Ready for Deployment
              </h3>
              <p className="text-gray-600 mb-8">
                Review your configuration and deploy your custom cultural intelligence assessment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Assessment Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Basic Information</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><strong>Name:</strong> {assessmentConfig.name || 'Sankyo Engineering Team Assessment'}</li>
                    <li><strong>Position:</strong> {assessmentConfig.position || 'Senior Software Engineer'}</li>
                    <li><strong>Target Culture:</strong> {assessmentConfig.targetCulture || 'Japanese Business Culture'}</li>
                    <li><strong>Language:</strong> English (Primary), Japanese (Secondary)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Assessment Configuration</h5>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li><strong>Questions:</strong> 25 selected from 6 categories</li>
                    <li><strong>Duration:</strong> ~15 minutes</li>
                    <li><strong>Pass Threshold:</strong> 75% cultural fit score</li>
                    <li><strong>AI Features:</strong> Sparkpage reports, Real-time insights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CorporateIcons.Test size={32} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Test Assessment</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Take the assessment yourself to verify the experience
                </p>
                <button className="enterprise-btn-secondary text-sm">
                  Test Now
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CorporateIcons.Activity size={32} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Deploy Assessment</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Make your assessment live and start evaluating candidates
                </p>
                <button className="enterprise-btn-primary text-sm">
                  Deploy Live
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CorporateIcons.Share size={32} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Share Link</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get shareable link for candidates or integrate with ATS
                </p>
                <button className="enterprise-btn-secondary text-sm">
                  Get Link
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <CorporateIcons.Info size={24} className="text-blue-600 mt-0.5" />
                <div>
                  <h5 className="font-medium text-blue-900 mb-2">Next Steps</h5>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Your assessment will be available at a unique URL</li>
                    <li>• Candidates receive Cultural Intelligence Sparkpages upon completion</li>
                    <li>• Results appear in your dashboard with actionable insights</li>
                    <li>• Integration with your ATS happens automatically</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Client Portal"
      pageTitle="Assessment Builder"
      pageSubtitle="Create custom cultural intelligence assessments in minutes with our no-code builder"
      heroBackground="gradient"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {builderSteps.map((step, index) => {
                const IconComponent = CorporateIcons[step.icon as keyof typeof CorporateIcons];
                const isActive = currentStep === step.step;
                const isCompleted = currentStep > step.step;
                
                return (
                  <div
                    key={step.step}
                    className="flex flex-col items-center text-center cursor-pointer"
                    onClick={() => setCurrentStep(step.step)}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white' 
                        : isCompleted 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isCompleted ? (
                        <CorporateIcons.Success size={20} />
                      ) : (
                        <IconComponent size={20} />
                      )}
                    </div>
                    
                    <div className="max-w-[120px]">
                      <h4 className={`text-sm font-medium mb-1 ${
                        isActive ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {step.description}
                      </p>
                    </div>
                    
                    {index < builderSteps.length - 1 && (
                      <div className="hidden lg:block w-16 h-px bg-gray-300 absolute mt-6 ml-24" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="enterprise-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous Step
            </button>
            
            <div className="flex space-x-4">
              <button className="enterprise-btn-secondary">
                Save Draft
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                disabled={currentStep === 5}
                className="enterprise-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 5 ? 'Deploy Assessment' : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </EnterprisePageLayout>
  );
}