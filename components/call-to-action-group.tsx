"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { storedUser } from "@/store/slices/auth"

import { env } from "@/env.mjs"
import { cn } from "@/lib/utils"
import { useStoreSelector } from "@/hooks/useStore"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/misc/icons"

export function CallToActionGroup() {
  const user = useStoreSelector(storedUser)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const staffRole = process.env.DIRECTUS_STAFF_ROLE_ID || ""
    if (user) {
      setIsAuthenticated(true)
      if (user.role === staffRole) {
        setIsAdmin(true)
      }
    }
  }, [user])

  return (
    <div className="space-x-4">
      {isAuthenticated ? (
        // if the user is admin show dashboard if the user is not admin show chat
        <>
          {isAdmin ? (
            <>
              <Link
                href="/register/member"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Register A New Member
              </Link>

              <Link
                href="/register/visitor"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Register A New Visitor
              </Link>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold">
                Welcome {user?.first_name}!
              </h2>
              <br />
              <h3 className="text-xl font-bold">
                Your user does not support the current features please contact
                admin to gain access.
              </h3>
            </>
          )}
        </>
      ) : (
        <>
          <Link
            href="/auth/login"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Log In
          </Link>

          <Link
            href="/auth/sign-in"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Sign In
          </Link>

          <div className="flex-col items-center space-x-2 pt-4 ">
            <p className="pb-4 text-center text-sm text-muted-foreground ">
              You must be logged in to register a new member or visitor.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
