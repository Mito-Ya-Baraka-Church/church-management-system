"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { logoutUser, setAuthState, storedUser } from "@/store/slices/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { useStoreDispatch } from "@/hooks/useStore"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { createSupabaseBrowserClient } from "@/lib/supabase/browser-client"

const accountFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(100, {
      message: "Password must not be longer than 100 characters.",
    }),
})

type AccountFormValues = z.infer<typeof accountFormSchema>



export function LoginAuthForm() {
  const dispatch = useStoreDispatch()
// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);

// Check if the 'logged-out' parameter is present and its value is 'true'
if (urlParams.get('logged-out') === 'true') {
      dispatch(logoutUser())
      toast({
        title: "Oh no! You have been logged out.",
        description: "Please log in again.",
        variant: "destructive",
      })
  }
  const supabase = createSupabaseBrowserClient();

  

  const router = useRouter()
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  })

  const onSubmit = async (formData: AccountFormValues) => {
    const { email, password } = formData
    const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive",
    })
  }

  if (data) {
    toast({
      title: "Success",
      description: "Logged in successfully",
    })

    const redirectUrl = urlParams.get('redirect');
    if (redirectUrl) {
    router.push(redirectUrl);
  }
  else {
    router.push("/")
  }
  }
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-row space-x-2">
          <Button type="submit" className={cn("w-1/2 ")}>
            Login
          </Button>
          <Link href="/auth/sign-in" className={cn("w-1/2 text-center ")}>
            <Button variant="ghost">Sign In</Button>
          </Link>
        </div>
        {/* forgot password  */}
        <div className="flex flex-row justify-center">
          <Link
            href="/auth/forgot-password"
            className={cn("w-1/2 text-center ")}
          >
            <span className=" text-sm text-muted-foreground underline  hover:text-primary">
              Forgot Password?
            </span>
          </Link>
        </div>
      </form>
    </Form>
  )
}
