import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    // ESLintエラーを無視してビルドを続行
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
