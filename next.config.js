/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is stable in Next.js 15, no longer experimental
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
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
  },
  // Better caching defaults in Next.js 15
  cacheHandler: process.env.NEXT_CACHE_HANDLER_PATH,
  // Bundle optimization for better performance
  bundlePagesRouterDependencies: true,
  serverExternalPackages: ['sharp'],
}

module.exports = nextConfig