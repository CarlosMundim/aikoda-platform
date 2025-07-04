'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EnterprisePageLayout from '@/components/layouts/EnterprisePageLayout';
import { CorporateIcons } from '@/components/icons/CorporateIcons';

// Interactive Cultural Intelligence Dashboard
// Real-time insights, analytics, and cultural composition monitoring

export default function CulturalDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [dashboardData, setDashboardData] = useState(null);

  // Simulated real-time data
  const kpiMetrics = [
    {
      title: 'Cultural Fit Score',
      value: '87.3%',
      change: '+5.2%',
      trend: 'up',
      icon: 'Success',
      color: 'green'
    },
    {
      title: 'Active Assessments',
      value: '247',
      change: '+12',
      trend: 'up',
      icon: 'Test',
      color: 'blue'
    },
    {
      title: 'Integration Success',
      value: '94.1%',
      change: '+2.1%',
      trend: 'up',
      icon: 'Target',
      color: 'purple'
    },
    {
      title: 'Cost Savings',
      value: '$2.4M',
      change: '+$340K',
      trend: 'up',
      icon: 'Dollar',
      color: 'orange'
    }
  ];

  const culturalComposition = [
    {
      culture: 'Japanese Business',
      percentage: 45,
      count: 127,
      change: '+8',
      color: 'bg-blue-500'
    },
    {
      culture: 'American Startup',
      percentage: 28,
      count: 79,
      change: '+5',
      color: 'bg-green-500'
    },
    {
      culture: 'European Corporate',
      percentage: 15,
      count: 42,
      change: '+2',
      color: 'bg-purple-500'
    },
    {
      culture: 'Chinese Enterprise',
      percentage: 8,
      count: 23,
      change: '+1',
      color: 'bg-orange-500'
    },
    {
      culture: 'Other',
      percentage: 4,
      count: 11,
      change: '0',
      color: 'bg-gray-500'
    }
  ];

  const recentAssessments = [
    {
      id: 'ASS-2025-001',
      candidateName: 'Maria Santos',
      position: 'Senior Software Engineer',
      culturalFit: 87,
      adaptability: 91,
      status: 'Completed',
      timestamp: '2 hours ago',
      recommendation: 'Highly Recommended'
    },
    {
      id: 'ASS-2025-002',
      candidateName: 'Hiroshi Tanaka',
      position: 'Product Manager',
      culturalFit: 94,
      adaptability: 88,
      status: 'Completed',
      timestamp: '4 hours ago',
      recommendation: 'Highly Recommended'
    },
    {
      id: 'ASS-2025-003',
      candidateName: 'Sarah Johnson',
      position: 'UX Designer',
      culturalFit: 76,
      adaptability: 82,
      status: 'Under Review',
      timestamp: '6 hours ago',
      recommendation: 'Recommended with Training'
    },
    {
      id: 'ASS-2025-004',
      candidateName: 'Chen Wei',
      position: 'Data Scientist',
      culturalFit: 89,
      adaptability: 85,
      status: 'Completed',
      timestamp: '8 hours ago',
      recommendation: 'Highly Recommended'
    }
  ];

  const departmentInsights = [
    {
      department: 'Engineering',
      employees: 156,
      avgCulturalFit: 89,
      retention: 96,
      productivity: 134,
      trend: 'up',
      insight: 'Strong cultural alignment driving high performance'
    },
    {
      department: 'Sales',
      employees: 89,
      avgCulturalFit: 82,
      retention: 91,
      productivity: 127,
      trend: 'up',
      insight: 'Cultural diversity enhancing global market reach'
    },
    {
      department: 'Marketing',
      employees: 67,
      avgCulturalFit: 85,
      retention: 93,
      productivity: 118,
      trend: 'stable',
      insight: 'Balanced cultural composition supporting creativity'
    },
    {
      department: 'Operations',
      employees: 124,
      avgCulturalFit: 91,
      retention: 97,
      productivity: 142,
      trend: 'up',
      insight: 'Exceptional cultural harmony driving efficiency'
    }
  ];

  const culturalTrends = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Cultural Fit Score',
        data: [78, 82, 85, 86, 88, 87],
        color: 'blue'
      },
      {
        label: 'Integration Success',
        data: [85, 87, 89, 91, 93, 94],
        color: 'green'
      },
      {
        label: 'Retention Rate',
        data: [89, 90, 92, 93, 95, 96],
        color: 'purple'
      }
    ]
  };

  const riskAlerts = [
    {
      type: 'Cultural Mismatch Risk',
      department: 'Sales Team Beta',
      severity: 'Medium',
      description: 'Team showing signs of cultural fragmentation',
      recommendation: 'Schedule team cultural alignment workshop',
      daysOpen: 3
    },
    {
      type: 'Integration Delay',
      department: 'New Hires Cohort',
      severity: 'Low',
      description: 'Slower than expected cultural adaptation',
      recommendation: 'Increase mentorship program frequency',
      daysOpen: 7
    }
  ];

  const actionableInsights = [
    {
      title: 'Optimize Team Composition',
      description: 'Engineering team shows optimal cultural balance for innovation',
      action: 'Replicate composition pattern in new product teams',
      impact: 'High',
      effort: 'Medium'
    },
    {
      title: 'Enhance Cultural Training',
      description: 'Marketing team would benefit from cross-cultural communication training',
      action: 'Implement structured cultural exchange program',
      impact: 'Medium',
      effort: 'Low'
    },
    {
      title: 'Mentorship Program Expansion',
      description: 'High-performing cultural mentors identified across all departments',
      action: 'Scale mentorship program with top cultural ambassadors',
      impact: 'High',
      effort: 'Medium'
    }
  ];

  return (
    <EnterprisePageLayout
      variant="subdomain"
      subdomainTitle="Client Portal"
      pageTitle="Cultural Intelligence Dashboard"
      pageSubtitle="Real-time insights into your organization's cultural composition and performance"
      heroBackground="white"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Dashboard Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Cultural Intelligence Dashboard
              </h1>
              <p className="text-gray-600">
                Last updated: {new Date().toLocaleString()}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="sales">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="operations">Operations</option>
              </select>
              
              <button className="enterprise-btn-primary">
                Export Report
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          
          {/* KPI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiMetrics.map((metric, index) => {
              const IconComponent = CorporateIcons[metric.icon as keyof typeof CorporateIcons];
              return (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${metric.color}-50`}>
                      <IconComponent size={24} className={`text-${metric.color}-600`} />
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      metric.trend === 'up' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm font-medium mb-1">
                    {metric.title}
                  </h3>
                  <p className="text-3xl font-bold text-gray-900">
                    {metric.value}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Cultural Composition */}
            <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Cultural Composition
                </h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details
                </button>
              </div>
              
              <div className="space-y-4">
                {culturalComposition.map((culture, index) => (
                  <motion.div
                    key={culture.culture}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">
                          {culture.culture}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">
                            {culture.count} people
                          </span>
                          <span className="text-sm font-medium text-green-600">
                            {Number(culture.change) > 0 && '+'}{culture.change}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${culture.percentage}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={`h-2 rounded-full ${culture.color}`}
                        />
                      </div>
                      <span className="text-sm text-gray-600 mt-1">
                        {culture.percentage}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Risk Alerts */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Risk Alerts
                </h2>
                <span className="text-sm text-gray-600">
                  {riskAlerts.length} active
                </span>
              </div>
              
              <div className="space-y-4">
                {riskAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      alert.severity === 'High' 
                        ? 'border-red-200 bg-red-50'
                        : alert.severity === 'Medium'
                          ? 'border-yellow-200 bg-yellow-50'
                          : 'border-blue-200 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        {alert.type}
                      </h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        alert.severity === 'High' 
                          ? 'bg-red-100 text-red-800'
                          : alert.severity === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {alert.description}
                    </p>
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      {alert.recommendation}
                    </p>
                    <span className="text-xs text-gray-500">
                      {alert.daysOpen} days open • {alert.department}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Department Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Department Insights
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Detailed Analysis
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentInsights.map((dept, index) => (
                <motion.div
                  key={dept.department}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">
                      {dept.department}
                    </h3>
                    <CorporateIcons.TrendUp 
                      size={16} 
                      className={dept.trend === 'up' ? 'text-green-600' : 'text-gray-400'} 
                    />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Employees</span>
                      <span className="font-medium">{dept.employees}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Cultural Fit</span>
                      <span className="font-medium">{dept.avgCulturalFit}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Retention</span>
                      <span className="font-medium">{dept.retention}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Productivity</span>
                      <span className="font-medium">{dept.productivity}%</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                    {dept.insight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Assessments */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Assessments
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Candidate</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Position</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Cultural Fit</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Adaptability</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Recommendation</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {recentAssessments.map((assessment, index) => (
                    <motion.tr
                      key={assessment.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {assessment.candidateName}
                          </div>
                          <div className="text-sm text-gray-600">
                            {assessment.id}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-900">
                        {assessment.position}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">
                            {assessment.culturalFit}%
                          </span>
                          <div className={`w-2 h-2 rounded-full ${
                            assessment.culturalFit >= 85 
                              ? 'bg-green-500'
                              : assessment.culturalFit >= 70
                                ? 'bg-yellow-500'
                                : 'bg-red-500'
                          }`} />
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {assessment.adaptability}%
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          assessment.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {assessment.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          assessment.recommendation === 'Highly Recommended'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {assessment.recommendation}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {assessment.timestamp}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Actionable Insights */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Actionable Insights
              </h2>
              <span className="text-sm text-gray-600">
                AI-generated recommendations
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actionableInsights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {insight.description}
                  </p>
                  <p className="text-sm font-medium text-gray-900 mb-3">
                    {insight.action}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        insight.impact === 'High' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {insight.impact} Impact
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        insight.effort === 'Low' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {insight.effort} Effort
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Act
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </EnterprisePageLayout>
  );
}