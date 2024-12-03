/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Handle subdomain routing
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "blog.rahms.dev",
            },
          ],
          destination: "/blog/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "solvr.rahms.dev",
            },
          ],
          destination: "/solvr/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
