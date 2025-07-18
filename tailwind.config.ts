import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'iworkz-indigo': '#1e3a8a',
        'iworkz-sakura': '#fecaca', 
        'iworkz-ochre': '#fbbf24',
        'iworkz-neutral': '#6b7280',
        'iworkz-soft-white': '#fefefe',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'dual-hero-jp': '3.5rem',
        'dual-hero-en': '3rem',
        'dual-subtitle-jp': '1.5rem',
        'dual-subtitle-en': '1.375rem',
      },
      animation: {
        'cultural-flow': 'cultural-flow 3s ease-in-out infinite',
      },
      keyframes: {
        'cultural-flow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
      },
      backgroundImage: {
        'harmony-gradient': 'linear-gradient(135deg, #1e3a8a 0%, #fecaca 100%)',
        'cultural-bridge': 'linear-gradient(90deg, #1e3a8a 0%, #fbbf24 50%, #fecaca 100%)',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-iworkz-indigo',
    'bg-iworkz-sakura', 
    'bg-iworkz-ochre',
    'text-iworkz-indigo',
    'text-iworkz-sakura',
    'text-iworkz-ochre',
    'border-iworkz-indigo',
    'font-japanese',
    'font-english',
    'text-dual-hero-jp',
    'text-dual-hero-en',
    'text-dual-subtitle-jp',
    'text-dual-subtitle-en',
    'animate-cultural-flow',
    'enterprise-card',
    'cq-dimension',
    'hover-cultural',
    'harmony-gradient',
    'cultural-bridge',
  ],
}

export default config