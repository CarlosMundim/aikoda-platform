'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FileCheck, ArrowLeft, Upload, CheckCircle2, AlertCircle,
  Clock, Calendar, Globe, Shield, Activity, TrendingUp,
  FileText, User, Building2, MapPin, Briefcase, Star,
  AlertTriangle, Info, ChevronRight
} from 'lucide-react';

const VisaProcessing = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [selectedCandidate, setSelectedCandidate] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingResults, setProcessingResults] = useState<any>(null);

  // Demo visa applications
  const [applications] = useState([
    {
      id: 1,
      candidate: 'Kumar Patel',
      country: 'India',
      visaType: 'Engineer/Specialist in Humanities',
      company: 'Sankyo Corporation',
      status: 'processing',
      progress: 65,
      submittedDate: '2024-01-15',
      estimatedCompletion: '2024-02-20',
      currentStep: 'Certificate of Eligibility (CoE) Review',
      documents: {
        passport: true,
        degree: true,
        experience: true,
        coe: 'pending',
        healthCheck: false,
        criminalRecord: false
      }
    },
    {
      id: 2,
      candidate: 'Maria Santos',
      country: 'Brazil',
      visaType: 'Intra-company Transferee',
      company: 'Mitsubishi Heavy Industries',
      status: 'approved',
      progress: 100,
      submittedDate: '2023-12-10',
      approvedDate: '2024-01-12',
      visaNumber: 'ICT-2024-001234',
      documents: {
        passport: true,
        degree: true,
        experience: true,
        coe: true,
        healthCheck: true,
        criminalRecord: true
      }
    },
    {
      id: 3,
      candidate: 'Nguyen Van Duc',
      country: 'Vietnam',
      visaType: 'Skilled Labor',
      company: 'Toyota Manufacturing',
      status: 'review',
      progress: 45,
      submittedDate: '2024-01-18',
      estimatedCompletion: '2024-03-01',
      currentStep: 'Document Verification',
      documents: {
        passport: true,
        degree: true,
        experience: true,
        coe: 'pending',
        healthCheck: 'pending',
        criminalRecord: false
      },
      issues: ['Missing JLPT N2 certificate', 'Experience letter needs apostille']
    }
  ]);

  const visaTypes = [
    { value: 'engineer', label: 'Engineer/Specialist in Humanities/International Services' },
    { value: 'skilled', label: 'Specified Skilled Worker (SSW)' },
    { value: 'technical', label: 'Technical Intern Training' },
    { value: 'intra', label: 'Intra-company Transferee' },
    { value: 'business', label: 'Business Manager' },
    { value: 'instructor', label: 'Instructor' }
  ];

  const processNewApplication = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setProcessingResults({
        eligibility: {
          status: 'eligible',
          score: 92,
          visaType: 'Engineer/Specialist in Humanities',
          duration: '3 years (renewable)',
          processingTime: '45-60 days'
        },
        requirements: {
          met: [
            'Bachelor\'s degree or higher in relevant field',
            'Job offer from registered Japanese company',
            'Salary meets minimum threshold (¥3M/year)',
            'Company has proper sponsor status'
          ],
          pending: [
            'Japanese Language Proficiency Test (JLPT) N2 or higher',
            'Health examination at approved clinic',
            'Criminal background check with apostille'
          ]
        },
        documents: [
          { name: 'Valid Passport', status: 'ready', required: true },
          { name: 'University Degree Certificate', status: 'ready', required: true },
          { name: 'Employment Contract', status: 'ready', required: true },
          { name: 'Certificate of Eligibility (CoE)', status: 'pending', required: true },
          { name: 'JLPT Certificate', status: 'missing', required: false },
          { name: 'Health Certificate', status: 'pending', required: true },
          { name: 'Criminal Record', status: 'pending', required: true },
          { name: 'Resume/CV', status: 'ready', required: true },
          { name: 'Company Registration', status: 'ready', required: true }
        ],
        timeline: [
          { step: 'Document Collection', duration: '7-10 days', status: 'current' },
          { step: 'CoE Application', duration: '20-30 days', status: 'upcoming' },
          { step: 'Visa Application', duration: '5-7 days', status: 'upcoming' },
          { step: 'Visa Issuance', duration: '3-5 days', status: 'upcoming' }
        ],
        aiRecommendations: [
          'Start JLPT N2 preparation immediately - not required but highly beneficial',
          'Schedule health examination within next 2 weeks',
          'Request criminal background check now (processing takes 2-3 weeks)',
          'Prepare financial documents to demonstrate stability'
        ]
      });
      setIsProcessing(false);
    }, 2500);
  };

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-green-600 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-0 bg-green-600 rounded-full animate-pulse opacity-40"></div>
            <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-full w-full h-full flex items-center justify-center">
              <Shield className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Visa Eligibility...</h2>
          <p className="text-gray-600 mb-8">Checking requirements against Japanese immigration law</p>
          <div className="flex items-center justify-center space-x-2">
            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
            <span className="text-sm text-gray-600">Analyzing 127 visa criteria</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/demo/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center space-x-2">
            <FileCheck className="w-6 h-6 text-green-600" />
            <span className="text-lg font-semibold text-gray-900">Visa Processing System</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('new')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                activeTab === 'new' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              New Application
            </button>
            <button
              onClick={() => setActiveTab('tracking')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                activeTab === 'tracking' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Application Tracking
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${
                activeTab === 'analytics' 
                  ? 'text-green-600 border-b-2 border-green-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Visa Analytics
            </button>
          </div>
        </div>

        {activeTab === 'new' && !processingResults && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">New Visa Application Assessment</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Candidate Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter candidate name"
                  value={selectedCandidate?.name || ''}
                  onChange={(e) => setSelectedCandidate({ ...selectedCandidate, name: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country of Origin</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select country</option>
                  <option value="India">India</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Myanmar">Myanmar</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Visa Type</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option value="">Select visa type</option>
                  {visaTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sponsoring Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Company name in Japan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Position in Japan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Annual Salary (JPY)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 5000000"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Eligibility Check</h3>
              <div className="space-y-3 mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span className="ml-3 text-gray-700">Bachelor's degree or 10+ years experience</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span className="ml-3 text-gray-700">Job offer from Japanese company</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span className="ml-3 text-gray-700">Clean criminal record</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-green-600 rounded focus:ring-green-500" />
                  <span className="ml-3 text-gray-700">Valid passport (6+ months)</span>
                </label>
              </div>
            </div>

            <button
              onClick={processNewApplication}
              className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Shield className="w-5 h-5" />
              <span>Run AI Visa Assessment</span>
            </button>
          </div>
        )}

        {processingResults && (
          <div className="space-y-6">
            {/* Eligibility Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Visa Eligibility Assessment</h2>
                <div className="flex items-center space-x-2">
                  {processingResults.eligibility.status === 'eligible' ? (
                    <>
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <span className="text-lg font-semibold text-green-600">ELIGIBLE</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-6 h-6 text-red-500" />
                      <span className="text-lg font-semibold text-red-600">NOT ELIGIBLE</span>
                    </>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{processingResults.eligibility.score}%</div>
                  <div className="text-gray-700">Eligibility Score</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-xl font-bold text-blue-600 mb-2">{processingResults.eligibility.visaType}</div>
                  <div className="text-gray-700">Recommended Visa</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="text-xl font-bold text-purple-600 mb-2">{processingResults.eligibility.processingTime}</div>
                  <div className="text-gray-700">Processing Time</div>
                </div>
              </div>

              {/* Requirements Status */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                    Requirements Met
                  </h3>
                  <ul className="space-y-2">
                    {processingResults.requirements.met.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 mr-2 text-orange-600" />
                    Action Required
                  </h3>
                  <ul className="space-y-2">
                    {processingResults.requirements.pending.map((req: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <Clock className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Document Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {processingResults.documents.map((doc: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-700">{doc.name}</span>
                      {doc.required && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Required</span>}
                    </div>
                    <div>
                      {doc.status === 'ready' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {doc.status === 'pending' && <Clock className="w-5 h-5 text-orange-500" />}
                      {doc.status === 'missing' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-purple-600" />
                AI Recommendations
              </h3>
              <div className="space-y-3">
                {processingResults.aiRecommendations.map((rec: string, idx: number) => (
                  <div key={idx} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{rec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Start Application Process
              </button>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Download Requirements
              </button>
              <button
                onClick={() => setProcessingResults(null)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
              >
                New Assessment
              </button>
            </div>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="space-y-6">
            {applications.map(app => (
              <div key={app.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{app.candidate}</h3>
                    <p className="text-gray-600">
                      {app.visaType} • {app.company}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center mt-1">
                      <Globe className="w-3 h-3 mr-1" />
                      {app.country}
                    </p>
                  </div>
                  <div className="text-right">
                    {app.status === 'processing' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        <Activity className="w-4 h-4 mr-1 animate-pulse" />
                        Processing
                      </span>
                    )}
                    {app.status === 'approved' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <CheckCircle2 className="w-4 h-4 mr-1" />
                        Approved
                      </span>
                    )}
                    {app.status === 'review' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Under Review
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{app.progress}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        app.status === 'approved' ? 'bg-green-500' :
                        app.status === 'review' ? 'bg-orange-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${app.progress}%` }}
                    />
                  </div>
                </div>

                {/* Timeline Info */}
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Submitted</div>
                    <div className="font-semibold text-gray-900">{app.submittedDate}</div>
                  </div>
                  {app.status === 'approved' ? (
                    <>
                      <div>
                        <div className="text-sm text-gray-500">Approved</div>
                        <div className="font-semibold text-gray-900">{app.approvedDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Visa Number</div>
                        <div className="font-semibold text-gray-900">{app.visaNumber}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="text-sm text-gray-500">Current Step</div>
                        <div className="font-semibold text-gray-900">{app.currentStep}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Est. Completion</div>
                        <div className="font-semibold text-gray-900">{app.estimatedCompletion}</div>
                      </div>
                    </>
                  )}
                </div>

                {/* Document Status */}
                <div className="border-t pt-4">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Document Status</div>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(app.documents).map(([doc, status]) => (
                      <span 
                        key={doc}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          status === true ? 'bg-green-100 text-green-800' :
                          status === 'pending' ? 'bg-orange-100 text-orange-800' :
                          'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {status === true && <CheckCircle2 className="w-3 h-3 mr-1" />}
                        {status === 'pending' && <Clock className="w-3 h-3 mr-1" />}
                        {status === false && <AlertCircle className="w-3 h-3 mr-1" />}
                        {doc.charAt(0).toUpperCase() + doc.slice(1).replace(/([A-Z])/g, ' $1')}
                      </span>
                    ))}
                  </div>
                </div>

                {app.issues && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-orange-900 mb-1">Action Required</div>
                        <ul className="text-sm text-orange-800 space-y-1">
                          {app.issues.map((issue: string, idx: number) => (
                            <li key={idx}>• {issue}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Visa Success Rates */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Visa Success Rates by Type</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Engineer/Specialist</span>
                    <span className="font-semibold">96%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '96%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Specified Skilled Worker</span>
                    <span className="font-semibold">89%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '89%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Intra-company Transfer</span>
                    <span className="font-semibold">98%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: '98%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Technical Intern</span>
                    <span className="font-semibold">92%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Time Analytics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Average Processing Times</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">Document Collection</div>
                    <div className="text-sm text-gray-600">Initial preparation phase</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">7 days</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">CoE Processing</div>
                    <div className="text-sm text-gray-600">Immigration bureau review</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">28 days</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">Visa Issuance</div>
                    <div className="text-sm text-gray-600">Final approval</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">5 days</div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-gray-900">Total Average</div>
                    <div className="text-3xl font-bold text-gray-900">40 days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Country Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Applications by Country</h3>
              <div className="space-y-3">
                {[
                  { country: 'India', count: 342, flag: '🇮🇳' },
                  { country: 'Vietnam', count: 278, flag: '🇻🇳' },
                  { country: 'Philippines', count: 189, flag: '🇵🇭' },
                  { country: 'Indonesia', count: 156, flag: '🇮🇩' },
                  { country: 'Brazil', count: 98, flag: '🇧🇷' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.flag}</span>
                      <span className="font-medium text-gray-900">{item.country}</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">{item.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-6">This Month's Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">156</div>
                  <div className="text-green-100">Applications Processed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">94%</div>
                  <div className="text-green-100">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">32</div>
                  <div className="text-green-100">Days Avg Processing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">12</div>
                  <div className="text-green-100">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisaProcessing;