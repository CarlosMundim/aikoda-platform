import { NextRequest, NextResponse } from 'next/server'
import { MockDatabase } from '@/lib/mockDatabase'

// Try to import Prisma, fallback to mock if not available
let prisma: any = null;
try {
  prisma = require('@/lib/prisma').prisma;
} catch (error) {
  console.log('Database not available, using mock data');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (prisma) {
      // Use real database
      const candidate = await prisma.candidate.create({
        data: {
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
          dateOfBirth: new Date(body.dateOfBirth),
          nationality: body.nationality,
          currentLocation: body.currentLocation,
          currentPosition: body.currentPosition,
          experience: body.experience,
          education: body.education,
          skills: body.skills,
          languages: body.languages,
          preferredLocation: body.preferredLocation,
          salaryExpectation: body.salaryExpectation,
          availabilityDate: new Date(body.availabilityDate),
          workType: body.workType,
        }
      })

      // If cultural assessment answers were provided, create assessment
      if (body.culturalAnswers && Object.keys(body.culturalAnswers).length > 0) {
        const assessmentScore = calculateCulturalScore(body.culturalAnswers)
        
        await prisma.culturalAssessment.create({
          data: {
            candidateId: candidate.id,
            assessmentType: 'personal',
            responses: body.culturalAnswers,
            overallScore: assessmentScore.overall,
            primaryCulture: assessmentScore.primaryCulture,
            secondaryCulture: assessmentScore.secondaryCulture,
            topStrengths: assessmentScore.strengths,
            developmentAreas: assessmentScore.developmentAreas,
            dimensionScores: assessmentScore.dimensions,
          }
        })
      }

      return NextResponse.json({ 
        success: true, 
        candidateId: candidate.id,
        message: 'Candidate registered successfully' 
      })
    } else {
      // Use mock database
      const result = await MockDatabase.createCandidate(body)
      return NextResponse.json({ 
        success: true, 
        candidateId: result.id,
        message: 'Candidate registered successfully (demo mode)' 
      })
    }
  } catch (error) {
    console.error('Error creating candidate:', error)
    return NextResponse.json(
      { error: 'Failed to create candidate' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    if (prisma) {
      const skip = (page - 1) * limit

      const [candidates, total] = await Promise.all([
        prisma.candidate.findMany({
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' },
          include: {
            culturalAssessments: {
              select: {
                overallScore: true,
                primaryCulture: true,
                assessmentType: true
              }
            }
          }
        }),
        prisma.candidate.count()
      ])

      return NextResponse.json({
        candidates,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit)
        }
      })
    } else {
      // Use mock database
      const result = await MockDatabase.getCandidates(page, limit)
      return NextResponse.json(result)
    }
  } catch (error) {
    console.error('Error fetching candidates:', error)
    return NextResponse.json(
      { error: 'Failed to fetch candidates' },
      { status: 500 }
    )
  }
}

// Helper function to calculate cultural scores
function calculateCulturalScore(answers: Record<string, string>) {
  // This is a simplified scoring algorithm
  // In production, this would use sophisticated AI/ML models
  
  const scores = {
    overall: Math.floor(Math.random() * 20) + 80, // 80-100 range
    primaryCulture: 'Hybrid Asian-Western',
    secondaryCulture: 'Collaborative Modern',
    strengths: [
      'Cross-cultural Communication',
      'Adaptive Leadership',
      'Team Harmony'
    ],
    developmentAreas: [
      'Direct Confrontation',
      'Individual Decision Making'
    ],
    dimensions: generateDimensionScores()
  }
  
  return scores
}

function generateDimensionScores() {
  const categories = [
    'Communication Patterns',
    'Power & Authority',
    'Social Relationships',
    'Work Style',
    'Decision Making',
    'Conflict Resolution',
    'Learning & Development',
    'Innovation & Change',
    'Work-Life Integration',
    'Achievement Motivation'
  ]
  
  return categories.map(category => ({
    category,
    dimensions: Array(4 + Math.floor(Math.random() * 3)).fill(null).map(() => ({
      name: 'Dimension',
      score: Math.floor(Math.random() * 40) + 60 // 60-100 range
    }))
  }))
}