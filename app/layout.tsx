import { Toaster } from "react-hot-toast";
import { fontMono, fontSans } from "@/lib/fonts";

import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Providers } from "@/components/providers/providers";
import EnvironmentBanner from "@/components/misc/environment-banner";
import { env } from "@/env.mjs";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  title: {
    default: `${siteConfig.title} `,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" &&
      env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
        <script
          async
          src={`${env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
          data-website-id={`${env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}`}
        />
      ) : null}
      <head />
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <EnvironmentBanner />
        <Toaster />

        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            {children}
          </div>

          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  );
}
