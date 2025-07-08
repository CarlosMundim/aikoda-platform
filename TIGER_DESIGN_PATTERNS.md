# 🐅 TIGER'S DESIGN PATTERN LIBRARY
## Battle-Tested Patterns for Enterprise Excellence

*Comprehensive pattern collection from real-world applications*

---

## 🏢 ENTERPRISE UI PATTERNS

### 1. Data Dashboard Pattern
```jsx
const Dashboard = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Top Navigation */}
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and primary nav */}
        </div>
      </div>
    </nav>
    
    {/* Main Content */}
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard title="Total Users" value="45,231" change="+12.5%" />
      </div>
      
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Revenue Trend" />
        <ChartCard title="User Activity" />
      </div>
    </main>
  </div>
);
```

### 2. Multi-Step Form Pattern
```jsx
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
          <span className="text-sm text-gray-600">{(step/totalSteps * 100).toFixed(0)}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(step/totalSteps) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Form Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        {step === 1 && <PersonalInfoStep />}
        {step === 2 && <CompanyInfoStep />}
        {step === 3 && <PreferencesStep />}
        {step === 4 && <ReviewStep />}
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button 
          onClick={() => setStep(s => Math.max(1, s - 1))}
          disabled={step === 1}
          className="px-6 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => setStep(s => Math.min(totalSteps, s + 1))}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {step === totalSteps ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
};
```

### 3. Search & Filter Pattern
```jsx
const SearchFilter = () => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    {/* Search Bar */}
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg
                   focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
    </div>
    
    {/* Filter Options */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>All Categories</option>
        <option>Technology</option>
        <option>Business</option>
      </select>
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>Date Range</option>
        <option>Last 7 days</option>
        <option>Last 30 days</option>
      </select>
      
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option>Sort By</option>
        <option>Most Recent</option>
        <option>Most Popular</option>
      </select>
    </div>
    
    {/* Active Filters */}
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="inline-flex items-center px-3 py-1 bg-blue-100 
                       text-blue-800 rounded-full text-sm">
        Technology
        <button className="ml-2 hover:text-blue-900">×</button>
      </span>
    </div>
  </div>
);
```

---

## 🎯 CONVERSION PATTERNS

### 1. Pricing Table Pattern
```jsx
const PricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {/* Basic Plan */}
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Basic</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">$29</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
          <span>Up to 10 users</span>
        </li>
      </ul>
      <button className="w-full py-3 border-2 border-gray-300 rounded-lg
                         hover:border-gray-400 transition-colors">
        Get Started
      </button>
    </div>
    
    {/* Pro Plan - Featured */}
    <div className="bg-blue-600 text-white rounded-lg shadow-xl p-8 
                    transform scale-105">
      <div className="bg-blue-500 text-xs font-semibold uppercase 
                      tracking-wider px-3 py-1 rounded-full inline-block mb-4">
        Most Popular
      </div>
      <h3 className="text-xl font-semibold mb-2">Professional</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">$99</span>
        <span className="opacity-80">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center">
          <CheckIcon className="h-5 w-5 text-blue-200 mr-2" />
          <span>Unlimited users</span>
        </li>
      </ul>
      <button className="w-full py-3 bg-white text-blue-600 rounded-lg
                         hover:bg-gray-50 transition-colors font-semibold">
        Get Started
      </button>
    </div>
  </div>
);
```

### 2. Feature Comparison Pattern
```jsx
const FeatureComparison = () => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-4 px-6">Features</th>
          <th className="text-center py-4 px-6">Basic</th>
          <th className="text-center py-4 px-6 bg-blue-50">Pro</th>
          <th className="text-center py-4 px-6">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-100">
          <td className="py-4 px-6 font-medium">Users</td>
          <td className="text-center py-4 px-6">10</td>
          <td className="text-center py-4 px-6 bg-blue-50 font-semibold">Unlimited</td>
          <td className="text-center py-4 px-6">Unlimited</td>
        </tr>
        <tr className="border-b border-gray-100">
          <td className="py-4 px-6 font-medium">API Access</td>
          <td className="text-center py-4 px-6">
            <XIcon className="h-5 w-5 text-gray-400 mx-auto" />
          </td>
          <td className="text-center py-4 px-6 bg-blue-50">
            <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
          </td>
          <td className="text-center py-4 px-6">
            <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
```

---

## 🔔 FEEDBACK PATTERNS

### 1. Toast Notification Pattern
```jsx
const Toast = ({ message, type = 'success' }) => (
  <div className={`
    fixed bottom-4 right-4 flex items-center px-6 py-4 rounded-lg shadow-lg
    transform transition-all duration-300 
    ${type === 'success' ? 'bg-green-500 text-white' : ''}
    ${type === 'error' ? 'bg-red-500 text-white' : ''}
    ${type === 'info' ? 'bg-blue-500 text-white' : ''}
  `}>
    {type === 'success' && <CheckIcon className="h-5 w-5 mr-3" />}
    {type === 'error' && <XIcon className="h-5 w-5 mr-3" />}
    {type === 'info' && <InfoIcon className="h-5 w-5 mr-3" />}
    <span className="font-medium">{message}</span>
  </div>
);
```

### 2. Loading States Pattern
```jsx
const LoadingStates = () => (
  <>
    {/* Spinner */}
    <div className="flex items-center justify-center p-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 
                      border-blue-600"></div>
    </div>
    
    {/* Skeleton */}
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    
    {/* Progress Bar */}
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-600">Processing...</span>
        <span className="text-sm text-gray-600">75%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div className="h-full bg-blue-600 rounded-full transition-all 
                        duration-300" style={{ width: '75%' }}></div>
      </div>
    </div>
  </>
);
```

---

## 📱 RESPONSIVE PATTERNS

### 1. Mobile Navigation Pattern
```jsx
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
      
      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden
        transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `} onClick={() => setIsOpen(false)} />
      
      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-50 md:hidden
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <XIcon className="h-6 w-6" />
          </button>
          <nav className="mt-8 space-y-4">
            <a href="#" className="block py-2 text-gray-900 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block py-2 text-gray-900 hover:text-blue-600">
              About
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
```

### 2. Responsive Table Pattern
```jsx
const ResponsiveTable = () => (
  <div className="overflow-x-auto -mx-4 sm:mx-0">
    <table className="min-w-full">
      <thead className="hidden sm:table-header-group">
        <tr className="border-b border-gray-200">
          <th className="text-left py-3 px-4">Name</th>
          <th className="text-left py-3 px-4">Email</th>
          <th className="text-left py-3 px-4">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 block sm:table-row">
          <td className="py-3 px-4 block sm:table-cell">
            <span className="font-medium sm:hidden">Name: </span>
            John Doe
          </td>
          <td className="py-3 px-4 block sm:table-cell">
            <span className="font-medium sm:hidden">Email: </span>
            john@example.com
          </td>
          <td className="py-3 px-4 block sm:table-cell">
            <span className="font-medium sm:hidden">Status: </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 
                           rounded-full text-xs">Active</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
```

---

## 🎨 ADVANCED PATTERNS

### 1. Infinite Scroll Pattern
```jsx
const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1 }
    );
    
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
      
      <div ref={observerTarget} className="h-10">
        {loading && <LoadingSpinner />}
      </div>
    </div>
  );
};
```

### 2. Drag & Drop Pattern
```jsx
const DragDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const handleDrop = (e, dropIndex) => {
    const dragIndex = e.dataTransfer.getData('dragIndex');
    const newItems = [...items];
    const draggedItem = newItems[dragIndex];
    
    newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    
    setItems(newItems);
  };
  
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="p-4 bg-white rounded-lg shadow-sm cursor-move
                     hover:shadow-md transition-shadow"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
```

---

## 🔐 AUTHENTICATION PATTERNS

### 1. Login Form Pattern
```jsx
const LoginForm = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign in to your account
        </h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg
                         focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot password?
            </a>
          </div>
          
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg
                             hover:bg-blue-700 transition-colors font-medium">
            Sign in
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700">
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
);
```

---

## 🎯 PATTERN USAGE GUIDE

### When to Use Each Pattern

| Pattern | Use Case |
|---------|----------|
| Dashboard | Analytics, admin panels, monitoring |
| Multi-Step Form | Complex data collection, onboarding |
| Search & Filter | Large data sets, e-commerce |
| Pricing Table | SaaS products, service tiers |
| Toast Notification | User feedback, confirmations |
| Mobile Navigation | Responsive sites, mobile-first |
| Infinite Scroll | Social feeds, large lists |
| Drag & Drop | Customization, ordering |

### Performance Tips
1. Use `React.memo` for expensive components
2. Implement virtual scrolling for long lists
3. Lazy load images and heavy components
4. Debounce search and filter inputs
5. Use CSS transforms for animations

---

*These patterns are battle-tested and ready for production use. Mix and match to create powerful user experiences!*