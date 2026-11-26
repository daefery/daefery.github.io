// fyp/next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // one root layout per language (src/app/(en), src/app/(id)) needs a global 404
  experimental: {
    globalNotFound: true,
  },
}

export default nextConfig
