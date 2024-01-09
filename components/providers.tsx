'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { SidebarProvider } from '@/lib/hooks/use-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { CustomPostHogProvider } from './misc/posthog-provider'
import { store } from "@/store"
import { Provider } from "react-redux"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
      <CustomPostHogProvider>
      <Provider store={store}>
        <TooltipProvider>
          {children}  
          </TooltipProvider>
        </Provider>
        </CustomPostHogProvider>
      </SidebarProvider>
    </NextThemesProvider>
  )
}
