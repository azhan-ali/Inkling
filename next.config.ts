import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin turbopack to this project so Next doesn't pick up a sibling lockfile.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
