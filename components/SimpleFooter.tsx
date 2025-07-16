'use client';

export default function SimpleFooter() {
  const platformLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Analytics', href: '#analytics' },
    { name: 'Intelligence', href: '#intelligence' },
    { name: 'Reports', href: '#reports' },
    { name: 'API', href: '#api' },
    { name: 'Documentation', href: '#docs' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        
        {/* Platform Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          {platformLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Platform Info */}
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
            <div className="text-sm text-gray-400">
              Enterprise AI Platform
            </div>
          </div>

          {/* Demo Status */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-gray-500">Demo Environment</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-xs text-gray-500">Real-time Data</span>
            </div>
          </div>

          {/* Technical Info */}
          <div className="text-xs text-gray-500">
            v2.1.0 | {new Date().getFullYear()}
          </div>
        </div>

        {/* Additional Platform Capabilities */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
            <span>47-Dimensional Cultural Analysis</span>
            <span>•</span>
            <span>AI-Powered Market Intelligence</span>
            <span>•</span>
            <span>Real-time Competitive Monitoring</span>
            <span>•</span>
            <span>Enterprise Integration Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}