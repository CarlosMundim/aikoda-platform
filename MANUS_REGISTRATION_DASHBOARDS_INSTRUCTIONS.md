# MANUS INSTRUCTIONS: Client & Candidate Registration Dashboards

## **Project Context**
You need to create 4 additional dashboards for the aiKODA Cultural Intelligence Platform using the EXACT same SAP Fiori design system and styling that has been established in the current platform.

## **CRITICAL REQUIREMENTS**

### ✅ **Design Standards**
- **MANDATORY**: Use existing SAP Fiori CSS classes from `globals.css`
- **MANDATORY**: Follow bilingual support (English/Japanese) pattern
- **MANDATORY**: Use existing component structure (`SAPCard`, `SAPButton`, etc.)
- **MANDATORY**: Match current navigation and layout system
- **NO EMOJIS** - Professional SAP enterprise appearance only

### ✅ **File Structure to Follow**
```
src/
├── app/
│   ├── client-registration/page.tsx
│   ├── client-login/page.tsx
│   ├── candidate-registration/page.tsx
│   ├── candidate-login/page.tsx
│   ├── admin-panel/page.tsx
│   └── settings/page.tsx
├── components/SAP/
│   ├── ClientRegistration.tsx
│   ├── ClientLogin.tsx
│   ├── CandidateRegistration.tsx
│   ├── CandidateLogin.tsx
│   ├── AdminPanel.tsx
│   └── Settings.tsx
```

## **DASHBOARD 1: CLIENT REGISTRATION**

### **Page Location**: `src/app/client-registration/page.tsx`
### **Component**: `src/components/SAP/ClientRegistration.tsx`

### **Functionality Required**:
```typescript
interface ClientRegistrationProps {
  language: 'en' | 'ja'
}

// Form Fields Required:
- Company Legal Name
- Company Trade Name
- Industry Classification
- Company Size Category
- Headquarters Country/City/Address
- Primary Contact Name/Title/Email/Phone
- Business Description
- Target Markets (multi-select)
- Current Challenges (multi-select)
- Hiring Needs (multi-select)
- Work Culture Type
- Communication Style
- Management Style
- Remote Work Policy
- Urgent Positions
- Budget Range
- Preferred Candidate Origins
```

### **Multi-Step Form Structure**:
1. **Company Information** (basic details)
2. **Business Profile** (industry, size, description)
3. **Cultural Profile** (work culture, communication style)
4. **Hiring Requirements** (needs, budget, urgency)
5. **Review & Submit**

### **Validation Requirements**:
- Email format validation
- Required field validation
- Phone number format
- Company registration number format

## **DASHBOARD 2: CLIENT LOGIN**

### **Page Location**: `src/app/client-login/page.tsx`
### **Component**: `src/components/SAP/ClientLogin.tsx`

### **Features Required**:
- Email/Password login form
- "Remember Me" checkbox
- "Forgot Password" link
- Company logo upload area
- Multi-factor authentication option
- Login history display
- Session timeout settings

## **DASHBOARD 3: CANDIDATE REGISTRATION**

### **Page Location**: `src/app/candidate-registration/page.tsx`
### **Component**: `src/components/SAP/CandidateRegistration.tsx`

### **Form Fields Required**:
```typescript
// Personal Information
- First Name, Last Name, Middle Name
- Email, Cell Phone, Home Phone
- Date of Birth, Nationality, Gender
- Current Address, Permanent Address
- Willing to Relocate checkbox

// Professional Background
- Current Position, Current Company
- Current Salary, Salary Expectations (min/max)
- Total Years Experience
- Industry Experience (multi-select)
- Notice Period, Availability Date
- Work Authorization Status
- Visa Type & Expiry Date

// Skills & Education
- Technical Skills (tags input)
- Soft Skills (tags input)
- Certifications (list)
- Language Proficiency (multi-language with levels)
- Education Records (degree, school, year)

// Cultural Preferences
- Work Style Preference
- Communication Style
- Team Collaboration Preference
- Leadership Interest Level
```

### **File Upload Areas**:
- Resume/CV upload
- Portfolio upload
- Certificates upload
- Profile picture upload

## **DASHBOARD 4: CANDIDATE LOGIN**

### **Page Location**: `src/app/candidate-login/page.tsx`
### **Component**: `src/components/SAP/CandidateLogin.tsx`

### **Features Required**:
- Email/Password login
- Social login options (LinkedIn, Google)
- Profile completion status bar
- Quick actions dashboard
- Saved job searches
- Application status overview

## **DASHBOARD 5: ADMIN PANEL**

### **Page Location**: `src/app/admin-panel/page.tsx`
### **Component**: `src/components/SAP/AdminPanel.tsx`

### **Features Required**:

#### **User Management Section**:
- User list with search/filter
- Role assignment (ADMIN, CLIENT, HR_MANAGER, CANDIDATE)
- User activity logs
- Account activation/deactivation
- Bulk operations

#### **System Metrics Section**:
- Total users by role
- Registration trends
- Active sessions
- Platform usage statistics
- Cultural assessment completion rates

#### **Content Management**:
- Job postings approval
- Company profile reviews
- Cultural assessment questions management
- System announcements

## **DASHBOARD 6: SETTINGS**

### **Page Location**: `src/app/settings/page.tsx`
### **Component**: `src/components/SAP/Settings.tsx`

### **Settings Categories**:

#### **Platform Configuration**:
- Language settings
- Currency settings
- Time zone configuration
- Date format preferences

#### **Cultural Intelligence Engine**:
- 47-dimension weights adjustment
- Assessment version selection
- Scoring algorithm parameters
- Cultural baseline configurations

#### **Integration Settings**:
- API key management
- Webhook configurations
- Third-party integrations
- Export format preferences

#### **Security Settings**:
- Password policies
- Session timeout
- Two-factor authentication
- Login attempt limits

## **EXACT SAP FIORI STYLING TO USE**

### **CSS Classes Reference**:
```css
/* Cards */
.sap-card
.sap-card-header
.sap-card-title
.sap-card-content

/* Buttons */
.sap-button.primary
.sap-button.secondary
.sap-button.ghost

/* Forms */
.sap-input
.sap-select
.sap-label

/* Typography */
.sap-title
.sap-subtitle
.sap-heading
.sap-body
.sap-caption

/* Grid */
.sap-grid
.sap-grid-2
.sap-grid-3
.sap-grid-4

/* Status */
.sap-status-success
.sap-status-warning
.sap-status-error
```

### **Color Variables to Use**:
```css
var(--sap-brand-color)     /* #0070F2 */
var(--sap-success-color)   /* #30914C */
var(--sap-warning-color)   /* #E76500 */
var(--sap-error-color)     /* #BB0000 */
var(--sap-background)      /* #FAFAFA */
var(--sap-card-background) /* #FFFFFF */
```

## **BILINGUAL IMPLEMENTATION PATTERN**

### **Follow This Exact Pattern**:
```typescript
const labels = {
  en: {
    title: "Client Registration",
    subtitle: "Enterprise Account Setup",
    companyInfo: "Company Information",
    // ... more labels
  },
  ja: {
    title: "クライアント登録",
    subtitle: "エンタープライズアカウント設定",
    companyInfo: "会社情報",
    // ... more labels
  }
}

const currentLabels = labels[language]
```

## **LAYOUT INTEGRATION**

### **Use DashboardLayout Component**:
```typescript
import { DashboardLayout } from '../../components/SAP/DashboardLayout'

export default function ClientRegistrationPage() {
  return (
    <DashboardLayout>
      {(language) => <ClientRegistration language={language} />}
    </DashboardLayout>
  )
}
```

## **NAVIGATION UPDATE REQUIRED**

### **Add New Routes to Navigation.tsx**:
```typescript
// Add to navItems in Navigation.tsx
{ href: '/client-registration', label: 'Client Registration' },
{ href: '/candidate-registration', label: 'Candidate Registration' },
{ href: '/admin-panel', label: 'Admin Panel' },
{ href: '/settings', label: 'Settings' },
```

## **DATABASE INTEGRATION**

### **Use Existing Prisma Schema**:
- Connect to existing `companies` table for client data
- Connect to existing `candidates` table for candidate data
- Use existing `User` table for authentication
- Reference existing schema in `/prisma/schema.prisma`

## **API ENDPOINTS TO CREATE**

### **Registration APIs**:
```
POST /api/auth/client-register
POST /api/auth/candidate-register
POST /api/auth/login
POST /api/admin/users
GET /api/admin/metrics
PUT /api/settings/platform
```

## **VALIDATION & ERROR HANDLING**

### **Use Zod Schemas**:
```typescript
import { z } from 'zod'

const clientRegistrationSchema = z.object({
  companyLegalName: z.string().min(1).max(100),
  email: z.string().email(),
  // ... more validation
})
```

## **TESTING REQUIREMENTS**

### **Ensure All Forms**:
- Submit successfully with valid data
- Show proper error messages for invalid data
- Handle network errors gracefully
- Maintain form state during navigation
- Support file uploads
- Work in both English and Japanese

## **DELIVERY REQUIREMENTS**

### **File Deliverables**:
1. All 6 page components (.tsx files)
2. All 6 dashboard components (.tsx files)
3. Updated Navigation.tsx with new routes
4. API route files for registration/login
5. Updated component index.ts exports

### **Quality Standards**:
- **EXACT SAP Fiori styling match** with existing platform
- **Professional enterprise appearance**
- **Complete bilingual support**
- **Mobile responsive design**
- **Proper error handling**
- **Form validation and sanitization**

## **SUCCESS CRITERIA**

✅ All dashboards match existing SAP Fiori design perfectly
✅ Bilingual support working seamlessly  
✅ Forms submit and validate correctly
✅ Navigation integrates smoothly
✅ Mobile responsive on all devices
✅ Professional enterprise appearance
✅ Database integration functional

**DEADLINE: Complete implementation needed for immediate deployment**

---

**Manus, this is the complete specification for the 4 missing dashboards. Follow the existing SAP Fiori patterns EXACTLY and ensure enterprise-grade quality matching the current platform standards.**