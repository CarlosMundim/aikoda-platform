'use client'

import React from 'react'
import { DashboardLayout, ClientRegistration } from '../../components/SAP'

export default function ClientRegistrationPage() {
  return (
    <DashboardLayout>
      {(language) => <ClientRegistration language={language} />}
    </DashboardLayout>
  )
}