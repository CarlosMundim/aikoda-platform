import { NextRequest, NextResponse } from 'next/server'
import { MockDatabase } from '@/lib/mockDatabase'

// Try to import Prisma, fallback to mock if not available
let prisma: any = null;
try {
  prisma = require('@/lib/prisma').prisma;
} catch (error) {
  console.log('Database not available, using mock data');
}

export async function GET(request: NextRequest) {
  try {
    if (prisma) {
      // Use real database
      const [
        totalCandidates,
        totalCompanies,
        activeAssessments,
        recentApplications,
        marketIntelligence,
        systemMetrics
      ] = await Promise.all([
        prisma.candidate.count(),
        prisma.company.count(),
        prisma.culturalAssessment.count({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
            }
          }
        }),
        prisma.application.count({
          where: {
            createdAt: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // Last 7 days
            }
          }
        }),
        prisma.marketIntelligence.findMany({
          take: 10,
          orderBy: { createdAt: 'desc' }
        }),
        prisma.systemMetrics.findMany({
          where: {
            metricType: 'system_performance',
            timestamp: {
              gte: new Date(Date.now() - 60 * 60 * 1000) // Last hour
            }
          },
          orderBy: { timestamp: 'desc' },
          take: 20
        })
      ])

      // Calculate cultural match average
      const culturalMatches = await prisma.culturalAssessment.aggregate({
        _avg: {
          overallScore: true
        }
      })

      // Get active job postings count
      const activeJobPostings = await prisma.jobPosting.count({
        where: { status: 'active' }
      })

      // Get real-time alerts (high impact market intelligence)
      const realTimeAlerts = await prisma.marketIntelligence.count({
        where: {
          impact: 'high',
          createdAt: {
            gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
          }
        }
      })

      return NextResponse.json({
        metrics: {
          totalCandidates,
          totalCompanies,
          activeAssessments,
          culturalMatches: culturalMatches._avg.overallScore || 0,
          marketIntelligence: marketIntelligence.length,
          realTimeAlerts,
          activeJobPostings,
          recentApplications
        },
        trends: {
          candidateGrowth: await calculateGrowthRate('candidate'),
          companyGrowth: await calculateGrowthRate('company'),
          assessmentActivity: systemMetrics.map((m: any) => ({
            time: m.timestamp,
            value: m.value
          }))
        },
        lastUpdated: new Date().toISOString()
      })
    } else {
      // Use mock database
      const metrics = await MockDatabase.getMetrics()
      return NextResponse.json({
        metrics,
        trends: {
          candidateGrowth: 15.7,
          companyGrowth: 8.3,
          assessmentActivity: []
        },
        lastUpdated: new Date().toISOString()
      })
    }
  } catch (error) {
    console.error('Error fetching dashboard metrics:', error)
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    )
  }
}

// Helper function to calculate growth rates
async function calculateGrowthRate(model: 'candidate' | 'company') {
  const now = new Date()
  const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  try {
    if (model === 'candidate') {
      const [thisWeek, lastWeekCount] = await Promise.all([
        prisma.candidate.count({
          where: {
            createdAt: {
              gte: lastWeek
            }
          }
        }),
        prisma.candidate.count({
          where: {
            createdAt: {
              gte: twoWeeksAgo,
              lt: lastWeek
            }
          }
        })
      ])

      if (lastWeekCount === 0) return thisWeek > 0 ? 100 : 0
      return ((thisWeek - lastWeekCount) / lastWeekCount) * 100
    } else {
      const [thisWeek, lastWeekCount] = await Promise.all([
        prisma.company.count({
          where: {
            createdAt: {
              gte: lastWeek
            }
          }
        }),
        prisma.company.count({
          where: {
            createdAt: {
              gte: twoWeeksAgo,
              lt: lastWeek
            }
          }
        })
      ])

      if (lastWeekCount === 0) return thisWeek > 0 ? 100 : 0
      return ((thisWeek - lastWeekCount) / lastWeekCount) * 100
    }
  } catch (error) {
    console.error(`Error calculating growth rate for ${model}:`, error)
    return 0
  }
}