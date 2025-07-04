/**
 * Enterprise Authentication & Authorization System
 * JWT-based auth with role-based access control (RBAC)
 * Built for multi-tenant SaaS with enterprise security standards
 */

import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  organizationId: string;
  role: UserRole;
  permissions: Permission[];
  status: 'active' | 'inactive' | 'pending_verification';
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  SUPER_ADMIN = 'super_admin',      // Platform administration
  ORG_OWNER = 'org_owner',          // Organization owner
  ORG_ADMIN = 'org_admin',          // Organization administrator
  HR_MANAGER = 'hr_manager',        // HR department manager
  RECRUITER = 'recruiter',          // Recruiter/HR specialist
  TEAM_LEAD = 'team_lead',         // Team/department leader
  VIEWER = 'viewer'                 // Read-only access
}

export enum Permission {
  // Organization management
  MANAGE_ORGANIZATION = 'manage_organization',
  MANAGE_USERS = 'manage_users',
  MANAGE_BILLING = 'manage_billing',
  MANAGE_SETTINGS = 'manage_settings',
  
  // Candidate management
  CREATE_CANDIDATES = 'create_candidates',
  VIEW_CANDIDATES = 'view_candidates',
  EDIT_CANDIDATES = 'edit_candidates',
  DELETE_CANDIDATES = 'delete_candidates',
  EXPORT_CANDIDATES = 'export_candidates',
  
  // Assessment management
  CREATE_ASSESSMENTS = 'create_assessments',
  VIEW_ASSESSMENTS = 'view_assessments',
  EDIT_ASSESSMENTS = 'edit_assessments',
  DELETE_ASSESSMENTS = 'delete_assessments',
  CONFIGURE_ASSESSMENTS = 'configure_assessments',
  
  // Job management
  CREATE_JOBS = 'create_jobs',
  VIEW_JOBS = 'view_jobs',
  EDIT_JOBS = 'edit_jobs',
  DELETE_JOBS = 'delete_jobs',
  PUBLISH_JOBS = 'publish_jobs',
  
  // AI Agent management
  CREATE_AGENTS = 'create_agents',
  VIEW_AGENTS = 'view_agents',
  CONFIGURE_AGENTS = 'configure_agents',
  START_STOP_AGENTS = 'start_stop_agents',
  
  // Analytics and reporting
  VIEW_ANALYTICS = 'view_analytics',
  VIEW_REPORTS = 'view_reports',
  CREATE_REPORTS = 'create_reports',
  EXPORT_ANALYTICS = 'export_analytics',
  
  // API access
  USE_API = 'use_api',
  MANAGE_API_KEYS = 'manage_api_keys',
  
  // Advanced features
  MANAGE_WEBHOOKS = 'manage_webhooks',
  WHITE_LABEL_ACCESS = 'white_label_access',
  PARTNER_PORTAL = 'partner_portal'
}

export interface JWTPayload {
  userId: string;
  organizationId: string;
  role: UserRole;
  permissions: Permission[];
  sessionId: string;
  iat: number;
  exp: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
  organizationDomain?: string;
  rememberMe?: boolean;
}

export interface AuthSession {
  user: User;
  token: string;
  refreshToken: string;
  expiresAt: Date;
  organizationContext: {
    id: string;
    name: string;
    tier: 'free' | 'professional' | 'enterprise';
    features: string[];
  };
}

export interface APIKey {
  id: string;
  organizationId: string;
  userId: string;
  name: string;
  keyPrefix: string; // First 8 characters for display
  keyHash: string;   // Hashed full key
  scopes: Permission[];
  rateLimit: {
    requestsPerMinute: number;
    requestsPerHour: number;
    requestsPerDay: number;
  };
  lastUsed?: Date;
  createdAt: Date;
  expiresAt?: Date;
  status: 'active' | 'revoked' | 'expired';
}

export class AuthenticationError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'AuthorizationError';
  }
}

export class AuthSystem {
  private jwtSecret: Uint8Array;
  private refreshSecret: Uint8Array;
  private issuer = 'aikoda.dev';
  private audience = 'aikoda-platform';

  constructor() {
    // In production, these would come from secure environment variables
    this.jwtSecret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'aikoda-jwt-secret-key-change-in-production'
    );
    this.refreshSecret = new TextEncoder().encode(
      process.env.REFRESH_SECRET || 'aikoda-refresh-secret-key-change-in-production'
    );
  }

  /**
   * Authenticate user with email/password
   */
  async authenticateUser(credentials: LoginCredentials): Promise<AuthSession> {
    // TODO: Implement actual database authentication
    // This is a mock implementation
    
    const user = await this.getUserByEmail(credentials.email);
    if (!user) {
      throw new AuthenticationError('Invalid credentials', 'INVALID_CREDENTIALS');
    }

    const passwordValid = await this.verifyPassword(credentials.password, user.id);
    if (!passwordValid) {
      throw new AuthenticationError('Invalid credentials', 'INVALID_CREDENTIALS');
    }

    if (user.status !== 'active') {
      throw new AuthenticationError('Account is not active', 'ACCOUNT_INACTIVE');
    }

    // Generate session
    const sessionId = this.generateSessionId();
    const token = await this.generateJWT(user, sessionId);
    const refreshToken = await this.generateRefreshToken(user.id, sessionId);

    // Update last login
    await this.updateLastLogin(user.id);

    // Get organization context
    const organizationContext = await this.getOrganizationContext(user.organizationId);

    return {
      user,
      token,
      refreshToken,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      organizationContext
    };
  }

  /**
   * Verify JWT token and return user context
   */
  async verifyToken(token: string): Promise<JWTPayload> {
    try {
      const { payload } = await jwtVerify(token, this.jwtSecret, {
        issuer: this.issuer,
        audience: this.audience
      });

      return payload as unknown as JWTPayload;
    } catch (error) {
      throw new AuthenticationError('Invalid token', 'INVALID_TOKEN');
    }
  }

  /**
   * Refresh authentication token
   */
  async refreshToken(refreshToken: string): Promise<{ token: string; expiresAt: Date }> {
    try {
      const { payload } = await jwtVerify(refreshToken, this.refreshSecret);
      const userId = payload.sub as string;
      const sessionId = payload.sessionId as string;

      // Verify session is still valid
      const session = await this.getSession(sessionId);
      if (!session || session.status !== 'active') {
        throw new AuthenticationError('Session expired', 'SESSION_EXPIRED');
      }

      const user = await this.getUserById(userId);
      if (!user || user.status !== 'active') {
        throw new AuthenticationError('User not found or inactive', 'USER_INACTIVE');
      }

      // Generate new token
      const newToken = await this.generateJWT(user, sessionId);
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

      return { token: newToken, expiresAt };
    } catch (error) {
      throw new AuthenticationError('Invalid refresh token', 'INVALID_REFRESH_TOKEN');
    }
  }

  /**
   * Create API key for programmatic access
   */
  async createAPIKey(
    userId: string,
    name: string,
    scopes: Permission[],
    expiresAt?: Date
  ): Promise<{ apiKey: APIKey; key: string }> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new AuthenticationError('User not found', 'USER_NOT_FOUND');
    }

    // Generate API key
    const keyId = this.generateUUID();
    const keyValue = this.generateAPIKeyValue();
    const keyPrefix = keyValue.substring(0, 8);
    const keyHash = await this.hashAPIKey(keyValue);

    const apiKey: APIKey = {
      id: keyId,
      organizationId: user.organizationId,
      userId: user.id,
      name,
      keyPrefix,
      keyHash,
      scopes,
      rateLimit: this.getDefaultRateLimit(user.role),
      createdAt: new Date(),
      expiresAt,
      status: 'active'
    };

    // TODO: Save to database
    await this.saveAPIKey(apiKey);

    return { apiKey, key: keyValue };
  }

  /**
   * Verify API key and return context
   */
  async verifyAPIKey(key: string): Promise<{
    apiKey: APIKey;
    user: User;
    organization: any;
  }> {
    const keyHash = await this.hashAPIKey(key);
    const apiKey = await this.getAPIKeyByHash(keyHash);

    if (!apiKey || apiKey.status !== 'active') {
      throw new AuthenticationError('Invalid API key', 'INVALID_API_KEY');
    }

    if (apiKey.expiresAt && apiKey.expiresAt < new Date()) {
      throw new AuthenticationError('API key expired', 'API_KEY_EXPIRED');
    }

    // Update last used
    await this.updateAPIKeyLastUsed(apiKey.id);

    const user = await this.getUserById(apiKey.userId);
    const organization = await this.getOrganizationContext(apiKey.organizationId);

    return { apiKey, user, organization };
  }

  /**
   * Check if user has specific permission
   */
  hasPermission(user: User, permission: Permission): boolean {
    return user.permissions.includes(permission) || this.roleHasPermission(user.role, permission);
  }

  /**
   * Check if user has any of the specified permissions
   */
  hasAnyPermission(user: User, permissions: Permission[]): boolean {
    return permissions.some(permission => this.hasPermission(user, permission));
  }

  /**
   * Check if user has all specified permissions
   */
  hasAllPermissions(user: User, permissions: Permission[]): boolean {
    return permissions.every(permission => this.hasPermission(user, permission));
  }

  /**
   * Middleware for protecting API routes
   */
  async protectRoute(
    request: NextRequest,
    requiredPermissions: Permission[] = []
  ): Promise<{ user: User; apiKey?: APIKey }> {
    // Try JWT token first (from cookies or Authorization header)
    const jwtToken = this.extractJWTToken(request);
    if (jwtToken) {
      const payload = await this.verifyToken(jwtToken);
      const user = await this.getUserById(payload.userId);
      
      if (!user) {
        throw new AuthenticationError('User not found', 'USER_NOT_FOUND');
      }

      // Check permissions
      if (requiredPermissions.length > 0 && !this.hasAllPermissions(user, requiredPermissions)) {
        throw new AuthorizationError('Insufficient permissions', 'INSUFFICIENT_PERMISSIONS');
      }

      return { user };
    }

    // Try API key
    const apiKey = this.extractAPIKey(request);
    if (apiKey) {
      const { apiKey: apiKeyData, user } = await this.verifyAPIKey(apiKey);
      
      // Check API key scopes
      if (requiredPermissions.length > 0) {
        const hasRequiredPermissions = requiredPermissions.every(permission =>
          apiKeyData.scopes.includes(permission)
        );
        
        if (!hasRequiredPermissions) {
          throw new AuthorizationError('API key lacks required scopes', 'INSUFFICIENT_SCOPES');
        }
      }

      return { user, apiKey: apiKeyData };
    }

    throw new AuthenticationError('Authentication required', 'AUTH_REQUIRED');
  }

  /**
   * Role-based permission checking
   */
  private roleHasPermission(role: UserRole, permission: Permission): boolean {
    const rolePermissions: Record<UserRole, Permission[]> = {
      [UserRole.SUPER_ADMIN]: Object.values(Permission), // All permissions
      [UserRole.ORG_OWNER]: [
        Permission.MANAGE_ORGANIZATION,
        Permission.MANAGE_USERS,
        Permission.MANAGE_BILLING,
        Permission.MANAGE_SETTINGS,
        Permission.CREATE_CANDIDATES,
        Permission.VIEW_CANDIDATES,
        Permission.EDIT_CANDIDATES,
        Permission.DELETE_CANDIDATES,
        Permission.EXPORT_CANDIDATES,
        Permission.CREATE_ASSESSMENTS,
        Permission.VIEW_ASSESSMENTS,
        Permission.EDIT_ASSESSMENTS,
        Permission.DELETE_ASSESSMENTS,
        Permission.CONFIGURE_ASSESSMENTS,
        Permission.CREATE_JOBS,
        Permission.VIEW_JOBS,
        Permission.EDIT_JOBS,
        Permission.DELETE_JOBS,
        Permission.PUBLISH_JOBS,
        Permission.CREATE_AGENTS,
        Permission.VIEW_AGENTS,
        Permission.CONFIGURE_AGENTS,
        Permission.START_STOP_AGENTS,
        Permission.VIEW_ANALYTICS,
        Permission.VIEW_REPORTS,
        Permission.CREATE_REPORTS,
        Permission.EXPORT_ANALYTICS,
        Permission.USE_API,
        Permission.MANAGE_API_KEYS,
        Permission.MANAGE_WEBHOOKS,
        Permission.WHITE_LABEL_ACCESS
      ],
      [UserRole.ORG_ADMIN]: [
        Permission.MANAGE_USERS,
        Permission.MANAGE_SETTINGS,
        Permission.CREATE_CANDIDATES,
        Permission.VIEW_CANDIDATES,
        Permission.EDIT_CANDIDATES,
        Permission.DELETE_CANDIDATES,
        Permission.EXPORT_CANDIDATES,
        Permission.CREATE_ASSESSMENTS,
        Permission.VIEW_ASSESSMENTS,
        Permission.EDIT_ASSESSMENTS,
        Permission.CONFIGURE_ASSESSMENTS,
        Permission.CREATE_JOBS,
        Permission.VIEW_JOBS,
        Permission.EDIT_JOBS,
        Permission.DELETE_JOBS,
        Permission.PUBLISH_JOBS,
        Permission.VIEW_AGENTS,
        Permission.CONFIGURE_AGENTS,
        Permission.VIEW_ANALYTICS,
        Permission.VIEW_REPORTS,
        Permission.CREATE_REPORTS,
        Permission.USE_API
      ],
      [UserRole.HR_MANAGER]: [
        Permission.CREATE_CANDIDATES,
        Permission.VIEW_CANDIDATES,
        Permission.EDIT_CANDIDATES,
        Permission.EXPORT_CANDIDATES,
        Permission.CREATE_ASSESSMENTS,
        Permission.VIEW_ASSESSMENTS,
        Permission.EDIT_ASSESSMENTS,
        Permission.CREATE_JOBS,
        Permission.VIEW_JOBS,
        Permission.EDIT_JOBS,
        Permission.PUBLISH_JOBS,
        Permission.VIEW_AGENTS,
        Permission.VIEW_ANALYTICS,
        Permission.VIEW_REPORTS,
        Permission.USE_API
      ],
      [UserRole.RECRUITER]: [
        Permission.CREATE_CANDIDATES,
        Permission.VIEW_CANDIDATES,
        Permission.EDIT_CANDIDATES,
        Permission.CREATE_ASSESSMENTS,
        Permission.VIEW_ASSESSMENTS,
        Permission.VIEW_JOBS,
        Permission.VIEW_ANALYTICS,
        Permission.USE_API
      ],
      [UserRole.TEAM_LEAD]: [
        Permission.VIEW_CANDIDATES,
        Permission.VIEW_ASSESSMENTS,
        Permission.VIEW_JOBS,
        Permission.VIEW_ANALYTICS,
        Permission.VIEW_REPORTS
      ],
      [UserRole.VIEWER]: [
        Permission.VIEW_CANDIDATES,
        Permission.VIEW_ASSESSMENTS,
        Permission.VIEW_JOBS,
        Permission.VIEW_ANALYTICS
      ]
    };

    return rolePermissions[role]?.includes(permission) || false;
  }

  // Helper methods (mocked implementations)
  private async getUserByEmail(email: string): Promise<User | null> {
    // TODO: Implement database query
    return null;
  }

  private async getUserById(id: string): Promise<User | null> {
    // TODO: Implement database query
    return null;
  }

  private async verifyPassword(password: string, userId: string): Promise<boolean> {
    // TODO: Implement bcrypt verification
    return true;
  }

  private generateSessionId(): string {
    return this.generateUUID();
  }

  private async generateJWT(user: User, sessionId: string): Promise<string> {
    const payload: JWTPayload = {
      userId: user.id,
      organizationId: user.organizationId,
      role: user.role,
      permissions: user.permissions,
      sessionId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    };

    return await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .setIssuer(this.issuer)
      .setAudience(this.audience)
      .sign(this.jwtSecret);
  }

  private async generateRefreshToken(userId: string, sessionId: string): Promise<string> {
    return await new SignJWT({ sessionId })
      .setProtectedHeader({ alg: 'HS256' })
      .setSubject(userId)
      .setIssuedAt()
      .setExpirationTime('30d')
      .setIssuer(this.issuer)
      .setAudience(this.audience)
      .sign(this.refreshSecret);
  }

  private async updateLastLogin(userId: string): Promise<void> {
    // TODO: Update database
  }

  private async getOrganizationContext(organizationId: string): Promise<any> {
    // TODO: Get from database
    return {
      id: organizationId,
      name: 'Demo Organization',
      tier: 'enterprise',
      features: ['full_47d', 'ai_agents', 'white_label']
    };
  }

  private async getSession(sessionId: string): Promise<any> {
    // TODO: Get from database
    return { status: 'active' };
  }

  private generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  private generateAPIKeyValue(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'ak_';
    for (let i = 0; i < 48; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private async hashAPIKey(key: string): Promise<string> {
    // TODO: Implement proper hashing (bcrypt/argon2)
    return key; // Mock implementation
  }

  private getDefaultRateLimit(role: UserRole) {
    const limits = {
      [UserRole.SUPER_ADMIN]: { requestsPerMinute: 1000, requestsPerHour: 10000, requestsPerDay: 100000 },
      [UserRole.ORG_OWNER]: { requestsPerMinute: 500, requestsPerHour: 5000, requestsPerDay: 50000 },
      [UserRole.ORG_ADMIN]: { requestsPerMinute: 300, requestsPerHour: 3000, requestsPerDay: 30000 },
      [UserRole.HR_MANAGER]: { requestsPerMinute: 200, requestsPerHour: 2000, requestsPerDay: 20000 },
      [UserRole.RECRUITER]: { requestsPerMinute: 100, requestsPerHour: 1000, requestsPerDay: 10000 },
      [UserRole.TEAM_LEAD]: { requestsPerMinute: 60, requestsPerHour: 600, requestsPerDay: 6000 },
      [UserRole.VIEWER]: { requestsPerMinute: 30, requestsPerHour: 300, requestsPerDay: 3000 }
    };
    return limits[role];
  }

  private async saveAPIKey(apiKey: APIKey): Promise<void> {
    // TODO: Save to database
  }

  private async getAPIKeyByHash(hash: string): Promise<APIKey | null> {
    // TODO: Get from database
    return null;
  }

  private async updateAPIKeyLastUsed(keyId: string): Promise<void> {
    // TODO: Update database
  }

  private extractJWTToken(request: NextRequest): string | null {
    // Try Authorization header
    const authHeader = request.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      return authHeader.substring(7);
    }

    // Try cookies
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get('auth_token');
    return tokenCookie?.value || null;
  }

  private extractAPIKey(request: NextRequest): string | null {
    // Try X-API-Key header
    const apiKeyHeader = request.headers.get('X-API-Key');
    if (apiKeyHeader) {
      return apiKeyHeader;
    }

    // Try Authorization header with API key format
    const authHeader = request.headers.get('Authorization');
    if (authHeader && authHeader.startsWith('ApiKey ')) {
      return authHeader.substring(7);
    }

    return null;
  }
}

export const authSystem = new AuthSystem();