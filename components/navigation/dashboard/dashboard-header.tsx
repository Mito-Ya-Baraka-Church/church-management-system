import * as React from "react";
import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

import { siteConfig } from "@/config/site";
import { Nav } from "@/components/navigation/main-nav";
import { MobileMenu } from "@/components/navigation/app/mobile-menu";

import { UserOrSignIn } from "@/components/auth/user-or-signin";
import { cn } from "@/lib/utils";
import { IconGitHub } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { ScalingLogo } from "@/components/navigation/dashboard/scaling-logo";
import { DashboardSubHeader } from "@/components/navigation/dashboard/dashboard-sub-header";

export function DashboardHeader() {
  return (
    <>
      <header
        className={`flex justify-between  gap-4  bg-background px-6 pb-0 pl-16 pt-4 text-sm
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
      <div className="sticky top-16 z-50  h-[1.4px] bg-muted" />
    </>
  );
}
