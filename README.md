# aiKODA Intelligence Systems Platform

## 🚀 Modern Enterprise AI Platform

Built with precision for the Sankyo demonstration and enterprise deployment.

### 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with pixel-perfect design system
- **Animations**: Framer Motion
- **Internationalization**: next-intl (EN, JA, PT, ES, FR)
- **Icons**: Lucide React
- **Deployment**: Vercel

### 📐 Design System

All measurements are in **exact pixels** for Carlos's artistic control:

```css
/* Typography Scale */
--font-h1-desktop: 72px;
--font-h1-mobile: 48px;
--font-h2-desktop: 48px;
--font-h2-mobile: 36px;

/* Spacing Scale */
--space-8: 8px;
--space-16: 16px;
--space-24: 24px;
--space-32: 32px;
--space-64: 64px;
--space-80: 80px;

/* Colors (HEX) */
--color-primary: #3b82f6;
--color-secondary: #06b6d4;
--color-accent: #22d3ee;
```

### 🌍 Internationalization

Supported languages:
- 🇺🇸 English (en)
- 🇯🇵 Japanese (ja)
- 🇧🇷 Portuguese (pt)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)

### 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

### 📁 Project Structure

```
aikoda-platform/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── Navigation.tsx  # Navigation header
│   │   ├── HeroSection.tsx # Hero with floating animation
│   │   ├── PlatformSection.tsx # Platform showcase
│   │   └── Footer.tsx      # Footer with contact info
│   ├── lib/               # Utilities and helpers
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global CSS with pixel system
│   └── i18n.ts           # Internationalization config
├── locales/              # Translation files
├── public/               # Static assets
├── tailwind.config.js    # Tailwind with custom design system
├── next.config.js        # Next.js configuration
└── package.json         # Dependencies and scripts
```

### 🎨 Component Architecture

#### HeroSection.tsx
- **Floating headline animation** (6s infinite)
- **Typography hierarchy**: Line 1 (48px), Line 2 (40px, 8px smaller)
- **Stats grid**: 28px numbers, 14px labels, centered
- **CTAs**: Green primary, white outline secondary

#### Navigation.tsx
- **24px logo** with -0.01em letter spacing
- **14px nav links** with 500 font weight
- **Mobile responsive** with slide-down menu

#### PlatformSection.tsx
- **48px headings** with gradient cards
- **32px padding** on cards with hover animations
- **Icon system** with Lucide React

### 🎯 Sankyo-Specific Features

- **Japanese translations** accurate for business context
- **Cultural intelligence metrics** prominently displayed
- **Enterprise-grade design** with subtle animations
- **Mobile-first** responsive design

### 🔧 Development Commands

```bash
# Add new component
mkdir src/components/NewComponent
touch src/components/NewComponent/index.tsx

# Add new translation key
# Edit locales/en.json and locales/ja.json

# Add new utility function
# Edit src/lib/utils.ts

# Add new type definition
# Edit src/types/index.ts
```

### 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 🚢 Deployment

Optimized for Vercel deployment:

1. **Automatic SSL** certificates
2. **Edge functions** for internationalization
3. **Image optimization** with Next.js
4. **Performance monitoring** built-in

### 👨‍💻 Development Team

- **Carlos Mundim**: Strategic Vision & Content Direction
- **Koda van Niekerk Mundim**: Technical Architecture & Implementation
- **Chachie**: Frontend Development & Design Support

### 🔗 Related Files

- Original HTML: `/landing-page-complete.html`
- Design System: `/src/styles/globals.css`
- Translations: `/locales/*.json`

---

**Built with precision for enterprise success** 🎯