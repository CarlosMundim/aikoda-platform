'use client'

import React, { useState } from 'react'
import { SAPCard } from './SAPCard'
import { SAPButton } from './SAPButton'

interface CulturalReportsProps {
  language: 'en' | 'ja'
}

export function CulturalReports({ language }: CulturalReportsProps) {
  const [selectedReport, setSelectedReport] = useState('candidate')

  const labels = {
    en: {
      title: "Cultural Intelligence Reports",
      subtitle: "Comprehensive SAP-Style Reporting Suite",
      reportTypes: {
        candidate: "Candidate Assessment",
        company: "Company Culture Analysis",
        matching: "Cultural Matching Report",
        integration: "Integration Timeline"
      },
      generateReport: "Generate Report",
      downloadPDF: "Download PDF",
      downloadExcel: "Download Excel",
      preview: "Report Preview",
      sampleData: "Sample Report Data"
    },
    ja: {
      title: "文化知能レポート",
      subtitle: "包括的SAPスタイルレポートスイート",
      reportTypes: {
        candidate: "候補者評価",
        company: "企業文化分析",
        matching: "文化マッチングレポート",
        integration: "統合タイムライン"
      },
      generateReport: "レポート生成",
      downloadPDF: "PDF ダウンロード",
      downloadExcel: "Excel ダウンロード",
      preview: "レポートプレビュー",
      sampleData: "サンプルレポートデータ"
    }
  }

  const currentLabels = labels[language]

  const reportData = {
    candidate: {
      title: "John Doe - Cultural Intelligence Assessment",
      overallScore: 87.3,
      dimensions: 47,
      integrationTime: 45,
      recommendations: 8
    },
    company: {
      title: "Tech Corp Japan - Cultural Alignment Analysis",
      culturalOpenness: 85.2,
      diversity: 78.5,
      integration: 82.1,
      retention: 91.2
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="sap-title">{currentLabels.title}</h1>
        <p className="sap-caption mt-2">{currentLabels.subtitle}</p>
      </div>

      {/* Report Type Selector */}
      <div className="flex justify-center space-x-2 flex-wrap">
        {Object.entries(currentLabels.reportTypes).map(([key, label]) => (
          <SAPButton
            key={key}
            variant={selectedReport === key ? "primary" : "secondary"}
            onClick={() => setSelectedReport(key)}
            size="sm"
          >
            {label}
          </SAPButton>
        ))}
      </div>

      <div className="sap-grid sap-grid-2">
        {/* Report Generator */}
        <SAPCard title={currentLabels.generateReport}>
          <div className="space-y-4">
            <div>
              <label className="sap-label">
                {language === 'en' ? 'Report Type' : 'レポートタイプ'}
              </label>
              <select className="sap-select" value={selectedReport} onChange={(e) => setSelectedReport(e.target.value)}>
                {Object.entries(currentLabels.reportTypes).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="sap-label">
                {language === 'en' ? 'Subject ID' : '対象ID'}
              </label>
              <input
                type="text"
                className="sap-input"
                placeholder={selectedReport === 'candidate' ? 'CAND_001' : 'COMP_001'}
              />
            </div>

            <div>
              <label className="sap-label">
                {language === 'en' ? 'Report Format' : 'レポート形式'}
              </label>
              <select className="sap-select">
                <option value="pdf">PDF Report</option>
                <option value="excel">Excel Workbook</option>
                <option value="csv">CSV Data</option>
              </select>
            </div>

            <div className="space-y-2">
              <SAPButton variant="primary" className="w-full">
                {currentLabels.generateReport}
              </SAPButton>
              <div className="flex space-x-2">
                <SAPButton variant="secondary" size="sm" className="flex-1">
                  {currentLabels.downloadPDF}
                </SAPButton>
                <SAPButton variant="secondary" size="sm" className="flex-1">
                  {currentLabels.downloadExcel}
                </SAPButton>
              </div>
            </div>
          </div>
        </SAPCard>

        {/* Report Preview */}
        <SAPCard title={currentLabels.preview}>
          <div className="space-y-4">
            <div className="bg-sap-hover p-4 rounded">
              <h3 className="font-bold text-lg mb-2">
                {reportData[selectedReport as keyof typeof reportData]?.title || 'Sample Report'}
              </h3>
              
              {selectedReport === 'candidate' && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Overall Score:</span>
                    <span className="font-bold">87.3/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimensions Analyzed:</span>
                    <span className="font-bold">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Integration Timeline:</span>
                    <span className="font-bold">45 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Recommendations:</span>
                    <span className="font-bold">8 items</span>
                  </div>
                </div>
              )}

              {selectedReport === 'company' && (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Cultural Openness:</span>
                    <span className="font-bold">85.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diversity Index:</span>
                    <span className="font-bold">78.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Integration Score:</span>
                    <span className="font-bold">82.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retention Rate:</span>
                    <span className="font-bold">91.2%</span>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center text-sap-text-muted text-sm">
              {currentLabels.sampleData}
            </div>
          </div>
        </SAPCard>
      </div>

      {/* Recent Reports */}
      <SAPCard title={language === 'en' ? 'Recent Reports' : '最近のレポート'}>
        <div className="space-y-3">
          {[
            { name: 'Candidate_Assessment_CAND_001.pdf', date: '2025-07-18', size: '2.3 MB' },
            { name: 'Company_Culture_COMP_005.xlsx', date: '2025-07-17', size: '1.8 MB' },
            { name: 'Cultural_Matching_BATCH_042.csv', date: '2025-07-16', size: '543 KB' }
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-sap-hover rounded">
              <div>
                <div className="font-medium">{report.name}</div>
                <div className="text-sm text-sap-text-secondary">
                  {report.date} • {report.size}
                </div>
              </div>
              <SAPButton variant="ghost" size="sm">
                {language === 'en' ? 'Download' : 'ダウンロード'}
              </SAPButton>
            </div>
          ))}
        </div>
      </SAPCard>
    </div>
  )
}

export default CulturalReports