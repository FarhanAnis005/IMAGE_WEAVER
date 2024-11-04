import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint checks
  },
  typescript: {
    ignoreBuildErrors: true,  // Skip TypeScript errors
  },
  // Add any other config options here
};

export default nextConfig;
