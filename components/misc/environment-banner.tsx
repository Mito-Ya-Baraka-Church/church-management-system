import { env } from "@/env.mjs";

export default function EnvironmentBanner() {
  return env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? (
    <div className="flex h-4 w-full items-center justify-center bg-violet-500 text-xs font-bold text-primary">
      Development Environment
    </div>
  ) : null;
}
