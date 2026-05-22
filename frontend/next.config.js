/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'via.placeholder.com', 'upload.wikimedia.org', 'media.formula1.com'],
    unoptimized: true
  },
  experimental: {}
};

module.exports = nextConfig;
