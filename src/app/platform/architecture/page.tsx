import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { LayerStack } from "@/components/platform/LayerStack";
import { AIEngineDetail } from "@/components/platform/AIEngineDetail";
import { SecurityBadges } from "@/components/platform/SecurityBadges";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Platform Architecture & AI Engine",
  description:
    "The PARCS platform architecture in depth: ingestion, AI engine, workflow, execution, and analytics. Built for healthcare revenue at scale.",
  alternates: { canonical: "/platform/architecture" },
};

const flow = [
  { stage: "Claim created", detail: "EHR / PMS encounter signed" },
  { stage: "Ingested", detail: "Normalized into PARCS via HL7 / FHIR / EDI" },
  { stage: "Scored", detail: "847-variable denial + coding risk model" },
  { stage: "Routed", detail: "Clean → submit; exceptions → queue" },
  { stage: "Executed", detail: "AI + specialists resolve in SLA" },
  { stage: "Learned", detail: "Outcome feeds back into per-client model" },
];

export default function ArchitecturePage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="max-w-3xl">
          <SectionEyebrow>Platform Architecture</SectionEyebrow>
          <SectionHeading size="hero" as="h1" tone="dark">
            Five layers. Zero blind spots.
          </SectionHeading>
          <SectionSubtext tone="dark">
            PARCS is the full stack — ingestion to analytics. Every layer is purpose-built for
            healthcare revenue, and every layer learns from the others.
          </SectionSubtext>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container>
          <LayerStack defaultExpanded />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow>Claim Flow</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            How a claim moves through PARCS.
          </SectionHeading>
          <SectionSubtext tone="dark">
            From the moment it&apos;s created, every claim is scored, routed, and learned from.
            The result: higher first-pass rates and continuous improvement.
          </SectionSubtext>
        </Container>
        <Container className="mt-12">
          <ol className="relative mx-auto flex max-w-3xl flex-col gap-4">
            {flow.map((f, i) => (
              <li
                key={f.stage}
                className="relative flex items-start gap-5 rounded-xl border border-white/10 bg-navy-900/80 p-5"
              >
                <div className="grid h-10 w-10 flex-none place-items-center rounded-full border border-teal-400/30 bg-teal-500/10 font-mono text-body-sm font-semibold text-teal-300">
                  {i + 1}
                </div>
                <div>
                  <div className="text-body font-semibold text-white">{f.stage}</div>
                  <div className="mt-1 text-body-sm text-gray-400">{f.detail}</div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl">
          <SectionEyebrow>AI Engine</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            Models, not magic.
          </SectionHeading>
          <SectionSubtext tone="dark">
            Transformer-based NLP, gradient-boosted decision trees, and per-client fine-tuning —
            each applied where it wins.
          </SectionSubtext>
        </Container>
        <Container className="mt-12">
          <AIEngineDetail />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow>Security</SectionEyebrow>
          <SectionHeading size="h1" tone="dark">
            HIPAA, SOC 2, encrypted everywhere.
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
