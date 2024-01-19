import { AppFooter } from "@/components/navigation/app/AppFooter";
import { DashboardHeader } from "@/components/navigation/dashboard/dashboard-header";

export default function PublicLayout({
  children,
  subHeader,
  pages,
}: {
  children: React.ReactNode;
  subHeader: React.ReactNode;
  pages: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="bg-background"> */}
      <DashboardHeader />
      {/* </div> */}
      <main className="flex w-full bg-background ">
        <div className="flex min-h-screen flex-col space-y-6  bg-muted/50 px-12 py-4">
          {subHeader}

          {children}
          {pages}
        </div>
      </main>

      <AppFooter />
    </>
  );
}
