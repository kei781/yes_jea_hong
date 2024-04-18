/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async() => [{ source: '/api/:path*', destination: '/api_/:path*' }]
}

module.exports = nextConfig
