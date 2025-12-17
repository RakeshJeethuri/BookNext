import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Allow other local origins (useful when accessing the app
  // via 127.0.0.1 or when another local dev server proxies requests)
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://localhost:5173',
    'http://127.0.0.1:5173',
  ],
};

export default nextConfig;
