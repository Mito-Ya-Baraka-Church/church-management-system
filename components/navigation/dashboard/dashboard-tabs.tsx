"use client";

import { cn, convertPathToName } from "@/lib/utils";
import { Tab } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navigationConfig } from "@/config/navigation";

const { dashboardSubHeaderNav } = navigationConfig;

export function DashboardTabs() {
  const pathname = usePathname();

  function renderTab(tab: Tab) {
    return (
      <Link
        key={tab.title}
        href={tab.href}
        className={cn(
          "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium no-underline transition-all",
          pathname === tab.href
            ? "bg-background text-primary shadow-sm"
            : "text-muted-foreground hover:bg-background hover:text-foreground hover:shadow-sm"
        )}
      >
        {tab.title}
      </Link>
    );
  }

  // Get all pages that match the current pathname
  const matchingPages = dashboardSubHeaderNav.filter((page) =>
    pathname.startsWith(page.href)
  );

  // Find the page with the longest href among the matching pages
  const currentPage = matchingPages.reduce((current, page) =>
    page.href.length > current.href.length ? page : current
  );
  // console.log(currentPage);

  return (
    <>
      <div className="grid w-full items-start gap-4 p-4 md:grid-cols-2">
        {" "}
        {/* Use grid layout */}
        <div className="flex flex-col justify-center gap-2">
          <span className="text-2xl font-bold text-foreground">
            {convertPathToName(pathname)}
          </span>
        </div>
        <div className="inline-flex flex-wrap items-start justify-between rounded-lg bg-muted p-2 text-muted-foreground">
          {" "}
          <nav className="flex flex-row flex-wrap gap-2">
            {currentPage && currentPage.tabs && (
              <>{currentPage.tabs.map((tab) => renderTab(tab))}</>
            )}
          </nav>
        </div>
      </div>
    </>
  );
}
