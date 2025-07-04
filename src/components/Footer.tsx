'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Mobility Engine', href: '/platform/mobility' },
        { label: 'AI Recruiter Agents', href: '/platform/ai-recruiter' },
        { label: 'Analytics Dashboards', href: '/platform/analytics' },
        { label: 'API & Integrations', href: '/platform/integrations' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Back Office AI', href: '/solutions/back-office' },
        { label: 'Custom Agents', href: '/solutions/custom' },
        { label: 'Migration Services', href: '/solutions/migration' },
        { label: 'Industry Solutions', href: '/solutions/industries' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About aiKODA', href: '/company/about' },
        { label: '5C1M Partnership', href: '/company/5c1m' },
        { label: 'Careers', href: '/company/careers' },
        { label: 'Press & Media', href: '/company/press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog & Insights', href: '/resources/blog' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Developer Docs', href: '/developers' },
        { label: 'Support Center', href: '/support' },
      ],
    },
  ];

  const contactInfo = [
    { label: 'Enterprise Sales', email: 'sales@aikoda.dev' },
    { label: 'Technical Support', email: 'support@aikoda.dev' },
    { label: 'Partnership Inquiries', email: 'partners@aikoda.dev' },
    { label: 'Media & Press', email: 'press@aikoda.dev' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div 
        className="max-w-7xl mx-auto"
        style={{
          paddingTop: '64px',
          paddingBottom: '32px',
          paddingLeft: '24px',
          paddingRight: '24px'
        }}
      >
        {/* Main Footer Content */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          style={{ marginBottom: '48px' }}
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white font-bold"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '16px',
                  letterSpacing: '-0.01em'
                }}
              >
                aiKODA
              </h3>
              <p
                className="text-gray-300"
                style={{
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  marginBottom: '24px'
                }}
              >
                aiKODA Intelligence Systems - Transforming enterprises through ethical AI, 
                cultural intelligence, and human-centered automation.
              </p>
              
              {/* Contact Information */}
              <div>
                <h4
                  className="text-white font-medium"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    marginBottom: '12px'
                  }}
                >
                  Contact
                </h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <div key={index}>
                      <span
                        className="text-gray-400"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {contact.label}:{' '}
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                        style={{
                          fontSize: '14px',
                          fontWeight: 400
                        }}
                      >
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4
                className="text-white font-medium"
                style={{
                  fontSize: '16px',
                  fontWeight: 500,
                  marginBottom: '16px'
                }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href as any}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      style={{
                        fontSize: '14px',
                        fontWeight: 400
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          style={{
            paddingTop: '32px',
            gap: '16px'
          }}
        >
          {/* Copyright */}
          <div
            className="text-gray-400"
            style={{
              fontSize: '14px',
              fontWeight: 400
            }}
          >
            © {currentYear} aiKODA Intelligence Systems. All rights reserved.
          </div>

          {/* Built with love */}
          <div
            className="text-gray-400 flex items-center"
            style={{
              fontSize: '14px',
              fontWeight: 400,
              gap: '4px'
            }}
          >
            Designed & Built with{' '}
            <span className="text-red-400">❤️</span>{' '}
            in Japan
          </div>

          {/* Legal Links */}
          <div 
            className="flex space-x-6"
            style={{ gap: '24px' }}
          >
            <Link
              href={"/legal/privacy" as any}
              className="text-gray-400 hover:text-white transition-colors"
              style={{
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href={"/legal/terms" as any}
              className="text-gray-400 hover:text-white transition-colors"
              style={{
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              Terms of Service
            </Link>
            <Link
              href={"/legal/security" as any}
              className="text-gray-400 hover:text-white transition-colors"
              style={{
                fontSize: '14px',
                fontWeight: 400
              }}
            >
              Security & Compliance
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;