// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.pexels.com'], // Add Pexels domain
    loader: 'default', // Use the default loader for images from /public directory
    
    remotePatterns: [
      {
        
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
};

export default nextConfig;
