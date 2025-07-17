'use client'

import React from 'react'
import { DashboardLayout } from '../../components/SAP/DashboardLayout'
import { MarketIntelligence } from '../../components/SAP/MarketIntelligence'

export default function MarketIntelligencePage() {
  return (
    <DashboardLayout>
      {(language) => <MarketIntelligence language={language} />}
    </DashboardLayout>
  )
}