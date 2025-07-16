/**
 * Advanced Japanese Workplace Cultural Intelligence Engine
 * Comprehensive 47-dimension assessment system for cultural fit
 * Far beyond any Japanese competitor - includes traditional philosophies,
 * modern workplace dynamics, psychological patterns, and behavioral intelligence
 * Designed for Osaka/Tokyo HR/Dispatch/Hakken market dominance
 */

export interface JapanesePhilosophyDimension {
  id: string;
  name: string;
  japaneseReading: string;
  description: string;
  workplaceApplication: string;
  assessmentCriteria: string[];
  culturalWeight: number; // 0-1 importance for Japanese workplace
  adaptabilityFactor: number; // How trainable/adaptable this dimension is
}

export interface JapaneseWorkplaceFit {
  candidateId: string;
  companyId: string;
  philosophyScores: Record<string, number>; // philosophy_id -> score (0-100)
  overallCompatibility: number;
  strengthAreas: string[];
  developmentAreas: string[];
  integrationRecommendations: string[];
  culturalRiskFactors: string[];
  adaptabilityScore: number;
  timeToIntegration: string;
  onboardingPlan: string[];
  timestamp: string;
}

export interface CompanyCultureProfile {
  companyId: string;
  companyName: string;
  industryType: string;
  philosophyRequirements: Record<string, number>; // philosophy_id -> required_score
  culturalPriorities: string[]; // ordered list of most important philosophies
  workEnvironment: 'traditional' | 'modern' | 'hybrid';
  internationalOpenness: number; // 0-100 how open to foreign workers
  trainingSupport: number; // 0-100 level of cultural training provided
}

export const JAPANESE_WORKPLACE_PHILOSOPHIES: JapanesePhilosophyDimension[] = [
  {
    id: 'wa_harmony',
    name: 'Wa (Harmony)',
    japaneseReading: '和',
    description: 'Maintaining group harmony and avoiding conflict',
    workplaceApplication: 'Prioritizing team cohesion over individual preferences, consensus-building, conflict avoidance',
    assessmentCriteria: [
      'Ability to work harmoniously in group settings',
      'Skill in consensus-building and compromise',
      'Comfort with indirect communication styles',
      'Willingness to suppress individual opinions for group benefit',
      'Sensitivity to group dynamics and atmosphere'
    ],
    culturalWeight: 0.95,
    adaptabilityFactor: 0.7
  },
  {
    id: 'kaizen_improvement',
    name: 'Kaizen (Continuous Improvement)',
    japaneseReading: '改善',
    description: 'Commitment to continuous, incremental improvement',
    workplaceApplication: 'Regular process refinement, quality focus, long-term thinking, gradual change over radical shifts',
    assessmentCriteria: [
      'Commitment to continuous learning and skill development',
      'Attention to detail and quality standards',
      'Patience with gradual, incremental progress',
      'Proactive identification of improvement opportunities',
      'Long-term perspective on career and skill development'
    ],
    culturalWeight: 0.90,
    adaptabilityFactor: 0.8
  },
  {
    id: 'omotenashi_service',
    name: 'Omotenashi (Hospitality)',
    japaneseReading: 'おもてなし',
    description: 'Anticipating needs and providing exceptional service',
    workplaceApplication: 'Customer-first mindset, anticipating colleague needs, going beyond expectations, sincere care',
    assessmentCriteria: [
      'Customer service orientation and empathy',
      'Ability to anticipate needs before they are expressed',
      'Willingness to go above and beyond job requirements',
      'Genuine care for others\' well-being and success',
      'Attention to small details that enhance experience'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.6
  },
  {
    id: 'bushido_dedication',
    name: 'Bushidō (Way of the Warrior)',
    japaneseReading: '武士道',
    description: 'Honor, loyalty, and unwavering commitment to duty',
    workplaceApplication: 'Company loyalty, ethical behavior, perseverance through challenges, honor in commitments',
    assessmentCriteria: [
      'Loyalty to company and team members',
      'Strong work ethic and commitment to responsibilities',
      'Ethical behavior and integrity in all situations',
      'Perseverance through difficult challenges',
      'Honor in keeping promises and commitments'
    ],
    culturalWeight: 0.90,
    adaptabilityFactor: 0.5
  },
  {
    id: 'ma_spatial_timing',
    name: 'Ma (Spatial and Temporal Awareness)',
    japaneseReading: '間',
    description: 'Understanding of appropriate timing and space',
    workplaceApplication: 'Reading social cues, timing in communication, respecting personal space, meeting rhythm',
    assessmentCriteria: [
      'Sensitivity to appropriate timing in communication',
      'Understanding of social cues and non-verbal communication',
      'Respect for personal and professional boundaries',
      'Ability to create comfortable silences and pauses',
      'Awareness of meeting rhythms and group dynamics'
    ],
    culturalWeight: 0.80,
    adaptabilityFactor: 0.4
  },
  {
    id: 'iki_aesthetic_sophistication',
    name: 'Iki (Aesthetic Sophistication)',
    japaneseReading: '粋',
    description: 'Refined taste, understated elegance, and cultural sophistication',
    workplaceApplication: 'Professional presentation, refined communication, cultural sensitivity, tasteful behavior',
    assessmentCriteria: [
      'Professional appearance and presentation',
      'Refined and appropriate communication style',
      'Cultural sensitivity and awareness',
      'Tasteful behavior in professional settings',
      'Appreciation for quality and craftsmanship'
    ],
    culturalWeight: 0.75,
    adaptabilityFactor: 0.6
  },
  {
    id: 'do_way_mastery',
    name: 'Dō (The Way)',
    japaneseReading: '道',
    description: 'Dedication to mastery through disciplined practice',
    workplaceApplication: 'Skill mastery, disciplined practice, long-term commitment to craft, mentor-student relationships',
    assessmentCriteria: [
      'Commitment to achieving mastery in chosen field',
      'Discipline in practice and skill development',
      'Respect for expertise and willingness to learn from masters',
      'Long-term perspective on career development',
      'Dedication to continuous practice and improvement'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.7
  },
  {
    id: 'on_ongaeshi_obligation',
    name: 'On/Ongaeshi (Obligation and Reciprocity)',
    japaneseReading: '恩・恩返し',
    description: 'Understanding of mutual obligations and reciprocal relationships',
    workplaceApplication: 'Gratitude for opportunities, reciprocal support, understanding hierarchical obligations, mentoring',
    assessmentCriteria: [
      'Understanding of mutual obligations in workplace relationships',
      'Gratitude for opportunities and support received',
      'Willingness to reciprocate help and support',
      'Respect for hierarchical relationships and seniority',
      'Commitment to mentoring and developing others'
    ],
    culturalWeight: 0.90,
    adaptabilityFactor: 0.5
  },

  // TRADITIONAL JAPANESE CONCEPTS (7 additional)
  {
    id: 'nemawashi_consensus',
    name: 'Nemawashi (Root Binding)',
    japaneseReading: '根回し',
    description: 'Behind-the-scenes consensus building before formal meetings',
    workplaceApplication: 'Informal pre-meeting discussions, relationship building, consensus preparation',
    assessmentCriteria: [
      'Skill in informal relationship building',
      'Understanding of consensus preparation processes',
      'Ability to navigate unspoken workplace dynamics',
      'Patience with extended decision-making processes',
      'Sensitivity to stakeholder concerns before formal presentations'
    ],
    culturalWeight: 0.88,
    adaptabilityFactor: 0.4
  },
  {
    id: 'ikigai_purpose',
    name: 'Ikigai (Life Purpose)',
    japaneseReading: '生き甲斐',
    description: 'Finding meaning and purpose in work and life balance',
    workplaceApplication: 'Long-term career commitment, finding fulfillment in role, sustainable work practices',
    assessmentCriteria: [
      'Clear sense of professional purpose and direction',
      'Ability to find meaning in daily work tasks',
      'Long-term career planning and commitment',
      'Balance between personal fulfillment and company contribution',
      'Sustainable approach to work-life integration'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.7
  },
  {
    id: 'senpai_kohai',
    name: 'Senpai-Kohai (Senior-Junior)',
    japaneseReading: '先輩・後輩',
    description: 'Understanding hierarchical mentor-student relationships',
    workplaceApplication: 'Respect for seniority, mentoring responsibilities, learning from experience',
    assessmentCriteria: [
      'Respect for senior colleagues and their experience',
      'Willingness to mentor junior team members',
      'Understanding of hierarchical learning relationships',
      'Patience in knowledge transfer processes',
      'Commitment to developing others through guidance'
    ],
    culturalWeight: 0.92,
    adaptabilityFactor: 0.6
  },
  {
    id: 'shokunin_craftmanship',
    name: 'Shokunin (Craftsperson Spirit)',
    japaneseReading: '職人',
    description: 'Dedication to perfecting craft through lifelong commitment',
    workplaceApplication: 'Mastery-focused approach, attention to detail, pride in work quality',
    assessmentCriteria: [
      'Dedication to continuous skill refinement',
      'Pride in work quality and attention to detail',
      'Long-term commitment to professional mastery',
      'Willingness to spend time perfecting techniques',
      'Understanding that expertise develops over decades'
    ],
    culturalWeight: 0.87,
    adaptabilityFactor: 0.8
  },
  {
    id: 'mono_no_aware',
    name: 'Mono no Aware (Impermanence Awareness)',
    japaneseReading: '物の哀れ',
    description: 'Acceptance of change and impermanence in business cycles',
    workplaceApplication: 'Adaptability to market changes, graceful handling of setbacks, resilience',
    assessmentCriteria: [
      'Acceptance of business cycles and market changes',
      'Resilience in face of professional setbacks',
      'Ability to find beauty in transitional periods',
      'Graceful adaptation to organizational changes',
      'Understanding that success and failure are temporary'
    ],
    culturalWeight: 0.75,
    adaptabilityFactor: 0.6
  },
  {
    id: 'ganbatte_perseverance',
    name: 'Ganbatte (Perseverance)',
    japaneseReading: 'がんばって',
    description: 'Sustained effort and determination through challenges',
    workplaceApplication: 'Persistence through difficult projects, team encouragement, never-give-up attitude',
    assessmentCriteria: [
      'Sustained effort during challenging projects',
      'Ability to encourage team members during difficulties',
      'Never-give-up attitude toward professional goals',
      'Resilience in face of repeated obstacles',
      'Commitment to seeing projects through to completion'
    ],
    culturalWeight: 0.89,
    adaptabilityFactor: 0.7
  },
  {
    id: 'kata_systematic_practice',
    name: 'Kata (Systematic Practice)',
    japaneseReading: '型',
    description: 'Disciplined, systematic approach to skill development',
    workplaceApplication: 'Structured learning processes, consistent practice routines, systematic improvement',
    assessmentCriteria: [
      'Preference for structured learning and development',
      'Consistency in practice and skill building routines',
      'Systematic approach to problem-solving',
      'Discipline in following established processes',
      'Patience with repetitive practice for mastery'
    ],
    culturalWeight: 0.83,
    adaptabilityFactor: 0.8
  },

  // HIERARCHY & SOCIAL DYNAMICS (8 dimensions)
  {
    id: 'keigo_respectful_language',
    name: 'Keigo (Respectful Language)',
    japaneseReading: '敬語',
    description: 'Appropriate use of honorific language reflecting social hierarchy',
    workplaceApplication: 'Proper communication levels, respect for status, appropriate formality',
    assessmentCriteria: [
      'Understanding of appropriate communication levels',
      'Respect for hierarchical status in language use',
      'Ability to adjust formality based on relationship',
      'Sensitivity to social positioning in conversations',
      'Proper use of honorific expressions'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.5
  },
  {
    id: 'face_saving_mentsu',
    name: 'Mentsu (Face Saving)',
    japaneseReading: 'メンツ',
    description: 'Protecting dignity and reputation of self and others',
    workplaceApplication: 'Diplomatic conflict resolution, indirect feedback, reputation management',
    assessmentCriteria: [
      'Skill in providing feedback without causing embarrassment',
      'Understanding of reputation and dignity concerns',
      'Ability to resolve conflicts while preserving relationships',
      'Sensitivity to public vs private correction approaches',
      'Diplomatic communication in challenging situations'
    ],
    culturalWeight: 0.90,
    adaptabilityFactor: 0.4
  },
  {
    id: 'ringi_collective_decision',
    name: 'Ringi (Collective Decision)',
    japaneseReading: '稟議',
    description: 'Consensus-based decision making through formal circulation',
    workplaceApplication: 'Collaborative decision processes, stakeholder involvement, formal approval systems',
    assessmentCriteria: [
      'Comfort with extended decision-making processes',
      'Ability to work within formal approval systems',
      'Skill in building consensus across multiple stakeholders',
      'Patience with collaborative decision frameworks',
      'Understanding of collective responsibility for outcomes'
    ],
    culturalWeight: 0.88,
    adaptabilityFactor: 0.6
  },
  {
    id: 'group_harmony_preservation',
    name: 'Group Harmony Preservation',
    japaneseReading: '集団調和',
    description: 'Maintaining team cohesion over individual preferences',
    workplaceApplication: 'Team-first decision making, conflict avoidance, collective success focus',
    assessmentCriteria: [
      'Prioritizing team needs over individual preferences',
      'Skill in maintaining team cohesion during stress',
      'Ability to subordinate personal agenda for group benefit',
      'Sensitivity to team dynamics and morale',
      'Commitment to collective success over individual recognition'
    ],
    culturalWeight: 0.93,
    adaptabilityFactor: 0.7
  },
  {
    id: 'status_awareness_hierarchy',
    name: 'Status Awareness in Hierarchy',
    japaneseReading: '階層意識',
    description: 'Clear understanding of organizational positioning and appropriate behavior',
    workplaceApplication: 'Respect for organizational structure, appropriate deference, role clarity',
    assessmentCriteria: [
      'Clear understanding of organizational hierarchy',
      'Appropriate behavior based on relative status',
      'Respect for senior management and experience',
      'Comfort operating within structured environments',
      'Understanding of role boundaries and responsibilities'
    ],
    culturalWeight: 0.86,
    adaptabilityFactor: 0.5
  },
  {
    id: 'gift_obligation_reciprocity',
    name: 'Gift Obligation Reciprocity',
    japaneseReading: '贈答義理',
    description: 'Understanding mutual obligations in professional relationships',
    workplaceApplication: 'Reciprocal professional favors, relationship maintenance, mutual support',
    assessmentCriteria: [
      'Understanding of mutual professional obligations',
      'Appropriate reciprocity in workplace relationships',
      'Skill in maintaining professional relationship balance',
      'Sensitivity to favor exchange dynamics',
      'Commitment to mutual support within teams'
    ],
    culturalWeight: 0.80,
    adaptabilityFactor: 0.6
  },
  {
    id: 'seasonal_awareness_timing',
    name: 'Seasonal Awareness & Timing',
    japaneseReading: '季節感',
    description: 'Sensitivity to natural rhythms and appropriate timing',
    workplaceApplication: 'Project timing awareness, seasonal business cycles, cultural calendar sensitivity',
    assessmentCriteria: [
      'Awareness of seasonal business patterns',
      'Sensitivity to cultural calendar and celebrations',
      'Understanding of appropriate timing for initiatives',
      'Respect for natural rhythms in work planning',
      'Ability to align projects with cultural expectations'
    ],
    culturalWeight: 0.75,
    adaptabilityFactor: 0.7
  },
  {
    id: 'uchi_soto_insider_outsider',
    name: 'Uchi-Soto (Inside-Outside)',
    japaneseReading: '内・外',
    description: 'Understanding of in-group vs out-group dynamics',
    workplaceApplication: 'Team loyalty, appropriate information sharing, group boundary awareness',
    assessmentCriteria: [
      'Understanding of team vs external boundaries',
      'Appropriate loyalty to immediate work group',
      'Skill in managing information sharing appropriately',
      'Sensitivity to insider vs outsider dynamics',
      'Ability to build trust within team boundaries'
    ],
    culturalWeight: 0.84,
    adaptabilityFactor: 0.5
  },

  // COMMUNICATION PATTERNS (8 dimensions)
  {
    id: 'honne_tatemae_authentic_facade',
    name: 'Honne-Tatemae (True Intent vs Public Facade)',
    japaneseReading: '本音・建前',
    description: 'Managing authentic feelings vs appropriate public expressions',
    workplaceApplication: 'Professional diplomacy, appropriate expression of disagreement, social harmony',
    assessmentCriteria: [
      'Ability to maintain professionalism while having private concerns',
      'Skill in expressing disagreement diplomatically',
      'Understanding when to share authentic opinions',
      'Comfort with maintaining appropriate professional facade',
      'Balance between honesty and social harmony'
    ],
    culturalWeight: 0.87,
    adaptabilityFactor: 0.4
  },
  {
    id: 'kuuki_yomu_reading_atmosphere',
    name: 'Kuuki wo Yomu (Reading the Atmosphere)',
    japaneseReading: '空気を読む',
    description: 'Sensing unspoken group dynamics and responding appropriately',
    workplaceApplication: 'Meeting dynamics awareness, non-verbal communication, situational sensitivity',
    assessmentCriteria: [
      'Sensitivity to unspoken group dynamics',
      'Ability to read non-verbal communication cues',
      'Understanding of appropriate timing for contributions',
      'Skill in sensing meeting mood and energy',
      'Responsiveness to subtle social signals'
    ],
    culturalWeight: 0.91,
    adaptabilityFactor: 0.3
  },
  {
    id: 'indirect_communication_sasshi',
    name: 'Sasshi (Indirect Communication)',
    japaneseReading: '察し',
    description: 'Understanding implied meanings and responding to unspoken needs',
    workplaceApplication: 'Anticipating needs, understanding subtext, minimal verbal communication',
    assessmentCriteria: [
      'Ability to understand implied meanings in communication',
      'Skill in anticipating needs without explicit requests',
      'Comfort with minimal verbal communication',
      'Understanding of subtext in professional conversations',
      'Responsiveness to indirect guidance and feedback'
    ],
    culturalWeight: 0.89,
    adaptabilityFactor: 0.3
  },
  {
    id: 'silence_appreciation_ma',
    name: 'Silence Appreciation (Ma)',
    japaneseReading: '間',
    description: 'Comfort with silence and understanding its communicative value',
    workplaceApplication: 'Meeting pauses, contemplative decision-making, respectful listening',
    assessmentCriteria: [
      'Comfort with silence in professional settings',
      'Understanding of silence as communication',
      'Ability to use pauses effectively in presentations',
      'Respect for contemplative decision-making time',
      'Skill in active listening without immediate response'
    ],
    culturalWeight: 0.82,
    adaptabilityFactor: 0.4
  },
  {
    id: 'modest_self_presentation',
    name: 'Modest Self-Presentation',
    japaneseReading: '謙遜',
    description: 'Humble communication style avoiding self-promotion',
    workplaceApplication: 'Humble achievement discussion, credit sharing, understated confidence',
    assessmentCriteria: [
      'Ability to discuss achievements humbly',
      'Skill in sharing credit with team members',
      'Comfort with understated self-presentation',
      'Avoidance of aggressive self-promotion',
      'Balance between confidence and humility'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.6
  },
  {
    id: 'contextual_communication_high_context',
    name: 'High-Context Communication',
    japaneseReading: '文脈依存',
    description: 'Relying on context and shared understanding rather than explicit words',
    workplaceApplication: 'Shared knowledge assumption, cultural reference understanding, implicit coordination',
    assessmentCriteria: [
      'Ability to work with minimal explicit instruction',
      'Understanding of cultural references and implications',
      'Skill in coordinating through shared understanding',
      'Comfort with context-dependent communication',
      'Ability to fill gaps through cultural knowledge'
    ],
    culturalWeight: 0.86,
    adaptabilityFactor: 0.3
  },
  {
    id: 'formal_protocol_etiquette',
    name: 'Formal Protocol & Etiquette',
    japaneseReading: '礼儀作法',
    description: 'Understanding and following proper business etiquette',
    workplaceApplication: 'Meeting protocols, introduction procedures, business card exchange, bowing',
    assessmentCriteria: [
      'Knowledge of proper business meeting protocols',
      'Skill in appropriate introduction and greeting procedures',
      'Understanding of business card exchange etiquette',
      'Comfort with formal ceremony and ritual',
      'Attention to procedural details and protocols'
    ],
    culturalWeight: 0.83,
    adaptabilityFactor: 0.7
  },
  {
    id: 'conflict_avoidance_harmony',
    name: 'Conflict Avoidance for Harmony',
    japaneseReading: '争い回避',
    description: 'Indirect approaches to managing disagreement and conflict',
    workplaceApplication: 'Diplomatic problem-solving, mediated discussions, face-saving resolutions',
    assessmentCriteria: [
      'Skill in indirect conflict resolution approaches',
      'Ability to address problems without direct confrontation',
      'Understanding of face-saving resolution methods',
      'Comfort with mediated discussion processes',
      'Patience with extended harmony-building efforts'
    ],
    culturalWeight: 0.88,
    adaptabilityFactor: 0.5
  },

  // WORK ETHICS & PERFORMANCE (8 dimensions)
  {
    id: 'lifetime_employment_loyalty',
    name: 'Lifetime Employment Mindset',
    japaneseReading: '終身雇用',
    description: 'Long-term commitment and loyalty to organization',
    workplaceApplication: 'Career-long organizational commitment, company-first thinking, stability preference',
    assessmentCriteria: [
      'Preference for long-term organizational commitment',
      'Willingness to prioritize company needs over personal convenience',
      'Understanding of mutual loyalty between employee and company',
      'Comfort with slow, steady career progression',
      'Investment in company-specific skills and relationships'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.6
  },
  {
    id: 'overtime_dedication_service',
    name: 'Service Overtime Dedication',
    japaneseReading: 'サービス残業',
    description: 'Willingness to work extended hours for team and company success',
    workplaceApplication: 'Flexible work hours, project completion priority, team support availability',
    assessmentCriteria: [
      'Willingness to work extra hours when needed',
      'Prioritizing project completion over strict schedules',
      'Availability to support team members during busy periods',
      'Understanding of collective responsibility for deadlines',
      'Flexibility with personal time for work requirements'
    ],
    culturalWeight: 0.80,
    adaptabilityFactor: 0.7
  },
  {
    id: 'quality_perfectionism_standards',
    name: 'Quality Perfectionism',
    japaneseReading: '完璧主義',
    description: 'Extremely high standards for work quality and attention to detail',
    workplaceApplication: 'Meticulous work approach, multiple quality checks, zero-defect mindset',
    assessmentCriteria: [
      'Commitment to extremely high quality standards',
      'Attention to minute details in all work products',
      'Willingness to repeat work until perfect',
      'Understanding of reputation impact of quality',
      'Pride in delivering flawless results'
    ],
    culturalWeight: 0.92,
    adaptabilityFactor: 0.8
  },
  {
    id: 'process_over_speed_thoroughness',
    name: 'Thoroughness Over Speed',
    japaneseReading: '丁寧さ重視',
    description: 'Prioritizing careful, thorough work over rapid completion',
    workplaceApplication: 'Systematic approach, careful planning, risk minimization, thorough documentation',
    assessmentCriteria: [
      'Preference for systematic, thorough approaches',
      'Willingness to invest time in careful planning',
      'Understanding of long-term benefits of thoroughness',
      'Comfort with methodical work processes',
      'Patience with detailed documentation and procedures'
    ],
    culturalWeight: 0.87,
    adaptabilityFactor: 0.8
  },
  {
    id: 'collective_responsibility_accountability',
    name: 'Collective Responsibility',
    japaneseReading: '連帯責任',
    description: 'Shared accountability for team and organizational outcomes',
    workplaceApplication: 'Team success/failure ownership, mutual support, collective problem-solving',
    assessmentCriteria: [
      'Taking responsibility for team outcomes',
      'Willingness to support struggling team members',
      'Understanding of collective accountability for results',
      'Commitment to team success over individual achievement',
      'Proactive problem-solving for team benefit'
    ],
    culturalWeight: 0.91,
    adaptabilityFactor: 0.7
  },
  {
    id: 'incremental_steady_progress',
    name: 'Incremental Steady Progress',
    japaneseReading: '着実進歩',
    description: 'Preference for consistent, gradual improvement over dramatic changes',
    workplaceApplication: 'Systematic skill building, gradual process improvement, sustainable development',
    assessmentCriteria: [
      'Comfort with gradual, incremental progress',
      'Patience with long-term development processes',
      'Understanding of sustainable improvement approaches',
      'Preference for systematic over dramatic changes',
      'Commitment to consistent daily progress'
    ],
    culturalWeight: 0.84,
    adaptabilityFactor: 0.8
  },
  {
    id: 'documentation_procedure_following',
    name: 'Documentation & Procedure Following',
    japaneseReading: '手続き遵守',
    description: 'Careful adherence to established procedures and documentation',
    workplaceApplication: 'Process compliance, detailed record-keeping, systematic documentation',
    assessmentCriteria: [
      'Careful adherence to established procedures',
      'Commitment to detailed documentation practices',
      'Understanding of procedure importance for quality',
      'Systematic approach to record-keeping',
      'Respect for organizational processes and systems'
    ],
    culturalWeight: 0.86,
    adaptabilityFactor: 0.8
  },
  {
    id: 'customer_first_service_excellence',
    name: 'Customer-First Service Excellence',
    japaneseReading: 'お客様第一',
    description: 'Exceptional service orientation and customer satisfaction priority',
    workplaceApplication: 'Customer needs anticipation, service quality excellence, relationship building',
    assessmentCriteria: [
      'Commitment to exceptional customer service',
      'Ability to anticipate and exceed customer needs',
      'Understanding of service as competitive advantage',
      'Willingness to go above and beyond for customers',
      'Pride in building lasting customer relationships'
    ],
    culturalWeight: 0.90,
    adaptabilityFactor: 0.7
  },

  // INNOVATION & CHANGE MANAGEMENT (8 dimensions)
  {
    id: 'kaizen_continuous_improvement',
    name: 'Advanced Kaizen Implementation',
    japaneseReading: '改善実装',
    description: 'Systematic continuous improvement through small, consistent changes',
    workplaceApplication: 'Daily improvement practices, systematic problem identification, incremental innovation',
    assessmentCriteria: [
      'Commitment to daily improvement practices',
      'Systematic identification of improvement opportunities',
      'Understanding of incremental innovation value',
      'Patience with gradual optimization processes',
      'Skill in implementing sustainable improvements'
    ],
    culturalWeight: 0.89,
    adaptabilityFactor: 0.9
  },
  {
    id: 'conservative_risk_management',
    name: 'Conservative Risk Management',
    japaneseReading: '保守的危機管理',
    description: 'Careful, conservative approach to risk assessment and management',
    workplaceApplication: 'Thorough risk analysis, conservative planning, stakeholder protection',
    assessmentCriteria: [
      'Thorough risk assessment before implementation',
      'Conservative approach to new initiatives',
      'Understanding of stakeholder protection priorities',
      'Systematic approach to change management',
      'Preference for proven over experimental approaches'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.6
  },
  {
    id: 'technology_adoption_patience',
    name: 'Patient Technology Adoption',
    japaneseReading: '技術導入忍耐',
    description: 'Thoughtful, careful approach to adopting new technologies',
    workplaceApplication: 'Systematic technology evaluation, careful implementation, user training focus',
    assessmentCriteria: [
      'Systematic evaluation of new technologies',
      'Careful implementation with thorough testing',
      'Focus on user training and adoption support',
      'Understanding of technology impact on workflows',
      'Preference for stable, proven solutions'
    ],
    culturalWeight: 0.82,
    adaptabilityFactor: 0.7
  },
  {
    id: 'consensus_based_innovation',
    name: 'Consensus-Based Innovation',
    japaneseReading: '合意革新',
    description: 'Innovation through collective agreement and shared vision',
    workplaceApplication: 'Collaborative innovation processes, stakeholder alignment, shared ownership',
    assessmentCriteria: [
      'Ability to build consensus around innovation initiatives',
      'Skill in collaborative innovation processes',
      'Understanding of stakeholder alignment importance',
      'Commitment to shared ownership of innovations',
      'Patience with collective decision-making for changes'
    ],
    culturalWeight: 0.87,
    adaptabilityFactor: 0.6
  },
  {
    id: 'long_term_vision_planning',
    name: 'Long-Term Vision Planning',
    japaneseReading: '長期計画',
    description: 'Strategic thinking with extended time horizons and sustainable planning',
    workplaceApplication: 'Multi-year strategic planning, sustainable growth focus, generational thinking',
    assessmentCriteria: [
      'Ability to think in multi-year time horizons',
      'Understanding of sustainable growth principles',
      'Commitment to long-term relationship building',
      'Patience with extended development cycles',
      'Generational thinking about organizational legacy'
    ],
    culturalWeight: 0.88,
    adaptabilityFactor: 0.7
  },
  {
    id: 'quality_over_quantity_innovation',
    name: 'Quality-Focused Innovation',
    japaneseReading: '質重視革新',
    description: 'Emphasis on perfecting innovations rather than rapid iteration',
    workplaceApplication: 'Thorough development cycles, quality-first innovation, perfection-oriented improvement',
    assessmentCriteria: [
      'Commitment to perfecting innovations before release',
      'Understanding of quality as innovation differentiator',
      'Patience with thorough development cycles',
      'Preference for deep over broad innovation',
      'Focus on sustainable, high-quality solutions'
    ],
    culturalWeight: 0.86,
    adaptabilityFactor: 0.8
  },
  {
    id: 'traditional_modern_balance',
    name: 'Traditional-Modern Balance',
    japaneseReading: '伝統現代調和',
    description: 'Balancing respect for tradition with openness to appropriate modernization',
    workplaceApplication: 'Preserving valuable traditions while embracing beneficial changes',
    assessmentCriteria: [
      'Respect for valuable traditional practices',
      'Openness to beneficial modern approaches',
      'Ability to distinguish between tradition and obstruction',
      'Skill in integrating old wisdom with new methods',
      'Understanding of cultural continuity importance'
    ],
    culturalWeight: 0.84,
    adaptabilityFactor: 0.6
  },
  {
    id: 'systematic_change_implementation',
    name: 'Systematic Change Implementation',
    japaneseReading: '体系的変革',
    description: 'Structured, methodical approach to implementing organizational changes',
    workplaceApplication: 'Phased change rollouts, systematic training, careful transition management',
    assessmentCriteria: [
      'Systematic approach to change implementation',
      'Understanding of phased rollout benefits',
      'Commitment to thorough training during transitions',
      'Careful attention to change impact on stakeholders',
      'Patience with methodical transformation processes'
    ],
    culturalWeight: 0.85,
    adaptabilityFactor: 0.8
  }
];

export class JapaneseWorkplaceCulturalEngine {
  private philosophies: Map<string, JapanesePhilosophyDimension>;

  constructor() {
    this.philosophies = new Map();
    JAPANESE_WORKPLACE_PHILOSOPHIES.forEach(philosophy => {
      this.philosophies.set(philosophy.id, philosophy);
    });
  }

  /**
   * Assess worker's cultural fit with Japanese workplace philosophies
   */
  async assessWorkerCulturalFit(
    candidateId: string,
    assessmentResponses: Array<{philosophyId: string; score: number; evidence: string}>,
    companyProfile: CompanyCultureProfile
  ): Promise<JapaneseWorkplaceFit> {
    const philosophyScores: Record<string, number> = {};
    const strengthAreas: string[] = [];
    const developmentAreas: string[] = [];
    const culturalRiskFactors: string[] = [];
    
    // Process philosophy scores
    assessmentResponses.forEach(response => {
      philosophyScores[response.philosophyId] = response.score;
      
      const philosophy = this.philosophies.get(response.philosophyId);
      if (!philosophy) return;
      
      const requiredScore = companyProfile.philosophyRequirements[response.philosophyId] || 70;
      const gap = requiredScore - response.score;
      
      if (gap <= -10) {
        strengthAreas.push(`Strong ${philosophy.name} (${philosophy.japaneseReading}) alignment`);
      } else if (gap > 20) {
        developmentAreas.push(`${philosophy.name} (${philosophy.japaneseReading}) development needed`);
        
        if (gap > 30 && philosophy.adaptabilityFactor < 0.6) {
          culturalRiskFactors.push(`Low ${philosophy.name} score with limited adaptability`);
        }
      }
    });
    
    // Calculate overall compatibility
    const overallCompatibility = this.calculateOverallCompatibility(
      philosophyScores,
      companyProfile.philosophyRequirements
    );
    
    // Calculate adaptability score
    const adaptabilityScore = this.calculateAdaptabilityScore(
      philosophyScores,
      companyProfile
    );
    
    // Generate integration recommendations
    const integrationRecommendations = this.generateIntegrationRecommendations(
      philosophyScores,
      companyProfile,
      developmentAreas
    );
    
    // Estimate time to integration
    const timeToIntegration = this.estimateIntegrationTime(
      overallCompatibility,
      adaptabilityScore,
      developmentAreas.length
    );
    
    // Create onboarding plan
    const onboardingPlan = this.createOnboardingPlan(
      developmentAreas,
      companyProfile,
      timeToIntegration
    );
    
    return {
      candidateId,
      companyId: companyProfile.companyId,
      philosophyScores,
      overallCompatibility,
      strengthAreas,
      developmentAreas,
      integrationRecommendations,
      culturalRiskFactors,
      adaptabilityScore,
      timeToIntegration,
      onboardingPlan,
      timestamp: new Date().toISOString()
    };
  }
  
  /**
   * Create assessment questions for Japanese workplace philosophies
   */
  generateAssessmentQuestions(): Array<{
    philosophyId: string;
    questions: Array<{
      id: string;
      question: string;
      type: 'scenario' | 'preference' | 'experience';
      scoringCriteria: string[];
    }>;
  }> {
    return JAPANESE_WORKPLACE_PHILOSOPHIES.map(philosophy => ({
      philosophyId: philosophy.id,
      questions: this.generatePhilosophyQuestions(philosophy)
    }));
  }
  
  private generatePhilosophyQuestions(philosophy: JapanesePhilosophyDimension): Array<{
    id: string;
    question: string;
    type: 'scenario' | 'preference' | 'experience';
    scoringCriteria: string[];
  }> {
    const questions = [];
    
    switch (philosophy.id) {
      case 'wa_harmony':
        questions.push({
          id: 'wa_conflict_scenario',
          question: 'Your team is split on an important decision. Two colleagues have strong opposing views. How do you handle this situation?',
          type: 'scenario' as const,
          scoringCriteria: ['Seeks consensus', 'Avoids direct confrontation', 'Considers group harmony']
        });
        break;
        
      case 'kaizen_improvement':
        questions.push({
          id: 'kaizen_improvement_approach',
          question: 'Describe a time when you identified and implemented a process improvement. What was your approach?',
          type: 'experience' as const,
          scoringCriteria: ['Systematic approach', 'Attention to detail', 'Continuous monitoring']
        });
        break;
        
      case 'omotenashi_service':
        questions.push({
          id: 'omotenashi_customer_service',
          question: 'A client has a complex request that goes beyond your normal responsibilities. How do you respond?',
          type: 'scenario' as const,
          scoringCriteria: ['Willingness to help', 'Anticipates needs', 'Goes above and beyond']
        });
        break;
        
      case 'bushido_dedication':
        questions.push({
          id: 'bushido_loyalty_commitment',
          question: 'What does loyalty to your company mean to you? How do you demonstrate it?',
          type: 'preference' as const,
          scoringCriteria: ['Long-term commitment', 'Ethical behavior', 'Perseverance through challenges']
        });
        break;
        
      case 'ma_spatial_timing':
        questions.push({
          id: 'ma_meeting_dynamics',
          question: 'In a meeting where senior colleagues are present, when and how do you contribute to the discussion?',
          type: 'scenario' as const,
          scoringCriteria: ['Timing awareness', 'Respect for hierarchy', 'Reading social cues']
        });
        break;
        
      case 'iki_aesthetic_sophistication':
        questions.push({
          id: 'iki_professional_presentation',
          question: 'How do you prepare for an important client presentation? What factors do you consider?',
          type: 'preference' as const,
          scoringCriteria: ['Attention to presentation', 'Cultural sensitivity', 'Quality focus']
        });
        break;
        
      case 'do_way_mastery':
        questions.push({
          id: 'do_skill_development',
          question: 'Describe your approach to developing expertise in your field. What does mastery mean to you?',
          type: 'experience' as const,
          scoringCriteria: ['Long-term commitment', 'Disciplined practice', 'Respect for expertise']
        });
        break;
        
      case 'on_ongaeshi_obligation':
        questions.push({
          id: 'on_reciprocity_workplace',
          question: 'A senior colleague has mentored you extensively. How do you show your gratitude and reciprocate?',
          type: 'scenario' as const,
          scoringCriteria: ['Understanding of obligation', 'Gratitude expression', 'Reciprocal behavior']
        });
        break;
    }
    
    return questions;
  }
  
  private calculateOverallCompatibility(
    philosophyScores: Record<string, number>,
    requirements: Record<string, number>
  ): number {
    let totalWeightedScore = 0;
    let totalWeight = 0;
    
    Object.entries(philosophyScores).forEach(([philosophyId, score]) => {
      const philosophy = this.philosophies.get(philosophyId);
      if (!philosophy) return;
      
      const requiredScore = requirements[philosophyId] || 70;
      const match = Math.max(0, Math.min(100, score / requiredScore * 100));
      
      totalWeightedScore += match * philosophy.culturalWeight;
      totalWeight += philosophy.culturalWeight;
    });
    
    return totalWeight > 0 ? totalWeightedScore / totalWeight : 0;
  }
  
  private calculateAdaptabilityScore(
    philosophyScores: Record<string, number>,
    companyProfile: CompanyCultureProfile
  ): number {
    let adaptabilityScore = 0;
    let totalWeight = 0;
    
    Object.entries(philosophyScores).forEach(([philosophyId, score]) => {
      const philosophy = this.philosophies.get(philosophyId);
      if (!philosophy) return;
      
      const requiredScore = companyProfile.philosophyRequirements[philosophyId] || 70;
      const gap = Math.max(0, requiredScore - score);
      
      // Higher adaptability factor means easier to develop
      const adaptabilityContribution = philosophy.adaptabilityFactor * (100 - gap);
      
      adaptabilityScore += adaptabilityContribution * philosophy.culturalWeight;
      totalWeight += philosophy.culturalWeight;
    });
    
    return totalWeight > 0 ? adaptabilityScore / totalWeight : 0;
  }
  
  private generateIntegrationRecommendations(
    philosophyScores: Record<string, number>,
    companyProfile: CompanyCultureProfile,
    developmentAreas: string[]
  ): string[] {
    const recommendations: string[] = [];
    
    // Base recommendations
    recommendations.push('Participate in Japanese workplace culture orientation');
    recommendations.push('Observe and learn from Japanese colleagues\' communication styles');
    
    // Specific philosophy recommendations
    Object.entries(philosophyScores).forEach(([philosophyId, score]) => {
      const philosophy = this.philosophies.get(philosophyId);
      if (!philosophy) return;
      
      const requiredScore = companyProfile.philosophyRequirements[philosophyId] || 70;
      const gap = requiredScore - score;
      
      if (gap > 20) {
        switch (philosophyId) {
          case 'wa_harmony':
            recommendations.push('Practice consensus-building techniques and indirect communication');
            break;
          case 'kaizen_improvement':
            recommendations.push('Engage in continuous improvement activities and quality circles');
            break;
          case 'omotenashi_service':
            recommendations.push('Shadow customer service exemplars and practice anticipatory service');
            break;
          case 'bushido_dedication':
            recommendations.push('Demonstrate commitment through consistent performance and ethical behavior');
            break;
          case 'ma_spatial_timing':
            recommendations.push('Study Japanese meeting etiquette and non-verbal communication');
            break;
          case 'iki_aesthetic_sophistication':
            recommendations.push('Develop understanding of Japanese aesthetic principles and professional presentation');
            break;
          case 'do_way_mastery':
            recommendations.push('Adopt long-term skill development mindset and seek mentorship');
            break;
          case 'on_ongaeshi_obligation':
            recommendations.push('Learn about Japanese relationship dynamics and reciprocal obligations');
            break;
        }
      }
    });
    
    return recommendations;
  }
  
  private estimateIntegrationTime(
    overallCompatibility: number,
    adaptabilityScore: number,
    developmentAreasCount: number
  ): string {
    const baseTime = 3; // months
    const compatibilityFactor = (100 - overallCompatibility) / 100;
    const adaptabilityFactor = (100 - adaptabilityScore) / 100;
    const complexityFactor = developmentAreasCount * 0.5;
    
    const estimatedMonths = baseTime + (compatibilityFactor * 6) + (adaptabilityFactor * 4) + complexityFactor;
    
    if (estimatedMonths <= 3) return '2-3 months';
    if (estimatedMonths <= 6) return '4-6 months';
    if (estimatedMonths <= 12) return '6-12 months';
    return '12+ months';
  }
  
  private createOnboardingPlan(
    developmentAreas: string[],
    companyProfile: CompanyCultureProfile,
    timeToIntegration: string
  ): string[] {
    const plan: string[] = [];
    
    // Phase 1: Foundation (First Month)
    plan.push('Week 1-2: Japanese workplace culture orientation and company-specific culture training');
    plan.push('Week 3-4: Shadow experienced Japanese colleagues and observe meeting dynamics');
    
    // Phase 2: Development (2-3 months)
    plan.push('Month 2: Begin targeted development in identified philosophy areas');
    plan.push('Month 3: Participate in team projects with increasing responsibility');
    
    // Phase 3: Integration (3-6 months)
    if (timeToIntegration.includes('6') || timeToIntegration.includes('12')) {
      plan.push('Month 4-6: Lead small projects while receiving cultural mentorship');
    }
    
    // Continuous support
    plan.push('Ongoing: Regular check-ins with cultural mentor and Japanese colleagues');
    plan.push('Ongoing: Participation in company cultural events and team-building activities');
    
    return plan;
  }
}

export const japaneseWorkplaceCulturalEngine = new JapaneseWorkplaceCulturalEngine();
