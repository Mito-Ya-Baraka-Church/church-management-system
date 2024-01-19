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
      {/* mobile header  */}
      <header className="sticky top-0 flex items-center justify-between border-b bg-background  bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-6 pb-2  pt-4 text-sm backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-start">
          <MobileMenu />
          <ScalingLogo />
          <Link className="ml-10 flex items-center justify-center " href="/">
            <span className="text-xl font-bold ">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-2 py-1">
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
      <header
        className={` hidden  justify-between  gap-4 bg-background px-6 pb-0 pl-16 pt-4 text-sm  md:flex
            ${
              process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? "top-4" : ""
            }`}
      >
        <ScalingLogo />
        <div className="flex items-center justify-start">
          <Link className="mb-2   items-center justify-center " href="/">
            <span className=" text-xl font-bold ">{siteConfig.name}</span>
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

      <div
        className={` sticky  top-0  hidden bg-background  px-6 pb-[2rem] pt-4 md:flex
      ${process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? "top-4" : ""}`}
      ></div>
      <DashboardSubHeader />
      <div
        className={`sticky z-50 hidden h-[1.4px]  bg-muted-foreground dark:bg-[#ffffff24] md:flex
        ${
          process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
            ? "top-16"
            : "top-[3rem]"
        }`}
      />
    </>
  );
}
