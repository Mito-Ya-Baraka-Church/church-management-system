import { AppFooter } from "@/components/navigation/app/AppFooter";
import { AppHeader } from "@/components/navigation/app/AppHeader";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto bg-muted/50">{children}</main>
      <AppFooter />
    </>
  );
}
