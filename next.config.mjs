/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  trailingSlash: false,

  images: {
    unoptimized: true
  },

  async redirects() {
    return [
      {
        source: '/rcm-management',
        destination: '/solutions/rcm-management',
        permanent: true,
      },
      {
        source: '/start-ups',
        destination: '/who-we-serve/start-ups',
        permanent: true,
      },
      {
        source: '/medical-billing-rcm',
        destination: '/solutions/medical-billing-rcm',
        permanent: true,
      },
      {
        source: '/ar-management',
        destination: '/solutions/ar-management',
        permanent: true,
      },
      {
        source: '/provider-credential',
        destination: '/solutions/provider-credential',
        permanent: true,
      },
      {
        source: '/payer-insurer-enrollment',
        destination: '/solutions/payer-insurer-enrollment',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
      {
        source: '/(api|_next|private|tmp)/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },

  experimental: {
    cpus: 1,
    workerThreads: false,
  }
};

export default nextConfig;