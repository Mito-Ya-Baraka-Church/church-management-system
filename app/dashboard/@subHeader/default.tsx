import { auth } from "@/auth";
import DashboardCards from "@/components/dashboard/stats-cards";
import { DashboardTabs } from "@/components/navigation/dashboard/dashboard-tabs";
import { cn } from "@/lib/utils";
import { Session } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const headersList = headers();
  const cookieStore = cookies();
  const session: Session | null = await auth({ cookieStore });
  // console.log("session subHeader", session);
  const userRole = "admin"; // session?.user?.role || "guest
  const pathname = headersList.get("x-pathname") || "";
  console.log("pathname subHeader", pathname);
  const isAdminPage = pathname?.includes("/admin") ? true : false;
  const isAdmin = userRole === "admin" ? true : false;

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <DashboardTabs />
    </div>
  );
}
