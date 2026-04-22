import {
  ShieldCheck,
  FileCheck,
  Code2,
  CheckCircle2,
  ShieldAlert,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const map: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "file-check": FileCheck,
  code: Code2,
  "check-circle": CheckCircle2,
  "shield-alert": ShieldAlert,
  "dollar-sign": DollarSign,
};

const colorClasses: Record<string, string> = {
  teal: "from-teal-500/20 to-teal-400/5 text-teal-300 border-teal-500/30",
  blue: "from-blue-500/20 to-blue-400/5 text-blue-400 border-blue-500/30",
  amber: "from-amber-500/20 to-amber-400/5 text-amber-400 border-amber-500/30",
};

interface ModuleIconProps {
  icon: string;
  color: "teal" | "blue" | "amber";
  size?: "md" | "lg";
  className?: string;
}

export function ModuleIcon({ icon, color, size = "md", className }: ModuleIconProps) {
  const Icon = map[icon] ?? ShieldCheck;
  return (
    <div
      className={cn(
        "relative grid place-items-center rounded-lg border bg-gradient-to-br transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow-teal",
        colorClasses[color],
        size === "lg" ? "h-16 w-16" : "h-12 w-12",
        className,
      )}
    >
      <Icon strokeWidth={1.5} className={size === "lg" ? "h-8 w-8" : "h-6 w-6"} aria-hidden />
    </div>
  );
}
