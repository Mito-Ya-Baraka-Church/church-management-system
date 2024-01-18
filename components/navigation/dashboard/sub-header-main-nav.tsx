"use client";
import Link from "next/link";
import { NavProps } from "@/types/general";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SubHeaderNav({ items }: NavProps) {
  const pathname = usePathname();

  return (
    <>
      <nav
        className=" hidden px-1  md:flex md:items-center md:justify-between md:gap-6"
        suppressHydrationWarning={true}
      >
        {items?.length ? (
          <div className="flex gap-6 ">
            {items?.map(
              (item, index) =>
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
