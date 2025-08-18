import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Images configuration
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.umrahcheck.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // New Next.js 15 features
  experimental: {
    // Enable React 19 features
    reactCompiler: false, // Set to true when Babel plugin is ready
    
    // Enable unstable_after for background tasks
    after: true,
    
    // Optimize static generation
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
    
    // Enable Turbopack for faster development
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack'],
      },
    },
  },
  
  // Better caching defaults in Next.js 15
  cacheHandler: process.env.NEXT_CACHE_HANDLER_PATH,
  
  // Bundle optimization for better performance
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ['sharp'],
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Redirects for better SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
