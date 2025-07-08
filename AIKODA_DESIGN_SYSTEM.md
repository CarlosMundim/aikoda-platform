# 🐅 aiKODA Design System
## The Tiger's Systematic Excellence Framework

*Version 1.0.0 - Living Design System*

---

## 🎨 DESIGN PRINCIPLES

### Core Philosophy
**"Cultural Intelligence Through Design Excellence"**

1. **Trust Through Consistency**: Every element reinforces reliability
2. **Intelligence Made Visible**: Complex AI simplified visually  
3. **Cultural Sensitivity**: East meets West harmoniously
4. **Performance First**: Speed is a feature
5. **Accessible Excellence**: Works for everyone, everywhere

---

## 🎯 DESIGN TOKENS

### Color System

```scss
// Primary Palette - Trust & Intelligence
$colors: (
  // Blues - Primary Brand (Intelligence)
  blue: (
    50: #e3f2fd,
    100: #bbdefb,
    200: #90caf9,
    300: #64b5f6,
    400: #42a5f5,
    500: #2196f3,  // Primary
    600: #1e88e5,
    700: #1976d2,
    800: #1565c0,
    900: #0d47a1,
    950: #032D60   // Deep Navy
  ),
  
  // Grays - Sophistication
  gray: (
    50: #f9fafb,
    100: #f3f4f6,
    200: #e5e7eb,
    300: #d1d5db,
    400: #9ca3af,
    500: #6b7280,
    600: #4b5563,
    700: #374151,
    800: #1f2937,
    900: #111827,
    950: #030712
  ),
  
  // Accent Colors
  teal: (
    500: #14b8a6,  // Innovation
    600: #0d9488
  ),
  
  emerald: (
    500: #10b981,  // Success
    600: #059669
  ),
  
  amber: (
    500: #f59e0b,  // Warning
    600: #d97706
  ),
  
  rose: (
    500: #f43f5e,  // Error
    600: #e11d48
  )
);

// Semantic Colors
$semantic: (
  background: #ffffff,
  surface: #f9fafb,
  border: #e5e7eb,
  text-primary: #111827,
  text-secondary: #6b7280,
  text-inverse: #ffffff
);
```

### Typography System

```scss
// Font Families
$fonts: (
  sans: ('Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif),
  mono: ('Fira Code', 'Consolas', monospace),
  display: ('Cal Sans', 'Inter', sans-serif)  // For headings
);

// Type Scale - Perfect Fourth (1.333)
$type-scale: (
  xs: 0.75rem,    // 12px
  sm: 0.875rem,   // 14px
  base: 1rem,     // 16px
  lg: 1.125rem,   // 18px
  xl: 1.25rem,    // 20px
  2xl: 1.5rem,    // 24px
  3xl: 1.875rem,  // 30px
  4xl: 2.25rem,   // 36px
  5xl: 3rem,      // 48px
  6xl: 3.75rem,   // 60px
  7xl: 4.5rem     // 72px
);

// Font Weights
$font-weights: (
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
);

// Line Heights
$line-heights: (
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2
);
```

### Spacing System (8px Base)

```scss
$spacing: (
  0: 0,
  px: 1px,
  0.5: 0.125rem,  // 2px
  1: 0.25rem,     // 4px
  2: 0.5rem,      // 8px - Base Unit
  3: 0.75rem,     // 12px
  4: 1rem,        // 16px
  5: 1.25rem,     // 20px
  6: 1.5rem,      // 24px
  8: 2rem,        // 32px
  10: 2.5rem,     // 40px
  12: 3rem,       // 48px
  16: 4rem,       // 64px
  20: 5rem,       // 80px
  24: 6rem,       // 96px
  32: 8rem,       // 128px
  40: 10rem,      // 160px
  48: 12rem,      // 192px
  56: 14rem,      // 224px
  64: 16rem       // 256px
);
```

### Layout System

```scss
// Container Widths
$containers: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px,
  max: 1312px  // Custom max-width for content
);

// Breakpoints
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2xl: 1536px
);

// Grid System
$grid: (
  cols: 12,
  gap: 2rem,
  gap-sm: 1rem,
  gap-lg: 3rem
);
```

### Motion & Animation

```scss
// Timing Functions
$easings: (
  default: cubic-bezier(0.4, 0, 0.2, 1),
  in: cubic-bezier(0.4, 0, 1, 1),
  out: cubic-bezier(0, 0, 0.2, 1),
  in-out: cubic-bezier(0.4, 0, 0.2, 1),
  bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
);

// Durations
$durations: (
  instant: 100ms,
  fast: 200ms,
  normal: 300ms,
  slow: 500ms,
  slower: 700ms
);

// Standard Animations
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Elevation System

```scss
$shadows: (
  sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05),
  base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06),
  md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06),
  lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05),
  xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04),
  2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
  inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06),
  none: none
);
```

---

## 🧩 COMPONENT PATTERNS

### Primary Button
```tsx
const PrimaryButton = ({ children, size = 'md', ...props }) => (
  <button
    className={`
      inline-flex items-center justify-center
      font-semibold rounded-lg transition-all duration-200
      bg-blue-600 text-white
      hover:bg-blue-700 hover:shadow-lg hover:scale-[1.02]
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${size === 'sm' && 'px-4 py-2 text-sm'}
      ${size === 'md' && 'px-6 py-3 text-base'}
      ${size === 'lg' && 'px-8 py-4 text-lg'}
    `}
    {...props}
  >
    {children}
  </button>
);
```

### Card Component
```tsx
const Card = ({ children, variant = 'default' }) => (
  <div
    className={`
      rounded-xl transition-all duration-300
      ${variant === 'default' && 'bg-white border border-gray-200 shadow-sm hover:shadow-md'}
      ${variant === 'elevated' && 'bg-white shadow-lg hover:shadow-xl'}
      ${variant === 'filled' && 'bg-gray-50 border border-gray-100'}
    `}
  >
    {children}
  </div>
);
```

### Section Container
```tsx
const Section = ({ children, className = '' }) => (
  <section className={`py-20 lg:py-32 ${className}`}>
    <div className="max-w-[1312px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
```

---

## 📐 GRID SYSTEMS

### 12-Column Grid
```css
.grid-system {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

/* Responsive Columns */
.col-span-full { grid-column: span 12; }
.col-span-6 { grid-column: span 6; }
.col-span-4 { grid-column: span 4; }
.col-span-3 { grid-column: span 3; }

@media (max-width: 768px) {
  .col-span-6,
  .col-span-4,
  .col-span-3 {
    grid-column: span 12;
  }
}
```

### Feature Grid (4-Column)
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
```

---

## 🎯 ACCESSIBILITY STANDARDS

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: 3:1 minimum

### Focus States
```css
.focusable {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focusable:focus-visible {
  outline: 2px solid #2196f3;
  outline-offset: 2px;
}
```

### ARIA Patterns
- Use semantic HTML first
- Add ARIA only when needed
- Test with screen readers
- Keyboard navigation required

---

## 📱 RESPONSIVE STRATEGY

### Mobile-First Breakpoints
```scss
// Default: Mobile (< 640px)
.component {
  padding: 1rem;
}

// Tablet (≥ 768px)
@media (min-width: 768px) {
  .component {
    padding: 2rem;
  }
}

// Desktop (≥ 1024px)
@media (min-width: 1024px) {
  .component {
    padding: 3rem;
  }
}
```

### Container Queries (Future-Ready)
```css
@container (min-width: 400px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}
```

---

## 🚀 PERFORMANCE GUIDELINES

### Image Optimization
```tsx
// Always use Next.js Image
import Image from 'next/image';

<Image
  src="/hero-bg.jpg"
  alt="Cultural Intelligence Visualization"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
/>
```

### Code Splitting
```tsx
// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <ChartSkeleton />,
  ssr: false
});
```

### CSS Optimization
- Use Tailwind purge
- Avoid inline styles
- Minimize custom CSS
- Use CSS variables for theming

---

## 📊 METRICS & MONITORING

### Target Metrics
- **Lighthouse Score**: 95+ all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

### Monitoring Tools
- Vercel Analytics
- Google Analytics 4
- Sentry for errors
- Custom performance API

---

## 🔄 VERSIONING

### Design Token Updates
- **Major**: Breaking changes to token structure
- **Minor**: New tokens added
- **Patch**: Value adjustments

### Component Library
- Follow Semantic Versioning
- Maintain changelog
- Deprecation warnings
- Migration guides

---

*This design system is a living document, evolving with our understanding of user needs and technological capabilities.*

**Last Updated**: ${new Date().toISOString()}
**Maintained by**: Tiger NHI Design Intelligence