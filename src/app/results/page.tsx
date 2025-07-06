'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Building2, 
  Users, 
  Clock,
  Target,
  Award,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Shield
} from 'lucide-react';

const ResultsPage = () => {
  const results = [
    {
      category: 'Global Manufacturing',
      logo: '🏗️',
      company: 'Industrial Solutions Corp',
      industry: 'Heavy Manufacturing',
      challenge: 'Struggling with 127-day average hiring time for specialized engineers in Japanese facilities, with 40% cultural mismatch failures.',
      solution: 'Implemented full Cultural Intelligence Engine with AI Recruiter Agents and 47-dimensional cultural assessment.',
      results: [
        { metric: '76%', description: 'Faster hiring (127 → 31 days)' },
        { metric: '94%', description: 'Cultural fit accuracy' },
        { metric: '$2.3M', description: 'Annual savings from reduced turnover' },
        { metric: '91%', description: 'Employee satisfaction increase' }
      ],
      quote: 'aiKODA transformed our entire Japanese operations. The cultural intelligence is unlike anything we\'ve seen - it\'s like having a team of cultural experts working 24/7.',
      author: 'Chief People Officer'
    },
    {
      category: 'Healthcare Network',
      logo: '🏥',
      company: 'MedCare International',
      industry: 'Healthcare Services',
      challenge: 'High nurse turnover (68% annually) in Japanese hospitals due to cultural misalignment and communication barriers.',
      solution: 'Deployed Cultural Intelligence Platform with predictive team dynamics and cultural matching algorithms.',
      results: [
        { metric: '62%', description: 'Reduction in nurse turnover' },
        { metric: '94%', description: 'Patient satisfaction scores' },
        { metric: '45%', description: 'Improvement in team efficiency' },
        { metric: '$1.8M', description: 'Savings from reduced recruitment costs' }
      ],
      quote: 'The cultural matching capabilities are extraordinary. Our teams are more cohesive, patients are happier, and our retention rates have never been better.',
      author: 'VP of Human Resources'
    },
    {
      category: 'Technology Services',
      logo: '💻',
      company: 'GlobalTech Solutions',
      industry: 'IT Consulting',
      challenge: 'Expanding into Japanese market with zero cultural intelligence, losing 80% of potential contracts due to cultural misunderstandings.',
      solution: 'Complete Cultural Intelligence transformation with white-label partner platform and cultural migration services.',
      results: [
        { metric: '300%', description: 'Revenue growth in 18 months' },
        { metric: '50K', description: 'Monthly cultural assessments' },
        { metric: '91%', description: 'Cultural alignment success rate' },
        { metric: '15x', description: 'Contract win rate improvement' }
      ],
      quote: 'We went from cultural disasters to cultural champions. aiKODA didn\'t just solve our hiring - it transformed our entire business approach.',
      author: 'CEO & Founder'
    },
    {
      category: 'Financial Services',
      logo: '🏦',
      company: 'Investment Partners Group',
      industry: 'Private Equity',
      challenge: 'Portfolio companies struggling with cultural integration during Japanese market expansion, causing $50M in failed investments.',
      solution: 'Enterprise Cultural Intelligence platform with sovereign cloud deployment and executive cultural consulting.',
      results: [
        { metric: '89%', description: 'Successful market entries' },
        { metric: '$50M', description: 'Investment losses prevented' },
        { metric: '67%', description: 'Faster market penetration' },
        { metric: '95%', description: 'Cultural compliance rate' }
      ],
      quote: 'Cultural intelligence is now a core part of our investment thesis. aiKODA has saved us from catastrophic cultural failures.',
      author: 'Managing Partner'
    },
    {
      category: 'Retail & E-commerce',
      logo: '🛒',
      company: 'RetailMax Global',
      industry: 'Retail Technology',
      challenge: 'Failed Japanese market entry costing $30M due to cultural misunderstanding of customer behavior and team dynamics.',
      solution: 'Comprehensive cultural intelligence suite with custom AI agents and cultural customer service automation.',
      results: [
        { metric: '240%', description: 'Customer satisfaction increase' },
        { metric: '85%', description: 'Reduction in cultural incidents' },
        { metric: '$30M', description: 'Market entry investment recovered' },
        { metric: '12x', description: 'Customer lifetime value improvement' }
      ],
      quote: 'Understanding Japanese culture at this depth changed everything. Our customers love us, our teams are aligned, and we\'re profitable.',
      author: 'Chief Marketing Officer'
    },
    {
      category: 'Logistics & Supply Chain',
      logo: '🚚',
      company: 'Global Logistics Partners',
      industry: 'Supply Chain',
      challenge: 'Multi-cultural supply chain teams causing 40% efficiency losses and $15M in operational disruptions annually.',
      solution: 'AI-powered cultural intelligence with real-time team optimization and cultural conflict prediction.',
      results: [
        { metric: '78%', description: 'Operational efficiency improvement' },
        { metric: '92%', description: 'Conflict prediction accuracy' },
        { metric: '$15M', description: 'Annual operational savings' },
        { metric: '99.2%', description: 'Supply chain reliability' }
      ],
      quote: 'Cultural intelligence transformed our global operations. We predict and prevent conflicts before they impact our supply chain.',
      author: 'COO'
    }
  ];

  const overallMetrics = [
    { value: '95%', label: 'Average Cultural Accuracy', change: '+47%' },
    { value: '73%', label: 'Time Reduction', change: '+58%' },
    { value: '$127M', label: 'Client Savings Generated', change: '+285%' },
    { value: '91%', label: 'Success Rate', change: '+34%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#1E293B] to-[#0F172A]">
      {/* Palace-level Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 0h40v2L40 2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1312px] mx-auto px-12 py-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8"
            >
              <Award className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-medium">Real Results from Real Partners</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Transforming
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Global Enterprises
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Cultural intelligence that delivers measurable results. From manufacturing to healthcare, we solve what others can't.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overall Metrics */}
      <section className="py-48 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Results That
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Speak for Themselves
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Across all industries and implementations, our cultural intelligence delivers consistent, measurable impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center"
              >
                <div className="text-4xl font-bold text-[#22c55e] mb-2">{metric.value}</div>
                <div className="text-white font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-[#B1D8FC] flex items-center justify-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-48">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Case Studies
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Deep dives into how cultural intelligence transformed these enterprises.
            </p>
          </motion.div>

          <div className="space-y-24">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Company Info & Challenge */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{result.logo}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{result.company}</h3>
                        <p className="text-[#B1D8FC]">{result.industry}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Challenge</h4>
                      <p className="text-gray-300 leading-relaxed">{result.challenge}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-3">Solution</h4>
                      <p className="text-gray-300 leading-relaxed">{result.solution}</p>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <blockquote className="text-gray-300 italic leading-relaxed mb-4">
                        "{result.quote}"
                      </blockquote>
                      <div className="text-sm text-[#B1D8FC]">— {result.author}</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-6">Results</h4>
                    <div className="space-y-6">
                      {result.results.map((resultItem, resultIndex) => (
                        <div key={resultIndex} className="bg-white/5 rounded-xl p-6 border border-white/10">
                          <div className="flex items-center justify-between mb-3">
                            <div className="text-3xl font-bold text-[#22c55e]">
                              {resultItem.metric}
                            </div>
                            <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                          </div>
                          <p className="text-gray-300">{resultItem.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Success */}
      <section className="py-48 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Success Across
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Every Industry
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From manufacturing to healthcare, technology to finance - cultural intelligence delivers results everywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
              >
                <div className="text-3xl mb-4">{result.logo}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{result.category}</h3>
                <div className="text-2xl font-bold text-[#22c55e] mb-1">
                  {result.results[0].metric}
                </div>
                <p className="text-sm text-gray-300">{result.results[0].description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48">
        <div className="max-w-[1312px] mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Join
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                These Success Stories?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss how cultural intelligence can transform your enterprise. Your success story could be next.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-12 py-6 text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Start Your Success Story</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#B1D8FC] text-[#B1D8FC] px-12 py-6 text-lg font-semibold rounded-full hover:bg-[#B1D8FC]/10 transition-all duration-300"
              >
                Download Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;