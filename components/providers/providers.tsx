"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SidebarProvider } from "@/lib/hooks/use-sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomPostHogProvider } from "./posthog-provider";
import { QueryProvider } from "./react-query-provider";
import ReduxStateProvider from "./state-provider";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <SidebarProvider>
        <CustomPostHogProvider>
          <QueryProvider>
            <ReduxStateProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </ReduxStateProvider>
          </QueryProvider>
        </CustomPostHogProvider>
      </SidebarProvider>
    </NextThemesProvider>
  );
}
