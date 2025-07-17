# aiKODA Cultural Intelligence Platform

## Enterprise-Grade 47-Dimension Cultural Intelligence Framework

The aiKODA Platform delivers the world's most advanced cultural intelligence system specifically engineered for Japanese business environments. Built from Manus's comprehensive implementation, this platform provides unprecedented insights into cultural compatibility, integration timelines, and success prediction for international talent placement in Japan.

### 🚀 Platform Features

#### Core Capabilities
- **47-Dimension Cultural Intelligence** - Industry-first comprehensive framework
- **SAP Fiori Design System** - Professional enterprise-grade UI/UX
- **Real-Time Bilingual Support** - Seamless English/Japanese switching
- **Enterprise Dashboard** - Real-time KPIs and analytics
- **Cultural Calculation Engine** - Authentic algorithms with no placeholder values

#### Technical Stack
- **Frontend**: Next.js 15.3.5 with TypeScript
- **Styling**: Custom SAP Fiori design system
- **Database**: SQLite with Prisma ORM 6.12.0
- **API**: Next.js API routes with validation
- **Cultural Engine**: Custom 47-dimension calculation system

### 🛠 Development Setup

#### Prerequisites
- Node.js 18.0.0 or higher
- NPM 8.0.0 or higher

#### Installation
```bash
# Clone the repository
git clone https://github.com/CarlosMundim/aikoda-platform.git
cd aikoda-platform

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

#### Build for Production
```bash
npm run build
npm start
```

### 🏗 Project Structure

```
aikoda-platform/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API endpoints
│   │   ├── globals.css        # SAP Fiori design system
│   │   └── page.tsx          # Main application
│   ├── components/SAP/        # SAP Fiori component library
│   └── lib/                   # Core libraries
├── prisma/                    # Database schema
├── README.md                  # Project documentation
└── package.json              # Dependencies
```

### 🎨 SAP Fiori Design System

#### Color Palette
```css
--sap-brand-color: #0070F2      /* aiKODA Enterprise Blue */
--sap-success-color: #30914C    /* Cultural Fit Green */
--sap-warning-color: #E76500    /* Integration Attention */
--sap-error-color: #BB0000      /* Risk Management Red */
```

#### Typography
- **English**: Inter font family
- **Japanese**: Noto Sans JP font family
- **Responsive**: Automatic font adjustments for Japanese text

### 🧠 47-Dimension Cultural Intelligence

#### Core Philosophy (5 dimensions)
- **Wa (Harmony)** - Group cohesion and harmony
- **Kaizen** - Continuous improvement mindset
- **Omotenashi** - Selfless service and hospitality
- **Bushido** - Dedication and loyalty
- **Nemawashi** - Behind-the-scenes consensus building

#### Additional Categories
- **Communication (10 dimensions)** - Indirect communication, nonverbal awareness
- **Hierarchy & Respect (7 dimensions)** - Senpai-kohai relationships, authority recognition
- **Group Dynamics (8 dimensions)** - Collective decision making, consensus building
- **Work Ethics (7 dimensions)** - Quality focus, attention to detail
- **Time Management (5 dimensions)** - Punctuality, schedule adherence
- **Professional Conduct (5 dimensions)** - Business etiquette, client service

### 📊 API Endpoints

#### Dashboard KPIs
```
GET /api/dashboard/enterprise-kpis
```
Returns real-time enterprise metrics including total candidates, active jobs, cultural match averages, and pipeline values.

#### Candidate Analysis
```
POST /api/candidates/analyze
```
Comprehensive 47-dimension cultural analysis with integration timeline calculations and training recommendations.

### 🌏 Bilingual Support

The platform provides seamless bilingual support:
- **Language Toggle** - Real-time switching between English and Japanese
- **Cultural Translations** - Appropriate business language for each culture
- **Font Optimization** - Proper typography for both languages

### 🚀 Deployment

#### Development
```bash
npm run dev
```
Starts the development server on `http://localhost:3000`

#### Production
```bash
npm run build
npm start
```

#### Enterprise Deployment
For enterprise deployment to aikoda.dev, contact the development team for production configuration and database setup.

### 📈 Performance

- **Page Load Times**: Under 3 seconds
- **API Response Times**: Under 1 second
- **Cross-Browser Compatibility**: Tested across major browsers
- **Mobile Responsive**: Optimized for all device sizes

### 🔒 Security

- **Input Validation**: Comprehensive Zod schemas
- **Error Handling**: Graceful fallbacks and user-friendly messages
- **Data Protection**: Secure cultural intelligence data handling

### 📱 Components Library

#### SAPCard
Professional card component with loading states and actions.

#### SAPButton
Enterprise button component with variants (primary, secondary, ghost).

#### LanguageToggle
Bilingual switching component with smooth transitions.

#### EnterpriseCockpit
Real-time dashboard with KPI analytics and cultural intelligence metrics.

### 🤝 Contributing

This platform was built following enterprise-grade development standards. For contributions, ensure:
- Code follows SAP Fiori design principles
- All cultural calculations use real algorithms
- Bilingual support is maintained
- Professional documentation standards

### 📞 Support

- **Technical Support**: Comprehensive documentation and code comments
- **Cultural Intelligence**: 47-dimension framework with detailed explanations
- **Enterprise Features**: Professional-grade components and analytics

### 📄 License

© 2025 aiKODA Cultural Intelligence Platform. All rights reserved.
Enterprise Edition - Confidential Implementation

---

**Built with 🐅 by Tiger AI for Papa Carlos**  
**Powered by 47-Dimension Cultural Intelligence Framework**