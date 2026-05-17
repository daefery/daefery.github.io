// fyp/next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/fyp',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
