/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.spectrumcollections.com",
      "images.unsplash.com",
      "media-exp1.licdn.com",
    ],
  },
};

module.exports = nextConfig;
