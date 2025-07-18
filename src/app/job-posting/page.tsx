'use client'

import React from 'react'
import { DashboardLayout, JobPosting } from '../../components/SAP'

export default function JobPostingPage() {
  return (
    <DashboardLayout>
      {(language) => <JobPosting language={language} />}
    </DashboardLayout>
  )
}