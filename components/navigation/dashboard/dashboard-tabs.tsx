"use client";

import { cn, convertPathToName } from "@/lib/utils";
import { Tab } from "@/types/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { dashboardTabs } from "@/config/dashboards-tabs";
import { adminDashboardTabs } from "@/config/dashboards-tabs";

export function DashboardTabs({ userRole }: { userRole: string }) {
  const pathname = usePathname();

  function renderTab(tab: Tab) {
    return (
      <Link
        key={tab.name}
        href={tab.href}
        className={cn(
          "whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium no-underline transition-all",
          pathname === tab.href
            ? "bg-background text-primary shadow-sm"
            : "text-muted-foreground hover:bg-background hover:text-foreground hover:shadow-sm"
        )}
      >
        {tab.name}
      </Link>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-foreground">
        {convertPathToName(pathname)}
      </h2>
      <div className="inline-flex  min-h-[40px] flex-wrap items-center justify-between gap-4 rounded-lg bg-muted p-2 text-muted-foreground">
        <nav className="flex flex-row flex-wrap gap-2">
          {dashboardTabs.map(renderTab)}
          {userRole === "admin" && adminDashboardTabs.map(renderTab)}
        </nav>
      </div>{" "}
    </>
  );
}
