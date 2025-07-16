/**
 * Secure File Upload Handler
 * Implements comprehensive security measures for file uploads
 * Prevents malicious file uploads and ensures data safety
 */

import { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import { fileTypeFromBuffer } from 'file-type'
import { validateFileUpload } from './validation'

// Allowed file types and their MIME types
export const ALLOWED_FILE_TYPES = {
  'application/pdf': ['.pdf'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/png': ['.png'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'text/plain': ['.txt'],
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
} as const

// Maximum file sizes by type (in bytes)
export const MAX_FILE_SIZES = {
  'application/pdf': 10 * 1024 * 1024, // 10MB
  'image/jpeg': 5 * 1024 * 1024, // 5MB
  'image/png': 5 * 1024 * 1024, // 5MB
  'application/msword': 10 * 1024 * 1024, // 10MB
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 10 * 1024 * 1024, // 10MB
  'text/plain': 1 * 1024 * 1024, // 1MB
  'application/vnd.ms-excel': 10 * 1024 * 1024, // 10MB
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 10 * 1024 * 1024, // 10MB
} as const

// Secure upload directory outside web root
const UPLOAD_DIR = process.env.UPLOAD_DIR || '/var/aikoda/uploads'

export interface FileUploadResult {
  success: boolean
  filePath?: string
  fileId?: string
  error?: string
  metadata?: {
    originalName: string
    mimeType: string
    size: number
    uploadedAt: string
  }
}

export class SecureFileUploader {
  private uploadDir: string

  constructor(uploadDir: string = UPLOAD_DIR) {
    this.uploadDir = uploadDir
    this.ensureUploadDirectory()
  }

  private async ensureUploadDirectory(): Promise<void> {
    try {
      await fs.access(this.uploadDir)
    } catch {
      await fs.mkdir(this.uploadDir, { recursive: true, mode: 0o750 })
    }
  }

  /**
   * Upload a file securely with comprehensive validation
   */
  async uploadFile(
    file: File,
    category: 'resume' | 'document' | 'image' = 'document',
    userId?: string
  ): Promise<FileUploadResult> {
    try {
      // Basic file validation
      const validation = validateFileUpload(file, {
        maxSize: MAX_FILE_SIZES[file.type as keyof typeof MAX_FILE_SIZES],
        allowedTypes: Object.keys(ALLOWED_FILE_TYPES),
        allowedExtensions: Object.values(ALLOWED_FILE_TYPES).flat()
      })

      if (!validation.isValid) {
        return {
          success: false,
          error: validation.error
        }
      }

      // Read file buffer for deeper inspection
      const buffer = await file.arrayBuffer()
      const uint8Array = new Uint8Array(buffer)

      // Verify file type by content (magic numbers)
      const detectedType = await fileTypeFromBuffer(uint8Array)
      if (!detectedType || detectedType.mime !== file.type) {
        return {
          success: false,
          error: 'File content does not match declared type'
        }
      }

      // Malware scanning (basic patterns)
      if (this.containsMaliciousPatterns(uint8Array)) {
        return {
          success: false,
          error: 'File contains potentially malicious content'
        }
      }

      // Generate secure filename
      const fileId = crypto.randomUUID()
      const extension = path.extname(file.name).toLowerCase()
      const secureFilename = `${fileId}${extension}`
      
      // Create category subdirectory
      const categoryDir = path.join(this.uploadDir, category)
      await fs.mkdir(categoryDir, { recursive: true, mode: 0o750 })
      
      // User subdirectory if provided
      const userDir = userId ? path.join(categoryDir, userId) : categoryDir
      if (userId) {
        await fs.mkdir(userDir, { recursive: true, mode: 0o750 })
      }

      const filePath = path.join(userDir, secureFilename)

      // Write file with restricted permissions
      await fs.writeFile(filePath, uint8Array, { mode: 0o640 })

      // Create metadata
      const metadata = {
        originalName: file.name,
        mimeType: file.type,
        size: file.size,
        uploadedAt: new Date().toISOString(),
      }

      // Write metadata file
      const metadataPath = `${filePath}.meta`
      await fs.writeFile(metadataPath, JSON.stringify(metadata, null, 2), { mode: 0o640 })

      return {
        success: true,
        filePath,
        fileId,
        metadata
      }

    } catch (error) {
      return {
        success: false,
        error: `Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      }
    }
  }

  /**
   * Delete a file securely
   */
  async deleteFile(fileId: string, category: string, userId?: string): Promise<boolean> {
    try {
      const baseDir = userId 
        ? path.join(this.uploadDir, category, userId)
        : path.join(this.uploadDir, category)

      // Find file with this ID
      const files = await fs.readdir(baseDir)
      const targetFile = files.find(file => file.startsWith(fileId))

      if (!targetFile) {
        return false
      }

      const filePath = path.join(baseDir, targetFile)
      const metadataPath = `${filePath}.meta`

      // Delete file and metadata
      await fs.unlink(filePath)
      try {
        await fs.unlink(metadataPath)
      } catch {
        // Metadata file might not exist
      }

      return true
    } catch {
      return false
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(fileId: string, category: string, userId?: string): Promise<any | null> {
    try {
      const baseDir = userId 
        ? path.join(this.uploadDir, category, userId)
        : path.join(this.uploadDir, category)

      const files = await fs.readdir(baseDir)
      const targetFile = files.find(file => file.startsWith(fileId))

      if (!targetFile) {
        return null
      }

      const metadataPath = path.join(baseDir, `${targetFile}.meta`)
      const metadataContent = await fs.readFile(metadataPath, 'utf-8')
      return JSON.parse(metadataContent)
    } catch {
      return null
    }
  }

  /**
   * Basic malware pattern detection
   */
  private containsMaliciousPatterns(buffer: Uint8Array): boolean {
    const content = Buffer.from(buffer).toString('ascii', 0, Math.min(1024, buffer.length))
    
    // Common malicious patterns
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /vbscript:/i,
      /on\w+=/i,
      /<%.*%>/,
      /<\?php/i,
      /eval\(/i,
      /exec\(/i,
      /system\(/i,
      /shell_exec/i,
      /base64_decode/i,
    ]

    return maliciousPatterns.some(pattern => pattern.test(content))
  }

  /**
   * Process uploaded files from FormData
   */
  async processFormFiles(
    request: NextRequest,
    category: 'resume' | 'document' | 'image' = 'document',
    userId?: string
  ): Promise<FileUploadResult[]> {
    try {
      const formData = await request.formData()
      const results: FileUploadResult[] = []

      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          const result = await this.uploadFile(value, category, userId)
          results.push(result)
        }
      }

      return results
    } catch (error) {
      return [{
        success: false,
        error: `Form processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      }]
    }
  }
}

export const secureFileUploader = new SecureFileUploader()

// Cleanup old files (run as background task)
export async function cleanupOldFiles(maxAge: number = 30 * 24 * 60 * 60 * 1000): Promise<void> {
  try {
    const categories = ['resume', 'document', 'image']
    const cutoffTime = Date.now() - maxAge

    for (const category of categories) {
      const categoryDir = path.join(UPLOAD_DIR, category)
      
      try {
        await processDirectory(categoryDir, cutoffTime)
      } catch {
        // Category directory might not exist
      }
    }
  } catch (error) {
    console.error('Cleanup failed:', error)
  }
}

async function processDirectory(dir: string, cutoffTime: number): Promise<void> {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath, cutoffTime)
    } else if (entry.isFile() && !entry.name.endsWith('.meta')) {
      const stats = await fs.stat(fullPath)
      if (stats.mtime.getTime() < cutoffTime) {
        await fs.unlink(fullPath)
        try {
          await fs.unlink(`${fullPath}.meta`)
        } catch {
          // Metadata might not exist
        }
      }
    }
  }
}

// Schedule cleanup every 24 hours
if (typeof window === 'undefined') {
  setInterval(() => {
    cleanupOldFiles()
  }, 24 * 60 * 60 * 1000)
}