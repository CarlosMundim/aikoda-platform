'use client';

import { motion } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function WWWEnterprisePage() {
  
  const technologyStack = [
    {
      category: 'AI & Machine Learning',
      technologies: [
        { name: 'Cultural Intelligence Engine', description: 'Proprietary AI for cultural assessment', maturity: 'Production' },
        { name: 'Neural Language Processing', description: 'Advanced NLP for multilingual analysis', maturity: 'Production' },
        { name: 'Predictive Analytics', description: 'ML models for success prediction', maturity: 'Production' },
        { name: 'Computer Vision', description: 'Video assessment capabilities', maturity: 'Beta' }
      ]
    },
    {
      category: 'Platform Architecture',
      technologies: [
        { name: 'Microservices Architecture', description: 'Scalable, fault-tolerant design', maturity: 'Production' },
        { name: 'Event-Driven Systems', description: 'Real-time processing and notifications', maturity: 'Production' },
        { name: 'API-First Design', description: 'RESTful and GraphQL endpoints', maturity: 'Production' },
        { name: 'Edge Computing', description: 'Global content delivery network', maturity: 'Production' }
      ]
    },
    {
      category: 'Security & Compliance',
      technologies: [
        { name: 'Zero-Trust Architecture', description: 'Enterprise-grade security model', maturity: 'Production' },
        { name: 'End-to-End Encryption', description: 'AES-256 encryption at rest and transit', maturity: 'Production' },
        { name: 'SOC 2 Type II', description: 'Certified security controls', maturity: 'Certified' },
        { name: 'GDPR Compliance', description: 'European data protection standards', maturity: 'Certified' }
      ]
    }
  ];

  const performanceMetrics = [
    {
      metric: 'API Response Time',
      value: '<200ms',
      description: 'Global average across all endpoints',
      benchmark: '99th percentile'
    },
    {
      metric: 'System Uptime',
      value: '99.98%',
      description: 'Measured over last 12 months',
      benchmark: 'SLA guarantee'
    },
    {
      metric: 'Concurrent Users',
      value: '50K+',
      description: 'Peak concurrent active users',
      benchmark: 'Load tested'
    },
    {
      metric: 'Data Processing',
      value: '10M+',
      description: 'Assessments processed monthly',
      benchmark: 'Auto-scaling'
    }
  ];

  const integrationCapabilities = [
    {
      category: 'Enterprise Systems',
      integrations: ['Salesforce', 'SAP SuccessFactors', 'Workday', 'BambooHR', 'ADP'],
      icon: 'Enterprise',
      count: '50+'
    },
    {
      category: 'Communication',
      integrations: ['Slack', 'Microsoft Teams', 'Zoom', 'Google Workspace'],
      icon: 'Message',
      count: '25+'
    },
    {
      category: 'Development',
      integrations: ['GitHub', 'GitLab', 'Jira', 'Jenkins', 'Docker'],
      icon: 'API',
      count: '30+'
    },
    {
      category: 'Analytics',
      integrations: ['Tableau', 'Power BI', 'Google Analytics', 'Mixpanel'],
      icon: 'Analytics',
      count: '20+'
    }
  ];

  const researchAndDevelopment = [
    {
      title: 'Cultural Intelligence Patents',
      description: 'Proprietary algorithms for cross-cultural assessment and recommendation',
      status: 'Filed',
      year: '2024',
      impact: 'Core Technology'
    },
    {
      title: 'Multimodal Assessment Framework',
      description: 'Video, audio, and text analysis for comprehensive evaluation',
      status: 'Research',
      year: '2024',
      impact: 'Next Generation'
    },
    {
      title: 'Federated Learning for Privacy',
      description: 'Distributed ML training while preserving data privacy',
      status: 'Development',
      year: '2024',
      impact: 'Enterprise Security'
    },
    {
      title: 'Real-time Cultural Adaptation',
      description: 'Dynamic personality and communication style adjustment',
      status: 'Concept',
      year: '2025',
      impact: 'Future Vision'
    }
  ];

  const leadershipTeam = [
    {
      name: 'Carlos Mundim',
      role: 'Chief Executive Officer & Co-Founder',
      background: 'Former Executive at Outsourcing Inc. (128K employees)',
      expertise: 'Global Operations, Strategic Partnerships, Cultural Intelligence',
      education: 'International Business, Multilingual (4 languages)',
      location: 'Tokyo, Japan'
    },
    {
      name: 'Koda van Niekerk Mundim',
      role: 'Chief Technology Officer & Co-Founder',
      background: 'AI/ML Architecture, Enterprise Systems Design',
      expertise: 'Machine Learning, Cultural Intelligence AI, Platform Architecture',
      education: 'Computer Science, AI Research',
      location: 'Global (Remote)'
    },
    {
      name: 'Phyllis van Niekerk',
      role: 'Strategic Advisor',
      background: 'Business Strategy, Cultural Intelligence Research',
      expertise: 'Cross-cultural Psychology, Business Development',
      education: 'Psychology, International Relations',
      location: 'Advisory'
    }
  ];

  const getMaturityColor = (maturity: string) => {
    switch (maturity) {
      case 'Production': return 'bg-green-100 text-green-800';
      case 'Beta': return 'bg-yellow-100 text-yellow-800';
      case 'Certified': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Filed': return 'bg-green-100 text-green-800';
      case 'Development': return 'bg-blue-100 text-blue-800';
      case 'Research': return 'bg-purple-100 text-purple-800';
      case 'Concept': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Enterprise Technology"
      pageTitle="Technology Leadership in Cultural Intelligence"
      pageSubtitle="Advanced AI, enterprise architecture, and global-scale infrastructure powering the future of workforce intelligence"
      heroBackground="gradient"
    >
      {/* Technology Overview */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="enterprise-headline text-center">
              Enterprise Technology Stack
            </h2>
            <p className="enterprise-subheading">
              Production-ready AI platform built for global scale and enterprise security
            </p>
          </motion.div>

          {/* Performance Metrics */}
          <div className="enterprise-grid-4 mb-16">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="enterprise-card text-center"
              >
                <h3 className="enterprise-stat-number">
                  {metric.value}
                </h3>
                <p className="enterprise-card-title text-base mb-2">
                  {metric.metric}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {metric.description}
                </p>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {metric.benchmark}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Technology Categories */}
          <div className="space-y-12">
            {technologyStack.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                
                <div className="enterprise-grid-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {tech.name}
                        </h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMaturityColor(tech.maturity)}`}>
                          {tech.maturity}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
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
              Integration Ecosystem
            </h2>
            <p className="enterprise-subheading">
              Seamless connectivity with your existing enterprise infrastructure
            </p>
          </motion.div>

          <div className="enterprise-grid-4">
            {integrationCapabilities.map((integration, index) => {
              const IconComponent = CorporateIcons[integration.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={integration.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="enterprise-card text-center"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="enterprise-icon-primary" />
                  </div>
                  
                  <h3 className="enterprise-card-title">
                    {integration.category}
                  </h3>
                  
                  <div className="text-center mb-4">
                    <span className="enterprise-stat-number text-xl">
                      {integration.count}
                    </span>
                    <p className="text-sm text-gray-600">integrations</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 justify-center">
                    {integration.integrations.slice(0, 3).map((name, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {name}
                      </span>
                    ))}
                    {integration.integrations.length > 3 && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        +{integration.integrations.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research & Development */}
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
              Research & Development
            </h2>
            <p className="enterprise-subheading">
              Pioneering the future of cultural intelligence and AI-powered workforce solutions
            </p>
          </motion.div>

          <div className="space-y-6">
            {researchAndDevelopment.map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {research.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(research.status)}`}>
                        {research.status}
                      </span>
                      <span className="text-sm text-gray-500">
                        {research.year}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      {research.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center text-sm text-gray-600">
                        <CorporateIcons.Target size={16} className="mr-1" />
                        Impact: {research.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="enterprise-subheading">
              Experienced leaders driving innovation in AI and cultural intelligence
            </p>
          </motion.div>

          <div className="space-y-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {leader.role}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Background</h4>
                        <p className="text-gray-600">{leader.background}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Expertise</h4>
                        <p className="text-gray-600">{leader.expertise}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Education</h4>
                        <p className="text-gray-600">{leader.education}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Location</h4>
                        <p className="text-gray-600">{leader.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnership CTA */}
      <section className="enterprise-section-medium bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Partner with Technology Leaders
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join forward-thinking enterprises leveraging our AI platform to transform 
              their workforce intelligence and cultural integration capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-blue-50 transition-colors font-semibold px-8 py-4 rounded-lg">
                Schedule Technical Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors font-semibold px-8 py-4 rounded-lg">
                Download Technical Brief
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </EnterprisePageLayout>
  );
}