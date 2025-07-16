/**
 * Input Validation and Sanitization Library
 * Comprehensive validation schemas for all data inputs
 * Prevents SQL injection, XSS, and data corruption
 */

import { z } from 'zod'
import validator from 'validator'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

// Create DOMPurify instance for server-side
const window = new JSDOM('').window
const purify = DOMPurify(window)

// Common validation patterns
const emailSchema = z.string().email().max(255)
const phoneSchema = z.string().regex(/^[\+]?[0-9\-\(\)\s]+$/).max(20)
const nameSchema = z.string().min(1).max(100).regex(/^[a-zA-Z\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\s\-\.]+$/)
const passwordSchema = z.string().min(8).max(128)

// Candidate validation schema
export const candidateSchema = z.object({
  name: nameSchema,
  nameEn: z.string().min(1).max(100).regex(/^[a-zA-Z\s\-\.]+$/),
  email: emailSchema,
  phone: phoneSchema,
  position: z.string().min(1).max(200),
  experience: z.string().min(1).max(50),
  skills: z.array(z.string().min(1).max(50)).max(20),
  education: z.string().min(1).max(300),
  languages: z.array(z.string().min(1).max(50)).max(10),
  resumeUrl: z.string().url().optional(),
})

// Company validation schema
export const companySchema = z.object({
  name: z.string().min(1).max(200),
  industry: z.string().min(1).max(100),
  description: z.string().max(1000).optional(),
  website: z.string().url().optional(),
  size: z.enum(['startup', 'small', 'medium', 'large', 'enterprise']),
  location: z.string().min(1).max(200),
})

// Assessment response validation schema
export const assessmentResponseSchema = z.object({
  candidateId: z.string().uuid(),
  dimensionId: z.string().min(1).max(100),
  score: z.number().min(0).max(100),
  evidence: z.string().min(1).max(1000),
  assessorNotes: z.string().max(500).optional(),
})

// Report generation validation schema
export const reportRequestSchema = z.object({
  type: z.enum(['candidate', 'market-intelligence', 'batch-comparison']),
  format: z.enum(['pdf', 'csv', 'excel']),
  data: z.object({}).passthrough(), // Will validate based on type
  options: z.object({
    includeDetails: z.boolean().default(true),
    language: z.enum(['ja', 'en']).default('ja'),
    confidential: z.boolean().default(true),
  }).optional(),
})

// User registration validation schema
export const userRegistrationSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  name: nameSchema,
  company: z.string().min(1).max(200).optional(),
  role: z.enum(['CLIENT', 'HR_MANAGER', 'CANDIDATE']),
  terms: z.boolean().refine(val => val === true, {
    message: "Terms and conditions must be accepted"
  }),
})

// User login validation schema
export const userLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1).max(128),
})

// Text sanitization function
export function sanitizeText(input: string): string {
  if (!input) return ''
  
  // Remove HTML tags and dangerous content
  const sanitized = purify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  })
  
  // Additional validation
  return validator.escape(sanitized.trim())
}

// HTML content sanitization (for rich text)
export function sanitizeHtml(input: string): string {
  if (!input) return ''
  
  return purify.sanitize(input, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  })
}

// File validation
export function validateFileUpload(
  file: File,
  options: {
    maxSize?: number
    allowedTypes?: string[]
    allowedExtensions?: string[]
  } = {}
): { isValid: boolean; error?: string } {
  const {
    maxSize = 10 * 1024 * 1024, // 10MB default
    allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'],
    allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx']
  } = options

  // Check file size
  if (file.size > maxSize) {
    return {
      isValid: false,
      error: `File size exceeds ${maxSize / (1024 * 1024)}MB limit`
    }
  }

  // Check file type
  if (!allowedTypes.includes(file.type)) {
    return {
      isValid: false,
      error: `File type ${file.type} is not allowed`
    }
  }

  // Check file extension
  const extension = '.' + file.name.split('.').pop()?.toLowerCase()
  if (!allowedExtensions.includes(extension)) {
    return {
      isValid: false,
      error: `File extension ${extension} is not allowed`
    }
  }

  // Additional security checks
  if (file.name.includes('..') || file.name.includes('/') || file.name.includes('\\')) {
    return {
      isValid: false,
      error: 'Invalid file name'
    }
  }

  return { isValid: true }
}

// Rate limiting helper
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()

  isAllowed(
    identifier: string,
    maxRequests: number = 100,
    windowMs: number = 60 * 1000 // 1 minute
  ): boolean {
    const now = Date.now()
    const windowStart = now - windowMs

    // Get existing requests for this identifier
    let requests = this.requests.get(identifier) || []
    
    // Remove requests outside the window
    requests = requests.filter(time => time > windowStart)
    
    // Check if limit exceeded
    if (requests.length >= maxRequests) {
      return false
    }

    // Add current request
    requests.push(now)
    this.requests.set(identifier, requests)

    return true
  }

  cleanup(): void {
    const now = Date.now()
    const oneHour = 60 * 60 * 1000

    for (const [identifier, requests] of this.requests.entries()) {
      const recentRequests = requests.filter(time => time > now - oneHour)
      if (recentRequests.length === 0) {
        this.requests.delete(identifier)
      } else {
        this.requests.set(identifier, recentRequests)
      }
    }
  }
}

export const rateLimiter = new RateLimiter()

// Clean up rate limiter every hour
if (typeof window === 'undefined') {
  setInterval(() => {
    rateLimiter.cleanup()
  }, 60 * 60 * 1000)
}

// IP validation
export function isValidIP(ip: string): boolean {
  return validator.isIP(ip)
}

// URL validation
export function isValidURL(url: string): boolean {
  return validator.isURL(url, {
    protocols: ['http', 'https'],
    require_protocol: true,
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_protocol_relative_urls: false
  })
}

// Validate and sanitize request data
export function validateAndSanitize<T>(
  data: unknown,
  schema: z.ZodSchema<T>
): { success: true; data: T } | { success: false; error: string } {
  try {
    // Sanitize string fields recursively
    const sanitizedData = sanitizeRecursive(data)
    
    // Validate with schema
    const result = schema.safeParse(sanitizedData)
    
    if (result.success) {
      return { success: true, data: result.data }
    } else {
      return {
        success: false,
        error: result.error.issues.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')
      }
    }
  } catch (error) {
    return {
      success: false,
      error: 'Validation failed: ' + (error instanceof Error ? error.message : 'Unknown error')
    }
  }
}

function sanitizeRecursive(obj: any): any {
  if (typeof obj === 'string') {
    return sanitizeText(obj)
  } else if (Array.isArray(obj)) {
    return obj.map(sanitizeRecursive)
  } else if (obj && typeof obj === 'object') {
    const sanitized: any = {}
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeRecursive(value)
    }
    return sanitized
  }
  return obj
}