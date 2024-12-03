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
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "product.rahms.dev",
          },
        ],
        destination: "https://rahms.dev/product",
        permanent: true,
      },
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "blog.rahms.dev",
          },
        ],
        destination: "https://rahms.dev/blog",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
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
            value: "product.rahms.dev",
          },
        ],
        destination: "/product/:path*",
      },
    ];
  },
};

export default nextConfig;
