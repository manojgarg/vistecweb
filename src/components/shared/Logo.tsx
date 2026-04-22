import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
}

export function Logo({ tone = "dark", className, compact = false }: LogoProps) {
  const primary = tone === "dark" ? "text-white" : "text-gray-900";
  return (
    <Link
      href="/"
      aria-label="VistecPartners home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center rounded-md bg-gradient-cta shadow-glow-blue"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
          <path
            fill="currentColor"
            d="M3 4h4l3 9 3-9h4l-5 14h-4L3 4Zm16 0h2v14h-2V4Z"
          />
        </svg>
      </span>
      {!compact && (
        <span className={cn("flex items-baseline gap-1 font-semibold tracking-tight", primary)}>
          <span className="text-h4 leading-none">Vistec</span>
          <span className="text-h4 leading-none text-teal-400">Partners</span>
        </span>
      )}
    </Link>
  );
}
