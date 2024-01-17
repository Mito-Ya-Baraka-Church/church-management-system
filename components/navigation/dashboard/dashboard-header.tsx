import * as React from "react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import useScrollPosition from "@react-hook/window-scroll";

import { siteConfig } from "@/config/site";
import { Nav } from "@/components/navigation/main-nav";
import { Icons } from "@/components/misc/icons";
import { MobileMenu } from "@/components/navigation/app/mobile-menu";

import { UserOrSignIn } from "@/components/auth/user-or-signin";
import { cn } from "@/lib/utils";
import { IconGitHub } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { getCurrentUserSession } from "@/actions/auth";
import { UserMenu } from "@/components/user-menu";
import { SignInButton } from "@/components/auth/user-login";
import { Session } from "@supabase/supabase-js";
import { ScalingLogo } from "./scaling-logo";
import { DashboardSubHeader } from "./dashboard-sub-header";

export function DashboardHeader() {
  return (
    <>
      <header
        className={`flex justify-between  gap-4  bg-background px-6 py-4 pl-16 text-sm
            ${
              process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? "top-4" : ""
            }`}
      >
        <ScalingLogo />
        <div className="flex items-center justify-start">
          <MobileMenu />
          <Link className="flex items-center justify-center " href="/">
            <span className="ml-2 hidden text-xl font-bold sm:flex">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="flex items-center justify-end space-x-2">
          <Nav items={siteConfig.mainNav} />
          <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
            <UserOrSignIn />
          </React.Suspense>
          {siteConfig.showGitHubBtn && (
            <a
              target="_blank"
              href={`${siteConfig.githubUrl}`}
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <IconGitHub />
            </a>
          )}

          <ThemeToggle />
        </div>
      </header>
      <DashboardSubHeader />
    </>
  );
}
