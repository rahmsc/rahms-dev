/** @type {import('next').NextConfig} */
const nextConfig = {
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
