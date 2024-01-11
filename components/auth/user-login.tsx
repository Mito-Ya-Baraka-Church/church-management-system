"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function SignInButton() {
  const pathname = usePathname();
  return (
    <Button variant="link" asChild className="-ml-2">
      <Link href={`/sign-in?redirect=${pathname}`}>Sign in</Link>
    </Button>
  );
}
