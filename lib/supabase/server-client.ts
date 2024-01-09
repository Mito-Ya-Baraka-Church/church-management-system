import { type NextRequest, type NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookie, setCookie } from "cookies-next";
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { env } from "@/env.mjs";

// server component can only get cookies and not set them, hence the "component" check
export function createSupabaseServerClient(component: boolean = false) {
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookies().get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          if (component) return;
          cookies().set(name, value, options);
        },
        remove(name: string, options: CookieOptions) {
          if (component) return;
          cookies().set(name, "", options);
        },
      },
    }
  );
}

export function createSupabaseServerComponentClient() {
  return createSupabaseServerClient(true);
}

export function createSupabaseReqResClient(
  req: NextRequest,
  res: NextResponse
) {
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL!,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return getCookie(name, { req, res });
        },
        set(name: string, value: string, options: CookieOptions) {
          setCookie(name, value, { req, res, ...options });
        },
        remove(name: string, options: CookieOptions) {
          setCookie(name, "", { req, res, ...options });
        },
      },
    }
  );
}
