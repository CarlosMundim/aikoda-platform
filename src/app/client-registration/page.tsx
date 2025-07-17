'use client'

import React from 'react'
import { DashboardLayout } from '@/components/SAP'
import ClientRegistration from '@/components/SAP/ClientRegistration'

export default function ClientRegistrationPage() {
  return (
    <DashboardLayout>
      {(language) => <ClientRegistration language={language} />}
    </DashboardLayout>
  )
}