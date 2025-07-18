'use client'

import React from 'react'
import { DashboardLayout, CandidateRegistration } from '../../components/SAP'

export default function CandidateRegistrationPage() {
  return (
    <DashboardLayout>
      {(language) => <CandidateRegistration language={language} />}
    </DashboardLayout>
  )
}