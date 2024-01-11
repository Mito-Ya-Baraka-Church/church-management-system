import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { IconGitHub } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/theme-toggle";

import { siteConfig } from "@/config/site";
import { Nav } from "@/components/navigation/main-nav";
import { Icons } from "@/components/misc/icons";
import { MobileMenu } from "@/components/navigation/app/mobile-menu";

import { UserOrSignIn } from "@/components/auth/user-or-signin";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        <MobileMenu />
        <Link className="flex items-center justify-center " href="/">
          <Icons.logo className="h-6 w-6" />
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
        <a href="/blur" className={cn(buttonVariants() + " hidden sm:flex")}>
          <span className="">Get Started</span>
        </a>
      </div>
    </header>
  );
}
