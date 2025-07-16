// Mock database functionality for demo deployment
// Replace this with real database when PostgreSQL is configured

export interface MockCandidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  nationality: string;
  currentPosition: string;
  experience: string;
  skills: string[];
  culturalScore?: number;
}

export interface MockCompany {
  id: string;
  companyName: string;
  industry: string;
  contactEmail: string;
  hiringNeeds: string[];
}

export interface MockMetrics {
  totalCandidates: number;
  totalCompanies: number;
  activeAssessments: number;
  culturalMatches: number;
  marketIntelligence: number;
  realTimeAlerts: number;
  activeJobPostings: number;
  recentApplications: number;
}

// Mock data storage
let mockCandidates: MockCandidate[] = [
  {
    id: 'cnd_001',
    firstName: 'Andi',
    lastName: 'Pratama',
    email: 'andi.pratama@email.com',
    phone: '+62-21-555-0001',
    nationality: 'Indonesia',
    currentPosition: 'Senior Software Engineer',
    experience: '4-5',
    skills: ['JavaScript', 'Python', 'React', 'AWS'],
    culturalScore: 87.5
  },
  {
    id: 'cnd_002',
    firstName: 'Maria',
    lastName: 'Santos',
    email: 'maria.santos@email.com',
    phone: '+63-2-555-0002',
    nationality: 'Philippines',
    currentPosition: 'Data Scientist',
    experience: '6-10',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    culturalScore: 92.1
  },
  {
    id: 'cnd_003',
    firstName: 'Nguyen',
    lastName: 'Minh',
    email: 'nguyen.minh@email.com',
    phone: '+84-28-555-0003',
    nationality: 'Vietnam',
    currentPosition: 'Quality Assurance Manager',
    experience: '6-10',
    skills: ['Quality Control', 'Manufacturing', 'Project Management'],
    culturalScore: 89.3
  }
];

let mockCompanies: MockCompany[] = [
  {
    id: 'cmp_001',
    companyName: 'Phoenix Technologies KK',
    industry: 'Technology / IT',
    contactEmail: 'hr@phoenix-tech.jp',
    hiringNeeds: ['Software Engineers', 'Data Scientists']
  },
  {
    id: 'cmp_002',
    companyName: 'Dragon Innovations Ltd',
    industry: 'Manufacturing',
    contactEmail: 'global-hr@dragon-innovations.com',
    hiringNeeds: ['Manufacturing Workers', 'Quality Assurance']
  },
  {
    id: 'cmp_003',
    companyName: 'Sakura Digital Solutions',
    industry: 'Consulting',
    contactEmail: 'recruitment@sakura-digital.co.jp',
    hiringNeeds: ['Business Analysts', 'Digital Marketing']
  }
];

export class MockDatabase {
  static async createCandidate(data: any): Promise<{ id: string; success: boolean }> {
    const newCandidate: MockCandidate = {
      id: 'cnd_' + Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      nationality: data.nationality,
      currentPosition: data.currentPosition,
      experience: data.experience,
      skills: data.skills || [],
      culturalScore: Math.floor(Math.random() * 20) + 80
    };
    
    mockCandidates.push(newCandidate);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return { id: newCandidate.id, success: true };
  }

  static async createCompany(data: any): Promise<{ id: string; success: boolean }> {
    const newCompany: MockCompany = {
      id: 'cmp_' + Date.now(),
      companyName: data.companyName,
      industry: data.industry,
      contactEmail: data.contactEmail,
      hiringNeeds: data.hiringNeeds || []
    };
    
    mockCompanies.push(newCompany);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return { id: newCompany.id, success: true };
  }

  static async getMetrics(): Promise<MockMetrics> {
    // Simulate real-time variations
    const baseMetrics = {
      totalCandidates: mockCandidates.length + 12844,
      totalCompanies: mockCompanies.length + 86,
      activeAssessments: 234 + Math.floor(Math.random() * 10),
      culturalMatches: 89.7 + (Math.random() * 2 - 1),
      marketIntelligence: 156 + Math.floor(Math.random() * 5),
      realTimeAlerts: Math.floor(Math.random() * 12) + 3,
      activeJobPostings: 89 + Math.floor(Math.random() * 5),
      recentApplications: 67 + Math.floor(Math.random() * 8)
    };

    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 50));
    
    return baseMetrics;
  }

  static async getCandidates(page: number = 1, limit: number = 10) {
    const start = (page - 1) * limit;
    const candidates = mockCandidates.slice(start, start + limit);
    
    return {
      candidates,
      pagination: {
        page,
        limit,
        total: mockCandidates.length,
        totalPages: Math.ceil(mockCandidates.length / limit)
      }
    };
  }

  static async getCompanies(page: number = 1, limit: number = 10) {
    const start = (page - 1) * limit;
    const companies = mockCompanies.slice(start, start + limit);
    
    return {
      companies,
      pagination: {
        page,
        limit,
        total: mockCompanies.length,
        totalPages: Math.ceil(mockCompanies.length / limit)
      }
    };
  }
}