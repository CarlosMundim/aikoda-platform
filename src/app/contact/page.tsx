'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Building2,
  Users,
  Calendar,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    employees: '',
    inquiry: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Enterprise Sales',
      description: 'Ready to transform your enterprise with cultural intelligence?',
      contact: 'sales@aikoda.dev',
      availability: 'Response within 4 hours',
      action: 'Email Sales Team',
      gradient: 'from-[#22c55e] to-[#B1D8FC]'
    },
    {
      icon: Phone,
      title: 'Executive Consultation',
      description: 'Direct line to our leadership team for strategic discussions.',
      contact: '+1 (555) 123-4567',
      availability: 'Mon-Fri, 9AM-6PM JST',
      action: 'Schedule Call',
      gradient: 'from-[#B1D8FC] to-[#22c55e]'
    },
    {
      icon: MessageSquare,
      title: 'Technical Support',
      description: 'Need help with implementation or technical questions?',
      contact: 'support@aikoda.dev',
      availability: '24/7 Support Available',
      action: 'Get Technical Help',
      gradient: 'from-[#22c55e] to-[#B1D8FC]'
    },
    {
      icon: Building2,
      title: 'Partnership Inquiries',
      description: 'Interested in becoming an aiKODA implementation partner?',
      contact: 'partners@aikoda.dev',
      availability: 'Partnership team responds within 24h',
      action: 'Explore Partnership',
      gradient: 'from-[#B1D8FC] to-[#22c55e]'
    }
  ];

  const offices = [
    {
      city: 'Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      address: 'Shibuya Sky Building, 2-24-12 Shibuya, Tokyo 150-0002',
      timezone: 'JST (UTC+9)',
      focus: 'Cultural Intelligence R&D'
    },
    {
      city: 'San Francisco',
      country: 'United States',
      flag: '🇺🇸',
      address: '575 Market Street, Suite 3000, San Francisco, CA 94105',
      timezone: 'PST (UTC-8)',
      focus: 'Enterprise Sales & Partnerships'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      flag: '🇬🇧',
      address: '125 Old Broad Street, London EC2N 1AR',
      timezone: 'GMT (UTC+0)',
      focus: 'European Operations'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can we implement aiKODA?',
      answer: 'Enterprise implementations typically take 2-6 weeks depending on scope. Our white-glove implementation team ensures smooth deployment with minimal disruption.'
    },
    {
      question: 'What security compliance do you maintain?',
      answer: 'We maintain SOC 2 Type II, GDPR, CCPA compliance with military-grade encryption. We can also deploy on-premise or in your sovereign cloud.'
    },
    {
      question: 'How does cultural intelligence pricing work?',
      answer: 'Pricing is based on assessment volume and features needed. Enterprise plans start at $50K annually with custom pricing for Imperial-level deployments.'
    },
    {
      question: 'Do you integrate with existing HR systems?',
      answer: 'Yes, we integrate with all major HR platforms including Workday, SuccessFactors, BambooHR, and can build custom integrations as needed.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
              <MessageSquare className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-medium">Let's Transform Together</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Ready to Solve What
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Others Can't?
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how cultural intelligence can transform your enterprise. Choose your preferred way to connect with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                Connection Method
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're ready to buy, need technical support, or want to explore partnerships - we're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`bg-gradient-to-r ${method.gradient} rounded-xl p-3`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{method.title}</h3>
                    <p className="text-[#B1D8FC] text-sm">{method.availability}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{method.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-semibold">{method.contact}</span>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${method.gradient} text-white py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  <span>{method.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Contact Form */}
      <section className="py-32 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Enterprise Inquiry Form
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Tell us about your cultural intelligence needs and we'll create a custom solution for your enterprise.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#22c55e] transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#22c55e] transition-colors"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#22c55e] transition-colors"
                      placeholder="Your company name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Role *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                      required
                    >
                      <option value="">Select your role</option>
                      <option value="ceo">CEO/Founder</option>
                      <option value="cto">CTO/Tech Leadership</option>
                      <option value="cpo">CPO/HR Leadership</option>
                      <option value="vp">VP/Director</option>
                      <option value="manager">Manager</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Company Size</label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                    >
                      <option value="">Select company size</option>
                      <option value="startup">1-50 employees</option>
                      <option value="growth">51-200 employees</option>
                      <option value="midmarket">201-1000 employees</option>
                      <option value="enterprise">1000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Inquiry Type</label>
                    <select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#22c55e] transition-colors"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="demo">Request Demo</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical">Technical Questions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#22c55e] transition-colors"
                    placeholder="Tell us about your cultural intelligence needs, current challenges, and what success looks like for your organization..."
                    required
                  />
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#22c55e] text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>Send Enterprise Inquiry</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Response Time */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-[#22c55e]" />
                  <h3 className="text-xl font-bold text-white">Enterprise Response Time</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Sales Inquiries</span>
                    <span className="text-[#22c55e] font-semibold">4 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Technical Support</span>
                    <span className="text-[#22c55e] font-semibold">24/7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Partnership Requests</span>
                    <span className="text-[#22c55e] font-semibold">24 hours</span>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-[#B1D8FC]" />
                  <h3 className="text-xl font-bold text-white">Enterprise Security</h3>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    <span>GDPR & CCPA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    <span>End-to-End Encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-[#22c55e] flex-shrink-0" />
                    <span>Sovereign Cloud Options</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Why Enterprises Choose aiKODA</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#22c55e]">95%</div>
                    <div className="text-sm text-gray-300">Cultural Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#22c55e]">50+</div>
                    <div className="text-sm text-gray-300">Enterprise Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#22c55e]">$127M</div>
                    <div className="text-sm text-gray-300">Client Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#22c55e]">24/7</div>
                    <div className="text-sm text-gray-300">AI Processing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
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
              Global
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Presence
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              With offices across three continents, we're always available to support your cultural intelligence needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl">{office.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{office.city}</h3>
                    <p className="text-[#B1D8FC]">{office.country}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-sm text-gray-400">Address</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{office.address}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-sm text-gray-400">Timezone</span>
                    </div>
                    <p className="text-gray-300 text-sm">{office.timezone}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Building2 className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-sm text-gray-400">Focus</span>
                    </div>
                    <p className="text-gray-300 text-sm">{office.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Frequently Asked
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Questions
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about aiKODA's cultural intelligence platform.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">Have more questions?</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#B1D8FC] text-[#B1D8FC] px-8 py-3 rounded-full font-semibold hover:bg-[#B1D8FC]/10 transition-all duration-300"
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;