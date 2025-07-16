import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.application.deleteMany({});
  await prisma.jobPosting.deleteMany({});
  await prisma.culturalAssessment.deleteMany({});
  await prisma.marketIntelligence.deleteMany({});
  await prisma.systemMetrics.deleteMany({});
  await prisma.candidate.deleteMany({});
  await prisma.company.deleteMany({});

  // Seed Companies (fantasy names)
  const companies = await Promise.all([
    prisma.company.create({
      data: {
        companyName: "Phoenix Technologies KK",
        industry: "Technology / IT",
        companySize: "201-500 employees",
        headquarters: "Japan",
        website: "https://phoenix-tech.jp",
        foundedYear: "2018",
        contactPerson: "田中 健二",
        contactTitle: "人事部長",
        contactEmail: "hr@phoenix-tech.jp",
        contactPhone: "+81-3-5555-0001",
        businessDescription: "革新的なAIソリューションとクラウドサービスを提供するテクノロジー企業",
        targetMarkets: JSON.stringify(["Domestic Market", "Southeast Asia"]),
        currentChallenges: JSON.stringify(["Talent Shortage", "Cross-cultural Training"]),
        hiringNeeds: JSON.stringify(["Software Engineers", "Data Scientists", "Project Managers"]),
        workCulture: "modern",
        communicationStyle: "direct",
        managementStyle: "collaborative",
        remoteWorkPolicy: "hybrid",
        urgentPositions: "Senior Software Engineer, Data Scientist",
        budgetRange: "500k-1m",
        preferredCandidateOrigin: JSON.stringify(["Japan", "Indonesia", "Philippines"]),
        specialRequirements: "JLPT N2以上、AWS認定資格優遇"
      }
    }),
    prisma.company.create({
      data: {
        companyName: "Dragon Innovations Ltd",
        industry: "Manufacturing",
        companySize: "1000-5000 employees",
        headquarters: "Japan",
        website: "https://dragon-innovations.com",
        foundedYear: "2010",
        contactPerson: "佐藤 美咲",
        contactTitle: "グローバル人事マネージャー",
        contactEmail: "global-hr@dragon-innovations.com",
        contactPhone: "+81-6-4444-0002",
        businessDescription: "精密機械と自動化ソリューションの製造業界リーダー",
        targetMarkets: JSON.stringify(["Global Market", "Southeast Asia"]),
        currentChallenges: JSON.stringify(["Language Barriers", "Quality Control"]),
        hiringNeeds: JSON.stringify(["Manufacturing Workers", "Quality Assurance", "Engineers"]),
        workCulture: "traditional",
        communicationStyle: "formal",
        managementStyle: "hierarchical",
        remoteWorkPolicy: "office-first",
        urgentPositions: "Quality Control Specialist, Production Engineer",
        budgetRange: "200k-500k",
        preferredCandidateOrigin: JSON.stringify(["Japan", "Vietnam", "Thailand"]),
        specialRequirements: "製造業経験3年以上、品質管理資格保持者優遇"
      }
    }),
    prisma.company.create({
      data: {
        companyName: "Sakura Digital Solutions",
        industry: "Consulting",
        companySize: "51-200 employees",
        headquarters: "Japan",
        website: "https://sakura-digital.co.jp",
        foundedYear: "2020",
        contactPerson: "山田 拓也",
        contactTitle: "採用責任者",
        contactEmail: "recruitment@sakura-digital.co.jp",
        contactPhone: "+81-3-6666-0003",
        businessDescription: "デジタル変革とビジネスコンサルティングの専門企業",
        targetMarkets: JSON.stringify(["Domestic Market", "East Asia"]),
        currentChallenges: JSON.stringify(["Skill Gap", "Remote Work Management"]),
        hiringNeeds: JSON.stringify(["Business Analysts", "Digital Marketing", "Consultants"]),
        workCulture: "startup",
        communicationStyle: "casual",
        managementStyle: "autonomous",
        remoteWorkPolicy: "fully-remote",
        urgentPositions: "Senior Business Analyst, Digital Marketing Specialist",
        budgetRange: "1m-2m",
        preferredCandidateOrigin: JSON.stringify(["Japan", "Korea", "Singapore"]),
        specialRequirements: "MBA優遇、コンサルティング経験2年以上"
      }
    })
  ]);

  // Seed Candidates
  const candidates = await Promise.all([
    prisma.candidate.create({
      data: {
        firstName: "Andi",
        lastName: "Pratama",
        email: "andi.pratama@email.com",
        phone: "+62-21-555-0001",
        dateOfBirth: new Date("1995-03-15"),
        nationality: "Indonesia",
        currentLocation: "Jakarta, Indonesia",
        currentPosition: "Senior Software Engineer",
        experience: "4-5",
        education: "bachelor",
        skills: JSON.stringify(["JavaScript", "Python", "React", "AWS", "Docker"]),
        languages: JSON.stringify(["id", "en", "ja"]),
        preferredLocation: "Japan",
        salaryExpectation: "50000-70000",
        availabilityDate: new Date("2024-09-01"),
        workType: "full-time"
      }
    }),
    prisma.candidate.create({
      data: {
        firstName: "Maria",
        lastName: "Santos",
        email: "maria.santos@email.com",
        phone: "+63-2-555-0002",
        dateOfBirth: new Date("1992-07-22"),
        nationality: "Philippines",
        currentLocation: "Manila, Philippines",
        currentPosition: "Data Scientist",
        experience: "6-10",
        education: "master",
        skills: JSON.stringify(["Python", "Machine Learning", "Data Analysis", "SQL"]),
        languages: JSON.stringify(["en", "ja"]),
        preferredLocation: "Japan",
        salaryExpectation: "70000-100000",
        availabilityDate: new Date("2024-08-15"),
        workType: "hybrid"
      }
    }),
    prisma.candidate.create({
      data: {
        firstName: "Nguyen",
        lastName: "Minh",
        email: "nguyen.minh@email.com",
        phone: "+84-28-555-0003",
        dateOfBirth: new Date("1990-11-08"),
        nationality: "Vietnam",
        currentLocation: "Ho Chi Minh City, Vietnam",
        currentPosition: "Quality Assurance Manager",
        experience: "6-10",
        education: "bachelor",
        skills: JSON.stringify(["Quality Control", "Manufacturing", "Project Management"]),
        languages: JSON.stringify(["vi", "en", "ja"]),
        preferredLocation: "Japan",
        salaryExpectation: "30000-50000",
        availabilityDate: new Date("2024-10-01"),
        workType: "full-time"
      }
    })
  ]);

  console.log(`Database seeded successfully!`)
  console.log(`Created ${companies.length} companies`)
  console.log(`Created ${candidates.length} candidates`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })