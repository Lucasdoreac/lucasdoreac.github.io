/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  trailingSlash: true,
}

export default nextConfig