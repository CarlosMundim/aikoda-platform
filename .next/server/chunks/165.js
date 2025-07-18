exports.id=165,exports.ids=[165],exports.modules={784:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6346,23)),Promise.resolve().then(n.t.bind(n,7924,23)),Promise.resolve().then(n.t.bind(n,5656,23)),Promise.resolve().then(n.t.bind(n,99,23)),Promise.resolve().then(n.t.bind(n,8243,23)),Promise.resolve().then(n.t.bind(n,8827,23)),Promise.resolve().then(n.t.bind(n,2763,23)),Promise.resolve().then(n.t.bind(n,7173,23))},1135:()=>{},1185:(e,t,n)=>{"use strict";n.d(t,{J:()=>s});var i=n(687),a=n(3210);function s({onLanguageChange:e}){let[t,n]=(0,a.useState)("en"),s=t=>{n(t),e&&e(t),document.documentElement.lang=t};return(0,i.jsxs)("div",{className:"sap-language-toggle",children:[(0,i.jsx)("button",{className:`toggle-btn ${"en"===t?"active":""}`,onClick:()=>s("en"),children:"English"}),(0,i.jsx)("button",{className:`toggle-btn ${"ja"===t?"active":""}`,onClick:()=>s("ja"),children:"日本語"})]})}},4155:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9167,23))},4431:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o,metadata:()=>s,viewport:()=>r});var i=n(7413),a=n(6162);n(1135);let s={title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",manifest:"/manifest.json",appleWebApp:{capable:!0,statusBarStyle:"default",title:"iWORKZ Platform"},applicationName:"iWORKZ Platform",authors:[{name:"iWORKZ Technologies kk"}],generator:"Next.js",keywords:["cultural intelligence","hr platform","japanese business","talent management","ai assessment"],referrer:"origin-when-cross-origin",creator:"iWORKZ Technologies kk",publisher:"iWORKZ Technologies kk",formatDetection:{email:!1,address:!1,telephone:!1},metadataBase:new URL("https://aikoda-platform.vercel.app"),alternates:{canonical:"/",languages:{"en-US":"/en-US","ja-JP":"/ja-JP"}},openGraph:{type:"website",locale:"ja_JP",url:"https://aikoda-platform.vercel.app",siteName:"iWORKZ Technologies kk",title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",images:[{url:"/icons/icon-512x512.png",width:512,height:512,alt:"iWORKZ Platform Logo"}]},twitter:{card:"summary_large_image",title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",images:["/icons/icon-512x512.png"]},icons:{icon:[{url:"/icons/icon-32x32.png",sizes:"32x32",type:"image/png"},{url:"/icons/icon-16x16.png",sizes:"16x16",type:"image/png"}],apple:[{url:"/icons/icon-180x180.png",sizes:"180x180",type:"image/png"},{url:"/icons/icon-152x152.png",sizes:"152x152",type:"image/png"},{url:"/icons/icon-144x144.png",sizes:"144x144",type:"image/png"}],other:[{rel:"mask-icon",url:"/icons/safari-pinned-tab.svg",color:"#0070F2"}]},other:{"msapplication-TileColor":"#0070F2","msapplication-config":"/browserconfig.xml"}},r={themeColor:[{media:"(prefers-color-scheme: light)",color:"#0070F2"},{media:"(prefers-color-scheme: dark)",color:"#0070F2"}],width:"device-width",initialScale:1,maximumScale:5,userScalable:!0,viewportFit:"cover"};function o({children:e}){return(0,i.jsxs)("html",{lang:"ja",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,i.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:"iWORKZ"}),(0,i.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,i.jsx)("meta",{name:"msapplication-tap-highlight",content:"no"}),(0,i.jsx)("meta",{name:"theme-color",content:"#0070F2"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/icons/icon-180x180.png"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),(0,i.jsxs)("body",{className:"antialiased bg-sap-background",children:[e,(0,i.jsx)(a.default,{id:"sw-registration",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
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
            `}}),(0,i.jsx)(a.default,{id:"performance-monitor",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})}},4585:(e,t,n)=>{"use strict";n.d(t,{N:()=>o});var i=n(687),a=n(3210),s=n(1185),r=n(9841);function o({children:e}){let[t,n]=(0,a.useState)("en");return(0,i.jsxs)("div",{className:"min-h-screen bg-sap-background",children:[(0,i.jsx)("header",{className:"bg-white border-b border-sap-border",children:(0,i.jsx)("div",{className:"sap-container",children:(0,i.jsxs)("div",{className:"flex justify-between items-center py-4",children:[(0,i.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold text-sap-brand",children:"iWORKZ Technologies kk"}),(0,i.jsx)("span",{className:"text-sap-text-secondary",children:"Cultural Intelligence Platform"})]}),(0,i.jsx)(s.J,{onLanguageChange:n})]})})}),(0,i.jsx)(r.V,{language:t}),(0,i.jsx)("main",{className:"sap-container sap-section",children:e(t)}),(0,i.jsx)("footer",{className:"bg-white border-t border-sap-border mt-12",children:(0,i.jsx)("div",{className:"sap-container py-6",children:(0,i.jsxs)("div",{className:"text-center text-sap-text-muted",children:[(0,i.jsx)("p",{children:"\xa9 2025 iWORKZ Technologies kk. All rights reserved."}),(0,i.jsx)("p",{className:"mt-1",children:"Enterprise Edition - 47-Dimension Cultural Intelligence Framework"})]})})})]})}},6189:(e,t,n)=>{"use strict";var i=n(5773);n.o(i,"usePathname")&&n.d(t,{usePathname:function(){return i.usePathname}})},6565:(e,t,n)=>{"use strict";n.d(t,{L:()=>a});var i=n(687);function a({title:e,children:t,className:n="",action:a,loading:s=!1}){return(0,i.jsxs)("div",{className:`sap-card ${n}`,children:[e&&(0,i.jsxs)("div",{className:"sap-card-header",children:[(0,i.jsx)("h3",{className:"sap-card-title",children:e}),a&&(0,i.jsx)("div",{className:"sap-card-action",children:a}),s&&(0,i.jsx)("div",{className:"sap-loading"})]}),(0,i.jsx)("div",{className:"sap-card-content",children:s?(0,i.jsxs)("div",{className:"flex items-center justify-center py-8",children:[(0,i.jsx)("div",{className:"sap-loading"}),(0,i.jsx)("span",{className:"ml-2 sap-caption",children:"Loading..."})]}):t})]})}n(3210)},7232:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6444,23)),Promise.resolve().then(n.t.bind(n,6042,23)),Promise.resolve().then(n.t.bind(n,8170,23)),Promise.resolve().then(n.t.bind(n,9477,23)),Promise.resolve().then(n.t.bind(n,9345,23)),Promise.resolve().then(n.t.bind(n,2089,23)),Promise.resolve().then(n.t.bind(n,6577,23)),Promise.resolve().then(n.t.bind(n,1307,23))},8499:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,7429,23))},9841:(e,t,n)=>{"use strict";n.d(t,{V:()=>o});var i=n(687);n(3210);var a=n(5814),s=n.n(a),r=n(6189);function o({language:e}){let t=(0,r.usePathname)();return(0,i.jsx)("nav",{className:"bg-white border-b border-sap-border shadow-sm",children:(0,i.jsx)("div",{className:"sap-container",children:(0,i.jsx)("div",{className:"flex space-x-2 overflow-x-auto py-3",children:({en:[{href:"/",label:"Enterprise Cockpit"},{href:"/candidate-analyzer",label:"Candidate Analyzer"},{href:"/market-intelligence",label:"Market Intelligence"},{href:"/cultural-reports",label:"Cultural Reports"},{href:"/talent-pipeline",label:"Talent Pipeline"},{href:"/job-matching",label:"Job Matching"},{href:"/client-registration",label:"Client Registration"},{href:"/candidate-registration",label:"Candidate Registration"},{href:"/job-posting",label:"Job Posting"}],ja:[{href:"/",label:"エンタープライズ コックピット"},{href:"/candidate-analyzer",label:"候補者分析"},{href:"/market-intelligence",label:"市場インテリジェンス"},{href:"/cultural-reports",label:"文化レポート"},{href:"/talent-pipeline",label:"タレントパイプライン"},{href:"/job-matching",label:"ジョブマッチング"},{href:"/client-registration",label:"クライアント登録"},{href:"/candidate-registration",label:"候補者登録"},{href:"/job-posting",label:"求人投稿"}]})[e].map(e=>{let n=t===e.href;return(0,i.jsx)(s(),{href:e.href,className:`sap-button ${n?"primary":"secondary"} whitespace-nowrap`,children:e.label},e.href)})})})})}}};