import { auth } from "@/auth";
import { Session } from "@supabase/supabase-js";
import { cookies, headers } from "next/headers";
import { Suspense } from "react";

export default async function Page() {
  const headersList = headers();
  const cookieStore = cookies();
  const session: Session | null = await auth({ cookieStore });
  const userRole = session?.user?.role || "guest";
  const pathname = headersList.get("x-pathname") || "dashboard";
  console.log("pathname", pathname);
  const isAdminPage = pathname?.includes("/admin") ? true : false;
  const isAdmin = userRole === "admin" ? true : false;

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <Suspense fallback={<p>Loading tabs...</p>}>
        <DashboardTabs
          isAdminPage={isAdminPage}
          userRole={userRole}
          pathname={pathname}
        />
      </Suspense>

      {pathname?.includes("/overview") || pathname === "/dashboard" ? (
        <Suspense fallback={<p>Loading tabs...</p>}>
          <DashboardCards
            isAdminPage={isAdminPage}
            isAdmin={isAdmin}
            userRole={userRole}
            pathname={pathname}
          />
        </Suspense>
      ) : null}
    </div>
  );
}

function DashboardCards({
  isAdminPage,
  isAdmin,
  userRole,
  pathname,
}: {
  isAdminPage: boolean;
  isAdmin: boolean;
  userRole: string;
  pathname: string;
}) {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h2 className="text-lg font-bold"> Dashboard Cards </h2>
    </div>
  );
}

function DashboardTabs({
  isAdminPage,
  userRole,
  pathname,
}: {
  isAdminPage: boolean;
  userRole: string;
  pathname: string;
}) {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h2 className="text-lg font-bold"> Dashboard Tabs </h2>
    </div>
  );
}
