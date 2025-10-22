import { withContentlayer } from "next-contentlayer2";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: true },
  turbopack: {},
};

export default withContentlayer(nextConfig);