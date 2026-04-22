import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { SolutionIntro } from "@/components/sections/SolutionIntro";
import { ModuleGrid } from "@/components/sections/ModuleGrid";
import { ArchitecturePreview } from "@/components/sections/ArchitecturePreview";
import { OutcomeMetrics } from "@/components/sections/OutcomeMetrics";
import { DifferentiationTable } from "@/components/sections/DifferentiationTable";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Revenue Operating System for Healthcare (PARCS)",
  description:
    "PARCS combines predictive AI, workflow automation, and expert execution to reduce denials 30%, improve clean claims to 98.5%, and maximize healthcare revenue.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemStatement />
      <SolutionIntro />
      <ModuleGrid />
      <ArchitecturePreview />
      <OutcomeMetrics />
      <DifferentiationTable />
      <Testimonials />
      <CTASection />
    </>
  );
}
