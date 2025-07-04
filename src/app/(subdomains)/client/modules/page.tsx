'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

// aiKODA Modular Architecture - Inspired by Harvey.ai's four product approach
// Assessment, Insights, Vault, Workflows - Professional Class Cultural Intelligence

export default function ModulesPage() {
  const [activeModule, setActiveModule] = useState('assessment');

  const coreModules = [
    {
      id: 'assessment',
      name: 'aiKODA Assessment',
      description: 'Real-time cultural intelligence evaluation with AI-powered analysis',
      tagline: 'Evaluate cultural fit in seconds, not hours',
      icon: 'Test',
      color: 'blue',
      features: [
        'Mixture-of-Agents AI system',
        '200+ validated cultural dimensions',
        'Real-time processing (<10 seconds)',
        'Multi-language support (5 languages)',
        'Custom cultural frameworks',
        'No-code assessment builder'
      ],
      useCases: [
        'Candidate screening for global roles',
        'Team integration assessments',
        'M&A cultural due diligence',
        'Remote team cultural alignment'
      ],
      metrics: {
        accuracy: '95%',
        speed: '<10s',
        languages: '5',
        clients: '500+'
      }
    },
    {
      id: 'insights',
      name: 'aiKODA Insights',
      description: 'Comprehensive cultural intelligence reports and actionable recommendations',
      tagline: 'Transform cultural data into strategic advantage',
      icon: 'Analytics',
      color: 'green',
      features: [
        'Cultural Intelligence Sparkpages',
        'Predictive success modeling',
        'Comparative cultural analytics',
        'Integration timeline projections',
        'Risk assessment and mitigation',
        'ROI impact calculations'
      ],
      useCases: [
        'Executive cultural intelligence briefings',
        'Team composition optimization',
        'Cultural transformation planning',
        'Global expansion strategies'
      ],
      metrics: {
        reports: '10K+',
        insights: '50+',
        accuracy: '94%',
        satisfaction: '98%'
      }
    },
    {
      id: 'vault',
      name: 'aiKODA Vault',
      description: 'Secure cultural intelligence database with enterprise-grade protection',
      tagline: 'Your cultural intelligence, secured and organized',
      icon: 'Security',
      color: 'purple',
      features: [
        'Encrypted cultural profiles',
        'Global cultural database (50K+ profiles)',
        'Custom organizational frameworks',
        'Audit trails and compliance',
        'Data residency controls',
        'GDPR/SOC2 compliance'
      ],
      useCases: [
        'Secure candidate profile storage',
        'Cultural knowledge management',
        'Compliance reporting',
        'Cross-team cultural insights'
      ],
      metrics: {
        profiles: '50K+',
        uptime: '99.9%',
        security: 'SOC2',
        compliance: 'GDPR'
      }
    },
    {
      id: 'workflows',
      name: 'aiKODA Workflows',
      description: 'Automated cultural intelligence processes and integrations',
      tagline: 'Streamline cultural assessment into your existing systems',
      icon: 'Process',
      color: 'orange',
      features: [
        'ATS/HRIS integrations',
        'Automated assessment triggers',
        'Custom workflow builders',
        'Slack/Teams notifications',
        'API-first architecture',
        'White-label deployment'
      ],
      useCases: [
        'Automated candidate screening',
        'Cultural onboarding workflows',
        'Team formation processes',
        'Compliance documentation'
      ],
      metrics: {
        integrations: '25+',
        automation: '90%',
        efficiency: '+340%',
        deployments: '100+'
      }
    }
  ];

  const integrationEcosystem = [
    { name: 'Workday', category: 'HRIS', logo: '💼', status: 'Live' },
    { name: 'Greenhouse', category: 'ATS', logo: '🌱', status: 'Live' },
    { name: 'Lever', category: 'ATS', logo: '⚖️', status: 'Live' },
    { name: 'BambooHR', category: 'HR', logo: '🎋', status: 'Live' },
    { name: 'Slack', category: 'Communication', logo: '💬', status: 'Live' },
    { name: 'Microsoft Teams', category: 'Communication', logo: '👥', status: 'Live' },
    { name: 'Salesforce', category: 'CRM', logo: '☁️', status: 'Beta' },
    { name: 'Jira', category: 'Project Management', logo: '🎯', status: 'Beta' },
    { name: 'Okta', category: 'Identity', logo: '🔐', status: 'Live' },
    { name: 'Azure AD', category: 'Identity', logo: '🔑', status: 'Live' },
    { name: 'Google Workspace', category: 'Productivity', logo: '📊', status: 'Live' },
    { name: 'Custom API', category: 'Integration', logo: '⚡', status: 'Live' }
  ];

  const enterpriseFeatures = [
    {
      title: 'Professional Class AI',
      description: 'Domain-specific cultural intelligence trained on 50,000+ global profiles',
      icon: 'Platform'
    },
    {
      title: 'Enterprise Security',
      description: 'SOC2 Type II, GDPR compliant with end-to-end encryption',
      icon: 'Security'
    },
    {
      title: 'Global Scale',
      description: '99.9% uptime, <200ms response time, multi-region deployment',
      icon: 'Global'
    },
    {
      title: 'White-Glove Support',
      description: '24/7 dedicated support with cultural intelligence specialists',
      icon: 'Support'
    }
  ];

  const currentModule = coreModules.find(module => module.id === activeModule);

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Client Portal"
      pageTitle="aiKODA Platform Modules"
      pageSubtitle="Professional Class Cultural Intelligence - Four integrated products for comprehensive cultural assessment"
      heroBackground="gradient"
    >
      {/* Module Selection */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coreModules.map((module, index) => {
              const IconComponent = CorporateIcons[module.icon as keyof typeof CorporateIcons];
              const isActive = activeModule === module.id;
              const colorClasses = {
                blue: 'border-blue-500 bg-blue-50 text-blue-600',
                green: 'border-green-500 bg-green-50 text-green-600',
                purple: 'border-purple-500 bg-purple-50 text-purple-600',
                orange: 'border-orange-500 bg-orange-50 text-orange-600'
              };
              
              return (
                <motion.div
                  key={module.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    isActive 
                      ? colorClasses[module.color as keyof typeof colorClasses]
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setActiveModule(module.id)}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      isActive ? 'bg-white' : 'bg-gray-100'
                    }`}>
                      <IconComponent 
                        size={32} 
                        className={isActive ? colorClasses[module.color as keyof typeof colorClasses].split(' ')[2] : 'text-gray-600'} 
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {module.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {module.tagline}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Module Details */}
          {currentModule && (
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentModule.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {currentModule.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(currentModule.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="enterprise-btn-primary">
                    Explore {currentModule.name}
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {currentModule.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CorporateIcons.Success size={16} className="text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Use Cases
                    </h3>
                    <ul className="space-y-2">
                      {currentModule.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CorporateIcons.Target size={16} className="text-blue-600" />
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="enterprise-section-medium bg-gray-100">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">
              Professional Class Cultural Intelligence
            </h2>
            <p className="enterprise-subheading">
              Enterprise-grade AI platform built for global organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = CorporateIcons[feature.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 text-center shadow-sm"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
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
              Integration Ecosystem
            </h2>
            <p className="enterprise-subheading">
              Seamlessly connect with your existing tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrationEcosystem.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{integration.logo}</div>
                <h4 className="font-medium text-gray-900 mb-1">{integration.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{integration.category}</p>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                  integration.status === 'Live' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {integration.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="enterprise-section-medium bg-blue-50">
        <div className="enterprise-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="enterprise-headline text-center">
                Calculate Your ROI
              </h2>
              <p className="enterprise-subheading">
                See the financial impact of implementing aiKODA's cultural intelligence platform
              </p>
            </motion.div>

            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Your Organization
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Hires
                      </label>
                      <input
                        type="number"
                        defaultValue="500"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Average Salary
                      </label>
                      <input
                        type="number"
                        defaultValue="120000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Cultural Mismatch Rate
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        <option>67% (Industry Average)</option>
                        <option>50% (Above Average)</option>
                        <option>75% (Below Average)</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Projected Savings
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-red-900 mb-2">Current Annual Cost</h4>
                      <div className="text-3xl font-bold text-red-600">$80.4M</div>
                      <p className="text-sm text-red-700">Failed hires + recruitment costs</p>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-medium text-green-900 mb-2">With aiKODA</h4>
                      <div className="text-3xl font-bold text-green-600">$6.0M</div>
                      <p className="text-sm text-green-700">95% cultural match rate</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">Annual Savings</h4>
                      <div className="text-3xl font-bold text-blue-600">$74.4M</div>
                      <p className="text-sm text-blue-700">1,240% ROI within 12 months</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="enterprise-btn-primary mr-4">
                  Get Detailed ROI Report
                </button>
                <button className="enterprise-btn-secondary">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EnterprisePageLayout>
  );
}