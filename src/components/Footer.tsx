'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, 
  MapPin, 
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
      <div 
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Company Information */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo & Tagline */}
              <div className="mb-6 flex items-center space-x-4">
                <div className="w-28 h-auto">
                  <Image 
                    src="/logos/aikoda_blue_logo.svg"
                    alt="aiKODA logo"
                    width={112}
                    height={36}
                    priority
                  />
                </div>
              </div>
              <p
                className="text-gray-300 leading-relaxed max-w-md"
                style={{ fontSize: '16px', lineHeight: '1.6' }}
              >
                Transforming enterprises through ethical AI, cultural intelligence, 
                and human-centered automation. We solve what others can't.
              </p>

              {/* Contact Information */}
              <div className="mt-10">
                <h4 className="text-white font-semibold mb-6 text-lg">Contact Information</h4>
                <div className="space-y-4 max-w-md">
                  {contactInfo.map((contact, idx) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={idx} className="flex items-start space-x-3">
                        <IconComponent 
                          className="text-blue-400 mt-1 flex-shrink-0" 
                          style={{ width: '18px', height: '18px' }}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-gray-400 text-xs mb-1">{contact.label}</p>
                          {contact.type === 'email' ? (
                            <a
                              href={contact.href}
                              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                              aria-label={`Send email to ${contact.label}`}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-300 text-sm font-medium">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-white font-semibold mb-6 text-lg">Follow Us</h4>
                <div className="flex space-x-5">
                  {socialLinks.map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Follow us on ${social.name}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="w-11 h-11 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 focus:outline focus:outline-2 focus:outline-blue-400"
                        style={{ backgroundColor: variant === 'main' ? '#1f2937' : '#374151' }}
                      >
                        <IconComponent 
                          className="text-gray-400 hover:text-white" 
                          style={{ width: '20px', height: '20px' }}
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-white font-semibold text-lg">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href as any}
                      target={link.external ? '_blank' : '_self'}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group focus:outline focus:outline-2 focus:outline-blue-400"
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200 text-sm font-medium">{link.label}</span>
                      {link.external && <span className="text-gray-500 text-xs">↗</span>}
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
          className="border-t border-gray-800 pt-8 mb-8 max-w-7xl mx-auto"
        >
          <h4 className="text-white font-semibold text-lg mb-6">Security & Compliance</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {complianceLogos.map((compliance, idx) => (
              <motion.div
                key={compliance.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <span className="text-2xl">{compliance.logo}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{compliance.name}</p>
                  <p className="text-gray-400 text-xs">{compliance.description}</p>
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
          className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="flex items-center space-x-4">
            <Image 
              src="/logos/aikoda_blue_logo.svg" 
              alt="aiKODA logo" 
              width={96} 
              height={28} 
              priority
            />
            <p className="text-gray-400 text-sm select-none">
              © {currentYear} aiKODA Intelligence Systems. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-6">
            {legalLinks.map((legal, idx) => {
              const IconComponent = legal.icon;
              return (
                <Link
                  key={legal.label}
                  href={legal.href as any}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 focus:outline focus:outline-2 focus:outline-blue-400 rounded"
                >
                  <IconComponent style={{ width: '14px', height: '14px' }} aria-hidden="true" />
                  <span className="text-sm font-medium">{legal.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;