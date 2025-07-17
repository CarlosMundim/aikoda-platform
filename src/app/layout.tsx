import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iWORKZ Technologies kk - Cultural Intelligence Platform',
  description: '47-Dimension Cultural Intelligence for Japanese Business Integration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}