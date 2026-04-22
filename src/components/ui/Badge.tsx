import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: "teal" | "blue" | "amber" | "gray" | "success" | "error";
  size?: "sm" | "md";
}

const toneClasses = {
  teal: "bg-teal-500/10 text-teal-300 border-teal-500/30",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  gray: "bg-white/5 text-gray-300 border-white/10",
  success: "bg-success/10 text-success border-success/30",
  error: "bg-error/10 text-error border-error/30",
};

export function Badge({ tone = "gray", size = "sm", className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        toneClasses[tone],
        size === "sm" ? "px-3 py-1 text-caption" : "px-4 py-1.5 text-body-sm",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
