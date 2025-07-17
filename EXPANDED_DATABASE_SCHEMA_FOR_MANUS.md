# EXPANDED AIKODA DATABASE SCHEMA - COMPLETE SAP-STYLE IMPLEMENTATION

## **MANUS: REPLACE THE CURRENT PRISMA SCHEMA WITH THIS COMPREHENSIVE VERSION**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

// ===== AUTHENTICATION & USER MANAGEMENT =====
model Account {
  id                String  @id @default(cuid())
  userId            String  @map("user_id")
  type              String
  provider          String
  providerAccountId String  @map("provider_account_id")
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?
  user              User    @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique @map("session_token")
  userId       String   @map("user_id")
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  password      String?
  role          String    @default("CANDIDATE") // ADMIN, CLIENT, HR_MANAGER, CANDIDATE
  companyId     String?
  company       Company?  @relation(fields: [companyId], references: [id])
  accounts      Account[]
  sessions      Session[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// ===== ENHANCED CANDIDATE MODEL (SAP SUCCESSFACTORS STANDARD) =====
model Candidate {
  id                          String   @id @default(cuid())
  
  // Basic Personal Information
  firstName                   String
  lastName                    String
  middleName                  String?
  email                       String   @unique
  cellPhone                   String
  homePhone                   String?
  dateOfBirth                 DateTime
  nationality                 String
  gender                      String?
  maritalStatus              String?
  profilePictureUrl          String?
  
  // Address Information
  currentAddress             String
  permanentAddress           String?
  city                       String
  stateProvince              String
  postalCode                 String
  country                    String
  willingToRelocate          Boolean  @default(false)
  
  // Professional Background
  currentPosition            String
  currentCompany             String?
  currentSalary              Float?
  salaryExpectationMin       Float?
  salaryExpectationMax       Float?
  totalYearsExperience       Int
  industryExperience         String   // JSON array
  noticePeriod              String
  availabilityDate          DateTime
  workAuthorizationStatus   String
  visaType                  String?
  visaExpiryDate            DateTime?
  
  // Skills & Competencies (JSON Arrays)
  technicalSkills           String   // JSON array
  softSkills                String   // JSON array
  certifications            String   // JSON array
  languageProficiency       String   // JSON object with levels
  
  // Education Background (JSON Array)
  educationRecords          String   // JSON array of education entries
  
  // Cultural Intelligence Scores (aiKODA UNIQUE)
  culturalIntelligenceScore Float?
  behavioralAssessmentResults String? // JSON
  personalityType           String?
  workStylePreference       String?
  communicationStyle        String?
  teamCollaborationScore    Float?
  leadershipPotential       Float?
  adaptabilityScore         Float?
  stressToleranceLevel      Float?
  
  // Document Management
  resumeUrl                 String?
  portfolioUrl              String?
  certificatesUrls          String   // JSON array
  
  // Status Tracking
  candidateStatus           String   @default("REGISTERED")
  profileCompleteness       Float    @default(0)
  isAvailable              Boolean  @default(true)
  lastActivityDate         DateTime @default(now())
  
  createdAt                DateTime @default(now())
  updatedAt                DateTime @updatedAt
  
  // Relations
  culturalAssessments      CulturalAssessment[]
  psychologicalAssessments PsychologicalAssessment[]
  languageAssessments      LanguageAssessment[]
  professionalAssessments  ProfessionalAssessment[]
  applications             Application[]
  interviewSessions        InterviewSession[]
  onboardingRecords        OnboardingRecord[]
  performanceReviews       PerformanceReview[]
  statusHistory            CandidateStatusHistory[]
}

// ===== ENHANCED COMPANY MODEL (SAP STANDARD) =====
model Company {
  id                          String   @id @default(cuid())
  
  // Core Company Information
  companyLegalName           String
  companyTradeName           String?
  companyRegistrationNumber  String?
  taxIdentificationNumber    String?
  industryClassification     String
  subIndustryCategory        String?
  companySizeCategory        String
  annualRevenueRange         String?
  numberOfEmployees          Int?
  foundingYear              Int?
  companyStage              String
  
  // Geographic Information
  headquartersCountry       String
  headquartersCity          String
  headquartersAddress       String
  headquartersPostalCode    String
  primaryOperatingRegions   String   // JSON array
  internationalOffices      String   // JSON array
  targetExpansionMarkets    String   // JSON array
  
  // Business Profile
  businessModel             String
  primaryProductsServices   String   // JSON array
  uniqueValueProposition    String?
  targetCustomerSegments    String   // JSON array
  competitiveAdvantages     String   // JSON array
  marketPosition            String
  
  // Cultural Profile (aiKODA UNIQUE)
  companyCultureType        String
  workEnvironmentStyle      String
  communicationCulture      String
  decisionMakingStyle       String
  innovationApproach        String
  riskToleranceLevel        String
  
  // Japanese Cultural Alignment (aiKODA UNIQUE)
  japaneseCulturalOpenness  Float?
  waHarmonyCompanyScore     Float?
  kaizenImplementationLevel Float?
  omotenashiServiceScore    Float?
  hierarchicalRespectLevel  Float?
  nemawashiProcessAdoption  Float?
  ringiConsensusUsage       Float?
  
  // Work Policies
  remoteWorkPolicy          String
  flexibleHoursAvailable    Boolean  @default(false)
  workLifeBalancePriority   Float?
  employeeDevelopmentInvest Float?
  diversityInclusionScore   Float?
  
  // Contact Information
  primaryContactName        String
  primaryContactTitle       String
  primaryContactEmail       String   @unique
  primaryContactPhone       String
  primaryContactLinkedin    String?
  
  // Hiring Information
  urgentPositionsCount      Int      @default(0)
  plannedHiresNextQuarter   Int?
  plannedHiresNextYear      Int?
  hiringBudgetAnnual        Float?
  hiringUrgencyLevel        String
  preferredCandidateOrigins String   // JSON array
  criticalSkillGaps         String   // JSON array
  culturalFitPriorityScore  Float?
  
  createdAt                 DateTime @default(now())
  updatedAt                 DateTime @updatedAt
  
  // Relations
  jobPostings               JobPosting[]
  culturalAssessments       CulturalAssessment[]
  users                     User[]
  applications              Application[]
  interviewSessions         InterviewSession[]
  onboardingRecords         OnboardingRecord[]
  performanceReviews        PerformanceReview[]
}

// ===== ENHANCED JOB POSTING MODEL (SAP STANDARD) =====
model JobPosting {
  id                          String   @id @default(cuid())
  
  // Basic Job Information
  internalJobCode            String   @unique
  externalJobTitle           String
  internalJobTitle           String
  jobCategory                String
  jobFamily                  String
  jobLevel                   String
  employmentType             String
  workArrangement            String
  urgencyLevel               String
  postingStatus              String   @default("draft")
  targetStartDate            DateTime?
  applicationDeadline        DateTime?
  
  // Job Requirements
  minimumExperienceYears     Int
  maximumExperienceYears     Int?
  preferredExperienceYears   Int?
  requiredEducationLevel     String
  preferredEducationLevel    String?
  requiredDegreeField        String?
  professionalCertRequired   String   // JSON array
  professionalCertPreferred  String   // JSON array
  languageRequirements       String   // JSON object
  jlptLevelRequired         String?
  
  // Skills Requirements
  requiredTechnicalSkills    String   // JSON array
  preferredTechnicalSkills   String   // JSON array
  requiredSoftSkills         String   // JSON array
  leadershipSkillsRequired   String   // JSON array
  industryKnowledgeRequired  String   // JSON array
  toolsSoftwareRequired      String   // JSON array
  
  // Cultural Requirements (aiKODA UNIQUE)
  culturalIntelligenceMin    Float?
  waHarmonyRequirement       Float?
  kaizenMindsetRequirement   Float?
  omotenashiServiceRequirement Float?
  bushidoDedicationRequirement Float?
  communicationStylePref     String?
  hierarchyRespectRequirement Float?
  teamCollaborationRequired  Float?
  crossCulturalExpRequired   Boolean  @default(false)
  
  // Compensation & Benefits
  salaryRangeMinimum         Float
  salaryRangeMaximum         Float
  salaryCurrency             String   @default("JPY")
  salaryNegotiable           Boolean  @default(false)
  performanceBonusPercent    Float?
  annualBonusStructure       String?
  stockOptionsAvailable      Boolean  @default(false)
  equityPercentageOffered    Float?
  
  // Benefits Package
  healthInsuranceCoverage    String?
  dentalInsuranceIncluded    Boolean  @default(false)
  visionInsuranceIncluded    Boolean  @default(false)
  retirementPlanContrib      Float?
  paidTimeOffDays           Int?
  professionalDevBudget     Float?
  transportationAllowance   Float?
  housingAllowance          Float?
  visaSponsorshipAvailable  Boolean  @default(false)
  relocationAssistance      Boolean  @default(false)
  
  // Posting Configuration
  internalPostingEnabled     Boolean  @default(true)
  externalPostingEnabled     Boolean  @default(true)
  jobBoardPostingEnabled     Boolean  @default(true)
  linkedinPosting           Boolean  @default(false)
  indeedPosting             Boolean  @default(false)
  rikunabiPosting           Boolean  @default(false)
  mynaviPosting             Boolean  @default(false)
  dodaPosting               Boolean  @default(false)
  
  // Analytics
  totalApplicationsReceived  Int      @default(0)
  qualifiedApplicationsCount Int      @default(0)
  averageCulturalFitScore   Float?
  timeToFillDays            Int?
  costPerHire               Float?
  
  createdAt                 DateTime @default(now())
  updatedAt                 DateTime @updatedAt
  
  // Relations
  companyId                 String
  company                   Company  @relation(fields: [companyId], references: [id])
  applications              Application[]
  interviewSessions         InterviewSession[]
}

// ===== CULTURAL ASSESSMENT MODEL (aiKODA UNIQUE) =====
model CulturalAssessment {
  id                      String   @id @default(cuid())
  
  assessmentType          String   // personal, team, leadership, workplace
  assessmentVersion       String   @default("1.0")
  
  // 47-Dimension Scores (aiKODA UNIQUE)
  dimensionScores         String   // JSON object with all 47 dimensions
  
  // Japanese Philosophy Scores
  waHarmonyScore          Float
  kaizenImprovementScore  Float
  omotenashiServiceScore  Float
  bushidoDedicationScore  Float
  nemawashiConsensusScore Float
  ringiDecisionScore      Float
  kataRoutineScore        Float?
  ikigaiPurposeScore      Float?
  shokunin CraftsmanshipScore Float?
  
  // Workplace Behavior Scores
  communicationStyleScore Float
  hierarchyRespectScore   Float
  teamCollaborationScore  Float
  conflictResolutionScore Float
  timeOrientationScore    Float
  innovationMindsetScore  Float
  adaptabilityScore       Float
  crossCulturalCompetence Float
  digitalLiteracyScore    Float
  
  // Overall Results
  overallScore            Float
  primaryCulturalType     String
  secondaryCulturalType   String?
  topStrengths           String   // JSON array
  developmentAreas       String   // JSON array
  
  // Predictions (aiKODA AI)
  integrationTimelineDays Int?
  culturalFitPrediction   Float
  successProbability      Float
  retentionProbability    Float
  
  // Recommendations
  culturalTrainingNeeded  String   // JSON array
  mentorRequirements     String   // JSON object
  integrationPlan        String   // JSON array
  
  completedAt            DateTime @default(now())
  
  // Relations
  candidateId            String?
  candidate              Candidate? @relation(fields: [candidateId], references: [id])
  companyId              String?
  company                Company?   @relation(fields: [companyId], references: [id])
}

// ===== PSYCHOLOGICAL ASSESSMENT MODEL (aiKODA UNIQUE) =====
model PsychologicalAssessment {
  id                     String   @id @default(cuid())
  
  // Personality Assessment
  personalityType        String   // MBTI-style adapted for Japanese context
  stressTolerance        Float    // 0-100 scale
  motivationDrivers      String   // JSON array
  workStylePreference    String
  communicationPattern   String
  learningStyle          String
  decisionMakingStyle    String
  
  // Behavioral Predictions
  leadershipPotential    Float
  teamworkCompatibility Float
  innovationCapability   Float
  pressureHandling       Float
  adaptabilityIndex      Float
  
  // Cultural Context Scores
  culturalAdaptability   Float
  hierarchyComfort       Float
  consensusBuilding      Float
  harmonyPreference      Float
  
  overallPsychScore      Float
  assessmentNotes        String?
  
  completedAt           DateTime @default(now())
  
  // Relations
  candidateId           String
  candidate             Candidate @relation(fields: [candidateId], references: [id])
}

// ===== LANGUAGE ASSESSMENT MODEL =====
model LanguageAssessment {
  id                    String   @id @default(cuid())
  
  // Language Proficiency
  primaryLanguage       String
  englishLevel          String   // A1, A2, B1, B2, C1, C2
  englishScore          Float
  japaneseLevel         String   // N5, N4, N3, N2, N1
  japaneseScore         Float
  businessCommunication Float
  technicalEnglish      Float
  
  // Assessment Results
  speakingScore         Float
  listeningScore        Float
  readingScore          Float
  writingScore          Float
  
  // Cultural Communication
  culturalCommunication Float
  businessEtiquette     Float
  presentationSkills    Float
  
  overallLanguageScore  Float
  
  completedAt          DateTime @default(now())
  
  // Relations
  candidateId          String
  candidate            Candidate @relation(fields: [candidateId], references: [id])
}

// ===== PROFESSIONAL ASSESSMENT MODEL =====
model ProfessionalAssessment {
  id                      String   @id @default(cuid())
  
  // Technical Skills
  technicalScore          Float
  industryKnowledge       Float
  problemSolvingScore     Float
  toolMasteryScore        Float
  innovationScore         Float
  
  // Professional Competencies
  projectManagementScore  Float
  leadershipScore         Float
  strategicThinkingScore  Float
  analyticalThinkingScore Float
  creativityScore         Float
  
  // Assessment Details
  skillsAssessed          String   // JSON array
  testResults             String   // JSON object
  portfolioEvaluation     String?
  referenceChecks         String   // JSON array
  
  overallProfessionalScore Float
  
  completedAt            DateTime @default(now())
  
  // Relations
  candidateId            String
  candidate              Candidate @relation(fields: [candidateId], references: [id])
}

// ===== APPLICATION MODEL (ENHANCED) =====
model Application {
  id                    String   @id @default(cuid())
  
  applicationStatus     String   @default("pending")
  applicationSource     String?
  referralSource        String?
  
  // Matching Scores (aiKODA AI)
  overallMatchScore     Float?
  culturalFitScore      Float?
  skillsMatchScore      Float?
  experienceMatchScore  Float?
  salaryMatchScore      Float?
  
  // AI Analysis
  aiRecommendation      String?
  strengthsIdentified   String   // JSON array
  gapsIdentified        String   // JSON array
  improvementSuggestions String  // JSON array
  
  // Interview Process
  interviewStage        String?
  interviewFeedback     String?
  interviewScore        Float?
  
  // Status Tracking
  currentStage          String   @default("applied")
  stageUpdatedDate      DateTime @default(now())
  withdrawalReason      String?
  
  notes                 String?
  
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
  
  // Relations
  candidateId          String
  candidate            Candidate @relation(fields: [candidateId], references: [id])
  jobPostingId         String
  jobPosting           JobPosting @relation(fields: [jobPostingId], references: [id])
  companyId            String
  company              Company @relation(fields: [companyId], references: [id])
  interviewSessions    InterviewSession[]
  
  @@unique([candidateId, jobPostingId])
}

// ===== INTERVIEW SESSION MODEL =====
model InterviewSession {
  id                    String   @id @default(cuid())
  
  interviewRound        Int
  interviewType         String   // technical, cultural, hr, final
  scheduledDate         DateTime
  duration              Int      // minutes
  location              String?  // or virtual link
  
  // Participants
  interviewerIds        String   // JSON array
  interviewerFeedback   String?  // JSON object
  
  // Scores
  technicalScore        Float?
  culturalFitScore      Float?
  communicationScore    Float?
  overallScore          Float?
  
  // Feedback
  strengths             String?  // JSON array
  weaknesses            String?  // JSON array
  recommendation        String?
  notes                 String?
  
  interviewStatus       String   @default("scheduled")
  completedAt          DateTime?
  
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
  
  // Relations
  candidateId          String
  candidate            Candidate @relation(fields: [candidateId], references: [id])
  jobPostingId         String
  jobPosting           JobPosting @relation(fields: [jobPostingId], references: [id])
  applicationId        String
  application          Application @relation(fields: [applicationId], references: [id])
  companyId            String
  company              Company @relation(fields: [companyId], references: [id])
}

// ===== ONBOARDING MODEL =====
model OnboardingRecord {
  id                      String   @id @default(cuid())
  
  onboardingStartDate     DateTime
  expectedFirstDay        DateTime
  actualFirstDay          DateTime?
  onboardingStatus        String   @default("initiated")
  
  // Assignments
  buddyAssignedId         String?
  managerId               String?
  hrContactId             String?
  culturalMentorId        String?
  
  // Pre-boarding Data
  emergencyContactInfo    String?  // JSON
  taxInformation          String?  // JSON
  bankAccountDetails      String?  // JSON
  benefitsSelections      String?  // JSON
  i9VerificationStatus    String?
  eSignatureCompleted     Boolean  @default(false)
  
  // Documents
  documentsRequired       String?  // JSON array
  documentsSubmitted      String?  // JSON array
  documentVerificationStatus String?
  complianceTrainingCompleted Boolean @default(false)
  policyAcknowledgments   String?  // JSON array
  
  // Cultural Integration (aiKODA UNIQUE)
  culturalOrientationCompleted Boolean @default(false)
  day30CulturalAssessment Float?
  day60CulturalAssessment Float?
  day90CulturalAssessment Float?
  integrationScore        Float?
  culturalMentorSessions  Int      @default(0)
  
  // Equipment & Workspace
  equipmentRequests       String?  // JSON array
  workspaceAssignment     String?
  
  completionDate          DateTime?
  
  createdAt              DateTime @default(now())
  updatedAt              DateTime @updatedAt
  
  // Relations
  candidateId            String
  candidate              Candidate @relation(fields: [candidateId], references: [id])
  companyId              String
  company                Company @relation(fields: [companyId], references: [id])
}

// ===== PERFORMANCE REVIEW MODEL =====
model PerformanceReview {
  id                      String   @id @default(cuid())
  
  reviewPeriodStart       DateTime
  reviewPeriodEnd         DateTime
  reviewType              String   // quarterly, annual, cultural_assessment
  
  // Performance Scores
  overallPerformanceScore Float
  goalsAchievementScore   Float
  culturalFitScore        Float
  teamCollaborationScore  Float
  leadershipScore         Float?
  innovationScore         Float?
  
  // Cultural Integration (aiKODA UNIQUE)
  culturalAdaptationScore Float
  japaneseWorkplaceIntegration Float
  crossCulturalEffectiveness Float
  culturalMentorshipProgress Float?
  
  // Career Development
  careerPathDiscussion    String?
  skillDevelopmentNeeds   String   // JSON array
  promotionReadiness      Float?
  retentionRisk           String?
  
  // Feedback
  managerFeedback         String?
  peerFeedback           String?
  selfAssessment         String?
  developmentPlan        String?
  
  reviewStatus           String   @default("draft")
  reviewerIds            String   // JSON array
  
  completedAt           DateTime?
  
  createdAt             DateTime @default(now())
  updatedAt             DateTime @updatedAt
  
  // Relations
  candidateId           String
  candidate             Candidate @relation(fields: [candidateId], references: [id])
  companyId             String
  company               Company @relation(fields: [companyId], references: [id])
}

// ===== STATUS TRACKING MODEL =====
model CandidateStatusHistory {
  id              String   @id @default(cuid())
  
  statusFrom      String
  statusTo        String
  triggerEvent    String
  notes           String?
  
  timestamp       DateTime @default(now())
  
  // Relations
  candidateId     String
  candidate       Candidate @relation(fields: [candidateId], references: [id])
}

// ===== MARKET INTELLIGENCE MODEL (ENHANCED) =====
model MarketIntelligence {
  id                    String   @id @default(cuid())
  
  dataType              String   // salary_benchmark, skill_demand, competitor_move
  region                String   // japan, indonesia, asia_pacific
  industrySector        String
  
  // Salary Intelligence
  positionTitle         String?
  salaryMin             Float?
  salaryMax             Float?
  salaryAverage         Float?
  salaryCurrency        String?
  experienceLevel       String?
  
  // Skill Demand Intelligence
  skillName             String?
  demandIndex           Float?   // 0-100
  growthRate            Float?   // percentage
  scarcityIndex         Float?
  supplyAvailability    Float?
  
  // Competitor Intelligence
  competitorName        String?
  hiringActivity        Float?
  salaryOffering        Float?
  culturalRequirements  String?  // JSON array
  
  // Market Trends
  marketTrendDirection  String?
  demandGrowthPrediction Float?
  marketSaturation      Float?
  
  dataSource            String
  confidence            Float    // 0-100
  impact                String   // high, medium, low
  
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
  
  tags                 String   // JSON array
}

// ===== SYSTEM METRICS MODEL (ENHANCED) =====
model SystemMetrics {
  id              String   @id @default(cuid())
  
  metricCategory  String   // dashboard_kpi, performance, cultural_intelligence
  metricType      String   // total_candidates, cultural_match_avg, etc.
  metricValue     Float
  metricTarget    Float?
  metricVariance  Float?
  
  // Time Period
  periodType      String   // daily, weekly, monthly, quarterly
  periodStart     DateTime
  periodEnd       DateTime
  
  // Metadata
  calculationMethod String?
  dataSource       String?
  metadata         String? // JSON
  
  timestamp       DateTime @default(now())
  
  @@index([metricCategory, metricType, timestamp])
}

// ===== REPORT GENERATION MODEL =====
model ReportGeneration {
  id                String   @id @default(cuid())
  
  reportType        String   // cultural_assessment, market_intelligence, executive
  reportFormat      String   // pdf, excel, csv
  reportLanguage    String   // en, ja
  
  // Report Configuration
  includeDetails    Boolean  @default(true)
  confidential      Boolean  @default(true)
  brandingEnabled   Boolean  @default(true)
  
  // Generation Details
  generationStatus  String   @default("pending")
  fileUrl          String?
  fileSizeBytes    Int?
  
  // Recipients
  requestedBy       String
  recipientEmails   String   // JSON array
  
  generatedAt      DateTime?
  expiresAt        DateTime?
  
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
}

// Add indexes for performance
@@map("candidates")
@@map("companies") 
@@map("job_postings")
@@map("applications")
@@map("cultural_assessments")
```