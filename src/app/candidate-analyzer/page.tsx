'use client'

import React from 'react'
import { DashboardLayout } from '../../components/SAP/DashboardLayout'
import { CandidateAnalyzer } from '../../components/SAP/CandidateAnalyzer'

export default function CandidateAnalyzerPage() {
  return (
    <DashboardLayout>
      {(language) => <CandidateAnalyzer language={language} />}
    </DashboardLayout>
  )
}