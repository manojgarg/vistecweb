import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "dark" | "light";
  interactive?: boolean;
  glow?: boolean;
}

export function Card({
  tone = "dark",
  interactive = false,
  glow = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-6 md:p-8 border transition-all duration-300 ease-out",
        tone === "dark"
          ? "bg-navy-800/80 border-navy-700 text-gray-100"
          : "bg-white border-gray-200 text-gray-900 shadow-sm",
        interactive &&
          "hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/40 cursor-pointer",
        glow && "bg-gradient-card-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
