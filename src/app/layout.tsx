import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'iWORKZ Technologies kk - Cultural Intelligence Platform',
  description: '47-Dimension Cultural Intelligence for Japanese Business Integration',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'iWORKZ Platform',
  },
  applicationName: 'iWORKZ Platform',
  authors: [{ name: 'iWORKZ Technologies kk' }],
  generator: 'Next.js',
  keywords: ['cultural intelligence', 'hr platform', 'japanese business', 'talent management', 'ai assessment'],
  referrer: 'origin-when-cross-origin',
  creator: 'iWORKZ Technologies kk',
  publisher: 'iWORKZ Technologies kk',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aikoda-platform.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ja-JP': '/ja-JP',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://aikoda-platform.vercel.app',
    siteName: 'iWORKZ Technologies kk',
    title: 'iWORKZ Technologies kk - Cultural Intelligence Platform',
    description: '47-Dimension Cultural Intelligence for Japanese Business Integration',
    images: [
      {
        url: '/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'iWORKZ Platform Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iWORKZ Technologies kk - Cultural Intelligence Platform',
    description: '47-Dimension Cultural Intelligence for Japanese Business Integration',
    images: ['/icons/icon-512x512.png'],
  },
  icons: {
    icon: [
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#0070F2',
      },
    ],
  },
  other: {
    'msapplication-TileColor': '#0070F2',
    'msapplication-config': '/browserconfig.xml',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0070F2' },
    { media: '(prefers-color-scheme: dark)', color: '#0070F2' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="iWORKZ" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#0070F2" />
        <link rel="apple-touch-icon" href="/icons/icon-180x180.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-sap-background">
        {children}
        
        {/* PWA Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                      
                      // Check for updates
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        newWorker.addEventListener('statechange', () => {
                          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New version available
                            if (confirm('New version available! Reload to update?')) {
                              window.location.reload();
                            }
                          }
                        });
                      });
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // PWA Install Prompt
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                
                // Show custom install button after user interacts with page
                setTimeout(() => {
                  if (deferredPrompt && !window.matchMedia('(display-mode: standalone)').matches) {
                    showInstallPrompt();
                  }
                }, 5000);
              });
              
              function showInstallPrompt() {
                const installBanner = document.createElement('div');
                installBanner.innerHTML = \`
                  <div style="position: fixed; bottom: 80px; left: 16px; right: 16px; background: #0070F2; color: white; padding: 16px; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 1000; display: flex; align-items: center; justify-content: space-between;">
                    <div>
                      <strong>Install iWORKZ App</strong>
                      <br><small>Add to home screen for better experience</small>
                    </div>
                    <div>
                      <button onclick="installPWA()" style="background: white; color: #0070F2; border: none; padding: 8px 16px; border-radius: 4px; margin-right: 8px; font-weight: 500; cursor: pointer;">Install</button>
                      <button onclick="dismissInstall()" style="background: transparent; color: white; border: 1px solid white; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Later</button>
                    </div>
                  </div>
                \`;
                document.body.appendChild(installBanner);
                
                window.installPWA = async () => {
                  if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const result = await deferredPrompt.userChoice;
                    deferredPrompt = null;
                    document.body.removeChild(installBanner);
                  }
                };
                
                window.dismissInstall = () => {
                  document.body.removeChild(installBanner);
                  localStorage.setItem('pwa-install-dismissed', Date.now());
                };
              }
              
              // Network status detection
              window.addEventListener('online', () => {
                document.body.classList.remove('offline');
                console.log('Back online');
              });
              
              window.addEventListener('offline', () => {
                document.body.classList.add('offline');
                console.log('Gone offline');
              });
            `,
          }}
        />
        
        {/* Performance and Analytics */}
        <Script
          id="performance-monitor"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              function sendToAnalytics(metric) {
                console.log('Performance metric:', metric);
                // Send to your analytics service
              }
              
              // Monitor Core Web Vitals
              if ('web-vital' in window) {
                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(sendToAnalytics);
                  getFID(sendToAnalytics);
                  getFCP(sendToAnalytics);
                  getLCP(sendToAnalytics);
                  getTTFB(sendToAnalytics);
                });
              }
              
              // Monitor app usage
              let sessionStart = Date.now();
              window.addEventListener('beforeunload', () => {
                const sessionDuration = Date.now() - sessionStart;
                console.log('Session duration:', sessionDuration);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}