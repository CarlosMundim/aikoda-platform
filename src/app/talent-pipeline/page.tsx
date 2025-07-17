'use client'

import React from 'react'
import { DashboardLayout } from '../../components/SAP/DashboardLayout'
import { SAPCard } from '../../components/SAP/SAPCard'

export default function TalentPipelinePage() {
  return (
    <DashboardLayout>
      {(language) => (
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="sap-title">
              {language === 'en' ? 'Talent Pipeline Dashboard' : 'タレントパイプラインダッシュボード'}
            </h1>
            <p className="sap-caption mt-2">
              {language === 'en' ? 'Advanced Talent Flow Analytics' : '高度な人材フロー分析'}
            </p>
          </div>
          
          <div className="sap-grid sap-grid-3">
            <SAPCard title={language === 'en' ? 'Active Pipeline' : 'アクティブパイプライン'}>
              <div className="text-center">
                <div className="text-4xl font-bold text-sap-brand">1,247</div>
                <p className="text-sap-text-secondary">
                  {language === 'en' ? 'candidates' : '候補者'}
                </p>
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Conversion Rate' : '転換率'}>
              <div className="text-center">
                <div className="text-4xl font-bold text-sap-success">68.5%</div>
                <p className="text-sap-text-secondary">
                  {language === 'en' ? 'this month' : '今月'}
                </p>
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Quality Score' : '品質スコア'}>
              <div className="text-center">
                <div className="text-4xl font-bold text-sap-brand">92.3</div>
                <p className="text-sap-text-secondary">
                  {language === 'en' ? 'average' : '平均'}
                </p>
              </div>
            </SAPCard>
          </div>
          
          <SAPCard title={language === 'en' ? 'Pipeline Flow Visualization' : 'パイプラインフロー可視化'}>
            <div className="h-64 flex items-center justify-center bg-sap-hover rounded">
              <p className="text-sap-text-muted">
                {language === 'en' ? 'Advanced pipeline visualization coming soon' : '高度なパイプライン可視化は近日公開'}
              </p>
            </div>
          </SAPCard>
        </div>
      )}
    </DashboardLayout>
  )
}