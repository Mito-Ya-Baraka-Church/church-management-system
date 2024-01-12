import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { siteConfig } from "./config/site";
const { additionalPublicPages } = siteConfig;
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const pathname = req.nextUrl.pathname;

  // OPTIONAL: this forces users to be logged in to use the app
  // unless they are on a public pages array.
  // If you want to allow anonymous users, simply remove the check below.
  // please don't add "/" to this array, it's already added in the if statement

  // homepage is always public , but we can add more public pages
  const publicPages = [
    "/sign-in",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
    ...additionalPublicPages,
  ];

  // console.log("public pages", publicPages);

  if (
    !session &&
    !publicPages.some((page) => pathname.startsWith(page)) &&
    pathname !== "/"
  ) {
    console.log("redirecting to sign-in");
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/sign-in";
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - share (publicly shared results)
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!share|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
