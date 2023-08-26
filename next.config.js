/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${hostname}`]
  },
   
}

module.exports = nextConfig
