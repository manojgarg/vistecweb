import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionEyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "dark" | "light";
}

export function SectionEyebrow({ tone = "dark", className, children, ...props }: SectionEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-block text-caption font-semibold uppercase",
        "[letter-spacing:0.18em]",
        tone === "dark" ? "text-teal-400" : "text-blue-600",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
