import { NextRequest, NextResponse } from 'next/server';
import { aiService } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { answers, candidateProfile } = body;
    
    if (!answers) {
      return NextResponse.json(
        { error: 'Assessment answers are required' },
        { status: 400 }
      );
    }

    // Process cultural assessment using AI
    const result = await aiService.processCulturalAssessment({
      answers,
      candidateProfile
    });

    return NextResponse.json({
      success: true,
      data: result,
      timestamp: new Date().toISOString(),
      provider: 'aiKODA Intelligence Engine'
    });

  } catch (error) {
    console.error('Cultural Assessment API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process cultural assessment',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Test AI connectivity
    const connectionTest = await aiService.testConnection();
    
    return NextResponse.json({
      status: 'aiKODA Intelligence Engine Online',
      ai: connectionTest,
      version: '2.0',
      capabilities: [
        '47-Dimensional Cultural Analysis',
        'Real-time Assessment Processing',
        'Japanese Business Culture Expertise',
        'Multi-Provider AI Support'
      ],
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Service health check failed' },
      { status: 500 }
    );
  }
}