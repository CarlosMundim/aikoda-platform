'use client';

interface CleanHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function CleanHeader({ 
  title = "Market Intelligence Platform",
  subtitle = "Enterprise AI Dashboard"
}: CleanHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-95 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left: Platform Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">{title}</h1>
              <p className="text-xs text-gray-400">{subtitle}</p>
            </div>
          </div>

          {/* Center: Navigation (Demo Mode) */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Dashboard
              </button>
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Analytics
              </button>
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Intelligence
              </button>
              <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                Reports
              </button>
            </div>
          </nav>

          {/* Right: Demo Status */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-400">Live Demo</span>
            </div>
            
            {/* Settings/Menu */}
            <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}