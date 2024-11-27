import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("auth");

  if (
    request.nextUrl.pathname.startsWith("/add-post") &&
    authCookie?.value !== "true"
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/add-post",
};
