"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/nav";

export function SubHeaderNav({
  items,
  transform,
}: {
  items: NavItem[];
  transform?: string;
}) {
  const pathname = usePathname();
  if (!items?.length) {
    return null;
  }

  return (
    <>
      <nav
        className=" hidden bg-background px-1 md:flex md:items-center md:justify-between md:gap-6"
        suppressHydrationWarning={true}
        style={{
          transform: transform ? transform : "",
        }}
      >
        {items?.length ? (
          <div className="flex gap-6 ">
            {items?.map(
              (item: NavItem, index: number) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground decoration-2 underline-offset-[15px]  hover:text-foreground hover:underline",
                      pathname === item.href && "text-foreground underline ",
                      item.disabled && "cursor-not-allowed opacity-80",
                      "transition-all duration-300 ease-in-out"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </div>
        ) : null}
      </nav>
    </>
  );
}
