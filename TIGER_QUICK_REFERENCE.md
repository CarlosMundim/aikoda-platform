# 🐅 TIGER'S QUICK DESIGN REFERENCE
## Instant Access to Essential Design Patterns

*For when the Tiger needs rapid design decisions*

---

## 🎯 INSTANT DESIGN DECISIONS

### Color Palette Generator
```javascript
// Corporate Blue Scale
primary: {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1'
}
```

### Spacing Scale (8px Base)
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

### Typography Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

---

## 🚀 RAPID COMPONENT PATTERNS

### Enterprise Card
```jsx
<div className="bg-white rounded-xl shadow-sm hover:shadow-md 
                transition-all duration-300 p-6 border border-gray-200">
  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
  <p className="text-gray-600">{description}</p>
</div>
```

### Hero Section
```jsx
<section className="relative min-h-[600px] flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl font-bold text-gray-900 mb-6">
      {headline}
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl">
      {subheadline}
    </p>
    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg 
                       hover:bg-blue-700 transition-colors">
      {cta}
    </button>
  </div>
</section>
```

### Responsive Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Auto-responsive grid items */}
</div>
```

---

## 📐 MATHEMATICAL LAYOUTS

### Golden Ratio
```css
--golden-ratio: 1.618;
--content-width: 60ch;
--sidebar-width: calc(60ch / 1.618);
```

### 4-Column Grid System
```css
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .grid-4 { grid-template-columns: 1fr; }
}
```

---

## 🎨 INSTANT ANIMATIONS

### Smooth Hover
```css
.smooth-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.smooth-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
```

### Fade In Animation
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

---

## 🛡 ACCESSIBILITY CHECKLIST

### Quick Wins
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] All interactive elements ≥ 44x44px
- [ ] Keyboard navigation works
- [ ] Alt text on all images
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Focus indicators visible
- [ ] ARIA labels where needed

### Testing Commands
```bash
# Lighthouse audit
npm run lighthouse

# Accessibility check
npm run a11y

# Visual regression
npm run test:visual
```

---

## 🔥 DESIGN DECISIONS MATRIX

| Scenario | Solution |
|----------|----------|
| Need subtle depth | `shadow-sm` → `shadow-md` on hover |
| Corporate feel | Blue-gray palette + clean lines |
| Modern touch | Rounded corners + micro-animations |
| Trust building | Consistent spacing + clear hierarchy |
| Call to action | High contrast + larger click area |
| Data display | Clean tables with zebra striping |
| Form design | Clear labels + inline validation |

---

## 💡 TIGER'S INSTANT WISDOM

### When in doubt:
1. **Simplify** - Remove before adding
2. **Align** - Everything on a grid
3. **Breathe** - Add more whitespace
4. **Consistent** - Use the scale
5. **Accessible** - Works for everyone

### Emergency CSS Reset
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.5;
  color: #111827;
}
```

---

**Tiger Tip**: When starting any design, ask:
1. Who is the user?
2. What's their goal?
3. How can I make it easier?
4. Is it accessible?
5. Does it scale?

*This reference is your design compass - use it wisely!*