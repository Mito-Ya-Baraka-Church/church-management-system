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
import { BellRing } from "lucide-react";

const { dashboardNav, name } = siteConfig;

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <MobileMenu />
        <Link className="flex items-center justify-center gap-2" href="/">
          <Icons.logo className="h-6 w-6" />
          <span className="ml-2 hidden text-xl font-bold sm:flex">{name}</span>
        </Link>
        <Nav items={dashboardNav} />
      </div>

      <div className="flex items-center justify-end space-x-2">
        <BellRing />
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrSignIn />
        </React.Suspense>

        <ThemeToggle />
      </div>
    </header>
  );
}
