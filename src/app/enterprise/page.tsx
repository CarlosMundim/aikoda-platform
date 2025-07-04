'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Shield, 
  Users, 
  BarChart3,
  Globe,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Lock,
  Cpu,
  Database,
  Cloud,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';

const EnterprisePage = () => {
  const [selectedPlan, setSelectedPlan] = useState('growth');

  const plans = [
    {
      id: 'growth',
      name: 'Growth',
      subtitle: 'For Growing Teams',
      price: 'Custom',
      priceNote: 'Starting at $50K/year',
      description: 'Perfect for companies ready to scale with cultural intelligence',
      features: [
        'Up to 1,000 assessments/month',
        'Cultural Intelligence Engine',
        'Basic Analytics Dashboard',
        'Email & Chat Support',
        'Standard API Access',
        'Cultural Matching Algorithm'
      ],
      cta: 'Start Growing',
      popular: false,
      gradient: 'from-[#B1D8FC] to-[#22c55e]'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      subtitle: 'For Large Organizations',
      price: 'Custom',
      priceNote: 'Starting at $200K/year',
      description: 'Complete cultural intelligence platform for enterprise scale',
      features: [
        'Unlimited assessments',
        '47-Dimensional Cultural Analysis',
        'AI Recruiter Agents (24/7)',
        'Advanced Analytics & Predictions',
        'White-Label Partner Platform',
        'Dedicated Success Manager',
        'Priority Support (4hr SLA)',
        'Custom Integrations',
        'SOC 2 Type II Compliance'
      ],
      cta: 'Go Enterprise',
      popular: true,
      gradient: 'from-[#22c55e] to-[#B1D8FC]'
    },
    {
      id: 'imperial',
      name: 'Imperial',
      subtitle: 'For Global Corporations',
      price: 'Custom',
      priceNote: 'Starting at $500K/year',
      description: 'Palace-level cultural intelligence for global transformation',
      features: [
        'Everything in Enterprise',
        'Custom AI Agent Development',
        'Sovereign Cloud Deployment',
        'On-Premise Options',
        'Cultural Migration Services',
        'Executive Cultural Consulting',
        'White-Glove Implementation',
        'Guaranteed 99.99% Uptime',
        'Custom Compliance Requirements',
        'Dedicated Cultural Scientists'
      ],
      cta: 'Rule Your Empire',
      popular: false,
      gradient: 'from-[#B1D8FC] to-[#22c55e]'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II, GDPR, CCPA compliant with end-to-end encryption',
      details: ['Military-grade encryption', 'Role-based access control', 'Audit trails', 'Data sovereignty']
    },
    {
      icon: Cloud,
      title: 'Sovereign Cloud',
      description: 'Deploy on your infrastructure or our culturally-aware cloud',
      details: ['On-premise deployment', 'Private cloud options', 'Multi-region support', 'Custom data residency']
    },
    {
      icon: Users,
      title: 'Dedicated Success',
      description: 'Your personal cultural intelligence team ensuring success',
      details: ['Success manager', 'Cultural scientists', 'Technical architects', '24/7 support']
    },
    {
      icon: Cpu,
      title: 'Custom AI Development',
      description: 'Bespoke AI agents built for your unique cultural challenges',
      details: ['Custom algorithms', 'Industry-specific models', 'Cultural localization', 'Continuous optimization']
    },
    {
      icon: Database,
      title: 'Advanced Analytics',
      description: 'Predictive cultural intelligence with real-time insights',
      details: ['Cultural dashboards', 'Predictive modeling', 'Risk assessment', 'Performance correlation']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Scale across continents with cultural precision',
      details: ['Multi-language support', 'Cultural localization', 'Regional compliance', 'Local support teams']
    }
  ];

  const testimonials = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      logo: '🏗️',
      quote: 'aiKODA transformed our Japanese operations. Cultural accuracy improved from 60% to 95%, saving us millions in failed hires.',
      author: 'Chief People Officer',
      metrics: { accuracy: '95%', savings: '$2.3M', time: '67% faster' }
    },
    {
      company: 'Healthcare Network',
      industry: 'Healthcare',
      logo: '🏥',
      quote: 'The cultural intelligence platform helped us reduce nurse turnover by 62% while improving patient satisfaction scores.',
      author: 'VP of Human Resources',
      metrics: { retention: '62%', satisfaction: '94%', efficiency: '45% better' }
    },
    {
      company: 'Tech Consulting Firm',
      industry: 'Technology',
      logo: '💻',
      quote: 'We scaled from 0 to 50,000 monthly assessments with 91% cultural alignment. Our clients love the results.',
      author: 'CEO & Founder',
      metrics: { scale: '50K/month', alignment: '91%', revenue: '300% growth' }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#1E293B] to-[#0F172A]">
      {/* Palace-level Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1D8FC' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 0h40v2L40 2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-[1312px] mx-auto px-12 py-32">
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
              <Building2 className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-medium">Enterprise Solutions</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Enterprise-Grade
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Cultural Intelligence
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Built for security, compliance, and scale. Transform your global operations with cultural intelligence that enterprises trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-32">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Choose Your
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Cultural Intelligence Level
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From growing teams to global corporations, we have the perfect cultural intelligence solution for your scale.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-[#22c55e] scale-105 shadow-2xl' 
                    : 'border-white/10 hover:border-[#B1D8FC]/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#22c55e] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-[#B1D8FC] mb-4">{plan.subtitle}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <div className="text-sm text-gray-400 mt-1">{plan.priceNote}</div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#22c55e] text-white hover:shadow-2xl'
                      : 'border border-[#B1D8FC] text-[#B1D8FC] hover:bg-[#B1D8FC]/10'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-32 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                From Day One
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built for the most demanding enterprise requirements with security, compliance, and scale at the core.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="bg-[#22c55e]/20 rounded-xl p-3 w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-[#B1D8FC] rounded-full"></div>
                      <span className="text-sm text-gray-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-[1312px] mx-auto px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Trusted by
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Global Enterprises
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-3xl">{testimonial.logo}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.company}</h4>
                    <p className="text-[#B1D8FC] text-sm">{testimonial.industry}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm text-gray-400 mb-4">{testimonial.author}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(testimonial.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-[#22c55e]">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-32 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Transform
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Your Enterprise?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join global enterprises that trust aiKODA for their cultural intelligence needs. Let's discuss your specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-12 py-6 text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Enterprise Demo</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#B1D8FC] text-[#B1D8FC] px-12 py-6 text-lg font-semibold rounded-full hover:bg-[#B1D8FC]/10 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5" />
                <span>Talk to Sales</span>
              </motion.button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Need immediate assistance?</p>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#B1D8FC]" />
                  <span className="text-[#B1D8FC]">enterprise@aikoda.dev</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#B1D8FC]" />
                  <span className="text-[#B1D8FC]">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterprisePage;