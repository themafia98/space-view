import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  reactStrictMode: true,
  webpack(config) {
    // import .glsl files as plain strings
    config.module.rules.push({ test: /\.glsl$/, type: "asset/source" });
    return config;
  },
};

export default nextConfig;
