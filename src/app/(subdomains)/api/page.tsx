'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function APIDocumentationPage() {
  const t = useTranslations();

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/v1/assessments',
      description: 'Create new cultural assessment',
      status: 'Stable',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      method: 'GET',
      endpoint: '/v1/assessments/{id}',
      description: 'Retrieve assessment results',
      status: 'Stable',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      method: 'POST',
      endpoint: '/v1/candidates',
      description: 'Register new candidate',
      status: 'Stable',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      method: 'GET',
      endpoint: '/v1/analytics/insights',
      description: 'Get cultural intelligence insights',
      status: 'Beta',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
  ];

  const sdkLanguages = [
    {
      name: 'JavaScript/Node.js',
      icon: '🟨',
      version: 'v2.1.0',
      downloads: '12.5K',
      status: 'Latest'
    },
    {
      name: 'Python',
      icon: '🐍',
      version: 'v2.0.8',
      downloads: '8.3K',
      status: 'Stable'
    },
    {
      name: 'Java',
      icon: '☕',
      version: 'v2.0.5',
      downloads: '5.2K',
      status: 'Stable'
    },
    {
      name: 'C# / .NET',
      icon: '💜',
      version: 'v1.9.2',
      downloads: '3.1K',
      status: 'Stable'
    },
    {
      name: 'Go',
      icon: '🟦',
      version: 'v1.8.0',
      downloads: '2.4K',
      status: 'Stable'
    },
    {
      name: 'PHP',
      icon: '🐘',
      version: 'v1.7.1',
      downloads: '1.9K',
      status: 'Stable'
    },
  ];

  const codeExample = `// JavaScript/Node.js Example
import { AiKodaClient } from '@aikoda/sdk';

const client = new AiKodaClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create cultural assessment
const assessment = await client.assessments.create({
  candidateId: 'candidate-123',
  assessmentType: 'cultural-intelligence',
  targetCulture: 'japanese-business',
  language: 'en'
});

// Get results
const results = await client.assessments.getResults(assessment.id);
console.log('Cultural fit score:', results.score);`;

  const quickStartSteps = [
    {
      step: '1',
      title: 'Get API Key',
      description: 'Sign up and obtain your API key from the client portal',
      action: 'Get Started',
      href: 'https://client.aikoda.dev/api-keys'
    },
    {
      step: '2',
      title: 'Install SDK',
      description: 'Choose your preferred language and install our SDK',
      action: 'View SDKs',
      href: '#sdks'
    },
    {
      step: '3',
      title: 'Make First Call',
      description: 'Create your first cultural assessment API call',
      action: 'Try Playground',
      href: '/api/playground'
    },
    {
      step: '4',
      title: 'Go Production',
      description: 'Deploy with confidence using our enterprise features',
      action: 'Production Guide',
      href: '/api/docs/production'
    },
  ];

  const apiStats = [
    {
      title: 'API Uptime',
      value: '99.9%',
      subtitle: 'Last 30 days',
      color: 'text-green-600'
    },
    {
      title: 'Response Time',
      value: '<200ms',
      subtitle: 'Global average',
      color: 'text-blue-600'
    },
    {
      title: 'Requests/Month',
      value: '50M+',
      subtitle: 'Across all clients',
      color: 'text-purple-600'
    },
    {
      title: 'Countries',
      value: '45+',
      subtitle: 'Global coverage',
      color: 'text-cyan-600'
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header 
        variant="subdomain" 
        subdomainTitle="API Documentation"
        showLanguageSelector={true}
      />
      
      {/* Main Content */}
      <div className="pt-16">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div 
            className="max-w-7xl mx-auto px-6"
            style={{ paddingTop: '64px', paddingBottom: '64px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1
                className="text-white font-bold mb-6"
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                Cultural Intelligence API
              </h1>
              <p
                className="text-blue-100 max-w-3xl mx-auto mb-8"
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  lineHeight: '1.6'
                }}
              >
                Enterprise-grade APIs for cultural assessment, candidate evaluation, 
                and AI-powered workforce intelligence. Built for scale, designed for developers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/api/demo"
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-blue-900 hover:bg-blue-50 transition-colors duration-200 font-semibold rounded-lg"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    padding: '12px 32px'
                  }}
                >
                  Try Live Demo
                </motion.a>
                <motion.a
                  href="/api/health"
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-colors duration-200 font-semibold rounded-lg"
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    padding: '10px 32px'
                  }}
                >
                  Check API Status
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API Stats */}
        <section 
          className="bg-white border-b border-gray-200"
          style={{ paddingTop: '48px', paddingBottom: '48px' }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {apiStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3
                    className={`${stat.color} font-bold mb-2`}
                    style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      lineHeight: '1.1'
                    }}
                  >
                    {stat.value}
                  </h3>
                  <p
                    className="text-gray-900 font-semibold"
                    style={{
                      fontSize: '16px',
                      fontWeight: 600
                    }}
                  >
                    {stat.title}
                  </p>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: '14px',
                      fontWeight: 400
                    }}
                  >
                    {stat.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section 
          id="quick-start"
          className="max-w-7xl mx-auto px-6"
          style={{ paddingTop: '64px', paddingBottom: '64px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-gray-900 font-bold mb-4"
              style={{
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              Get Started in Minutes
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Four simple steps to integrate cultural intelligence into your applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div 
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mb-4"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700
                  }}
                >
                  {step.step}
                </div>
                
                <h3
                  className="text-gray-900 font-semibold mb-2"
                  style={{
                    fontSize: '18px',
                    fontWeight: 600
                  }}
                >
                  {step.title}
                </h3>
                
                <p
                  className="text-gray-600 mb-4"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '1.5'
                  }}
                >
                  {step.description}
                </p>
                
                <a
                  href={step.href}
                  className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors"
                  style={{
                    fontSize: '14px',
                    fontWeight: 500
                  }}
                >
                  {step.action}
                  <CorporateIcons.ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Code Example & SDKs */}
        <section className="bg-gray-100">
          <div 
            className="max-w-7xl mx-auto px-6"
            style={{ paddingTop: '64px', paddingBottom: '64px' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Code Example */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-gray-900 font-bold mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700
                  }}
                >
                  Code Example
                </h3>
                <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                  <pre
                    className="text-gray-100"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Monaco, Consolas, monospace',
                      lineHeight: '1.5'
                    }}
                  >
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </motion.div>

              {/* SDKs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3
                  className="text-gray-900 font-bold mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 700
                  }}
                >
                  Official SDKs
                </h3>
                <div className="space-y-3">
                  {sdkLanguages.map((sdk, index) => (
                    <motion.div
                      key={sdk.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{sdk.icon}</span>
                          <div>
                            <h4
                              className="text-gray-900 font-medium"
                              style={{
                                fontSize: '16px',
                                fontWeight: 500
                              }}
                            >
                              {sdk.name}
                            </h4>
                            <p
                              className="text-gray-600"
                              style={{
                                fontSize: '13px',
                                fontWeight: 400
                              }}
                            >
                              {sdk.version} • {sdk.downloads} downloads
                            </p>
                          </div>
                        </div>
                        <span
                          className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium"
                        >
                          {sdk.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section 
          id="documentation"
          className="max-w-7xl mx-auto px-6"
          style={{ paddingTop: '64px', paddingBottom: '64px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-gray-900 font-bold mb-4"
              style={{
                fontSize: '36px',
                fontWeight: 700,
                letterSpacing: '-0.01em'
              }}
            >
              API Reference
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Complete documentation for all available endpoints
            </p>
          </motion.div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 ${index !== apiEndpoints.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        endpoint.method === 'GET' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    <div>
                      <h4
                        className="text-gray-900 font-mono font-medium"
                        style={{
                          fontSize: '16px',
                          fontWeight: 500
                        }}
                      >
                        {endpoint.endpoint}
                      </h4>
                      <p
                        className="text-gray-600"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {endpoint.description}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${endpoint.statusColor}`}>
                    {endpoint.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      <Footer variant="subdomain" />
    </main>
  );
}