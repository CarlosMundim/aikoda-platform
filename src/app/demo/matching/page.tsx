'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Users, ArrowLeft, Target, Brain, Sparkles, 
  Building2, MapPin, DollarSign, Clock, Calendar,
  CheckCircle2, AlertCircle, TrendingUp, Filter,
  Star, Globe, Award, Briefcase, BarChart3
} from 'lucide-react';

const AIMatching = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [matches, setMatches] = useState<any[]>([]);
  const [filterScore, setFilterScore] = useState(80);

  // Demo jobs data
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Sankyo Corporation',
      location: 'Tokyo, Japan',
      salary: '¥8M - ¥12M',
      type: 'Full-time',
      posted: '2 days ago',
      requirements: {
        technical: ['Java', 'Spring Boot', 'AWS', 'Microservices'],
        cultural: { wa: 85, kaizen: 90, omotenashi: 80 },
        language: 'Japanese N2+',
        experience: '5+ years'
      },
      description: 'Leading engineering role in our digital transformation initiative'
    },
    {
      id: 2,
      title: 'Project Manager - Infrastructure',
      company: 'Mitsubishi Heavy Industries',
      location: 'Osaka, Japan',
      salary: '¥7M - ¥10M',
      type: 'Full-time',
      posted: '1 day ago',
      requirements: {
        technical: ['Project Management', 'Infrastructure', 'Agile', 'Risk Management'],
        cultural: { wa: 90, kaizen: 85, omotenashi: 85 },
        language: 'Japanese N1',
        experience: '7+ years'
      },
      description: 'Manage large-scale infrastructure projects across Japan'
    },
    {
      id: 3,
      title: 'AI/ML Engineer',
      company: 'NTT Data',
      location: 'Remote (Japan)',
      salary: '¥9M - ¥15M',
      type: 'Full-time',
      posted: '3 hours ago',
      requirements: {
        technical: ['Python', 'TensorFlow', 'MLOps', 'Cloud AI'],
        cultural: { wa: 80, kaizen: 95, omotenashi: 75 },
        language: 'Japanese N3+',
        experience: '3+ years'
      },
      description: 'Build next-generation AI solutions for enterprise clients'
    }
  ];

  // Demo candidates data
  const candidatePool = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      country: 'India',
      currentRole: 'Lead Software Engineer',
      experience: '8 years',
      skills: ['Java', 'Spring Boot', 'AWS', 'Microservices', 'Docker'],
      languages: ['English (Native)', 'Japanese (N2)', 'Hindi (Native)'],
      culturalProfile: {
        wa: 88,
        kaizen: 92,
        omotenashi: 85,
        hierarchy: 90,
        communication: 86,
        relationships: 91,
        trust: 87
      },
      education: 'M.Tech Computer Science - IIT Delhi',
      availability: 'Immediate',
      expectedSalary: '¥9M - ¥11M'
    },
    {
      id: 2,
      name: 'Maria Santos',
      country: 'Brazil',
      currentRole: 'Senior Project Manager',
      experience: '10 years',
      skills: ['Project Management', 'Agile', 'Infrastructure', 'Team Leadership'],
      languages: ['Portuguese (Native)', 'English (Fluent)', 'Japanese (N1)'],
      culturalProfile: {
        wa: 92,
        kaizen: 88,
        omotenashi: 90,
        hierarchy: 85,
        communication: 89,
        relationships: 94,
        trust: 91
      },
      education: 'MBA - FGV São Paulo',
      availability: '30 days notice',
      expectedSalary: '¥8M - ¥10M'
    },
    {
      id: 3,
      name: 'Nguyen Van Duc',
      country: 'Vietnam',
      currentRole: 'ML Engineer',
      experience: '5 years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'Cloud AI'],
      languages: ['Vietnamese (Native)', 'English (Fluent)', 'Japanese (N3)'],
      culturalProfile: {
        wa: 85,
        kaizen: 94,
        omotenashi: 82,
        hierarchy: 88,
        communication: 83,
        relationships: 87,
        trust: 86
      },
      education: 'MSc AI - Hanoi University of Technology',
      availability: 'Immediate',
      expectedSalary: '¥7M - ¥9M'
    },
    {
      id: 4,
      name: 'Sarah Mitchell',
      country: 'USA',
      currentRole: 'Technical Lead',
      experience: '6 years',
      skills: ['Java', 'AWS', 'Kubernetes', 'System Design', 'Team Management'],
      languages: ['English (Native)', 'Japanese (N2)'],
      culturalProfile: {
        wa: 82,
        kaizen: 90,
        omotenashi: 78,
        hierarchy: 75,
        communication: 92,
        relationships: 85,
        trust: 88
      },
      education: 'BS Computer Science - MIT',
      availability: '2 weeks notice',
      expectedSalary: '¥10M - ¥12M'
    }
  ];

  const runAIMatching = (job: any) => {
    setIsMatching(true);
    setSelectedJob(job);
    
    // Simulate AI matching process
    setTimeout(() => {
      // Calculate match scores for each candidate
      const matchedCandidates = candidatePool.map(candidate => {
        // Technical skills match
        const technicalMatch = job.requirements.technical.filter((skill: string) => 
          candidate.skills.some(cSkill => cSkill.toLowerCase().includes(skill.toLowerCase()))
        ).length / job.requirements.technical.length * 100;

        // Cultural fit calculation
        const culturalFit = (
          (Math.abs(job.requirements.cultural.wa - candidate.culturalProfile.wa) < 10 ? 33 : 0) +
          (Math.abs(job.requirements.cultural.kaizen - candidate.culturalProfile.kaizen) < 10 ? 33 : 0) +
          (Math.abs(job.requirements.cultural.omotenashi - candidate.culturalProfile.omotenashi) < 10 ? 34 : 0)
        );

        // Language requirement
        const languageMatch = candidate.languages.some(lang => 
          lang.includes('Japanese') && lang.includes(job.requirements.language.split(' ')[1])
        ) ? 100 : 50;

        // Overall match score
        const overallScore = Math.round(
          (technicalMatch * 0.4) + 
          (culturalFit * 0.4) + 
          (languageMatch * 0.2)
        );

        return {
          ...candidate,
          matchScore: overallScore,
          technicalMatch,
          culturalFit,
          languageMatch,
          matchDetails: {
            strengths: [
              technicalMatch > 70 && 'Strong technical skills alignment',
              culturalFit > 80 && 'Excellent cultural fit',
              languageMatch === 100 && 'Meets language requirements'
            ].filter(Boolean),
            considerations: [
              technicalMatch < 50 && 'May need technical upskilling',
              culturalFit < 60 && 'Cultural adaptation support recommended',
              languageMatch < 100 && 'Language training may be beneficial'
            ].filter(Boolean)
          }
        };
      }).sort((a, b) => b.matchScore - a.matchScore);

      setMatches(matchedCandidates);
      setIsMatching(false);
    }, 2500);
  };

  if (isMatching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-purple-600 rounded-full animate-pulse opacity-40"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-700 rounded-full w-full h-full flex items-center justify-center">
              <Brain className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">AI Matching Engine Running...</h2>
          <p className="text-gray-600 mb-8">Analyzing cultural fit, technical skills, and career compatibility</p>
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
            <span className="text-sm text-gray-600">Processing 47 cultural dimensions</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <Users className="w-6 h-6 text-purple-600" />
            <span className="text-lg font-semibold text-gray-900">AI Matching Engine</span>
          </div>
        </div>

        {!selectedJob ? (
          // Job Selection View
          <div>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Select a Job to Find Perfect Matches</h1>
              <p className="text-lg text-gray-600">Our AI will analyze candidates across 47 cultural dimensions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all cursor-pointer group"
                     onClick={() => runAIMatching(job)}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 flex items-center mt-1">
                        <Building2 className="w-4 h-4 mr-1" />
                        {job.company}
                      </p>
                    </div>
                    <Target className="w-8 h-8 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.posted}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.technical.slice(0, 3).map((skill: string, idx: number) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {job.requirements.technical.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        +{job.requirements.technical.length - 3} more
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors group-hover:shadow-lg">
                    Find Matches with AI
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Matching Results View
          <div>
            {/* Job Summary */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">AI Matches for: {selectedJob.title}</h1>
                  <p className="text-purple-100">{selectedJob.company} • {selectedJob.location}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">{matches.filter(m => m.matchScore >= filterScore).length}</div>
                  <div className="text-purple-100">Qualified Matches</div>
                </div>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Filter by Match Score</h2>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filterScore}
                    onChange={(e) => setFilterScore(parseInt(e.target.value))}
                    className="w-48"
                  />
                  <span className="text-gray-700 font-semibold min-w-[60px]">{filterScore}%+</span>
                </div>
              </div>
            </div>

            {/* Matches Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {matches
                .filter(match => match.matchScore >= filterScore)
                .map((match, idx) => (
                <div key={match.id} className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                  match.matchScore >= 90 ? 'border-green-400' : 
                  match.matchScore >= 80 ? 'border-blue-400' : 
                  'border-gray-200'
                } hover:shadow-xl transition-all`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                        match.matchScore >= 90 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                        match.matchScore >= 80 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        'bg-gradient-to-br from-gray-500 to-gray-600'
                      }`}>
                        {match.matchScore}%
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{match.name}</h3>
                        <p className="text-gray-600">{match.currentRole}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Globe className="w-3 h-3 mr-1" />
                          {match.country} • {match.experience}
                        </p>
                      </div>
                    </div>
                    {idx === 0 && match.matchScore >= 90 && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Top Match
                      </span>
                    )}
                  </div>

                  {/* Match Breakdown */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Technical</div>
                      <div className="text-2xl font-bold text-gray-900">{Math.round(match.technicalMatch)}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Cultural</div>
                      <div className="text-2xl font-bold text-gray-900">{Math.round(match.culturalFit)}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Language</div>
                      <div className="text-2xl font-bold text-gray-900">{match.languageMatch}%</div>
                    </div>
                  </div>

                  {/* Cultural Profile Mini */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Cultural Alignment</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Wa:</span>
                        <span className="ml-1 font-semibold">{match.culturalProfile.wa}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Kaizen:</span>
                        <span className="ml-1 font-semibold">{match.culturalProfile.kaizen}%</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Omotenashi:</span>
                        <span className="ml-1 font-semibold">{match.culturalProfile.omotenashi}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Matching Skills</div>
                    <div className="flex flex-wrap gap-2">
                      {match.skills
                        .filter((skill: string) => selectedJob.requirements.technical.some((req: string) => 
                          skill.toLowerCase().includes(req.toLowerCase())
                        ))
                        .map((skill: string, skillIdx: number) => (
                          <span key={skillIdx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Match Insights */}
                  <div className="space-y-2 mb-4">
                    {match.matchDetails.strengths.map((strength: string, sIdx: number) => (
                      <div key={sIdx} className="flex items-start text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{strength}</span>
                      </div>
                    ))}
                    {match.matchDetails.considerations.map((consideration: string, cIdx: number) => (
                      <div key={cIdx} className="flex items-start text-sm">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{consideration}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      View Full Profile
                    </button>
                    <button className="flex-1 border-2 border-purple-600 text-purple-600 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                      Schedule Interview
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Back Button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setMatches([]);
                }}
                className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Match Another Job
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIMatching;