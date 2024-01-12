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
      {children}
      <AppFooter />
    </>
  );
}
