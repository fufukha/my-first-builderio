/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUILDER_API_KEY: process.env.BUILDER_API_KEY,
  },
}

module.exports = nextConfig
