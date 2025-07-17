'use client'

import React from 'react'
import { DashboardLayout } from '../components/SAP/DashboardLayout'
import { EnterpriseCockpit } from '../components/SAP/EnterpriseCockpit'

export default function HomePage() {
  return (
    <DashboardLayout>
      {(language) => <EnterpriseCockpit language={language} />}
    </DashboardLayout>
  )
}