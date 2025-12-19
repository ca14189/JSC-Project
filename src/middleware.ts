
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const PUBLIC_ROUTES = [
  "/fullstack-developer-login",
  "/fullstack-developer-signup",
];

const PROTECTED_ROUTES = [
  "/dashboard",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;

  // console.log("Middleware Pathname:", pathname, "Token:", token);

  if (token && PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"))) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!token && PROTECTED_ROUTES.some(route => pathname === route || pathname.startsWith(route + "/"))) {
    return NextResponse.redirect(new URL("/fullstack-developer-login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/fullstack-developer-login",
    "/fullstack-developer-login/:path*",
    "/fullstack-developer-signup",
    "/fullstack-developer-signup/:path*",
  ],
};
