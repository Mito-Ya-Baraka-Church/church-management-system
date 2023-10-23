import posthog from "posthog-js"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AdvancedLink } from "@/components/advanced/advanced-link"
import { CallToActionGroup } from "@/components/call-to-action-group"

export default async function IndexPage() {
  return (
    <>
      <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Mito Ya Baraka Church Member Management Website
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            This is a church management website for Mito Ya Baraka Church
            <br />
          </p>

          <CallToActionGroup />
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold">Features:</h2>
          <ul className="list-inside list-disc">
            <li>🚧 Member Registration</li>
            <li>🚧 Visitor Registration</li>
            <li>🚧 Member & Visitor Dashboard</li>
          </ul>
        </div>
      </div>
    </>
  )
}
