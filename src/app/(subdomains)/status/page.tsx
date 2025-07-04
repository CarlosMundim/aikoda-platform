'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function StatusDashboardPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const systemStatus = [
    {
      service: 'Cultural Assessment API',
      status: 'operational',
      uptime: '99.98%',
      responseTime: '145ms',
      lastIncident: 'None in 45 days',
      description: 'Core AI assessment engine'
    },
    {
      service: 'Client Portal',
      status: 'operational', 
      uptime: '99.99%',
      responseTime: '89ms',
      lastIncident: 'None in 60 days',
      description: 'Enterprise dashboard interface'
    },
    {
      service: 'Candidate Portal',
      status: 'operational',
      uptime: '99.97%',
      responseTime: '234ms', 
      lastIncident: 'None in 30 days',
      description: 'Assessment interface for candidates'
    },
    {
      service: 'AI Processing Engine',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '567ms',
      lastIncident: 'Minor delay 2 days ago',
      description: 'Machine learning inference pipeline'
    },
    {
      service: 'Database Cluster',
      status: 'operational',
      uptime: '99.99%',
      responseTime: '23ms',
      lastIncident: 'None in 90 days', 
      description: 'Primary PostgreSQL cluster'
    },
    {
      service: 'API Gateway',
      status: 'maintenance',
      uptime: '99.96%',
      responseTime: '178ms',
      lastIncident: 'Scheduled maintenance',
      description: 'Load balancer and API routing'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'API Requests',
      value: '2.4M',
      change: '+12%',
      period: 'Last 24h',
      trend: 'up'
    },
    {
      metric: 'Response Time',
      value: '186ms',
      change: '-8ms',
      period: 'Average',
      trend: 'down'
    },
    {
      metric: 'Error Rate', 
      value: '0.02%',
      change: '-0.01%',
      period: 'Last 7d',
      trend: 'down'
    },
    {
      metric: 'Active Users',
      value: '1,247',
      change: '+89',
      period: 'Currently',
      trend: 'up'
    }
  ];

  const recentIncidents = [
    {
      date: '2 days ago',
      title: 'AI Processing Latency',
      severity: 'minor',
      status: 'resolved',
      duration: '12 minutes',
      description: 'Temporary increase in ML inference time due to high load'
    },
    {
      date: '1 week ago', 
      title: 'Database Connection Pool',
      severity: 'major',
      status: 'resolved',
      duration: '3 minutes',
      description: 'Brief connection timeout resolved by auto-scaling'
    },
    {
      date: '2 weeks ago',
      title: 'Scheduled Maintenance',
      severity: 'maintenance',
      status: 'completed',
      duration: '2 hours',
      description: 'Security updates and performance optimization'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-50';
      case 'maintenance': return 'text-yellow-600 bg-yellow-50';
      case 'degraded': return 'text-orange-600 bg-orange-50';
      case 'outage': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'text-yellow-600 bg-yellow-50';
      case 'major': return 'text-red-600 bg-red-50';
      case 'maintenance': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="System Status"
      pageTitle="aiKODA System Status"
      pageSubtitle="Real-time monitoring of all aiKODA Intelligence Systems services and infrastructure"
      heroBackground="light-gray"
    >
      {/* Current Status Overview */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          
          {/* Overall Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-3 bg-green-50 px-6 py-3 rounded-full mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-semibold">All Systems Operational</span>
            </div>
            <p className="text-gray-600">
              Last updated: {currentTime.toLocaleString('en-US', { 
                timeZone: 'Asia/Tokyo',
                dateStyle: 'medium',
                timeStyle: 'medium'
              })} JST
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
                <p className="enterprise-card-title text-base">
                  {metric.metric}
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <span className={`inline-flex items-center ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <CorporateIcons.TrendUp size={16} className="mr-1" />
                    ) : (
                      <CorporateIcons.Activity size={16} className="mr-1" />
                    )}
                    {metric.change}
                  </span>
                  <span className="text-gray-500">{metric.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Status */}
      <section className="enterprise-section-medium bg-gray-50">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">Service Status</h2>
            <p className="enterprise-subheading">
              Real-time status monitoring for all aiKODA platform services
            </p>
          </motion.div>

          <div className="space-y-4">
            {systemStatus.map((service, index) => (
              <motion.div
                key={service.service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'operational' ? 'bg-green-500' :
                        service.status === 'maintenance' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.service}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
                    <div className="text-center">
                      <p className="font-medium text-green-600">{service.uptime}</p>
                      <p className="text-xs">Uptime</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{service.responseTime}</p>
                      <p className="text-xs">Response</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">{service.lastIncident}</p>
                      <p className="text-xs">Last Incident</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-2 text-sm">
                  {service.description}
                </p>
                
                {/* Mobile view for metrics */}
                <div className="md:hidden mt-4 grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="text-center">
                    <p className="font-medium text-green-600">{service.uptime}</p>
                    <p className="text-xs">Uptime</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{service.responseTime}</p>
                    <p className="text-xs">Response</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium">{service.lastIncident}</p>
                    <p className="text-xs">Last Incident</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="enterprise-section-medium bg-white">
        <div className="enterprise-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="enterprise-headline text-center">Recent Incidents</h2>
            <p className="enterprise-subheading">
              History of system incidents and maintenance activities
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity.charAt(0).toUpperCase() + incident.severity.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500">{incident.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">Duration: {incident.duration}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {incident.title}
                    </h3>
                    <p className="text-gray-600">
                      {incident.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' || incident.status === 'completed'
                        ? 'text-green-600 bg-green-50'
                        : 'text-blue-600 bg-blue-50'
                    }`}>
                      {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscribe to Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-blue-50 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Subscribe to receive notifications about system status changes and scheduled maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="enterprise-btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </EnterprisePageLayout>
  );
}