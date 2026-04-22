import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { MILESTONES, SOCIAL_PROOF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About VistecPartners — 20 Years of Revenue Cycle Excellence",
  description:
    "500+ providers, $500M+ collected, 400+ operations team. Two decades of RCM expertise now powered by AI.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>About</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            20 years of revenue cycle mastery. Now powered by AI.
          </SectionHeading>
          <SectionSubtext tone="dark">
            We were founded to help healthcare providers collect what they&apos;re owed. Two decades
            later we serve 500+ providers with a 400-person operations team and a platform — PARCS —
            that encodes everything we&apos;ve learned into software that improves with every claim.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl">
          <SectionEyebrow>Timeline</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Milestones.
          </SectionHeading>
        </Container>
        <Container className="mt-12 max-w-5xl">
          <ol className="relative grid gap-6 md:grid-cols-5">
            {MILESTONES.map((m, i) => (
              <li
                key={m.year}
                className="relative rounded-xl border border-white/10 bg-navy-900/70 p-5"
              >
                <div className="font-mono text-caption uppercase tracking-widest text-blue-400">
                  {m.year}
                </div>
                <div className="mt-2 text-body font-semibold text-white">{m.label}</div>
                <p className="mt-2 text-caption text-gray-400">{m.detail}</p>
                {i < MILESTONES.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-blue-500/40 to-transparent md:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow tone="light">By the Numbers</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            Scale, built the hard way.
          </SectionHeading>
        </Container>
        <Container className="mt-12">
          <ul className="grid grid-cols-2 gap-5 md:grid-cols-5">
            {SOCIAL_PROOF.map((m) => (
              <li
                key={m.key}
                className="rounded-xl border border-white/10 bg-navy-900/70 p-6 text-center"
              >
                <div className="text-4xl font-bold text-blue-400 md:text-5xl">
                  <AnimatedCounter
                    value={m.value}
                    prefix={"prefix" in m ? m.prefix : ""}
                    suffix={"suffix" in m ? m.suffix : ""}
                  />
                </div>
                <div className="mt-2 text-caption uppercase tracking-widest text-gray-400">
                  {m.label}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900" id="careers">
        <Container className="max-w-3xl">
          <SectionEyebrow tone="light">Culture &amp; Careers</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            Build what healthcare revenue should have been all along.
          </SectionHeading>
          <SectionSubtext tone="light">
            We&apos;re a hybrid company — engineers and operators working the same problem from both
            sides. If you care about shipping software that moves real dollars for real providers,
            we&apos;d like to hear from you.
          </SectionSubtext>
          <div className="mt-8">
            <ButtonLink href={`mailto:careers@vistecpartners.com`} variant="primary" size="md">
              Careers: careers@vistecpartners.com
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
