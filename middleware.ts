import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // Define your subdomains and their corresponding paths
  const subdomains: Record<string, string> = {
    blog: "/blog",
    solvr: "/solvr",
  };

  // Get the subdomain from the hostname
  const subdomain = hostname.split(".")[0];

  // Check if we have a matching subdomain
  if (subdomains[subdomain]) {
    // Rewrite the URL to the corresponding path
    return NextResponse.rewrite(
      new URL(subdomains[subdomain] + url.pathname, request.url)
    );
  }

  // If no subdomain matches, continue with the default behavior
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next|static|[\\w-]+\\.\\w+).*)",
  ],
};
