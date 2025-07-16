import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions, isAdmin, isClient } from '../../../lib/auth';
import { enterpriseReportGenerator, CandidateReportData, MarketIntelligenceData } from '../../../lib/report-generation-engine';
import { validateAndSanitize, reportRequestSchema, rateLimiter } from '../../../lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    // Authorization check
    if (!isAdmin(session.user.role) && !isClient(session.user.role)) {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      );
    }

    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || 'unknown';
    if (!rateLimiter.isAllowed(`reports:${session.user.id}:${clientIP}`, 20, 60 * 1000)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Input validation and sanitization
    const validation = validateAndSanitize(body, reportRequestSchema);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Invalid input', details: validation.error },
        { status: 400 }
      );
    }

    const { type, format, data } = validation.data;

    if (!type || !format || !data) {
      return NextResponse.json(
        { error: 'Missing required parameters: type, format, data' },
        { status: 400 }
      );
    }

    let fileBuffer: Uint8Array | string;
    let mimeType: string;
    let filename: string;

    switch (type) {
      case 'candidate':
        const candidateData = data as unknown as CandidateReportData;
        switch (format) {
          case 'pdf':
            fileBuffer = await enterpriseReportGenerator.generateCandidateReportPDF(candidateData);
            mimeType = 'application/pdf';
            filename = `candidate-report-${candidateData.candidate.id}-${new Date().toISOString().split('T')[0]}.pdf`;
            break;
          case 'csv':
            fileBuffer = enterpriseReportGenerator.generateCandidateReportCSV(candidateData);
            mimeType = 'text/csv';
            filename = `candidate-report-${candidateData.candidate.id}-${new Date().toISOString().split('T')[0]}.csv`;
            break;
          case 'excel':
            fileBuffer = enterpriseReportGenerator.generateCandidateReportExcel(candidateData);
            mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            filename = `candidate-report-${candidateData.candidate.id}-${new Date().toISOString().split('T')[0]}.xlsx`;
            break;
          default:
            return NextResponse.json({ error: 'Unsupported format' }, { status: 400 });
        }
        break;

      case 'market-intelligence':
        const marketData = data as unknown as MarketIntelligenceData;
        switch (format) {
          case 'pdf':
            fileBuffer = await enterpriseReportGenerator.generateMarketIntelligenceReportPDF(marketData);
            mimeType = 'application/pdf';
            filename = `market-intelligence-${marketData.region}-${marketData.period}-${new Date().toISOString().split('T')[0]}.pdf`;
            break;
          case 'excel':
            fileBuffer = enterpriseReportGenerator.generateMarketIntelligenceReportExcel(marketData);
            mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            filename = `market-intelligence-${marketData.region}-${marketData.period}-${new Date().toISOString().split('T')[0]}.xlsx`;
            break;
          default:
            return NextResponse.json({ error: 'Unsupported format for market intelligence' }, { status: 400 });
        }
        break;

      case 'batch-comparison':
        const batchData = data as unknown as CandidateReportData[];
        if (format === 'excel') {
          fileBuffer = enterpriseReportGenerator.generateBatchComparisonReportExcel(batchData);
          mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          filename = `batch-comparison-${new Date().toISOString().split('T')[0]}.xlsx`;
        } else {
          return NextResponse.json({ error: 'Only Excel format supported for batch comparison' }, { status: 400 });
        }
        break;

      default:
        return NextResponse.json({ error: 'Unsupported report type' }, { status: 400 });
    }

    // Return file as response
    const response = new NextResponse(fileBuffer as BodyInit);
    response.headers.set('Content-Type', mimeType);
    response.headers.set('Content-Disposition', `attachment; filename="${filename}"`);
    response.headers.set('Cache-Control', 'no-cache');
    
    return response;

  } catch (error) {
    console.error('Report generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate report', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (type === 'sample-data') {
      // Return sample data structure for testing
      const sampleCandidateData: Partial<CandidateReportData> = {
        candidate: {
          id: 'CAND-001',
          name: '田中太郎',
          nameEn: 'Taro Tanaka',
          email: 'tanaka@example.com',
          phone: '+81-90-1234-5678',
          position: 'シニアソフトウェアエンジニア',
          experience: '5年',
          skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
          education: '東京大学 情報工学部',
          languages: ['日本語 (ネイティブ)', 'English (Business)']
        },
        company: {
          id: 'COMP-001',
          name: 'テックコープ・ジャパン',
          industry: 'テクノロジー',
          position: 'シニアソフトウェアエンジニア',
          requirements: ['React経験3年以上', 'チームリーダー経験', '日本語ビジネスレベル']
        },
        overallRecommendation: {
          fitScore: 87,
          recommendation: 'Highly Recommended' as const,
          reasoning: [
            '優れた技術スキルと文化適応性',
            '強いチームワークと協調性',
            '継続的な学習意欲と成長志向'
          ],
          nextSteps: [
            '最終面接の実施',
            '技術的な実技テスト',
            'チームとの適合性確認'
          ],
          riskFactors: ['特になし'],
          timeline: '2-3週間で決定可能'
        },
        assessmentDate: '2025-01-15',
        reportGenerated: new Date().toISOString()
      };

      const sampleMarketData: Partial<MarketIntelligenceData> = {
        period: '2025 Q1',
        region: 'Tokyo' as const,
        industry: 'Technology',
        metrics: {
          totalCandidates: 1247,
          successfulPlacements: 156,
          averageCulturalFit: 78.5,
          averagePsychologicalFit: 82.3,
          topSkillsInDemand: [
            { skill: 'React', demand: 95, growth: 15 },
            { skill: 'Python', demand: 88, growth: 12 },
            { skill: 'AWS', demand: 92, growth: 18 },
            { skill: 'TypeScript', demand: 85, growth: 22 }
          ],
          salaryRanges: [
            { level: 'Junior', min: 4000000, max: 6000000, currency: 'JPY' },
            { level: 'Senior', min: 7000000, max: 10000000, currency: 'JPY' },
            { level: 'Lead', min: 10000000, max: 15000000, currency: 'JPY' }
          ],
          culturalTrends: [
            { philosophy: 'Wa (Harmony)', importance: 0.95, change: 5 },
            { philosophy: 'Kaizen', importance: 0.90, change: 8 },
            { philosophy: 'Digital Adaptation', importance: 0.85, change: 25 }
          ],
          timeToPlacement: 45,
          clientSatisfaction: 94.2
        },
        insights: {
          keyFindings: [
            'Remote work acceptance increasing by 25%',
            'Cultural adaptability becoming more valued than pure technical skills',
            'Demand for AI/ML skills growing rapidly in traditional companies'
          ],
          marketTrends: [
            'Shift towards hybrid work models',
            'Increased focus on cultural intelligence',
            'Growing importance of continuous learning mindset'
          ],
          recommendations: [
            'Invest in cultural assessment capabilities',
            'Develop remote work integration programs',
            'Strengthen AI/ML skill development partnerships'
          ],
          riskFactors: [
            'Talent shortage in specialized AI roles',
            'Increasing salary expectations',
            'Competition from global remote opportunities'
          ],
          opportunities: [
            'Expansion into Osaka and Kyoto markets',
            'Development of niche AI consulting services',
            'Partnership with universities for graduate recruitment'
          ]
        },
        benchmarks: {
          industryAverages: {
            culturalFit: 75.0,
            psychologicalFit: 78.0,
            timeToPlacement: 52,
            clientSatisfaction: 89.5
          },
          competitorAnalysis: [
            { metric: 'Cultural Fit Score', ourPerformance: 78.5, industry: 75.0 },
            { metric: 'Time to Placement', ourPerformance: 45, industry: 52 },
            { metric: 'Client Satisfaction', ourPerformance: 94.2, industry: 89.5 }
          ],
          performanceIndicators: [
            { kpi: 'Cultural Fit Score', value: 78.5, target: 80.0, status: 'Above Target' },
            { kpi: 'Placement Success Rate', value: 12.5, target: 15.0, status: 'Below Target' },
            { kpi: 'Client Retention', value: 94.2, target: 90.0, status: 'Above Target' }
          ]
        }
      };

      return NextResponse.json({
        sampleCandidateData,
        sampleMarketData,
        supportedFormats: {
          candidate: ['pdf', 'csv', 'excel'],
          'market-intelligence': ['pdf', 'excel'],
          'batch-comparison': ['excel']
        }
      });
    }

    return NextResponse.json({
      message: 'Professional Report Generation API',
      endpoints: [
        'POST /api/reports - Generate reports',
        'GET /api/reports?type=sample-data - Get sample data structures'
      ],
      supportedTypes: ['candidate', 'market-intelligence', 'batch-comparison'],
      supportedFormats: ['pdf', 'csv', 'excel']
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'API error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}