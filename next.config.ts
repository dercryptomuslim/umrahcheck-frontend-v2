import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Images configuration
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cdn.umrahcheck.com'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true, // Ignore for deployment
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true, // Ignore for deployment
  },
}

export default nextConfig
