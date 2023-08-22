/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["spoonacular.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
