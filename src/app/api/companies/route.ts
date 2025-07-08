import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/database';

// GET /api/companies - Fetch all companies
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    // Try to get from database first, fallback to mock data
    const companies = await db.getAllCompanies();
    
    // Apply pagination
    const paginatedCompanies = companies.slice(offset, offset + limit);
    
    return NextResponse.json({
      companies: paginatedCompanies,
      total: companies.length,
      limit,
      offset
    });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch companies' },
      { status: 500 }
    );
  }
}

// POST /api/companies - Create new company
export async function POST(request: NextRequest) {
  try {
    const companyData = await request.json();
    
    // Validate required fields
    if (!companyData.name || !companyData.industry) {
      return NextResponse.json(
        { error: 'Company name and industry are required' },
        { status: 400 }
      );
    }
    
    // Set default values
    const company = {
      name: companyData.name,
      industry: companyData.industry,
      size: companyData.size || 'Medium',
      location: companyData.location || { country: 'Japan', city: 'Tokyo' },
      cultural_profile: companyData.cultural_profile || {
        hofstede_dimensions: {
          power_distance: 70,
          individualism: 30,
          uncertainty_avoidance: 85,
          masculinity: 75,
          long_term_orientation: 90,
          indulgence: 40
        },
        work_culture: 'Japanese business culture',
        communication_style: 'Hierarchical yet collaborative'
      },
      requirements: companyData.requirements || {
        languages: ['Japanese', 'English'],
        experience_years: 3,
        cultural_fit_threshold: 80,
        skills: ['Technical expertise', 'Cultural adaptability']
      },
      ...companyData
    };
    
    // Try to save to database, fallback to mock creation
    try {
      const newCompany = await db.createCompany(company);
      return NextResponse.json(newCompany, { status: 201 });
    } catch (dbError) {
      console.warn('Database not available, returning mock response');
      const mockCompany = {
        id: `comp-${Date.now()}`,
        ...company,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      return NextResponse.json(mockCompany, { status: 201 });
    }
  } catch (error) {
    console.error('Error creating company:', error);
    return NextResponse.json(
      { error: 'Failed to create company' },
      { status: 500 }
    );
  }
}