/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '10.0.0.180',
        port: '3333',
      },
    ],
  },
}

module.exports = nextConfig
