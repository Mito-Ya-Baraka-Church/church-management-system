"use client";
import useScrollPosition from "@react-hook/window-scroll";
import { useMemo } from "react";
import { Nav } from "../main-nav";
import { siteConfig } from "@/config/site";

export function DashboardSubHeader() {
  const useRange = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => {
    const mappedValue = useMemo(() => {
      const newValue =
        ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
      const largest = Math.max(outMin, outMax);
      const smallest = Math.min(outMin, outMax);
      return Math.min(Math.max(newValue, smallest), largest);
    }, [inMax, inMin, num, outMax, outMin]);

    return mappedValue;
  };

  const y = useScrollPosition(60);
  const navX = useRange(y, 0, 50, 0, 42);
  return (
    <>
      <div
        className={` sticky top-0  flex gap-4  bg-background px-6 py-4 text-sm
      ${process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? "top-4" : ""}`}
        style={{
          transform: `translateX(${navX}px)`,
        }}
      >
        <Nav items={siteConfig.dashboardNav} />
      </div>
      {/* line */}
      <div className="sticky top-16 z-50 h-px flex-1 bg-muted/50" />
      {/* <div className="sticky top-16 z-50 flex h-0.5 w-full bg-gray-200" /> */}
    </>
  );
}
