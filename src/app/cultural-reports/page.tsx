'use client'

import React from 'react'
import { DashboardLayout } from '../../components/SAP/DashboardLayout'
import { CulturalReports } from '../../components/SAP/CulturalReports'

export default function CulturalReportsPage() {
  return (
    <DashboardLayout>
      {(language) => <CulturalReports language={language} />}
    </DashboardLayout>
  )
}