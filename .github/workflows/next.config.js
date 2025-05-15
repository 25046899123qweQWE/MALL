/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: 'secure_nextauth_secret_for_jwt_encryption',
    NEXTAUTH_URL: 'http://localhost:3000',
  },
}

module.exports = withPWA(nextConfig);