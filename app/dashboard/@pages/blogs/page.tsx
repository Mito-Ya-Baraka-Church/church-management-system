import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Blogs Page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          This is the Blogs page. You can add your own content here.
        </p>
      </div>
    </section>
  );
}
