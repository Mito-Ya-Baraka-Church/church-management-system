"use client";
import { useMemo } from "react";
import useScrollPosition from "@react-hook/window-scroll";

export function ScalingLogo({
  path = "M37.59.25l36.95 64H.64l36.95-64z",
}: {
  path?: string;
}) {
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
  const logoScale = useRange(y, 0, 50, 1, 0.8);
  return (
    <svg
      style={{
        transform: `scale(${logoScale})`,
      }}
      className="fixed left-14 z-50 md:left-6"
      aria-label="Vercel Logo"
      fill="currentColor"
      viewBox="0 0 75 65"
      height="22"
    >
      <path d={path} />
    </svg>
  );
}
