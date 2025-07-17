'use client'

import React from 'react'
import { DashboardLayout } from '@/components/SAP'
import CandidateRegistration from '@/components/SAP/CandidateRegistration'

export default function CandidateRegistrationPage() {
  return (
    <DashboardLayout>
      {(language) => <CandidateRegistration language={language} />}
    </DashboardLayout>
  )
}