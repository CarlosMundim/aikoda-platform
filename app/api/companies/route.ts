import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Create company in database
    const company = await prisma.company.create({
      data: {
        companyName: body.companyName,
        industry: body.industry,
        companySize: body.companySize,
        headquarters: body.headquarters,
        website: body.website || null,
        foundedYear: body.foundedYear || null,
        contactPerson: body.contactPerson,
        contactTitle: body.contactTitle,
        contactEmail: body.contactEmail,
        contactPhone: body.contactPhone,
        businessDescription: body.businessDescription,
        targetMarkets: body.targetMarkets,
        currentChallenges: body.currentChallenges,
        hiringNeeds: body.hiringNeeds,
        workCulture: body.workCulture,
        communicationStyle: body.communicationStyle,
        managementStyle: body.managementStyle,
        remoteWorkPolicy: body.remoteWorkPolicy,
        urgentPositions: body.urgentPositions || null,
        budgetRange: body.budgetRange,
        preferredCandidateOrigin: body.preferredCandidateOrigin,
        specialRequirements: body.specialRequirements || null,
      }
    })

    // Create initial job postings if urgent positions were specified
    if (body.urgentPositions) {
      const positions = body.urgentPositions.split(',').map((p: string) => p.trim())
      
      for (const position of positions) {
        await prisma.jobPosting.create({
          data: {
            companyId: company.id,
            title: position,
            description: `Urgent hiring for ${position} at ${company.companyName}`,
            requirements: body.hiringNeeds,
            location: body.headquarters,
            salaryRange: body.budgetRange,
            workType: body.remoteWorkPolicy,
            urgency: 'high'
          }
        })
      }
    }

    return NextResponse.json({ 
      success: true, 
      companyId: company.id,
      message: 'Company registered successfully' 
    })
  } catch (error) {
    console.error('Error creating company:', error)
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const skip = (page - 1) * limit

    const [companies, total] = await Promise.all([
      prisma.company.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          jobPostings: {
            where: { status: 'active' },
            select: {
              id: true,
              title: true,
              urgency: true,
              location: true
            }
          },
          _count: {
            select: {
              jobPostings: true,
              culturalAssessments: true
            }
          }
        }
      }),
      prisma.company.count()
    ])

    return NextResponse.json({
      companies,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching companies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    )
  }
}