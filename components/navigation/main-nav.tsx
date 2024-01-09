
import Link from "next/link"
import { MainNavProps } from "@/types/general"
import { cn } from "@/lib/utils"

export function MainNav({ items }: MainNavProps) {
  return (
    <>
      <nav className="hidden px-1 md:flex md:items-center md:justify-between md:gap-6" suppressHydrationWarning={true}>
        {items?.length ? (
          <div className="flex gap-6">
            {items?.map(
              (item , index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
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
  )
}
