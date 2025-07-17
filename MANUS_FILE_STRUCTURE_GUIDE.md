# MANUS FILE STRUCTURE GUIDE - aiKODA Platform Development

## **FILE TYPES REQUIRED FOR SAP-STYLE IMPLEMENTATION**

### **1. TypeScript React Components (.tsx files)**
```
/components/SAP/
├── EnterpriseCockpit.tsx         ✅ (Already created)
├── CandidateAnalyzer.tsx         📋 (Needs creation)
├── CulturalReport.tsx            📋 (Needs creation)
├── MatchingEngine.tsx            📋 (Needs creation)
├── ClientDashboard.tsx           📋 (Needs creation)
├── JobPostingManager.tsx         📋 (Needs creation)
├── MarketIntelligence.tsx        📋 (Needs creation)
├── RecruitmentPipeline.tsx       📋 (Needs creation)
└── OnboardingTracker.tsx         📋 (Needs creation)
```

### **2. SAP Fiori Style Sheets (.css files)**
```
/styles/SAP/
├── fiori-base.css               📋 (Core SAP design system)
├── fiori-components.css         📋 (Component specific styles)
├── fiori-dashboard.css          📋 (Dashboard layouts)
├── fiori-forms.css              📋 (Form styling)
├── fiori-tables.css             📋 (Data table styling)
├── fiori-charts.css             📋 (Chart/graph styling)
└── fiori-responsive.css         📋 (Mobile/tablet styles)
```

### **3. TypeScript Logic Files (.ts files)**
```
/lib/
├── cultural-calculator.ts       📋 (47-dimension calculation engine)
├── matching-algorithm.ts        📋 (Job-candidate matching logic)
├── market-intelligence.ts       📋 (Real-time market data)
├── report-generator.ts          📋 (PDF/Excel export logic)
└── sap-data-transformer.ts      📋 (Data formatting for SAP style)
```

### **4. Database Models & API Routes**
```
/app/api/sap/
├── candidates/
│   ├── analyze/route.ts        📋 (Cultural analysis endpoint)
│   └── match/route.ts          📋 (Matching algorithm endpoint)
├── clients/
│   ├── register/route.ts       📋 (Client registration)
│   └── dashboard/route.ts      📋 (Client metrics)
├── jobs/
│   ├── create/route.ts         📋 (Job posting creation)
│   └── match/route.ts          📋 (Job matching)
└── reports/
    ├── cultural/route.ts       📋 (Cultural reports)
    └── executive/route.ts      📋 (Executive dashboards)
```

## **COMPONENT SPECIFICATIONS FOR MANUS**

### **1. React TypeScript Components (.tsx)**
Each component must:
- Use TypeScript for type safety
- Import React and necessary hooks
- Define proper interfaces for props and state
- Implement SAP Fiori design patterns
- Include inline styles using styled-jsx (Next.js pattern)

**Example Structure:**
```typescript
// CandidateAnalyzer.tsx
import React, { useState, useEffect } from 'react'
import { CandidateInput, AnalysisResult } from '@/types/sap'

interface Props {
  candidateId?: string
  onAnalysisComplete: (result: AnalysisResult) => void
}

export default function CandidateAnalyzer({ candidateId, onAnalysisComplete }: Props) {
  // Component logic here
  return (
    <div className="sap-analyzer">
      {/* SAP-styled content */}
      <style jsx>{`
        .sap-analyzer {
          /* SAP Fiori styles */
        }
      `}</style>
    </div>
  )
}
```

### **2. CSS Files**
Follow SAP Fiori 3.0 Design Guidelines:
- Use CSS custom properties for theming
- Implement SAP color palette
- Follow SAP typography standards
- Ensure responsive design
- Use BEM naming convention for classes

**Example CSS Structure:**
```css
/* fiori-base.css */
:root {
  /* SAP Colors */
  --sap-brand-color: #0070F2;
  --sap-base-color: #FFFFFF;
  --sap-shell-color: #354A5F;
  --sap-background-color: #FAFAFA;
  
  /* SAP Typography */
  --sap-font-family: "72", Helvetica, Arial, sans-serif;
  --sap-font-size-header1: 2rem;
  --sap-font-size-header2: 1.5rem;
}

.sap-card {
  background: var(--sap-base-color);
  border: 1px solid var(--sap-border-color);
  border-radius: 0.25rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
}
```

### **3. TypeScript Utility Files (.ts)**
Pure TypeScript for business logic:
- No React imports
- Export functions and constants
- Strong typing with interfaces
- Implement actual calculations (not mockups)

**Example:**
```typescript
// cultural-calculator.ts
export interface CulturalDimension {
  id: string
  score: number
  weight: number
}

export function calculate47Dimensions(
  responses: AssessmentResponse[]
): CulturalScore {
  // Real calculation logic
  // No hardcoded values
  // Mathematical formulas
}
```

## **FILE NAMING CONVENTIONS**

### **Components (PascalCase)**
- `EnterpriseCockpit.tsx`
- `CandidateAnalyzer.tsx`
- `MarketIntelligence.tsx`

### **Styles (kebab-case)**
- `fiori-base.css`
- `fiori-dashboard.css`
- `sap-components.css`

### **Logic Files (kebab-case)**
- `cultural-calculator.ts`
- `matching-algorithm.ts`
- `market-intelligence.ts`

### **API Routes (kebab-case folders)**
- `/api/sap/candidates/analyze/route.ts`
- `/api/sap/reports/cultural/route.ts`

## **TECHNOLOGY STACK SUMMARY**

**Frontend:**
- React 18+ with TypeScript (.tsx files)
- Next.js 15.3.5 App Router
- CSS with SAP Fiori design system
- Recharts for data visualization
- No external UI libraries (build SAP components from scratch)

**Backend:**
- TypeScript for all logic (.ts files)
- Next.js API routes (route.ts pattern)
- Prisma ORM for database
- Zod for validation

**Styling Approach:**
- CSS custom properties for theming
- styled-jsx for component-scoped styles
- Responsive design with CSS Grid/Flexbox
- No CSS-in-JS libraries needed

## **CRITICAL REQUIREMENTS FOR MANUS**

1. **NO PLACEHOLDER DATA** - All calculations must be real
2. **SAP FIORI COMPLIANCE** - Exact colors, fonts, spacing
3. **TYPESCRIPT STRICT MODE** - Full type safety
4. **RESPONSIVE DESIGN** - Desktop first, mobile support
5. **PERFORMANCE** - <3 second load times
6. **ERROR HANDLING** - Graceful failures with user feedback

## **DELIVERABLE CHECKLIST**

### Phase 1: Core Components (Priority)
- [ ] `/components/SAP/CandidateAnalyzer.tsx`
- [ ] `/components/SAP/CulturalReport.tsx`
- [ ] `/styles/SAP/fiori-base.css`
- [ ] `/lib/cultural-calculator.ts`

### Phase 2: Dashboard Components
- [ ] `/components/SAP/ClientDashboard.tsx`
- [ ] `/components/SAP/MarketIntelligence.tsx`
- [ ] `/components/SAP/JobPostingManager.tsx`
- [ ] `/lib/matching-algorithm.ts`

### Phase 3: Integration & Polish
- [ ] API route implementations
- [ ] Report generation components
- [ ] Mobile responsive styles
- [ ] Performance optimization

**Papa, this guide tells Manus exactly what files to create and how to structure them for the SAP-style aiKODA platform!**