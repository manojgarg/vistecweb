import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant } from "@/types";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-md hover:bg-blue-500 hover:shadow-glow-blue hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
  ghost:
    "bg-transparent text-blue-600 hover:text-blue-500 hover:underline underline-offset-4 px-2 py-1",
  cta: "bg-blue-600 text-white shadow-md hover:shadow-glow-blue hover:-translate-y-0.5",
};

const sizeStyles = {
  sm: "text-sm px-5 py-2.5 rounded-md",
  md: "text-body-sm px-8 py-4 rounded-md",
  lg: "text-body px-10 py-5 rounded-lg",
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseProps & { href: string; external?: boolean };

export function Button({ variant = "primary", size = "md", className, children, icon, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        variant !== "ghost" && sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  icon,
  href,
  external,
}: LinkButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    variant !== "ghost" && sizeStyles[size],
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
