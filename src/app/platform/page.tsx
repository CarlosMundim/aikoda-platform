'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Building2, 
  Users, 
  BarChart3,
  Shield,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const PlatformPage = () => {
  const modules = [
    {
      icon: Brain,
      title: "Cultural Intelligence Engine",
      subtitle: "47-Dimensional Analysis",
      description: "Our AI understands Japanese business culture at a depth no generic platform can match. Built from 20+ years of market expertise, not algorithms.",
      features: [
        "Real-time cultural assessment in 10 seconds",
        "47 dimensions of cultural compatibility",
        "Predictive team dynamics modeling",
        "Cultural blind spot identification"
      ],
      metrics: { accuracy: "95%", speed: "10s", coverage: "47D" }
    },
    {
      icon: Building2,
      title: "White-Label Partner Platform",
      subtitle: "Your Brand, Our Intelligence",
      description: "Deploy our complete cultural intelligence under your brand. Perfect for staffing agencies expanding into Japanese markets.",
      features: [
        "Complete brand customization",
        "Partner-specific business logic",
        "Isolated client data environments",
        "Revenue sharing models"
      ],
      metrics: { partners: "50+", revenue: "40%", deployment: "7 days" }
    },
    {
      icon: Users,
      title: "AI Recruiter Agents",
      subtitle: "24/7 Autonomous Hiring",
      description: "Autonomous agents that source, screen, and match candidates with cultural precision no human recruiter can achieve.",
      features: [
        "Multi-channel candidate sourcing",
        "Automated cultural screening",
        "Intelligent candidate matching",
        "Continuous learning optimization"
      ],
      metrics: { uptime: "24/7", matches: "91%", sourcing: "10x" }
    },
    {
      icon: BarChart3,
      title: "Enterprise Analytics",
      subtitle: "Predictive Cultural Intelligence",
      description: "Real-time dashboards showing cultural composition, team dynamics, and predictive retention analytics.",
      features: [
        "Cultural composition dashboards",
        "Team dynamic predictions",
        "Retention risk modeling",
        "Performance correlation analysis"
      ],
      metrics: { insights: "Real-time", prediction: "85%", retention: "62%" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#1E293B] to-[#0F172A]">
      {/* Palace-level Hero Section */}
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
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Platform
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Overview
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Four core capabilities that solve what others can't. Built for enterprises that demand cultural intelligence at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-48">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="space-y-32">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-24 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="bg-[#22c55e]/20 rounded-2xl p-4">
                        <module.icon className="w-8 h-8 text-[#22c55e]" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {module.title}
                        </h3>
                        <p className="text-lg text-[#B1D8FC]">
                          {module.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-4 mb-8">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(module.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-[#B1D8FC] mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#B1D8FC]/20 to-[#22c55e]/20 rounded-3xl p-12 backdrop-blur-lg border border-white/10">
                      <div className="grid grid-cols-2 gap-6">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
                            <div className="w-full h-4 bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] rounded-full mb-4"></div>
                            <div className="space-y-2">
                              <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                              <div className="w-1/2 h-2 bg-white/20 rounded"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-48 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Ready to Build Your
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Cultural Intelligence Empire?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join us as partners, not just clients. Let's transform global hiring together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-12 py-6 text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Start Your Enterprise Trial</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#B1D8FC] text-[#B1D8FC] px-12 py-6 text-lg font-semibold rounded-full hover:bg-[#B1D8FC]/10 transition-all duration-300"
              >
                Schedule Enterprise Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;