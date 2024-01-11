import Link from "next/link";
import { NavProps } from "@/types/general";
import { cn } from "@/lib/utils";

export function Nav({ items }: NavProps) {
  return (
    <>
      <nav
        className="hidden px-1 md:flex md:items-center md:justify-between md:gap-6"
        suppressHydrationWarning={true}
      >
        {items?.length ? (
          <div className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
                      item.disabled && "cursor-not-allowed opacity-80"
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
