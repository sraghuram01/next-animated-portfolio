/** @type {import('next').NextConfig} */
const path = require('path');

// Define aliases for better import paths
const aliases = {
  '@public': path.resolve(__dirname, 'public'),
};

// Export the Next.js configuration
module.exports = {
  webpack: (config) => {
    // Add aliases to the webpack configuration
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    return config;
  },
  // Specify the image loader configuration
  images: {
    // Use the default loader to handle images from the /public directory
    loader: 'default',
  },
};
