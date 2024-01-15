"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function DashboardTabs({
  isAdminPage,
  userRole,
}: {
  isAdminPage: boolean;
  userRole: string;
}) {
  const pathname = usePathname();
  const tabs = [
    {
      name: "Overview",
      href: "/dashboard",
      current: pathname === "/dashboard" || pathname?.includes("/overview"),
    },

    {
      name: "Register",
      href: "/dashboard/register",
      current: pathname?.includes("/register"),
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      current: pathname?.includes("/settings"),
    },
  ];

  return (
    // tab looking nav header for dashboard
    <div className="inline-flex h-12 items-center justify-center rounded-lg bg-muted p-2 text-muted-foreground">
      <nav className="flex flex-row gap-2  ">
        {tabs.map((tab) => (
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
        ))}
      </nav>
    </div>
  );
}
