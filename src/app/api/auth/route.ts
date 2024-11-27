import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = cookies();
    cookieStore.set("auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ success: false }, { status: 401 });
}
