"use client";
import useScrollPosition from "@react-hook/window-scroll";
import { useMemo } from "react";
import { SubHeaderNav } from "@/components/navigation/dashboard/sub-header-main-nav";
import { navigationConfig } from "@/config/navigation";

const { dashboardSubHeaderNav } = navigationConfig;

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
        className={` sticky  top-0  hidden gap-4 bg-background  px-6 pb-[0.75rem] pt-4 md:flex
      ${process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" ? "top-4" : ""}`}
        style={{
          transform: `translateX(${navX}px)`,
        }}
      >
        <SubHeaderNav items={dashboardSubHeaderNav} />
      </div>
    </>
  );
}
