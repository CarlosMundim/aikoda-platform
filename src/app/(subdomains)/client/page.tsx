'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

export default function ClientPortalPage() {
  const t = useTranslations();

  const dashboardCards = [
    {
      title: 'Active Projects',
      value: '12',
      subtitle: 'In Progress',
      icon: 'Platform',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      trend: '+2 this month'
    },
    {
      title: 'Cultural Assessments',
      value: '847',
      subtitle: 'Completed',
      icon: 'Analytics',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: '95% accuracy rate'
    },
    {
      title: 'Team Members',
      value: '156',
      subtitle: 'Active Users',
      icon: 'Team',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: '+8 this week'
    },
    {
      title: 'API Calls',
      value: '2.3M',
      subtitle: 'This Month',
      icon: 'API',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      trend: '99.9% uptime'
    },
  ];

  const quickActions = [
    {
      title: 'New Assessment',
      description: 'Start cultural intelligence evaluation',
      icon: 'Plus',
      href: '/client/assessments/new',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'View Reports',
      description: 'Access analytics and insights',
      icon: 'Analytics',
      href: '/client/reports',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      title: 'Team Management',
      description: 'Manage users and permissions',
      icon: 'Team',
      href: '/client/team',
      color: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      title: 'API Integration',
      description: 'Configure system integrations',
      icon: 'Integration',
      href: '/client/integrations',
      color: 'bg-cyan-600 hover:bg-cyan-700'
    },
  ];

  const recentActivity = [
    {
      action: 'Cultural Assessment Completed',
      user: 'Tanaka Hiroshi',
      time: '2 minutes ago',
      status: 'success'
    },
    {
      action: 'New Team Member Added',
      user: 'Sarah Johnson',
      time: '15 minutes ago',
      status: 'info'
    },
    {
      action: 'Report Generated',
      user: 'System',
      time: '1 hour ago',
      status: 'success'
    },
    {
      action: 'API Integration Updated',
      user: 'Carlos Mundim',
      time: '3 hours ago',
      status: 'info'
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header 
        variant="subdomain" 
        subdomainTitle="Client Portal"
        showLanguageSelector={true}
      />
      
      {/* Main Content */}
      <div className="pt-16">
        
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200">
          <div 
            className="max-w-7xl mx-auto px-6 py-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-gray-900 font-bold mb-2"
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em'
                }}
              >
                Welcome back, Carlos
              </h1>
              <p
                className="text-gray-600"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5'
                }}
              >
                Monitor your AI-powered cultural intelligence operations and team performance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Cards */}
        <section 
          className="max-w-7xl mx-auto px-6"
          style={{ paddingTop: '32px', paddingBottom: '32px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => {
              const IconComponent = CorporateIcons[card.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent size={24} className={card.color} />
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <h3
                      className="text-gray-900 font-semibold"
                      style={{
                        fontSize: '28px',
                        fontWeight: 600,
                        lineHeight: '1.1'
                      }}
                    >
                      {card.value}
                    </h3>
                    <p
                      className="text-gray-600"
                      style={{
                        fontSize: '14px',
                        fontWeight: 500
                      }}
                    >
                      {card.title}
                    </p>
                  </div>
                  
                  <p
                    className="text-gray-500"
                    style={{
                      fontSize: '12px',
                      fontWeight: 400
                    }}
                  >
                    {card.trend}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Quick Actions & Recent Activity */}
        <section 
          className="max-w-7xl mx-auto px-6"
          style={{ paddingBottom: '64px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h2
                className="text-gray-900 font-semibold mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                Quick Actions
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => {
                  const IconComponent = CorporateIcons[action.icon as keyof typeof CorporateIcons];
                  return (
                    <motion.a
                      key={action.title}
                      href={action.href}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`${action.color} text-white p-4 rounded-lg transition-all duration-200 group`}
                    >
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent size={20} color="white" />
                        <h3
                          className="font-medium"
                          style={{
                            fontSize: '16px',
                            fontWeight: 500
                          }}
                        >
                          {action.title}
                        </h3>
                      </div>
                      <p
                        className="text-white/80 group-hover:text-white transition-colors"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '1.4'
                        }}
                      >
                        {action.description}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <h2
                className="text-gray-900 font-semibold mb-4"
                style={{
                  fontSize: '20px',
                  fontWeight: 600
                }}
              >
                Recent Activity
              </h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p
                        className="text-gray-900 font-medium"
                        style={{
                          fontSize: '14px',
                          fontWeight: 500
                        }}
                      >
                        {activity.action}
                      </p>
                      <p
                        className="text-gray-600"
                        style={{
                          fontSize: '13px',
                          fontWeight: 400
                        }}
                      >
                        by {activity.user}
                      </p>
                    </div>
                    <span
                      className="text-gray-500 text-right"
                      style={{
                        fontSize: '12px',
                        fontWeight: 400
                      }}
                    >
                      {activity.time}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                href="/client/activity"
                className="block text-center mt-4 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                View All Activity →
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer variant="subdomain" />
    </main>
  );
}