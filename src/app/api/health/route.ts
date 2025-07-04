import { NextRequest, NextResponse } from 'next/server';
import { culturalAI } from '@/lib/deepseek';

export async function GET(request: NextRequest) {
  try {
    // Check API key validity
    const apiKeyValid = await culturalAI.validateApiKey();
    
    const healthStatus = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        application: 'operational',
        deepseek_api: apiKeyValid ? 'operational' : 'requires_credit',
        database: 'pending_connection',
        redis: 'pending_connection'
      },
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    };

    return NextResponse.json(healthStatus);
  } catch (error) {
    console.error('Health Check Error:', error);
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Service health check failed'
      },
      { status: 500 }
    );
  }
}