import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host") || "";
  const subdomain = hostname.split(".")[0];

  // Define your subdomains and their corresponding paths
  const subdomains: Record<string, string> = {
    blog: "/blog",
    solvr: "/solvr",
  };

  // Only handle known subdomains
  if (subdomains[subdomain]) {
    // Create a new URL object based on the request url
    const rewriteUrl = new URL(request.url);

    // Keep the original pathname and add it to the subdomain path
    rewriteUrl.pathname = `${subdomains[subdomain]}${url.pathname}`;

    // Preserve the search params
    rewriteUrl.search = url.search;

    return NextResponse.rewrite(rewriteUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
