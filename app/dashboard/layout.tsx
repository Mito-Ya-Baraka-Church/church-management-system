import { AppFooter } from "@/components/navigation/app/AppFooter";
import { AppHeader } from "@/components/navigation/app/AppHeader";

export default function RootLayout({
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
      <AppHeader />
      <div className="flex min-h-screen flex-col space-y-6 px-12 py-4">
        {subHeader}
        {children}
        {pages}
      </div>

      <AppFooter />
    </>
  );
}
