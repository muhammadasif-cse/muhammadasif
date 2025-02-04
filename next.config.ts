import type { NextConfig } from "next";
const ENV = process.env;

const nextConfig: NextConfig = {
  images: {
    domains: ["skillicons.dev"],
  },
  env: {
    SKILL_HOST: `${ENV?.API_SKILL_HOST ?? ""}`,
  },
};

export default nextConfig;
