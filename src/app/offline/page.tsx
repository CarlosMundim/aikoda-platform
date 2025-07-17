'use client'
import React from 'react'
import Link from 'next/link'

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-sap-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-sap-brand/10 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-sap-brand">
              <path 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-sap-text-primary mb-4">
            You're Currently Offline
          </h1>
          <p className="text-sap-text-secondary mb-6">
            No internet connection detected. Some features may be limited, but you can still access cached content and complete assessments offline.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="bg-white p-4 rounded-lg border border-sap-border-color">
            <h3 className="font-semibold text-sap-text-primary mb-2">Available Offline:</h3>
            <ul className="text-sm text-sap-text-secondary space-y-1">
              <li>• View cached dashboards</li>
              <li>• Complete cultural assessments</li>
              <li>• Browse candidate profiles</li>
              <li>• Access job postings</li>
            </ul>
          </div>

          <div className="bg-sap-warning/10 p-4 rounded-lg border border-sap-warning/20">
            <h3 className="font-semibold text-sap-warning mb-2">Limited Offline:</h3>
            <ul className="text-sm text-sap-text-secondary space-y-1">
              <li>• Real-time data updates</li>
              <li>• New registrations sync</li>
              <li>• Market intelligence refresh</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <Link 
            href="/"
            className="block w-full px-6 py-3 bg-sap-brand text-white rounded-lg hover:bg-sap-brand-dark transition-colors font-medium"
          >
            Go to Dashboard
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="block w-full px-6 py-3 border border-sap-border-color text-sap-text-primary rounded-lg hover:bg-sap-hover-background transition-colors font-medium"
          >
            Try to Reconnect
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-sap-border-color">
          <p className="text-xs text-sap-text-muted">
            Your offline data will automatically sync when connection is restored.
          </p>
        </div>
      </div>
    </div>
  )
}