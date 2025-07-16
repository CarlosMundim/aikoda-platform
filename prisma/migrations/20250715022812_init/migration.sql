-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "companySize" TEXT NOT NULL,
    "headquarters" TEXT NOT NULL,
    "website" TEXT,
    "foundedYear" TEXT,
    "contactPerson" TEXT NOT NULL,
    "contactTitle" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "businessDescription" TEXT NOT NULL,
    "targetMarkets" TEXT NOT NULL,
    "currentChallenges" TEXT NOT NULL,
    "hiringNeeds" TEXT NOT NULL,
    "workCulture" TEXT NOT NULL,
    "communicationStyle" TEXT NOT NULL,
    "managementStyle" TEXT NOT NULL,
    "remoteWorkPolicy" TEXT NOT NULL,
    "urgentPositions" TEXT,
    "budgetRange" TEXT NOT NULL,
    "preferredCandidateOrigin" TEXT NOT NULL,
    "specialRequirements" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "nationality" TEXT NOT NULL,
    "currentLocation" TEXT NOT NULL,
    "currentPosition" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "education" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "preferredLocation" TEXT NOT NULL,
    "salaryExpectation" TEXT NOT NULL,
    "availabilityDate" DATETIME NOT NULL,
    "workType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CulturalAssessment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "assessmentType" TEXT NOT NULL,
    "responses" JSONB NOT NULL,
    "overallScore" REAL NOT NULL,
    "primaryCulture" TEXT NOT NULL,
    "secondaryCulture" TEXT NOT NULL,
    "topStrengths" TEXT NOT NULL,
    "developmentAreas" TEXT NOT NULL,
    "dimensionScores" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "candidateId" TEXT,
    "companyId" TEXT,
    CONSTRAINT "CulturalAssessment_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "CulturalAssessment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobPosting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salaryRange" TEXT NOT NULL,
    "workType" TEXT NOT NULL,
    "urgency" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "JobPosting_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "matchScore" REAL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "candidateId" TEXT NOT NULL,
    "jobPostingId" TEXT NOT NULL,
    CONSTRAINT "Application_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Application_jobPostingId_fkey" FOREIGN KEY ("jobPostingId") REFERENCES "JobPosting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MarketIntelligence" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "impact" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "confidence" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tags" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SystemMetrics" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "metricType" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "metadata" JSONB,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_contactEmail_key" ON "Company"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Candidate_email_key" ON "Candidate"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Application_candidateId_jobPostingId_key" ON "Application"("candidateId", "jobPostingId");

-- CreateIndex
CREATE INDEX "SystemMetrics_metricType_timestamp_idx" ON "SystemMetrics"("metricType", "timestamp");
