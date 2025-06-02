/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['i.ibb.co', 'images.pexels.com'],
  },
  // Enable PWA in production
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '',
    assetPrefix: '',
  }),
  // Add webpack configuration for service worker
  webpack: (config, { isServer }) => {
    // Generate a service worker script in the .next/static directory
    if (!isServer) {
      config.plugins.push(
        new (require('next-pwa'))({
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
          register: true,
          skipWaiting: true,
        })
      );
    }
    return config;
  },
};

module.exports = withPWA(nextConfig);
