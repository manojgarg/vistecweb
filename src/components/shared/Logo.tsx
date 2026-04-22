import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
}

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="VistecPartners home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <Image
        src="/images/vistec-logo.png"
        alt="Vistec Partners"
        width={140}
        height={73}
        priority
        className={cn("h-9 w-auto select-none", compact && "h-8")}
      />
    </Link>
  );
}
