import { auth } from "@/auth";
import DashboardCards from "@/components/dashboard/stats-cards";
import { Session } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const session: Session | null = await auth({ cookieStore });
  const userRole = session?.user?.role || "guest";
  console.log("userRole", userRole);
  return (
    <div className=" prose-invert max-w-none">
      <DashboardCards userRole={userRole} />
    </div>
  );
}
