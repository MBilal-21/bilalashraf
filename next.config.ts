import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Emit /projects/index.html etc. so routes work on any static host
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
