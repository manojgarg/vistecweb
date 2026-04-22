import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ModuleIcon } from "@/components/shared/ModuleIcon";
import { CTASection } from "@/components/sections/CTASection";
import { MODULES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PARCS Modules — Six AI Engines for Revenue",
  description:
    "Eligibility, Authorization, Coding, Claims, Denials, Payments. Six AI modules built for every step of the revenue cycle.",
  alternates: { canonical: "/platform/modules" },
};

export default function ModulesPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>PARCS Modules</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            Six AI engines. One unified system.
          </SectionHeading>
          <SectionSubtext tone="dark">
            Deploy any module standalone or run the full PARCS stack end-to-end. Every module shares
            the same data layer, AI engine, and workflow graph.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/platform/modules/${m.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-navy-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-glow-orange"
                >
                  <div className="flex items-start justify-between">
                    <ModuleIcon icon={m.icon} color={m.color} size="lg" />
                    <ArrowUpRight className="h-4 w-4 text-gray-500 transition-colors group-hover:text-blue-300" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-h4 font-semibold text-white">{m.name}</h2>
                  <p className="mt-2 text-body-sm text-gray-400">{m.tagline}</p>
                  <ul className="mt-6 flex flex-col gap-2 border-t border-white/5 pt-5 text-body-sm text-gray-300">
                    {m.capabilities.slice(0, 3).map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-[9px] h-1 w-1 flex-none rounded-full bg-blue-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
