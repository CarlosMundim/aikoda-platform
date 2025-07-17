'use client'

import React from 'react'
import { DashboardLayout } from '@/components/SAP'
import JobPosting from '@/components/SAP/JobPosting'

export default function JobPostingPage() {
  return (
    <DashboardLayout>
      {(language) => <JobPosting language={language} />}
    </DashboardLayout>
  )
}