import React from "react";
import { SignInButton } from "./user-login";
import { UserMenu } from "../user-menu";
import { cookies } from "next/headers";
import { auth } from "@/auth";

export async function UserOrSignIn() {
  const cookieStore = cookies();
  const session = await auth({ cookieStore });

  return (
    <>
      <div className="flex items-center">
        {session?.user ? <UserMenu user={session.user} /> : <SignInButton />}
      </div>
    </>
  );
}
