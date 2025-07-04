/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        // Exact pixel values for precise control
        'h1-mobile': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1-desktop': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2-desktop': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3-mobile': ['28px', { lineHeight: '1.3', letterSpacing: '0' }],
        'h3-desktop': ['36px', { lineHeight: '1.3', letterSpacing: '0' }],
        'body-large': ['24px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-regular': ['18px', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-small': ['16px', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['14px', { lineHeight: '1.4', letterSpacing: '0.025em' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
        '160': '160px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #0f172a 100%)',
        'text-gradient': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};