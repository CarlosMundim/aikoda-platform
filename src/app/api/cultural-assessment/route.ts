import { NextRequest, NextResponse } from 'next/server';
import { culturalAI, CulturalAssessmentInput } from '@/lib/deepseek';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.candidateId || !body.responses || !body.targetCulture) {
      return NextResponse.json(
        { error: 'Missing required fields: candidateId, responses, targetCulture' },
        { status: 400 }
      );
    }

    const assessmentInput: CulturalAssessmentInput = {
      candidateId: body.candidateId,
      responses: body.responses,
      targetCulture: body.targetCulture,
      languages: body.languages || ['en']
    };

    // Process cultural assessment
    const result = await culturalAI.assessCulturalFit(assessmentInput);

    // Return results
    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('Cultural Assessment API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process cultural assessment' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Health check endpoint
  return NextResponse.json({
    status: 'healthy',
    service: 'cultural-assessment',
    timestamp: new Date().toISOString()
  });
}