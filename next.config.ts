import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
 images: {
    domains: ['ik.imagekit.io'],
   remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/bleuyi/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
