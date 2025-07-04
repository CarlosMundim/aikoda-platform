'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  Globe, 
  Users,
  Shield,
  Zap,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Cpu
} from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      category: "Enterprise AI",
      icon: Building2,
      title: "Back Office AI Automation",
      description: "Transform your enterprise operations with AI agents that understand Japanese business culture and processes.",
      services: [
        {
          name: "Cultural Document Processing",
          description: "AI that reads, understands, and processes Japanese business documents with cultural context",
          benefit: "85% faster processing"
        },
        {
          name: "Intelligent Workflow Automation",
          description: "Automate complex business processes while maintaining cultural sensitivity",
          benefit: "60% cost reduction"
        },
        {
          name: "Cultural Compliance Monitoring",
          description: "AI-powered compliance checking for Japanese regulations and cultural standards",
          benefit: "99.9% accuracy"
        }
      ],
      cta: "Transform Operations",
      gradient: "from-[#B1D8FC] to-[#22c55e]"
    },
    {
      category: "Custom AI Agents",
      icon: Cpu,
      title: "Bespoke AI Solutions",
      description: "Custom AI agents built specifically for your unique business challenges and cultural requirements.",
      services: [
        {
          name: "Cultural Customer Service AI",
          description: "AI agents that handle customer interactions with perfect cultural understanding",
          benefit: "24/7 availability"
        },
        {
          name: "Intelligent Sales Automation",
          description: "AI-powered sales processes that respect Japanese business protocols",
          benefit: "40% higher close rates"
        },
        {
          name: "Cultural Training AI",
          description: "AI tutors that teach cultural intelligence to your global workforce",
          benefit: "90% engagement"
        }
      ],
      cta: "Build Custom AI",
      gradient: "from-[#22c55e] to-[#B1D8FC]"
    },
    {
      category: "Migration Services",
      icon: Globe,
      title: "Cultural Migration Solutions",
      description: "Complete migration services for companies expanding into Japanese markets or vice versa.",
      services: [
        {
          name: "Cultural Assessment & Planning",
          description: "Deep cultural analysis and strategic planning for market entry",
          benefit: "95% success rate"
        },
        {
          name: "Workforce Cultural Integration",
          description: "Seamless integration of international teams with cultural intelligence",
          benefit: "80% retention"
        },
        {
          name: "Business Process Localization",
          description: "Adapt your business processes to local cultural expectations",
          benefit: "3x faster adoption"
        }
      ],
      cta: "Plan Migration",
      gradient: "from-[#B1D8FC] to-[#22c55e]"
    },
    {
      category: "Sovereign Cloud",
      icon: Shield,
      title: "Cultural Sovereign Cloud",
      description: "Secure, culturally-aware cloud infrastructure designed for sensitive business operations.",
      services: [
        {
          name: "Cultural Data Sovereignty",
          description: "Your data stays within cultural and regulatory boundaries",
          benefit: "100% compliance"
        },
        {
          name: "Encrypted Cultural Intelligence",
          description: "End-to-end encrypted AI processing with cultural context preservation",
          benefit: "Military-grade security"
        },
        {
          name: "Cultural Disaster Recovery",
          description: "Business continuity planning that respects cultural operational requirements",
          benefit: "99.99% uptime"
        }
      ],
      cta: "Secure Your Data",
      gradient: "from-[#22c55e] to-[#B1D8FC]"
    }
  ];

  const industries = [
    { name: "Global Manufacturing", icon: Building2, clients: "50+" },
    { name: "Healthcare Networks", icon: Users, clients: "30+" },
    { name: "Financial Services", icon: Shield, clients: "25+" },
    { name: "Technology Companies", icon: Zap, clients: "75+" },
    { name: "Staffing Agencies", icon: Target, clients: "100+" },
    { name: "Consulting Firms", icon: TrendingUp, clients: "40+" }
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
              <Award className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-medium">Enterprise Solutions Portfolio</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Solutions That
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Transform Enterprises
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Beyond hiring. Beyond platforms. We solve the complex cultural challenges that hold global enterprises back.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="grid gap-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`bg-gradient-to-r ${solution.gradient} rounded-2xl p-4`}>
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#B1D8FC] font-medium mb-1">
                          {solution.category}
                        </p>
                        <h3 className="text-3xl font-bold text-white">
                          {solution.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {solution.description}
                    </p>

                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${solution.gradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 mb-8`}
                    >
                      <span>{solution.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Services */}
                  <div className="space-y-6">
                    {solution.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/5 rounded-xl p-6 backdrop-blur-lg border border-white/10">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">
                            {service.name}
                          </h4>
                          <div className="bg-[#22c55e]/20 text-[#22c55e] px-3 py-1 rounded-full text-sm font-medium">
                            {service.benefit}
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
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
              Industries We
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Transform
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From manufacturing to healthcare, we solve cultural challenges across every industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#22c55e]/20 rounded-xl p-3">
                    <industry.icon className="w-6 h-6 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {industry.name}
                    </h3>
                    <p className="text-[#B1D8FC] text-sm">
                      {industry.clients} clients
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-32">
        <div className="max-w-[1312px] mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Solve What
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Others Can't?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let's discuss your specific cultural challenges and build a solution that transforms your enterprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-12 py-6 text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Schedule Solution Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#B1D8FC] text-[#B1D8FC] px-12 py-6 text-lg font-semibold rounded-full hover:bg-[#B1D8FC]/10 transition-all duration-300"
              >
                Download Solutions Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;