const CACHE_NAME = 'iworkz-platform-v1.0.0'
const STATIC_CACHE = 'iworkz-static-v1.0.0'
const DYNAMIC_CACHE = 'iworkz-dynamic-v1.0.0'
const API_CACHE = 'iworkz-api-v1.0.0'

// Critical static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/landing',
  '/client-registration',
  '/candidate-registration',
  '/job-posting',
  '/market-intelligence',
  '/offline',
  '/manifest.json',
  '/_next/static/css/app/globals.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// API endpoints to cache with network-first strategy
const API_ENDPOINTS = [
  '/api/dashboard/enterprise-kpis',
  '/api/candidates',
  '/api/clients',
  '/api/jobs',
  '/api/market-data'
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully')
        self.skipWaiting()
      })
      .catch((error) => {
        console.error('[SW] Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('[SW] Old caches cleaned up')
        self.clients.claim()
      })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Handle API requests with network-first strategy
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirstStrategy(request))
    return
  }
  
  // Handle static assets with cache-first strategy
  if (isStaticAsset(request)) {
    event.respondWith(cacheFirstStrategy(request))
    return
  }
  
  // Handle navigation requests with stale-while-revalidate
  if (request.mode === 'navigate') {
    event.respondWith(staleWhileRevalidateStrategy(request))
    return
  }
  
  // Default: network with cache fallback
  event.respondWith(networkWithCacheFallback(request))
})

// Network-first strategy for API calls
async function networkFirstStrategy(request) {
  const cacheName = API_CACHE
  
  try {
    // Try network first
    const networkResponse = await fetch(request)
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    console.log('[SW] Network failed, trying cache for:', request.url)
    
    // Fall back to cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page for failed API calls
    return new Response(
      JSON.stringify({ 
        error: 'Offline - cached data not available',
        offline: true,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// Cache-first strategy for static assets
async function cacheFirstStrategy(request) {
  const cacheName = STATIC_CACHE
  
  // Try cache first
  const cachedResponse = await caches.match(request)
  if (cachedResponse) {
    return cachedResponse
  }
  
  try {
    // Fetch from network and cache
    const networkResponse = await fetch(request)
    const cache = await caches.open(cacheName)
    cache.put(request, networkResponse.clone())
    return networkResponse
  } catch (error) {
    console.error('[SW] Failed to fetch static asset:', request.url, error)
    
    // Return offline fallback for images
    if (request.destination === 'image') {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="#f0f0f0" width="200" height="200"/><text x="100" y="100" text-anchor="middle" fill="#666">Offline</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      )
    }
    
    throw error
  }
}

// Stale-while-revalidate strategy for navigation
async function staleWhileRevalidateStrategy(request) {
  const cacheName = DYNAMIC_CACHE
  const cache = await caches.open(cacheName)
  
  // Get cached version immediately
  const cachedResponse = await cache.match(request)
  
  // Fetch fresh version in background
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone())
      }
      return response
    })
    .catch(() => {
      // If network fails and we have cache, return offline page
      if (!cachedResponse) {
        return caches.match('/offline')
      }
    })
  
  // Return cached version immediately, or wait for network
  return cachedResponse || fetchPromise
}

// Network with cache fallback
async function networkWithCacheFallback(request) {
  try {
    const networkResponse = await fetch(request)
    
    // Cache successful responses
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE)
      cache.put(request, networkResponse.clone())
    }
    
    return networkResponse
  } catch (error) {
    // Fall back to cache
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      return caches.match('/offline')
    }
    
    throw error
  }
}

// Helper function to identify static assets
function isStaticAsset(request) {
  const url = new URL(request.url)
  
  return (
    // Next.js static files
    url.pathname.startsWith('/_next/static/') ||
    // Public assets
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/images/') ||
    // Manifest and other PWA files
    url.pathname === '/manifest.json' ||
    url.pathname === '/favicon.ico' ||
    // CSS and JS files
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.ttf')
  )
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag)
  
  if (event.tag === 'background-sync-assessments') {
    event.waitUntil(syncAssessments())
  }
  
  if (event.tag === 'background-sync-registrations') {
    event.waitUntil(syncRegistrations())
  }
})

// Sync offline assessments when back online
async function syncAssessments() {
  try {
    // Get offline assessments from IndexedDB
    const assessments = await getOfflineAssessments()
    
    for (const assessment of assessments) {
      try {
        await fetch('/api/assessments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(assessment)
        })
        
        // Remove from offline storage after successful sync
        await removeOfflineAssessment(assessment.id)
        
        console.log('[SW] Synced assessment:', assessment.id)
      } catch (error) {
        console.error('[SW] Failed to sync assessment:', assessment.id, error)
      }
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error)
  }
}

// Sync offline registrations when back online
async function syncRegistrations() {
  try {
    const registrations = await getOfflineRegistrations()
    
    for (const registration of registrations) {
      try {
        const endpoint = registration.type === 'client' 
          ? '/api/clients' 
          : '/api/candidates'
          
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(registration.data)
        })
        
        await removeOfflineRegistration(registration.id)
        
        console.log('[SW] Synced registration:', registration.id)
      } catch (error) {
        console.error('[SW] Failed to sync registration:', registration.id, error)
      }
    }
  } catch (error) {
    console.error('[SW] Registration sync failed:', error)
  }
}

// IndexedDB helpers for offline data
async function getOfflineAssessments() {
  // Implementation would use IndexedDB to store/retrieve offline data
  return []
}

async function removeOfflineAssessment(id) {
  // Implementation would remove assessment from IndexedDB
}

async function getOfflineRegistrations() {
  // Implementation would use IndexedDB to store/retrieve offline data
  return []
}

async function removeOfflineRegistration(id) {
  // Implementation would remove registration from IndexedDB
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received')
  
  const options = {
    title: 'iWORKZ Technologies kk',
    body: event.data ? event.data.text() : 'New cultural assessment available',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-192x192.png',
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'view',
        title: 'View Assessment',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  }
  
  event.waitUntil(
    self.registration.showNotification(options.title, options)
  )
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked')
  
  event.notification.close()
  
  if (event.action === 'view' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data?.url || '/')
    )
  }
})

// Message handling for communication with main thread
self.addEventListener('message', (event) => {
  console.log('[SW] Message received:', event.data)
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
})

console.log('[SW] Service Worker loaded successfully')