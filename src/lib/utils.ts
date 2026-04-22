import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMetric(value: number, opts?: { prefix?: string; suffix?: string; decimals?: number }) {
  const { prefix = "", suffix = "", decimals } = opts ?? {};
  const num =
    typeof decimals === "number"
      ? value.toFixed(decimals)
      : Number.isInteger(value)
        ? value.toString()
        : value.toString();
  return `${prefix}${num}${suffix}`;
}
