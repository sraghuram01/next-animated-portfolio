/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  images: {
    domains: ['images.pexels.com'], // Add your remote domain(s) here
    loader: 'default'
  }
};

export default nextConfig;
