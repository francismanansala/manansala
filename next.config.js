/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
    ],
    domains: ['platform-lookaside.fbsbx.com', 'avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig