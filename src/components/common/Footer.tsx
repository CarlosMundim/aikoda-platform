'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
  Phone,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Shield,
  FileText,
  Lock,
  AlertTriangle
} from 'lucide-react';

interface FooterProps {
  variant?: 'main' | 'subdomain';
  showLanguageSelector?: boolean;
}

const Footer = ({ variant = 'main', showLanguageSelector = true }: FooterProps) => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'White-Label Mobility', href: '/platform/mobility', icon: '🧠' },
        { label: 'AI Recruiter Agents', href: '/platform/ai-recruiter', icon: '👥' },
        { label: 'Analytics Dashboard', href: '/platform/analytics', icon: '📊' },
        { label: 'API & Integrations', href: '/platform/integrations', icon: '🔌' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Back Office AI', href: '/solutions/back-office', icon: '⚙️' },
        { label: 'Custom AI Agents', href: '/solutions/custom', icon: '🤖' },
        { label: 'Migration Services', href: '/solutions/migration', icon: '🔄' },
        { label: 'Sovereign Cloud', href: '/solutions/sovereign', icon: '☁️' },
      ],
    },
    {
      title: 'Enterprise',
      links: [
        { label: 'Client Portal', href: 'https://client.aikoda.dev', icon: '🏢', external: true },
        { label: 'API Documentation', href: 'https://api.aikoda.dev', icon: '📚', external: true },
        { label: 'System Status', href: 'https://status.aikoda.dev', icon: '🟢', external: true },
        { label: 'Support Center', href: 'https://docs.aikoda.dev', icon: '💬', external: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About aiKODA', href: 'https://www.aikoda.dev/about', icon: '🏯', external: true },
        { label: '5C1M Partnership', href: '/company/5c1m', icon: '🤝' },
        { label: 'Careers', href: '/company/careers', icon: '💼' },
        { label: 'Press & Media', href: '/company/press', icon: '📰' },
      ],
    },
  ];

  const contactInfo = [
    { 
      label: 'Enterprise Sales', 
      value: 'sales@aikoda.dev', 
      href: 'mailto:sales@aikoda.dev',
      icon: Mail,
      type: 'email'
    },
    { 
      label: 'Technical Support', 
      value: 'support@aikoda.dev', 
      href: 'mailto:support@aikoda.dev',
      icon: Mail,
      type: 'email'
    },
    { 
      label: 'Partnership Inquiries', 
      value: 'partners@aikoda.dev', 
      href: 'mailto:partners@aikoda.dev',
      icon: Mail,
      type: 'email'
    },
    { 
      label: 'Tokyo Office', 
      value: 'Shibuya, Tokyo, Japan', 
      href: '#',
      icon: MapPin,
      type: 'location'
    },
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/aikoda-intelligence', 
      icon: Linkedin,
      color: '#0077B5'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/aikoda_ai', 
      icon: Twitter,
      color: '#1DA1F2'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/aikoda-intelligence', 
      icon: Github,
      color: '#333'
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@aikoda-intelligence', 
      icon: Youtube,
      color: '#FF0000'
    },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/legal/privacy', icon: Shield },
    { label: 'Terms of Service', href: '/legal/terms', icon: FileText },
    { label: 'Security & Compliance', href: '/legal/security', icon: Lock },
    { label: 'Whistleblower Policy', href: '/legal/whistleblower', icon: AlertTriangle },
  ];

  const complianceLogos = [
    { name: 'SOC 2 Type II', logo: '🛡️', description: 'SOC 2 Certified' },
    { name: 'GDPR', logo: '🇪🇺', description: 'GDPR Compliant' },
    { name: 'ISO 27001', logo: '📋', description: 'ISO 27001 Ready' },
    { name: 'CCPA', logo: '🇺🇸', description: 'CCPA Compliant' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Main Footer Content */}
      <div 
        className="max-w-7xl mx-auto"
        style={{
          paddingTop: '64px',
          paddingBottom: '32px',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          style={{ marginBottom: '48px' }}
        >
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              
              {/* Logo & Tagline */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">aK</span>
                  </div>
                  <h3
                    className="text-white font-bold"
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em'
                    }}
                  >
                    aiKODA
                  </h3>
                </div>
                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    marginBottom: '24px'
                  }}
                >
                  Transforming enterprises through ethical AI, cultural intelligence, 
                  and human-centered automation. We solve what others can't.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-6">
                <h4
                  className="text-white font-medium mb-4"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  Contact Information
                </h4>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <IconComponent 
                          className="text-blue-400 mt-0.5 flex-shrink-0" 
                          style={{ width: '16px', height: '16px' }}
                        />
                        <div>
                          <p
                            className="text-gray-400 text-sm"
                            style={{
                              fontSize: '12px',
                              fontWeight: 400,
                              marginBottom: '2px'
                            }}
                          >
                            {contact.label}
                          </p>
                          {contact.type === 'email' ? (
                            <a
                              href={contact.href}
                              className="text-blue-400 hover:text-blue-300 transition-colors"
                              style={{
                                fontSize: '14px',
                                fontWeight: 400
                              }}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p
                              className="text-gray-300"
                              style={{
                                fontSize: '14px',
                                fontWeight: 400
                              }}
                            >
                              {contact.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4
                  className="text-white font-medium mb-4"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500
                  }}
                >
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200"
                        style={{
                          backgroundColor: variant === 'main' ? '#1f2937' : '#374151'
                        }}
                      >
                        <IconComponent 
                          className="text-gray-400 hover:text-white" 
                          style={{ width: '18px', height: '18px' }}
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                className="text-white font-medium mb-4"
                style={{
                  fontSize: '16px',
                  fontWeight: 500
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href as any}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span
                        className="group-hover:translate-x-1 transition-transform duration-200"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {link.label}
                      </span>
                      {link.external && (
                        <span className="text-gray-500 text-xs">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <h4
            className="text-white font-medium mb-4"
            style={{
              fontSize: '16px',
              fontWeight: 500
            }}
          >
            Security & Compliance
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceLogos.map((compliance, index) => (
              <motion.div
                key={compliance.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg">{compliance.logo}</span>
                <div>
                  <p
                    className="text-white font-medium"
                    style={{
                      fontSize: '12px',
                      fontWeight: 500
                    }}
                  >
                    {compliance.name}
                  </p>
                  <p
                    className="text-gray-400"
                    style={{
                      fontSize: '10px',
                      fontWeight: 400
                    }}
                  >
                    {compliance.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-6"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p
                className="text-gray-400"
                style={{
                  fontSize: '14px',
                  fontWeight: 400
                }}
              >
                © {currentYear} aiKODA Intelligence Systems. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-gray-400">
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 400
                  }}
                >
                  Designed & Built with
                </span>
                <span className="text-red-400 mx-1">❤️</span>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 400
                  }}
                >
                  in Japan
                </span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6">
              {legalLinks.map((legal, index) => {
                const IconComponent = legal.icon;
                return (
                  <Link
                    key={legal.label}
                    href={legal.href as any}
                    className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent style={{ width: '14px', height: '14px' }} />
                    <span
                      style={{
                        fontSize: '14px',
                        fontWeight: 400
                      }}
                    >
                      {legal.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;