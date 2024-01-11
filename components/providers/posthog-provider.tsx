"use client";

import { env } from "@/env.mjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

export function CustomPostHogProvider({ children }: any) {
  if (
    env.NEXT_PUBLIC_VERCEL_ENV !== "production" ||
    !env.NEXT_PUBLIC_POSTHOG_KEY
  ) {
    return null;
  }

  if (typeof window !== "undefined") {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host: env.NEXT_PUBLIC_HOST_URL || "https://app.posthog.com",
      capture_pageview: true,
    });
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
