import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { DashboardVisual } from "@/components/shared/DashboardVisual";
import { DataFlywheel } from "@/components/platform/DataFlywheel";
import { LayerStack } from "@/components/platform/LayerStack";
import { AIEngineDetail } from "@/components/platform/AIEngineDetail";
import { IntegrationGrid } from "@/components/platform/IntegrationGrid";
import { SecurityBadges } from "@/components/platform/SecurityBadges";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "PARCS Platform | AI-Powered Revenue Cycle Management",
  description:
    "Explore PARCS — a 5-layer AI revenue system with denial prediction, coding intelligence, and continuous learning. Integrates with 40+ EHR systems.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionEyebrow>PARCS Platform</SectionEyebrow>
            <SectionHeading size="hero" as="h1" tone="dark">
              A self-learning revenue system.
            </SectionHeading>
            <SectionSubtext tone="dark">
              PARCS continuously ingests, learns, predicts, and optimizes revenue across your entire
              healthcare operation. It&apos;s not a tool you use — it&apos;s a system that works for you.
            </SectionSubtext>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/demo" variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                Request Demo
              </ButtonLink>
              <ButtonLink href="/platform/architecture" variant="secondary" size="md">
                Architecture Deep-Dive
              </ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block">
            <DashboardVisual />
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionEyebrow tone="light">The Data Flywheel</SectionEyebrow>
            <SectionHeading size="h1" tone="light">
              Every claim makes PARCS smarter.
            </SectionHeading>
            <SectionSubtext tone="light">
              Ingest → Analyze → Predict → Execute → Learn. The loop closes with every encounter.
              Denials teach PARCS to prevent the next one. Payments teach it to catch the next
              underpayment. Your data, compounding.
            </SectionSubtext>
            <ul className="mt-8 flex flex-col gap-3 text-body-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                Continuous, per-client fine-tuning — not a generic model.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                Outcome-labeled training data from every claim you process.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[9px] h-1.5 w-1.5 flex-none rounded-full bg-blue-500" />
                Drift monitoring and rollback — safe iteration in production.
              </li>
            </ul>
          </div>
          <div>
            <DataFlywheel />
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container className="max-w-3xl text-center">
          <SectionEyebrow>Architecture</SectionEyebrow>
          <SectionHeading size="h1" tone="dark" className="mx-auto">
            Five layers. One revenue system.
          </SectionHeading>
          <SectionSubtext tone="dark" className="mx-auto">
            Every layer is built for healthcare revenue — and every layer talks to the others.
            Click a layer to expand the details.
          </SectionSubtext>
        </Container>
        <Container className="mt-12">
          <LayerStack />
          <div className="mt-10 text-center">
            <Link
              href="/platform/architecture"
              className="inline-flex items-center gap-2 text-body-sm font-semibold text-blue-300 hover:text-blue-300"
            >
              Full architecture deep-dive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container className="max-w-3xl">
          <SectionEyebrow tone="light">AI Engine</SectionEyebrow>
          <SectionHeading size="h1" tone="light">
            The AI behind PARCS.
          </SectionHeading>
          <SectionSubtext tone="light">
            Four capabilities, one engine. Every model is trained on real claims data and retrained
            continuously against real outcomes.
          </SectionSubtext>
        </Container>
        <Container className="mt-12">
          <AIEngineDetail />
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow>Integrations</SectionEyebrow>
            <SectionHeading size="h1" tone="dark">
              Connects to your entire stack.
            </SectionHeading>
            <SectionSubtext tone="dark">
              PARCS plugs into the systems you already run. No rip-and-replace — just revenue
              intelligence layered over your existing EHR, PMS, and clearinghouse.
            </SectionSubtext>
          </div>
          <div className="mt-12">
            <IntegrationGrid />
          </div>
          <div className="mt-8">
            <ButtonLink href="/platform/integrations" variant="secondary" size="sm">
              See all integrations →
            </ButtonLink>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="dark" className="bg-navy-900">
        <Container>
          <div className="max-w-3xl">
            <SectionEyebrow tone="light">Security &amp; Compliance</SectionEyebrow>
            <SectionHeading size="h1" tone="light">
              Enterprise-grade from day one.
            </SectionHeading>
            <SectionSubtext tone="light">
              Continuous monitoring, audit logging, and role-based access controls across every
              layer of the stack.
            </SectionSubtext>
          </div>
          <div className="mt-12">
            <SecurityBadges />
          </div>
        </Container>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
