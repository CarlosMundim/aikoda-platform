/**
 * Enterprise Database Schema for aiKODA Cultural Intelligence Platform
 * Designed for scalability, performance, and multi-tenancy
 */

export interface DatabaseConnection {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl: boolean;
  pool: {
    min: number;
    max: number;
    idleTimeoutMillis: number;
  };
}

// Core Entity Interfaces

export interface Organization {
  id: string;
  name: string;
  domain: string;
  type: 'enterprise' | 'partner' | 'startup';
  tier: 'free' | 'professional' | 'enterprise';
  settings: {
    cultural_focus: string[];
    default_language: string;
    timezone: string;
    api_limits: {
      assessments_per_month: number;
      candidates_per_month: number;
      api_calls_per_day: number;
    };
    white_label: {
      enabled: boolean;
      brand_name?: string;
      logo_url?: string;
      color_scheme?: string;
    };
  };
  created_at: Date;
  updated_at: Date;
  status: 'active' | 'suspended' | 'trial';
}

export interface User {
  id: string;
  organization_id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: 'owner' | 'admin' | 'hr_manager' | 'recruiter' | 'viewer';
  permissions: string[];
  cultural_preferences: {
    preferred_cultures: string[];
    assessment_language: string;
    notification_settings: Record<string, boolean>;
  };
  created_at: Date;
  updated_at: Date;
  last_login: Date;
  status: 'active' | 'inactive' | 'invited';
}

export interface Candidate {
  id: string;
  organization_id: string;
  created_by: string;
  personal_info: {
    first_name: string;
    last_name: string;
    email: string;
    phone?: string;
    location: {
      country: string;
      city: string;
      timezone: string;
    };
    languages: Array<{
      language: string;
      proficiency: 'native' | 'fluent' | 'intermediate' | 'beginner';
    }>;
    cultural_background: {
      birth_country: string;
      residence_countries: string[];
      work_countries: string[];
      education_countries: string[];
    };
  };
  professional_info: {
    current_position?: string;
    current_company?: string;
    experience_years: number;
    industry: string;
    skills: string[];
    education: Array<{
      degree: string;
      institution: string;
      country: string;
      year: number;
    }>;
  };
  assessment_status: 'pending' | 'in_progress' | 'completed' | 'expired';
  cultural_profile?: CulturalProfile;
  tags: string[];
  created_at: Date;
  updated_at: Date;
  last_assessed: Date;
  status: 'active' | 'archived' | 'blacklisted';
}

export interface CulturalAssessment {
  id: string;
  candidate_id: string;
  organization_id: string;
  target_culture: string;
  assessment_type: 'full_47d' | 'quick_scan' | 'custom';
  questions: Array<{
    id: string;
    question: string;
    category: string;
    type: 'multiple_choice' | 'scale' | 'text' | 'scenario';
    options?: string[];
    required: boolean;
  }>;
  responses: Array<{
    question_id: string;
    answer: string;
    response_time: number;
    confidence_level?: number;
  }>;
  results: {
    cultural_profile: CulturalProfile;
    match_results: CulturalMatchResult[];
    ai_insights: string[];
    recommendations: string[];
    integration_plan: string[];
    risk_assessment: {
      overall_risk: 'low' | 'medium' | 'high';
      risk_factors: string[];
      mitigation_strategies: string[];
    };
  };
  processing_time: number;
  started_at: Date;
  completed_at?: Date;
  expires_at: Date;
  status: 'draft' | 'sent' | 'in_progress' | 'completed' | 'expired';
}

export interface CulturalProfile {
  id: string;
  candidate_id: string;
  assessment_id: string;
  dimensional_scores: Record<string, number>; // 47 dimensions
  confidence_scores: Record<string, number>;
  cultural_fit_score: number;
  adaptability_score: number;
  communication_style: {
    primary_style: string;
    secondary_style: string;
    effectiveness_score: number;
  };
  work_style: {
    preferences: string[];
    strengths: string[];
    challenges: string[];
  };
  cultural_dimensions: {
    power_distance: number;
    individualism_collectivism: number;
    uncertainty_avoidance: number;
    masculinity_femininity: number;
    long_term_orientation: number;
    indulgence_restraint: number;
    // Additional 41 dimensions from our 47D model
    [key: string]: number;
  };
  strengths: string[];
  development_areas: string[];
  recommendations: string[];
  created_at: Date;
  updated_at: Date;
  version: string;
}

export interface Job {
  id: string;
  organization_id: string;
  created_by: string;
  title: string;
  description: string;
  requirements: {
    cultural_requirements: {
      target_culture: string;
      required_cultural_traits: string[];
      preferred_cultural_traits: string[];
      cultural_fit_minimum: number;
    };
    technical_requirements: {
      skills: string[];
      experience_years: number;
      education_level: string;
      certifications: string[];
    };
    location_requirements: {
      work_location: string;
      timezone_flexibility: boolean;
      travel_requirements: string;
    };
  };
  cultural_profile: Record<string, number>; // Ideal cultural profile for this role
  candidates: Array<{
    candidate_id: string;
    match_score: number;
    cultural_fit: number;
    status: 'applied' | 'screening' | 'interviewing' | 'offered' | 'hired' | 'rejected';
    applied_at: Date;
  }>;
  ai_agents: Array<{
    agent_id: string;
    status: 'active' | 'paused' | 'stopped';
    performance_metrics: {
      candidates_sourced: number;
      qualified_candidates: number;
      interviews_scheduled: number;
      hires_made: number;
    };
  }>;
  created_at: Date;
  updated_at: Date;
  status: 'draft' | 'active' | 'paused' | 'closed';
}

export interface AIRecruiterAgent {
  id: string;
  organization_id: string;
  name: string;
  job_id: string;
  configuration: {
    search_criteria: {
      cultural_requirements: Record<string, number>;
      skill_requirements: string[];
      experience_range: [number, number];
      location_preferences: string[];
      language_requirements: string[];
    };
    sourcing_channels: Array<{
      channel: 'linkedin' | 'github' | 'stackoverflow' | 'job_boards' | 'referrals';
      enabled: boolean;
      configuration: Record<string, any>;
    }>;
    screening_criteria: {
      minimum_cultural_fit: number;
      required_dimensions: string[];
      deal_breakers: string[];
    };
    automation_level: 'manual' | 'semi_automated' | 'fully_automated';
    communication_style: 'formal' | 'casual' | 'adaptive';
  };
  performance_metrics: {
    candidates_sourced: number;
    assessments_sent: number;
    assessments_completed: number;
    qualified_candidates: number;
    interviews_scheduled: number;
    successful_hires: number;
    average_cultural_fit: number;
    processing_time_avg: number;
    cost_per_hire: number;
  };
  learning_data: {
    successful_profiles: CulturalProfile[];
    unsuccessful_profiles: CulturalProfile[];
    feedback_patterns: Record<string, number>;
    optimization_history: Array<{
      change: string;
      impact: number;
      timestamp: Date;
    }>;
  };
  created_at: Date;
  updated_at: Date;
  last_active: Date;
  status: 'active' | 'paused' | 'stopped' | 'error';
}

export interface CulturalInsight {
  id: string;
  organization_id: string;
  type: 'trend' | 'recommendation' | 'alert' | 'optimization';
  title: string;
  description: string;
  data: {
    affected_candidates: string[];
    cultural_dimensions: string[];
    impact_score: number;
    confidence_level: number;
    supporting_data: Record<string, any>;
  };
  actionable_items: Array<{
    action: string;
    priority: 'high' | 'medium' | 'low';
    estimated_impact: number;
    complexity: 'simple' | 'moderate' | 'complex';
  }>;
  created_at: Date;
  expires_at: Date;
  status: 'new' | 'reviewed' | 'acted_on' | 'dismissed';
}

export interface Analytics {
  id: string;
  organization_id: string;
  period: {
    start_date: Date;
    end_date: Date;
    granularity: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  };
  metrics: {
    assessments_completed: number;
    candidates_processed: number;
    average_cultural_fit: number;
    top_cultural_traits: Array<{
      trait: string;
      frequency: number;
      success_rate: number;
    }>;
    cultural_distribution: Record<string, number>;
    performance_by_culture: Record<string, {
      candidates: number;
      avg_fit: number;
      success_rate: number;
    }>;
    agent_performance: Record<string, {
      sourced: number;
      qualified: number;
      hired: number;
      efficiency: number;
    }>;
    time_to_hire: {
      average: number;
      by_culture: Record<string, number>;
      by_role: Record<string, number>;
    };
    cost_metrics: {
      cost_per_assessment: number;
      cost_per_hire: number;
      roi_improvement: number;
    };
  };
  trends: Array<{
    metric: string;
    direction: 'increasing' | 'decreasing' | 'stable';
    change_percentage: number;
    significance: 'high' | 'medium' | 'low';
  }>;
  created_at: Date;
  updated_at: Date;
}

export interface APIKey {
  id: string;
  organization_id: string;
  user_id: string;
  name: string;
  key_prefix: string;
  key_hash: string;
  scopes: string[];
  rate_limits: {
    requests_per_minute: number;
    requests_per_hour: number;
    requests_per_day: number;
  };
  usage_stats: {
    total_requests: number;
    last_used: Date;
    requests_this_month: number;
    errors_this_month: number;
  };
  created_at: Date;
  expires_at?: Date;
  status: 'active' | 'revoked' | 'expired';
}

export interface WebhookEndpoint {
  id: string;
  organization_id: string;
  url: string;
  events: string[];
  secret: string;
  retry_policy: {
    max_retries: number;
    initial_delay: number;
    max_delay: number;
    backoff_multiplier: number;
  };
  delivery_stats: {
    total_deliveries: number;
    successful_deliveries: number;
    failed_deliveries: number;
    last_delivery: Date;
    last_failure: Date;
  };
  created_at: Date;
  updated_at: Date;
  status: 'active' | 'paused' | 'failed';
}

// Database Schema SQL (PostgreSQL)
export const DATABASE_SCHEMA = `
-- Organizations table
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  domain VARCHAR(255) UNIQUE NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('enterprise', 'partner', 'startup')),
  tier VARCHAR(50) NOT NULL CHECK (tier IN ('free', 'professional', 'enterprise')),
  settings JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'trial'))
);

-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('owner', 'admin', 'hr_manager', 'recruiter', 'viewer')),
  permissions TEXT[] DEFAULT '{}',
  cultural_preferences JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'invited'))
);

-- Candidates table
CREATE TABLE candidates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES users(id),
  personal_info JSONB NOT NULL,
  professional_info JSONB NOT NULL,
  assessment_status VARCHAR(50) NOT NULL DEFAULT 'pending' CHECK (assessment_status IN ('pending', 'in_progress', 'completed', 'expired')),
  cultural_profile JSONB,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_assessed TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'archived', 'blacklisted'))
);

-- Cultural Assessments table
CREATE TABLE cultural_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  target_culture VARCHAR(100) NOT NULL,
  assessment_type VARCHAR(50) NOT NULL CHECK (assessment_type IN ('full_47d', 'quick_scan', 'custom')),
  questions JSONB NOT NULL,
  responses JSONB DEFAULT '[]',
  results JSONB,
  processing_time INTEGER,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  completed_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'in_progress', 'completed', 'expired'))
);

-- Cultural Profiles table
CREATE TABLE cultural_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  candidate_id UUID NOT NULL REFERENCES candidates(id) ON DELETE CASCADE,
  assessment_id UUID NOT NULL REFERENCES cultural_assessments(id) ON DELETE CASCADE,
  dimensional_scores JSONB NOT NULL,
  confidence_scores JSONB NOT NULL,
  cultural_fit_score DECIMAL(5,2) NOT NULL,
  adaptability_score DECIMAL(5,2) NOT NULL,
  communication_style JSONB NOT NULL,
  work_style JSONB NOT NULL,
  cultural_dimensions JSONB NOT NULL,
  strengths TEXT[] DEFAULT '{}',
  development_areas TEXT[] DEFAULT '{}',
  recommendations TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  version VARCHAR(10) NOT NULL DEFAULT '1.0'
);

-- Jobs table
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  created_by UUID NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  requirements JSONB NOT NULL,
  cultural_profile JSONB NOT NULL,
  candidates JSONB DEFAULT '[]',
  ai_agents JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'closed'))
);

-- AI Recruiter Agents table
CREATE TABLE ai_recruiter_agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  job_id UUID NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  configuration JSONB NOT NULL,
  performance_metrics JSONB DEFAULT '{}',
  learning_data JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_active TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'stopped', 'error'))
);

-- Cultural Insights table
CREATE TABLE cultural_insights (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL CHECK (type IN ('trend', 'recommendation', 'alert', 'optimization')),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  data JSONB NOT NULL,
  actionable_items JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'acted_on', 'dismissed'))
);

-- Analytics table
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  period JSONB NOT NULL,
  metrics JSONB NOT NULL,
  trends JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- API Keys table
CREATE TABLE api_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  key_prefix VARCHAR(20) NOT NULL,
  key_hash VARCHAR(255) NOT NULL,
  scopes TEXT[] DEFAULT '{}',
  rate_limits JSONB NOT NULL,
  usage_stats JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP WITH TIME ZONE,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'revoked', 'expired'))
);

-- Webhook Endpoints table
CREATE TABLE webhook_endpoints (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  url VARCHAR(2048) NOT NULL,
  events TEXT[] NOT NULL,
  secret VARCHAR(255) NOT NULL,
  retry_policy JSONB NOT NULL,
  delivery_stats JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'failed'))
);

-- Indexes for performance
CREATE INDEX idx_candidates_organization_id ON candidates(organization_id);
CREATE INDEX idx_candidates_assessment_status ON candidates(assessment_status);
CREATE INDEX idx_cultural_assessments_candidate_id ON cultural_assessments(candidate_id);
CREATE INDEX idx_cultural_assessments_organization_id ON cultural_assessments(organization_id);
CREATE INDEX idx_cultural_profiles_candidate_id ON cultural_profiles(candidate_id);
CREATE INDEX idx_jobs_organization_id ON jobs(organization_id);
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_ai_agents_organization_id ON ai_recruiter_agents(organization_id);
CREATE INDEX idx_ai_agents_job_id ON ai_recruiter_agents(job_id);
CREATE INDEX idx_cultural_insights_organization_id ON cultural_insights(organization_id);
CREATE INDEX idx_cultural_insights_type ON cultural_insights(type);
CREATE INDEX idx_analytics_organization_id ON analytics(organization_id);
CREATE INDEX idx_api_keys_organization_id ON api_keys(organization_id);
CREATE INDEX idx_webhook_endpoints_organization_id ON webhook_endpoints(organization_id);

-- Updated at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_organizations_updated_at BEFORE UPDATE ON organizations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_candidates_updated_at BEFORE UPDATE ON candidates FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_cultural_profiles_updated_at BEFORE UPDATE ON cultural_profiles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_ai_recruiter_agents_updated_at BEFORE UPDATE ON ai_recruiter_agents FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_analytics_updated_at BEFORE UPDATE ON analytics FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_webhook_endpoints_updated_at BEFORE UPDATE ON webhook_endpoints FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
`;