import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { OutcomeMetrics } from "@/components/sections/OutcomeMetrics";
import { CTASection } from "@/components/sections/CTASection";
import { TESTIMONIALS, CASE_STUDY_PLACEHOLDERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Results & Outcomes — VistecPartners PARCS",
  description:
    "30% denial reduction, 98.5% clean claim rate, 20% AR days improvement. Real results from real providers across 500+ deployments.",
  alternates: { canonical: "/outcomes" },
};

const beforeAfter = [
  { label: "Denial Rate", before: 22, after: 7.2, suffix: "%", decimals: 1 },
  { label: "AR Days", before: 52, after: 31, suffix: "" },
  { label: "Clean Claim Rate", before: 82, after: 98.5, suffix: "%", decimals: 1 },
  { label: "Cost to Collect", before: 4.1, after: 2.9, suffix: "%", decimals: 1 },
];

export default function OutcomesPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Outcomes</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            Proof, not promises.
          </SectionHeading>
          <SectionSubtext tone="dark">
            Aggregate results across 500+ providers running PARCS. Individual outcomes vary by
            specialty, payer mix, and implementation scope.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <OutcomeMetrics />

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl">
          <SectionEyebrow>Before &amp; After</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            The shift in the first 90 days.
          </SectionHeading>
        </Container>
        <Container className="mt-12">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {beforeAfter.map((m) => (
              <li
                key={m.label}
                className="rounded-xl border border-white/10 bg-navy-900/70 p-6"
              >
                <div className="text-caption uppercase tracking-widest text-gray-400">
                  {m.label}
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-bold text-gray-400 line-through decoration-error/50">
                    {m.before}
                    {m.suffix}
                  </span>
                  <span className="text-caption text-gray-500">→</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-teal-400 md:text-4xl">
                  <AnimatedCounter value={m.after} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <div className="mt-2 text-caption text-teal-300">Within 90 days</div>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            In our clients&apos; own words.
          </SectionHeading>
        </Container>
        <Container className="mt-12">
          <ul className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.author}
                className="relative rounded-xl border border-white/10 bg-navy-900/60 p-7"
              >
                <Quote
                  aria-hidden
                  className="absolute -top-3 left-6 h-8 w-8 text-teal-400/30"
                />
                <p className="text-body-sm italic text-gray-100">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-teal-500/30 to-blue-500/30 text-body-sm font-semibold text-white">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-caption font-semibold text-white">{t.author}</div>
                    <div className="text-caption text-gray-400">
                      {t.title} · {t.location}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl">
          <SectionEyebrow>Case Studies</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Detailed deployments. Coming soon.
          </SectionHeading>
        </Container>
        <Container className="mt-12">
          <ul className="grid gap-5 md:grid-cols-3">
            {CASE_STUDY_PLACEHOLDERS.map((c) => (
              <li
                key={`${c.industry}-${c.location}`}
                className="rounded-xl border border-dashed border-white/15 bg-navy-900/40 p-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-caption text-teal-300">
                  Coming soon
                </div>
                <h3 className="mt-4 text-h4 font-semibold text-white">{c.industry}</h3>
                <div className="text-caption text-gray-400">{c.location}</div>
                <dl className="mt-5 flex flex-col gap-3">
                  <div>
                    <dt className="text-caption uppercase tracking-widest text-gray-500">Challenge</dt>
                    <dd className="mt-1 text-body-sm text-gray-300">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-caption uppercase tracking-widest text-gray-500">Solution</dt>
                    <dd className="mt-1 text-body-sm text-gray-300">{c.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-caption uppercase tracking-widest text-teal-400">Results</dt>
                    <dd className="mt-1 text-body-sm font-medium text-white">{c.results}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
