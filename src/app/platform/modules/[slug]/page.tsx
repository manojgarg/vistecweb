import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ModuleIcon } from "@/components/shared/ModuleIcon";
import { CTASection } from "@/components/sections/CTASection";
import { MODULES } from "@/lib/constants";

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const mod = MODULES.find((m) => m.slug === params.slug);
  if (!mod) return {};
  return {
    title: `${mod.name} — PARCS Module`,
    description: mod.tagline,
    alternates: { canonical: `/platform/modules/${mod.slug}` },
  };
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = MODULES.find((m) => m.slug === params.slug);
  if (!mod) notFound();

  const related = MODULES.filter((m) => m.slug !== mod.slug).slice(0, 3);

  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <Link
              href="/platform/modules"
              className="inline-flex items-center gap-2 text-caption uppercase tracking-widest text-teal-300 hover:text-teal-200"
            >
              ← All modules
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <ModuleIcon icon={mod.icon} color={mod.color} size="lg" />
              <SectionEyebrow>PARCS Module</SectionEyebrow>
            </div>
            <SectionHeading size="hero" as="h1" tone="dark">
              {mod.name}
            </SectionHeading>
            <SectionSubtext tone="dark" className="max-w-2xl">
              {mod.tagline}
            </SectionSubtext>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/demo" variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Request Demo
              </ButtonLink>
              <ButtonLink href="/platform" variant="secondary" size="md">
                See the platform
              </ButtonLink>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionEyebrow>Overview</SectionEyebrow>
            <SectionHeading size="h2" tone="dark">
              What {mod.name} does.
            </SectionHeading>
            <p className="mt-6 text-body text-gray-300">{mod.description}</p>
          </div>
          <div>
            <h3 className="text-caption font-semibold uppercase tracking-widest text-teal-400">
              Capabilities
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {mod.capabilities.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 rounded-lg border border-white/10 bg-navy-900/60 p-4"
                >
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-teal-500/15 text-teal-300">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-body-sm text-gray-200">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-4xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <SectionHeading size="h2" tone="dark">
            Wired into your stack from day one.
          </SectionHeading>
          <ol className="mt-10 flex flex-col gap-4">
            {mod.howItWorks.map((step, i) => (
              <li
                key={step}
                className="flex gap-5 rounded-xl border border-white/10 bg-navy-900/70 p-5"
              >
                <div className="grid h-11 w-11 flex-none place-items-center rounded-full border border-teal-400/30 bg-teal-500/10 font-mono text-body-sm font-semibold text-teal-300">
                  {i + 1}
                </div>
                <p className="text-body-sm text-gray-200">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Related Modules</SectionEyebrow>
              <SectionHeading size="h2" tone="dark">
                Better together.
              </SectionHeading>
            </div>
            <Link
              href="/platform/modules"
              className="inline-flex items-center gap-2 text-body-sm font-semibold text-teal-300 hover:text-teal-200"
            >
              See all modules <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/platform/modules/${m.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-navy-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30"
                >
                  <div className="flex items-start justify-between">
                    <ModuleIcon icon={m.icon} color={m.color} />
                    <ArrowUpRight className="h-4 w-4 text-gray-500 transition-colors group-hover:text-teal-300" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-h4 font-semibold text-white">{m.name}</h3>
                  <p className="mt-2 text-body-sm text-gray-400">{m.tagline}</p>
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
