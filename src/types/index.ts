import type {
  MODULES,
  ARCHITECTURE_LAYERS,
  TESTIMONIALS,
  SOLUTIONS,
  NAV_ITEMS,
} from "@/lib/constants";

export type Module = (typeof MODULES)[number];
export type ArchitectureLayer = (typeof ARCHITECTURE_LAYERS)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
export type Solution = (typeof SOLUTIONS)[number];
export type NavItem = (typeof NAV_ITEMS)[number];

export interface Metric {
  value: number;
  unit?: string;
  prefix?: string;
  label: string;
  sub?: string;
}

export type SectionVariant = "dark" | "light" | "gradient" | "white";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "cta" | "outline";
