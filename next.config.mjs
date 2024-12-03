/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure assets are served correctly regardless of domain
  assetPrefix: process.env.NODE_ENV === "production" ? "/_next" : "",

  // Configure images to work with subdomains and remote patterns
  images: {
    domains: ["rahms.dev", "blog.rahms.dev", "solvr.rahms.dev"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },

  // Update rewrites to preserve query parameters and handle paths correctly
  async rewrites() {
    return {
      beforeFiles: [
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
