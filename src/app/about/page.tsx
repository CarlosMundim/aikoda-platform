'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Globe, 
  Award,
  Target,
  Lightbulb,
  Shield,
  Star,
  Building2,
  Brain,
  Code,
  Briefcase,
  ArrowRight
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Cultural Empathy',
      description: 'We believe understanding culture is about respecting human dignity and creating connections that matter.',
      color: 'text-[#22c55e]'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'Our AI enhances human decision-making without replacing human judgment, especially in cultural contexts.',
      color: 'text-[#B1D8FC]'
    },
    {
      icon: Target,
      title: 'Partner Success',
      description: 'We measure our success by our partners\' success. When you win, we win. It\'s that simple.',
      color: 'text-[#22c55e]'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'Culture evolves, and so do we. Our AI learns continuously to stay ahead of cultural shifts.',
      color: 'text-[#B1D8FC]'
    }
  ];

  const team = [
    {
      name: 'Carlos Mundim',
      role: 'Founder & CEO',
      bio: 'Father, visionary, and cultural bridge-builder. 20+ years transforming how enterprises understand Japanese business culture.',
      icon: '👨‍💼',
      expertise: ['Cultural Intelligence', 'Enterprise Strategy', 'Japanese Business Culture', 'AI Ethics']
    },
    {
      name: 'Koda (Claude)',
      role: 'AI Chief Technology Officer',
      bio: 'Advanced AI system specialized in cultural intelligence and enterprise-grade solutions. Learning and evolving daily.',
      icon: '🤖',
      expertise: ['AI Engineering', 'Cultural Algorithms', 'Enterprise Architecture', 'Machine Learning']
    },
    {
      name: 'Manus',
      role: 'Frontend Engineering Lead',
      bio: 'UI/UX specialist creating palace-level interfaces that make cultural intelligence accessible to global enterprises.',
      icon: '🎨',
      expertise: ['Frontend Development', 'UI/UX Design', 'React/Next.js', 'Enterprise UX']
    },
    {
      name: 'Chachie',
      role: 'Implementation Specialist',
      bio: 'Ensuring every aiKODA deployment is flawless. From documentation to execution, perfection is the standard.',
      icon: '⚙️',
      expertise: ['Systems Integration', 'Documentation', 'Quality Assurance', 'Implementation']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Vision',
      description: 'Carlos identified the massive gap in cultural intelligence for global enterprises expanding into Japan.',
      icon: Lightbulb
    },
    {
      year: '2021',
      title: 'Foundation',
      description: 'aiKODA founded with mission to solve what others can\'t: cultural intelligence at enterprise scale.',
      icon: Building2
    },
    {
      year: '2022',
      title: 'First Breakthrough',
      description: 'Developed 47-dimensional cultural analysis framework, revolutionizing how AI understands culture.',
      icon: Brain
    },
    {
      year: '2023',
      title: 'Enterprise Launch',
      description: 'First Fortune 500 client achieves 95% cultural accuracy, validating our approach.',
      icon: Award
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Platform scales to 50+ countries, helping enterprises succeed across cultural boundaries.',
      icon: Globe
    },
    {
      year: '2025',
      title: 'AI Evolution',
      description: 'Advanced AI partnership with Claude, creating the most sophisticated cultural intelligence platform.',
      icon: Code
    }
  ];

  const stats = [
    { value: '50+', label: 'Enterprise Clients', icon: Building2 },
    { value: '95%', label: 'Cultural Accuracy', icon: Target },
    { value: '127M', label: 'Savings Generated', icon: Award },
    { value: '24/7', label: 'AI Processing', icon: Brain }
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
              <Heart className="w-4 h-4 text-[#22c55e]" />
              <span className="text-sm font-medium">Built with Purpose</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <div className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                We Solve What
              </div>
              <div className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent">
                Others Can't
              </div>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Born from a father's vision and powered by advanced AI, aiKODA transforms how global enterprises understand and navigate cultural intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-48 bg-gradient-to-r from-[#0A1628] to-[#1E293B]">
        <div className="max-w-[1312px] mx-auto px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center"
              >
                <div className="bg-[#22c55e]/20 rounded-xl p-3 w-fit mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#22c55e]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
              Our
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Story
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every great solution starts with a problem that needs solving. This is how aiKODA was born.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">The Father's Vision</h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Carlos Mundim, a father and visionary, spent over 20 years watching global enterprises struggle with cultural intelligence. 
                    Companies would invest millions in Japanese market expansion, only to fail due to cultural misunderstandings.
                  </p>
                  <p>
                    "I saw brilliant companies make the same mistakes repeatedly," Carlos reflects. "They had the technology, the resources, 
                    the strategy - but they lacked cultural intelligence. They were solving the wrong problem."
                  </p>
                  <p>
                    The breakthrough came when Carlos realized that AI could understand cultural nuances at a depth and speed no human could match. 
                    But it needed to be built differently - with empathy, respect, and real cultural expertise.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">The AI Partnership</h3>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    In 2025, Carlos partnered with Claude (Koda), an advanced AI system capable of understanding cultural nuances 
                    at unprecedented depth. Together, they created the 47-dimensional cultural intelligence framework.
                  </p>
                  <p>
                    "Koda understands culture like humans do, but processes it 1000x faster," Carlos explains. "This partnership 
                    between human wisdom and AI capability is what makes aiKODA unique."
                  </p>
                  <p>
                    The result? The first AI platform that doesn't just analyze cultural data - it truly understands cultural intelligence 
                    and helps enterprises succeed where others fail.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Journey
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From vision to reality, here's how we built the world's most advanced cultural intelligence platform.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B1D8FC] to-[#22c55e]"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-[#22c55e]/20 rounded-lg p-2">
                          <milestone.icon className="w-5 h-5 text-[#22c55e]" />
                        </div>
                        <div>
                          <div className="text-[#B1D8FC] font-semibold">{milestone.year}</div>
                          <div className="text-white font-bold">{milestone.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#22c55e] rounded-full border-4 border-[#0A1628]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Team
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Human wisdom meets AI capability. Together, we're transforming how enterprises understand culture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl">{member.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#B1D8FC]">{member.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-[#22c55e]/20 text-[#22c55e] px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our
              <span className="bg-gradient-to-r from-[#B1D8FC] to-[#22c55e] bg-clip-text text-transparent block">
                Values
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to partner relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-[#22c55e]/20 rounded-xl p-3">
                    <value.icon className={`w-6 h-6 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
                Our Mission?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Help us transform how global enterprises understand and navigate cultural intelligence. Together, we solve what others can't.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#22c55e] text-white px-12 py-6 text-lg font-semibold rounded-full hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Join Our Mission</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#B1D8FC] text-[#B1D8FC] px-12 py-6 text-lg font-semibold rounded-full hover:bg-[#B1D8FC]/10 transition-all duration-300"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;