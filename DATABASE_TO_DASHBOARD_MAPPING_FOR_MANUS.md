# DATABASE TO DASHBOARD MAPPING - COMPLETE IMPLEMENTATION GUIDE

## **MANUS: THIS SHOWS EXACTLY WHICH DATABASE FIELDS FEED WHICH DASHBOARD COMPONENTS**

---

## **1. ENTERPRISE COCKPIT DASHBOARD (.tsx)**

### **File: `/components/SAP/EnterpriseCockpit.tsx`**

**Database Queries Needed:**
```typescript
// KPI Card Data Sources
interface DashboardKPIs {
  total_candidates: number    // COUNT(*) FROM Candidate WHERE candidateStatus = 'AVAILABLE'
  active_jobs: number        // COUNT(*) FROM JobPosting WHERE postingStatus = 'active'
  cultural_match_avg: number // AVG(culturalFitScore) FROM Application WHERE createdAt > 30_days_ago
  placement_success_rate: number // (COUNT(hired) / COUNT(total_applications)) * 100
  time_to_fill_days: number // AVG(DATEDIFF(hire_date, posting_date)) FROM JobPosting
  pipeline_value: number    // SUM(salaryRangeMaximum) FROM active applications
}

// Database Fields → Dashboard Components Mapping:
Candidate.candidateStatus → KPI "Total Candidates" 
JobPosting.postingStatus → KPI "Active Positions"
Application.culturalFitScore → KPI "Cultural Match Average"
Application.applicationStatus → KPI "Success Rate"
SystemMetrics.metricValue → KPI "Time to Fill"
JobPosting.salaryRangeMaximum → KPI "Pipeline Value"

// Cultural Radar Chart Data
CulturalAssessment.dimensionScores → RadarChart dimensions
CulturalAssessment.waHarmonyScore → "Wa (Harmony)" point
CulturalAssessment.kaizenImprovementScore → "Kaizen" point
CulturalAssessment.omotenashiServiceScore → "Omotenashi" point

// Recent Matches Table
Application.candidateId + Candidate.firstName + Candidate.lastName → Candidate Name
Application.overallMatchScore → Match Percentage
Application.culturalFitScore → Cultural Fit
Application.currentStage → Status
Application.createdAt → Timestamp
```

**API Endpoints to Create:**
```typescript
// /app/api/dashboard/enterprise-kpis/route.ts
export async function GET() {
  const kpis = {
    total_candidates: await prisma.candidate.count({ where: { candidateStatus: 'AVAILABLE' }}),
    active_jobs: await prisma.jobPosting.count({ where: { postingStatus: 'active' }}),
    cultural_match_avg: await prisma.application.aggregate({
      _avg: { culturalFitScore: true },
      where: { createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }}
    }),
    // ... more calculations
  }
  return Response.json(kpis)
}

// /app/api/dashboard/cultural-trends/route.ts
// /app/api/dashboard/recent-matches/route.ts
// /app/api/dashboard/alerts/route.ts
```

---

## **2. CANDIDATE ANALYZER DASHBOARD (.tsx)**

### **File: `/components/SAP/CandidateAnalyzer.tsx`**

**Database Fields Used:**
```typescript
// Input Form Data → Database Storage
Candidate.firstName, lastName, email → Basic Information Section
Candidate.technicalSkills → Skills Assessment 
Candidate.languageProficiency → Language Section
Candidate.educationRecords → Education Background

// Cultural Assessment Input → Analysis Engine
CulturalAssessment.dimensionScores → 47-Dimension Analysis
CulturalAssessment.waHarmonyScore → Japanese Philosophy Section
PsychologicalAssessment.personalityType → Psychological Profile
LanguageAssessment.japaneseLevel → Language Proficiency
ProfessionalAssessment.technicalScore → Skills Evaluation

// Analysis Results Display
CulturalAssessment.overallScore → Overall Cultural Score
CulturalAssessment.culturalFitPrediction → Job Fit Prediction
CulturalAssessment.integrationTimelineDays → Integration Timeline
CulturalAssessment.culturalTrainingNeeded → Training Recommendations

// Job Matching Algorithm
Application.overallMatchScore → Job Recommendations List
Application.culturalFitScore → Cultural Alignment Score
JobPosting.externalJobTitle → Recommended Position
Company.companyTradeName → Company Name
```

**Component Structure:**
```typescript
// Input Processing Section
<CandidateDataForm 
  onSubmit={async (data) => {
    await saveCandidateData(data) // → Candidate table
    await triggerAssessments(candidateId) // → Assessment tables
  }}
/>

// Real-Time Analysis Engine
<CulturalAnalysisEngine
  candidateId={candidateId}
  data={{
    cultural: culturalAssessment, // FROM CulturalAssessment table
    psychological: psychAssessment, // FROM PsychologicalAssessment table
    language: languageAssessment, // FROM LanguageAssessment table
    professional: professionalAssessment // FROM ProfessionalAssessment table
  }}
/>

// Results Visualization
<AnalysisResults
  culturalScore={culturalAssessment.overallScore}
  jobMatches={matchingResults} // FROM Application join JobPosting
  recommendations={aiRecommendations}
/>
```

---

## **3. CULTURAL INTELLIGENCE REPORT DASHBOARD (.tsx)**

### **File: `/components/SAP/CulturalReport.tsx`**

**Database Fields for Reports:**
```typescript
// Executive Summary Data
CulturalAssessment.overallScore → Executive Summary Score
CulturalAssessment.topStrengths → Key Strengths Section
CulturalAssessment.developmentAreas → Development Areas
CulturalAssessment.culturalFitPrediction → Job Fit Recommendation

// 47-Dimension Detailed Analysis
CulturalAssessment.dimensionScores → Complete Radar Chart
CulturalAssessment.waHarmonyScore → Traditional Values Section
CulturalAssessment.kaizenImprovementScore → Work Philosophy Section
CulturalAssessment.teamCollaborationScore → Workplace Behavior Section

// Behavioral Predictions
PsychologicalAssessment.stressTolerance → Stress Management
PsychologicalAssessment.leadershipPotential → Leadership Capability
PsychologicalAssessment.culturalAdaptability → Adaptation Timeline

// Integration Planning
CulturalAssessment.integrationTimelineDays → Timeline Visualization
CulturalAssessment.culturalTrainingNeeded → Training Plan
CulturalAssessment.mentorRequirements → Mentor Matching
```

**PDF Generation Implementation:**
```typescript
import jsPDF from 'jspdf'

async function generateCulturalReport(candidateId: string, language: 'en' | 'ja'): Promise<Blob> {
  // Fetch comprehensive data
  const candidate = await prisma.candidate.findUnique({
    where: { id: candidateId },
    include: {
      culturalAssessments: true,
      psychologicalAssessments: true,
      languageAssessments: true,
      professionalAssessments: true
    }
  })
  
  // Generate PDF with real data
  const doc = new jsPDF()
  
  // Page 1: Executive Summary
  doc.setFontSize(24)
  doc.text(reportLabels[language].title, 20, 30)
  doc.text(`${candidate.firstName} ${candidate.lastName}`, 20, 50)
  doc.text(`Overall Score: ${candidate.culturalAssessments[0].overallScore}%`, 20, 70)
  
  // Page 2: 47-Dimension Analysis
  // Implement radar chart generation
  
  // Page 3: Japanese Philosophy Alignment
  // Include Wa, Kaizen, Omotenashi scores
  
  // Page 4: Integration Timeline
  // Visual timeline with milestones
  
  // Page 5: Recommendations
  // Training plan and mentor assignment
  
  return doc.output('blob')
}
```

---

## **4. MARKET INTELLIGENCE DASHBOARD (.tsx)**

### **File: `/components/SAP/MarketIntelligence.tsx`**

**Database Fields for Market Data:**
```typescript
// Salary Benchmarking
MarketIntelligence.positionTitle → Job Position
MarketIntelligence.salaryMin, salaryMax → Salary Range
MarketIntelligence.region → Market Region (Japan/Indonesia)
MarketIntelligence.experienceLevel → Experience Level
MarketIntelligence.salaryCurrency → Currency

// Skill Demand Analysis
MarketIntelligence.skillName → Skill Category
MarketIntelligence.demandIndex → Demand Score (0-100)
MarketIntelligence.growthRate → Growth Percentage
MarketIntelligence.scarcityIndex → Scarcity Level
MarketIntelligence.supplyAvailability → Supply Level

// Competitor Analysis
MarketIntelligence.competitorName → Company Name
MarketIntelligence.hiringActivity → Hiring Volume
MarketIntelligence.salaryOffering → Competitor Salary
MarketIntelligence.culturalRequirements → Cultural Needs

// Real-Time Market Trends
SystemMetrics.metricValue → Market Trend Values
SystemMetrics.metricType → Trend Category
SystemMetrics.periodStart, periodEnd → Time Period
SystemMetrics.metricVariance → Change Percentage
```

**Interactive Features:**
```typescript
// Region Switching (Japan/Indonesia)
<RegionSelector 
  regions={['japan', 'indonesia', 'asia_pacific']}
  onRegionChange={(region) => {
    fetchMarketData(region) // Query MarketIntelligence WHERE region = selected
  }}
/>

// Salary Range Heat Map
<SalaryHeatMap
  data={salaryBenchmarks.map(item => ({
    position: item.positionTitle,
    min: item.salaryMin,
    max: item.salaryMax,
    average: (item.salaryMin + item.salaryMax) / 2
  }))}
/>

// Skill Demand Chart
<SkillDemandChart
  skills={skillDemandData.map(skill => ({
    name: skill.skillName,
    demand: skill.demandIndex,
    growth: skill.growthRate,
    scarcity: skill.scarcityIndex
  }))}
/>
```

---

## **5. CLIENT DASHBOARD (.tsx)**

### **File: `/components/SAP/ClientDashboard.tsx`**

**Client-Specific Data Filtering:**
```typescript
// Client can only see their own data
const clientData = await prisma.company.findUnique({
  where: { id: user.companyId },
  include: {
    jobPostings: {
      include: {
        applications: {
          include: {
            candidate: {
              include: {
                culturalAssessments: true,
                psychologicalAssessments: true
              }
            }
          }
        }
      }
    }
  }
})

// Dashboard Components Data Sources:
JobPosting.postingStatus → Active Job Postings Count
Application.applicationStatus → Application Pipeline Stages
Application.culturalFitScore → Cultural Match Quality
Application.overallMatchScore → Overall Candidate Quality
Interview Session.overallScore → Interview Performance
```

**Client Dashboard Features:**
```typescript
// Job Posting Management
<JobPostingManager
  jobs={clientData.jobPostings}
  onCreateJob={(jobData) => createJobPosting(clientData.id, jobData)}
  onUpdateJob={(jobId, updates) => updateJobPosting(jobId, updates)}
/>

// Candidate Pipeline
<CandidatePipeline
  stages={['applied', 'screening', 'interview', 'offer', 'hired']}
  candidates={applications.map(app => ({
    id: app.candidate.id,
    name: `${app.candidate.firstName} ${app.candidate.lastName}`,
    culturalFit: app.culturalFitScore,
    overallMatch: app.overallMatchScore,
    currentStage: app.currentStage
  }))}
/>

// Cultural Fit Filtering
<CulturalFitFilter
  threshold={culturalFitThreshold}
  onThresholdChange={(threshold) => {
    // Filter candidates by cultural fit score
    filterCandidatesByCulturalFit(threshold)
  }}
/>
```

---

## **6. RECRUITMENT PIPELINE DASHBOARD (.tsx)**

### **File: `/components/SAP/RecruitmentPipeline.tsx`**

**Pipeline Stage Data:**
```typescript
// Pipeline Stages from Database
Application.currentStage → Pipeline Stage Position
Application.stageUpdatedDate → Time in Current Stage
Application.candidateId → Candidate Information
Application.jobPostingId → Job Information

// Stage Conversion Calculations
const stageMetrics = {
  applied_to_screening: applications.filter(a => a.currentStage === 'screening').length / 
                       applications.filter(a => a.currentStage === 'applied').length,
  screening_to_interview: // Similar calculation
  interview_to_offer: // Similar calculation
  offer_to_hired: // Similar calculation
}

// Bottleneck Analysis
const avgTimeInStage = await prisma.application.groupBy({
  by: ['currentStage'],
  _avg: {
    stageUpdatedDate: true // Calculate average time in each stage
  }
})
```

**Kanban-Style Interface:**
```typescript
// Drag & Drop Pipeline
<PipelineKanban
  stages={[
    {
      id: 'applied',
      name: 'Applied',
      candidates: applicationsInStage('applied'),
      metrics: stageMetrics.applied
    },
    {
      id: 'screening', 
      name: 'Screening',
      candidates: applicationsInStage('screening'),
      metrics: stageMetrics.screening
    },
    // ... more stages
  ]}
  onCandidateMove={(candidateId, fromStage, toStage) => {
    updateApplicationStage(candidateId, toStage)
  }}
/>

// Performance Analytics
<PipelineAnalytics
  conversionRates={stageConversionRates}
  averageTimeInStage={avgTimeInStage}
  bottlenecks={identifiedBottlenecks}
  recruiterPerformance={recruiterMetrics}
/>
```

---

## **7. ONBOARDING TRACKER DASHBOARD (.tsx)**

### **File: `/components/SAP/OnboardingTracker.tsx`**

**Onboarding Progress Data:**
```typescript
// Onboarding Status Tracking
OnboardingRecord.onboardingStatus → Current Onboarding Phase
OnboardingRecord.day30CulturalAssessment → 30-Day Cultural Score
OnboardingRecord.day60CulturalAssessment → 60-Day Cultural Score  
OnboardingRecord.day90CulturalAssessment → 90-Day Cultural Score
OnboardingRecord.integrationScore → Overall Integration Progress

// Cultural Development Tracking
OnboardingRecord.culturalMentorSessions → Mentor Session Count
OnboardingRecord.culturalOrientationCompleted → Orientation Status
PerformanceReview.culturalAdaptationScore → Adaptation Progress
PerformanceReview.japaneseWorkplaceIntegration → Workplace Integration

// Success Prediction
PerformanceReview.retentionRisk → Retention Probability
OnboardingRecord.integrationScore → Success Prediction
```

**Onboarding Components:**
```typescript
// Integration Timeline
<OnboardingTimeline
  milestones={[
    { day: 1, task: 'First Day Orientation', status: onboardingRecord.day1Status },
    { day: 30, task: 'Cultural Assessment', score: onboardingRecord.day30CulturalAssessment },
    { day: 60, task: 'Integration Review', score: onboardingRecord.day60CulturalAssessment },
    { day: 90, task: 'Full Integration', score: onboardingRecord.day90CulturalAssessment }
  ]}
/>

// Cultural Mentor Progress
<CulturalMentorProgress
  sessionCount={onboardingRecord.culturalMentorSessions}
  mentorFeedback={mentorFeedbackData}
  integrationScore={onboardingRecord.integrationScore}
  nextSessionDate={nextMentorSession}
/>

// Success Metrics
<OnboardingSuccessMetrics
  retentionProbability={performanceReview.retentionRisk}
  culturalAdaptation={performanceReview.culturalAdaptationScore}
  performanceScore={performanceReview.overallPerformanceScore}
  interventionNeeded={interventionRecommendations}
/>
```

---

## **SHARED COMPONENTS & UTILITIES**

### **Language Toggle Component**
```typescript
// /components/SAP/LanguageToggle.tsx
export function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'ja'>('en')
  
  useEffect(() => {
    // Apply font family based on language
    document.documentElement.style.setProperty(
      '--font-family-primary',
      language === 'ja' ? 'var(--font-family-japanese)' : 'var(--font-family-english)'
    )
  }, [language])
  
  return (
    <div className="sap-language-toggle">
      <button 
        className={language === 'en' ? 'active' : ''}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <button 
        className={language === 'ja' ? 'active' : ''}
        onClick={() => setLanguage('ja')}
      >
        JP
      </button>
    </div>
  )
}
```

### **Base CSS Framework**
```css
/* /styles/SAP/fiori-base.css */
:root {
  /* Typography */
  --font-family-english: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-family-japanese: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Sans', sans-serif;
  --font-family-primary: var(--font-family-english);
  
  /* SAP Colors */
  --sap-brand-color: #0070F2;
  --sap-success-color: #30914C;
  --sap-warning-color: #E76500;
  --sap-error-color: #BB0000;
  --sap-background: #FAFAFA;
  --sap-card-background: #FFFFFF;
  --sap-border-color: #D5DAE0;
  --sap-text-primary: #32363A;
  --sap-text-secondary: #6A6D70;
}

/* Language-specific styling */
[lang="ja"] {
  --font-family-primary: var(--font-family-japanese);
}

/* Base component styles */
.sap-card {
  background: var(--sap-card-background);
  border: 1px solid var(--sap-border-color);
  border-radius: 4px;
  font-family: var(--font-family-primary);
}

.sap-title {
  font-family: var(--font-family-primary);
  font-size: 2rem;
  font-weight: 400;
  color: var(--sap-text-primary);
}
```

---

## **API ARCHITECTURE SUMMARY**

### **Required API Endpoints:**
```typescript
// Dashboard KPIs
GET /api/dashboard/enterprise-kpis
GET /api/dashboard/cultural-trends  
GET /api/dashboard/recent-matches
GET /api/dashboard/alerts

// Candidate Management
POST /api/candidates/analyze
GET /api/candidates/[id]/cultural-assessment
GET /api/candidates/[id]/job-matches
PUT /api/candidates/[id]/status

// Market Intelligence  
GET /api/market-intelligence/salary-benchmarks
GET /api/market-intelligence/skill-demand
GET /api/market-intelligence/competitor-analysis

// Client Management
GET /api/clients/[id]/dashboard
GET /api/clients/[id]/candidates
POST /api/clients/[id]/jobs

// Reports
POST /api/reports/cultural-assessment
POST /api/reports/market-intelligence
GET /api/reports/[id]/download

// Pipeline Management
GET /api/pipeline/stages
PUT /api/pipeline/move-candidate
GET /api/pipeline/analytics

// Onboarding
GET /api/onboarding/[candidateId]/progress
PUT /api/onboarding/[candidateId]/milestone
GET /api/onboarding/success-metrics
```

**Papa, this complete mapping gives Manus everything he needs to connect our comprehensive database to beautiful SAP-style dashboards with aiKODA's unique cultural intelligence!**