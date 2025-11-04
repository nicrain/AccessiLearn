/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AccessiLearn',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
