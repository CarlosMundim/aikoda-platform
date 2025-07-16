/**
 * Enterprise-Grade Report Generation Engine
 * Professional PDF, CSV, Excel report generation for Japanese corporate market
 * Follows enterprise SaaS standards with cultural intelligence integration
 * Designed for Osaka/Tokyo executive-level reporting requirements
 */

import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';
import { format } from 'date-fns';
import { JapaneseWorkplaceFit } from './cultural-engine-japanese';
import { PsychologicalProfile } from './psychological-assessment-engine';

export interface CandidateReportData {
  candidate: {
    id: string;
    name: string;
    nameEn: string;
    email: string;
    phone: string;
    position: string;
    experience: string;
    skills: string[];
    education: string;
    languages: string[];
  };
  company: {
    id: string;
    name: string;
    industry: string;
    position: string;
    requirements: string[];
  };
  culturalAssessment: JapaneseWorkplaceFit;
  psychologicalProfile: PsychologicalProfile;
  overallRecommendation: {
    fitScore: number;
    recommendation: 'Highly Recommended' | 'Recommended' | 'Conditional' | 'Not Recommended';
    reasoning: string[];
    nextSteps: string[];
    riskFactors: string[];
    timeline: string;
  };
  assessmentDate: string;
  reportGenerated: string;
}

export interface MarketIntelligenceData {
  period: string;
  region: 'Tokyo' | 'Osaka' | 'Kyoto' | 'Yokohama' | 'Nagoya' | 'All Japan';
  industry: string;
  metrics: {
    totalCandidates: number;
    successfulPlacements: number;
    averageCulturalFit: number;
    averagePsychologicalFit: number;
    topSkillsInDemand: Array<{skill: string; demand: number; growth: number}>;
    salaryRanges: Array<{level: string; min: number; max: number; currency: string}>;
    culturalTrends: Array<{philosophy: string; importance: number; change: number}>;
    timeToPlacement: number;
    clientSatisfaction: number;
  };
  insights: {
    keyFindings: string[];
    marketTrends: string[];
    recommendations: string[];
    riskFactors: string[];
    opportunities: string[];
  };
  benchmarks: {
    industryAverages: Record<string, number>;
    competitorAnalysis: Array<{metric: string; ourPerformance: number; industry: number}>;
    performanceIndicators: Array<{kpi: string; value: number; target: number; status: string}>;
  };
}

export class EnterpriseReportGenerator {
  
  /**
   * Generate comprehensive candidate assessment report in PDF format
   */
  async generateCandidateReportPDF(data: CandidateReportData): Promise<Uint8Array> {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Header - Company Logo Space and Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('候補者評価レポート', 20, yPosition);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Candidate Assessment Report', 20, yPosition + 7);
    yPosition += 25;
    
    // Report Metadata
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Report Generated: ${format(new Date(data.reportGenerated), 'yyyy年MM月dd日 HH:mm')}`, 20, yPosition);
    doc.text(`Assessment Date: ${format(new Date(data.assessmentDate), 'yyyy年MM月dd日')}`, 120, yPosition);
    yPosition += 15;
    
    // Candidate Information Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0);
    doc.text('候補者情報 / Candidate Information', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name / 氏名: ${data.candidate.name} (${data.candidate.nameEn})`, 25, yPosition);
    yPosition += 6;
    doc.text(`Position Applied / 応募職種: ${data.candidate.position}`, 25, yPosition);
    yPosition += 6;
    doc.text(`Experience / 経験: ${data.candidate.experience}`, 25, yPosition);
    yPosition += 6;
    doc.text(`Contact / 連絡先: ${data.candidate.email} | ${data.candidate.phone}`, 25, yPosition);
    yPosition += 15;
    
    // Overall Assessment Summary
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('総合評価 / Overall Assessment', 20, yPosition);
    yPosition += 10;
    
    // Fit Score Box
    doc.setDrawColor(0);
    doc.setFillColor(240, 248, 255);
    doc.rect(25, yPosition - 5, 160, 25, 'F');
    doc.rect(25, yPosition - 5, 160, 25, 'S');
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Overall Fit Score: ${data.overallRecommendation.fitScore}/100`, 30, yPosition + 5);
    doc.text(`Recommendation: ${data.overallRecommendation.recommendation}`, 30, yPosition + 15);
    yPosition += 35;
    
    // Cultural Assessment Results
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('文化適合性評価 / Cultural Fit Assessment', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Cultural Compatibility: ${data.culturalAssessment.overallCompatibility.toFixed(1)}%`, 25, yPosition);
    yPosition += 6;
    doc.text(`Adaptability Score: ${data.culturalAssessment.adaptabilityScore.toFixed(1)}%`, 25, yPosition);
    yPosition += 6;
    doc.text(`Integration Timeline: ${data.culturalAssessment.timeToIntegration}`, 25, yPosition);
    yPosition += 12;
    
    // Psychological Assessment Results
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('心理的適性評価 / Psychological Assessment', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text(`Psychological Fit: ${data.psychologicalProfile.overallPsychologicalFit.toFixed(1)}%`, 25, yPosition);
    yPosition += 6;
    doc.text(`Leadership Potential: ${data.psychologicalProfile.leadershipPotential.toFixed(1)}%`, 25, yPosition);
    yPosition += 6;
    doc.text(`Team Fit Score: ${data.psychologicalProfile.teamFitScore.toFixed(1)}%`, 25, yPosition);
    yPosition += 6;
    doc.text(`Stress Resilience: ${data.psychologicalProfile.stressResilienceScore.toFixed(1)}%`, 25, yPosition);
    yPosition += 15;
    
    // Add new page for detailed analysis
    doc.addPage();
    yPosition = 20;
    
    // Strengths and Development Areas
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('強み・開発領域 / Strengths & Development Areas', 20, yPosition);
    yPosition += 15;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Strengths / 強み:', 25, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const allStrengths = [...data.culturalAssessment.strengthAreas, ...data.psychologicalProfile.strengthAreas];
    allStrengths.slice(0, 8).forEach(strength => {
      doc.text(`• ${strength}`, 30, yPosition);
      yPosition += 5;
    });
    yPosition += 5;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Development Areas / 開発領域:', 25, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const allDevelopmentAreas = [...data.culturalAssessment.developmentAreas, ...data.psychologicalProfile.developmentAreas];
    allDevelopmentAreas.slice(0, 8).forEach(area => {
      doc.text(`• ${area}`, 30, yPosition);
      yPosition += 5;
    });
    yPosition += 10;
    
    // Recommendations Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('推奨事項 / Recommendations', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    data.overallRecommendation.reasoning.forEach(reason => {
      doc.text(`• ${reason}`, 25, yPosition);
      yPosition += 5;
    });
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text('This report is confidential and proprietary to the hiring organization.', 20, 280);
    doc.text('Generated by aiKODA Cultural Intelligence Platform', 20, 285);
    
    return doc.output('arraybuffer') as Uint8Array;
  }
  
  /**
   * Generate candidate assessment data in CSV format
   */
  generateCandidateReportCSV(data: CandidateReportData): string {
    const headers = [
      'Candidate ID',
      'Name (Japanese)',
      'Name (English)', 
      'Email',
      'Phone',
      'Position',
      'Experience',
      'Skills',
      'Overall Fit Score',
      'Recommendation',
      'Cultural Compatibility %',
      'Adaptability Score %',
      'Integration Timeline',
      'Psychological Fit %',
      'Leadership Potential %',
      'Team Fit Score %',
      'Stress Resilience %',
      'Communication Style',
      'Working Style',
      'Motivation Profile',
      'Strengths',
      'Development Areas',
      'Risk Factors',
      'Assessment Date',
      'Report Generated'
    ];
    
    const row = [
      data.candidate.id,
      data.candidate.name,
      data.candidate.nameEn,
      data.candidate.email,
      data.candidate.phone,
      data.candidate.position,
      data.candidate.experience,
      data.candidate.skills.join('; '),
      data.overallRecommendation.fitScore,
      data.overallRecommendation.recommendation,
      data.culturalAssessment.overallCompatibility.toFixed(1),
      data.culturalAssessment.adaptabilityScore.toFixed(1),
      data.culturalAssessment.timeToIntegration,
      data.psychologicalProfile.overallPsychologicalFit.toFixed(1),
      data.psychologicalProfile.leadershipPotential.toFixed(1),
      data.psychologicalProfile.teamFitScore.toFixed(1),
      data.psychologicalProfile.stressResilienceScore.toFixed(1),
      data.psychologicalProfile.communicationStyle,
      data.psychologicalProfile.workingStyle,
      data.psychologicalProfile.motivationProfile.join('; '),
      [...data.culturalAssessment.strengthAreas, ...data.psychologicalProfile.strengthAreas].join('; '),
      [...data.culturalAssessment.developmentAreas, ...data.psychologicalProfile.developmentAreas].join('; '),
      [...data.culturalAssessment.culturalRiskFactors, ...data.psychologicalProfile.riskFactors].join('; '),
      data.assessmentDate,
      data.reportGenerated
    ];
    
    const csvContent = [
      headers.join(','),
      row.map(field => `"${field}"`).join(',')
    ].join('\n');
    
    return csvContent;
  }
  
  /**
   * Generate candidate assessment data in Excel format
   */
  generateCandidateReportExcel(data: CandidateReportData): Uint8Array {
    const workbook = XLSX.utils.book_new();
    
    // Summary Sheet
    const summaryData = [
      ['候補者評価レポート / Candidate Assessment Report', '', '', ''],
      ['', '', '', ''],
      ['Report Generated', format(new Date(data.reportGenerated), 'yyyy-MM-dd HH:mm'), '', ''],
      ['Assessment Date', data.assessmentDate, '', ''],
      ['', '', '', ''],
      ['候補者情報 / Candidate Information', '', '', ''],
      ['Name (Japanese)', data.candidate.name, 'Name (English)', data.candidate.nameEn],
      ['Email', data.candidate.email, 'Phone', data.candidate.phone],
      ['Position Applied', data.candidate.position, 'Experience', data.candidate.experience],
      ['Skills', data.candidate.skills.join(', '), '', ''],
      ['', '', '', ''],
      ['総合評価 / Overall Assessment', '', '', ''],
      ['Overall Fit Score', data.overallRecommendation.fitScore + '/100', 'Recommendation', data.overallRecommendation.recommendation],
      ['', '', '', ''],
      ['文化適合性評価 / Cultural Assessment', '', '', ''],
      ['Cultural Compatibility', data.culturalAssessment.overallCompatibility.toFixed(1) + '%', 'Adaptability Score', data.culturalAssessment.adaptabilityScore.toFixed(1) + '%'],
      ['Integration Timeline', data.culturalAssessment.timeToIntegration, '', ''],
      ['', '', '', ''],
      ['心理的適性評価 / Psychological Assessment', '', '', ''],
      ['Psychological Fit', data.psychologicalProfile.overallPsychologicalFit.toFixed(1) + '%', 'Leadership Potential', data.psychologicalProfile.leadershipPotential.toFixed(1) + '%'],
      ['Team Fit Score', data.psychologicalProfile.teamFitScore.toFixed(1) + '%', 'Stress Resilience', data.psychologicalProfile.stressResilienceScore.toFixed(1) + '%'],
      ['Communication Style', data.psychologicalProfile.communicationStyle, 'Working Style', data.psychologicalProfile.workingStyle],
      ['Motivation Profile', data.psychologicalProfile.motivationProfile.join(', '), '', '']
    ];
    
    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary');
    
    // Cultural Analysis Sheet
    const culturalData = [
      ['Cultural Philosophy', 'Score', 'Weight', 'Assessment'],
      ...Object.entries(data.culturalAssessment.philosophyScores).map(([philosophy, score]) => [
        philosophy.replace(/_/g, ' '),
        score,
        '高 / High',
        score >= 80 ? '優秀 / Excellent' : score >= 70 ? '良好 / Good' : score >= 60 ? '適正 / Adequate' : '要改善 / Needs Improvement'
      ])
    ];
    
    const culturalSheet = XLSX.utils.aoa_to_sheet(culturalData);
    XLSX.utils.book_append_sheet(workbook, culturalSheet, 'Cultural Analysis');
    
    // Psychological Analysis Sheet
    const psychologicalData = [
      ['Dimension', 'Score', 'Category', 'Assessment'],
      ...Object.entries(data.psychologicalProfile.dimensionScores).map(([dimension, score]) => [
        dimension.replace(/_/g, ' '),
        score,
        'Psychological',
        score >= 80 ? '強み / Strength' : score >= 70 ? '良好 / Good' : score >= 60 ? '平均 / Average' : '開発要 / Development Needed'
      ])
    ];
    
    const psychologicalSheet = XLSX.utils.aoa_to_sheet(psychologicalData);
    XLSX.utils.book_append_sheet(workbook, psychologicalSheet, 'Psychological Analysis');
    
    // Recommendations Sheet
    const recommendationsData = [
      ['Type', 'Recommendation'],
      ['Integration', ...data.culturalAssessment.integrationRecommendations.map(rec => ['Integration', rec])].flat(),
      ['Development', ...data.psychologicalProfile.recommendations.map(rec => ['Development', rec])].flat(),
      ['Next Steps', ...data.overallRecommendation.nextSteps.map(step => ['Next Steps', step])].flat()
    ];
    
    const recommendationsSheet = XLSX.utils.aoa_to_sheet(recommendationsData);
    XLSX.utils.book_append_sheet(workbook, recommendationsSheet, 'Recommendations');
    
    return XLSX.write(workbook, { type: 'array', bookType: 'xlsx' }) as Uint8Array;
  }
  
  /**
   * Generate market intelligence report in PDF format
   */
  async generateMarketIntelligenceReportPDF(data: MarketIntelligenceData): Promise<Uint8Array> {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('市場インテリジェンス・レポート', 20, yPosition);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Market Intelligence Report', 20, yPosition + 7);
    yPosition += 25;
    
    // Report Metadata
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Period: ${data.period}`, 20, yPosition);
    doc.text(`Region: ${data.region}`, 80, yPosition);
    doc.text(`Industry: ${data.industry}`, 140, yPosition);
    yPosition += 15;
    
    // Executive Summary Box
    doc.setDrawColor(0);
    doc.setFillColor(245, 248, 250);
    doc.rect(20, yPosition - 5, 170, 40, 'F');
    doc.rect(20, yPosition - 5, 170, 40, 'S');
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0);
    doc.text('エグゼクティブ・サマリー / Executive Summary', 25, yPosition + 5);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Total Candidates Assessed: ${data.metrics.totalCandidates.toLocaleString()}`, 25, yPosition + 15);
    doc.text(`Successful Placements: ${data.metrics.successfulPlacements.toLocaleString()}`, 25, yPosition + 22);
    doc.text(`Average Cultural Fit: ${data.metrics.averageCulturalFit.toFixed(1)}%`, 100, yPosition + 15);
    doc.text(`Average Time to Placement: ${data.metrics.timeToPlacement} days`, 100, yPosition + 22);
    doc.text(`Client Satisfaction: ${data.metrics.clientSatisfaction.toFixed(1)}%`, 25, yPosition + 29);
    yPosition += 50;
    
    // Key Metrics Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('主要指標 / Key Metrics', 20, yPosition);
    yPosition += 15;
    
    // Skills in Demand Table
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('需要の高いスキル / Top Skills in Demand', 25, yPosition);
    yPosition += 10;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Skill', 30, yPosition);
    doc.text('Demand', 80, yPosition);
    doc.text('Growth', 130, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    data.metrics.topSkillsInDemand.slice(0, 8).forEach(skill => {
      doc.text(skill.skill, 30, yPosition);
      doc.text(skill.demand.toString(), 80, yPosition);
      doc.text(`+${skill.growth}%`, 130, yPosition);
      yPosition += 5;
    });
    yPosition += 10;
    
    // Add new page for insights
    doc.addPage();
    yPosition = 20;
    
    // Market Insights
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('市場洞察 / Market Insights', 20, yPosition);
    yPosition += 15;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Key Findings / 主要発見:', 25, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    data.insights.keyFindings.forEach(finding => {
      doc.text(`• ${finding}`, 30, yPosition);
      yPosition += 5;
    });
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Market Trends / 市場動向:', 25, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    data.insights.marketTrends.forEach(trend => {
      doc.text(`• ${trend}`, 30, yPosition);
      yPosition += 5;
    });
    yPosition += 10;
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommendations / 推奨事項:', 25, yPosition);
    yPosition += 8;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    data.insights.recommendations.forEach(rec => {
      doc.text(`• ${rec}`, 30, yPosition);
      yPosition += 5;
    });
    
    // Performance Benchmarks
    yPosition += 15;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('パフォーマンス・ベンチマーク / Performance Benchmarks', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('KPI', 30, yPosition);
    doc.text('Our Performance', 80, yPosition);
    doc.text('Industry Average', 130, yPosition);
    doc.text('Status', 160, yPosition);
    yPosition += 5;
    
    doc.setFont('helvetica', 'normal');
    data.benchmarks.performanceIndicators.forEach(indicator => {
      doc.text(indicator.kpi, 30, yPosition);
      doc.text(indicator.value.toFixed(1), 80, yPosition);
      doc.text(indicator.target.toFixed(1), 130, yPosition);
      doc.setTextColor(indicator.status === 'Above Target' ? 'green' : 'red');
      doc.text(indicator.status, 160, yPosition);
      doc.setTextColor(0);
      yPosition += 5;
    });
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text('Confidential Market Intelligence Report - aiKODA Platform', 20, 280);
    doc.text(`Generated: ${format(new Date(), 'yyyy-MM-dd HH:mm')}`, 20, 285);
    
    return doc.output('arraybuffer') as Uint8Array;
  }
  
  /**
   * Generate market intelligence data in Excel format
   */
  generateMarketIntelligenceReportExcel(data: MarketIntelligenceData): Uint8Array {
    const workbook = XLSX.utils.book_new();
    
    // Executive Summary Sheet
    const summaryData = [
      ['市場インテリジェンス・レポート / Market Intelligence Report', '', '', ''],
      ['', '', '', ''],
      ['Period', data.period, 'Region', data.region],
      ['Industry', data.industry, 'Generated', format(new Date(), 'yyyy-MM-dd HH:mm')],
      ['', '', '', ''],
      ['Key Metrics / 主要指標', '', '', ''],
      ['Total Candidates', data.metrics.totalCandidates, 'Successful Placements', data.metrics.successfulPlacements],
      ['Avg Cultural Fit', data.metrics.averageCulturalFit.toFixed(1) + '%', 'Avg Psychological Fit', data.metrics.averagePsychologicalFit.toFixed(1) + '%'],
      ['Time to Placement', data.metrics.timeToPlacement + ' days', 'Client Satisfaction', data.metrics.clientSatisfaction.toFixed(1) + '%'],
    ];
    
    const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Executive Summary');
    
    // Skills Analysis Sheet
    const skillsData = [
      ['Skill', 'Demand Score', 'Growth %', 'Market Position'],
      ...data.metrics.topSkillsInDemand.map(skill => [
        skill.skill,
        skill.demand,
        skill.growth,
        skill.growth > 10 ? 'High Growth' : skill.growth > 5 ? 'Moderate Growth' : 'Stable'
      ])
    ];
    
    const skillsSheet = XLSX.utils.aoa_to_sheet(skillsData);
    XLSX.utils.book_append_sheet(workbook, skillsSheet, 'Skills Analysis');
    
    // Cultural Trends Sheet
    const culturalData = [
      ['Philosophy', 'Importance', 'Change %', 'Trend'],
      ...data.metrics.culturalTrends.map(trend => [
        trend.philosophy,
        trend.importance,
        trend.change,
        trend.change > 0 ? 'Increasing' : trend.change < 0 ? 'Decreasing' : 'Stable'
      ])
    ];
    
    const culturalSheet = XLSX.utils.aoa_to_sheet(culturalData);
    XLSX.utils.book_append_sheet(workbook, culturalSheet, 'Cultural Trends');
    
    // Benchmarks Sheet
    const benchmarkData = [
      ['KPI', 'Our Performance', 'Target', 'Industry Average', 'Status'],
      ...data.benchmarks.performanceIndicators.map(indicator => [
        indicator.kpi,
        indicator.value,
        indicator.target,
        Object.values(data.benchmarks.industryAverages)[0] || 'N/A',
        indicator.status
      ])
    ];
    
    const benchmarkSheet = XLSX.utils.aoa_to_sheet(benchmarkData);
    XLSX.utils.book_append_sheet(workbook, benchmarkSheet, 'Performance Benchmarks');
    
    // Insights Sheet
    const insightsData = [
      ['Category', 'Insight'],
      ...data.insights.keyFindings.map(finding => ['Key Finding', finding]),
      ...data.insights.marketTrends.map(trend => ['Market Trend', trend]),
      ...data.insights.recommendations.map(rec => ['Recommendation', rec]),
      ...data.insights.opportunities.map(opp => ['Opportunity', opp]),
      ...data.insights.riskFactors.map(risk => ['Risk Factor', risk])
    ];
    
    const insightsSheet = XLSX.utils.aoa_to_sheet(insightsData);
    XLSX.utils.book_append_sheet(workbook, insightsSheet, 'Market Insights');
    
    return XLSX.write(workbook, { type: 'array', bookType: 'xlsx' }) as Uint8Array;
  }
  
  /**
   * Generate batch candidate comparison report
   */
  generateBatchComparisonReportExcel(candidates: CandidateReportData[]): Uint8Array {
    const workbook = XLSX.utils.book_new();
    
    // Comparison Summary Sheet
    const comparisonData = [
      [
        'Candidate Name',
        'Position',
        'Overall Fit Score',
        'Recommendation', 
        'Cultural Compatibility %',
        'Psychological Fit %',
        'Leadership Potential %',
        'Team Fit %',
        'Stress Resilience %',
        'Integration Timeline',
        'Key Strengths',
        'Development Areas'
      ],
      ...candidates.map(candidate => [
        candidate.candidate.name,
        candidate.candidate.position,
        candidate.overallRecommendation.fitScore,
        candidate.overallRecommendation.recommendation,
        candidate.culturalAssessment.overallCompatibility.toFixed(1),
        candidate.psychologicalProfile.overallPsychologicalFit.toFixed(1),
        candidate.psychologicalProfile.leadershipPotential.toFixed(1),
        candidate.psychologicalProfile.teamFitScore.toFixed(1),
        candidate.psychologicalProfile.stressResilienceScore.toFixed(1),
        candidate.culturalAssessment.timeToIntegration,
        candidate.culturalAssessment.strengthAreas.slice(0, 3).join('; '),
        candidate.culturalAssessment.developmentAreas.slice(0, 3).join('; ')
      ])
    ];
    
    const comparisonSheet = XLSX.utils.aoa_to_sheet(comparisonData);
    XLSX.utils.book_append_sheet(workbook, comparisonSheet, 'Candidate Comparison');
    
    // Rankings Sheet
    const rankedCandidates = [...candidates].sort((a, b) => b.overallRecommendation.fitScore - a.overallRecommendation.fitScore);
    const rankingsData = [
      ['Rank', 'Candidate Name', 'Overall Score', 'Cultural Fit', 'Psychological Fit', 'Recommendation'],
      ...rankedCandidates.map((candidate, index) => [
        index + 1,
        candidate.candidate.name,
        candidate.overallRecommendation.fitScore,
        candidate.culturalAssessment.overallCompatibility.toFixed(1),
        candidate.psychologicalProfile.overallPsychologicalFit.toFixed(1),
        candidate.overallRecommendation.recommendation
      ])
    ];
    
    const rankingsSheet = XLSX.utils.aoa_to_sheet(rankingsData);
    XLSX.utils.book_append_sheet(workbook, rankingsSheet, 'Rankings');
    
    return XLSX.write(workbook, { type: 'array', bookType: 'xlsx' }) as Uint8Array;
  }
}

export const enterpriseReportGenerator = new EnterpriseReportGenerator();