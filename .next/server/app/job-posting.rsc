1:"$Sreact.fragment"
2:I[7555,[],""]
3:I[1295,[],""]
4:I[9243,["177","static/chunks/app/layout-2ccd4175dce66979.js"],""]
6:I[894,[],"ClientPageRoot"]
7:I[5967,["874","static/chunks/874-e686077a031d6afe.js","796","static/chunks/796-655c9775720b1cb9.js","297","static/chunks/297-9f070ba96c88c7c4.js","49","static/chunks/app/job-posting/page-1afcad19a971fef7.js"],"default"]
a:I[9665,[],"OutletBoundary"]
d:I[4911,[],"AsyncMetadataOutlet"]
f:I[9665,[],"ViewportBoundary"]
11:I[9665,[],"MetadataBoundary"]
13:I[6614,[],""]
:HL["/_next/static/css/ef46db3751d8e999.css","style"]
5:Tfbc,
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
                installBanner.innerHTML = `
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
                `;
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
            0:{"P":null,"b":"zJD4EeriuYSwRFfIOgWWJ","p":"","c":["","job-posting"],"i":false,"f":[[["",{"children":["job-posting",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/ef46db3751d8e999.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"ja","children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","meta",null,{"name":"mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-status-bar-style","content":"default"}],["$","meta",null,{"name":"apple-mobile-web-app-title","content":"iWORKZ"}],["$","meta",null,{"name":"format-detection","content":"telephone=no"}],["$","meta",null,{"name":"msapplication-tap-highlight","content":"no"}],["$","meta",null,{"name":"theme-color","content":"#0070F2"}],["$","link",null,{"rel":"apple-touch-icon","href":"/icons/icon-180x180.png"}],["$","link",null,{"rel":"shortcut icon","href":"/favicon.ico"}]]}],["$","body",null,{"className":"antialiased bg-sap-background","children":[["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$L4",null,{"id":"sw-registration","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"$5"}}],["$","$L4",null,{"id":"performance-monitor","strategy":"afterInteractive","dangerouslySetInnerHTML":{"__html":"\n              // Core Web Vitals monitoring\n              function sendToAnalytics(metric) {\n                console.log('Performance metric:', metric);\n                // Send to your analytics service\n              }\n              \n              // Monitor Core Web Vitals\n              if ('web-vital' in window) {\n                import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {\n                  getCLS(sendToAnalytics);\n                  getFID(sendToAnalytics);\n                  getFCP(sendToAnalytics);\n                  getLCP(sendToAnalytics);\n                  getTTFB(sendToAnalytics);\n                });\n              }\n              \n              // Monitor app usage\n              let sessionStart = Date.now();\n              window.addEventListener('beforeunload', () => {\n                const sessionDuration = Date.now() - sessionStart;\n                console.log('Session duration:', sessionDuration);\n              });\n            "}}]]}]]}]]}],{"children":["job-posting",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L6",null,{"Component":"$7","searchParams":{},"params":{},"promises":["$@8","$@9"]}],null,["$","$La",null,{"children":["$Lb","$Lc",["$","$Ld",null,{"promise":"$@e"}]]}]]}],{},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","JqCInweagNES5vSRMa8xVv",{"children":[["$","$Lf",null,{"children":"$L10"}],null]}],["$","$L11",null,{"children":"$L12"}]]}],false]],"m":"$undefined","G":["$13","$undefined"],"s":false,"S":true}
14:"$Sreact.suspense"
15:I[4911,[],"AsyncMetadata"]
8:{}
9:{}
12:["$","div",null,{"hidden":true,"children":["$","$14",null,{"fallback":null,"children":["$","$L15",null,{"promise":"$@16"}]}]}]
c:null
10:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover, user-scalable=yes"}],["$","meta","2",{"name":"theme-color","media":"(prefers-color-scheme: light)","content":"#0070F2"}],["$","meta","3",{"name":"theme-color","media":"(prefers-color-scheme: dark)","content":"#0070F2"}]]
b:null
e:{"metadata":[["$","title","0",{"children":"iWORKZ Technologies kk - Cultural Intelligence Platform"}],["$","meta","1",{"name":"description","content":"47-Dimension Cultural Intelligence for Japanese Business Integration"}],["$","meta","2",{"name":"application-name","content":"iWORKZ Platform"}],["$","meta","3",{"name":"author","content":"iWORKZ Technologies kk"}],["$","link","4",{"rel":"manifest","href":"/manifest.json","crossOrigin":"$undefined"}],["$","meta","5",{"name":"generator","content":"Next.js"}],["$","meta","6",{"name":"keywords","content":"cultural intelligence,hr platform,japanese business,talent management,ai assessment"}],["$","meta","7",{"name":"referrer","content":"origin-when-cross-origin"}],["$","meta","8",{"name":"creator","content":"iWORKZ Technologies kk"}],["$","meta","9",{"name":"publisher","content":"iWORKZ Technologies kk"}],["$","meta","10",{"name":"msapplication-TileColor","content":"#0070F2"}],["$","meta","11",{"name":"msapplication-config","content":"/browserconfig.xml"}],["$","link","12",{"rel":"canonical","href":"https://aikoda-platform.vercel.app"}],["$","link","13",{"rel":"alternate","hrefLang":"en-US","href":"https://aikoda-platform.vercel.app/en-US"}],["$","link","14",{"rel":"alternate","hrefLang":"ja-JP","href":"https://aikoda-platform.vercel.app/ja-JP"}],["$","meta","15",{"name":"format-detection","content":"telephone=no, address=no, email=no"}],["$","meta","16",{"name":"mobile-web-app-capable","content":"yes"}],["$","meta","17",{"name":"apple-mobile-web-app-title","content":"iWORKZ Platform"}],["$","meta","18",{"name":"apple-mobile-web-app-status-bar-style","content":"default"}],["$","meta","19",{"property":"og:title","content":"iWORKZ Technologies kk - Cultural Intelligence Platform"}],["$","meta","20",{"property":"og:description","content":"47-Dimension Cultural Intelligence for Japanese Business Integration"}],["$","meta","21",{"property":"og:url","content":"https://aikoda-platform.vercel.app"}],["$","meta","22",{"property":"og:site_name","content":"iWORKZ Technologies kk"}],["$","meta","23",{"property":"og:locale","content":"ja_JP"}],["$","meta","24",{"property":"og:image","content":"https://aikoda-platform.vercel.app/icons/icon-512x512.png"}],["$","meta","25",{"property":"og:image:width","content":"512"}],["$","meta","26",{"property":"og:image:height","content":"512"}],["$","meta","27",{"property":"og:image:alt","content":"iWORKZ Platform Logo"}],["$","meta","28",{"property":"og:type","content":"website"}],["$","meta","29",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","30",{"name":"twitter:title","content":"iWORKZ Technologies kk - Cultural Intelligence Platform"}],["$","meta","31",{"name":"twitter:description","content":"47-Dimension Cultural Intelligence for Japanese Business Integration"}],["$","meta","32",{"name":"twitter:image","content":"https://aikoda-platform.vercel.app/icons/icon-512x512.png"}],["$","link","33",{"rel":"icon","href":"/icons/icon-32x32.png","sizes":"32x32","type":"image/png"}],["$","link","34",{"rel":"icon","href":"/icons/icon-16x16.png","sizes":"16x16","type":"image/png"}],["$","link","35",{"rel":"apple-touch-icon","href":"/icons/icon-180x180.png","sizes":"180x180","type":"image/png"}],["$","link","36",{"rel":"apple-touch-icon","href":"/icons/icon-152x152.png","sizes":"152x152","type":"image/png"}],["$","link","37",{"rel":"apple-touch-icon","href":"/icons/icon-144x144.png","sizes":"144x144","type":"image/png"}],["$","link","38",{"rel":"mask-icon","href":"/icons/safari-pinned-tab.svg","color":"#0070F2"}]],"error":null,"digest":"$undefined"}
16:{"metadata":"$e:metadata","error":null,"digest":"$undefined"}
