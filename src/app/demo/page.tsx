import type { Metadata } from "next";
import { Clock, ShieldCheck, LineChart, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading, SectionSubtext } from "@/components/ui/SectionHeading";
import { DemoForm } from "@/components/demo/DemoForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Demo — VistecPartners PARCS",
  description:
    "See how PARCS reduces denials by 30%, drives 98.5% clean claim rates, and cuts AR days. A 30-minute demo tailored to your specialty and payer mix.",
  alternates: { canonical: "/demo" },
};

const expectations = [
  {
    icon: Clock,
    title: "30 minutes, no fluff",
    body: "A walkthrough of PARCS on a claim set that looks like yours — denial patterns, payer behavior, and the AI in action.",
  },
  {
    icon: LineChart,
    title: "Your numbers, modeled",
    body: "We pull together a denial-reduction and AR-days projection based on the specialty and payer mix you share.",
  },
  {
    icon: Users,
    title: "Talk to operators, not SDRs",
    body: "You meet a revenue strategist and a solutions engineer — both with ten-plus years in the trenches.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA from first click",
    body: "No PHI in the form. Any data you share during the demo lives in an encrypted, audited environment.",
  },
];

const trustPoints = [
  "SOC 2 Type II · HIPAA Compliant",
  "500+ providers · $500M+ collected",
  "Typical response within one business day",
];

export default function DemoPage() {
  return (
    <>
      <SectionWrapper variant="gradient" padding="lg" className="pt-24 md:pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Demo</SectionEyebrow>
            <SectionHeading size="hero" as="h1" tone="dark">
              See PARCS on your own data.
            </SectionHeading>
            <SectionSubtext tone="dark" className="mx-auto">
              Share a little about your revenue cycle and we&apos;ll walk you through the AI
              decisions, the execution layer, and the projected impact — on claims that look like
              yours.
            </SectionSubtext>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="light" padding="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="text-caption font-semibold uppercase tracking-widest text-blue-600">
                  What to expect
                </h2>
                <ul className="mt-6 flex flex-col gap-6">
                  {expectations.map((e) => {
                    const Icon = e.icon;
                    return (
                      <li key={e.title} className="flex gap-4">
                        <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div>
                          <h3 className="text-body font-semibold text-gray-900">{e.title}</h3>
                          <p className="mt-1 text-body-sm text-gray-600">{e.body}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="text-caption font-semibold uppercase tracking-widest text-gray-500">
                  Why teams trust us
                </div>
                <ul className="mt-4 flex flex-col gap-2">
                  {trustPoints.map((t) => (
                    <li key={t} className="text-body-sm text-gray-700">
                      · {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-gray-200 pt-4 text-caption text-gray-500">
                  Prefer email?{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    {SITE.email}
                  </a>
                  <br />
                  Or call {SITE.phone}.
                </div>
              </div>
            </div>
            <DemoForm />
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
