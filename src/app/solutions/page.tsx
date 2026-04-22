import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ModuleIcon } from "@/components/shared/ModuleIcon";
import { CTASection } from "@/components/sections/CTASection";
import { SOLUTIONS, MODULES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Healthcare RCM Solutions",
  description:
    "AI-powered revenue cycle solutions for health systems, physician groups, and billing companies. Reduce denials, accelerate payments, improve collections.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Solutions</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            Built for how you actually bill.
          </SectionHeading>
          <SectionSubtext tone="dark">
            PARCS adapts to your segment. Health system, physician group, billing company — the
            platform is the same, but the configuration, reporting, and execution model meet you
            where you are.
          </SectionSubtext>
          <div className="mt-8 flex flex-wrap gap-2">
            {SOLUTIONS.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-white/10 bg-navy-800/60 px-4 py-2 text-body-sm text-gray-200 transition-colors hover:border-teal-400/30 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {SOLUTIONS.map((s, i) => {
        const dark = i % 2 === 0;
        return (
          <SectionWrapper
            key={s.slug}
            variant={dark ? "dark" : "light"}
            className={dark ? "" : ""}
            id={s.slug}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
                <div>
                  <SectionEyebrow tone={dark ? "dark" : "light"}>{s.label}</SectionEyebrow>
                  <SectionHeading size="h1" tone={dark ? "dark" : "light"}>
                    {s.label}
                  </SectionHeading>
                  <p
                    className={`mt-5 text-body ${
                      dark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {s.solution}
                  </p>
                  <div
                    className={`mt-8 rounded-xl border p-5 ${
                      dark
                        ? "border-teal-400/30 bg-teal-500/5"
                        : "border-blue-200 bg-blue-50"
                    }`}
                  >
                    <div
                      className={`text-caption font-semibold uppercase tracking-widest ${
                        dark ? "text-teal-300" : "text-blue-600"
                      }`}
                    >
                      Outcome
                    </div>
                    <p
                      className={`mt-2 text-body-sm font-medium ${
                        dark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {s.outcome}
                    </p>
                  </div>
                  <div className="mt-8">
                    <ButtonLink
                      href="/demo"
                      variant={dark ? "primary" : "primary"}
                      size="md"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      See a demo for {s.label.split(" ")[0]}
                    </ButtonLink>
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-caption font-semibold uppercase tracking-widest ${
                      dark ? "text-teal-400" : "text-blue-600"
                    }`}
                  >
                    Pain Points
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {s.pains.map((p) => (
                      <li
                        key={p}
                        className={`flex items-start gap-3 rounded-lg border p-4 ${
                          dark
                            ? "border-white/10 bg-navy-900/70 text-gray-200"
                            : "border-gray-200 bg-white text-gray-800"
                        }`}
                      >
                        <span
                          className={`mt-1 h-2 w-2 flex-none rounded-full ${
                            dark ? "bg-amber-400" : "bg-amber-500"
                          }`}
                        />
                        <span className="text-body-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <h3
                    className={`mt-8 text-caption font-semibold uppercase tracking-widest ${
                      dark ? "text-teal-400" : "text-blue-600"
                    }`}
                  >
                    Highlighted Modules
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {s.highlightedModules.map((slug) => {
                      const m = MODULES.find((x) => x.slug === slug);
                      if (!m) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={`/platform/modules/${m.slug}`}
                            className={`group flex items-center gap-4 rounded-lg border p-4 transition-colors ${
                              dark
                                ? "border-white/10 bg-navy-900/70 hover:border-teal-400/30"
                                : "border-gray-200 bg-white hover:border-teal-500/40"
                            }`}
                          >
                            <ModuleIcon icon={m.icon} color={m.color} />
                            <div className="flex-1">
                              <div
                                className={`text-body-sm font-semibold ${
                                  dark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {m.name}
                              </div>
                              <div
                                className={`mt-0.5 text-caption ${
                                  dark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {m.tagline}
                              </div>
                            </div>
                            <Check
                              className={`h-4 w-4 flex-none ${
                                dark ? "text-teal-400" : "text-teal-500"
                              }`}
                              aria-hidden
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Container>
          </SectionWrapper>
        );
      })}

      <CTASection />
    </>
  );
}
