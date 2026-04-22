import { cn } from "@/lib/utils";
import type { SectionVariant } from "@/types";
import type { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  variant?: SectionVariant;
  padding?: "lg" | "md" | "sm";
  mesh?: boolean;
}

const variantClasses: Record<SectionVariant, string> = {
  dark: "bg-gray-50 text-gray-900",
  light: "bg-white text-gray-900",
  gradient: "bg-gray-50 text-gray-900",
  white: "bg-white text-gray-900",
};

const paddingClasses = {
  lg: "py-16 md:py-24 lg:py-28",
  md: "py-12 md:py-20",
  sm: "py-10 md:py-14",
};

export function SectionWrapper({
  variant = "dark",
  padding = "lg",
  mesh = false,
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {(variant === "gradient" || mesh) && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-mesh opacity-90"
        />
      )}
      <div className="relative">{children}</div>
    </section>
  );
}
