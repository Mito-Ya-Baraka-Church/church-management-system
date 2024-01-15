import React from "react";
import { SignInButton } from "./user-login";
import { UserMenu } from "../user-menu";

import { getCurrentUserSession } from "@/actions/auth";

export async function UserOrSignIn() {
  const session = await getCurrentUserSession();
  console.log("session1", session);

  return (
    <div className="flex items-center">
      {session?.user ? <UserMenu user={session.user} /> : <SignInButton />}
    </div>
  );
}
