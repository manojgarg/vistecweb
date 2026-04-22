import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { IntegrationGrid } from "@/components/platform/IntegrationGrid";
import { CTASection } from "@/components/sections/CTASection";
import { SecurityBadges } from "@/components/platform/SecurityBadges";

export const metadata: Metadata = {
  title: "EHR & System Integrations",
  description:
    "PARCS connects to 40+ EHR systems, clearinghouses, and payer portals — with native support for HL7 v2, FHIR R4, X12 EDI, and NCPDP.",
  alternates: { canonical: "/platform/integrations" },
};

const timeline = [
  {
    week: "Week 1",
    label: "Discovery",
    detail: "We map your EHR, PMS, clearinghouse, and payer mix.",
  },
  { week: "Week 2–3", label: "Connect", detail: "Native connectors activated — HL7, FHIR, or X12." },
  { week: "Week 4", label: "Validate", detail: "Reconciliation test across historical claims." },
  { week: "Week 5–8", label: "Go live", detail: "Production cutover with monitoring + SLA." },
];

export default function IntegrationsPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Integrations</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            Connects to your entire stack.
          </SectionHeading>
          <SectionSubtext tone="dark">
            40+ native EHR integrations. HL7, FHIR, X12 EDI, and NCPDP supported out of the box. If
            we don&apos;t have a connector for your system, we&apos;ll build one.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-4xl">
          <IntegrationGrid showAll />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow tone="light">Implementation</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            Live in 4–8 weeks.
          </SectionHeading>
          <SectionSubtext tone="light">
            We scope, connect, validate, and cut over in a phased rollout. No freeze, no rip-and-replace.
          </SectionSubtext>
        </Container>
        <Container className="mt-12 max-w-4xl">
          <ol className="grid gap-4 md:grid-cols-4">
            {timeline.map((t, i) => (
              <li
                key={t.label}
                className="rounded-xl border border-white/10 bg-navy-900/70 p-5"
              >
                <div className="text-caption font-mono uppercase tracking-widest text-blue-400">
                  {t.week}
                </div>
                <div className="mt-2 text-body font-semibold text-white">
                  {i + 1}. {t.label}
                </div>
                <p className="mt-2 text-body-sm text-gray-400">{t.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl">
          <SectionEyebrow>Security</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Encrypted end-to-end.
          </SectionHeading>
        </Container>
        <Container className="mt-12">
          <SecurityBadges />
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
