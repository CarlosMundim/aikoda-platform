# MANUS COMPREHENSIVE DASHBOARD IMPLEMENTATION INSTRUCTIONS

## **CRITICAL CONTEXT ENGINEERING FOR SAP-STYLE AIKODA PLATFORM**

### **TYPOGRAPHY & INTERNATIONALIZATION REQUIREMENTS**

**Font Stack Implementation:**
```css
:root {
  --font-family-english: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-japanese: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', sans-serif;
  --font-family-primary: var(--font-family-english);
}

[lang="ja"] {
  --font-family-primary: var(--font-family-japanese);
}
```

**Language Switch Implementation:**
- Top-right corner language toggle (EN/JP)
- Real-time language switching without page reload
- Persistent language preference in localStorage
- All text content must have both English and Japanese versions

---

## **1. ENTERPRISE COCKPIT DASHBOARD**

### **Purpose & Context**
Executive-level command center providing real-time overview of entire cultural intelligence platform operations. Target users: C-level executives, VP of HR, Managing Directors.

### **Core Functional Requirements**

**Real-Time KPI Cards (6 primary metrics):**
1. **Total Candidates** - Active candidate pool size with monthly growth percentage
2. **Active Positions** - Open job requisitions requiring immediate attention
3. **Cultural Match Average** - Platform-wide cultural intelligence scoring average
4. **Placement Success Rate** - Percentage of successful placements in last 90 days
5. **Time to Fill** - Average days from job posting to successful placement
6. **Pipeline Value** - Total monetary value of candidates in active recruitment pipeline

**Data Visualization Components:**
- Cultural Intelligence Radar Chart (47-dimension overview)
- Placement Performance Trend Line (7-day, 30-day, 90-day views)
- Recent High Matches Table (top 10 matches in last 24 hours)
- System Alert Panel (real-time notifications)

**Calculation Requirements:**
```typescript
interface DashboardKPIs {
  total_candidates: number // Count from candidates table where status = 'active'
  active_jobs: number // Count from job_postings where status = 'active'
  cultural_match_avg: number // AVG(cultural_fit_score) from applications table
  placement_success_rate: number // (successful_placements / total_applications) * 100
  time_to_fill_days: number // AVG(DATEDIFF(placement_date, posting_date))
  pipeline_value: number // SUM(salary_range_max) from active applications
}
```

**Language-Specific Content:**
```typescript
const cockpitLabels = {
  en: {
    title: "Enterprise Cockpit",
    subtitle: "Cultural Intelligence & Talent Management Dashboard",
    kpis: {
      candidates: "Total Candidates",
      jobs: "Active Positions", 
      cultural: "Avg Cultural Match",
      success: "Success Rate",
      time: "Avg Days to Fill",
      pipeline: "Pipeline Value"
    }
  },
  ja: {
    title: "エンタープライズコックピット",
    subtitle: "文化的知能・人材管理ダッシュボード",
    kpis: {
      candidates: "総候補者数",
      jobs: "アクティブポジション",
      cultural: "平均文化適合度",
      success: "成功率",
      time: "平均採用日数",
      pipeline: "パイプライン価値"
    }
  }
}
```

### **Technical Implementation Specifications**

**Component Structure:**
```typescript
// /components/SAP/EnterpriseCockpit.tsx
export default function EnterpriseCockpit() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  const [kpis, setKpis] = useState<DashboardKPIs>()
  const [isLoading, setIsLoading] = useState(true)
  
  // Real API calls - NO hardcoded data
  useEffect(() => {
    fetchKPIData().then(setKpis)
  }, [])
  
  return (
    <div className="sap-enterprise-cockpit" lang={language}>
      <Header language={language} onLanguageChange={setLanguage} />
      <KPIGrid kpis={kpis} language={language} />
      <ChartsGrid language={language} />
      <AlertsPanel language={language} />
    </div>
  )
}
```

**Styling Requirements:**
- Background: #FAFAFA (SAP Fiori standard)
- Card backgrounds: #FFFFFF with 1px #D5DAE0 borders
- Primary brand color: #0070F2
- Success color: #30914C
- Warning color: #E76500
- Error color: #BB0000
- Font sizes: 2rem (titles), 1.125rem (subtitles), 0.875rem (body)

---

## **2. CANDIDATE ANALYZER DASHBOARD**

### **Purpose & Context**
Comprehensive candidate evaluation interface utilizing 47-dimension cultural intelligence assessment. Target users: Recruiters, HR Managers, Cultural Intelligence Specialists.

### **Core Functional Requirements**

**Input Processing Section:**
- Multi-step candidate data collection form
- Document upload (resume, portfolio, certificates)
- Cultural assessment questionnaire (47 dimensions)
- Skills and experience validation
- Language proficiency testing interface

**Analysis Engine Components:**
- Real-time cultural fit calculation
- Japanese philosophy alignment scoring (Wa, Kaizen, Omotenashi, etc.)
- Technical skills matching algorithm
- Psychological profile generation
- Market competitiveness analysis

**Results Visualization:**
- 47-dimension cultural radar chart
- Strengths and development areas breakdown
- Job recommendation engine with match percentages
- Cultural integration timeline prediction
- Compensation benchmarking display

**Calculation Engine Requirements:**
```typescript
interface CandidateAnalysis {
  calculateCulturalFit(responses: CulturalResponse[]): CulturalFitResult
  assessJapanesePhilosophy(values: PhilosophyInput[]): PhilosophyScore
  generateJobMatches(profile: CandidateProfile): JobMatch[]
  predictIntegrationTimeline(cultural_scores: number[]): IntegrationPrediction
  benchmarkCompensation(skills: string[], location: string): SalaryRange
}
```

**Algorithm Implementation:**
```typescript
// Real calculation - NO placeholder values
function calculateCulturalFit(responses: CulturalResponse[]): number {
  const dimensionWeights = JAPANESE_CULTURAL_WEIGHTS // from research data
  let totalScore = 0
  let totalWeight = 0
  
  responses.forEach(response => {
    const weight = dimensionWeights[response.dimension_id] || 1
    totalScore += response.score * weight
    totalWeight += weight
  })
  
  return Math.round((totalScore / totalWeight) * 100) / 100
}
```

**Language Content Structure:**
```typescript
const analyzerLabels = {
  en: {
    title: "Candidate Cultural Intelligence Analyzer",
    sections: {
      input: "Candidate Information",
      assessment: "Cultural Assessment",
      results: "Analysis Results",
      recommendations: "Job Recommendations"
    },
    dimensions: {
      wa_harmony: "Wa (Harmony)",
      kaizen_improvement: "Kaizen (Continuous Improvement)",
      omotenashi_service: "Omotenashi (Hospitality)"
    }
  },
  ja: {
    title: "候補者文化的知能分析ツール",
    sections: {
      input: "候補者情報",
      assessment: "文化的評価",
      results: "分析結果", 
      recommendations: "職業推奨"
    },
    dimensions: {
      wa_harmony: "和（調和）",
      kaizen_improvement: "改善（継続的改善）",
      omotenashi_service: "おもてなし（接客）"
    }
  }
}
```

---

## **3. CULTURAL INTELLIGENCE REPORT DASHBOARD**

### **Purpose & Context**
Detailed cultural assessment reporting system generating comprehensive PDF and Excel reports for candidates and clients. Target users: Executive team, Client hiring managers, Cultural consultants.

### **Core Functional Requirements**

**Report Generation Engine:**
- 47-dimension detailed analysis with explanations
- Japanese philosophy integration assessment
- Cross-cultural competency evaluation
- Integration timeline modeling
- Cultural development recommendations
- Comparative analysis against job requirements

**Visualization Components:**
- Multi-dimensional radar charts
- Philosophy alignment bar charts
- Timeline visualization for cultural integration
- Competency heat maps
- Development pathway diagrams

**Export Capabilities:**
- PDF reports (executive summary and detailed analysis)
- Excel spreadsheets with raw data
- Localized reports (English and Japanese versions)
- Branded client reports with company logos
- Candidate feedback reports with development plans

**Report Structure Implementation:**
```typescript
interface CulturalReport {
  executive_summary: {
    overall_score: number
    top_strengths: string[]
    development_areas: string[]
    job_fit_recommendation: string
  }
  detailed_analysis: {
    dimension_scores: DimensionScore[]
    philosophy_alignment: PhilosophyAlignment[]
    behavioral_predictions: BehavioralPrediction[]
    integration_timeline: IntegrationMilestone[]
  }
  recommendations: {
    cultural_training: TrainingRecommendation[]
    mentor_assignment: MentorProfile
    success_metrics: SuccessMetric[]
  }
}
```

**PDF Generation Logic:**
```typescript
// Real PDF generation with jsPDF
import jsPDF from 'jspdf'

async function generateCulturalReport(
  analysis: CulturalAnalysis,
  language: 'en' | 'ja'
): Promise<Blob> {
  const doc = new jsPDF()
  
  // Header with aiKODA branding
  doc.setFontSize(24)
  doc.text(reportLabels[language].title, 20, 30)
  
  // Executive summary section
  doc.setFontSize(16)
  doc.text(reportLabels[language].executive_summary, 20, 50)
  
  // Cultural dimensions data visualization
  // Implement actual chart generation, not placeholders
  
  return doc.output('blob')
}
```

---

## **4. MARKET INTELLIGENCE DASHBOARD**

### **Purpose & Context**
Real-time market data analysis providing competitive intelligence for Japanese and Indonesian talent markets. Target users: Business development, Strategic planning, Market analysts.

### **Core Functional Requirements**

**Market Data Sources:**
- Real salary benchmarking from OECD, PwC, TokyoDev, Glassdoor
- Skill demand analytics from job market APIs
- Competitor hiring activity monitoring
- Cultural fit market trends analysis
- Economic indicator integration

**Data Visualization:**
- Interactive market trend charts
- Salary range heat maps by region and skill
- Supply and demand analysis graphs
- Competitor activity timelines
- Economic indicator correlation charts

**Real Data Integration:**
```typescript
interface MarketData {
  salary_benchmarks: {
    position: string
    location: string
    min_salary: number
    max_salary: number
    currency: string
    data_source: string
    last_updated: Date
  }[]
  skill_demand: {
    skill_name: string
    demand_index: number // 0-100 scale
    growth_rate: number // percentage
    market_saturation: number
    supply_availability: number
  }[]
  competitor_analysis: {
    company_name: string
    hiring_volume: number
    average_salary_offering: number
    cultural_requirements: string[]
    market_share: number
  }[]
}
```

**API Integration Requirements:**
```typescript
// Real market data fetching
async function fetchMarketIntelligence(
  region: 'japan' | 'indonesia',
  timeframe: '7d' | '30d' | '90d'
): Promise<MarketData> {
  // Integrate with real data sources
  const salaryData = await fetchSalaryBenchmarks(region)
  const skillData = await fetchSkillDemandData(region)
  const competitorData = await fetchCompetitorAnalysis(region)
  
  return {
    salary_benchmarks: salaryData,
    skill_demand: skillData,
    competitor_analysis: competitorData
  }
}
```

---

## **5. CLIENT DASHBOARD**

### **Purpose & Context**
Client-specific portal showing their hiring pipeline, candidate matches, and cultural fit analytics. Target users: Client hiring managers, HR directors, Department heads.

### **Core Functional Requirements**

**Client-Specific Metrics:**
- Active job postings and application counts
- Cultural match quality for submitted candidates
- Hiring pipeline status and stage conversion rates
- Time-to-fill performance against targets
- Cost-per-hire analysis
- Candidate quality scoring

**Interactive Features:**
- Candidate filtering and sorting capabilities
- Cultural fit threshold adjustment
- Interview scheduling integration
- Feedback collection and rating system
- Offer management workflow

**Real-Time Updates:**
- Live candidate application notifications
- Cultural assessment completion alerts
- Interview scheduling confirmations
- Offer status changes
- Placement confirmations

**Data Security Requirements:**
```typescript
// Client data isolation
interface ClientDashboardData {
  client_id: string
  accessible_candidates: string[] // Only candidates applied to client jobs
  job_postings: JobPosting[] // Only client's active postings
  cultural_matches: CulturalMatch[] // Filtered by client requirements
  performance_metrics: ClientMetrics // Client-specific calculations
}

// Role-based access control
function validateClientAccess(
  user_id: string,
  client_id: string,
  requested_data: string[]
): boolean {
  // Implement proper authorization logic
  return checkUserClientPermissions(user_id, client_id, requested_data)
}
```

---

## **6. RECRUITMENT PIPELINE DASHBOARD**

### **Purpose & Context**
End-to-end recruitment process visualization showing candidate flow through all stages. Target users: Recruitment team leads, Operations managers, Process analysts.

### **Core Functional Requirements**

**Pipeline Stage Management:**
- Sourcing and initial screening
- Cultural assessment completion
- Technical skills evaluation
- Client interview scheduling
- Offer negotiation and finalization
- Onboarding initiation

**Flow Visualization:**
- Kanban-style stage representation
- Drag-and-drop candidate movement
- Stage duration analytics
- Bottleneck identification
- Conversion rate calculations

**Performance Analytics:**
- Stage-wise conversion rates
- Average time in each stage
- Recruiter performance metrics
- Cultural fit impact on progression
- Predictive analytics for success probability

**Pipeline Calculation Engine:**
```typescript
interface PipelineMetrics {
  calculateStageConversion(
    stage_from: string,
    stage_to: string,
    timeframe: DateRange
  ): number
  
  identifyBottlenecks(pipeline_data: PipelineData[]): BottleneckAnalysis
  
  predictPlacementSuccess(
    candidate_profile: CandidateProfile,
    job_requirements: JobRequirements
  ): SuccessProbability
  
  calculateRecruiterEfficiency(
    recruiter_id: string,
    period: DateRange
  ): EfficiencyMetrics
}
```

---

## **7. ONBOARDING TRACKER DASHBOARD**

### **Purpose & Context**
Post-placement cultural integration monitoring and success tracking system. Target users: Onboarding specialists, Cultural mentors, Client success managers.

### **Core Functional Requirements**

**Integration Tracking:**
- Cultural adaptation progress monitoring
- Training completion tracking
- Mentor session scheduling and feedback
- Performance milestone achievement
- Retention probability scoring

**Cultural Development Monitoring:**
- 30-60-90 day cultural assessment scores
- Japanese workplace integration metrics
- Communication effectiveness ratings
- Team collaboration feedback
- Cultural mentor progress reports

**Success Prediction Analytics:**
- Long-term retention probability
- Performance trajectory forecasting
- Cultural fit validation
- Intervention recommendation engine
- Success story identification

**Onboarding Metrics Calculation:**
```typescript
interface OnboardingMetrics {
  calculateIntegrationProgress(
    candidate_id: string,
    days_since_start: number
  ): IntegrationScore
  
  predictRetentionProbability(
    onboarding_data: OnboardingData,
    cultural_scores: CulturalScore[]
  ): RetentionPrediction
  
  generateInterventionRecommendations(
    progress_data: ProgressData[]
  ): InterventionPlan
}
```

---

## **TECHNICAL IMPLEMENTATION STANDARDS**

### **Component Architecture Requirements**
```typescript
// Every dashboard component must follow this structure
interface DashboardComponent {
  language: 'en' | 'ja'
  user_role: UserRole
  data_permissions: PermissionLevel[]
  real_time_updates: boolean
  export_capabilities: ExportFormat[]
}

// Error handling requirements
interface ErrorBoundary {
  fallback_ui: ReactComponent
  error_logging: boolean
  user_notification: boolean
  retry_mechanism: boolean
}
```

### **Performance Requirements**
- Initial load time: < 3 seconds
- Data refresh rate: Real-time for critical metrics
- Chart rendering: < 1 second
- Export generation: < 10 seconds for PDF reports
- Language switching: < 500ms

### **Accessibility Requirements**
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Font scaling support (up to 200%)

### **Testing Requirements**
- Unit tests for all calculation functions
- Integration tests for API endpoints
- End-to-end tests for user workflows
- Performance testing for data loading
- Cross-browser compatibility testing

**MANUS MUST IMPLEMENT EVERY REQUIREMENT WITH REAL FUNCTIONALITY. NO PLACEHOLDER DATA. NO SHORTCUTS. ENTERPRISE-GRADE QUALITY ONLY.**