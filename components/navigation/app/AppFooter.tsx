import React from "react";

import { cn } from "@/lib/utils";
import { ExternalLink } from "@/components/external-link";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";

const { version, name } = siteConfig;
const { footerNav } = navigationConfig;

export function AppFooter() {
  return (
    <footer className="grid w-full shrink-0 grid-cols-1 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:grid-cols-3 sm:flex-row md:px-6">
      <div className="order-3 flex justify-center gap-2 sm:order-1 sm:justify-start">
        <p className="text-xs text-muted-foreground ">
          © {name}. All rights reserved {new Date().getFullYear()}. version{" "}
          {version}
        </p>
      </div>
      <div className="order-2 flex justify-center gap-2 sm:order-2">
        <p
          className={cn(
            "text-center text-xs leading-normal text-muted-foreground"
          )}
        >
          {" "}
          <ExternalLink href="/"> Open source </ExternalLink>
          Made with ❤️ in 🇹🇿 using{" "}
          <ExternalLink href="https://python.org">
            {" "}
            Python{" "}
          </ExternalLink> and{" "}
          <ExternalLink href="https://nextjs.org"> Next.js </ExternalLink>.
        </p>
      </div>
      <div className="order-1 flex justify-center gap-2 sm:order-3 sm:justify-end">
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          {footerNav.map((item, index) => {
            return (
              <Link
                key={index}
                className="text-xs underline-offset-4 hover:underline"
                href={item.href}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
