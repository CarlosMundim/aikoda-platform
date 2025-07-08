import { Pool } from 'pg';
import { Candidate, Company, User, CulturalAssessment } from './database-schema';

// Database connection pool
const pool = new Pool({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  database: process.env.DATABASE_NAME || 'aikoda_platform',
  user: process.env.DATABASE_USER || 'aikoda',
  password: process.env.DATABASE_PASSWORD || 'your_password',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Database class for managing connections and queries
export class DatabaseManager {
  
  async testConnection(): Promise<boolean> {
    try {
      const client = await pool.connect();
      await client.query('SELECT NOW()');
      client.release();
      console.log('✅ Database connected successfully');
      return true;
    } catch (error) {
      console.error('❌ Database connection failed:', error);
      return false;
    }
  }

  // CANDIDATE OPERATIONS
  async getAllCandidates(): Promise<Candidate[]> {
    try {
      const result = await pool.query(`
        SELECT 
          c.*,
          ca.cultural_fit_score,
          ca.assessment_date,
          ca.cultural_dimensions
        FROM candidates c
        LEFT JOIN cultural_assessments ca ON c.id = ca.candidate_id
        ORDER BY c.created_at DESC
      `);
      return result.rows;
    } catch (error) {
      console.error('Error fetching candidates:', error);
      return this.getMockCandidates(); // Fallback to mock data
    }
  }

  async createCandidate(candidate: Omit<Candidate, 'id' | 'created_at' | 'updated_at'>): Promise<Candidate> {
    try {
      const result = await pool.query(`
        INSERT INTO candidates (
          organization_id, personal_info, professional_info, 
          assessment_status, cultural_profile, preferences
        ) VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `, [
        candidate.organization_id,
        JSON.stringify(candidate.personal_info),
        JSON.stringify(candidate.professional_info),
        candidate.assessment_status,
        JSON.stringify(candidate.cultural_profile),
        JSON.stringify(candidate.preferences)
      ]);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating candidate:', error);
      throw error;
    }
  }

  async updateCandidateAssessment(candidateId: string, assessment: any): Promise<void> {
    try {
      await pool.query(`
        INSERT INTO cultural_assessments (
          candidate_id, cultural_fit_score, adaptability_score,
          communication_style, work_style, cultural_dimensions,
          strengths, development_areas, recommendations
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (candidate_id) DO UPDATE SET
          cultural_fit_score = EXCLUDED.cultural_fit_score,
          adaptability_score = EXCLUDED.adaptability_score,
          communication_style = EXCLUDED.communication_style,
          work_style = EXCLUDED.work_style,
          cultural_dimensions = EXCLUDED.cultural_dimensions,
          strengths = EXCLUDED.strengths,
          development_areas = EXCLUDED.development_areas,
          recommendations = EXCLUDED.recommendations,
          assessment_date = NOW()
      `, [
        candidateId,
        assessment.culturalFit,
        assessment.adaptabilityScore,
        assessment.communicationStyle,
        assessment.workStyle,
        JSON.stringify(assessment.culturalDimensions),
        JSON.stringify(assessment.strengths),
        JSON.stringify(assessment.developmentAreas),
        JSON.stringify(assessment.recommendations)
      ]);
    } catch (error) {
      console.error('Error updating assessment:', error);
      throw error;
    }
  }

  // COMPANY OPERATIONS
  async getAllCompanies(): Promise<Company[]> {
    try {
      const result = await pool.query('SELECT * FROM companies ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      console.error('Error fetching companies:', error);
      return this.getMockCompanies();
    }
  }

  async createCompany(company: Omit<Company, 'id' | 'created_at' | 'updated_at'>): Promise<Company> {
    try {
      const result = await pool.query(`
        INSERT INTO companies (name, industry, size, location, cultural_profile, requirements)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `, [
        company.name,
        company.industry,
        company.size,
        JSON.stringify(company.location),
        JSON.stringify(company.cultural_profile),
        JSON.stringify(company.requirements)
      ]);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating company:', error);
      throw error;
    }
  }

  // DEMO DATA METHODS
  getMockCandidates(): Candidate[] {
    return [
      {
        id: 'cand-001',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Maria',
          last_name: 'Santos',
          email: 'maria.santos@email.com',
          phone: '+55-11-99999-8888',
          location: { country: 'Brazil', city: 'São Paulo', timezone: 'America/Sao_Paulo' },
          languages: [
            { language: 'Portuguese', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Intermediate' }
          ],
          cultural_background: {
            birth_country: 'Brazil',
            residence_countries: ['Brazil', 'USA'],
            work_countries: ['Brazil', 'USA'],
            education_countries: ['Brazil']
          }
        },
        professional_info: {
          current_position: 'Senior Software Engineer',
          current_company: 'TechBrasil',
          experience_years: 8,
          industry: 'Technology',
          skills: ['React', 'Node.js', 'Python', 'AWS', 'Agile'],
          education: [
            {
              degree: 'Bachelor of Computer Science',
              institution: 'USP',
              year: 2016,
              country: 'Brazil'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 94,
          cultural_fit: 92,
          adaptability_score: 96,
          communication_style: 'Direct yet respectful',
          work_style: 'Collaborative team player'
        },
        preferences: {
          desired_positions: ['Senior Software Engineer', 'Tech Lead'],
          location_preferences: ['Tokyo', 'Osaka'],
          salary_expectations: { min: 8000000, max: 12000000, currency: 'JPY' }
        },
        created_at: '2024-12-01T10:00:00Z',
        updated_at: '2024-12-07T15:30:00Z'
      },
      {
        id: 'cand-002',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Kumar',
          last_name: 'Patel',
          email: 'kumar.patel@email.com',
          phone: '+91-98765-43210',
          location: { country: 'India', city: 'Bangalore', timezone: 'Asia/Kolkata' },
          languages: [
            { language: 'Hindi', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Beginner' }
          ],
          cultural_background: {
            birth_country: 'India',
            residence_countries: ['India'],
            work_countries: ['India', 'Singapore'],
            education_countries: ['India']
          }
        },
        professional_info: {
          current_position: 'AI/ML Engineer',
          current_company: 'Indian Tech Hub',
          experience_years: 6,
          industry: 'Artificial Intelligence',
          skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'],
          education: [
            {
              degree: 'Master of Computer Science',
              institution: 'IIT Bangalore',
              year: 2018,
              country: 'India'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 98,
          cultural_fit: 95,
          adaptability_score: 99,
          communication_style: 'Respectful and detail-oriented',
          work_style: 'Independent yet collaborative'
        },
        preferences: {
          desired_positions: ['AI Engineer', 'Senior ML Engineer'],
          location_preferences: ['Tokyo', 'Kyoto'],
          salary_expectations: { min: 9000000, max: 14000000, currency: 'JPY' }
        },
        created_at: '2024-11-28T14:20:00Z',
        updated_at: '2024-12-06T11:45:00Z'
      },
      {
        id: 'cand-003',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Sarah',
          last_name: 'Johnson',
          email: 'sarah.johnson@email.com',
          phone: '+1-555-123-4567',
          location: { country: 'USA', city: 'San Francisco', timezone: 'America/Los_Angeles' },
          languages: [
            { language: 'English', proficiency: 'Native' },
            { language: 'Japanese', proficiency: 'Advanced' },
            { language: 'Spanish', proficiency: 'Intermediate' }
          ],
          cultural_background: {
            birth_country: 'USA',
            residence_countries: ['USA', 'Japan'],
            work_countries: ['USA', 'Japan'],
            education_countries: ['USA', 'Japan']
          }
        },
        professional_info: {
          current_position: 'Program Manager',
          current_company: 'Global Tech Solutions',
          experience_years: 10,
          industry: 'Technology Management',
          skills: ['Project Management', 'Agile', 'Scrum', 'Japanese Business Culture', 'Team Leadership'],
          education: [
            {
              degree: 'MBA',
              institution: 'Stanford University',
              year: 2016,
              country: 'USA'
            },
            {
              degree: 'Japanese Language Certificate',
              institution: 'Waseda University',
              year: 2020,
              country: 'Japan'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 92,
          cultural_fit: 90,
          adaptability_score: 94,
          communication_style: 'Professional and culturally aware',
          work_style: 'Leadership-oriented team builder'
        },
        preferences: {
          desired_positions: ['Program Manager', 'Project Director', 'Operations Manager'],
          location_preferences: ['Tokyo', 'Osaka', 'Nagoya'],
          salary_expectations: { min: 10000000, max: 16000000, currency: 'JPY' }
        },
        created_at: '2024-11-25T09:15:00Z',
        updated_at: '2024-12-05T16:20:00Z'
      },
      {
        id: 'cand-004',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Chen',
          last_name: 'Wei',
          email: 'chen.wei@email.com',
          phone: '+86-138-0013-8000',
          location: { country: 'China', city: 'Shanghai', timezone: 'Asia/Shanghai' },
          languages: [
            { language: 'Mandarin', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Intermediate' }
          ],
          cultural_background: {
            birth_country: 'China',
            residence_countries: ['China', 'USA'],
            work_countries: ['China', 'USA', 'Japan'],
            education_countries: ['China', 'USA']
          }
        },
        professional_info: {
          current_position: 'Data Scientist',
          current_company: 'Shanghai Analytics Corp',
          experience_years: 7,
          industry: 'Data Science',
          skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistical Analysis'],
          education: [
            {
              degree: 'PhD in Statistics',
              institution: 'MIT',
              year: 2018,
              country: 'USA'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 91,
          cultural_fit: 88,
          adaptability_score: 95,
          communication_style: 'Analytical and thoughtful',
          work_style: 'Detail-oriented researcher'
        },
        preferences: {
          desired_positions: ['Senior Data Scientist', 'Research Scientist'],
          location_preferences: ['Tokyo', 'Yokohama'],
          salary_expectations: { min: 8500000, max: 13000000, currency: 'JPY' }
        },
        created_at: '2024-11-30T13:45:00Z',
        updated_at: '2024-12-04T10:30:00Z'
      },
      {
        id: 'cand-005',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Anna',
          last_name: 'Kowalski',
          email: 'anna.kowalski@email.com',
          phone: '+48-600-123-456',
          location: { country: 'Poland', city: 'Warsaw', timezone: 'Europe/Warsaw' },
          languages: [
            { language: 'Polish', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'German', proficiency: 'Intermediate' },
            { language: 'Japanese', proficiency: 'Beginner' }
          ],
          cultural_background: {
            birth_country: 'Poland',
            residence_countries: ['Poland', 'Germany'],
            work_countries: ['Poland', 'Germany', 'UK'],
            education_countries: ['Poland', 'Germany']
          }
        },
        professional_info: {
          current_position: 'UX Designer',
          current_company: 'Warsaw Design Studio',
          experience_years: 5,
          industry: 'Design',
          skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
          education: [
            {
              degree: 'Master of Design',
              institution: 'Academy of Fine Arts Warsaw',
              year: 2019,
              country: 'Poland'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 89,
          cultural_fit: 86,
          adaptability_score: 93,
          communication_style: 'Creative and empathetic',
          work_style: 'User-focused collaborative designer'
        },
        preferences: {
          desired_positions: ['Senior UX Designer', 'Design Lead'],
          location_preferences: ['Tokyo', 'Osaka'],
          salary_expectations: { min: 7000000, max: 11000000, currency: 'JPY' }
        },
        created_at: '2024-12-02T08:30:00Z',
        updated_at: '2024-12-07T14:15:00Z'
      },
      {
        id: 'cand-006',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Ahmed',
          last_name: 'Al-Rahman',
          email: 'ahmed.alrahman@email.com',
          phone: '+971-50-123-4567',
          location: { country: 'UAE', city: 'Dubai', timezone: 'Asia/Dubai' },
          languages: [
            { language: 'Arabic', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'French', proficiency: 'Intermediate' }
          ],
          cultural_background: {
            birth_country: 'UAE',
            residence_countries: ['UAE', 'Canada'],
            work_countries: ['UAE', 'Canada', 'UK'],
            education_countries: ['UAE', 'Canada']
          }
        },
        professional_info: {
          current_position: 'DevOps Engineer',
          current_company: 'Dubai Tech Solutions',
          experience_years: 6,
          industry: 'Cloud Infrastructure',
          skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Jenkins'],
          education: [
            {
              degree: 'Bachelor of Engineering',
              institution: 'University of Toronto',
              year: 2018,
              country: 'Canada'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 87,
          cultural_fit: 85,
          adaptability_score: 90,
          communication_style: 'Professional and diplomatic',
          work_style: 'Systematic problem solver'
        },
        preferences: {
          desired_positions: ['Senior DevOps Engineer', 'Cloud Architect'],
          location_preferences: ['Tokyo', 'Fukuoka'],
          salary_expectations: { min: 8000000, max: 12500000, currency: 'JPY' }
        },
        created_at: '2024-11-29T12:00:00Z',
        updated_at: '2024-12-06T09:45:00Z'
      },
      {
        id: 'cand-007',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Sophie',
          last_name: 'Dubois',
          email: 'sophie.dubois@email.com',
          phone: '+33-6-12-34-56-78',
          location: { country: 'France', city: 'Paris', timezone: 'Europe/Paris' },
          languages: [
            { language: 'French', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Intermediate' },
            { language: 'Spanish', proficiency: 'Basic' }
          ],
          cultural_background: {
            birth_country: 'France',
            residence_countries: ['France', 'Japan'],
            work_countries: ['France', 'Japan', 'Belgium'],
            education_countries: ['France', 'Japan']
          }
        },
        professional_info: {
          current_position: 'Marketing Manager',
          current_company: 'Paris Marketing Group',
          experience_years: 8,
          industry: 'Digital Marketing',
          skills: ['Digital Marketing', 'SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
          education: [
            {
              degree: 'Master in International Business',
              institution: 'HEC Paris',
              year: 2016,
              country: 'France'
            },
            {
              degree: 'Japanese Culture Certificate',
              institution: 'Sophia University',
              year: 2021,
              country: 'Japan'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 93,
          cultural_fit: 91,
          adaptability_score: 96,
          communication_style: 'Elegant and strategic',
          work_style: 'Creative brand strategist'
        },
        preferences: {
          desired_positions: ['Senior Marketing Manager', 'Brand Director'],
          location_preferences: ['Tokyo', 'Osaka', 'Kyoto'],
          salary_expectations: { min: 7500000, max: 12000000, currency: 'JPY' }
        },
        created_at: '2024-11-27T15:20:00Z',
        updated_at: '2024-12-05T13:10:00Z'
      },
      {
        id: 'cand-008',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Lars',
          last_name: 'Andersen',
          email: 'lars.andersen@email.com',
          phone: '+45-12-34-56-78',
          location: { country: 'Denmark', city: 'Copenhagen', timezone: 'Europe/Copenhagen' },
          languages: [
            { language: 'Danish', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Swedish', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Basic' }
          ],
          cultural_background: {
            birth_country: 'Denmark',
            residence_countries: ['Denmark', 'Sweden'],
            work_countries: ['Denmark', 'Sweden', 'Norway'],
            education_countries: ['Denmark']
          }
        },
        professional_info: {
          current_position: 'Cybersecurity Specialist',
          current_company: 'Nordic Security Solutions',
          experience_years: 9,
          industry: 'Cybersecurity',
          skills: ['Penetration Testing', 'Security Architecture', 'Risk Assessment', 'Compliance', 'Incident Response'],
          education: [
            {
              degree: 'Master of Computer Security',
              institution: 'Technical University of Denmark',
              year: 2015,
              country: 'Denmark'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 88,
          cultural_fit: 84,
          adaptability_score: 92,
          communication_style: 'Direct and trustworthy',
          work_style: 'Methodical security expert'
        },
        preferences: {
          desired_positions: ['Senior Security Engineer', 'Security Architect'],
          location_preferences: ['Tokyo', 'Nagoya'],
          salary_expectations: { min: 9000000, max: 14000000, currency: 'JPY' }
        },
        created_at: '2024-11-26T11:30:00Z',
        updated_at: '2024-12-04T16:45:00Z'
      },
      {
        id: 'cand-009',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Priya',
          last_name: 'Sharma',
          email: 'priya.sharma@email.com',
          phone: '+91-98765-12345',
          location: { country: 'India', city: 'Mumbai', timezone: 'Asia/Kolkata' },
          languages: [
            { language: 'Hindi', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'Marathi', proficiency: 'Fluent' },
            { language: 'Japanese', proficiency: 'Intermediate' }
          ],
          cultural_background: {
            birth_country: 'India',
            residence_countries: ['India', 'Australia'],
            work_countries: ['India', 'Australia', 'Singapore'],
            education_countries: ['India', 'Australia']
          }
        },
        professional_info: {
          current_position: 'Product Manager',
          current_company: 'Mumbai Innovations',
          experience_years: 7,
          industry: 'Product Management',
          skills: ['Product Strategy', 'User Research', 'Agile', 'Data Analysis', 'Stakeholder Management'],
          education: [
            {
              degree: 'MBA in Product Management',
              institution: 'Australian Graduate School of Management',
              year: 2017,
              country: 'Australia'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 95,
          cultural_fit: 93,
          adaptability_score: 97,
          communication_style: 'Empathetic and strategic',
          work_style: 'User-centric product leader'
        },
        preferences: {
          desired_positions: ['Senior Product Manager', 'Product Director'],
          location_preferences: ['Tokyo', 'Osaka', 'Hiroshima'],
          salary_expectations: { min: 8500000, max: 13500000, currency: 'JPY' }
        },
        created_at: '2024-11-24T14:45:00Z',
        updated_at: '2024-12-07T12:20:00Z'
      },
      {
        id: 'cand-010',
        organization_id: 'org-demo',
        personal_info: {
          first_name: 'Marco',
          last_name: 'Rossi',
          email: 'marco.rossi@email.com',
          phone: '+39-320-123-4567',
          location: { country: 'Italy', city: 'Milan', timezone: 'Europe/Rome' },
          languages: [
            { language: 'Italian', proficiency: 'Native' },
            { language: 'English', proficiency: 'Fluent' },
            { language: 'French', proficiency: 'Intermediate' },
            { language: 'Japanese', proficiency: 'Basic' }
          ],
          cultural_background: {
            birth_country: 'Italy',
            residence_countries: ['Italy', 'Switzerland'],
            work_countries: ['Italy', 'Switzerland', 'Germany'],
            education_countries: ['Italy', 'Switzerland']
          }
        },
        professional_info: {
          current_position: 'Financial Analyst',
          current_company: 'Milan Financial Group',
          experience_years: 6,
          industry: 'Finance',
          skills: ['Financial Modeling', 'Risk Analysis', 'Excel/VBA', 'Bloomberg', 'Quantitative Analysis'],
          education: [
            {
              degree: 'Master in Finance',
              institution: 'Bocconi University',
              year: 2018,
              country: 'Italy'
            }
          ]
        },
        assessment_status: 'completed',
        cultural_profile: {
          overall_score: 86,
          cultural_fit: 83,
          adaptability_score: 89,
          communication_style: 'Precise and analytical',
          work_style: 'Detail-oriented financial expert'
        },
        preferences: {
          desired_positions: ['Senior Financial Analyst', 'Investment Analyst'],
          location_preferences: ['Tokyo', 'Yokohama'],
          salary_expectations: { min: 7500000, max: 11500000, currency: 'JPY' }
        },
        created_at: '2024-11-23T10:15:00Z',
        updated_at: '2024-12-03T17:30:00Z'
      }
    ];
  }

  getMockCompanies(): Company[] {
    return [
      {
        id: 'comp-001',
        name: 'Sankyo Corporation',
        industry: 'Technology',
        size: 'Large',
        location: { country: 'Japan', city: 'Tokyo', address: '1-1-1 Shibuya, Tokyo 150-8512' },
        cultural_profile: {
          hofstede_dimensions: {
            power_distance: 70,
            individualism: 30,
            uncertainty_avoidance: 85,
            masculinity: 75,
            long_term_orientation: 90,
            indulgence: 40
          },
          work_culture: 'Traditional Japanese with innovation focus',
          communication_style: 'Hierarchical yet collaborative'
        },
        requirements: {
          languages: ['Japanese', 'English'],
          experience_years: 5,
          cultural_fit_threshold: 85,
          skills: ['Technical expertise', 'Cultural adaptability']
        },
        created_at: '2024-01-15T09:00:00Z',
        updated_at: '2024-12-01T14:30:00Z'
      },
      {
        id: 'comp-002',
        name: 'Mitsubishi Heavy Industries',
        industry: 'Manufacturing',
        size: 'Enterprise',
        location: { country: 'Japan', city: 'Osaka', address: '2-2-2 Namba, Osaka 542-0076' },
        cultural_profile: {
          hofstede_dimensions: {
            power_distance: 75,
            individualism: 25,
            uncertainty_avoidance: 90,
            masculinity: 80,
            long_term_orientation: 95,
            indulgence: 35
          },
          work_culture: 'Traditional manufacturing excellence',
          communication_style: 'Formal and process-oriented'
        },
        requirements: {
          languages: ['Japanese', 'English'],
          experience_years: 8,
          cultural_fit_threshold: 88,
          skills: ['Engineering excellence', 'Quality focus']
        },
        created_at: '2024-02-01T10:00:00Z',
        updated_at: '2024-11-28T16:20:00Z'
      }
    ];
  }

  // Clean up connection pool on app shutdown
  async close(): Promise<void> {
    await pool.end();
  }
}

export const db = new DatabaseManager();

// Export for use in API routes and components
export default db;