import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "h1" | "h2" | "h3";
}

const sizeClasses = {
  hero: "text-5xl md:text-[64px] lg:text-hero",
  h1: "text-4xl md:text-5xl lg:text-h1",
  h2: "text-3xl md:text-4xl lg:text-h2",
  h3: "text-2xl md:text-3xl",
};

export function SectionHeading({
  tone = "dark",
  as: Tag = "h2",
  size = "h1",
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-bold leading-tight tracking-tight text-balance mt-4",
        sizeClasses[size],
        tone === "dark" ? "text-white" : "text-gray-900",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function SectionSubtext({
  tone = "dark",
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { tone?: "dark" | "light" }) {
  return (
    <p
      className={cn(
        "mt-5 max-w-2xl text-body",
        tone === "dark" ? "text-gray-400" : "text-gray-600",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
