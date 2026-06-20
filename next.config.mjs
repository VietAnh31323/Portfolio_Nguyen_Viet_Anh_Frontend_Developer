/** @type {import('next').NextConfig} */

// For GitHub Pages project sites the app is served from a sub-path:
//   https://<user>.github.io/<repo>/
// The deploy workflow sets NEXT_PUBLIC_BASE_PATH to "/<repo>"; locally it is empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
