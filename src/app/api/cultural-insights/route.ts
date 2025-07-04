import { NextRequest, NextResponse } from 'next/server';
import { culturalAI } from '@/lib/deepseek';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.culturalProfile || !body.targetMarket) {
      return NextResponse.json(
        { error: 'Missing required fields: culturalProfile, targetMarket' },
        { status: 400 }
      );
    }

    // Generate cultural insights
    const insights = await culturalAI.generateCulturalInsights(
      body.culturalProfile,
      body.targetMarket
    );

    // Return insights
    return NextResponse.json({
      success: true,
      data: {
        insights,
        targetMarket: body.targetMarket,
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Cultural Insights API Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate cultural insights' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Health check endpoint
  return NextResponse.json({
    status: 'healthy',
    service: 'cultural-insights',
    timestamp: new Date().toISOString()
  });
}