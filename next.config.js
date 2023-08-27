/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [`${hostname}`]
  },
  env:{
    NEXT_PUBLIC_BACKEND_URL:'https://neweb.mailgemsroot.com'
  }
}

module.exports = nextConfig
