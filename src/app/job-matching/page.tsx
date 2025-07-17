'use client'

import React from 'react'
import { DashboardLayout } from '../../components/SAP/DashboardLayout'
import { SAPCard } from '../../components/SAP/SAPCard'
import { SAPButton } from '../../components/SAP/SAPButton'

export default function JobMatchingPage() {
  return (
    <DashboardLayout>
      {(language) => (
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="sap-title">
              {language === 'en' ? 'AI-Powered Job Matching' : 'AI搭載ジョブマッチング'}
            </h1>
            <p className="sap-caption mt-2">
              {language === 'en' ? 'Cultural Intelligence-Based Matching Engine' : '文化知能ベースマッチングエンジン'}
            </p>
          </div>
          
          <div className="sap-grid sap-grid-4">
            <SAPCard title={language === 'en' ? 'Total Matches' : '総マッチ数'}>
              <div className="text-center">
                <div className="text-3xl font-bold text-sap-brand">3,456</div>
                <p className="text-sap-text-secondary text-sm">
                  {language === 'en' ? 'this quarter' : '今四半期'}
                </p>
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Match Accuracy' : 'マッチ精度'}>
              <div className="text-center">
                <div className="text-3xl font-bold text-sap-success">94.7%</div>
                <p className="text-sap-text-secondary text-sm">
                  {language === 'en' ? 'success rate' : '成功率'}
                </p>
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Cultural Fit' : '文化適合度'}>
              <div className="text-center">
                <div className="text-3xl font-bold text-sap-brand">87.2%</div>
                <p className="text-sap-text-secondary text-sm">
                  {language === 'en' ? 'average score' : '平均スコア'}
                </p>
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Placement Time' : '配置時間'}>
              <div className="text-center">
                <div className="text-3xl font-bold text-sap-warning">12.3</div>
                <p className="text-sap-text-secondary text-sm">
                  {language === 'en' ? 'days average' : '日平均'}
                </p>
              </div>
            </SAPCard>
          </div>
          
          <div className="sap-grid sap-grid-2">
            <SAPCard title={language === 'en' ? 'Recent Matches' : '最近のマッチ'}>
              <div className="space-y-3">
                {[
                  { candidate: 'John Doe', position: 'Senior Developer', match: 96 },
                  { candidate: '田中太郎', position: 'Product Manager', match: 91 },
                  { candidate: 'Sarah Kim', position: 'UX Designer', match: 88 }
                ].map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-sap-hover rounded">
                    <div>
                      <div className="font-medium">{match.candidate}</div>
                      <div className="text-sm text-sap-text-secondary">{match.position}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-sap-success">{match.match}%</div>
                      <SAPButton variant="ghost" size="sm">
                        {language === 'en' ? 'View' : '表示'}
                      </SAPButton>
                    </div>
                  </div>
                ))}
              </div>
            </SAPCard>
            
            <SAPCard title={language === 'en' ? 'Matching Engine Status' : 'マッチングエンジンステータス'}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>{language === 'en' ? 'AI Engine' : 'AIエンジン'}</span>
                  <span className="px-2 py-1 bg-sap-success text-white rounded text-sm">
                    {language === 'en' ? 'Online' : 'オンライン'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{language === 'en' ? 'Cultural Calculator' : '文化計算機'}</span>
                  <span className="px-2 py-1 bg-sap-success text-white rounded text-sm">
                    {language === 'en' ? 'Active' : 'アクティブ'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{language === 'en' ? 'Queue Processing' : 'キュー処理'}</span>
                  <span className="px-2 py-1 bg-sap-warning text-white rounded text-sm">
                    47 {language === 'en' ? 'pending' : '保留中'}
                  </span>
                </div>
                <SAPButton variant="primary" className="w-full">
                  {language === 'en' ? 'Run Batch Matching' : 'バッチマッチング実行'}
                </SAPButton>
              </div>
            </SAPCard>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}