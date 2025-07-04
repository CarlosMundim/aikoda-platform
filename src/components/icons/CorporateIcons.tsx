'use client';

import { 
  Brain,
  Users,
  BarChart3,
  Puzzle,
  Settings,
  Shield,
  Zap,
  Target,
  Globe,
  Database,
  Code,
  Monitor,
  FileText,
  MessageSquare,
  Award,
  CheckCircle,
  ArrowRight,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Bell,
  Calendar,
  Clock,
  User,
  UserPlus,
  UserCheck,
  Building,
  Briefcase,
  TrendingUp,
  Activity,
  PieChart,
  LineChart,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Share,
  Info
} from 'lucide-react';

// Corporate color palette
export const colors = {
  primary: '#3b82f6',      // Corporate blue
  secondary: '#06b6d4',    // Secondary cyan
  success: '#22c55e',      // Success green
  warning: '#f59e0b',      // Warning amber
  error: '#ef4444',        // Error red
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
};

// Icon component interface
interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Corporate icon components with consistent styling
export const CorporateIcons = {
  // Platform & Technology
  Platform: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Brain size={size} color={color} className={className} />
  ),
  
  AIAgent: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Zap size={size} color={color} className={className} />
  ),
  
  Analytics: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <BarChart3 size={size} color={color} className={className} />
  ),
  
  Integration: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Puzzle size={size} color={color} className={className} />
  ),
  
  Database: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Database size={size} color={color} className={className} />
  ),
  
  API: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Code size={size} color={color} className={className} />
  ),
  
  Monitor: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Monitor size={size} color={color} className={className} />
  ),

  // Business & Enterprise
  Enterprise: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Building size={size} color={color} className={className} />
  ),
  
  Team: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Users size={size} color={color} className={className} />
  ),
  
  Performance: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <TrendingUp size={size} color={color} className={className} />
  ),
  
  Success: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <CheckCircle size={size} color={color} className={className} />
  ),
  
  Target: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Target size={size} color={color} className={className} />
  ),

  Test: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <CheckCircle size={size} color={color} className={className} />
  ),

  Share: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Share size={size} color={color} className={className} />
  ),
  
  Award: ({ size = 24, color = colors.warning, className = '' }: IconProps) => (
    <Award size={size} color={color} className={className} />
  ),

  // Security & Compliance
  Security: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <Shield size={size} color={color} className={className} />
  ),
  
  Lock: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Lock size={size} color={color} className={className} />
  ),
  
  Unlock: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <Unlock size={size} color={color} className={className} />
  ),

  // User & Communication
  User: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <User size={size} color={color} className={className} />
  ),
  
  UserAdd: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <UserPlus size={size} color={color} className={className} />
  ),
  
  UserVerified: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <UserCheck size={size} color={color} className={className} />
  ),
  
  Message: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <MessageSquare size={size} color={color} className={className} />
  ),
  
  Notification: ({ size = 24, color = colors.warning, className = '' }: IconProps) => (
    <Bell size={size} color={color} className={className} />
  ),

  // Actions & Navigation
  Search: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Search size={size} color={color} className={className} />
  ),
  
  Filter: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Filter size={size} color={color} className={className} />
  ),
  
  Download: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Download size={size} color={color} className={className} />
  ),
  
  Upload: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Upload size={size} color={color} className={className} />
  ),
  
  ArrowRight: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <ArrowRight size={size} color={color} className={className} />
  ),
  
  Plus: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Plus size={size} color={color} className={className} />
  ),

  // Charts & Data
  PieChart: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <PieChart size={size} color={color} className={className} />
  ),
  
  LineChart: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <LineChart size={size} color={color} className={className} />
  ),
  
  Activity: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <Activity size={size} color={color} className={className} />
  ),

  // Contact & Location
  Location: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <MapPin size={size} color={color} className={className} />
  ),
  
  Email: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Mail size={size} color={color} className={className} />
  ),
  
  Phone: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Phone size={size} color={color} className={className} />
  ),

  // Social Media
  LinkedIn: ({ size = 24, color = '#0077B5', className = '' }: IconProps) => (
    <Linkedin size={size} color={color} className={className} />
  ),
  
  Twitter: ({ size = 24, color = '#1DA1F2', className = '' }: IconProps) => (
    <Twitter size={size} color={color} className={className} />
  ),
  
  GitHub: ({ size = 24, color = colors.gray[700], className = '' }: IconProps) => (
    <Github size={size} color={color} className={className} />
  ),
  
  YouTube: ({ size = 24, color = '#FF0000', className = '' }: IconProps) => (
    <Youtube size={size} color={color} className={className} />
  ),

  // Time & Calendar
  Calendar: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Calendar size={size} color={color} className={className} />
  ),
  
  Clock: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Clock size={size} color={color} className={className} />
  ),

  // Documents & Content
  Document: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <FileText size={size} color={color} className={className} />
  ),
  
  Settings: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Settings size={size} color={color} className={className} />
  ),

  // Global & International
  Global: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Globe size={size} color={color} className={className} />
  ),

  // Visibility
  Visible: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Eye size={size} color={color} className={className} />
  ),
  
  Hidden: ({ size = 24, color = colors.gray[400], className = '' }: IconProps) => (
    <EyeOff size={size} color={color} className={className} />
  ),

  // Business
  Business: ({ size = 24, color = colors.gray[600], className = '' }: IconProps) => (
    <Briefcase size={size} color={color} className={className} />
  ),

  // Information
  Info: ({ size = 24, color = colors.primary, className = '' }: IconProps) => (
    <Info size={size} color={color} className={className} />
  ),

  // Trends
  TrendUp: ({ size = 24, color = colors.success, className = '' }: IconProps) => (
    <TrendingUp size={size} color={color} className={className} />
  ),
};

// Icon size presets
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 48,
};

// Corporate icon styles for different use cases
export const iconStyles = {
  // Navigation icons
  nav: 'w-5 h-5 text-gray-600 hover:text-blue-600 transition-colors',
  
  // Card icons  
  card: 'w-8 h-8 text-blue-600',
  
  // Feature icons
  feature: 'w-12 h-12 text-blue-600',
  
  // Status icons
  success: 'w-5 h-5 text-green-600',
  warning: 'w-5 h-5 text-yellow-600', 
  error: 'w-5 h-5 text-red-600',
  info: 'w-5 h-5 text-blue-600',
  
  // Interactive icons
  button: 'w-4 h-4 text-current',
  link: 'w-4 h-4 text-blue-600 hover:text-blue-700',
  
  // Social icons
  social: 'w-5 h-5 text-gray-400 hover:text-current transition-colors',
};

export default CorporateIcons;