(()=>{var e={};e.id=492,e.ids=[492],e.modules={784:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6346,23)),Promise.resolve().then(n.t.bind(n,7924,23)),Promise.resolve().then(n.t.bind(n,5656,23)),Promise.resolve().then(n.t.bind(n,99,23)),Promise.resolve().then(n.t.bind(n,8243,23)),Promise.resolve().then(n.t.bind(n,8827,23)),Promise.resolve().then(n.t.bind(n,2763,23)),Promise.resolve().then(n.t.bind(n,7173,23))},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1135:()=>{},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},4155:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,9167,23))},4431:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a,metadata:()=>i,viewport:()=>s});var o=n(7413),r=n(6162);n(1135);let i={title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",manifest:"/manifest.json",appleWebApp:{capable:!0,statusBarStyle:"default",title:"iWORKZ Platform"},applicationName:"iWORKZ Platform",authors:[{name:"iWORKZ Technologies kk"}],generator:"Next.js",keywords:["cultural intelligence","hr platform","japanese business","talent management","ai assessment"],referrer:"origin-when-cross-origin",creator:"iWORKZ Technologies kk",publisher:"iWORKZ Technologies kk",formatDetection:{email:!1,address:!1,telephone:!1},metadataBase:new URL("https://aikoda-platform.vercel.app"),alternates:{canonical:"/",languages:{"en-US":"/en-US","ja-JP":"/ja-JP"}},openGraph:{type:"website",locale:"ja_JP",url:"https://aikoda-platform.vercel.app",siteName:"iWORKZ Technologies kk",title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",images:[{url:"/icons/icon-512x512.png",width:512,height:512,alt:"iWORKZ Platform Logo"}]},twitter:{card:"summary_large_image",title:"iWORKZ Technologies kk - Cultural Intelligence Platform",description:"47-Dimension Cultural Intelligence for Japanese Business Integration",images:["/icons/icon-512x512.png"]},icons:{icon:[{url:"/icons/icon-32x32.png",sizes:"32x32",type:"image/png"},{url:"/icons/icon-16x16.png",sizes:"16x16",type:"image/png"}],apple:[{url:"/icons/icon-180x180.png",sizes:"180x180",type:"image/png"},{url:"/icons/icon-152x152.png",sizes:"152x152",type:"image/png"},{url:"/icons/icon-144x144.png",sizes:"144x144",type:"image/png"}],other:[{rel:"mask-icon",url:"/icons/safari-pinned-tab.svg",color:"#0070F2"}]},other:{"msapplication-TileColor":"#0070F2","msapplication-config":"/browserconfig.xml"}},s={themeColor:[{media:"(prefers-color-scheme: light)",color:"#0070F2"},{media:"(prefers-color-scheme: dark)",color:"#0070F2"}],width:"device-width",initialScale:1,maximumScale:5,userScalable:!0,viewportFit:"cover"};function a({children:e}){return(0,o.jsxs)("html",{lang:"ja",children:[(0,o.jsxs)("head",{children:[(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,o.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-status-bar-style",content:"default"}),(0,o.jsx)("meta",{name:"apple-mobile-web-app-title",content:"iWORKZ"}),(0,o.jsx)("meta",{name:"format-detection",content:"telephone=no"}),(0,o.jsx)("meta",{name:"msapplication-tap-highlight",content:"no"}),(0,o.jsx)("meta",{name:"theme-color",content:"#0070F2"}),(0,o.jsx)("link",{rel:"apple-touch-icon",href:"/icons/icon-180x180.png"}),(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),(0,o.jsxs)("body",{className:"antialiased bg-sap-background",children:[e,(0,o.jsx)(r.default,{id:"sw-registration",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
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
            `}}),(0,o.jsx)(r.default,{id:"performance-monitor",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})}},7232:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6444,23)),Promise.resolve().then(n.t.bind(n,6042,23)),Promise.resolve().then(n.t.bind(n,8170,23)),Promise.resolve().then(n.t.bind(n,9477,23)),Promise.resolve().then(n.t.bind(n,9345,23)),Promise.resolve().then(n.t.bind(n,2089,23)),Promise.resolve().then(n.t.bind(n,6577,23)),Promise.resolve().then(n.t.bind(n,1307,23))},7744:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>s.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var o=n(5239),r=n(8088),i=n(8170),s=n.n(i),a=n(893),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let d={children:["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.t.bind(n,7398,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4431)),"/home/carlos/koda_core/SYSTEM_BACKUP/Agent_Files/2_SERVICES/aikoda-presentation-cinema/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,7398,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9999,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,5284,23)),"next/dist/client/components/unauthorized-error"]}]}.children,c=[],p={require:n,loadChunk:()=>Promise.resolve()},m=new o.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8499:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,7429,23))},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[447,496],()=>n(7744));module.exports=o})();