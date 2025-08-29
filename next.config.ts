import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // GitHub Pages configuration
  basePath: process.env.NODE_ENV === 'production' ? '/Fatal-error-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Fatal-error-website/' : '',
};

export default nextConfig;
