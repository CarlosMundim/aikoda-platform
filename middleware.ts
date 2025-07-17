/**
 * Next.js Middleware for Authentication and Security
 * Protects API routes and pages requiring authentication
 * Implements role-based access control
 */

import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default withAuth(
  function middleware(request) {
    const token = request.nextauth.token
    const pathname = request.nextUrl.pathname

    // Admin-only routes
    if (pathname.startsWith('/admin')) {
      if (!token?.role || token.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }
    }

    // Client/HR Manager routes - but allow public access to market-intelligence
    if (pathname.startsWith('/dashboard') || pathname.startsWith('/reports')) {
      // Allow public access to market-intelligence dashboard
      if (pathname === '/dashboard/market-intelligence') {
        return NextResponse.next()
      }
      
      if (!token?.role || !['ADMIN', 'CLIENT', 'HR_MANAGER'].includes(token.role as string)) {
        return NextResponse.redirect(new URL('/auth/signin', request.url))
      }
    }

    // API routes protection
    if (pathname.startsWith('/api/')) {
      // Public endpoints
      const publicEndpoints = ['/api/auth', '/api/health']
      const isPublicEndpoint = publicEndpoints.some(endpoint => 
        pathname.startsWith(endpoint)
      )
      
      if (!isPublicEndpoint && !token) {
        return NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 }
        )
      }

      // Role-based API access
      if (pathname.startsWith('/api/admin') && token?.role !== 'ADMIN') {
        return NextResponse.json(
          { error: 'Admin access required' },
          { status: 403 }
        )
      }

      if (pathname.startsWith('/api/reports') || pathname.startsWith('/api/candidates')) {
        const allowedRoles = ['ADMIN', 'CLIENT', 'HR_MANAGER']
        if (!token?.role || !allowedRoles.includes(token.role as string)) {
          return NextResponse.json(
            { error: 'Insufficient permissions' },
            { status: 403 }
          )
        }
      }
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname
        
        // Allow public routes
        if (
          pathname === '/' ||
          pathname.startsWith('/auth') ||
          pathname.startsWith('/_next') ||
          pathname.startsWith('/favicon')
        ) {
          return true
        }

        // Require authentication for all other routes
        return !!token
      },
    },
  }
)

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public|dashboard/market-intelligence).*)',
    '/api/((?!auth).*)'
  ]
}