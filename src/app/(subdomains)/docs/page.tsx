'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function DocumentationHubPage() {
  const [activeCategory, setActiveCategory] = useState('getting-started');

  const documentationCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and basic setup',
      icon: 'Target',
      articles: 12,
      popular: true
    },
    {
      id: 'platform',
      title: 'Platform Guide',
      description: 'Complete platform documentation',
      icon: 'Platform',
      articles: 28,
      popular: true
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Detailed API documentation',
      icon: 'API',
      articles: 45,
      popular: true
    },
    {
      id: 'integrations',
      title: 'Integrations',
      description: 'Third-party system connections',
      icon: 'Integration',
      articles: 23,
      popular: false
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      description: 'Security protocols and compliance',
      icon: 'Security',
      articles: 15,
      popular: false
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: 'Settings',
      articles: 19,
      popular: false
    }
  ];

  const featuredArticles = [
    {
      title: 'Quick Start: Your First Cultural Assessment',
      description: 'Learn how to create and deploy your first AI-powered cultural assessment in under 5 minutes.',
      category: 'Getting Started',
      readTime: '3 min read',
      popularity: 'high',
      icon: 'Target',
      href: '/docs/quick-start'
    },
    {
      title: 'Cultural Intelligence API Overview',
      description: 'Complete guide to our Cultural Intelligence API endpoints, authentication, and best practices.',
      category: 'API Reference',
      readTime: '8 min read',
      popularity: 'high',
      icon: 'API',
      href: '/docs/api-overview'
    },
    {
      title: 'Enterprise SSO Integration',
      description: 'Step-by-step guide to implementing Single Sign-On with your enterprise identity provider.',
      category: 'Integrations',
      readTime: '12 min read',
      popularity: 'medium',
      icon: 'Security',
      href: '/docs/sso-integration'
    },
    {
      title: 'Webhooks and Real-time Events',
      description: 'Configure webhooks to receive real-time notifications about assessment completions and updates.',
      category: 'Platform Guide',
      readTime: '6 min read',
      popularity: 'medium',
      icon: 'Activity',
      href: '/docs/webhooks'
    }
  ];

  const popularSearches = [
    'API authentication',
    'Cultural assessment setup',
    'Webhook configuration',
    'Error handling',
    'Rate limiting',
    'Data export',
    'Custom domains',
    'Team management'
  ];

  const quickLinks = [
    {
      title: 'API Playground',
      description: 'Test API endpoints interactively',
      href: 'https://api.aikoda.dev/playground',
      icon: 'API',
      external: true
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime',
      href: 'https://status.aikoda.dev',
      icon: 'Monitor',
      external: true
    },
    {
      title: 'Support Center',
      description: 'Contact our technical support team',
      href: '/support',
      icon: 'Message',
      external: false
    },
    {
      title: 'Community Forum',
      description: 'Join developer discussions',
      href: '/community',
      icon: 'Team',
      external: false
    }
  ];

  const tutorials = [
    {
      title: 'Building Cultural Intelligence Apps',
      description: 'Complete tutorial series for building applications with our AI platform',
      lessons: 8,
      duration: '2 hours',
      level: 'Intermediate',
      icon: 'Platform'
    },
    {
      title: 'Advanced API Integration Patterns',
      description: 'Learn advanced patterns for integrating with enterprise systems',
      lessons: 6,
      duration: '90 minutes',
      level: 'Advanced',
      icon: 'Integration'
    },
    {
      title: 'Security Best Practices',
      description: 'Implement security best practices for enterprise deployments',
      lessons: 5,
      duration: '1 hour',
      level: 'Intermediate',
      icon: 'Security'
    }
  ];

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Documentation Hub"
      pageTitle="aiKODA Documentation"
      pageSubtitle="Complete guides, API references, and tutorials for the aiKODA Intelligence Platform"
      heroBackground="white"
    >
      {/* Search Section */}
      <section className="enterprise-section-medium bg-blue-50">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How can we help you today?
            </h2>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <CorporateIcons.Search 
                  size={20} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                />
                <input
                  type="text"
                  placeholder="Search documentation, guides, and API reference..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              <span className="text-sm text-gray-600 mb-2">Popular searches:</span>
              {popularSearches.slice(0, 4).map((search, index) => (
                <button
                  key={index}
                  className="px-3 py-1 bg-white text-blue-600 text-sm rounded-full hover:bg-blue-50 transition-colors border border-blue-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
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
              Documentation Categories
            </h2>
            <p className="enterprise-subheading">
              Browse our comprehensive documentation by category
            </p>
          </motion.div>

          <div className="enterprise-grid-3">
            {documentationCategories.map((category, index) => {
              const IconComponent = CorporateIcons[category.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`enterprise-card cursor-pointer transition-all ${
                    activeCategory === category.id 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <IconComponent size={24} className="enterprise-icon-primary" />
                    </div>
                    {category.popular && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <h3 className="enterprise-card-title">
                    {category.title}
                  </h3>
                  
                  <p className="enterprise-card-description">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-gray-600">
                      {category.articles} articles
                    </span>
                    <CorporateIcons.ArrowRight size={16} className="text-blue-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
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
              Featured Articles
            </h2>
            <p className="enterprise-subheading">
              Most popular and recently updated documentation
            </p>
          </motion.div>

          <div className="enterprise-grid-2">
            {featuredArticles.map((article, index) => {
              const IconComponent = CorporateIcons[article.icon as keyof typeof CorporateIcons];
              return (
                <motion.a
                  key={index}
                  href={article.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="enterprise-card hover:shadow-md transition-all group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="enterprise-icon-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {article.category}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPopularityColor(article.popularity)}`}>
                          {article.popularity === 'high' ? 'Trending' : 'Popular'}
                        </span>
                      </div>
                      
                      <h3 className="enterprise-card-title group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="enterprise-card-description">
                        {article.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-gray-600">
                          {article.readTime}
                        </span>
                        <CorporateIcons.ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Tutorials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Interactive Tutorials
              </h3>
              
              <div className="space-y-4">
                {tutorials.map((tutorial, index) => {
                  const IconComponent = CorporateIcons[tutorial.icon as keyof typeof CorporateIcons];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent size={20} className="enterprise-icon-primary" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {tutorial.title}
                            </h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(tutorial.level)}`}>
                              {tutorial.level}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-3">
                            {tutorial.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <CorporateIcons.Document size={16} className="mr-1" />
                              {tutorial.lessons} lessons
                            </span>
                            <span className="flex items-center">
                              <CorporateIcons.Clock size={16} className="mr-1" />
                              {tutorial.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Links
              </h3>
              
              <div className="space-y-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = CorporateIcons[link.icon as keyof typeof CorporateIcons];
                  return (
                    <motion.a
                      key={index}
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:shadow-sm hover:border-blue-300 transition-all group"
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                        <IconComponent size={20} className="text-gray-600 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {link.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </div>
                      {link.external && (
                        <CorporateIcons.ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* Support CTA */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Need Help?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <button className="w-full enterprise-btn-primary text-sm py-2">
                  Contact Support
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </EnterprisePageLayout>
  );
}