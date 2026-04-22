"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.8,
  decimals,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");
  const effectiveDecimals = decimals ?? (Number.isInteger(value) ? 0 : 1);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(effectiveDecimals));
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, effectiveDecimals]);

  return (
    <span
      ref={ref}
      className={cn("font-mono tabular-nums", className)}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
