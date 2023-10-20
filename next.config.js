/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        hostname: "assets.website-files.com",
        pathname:"**/*",
        protocol: "https"
      }
    ],
    domains: ['github.com','images.unsplash.com'],
  }
}

module.exports = nextConfig
